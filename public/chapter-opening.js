(function(w){
 const hosts=[
  {name:'紫悦',src:'/images/chapter-welcome/twilight-tilt.webp',pose:'twilight'},
  {name:'珍奇',src:'/images/chapter-welcome/rarity-front.webp',pose:'rarity'},
  {name:'碧琪',src:'/images/chapter-welcome/pinkie-smile.webp',pose:'pinkie'},
  {name:'苹果嘉儿',src:'/images/chapter-welcome/applejack-tilt.webp',pose:'applejack'}
 ];
 const images=hosts.map(h=>{const image=new Image();image.src=h.src;return image;});
 let dialog,pending=null;
 async function show(index,{isCurrent=()=>true,onDismiss=()=>{},focusTarget}={}){
  if(pending!==null||dialog?.open||!hosts[index])return;
  pending=index;await images[index].decode().catch(()=>{});pending=null;
  if(!isCurrent())return;
  if(!dialog){
   dialog=document.createElement('dialog');dialog.className='chapter-opening';dialog.setAttribute('aria-labelledby','chapter-opening-title');dialog.setAttribute('aria-describedby','chapter-opening-context');
   dialog.innerHTML='<div class="chapter-opening-card"><div class="chapter-welcome" id="chapter-welcome"><span class="welcome-frame-back" aria-hidden="true"></span><div class="welcome-portrait"><img id="chapter-host-image" alt=""></div><span class="welcome-frame-front" aria-hidden="true"></span><div class="chapter-trinkets" id="chapter-trinkets" aria-hidden="true"></div></div><p class="eyebrow" id="chapter-opening-number"></p><h2 id="chapter-opening-title"></h2><p id="chapter-opening-context"></p><button class="primary" type="button" id="chapter-opening-enter">进入这一幕 →</button></div>';
   document.body.append(dialog);
   document.getElementById('chapter-opening-enter').onclick=()=>dialog.close();
   // Keep background scroll untouched; permit scrolling inside short dialogs.
   const blockBackground=e=>{if(dialog.open&&(e.target===dialog||!dialog.contains(e.target)))e.preventDefault();};
   document.addEventListener('wheel',blockBackground,{passive:false});document.addEventListener('touchmove',blockBackground,{passive:false});
  }
  const host=hosts[index],chapter=w.QUIZ_CHAPTERS[index],$=id=>document.getElementById(id);
  $('chapter-welcome').dataset.pony=host.pose;
  $('chapter-host-image').src=host.src;$('chapter-host-image').alt=host.name;
  $('chapter-opening-number').textContent=`小马谷庆典 · 第 ${index+1} 幕 / 共 4 幕`;
  $('chapter-opening-title').textContent=chapter.title;$('chapter-opening-context').textContent=chapter.context;
  $('chapter-trinkets').replaceChildren(...[['✎','▤'],['🔨','✂'],['▰','●','▱','●','▰','▱'],['☾','♫']][index].map((text,i)=>{const s=document.createElement('span');s.className='trinket trinket-'+i;s.textContent=text;return s;}));
  const scrollX=w.scrollX,scrollY=w.scrollY;
  dialog.addEventListener('close',()=>{onDismiss();focusTarget?.focus({preventScroll:true});w.scrollTo(scrollX,scrollY);},{once:true});
  dialog.showModal();$('chapter-opening-enter').focus({preventScroll:true});
 }
 w.PONY_CHAPTER_OPENING={show};
})(window);
