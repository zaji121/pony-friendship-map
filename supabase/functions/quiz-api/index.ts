import {scoreAnswers} from './quiz-data.js';

const databaseUrl=Deno.env.get('SUPABASE_URL')!;
const serviceKey=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const allowedOrigins=(Deno.env.get('ALLOWED_ORIGINS')||'').split(',').map(x=>x.trim()).filter(Boolean);
const accessCodes=(Deno.env.get('PONY_ACCESS_CODES')||'').split(',').map(x=>x.trim()).filter(Boolean);
const jsonHeaders={'Content-Type':'application/json','Cache-Control':'no-store'};
const hex=(bytes:Uint8Array)=>Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');
const random=()=>hex(crypto.getRandomValues(new Uint8Array(24)));
const hash=async(s:string)=>hex(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s))));
const hashes=Promise.all(accessCodes.map(hash));
const equal=(a:string,b:string)=>{let diff=a.length^b.length;for(let i=0;i<a.length;i++)diff|=a.charCodeAt(i)^(b.charCodeAt(i)||0);return diff===0;};

async function database(route:string,body?:unknown){
 const response=await fetch(databaseUrl+'/rest/v1/'+route,{method:body?'POST':'GET',headers:{apikey:serviceKey,Authorization:'Bearer '+serviceKey,'Content-Type':'application/json'},body:body?JSON.stringify(body):undefined});
 if(!response.ok){console.error('Database request failed:',response.status);throw new Error('数据库暂时不可用，请稍后重试。');}
 return await response.json();
}
Deno.serve(async req=>{
 const origin=req.headers.get('origin');
 const cors={'Access-Control-Allow-Origin':origin&&allowedOrigins.includes(origin)?origin:'null','Vary':'Origin','Access-Control-Allow-Headers':'content-type,apikey','Access-Control-Allow-Methods':'GET,POST,OPTIONS'};
 const send=(data:unknown,status=200)=>new Response(JSON.stringify(data),{status,headers:{...jsonHeaders,...cors}});
 if(origin&&!allowedOrigins.includes(origin))return send({error:'此网站来源未获授权。'},403);
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
 if(!databaseUrl||!serviceKey||!accessCodes.length||!allowedOrigins.length)return send({error:'云端服务尚未配置完成。'},503);
 const pathname=new URL(req.url).pathname;
 const route=pathname.slice(pathname.indexOf('/quiz-api')+'/quiz-api'.length);
 try{
  if(req.method==='GET'&&route==='/health')return send({ok:true});
  if(req.method==='GET'&&/^\/result\/[A-Za-z0-9_-]{1,100}$/.test(route)){
   const id=route.slice('/result/'.length);
   const rows=await database('pony_results?select=payload&id=eq.'+encodeURIComponent(id)+'&limit=1');
   return rows.length?send(rows[0].payload):send({error:'没有找到这份测评结果。'},404);
  }
  if(req.method!=='POST'||!['/start','/complete'].includes(route))return send({error:'接口不存在。'},404);
  const text=await req.text();if(text.length>100000)return send({error:'请求过大。'},413);
  let body;try{body=JSON.parse(text);}catch{return send({error:'请求格式错误。'},400);}
  if(route==='/start'){
   const code=String(body.code||'').trim();if(code.length>256)return send({error:'密码不正确，请检查后重试。'},401);
   const digest=await hash(code);
   if(!(await hashes).some(known=>equal(digest,known)))return send({error:'密码不正确，请检查后重试。'},401);
   const result=await database('rpc/pony_start',{p_hash:digest,p_token:random()});
   return send(result,result.status||200);
  }
  const token=String(body.token||'');if(!/^[a-f0-9]{48}$/.test(token))return send({error:'测评会话已失效，请重新输入密码。'},401);
  let result;try{result=scoreAnswers(body.result?.answers);}catch(error){return send({error:(error as Error).message},400);}
  const saved=await database('rpc/pony_complete',{p_token:token,p_id:random(),p_result:result});
  return send(saved,saved.status||200);
 }catch(error){console.error('Quiz API error:',(error as Error).message);return send({error:'服务暂时不可用，请稍后重试。'},503);}
});
