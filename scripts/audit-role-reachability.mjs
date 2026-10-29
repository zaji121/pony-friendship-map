import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
const root=new URL('../',import.meta.url),read=p=>fs.readFileSync(new URL(p,root),'utf8');
const files=['mbti-questions.js','quiz-world.js','characters.js','scoring.js'];
const c={window:{}};vm.createContext(c);
for(const file of [...files,'episode-titles.js','character-evidence.js'])vm.runInContext(read('public/'+file),c,{filename:file});
const w=c.window,q=w.QUIZ_QUESTIONS,axes=['EI','SN','TF','JP'];
assert.equal(q.length,48);
for(const axis of axes){assert.equal(q.filter(x=>x[2].axis===axis).length,12);}
for(const item of q){assert.equal(item[1].length,2);assert.deepEqual(Array.from(item[1],o=>o[1]).sort(),[-1,1]);}
const app=read('public/app.js'),start=app.indexOf('const PONIES = [')+'const PONIES = '.length,end=app.indexOf('\n  ];',start)+4;
const core=vm.runInContext('('+app.slice(start,end)+')',c);
const names=Object.fromEntries([...core,...w.EXTRA_CHARACTERS].map(p=>[p.slug,w.CHARACTER_NAMES[p.slug]||p.name]));
const roles=w.CHARACTER_SLUGS.map((slug,i)=>({slug,index:i,name:names[slug],profile:Array.from(w.PREFERENCE_PROFILES[slug]),primaryCells:0,strictPrimaryCells:0,secondaryCells:0,answerPatterns:0,best:null})).filter(r=>!w.INACTIVE_CHARACTERS.includes(r.slug));
assert.equal(roles.length,40);assert.equal(new Set(roles.map(r=>r.slug)).size,40);
const byIndex=new Map(roles.map(r=>[r.index,r]));
const choose=[1,12,66,220,495,792,924,792,495,220,66,12,1];
let cells=0,patterns=0;
for(let a=0;a<=12;a++)for(let b=0;b<=12;b++)for(let d=0;d<=12;d++)for(let e=0;e<=12;e++){
 const positive=[a,b,d,e],scores=positive.map(n=>((2*n-12)/12+1)/2);
 const fits=w.PONY_RANK_PROFILES(w.CHARACTER_SLUGS,w.PREFERENCE_PROFILES,scores);
 const first=byIndex.get(fits[0].i),second=byIndex.get(fits[1].i),margin=fits[1].dist-fits[0].dist;
 const weight=choose[a]*choose[b]*choose[d]*choose[e];
 first.primaryCells++;second.secondaryCells++;first.answerPatterns+=weight;patterns+=weight;cells++;
 if(margin>1e-10){first.strictPrimaryCells++;if(!first.best||margin>first.best.margin)first.best={positive,scores,margin};}
}
assert.equal(cells,13**4);assert.equal(patterns,2**48);
for(const role of roles){
 assert(role.strictPrimaryCells>0,role.slug+' has no unique winning score');
 const remaining=role.best.positive.slice();
 const answers=q.map(item=>{const axis=axes.indexOf(item[2].axis),positive=remaining[axis]>0;if(positive)remaining[axis]--;return item[1].findIndex(o=>o[1]===(positive?1:-1));});
 const result=w.PONY_SCORE(q,w.CHARACTER_SLUGS,w.PREFERENCE_PROFILES,answers);
 assert.equal(result.primary,role.index,'Production scorer disagrees for '+role.slug);
 assert.deepEqual(Array.from(result.scores),role.best.scores);
 const ranked=w.PONY_RANK_PROFILES(w.CHARACTER_SLUGS,w.PREFERENCE_PROFILES,result.scores);
 assert.equal(result.secondary,ranked[1].i);
 role.witness={answers,letters:answers.map(i=>'AB'[i]).join(''),positiveCounts:role.best.positive,scores:role.best.scores,secondary:w.CHARACTER_SLUGS[result.secondary],margin:role.best.margin};
 const evidence=w.CHARACTER_EVIDENCE[role.slug];
 role.evidence={facts:evidence?.facts||[],interpretation:evidence?.interpretation||'',limits:evidence?.limits||'',limited:!!evidence?.limited,special:!!evidence?.special};
 assert(role.evidence.facts.length>0,'Missing story source '+role.slug);
 delete role.best;
}
const fingerprint=crypto.createHash('sha256').update(files.map(f=>read('public/'+f)).join('\n')).digest('hex');
const report={generatedAt:new Date().toISOString(),questionVersion:w.QUESTION_VERSION,fingerprint,dimensions:axes,questions:48,itemsPerDimension:12,scoreCells:cells,representedAnswerPatterns:String(patterns),eligibleRoles:40,reachableRoles:roles.filter(r=>r.primaryCells>0).length,strictReachableRoles:roles.filter(r=>r.strictPrimaryCells>0).length,productionWitnessesVerified:roles.length,scope:'算法覆盖检查，不是心理测量效度验证。角色侧写是剧情编辑推断，不是官方MBTI类型。格点数不是实际用户出现概率。',roles};
fs.mkdirSync(new URL('docs/',root),{recursive:true});
fs.writeFileSync(new URL('docs/role-reachability.json',root),JSON.stringify(report,null,2)+'\n');
fs.writeFileSync(new URL('public/role-audit.json',root),JSON.stringify(report)+'\n');
const lines=['# 40角色可达性审校','',`当前题库：${w.QUESTION_VERSION}。穷举 ${cells.toLocaleString('en-US')} 个四维可达分数组合，覆盖全部 2^48 种二选一作答模式。`,'','40 / 40 位角色都有严格第一名的分数组合；逐角色生成48题作答并调用正式计分器，40份测试全部通过。没有修改题目、角色侧写数值或添加随机分配。','','本检查只证明当前算法中每位角色都能作为主角色出现，不证明角色映射的心理学效度。主角色为距离第一，副角色为距离第二；并列时使用固定索引顺序，不使用随机分配。','', '## 框架与材料边界','','- MBTI四维定义：https://www.myersbriggs.org/my-mbti-personality-type/the-mbti-preferences/','- 48题是场景改编，每维12题，不是官方授权量表。','- 同一四字母类型可以对应多位角色；本网站使用连续四维侧写比较，而非把40位角色硬分为40种MBTI。','- 剧情事实来源与编辑推断分别保存，不能把行为片段或粉丝类型投票当作测量数据。','- DJ-PON3的材料只支持音乐合作主题，四维中点为未知信息的编辑处理，不代表已经证实她四维均衡。','- 梦境形态、反派角色及剧情较少角色的侧写证据有限；不能据此判断用户道德、临床特征或能力。','- 不同答案可能得到相同分数或同一角色；同一答案在同一版本必须得到一致排序。','','## 逐角色覆盖','','|角色|主角色格点数|严格胜出格点数|剧情来源|','|---|---:|---:|---|',...roles.map(r=>`|${r.name}|${r.primaryCells}|${r.strictPrimaryCells}|${r.evidence.facts.map(f=>`[${f.source.originalTitle}](${f.source.url})`).join('、')}|`),'','完整测试答案与副角色排序见同目录 role-reachability.json；这些是算法测试夹具，不是对真实用户性格的判定。'];
fs.writeFileSync(new URL('docs/ROLE_REACHABILITY.md',root),lines.join('\n')+'\n');
console.log(JSON.stringify({scoreCells:cells,representedAnswerPatterns:String(patterns),reachable:report.reachableRoles,strictReachable:report.strictReachableRoles,actualScorerWitnesses:roles.length,fingerprint},null,2));
