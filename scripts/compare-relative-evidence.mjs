import fs from 'node:fs';import vm from 'node:vm';
const w={},context={window:w};vm.createContext(context);
for(const file of ['mbti-questions.js','quiz-world.js','characters.js','scoring.js','episode-titles.js','character-evidence.js','narrative-matching.js','quiz-form-48-v2.js','quiz-form-48.js'])vm.runInContext(fs.readFileSync(new URL('../public/'+file,import.meta.url),'utf8'),context);
const old=w.PONY_QUIZ_48_V2,current=w.PONY_QUIZ_48;
let seed=20261031;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/2**32;};
const n=2000,counts=[{version:old.version,coreFlips:0,taskFlips:0,unsupported:0},{version:current.version,coreFlips:0,taskFlips:0,unsupported:0}];
for(let trial=0;trial<n;trial++){
 const answers=Array.from({length:32},()=>Math.floor(random()*2)),choices=Array.from({length:16},(_,i)=>({first:i<14?Math.floor(random()*4):null,second:null})),ordinals=[Math.floor(random()*4),Math.floor(random()*4)],coreIndex=Math.floor(random()*32),taskIndex=Math.floor(random()*14);
 for(const [j,form]of [old,current].entries()){
  const scores=form.scoreCore(answers).scores,final=[];
  for(let slot=0;slot<2;slot++){const next=form.plan(w,scores,choices,final).next;final.push(next.kind==='followup'?{kind:'followup',choice:['left','right','both','unknown'][ordinals[slot]]}:{kind:'task',first:ordinals[slot]});}
  const plan=form.plan(w,scores,choices,final),base=plan.result;
  if(base.ranked[0].support&&!base.ranked[0].support.sufficient)counts[j].unsupported++;
  const flipped=answers.slice();flipped[coreIndex]=1-flipped[coreIndex];
  if(form.rank(w,form.scoreCore(flipped).scores,plan.choices,plan.followups).primary!==base.primary)counts[j].coreFlips++;
  const changed=plan.choices.map((c,i)=>i===taskIndex?{first:(c.first+1)%4,second:null}:c);
  if(form.rank(w,scores,changed,plan.followups).primary!==base.primary)counts[j].taskFlips++;
 }
}
const before=JSON.parse(fs.readFileSync(new URL('../docs/narrative-form-48-v2-baseline.json',import.meta.url),'utf8')),after=JSON.parse(fs.readFileSync(new URL('../docs/narrative-form-48-audit.json',import.meta.url),'utf8'));
const report={seed:20261031,trials:n,scope:'Paired uniform synthetic ordinal streams; final questions held fixed for one-answer sensitivity. Different item text does not imply identical semantic responses. Not accuracy or retest reliability.',versions:counts.map(c=>({...c,coreFlipShare:c.coreFlips/n,taskFlipShare:c.taskFlips/n,unsupportedShare:c.unsupported/n})),distribution:{beforeVersion:before.formVersion,afterVersion:after.formVersion,trials:after.trials,beforeClose:before.followupSimulation.closeShareAfter,afterClose:after.followupSimulation.closeShareAfter,beforeMainSix:before.mainSixShare,afterMainSix:after.mainSixShare,roles:after.roles.map(r=>({slug:r.slug,name:r.name,before:before.roles.find(p=>p.slug===r.slug).afterFollowupShare,after:r.afterFollowupShare}))},limitations:['No ground truth character labels','Parameters and support gate remain uncalibrated','Reduced sensitivity can also mean under-responsiveness; this does not establish validity']};
fs.writeFileSync(new URL('../docs/relative-evidence-comparison.json',import.meta.url),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report.versions,null,2));
