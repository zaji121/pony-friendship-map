import assert from 'node:assert/strict';
import {webcrypto} from 'node:crypto';
globalThis.crypto??=webcrypto;
const env={SUPABASE_URL:'https://bundle-test.supabase.co',SUPABASE_SERVICE_ROLE_KEY:'test-service',CODE_ENCRYPTION_KEY:'12'.repeat(32),ADMIN_EMAIL:'admin@example.com',ALLOWED_ORIGINS:'https://example.com',STOCK_CRON_SECRET:'secret-'.repeat(10)};
let handler,captured;
globalThis.Deno={env:{get:k=>env[k]},serve:fn=>{handler=fn;}};
const requests=[];
globalThis.fetch=async(url,options={})=>{
 const route=new URL(url).pathname;requests.push({route,...options});
 if(route.endsWith('/pony_insert_bundles')){captured=JSON.parse(options.body);return Response.json({ids:captured.p_rows.map(r=>r.id),created:captured.p_rows.length});}
 if(route.endsWith('/pony_start'))return Response.json({token:JSON.parse(options.body).p_token});
 throw new Error('Unexpected database route '+route);
};
const codes=await import('../supabase/functions/quiz-api/codes.ts');
const bundles=await import('../supabase/functions/quiz-api/bundles.ts');
await bundles.provisionBundles(4,'test',null,false);
const clear=new Set();
for(const row of captured.p_rows){
 assert.match(row.id,/^[a-f0-9-]{36}$/);assert.equal(row.label,'test');
 for(const kind of ['purchase','invite']){
  const item=row[kind],value=await codes.decrypt(item.cipher);assert.match(value,kind==='purchase'?/^PONY-[A-F0-9]{24}$/:/^INVITE-[A-F0-9]{24}$/);
  assert.equal(item.hash,await codes.hashCode(value));assert(!item.cipher.includes(value));clear.add(value);
 }
}
assert.equal(clear.size,8);
const broken=captured.p_rows[0].purchase.cipher.slice(0,-4)+'0000';await assert.rejects(()=>codes.decrypt(broken));
await import('../supabase/functions/quiz-api/index.ts');
const post=(route,body={},headers={})=>handler(new Request('https://bundle-test.supabase.co/functions/v1/quiz-api'+route,{method:'POST',headers:{'Content-Type':'application/json',...headers},body:JSON.stringify(body)}));
assert.equal((await post('/start',{})).status,400);
assert.equal((await post('/admin/bundles',{count:1})).status,401);
assert.equal((await post('/internal/replenish',{})).status,401);
const startId='ab'.repeat(24),answer=await post('/start',{code:'  invite-1234567890abcdef12345678  ',start_id:startId});
assert.equal(answer.status,200);assert.equal((await answer.json()).token,startId);
const last=requests.at(-1);assert(last.route.endsWith('/pony_start'));
assert.deepEqual(JSON.parse(last.body),{p_hash:await codes.hashCode('INVITE-1234567890ABCDEF12345678'),p_token:startId});
assert(!requests.some(r=>r.route.endsWith('/pony_start_public')));
const fs=await import('node:fs');const vm=await import('node:vm');const context={window:{}};vm.runInNewContext(fs.readFileSync('public/code-delivery.js','utf8'),context);
const records=[{id:'group-1',purchase:'PONY-ONE',invite:'INVITE-ONE',message:'欢迎\n密码：PONY-ONE\n赠送邀请码：INVITE-ONE'},{id:'group-2',purchase:'PONY-TWO',invite:'INVITE-TWO',message:'引号"与逗号,仍完整'}];
const csv=context.window.PONY_DELIVERY.csv(records),txt=context.window.PONY_DELIVERY.txt(records);
assert(csv.startsWith('\ufeff'));assert(csv.includes('引号""与逗号,仍完整'));assert.equal(txt.split('\r\n').length,2);assert(txt.includes('INVITE-TWO'));assert(!txt.includes('undefined'));
console.log('Passed: independent encrypted purchase/invitation pairs, authenticated inventory endpoints, voucher-only start, stable retry token, and paired CSV/TXT delivery formatting.');
