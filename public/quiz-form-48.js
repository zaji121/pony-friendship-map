// 48 displayed questions: 32 MBTI-framework items + 16 narrative slots.
// The final two slots adapt in place, never increasing the total question count.
(function(w){
const axes=['EI','SN','TF','JP'],picks={EI:[0,1,3,4,6,7,9,10],SN:[0,1,4,5,6,7,9,10],TF:[0,1,3,4,6,7,10,11],JP:[0,1,3,4,7,8,9,10]};
const indexes=[];axes.forEach((axis,j)=>picks[axis].forEach(k=>indexes.push(k*4+j)));indexes.sort((a,b)=>a-b);
const questions=indexes.map(i=>w.QUIZ_QUESTIONS[i]),version='festival-48-single-20261030-v1';
// Same feature coding as the experimental model; concrete wording belongs to
// this form so older saved editions retain their own question text.
const sceneCopy=[
 ['筹备会结束了。你有半小时，四张准备台都有人带着做。你先去帮哪边？',[
  '翻庆典的旧记录，挑一段有意思的故事写到介绍牌上',
  '跟着做一盘点心，再把它们装进来宾的小盒子',
  '把演出服和桌布摆在一起，试试怎样配色更好看',
  '想一个开场小游戏，让刚见面的来宾也能一起笑']],
 ['你选的准备台已经有人接手。下面四件事都能交给别人，你更愿意接哪一件？',[
  '拿着材料单去各桌对一遍，约好谁在几点送到',
  '对照机关的图纸，把每个零件为什么这样装弄清楚',
  '不照现成样式，用手边材料试做一个自己的版本',
  '陪新来的伙伴做一遍，等他能自己上手再离开']],
 ['今晚每桌都能留一点成果。时间只够你先做一项，你选哪项？',[
  '站到小舞台上演一段，听听大家的掌声和回应',
  '留在桌边多试几次，把手上这个小东西做得更稳',
  '和一起干活的伙伴合做一份纪念，留下大家的名字',
  '画一张闯关卡，把线索和意想不到的转折安排好']],
 ['开始试做了。你有半小时自由活动，先到哪张桌子坐下？',[
  '尝一口刚出炉的果派，跟着做一小份，试着调口味',
  '翻开机关旁的书，弄清它一转就能发声的原因',
  '挑两块布配配颜色，做一个能别在衣服上的小饰品',
  '带新伙伴给兔子添水，示范怎样靠近才不会吓着它']],
 ['周六上午，广场开始布置。四组都有人手，你想先加入哪组？',[
  '绕广场找找空位，看看新摊位放在哪里方便大家走动',
  '扶稳小木架，把松动的桌脚和连接处修好',
  '和伙伴试跑运动摊的绕桩路线，把转弯练熟',
  '给动物角放好水盆，再找一处安静的遮阴地']],
 ['布置完成，还能添一个小项目。你最想负责哪项？',[
  '做一个打开就弹出彩纸的小盒子，请愿意的人来试',
  '把居民带来的旧照片贴起来，听听照片背后的故事',
  '把几种游戏规则摊开，拼出一套更难猜的玩法',
  '收好尚未公布的惊喜清单，等约定的时间再交给主持人']],
 ['开场前，你还能选一处去检查。你先去哪里？',[
  '点心摊，核对果派份数、价签和交换办法',
  '舞台边，把演出服放到灯下，看看颜色和灯光合不合',
  '各组的集合点，讲清你的分工方案，和大家商量采用',
  '广场外一条自己没走过的小路，沿路核对指示牌']],
 ['离开场还有一小时。几组都欢迎你加入，你先去哪边？',[
  '和伙伴把一篮篮果子搬到摊位，再收回空筐',
  '拿工具修稳小木架，把招牌固定好',
  '去小舞台跟着排练，把那几个动作练熟',
  '拿着说明书检查机关，弄清它刚才卡在哪一步']],
 ['庆典开场，你暂时不用值班。四处都还来得及去，你先玩哪项？',[
  '去运动摊跑一轮，看看能不能刷新自己的成绩',
  '去小舞台表演准备好的节目，听听现场的回应',
  '到游戏圈招呼旁边的来宾，一起玩一轮',
  '去交换摊试着摆货、介绍，看看怎样更容易换出去']],
 ['伙伴准备临时演一段小戏，缺一个人。你愿意接哪份工作？',[
  '演一个会设局的反派，自己想出场和台词',
  '在幕后看好道具单，悄悄提醒谁该上场',
  '陪第一次上台的伙伴排练，让他找到顺口的说法',
  '按自己的想法做一身造型，把颜色和配饰搭好']],
 ['广场还空着一小块地方，也有材料可用。你更想带大家做哪件事？',[
  '摆个小实验，让来宾换材料试，比较效果哪里不同',
  '开一堂短体验课，把自己会的技巧教给来宾',
  '组织轮流挑战，练好一项动作，再把成果展示出来',
  '提出一套新玩法，说服伙伴和自己一起布置实施']],
 ['你可以选一个摊位帮半小时，每处都有人搭档。你先去哪里？',[
  '点心摊，分果派、倒饮料，给来宾推荐口味',
  '运动摊，陪来宾跑一轮，自己也试试能不能更快',
  '游戏摊，拉上大家试刚想到的新玩法',
  '试衣镜旁，帮人换颜色和配饰，看看哪套更合适']],
 ['最后一批来宾走了。收尾任务还有几项，你想先接哪项？',[
  '照着清单点工具，和下一组说清每件放在哪里',
  '拆开今天出过问题的装置，查清原因再修好',
  '和伙伴整理照片，记下今天一起经历的几件事',
  '自己沿周边的小路走一圈，找回遗漏的指示牌']],
 ['大家准备给下次庆典留一份东西。时间只够你先完成一项，你选什么？',[
  '把查到的资料写成小册子，配上给新手看的提示',
  '选出满意的作品，搭配成一块让人一眼看见的展板',
  '整理一份只交给筹备组的复盘，写下需要留心的环节',
  '把摊位重新搭配成一个新方案，试试下次能不能经营起来']],
 ['任务已交接好，伙伴各有安排。回家前，你最想先做哪件事？',[
  '找熟悉的伙伴坐坐，把今天没聊完的话聊完',
  '自己到附近逛逛，走一条没去过的小路',
  '和照护员把小动物安顿好，再一起歇歇',
  '约愿意参与的人，再试一轮自己设计的新游戏']],
 ['收拾得差不多了，离回家还有一会儿。你先做哪件事？',[
  '跟居民做点家常点心，听听这道做法是谁教的',
  '收好水盆和垫子，把小动物安顿好再走',
  '把衣服上松掉的小配饰缝好，下次还能穿',
  '把今天查到的东西写成小纸条，留给下次帮忙的人']]
];
const scenes=w.PONY_NARRATIVE_MATCH.scenes.map((scene,i)=>({...scene,stem:sceneCopy[i][0],options:scene.options.map((o,j)=>({...o,text:sceneCopy[i][1][j]}))}));
const mainSix=new Set(['twilight','applejack','rainbow-dash','pinkie-pie','fluttershy','rarity']);
function scoreCore(answers){
 if(!Array.isArray(answers)||answers.length!==32||answers.some((v,i)=>!Number.isInteger(v)||v<0||v>=questions[i][1].length))throw Error('请完成本版的32道做事方式题。');
 const totals=axes.map(axis=>questions.reduce((s,q,i)=>s+(q[2].axis===axis?q[1][answers[i]][1]:0),0)),scores=totals.map(v=>(v/8+1)/2);
 const evidence=axes.map((axis,j)=>{const rows=questions.map((q,i)=>({q,i,value:q[1][answers[i]][1]})).filter(x=>x.q[2].axis===axis),positive=rows.filter(x=>x.value>0).length,sign=totals[j]>=0?1:-1,first=rows.find(x=>Math.sign(x.value)===sign),opposite=rows.find(x=>Math.sign(x.value)!==sign);return {axis,positive,negative:8-positive,stem:first.q[0],answer:first.q[1][answers[first.i]][0],counterexample:opposite?{stem:opposite.q[0],answer:opposite.q[1][answers[opposite.i]][0]}:null};});
 return {model:'four-preferences-v2',formVersion:version,questionVersion:version,answers:answers.slice(),questionIndexes:indexes.slice(),scores,totals,itemsPerAxis:8,type:scores.map((v,i)=>Math.abs(v-.5)<.1?'X':axes[i][v>.5?0:1]).join(''),closeAxes:axes.filter((_,i)=>Math.abs(scores[i]-.5)<.1),evidence};
}
function rank(env,scores,choices,followups=[]){
 const result=env.PONY_NARRATIVE_MATCH.rank(env,scores,choices,followups);
 const actualText=o=>Number.isInteger(o.scene)?{...o,text:scenes[o.scene].options[choices[o.scene][o.priority]].text}:o;
 result.observations=result.observations.map(actualText);
 result.ranked.forEach(r=>r.explanations=r.explanations.map(actualText));
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
w.PONY_QUIZ_48={version,questions,scenes,indexes,axes,scoreCore,rank,plan,total:48,coreCount:32,itemsPerAxis:8,fixedTaskCount:14,finalSlots:2};
})(window);
