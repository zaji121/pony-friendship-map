import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url),w={},context={window:w};vm.createContext(context);
for(const file of ['mbti-questions.js','quiz-world.js','characters.js','scoring.js','episode-titles.js','character-evidence.js','narrative-matching-v2.js','narrative-matching.js'])vm.runInContext(fs.readFileSync(new URL('public/'+file,root),'utf8'),context);
const old=w.PONY_NARRATIVE_MATCH_V2,next=w.PONY_NARRATIVE_MATCH,coverage=JSON.parse(fs.readFileSync(new URL('docs/role-reachability.json',root),'utf8'));
const rng=initial=>{let state=initial;return()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/2**32;};};
const random=rng(20261030),extra=rng(20261032),followOld=rng(20261031),followNew=rng(20261031),n=20000;
const choose=random=>{const first=Math.floor(random()*4);let second=null;if(random()<.5){second=Math.floor(random()*3);if(second>=first)second++;}return {first,second};};
const counts=new Map(coverage.roles.map(r=>[r.slug,{slug:r.slug,name:r.name,old:0,next:0,omittedNewQuestions:0}]));let oldClose=0,nextClose=0;
function complete(model,scores,choices,random){let result=model.rank(w,scores,choices);const followups=[];let question;while((question=model.nextFollowup(result,followups))){followups.push({left:question.left,right:question.right,choice:['left','right','both','unknown'][Math.floor(random()*4)]});result=model.rank(w,scores,choices,followups);}return result;}
for(let i=0;i<n;i++){
 const scores=Array.from({length:4},()=>Array.from({length:12},()=>random()<.5?1:0).reduce((s,v)=>s+v,0)/12);
 const oldChoices=old.scenes.map(()=>choose(random)),choices=next.scenes.map(scene=>scene.originalIndex===null?choose(extra):oldChoices[scene.originalIndex]);
 const a=complete(old,scores,oldChoices,followOld),b=complete(next,scores,choices,followNew),c=next.rank(w,scores,next.scenes.map(scene=>scene.originalIndex===null?{first:null,second:null}:oldChoices[scene.originalIndex]));
 counts.get(w.CHARACTER_SLUGS[a.primary]).old++;counts.get(w.CHARACTER_SLUGS[b.primary]).next++;counts.get(w.CHARACTER_SLUGS[c.primary]).omittedNewQuestions++;if(a.close)oldClose++;if(b.close)nextClose++;
}
const roles=[...counts.values()].map(r=>({...r,oldShare:r.old/n,nextShare:r.next/n,omittedNewQuestionsShare:r.omittedNewQuestions/n}));
for(const key of ['old','next','omittedNewQuestions'])assert.equal(roles.reduce((s,r)=>s+r[key],0),n);
const six=new Set(['twilight','applejack','rainbow-dash','pinkie-pie','fluttershy','rarity']);
const report={trials:n,oldVersion:old.version,newVersion:next.version,method:'Paired identical 48-item answers and original 12 task choices; only four newly authored task choices use a separate random stream. Both follow-up branches use independent uniform simulated choices. Not real user rates or accuracy.',oldMainSix:roles.filter(r=>six.has(r.slug)).reduce((s,r)=>s+r.oldShare,0),newMainSix:roles.filter(r=>six.has(r.slug)).reduce((s,r)=>s+r.nextShare,0),oldClose:oldClose/n,newClose:nextClose/n,roles};
fs.writeFileSync(new URL('docs/narrative-v3-comparison.json',root),JSON.stringify(report,null,2)+'\n');
const pct=v=>(100*v).toFixed(2)+'%';fs.writeFileSync(new URL('docs/NARRATIVE_V3_COMPARISON.md',root),['# 任务覆盖修订：同批输入对照','',report.method,'',`主角团：${pct(report.oldMainSix)} → ${pct(report.newMainSix)}。接近候选：${pct(report.oldClose)} → ${pct(report.newClose)}。后者不是准确率，不能隐去。`,'','|角色|修订前（含追问）|修订后（含追问）|','|---|---:|---:|',...roles.map(r=>`|${r.name}|${pct(r.oldShare)}|${pct(r.nextShare)}|`)].join('\n')+'\n');
console.log(JSON.stringify({trials:n,oldMainSix:report.oldMainSix,newMainSix:report.newMainSix,oldClose:report.oldClose,newClose:report.newClose,applejack:roles.find(r=>r.slug==='applejack')},null,2));
