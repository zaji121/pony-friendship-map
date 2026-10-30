import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url),w={},context={window:w};vm.createContext(context);
for(const file of ['mbti-questions.js','quiz-world.js','characters.js','scoring.js','episode-titles.js','character-evidence.js','narrative-matching.js'])vm.runInContext(fs.readFileSync(new URL('public/'+file,root),'utf8'),context);
const model=w.PONY_NARRATIVE_MATCH,report=JSON.parse(fs.readFileSync(new URL('docs/narrative-matching-audit.json',root),'utf8'));
const empty=model.scenes.map(()=>({first:null,second:null}));
assert.equal(model.rank(w,[.5,.5,.5,.5],empty).primary,null);
assert.equal(model.nextFollowup(model.rank(w,[.5,.5,.5,.5],empty)),null);
assert.equal(model.rank(w,[.5,.5,.5,.5],model.scenes.map(()=>({first:0,second:null}))).signal.mbti,false);
assert.throws(()=>model.rank(w,[1,1,1,1],model.scenes.map(()=>({first:0,second:0}))));
assert.throws(()=>model.rank(w,[NaN,1,1,1],empty));
assert.throws(()=>model.rank(w,[1,1,1,1],empty,[{left:'bad',right:'care',choice:'left'}]));
assert.throws(()=>model.rank(w,[1,1,1,1],empty,Array(4).fill({left:'care',right:'strategy',choice:'left'})));
const before=JSON.stringify(w.PREFERENCE_PROFILES);
for(const witness of report.witnesses){
 const remaining=witness.scores.map(v=>Math.round(v*12));
 const answers=w.QUIZ_QUESTIONS.map(q=>{const axis=['EI','SN','TF','JP'].indexOf(q[2].axis),positive=remaining[axis]-->0;return q[1].findIndex(o=>o[1]===(positive?1:-1));});
 const base=w.PONY_SCORE(w.QUIZ_QUESTIONS,w.CHARACTER_SLUGS,w.PREFERENCE_PROFILES,answers);
 const r=model.rank(w,Array.from(base.scores),witness.choices),again=model.rank(w,Array.from(base.scores),witness.choices);
 assert.equal(w.CHARACTER_SLUGS[r.primary],witness.slug,'Witness round trip: '+witness.slug);
 assert.deepEqual(r,again);
 assert(r.ranked[0].similarity>r.ranked[1].similarity);
 assert(r.ranked[0].explanations.length>0);
 assert(!w.INACTIVE_CHARACTERS.includes(w.CHARACTER_SLUGS[r.primary]));
 const follow=model.nextFollowup(r);
 if(follow){const after=model.rank(w,Array.from(base.scores),witness.choices,[{left:follow.left,right:follow.right,choice:'unknown'}]);assert.deepEqual(after.ranked.map(x=>x.slug),r.ranked.map(x=>x.slug));}
}
assert.equal(JSON.stringify(w.PREFERENCE_PROFILES),before);
assert.equal(report.roles.reduce((s,r)=>s+r.count,0),report.trials);
assert.equal(report.roles.reduce((s,r)=>s+r.afterFollowup,0),report.trials);
assert.equal(new Set(Object.values(model.roleTraits).map(v=>[...v].sort().join(','))).size,36);
assert(!fs.readFileSync(new URL('public/index.html',root),'utf8').includes('narrative-matching.js'));
assert(fs.readFileSync(new URL('scripts/prepare-backend.mjs',root),'utf8').includes('narrative-result.js'));
console.log('36 full-answer witness round trips and deterministic, missing-input, traceability, validation, follow-up, roster and production-isolation checks passed.');
