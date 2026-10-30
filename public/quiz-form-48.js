// 48 displayed questions: 32 MBTI-framework items + 16 narrative slots.
// The final two slots adapt in place, never increasing the total question count.
(function(w){
const axes=['EI','SN','TF','JP'],picks={EI:[0,1,3,4,6,7,9,10],SN:[0,1,4,5,6,7,9,10],TF:[0,1,3,4,6,7,10,11],JP:[0,1,3,4,7,8,9,10]};
const indexes=[];axes.forEach((axis,j)=>picks[axis].forEach(k=>indexes.push(k*4+j)));indexes.sort((a,b)=>a-b);
const questions=indexes.map(i=>w.QUIZ_QUESTIONS[i]),version='festival-48-single-20261030-v1';
const mainSix=new Set(['twilight','applejack','rainbow-dash','pinkie-pie','fluttershy','rarity']);
function scoreCore(answers){
 if(!Array.isArray(answers)||answers.length!==32||answers.some((v,i)=>!Number.isInteger(v)||v<0||v>=questions[i][1].length))throw Error('请完成本版的32道做事方式题。');
 const totals=axes.map(axis=>questions.reduce((s,q,i)=>s+(q[2].axis===axis?q[1][answers[i]][1]:0),0)),scores=totals.map(v=>(v/8+1)/2);
 const evidence=axes.map((axis,j)=>{const rows=questions.map((q,i)=>({q,i,value:q[1][answers[i]][1]})).filter(x=>x.q[2].axis===axis),positive=rows.filter(x=>x.value>0).length,sign=totals[j]>=0?1:-1,first=rows.find(x=>Math.sign(x.value)===sign),opposite=rows.find(x=>Math.sign(x.value)!==sign);return {axis,positive,negative:8-positive,stem:first.q[0],answer:first.q[1][answers[first.i]][0],counterexample:opposite?{stem:opposite.q[0],answer:opposite.q[1][answers[opposite.i]][0]}:null};});
 return {model:'four-preferences-v2',formVersion:version,questionVersion:version,answers:answers.slice(),questionIndexes:indexes.slice(),scores,totals,itemsPerAxis:8,type:scores.map((v,i)=>Math.abs(v-.5)<.1?'X':axes[i][v>.5?0:1]).join(''),closeAxes:axes.filter((_,i)=>Math.abs(scores[i]-.5)<.1),evidence};
}
function rank(env,scores,choices,followups=[]){
 const result=env.PONY_NARRATIVE_MATCH.rank(env,scores,choices,followups);
 // Product preference is used ONLY for mathematically identical scores.
 // No bonus, quota, random selection or near-score override.
 result.ranked.sort((a,b)=>((b.similarity??0)-(a.similarity??0))||(Number(mainSix.has(b.slug))-Number(mainSix.has(a.slug)))||a.index-b.index);
 if(result.primary!==null){result.primary=result.ranked[0].index;result.secondary=result.ranked[1].index;result.similarityGap=result.ranked[0].similarity-result.ranked[1].similarity;result.close=result.similarityGap<.03;}
 result.version=version;return result;
}
function plan(env,scores,fixedChoices,finalAnswers=[]){
 const model=env.PONY_NARRATIVE_MATCH;
 if(!model.choicesValid(fixedChoices)||fixedChoices[14].first!==null||fixedChoices[15].first!==null||!Array.isArray(finalAnswers)||finalAnswers.length>2)throw Error('庆典任务与当前48题版本不一致。');
 const choices=fixedChoices.map(c=>({...c}));if(choices.some(c=>c.second!==null))throw Error('本版为单选题，每题只能选择一项。');
 const followups=[];let result=rank(env,scores,choices,followups),next=null;
 for(let slot=0;slot<2;slot++){
  const adaptive=model.nextFollowup(result,followups);
  next=adaptive?{kind:'followup',slot,question:adaptive}:{kind:'task',slot,sceneIndex:14+slot};
  const answer=finalAnswers[slot];if(answer===undefined)return {result,choices,followups,next};
  if(!answer||answer.kind!==next.kind)throw Error('最后两题已根据前面的选择调整，请重新选择。');
  if(next.kind==='followup'){
   if(!['left','right','both','unknown'].includes(answer.choice))throw Error('请选择一个答案。');
   followups.push({left:adaptive.left,right:adaptive.right,choice:answer.choice});
  }else{
   if(answer.first!==null&&(!Number.isInteger(answer.first)||answer.first<0||answer.first>3))throw Error('请选择一个答案。');
   choices[next.sceneIndex]={first:answer.first,second:null};
  }
  result=rank(env,scores,choices,followups);
 }
 return {result,choices,followups,next:null};
}
w.PONY_QUIZ_48={version,questions,indexes,axes,scoreCore,rank,plan,total:48,coreCount:32,itemsPerAxis:8,fixedTaskCount:14,finalSlots:2};
})(window);
