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
  const lick=document.createElement('img');lick.className='gummy-original-lick';lick.alt='';lick.setAttribute('aria-hidden','true');body.append(lick);
  let lickBlob=null,lickUrl='',lickTimer,lickSerial=0;
  fetch('/images/gummy/lick-transparent.png').then(r=>{if(!r.ok)throw Error('sprite');return r.blob();}).then(blob=>{lickBlob=blob;}).catch(()=>{});
  function stopLick(){++lickSerial;clearTimeout(lickTimer);delete pet.dataset.lick;if(lickUrl){URL.revokeObjectURL(lickUrl);lickUrl='';}}
  async function playLick(){if(!lickBlob)return;stopLick();const serial=lickSerial;lickUrl=URL.createObjectURL(lickBlob);lick.src=lickUrl;try{await lick.decode();if(serial!==lickSerial||!pet.isConnected)return;pet.dataset.lick='true';lickTimer=setTimeout(stopLick,1850);}catch{stopLick();}}
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
    pauseCount++;pauseTime=0;stopLick();pet.dataset.pauseCount=pauseCount;feetWalking(false);setPhase('pause');
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
   if(['walk','pause'].includes(phase)&&visitTime>=nextLick&&lickCount<3&&!pet.dataset.lick&&lickBlob!==null){
    lickCount++;nextLick=visitTime+1.9+Math.random()*.4;playLick();
   }
   if(phase==='enter'){
    entryTime+=dt;const t=Math.min(1,entryTime/.8);
    x=-112+(entryX+112)*t;y=rim()-77-36*4*t*(1-t);
    if(t===1){walkStartX=x;walkTime=0;setPhase('walk');feetWalking(true);body.disabled=false;}
   }else if(phase==='walk'){
    const r=surfaceRect(),duration=Math.max(5.5,r.width*.013);walkTime+=dt;
    if(!midpointVisited&&walkTime>=duration/2){
     walkTime=duration/2;midpointVisited=true;midpointTime=0;stopLick();feetWalking(false);setPhase('midpoint');
    }
    const progress=Math.min(1,walkTime/duration);x=walkStartX+Math.max(0,r.left+r.width-134-walkStartX)*progress;y=rim()-77+Math.sin(walkTime*2*Math.PI/.72)*.7;
    if(progress===1){stopLick();feetWalking(false);setPhase('jump');vy=-240;jumpTime=0;}
   }else if(phase==='midpoint'){
    const r=surfaceRect();x=walkStartX+Math.max(0,r.left+r.width-134-walkStartX)*.5;y=rim()-77;
    midpointTime+=dt;
    if(!midpointLicked&&lickBlob!==null){
     midpointLicked=true;playLick();
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


