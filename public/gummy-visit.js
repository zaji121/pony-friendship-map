(()=>{
 const result=document.getElementById('result');if(!result)return;
 let scheduled=false;
 function start(){if(scheduled||result.classList.contains('hidden'))return;scheduled=true;setTimeout(visit,10000);}
 new MutationObserver(start).observe(result,{attributes:true,attributeFilter:['class']});start();
 async function visit(){
  if(result.classList.contains('hidden')){scheduled=false;return;}
  const markup=await fetch('/images/gummy/gummy-rig.svg?v=20261013-original-lick').then(r=>r.text());
  const pet=document.createElement('div');pet.className='gummy-visit gummy-grounded';pet.dataset.phase='enter';
  const shadow=document.createElement('div');shadow.className='gummy-foot-shadow';
  const body=document.createElement('button');body.type='button';body.className='gummy-body';body.setAttribute('aria-label','点击无牙，让它停下来眨眼');body.innerHTML=markup;
  const lick=document.createElement('video');lick.className='gummy-original-lick';lick.src='/images/gummy/lick-original.webm';lick.muted=true;lick.playsInline=true;lick.preload='auto';body.append(lick);
  const filterHost=document.createElementNS('http://www.w3.org/2000/svg','svg');filterHost.classList.add('gummy-video-filter');filterHost.setAttribute('aria-hidden','true');
  filterHost.innerHTML='<defs><filter id="gummy-original-tongue" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  3 -3 -1 0 -.1"/><feComponentTransfer><feFuncA type="discrete" tableValues="0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"/></feComponentTransfer></filter></defs>';body.append(filterHost);
  lick.onended=()=>delete pet.dataset.lick;
  lick.load();
  let nextLick=1+Math.random(),lickCount=0,visitTime=0;
  const svg=body.querySelector('svg');svg.classList.add('gummy-character');svg.setAttribute('aria-hidden','true');
  pet.append(shadow,body);document.body.append(pet);body.disabled=true;
  let x=-112,y=innerHeight*.65-77,vy=0;
  let phase='enter',anchor=null,walkTime=0,entryTime=0,jumpTime=0,last=performance.now(),active=true;
  let pauseCount=0,pauseTime=0,midpointVisited=false,midpointTime=0,midpointLicked=false;
  function setPhase(value){phase=value;pet.dataset.phase=value;}
  let anchorEdge='top',surface='card',walkStartX=0;
  const surfaceRect=()=>surface==='viewport'?{left:0,width:innerWidth}:anchor.getBoundingClientRect();
  const rim=()=>{if(surface==='viewport')return innerHeight-3;const r=anchor.getBoundingClientRect();return anchorEdge==='bottom'?r.bottom:r.top;};
  function chooseSurface(){
   const foot=y+77;
   // Compare downward travel to visible card rims and the viewport floor.
   const edges=[{surface:'viewport',at:innerHeight-3}];
   result.querySelectorAll('.report-chapter,.result-hero,.type-reading,.dimension-card').forEach(el=>{
    const r=el.getBoundingClientRect();if(r.width<180||r.height<80)return;
    for(const edge of ['top','bottom']){
     const at=edge==='top'?r.top:r.bottom;
     if(at>=Math.max(90,foot-3)&&at<innerHeight-3)edges.push({surface:'card',el,edge,at});
    }
   });
   const chosen=edges.sort((a,b)=>Math.max(0,a.at-foot)-Math.max(0,b.at-foot))[0];
   surface=chosen.surface;anchor=chosen.el||null;anchorEdge=chosen.edge||'bottom';pet.dataset.edge=surface==='viewport'?'viewport':anchorEdge;
  }
  chooseSurface();
  const entryX=surfaceRect().left+22;
  y=rim()-77;pet.style.transform=`translate3d(${x}px,${y}px,0)`;
  body.onclick=()=>{
   if(phase==='walk'&&pauseCount<10){
    pauseCount++;pauseTime=0;lick.pause();delete pet.dataset.lick;pet.dataset.pauseCount=pauseCount;feetWalking(false);setPhase('pause');
    body.querySelectorAll('.gummy-react-blink').forEach(a=>a.beginElement());
    return;
   }

  };
  function feetWalking(on){body.querySelectorAll('.gummy-gait').forEach(a=>on?a.beginElement():a.endElement());}
  function step(now){
   if(!active||!pet.isConnected)return;
   // Bound timestep prevents a background tab from creating a sudden positional jump.
   const dt=Math.min(.032,Math.max(0,(now-last)/1000));last=now;
   visitTime+=dt;
   if(['walk','pause'].includes(phase)&&visitTime>=nextLick&&lickCount<3&&!pet.dataset.lick&&lick.readyState>=2){
    lickCount++;nextLick=visitTime+1.9+Math.random()*.4;lick.currentTime=0;pet.dataset.lick='true';lick.play().catch(()=>delete pet.dataset.lick);
   }
   if(phase==='enter'){
    entryTime+=dt;const t=Math.min(1,entryTime/.8);
    x=-112+(entryX+112)*t;y=rim()-77-36*4*t*(1-t);
    if(t===1){walkStartX=x;walkTime=0;setPhase('walk');feetWalking(true);body.disabled=false;}
   }else if(phase==='walk'){
    const r=surfaceRect(),duration=Math.max(5.5,r.width*.013);walkTime+=dt;
    if(!midpointVisited&&walkTime>=duration/2){
     walkTime=duration/2;midpointVisited=true;midpointTime=0;lick.pause();delete pet.dataset.lick;feetWalking(false);setPhase('midpoint');
    }
    const progress=Math.min(1,walkTime/duration);x=walkStartX+Math.max(0,r.left+r.width-134-walkStartX)*progress;y=rim()-77+Math.sin(walkTime*2*Math.PI/.72)*.7;
    if(progress===1){lick.pause();delete pet.dataset.lick;feetWalking(false);setPhase('jump');vy=-240;jumpTime=0;}
   }else if(phase==='midpoint'){
    const r=surfaceRect();x=walkStartX+Math.max(0,r.left+r.width-134-walkStartX)*.5;y=rim()-77;
    midpointTime+=dt;
    if(!midpointLicked&&lick.readyState>=2){
     midpointLicked=true;lick.currentTime=0;pet.dataset.lick='true';lick.play().catch(()=>delete pet.dataset.lick);
    }
    if(midpointTime>=4){setPhase('walk');feetWalking(true);nextLick=visitTime+1.9+Math.random()*.4;}
   }else if(phase==='pause'){
    // Keep the same place on the rim as the page scrolls; walking progress is frozen.
    const r=surfaceRect(),duration=Math.max(5.5,r.width*.013);
    x=walkStartX+Math.max(0,r.left+r.width-134-walkStartX)*Math.min(1,walkTime/duration);y=rim()-77;
    pauseTime+=dt;
    if(pauseTime>=1.5){setPhase('walk');feetWalking(true);if(pauseCount>=10){body.disabled=true;body.setAttribute('aria-label','无牙继续行走');}}
   }else if(phase==='jump'){
    body.disabled=true;
    jumpTime+=dt;x+=210*dt;vy+=750*dt;y+=vy*dt;pet.style.opacity=String(Math.max(0,1-Math.max(0,jumpTime-.6)/.55));
    if(jumpTime>1.2){active=false;pet.remove();return;}
   }
   pet.style.transform=`translate3d(${x}px,${y}px,0)`;
   requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
 }
})();


