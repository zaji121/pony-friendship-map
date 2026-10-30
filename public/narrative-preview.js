(function(){
 const $=id=>document.getElementById(id),model=window.PONY_NARRATIVE_MATCH,form=window.PONY_QUIZ_48,q=form.questions,key='ponyNarrative48-v4';
 const steps=[];
 for(let chapter=0;chapter<4;chapter++){
  q.forEach((item,i)=>{if(item[2].chapter===chapter)steps.push({kind:'core',i,chapter});});
  form.scenes.forEach((scene,i)=>{if(scene.chapter===chapter)steps.push(i<form.fixedTaskCount?{kind:'task',i,chapter}:{kind:'final',slot:i-form.fixedTaskCount,chapter});});
 }
 if(steps.length!==48)throw Error('题目配置不完整');
 const fresh=()=>({version:form.version,index:0,answers:Array(32).fill(null),choices:form.scenes.map(()=>({first:null,second:null})),completedTasks:[],finalAnswers:Array(form.finalSlots).fill(null),openedChapters:[]});
 let state=fresh(),activeFinal=null,lastView='',lastQuestion=-1;
 try{const saved=JSON.parse(sessionStorage.getItem(key)||'null');if(saved?.version===form.version&&saved.answers?.length===32&&model.choicesValid(saved.choices)&&Array.isArray(saved.finalAnswers)&&saved.finalAnswers.length===form.finalSlots&&Array.isArray(saved.completedTasks)&&Number.isInteger(saved.index)&&saved.index>=0&&saved.index<=48)state=saved;}catch{}
 const save=()=>sessionStorage.setItem(key,JSON.stringify(state));
 function view(id){for(const name of ['intro','quiz','result'])$(name).hidden=name!==id;if(lastView!==id||(id==='quiz'&&lastQuestion!==state.index))window.scrollTo({top:0,behavior:'instant'});lastView=id;lastQuestion=state.index;}
 function option(text,label,selected,click){const b=document.createElement('button');b.type='button';b.className='option'+(selected?' selected':'');b.setAttribute('aria-pressed',String(selected));const badge=document.createElement('span'),copy=document.createElement('span');badge.className='badge';badge.textContent=label;copy.className='copy';copy.textContent=text;b.append(badge,copy);b.onclick=click;return b;}
 function invalidateFinal(){state.finalAnswers=Array(form.finalSlots).fill(null);state.resultId='';state.token='';}
 function scores(){return form.scoreCore(state.answers).scores;}
 function finalPlan(slot){return form.plan(window,scores(),state.choices,state.finalAnswers.slice(0,slot)).next;}
 function render(){
  if(state.index===48){finish();return;}
  view('quiz');const step=steps[state.index],chapter=window.QUIZ_CHAPTERS[step.chapter];
  $('progress-label').textContent=`第 ${state.index+1} / 48 题`;$('progress-rate').textContent=Math.round((state.index+1)/48*100)+'%';$('progress').max=48;$('progress').value=state.index+1;
  $('chapter-title').textContent=`第 ${step.chapter+1} 幕 · ${chapter.title}`;$('chapter-context').textContent=chapter.context;
  $('options').replaceChildren();$('none').hidden=step.kind==='core';
  let answered=false;
  if(step.kind==='core'){
   $('stem').textContent=q[step.i][0];q[step.i][1].forEach((answer,i)=>$('options').append(option(answer[0],'AB'[i],state.answers[step.i]===i,()=>{state.answers[step.i]=i;invalidateFinal();save();render();})));answered=state.answers[step.i]!==null;
  }else if(step.kind==='task'){
   const scene=form.scenes[step.i],choice=state.choices[step.i];$('stem').textContent=scene.stem;
   scene.options.forEach((answer,i)=>$('options').append(option(answer.text,'ABCD'[i],choice.first===i,()=>{state.choices[step.i]={first:i,second:null};if(!state.completedTasks.includes(step.i))state.completedTasks.push(step.i);invalidateFinal();save();render();})));answered=state.completedTasks.includes(step.i);
  }else{
   activeFinal=finalPlan(step.slot);let current=state.finalAnswers[step.slot];
   if(current&&current.kind!==activeFinal.kind){state.finalAnswers[step.slot]=null;for(let n=step.slot+1;n<form.finalSlots;n++)state.finalAnswers[n]=null;current=null;}
   if(activeFinal.kind==='followup'){
    $('none').hidden=true;$('stem').textContent=activeFinal.question.stem;
    const options=[['left',activeFinal.question.leftText],['right',activeFinal.question.rightText],['both','两种都可以，暂时选不出'],['unknown','都不太想／暂时说不准']];
    options.forEach(([choice,text],i)=>$('options').append(option(text,'ABCD'[i],current?.choice===choice,()=>{state.finalAnswers[step.slot]={kind:'followup',choice};for(let n=step.slot+1;n<form.finalSlots;n++)state.finalAnswers[n]=null;state.resultId='';save();render();})));
   }else{
    const scene=form.scenes[activeFinal.sceneIndex];$('stem').textContent=scene.stem;
    scene.options.forEach((answer,i)=>$('options').append(option(answer.text,'ABCD'[i],current?.first===i,()=>{state.finalAnswers[step.slot]={kind:'task',first:i};for(let n=step.slot+1;n<form.finalSlots;n++)state.finalAnswers[n]=null;state.resultId='';save();render();})));
   }
   answered=state.finalAnswers[step.slot]!==null;
  }
  $('prev').disabled=state.index===0;$('next').disabled=!answered;$('next').textContent=state.index===47?'看看我的伙伴 →':'下一题 →';save();requestAnimationFrame(()=>showChapter(step.chapter));
 }
 function showChapter(chapter){
  state.openedChapters=Array.isArray(state.openedChapters)?state.openedChapters:[];
  if(state.openedChapters.includes(chapter))return;
  window.PONY_CHAPTER_OPENING?.show(chapter,{isCurrent:()=>!$('quiz').hidden&&steps[state.index]?.chapter===chapter&&!state.openedChapters.includes(chapter),onDismiss:()=>{if(!state.openedChapters.includes(chapter))state.openedChapters.push(chapter);save();},focusTarget:$('stem')});
 }
 function finish(){
  if(state.resultId){openOriginalReport();return;}
  const missing=steps.findIndex(step=>step.kind==='core'?state.answers[step.i]===null:step.kind==='task'?!state.completedTasks.includes(step.i):state.finalAnswers[step.slot]===null);
  if(missing>=0){state.index=missing;render();return;}
  const planned=form.plan(window,scores(),state.choices,state.finalAnswers);
  if(planned.result.primary===null){view('result');$('result-name').textContent='这次还不能锁定伙伴';$('result-status').textContent='四维和任务选择暂时没有提供足够线索，不强行指定主副角色。';return;}
  openOriginalReport();
 }
 async function openOriginalReport(){
  view('result');$('result-name').textContent='正在打开你的角色报告…';$('result-status').textContent='正在保存这次测评，随后打开原来的完整角色报告。';$('result-type').textContent='';$('reasons').replaceChildren();$('second').textContent='';$('evidence-warning').textContent='';$('evidence').replaceChildren();const retry=$('restart');retry.disabled=true;retry.textContent='正在保存…';
  try{
   if(state.resultId){location.replace(new URL('./?r='+encodeURIComponent(state.resultId)+'#result='+encodeURIComponent(state.resultId),location.href).href);return;}
   const config=window.SITE_CONFIG||{};if(!config.apiBase)throw Error('测评服务暂时没有连接好，请稍后重试。');
   const post=async(route,body)=>{const response=await fetch(config.apiBase.replace(/\/$/,'')+route,{method:'POST',headers:{'Content-Type':'application/json',...(config.supabasePublishableKey?{apikey:config.supabasePublishableKey}:{})},body:JSON.stringify(body)});const data=await response.json();if(!response.ok)throw Error(data.error||'结果暂时无法保存');return data;};
   if(!state.token){const started=await post('/start',{});state.token=started.token;save();}
   const saved=await post('/complete',{token:state.token,result:{answers:state.answers,narrative:{version:model.version,formVersion:form.version,selectionMode:'single',choices:state.choices,finalAnswers:state.finalAnswers}}});
   if(!saved.id)throw Error('结果保存未完成，请重试。');state.resultId=saved.id;save();location.replace(new URL('./?r='+encodeURIComponent(saved.id)+'#result='+encodeURIComponent(saved.id),location.href).href);
  }catch(error){$('result-name').textContent='答案已在当前浏览器保留';$('result-status').textContent=error.message;retry.disabled=false;retry.textContent='重试打开完整角色报告';retry.onclick=openOriginalReport;}
 }
 $('begin').onclick=render;$('prev').onclick=()=>{if(state.index>0){state.index--;render();}};$('next').onclick=()=>{state.index++;render();};
 $('none').onclick=()=>{const step=steps[state.index];if(step.kind==='task'){state.choices[step.i]={first:null,second:null};if(!state.completedTasks.includes(step.i))state.completedTasks.push(step.i);invalidateFinal();}else if(step.kind==='final'&&activeFinal.kind==='task'){state.finalAnswers[step.slot]={kind:'task',first:null};for(let n=step.slot+1;n<form.finalSlots;n++)state.finalAnswers[n]=null;}save();render();};
 $('restart').onclick=()=>{state=fresh();save();render();};if(new URLSearchParams(location.search).get('start')==='1')render();
})();



