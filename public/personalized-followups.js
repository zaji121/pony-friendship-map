// Reviewed narrative action questions; editorial role associations, not calibrated MBTI items.
(function(w){
const items=[
  {
    "id": "personal-01",
    "title": "留下哪份记录",
    "stem": "今天的机关故障已经弄清楚了。收工前还能整理一份记录，你更想留下哪份？",
    "leftText": "把操作步骤写给各组，标好谁负责哪一步。",
    "rightText": "把用到的原理和几种例外情况整理成笔记，方便以后继续研究。",
    "candidateSlugs": [
      "twilight",
      "sunburst"
    ],
    "left": "coordination",
    "right": "knowledge"
  },
  {
    "id": "personal-02",
    "title": "怎么试新办法",
    "stem": "下次庆典想换一个会发声的小装置。眼前有两条尝试路线，你想先花半小时做哪件事？",
    "leftText": "找出旧图纸和使用记录，逐项确认哪些地方可以沿用。",
    "rightText": "换一个部件做出小样，转一转、听一听，再决定怎么改。",
    "candidateSlugs": [
      "twilight",
      "starlight"
    ],
    "left": "analysis",
    "right": "experiment"
  },
  {
    "id": "personal-03",
    "title": "展台再加点什么",
    "stem": "展台已经搭稳了，还剩一些木料和布。你更想拿来做什么？",
    "leftText": "做几个能折叠的小支架，下次换个地方也能直接摆。",
    "rightText": "做一套搭配好的桌旗和展示底板，让不同摊位各有自己的样子。",
    "candidateSlugs": [
      "applejack",
      "rarity"
    ],
    "left": "practical",
    "right": "aesthetics"
  },
  {
    "id": "personal-04",
    "title": "下次的点心摊",
    "stem": "今天的点心卖得不错，下次还想继续摆摊。收工前，你更想和搭档试哪件事？",
    "leftText": "按预计的来宾人数练一轮分装和补货，看看能不能及时送齐。",
    "rightText": "试两种口味和份量，算算怎样搭配更适合拿来摆摊。",
    "candidateSlugs": [
      "applejack",
      "sugar-belle"
    ],
    "left": "service",
    "right": "commerce"
  },
  {
    "id": "personal-05",
    "title": "再玩半小时",
    "stem": "收尾前还有半小时空闲。熟悉的挑战路线和旁边的新路线都开放着，你去哪边？",
    "leftText": "再跑熟悉的路线，专门练刚才一直没过的那一段。",
    "rightText": "带上地图走新路线，看看它会通向哪里。",
    "candidateSlugs": [
      "rainbow-dash",
      "daring-do"
    ],
    "left": "mastery",
    "right": "exploration"
  },
  {
    "id": "personal-06",
    "title": "留下哪种运动环节",
    "stem": "大家想给下次的运动摊留一个小环节，你更愿意准备哪种？",
    "leftText": "把今天练成的动作连成一段完整展示，再试试怎样做得更漂亮。",
    "rightText": "把其中一个动作拆成几步，找个刚开始学的伙伴试试能不能跟上。",
    "candidateSlugs": [
      "rainbow-dash",
      "scootaloo"
    ],
    "left": "recognition",
    "right": "mentoring"
  },
  {
    "id": "personal-07",
    "title": "做个小惊喜",
    "stem": "想在散场前给伙伴留个小惊喜。材料只够做一种，你更想试哪个点子？",
    "leftText": "悄悄约好几位伙伴，在主持人以为结束时，一起举起藏好的搞怪小牌子。",
    "rightText": "把普通道具改成会突然翻面、露出另一张脸的样子，试试这个怪点子。",
    "candidateSlugs": [
      "pinkie-pie",
      "discord"
    ],
    "left": "belonging",
    "right": "experiment"
  },
  {
    "id": "personal-08",
    "title": "小机关还是新桥段",
    "stem": "伙伴想把刚才的惊喜再玩一次，你更想改哪一部分？",
    "leftText": "找几位来宾聊聊，把他们刚才说的趣事编成新的反转桥段。",
    "rightText": "拆开弹出纸青蛙的小盒子，调整里面的机关，让它跳得更出其不意。",
    "candidateSlugs": [
      "pinkie-pie",
      "cheese-sandwich"
    ],
    "left": "care",
    "right": "craft"
  },
  {
    "id": "personal-09",
    "title": "再留在哪个角落",
    "stem": "收尾时，动物角和材料展示台都还开放着。你想在哪边多待一会儿？",
    "leftText": "看看小动物靠近不同垫子、躲藏处时的反应，给它们换个舒服的位置。",
    "rightText": "挑几块纹理不同的石头，对照介绍卡，弄清它们各有什么特点。",
    "candidateSlugs": [
      "fluttershy",
      "maud"
    ],
    "left": "care",
    "right": "knowledge"
  },
  {
    "id": "personal-10",
    "title": "接下哪件收尾工作",
    "stem": "两位伙伴都想早点回家，各留下一件事需要交接。你愿意接哪件？",
    "leftText": "留在动物角，慢慢把还不适应的小动物安顿好，等照护员接走。",
    "rightText": "拿着交接单把各组的物品送回去，逐处确认有没有漏下东西。",
    "candidateSlugs": [
      "fluttershy",
      "spike"
    ],
    "left": "care",
    "right": "service"
  },
  {
    "id": "personal-11",
    "title": "演出再改一点",
    "stem": "今天的演出已经结束，伙伴想趁记忆还清楚，为下次改一点东西。你更想接哪部分？",
    "leftText": "看看服装在灯光和动作中的录像，改颜色、线条和配饰。",
    "rightText": "再唱一遍那段不够顺的旋律，试试怎样唱出想表达的感觉。",
    "candidateSlugs": [
      "rarity",
      "sweetie-belle"
    ],
    "left": "aesthetics",
    "right": "stage"
  },
  {
    "id": "personal-12",
    "title": "纪念品怎么改",
    "stem": "大家想给下次的纪念品摊试一个新方案，你更想做哪种？",
    "leftText": "给不同风格的来宾搭配颜色和配饰，做出几种各有特点的成品。",
    "rightText": "改一改套装的内容、份量和交换办法，试算哪种组合更好经营。",
    "candidateSlugs": [
      "rarity",
      "filthy-rich"
    ],
    "left": "aesthetics",
    "right": "commerce"
  }
];
function select(result,answered=[]){
 const pool=result.ranked.slice(0,5);if(pool.length<2)return null;
 const usedIds=new Set(answered.map(f=>f.questionId)),pair=f=>[f.left,f.right].sort().join('|'),usedPairs=new Set(answered.map(pair));
 const lead=new Set(pool.slice(0,2).map(r=>r.slug)),available=new Set(pool.map(r=>r.slug)),peak=Math.max(...pool.map(r=>r.similarity??0)),weights=pool.map(r=>Math.exp(((r.similarity??0)-peak)/.05)),sum=weights.reduce((a,b)=>a+b,0);
 const scored=items.filter(q=>!usedIds.has(q.id)&&!usedPairs.has(pair(q))).map(q=>{
  const values=pool.map(r=>Number(r.traits.includes(q.left))-Number(r.traits.includes(q.right))),leadGap=Math.abs(values[0]-values[1]),mean=values.reduce((s,v,i)=>s+v*weights[i],0)/sum,spread=values.reduce((s,v,i)=>s+weights[i]*(v-mean)**2,0)/sum;
  return {q,leadGap,spread,exact:q.candidateSlugs.every(s=>lead.has(s)),near:q.candidateSlugs.every(s=>available.has(s)),relevant:q.candidateSlugs.some(s=>lead.has(s))};
 }).filter(r=>r.leadGap>0&&r.spread>1e-12&&r.relevant).sort((a,b)=>Number(b.exact)-Number(a.exact)||Number(b.near)-Number(a.near)||b.spread-a.spread||a.q.id.localeCompare(b.q.id));
 if(!scored.length)return null;return {...scored[0].q,contrast:'personalized-shared-situation',selectionScope:'editorial candidate contrast; variance heuristic, not calibrated information gain'};
}
w.PONY_PERSONALIZED_FOLLOWUPS={revision:'20261031-reviewed12',items,select};
})(window);
