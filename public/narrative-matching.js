// Experimental content recommendation, separate from the production MBTI scorer.
// Similarity is not a calibrated probability of identity or psychological type.
(function(root){
const features={knowledge:'查阅知识',analysis:'核对原理',experiment:'尝试新办法',coordination:'安排协作',service:'幕后支援',practical:'实际修复',craft:'动手制作',aesthetics:'视觉搭配',stage:'舞台表达',play:'趣味惊喜',athletic:'身体活动',mastery:'练习技巧',exploration:'探索新地方',independence:'自主完成',care:'照料需要',mentoring:'帮助学习',belonging:'参与伙伴活动',loyalty:'维系信任',heritage:'家乡故事',commerce:'经营交换',influence:'说服协调',recognition:'展示成果',discretion:'谨慎保管信息',strategy:'设计策略'};
const option=(text,...traits)=>({text,traits});
const scenes=[
 {chapter:0,title:'选一处准备台',stem:'周五下午，筹备会结束。下面四处都缺帮手，也都有人教。你最想先去哪边？',options:[option('查庆典来历，挑几段故事写进介绍牌','knowledge','heritage'),option('做一盘点心，再装进送给来宾的小盒子','practical','craft'),option('搭配演出服和桌布，看看颜色放在一起怎样','aesthetics','craft'),option('准备开场小游戏，想个让大家笑起来的点子','play','belonging')]},
 {chapter:0,title:'把自己的部分做好',stem:'你已经选好准备台。旁边还有几件小事，哪件你更愿意接下来做？',options:[option('把需要的材料和时间列出来，和各桌对一遍','coordination','service'),option('对照说明，弄清机关为什么能这样运作','analysis','knowledge'),option('拿现有材料试一种新做法，看看会有什么效果','experiment','independence'),option('陪第一次来的志愿者试一遍，等他能自己做','mentoring','care')]},
 {chapter:0,title:'让别人看到成果',stem:'今晚收工前，每个准备台都能展示一点成果。你更想参与哪一项？',options:[option('上去演示一个小节目，听听现场的回应','stage','recognition'),option('在桌边把一个动作练熟，让成品更稳','mastery','craft'),option('和伙伴合做一份展示，留住一起完成的过程','belonging','loyalty'),option('设计一张玩法卡，安排几个让人意外的转折','strategy','play')]},
 {chapter:1,title:'广场开始搭起来',stem:'周六上午，你来到同一个广场。四组都在布置，你愿意先加入哪组？',options:[option('沿广场走一圈，找出适合新摊位的位置','exploration','coordination'),option('修好松动的桌脚，装稳小木架','practical','craft'),option('练一遍运动摊的绕桩路线，再陪别人试','athletic','mastery'),option('帮动物角整理水盆和遮阴处','care','service')]},
 {chapter:1,title:'选一个有意思的小点子',stem:'基本布置完成，还可以加一个自愿参加的小项目。你更想负责哪个？',options:[option('做个能弹出彩纸的小机关，先试好再请人体验','play','experiment'),option('布置一面旧照片墙，向居民征集照片背后的故事','heritage','belonging'),option('把几种玩法的规则摆出来，试试怎样组合更有挑战','strategy','analysis'),option('替大家保管尚未公布的惊喜清单，到约定时间再打开','discretion','loyalty')]},
 {chapter:1,title:'出发前再帮一手',stem:'还有半小时才开场，几处都需要最后检查。你更愿意去哪处？',options:[option('去点心摊核对份数、价格和交换规则','commerce','practical'),option('去舞台调服装和灯光，看看整体效果','aesthetics','stage'),option('跟各组说清任务，争取大家采用你整理的分工方案','influence','coordination'),option('自己走一条没走过的小路，把沿途指示牌检查好','independence','exploration')]},
 {chapter:2,title:'来宾到了',stem:'庆典开场了。你已有一段不用值班的时间，四项活动都可以参加。你先去哪里？',options:[option('运动摊，试试挑战纪录的路线','athletic','mastery'),option('小舞台，展示自己准备的节目','stage','recognition'),option('游戏圈，招呼大家一起玩一轮','belonging','play'),option('交换摊，看看怎样搭配商品、介绍给来宾','commerce','influence')]},
 {chapter:2,title:'临时多了一个角色',stem:'几位伙伴想做一段小表演，缺一个人。你更愿意承担哪种工作？',options:[option('演一个机灵的反派，设计出场和台词','stage','strategy'),option('在幕后保管道具，悄悄提醒上场顺序','discretion','service'),option('带刚报名的伙伴排练，让他找到舒服的表达方式','mentoring','care'),option('做一个有个人风格的造型，把细节打磨好','aesthetics','independence')]},
 {chapter:2,title:'把自己的点子带进庆典',stem:'还有一块空地和一些公用材料。大家欢迎新点子，也愿意帮忙。你更想试什么？',options:[option('摆出小实验，和来宾试试哪种材料效果不同','experiment','analysis'),option('开个短体验课，把自己会的一项技巧教给别人','mentoring','knowledge'),option('组织一场小挑战，让大家轮流比试，再展示成果','mastery','recognition'),option('提出一套新的场地用法，争取伙伴一起实施','influence','strategy')]},
 {chapter:3,title:'庆典慢慢收尾',stem:'周六傍晚，最后一批来宾离开。你愿意接哪项收尾工作？',options:[option('清点物品、归还工具，让下一组方便接手','service','coordination'),option('检修今天用过的装置，把坏的地方修好','practical','analysis'),option('和伙伴边整理照片边聊，把一起做的事记下来','loyalty','heritage'),option('走一遍周边路线，找回遗漏的指示牌','exploration','independence')]},
 {chapter:3,title:'为下一次留一点东西',stem:'不用急着交稿，大家可以留下自己愿意做的那一部分。你更想留下什么？',options:[option('一本资料小册子，把查到的知识和学习提示整理好','knowledge','mentoring'),option('一张成果展板，让大家看见这次做得好的地方','recognition','aesthetics'),option('一份只给筹备组看的复盘，记录需要谨慎处理的细节','discretion','strategy'),option('一套更合适的摊位组合，讨论怎样经营下去','commerce','experiment')]},
 {chapter:3,title:'忙完之后，你想把时间留给什么',stem:'任务都交接好了，伙伴也各有安排。接下来你最想做哪件事？',options:[option('约聊得来的伙伴坐坐，把今天没说完的话说完','loyalty','belonging'),option('自己去附近逛逛，看看没见过的地方','independence','exploration'),option('陪照护员把小动物安顿好，再一起歇歇','care','service'),option('找伙伴玩一轮自己设计的小游戏，看看新点子效果','play','experiment')]}
];
// Editorial activity/motivation associations, NOT independently measured MBTI.
// Every entry is explicitly provisional; source episodes are in CHARACTER_EVIDENCE.
const roleTraits={
 twilight:['knowledge','analysis','coordination','mentoring','loyalty'],
 applejack:['practical','craft','heritage','loyalty','service'],
 'rainbow-dash':['athletic','mastery','recognition','loyalty','stage'],
 'pinkie-pie':['play','belonging','stage','care','experiment'],
 fluttershy:['care','service','loyalty','mentoring'],
 rarity:['aesthetics','craft','commerce','recognition','care'],
 starlight:['experiment','analysis','independence','loyalty','strategy'],
 spike:['service','loyalty','belonging','discretion'],
 luna:['care','discretion','independence','loyalty'],
 cadance:['care','loyalty','coordination','belonging'],
 discord:['play','experiment','independence','recognition','loyalty'],
 'shining-armor':['coordination','strategy','service','loyalty','mastery'],
 'big-mac':['practical','service','heritage','loyalty','discretion'],
 maud:['analysis','knowledge','independence','loyalty','exploration'],
 trixie:['stage','recognition','independence','play','loyalty'],
 sunburst:['knowledge','analysis','mentoring','discretion'],
 'daring-do':['exploration','independence','strategy','practical','knowledge'],
 celestia:['mentoring','coordination','care','strategy'],
 zecora:['knowledge','practical','care','independence'],
 'cheese-sandwich':['play','stage','experiment','belonging','craft'],
 'apple-bloom':['craft','experiment','mentoring','belonging'],
 'sweetie-belle':['stage','aesthetics','care','belonging'],
 scootaloo:['athletic','mastery','belonging','mentoring'],
 gilda:['independence','practical','loyalty','commerce'],
 'granny-smith':['heritage','knowledge','belonging','exploration'],
 'diamond-tiara':['influence','recognition','coordination','belonging'],
 'sugar-belle':['craft','commerce','practical','loyalty'],
 'filthy-rich':['commerce','influence','coordination','heritage'],
 'bon-bon':['discretion','loyalty','strategy','service'],
 lyra:['belonging','loyalty'],
 'pear-butter':['heritage','loyalty','care','craft'],
 'bright-mac':['practical','heritage','loyalty','care'],
 chrysalis:['strategy','influence','discretion','coordination'],
 'king-sombra':['strategy','independence','recognition','influence'],
 'cozy-glow':['influence','strategy','belonging','discretion'],
 'sunset-shimmer':['experiment','analysis','care','loyalty','mentoring']
};
const version='narrative-content-20261030-v2',keys=Object.keys(features);
const followupActions={knowledge:'翻查资料，把庆典介绍中缺的一条信息补上',analysis:'对照记录，弄清装置刚才为什么出现故障',experiment:'试一个新材料组合，看看能不能改善装饰效果',coordination:'把收尾任务和伙伴对一遍，约好怎样交接',service:'收好公用物品，让还在忙的伙伴方便取用',practical:'把松动的小架子修稳，下次还能继续用',craft:'做一件小手工，留下今天庆典的纪念',aesthetics:'给照片册搭配封面和颜色，让整体更协调',stage:'在散场前给伙伴表演一小段节目',play:'设计一个不伤人的小惊喜，邀请愿意参与的人试试',athletic:'陪伙伴再走一轮运动路线，活动一下身体',mastery:'把刚学的一个动作再练几遍，看看能否更稳',exploration:'到附近没逛过的小路走走，看看还有什么发现',independence:'独自完成一份自己选的小项目，按自己的想法来',care:'看看有没有需要照料的小动物，帮它们安顿好',mentoring:'陪新伙伴复习今天学到的办法，让他自己试试',belonging:'约伙伴再玩一轮游戏，让想参加的人都能加入',loyalty:'找熟悉的伙伴坐坐，把今天没说完的话说完',heritage:'听居民讲一段小镇旧事，把它写进纪念册',commerce:'整理摊位的交换记录，想想下次怎样经营',influence:'向伙伴讲清自己的提议，争取大家一起采用',recognition:'挑出自己的满意作品，放到成果墙上展示',discretion:'把只给筹备组看的资料整理好，确认交给谁',strategy:'为下次的闯关活动画一条路线，安排几个有趣的转折'};
function choicesValid(choices){return Array.isArray(choices)&&choices.length===scenes.length&&choices.every(c=>c!==null&&typeof c==='object'&&(c.first===null||Number.isInteger(c.first)&&c.first>=0&&c.first<4)&&(c.second===null||Number.isInteger(c.second)&&c.second>=0&&c.second<4&&c.second!==c.first)&&!(c.first===null&&c.second!==null));}
function rank(w,scores,choices,followups=[]){
 if(!Array.isArray(scores)||scores.length!==4||scores.some(v=>!Number.isFinite(v)||v<0||v>1)||!choicesValid(choices))throw Error('匹配输入无效');
 if(!Array.isArray(followups)||followups.length>3||followups.some(f=>!keys.includes(f.left)||!keys.includes(f.right)||f.left===f.right||!['left','right','both','unknown'].includes(f.choice)))throw Error('附加任务输入无效');
 const active=w.CHARACTER_SLUGS.map((slug,index)=>({slug,index})).filter(r=>!w.INACTIVE_CHARACTERS.includes(r.slug));
 const user=Object.fromEntries(keys.map(k=>[k,0])),observations=[];
 choices.forEach((choice,i)=>{for(const [slot,value]of [['first',1],['second',.5]]){const selected=choice[slot];if(selected===null)continue;const o=scenes[i].options[selected];o.traits.forEach(k=>user[k]+=value/o.traits.length);observations.push({scene:i,priority:slot,text:o.text,traits:o.traits});}});
 followups.forEach((f,i)=>{const selected=f.choice==='left'?[f.left]:f.choice==='right'?[f.right]:f.choice==='both'?[f.left,f.right]:[];for(const trait of selected){user[trait]+=.75/selected.length;observations.push({scene:'followup-'+i,priority:'followup',text:followupActions[trait],traits:[trait]});}});
 const idf=Object.fromEntries(keys.map(k=>[k,1+Math.log((active.length+1)/(1+active.filter(r=>(roleTraits[r.slug]||[]).includes(k)).length))]));
 const userVector=keys.map(k=>user[k]*idf[k]),userNorm=Math.hypot(...userVector),mbtiVector=scores.map(v=>v-.5),mbtiNorm=Math.hypot(...mbtiVector);
 const hasInterests=userNorm>0,hasMBTI=mbtiNorm>1e-12;
 const ranked=active.map(r=>{
  const traits=roleTraits[r.slug]||[],profile=w.PREFERENCE_PROFILES[r.slug].map(v=>v-.5),profileNorm=Math.hypot(...profile);
  const mbti=hasMBTI&&profileNorm>0?(1+mbtiVector.reduce((s,v,j)=>s+v*profile[j],0)/(mbtiNorm*profileNorm))/2:null;
  const vector=keys.map(k=>traits.includes(k)?idf[k]:0),norm=Math.hypot(...vector);
  const interest=hasInterests&&norm?userVector.reduce((s,v,j)=>s+v*vector[j],0)/(userNorm*norm):null;
  // Initial product weights, explicitly NOT calibrated psychological parameters.
  const similarity=hasMBTI&&hasInterests?.6*mbti+.4*interest:hasMBTI?mbti:hasInterests?interest:null;
  const evidence=w.CHARACTER_EVIDENCE?.[r.slug];
  return {...r,similarity,mbti,interest,limitedEvidence:!!evidence?.limited,traits,explanations:observations.filter(o=>o.traits.some(k=>traits.includes(k))).map(o=>({...o,supportedTraits:o.traits.filter(k=>traits.includes(k))})),evidence:{status:'剧情联想，尚未独立编码验证',facts:evidence?.facts||[],limits:evidence?.limits||''}};
 }).sort((a,b)=>(b.similarity??0)-(a.similarity??0)||a.index-b.index);
 const gap=ranked[0].similarity===null?null:ranked[0].similarity-ranked[1].similarity;
 return {version,primary:hasMBTI||hasInterests?ranked[0].index:null,secondary:hasMBTI||hasInterests?ranked[1].index:null,ranked,observations,signal:{mbti:hasMBTI,interests:hasInterests,answeredTasks:choices.filter(c=>c.first!==null).length},close:gap===null||gap<.03,similarityGap:gap,scope:hasMBTI?'四维偏好模式与具体任务的角色联想':'仅有任务兴趣线索，四维没有方向，不能据此确定MBTI类型',parameters:{mbtiWeight:.6,interestWeight:.4,secondPriority:.5,closeGap:.03},notProbability:true};
}
function nextFollowup(result,answered=[]){
 if(result.primary===null||!result.ranked[0]||!result.ranked[1]||answered.length>=3||!result.close)return null;
 const [a,b]=result.ranked,used=new Set(answered.flatMap(f=>[f.left,f.right]));
 const left=a.traits.filter(t=>!b.traits.includes(t)&&!used.has(t)),right=b.traits.filter(t=>!a.traits.includes(t)&&!used.has(t));
 if(!left.length||!right.length)return null;
 // Ask about a previously uncontrasted positive association, never assume that
 // the other character dislikes it. The new answer reranks all 36 candidates.
 return {left:left[0],right:right[0],stem:'庆典已经收尾，还能留一点时间做自己的事。这两件事都有人愿意配合，你更想先做哪件？',leftText:followupActions[left[0]],rightText:followupActions[right[0]],candidateSlugs:[a.slug,b.slug]};
}
root.PONY_NARRATIVE_MATCH={features,scenes,roleTraits,rank,nextFollowup,version,choicesValid};
})(typeof window==='object'?window:globalThis);
