// 浏览器与服务器共用计分。展示区间不是统计置信区间。
(function(root){
function rankProfiles(slugs,profiles,scores){
 return slugs.map((slug,i)=>({i,slug,dist:scores.reduce((sum,v,j)=>sum+(v-profiles[slug][j])**2,0)})).filter(f=>!["dj-pon3", "garble", "cheerilee", "spitfire", "sandbar", "gallus", "silverstream", "yona", "ocellus", "smolder", "thorax", "ember", "flurry-heart", "mayor-mare"].includes(f.slug)).sort((a,b)=>a.dist-b.dist||a.i-b.i);
}
function score(questions,slugs,profiles,answers){
 if(!Array.isArray(answers)||answers.length!==48||answers.some((a,i)=>!Number.isInteger(a)||a<0||a>=questions[i][1].length))throw new Error('请完整回答48道题。');
 const axes=['EI','SN','TF','JP'],counts=axes.map(axis=>questions.filter(q=>q[2].axis===axis).length);
 if(counts.some(n=>n!==12))throw new Error('题库维度配置不完整。');
 const totals=axes.map(axis=>questions.reduce((sum,q,i)=>sum+(q[2].axis===axis?q[1][answers[i]][1]:0),0));
 const scores=totals.map((n,i)=>Math.max(0,Math.min(1,(n/counts[i]+1)/2)));
 const fits=rankProfiles(slugs,profiles,scores);
 const evidence=axes.map((axis,j)=>{const items=questions.map((q,i)=>({q,i,value:q[1][answers[i]][1]})).filter(x=>x.q[2].axis===axis),positive=items.filter(x=>x.value>0).length,negative=items.length-positive,majority=totals[j]>=0?1:-1,candidate=items.find(x=>Math.sign(x.value)===majority),counter=items.find(x=>Math.sign(x.value)!==majority);return {axis,positive,negative,stem:candidate.q[0],answer:candidate.q[1][answers[candidate.i]][0],counterexample:counter?{stem:counter.q[0],answer:counter.q[1][answers[counter.i]][0]}:null};});
 // 翻转一道题的诊断仅衡量算法敏感性，不代表重测信度。
 let primaryChanges=0;
 questions.forEach((q,i)=>{const j=axes.indexOf(q[2].axis),changed=scores.slice();changed[j]-=q[1][answers[i]][1]/counts[j];const nearest=fits.map(f=>({...f,dist:changed.reduce((sum,v,k)=>sum+(v-profiles[f.slug][k])**2,0)})).sort((a,b)=>a.dist-b.dist||a.i-b.i)[0];if(nearest.i!==fits[0].i)primaryChanges++;});
 return {model:'four-preferences-v2',matchingVersion:'20261030-without-dj',questionVersion:questions[0][2].id?.split('-').slice(0,-1).join('-'),sensitivity:{primaryChanges,items:questions.length},scores,totals,itemsPerAxis:12,primary:fits[0].i,secondary:fits[1].i,type:scores.map((v,i)=>Math.abs(v-.5)<.1?'X':axes[i][v>.5?0:1]).join(''),closeAxes:axes.filter((_,i)=>Math.abs(scores[i]-.5)<.1),evidence,answers:answers.slice(),alternatives:fits.slice(0,3).map(f=>f.i),matchClose:primaryChanges>0};
}
score.rankProfiles=rankProfiles;
if(typeof module==='object'&&module.exports)module.exports=score;else{root.PONY_SCORE=score;root.PONY_RANK_PROFILES=rankProfiles;}
})(typeof window==='object'?window:globalThis);

