import fs from 'node:fs';import assert from 'node:assert/strict';
import {scoreAnswers} from '../supabase/functions/quiz-api/quiz-data.js';
const report=JSON.parse(fs.readFileSync(new URL('../docs/narrative-matching-audit.json',import.meta.url),'utf8'));
// The bank alternates option order after every four questions.
const answersFor=scores=>{const counts=scores.map(v=>Math.round(v*12));return Array.from({length:48},(_,i)=>{const positive=counts[i%4]-->0;return i%8>=4?(positive?1:0):(positive?0:1);});};
const prior=JSON.parse(fs.readFileSync(new URL('../docs/narrative-matching-v2-baseline.json',import.meta.url),'utf8'));
for(const edition of [prior,report])for(const witness of edition.witnesses){
 const answers=answersFor(witness.scores),legacy=scoreAnswers(answers);
 assert.equal(legacy.matchingVersion,'20261030-roster36');assert.equal(legacy.narrative,undefined);
 const input={version:edition.version,choices:witness.choices,followups:[]};
 const result=scoreAnswers(answers,input);
 assert.deepEqual(result.scores,legacy.scores);assert.deepEqual(result.answers,answers);
 assert.equal(result.narrative.primary.slug,witness.slug);
 assert.equal(result.narrative.version,edition.version);
 assert.equal(result.matchingVersion,edition.version);
 assert(result.narrative.primary.explanations.length>0);
 assert.deepEqual(scoreAnswers(answers,input),result);
}
assert.throws(()=>scoreAnswers(Array(48).fill(0),{version:'bad',choices:[],followups:[]}));
assert.throws(()=>scoreAnswers(Array(48).fill(0),{version:report.version,choices:report.witnesses[0].choices,followups:[{left:'care',right:'care',choice:'left'}]}));
const compact=JSON.parse(fs.readFileSync(new URL('../docs/narrative-form-48-audit.json',import.meta.url),'utf8'));
for(const compact of [JSON.parse(fs.readFileSync(new URL('../docs/narrative-form-48-v2-baseline.json',import.meta.url),'utf8')),JSON.parse(fs.readFileSync(new URL('../docs/narrative-form-48-v1-baseline.json',import.meta.url),'utf8')),JSON.parse(fs.readFileSync(new URL('../docs/narrative-form-48-audit.json',import.meta.url),'utf8'))])for(const witness of compact.witnesses){
 const input={version:compact.modelVersion,formVersion:compact.formVersion,selectionMode:'single',choices:witness.choices,finalAnswers:witness.finalAnswers};
 const result=scoreAnswers(witness.answers,input);
 assert.equal(result.narrative.primary.slug,witness.slug);
 assert.equal(result.matchingVersion,compact.formVersion);
 assert.equal(result.itemsPerAxis,8);assert.equal(result.sensitivity.items,32);
 assert.equal(result.answers.length,32);assert.deepEqual(result.answers,witness.answers);
 assert.deepEqual(result.scores,witness.scores);assert.deepEqual(scoreAnswers(witness.answers,input),result);
 assert.throws(()=>scoreAnswers(witness.answers.slice(1),input));
 assert.throws(()=>scoreAnswers(witness.answers,{...input,finalAnswers:[]}));
 assert.throws(()=>scoreAnswers(witness.answers,{...input,choices:input.choices.map((c,i)=>i===14?{first:0,second:null}:c)}));
 assert.throws(()=>scoreAnswers(witness.answers,{...input,choices:input.choices.map((c,i)=>i===0?{first:0,second:1}:c)}));
}
console.log('48-total form: all 36 strict witnesses, 32 real core answers, 8 items per axis, deterministic adaptive replay and malformed inputs passed.');
console.log('Generated backend: all 36 witnesses in BOTH narrative editions, unchanged legacy scoring, score/answer preservation, deterministic replay and invalid context rejection passed.');


