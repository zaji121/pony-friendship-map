import {readFile,writeFile,mkdir} from 'node:fs/promises';
const target=new URL('../supabase/functions/quiz-api/',import.meta.url);
await mkdir(target,{recursive:true});
let bundle='// Generated from the same question bank and scoring used by the browser.\nconst window={};\n';
for(const file of ['mbti-questions.js','quiz-world.js','characters.js','scoring.js'])bundle+=await readFile(new URL('../public/'+file,import.meta.url),'utf8')+'\n';
bundle+='export function scoreAnswers(answers){return window.PONY_SCORE(window.QUIZ_QUESTIONS,window.CHARACTER_SLUGS,window.PREFERENCE_PROFILES,answers);}\n';
await writeFile(new URL('quiz-data.js',target),bundle);
console.log('Supabase scoring bundle prepared.');
