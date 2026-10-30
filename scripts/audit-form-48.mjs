import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url),w={},context={window:w};vm.createContext(context);
for(const file of ['mbti-questions.js','quiz-world.js','characters.js','scoring.js','episode-titles.js','character-evidence.js','narrative-matching.js','quiz-form-48.js'])vm.runInContext(fs.readFileSync(new URL('public/'+file,root),'utf8'),context);
const form=w.PONY_QUIZ_48,model=w.PONY_NARRATIVE_MATCH,coverage=JSON.parse(fs.readFileSync(new URL('docs/role-reachability.json',root),'utf8'));
assert.equal(form.questions.length,32);for(const axis of form.axes){const items=form.questions.filter(q=>q[2].axis===axis);assert.equal(items.length,8);assert.equal(items.filter(q=>q[1][0][1]===1).length,4);}
for(let chapter=0;chapter<4;chapter++)assert.equal(form.questions.filter(q=>q[2].chapter===chapter).length,8);
const blank=()=>form.scenes.map(()=>({first:null,second:null}));
const toAnswers=scores=>{const left=scores.map(v=>Math.round(v*8));return form.questions.map(q=>{const i=form.axes.indexOf(q[2].axis),positive=left[i]-->0;return q[1].findIndex(o=>o[1]===(positive?1:-1));});};
function finish(scores,choices,traits){
 const finalAnswers=[];
 for(let slot=0;slot<2;slot++){
  const next=form.plan(w,scores,choices,finalAnswers).next;
  if(next.kind==='followup'){const left=traits.has(next.question.left),right=traits.has(next.question.right);finalAnswers.push({kind:'followup',choice:left&&right?'both':left?'left':right?'right':'unknown'});}
  else{const order=form.scenes[next.sceneIndex].options.map((o,i)=>({i,n:o.traits.filter(t=>traits.has(t)).length})).sort((a,b)=>b.n-a.n||a.i-b.i);finalAnswers.push({kind:'task',first:order[0].i});}
 }
 const planned=form.plan(w,scores,choices,finalAnswers);return {...planned,finalAnswers};
}
const witnesses=[];
for(const role of coverage.roles){
 const scores=role.profile.map(v=>Math.round(v*8)/8),answers=toAnswers(scores),actual=Array.from(form.scoreCore(answers).scores),traits=new Set(model.roleTraits[role.slug]);assert.deepEqual(actual,scores);
 let choices=blank();for(let i=0;i<14;i++){const order=form.scenes[i].options.map((o,j)=>({j,n:o.traits.filter(t=>traits.has(t)).length})).sort((a,b)=>b.n-a.n||a.j-b.j);choices[i]={first:order[0].j,second:null};}
 const evaluate=c=>{const completed=finish(scores,c,traits),own=completed.result.ranked.find(r=>r.slug===role.slug),other=completed.result.ranked.find(r=>r.slug!==role.slug);return {...completed,margin:own.similarity-other.similarity};};
 let best=evaluate(choices);
 for(let pass=0;pass<3&&best.margin<=1e-10;pass++)for(let i=0;i<14;i++){
  let choice=choices[i],evaluation=best;
  for(const first of [null,0,1,2,3]){const test=choices.map((c,j)=>j===i?{first,second:null}:c),r=evaluate(test);if(r.margin>evaluation.margin+1e-12){choice={first,second:null};evaluation=r;}}
  choices[i]=choice;best=evaluation;
 }
 witnesses.push({slug:role.slug,name:role.name,scores,answers,choices,finalAnswers:best.finalAnswers,primary:w.CHARACTER_SLUGS[best.result.primary],strict:best.margin>1e-10,margin:best.margin,limitedEvidence:!!role.evidence.limited});
}
let seed=20261030;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/2**32;};
const n=20000,counts=new Map(coverage.roles.map(r=>[r.slug,{slug:r.slug,name:r.name,count:0,afterFollowup:0,secondary:0,baseline:0}]));let closeBefore=0,closeAfter=0,adaptiveCount=0;
for(let t=0;t<n;t++){
 const fullAnswers=Array.from({length:48},()=>random()<.5?0:1),answers=form.indexes.map(i=>fullAnswers[i]),scores=form.scoreCore(answers).scores,choices=blank();for(let i=0;i<14;i++)choices[i]={first:Math.floor(random()*4),second:null};
 const before=form.plan(w,scores,choices,[]).result;counts.get(w.CHARACTER_SLUGS[before.primary]).count++;if(before.close)closeBefore++;
 const finalAnswers=[];
 for(let slot=0;slot<2;slot++){const next=form.plan(w,scores,choices,finalAnswers).next;if(next.kind==='followup'){adaptiveCount++;finalAnswers.push({kind:'followup',choice:['left','right','both','unknown'][Math.floor(random()*4)]});}else finalAnswers.push({kind:'task',first:Math.floor(random()*4)});}
 const after=form.plan(w,scores,choices,finalAnswers).result;counts.get(w.CHARACTER_SLUGS[after.primary]).afterFollowup++;counts.get(w.CHARACTER_SLUGS[after.secondary]).secondary++;if(after.close)closeAfter++;
 const oldScores=form.axes.map(axis=>(w.QUIZ_QUESTIONS.reduce((s,q,i)=>s+(q[2].axis===axis?q[1][fullAnswers[i]][1]:0),0)/12+1)/2),old=w.PONY_RANK_PROFILES(w.CHARACTER_SLUGS,w.PREFERENCE_PROFILES,oldScores);counts.get(old[0].slug).baseline++;
}
const roles=[...counts.values()].map(r=>({...r,share:r.count/n,afterFollowupShare:r.afterFollowup/n,secondaryShare:r.secondary/n,baselineShare:r.baseline/n})).sort((a,b)=>b.afterFollowup-a.afterFollowup);
const six=new Set(['twilight','applejack','rainbow-dash','pinkie-pie','fluttershy','rarity']);
const report={version:form.version,formVersion:form.version,modelVersion:model.version,inputMode:'single',trials:n,seed:20261030,totalQuestions:48,coreQuestions:32,taskCount:16,fixedTaskCount:14,finalSlots:2,scope:'Synthetic stress test, not measured accuracy or real user prevalence. Final adaptive questions replace task slots inside 48, never add questions.',assumptions:'Independent fair binary core choices; 14 uniform single-choice tasks; each of the final two slots is either a uniform task choice or a uniform adaptive response.',eligibleRoles:coverage.roles.length,uniqueWitnesses:witnesses.filter(r=>r.strict).length,closeShare:closeBefore/n,mainSixShare:roles.filter(r=>six.has(r.slug)).reduce((s,r)=>s+r.afterFollowupShare,0),topThreeShare:roles.slice(0,3).reduce((s,r)=>s+r.afterFollowupShare,0),followupSimulation:{closeShareAfter:closeAfter/n,meanQuestions:adaptiveCount/n,insideTotal:true},tiePreference:'main-six-only-on-exact-equality',roles,witnesses,limitations:['Construct coverage and reachability do not establish reliability or validity','32 core items retain eight per axis, with no fabricated answers to omitted items','Role mappings and initial 60/40 weights remain editorial and uncalibrated']};
fs.writeFileSync(new URL('docs/narrative-form-48-audit.json',root),JSON.stringify(report,null,2)+'\n');fs.writeFileSync(new URL('public/narrative-matching-audit.json',root),JSON.stringify({...report,witnesses:undefined})+'\n');
console.log(JSON.stringify({version:form.version,strict:report.uniqueWitnesses,unresolved:witnesses.filter(r=>!r.strict).map(r=>({slug:r.slug,margin:r.margin})),mainSix:report.mainSixShare,closeAfter:closeAfter/n,top:roles.slice(0,6).map(r=>({name:r.name,share:r.afterFollowupShare}))},null,2));

