import {db,encode,hashCode,encrypt,decrypt} from './codes.ts';
export const siteUrl='https://zaji121.github.io/pony-friendship-map/';
export const deliveryMessage=(purchase:string,invite:string)=>`欢迎来到小马谷！\n测评密码：${purchase}\n赠送邀请码：${invite}\n测评入口：${siteUrl}\n密码和邀请码各可使用一次。把邀请码送给朋友，一起看看你们的友谊魔法。`;
async function makeCode(prefix:string){const code=prefix+'-'+encode(crypto.getRandomValues(new Uint8Array(12))).toUpperCase();return {hash:await hashCode(code),cipher:await encrypt(code),preview:code.slice(0,6)+'…'+code.slice(-4)};}
export async function provisionBundles(count:number,label:string,expires:string|null=null,refill=false){
 const records=[];
 for(let i=0;i<count;i++)records.push({id:crypto.randomUUID(),label,expires_at:expires,purchase:await makeCode('PONY'),invite:await makeCode('INVITE')});
 return db('rpc/pony_insert_bundles','POST',{p_rows:records,p_refill:refill});
}
export async function replenishStock(){
 const stats=await db('rpc/pony_bundle_stats','POST',{});
 if(!stats.settings.auto_replenish||stats.ready>=stats.settings.low_stock)return {created:0,stock:stats.ready};
 return provisionBundles(stats.settings.target_stock-stats.ready,'自动补货',null,true);
}
export async function pairLegacyCodes(){
 const rows=await db('pony_access_codes?select=code_hash&bundle_id=is.null&limit=100');
 for(const row of rows)await db('rpc/pony_pair_legacy','POST',{p_hash:row.code_hash,p_id:crypto.randomUUID(),p_invite:await makeCode('INVITE')});
 return rows.length;
}
export async function bundleRows(ids?:string[],page=0,filter='all'){
 let route='pony_bundle_inventory?select=*&order=created_at.desc,id.asc';
 if(ids){if(!ids.length)return [];route+='&id=in.('+ids.join(',')+')';}
 else route+='&limit=51&offset='+page*50+(filter==='ready'?'&ready=eq.true':filter==='issued'?'&issued_at=not.is.null':filter==='used'?'&or=(purchase_used.gt.0,invite_used.gt.0)':'');
 const rows=await db(route);
 return Promise.all(rows.map(async(row:any)=>{
  const purchase=await decrypt(row.purchase_cipher),invite=await decrypt(row.invite_cipher);
  const {purchase_cipher,invite_cipher,...safe}=row;
  return {...safe,purchase,invite,message:deliveryMessage(purchase,invite)};
 }));
}
export async function handleBundles(route:string,req:Request,body:any,send:(data:unknown,status?:number)=>Response){
 const delivery=route.match(/^\/admin\/bundles\/([a-f0-9-]{36})\/delivery$/i);
 if(delivery&&req.method==='POST'){
  const issued=await db('rpc/pony_issue_bundle','POST',{p_id:delivery[1]});
  if(issued.error)return send(issued,issued.status||404);
  const bundles=await bundleRows([delivery[1]]);await replenishStock();return send({bundle:bundles[0]});
 }
 if(route==='/admin/bundles'&&req.method==='GET'){
  const params=new URL(req.url).searchParams,page=Number(params.get('page')||0),filter=params.get('filter')||'all';
  if(!Number.isInteger(page)||page<0||page>100000||!['all','ready','issued','used'].includes(filter))return send({error:'列表参数无效。'},400);
  await pairLegacyCodes();await replenishStock();
  const rows=await bundleRows(undefined,page,filter),stats=await db('rpc/pony_bundle_stats','POST',{});
  const exports=await db('pony_code_exports?select=id,created_at,bundle_ids&order=created_at.desc&limit=10');
  return send({bundles:rows.slice(0,50),has_more:rows.length>50,stats,exports:exports.map((r:any)=>({id:r.id,created_at:r.created_at,count:r.bundle_ids.length}))});
 }
 if((route==='/admin/bundles'||route==='/admin/codes')&&req.method==='POST'){
  const count=body.count??1,label=String(body.label||'').trim(),expires=body.expires_at?new Date(body.expires_at):null;
  if(!Number.isInteger(count)||count<1||count>100||label.length>120||(body.max_uses!==undefined&&body.max_uses!==1))return send({error:'每批 1–100 组，密码和邀请码各限用一次，备注不超过 120 字。'},400);
  if(expires&&(!Number.isFinite(expires.getTime())||expires.getTime()<=Date.now()))return send({error:'到期时间必须晚于现在。'},400);
  const created=await provisionBundles(count,label,expires?.toISOString()||null),bundles=await bundleRows(created.ids);
  return send({bundles,codes:bundles.map((b:any)=>b.purchase)});
 }
 if(route==='/admin/exports'&&req.method==='POST'){
  if(!/^[a-f0-9-]{36}$/i.test(body.request_id||'')||!Number.isInteger(body.count)||body.count<1||body.count>100)return send({error:'请选择 1–100 组并重试。'},400);
  await replenishStock();
  const reserved=await db('rpc/pony_export_bundles','POST',{p_id:body.request_id,p_count:body.count});
  if(reserved.error)return send(reserved,reserved.status||409);
  const bundles=await bundleRows(reserved.ids);await replenishStock();
  return send({export_id:reserved.export_id,bundles});
 }
 const exported=route.match(/^\/admin\/exports\/([a-f0-9-]{36})$/i);
 if(exported&&req.method==='GET'){
  const rows=await db('pony_code_exports?select=bundle_ids&id=eq.'+exported[1]+'&limit=1');
  return rows.length?send({export_id:exported[1],bundles:await bundleRows(rows[0].bundle_ids)}):send({error:'没有找到这次导出。'},404);
 }
 if(route==='/admin/stock-settings'&&req.method==='POST'){
  if(typeof body.auto_replenish!=='boolean'||!Number.isInteger(body.low_stock)||!Number.isInteger(body.target_stock)||body.low_stock<1||body.target_stock>100||body.target_stock<body.low_stock)return send({error:'补货阈值与目标库存须为 1–100，且目标不能小于阈值。'},400);
  await db('pony_code_settings?id=eq.true','PATCH',{auto_replenish:body.auto_replenish,low_stock:body.low_stock,target_stock:body.target_stock});await replenishStock();return send({ok:true});
 }
 const change=route.match(/^\/admin\/bundles\/([a-f0-9-]{36})$/i);
 if(change&&req.method==='POST'){
  const fields:Record<string,unknown>={};
  if(typeof body.enabled==='boolean')fields.enabled=body.enabled;
  if(body.label!==undefined){if(typeof body.label!=='string'||body.label.length>120)return send({error:'备注不超过 120 字。'},400);fields.label=body.label.trim();}
  if(body.expires_at!==undefined){const d=body.expires_at===null?null:new Date(body.expires_at);if(d&&(!Number.isFinite(d.getTime())||d.getTime()<=Date.now()))return send({error:'到期时间必须晚于现在。'},400);fields.expires_at=d?.toISOString()||null;}
  if(!Object.keys(fields).length)return send({error:'没有可更新的内容。'},400);
  const rows=await db('pony_access_codes?bundle_id=eq.'+change[1],'PATCH',fields);return rows.length?send({ok:true}):send({error:'没有找到这组密码。'},404);
 }
 return null;
}
