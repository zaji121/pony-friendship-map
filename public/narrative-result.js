// Shared assembly: older inputs retain their scoring path.
(function(w){
w.PONY_NARRATIVE_SCORE=function(answers,narrative){
 const form=narrative?.formVersion===w.PONY_QUIZ_48_V1?.version?w.PONY_QUIZ_48_V1:w.PONY_QUIZ_48,isForm=!!form&&narrative?.formVersion===form.version;
 if(narrative?.formVersion!==undefined&&!isForm)throw Error('题目版本已更新，请重新打开测评。');
 const base=isForm?form.scoreCore(answers):w.PONY_SCORE(w.QUIZ_QUESTIONS,w.CHARACTER_SLUGS,w.PREFERENCE_PROFILES,answers);
 if(narrative===undefined)return base;
 const model=narrative?.version===w.PONY_NARRATIVE_MATCH_V2?.version?w.PONY_NARRATIVE_MATCH_V2:w.PONY_NARRATIVE_MATCH;
 if(!narrative||narrative.version!==model.version)throw Error('情境版本已更新，请重新打开测评。');
 const single=isForm||narrative.selectionMode==='single';
 if(single&&(!Array.isArray(narrative.choices)||narrative.choices.some(c=>c?.second!==null)))throw Error('单选题每题只能选择一项。');
 let ranked,effectiveChoices,accepted=[];
 if(isForm){
  if(model!==w.PONY_NARRATIVE_MATCH||!Array.isArray(narrative.finalAnswers)||narrative.finalAnswers.length!==2)throw Error('请完成最后两道情境题。');
  const planned=form.plan(w,base.scores,narrative.choices,narrative.finalAnswers);
  ranked=planned.result;effectiveChoices=planned.choices;accepted=planned.followups;
 }else{
  if(!Array.isArray(narrative.followups))throw Error('附加题答案不完整。');
  ranked=model.rank(w,base.scores,narrative.choices);effectiveChoices=narrative.choices;
  for(const answer of narrative.followups){
   const question=model.nextFollowup(ranked,accepted);
   if(!question||answer.left!==question.left||answer.right!==question.right)throw Error('附加任务与前面的答案不一致。');
   accepted.push({left:answer.left,right:answer.right,choice:answer.choice});ranked=model.rank(w,base.scores,effectiveChoices,accepted);
  }
 }
 if(ranked.primary===null)throw Error('本次答案尚未提供角色匹配线索，可以保留答案后再作选择。');
 const coreQuestions=isForm?form.questions:w.QUIZ_QUESTIONS;let changes=0;
 coreQuestions.forEach((q,i)=>{const j=['EI','SN','TF','JP'].indexOf(q[2].axis),flipped=base.scores.slice();flipped[j]=Math.max(0,Math.min(1,flipped[j]-q[1][answers[i]][1]/base.itemsPerAxis));const alternative=isForm?form.rank(w,flipped,effectiveChoices,accepted):model.rank(w,flipped,effectiveChoices,accepted);if(alternative.primary!==ranked.primary)changes++;});
 const summarize=r=>({slug:r.slug,explanations:r.explanations,limitedEvidence:r.limitedEvidence,limits:r.evidence.limits});
 return {...base,matchingVersion:isForm?form.version:model.version,primary:ranked.primary,secondary:ranked.secondary,alternatives:ranked.ranked.slice(0,3).map(r=>r.index),matchClose:ranked.close,sensitivity:{primaryChanges:changes,items:coreQuestions.length,scope:'Core items only; narrative selections held fixed'},narrative:{version:model.version,formVersion:isForm?form.version:undefined,selectionMode:single?'single':'ranked',choices:narrative.choices.map(c=>({first:c.first,second:c.second})),finalAnswers:isForm?narrative.finalAnswers.map(a=>a.kind==='task'?{kind:a.kind,first:a.first}:{kind:a.kind,choice:a.choice}):undefined,followups:accepted,close:ranked.close,scope:ranked.scope,tiePreference:isForm?'main-six-only-on-exact-equality':undefined,primary:summarize(ranked.ranked[0]),secondary:summarize(ranked.ranked[1]),notProbability:true}};
};
})(window);
