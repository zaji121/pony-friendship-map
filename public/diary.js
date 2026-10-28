(() => {
 'use strict';
 const $=id=>document.getElementById(id),base=()=>window.SITE_CONFIG?.basePath||'/';
 let context=null,current=null,busy=false,capabilities={textReady:false,imageReady:false},dbPromise;
 const scenes={picnic:['草地上的小聚','把今天的好时光，留在小马谷。'],rain:['雨也有自己的节奏','计划变了一点，故事仍然继续。'],cafe:['点心与慢慢聊','把想说的话，留给这段闲暇。'],night:['星光下的一页','今天的故事，值得被轻轻记住。']};
 function asset(p){return p.startsWith(base())?p:base()+p.replace(/^\//,'');}
 function roles(){return window.DIARY_ROLES||[];}
 function say(text){$('diary-status').textContent=text;}
 function database(){return dbPromise||=(new Promise((resolve,reject)=>{const r=indexedDB.open('pony-private-diary',1);r.onupgradeneeded=()=>r.result.createObjectStore('cards',{keyPath:'id'});r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(Error('浏览器无法保存，请直接下载图片。'));}));}
 async function storage(method,value){const db=await database();return new Promise((resolve,reject)=>{const tx=db.transaction('cards',method==='getAll'?'readonly':'readwrite'),s=tx.objectStore('cards');let result;const r=method==='getAll'?s.getAll():s[method](value);r.onsuccess=()=>{result=r.result;};tx.oncomplete=()=>resolve(result);tx.onerror=()=>reject(Error('保存失败，可能是浏览器存储空间不足，请直接下载。'));});}
 function init(){
  const mount=$('diary-mount');if(!mount)return;
  mount.innerHTML=`<section class="diary-section" aria-labelledby="diary-heading"><div class="diary-heading"><div><p class="eyebrow">A LITTLE DAY IN PONYVILLE</p><h2 id="diary-heading">我的小马谷日记</h2><p>今天的小事，也能变成一张专属纪念卡。</p></div><span class="diary-pill">私密日记 · 自己保存</span></div><div class="diary-layout"><form id="diary-form" class="diary-editor"><label for="diary-note">今天发生了什么？</label><textarea id="diary-note" maxlength="400" rows="4" placeholder="比如：今天和朋友去郊游，下雨后我们躲进凉亭，一起吃带来的点心。" required></textarea><div class="diary-row"><label>故事主角<select id="diary-role"></select></label><label>一起出现的伙伴<select id="diary-friend"><option value="">只有我自己</option></select></label></div><p id="diary-origin" class="diary-small"></p><fieldset class="diary-scenes"><legend>卡片场景</legend>${Object.entries(scenes).map(([k,v],i)=>`<label><input type="radio" name="diary-scene" value="${k}" ${i===0?'checked':''}>${v[0]}</label>`).join('')}</fieldset><button type="submit" class="button button-primary">制作我的体验卡 ✦</button><details class="diary-ai"><summary>国内开源 AI 创作</summary><p id="diary-ai-info">正在检查生成服务…</p><label><input id="diary-consent" type="checkbox"> 我同意将这段日记、所选角色和测评中的行动摘要发送给已配置的 AI 服务。请勿填写姓名、电话等私密信息。</label><label><input id="diary-image-ai" type="checkbox"> 同时生成独特的 2D 场景背景</label><button id="diary-ai-button" type="button" class="button button-secondary" disabled>AI 创作卡片</button></details><p class="diary-small">体验卡在设备上排版，不是 AI 生成。保存仅存入当前浏览器；换设备、无痕模式或清理数据后无法找回，请下载备份。</p></form><div class="diary-preview"><div id="diary-placeholder"><span>✦</span><h3>把今天，装进一张卡片</h3><p>先写下经历，再选择一位陪伴你的伙伴。</p><button id="diary-example" class="button button-secondary" type="button">试试「雨后郊游」</button></div><canvas id="diary-canvas" width="1080" height="1440" hidden aria-label="日记卡片预览"></canvas><div id="diary-edit-copy" hidden><label>卡片标题<input id="diary-title" maxlength="18"></label><label>卡片文字<textarea id="diary-caption" maxlength="160" rows="3"></textarea></label><button id="diary-update" type="button" class="button button-quiet">更新卡片文字</button></div><div class="diary-actions"><button id="diary-save" type="button" class="button button-secondary" disabled>保存到我的日记</button><button id="diary-download" type="button" class="button button-primary" disabled>下载图片</button></div><p id="diary-status" role="status" aria-live="polite"></p></div></div><div class="diary-library"><h3>我的日记收藏</h3><div id="diary-saved"></div></div></section>`;
  for(const p of roles())for(const id of ['diary-role','diary-friend']){const o=document.createElement('option');o.value=p.slug;o.textContent=p.name;$(id).append(o);}
  if(roles().some(p=>p.slug==='fluttershy'))$('diary-friend').value='fluttershy';
  $('diary-form').onsubmit=e=>{e.preventDefault();generate(false);};
  $('diary-ai-button').onclick=()=>generate(true);
  $('diary-example').onclick=()=>{$('diary-note').value='今天和朋友去郊游，出门后下起了雨。我们坐进凉亭，一起吃带来的点心，雨停后又在草地上散步。';document.querySelector('[name="diary-scene"][value="rain"]').checked=true;generate(false);};
  $('diary-update').onclick=async()=>{if(!current||busy)return;current.title=$('diary-title').value.trim()||'今天的小马谷';current.caption=$('diary-caption').value.trim();try{await paint(current);say('文字已更新，请重新保存或下载。');}catch(e){say(e.message);}};
  $('diary-save').onclick=async()=>{try{if(!current||busy)return;const blob=await png();await storage('put',{...current,background:undefined,id:current.id,blob});await library();say('已保存在此浏览器，可在下方重新打开。');}catch(e){say(e.message);}};
  $('diary-download').onclick=async()=>{try{const blob=await png();const file=new File([blob],'小马谷日记-'+current.date+'.png',{type:'image/png'});if(navigator.canShare?.({files:[file]})){await navigator.share({files:[file],title:current.title});}else{const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=file.name;a.click();setTimeout(()=>URL.revokeObjectURL(u),10000);}say('图片已交给系统保存；手机也可以长按预览图片保存。');}catch(e){if(e.name!=='AbortError')say('下载未完成，请重试或保存到日记。');}};
  fetch((window.SITE_CONFIG?.apiBase||'/api')+'/diary/status').then(r=>r.json()).then(v=>{capabilities=v;$('diary-ai-info').textContent=v.textReady?'文字模型：'+v.model+'。'+(v.imageReady?'背景模型：'+v.imageModel:'场景模型尚未配置，可生成文字并使用本地背景。')+'每天最多 3 次。':'开源模型接口已准备，尚未配置推理服务；现在可以先制作本地体验卡。';$('diary-ai-button').disabled=!v.textReady;$('diary-image-ai').disabled=!v.imageReady;}).catch(()=>{$('diary-ai-info').textContent='AI 服务暂不可用，仍可制作本地体验卡。';});
  library();if(context)applyContext();
 }
 function applyContext(){if(!$('diary-role'))return;const p=roles().find(p=>p.slug===context?.slug);if(p)$('diary-role').value=p.slug;$('diary-origin').textContent=context?.demo?'当前为管理员示例，可自由体验，不计入真实测评。':context?'主角来自本次测评；也可以手动换成其他角色。':'独立体验卡：未关联个人测评，可自由选择角色。';}
 function lock(v){busy=v;for(const id of ['diary-ai-button','diary-save','diary-download','diary-update'])$(id).disabled=v||(id==='diary-ai-button'&&!capabilities.textReady)||(!current&&id!=='diary-ai-button');$('diary-form').querySelector('[type="submit"]').disabled=v;}
 async function generate(ai){
  if(busy)return;const note=$('diary-note').value.trim();if(note.length<5){say('请写下至少 5 个字，让卡片留下你的故事。');return;}
  const main=$('diary-role').value,friend=$('diary-friend').value;if(main===friend){say('主角和伙伴是同一位，请换一位伙伴或选择只有自己。');return;}
  if(ai&&!$('diary-consent').checked){say('使用 AI 前，请先勾选内容发送说明。');return;}
  lock(true);say(ai?'正在为你的日记创作，请稍候…':'正在排版你的卡片…');
  try{
   const scene=document.querySelector('[name="diary-scene"]:checked').value,date=new Date().toLocaleDateString('zh-CN');
   let content={title:scenes[scene][0],caption:note,background:null,model:null};
   if(ai){let admin=null;try{admin=JSON.parse(sessionStorage.getItem('ponyAdmin')||'null');}catch{}const r=await fetch((window.SITE_CONFIG?.apiBase||'/api')+'/diary/generate',{method:'POST',headers:{'Content-Type':'application/json',...(!context?.token&&admin?.access_token?{Authorization:'Bearer '+admin.access_token}:{})},body:JSON.stringify({token:context?.token,note,roles:[main,friend].filter(Boolean).map(s=>roles().find(p=>p.slug===s)?.name),scene,image:$('diary-image-ai').checked})});const v=await r.json();if(!r.ok)throw Error(v.error||'AI 未能生成，请重试。');content=v;}
   const next={...content,id:crypto.randomUUID(),createdAt:Date.now(),date,scene,main,friend,note,decision:context?.decision||'',mode:ai?'AI 创作 · 角色素材组合':'本地体验卡 · 角色素材组合'};
   await paint(next);current=next;$('diary-title').value=next.title;$('diary-caption').value=next.caption;$('diary-edit-copy').hidden=false;say(ai?'创作完成，可编辑文字并下载。':'体验卡完成。可修改文字、换场景或伙伴后再制作。');
  }catch(e){say(e.message||'制作失败，请重试。');}finally{lock(false);}
 }
 async function load(src){return new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>resolve(i);i.onerror=()=>reject(Error('图片加载失败，请稍后重试。'));i.src=src;});}
 function round(c,x,y,w,h,r,fill){c.fillStyle=fill;c.beginPath();c.roundRect(x,y,w,h,r);c.fill();}
 function lines(c,text,x,y,max,line,maxLines){let row='',n=0;for(const ch of text){if(c.measureText(row+ch).width>max||ch==='\n'){c.fillText(row,x,y+n*line);row=ch==='\n'?'':ch;n++;if(n>=maxLines-1)break;}else row+=ch;}if(row)c.fillText(row+(n>=maxLines-1&&text.length>n*12+row.length?'…':''),x,y+n*line);}
 function backdrop(c,scene){
  const night=scene==='night',rain=scene==='rain';c.fillStyle=night?'#35395e':rain?'#dcece9':'#e2f1ed';c.fillRect(0,0,1080,840);
  c.fillStyle=night?'#7477a1':'#c2dbce';c.beginPath();c.ellipse(300,850,700,290,0,0,7);c.fill();c.fillStyle=night?'#555f80':'#a9cabc';c.beginPath();c.ellipse(1060,840,740,210,0,0,7);c.fill();
  c.fillStyle=night?'#fbefbf':'#fff5cd';c.beginPath();c.arc(850,180,70,0,7);c.fill();
  if(night){c.fillStyle='#fff3cc';for(let i=0;i<35;i++){const x=(i*163+83)%1080,y=(i*97)%460;c.beginPath();c.arc(x,y,2+i%3,0,7);c.fill();}}
  else{c.fillStyle='#ffffffaa';for(const [x,y] of [[210,180],[560,240]]){c.beginPath();c.ellipse(x,y,125,28,0,0,7);c.fill();}}
  if(scene==='cafe'){round(c,90,270,900,485,32,'#eee0cc');round(c,130,315,820,350,15,'#bcd9d9');for(const x of [400,690])round(c,x,315,15,350,0,'#eee0cc');round(c,80,710,920,45,10,'#9b8073');}
  if(rain){round(c,120,430,18,320,2,'#8f9d96');round(c,940,430,18,320,2,'#8f9d96');c.fillStyle='#afc8bd';c.beginPath();c.moveTo(70,440);c.lineTo(540,270);c.lineTo(1010,440);c.closePath();c.fill();c.strokeStyle='#93b9bf';c.lineWidth=4;for(let i=0;i<28;i++){const x=(i*137)%1080,y=(i*83)%340;c.beginPath();c.moveTo(x,y);c.lineTo(x-8,y+22);c.stroke();}}
  if(scene==='picnic'||rain){c.fillStyle='#f3dedf';c.beginPath();c.ellipse(540,770,380,60,0,0,7);c.fill();}
 }
 async function paint(card){
  await document.fonts.ready;const canvas=$('diary-canvas'),c=canvas.getContext('2d');c.clearRect(0,0,1080,1440);round(c,0,0,1080,1440,36,'#fffaf3');c.save();c.beginPath();c.roundRect(0,0,1080,840,36);c.clip();
  if(card.background){const bg=await load(card.background);const s=Math.max(1080/bg.width,840/bg.height);c.drawImage(bg,(1080-bg.width*s)/2,(840-bg.height*s)/2,bg.width*s,bg.height*s);}else backdrop(c,card.scene);
  const pair=[card.main,card.friend].filter(Boolean);for(let i=0;i<pair.length;i++){const role=roles().find(p=>p.slug===pair[i]);if(!role)continue;const p=role.image,img=await load(asset(p)),b=window.ART_BOUNDS?.[p]||[img.width,img.height,0,0,img.width,img.height];const sx=b[2],sy=b[3],sw=b[4]-sx,sh=b[5]-sy;const scale=Math.min((pair.length===1?510:390)/sw,460/sh);const w=sw*scale,h=sh*scale,x=pair.length===1?540-w/2:(i===0?300:770)-w/2;c.drawImage(img,sx,sy,sw,sh,x,775-h,w,h);}
  c.restore();c.fillStyle='#746981';c.font='500 22px system-ui';c.fillText('MY PONYVILLE DIARY',72,910);c.textAlign='right';c.fillText(card.date,1008,910);c.textAlign='left';c.fillStyle='#40384d';c.font='600 48px system-ui';lines(c,card.title,72,990,936,60,2);c.font='28px system-ui';c.fillStyle='#706677';lines(c,card.caption,72,1110,936,45,4);
  if(card.decision){c.font='18px system-ui';c.fillStyle='#8b7190';lines(c,'测评里，我曾选择：'+card.decision,72,1280,936,24,1);}
  c.strokeStyle='#e5dce5';c.beginPath();c.moveTo(72,1310);c.lineTo(1008,1310);c.stroke();c.font='23px system-ui';c.fillStyle='#8b7190';c.fillText(pair.map(s=>roles().find(p=>p.slug===s)?.name).join(' × '),72,1360);c.textAlign='right';c.font='18px system-ui';c.fillText(card.mode,1008,1360);c.textAlign='left';
  $('diary-placeholder').hidden=true;canvas.hidden=false;
 }
 function png(){return new Promise((resolve,reject)=>$('diary-canvas').toBlob(b=>b?resolve(b):reject(Error('图片导出失败，请重试。')),'image/png'));}
 async function library(){try{const cards=(await storage('getAll')).sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));const box=$('diary-saved');box.replaceChildren();if(!cards.length){box.textContent='这里还没有日记，制作后点「保存到我的日记」。';return;}for(const card of cards){const a=document.createElement('article'),img=document.createElement('img'),title=document.createElement('p'),open=document.createElement('button'),del=document.createElement('button');const u=URL.createObjectURL(card.blob);img.src=u;img.alt=card.title;img.onload=()=>URL.revokeObjectURL(u);title.textContent=card.title+' · '+card.date;open.textContent='打开';del.textContent='删除';open.onclick=async()=>{if(busy)return;try{const i=await load(URL.createObjectURL(card.blob));const c=$('diary-canvas');c.getContext('2d').drawImage(i,0,0);c.hidden=false;$('diary-placeholder').hidden=true;current={...card,background:null};$('diary-edit-copy').hidden=true;lock(false);say('已打开保存的卡片，可下载。修改场景请重新制作。');}catch(e){say(e.message);}};del.onclick=async()=>{try{await storage('delete',card.id);await library();say('已从此浏览器删除。');}catch(e){say(e.message);}};a.append(img,title,open,del);box.append(a);}}catch(e){$('diary-saved').textContent=e.message;}}
 window.PONY_DIARY={setContext(v){context=v;if(!$('diary-mount'))return;applyContext();}};
 document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
})();
