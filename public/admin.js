(()=>{
'use strict';
const $=id=>document.getElementById(id),apiBase=window.SITE_CONFIG?.apiBase;
let session;try{session=JSON.parse(sessionStorage.getItem('ponyAdmin')||'null');}catch{session=null;}
let page=0,rows=[],editing=null,busy=false;
const save=value=>{session=value;if(value)sessionStorage.setItem('ponyAdmin',JSON.stringify(value));else{sessionStorage.removeItem('ponyAdmin');rows=[];$('codes').replaceChildren();$('new-codes').value='';$('generated').hidden=true;}};
const notice=(text,error=false)=>{$('notice').textContent=text;$('notice').classList.toggle('error',error);};
function show(){const logged=!!session;$('login-panel').hidden=logged;$('dashboard').hidden=!logged;$('logout').hidden=!logged;}
async function request(route,body,retry=true){
 if(!apiBase)throw new Error('管理页尚未连接云端服务。');
 const response=await fetch(apiBase+route,{method:body===undefined?'GET':'POST',headers:{'Content-Type':'application/json',...(session?{Authorization:'Bearer '+session.access_token}:{})},body:body===undefined?undefined:JSON.stringify(body)});
 const data=await response.json();
 if(response.status===401&&session&&retry&&!['/admin/login','/admin/refresh'].includes(route)){
  try{const renewed=await request('/admin/refresh',{refresh_token:session.refresh_token},false);save(renewed);return await request(route,body,false);}catch{save(null);show();throw new Error('登录已过期，请重新登录。');}
 }
 if(!response.ok)throw new Error(data.error||'操作失败，请稍后重试。');return data;
}
function status(row){if(!row.enabled)return ['已停用',true];if(row.expires_at&&new Date(row.expires_at)<=new Date())return ['已过期',true];if(row.used>=row.max_uses)return ['已使用',true];return ['可使用',false];}
const date=value=>value?new Date(value).toLocaleString('zh-CN',{hour12:false}):'长期有效';
const localDate=value=>{if(!value)return '';const d=new Date(value);return new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,16);};
function button(label,action){const b=document.createElement('button');b.type='button';b.className='quiet';b.textContent=label;b.onclick=async()=>{b.disabled=true;try{await action();}catch(error){notice(error.message,true);}finally{b.disabled=false;}};return b;}
async function copy(text){await navigator.clipboard.writeText(text);notice('已复制。');}
function render(){
 $('codes').replaceChildren();
 if(!rows.length){const tr=document.createElement('tr'),td=document.createElement('td');td.colSpan=5;td.textContent='还没有密码，可以在上方生成。';tr.append(td);$('codes').append(tr);}
 for(const row of rows){
  const tr=document.createElement('tr'),info=document.createElement('td'),code=document.createElement('code'),label=document.createElement('small');code.textContent=row.code;label.textContent=row.label||'无备注';info.append(code,label);
  const uses=document.createElement('td');uses.textContent='已用 '+row.used+' · 剩余 '+Math.max(0,row.max_uses-row.used);
  const state=document.createElement('td'),badge=document.createElement('span'),[name,off]=status(row);badge.className='badge'+(off?' off':'');badge.textContent=name;state.append(badge);
  const expires=document.createElement('td');expires.textContent=date(row.expires_at);
  const actions=document.createElement('td');actions.append(button('复制',()=>copy(row.code)),button('编辑',()=>{editing=row;$('edit-label').value=row.label;$('edit-expires').value=localDate(row.expires_at);$('edit-dialog').showModal();}),button(row.enabled?'停用':'启用',async()=>{await request('/admin/codes/'+row.id,{enabled:!row.enabled});await load();notice(row.enabled?'密码已停用。':'密码已启用，已使用的机会不会恢复。');}));
  tr.append(info,uses,state,expires,actions);$('codes').append(tr);
 }
 $('page-label').textContent='第 '+(page+1)+' 页';$('previous').disabled=page===0;$('updated').textContent='更新于 '+new Date().toLocaleTimeString('zh-CN',{hour12:false});
}
async function load(){if(!session||busy)return;busy=true;try{const data=await request('/admin/codes?page='+page);rows=data.codes;$('next').disabled=!data.has_more;render();}finally{busy=false;}}
$('login-form').onsubmit=async event=>{event.preventDefault();const b=event.submitter;b.disabled=true;try{save(await request('/admin/login',{email:$('email').value.trim(),password:$('password').value}));$('password').value='';show();await load();notice('已登录。');}catch(error){notice(error.message,true);}finally{b.disabled=false;}};
$('logout').onclick=async()=>{try{await request('/admin/logout',{});}catch{}save(null);show();notice('已退出登录。');};
$('generate-form').onsubmit=async event=>{event.preventDefault();const b=event.submitter;b.disabled=true;try{const expiry=$('expires').value;const data=await request('/admin/codes',{count:Number($('count').value),label:$('label').value,expires_at:expiry?new Date(expiry).toISOString():null});$('new-codes').value=data.codes.join('\n');$('generated').hidden=false;page=0;await load();notice('已生成 '+data.codes.length+' 个一次性密码，立即生效。');}catch(error){notice(error.message,true);}finally{b.disabled=false;}};
$('copy-new').onclick=()=>copy($('new-codes').value).catch(error=>notice(error.message,true));
$('download-new').onclick=()=>{const url=URL.createObjectURL(new Blob([$('new-codes').value],{type:'text/plain;charset=utf-8'})),link=document.createElement('a');link.href=url;link.download='小马谷一次性密码-'+new Date().toISOString().slice(0,10)+'.txt';link.click();URL.revokeObjectURL(url);};
$('refresh').onclick=()=>load().catch(error=>notice(error.message,true));$('previous').onclick=()=>{page--;load().catch(error=>notice(error.message,true));};$('next').onclick=()=>{page++;load().catch(error=>notice(error.message,true));};
$('edit-cancel').onclick=()=>$('edit-dialog').close();
$('edit-form').onsubmit=async event=>{event.preventDefault();const b=event.submitter;b.disabled=true;try{const expiry=$('edit-expires').value;await request('/admin/codes/'+editing.id,{label:$('edit-label').value,expires_at:expiry?new Date(expiry).toISOString():null});$('edit-dialog').close();await load();notice('修改已保存，立即生效。');}catch(error){notice(error.message,true);}finally{b.disabled=false;}};
setInterval(()=>{if(!document.hidden)load().catch(error=>notice(error.message,true));},15000);window.addEventListener('focus',()=>load().catch(error=>notice(error.message,true)));
show();if(session)load().catch(error=>notice(error.message,true));
})();
