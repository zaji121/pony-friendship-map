import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const shared=['mbti-questions.js','quiz-world.js','characters.js','scoring.js','episode-titles.js','character-evidence.js','narrative-matching.js','quiz-form-48-v4.js','personalized-followups.js','quiz-form-48-v5.js'];
function load(files){const w={},context=vm.createContext({window:w});for(const file of files)vm.runInContext(fs.readFileSync('public/'+file,'utf8'),context,{filename:file});return w;}
const w=load([...shared,'quiz-form-48-v6.js','question-copy-v7.js','quiz-form-48.js','narrative-result.js']);
const form=w.PONY_QUIZ_48,old=w.PONY_QUIZ_48_V6,plain=value=>JSON.parse(JSON.stringify(value));
const six=new Set(['twilight','applejack','rainbow-dash','pinkie-pie','fluttershy','rarity']);
assert.equal(form.version,'festival-48-single-20261101-v7');
assert.equal(old.version,'festival-48-single-20261031-v6');
assert.equal(form.questions.length,32);assert.equal(form.scenes.length,16);assert.equal(form.fixedTaskCount,12);assert.equal(form.finalSlots,4);assert.equal(form.total,48);
assert.equal(form.questions.length+form.fixedTaskCount+form.finalSlots,48);
assert.equal(form.personalizedQuestions.length,12);
for(const axis of form.axes){const qs=form.questions.filter(q=>q[2].axis===axis);assert.equal(qs.length,8);assert.equal(qs.filter(q=>q[1][0][1]===1).length,4);}
for(let chapter=0;chapter<4;chapter++)assert.equal(form.questions.filter(q=>q[2].chapter===chapter).length,8);
assert.deepEqual(plain(form.indexes),plain(old.indexes));
assert.deepEqual(plain(form.questions.map(q=>({axis:q[2].axis,chapter:q[2].chapter,scores:q[1].map(a=>a[1])}))),plain(old.questions.map(q=>({axis:q[2].axis,chapter:q[2].chapter,scores:q[1].map(a=>a[1])}))));
assert.deepEqual(plain(form.scenes.map(s=>({chapter:s.chapter,traits:s.options.map(o=>o.traits)}))),plain(old.scenes.map(s=>({chapter:s.chapter,traits:s.options.map(o=>o.traits)}))));
assert.deepEqual(plain(form.contrasts.map(c=>c.slice(0,4))),plain(old.contrasts.map(c=>c.slice(0,4))));
assert.deepEqual(plain(form.personalizedQuestions.map(q=>[q.id,q.left,q.right,q.candidateSlugs])),plain(old.personalizedQuestions.map(q=>[q.id,q.left,q.right,q.candidateSlugs])));
assert.deepEqual(Object.keys(form.followupActions).sort(),Object.keys(w.PONY_NARRATIVE_MATCH.followupActions).sort());

// Check the active resolved bank, rather than matching obsolete frozen copy.
const answers=[],stems=[];
const answer=(text,where)=>answers.push({text,where});
const stem=(text,where)=>stems.push({text,where});
form.questions.forEach((q,i)=>{stem(q[0],'core-'+i);q[1].forEach((a,j)=>answer(a[0],`core-${i}-${j}`));});
form.scenes.forEach((s,i)=>{stem(s.stem,'scene-'+i);s.options.forEach((o,j)=>answer(o.text,`scene-${i}-${j}`));});
form.contrasts.forEach((c,i)=>{stem(c[4],'contrast-'+i);answer(c[5],`contrast-${i}-left`);answer(c[6],`contrast-${i}-right`);});
form.personalizedQuestions.forEach(q=>{stem(q.stem,q.id);answer(q.leftText,q.id+'-left');answer(q.rightText,q.id+'-right');});
Object.entries(form.followupActions).forEach(([key,text])=>answer(text,'action-'+key));
for(const entry of [...stems,...answers]){
 assert.equal(typeof entry.text,'string',entry.where);assert(entry.text.trim(),entry.where);
 assert(!/你有点烦|你很生气|你很烦|你不开心|被识破|暂时选不出|都不太想[／/]暂时说不准|你更习惯怎么想办法/.test(entry.text),`Retired wording reappeared at ${entry.where}: ${entry.text}`);
 assert(!/\[object Object\]|undefined/.test(entry.text),entry.where);
}
const normalize=text=>text.normalize('NFKC').replace(/[\s，。！？；：、,.!?;:"“”‘’（）()·…—／/]/g,'');
const seen=new Map(),duplicates=[];
for(const entry of answers){const key=normalize(entry.text);if(seen.has(key))duplicates.push({first:seen.get(key),second:entry});else seen.set(key,entry);}
assert.deepEqual(duplicates,[],'Complete answer wording is repeated across the active core/task/adaptive bank; review the reported pairs instead of weakening this check');

// A complete sentence's editorial naturalness cannot be proven by a string test.
// These checks lock the reviewed regressions and preserve the scoring contracts.
let seed=20261101;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/2**32;};
for(const answers of [Array(32).fill(0),Array(32).fill(1),...Array.from({length:160},()=>Array.from({length:32},()=>random()<.5?0:1))]){
 const a=form.scoreCore(answers),b=old.scoreCore(answers);
 assert.deepEqual(plain(a.scores),plain(b.scores));assert.deepEqual(plain(a.totals),plain(b.totals));assert.equal(a.type,b.type);
}
const signature=next=>next.kind==='task'?{kind:next.kind,slot:next.slot,sceneIndex:next.sceneIndex}:{kind:next.kind,slot:next.slot,id:next.question.id??null,left:next.question.left,right:next.question.right,candidates:plain(next.question.candidateSlugs)};
const rankedScores=result=>plain(result.ranked.map(r=>({slug:r.slug,similarity:r.similarity,mbti:r.mbti,interest:r.interest,support:r.support})).sort((a,b)=>a.slug.localeCompare(b.slug)));
const archives=['docs/narrative-form-48-v5-baseline.json','docs/narrative-form-48-v6-baseline.json'];let historical=0;
for(const file of archives){const archive=JSON.parse(fs.readFileSync(file,'utf8'));assert.equal(archive.witnesses.length,36);
 for(const witness of archive.witnesses){
  const input={version:archive.modelVersion,formVersion:archive.formVersion,selectionMode:'single',choices:witness.choices,finalAnswers:witness.finalAnswers};
  const result=w.PONY_NARRATIVE_SCORE(witness.answers,input);
  assert.equal(result.narrative.primary.slug,witness.slug);assert.equal(result.matchingVersion,archive.formVersion);assert.equal(result.formVersion,archive.formVersion);
  assert.deepEqual(plain(result.answers),witness.answers);assert.deepEqual(plain(result.scores),witness.scores);assert.deepEqual(plain(w.PONY_NARRATIVE_SCORE(witness.answers,input)),plain(result));historical++;
 }
}
const prior=JSON.parse(fs.readFileSync(archives[1],'utf8'));
for(const witness of prior.witnesses){
 for(let slot=0;slot<4;slot++){
  const a=old.plan(w,witness.scores,witness.choices,witness.finalAnswers.slice(0,slot)),b=form.plan(w,witness.scores,witness.choices,witness.finalAnswers.slice(0,slot));
  assert.deepEqual(signature(b.next),signature(a.next),'Copy changes must not silently change adaptive item identities or coded traits');
  assert.deepEqual(rankedScores(b.result),rankedScores(a.result),'Intermediate raw scoring/evidence must not change with copy');
  assert.equal(b.result.productPreference,undefined,'Final presentation preference must not alter adaptive routing');
 }
 const oldFinal=old.plan(w,witness.scores,witness.choices,witness.finalAnswers),newFinal=form.plan(w,witness.scores,witness.choices,witness.finalAnswers);
 assert.deepEqual(rankedScores(newFinal.result),rankedScores(oldFinal.result));
 for(const explanation of newFinal.result.ranked.flatMap(r=>r.explanations)){
  if(typeof explanation.scene==='number')assert.equal(explanation.text,form.scenes[explanation.scene].options[newFinal.choices[explanation.scene].first].text);
  else{const slot=Number(explanation.scene.replace('followup-','')),followup=newFinal.followups[slot];assert.equal(explanation.text,followup.choice==='left'?followup.leftText:followup.rightText);}
 }
 for(const role of newFinal.result.ranked)if(role.support.sufficient){assert(role.support.positiveScenes.length>=2);assert(role.support.chapters.length>=2);assert(role.support.traits.length>=2);}
}

assert.equal(form.mainSixPreference.scoreTolerance,.04);assert.equal(form.mainSixPreference.mbtiTolerance,.03);assert.equal(old.mainSixPreference.scoreTolerance,.03);
function fixture(gap,mbtiGap,sufficient=true,leaderSufficient=true){return {primary:17,secondary:2,ranked:[{slug:'daring-do',index:17,similarity:.8,mbti:.8,support:{sufficient:leaderSufficient}},{slug:'rainbow-dash',index:2,similarity:.8-gap,mbti:.8-mbtiGap,support:{sufficient}},{slug:'spike',index:7,similarity:.6,mbti:.5,support:{sufficient:true}}]};}
for(const [gap,mbtiGap,sufficient,leaderSufficient,applied]of [[.04,.03,true,true,true],[.04001,.01,true,true,false],[.02,.03001,true,true,false],[.02,.01,false,true,false],[.02,.01,true,false,false]]){
 const input=fixture(gap,mbtiGap,sufficient,leaderSufficient),before=rankedScores(input),output=form.preferMainSix(input);
 assert.equal(output.productPreference.applied,applied);assert.equal(output.primary,applied?2:17);assert.deepEqual(rankedScores(output),before);if(applied){assert.equal(output.secondary,17);assert.equal(output.productPreference.rawPrimary,'daring-do');assert.equal(output.productPreference.displayedPrimary,'rainbow-dash');}
}

// Old cached V6 HTML lacks both the V6 snapshot module and the new copy module.
const cached=load([...shared,'quiz-form-48.js','narrative-result.js']);
assert.equal(cached.PONY_QUIZ_48.version,old.version);assert.equal(cached.PONY_QUIZ_48.mainSixPreference.scoreTolerance,.03);
for(const witness of prior.witnesses){const result=cached.PONY_QUIZ_48.plan(cached,witness.scores,witness.choices,witness.finalAnswers).result;assert.equal(cached.CHARACTER_SLUGS[result.primary],witness.slug);}

const audit=JSON.parse(fs.readFileSync('docs/narrative-form-48-audit.json','utf8'));
assert.equal(audit.formVersion,form.version,'The official audit must cover the currently loaded V7 form');assert.equal(audit.witnesses.length,36);assert.equal(audit.uniqueWitnesses,36);
const hit=new Set();
for(const witness of audit.witnesses){assert(witness.strict);assert(witness.margin>0);const input={version:audit.modelVersion,formVersion:audit.formVersion,selectionMode:'single',choices:witness.choices,finalAnswers:witness.finalAnswers},result=w.PONY_NARRATIVE_SCORE(witness.answers,input);assert.equal(result.narrative.primary.slug,witness.slug);assert.deepEqual(plain(result.scores),witness.scores);hit.add(witness.slug);if(result.narrative.productPreference.applied){assert(six.has(result.narrative.primary.slug));assert(result.narrative.primary.support.sufficient);assert(result.narrative.secondary.support.sufficient);}}
assert.equal(hit.size,36);
console.log(`Passed: ${answers.length} nonduplicate active answer texts, 32+12+4=48, unchanged MBTI coding and trait mappings, ${historical} V5/V6 historical witnesses, unchanged adaptive identities/evidence, V7 0.04/0.03 evidence guards and untouched raw scores, cached V6 fallback, all 36 strict V7 final-result witnesses. These checks do not establish psychometric validity or automatically judge naturalness.`);
