import fs from 'node:fs';import assert from 'node:assert/strict';
import {scoreAnswers} from '../supabase/functions/quiz-api/quiz-data.js';
const report=JSON.parse(fs.readFileSync(new URL('../docs/narrative-matching-audit.json',import.meta.url),'utf8'));
// The bank alternates option order after every four questions.
const answersFor=scores=>{const counts=scores.map(v=>Math.round(v*12));return Array.from({length:48},(_,i)=>{const positive=counts[i%4]-->0;return i%8>=4?(positive?1:0):(positive?0:1);});};
for(const witness of report.witnesses){
 const answers=answersFor(witness.scores),legacy=scoreAnswers(answers);
 assert.equal(legacy.matchingVersion,'20261030-roster36');assert.equal(legacy.narrative,undefined);
 const input={version:report.version,choices:witness.choices,followups:[]};
 const result=scoreAnswers(answers,input);
 assert.deepEqual(result.scores,legacy.scores);assert.deepEqual(result.answers,answers);
 assert.equal(result.narrative.primary.slug,witness.slug);
 assert.equal(result.narrative.version,report.version);
 assert.equal(result.matchingVersion,report.version);
 assert(result.narrative.primary.explanations.length>0);
 assert.deepEqual(scoreAnswers(answers,input),result);
}
assert.throws(()=>scoreAnswers(Array(48).fill(0),{version:'bad',choices:[],followups:[]}));
assert.throws(()=>scoreAnswers(Array(48).fill(0),{version:report.version,choices:report.witnesses[0].choices,followups:[{left:'care',right:'care',choice:'left'}]}));
console.log('Generated backend: all 36 narrative witnesses, unchanged legacy scoring, score/answer preservation, deterministic replay and invalid context rejection passed.');
