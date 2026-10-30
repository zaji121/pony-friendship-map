import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const w={},context={window:w};vm.createContext(context);
for(const file of ['mbti-questions.js','quiz-world.js','characters.js','scoring.js','episode-titles.js','character-evidence.js','narrative-matching.js','quiz-form-48-v1.js','quiz-form-48.js'])vm.runInContext(fs.readFileSync(new URL('../public/'+file,import.meta.url),'utf8'),context);
const form=w.PONY_QUIZ_48,model=w.PONY_NARRATIVE_MATCH,empty=form.scenes.map(()=>({first:null,second:null}));
assert.equal(form.total,48);assert.equal(form.contrasts.length,15);
const pairs=new Set();
for(const row of form.contrasts){
 const [a,b,left,right,stem,leftText,rightText]=row;
 const key=[a,b].sort().join('|');assert(!pairs.has(key));pairs.add(key);
 assert(model.roleTraits[a].includes(left));assert(!model.roleTraits[b].includes(left));
 assert(model.roleTraits[b].includes(right));assert(!model.roleTraits[a].includes(right));
 for(const reverse of [false,true]){
  const result=model.rank(w,[.5,.5,.5,.5],empty),order=reverse?[b,a]:[a,b];
  result.ranked.sort((x,y)=>(order.includes(x.slug)?order.indexOf(x.slug):-1)+(order.includes(x.slug)?-3:0)-((order.includes(y.slug)?order.indexOf(y.slug):-1)+(order.includes(y.slug)?-3:0)));
  result.primary=result.ranked[0].index;result.close=true;
  const q=form.nextFollowup(result,[]);assert.equal(q.stem,stem);
  assert.equal(q.left,reverse?right:left);assert.equal(q.right,reverse?left:right);
  assert.equal(q.leftText,reverse?rightText:leftText);assert.equal(q.rightText,reverse?leftText:rightText);
 }
}
// Actual output explanations must quote the displayed action, including an
// adaptive action. No change in interests is allowed to rewrite axis scores.
const report=JSON.parse(fs.readFileSync(new URL('../docs/narrative-form-48-audit.json',import.meta.url),'utf8'));
for(const witness of report.witnesses){
 const before=Array.from(form.scoreCore(witness.answers).scores),planned=form.plan(w,before,witness.choices,witness.finalAnswers);
 assert.deepEqual(Array.from(form.scoreCore(witness.answers).scores),before);
 for(const o of planned.result.observations){
  if(Number.isInteger(o.scene))assert.equal(o.text,form.scenes[o.scene].options[planned.choices[o.scene].first].text);
  else{const f=planned.followups[Number(o.scene.slice('followup-'.length))];assert([f.leftText,f.rightText].includes(o.text));}
 }
}
console.log('Passed: all 15 main-six pairs in both orientations; shared scenes, valid distinct feature coding, actual-answer explanations and unchanged MBTI scores. This is software/content consistency, not validity evidence.');
