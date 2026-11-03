import {scoreAnswers} from './quiz-data.js';
import {handleAdmin} from './admin.ts';
import {decrypt,hashCode} from './codes.ts';
import {replenishStock,pairLegacyCodes} from './bundles.ts';

const databaseUrl=Deno.env.get('SUPABASE_URL')!;
const serviceKey=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const allowedOrigins=(Deno.env.get('ALLOWED_ORIGINS')||'').split(',').map(x=>x.trim()).filter(Boolean);
const jsonHeaders={'Content-Type':'application/json','Cache-Control':'no-store'};
const hex=(bytes:Uint8Array)=>Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');
const random=()=>hex(crypto.getRandomValues(new Uint8Array(24)));
const hash=async(s:string)=>hex(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s))));

async function database(route:string,body?:unknown){
 const response=await fetch(databaseUrl+'/rest/v1/'+route,{method:body?'POST':'GET',headers:{apikey:serviceKey,Authorization:'Bearer '+serviceKey,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});
 if(!response.ok){console.error('Database request failed:',response.status);throw new Error('数据库暂时不可用，请稍后重试。');}
 return await response.json();
}
async function countCompleted(primary?:string){
 const query=new URLSearchParams({select:'id',limit:'1'});
 if(primary!==undefined)query.set('payload->>primary','eq.'+primary);
 const response=await fetch(databaseUrl+'/rest/v1/pony_results?'+query,{
  method:'HEAD',
  headers:{apikey:serviceKey,Authorization:'Bearer '+serviceKey,Prefer:'count=exact'}
 });
 const total=response.headers.get('Content-Range')?.match(/\/(\d+)$/)?.[1];
 if(!response.ok||total===undefined)throw new Error('Could not count completed assessments.');
 const count=Number(total);
 if(!Number.isSafeInteger(count))throw new Error('Invalid assessment count.');
 return count;
}
Deno.serve(async req=>{
 const origin=req.headers.get('origin');
 const cors={'Access-Control-Allow-Origin':origin&&allowedOrigins.includes(origin)?origin:'null','Vary':'Origin','Access-Control-Allow-Headers':'content-type,apikey,authorization','Access-Control-Allow-Methods':'GET,POST,OPTIONS'};
 const send=(data:unknown,status=200)=>new Response(JSON.stringify(data),{status,headers:{...jsonHeaders,...cors}});
 if(origin&&!allowedOrigins.includes(origin))return send({error:'此网站来源未获授权。'},403);
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
 if(!databaseUrl||!serviceKey||!allowedOrigins.length)return send({error:'云端服务尚未配置完成。'},503);
 const pathname=new URL(req.url).pathname;
 const route=pathname.slice(pathname.indexOf('/quiz-api')+'/quiz-api'.length);
 try{
  if(req.method==='GET'&&route==='/health')return send({ok:true});
  if(req.method==='GET'&&route==='/participation'){
   const primary=new URL(req.url).searchParams.get('primary');
   if(primary!==null&&!/^(0|[1-9]\d{0,2})$/.test(primary))return send({error:'角色编号无效。'},400);
   return send({count:await countCompleted(primary??undefined)});
  }
  if(req.method==='POST'&&route==='/internal/replenish'){
   const secret=Deno.env.get('STOCK_CRON_SECRET')||'',provided=(req.headers.get('authorization')||'').replace(/^Bearer /,'');
   if(secret.length<32||provided.length>256||await hashCode(provided)!==await hashCode(secret))return send({error:'未授权。'},401);
   await pairLegacyCodes();return send(await replenishStock());
  }
  if(route.startsWith('/admin/')){
   let adminBody={};
   if(req.method==='POST'){const text=await req.text();if(text.length>100000)return send({error:'请求过大。'},413);try{adminBody=JSON.parse(text);}catch{return send({error:'请求格式错误。'},400);}}
   return await handleAdmin(req,route,adminBody,send);
  }
  if(req.method==='GET'&&/^\/result\/[A-Za-z0-9_-]{1,100}$/.test(route)){
   const id=route.slice('/result/'.length);
   const rows=await database('pony_results?select=payload&id=eq.'+encodeURIComponent(id)+'&limit=1');
   return rows.length?send(rows[0].payload):send({error:'没有找到这份测评结果。'},404);
  }
  if(req.method!=='POST'||!['/start','/complete','/invitation'].includes(route))return send({error:'接口不存在。'},404);
  const text=await req.text();if(text.length>100000)return send({error:'请求过大。'},413);
  let body;try{body=JSON.parse(text);}catch{return send({error:'请求格式错误。'},400);}
  if(route==='/start'){
   const code=String(body.code||'').trim().toUpperCase();
   if(!/^[A-Z0-9-]{8,64}$/.test(code))return send({error:'请输入有效的测评密码或邀请码。'},400);
   const token=String(body.start_id||'');if(!/^[a-f0-9]{48}$/.test(token))return send({error:'请刷新页面后重新输入测评密码或邀请码。'},400);
   const result=await database('rpc/pony_start',{p_hash:await hashCode(code),p_token:token});
   return send(result,result.status||200);
  }
  const token=String(body.token||'');if(!/^[a-f0-9]{48}$/.test(token))return send({error:'测评会话已失效，请重新开始。'},401);
  if(route==='/invitation'){
   const resultId=String(body.result_id||'');
   if(!/^[A-Za-z0-9_-]{1,100}$/.test(resultId))return send({error:'请先完成测评。'},400);
   const sessions=await database('pony_sessions?select=code_hash&token=eq.'+token+'&result_id=eq.'+encodeURIComponent(resultId)+'&limit=1');
   const codeHash=sessions[0]?.code_hash;
   if(!/^[a-f0-9]{64}$/.test(codeHash||''))return send({error:'无法从当前结果领取邀请码，请查看原发货消息。'},403);
   const bundles=await database('pony_bundle_inventory?select=invite_cipher,invite_used,enabled,expires_at&purchase_id=eq.'+codeHash+'&limit=1');
   const bundle=bundles[0];
   if(!bundle)return send({code:null,message:'已复制测评入口。这次测评没有配套邀请码。'});
   if(!bundle.enabled||bundle.invite_used>0||(bundle.expires_at&&Date.parse(bundle.expires_at)<=Date.now())){
    return send({code:null,message:'已复制测评入口。配套邀请码已使用或已失效。'});
   }
   return send({code:await decrypt(bundle.invite_cipher)});
  }
  let result;try{result=scoreAnswers(body.result?.answers,body.result?.narrative);}catch(error){return send({error:(error as Error).message},400);}
  const saved=await database('rpc/pony_complete',{p_token:token,p_id:random(),p_result:result});
  return send(saved,saved.status||200);
 }catch(error){console.error('Quiz API error:',(error as Error).message);return send({error:'服务暂时不可用，请稍后重试。'},503);}
});
