(()=>{
'use strict';
const $=id=>document.getElementById(id),apiBase=window.SITE_CONFIG?.apiBase;
let session;try{session=JSON.parse(sessionStorage.getItem('ponyAdmin')||'null');}catch{session=null;}
let page=0,rows=[],editing=null,busy=false,exported=null,settingsLoaded=false,pendingExport;
try{pendingExport=JSON.parse(sessionStorage.getItem('ponyExportPending')||'null');if(pendingExport)$('export-count').value=pendingExport.count;}catch{}
const notice=(text,error=false)=>{$('notice').textContent=text;$('notice').classList.toggle('error',error);};
const save=value=>{session=value;if(value)sessionStorage.setItem('ponyAdmin',JSON.stringify(value));else{sessionStorage.removeItem('ponyAdmin');sessionStorage.removeItem('ponyExportPending');rows=[];exported=null;pendingExport=null;$('codes').replaceChildren();$('exports').replaceChildren();$('delivery-preview').value='';$('export-result').hidden=true;}};
function show(){const logged=!!session;$('login-panel').hidden=logged;$('dashboard').hidden=!logged;$('logout').hidden=!logged;}
async function request(route,body,retry=true){
 if(!apiBase)throw new Error('管理页尚未连接云端服务。');
 const response=await fetch(apiBase+route,{method:body===undefined?'GET':'POST',headers:{'Content-Type':'application/json',...(session?{Authorization:'Bearer '+session.access_token}:{})},body:body===undefined?undefined:JSON.stringify(body)});
 const data=await response.json();
 if(response.status===401&&session&&retry&&!['/admin/login','/admin/refresh'].includes(route)){
  try{const renewed=await request('/admin/refresh',{refresh_token:session.refresh_token},false);save(renewed);return await request(route,body,false);}catch{save(null);show();throw new Error('登录已过期，请重新登录。');}
 }
 if(!response.ok){const error=new Error(data.error||'操作失败，请稍后重试。');error.status=response.status;throw error;}return data;
}
const date=value=>value?new Date(value).toLocaleString('zh-CN',{hour12:false}):'长期有效';
const localDate=value=>{if(!value)return '';const d=new Date(value);return new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,16);};
function button(label,action){const b=document.createElement('button');b.type='button';b.className='quiet';b.textContent=label;b.onclick=async()=>{b.disabled=true;try{await action();}catch(error){notice(error.message,true);}finally{b.disabled=false;}};return b;}
function text(tag,value,cls=''){const el=document.createElement(tag);el.textContent=value;el.className=cls;return el;}
async function copy(value){try{await navigator.clipboard.writeText(value);notice('发货内容已复制，包含测评密码和赠送邀请码。');}catch{$('export-result').hidden=false;$('delivery-preview').value=value;$('delivery-preview').focus();$('delivery-preview').select();notice('浏览器未允许复制，已选中下方发货内容，请手动复制。');}}
function showExport(data){exported=data;$('export-result').hidden=false;$('export-caption').textContent='本批 '+data.bundles.length+' 组 · 批次 '+data.export_id;$('delivery-preview').value=data.bundles[0]?.message||'';$('export-result').scrollIntoView({block:'nearest'});}
function render(data){
 rows=data.bundles;$('codes').replaceChildren();
 if(!rows.length){const tr=document.createElement('tr'),td=text('td','当前筛选条件下没有记录。');td.colSpan=5;tr.append(td);$('codes').append(tr);}
 for(const row of rows){
  const tr=document.createElement('tr'),info=document.createElement('td');
  info.append(text('small','测评密码'),text('code',row.purchase),text('small','赠送邀请码'),text('code',row.invite),text('small',row.label||'无备注'));
  const uses=document.createElement('td');uses.append(text('span','密码：'+(row.purchase_used?'已使用':'未使用')),text('small',row.purchase_redeemed_at?date(row.purchase_redeemed_at):''),text('span','邀请码：'+(row.invite_used?'已使用':'未使用')),text('small',row.invite_redeemed_at?date(row.invite_redeemed_at):''));
  const off=!row.enabled||(row.expires_at&&new Date(row.expires_at)<=new Date());
  const state=document.createElement('td');state.append(text('span',!row.enabled?'已停用':off?'已过期':row.ready?'待发货':'已领取发货','badge'+(off?' off':'')));if(row.issued_at)state.append(text('small',date(row.issued_at)));
  const expiry=text('td',date(row.expires_at)),actions=document.createElement('td');
  actions.append(button(row.ready?'领取并复制发货':'复制原发货内容',async()=>{const data=await request('/admin/bundles/'+row.id+'/delivery',{});await copy(data.bundle.message);await load();}),button('编辑',()=>{editing=row;$('edit-label').value=row.label;$('edit-expires').value=localDate(row.expires_at);$('edit-dialog').showModal();}),button(row.enabled?'停用整组':'启用整组',async()=>{await request('/admin/bundles/'+row.id,{enabled:!row.enabled});await load();notice(row.enabled?'整组已停用。':'整组已启用，已使用的机会不会恢复。');}));
  tr.append(info,uses,state,expiry,actions);$('codes').append(tr);
 }
 const stats=data.stats;$('stock-summary').replaceChildren();for(const [name,key] of [['待发货组数','ready'],['已领取发货','issued'],['密码已使用','purchase_used'],['邀请码已使用','invite_used']]){const card=document.createElement('div');card.append(text('strong',stats[key]),text('span',name));$('stock-summary').append(card);}
 if(!settingsLoaded||!document.activeElement?.closest('#stock-form')){$('auto-replenish').checked=stats.settings.auto_replenish;$('low-stock').value=stats.settings.low_stock;$('target-stock').value=stats.settings.target_stock;settingsLoaded=true;}
 $('exports').replaceChildren();for(const batch of data.exports){const item=document.createElement('div');item.append(text('span',date(batch.created_at)+' · '+batch.count+' 组'),button('重新下载',async()=>showExport(await request('/admin/exports/'+batch.id))));$('exports').append(item);}if(!data.exports.length)$('exports').append(text('p','暂无导出记录。','hint'));
 $('next').disabled=!data.has_more;$('page-label').textContent='第 '+(page+1)+' 页';$('previous').disabled=page===0;$('updated').textContent='更新于 '+new Date().toLocaleTimeString('zh-CN',{hour12:false});
}
async function load(){if(!session||busy)return;busy=true;try{render(await request('/admin/bundles?page='+page+'&filter='+$('filter').value));}finally{busy=false;}}
$('login-form').onsubmit=async e=>{e.preventDefault();const b=e.submitter;b.disabled=true;try{save(await request('/admin/login',{email:$('email').value.trim(),password:$('password').value}));$('password').value='';show();await load();notice('已登录。');}catch(err){notice(err.message,true);}finally{b.disabled=false;}};
$('logout').onclick=async()=>{try{await request('/admin/logout',{});}catch{}save(null);show();notice('已退出登录。');};
$('generate-form').onsubmit=async e=>{e.preventDefault();const b=e.submitter;b.disabled=true;try{const expiry=$('expires').value,data=await request('/admin/bundles',{count:Number($('count').value),label:$('label').value,expires_at:expiry?new Date(expiry).toISOString():null});page=0;await load();notice('已生成 '+data.bundles.length+' 组，加入待发货库存。');}catch(err){notice(err.message,true);}finally{b.disabled=false;}};
$('export-form').onsubmit=async e=>{e.preventDefault();const b=e.submitter;b.disabled=true;try{pendingExport||={request_id:crypto.randomUUID(),count:Number($('export-count').value)};sessionStorage.setItem('ponyExportPending',JSON.stringify(pendingExport));const data=await request('/admin/exports',pendingExport);pendingExport=null;sessionStorage.removeItem('ponyExportPending');showExport(data);await load();notice('发货码已领取，请选择下载格式；导出记录可再次下载。');}catch(err){if(err.status>=400&&err.status<500){pendingExport=null;sessionStorage.removeItem('ponyExportPending');notice(err.message,true);}else notice(err.message+' 重试将恢复同一次领取，不会重复分配。',true);}finally{b.disabled=false;}};
function download(kind){if(!exported)return;const content=window.PONY_DELIVERY[kind](exported.bundles),url=URL.createObjectURL(new Blob([content],{type:kind==='csv'?'text/csv;charset=utf-8':'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='小马谷买一送一-'+exported.export_id+'.'+kind;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notice('已发起文件下载，请在浏览器下载记录或“文件”中查看。');}
$('download-csv').onclick=()=>download('csv');$('download-txt').onclick=()=>download('txt');
$('stock-form').onsubmit=async e=>{e.preventDefault();const b=e.submitter;b.disabled=true;try{await request('/admin/stock-settings',{auto_replenish:$('auto-replenish').checked,low_stock:Number($('low-stock').value),target_stock:Number($('target-stock').value)});await load();notice('补货设置已保存。');}catch(err){notice(err.message,true);}finally{b.disabled=false;}};
$('refresh').onclick=()=>load().catch(err=>notice(err.message,true));$('previous').onclick=()=>{page--;load().catch(err=>notice(err.message,true));};$('next').onclick=()=>{page++;load().catch(err=>notice(err.message,true));};$('filter').onchange=()=>{page=0;load().catch(err=>notice(err.message,true));};
$('edit-cancel').onclick=()=>$('edit-dialog').close();$('edit-form').onsubmit=async e=>{e.preventDefault();const b=e.submitter;b.disabled=true;try{await request('/admin/bundles/'+editing.id,{label:$('edit-label').value,expires_at:$('edit-expires').value?new Date($('edit-expires').value).toISOString():null});$('edit-dialog').close();await load();notice('整组修改已保存。');}catch(err){notice(err.message,true);}finally{b.disabled=false;}};
setInterval(()=>{if(!document.hidden)load().catch(err=>notice(err.message,true));},15000);window.addEventListener('focus',()=>load().catch(err=>notice(err.message,true)));
show();if(session)load().catch(err=>notice(err.message,true));
})();