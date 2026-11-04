// 装饰性送信动画。
(()=>{
 const html=document.documentElement;
 if(!html.classList.contains('mail-pending'))return;
 const overlay=document.createElement('section');overlay.className='mail-entry mail-loading';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','小呆呆送来的友谊邀请');
 overlay.innerHTML='<div class="mail-scene"><span class="mail-spark spark-a">✦</span><span class="mail-spark spark-b">✧</span><div class="mail-courier"><div class="mail-flyer"><img src="/images/derpy-flight-smile.webp?v=closed-smile" fetchpriority="high" alt="小呆呆扇动翅膀，带着友谊来信飞来"><div class="carried-letter" aria-hidden="true"></div></div></div><div class="mail-invitation"><p class="eyebrow">A LETTER FROM PONYVILLE</p><h1>来自小马谷的一封信</h1><p>小呆呆一路飞来，<br>把小马谷的友谊邀请交到你手里。</p><button class="button button-primary mail-open" type="button">打开友谊来信 ✉</button></div></div>';
 document.body.append(overlay);const oldOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
 const finish=()=>{document.documentElement.classList.remove('mail-pending');overlay.remove();document.body.style.overflow=oldOverflow;document.getElementById('start-button')?.focus({preventScroll:true});};
 overlay.querySelector('.mail-open').onclick=()=>{document.documentElement.classList.remove('mail-pending');overlay.classList.add('mail-opening');setTimeout(finish,650);};
 const open=overlay.querySelector('.mail-open');
 overlay.addEventListener('keydown',e=>{if(e.key==='Tab'){e.preventDefault();open.focus({preventScroll:true});}});
 const image=overlay.querySelector('.mail-flyer>img');
 const waitForImage=timeout=>new Promise(resolve=>{
  const finish=ok=>{
   clearTimeout(timer);image.removeEventListener('load',loaded);image.removeEventListener('error',failed);resolve(ok);
  };
  const loaded=()=>finish(true),failed=()=>finish(false),timer=setTimeout(failed,timeout);
  image.addEventListener('load',loaded);image.addEventListener('error',failed);
  if(image.complete)finish(image.naturalWidth>0);
 });
 const reveal=()=>{
  if(document.hidden)return;
  document.removeEventListener('visibilitychange',reveal);
  if(!overlay.isConnected)return;
  overlay.classList.remove('mail-loading');
  open.focus({preventScroll:true});
 };
 void (async()=>{
  if(!await waitForImage(1800)){
   image.src='/images/derpy-mail.webp';
   if(!await waitForImage(1000))overlay.classList.add('mail-no-art');
  }
  document.addEventListener('visibilitychange',reveal);
  requestAnimationFrame(reveal);
 })();
})();

