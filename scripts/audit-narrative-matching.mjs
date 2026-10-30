import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url),w={},context={window:w};vm.createContext(context);
for(const file of ['mbti-questions.js','quiz-world.js','characters.js','scoring.js','episode-titles.js','character-evidence.js','narrative-matching.js'])vm.runInContext(fs.readFileSync(new URL('public/'+file,root),'utf8'),context);
const model=w.PONY_NARRATIVE_MATCH,coverage=JSON.parse(fs.readFileSync(new URL('docs/role-reachability.json',root),'utf8')),names=new Map(coverage.roles.map(r=>[r.slug,r.name]));
const blank=()=>model.scenes.map(()=>({first:null,second:null}));
assert.equal(model.rank(w,[.5,.5,.5,.5],blank()).primary,null);
assert.throws(()=>model.rank(w,[.5,.5,.5,.5],model.scenes.map(()=>({first:0,second:0}))));
const snapshots=JSON.stringify(w.PREFERENCE_PROFILES),witnesses=[];
for(const role of coverage.roles){
 assert(model.roleTraits[role.slug]?.length,'Missing role traits: '+role.slug);
 const scores=role.profile.map(v=>Math.round(v*12)/12),target=new Set(model.roleTraits[role.slug]);
 let choices=model.scenes.map(s=>{const order=s.options.map((o,i)=>({i,v:o.traits.filter(t=>target.has(t)).length})).sort((a,b)=>b.v-a.v||a.i-b.i);return {first:order[0].i,second:order[1].v>0?order[1].i:null};});
 const evaluate=c=>{const r=model.rank(w,scores,c),own=r.ranked.find(x=>x.slug===role.slug),other=r.ranked.find(x=>x.slug!==role.slug);return {margin:own.similarity-other.similarity,result:r};};
 let evaluation=evaluate(choices);
 for(let pass=0;pass<3;pass++){
  let changed=false;
  for(let i=0;i<choices.length;i++){
   let best=choices[i],margin=evaluation.margin;
   const options=[{first:null,second:null}];for(let a=0;a<4;a++){options.push({first:a,second:null});for(let b=0;b<4;b++)if(a!==b)options.push({first:a,second:b});}
   for(const choice of options){const trial=choices.map((v,j)=>j===i?choice:v),e=evaluate(trial);if(e.margin>margin+1e-12){margin=e.margin;best=choice;}}
   if(best!==choices[i]){choices[i]=best;evaluation=evaluate(choices);changed=true;}
  }
  if(!changed)break;
 }
 witnesses.push({slug:role.slug,name:role.name,scores,choices,primary:w.CHARACTER_SLUGS[evaluation.result.primary],strict:evaluation.margin>1e-10,margin:evaluation.margin,limitedEvidence:!!role.evidence.limited,scope:'Synthetic algorithm witness, not real user or validated character typing'});
}
assert.equal(JSON.stringify(w.PREFERENCE_PROFILES),snapshots);
let seed=20261030;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/2**32;};
const n=20000,counts=new Map(coverage.roles.map(r=>[r.slug,{slug:r.slug,name:r.name,count:0,secondary:0,baseline:0,afterFollowup:0}]));let close=0,noMBTI=0,closeAfter=0,totalFollowups=0;
let followSeed=20261031;const followRandom=()=>{followSeed=(Math.imul(followSeed,1664525)+1013904223)>>>0;return followSeed/2**32;};
let extraSeed=20261032;const extraRandom=()=>{extraSeed=(Math.imul(extraSeed,1664525)+1013904223)>>>0;return extraSeed/2**32;};
const chooseTask=random=>{const first=Math.floor(random()*4);let second=null;if(random()<.5){second=Math.floor(random()*3);if(second>=first)second++;}return {first,second};};
for(let i=0;i<n;i++){
 const scores=Array.from({length:4},()=>Array.from({length:12},()=>random()<.5?1:0).reduce((s,v)=>s+v,0)/12);
 // Stress-test only: every scene has a uniformly selected first task and,
 // with probability .5, a uniformly selected distinct second task.
 const originalChoices=Array.from({length:12},()=>chooseTask(random));
 const choices=model.scenes.map(scene=>scene.originalIndex===null?chooseTask(extraRandom):originalChoices[scene.originalIndex]);
 const r=model.rank(w,scores,choices);counts.get(w.CHARACTER_SLUGS[r.primary]).count++;counts.get(w.CHARACTER_SLUGS[r.secondary]).secondary++;if(r.close)close++;if(!r.signal.mbti)noMBTI++;
 let after=r;const followups=[];let question;
 while((question=model.nextFollowup(after,followups))){followups.push({left:question.left,right:question.right,choice:['left','right','both','unknown'][Math.floor(followRandom()*4)]});after=model.rank(w,scores,choices,followups);}
 totalFollowups+=followups.length;if(after.close)closeAfter++;counts.get(w.CHARACTER_SLUGS[after.primary]).afterFollowup++;
 const base=w.PONY_RANK_PROFILES(w.CHARACTER_SLUGS,w.PREFERENCE_PROFILES,scores);counts.get(base[0].slug).baseline++;
}
const roles=[...counts.values()].map(r=>({...r,share:r.count/n,secondaryShare:r.secondary/n,baselineShare:r.baseline/n,afterFollowupShare:r.afterFollowup/n})).sort((a,b)=>b.count-a.count);
const six=new Set(['twilight','applejack','rainbow-dash','pinkie-pie','fluttershy','rarity']);
const report={version:model.version,trials:n,seed:20261030,scope:'Synthetic independent-choice simulation. All outputs are provisional closest-character recommendations; no accuracy, identity probability, or validity claim.',assumptions:'48 independent fair binary MBTI answers; 16 independent uniform first-task choices; optional distinct second task with probability .5.',parameters:{mbtiWeight:.6,interestWeight:.4,secondPriority:.5},uniqueWitnesses:witnesses.filter(r=>r.strict).length,eligibleRoles:coverage.roles.length,closeResults:close,closeShare:close/n,noMBTIDirection:noMBTI,mainSixShare:roles.filter(r=>six.has(r.slug)).reduce((s,r)=>s+r.share,0),topThreeShare:roles.slice(0,3).reduce((s,r)=>s+r.share,0),roles,witnesses,limitations:['Similarity is not a calibrated probability','Weights and role activity associations remain provisional','Sparse-source characters retain evidence warnings','A unique synthetic witness does not prove discriminant validity','All close results remain in the denominator; no abstention-based distribution claim']};
report.taskCount=model.scenes.length;
report.assumptions='48 independent fair binary MBTI answers; uniform original 12 task choices shared with the v2 comparison; four new uniform task choices use seed 20261032; optional distinct second task with probability .5.';
report.followupSimulation={seed:20261031,assumptions:'Each offered follow-up independently chooses left/right/both/unknown with equal probability; not real users.',closeShareAfter:closeAfter/n,meanQuestions:totalFollowups/n};
fs.writeFileSync(new URL('docs/narrative-matching-audit.json',root),JSON.stringify(report,null,2)+'\n');
const publicReport={...report,witnesses:undefined};fs.writeFileSync(new URL('public/narrative-matching-audit.json',root),JSON.stringify(publicReport)+'\n');
const pct=v=>(100*v).toFixed(2)+'%';const lines=['# 连贯庆典匹配v3 · 离线检查','',report.scope,'',`- 36位中有${report.uniqueWitnesses}位找到严格第一的合成测试答案。这证明算法可达，不证明角色人格判定有效。`,`- 主角团合计${pct(report.mainSixShare)}，前三位合计${pct(report.topThreeShare)}。`,`- 追问前近似候选${pct(report.closeShare)}，随机追问后${pct(closeAfter/n)}；不能把第一候选当作已精准区分。`,'','|角色|新规则第一候选|随机追问后第一候选|同批输入的旧规则|','|---|---:|---:|---:|',...roles.map(r=>`|${r.name}|${pct(r.share)}|${pct(r.afterFollowupShare)}|${pct(r.baselineShare)}|`),'','角色活动特征均是待验证的编辑联想；不以反派联想判断用户善恶。新规则保持独立预览，不替换正式测评与历史结果。'];fs.writeFileSync(new URL('docs/NARRATIVE_MATCHING_AUDIT.md',root),lines.join('\n')+'\n');
console.log(JSON.stringify({version:report.version,trials:n,uniqueWitnesses:report.uniqueWitnesses,unresolved:witnesses.filter(r=>!r.strict).map(r=>r.slug),closeShare:report.closeShare,followupSimulation:report.followupSimulation,mainSixShare:report.mainSixShare,topThreeShare:report.topThreeShare,top:roles.slice(0,6)},null,2));
