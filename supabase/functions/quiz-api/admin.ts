const dbUrl=Deno.env.get('SUPABASE_URL')!;
const serviceKey=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const adminEmail=(Deno.env.get('ADMIN_EMAIL')||'').trim().toLowerCase();
const encryptionSecret=Deno.env.get('CODE_ENCRYPTION_KEY')||'';
const encode=(bytes:Uint8Array)=>Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');
const decode=(hex:string)=>new Uint8Array(hex.match(/../g)!.map(x=>parseInt(x,16)));
export const hashCode=async(value:string)=>encode(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value))));
let encryptionKey:Promise<CryptoKey>;
function key(){
 if(!/^[a-f0-9]{64}$/i.test(encryptionSecret))throw new Error('密码管理尚未配置完成。');
 return encryptionKey||=crypto.subtle.importKey('raw',decode(encryptionSecret),{name:'AES-GCM'},false,['encrypt','decrypt']);
}
async function encrypt(value:string){const iv=crypto.getRandomValues(new Uint8Array(12));return encode(iv)+'.'+encode(new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},await key(),new TextEncoder().encode(value))));}
async function decrypt(value:string){const [iv,body]=value.split('.');return new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:decode(iv)},await key(),decode(body)));}
async function db(route:string,method='GET',body?:unknown,prefer='return=representation'){
 const response=await fetch(dbUrl+'/rest/v1/'+route,{method,headers:{apikey:serviceKey,Authorization:'Bearer '+serviceKey,'Content-Type':'application/json',Prefer:prefer},body:body===undefined?undefined:JSON.stringify(body)});
 if(!response.ok)throw new Error('密码数据库暂时不可用。');
 return response.status===204?null:response.json();
}
let legacyReady:Promise<void>|undefined;
export function ensureLegacyCodes(){
 return legacyReady||=(async()=>{
  const codes=(Deno.env.get('PONY_ACCESS_CODES')||'').split(',').map(x=>x.trim()).filter(Boolean);
  for(const code of codes)await db('pony_access_codes?on_conflict=code_hash','POST',{code_hash:await hashCode(code),code_cipher:await encrypt(code),code_preview:code.slice(0,5)+'…'+code.slice(-4),label:'原有测评密码',max_uses:1},'resolution=ignore-duplicates,return=representation');
 })().catch(error=>{legacyReady=undefined;throw error;});
}
async function auth(route:string,body:unknown){
 const response=await fetch(dbUrl+'/auth/v1/'+route,{method:'POST',headers:{apikey:serviceKey,'Content-Type':'application/json'},body:JSON.stringify(body)});
 const data=await response.json();
 if(!response.ok||!data.user?.email_confirmed_at||data.user.email?.toLowerCase()!==adminEmail)return null;
 return {access_token:data.access_token,refresh_token:data.refresh_token,expires_at:Math.floor(Date.now()/1000)+data.expires_in,email:data.user.email};
}
export async function handleAdmin(req:Request,route:string,body:any,send:(data:unknown,status?:number)=>Response){
 if(!adminEmail||!encryptionSecret)return send({error:'密码管理尚未配置完成。'},503);
 if(route==='/admin/login'&&req.method==='POST'){
  if(String(body.email||'').trim().toLowerCase()!==adminEmail||typeof body.password!=='string'||body.password.length>256)return send({error:'邮箱或登录密码不正确。'},401);
  const session=await auth('token?grant_type=password',{email:adminEmail,password:body.password});
  return session?send(session):send({error:'邮箱或登录密码不正确，请稍后重试。'},401);
 }
 if(route==='/admin/refresh'&&req.method==='POST'){
  if(typeof body.refresh_token!=='string'||body.refresh_token.length>4096)return send({error:'请重新登录。'},401);
  const session=await auth('token?grant_type=refresh_token',{refresh_token:body.refresh_token});
  return session?send(session):send({error:'登录已过期，请重新登录。'},401);
 }
 const bearer=req.headers.get('authorization')||'';
 if(!bearer.startsWith('Bearer ')||bearer.length>5000)return send({error:'请先登录管理员账号。'},401);
 const userResponse=await fetch(dbUrl+'/auth/v1/user',{headers:{apikey:serviceKey,Authorization:bearer}});
 const user=await userResponse.json();
 if(!userResponse.ok||!user.email_confirmed_at||user.email?.toLowerCase()!==adminEmail)return send({error:'管理员登录已失效。'},401);
 if(route==='/admin/logout'&&req.method==='POST'){
  await fetch(dbUrl+'/auth/v1/logout',{method:'POST',headers:{apikey:serviceKey,Authorization:bearer}});return send({ok:true});
 }
 await ensureLegacyCodes();
 if(route==='/admin/codes'&&req.method==='GET'){
  const page=Number(new URL(req.url).searchParams.get('page')||0);
  if(!Number.isInteger(page)||page<0||page>100000)return send({error:'页码无效。'},400);
  const rows=await db('pony_access_codes?select=*&order=created_at.desc,code_hash.asc&limit=51&offset='+page*50);
  const visible=rows.slice(0,50),hashes=visible.map((row:any)=>row.code_hash);
  const counters=hashes.length?await db('pony_code_uses?select=code_hash,used&code_hash=in.('+hashes.join(',')+')'):[];
  const counts=new Map(counters.map((r:any)=>[r.code_hash,r.used]));
  const codes=await Promise.all(visible.map(async(row:any)=>({id:row.code_hash,code:await decrypt(row.code_cipher),label:row.label,max_uses:row.max_uses,used:counts.get(row.code_hash)||0,enabled:row.enabled,expires_at:row.expires_at,created_at:row.created_at})));
  return send({codes,page,has_more:rows.length>50});
 }
 if(route==='/admin/codes'&&req.method==='POST'){
  const count=body.count??1,maxUses=1,label=String(body.label||'').trim();
  if(!Number.isInteger(count)||count<1||count>100||label.length>120||(body.max_uses!==undefined&&body.max_uses!==1))return send({error:'每批 1–100 个密码，每个密码仅限一次测评，备注不超过 120 字。'},400);
  const expires=body.expires_at?new Date(body.expires_at):null;
  if(expires&&(!Number.isFinite(expires.getTime())||expires.getTime()<=Date.now()))return send({error:'到期时间必须晚于现在。'},400);
  const rows=[],codes=[];
  for(let i=0;i<count;i++){
   const code='PONY-'+encode(crypto.getRandomValues(new Uint8Array(8))).toUpperCase();codes.push(code);
   rows.push({code_hash:await hashCode(code),code_cipher:await encrypt(code),code_preview:code.slice(0,5)+'…'+code.slice(-4),label,max_uses:maxUses,expires_at:expires?.toISOString()||null});
  }
  await db('pony_access_codes','POST',rows);
  return send({codes});
 }
 const change=route.match(/^\/admin\/codes\/([a-f0-9]{64})$/);
 if(change&&req.method==='POST'){
  const fields:Record<string,unknown>={};
  if(typeof body.enabled==='boolean')fields.enabled=body.enabled;
  if(body.label!==undefined){if(typeof body.label!=='string'||body.label.length>120)return send({error:'备注不超过 120 字。'},400);fields.label=body.label.trim();}
  if(body.max_uses!==undefined){if(body.max_uses!==1)return send({error:'每个密码仅限一次测评。'},400);fields.max_uses=1;}
  if(body.expires_at!==undefined){const date=body.expires_at===null?null:new Date(body.expires_at);if(date&&(!Number.isFinite(date.getTime())||date.getTime()<=Date.now()))return send({error:'到期时间必须晚于现在。'},400);fields.expires_at=date?.toISOString()||null;}
  if(!Object.keys(fields).length)return send({error:'没有可更新的内容。'},400);
  const rows=await db('pony_access_codes?code_hash=eq.'+change[1],'PATCH',fields);
  return rows.length?send({ok:true}):send({error:'没有找到密码。'},404);
 }
 return send({error:'接口不存在。'},404);
}
