// 装饰性送信动画。
(()=>{
 if(location.pathname!==(window.SITE_CONFIG?.basePath||'/')||new URLSearchParams(location.search).has('r')||!document.getElementById('gate')||document.getElementById('gate').classList.contains('hidden'))return;
 const overlay=document.createElement('section');overlay.className='mail-entry mail-loading';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','小呆呆送来的友谊邀请');
 overlay.innerHTML='<div class="mail-scene"><span class="mail-spark spark-a">✦</span><span class="mail-spark spark-b">✧</span><div class="mail-courier"><div class="mail-flyer"><img src="/images/derpy-flight-smile.webp?v=closed-smile" alt="小呆呆扇动翅膀，带着友谊来信飞来"><div class="carried-letter" aria-hidden="true"></div></div></div><div class="mail-invitation"><p class="eyebrow">A LETTER FROM PONYVILLE</p><h1>有一封信，送给你</h1><p>小呆呆一路飞来，<br>把小马谷的友谊邀请交到你手里。</p><button class="button button-primary mail-open" type="button">打开友谊来信 ✉</button></div></div>';
 document.body.append(overlay);const oldOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
 const finish=()=>{overlay.remove();document.body.style.overflow=oldOverflow;document.getElementById('start-button')?.focus();};
 overlay.querySelector('.mail-open').onclick=()=>{overlay.classList.add('mail-opening');setTimeout(finish,650);};
 const open=overlay.querySelector('.mail-open');
 overlay.addEventListener('keydown',e=>{if(e.key==='Tab'){e.preventDefault();open.focus({preventScroll:true});}});
 // Start one shared timeline after the image and title font are ready.
 // This prevents late font replacement and focus scrolling during the reveal.
 const image=overlay.querySelector('.mail-flyer>img');
 const fontReady=document.fonts?document.fonts.load('600 38px "Noto Serif SC"','有一封信，送给你'):Promise.resolve();
 Promise.allSettled([image.decode?.()||Promise.resolve(),Promise.race([fontReady,new Promise(resolve=>setTimeout(resolve,1800))])]).then(()=>{
  if(!overlay.isConnected)return;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
   overlay.classList.remove('mail-loading');
   open.focus({preventScroll:true});
  }));
 });
})();
