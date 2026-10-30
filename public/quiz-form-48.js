// 48 displayed questions: 32 MBTI-framework items + 16 narrative slots.
// The final two slots adapt in place, never increasing the total question count.
(function(w){
const axes=['EI','SN','TF','JP'],picks={EI:[0,1,3,4,6,7,9,10],SN:[0,1,4,5,6,7,9,10],TF:[0,1,3,4,6,7,10,11],JP:[0,1,3,4,7,8,9,10]};
const indexes=[];axes.forEach((axis,j)=>picks[axis].forEach(k=>indexes.push(k*4+j)));indexes.sort((a,b)=>a-b);
const questions=indexes.map(i=>w.QUIZ_QUESTIONS[i]),version='festival-48-single-20261030-v3';
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
// Replace four existing slots: compare responses to one shared problem rather
// than assigning a different hobby to every answer. All are editorial cues;
// no option is keyed to an exclusive character or changes MBTI axis scores.
const revise=(i,stem,options)=>{scenes[i]={...scenes[i],stem,options:options.map(([text,...traits])=>({text,traits}))};};
revise(1,'筹备会刚结束，几组还没接上。你只有二十分钟，想先怎么帮忙？',[
 ['把各组要做的事排一遍，查清哪里接不上，再约好交接时间','coordination','analysis'],
 ['认领一件还没完成的活，拿上工具先做，做完交给下一组','practical','service'],
 ['把开场的几个动作再跑一遍，找出卡住的地方，练到顺手','athletic','mastery'],
 ['请伙伴穿上演出服，按他的动作调整尺寸，再配好饰品','aesthetics','care']]);
revise(2,'试演快结束了，一位新伙伴一直站在旁边。你更想先做什么？',[
 ['把游戏改成不用表演也能参加的版本，拉大家试一轮','play','care'],
 ['陪他到旁边坐坐，听听他想不想参加，再一起选个小任务','care','service'],
 ['把流程拆成几步，陪他试一遍，看看哪一步需要换个讲法','knowledge','mentoring'],
 ['把刚才没演顺的一段再排一次，准备在正式演出时试好','stage','mastery']]);
revise(9,'下午的小表演还差一点就能上场。下面几件事你都能做，想先接哪件？',[
 ['按自己想的角色设计一句反转台词，排一个让人意外的出场','stage','strategy'],
 ['照道具单核对物品，记好交接顺序，在幕后提醒大家','discretion','service'],
 ['陪第一次上场的伙伴练一段，让他按舒服的节奏再试','mentoring','care'],
 ['拿着半成品试穿，边看动作边改细节，让造型和人更合适','aesthetics','craft']]);
revise(13,'收尾时发现还有几件事没做完，你更愿意先留哪一份给下次庆典？',[
 ['把查清的办法写成步骤，和下一组说明哪些地方需要改','knowledge','coordination'],
 ['把今天用得不顺手的架子修好，照老办法加固几个地方','practical','heritage'],
 ['把需要留意的环节单独写给筹备组，标好下次怎么避开','discretion','strategy'],
 ['把试过的摊位重新组合，算算下次换一种摆法能不能经营','commerce','experiment']]);
revise(3,'试演结束，还有二十分钟可以调整。几件事都有人接手，你最想先接哪件？',[
 ['把没唱顺的一段再练几遍，试试怎样唱出想表达的感觉','stage','aesthetics'],
 ['请伙伴穿着演出服走一遍，修改影响动作的细节','aesthetics','craft'],
 ['把开场环节改成一个小玩法，让台下的人也能一起参加','play','belonging'],
 ['听刚才紧张的伙伴说说顾虑，陪他找一种舒服的上场方式','care','service']]);
revise(7,'开场前还剩半小时，你最想接哪一件准备工作？',[
 ['把答应送到的果篮搬好，再和摊主点清份数','fieldwork','service'],
 ['照记录查清机关为什么停了，写下下一组能用的处理步骤','analysis','knowledge'],
 ['再跑几次绕桩路线，试试怎样把那个弯转得更稳','athletic','mastery'],
 ['试一种没用过的材料组合，做个和原样不同的新版本','experiment','independence']]);
revise(11,'庆典进行到一半，你可以调换一次工作。接下来的半小时，你更愿意接哪项？',[
 ['看几位来宾试穿的样子，把配饰和衣服改得更合适','aesthetics','craft'],
 ['和愿意挑战的来宾再练一轮，试着把刚才的动作做得更稳','athletic','mastery'],
 ['换个简单的小玩法，让一直没加入的人也能一起玩','play','belonging'],
 ['陪有些累的来宾歇歇，帮他拿好水和需要的东西','care','service']]);
revise(12,'庆典结束了，还有一小段时间。你最想先把哪件事做完？',[
 ['清点借来的工具，把答应归还的东西送回去','service','coordination'],
 ['和搭档把没唱顺的一段再唱一次，换种表达试试','stage','aesthetics'],
 ['和居民核对老照片里的故事，记清哪些做法保留到了今天','heritage','knowledge'],
 ['沿附近一条没走过的小路找一找，把落下的指示牌带回来','exploration','independence']]);
const contrasts=[
 ['twilight','applejack','knowledge','practical','摊位的小机关又卡住了，你更想先怎么处理？','把图纸和刚才的记录找来，弄清它卡住的原因','拿工具检查松动的地方，先把眼前这一处修好'],
 ['twilight','rainbow-dash','analysis','athletic','挑战路线有一段总不顺，你更想怎样帮忙？','看路线和几次试跑的记录，找出问题出在哪一步','自己跑一遍那一段，边试边调整转弯和发力'],
 ['twilight','pinkie-pie','coordination','play','散场前还有十分钟，大家想再聚一下，你先做什么？','把集合地点和剩下的安排说清楚，让大家知道接下来做什么','临时想个不用准备的小游戏，把还没走的人招呼到一起'],
 ['twilight','fluttershy','knowledge','care','新伙伴说刚才一直没跟上，你更想先做什么？','找出他没弄懂的步骤，换个例子给他讲，再让他试试','先听听哪一段让他不舒服，陪他挑一个能安心参与的位置'],
 ['twilight','rarity','knowledge','aesthetics','纪念册的最后一页还空着，你更想怎样补完？','补一张讲得清楚的步骤图，让下次的人能照着学','调整照片、颜色和留白，让这一页和整本册子搭起来'],
 ['applejack','rainbow-dash','practical','mastery','今天的器材已经收好了，下次还要用，你先做什么？','把用着不顺手的连接处修稳，保证下次拿来就能用','用现有器材再练几次，看看怎样把自己的动作做得更稳'],
 ['applejack','pinkie-pie','practical','play','朋友还想在散场前给来宾留点东西，你更愿意做哪件？','动手做好一批能带走的小物件，再分装给大家','设计一个临走前的小惊喜，让愿意的人一起玩完再走'],
 ['applejack','fluttershy','practical','mentoring','新伙伴接手的小摊还有一点没做完，你先怎么帮？','和他分开做，把剩下的几件东西一起完成','陪他做一件，让他再自己试一件，等他会了再交接'],
 ['applejack','rarity','heritage','aesthetics','大家想留下这场庆典的样子，你更想先做什么？','收集居民讲的旧习俗，记下今年哪些做法接着保留','挑出能代表这次庆典的颜色和造型，做一张完整的纪念页'],
 ['rainbow-dash','pinkie-pie','mastery','play','游戏区最后还有一轮空档，你更想怎么玩？','再试一次刚才的挑战，把卡住的那一步练顺','换一条新规则，让大家试试会发生什么好玩的变化'],
 ['rainbow-dash','fluttershy','athletic','care','几位伙伴还想在广场待一会儿，你更想去做哪件事？','陪想动一动的伙伴再跑一轮路线，边跑边试动作','陪累了的伙伴和小动物找个安静的位置，把水和垫子放好'],
 ['rainbow-dash','rarity','athletic','aesthetics','表演结束后，你最想再调整哪一处？','回到场地试几个动作，看看转身和落点还能怎么改','让伙伴穿着服装动一动，调整线条和饰品的位置'],
 ['pinkie-pie','fluttershy','play','service','一位来宾没参加刚才的活动，散场前你更想怎么接上他？','找个不用上台的小玩法，邀请他和大家试一轮','陪他选一件轻松的小事，帮他拿好需要的东西'],
 ['pinkie-pie','rarity','play','aesthetics','准备送出的纪念品还可以改一点，你先改什么？','加一个打开时会出现的小惊喜，让收到的人一起试','按收礼人的样子调整颜色和配饰，把细节搭好'],
 ['fluttershy','rarity','service','aesthetics','伙伴穿上演出服后有些不自在，你更想先做什么？','陪他找个舒服的位置，帮他备好水和要用的东西','请他走几步，改改服装和配饰，让它更合身也更好看']
];
function nextFollowup(result,answered=[]){
 if(result.primary===null||(!result.close&&result.ranked[0].support.sufficient)||answered.length>=2)return null;
 const [a,b]=result.ranked,used=new Set(answered.flatMap(f=>[f.left,f.right]));
 const row=contrasts.find(c=>((c[0]===a.slug&&c[1]===b.slug)||(c[1]===a.slug&&c[0]===b.slug))&&!used.has(c[2])&&!used.has(c[3]));
 if(row){const forward=row[0]===a.slug;return {left:row[forward?2:3],right:row[forward?3:2],stem:row[4],leftText:row[forward?5:6],rightText:row[forward?6:5],candidateSlugs:[a.slug,b.slug],contrast:'shared-situation'};}
 // Prefer differences that separate the nearby candidate set, rather than
 // picking a feature merely because it is rare across the whole roster.
 const pool=result.ranked.slice(0,5),peak=Math.max(...pool.map(r=>r.similarity)),weights=pool.map(r=>Math.exp((r.similarity-peak)/.05));
 let best=null;
 for(const left of a.traits.filter(t=>!b.traits.includes(t)&&!used.has(t)))for(const right of b.traits.filter(t=>!a.traits.includes(t)&&!used.has(t))){
  const values=pool.map(r=>Number(r.traits.includes(left))-Number(r.traits.includes(right))),sum=weights.reduce((s,v)=>s+v,0),mean=values.reduce((s,v,i)=>s+v*weights[i],0)/sum,spread=values.reduce((s,v,i)=>s+weights[i]*(v-mean)**2,0)/sum;
  if(!best||spread>best.spread)best={left,right,spread};
 }
 if(!best)return null;
 const actions=w.PONY_NARRATIVE_MATCH.followupActions;
 return {left:best.left,right:best.right,stem:'庆典收尾后，还能选一件事做。两边都有人帮忙，你更想先接哪件？',leftText:actions[best.left],rightText:actions[best.right],candidateSlugs:[a.slug,b.slug],contrast:'nearby-candidate-difference'};
}
const mainSix=new Set(['twilight','applejack','rainbow-dash','pinkie-pie','fluttershy','rarity']);
function scoreCore(answers){
 if(!Array.isArray(answers)||answers.length!==32||answers.some((v,i)=>!Number.isInteger(v)||v<0||v>=questions[i][1].length))throw Error('请完成本版的32道做事方式题。');
 const totals=axes.map(axis=>questions.reduce((s,q,i)=>s+(q[2].axis===axis?q[1][answers[i]][1]:0),0)),scores=totals.map(v=>(v/8+1)/2);
 const evidence=axes.map((axis,j)=>{const rows=questions.map((q,i)=>({q,i,value:q[1][answers[i]][1]})).filter(x=>x.q[2].axis===axis),positive=rows.filter(x=>x.value>0).length,sign=totals[j]>=0?1:-1,first=rows.find(x=>Math.sign(x.value)===sign),opposite=rows.find(x=>Math.sign(x.value)!==sign);return {axis,positive,negative:8-positive,stem:first.q[0],answer:first.q[1][answers[first.i]][0],counterexample:opposite?{stem:opposite.q[0],answer:opposite.q[1][answers[opposite.i]][0]}:null};});
 return {model:'four-preferences-v2',formVersion:version,questionVersion:version,answers:answers.slice(),questionIndexes:indexes.slice(),scores,totals,itemsPerAxis:8,type:scores.map((v,i)=>Math.abs(v-.5)<.1?'X':axes[i][v>.5?0:1]).join(''),closeAxes:axes.filter((_,i)=>Math.abs(scores[i]-.5)<.1),evidence};
}
function rank(env,scores,choices,followups=[]){
 const result=env.PONY_NARRATIVE_MATCH.rank(env,scores,choices,followups,{scenes});
 // Every answered scene supplies an opportunity baseline: an unchosen action
 // means lower priority in this scene, not dislike or a negative personality.
 const observations=[],items=[];
 choices.forEach((c,i)=>{if(c.first===null)return;const scene=scenes[i],o=scene.options[c.first];items.push({options:scene.options,selected:c.first,chapter:scene.chapter,scene:i});observations.push({scene:i,chapter:scene.chapter,priority:'first',text:o.text,traits:o.traits});});
 followups.forEach((f,i)=>{if(!['left','right'].includes(f.choice))return;const options=[{traits:[f.left]},{traits:[f.right]}],selected=f.choice==='left'?0:1;items.push({options,selected,chapter:3,scene:'followup-'+i});observations.push({scene:'followup-'+i,chapter:3,priority:'followup',text:selected===0?(f.leftText||env.PONY_NARRATIVE_MATCH.followupActions[f.left]):(f.rightText||env.PONY_NARRATIVE_MATCH.followupActions[f.right]),traits:options[selected].traits});});
 const centered=scores.map(v=>v-.5),norm=Math.hypot(...centered),hasCore=norm>1e-12;
 const affinity=(traits,option)=>(option.traits.filter(t=>traits.includes(t)).length/option.traits.length)**2;
 result.observations=observations;
 result.ranked.forEach(r=>{
  const profile=env.PREFERENCE_PROFILES[r.slug].map(v=>v-.5),profileNorm=Math.hypot(...profile);
  // A two-item step regularizer prevents a near-midpoint direction from
  // having the same strength as a highly one-sided response pattern.
  r.mbti=hasCore&&profileNorm>0 ? .5+.5*centered.reduce((s,v,i)=>s+v*profile[i],0)/(Math.sqrt(norm*norm+.25**2)*profileNorm) : null;
  let sum=0,variance=0,informative=0;const chapters=new Set(),supported=new Set(),positive=[];
  items.forEach(item=>{const values=item.options.map(o=>affinity(r.traits,o)),mean=values.reduce((s,v)=>s+v,0)/values.length,v=values.reduce((s,n)=>s+(n-mean)**2,0)/values.length,delta=values[item.selected]-mean;if(v<1e-12)return;informative++;sum+=delta;variance+=v;if(delta>1e-12){chapters.add(item.chapter);item.options[item.selected].traits.filter(t=>r.traits.includes(t)).forEach(t=>supported.add(t));positive.push(item.scene);}});
  const z=variance>1e-12?sum/Math.sqrt(variance):null;
  r.interest=z===null?null:.5+.5*Math.tanh(z/2);
  r.similarity=r.mbti!==null&&r.interest!==null?.6*r.mbti+.4*r.interest:r.mbti??r.interest;
  r.support={positiveScenes:positive,chapters:[...chapters],traits:[...supported],informativeItems:informative,relativeEvidence:z,sufficient:chapters.size>=2&&supported.size>=2&&positive.length>=2};
  r.explanations=observations.filter(o=>positive.includes(o.scene)).map(o=>({...o,supportedTraits:o.traits.filter(t=>r.traits.includes(t))}));
 });
 // Product preference is used ONLY for mathematically identical scores.
 // No bonus, quota, random selection or near-score override.
 result.ranked.sort((a,b)=>Number(b.support.sufficient)-Number(a.support.sufficient)||((b.similarity??0)-(a.similarity??0))||(Number(mainSix.has(b.slug))-Number(mainSix.has(a.slug)))||a.index-b.index);
 if(result.ranked.every(r=>r.similarity===null))result.primary=null;
 if(result.primary!==null){result.primary=result.ranked[0].index;result.secondary=result.ranked[1].index;result.similarityGap=result.ranked[0].similarity-result.ranked[1].similarity;result.close=result.similarityGap<.03||!result.ranked[0].support.sufficient;}
 result.version=version;result.signal={mbti:hasCore,interests:items.length>0,answeredTasks:choices.filter(c=>c.first!==null).length};result.neutralContrasts=followups.filter(f=>f.choice==='both'||f.choice==='unknown').length;
 result.parameters={mbtiWeight:.6,interestWeight:.4,midpointRegularizer:.25,relativeEvidenceScale:2,closeGap:.03,minChapters:2};return result;
}
function plan(env,scores,fixedChoices,finalAnswers=[]){
 const model=env.PONY_NARRATIVE_MATCH;
 if(!model.choicesValid(fixedChoices)||fixedChoices[14].first!==null||fixedChoices[15].first!==null||!Array.isArray(finalAnswers)||finalAnswers.length>2)throw Error('庆典任务与当前48题版本不一致。');
 const choices=fixedChoices.map(c=>({...c}));if(choices.some(c=>c.second!==null))throw Error('本版为单选题，每题只能选择一项。');
 const followups=[];let result=rank(env,scores,choices,followups),next=null;
 for(let slot=0;slot<2;slot++){
  const adaptive=nextFollowup(result,followups);
  next=adaptive?{kind:'followup',slot,question:adaptive}:{kind:'task',slot,sceneIndex:14+slot};
  const answer=finalAnswers[slot];if(answer===undefined)return {result,choices,followups,next};
  if(!answer||answer.kind!==next.kind)throw Error('最后两题已根据前面的选择调整，请重新选择。');
  if(next.kind==='followup'){
   if(!['left','right','both','unknown'].includes(answer.choice))throw Error('请选择一个答案。');
   followups.push({left:adaptive.left,right:adaptive.right,choice:answer.choice,leftText:adaptive.leftText,rightText:adaptive.rightText,stem:adaptive.stem});
  }else{
   if(answer.first!==null&&(!Number.isInteger(answer.first)||answer.first<0||answer.first>3))throw Error('请选择一个答案。');
   choices[next.sceneIndex]={first:answer.first,second:null};
  }
  result=rank(env,scores,choices,followups);
 }
 return {result,choices,followups,next:null};
}
w.PONY_QUIZ_48={version,questions,scenes,indexes,axes,scoreCore,rank,plan,nextFollowup,contrasts,total:48,coreCount:32,itemsPerAxis:8,fixedTaskCount:14,finalSlots:2};
})(window);
