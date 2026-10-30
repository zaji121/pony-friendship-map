// Shared result assembly for the narrative trial. Main-site 48-item scoring
// remains unchanged when no narrative answers are supplied.
(function(w){
w.PONY_NARRATIVE_SCORE=function(answers,narrative){
 const base=w.PONY_SCORE(w.QUIZ_QUESTIONS,w.CHARACTER_SLUGS,w.PREFERENCE_PROFILES,answers);
 if(narrative===undefined)return base;
 const model=narrative?.version===w.PONY_NARRATIVE_MATCH_V2?.version?w.PONY_NARRATIVE_MATCH_V2:w.PONY_NARRATIVE_MATCH;
 if(!narrative||narrative.version!==model.version||!Array.isArray(narrative.followups))throw Error('情境版本已更新，请重新打开试验测评。');
 let ranked=model.rank(w,base.scores,narrative.choices),accepted=[];
 for(const answer of narrative.followups){const question=model.nextFollowup(ranked,accepted);if(!question||answer.left!==question.left||answer.right!==question.right)throw Error('附加任务与前面的答案不一致。');accepted.push({left:answer.left,right:answer.right,choice:answer.choice});ranked=model.rank(w,base.scores,narrative.choices,accepted);}
 if(ranked.primary===null)throw Error('本次答案尚未提供角色匹配线索，可以保留答案后再作选择。');
 let changes=0;
 w.QUIZ_QUESTIONS.forEach((q,i)=>{const j=['EI','SN','TF','JP'].indexOf(q[2].axis),flipped=base.scores.slice();flipped[j]=Math.max(0,Math.min(1,flipped[j]-q[1][answers[i]][1]/12));if(model.rank(w,flipped,narrative.choices,accepted).primary!==ranked.primary)changes++;});
 const summarize=r=>({slug:r.slug,explanations:r.explanations,limitedEvidence:r.limitedEvidence,limits:r.evidence.limits});
 return {...base,matchingVersion:model.version,primary:ranked.primary,secondary:ranked.secondary,alternatives:ranked.ranked.slice(0,3).map(r=>r.index),matchClose:ranked.close,sensitivity:{primaryChanges:changes,items:48,scope:'MBTI items only; narrative selections held fixed'},narrative:{version:model.version,choices:narrative.choices.map(c=>({first:c.first,second:c.second})),followups:accepted,close:ranked.close,scope:ranked.scope,primary:summarize(ranked.ranked[0]),secondary:summarize(ranked.ranked[1]),notProbability:true}};
};
})(window);
