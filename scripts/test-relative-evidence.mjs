import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const w={},context={window:w};vm.createContext(context);
for(const file of ['mbti-questions.js','quiz-world.js','characters.js','scoring.js','episode-titles.js','character-evidence.js','narrative-matching.js','personalized-followups.js','quiz-form-48.js'])vm.runInContext(fs.readFileSync(new URL('../public/'+file,import.meta.url),'utf8'),context);
const form=w.PONY_QUIZ_48,blank=()=>form.scenes.map(()=>({first:null,second:null})),mid=[.5,.5,.5,.5];
assert.equal(form.rank(w,mid,blank()).primary,null);
const neutral={left:'stage',right:'craft',choice:'both',leftText:'左侧动作',rightText:'右侧动作'};
assert.equal(form.rank(w,mid,blank(),[neutral]).primary,null);
const one=blank();one[3]={first:0,second:null};const oneResult=form.rank(w,mid,one);
assert(oneResult.ranked.every(r=>!r.support.sufficient));assert(oneResult.close);
const base=form.rank(w,[.625,.5,.5,.5],one),both=form.rank(w,[.625,.5,.5,.5],one,[neutral]);
for(const r of base.ranked){const other=both.ranked.find(x=>x.slug===r.slug);assert.equal(r.similarity,other.similarity);assert.equal(r.interest,other.interest);}
assert.equal(both.neutralContrasts,1);assert.equal(both.observations.length,1);
const directionA=form.rank(w,[.625,.5,.5,.5],blank()),directionB=form.rank(w,[1,.5,.5,.5],blank());
for(const r of directionA.ranked){const other=directionB.ranked.find(x=>x.slug===r.slug);assert(Math.abs(r.mbti-.5)<Math.abs(other.mbti-.5)+1e-12);}
// The same feature is available twice in this scene. Merely offering it does
// not create evidence: selecting below the scene's mean cannot support it.
for(const r of oneResult.ranked){const opts=form.scenes[3].options,values=opts.map(o=>(o.traits.filter(t=>r.traits.includes(t)).length/o.traits.length)**2),mean=values.reduce((s,v)=>s+v,0)/4;if(values[0]<=mean)assert.equal(r.support.positiveScenes.length,0);}
const cross=blank();cross[3]={first:0,second:null};cross[12]={first:1,second:null};const supported=form.rank(w,mid,cross).ranked.find(r=>r.slug==='sweetie-belle');
assert(supported.support.sufficient);assert.equal(supported.support.chapters.length,2);
const unknown={...neutral,choice:'unknown'};assert.equal(form.rank(w,mid,blank(),[unknown]).primary,null);
console.log('Passed: no forced role without evidence; both/unknown supply no directional points; cross-context support required; near-midpoint directions damped; unchosen alternatives enter opportunity comparison.');
