// Generated from the same question bank and scoring used by the browser.
const window={};
// 自编情境题：每个偏好维度12题。不是官方 MBTI 量表。
(() => {
 const rows=[
 ['EI','庆典结束，第二天没有安排。你怎样恢复精力？','约朋友继续聊天或活动','独自读书或休息'],
 ['SN','第一次做苹果派，你从哪里开始？','照具体食谱操作','理解搭配原理，构思新做法'],
 ['TF','比较两份预算相同的活动方案，你先看？','成本与执行效果','参与者的需要与感受'],
 ['JP','离旅行还有一周，你怎样安排？','提前定好交通与行程','确定出发地点，途中再决定'],
 ['EI','到没人认识你的兴趣小组，你通常？','主动找几个人介绍自己的兴趣','先听大家聊，找到话题再加入'],
 ['SN','朋友介绍一座城堡，你更想听？','布局、材料和实际见闻','象征意义和可能藏着的故事'],
 ['TF','伙伴争论分工，你先问？','原先约定是什么，怎样分更公平有效','各自有什么顾虑，怎样安排能被接受'],
 ['JP','收到两周后交付的任务，你通常？','分阶段提前按进度完成','先试不同办法，再集中完成'],
 ['EI','想到还不成熟的主意，你怎样理清？','说给朋友听，在交流中整理','先自己写下来，再与人讨论'],
 ['SN','学习新技巧，你更容易通过什么理解？','示范、实例和实际操作','整体概念、原理与知识联系'],
 ['TF','朋友请你给作品反馈，你先讲？','不符合要求的地方和修改方法','先了解创作意图，再谈修改建议'],
 ['JP','约朋友周末活动，你更喜欢？','提前确定时间地点和活动','先见面，按当天心情决定活动'],
 ['EI','热闹聚会进行到一半，你通常？','越聊越有精神，继续认识朋友','暂时离开人群，安静待一会儿'],
 ['SN','参观岩石博物馆，你更想研究？','纹理、成分、产地与分类','形成过程与不同岩石的联系'],
 ['TF','两位合作伙伴能力接近，你更看重？','职责清楚，能直接讨论结果','相处信任，能理解彼此处境'],
 ['JP','原定划船临时取消，你更希望？','尽快敲定替代活动','先看看附近，再临时选择'],
 ['EI','忙了一天，朋友临时约你聊天，你更希望？','见面边聊边放松','先独自休息，改约另一个时间'],
 ['SN','看完故事，你更容易记住？','人物的行动和情节细节','故事主题与人物的深层联系'],
 ['TF','队友失误耽误进度，你先弄清？','哪一步出了错，怎样避免重演','他遇到什么困难，怎样支持恢复'],
 ['JP','你的书桌和待办更接近？','物品有固定位置，任务有次序','按手头事情摆放，任务随情况调整'],
 ['EI','讨论开始，主持人提问，你通常？','尽早发言，听回应后补充','先听意见，整理好再发言'],
 ['SN','接到新任务，你先需要什么？','具体要求、现有条件和参考实例','整体目的、可能性和发展方向'],
 ['TF','朋友请求破例，你先考虑？','能否用一致规则适用于其他人','他的特殊处境，规则能否灵活处理'],
 ['JP','两件衣服都合适，你通常？','比较后做决定，结束挑选','再看其他选择，暂时保留决定'],
 ['EI','遇到烦心事，你首先做什么？','找熟悉的朋友聊，在交流中梳理','先独自整理，之后再决定是否分享'],
 ['SN','农场出现反复的问题，你先尝试？','核对记录，使用已证实的办法','重新解释问题，探索不同思路'],
 ['TF','讨论中意见不同，你自然的回应是？','比较理由，直接指出逻辑漏洞','确认各自重视什么，寻找兼顾的办法'],
 ['JP','明天交报告，今晚想到新点子，你通常？','整理已确定内容，优先按时收尾','重新调整内容，加入新思路'],
 ['EI','搬到新地方，周末你更想？','参加公共活动，认识邻居','先熟悉生活，逐渐认识少数邻居'],
 ['SN','介绍计划时，你先讲？','具体步骤、资源和已有证据','核心想法、长远方向和可能变化'],
 ['TF','分配有限的团队奖励，你优先采用？','统一的贡献标准','结合个人处境与实际需要'],
 ['JP','一天有一段空闲，你更舒服的做法是？','从待办选一件，明确时间用途','先不设目标，看当下想做什么'],
 ['EI','朋友组织多人游戏，你更享受？','与不同的人轮流互动','与一两位熟悉的朋友交流'],
 ['SN','老师讲解新理论，你更希望？','多给日常实例，说明实际应用','先讲总体框架，解释为什么成立'],
 ['TF','决定是否接受邀请，你先衡量？','时间投入与收益，条件是否可行','个人价值与对关系的意义'],
 ['JP','朋友说到时候再决定，你更希望？','先说清关键事项，避免悬着','留有余地，之后灵活选择'],
 ['EI','完成小成果，你通常？','马上找人分享，一起庆祝','先享受成就感，之后告诉亲近的人'],
 ['SN','设计服装展示，你先关注？','现有空间、尺寸与实际效果','新主题概念与意外的呈现方式'],
 ['TF','朋友抱怨活动取消，你较常回应？','一起讨论能解决的问题和下一步','回应失望，问他需要怎样的陪伴'],
 ['JP','逐步完成一个兴趣项目，你更喜欢？','固定练习，按阶段完成','随兴趣尝试不同部分，灵活推进'],
 ['EI','几天没有社交活动，你通常？','想找人见面，安排共同活动','觉得自在，继续自己的事情'],
 ['SN','有人提出大胆方案，你先问？','有哪些事实支持，实际怎样操作','还能延伸什么可能，将改变什么'],
 ['TF','两个方案都不完美，你倾向？','用标准比较利弊，接受必要取舍','综合个人价值与相关人的需要再取舍'],
 ['JP','做完一件事，什么让你更满足？','事情确定完成，可以划掉待办','发现新的选择，还能继续拓展'],
 ['EI','去常去的咖啡馆，你一般？','与店员或熟客聊聊天','安静做自己的事，需要时再交流'],
 ['SN','总结一次经历，你先说？','发生了什么，记录具体细节','看到了什么规律，下一次还可能怎样'],
 ['TF','苹果嘉儿说工作量超出预期，问你怎么调整，你先建议？','核对时间任务，按优先级重新分配','和伙伴讨论负担，照顾各自能承受的节奏'],
 ['JP','收到模糊的活动邀约，你更希望？','尽早知道时间、地点与流程','先知道主题，细节以后再定']
 ];
 window.QUIZ_MODEL='four-preferences-v2';
 window.QUIZ_QUESTIONS=rows.map(([axis,stem,left,right],i)=>{
   const options=[[left+'。这是我通常的做法。',1],[left+'。我略偏向这样。',1/3],[right+'。我略偏向这样。',-1/3],[right+'。这是我通常的做法。',-1]];
   return [stem,i%8>=4?options.reverse():options,{axis}];
 });
 window.PREFERENCE_DIMS=[
 {key:'EI',name:'外向 E / 内向 I',strength:'外向侧重在互动中整理想法；内向侧重先独自整理。两种方式都可以建立深厚友谊。',watch:'留意自己的恢复节奏，也明确告诉朋友何时愿意交流。'},
 {key:'SN',name:'实感 S / 直觉 N',strength:'实感侧重具体事实与经验；直觉侧重模式、联系与可能性。',watch:'做决定时把事实和构想放在一起，检查有没有遗漏的信息。'},
 {key:'TF',name:'思考 T / 情感 F',strength:'思考侧重一致原则与逻辑；情感侧重价值与人的处境。两者都会思考，也都有情绪。',watch:'提出建议前，确认对方希望分析问题还是获得回应。'},
 {key:'JP',name:'判断 J / 知觉 P',strength:'判断偏好明确安排与收尾；知觉偏好开放选择和灵活调整。',watch:'与伙伴约定必须确定的事项，以及可以保留变化的部分。'}
 ];
 // 编辑依据角色故事建立的连续侧写，不是角色官方类型。相似角色可以共享类型。
 window.PREFERENCE_PROFILES={twilight:[.32,.23,.3,.88],applejack:[.58,.87,.55,.86],'rainbow-dash':[.88,.79,.73,.25],'pinkie-pie':[.94,.31,.22,.2],fluttershy:[.16,.77,.13,.43],rarity:[.7,.32,.22,.8],starlight:[.28,.25,.61,.71],spike:[.38,.78,.28,.8],luna:[.15,.29,.27,.64],cadance:[.73,.45,.12,.85],discord:[.85,.1,.7,.1],spitfire:[.82,.77,.84,.87],'shining-armor':[.64,.85,.6,.91],'big-mac':[.13,.93,.47,.86],maud:[.08,.88,.86,.59],trixie:[.9,.44,.67,.3]};
})();

// 原创 G4 行为情境，四维各12题。不是官方 MBTI 量表。
(() => {
const banks={
  "EI": [
    [
      "你来参加庆典筹备会，桌边坐着几位还不认识的志愿者。离开会还有一会儿，你通常会？",
      "主动打个招呼，聊聊大家是来帮什么忙的",
      "先坐下看看材料，有人聊到自己感兴趣的事再加入"
    ],
    [
      "讨论庆典主题时，你有个点子，还没完全想好。你通常会？",
      "先说出来，和大家聊着聊着把它想完整",
      "先自己想清楚，再跟大家说"
    ],
    [
      "你要写一段庆典邀请词，两边都有空位。你想坐哪儿写？",
      "坐在伙伴旁边，写的时候也能聊聊想法",
      "坐到安静一点的地方，写好再拿给伙伴看"
    ],
    [
      "连续挂了一阵装饰，现在有十分钟休息。你会？",
      "拿杯水坐到伙伴身边，接着聊刚才的事",
      "拿杯水去广场边的长椅，安静坐一会儿"
    ],
    [
      "装饰架试了几次还是歪，你有点烦。你更习惯怎么想办法？",
      "找个伙伴说说刚才怎么弄的，一起想想问题在哪",
      "先自己琢磨一会儿，有了头绪再找伙伴商量"
    ],
    [
      "休息时，你认识了两位也喜欢做手工的志愿者。你更喜欢哪种聊天方式？",
      "几个人围着桌子，一起聊做过什么手工",
      "找个聊得来的人，慢慢聊各自做过的东西"
    ],
    [
      "来宾到了，碧琪邀请大家玩一个你也会的小游戏。你更想？",
      "和几组不同的来宾轮流玩",
      "和一两位熟悉的伙伴玩上几轮"
    ],
    [
      "表演刚结束，伙伴问你觉得怎么样。你通常会？",
      "接着大家的话聊，想到哪儿就说到哪儿",
      "先想想刚才的节目，再说自己的感受"
    ],
    [
      "你负责的点心卖完了，也已经交好班。现在可以休息一会儿，你更想？",
      "去找伙伴坐坐，聊聊刚才摊位上的趣事",
      "找个安静的地方坐坐，歇一会儿再去找朋友"
    ],
    [
      "庆典结束，你要给今天的照片配上几句说明。你通常会？",
      "拉上伙伴边看边聊，顺手记下想起来的趣事",
      "先自己翻翻照片、写几句，再给伙伴看"
    ],
    [
      "今天一直和大家一起忙，收工后伙伴约你吃点心。你更想？",
      "跟大家去点心店，边吃边聊着放松",
      "先回家自己休息，和伙伴改约另一天"
    ],
    [
      "第二天没什么事，也不用做家务。空出半天，你更想？",
      "约朋友吃点东西，聊聊昨天的庆典",
      "在家看看书、做点喜欢的事，自己待一会儿"
    ]
  ],
  "SN": [
    [
      "苹果嘉儿准备教大家做苹果派，两种教法都能学会。你更想让她怎么教？",
      "边示范边讲，照着每一步跟着做",
      "先讲清做法背后的道理，再自己动手试"
    ],
    [
      "珍奇介绍一套新迎宾服，两份说明都放在桌上。你更想先翻哪份？",
      "布料样片、尺寸和上身照片",
      "设计主题，以及几个图案之间的联系"
    ],
    [
      "新志愿者刚到，还不了解整场庆典。紫悦请你做个简短介绍，你更习惯从哪儿讲起？",
      "从集合地点和分工讲起，再说其他安排",
      "从整场活动的安排思路讲起，再说各自的任务"
    ],
    [
      "你第一次用摊位上的封口机。操作步骤和机器原理都有说明，你更想先看？",
      "怎么放袋子、按哪个按钮，照着步骤试一次",
      "机器是怎么封口的，看懂后再试着操作"
    ],
    [
      "点心桌怎么摆都显得挤，两种办法都来得及试。你通常从哪儿开始？",
      "照着以前摆成功的摊位照片，一处处调整",
      "先画一个不同的布局，再照着摆一遍"
    ],
    [
      "苹果展的介绍牌已经做好，朋友问展览有什么看头。你更自然会怎么介绍？",
      "说几个苹果品种，举例讲讲它们的口感差别",
      "讲讲展览的主题，说明几部分内容怎样连在一起"
    ],
    [
      "入口换了新装饰。朋友问你“改了什么”，你通常先怎么回答？",
      "说彩带换了什么颜色、画挂到了哪里",
      "说整个入口变成了什么风格、像在表达什么主题"
    ],
    [
      "碧琪讲了件筹备时的趣事，你要转述给朋友。哪种讲法更像你？",
      "按当时的经过讲：谁先做了什么，后来又怎样",
      "先说这件事说明了什么，再拿其中的片段举例"
    ],
    [
      "珍奇想给舞台加些装饰，材料够用，也有时间慢慢做。你更想从哪儿开始？",
      "翻翻已有的舞台照片，挑些合适的做法来改",
      "先想一个舞台主题，再围绕主题设计装饰"
    ],
    [
      "你要向没来过的朋友介绍这次庆典。两种开头都能用，哪种更像你平时的讲法？",
      "从一张现场照片讲起，说说当时大家在做什么",
      "先讲这次活动的主题，再用几个活动来说明"
    ],
    [
      "复盘时有人提出，下次把全部摊位改成一条长长的环形路线。你先问？",
      "广场是否放得下，来宾多时怎么通行",
      "沿这条路线还能串起哪些活动，能带来什么新体验"
    ],
    [
      "朋友想了解明年的庆典，桌上有两份新资料。你更想先看哪份？",
      "往届的现场照片，配着每个摊位的具体介绍",
      "新一届的主题构想，配着各活动之间的关系图"
    ]
  ],
  "TF": [
    [
      "两套摊位布置价格一样。一套能多摆些东西，另一套更合摊主的使用习惯。你更倾向推荐？",
      "多摆些东西的方案，把摊位空间用足",
      "更合摊主习惯的方案，让他们用着顺手"
    ],
    [
      "迎宾服有两种改法，都能穿得舒适。一种更耐用，另一种更能保留珍奇喜欢的设计。你更支持？",
      "更耐用的改法，之后还能反复用",
      "保留她喜欢的设计，让这件衣服更合她心意"
    ],
    [
      "迎宾桌原本约好了统一配色。一位伙伴想换色，两种安排都不影响使用。你更支持？",
      "照原来约好的配色布置，各桌保持一致",
      "允许他那桌用喜欢的颜色，保留一点个人特色"
    ],
    [
      "两位伙伴都想负责拍照，迎宾处还缺人。你先怎么分工？",
      "对照两人的经验和空闲时段，排出轮班表",
      "分别问他们想拍照的原因，以及愿不愿意轮流迎宾"
    ],
    [
      "摊位号码贴错，东西已经送回原处。复盘时，大家对处理办法意见不同。你更赞成？",
      "以后所有人都按同一张核对表检查",
      "按每个人遇到的困难，分别调整分工或提醒方式"
    ],
    [
      "招牌有两份样稿，都能看清。一份指路更直接，另一份更能表达伙伴想传达的心意。你更支持？",
      "指路更直接的，让来宾一眼知道往哪走",
      "更能传达心意的，让来宾感受到这次活动的用心"
    ],
    [
      "一位来宾来晚了，想参加已经满员的手工课。安排这件事时，你更看重？",
      "按事先说好的候补顺序安排，对所有来宾都一样",
      "先了解他有没有特殊情况，再商量能否另外安排"
    ],
    [
      "朋友期待的节目临时取消了，他在旁边说：“白等这么久，好可惜。”你通常会先？",
      "说“看看还有什么好玩的”，陪他找找别的节目",
      "说“是啊，你都盼了好久了”，先陪他聊几句"
    ],
    [
      "两场节目同时开始，你只能去一场。一场更符合你原先的游玩打算，另一场是朋友第一次登台。你更倾向？",
      "按原先的打算，去自己本来就想看的节目",
      "调整打算，去现场支持第一次登台的朋友"
    ],
    [
      "收桌椅有两种分法，都能按时完成。大家想听听你的意见，你更赞成？",
      "按人手和路程分，每组的工作量尽量一致",
      "让特别累的伙伴少搬一点，其他人多分担一些"
    ],
    [
      "大家都认真帮了忙，但感谢礼物数量有限。两种分法需要选一种，你更赞成？",
      "按事先约好的参与时长发放，标准对所有人一样",
      "考虑每个人实际付出的难处，允许个别调整"
    ],
    [
      "下次活动有两种改进方案，预算只够做一种。你会先比较？",
      "各要花多少钱、多少时间，能解决哪些问题",
      "各自会方便哪些人，又会给哪些人添麻烦"
    ]
  ],
  "JP": [
    [
      "紫悦把准备清单交给你，明天下午开场，时间够用。你更习惯？",
      "先把今天和明早各做什么排好，再动手",
      "先做眼前顺手的一项，接下来做什么边做边定"
    ],
    [
      "迎宾服和两条配饰都已经试过，穿着都舒服。你会？",
      "选定一套，装进明天要带的袋子",
      "先把两条都留着，等摊位布置好再搭配"
    ],
    [
      "今晚要做的事都忙完了，离回家还有半小时。你更想？",
      "先想好这半小时做点什么，再去做",
      "先四处看看，碰上想做的事再去做"
    ],
    [
      "风变大了，原定悬挂的纸灯需要改放到桌面。时间充足，你会？",
      "先确定新的摆放位置，再按新方案重新布置",
      "先摆几个位置试试，边看效果边调整"
    ],
    [
      "彩带和招牌都由你来做，时间够用，也不影响别人。你更喜欢哪种做法？",
      "先把彩带做完，再专心做招牌",
      "两样穿插着做，哪边有想法就先做哪边"
    ],
    [
      "两种招牌画法你都看过样稿，也都能按时完成。你更倾向？",
      "现在定好一种，后面照着做",
      "先留着两种选择，画的时候再决定用哪种"
    ],
    [
      "你有二十分钟不用值班。广场上有点心摊、手工桌和表演。你会？",
      "先选好要去哪两处，分配一下时间",
      "先沿摊位逛，看到想参加的再停下"
    ],
    [
      "你和伙伴要逛三个摊位，距离都差不多。你会？",
      "先约好顺序，沿着选好的路线逛",
      "先走到最近想看的摊位，再决定下一站"
    ],
    [
      "你答应给舞台拍一组照片，几个时段都能拍齐。你更喜欢？",
      "提前定好什么时候拍，到点过去",
      "逛到附近就看看，有合适的画面就拍"
    ],
    [
      "收工后，大家约着去吃点东西，几家店都没关门。你更喜欢？",
      "出发前选好去哪家，到了就能坐下",
      "先往街上走，看到想吃的再决定"
    ],
    [
      "大家想下个月再办一次活动，几个名字都觉得不错，也不急着印邀请函。你更倾向？",
      "这次就选定一个，后面不用再惦记",
      "先留着几个备选，等内容定得更清楚再选"
    ],
    [
      "下次庆典的日期已经定了，活动内容还在商量。你更希望？",
      "早点知道大致流程，好提前安排当天怎么过",
      "先留出那一天，具体玩什么到时再看"
    ]
  ]
};
window.QUIZ_CHAPTERS=[
  {
    "title": "一起准备庆典",
    "context": "周五下午，你来到小马谷广场，和伙伴一起准备明天的社区庆典。大家先商量节目，再准备点心和服装。",
    "start": 0,
    "end": 11
  },
  {
    "title": "把广场布置好",
    "context": "周六上午，庆典还没开场。你和伙伴在同一个广场搭摊位、挂装饰，做最后一次检查。",
    "start": 12,
    "end": 23
  },
  {
    "title": "庆典开场了",
    "context": "周六下午，街坊来到广场。你和伙伴一起招呼来宾、照看摊位，也抽空参加活动。",
    "start": 24,
    "end": 35
  },
  {
    "title": "一起收尾与休息",
    "context": "周六傍晚，最后一批来宾离开。你和伙伴收拾广场、整理照片，再安排自己的休息时间。",
    "start": 36,
    "end": 47
  }
];
const facets={"EI": ["恢复精力", "想法形成", "联结范围", "刺激节奏", "分享起点", "注意力环境", "感受整理", "表达媒介", "交流广度", "自由时间", "观点形成", "注意力方向"], "SN": ["学习入口", "阅读关注", "辨认知识", "展览概括", "故事记忆", "理解模型", "探索起点", "介绍顺序", "观察关注", "创作起点", "经历整理", "语言联想"], "TF": ["资源取舍", "反馈依据", "方案比较", "合作依据", "复盘入口", "例外判断", "分歧处理", "意义与可行性", "投入取舍", "规则审视", "分工依据", "建议评估"], "JP": ["行程安排", "任务推进", "筹备开放度", "应对变更", "任务切换", "选择收尾", "新信息与截止", "自由时间安排", "探索路线", "决定时机", "方案确定", "完成体验"]};
const reviewNotes={"EI": "比较注意力与交流节奏，不把害羞、社交技巧、是否有人陪伴当作计分依据。", "SN": "比较偏好的信息入口，不把知识多少、智力或是否会做这项任务当作依据。", "TF": "两侧都可以关心别人，也都能逻辑思考；比较先采用的决策依据，不比较善恶。", "JP": "比较外部安排与保留余地，不把拖延、懒惰或责任感直接当作P/J。"};
window.QUESTION_VERSION="festival-chapters-20261029-choice";
const axes=['EI','SN','TF','JP'];
window.QUIZ_QUESTIONS=Array.from({length:48},(_,i)=>{
 const axis=axes[i%4],[stem,left,right]=banks[axis][Math.floor(i/4)];
 const opts=[[left,1],[right,-1]];
 return [stem,i%8>=4?opts.reverse():opts,{axis,chapter:Math.floor(i/12),id:'festival-chapters-20261029-choice-'+(i+1),left,right,facet:facets[axis][Math.floor(i/4)],review:reviewNotes[axis],status:'内容修订版 · 未实测验证'}];
});
window.PREFERENCE_DIMS.forEach(d=>{d.poles={EI:[['你较常在交流中理清想法，即时回应能帮助你推进。','也给安静的伙伴留思考时间。'],['你较常独自整理后分享，表达容易更有轮廓。','需要支持时可以先说一点，不必等想法完全成熟。']],SN:[['你较常从事实与经验入手，让讨论接上真实条件。','给新思路留一个小范围验证的机会。'],['你较常连接线索，发现尚未展开的可能。','把构想写成具体例子，核对现实条件。']],TF:[['你较常用一致标准比较方案，让取舍可以讨论。','也问这个决定给不同伙伴带来什么影响。'],['你较常先看价值与处境，让合作容易被理解。','把重要的价值说成清楚标准，允许不同权衡。']],JP:[['你较常提前安排，明确完成会让你安心。','给计划留可调整的空位。'],['你较常随新信息调整，开放余地帮助你选择。','为重要交付约定一个收尾点。']]}[d.key];});
})();
// 世界观名称只改变展示，MBTI四维计分不变。
window.PREFERENCE_DIMS.forEach((d,i)=>{
 const themes=[['友谊能量','结伴交流','静心蓄能'],['线索探索','实境观察','灵感联想'],['友谊抉择','原则推演','心意权衡'],['冒险节奏','行程筹划','随机应变']];
 d.mbtiName=d.name;d.name=themes[i][0];d.worldPoles=themes[i].slice(1);
});

// 保留原16个索引，追加25位；旧结果链接仍对应原来的角色。
(() => {
const rows=[
['sunburst','日光耀耀','Sunburst','独角兽','水晶帝国 · 友谊学校','太阳与光芒','知识的耐心','把知识变成伙伴用得上的答案','你愿意把不懂的地方弄明白，不急着用一句“我应该会”掩盖困惑。知识可以成为友谊里的支持，而不只是证明自己的成绩。','能查证、解释，并认真承认自己还不知道什么。','把懂得不够多误解成不值得被邀请。','The Crystalling / Uncommon Bond','熟悉魔法知识，不等于擅长实际施法；他仍能用研究帮助朋友。',[.2,.25,.45,.75],['library','teacher','twins','geology']],
['daring-do','无畏天马','Daring Do','飞马','四处探索 · 写作居所','指南针玫瑰','探索与独立','在真实线索里找到路的人','面对陌生挑战，你更想弄清眼前的条件并亲自验证。你欣赏独立，但遇到值得信任的伙伴，也可以把单独闯关变成并肩探索。','能观察现场、应对变化，把想法放进实际行动。','觉得请求协助会削弱自己的独立。','Daring Don’t / Daring Doubt','探险家与作家；独立解决问题，也逐渐接受合作。',[.3,.8,.8,.2],['geology','library','security','animation']],
['cheerilee','采妮','Cheerilee','陆马','小马谷 · 学校','三朵微笑花','教育与支持','让每个声音都有机会被听见','你关注的不只是事情有没有结束，还包括伙伴有没有真正理解。耐心解释、给人再次尝试的机会，是你可能珍惜的合作方式。','能把支持落实成具体解释和稳定的陪伴。','为了照顾所有人，忽略自己的时间与边界。','Hearts and Hooves Day / Ponyville Confidential','小马谷教师；会关心学生，也处理课堂规则与行为后果。',[.65,.75,.15,.8],['teacher','social','library','events']],
['celestia','宇宙公主','Princess Celestia','天角兽','坎特洛特','太阳','信任与引导','把方向交给伙伴，也留在身后支持','你希望帮助别人找到自己的答案，而不是每一次都替他们做决定。成熟的支持可以是提出问题、提供资源，以及相信对方能承担下一步。','能把眼前的小事放进长期成长的方向里。','太习惯照看全局，别人不知道你也需要休息。','Celestial Advice / A Royal Problem','引导紫悦学习友谊，也会面对职责与私人需要之间的冲突。',[.6,.2,.3,.85],['teacher','social','sustainability','secretary']],
['zecora','可拉','Zecora','斑马','永恒自由森林 · 树屋','螺旋太阳图案','观察与求证','先看事实，再让误解慢慢散开','你愿意多观察一层，不轻易把陌生等同于危险。把经验与线索说清楚，能让伙伴从“大家都这么说”走向“我们实际知道什么”。','能独自钻研，并用具体知识帮助别人。','习惯简短表达，伙伴可能没跟上你的思路。','Bridle Gossip / A Health of Information','提供草药与药剂知识；初见时遭到误解，后成为可信赖的朋友。',[.2,.6,.7,.65],['gardening','library','geology','teacher']],
['cheese-sandwich','芝士三明治','Cheese Sandwich','陆马','巡回派对 · 趣味工厂','折叠手风琴样式的三明治','欢笑与回应','让快乐真正到达别人身边','你喜欢创造令人期待的时刻，更在乎对方是否真的开心。热闹本身不是目的；从参与者的回应里调整，快乐才有了具体的落点。','能即兴创造连接，从反馈中调整表现。','把不断制造开心当成必须完成的任务。','Pinkie Pride / The Last Laugh','派对策划者；经营趣味工厂后重新寻找与观众直接互动的快乐。',[.85,.35,.25,.15],['events','magician','pastry','animation']],
['apple-bloom','苹果丽丽','Apple Bloom','陆马','小马谷 · 甜苹果园','盾牌中的苹果与爱心','尝试与成长','还没找到答案，也愿意继续试','你不想只被“暂时做不到”定义。尝试能让你发现兴趣，也让你知道自己真正需要什么支持。成长可以先发生，标签可以晚一点出现。','愿意尝试实际任务，并把伙伴拉进共同探索。','急着找到一个身份，反而忽略体验本身。','Call of the Cutie / Crusaders of the Lost Mark','与伙伴探索可爱标志，后来帮助其他小马理解天赋。',[.65,.7,.35,.35],['gardening','events','teacher','agriculture']],
['sweetie-belle','甜心宝宝','Sweetie Belle','独角兽','小马谷','盾牌中的星星与音符','表达与理解','把心里的故事唱成别人听得懂的话','你可能很在意表达背后的心意，而不仅是最后呈现的效果。被比较时容易忘记自己的步调；表达不必成为另一个人的复制品。','能从不同人的感受出发，找到有创意的表达。','用别人的成果判断自己的价值。','For Whom the Sweetie Belle Toils / The Show Stoppers','珍奇的妹妹，喜欢歌唱与创作，在相处中学习理解对方。',[.45,.3,.2,.35],['animation','magician','teacher','fashion']],
['scootaloo','醒目露露','Scootaloo','飞马','小马谷','盾牌中的翅膀与闪电','勇气与伙伴','用自己的方式靠近想去的地方','你欣赏勇气，也想找到实际能走的路。喜欢谁不意味着必须复制谁的能力；和伙伴一起探索，能让自己的长处更清楚。','能从行动与练习中获得反馈，带动伙伴尝试。','把偶像的道路当成自己唯一的标准。','Sleepless in Ponyville / Flight to the Finish','擅长滑板车技巧，向云宝学习。',[.8,.8,.6,.25],['coach','sportsData','events','animation']],
['sandbar','桑德巴尔','Sandbar','陆马','小马谷 · 友谊学校','三只海龟','接纳与陪伴','让不同的伙伴也能舒服地加入','你不需要把关系弄得声势浩大，愿意留意对方是否真正融入。尊重差异不是让别人努力变得像你，而是一起找到双方都能自在参与的办法。','能在日常相处中提供稳定、不过度催促的支持。','怕打扰别人，自己的邀请也一直没说出口。','School Daze / She’s All Yak','友谊学校学生，邀请约娜参加舞会，并接纳她原本的样子。',[.45,.75,.2,.4],['social','teacher','gardening','events']],
['gallus','加鲁斯','Gallus','狮鹫','狮鹫岩 · 友谊学校','无可爱标志','信任与坦诚','嘴上淡淡，心里认真留住伙伴','你可能习惯先用玩笑或简短回应保护自己，但关系重要时，仍然希望被记得。坦诚并不要求一次说完全部，只需要让别人知道你的真实需要。','能保持独立判断，也在信任建立后认真参与。','用冷淡或玩笑替代真正想提出的请求。','The Hearth’s Warming Club / What Lies Beneath','外表带刺，逐渐坦诚自己对归属与伙伴的重视；经历不等于人格类型。',[.25,.55,.65,.35],['library','security','animation','coach']],
['silverstream','银溪','Silverstream','鹰马 / 海马','阿里斯山 · 海马国 · 友谊学校','无可爱标志','好奇与分享','连一段楼梯也能发现新鲜感','你对新体验容易产生真实的好奇，也愿意把惊喜分享给伙伴。好奇能让平常事物变得有趣；停下来完成一次观察，又能把兴奋变成发现。','愿意发问、连接不同体验，让合作有新的入口。','新事物太多时，正在做的事容易被打断。','School Daze / Student Counsel','对地面世界的事物充满兴趣，也会投入自己的研究主题。',[.9,.2,.3,.3],['animation','events','teacher','library']],
['yona','约娜','Yona','牦牛','亚克斯坦 · 友谊学校','无可爱标志','真诚与归属','不用收起自己，也能属于这里','你重视自己的来处，也希望被伙伴真心接纳。相处的意义不是把每个人磨成一样，而是找到差异也能并肩的办法。','表达直接真诚，愿意为重要的关系付出行动。','为了融入，过度改变自己原本珍惜的部分。','She’s All Yak / Uprooted','尝试小马舞会习惯，后来理解不必隐藏自己的牦牛身份。',[.8,.85,.2,.65],['events','social','gardening','fashion']],
['ocellus','奥瑟蕾丝','Ocellus','幻形族','幻形族王国 · 友谊学校','无可爱标志','学习与细心','安静地学，也认真地贡献','你可能先把知识弄清楚，再选择何时加入讨论。准备是你的支持方式，但你不必证明自己绝不出错，才有资格让伙伴听见。','能记住资料、理解要求，并细致地贡献信息。','因为怕表达不够完整，错过已经能提供的帮助。','What Lies Beneath / School Raze','喜欢阅读，熟悉课堂知识；害羞或害怕不能直接用来判定 I。',[.15,.4,.35,.85],['library','teacher','secretary','twins']],
['smolder','暗焰','Smolder','龙','龙之地 · 友谊学校','无可爱标志','坦率与接纳','硬气的外表，也装得下柔软的爱好','你希望保留自己的直率，也不想让别人的期待限制兴趣。能竞争，也能欣赏可爱的事物；不同的一面不需要互相取消。','敢于尝试，愿意用实际行动支持伙伴。','怕被看作不够强硬，藏起自己真实的喜欢。','What Lies Beneath / Sweet and Smoky','喜欢挑战，也有喜爱精致可爱事物的一面；是盖博的妹妹。',[.7,.75,.7,.35],['coach','animation','events','fashion']],
['ember','火苗','Ember','龙','龙之地','无可爱标志','勇气与合作','敢接下挑战，也能重新学习合作','你希望用实际表现证明自己的判断。向伙伴学习不等于失去力量；清楚的目标与真实的支持可以一起存在。','能面对压力，愿意承担选择与行动的责任。','着急推进时，以为伙伴自然会理解自己的意图。','Gauntlet of Fire / Triple Threat','成为龙王，逐渐学习合作与不同的沟通方式。',[.65,.7,.8,.75],['security','coach','events','sustainability']],
['thorax','索瑞斯','Thorax','幻形族','幻形族王国','无可爱标志','分享与信任','把不同变成大家可以一起前进的理由','你希望关系里有空间讨论不同需要，也愿意相信分享能够带来改变。温和不是没有立场；当共同体需要你时，边界也是支持。','愿意倾听不同声音，把支持变成合作的条件。','为了维持和气，迟迟不说自己的立场。','The Times They Are a Changeling / To Change a Changeling','从渴望友谊到带领幻形族学习分享与共同生活。',[.4,.3,.15,.7],['social','teacher','events','sustainability']],
['gilda','吉尔达','Gilda','狮鹫','狮鹫岩','无可爱标志','独立与重建信任','不必收起锋芒，也能学会接住伙伴','你珍惜自主，不喜欢被别人规定怎样相处。但当一段关系值得保留，你也可以主动把在乎做成行动。修复关系不等于抹去个性。','能保持自己的立场，在关键时刻实际帮助伙伴。','用防备挡住了自己其实很珍惜的关系。','Griffon the Brush Off / The Lost Treasure of Griffonstone','侧写采用重建友谊后的吉尔达；不把刻薄或霸凌当作 T 偏好。',[.35,.8,.75,.3],['security','coach','events','pastry']],
['granny-smith','史密夫婆婆','Granny Smith','陆马','小马谷 · 甜苹果园','苹果派','经验与活力','把走过的路讲成还能继续的新故事','你重视真实经历，也不认为熟悉等于没有乐趣。经验可以帮伙伴少走弯路，好奇又能让经验继续生长。','能用具体经历说明道理，让日常有稳定的支点。','觉得熟悉的办法一定适合新的情境。','Family Appreciation Day / Grannies Gone Wild','珍惜家族故事，也会与朋友出游享受新的活动。',[.75,.85,.35,.7],['agriculture','gardening','teacher','pastry']],
['diamond-tiara','珠玉冠冠','Diamond Tiara','陆马','小马谷','银色皇冠','选择与影响','把被看见的力量用来支持别人','你希望自己的声音有分量，也可以重新选择怎样使用影响力。获得认可不必来自让别人输；帮伙伴取得机会，也能让行动有意义。','能提出目标、协调资源，愿意让想法变成结果。','把外界认可当成决定自己价值的唯一标准。','Crusaders of the Lost Mark','采用改变后的角色阶段：摆脱母亲压力，帮助同学取得支持。',[.8,.6,.55,.8],['events','secretary','sustainability','social']],
['mayor-mare','市长','Mayor Mare','陆马','小马谷 · 市政厅','卷轴','组织与共同体','让一群伙伴的事情有着落','你可能重视明确安排，让大家知道如何一起参与。组织不只是分配事情，还包括把信息说清楚，让不同伙伴能接上同一张地图。','能记住流程与交接，让共同任务不悬着。','安排越多，越难听见临时出现的新需要。','Winter Wrap Up / The Last Roundup','负责镇务、庆典与公共协调；四维未知较多，不从职业直接推断人格。',[.5,.5,.5,.75],['secretary','events','social','sustainability']],
['dj-pon3','DJ-PON3','Vinyl Scratch','独角兽','小马谷 · 音乐工作室','黑色双音符','节奏与协作','用自己的节奏，与伙伴合奏','你可能喜欢用作品或实际配合表达想法。就像 DJ-PON3 与奥塔维亚把不同风格的音乐放在一起，合作不必让每个人变成同一种声音。','能专注打磨自己的部分，也给不同的创作方式留出位置。','太沉浸于自己的节奏，忘了及时确认伙伴的安排。','Suited for Success / Slice of Life','在时装展示中打碟；在《Slice of Life》中与奥塔维亚合作，为婚礼准备音乐。动画没有足够材料确定她的完整人格类型。',[.5,.5,.5,.5],['sound','digitalEditor','animation','events']],
['sugar-belle','舒歌贝','Sugar Belle','独角兽','小马谷 · 甜苹果园','纸杯蛋糕与樱桃','创作与自主','温柔地说清自己想要的生活','你愿意关心伙伴，也希望自己的愿望被认真对待。关系不需要靠不断猜测维持；说清想法，可以让温柔与自主同时留下。','能用实际作品与坦诚沟通表达心意。','把不确定留在心里，让双方用猜测填补。','The Cutie Map / The Break Up Break Down','烘焙师，后来与麦托什建立关系。',[.4,.75,.2,.65],['pastry','fashion','events','gardening']],
['filthy-rich','富豪','Filthy Rich','陆马','小马谷 · 商店','三袋钱币','协商与资源','让一个想法接上现实资源','你可能重视实际条件，也愿意通过商量把合作往前推。资源不是价值本身，怎样使用它、如何对待伙伴才让事情有方向。','能看见成本、交付和协商条件，让计划落地。','只顾可衡量的结果，忽略合作里的未说出口的需要。','Family Appreciation Day / Where the Apple Lies','仅依据动画中的商业与家庭行为；不混入漫画中的不同形象。',[.6,.85,.65,.8],['events','secretary','sustainability','agriculture']],
['garble','盖博','Garble','龙','龙之地','无可爱标志','表达与勇气','给藏起来的热爱一个登场机会','你可能有不符合别人期待的兴趣，曾经担心展示出来会被笑。勇气有时不是更强硬，而是允许真实的爱好被看见。','有鲜明表达欲，也能把感受变成独特的创作。','为了合群，用不喜欢的姿态掩盖真实兴趣。','Sweet and Smoky','采用展示节奏诗后的成长阶段；不把早期欺凌解释为人格优点。',[.55,.35,.35,.25],['animation','magician','events','coach']],
['bon-bon','糖糖','Bon Bon','陆马','小马谷','三颗糖果','信任与坦诚','把重要的信任守在日常里','像糖糖向天琴心弦坦白自己的旧身份一样，你可能珍惜稳定的关系，也希望重要的伙伴了解真实的自己。保留私人空间与诚实沟通，需要一起协商。','愿意认真维护承诺，照顾共同生活中的具体事情。','为了避免冲突，推迟说出关系中重要的信息。','Slice of Life','与天琴心弦共同准备婚礼，透露自己曾是特工；侧写只采用动画行为，不把保密等同于内向。',[.35,.7,.4,.7],['social','secretary','events','teacher']],
['lyra','天琴心弦','Lyra Heartstrings','独角兽','小马谷','金色竖琴','陪伴与表达','愿意了解伙伴真实故事的人','在糖糖分享过去时，天琴心弦既有自己的感受，也愿意继续交流。你可能喜欢一起参与生活，同时希望亲近的伙伴把你当作可以信任的人。','会表达自己在意的事，也愿意继续了解伙伴的处境。','太期待对方自动理解自己，忘了明确说出需要。','Slice of Life / The Big Mac Question','与糖糖参与镇上的生活；不将同人中的人类研究设定当作动画事实。',[.65,.4,.3,.4],['events','social','animation','teacher']],
["pear-butter", "梨子酱", "Pear Butter", "陆马", "小马谷 · 苹果与梨家族", "果酱罐", "忠于心意", "温柔也能作出坚定的选择", "你可能愿意认真维系关系，也希望重要选择由自己决定。像梨子酱在家族分歧中坚持心意，体贴与立场可以一起存在。", "愿意倾听，并把珍惜化成具体的陪伴。", "为了避免争执，把重要的需要一再推迟。", "The Perfect Pear", "梨子酱与辉麦面对家族分歧，选择彼此；这是故事主题，不是已验证的人格类型。", [0.35, 0.65, 0.1, 0.6], ["pastry", "gardening", "social", "events"]],
["bright-mac", "辉麦", "Bright Mac", "陆马", "小马谷 · 甜苹果园", "绿色切面苹果与金色星形", "承诺与坦诚", "把真心做成能看见的行动", "你可能更相信行动里的承诺：记住重要的日子，诚实说明自己的选择，为关系承担现实的步骤。", "愿意兑现约定，也能承认自己的责任。", "为了保护关系独自承受太多，忽略寻求支持。", "The Perfect Pear", "辉麦在家族竞争中承认损坏梨家水塔的责任，并与梨子酱坚定选择共同生活。", [0.55, 0.8, 0.25, 0.65], ["gardening", "agriculture", "sustainability", "secretary"]],
["nightmare-moon", "梦魇之月", "Nightmare Moon", "天角兽 · 月亮公主特殊形态", "月亮 · 小马国", "月牙与黑色斑纹", "被看见与边界", "希望自己的付出也被看见", "你可能很重视独立空间，也希望自己的贡献得到回应。你在意付出是否被看见，也希望有人认真听见自己的需要。", "能长时间专注，认真对待自己珍惜的主题。", "把无人回应理解为无人重视，越想被看见越不愿开口。", "Friendship Is Magic, parts 1–2", "月亮公主因夜晚不被欣赏而化为梦魇之月。", [0.1, 0.2, 0.45, 0.8], ["animation", "library", "social", "events"]],
["daybreaker", "破灭之阳", "Daybreaker", "天角兽 · 梦境中的特殊形态", "梦境 · 非现实独立角色", "太阳", "力量与自我约束", "有推进的力量，也给伙伴留空间", "你可能喜欢清楚的方向和果断的推进。行动前听听伙伴的想法，能让你的决断得到更多支持。", "敢于提出方向，愿意让事情发生变化。", "急着证明自己，忽略伙伴选择和现实反馈。", "A Royal Problem", "破灭之阳出现在星光熠熠的梦境中，并非宇宙公主在现实中转化的成年新角色。", [0.85, 0.3, 0.9, 0.75], ["events", "security", "sustainability", "animation"]],
["chrysalis", "虫茧女王", "Queen Chrysalis", "幻形族", "幻形族巢穴 · 四处活动", "无可爱标志", "策略与信任边界", "能看见局势，也学习真实合作", "你可能习惯观察各方诉求、提前考虑行动的后果。合作时，清楚表达自己的打算，也留意伙伴是否愿意参与。", "能比较不同方案，留意目标与资源的关系。", "只把他人当成实现目标的条件，关系就失去信任。", "A Canterlot Wedding / To Where and Back Again / Frenemies", "虫茧女王采用伪装和组织行动夺取力量，拒绝分享。", [0.6, 0.25, 0.9, 0.9], ["events", "sustainability", "secretary", "animation"]],
["king-sombra", "黑水晶", "King Sombra", "独角兽", "水晶帝国", "无明确展示的可爱标志", "目标与责任边界", "看见长远目标，也核对实现的方法", "你可能重视系统和长期结果，喜欢先明确关键条件。你习惯梳理关键条件，寻找能一步步推进的办法。", "能保留独立判断，将复杂条件组织起来。", "过度追求单一结果，忽略方法对他人的影响。", "The Crystal Empire / The Beginning of the End", "黑水晶以恐惧控制水晶帝国。", [0.1, 0.15, 0.95, 0.95], ["twins", "library", "sustainability", "security"]],
["cozy-glow", "可西光辉", "Cozy Glow", "飞马", "友谊学校 · 故事中的反派阵营", "棋子战车", "连接与诚实", "让连接有来有回，而不是变成筹码", "你可能善于发起交流、看见团队中的关系。你重视交流中的回应，也希望合作能够长久。", "愿意主动沟通，关注合作网络如何运转。", "把获得认可放在真实表达之前，关系可能只剩表演。", "School Raze / Frenemies / The Ending of the End", "可西光辉将友谊视为获得权力的工具，最终成为反派。", [0.9, 0.2, 0.8, 0.85], ["events", "secretary", "sustainability", "animation"]],
["sunset-shimmer", "余晖烁烁", "Sunset Shimmer", "独角兽", "小马国 · 镜面连接的人类世界", "红黄双色太阳", "理解与重新开始", "做错过，也可以认真重新选择", "你可能愿意理解他人的处境，也希望用行动证明自己的改变。像余晖烁烁修复信任，成长不只是一句道歉，还包括持续不同的选择。", "愿意直面误会，在反馈中调整自己的判断。", "害怕再次犯错，把过去的标签带进每一次相处。", "Equestria Girls / Rainbow Rocks / Forgotten Friendship", "余晖烁烁从追求地位走向友谊与共情；展示小马形态，侧写采用其成长后的故事。", [0.7, 0.25, 0.35, 0.55], ["social", "teacher", "animation", "events"]],
["mistmane", "雾鬃", "Mistmane", "独角兽 · 远古六栋梁", "古代小马国 · 水晶帝国花园", "花朵", "美与慷慨", "把美好的空间留给大家", "你可能重视环境与人的感受，希望美好的事物能够被分享。像雾鬃的故事，审美不只属于外表，也可以是让周围的人更舒适。", "愿意照顾共同环境，留意作品与人的联系。", "把付出视为唯一价值，忘了自己的精力也需要照顾。", "Campfire Tales / Shadow Play / Uncommon Bond", "雾鬃在传说中牺牲自己的美貌恢复村庄，也参与水晶帝国花园工作。", [0.2, 0.35, 0.1, 0.75], ["gardening", "fashion", "sustainability", "social"]],
["flurry-heart", "风雪之心", "Flurry Heart", "天角兽", "水晶帝国", "幼年动画形象尚无可爱标志", "成长与探索", "把未来留给尚未发生的可能", "风雪之心在动画中主要是幼年角色，尚不足以建立可靠的成人性格侧写。本结果借用成长与探索主题，不把幼年魔法失控解读为人格。", "可以保留好奇，逐步在真实体验中发现偏好。", "急着给未来一个固定标签，忘了成长会带来变化。", "The Crystalling / A Flurry of Emotions", "音韵公主与闪耀盔甲的女儿；成熟图片属于同人想象，动画未给出成年人格。", [0.5, 0.5, 0.5, 0.5], ["teacher", "social", "animation", "events"]]
];
const names={'diamond-tiara':'珠玉冠冠',luna:'月亮公主',spitfire:'喷火','big-mac':'麦托什',trixie:'特丽克西'};
window.CHARACTER_NAMES=names;
window.INACTIVE_CHARACTERS=["mistmane","nightmare-moon","daybreaker","dj-pon3","garble","cheerilee","spitfire","sandbar","gallus","silverstream","yona","ocellus","smolder","thorax","ember","mayor-mare","flurry-heart"];
window.CHARACTER_COLORS={'sunburst':['#b87936','#faf0df'],'daring-do':['#8a8450','#f4f3e5'],cheerilee:['#ba6192','#f7edf3'],celestia:['#6eaeae','#edf8f5'],zecora:['#707374','#f0f0ee'],'cheese-sandwich':['#c28a39','#fbf2e0'],'apple-bloom':['#c74d77','#f9ebef'],'sweetie-belle':['#9e6dad','#f4edf7'],scootaloo:['#c57b39','#fff1e3'],sandbar:['#4d9d86','#eaf5ef'],gallus:['#3c91bb','#edf5fa'],silverstream:['#9b7db7','#f4edf9'],yona:['#8b7563','#f4eee7'],ocellus:['#5d9c9d','#edf7f5'],smolder:['#bd7b37','#fff1df'],ember:['#447dac','#eaf3fa'],thorax:['#73953e','#f0f6e6'],gilda:['#8c744f','#f5eee2'],'granny-smith':['#7c9b49','#f3f7e7'],'diamond-tiara':['#ab7ba9','#f7edf6'],'mayor-mare':['#8b826a','#f5f1e7'],'dj-pon3':['#258ea8','#edf7fa'],'sugar-belle':['#a2629b','#f8edf6'],'filthy-rich':['#967354','#f5ede5'],garble:['#ac5a44','#f9eee5']};
Object.assign(window.CHARACTER_COLORS,{"pear-butter": ["#c78b40", "#fff1df"], "bright-mac": ["#9e723d", "#f6f2db"], "nightmare-moon": ["#445596", "#eef0f9"], "daybreaker": ["#d77b24", "#fff2de"], "chrysalis": ["#3d8882", "#edf6f3"], "king-sombra": ["#8b4455", "#f6edf0"], "cozy-glow": ["#b9708d", "#fbeef4"], "sunset-shimmer": ["#cc7140", "#fff0e4"], "mistmane": ["#639e98", "#edf6f4"], "flurry-heart": ["#b878ab", "#f7edf6"]});
window.CHARACTER_SLUGS=['twilight','applejack','rainbow-dash','pinkie-pie','fluttershy','rarity','starlight','spike','luna','cadance','discord','spitfire','shining-armor','big-mac','maud','trixie',...rows.map(r=>r[0])];
window.EXTRA_CHARACTERS=rows.map(([slug,name,en,species,home,markText,virtue,archetype,description,strength,edge,episodes,story,profile,jobs])=>({slug,name,en,mark:slug,icon:'✦',archetype,tagline:archetype+'。',description,strength,edge,tip:'留意一次真实的相处，看看怎样同时照顾目标与伙伴的需要。',share:'我的小马谷伙伴是'+name+'：'+archetype+'。',profile:[3,3,3,3,3,3],preferenceProfile:profile,meta:{species,home,origin:home.split(' · ')[0],markText,virtue},episodes,story,jobs}));
window.CHARACTER_STORIES={
twilight:['Lesson Zero / Amending Fences','从独自钻研到学习合作，紫悦逐渐理解准备之外还需要倾听。'],applejack:['Applebuck Season','坚持兑现承诺，也学习接受帮助，可靠不需要等于独自承担。'],'rainbow-dash':['Wonderbolts Academy / Read It and Weep','喜欢挑战，也能享受阅读；表现大胆不代表只关心胜负。'],'pinkie-pie':['Party of One / Pinkie Pride','主动创造快乐，也会面对自己的失落；热闹与脆弱可以同时存在。'],fluttershy:['Dragonshy / Flutter Brutter','温和地照顾伙伴，也学习明确边界；安静不妨碍坚定。'],rarity:['Rarity Takes Manehattan / Suited for Success','重视审美与慷慨，同时面对过度迁就和职业要求。'],starlight:['Every Little Thing She Does / To Where and Back Again','从试图替别人控制结果，到尊重伙伴并共同承担选择。'],spike:['Dragon Quest / The Times They Are a Changeling','愿意照料日常，也在不同族群期待之间选择自己重视的友谊。'],luna:['Luna Eclipsed / Do Princesses Dream of Magic Sheep?','面对内疚并学习接纳自己，守护伙伴也需要接受伙伴支持。'],cadance:['A Canterlot Wedding / Games Ponies Play','珍惜关系，也承担守护共同体的责任；关心与行动并行。'],discord:['Keep Calm and Flutter On / Discordant Harmony','不必放弃混沌个性，也能学会珍惜不同于自己的朋友。'],spitfire:['Wonderbolts Academy / Rarity Investigates!','重视训练与团队标准，同时需要事实与信任支撑判断。'],'shining-armor':['A Canterlot Wedding / Sparkle’s Seven','守护职责与亲近家人的需要并存，责任不是全部身份。'],'big-mac':['Brotherhooves Social / The Big Mac Question','安静也有被需要、被看见的愿望，会用行动表达重要心意。'],maud:['Maud Pie / Rock Solid Friendship','专注岩石，表达简短，但会实际帮助亲人，也建立新友谊。'],trixie:['No Second Prances / All Bottled Up','珍惜舞台与自主，也逐渐学习友谊里的互相体谅。']};
window.EXTRA_CHARACTERS.forEach(p=>{window.PREFERENCE_PROFILES[p.slug]=p.preferenceProfile;window.CHARACTER_STORIES[p.slug]=[p.episodes,p.story];});
window.EXTRA_CHARACTERS.find(p=>p.slug==='flurry-heart').matchEligible=false;
})();

// 浏览器与服务器共用计分。展示区间不是统计置信区间。
(function(root){
function rankProfiles(slugs,profiles,scores){
 return slugs.map((slug,i)=>({i,slug,dist:scores.reduce((sum,v,j)=>sum+(v-profiles[slug][j])**2,0)})).filter(f=>!["mistmane", "nightmare-moon", "daybreaker", "dj-pon3", "garble", "cheerilee", "spitfire", "sandbar", "gallus", "silverstream", "yona", "ocellus", "smolder", "thorax", "ember", "flurry-heart", "mayor-mare"].includes(f.slug)).sort((a,b)=>a.dist-b.dist||a.i-b.i);
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
 return {model:'four-preferences-v2',matchingVersion:'20261030-roster36',questionVersion:questions[0][2].id?.split('-').slice(0,-1).join('-'),sensitivity:{primaryChanges,items:questions.length},scores,totals,itemsPerAxis:12,primary:fits[0].i,secondary:fits[1].i,type:scores.map((v,i)=>Math.abs(v-.5)<.1?'X':axes[i][v>.5?0:1]).join(''),closeAxes:axes.filter((_,i)=>Math.abs(scores[i]-.5)<.1),evidence,answers:answers.slice(),alternatives:fits.slice(0,3).map(f=>f.i),matchClose:primaryChanges>0};
}
score.rankProfiles=rankProfiles;
if(typeof module==='object'&&module.exports)module.exports=score;else{root.PONY_SCORE=score;root.PONY_RANK_PROFILES=rankProfiles;}
})(typeof window==='object'?window:globalThis);


// 大陆简中网络译名：EquestriaCN／潮汐字幕组、小马中文维基。
// 季内集数统一采用原播出顺序，避免混用国语平台的制作顺序。
(() => {
const rows = [
 ['Lesson Zero',2,3,'学无所成'],
 ['Amending Fences',5,12,'打破心墙'],
 ['Applebuck Season',1,4,'踢苹时节'],
 ['The Perfect Pear',7,13,'并蒂连枝'],
 ['Wonderbolts Academy',3,7,'天马学院'],
 ['Read It and Weep',2,16,'欲罢不能'],
 ['Pinkie Pride',4,12,'派对争锋'],
 ['Party of One',1,25,'独马聚会'],
 ['Flutter Brutter',6,11,'严师益姐'],
 ['Dragonshy',1,7,'驯龙高蹄'],
 ['Rarity Takes Manehattan',4,8,'满城瑞气'],
 ['Suited for Success',1,14,'节日盛装'],
 ['The Times They Are A Changeling',6,16,'忘形之交'],
 ['Dragon Quest',2,21,'巨龙之谜'],
 ['Every Little Thing She Does',6,21,'不得要领'],
 ['To Where and Back Again - Part 2',6,26,'阴影再临（下）'],
 ['Luna Eclipsed',2,4,'噩梦之夜'],
 ['Do Princesses Dream of Magic Sheep?',5,13,'梦翼杀手'],
 ['A Canterlot Wedding - Part 2',2,26,'皇城婚礼（下）'],
 ['Games Ponies Play',3,12,'阴差阳错'],
 ['Discordant Harmony',7,12,'东施效颦'],
 ['Keep Calm and Flutter On',3,10,'以柔克刚'],
 ["Sparkle's Seven",9,4,'暮影特攻'],
 ['Brotherhooves Social',5,17,'兄妹同心'],
 ['The Big Mac Question',9,23,'终身大事'],
 ['Maud Pie (episode)',4,18,'石破天惊'],
 ['Rock Solid Friendship',7,4,'情如磐石'],
 ['No Second Prances',6,6,'恶名难洗'],
 ['All Bottled Up',7,2,'瓶息怒火'],
 ['The Crystalling - Part 2',6,2,'水晶洗礼（下）'],
 ['Uncommon Bond',7,24,'志趣难投'],
 ['Celestial Advice',7,1,'良师忠告'],
 ['A Royal Problem',7,10,'姐妹阋墙'],
 ['Bridle Gossip',1,9,'流言蜚语'],
 ['A Health of Information',7,20,'欲速不达'],
 ['Daring Doubt',9,21,'多面英雄'],
 ["Daring Don't",4,4,'共度难关'],
 ['The Last Laugh',9,14,'笑容不再'],
 ['Crusaders of the Lost Mark',5,18,'可爱远征'],
 ['Call of the Cutie',1,12,'可爱召唤'],
 ['For Whom the Sweetie Belle Toils',4,19,'以怨报德'],
 ['Forever Filly',7,6,'时过情存'],
 ['Flight to the Finish',4,5,'飞向终点'],
 ['Sleepless in Ponyville',3,6,'惊夜无眠'],
 ['The Lost Treasure of Griffonstone',5,8,'狮鹫秘宝'],
 ['Griffon the Brush Off',1,5,'目中无马'],
 ['Family Appreciation Day',2,12,'家族荣誉'],
 ['Grannies Gone Wild',8,5,'愈老弥秀'],
 ['Baby Cakes',2,13,'保姆萍琪'],
 ['Hard to Say Anything',7,8,'有口难开'],
 ['Where the Apple Lies',6,23,'一错再错'],
 ['Slice of Life',5,9,'不凡日常'],
 ['Campfire Tales',7,16,'营火传奇'],
 ['Shadow Play - Part 2',7,26,'光影对决（下）'],
 ['Friendship is Magic, part 2',1,2,'友谊是魔法（下）'],
 ['The Beginning of the End - Part 2',9,2,'终末之始（下）'],
 ['School Raze - Part 2',8,26,'废校天劫（下）'],
 ['School Raze - Part 1',8,25,'废校天劫（上）'],
 ['My Little Pony Equestria Girls: Friendship Games',null,null,'小马国女孩：友谊大赛']
];
const key = title => title.toLowerCase().replace(/\s*\(episode\)/g,'').trim();
const catalog = new Map(rows.map(([original,season,episode,title]) => [key(original),{season,episode,title}]));
window.PONY_EPISODES = {
 get: title => catalog.get(key(title)),
 label(title) {
  const item = catalog.get(key(title));
  return item ? (item.season ? `第${item.season}季第${item.episode}集《${item.title}》` : `电影《${item.title}》`) : '相关剧情';
 },
 localize(text) { return text.replace(/《([^》]+)》/g,(match,title) => catalog.has(key(title)) ? this.label(title) : match); }
};
})();

// 剧情事实与编辑推断分开记录；资料入口为社区维护的剧情转录/整理，不是官方MBTI定型。
(() => {
const rows=[
['twilight','Lesson Zero','反复核对每周报告的期限与安排。','Amending Fences','后来主动修复旧友谊。','J方向有任务安排线索；不能把焦虑当作J，或把读书直接当作N/T。','I、N、F方向仍属于编辑解释，不能从单集锁定四字母。'],
['applejack','Applebuck Season','承诺独自完成收获，过劳后接受伙伴帮助。','The Perfect Pear','关心家族经历和父母的选择。','兑现承诺与实际劳动可用于讨论工作方式；诚实不是T的同义词。','E/I缺少恢复精力场景；职业和家族传统不能直接决定S/J。'],
['rainbow-dash','Wonderbolts Academy','为了伙伴安全反对鲁莽训练，愿意放弃梦寐以求的机会。','Read It and Weep','受伤休息时发现自己喜欢阅读。','可讨论行动与反馈；本集也提供重视伙伴与原则的反向材料。','大胆、运动和竞争不等于E、S或T；T/F尤其不能只按强硬外表判定。'],
['pinkie-pie','Pinkie Pride','发现竞争让云宝不开心后停止比拼，随后合作办派对。','Party of One','误解伙伴的行动后经历失落。','互动、创造活动和关注参与者体验是可观察线索。','办派对既有即兴也有计划，J/P证据混合；情绪波动不用于T/F计分。'],
['fluttershy','Flutter Brutter','面对弟弟依赖他人，明确表达界限并鼓励他独立。','Dragonshy','在伙伴受到威胁时敢于面对龙。','关照处境与明确边界可以并存。','害羞和害怕不等于I；动物照护不自动说明S或F，J/P缺少充分材料。'],
['rarity','Rarity Takes Manehattan','受到不公平竞争影响，后来重新重视朋友的帮助与慷慨。','Suited for Success','在客户需求与自己的设计之间反复调整。','审美构想、工作交付和重视关系均有剧情线索。','不能以漂亮、时尚判N/F；职业服务要求也不直接证明E。'],
['spike','The Times They Are A Changeling','重新选择信任并公开支持索瑞斯，反对按族群先入为主。','Dragon Quest','探索龙的归属后选择自己珍惜的伙伴。','价值判断与友谊选择可讨论；行为也包括公开表达。','助手职责不能自动判J/S；公开表达不代表长期E偏好。'],
['starlight','Every Little Thing She Does','用魔法控制伙伴来完成课程，之后承认错误。','To Where and Back Again - Part 2','与不同伙伴合作，接受每个人独有的帮助。','魔法组合与重新选择合作有故事证据。','控制、支配不是T/J定义；改革前后的行为要分阶段，不能给永久类型。'],
['luna','Luna Eclipsed','学习小马谷的新社交习惯，调整与居民交流的方式。','Do Princesses Dream of Magic Sheep?','因内疚制造自我惩罚的梦境，最后接受伙伴支持。','角色成长涉及理解与自我接纳。','内疚、孤独和过时礼仪不等于I/F/J；睡眠职责不是人格测量。'],
['cadance','A Canterlot Wedding - Part 2','逃离囚禁，与闪耀盔甲共同抵御入侵。','Games Ponies Play','参与接待与合作事务。','关系联结与共同守护有事实依据。','爱的魔法是一项设定，不能当作F量表；其他方向材料不充分。'],
['discord','Discordant Harmony','为迎合柔柔把家变得正常，后来接受彼此的不同。','Keep Calm and Flutter On','在关系建立中学习考虑朋友。','打破常规和接纳差异可作故事联想。','混沌魔法不能直接证明N/P；反派阶段的不守规则不能当作P。'],
['shining-armor','A Canterlot Wedding - Part 2','承担防卫职责，与音韵公主合作。',"Sparkle's Seven",'与妹妹在共同挑战中展现兄妹互动。','组织和守护行动可作为工作场景证据。','军职强制要求不等于J/T，防卫能力不代表人格。'],
['big-mac','Brotherhooves Social','为了陪苹果丽丽参加活动改变平时的表达方式。','The Big Mac Question','筹备求婚并学习接受计划不完美。','简短表达与实际关怀有线索，也存在主动表演的反例。','少说话不能独自证明I；务农与稳定习惯不直接决定S/J。'],
['maud','Maud Pie (episode)','研究岩石，行动上保护碧琪，并保留妹妹送的礼物。','Rock Solid Friendship','在选择居所时同时考虑岩石和新友谊。','关注实际材料和独立研究可作为有限的S/I线索。','平淡语气不等于T；她重视亲人和朋友，不能把关爱忽略掉。'],
['trixie','No Second Prances','珍惜星光的友谊，冲突后承认自己伤害了对方。','All Bottled Up','在相处中面对双方需求与误解。','舞台表达与希望被认可有剧情依据。','表演职业不等于E；自夸、鲁莽与情绪不能直接判T/P。'],
['sunburst','The Crystalling - Part 2','承认自己施法能力有限，利用不同咒语知识提出组合办法。','Uncommon Bond','与不同朋友寻找共同兴趣。','能用已有知识连接问题；研究原理可支持讨论N方向。','I不能只由社交不安判断；T/F与J/P证据不足，不强行定为INTP。'],
['celestia','Celestial Advice','讲述自己曾担心紫悦离开，也学习信任学生成长。','A Royal Problem','与月亮公主交换职责，理解彼此的负担。','长期引导与理解不同处境有剧情依据。','王室职责不自动证明J；领导身份不能决定E/N/F。'],
['zecora','Bridle Gossip','通过草药知识解释并帮助解决误会。','A Health of Information','患病后需要他人的知识与支持。','经验求证与专业知识有依据。','独居和韵文不等于I/N；草药职业不能直接决定S/T。'],
['daring-do','Daring Doubt','面对他人对冒险经历的不同解释。',"Daring Don't",'在冒险中实际应对危险并接受帮助。','行动验证与现场应对有故事依据。','探险角色的任务要求可能影响行为；独立和大胆不能直接当作I/T。'],
['cheese-sandwich','The Last Laugh','离开直接观众互动后失去快乐，重新找回亲自让伙伴笑的体验。','Pinkie Pride','与碧琪从竞争走向合作。','直接互动带来的满足是E方向较有用的情境线索。','欢笑职业不等于F；派对创意与即兴仍需跨情境核对。'],
['apple-bloom','Crusaders of the Lost Mark','帮助珠玉冠冠，并与朋友发现共同的天赋方向。','Call of the Cutie','尝试各种办法寻找可爱标志。','实际尝试与共同探索有证据。','急于找到身份是成长情境，不可直接判P；不能把能力发展当人格分数。'],
['sweetie-belle','For Whom the Sweetie Belle Toils','从嫉妒姐姐到理解其投入，并尝试弥补伤害。','Forever Filly','表达自己已经成长、兴趣发生变化。','创作表达和换位理解有故事依据。','歌唱天赋不等于N/F；角色年龄变化不能锁定四字母。'],
['scootaloo','Flight to the Finish','克服关于飞行的比较压力，与伙伴完成展示。','Sleepless in Ponyville','承认害怕，并获得云宝的支持。','实际练习、伙伴鼓励与自我表达有证据。','飞行能力和胆量不用于计分；偶像崇拜不能决定E/S/T。'],
['gilda','The Lost Treasure of Griffonstone','放弃取回宝物，转而救助遇险的朋友。','Griffon the Brush Off','早期与伙伴的冲突提供成长前的对照。','采用修复友谊后的阶段，保留独立与实际帮助的联想。','刻薄不是T；族群文化和防备不能直接证明I。'],
['granny-smith','Family Appreciation Day','讲述家族与小马谷建镇的经历，解释苹果园习俗。','Grannies Gone Wild','与朋友外出体验新活动。','经验传递有事实依据，也有寻求新体验的反例。','年龄与传统不等于S/J；讲故事不自动证明E。'],
['diamond-tiara','Crusaders of the Lost Mark','反对母亲施加的要求，使用影响力为同学争取支持。','','','只采用改变后的阶段，区分资源协调与欺负他人。','独立故事有限；影响力不是E/T/J量表，不能拿霸凌作T证据。'],
['dj-pon3','Baby Cakes','承担育儿与店铺事务，把照护任务托付给碧琪。','The Perfect Pear','回忆梨子酱帮助自己学习烘焙。','日常照护与实际帮助有剧情依据。','母亲身份不等于F/J，经营店铺不自动证明E/S；材料较少。'],
['sugar-belle','Hard to Say Anything','不喜欢被当作追求比赛的对象，重视实际改善工作空间的心意。','The Big Mac Question','与麦托什沟通，不要求关系或计划完美。','重视实际支持与关系沟通有依据。','烘焙职业不是S/J证据；温柔不自动等于F或I。'],
['filthy-rich','Where the Apple Lies','作为买方讨论苹果园交易与承诺，受不实信息影响。','Crusaders of the Lost Mark','其资源被珠玉冠冠用于支持学校。','商业事务与资源协调可用于工作联想。','财富和职位不是E/T/J；私人恢复精力与信息偏好材料有限。'],
['bon-bon','Slice of Life','向天琴心弦坦白自己另一个身份，关系经历误会与解释。','','','保护秘密与珍惜朋友两方面都有故事依据。','保密是任务需要，不等于I/J；一集主线不足以确定四维。'],
['lyra','Slice of Life','得知糖糖隐瞒身份后表达不满，随后维持伙伴关系。','','','公开表达和重视信任是剧情线索。','兴趣、乐器与背景动作不用于判N/P；缺少稳定跨情境材料。'],
['pear-butter','The Perfect Pear','面对家族冲突，选择与辉麦共同生活，并帮助朋友学习烘焙。','','','个人价值与关系选择有清楚的剧情主题。','爱情故事不能直接决定F；I/E、S/N、J/P材料有限。'],
['bright-mac','The Perfect Pear','主动承担损坏水塔的责任，并用持续修复表达诚意。','','','责任与实际行动有依据。','诚实不等于T，修理与务农不等于S；主要来自单集回忆。'],
['mistmane','Campfire Tales','付出自己的美貌，恢复家园与朋友的生活。','Shadow Play - Part 2','与六栋梁共同参与阻止威胁。','兼顾朋友与共同环境是故事主题。','牺牲是道德选择，不足以判定F；传说叙述不能提供四维稳定数据。'],
['nightmare-moon','Friendship is Magic, part 2','阻挠主角团，试图维持永夜，最后恢复为月亮公主。','','','仅作为渴望被看见的特殊形态联想。','不是独立稳定人格；嫉妒、邪恶、魔法效果均不用于MBTI判断。'],
['daybreaker','A Royal Problem','出现在星光的噩梦中，代表对公主冲突升级的恐惧。','','','可作为力量与控制的故事意象。','不是宇宙公主现实行为，也没有独立生活史；四维侧写证据极少。'],
['chrysalis','A Canterlot Wedding - Part 2','通过伪装组织入侵，最后计划被阻止。','To Where and Back Again - Part 2','拒绝星光提供的改变机会。','组织策略可讨论行为风格，但不把恶意归给用户。','操纵不是T，王权不是J；反派剧情任务不能证明完整类型。'],
['king-sombra','The Beginning of the End - Part 2','坚持独自夺回帝国，继而扩展征服计划。','','','独自行事与目标推进只提供局部行为线索。','征服和恐惧控制不是T/J指标；非冲突生活场景很少。'],
['cozy-glow','School Raze - Part 2','利用校内关系执行自己的计划，把友谊视作获取权力的手段。','School Raze - Part 1','向伙伴展示有帮助的一面，掩盖目的。','跨场景核对表面社交与真实动机，不能只按笑容判断。','会操纵不等于E/T/J；善恶与偏好分开，不能将角色伤害行为投射给用户。'],
['sunset-shimmer','My Little Pony Equestria Girls: Friendship Games','研究人类世界的魔法，并在冲突后尝试理解另一位紫悦。','','','采用改变后的余晖，记录推理与理解双方的材料。','跨世界和成长阶段影响行为；不将同理心魔法直接当作F量表。']
];
function source(title){return {originalTitle:title,title:window.PONY_EPISODES.label(title),episode:window.PONY_EPISODES.get(title),url:'https://mlp.fandom.com/wiki/Transcripts/'+encodeURIComponent(title.replaceAll(' ','_')),kind:'社区维护的动画转录入口'};}
window.CHARACTER_EVIDENCE=Object.fromEntries(rows.map(([slug,ep,fact,ep2,fact2,interpretation,limits])=>[slug,{facts:[{source:source(ep),text:fact},...(ep2?[{source:source(ep2),text:fact2}]:[])],interpretation,limits,status:'编辑证据整理 · 尚未多人独立编码',special:['daybreaker','nightmare-moon'].includes(slug),limited:['daybreaker','nightmare-moon','lyra','bon-bon','pear-butter','bright-mac','diamond-tiara','filthy-rich','dj-pon3','king-sombra'].includes(slug)}]));
})();

window.CHARACTER_EVIDENCE['dj-pon3']={facts:[{source:{originalTitle:'Slice of Life',title:'Slice of Life',url:'https://mlp.fandom.com/wiki/Transcripts/Slice_of_Life',kind:'动画剧情转录'},text:'与奥塔维亚共同准备婚礼音乐，电子节拍与大提琴形成合作。'},{source:{originalTitle:'Suited for Success',title:'Suited for Success',url:'https://mlp.fandom.com/wiki/Transcripts/Suited_for_Success',kind:'动画剧情转录'},text:'在珍奇的服装展示活动中担任打碟工作。'}],interpretation:'从音乐创作与合作行为整理角色主题；不以少台词或戴耳机判定内向。',limits:'日常决策与安排方面材料有限，四维采用中点，不宣称官方类型。',status:'剧情资料整理',limited:true};

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

window.PONY_NARRATIVE_MATCH_V2=window.PONY_NARRATIVE_MATCH;

// Experimental content recommendation, separate from the production MBTI scorer.
// Similarity is not a calibrated probability of identity or psychological type.
(function(root){
const features={knowledge:'查阅知识',analysis:'核对原理',experiment:'尝试新办法',coordination:'安排协作',service:'幕后支援',practical:'实际修复',craft:'动手制作',aesthetics:'视觉搭配',stage:'舞台表达',play:'趣味惊喜',athletic:'身体活动',mastery:'练习技巧',exploration:'探索新地方',independence:'自主完成',care:'照料需要',mentoring:'帮助学习',belonging:'参与伙伴活动',loyalty:'维系信任',heritage:'家乡故事',commerce:'经营交换',influence:'说服协调',recognition:'展示成果',discretion:'谨慎保管信息',strategy:'设计策略'};
features.foodcraft='制作点心与饮品';
features.fieldwork='果园与搬运劳动';
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
// Add omitted everyday contributions, not extra points for named characters.
// Each act retains the same setting and four equally legitimate activities.
scenes.forEach((scene,i)=>scene.originalIndex=i);
const additions=[
 {chapter:0,title:'先试做一小份',stem:'准备台上，果派刚出炉，旁边还摆着书、布料和几个小水盆。每处都有人带着做，你想先去哪边？',options:[option('尝尝果派，跟着做一小份，看看还能怎么调味','foodcraft','practical'),option('翻翻桌上的书，弄清那个小机关为什么会转','knowledge','analysis'),option('挑两块布配配颜色，再做个衣服上的小饰品','aesthetics','craft'),option('带新来的伙伴给兔子添水，告诉他怎样轻轻靠近','care','mentoring')]},
 {chapter:1,title:'开场前的一小时',stem:'离开场还有一小时，大家各忙各的。你想去帮哪边？',options:[option('和伙伴把果篮搬到摊位，再把空筐收回来','fieldwork','athletic'),option('修好松动的小木架，把招牌挂稳','practical','craft'),option('去小舞台跟着排练，把那几个动作练熟','stage','mastery'),option('翻翻机关的说明书，看看刚才为什么没转起来','analysis','knowledge')]},
 {chapter:2,title:'选一个摊位一起招呼来宾',stem:'庆典开场了，几处摊位都缺个帮手。每处都有熟悉玩法的人，你先去哪里？',options:[option('点心摊，分果派、倒饮料，给来宾推荐口味','foodcraft','commerce'),option('运动摊，陪人跑一轮，再试试自己能不能更快','athletic','mastery'),option('游戏摊，把刚想到的新玩法拉上大家试一遍','play','experiment'),option('试衣镜旁，帮人挑颜色、换配饰，看看哪套更合适','aesthetics','care')]},
 {chapter:3,title:'忙完以后',stem:'收拾得差不多了，离回家还有一会儿。你更想做哪件事？',options:[option('跟居民做点家常点心，听听这道做法是谁教的','foodcraft','heritage'),option('收好小水盆和垫子，把小动物安顿好再走','care','service'),option('把衣服上松掉的小配饰缝好，下次还能穿','aesthetics','craft'),option('把今天查到的东西写成小纸条，留给下次来帮忙的人','knowledge','coordination')]}
];
additions.forEach((scene,i)=>scenes.splice(i*4+3,0,{...scene,originalIndex:null}));
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
// Shared traits are added to every supported role, not only to the main six.
for(const slug of ['applejack','pinkie-pie','sugar-belle','pear-butter','granny-smith','big-mac'])roleTraits[slug].push('foodcraft');
for(const slug of ['applejack','big-mac','bright-mac','granny-smith','apple-bloom'])roleTraits[slug].push('fieldwork');
roleTraits.applejack.push('athletic','commerce');
const version='narrative-content-20261030-v3',keys=Object.keys(features);
const followupActions={knowledge:'翻查资料，把庆典介绍中缺的一条信息补上',analysis:'对照记录，弄清装置刚才为什么出现故障',experiment:'试一个新材料组合，看看能不能改善装饰效果',coordination:'把收尾任务和伙伴对一遍，约好怎样交接',service:'收好公用物品，让还在忙的伙伴方便取用',practical:'把松动的小架子修稳，下次还能继续用',craft:'做一件小手工，留下今天庆典的纪念',aesthetics:'给照片册搭配封面和颜色，让整体更协调',stage:'在散场前给伙伴表演一小段节目',play:'设计一个不伤人的小惊喜，邀请愿意参与的人试试',athletic:'陪伙伴再走一轮运动路线，活动一下身体',mastery:'把刚学的一个动作再练几遍，看看能否更稳',exploration:'到附近没逛过的小路走走，看看还有什么发现',independence:'独自完成一份自己选的小项目，按自己的想法来',care:'看看有没有需要照料的小动物，帮它们安顿好',mentoring:'陪新伙伴复习今天学到的办法，让他自己试试',belonging:'约伙伴再玩一轮游戏，让想参加的人都能加入',loyalty:'找熟悉的伙伴坐坐，把今天没说完的话说完',heritage:'听居民讲一段小镇旧事，把它写进纪念册',commerce:'整理摊位的交换记录，想想下次怎样经营',influence:'向伙伴讲清自己的提议，争取大家一起采用',recognition:'挑出自己的满意作品，放到成果墙上展示',discretion:'把只给筹备组看的资料整理好，确认交给谁',strategy:'为下次的闯关活动画一条路线，安排几个有趣的转折'};
followupActions.foodcraft='和伙伴做一小份果派或饮品，试好口味再装盒';
followupActions.fieldwork='到果园边收好果篮，和伙伴把收成送回摊位';
function choicesValid(choices){return Array.isArray(choices)&&choices.length===scenes.length&&choices.every(c=>c!==null&&typeof c==='object'&&(c.first===null||Number.isInteger(c.first)&&c.first>=0&&c.first<4)&&(c.second===null||Number.isInteger(c.second)&&c.second>=0&&c.second<4&&c.second!==c.first)&&!(c.first===null&&c.second!==null));}
function rank(w,scores,choices,followups=[],content={}){
 if(!Array.isArray(scores)||scores.length!==4||scores.some(v=>!Number.isFinite(v)||v<0||v>1)||!choicesValid(choices))throw Error('匹配输入无效');
 if(!Array.isArray(followups)||followups.length>(content.maxFollowups??3)||followups.some(f=>!keys.includes(f.left)||!keys.includes(f.right)||f.left===f.right||!['left','right','both','unknown'].includes(f.choice)))throw Error('附加任务输入无效');
 const activeScenes=content.scenes||scenes;
 const active=w.CHARACTER_SLUGS.map((slug,index)=>({slug,index})).filter(r=>!w.INACTIVE_CHARACTERS.includes(r.slug));
 const user=Object.fromEntries(keys.map(k=>[k,0])),observations=[];
 choices.forEach((choice,i)=>{for(const [slot,value]of [['first',1],['second',.5]]){const selected=choice[slot];if(selected===null)continue;const o=activeScenes[i].options[selected];o.traits.forEach(k=>user[k]+=value/o.traits.length);observations.push({scene:i,priority:slot,text:o.text,traits:o.traits});}});
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
 const frequency=t=>result.ranked.filter(r=>r.traits.includes(t)).length;
 const distinctive=(x,y)=>frequency(x)-frequency(y);
 const left=a.traits.filter(t=>!b.traits.includes(t)&&!used.has(t)).sort(distinctive),right=b.traits.filter(t=>!a.traits.includes(t)&&!used.has(t)).sort(distinctive);
 if(!left.length||!right.length)return null;
 // Ask about a previously uncontrasted positive association, never assume that
 // the other character dislikes it. The new answer reranks all 36 candidates.
 return {left:left[0],right:right[0],stem:'庆典已经收尾，还能留一点时间做自己的事。这两件事都有人愿意配合，你更想先做哪件？',leftText:followupActions[left[0]],rightText:followupActions[right[0]],candidateSlugs:[a.slug,b.slug]};
}
root.PONY_NARRATIVE_MATCH={features,scenes,roleTraits,followupActions,rank,nextFollowup,version,choicesValid};
})(typeof window==='object'?window:globalThis);

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
window.PONY_QUIZ_48_V1=window.PONY_QUIZ_48;

// 48 displayed questions: 32 MBTI-framework items + 16 narrative slots.
// The final two slots adapt in place, never increasing the total question count.
(function(w){
const axes=['EI','SN','TF','JP'],picks={EI:[0,1,3,4,6,7,9,10],SN:[0,1,4,5,6,7,9,10],TF:[0,1,3,4,6,7,10,11],JP:[0,1,3,4,7,8,9,10]};
const indexes=[];axes.forEach((axis,j)=>picks[axis].forEach(k=>indexes.push(k*4+j)));indexes.sort((a,b)=>a-b);
const questions=indexes.map(i=>w.QUIZ_QUESTIONS[i]),version='festival-48-single-20261030-v2';
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
 if(result.primary===null||!result.close||answered.length>=2)return null;
 const [a,b]=result.ranked,used=new Set(answered.flatMap(f=>[f.left,f.right]));
 const row=contrasts.find(c=>((c[0]===a.slug&&c[1]===b.slug)||(c[1]===a.slug&&c[0]===b.slug))&&!used.has(c[2])&&!used.has(c[3]));
 if(!row)return w.PONY_NARRATIVE_MATCH.nextFollowup(result,answered);
 const forward=row[0]===a.slug;
 return {left:row[forward?2:3],right:row[forward?3:2],stem:row[4],leftText:row[forward?5:6],rightText:row[forward?6:5],candidateSlugs:[a.slug,b.slug],contrast:'shared-situation'};
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
 const actualText=o=>{if(Number.isInteger(o.scene))return {...o,text:scenes[o.scene].options[choices[o.scene][o.priority]].text};const f=followups[Number(String(o.scene).replace('followup-',''))];return f?.leftText?{...o,text:o.traits[0]===f.left?f.leftText:f.rightText}:o;};
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
window.PONY_QUIZ_48_V2=window.PONY_QUIZ_48;

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
window.PONY_QUIZ_48_V3=window.PONY_QUIZ_48;

// 48 displayed questions: 32 MBTI-framework items + 16 narrative slots.
// The final four slots adapt in place, never increasing the total question count.
(function(w){
const axes=['EI','SN','TF','JP'],picks={EI:[0,1,3,4,6,7,9,10],SN:[0,1,4,5,6,7,9,10],TF:[0,1,3,4,6,7,10,11],JP:[0,1,3,4,7,8,9,10]};
const indexes=[];axes.forEach((axis,j)=>picks[axis].forEach(k=>indexes.push(k*4+j)));indexes.sort((a,b)=>a-b);
const questions=indexes.map(i=>{const q=w.QUIZ_QUESTIONS[i];return [q[0],q[1].map(a=>a.slice()),{...q[2]}];}),version='festival-48-single-20261030-v4';
const reviseCore=(i,stem,left,right)=>{const q=questions[i];questions[i]=[stem,q[1].map(([,score])=>[score===1?left:right,score]),{...q[2],left,right}];};
reviseCore(17,'入口重新布置好了，你要给照片配一句说明。下面两句，你更想用哪句？','蓝色彩带挂在两边，门口还多了几幅画。','入口像个小剧场，和今天的故事主题很搭。');
reviseCore(21,'节目临时取消，大家只能补办一场活动。两种方案都办得成，你更支持哪种？','能多接待一些来宾，把场地和材料充分用起来的方案','人数少一些，但更贴近原来那批来宾期待的方案');
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
// Wording-only refresh: keep every option's feature coding and the 32 core
// items intact. Mischief is an activity preference, never an MBTI axis score.
const playfulCopy=(i,j,text)=>{scenes[i].options[j].text=text;};
scenes[0].stem='筹备会结束了，还有半小时。四张准备台都能参加，你先去哪边？';
playfulCopy(0,3,'和伙伴排个小恶作剧：开场时假装忘词，再一起突然接上');
playfulCopy(3,2,'约台下的伙伴藏个彩蛋，开场时突然一起举起同款小牌子');
scenes[5].stem='广场布置好了，还能加一点自己的花样。你最想弄哪一个？';
playfulCopy(5,0,'做个打开就跳出纸青蛙的小盒子，试试怎样弹得更出其不意');
playfulCopy(5,2,'给闯关卡加一条假线索，推一遍怎样才能识破这个圈套');
playfulCopy(8,2,'拉几位伙伴玩假扮游戏，扮成摊主，看看熟人多久能认出来');
playfulCopy(9,0,'演爱捣乱的反派，设计一段藏宝箱、最后又被识破的戏');
scenes[10].stem='广场还空着一小块地方，也有材料可用。你想拿它做什么？';
playfulCopy(10,0,'做个会冒泡变色的小实验，换几种配比，看看效果差在哪');
playfulCopy(10,3,'提议加一条隐藏支线，说服伙伴一起布置一个猜不到的结局');
playfulCopy(11,2,'拉上几位来宾排个反转桥段，悄悄准备好，逗主持人一下');
playfulCopy(14,3,'约伙伴试个新点子，把普通道具改成突然弹开的玩具');
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
 if(result.primary===null||(!result.close&&result.ranked[0].support.sufficient)||answered.length>=4)return null;
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
 if([best.left,best.right].includes('strategy')&&[best.left,best.right].includes('heritage')){
  const leftText='按闯关顺序藏线索，安排几处需要猜一猜的转折',rightText='按小镇旧事串起地点，把居民的故事写进沿途介绍',forward=best.left==='strategy';
  return {left:best.left,right:best.right,stem:'下次庆典想做一条“小镇寻宝路线”，先做一个版本来试。你更想做哪一版？',leftText:forward?leftText:rightText,rightText:forward?rightText:leftText,candidateSlugs:[a.slug,b.slug],contrast:'shared-route-proposal'};
 }
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
 const result=env.PONY_NARRATIVE_MATCH.rank(env,scores,choices,followups,{scenes,maxFollowups:4});
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
 if(!model.choicesValid(fixedChoices)||fixedChoices.slice(12).some(c=>c.first!==null)||!Array.isArray(finalAnswers)||finalAnswers.length>4)throw Error('庆典任务与当前48题版本不一致。');
 const choices=fixedChoices.map(c=>({...c}));if(choices.some(c=>c.second!==null))throw Error('本版为单选题，每题只能选择一项。');
 const followups=[];let result=rank(env,scores,choices,followups),next=null;
 for(let slot=0;slot<4;slot++){
  const adaptive=nextFollowup(result,followups);
  next=adaptive?{kind:'followup',slot,question:adaptive}:{kind:'task',slot,sceneIndex:12+slot};
  const answer=finalAnswers[slot];if(answer===undefined)return {result,choices,followups,next};
  if(!answer||answer.kind!==next.kind)throw Error('后面的情境已根据前面的选择调整，请重新选择。');
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
w.PONY_QUIZ_48={version,questions,scenes,indexes,axes,scoreCore,rank,plan,nextFollowup,contrasts,total:48,coreCount:32,itemsPerAxis:8,fixedTaskCount:12,finalSlots:4};
})(window);

window.PONY_QUIZ_48_V4=window.PONY_QUIZ_48;

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

// 48 displayed questions: 32 MBTI-framework items + 16 narrative slots.
// The final four slots adapt in place, never increasing the total question count.
(function(w){
const axes=['EI','SN','TF','JP'],picks={EI:[0,1,3,4,6,7,9,10],SN:[0,1,4,5,6,7,9,10],TF:[0,1,3,4,6,7,10,11],JP:[0,1,3,4,7,8,9,10]};
const indexes=[];axes.forEach((axis,j)=>picks[axis].forEach(k=>indexes.push(k*4+j)));indexes.sort((a,b)=>a-b);
const questions=indexes.map(i=>{const q=w.QUIZ_QUESTIONS[i];return [q[0],q[1].map(a=>a.slice()),{...q[2]}];}),version=w.PONY_PERSONALIZED_FOLLOWUPS?'festival-48-single-20261031-v5':'festival-48-single-20261030-v4';
const reviseCore=(i,stem,left,right)=>{const q=questions[i];questions[i]=[stem,q[1].map(([,score])=>[score===1?left:right,score]),{...q[2],left,right}];};
reviseCore(17,'入口重新布置好了，你要给照片配一句说明。下面两句，你更想用哪句？','蓝色彩带挂在两边，门口还多了几幅画。','入口像个小剧场，和今天的故事主题很搭。');
reviseCore(21,'节目临时取消，大家只能补办一场活动。两种方案都办得成，你更支持哪种？','能多接待一些来宾，把场地和材料充分用起来的方案','人数少一些，但更贴近原来那批来宾期待的方案');
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
// Wording-only refresh: keep every option's feature coding and the 32 core
// items intact. Mischief is an activity preference, never an MBTI axis score.
const playfulCopy=(i,j,text)=>{scenes[i].options[j].text=text;};
scenes[0].stem='筹备会结束了，还有半小时。四张准备台都能参加，你先去哪边？';
playfulCopy(0,3,'和伙伴排个小恶作剧：开场时假装忘词，再一起突然接上');
playfulCopy(3,2,'约台下的伙伴藏个彩蛋，开场时突然一起举起同款小牌子');
scenes[5].stem='广场布置好了，还能加一点自己的花样。你最想弄哪一个？';
playfulCopy(5,0,'做个打开就跳出纸青蛙的小盒子，试试怎样弹得更出其不意');
playfulCopy(5,2,'给闯关卡加一条假线索，推一遍怎样才能识破这个圈套');
playfulCopy(8,2,'拉几位伙伴玩假扮游戏，扮成摊主，看看熟人多久能认出来');
playfulCopy(9,0,'演爱捣乱的反派，设计一段藏宝箱、最后又被识破的戏');
scenes[10].stem='广场还空着一小块地方，也有材料可用。你想拿它做什么？';
playfulCopy(10,0,'做个会冒泡变色的小实验，换几种配比，看看效果差在哪');
playfulCopy(10,3,'提议加一条隐藏支线，说服伙伴一起布置一个猜不到的结局');
playfulCopy(11,2,'拉上几位来宾排个反转桥段，悄悄准备好，逗主持人一下');
playfulCopy(14,3,'约伙伴试个新点子，把普通道具改成突然弹开的玩具');
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
 if(result.primary===null||(!result.close&&result.ranked[0].support.sufficient)||answered.length>=4)return null;
 const personalized=w.PONY_PERSONALIZED_FOLLOWUPS?.select(result,answered);if(personalized)return personalized;
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
 if([best.left,best.right].includes('strategy')&&[best.left,best.right].includes('heritage')){
  const leftText='按闯关顺序藏线索，安排几处需要猜一猜的转折',rightText='按小镇旧事串起地点，把居民的故事写进沿途介绍',forward=best.left==='strategy';
  return {left:best.left,right:best.right,stem:'下次庆典想做一条“小镇寻宝路线”，先做一个版本来试。你更想做哪一版？',leftText:forward?leftText:rightText,rightText:forward?rightText:leftText,candidateSlugs:[a.slug,b.slug],contrast:'shared-route-proposal'};
 }
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
 const result=env.PONY_NARRATIVE_MATCH.rank(env,scores,choices,followups,{scenes,maxFollowups:4});
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
 if(!model.choicesValid(fixedChoices)||fixedChoices.slice(12).some(c=>c.first!==null)||!Array.isArray(finalAnswers)||finalAnswers.length>4)throw Error('庆典任务与当前48题版本不一致。');
 const choices=fixedChoices.map(c=>({...c}));if(choices.some(c=>c.second!==null))throw Error('本版为单选题，每题只能选择一项。');
 const followups=[];let result=rank(env,scores,choices,followups),next=null;
 for(let slot=0;slot<4;slot++){
  const adaptive=nextFollowup(result,followups);
  next=adaptive?{kind:'followup',slot,question:adaptive}:{kind:'task',slot,sceneIndex:12+slot};
  const answer=finalAnswers[slot];if(answer===undefined)return {result,choices,followups,next};
  if(!answer||answer.kind!==next.kind)throw Error('后面的情境已根据前面的选择调整，请重新选择。');
  if(next.kind==='followup'){
   if(!['left','right','both','unknown'].includes(answer.choice))throw Error('请选择一个答案。');
   if(answer.questionId!==undefined&&answer.questionId!==(adaptive.id||null))throw Error('追问已根据前面的答案更新，请重新选择。');
   followups.push({questionId:adaptive.id||null,left:adaptive.left,right:adaptive.right,choice:answer.choice,leftText:adaptive.leftText,rightText:adaptive.rightText,stem:adaptive.stem});
  }else{
   if(answer.first!==null&&(!Number.isInteger(answer.first)||answer.first<0||answer.first>3))throw Error('请选择一个答案。');
   choices[next.sceneIndex]={first:answer.first,second:null};
  }
  result=rank(env,scores,choices,followups);
 }
 return {result,choices,followups,next:null};
}
w.PONY_QUIZ_48={version,questions,scenes,indexes,axes,scoreCore,rank,plan,nextFollowup,contrasts,personalizedQuestions:w.PONY_PERSONALIZED_FOLLOWUPS?.items||[],total:48,coreCount:32,itemsPerAxis:8,fixedTaskCount:12,finalSlots:4};
})(window);

window.PONY_QUIZ_48_V5=window.PONY_QUIZ_48;

// 48 displayed questions: 32 MBTI-framework items + 16 narrative slots.
// The final four slots adapt in place, never increasing the total question count.
(function(w){
const axes=['EI','SN','TF','JP'],picks={EI:[0,1,3,4,6,7,9,10],SN:[0,1,4,5,6,7,9,10],TF:[0,1,3,4,6,7,10,11],JP:[0,1,3,4,7,8,9,10]};
const indexes=[];axes.forEach((axis,j)=>picks[axis].forEach(k=>indexes.push(k*4+j)));indexes.sort((a,b)=>a-b);
const questions=indexes.map(i=>{const q=w.QUIZ_QUESTIONS[i];return [q[0],q[1].map(a=>a.slice()),{...q[2]}];}),version=w.PONY_PERSONALIZED_FOLLOWUPS?(w.PONY_QUIZ_48_V5?'festival-48-single-20261031-v6':'festival-48-single-20261031-v5'):'festival-48-single-20261030-v4';
const reviseCore=(i,stem,left,right)=>{const q=questions[i];questions[i]=[stem,q[1].map(([,score])=>[score===1?left:right,score]),{...q[2],left,right}];};
reviseCore(17,'入口重新布置好了，你要给照片配一句说明。下面两句，你更想用哪句？','蓝色彩带挂在两边，门口还多了几幅画。','入口像个小剧场，和今天的故事主题很搭。');
reviseCore(21,'节目临时取消，大家只能补办一场活动。两种方案都办得成，你更支持哪种？','能多接待一些来宾，把场地和材料充分用起来的方案','人数少一些，但更贴近原来那批来宾期待的方案');
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
// Wording-only refresh: keep every option's feature coding and the 32 core
// items intact. Mischief is an activity preference, never an MBTI axis score.
const playfulCopy=(i,j,text)=>{scenes[i].options[j].text=text;};
scenes[0].stem='筹备会结束了，还有半小时。四张准备台都能参加，你先去哪边？';
playfulCopy(0,3,'和伙伴排个小恶作剧：开场时假装忘词，再一起突然接上');
playfulCopy(3,2,'约台下的伙伴藏个彩蛋，开场时突然一起举起同款小牌子');
scenes[5].stem='广场布置好了，还能加一点自己的花样。你最想弄哪一个？';
playfulCopy(5,0,'做个打开就跳出纸青蛙的小盒子，试试怎样弹得更出其不意');
playfulCopy(5,2,'给闯关卡加一条假线索，推一遍怎样才能识破这个圈套');
playfulCopy(8,2,'拉几位伙伴玩假扮游戏，扮成摊主，看看熟人多久能认出来');
playfulCopy(9,0,'演爱捣乱的反派，设计一段藏宝箱、最后又被识破的戏');
scenes[10].stem='广场还空着一小块地方，也有材料可用。你想拿它做什么？';
playfulCopy(10,0,'做个会冒泡变色的小实验，换几种配比，看看效果差在哪');
playfulCopy(10,3,'提议加一条隐藏支线，说服伙伴一起布置一个猜不到的结局');
playfulCopy(11,2,'拉上几位来宾排个反转桥段，悄悄准备好，逗主持人一下');
playfulCopy(14,3,'约伙伴试个新点子，把普通道具改成突然弹开的玩具');
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
 if(result.primary===null||(!result.close&&result.ranked[0].support.sufficient)||answered.length>=4)return null;
 const personalized=w.PONY_PERSONALIZED_FOLLOWUPS?.select(result,answered);if(personalized)return personalized;
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
 if([best.left,best.right].includes('strategy')&&[best.left,best.right].includes('heritage')){
  const leftText='按闯关顺序藏线索，安排几处需要猜一猜的转折',rightText='按小镇旧事串起地点，把居民的故事写进沿途介绍',forward=best.left==='strategy';
  return {left:best.left,right:best.right,stem:'下次庆典想做一条“小镇寻宝路线”，先做一个版本来试。你更想做哪一版？',leftText:forward?leftText:rightText,rightText:forward?rightText:leftText,candidateSlugs:[a.slug,b.slug],contrast:'shared-route-proposal'};
 }
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
function rank(env,scores,choices,followups=[],applyPreference=true){
 const result=env.PONY_NARRATIVE_MATCH.rank(env,scores,choices,followups,{scenes,maxFollowups:4});
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
 result.parameters={mbtiWeight:.6,interestWeight:.4,midpointRegularizer:.25,relativeEvidenceScale:2,closeGap:.03,minChapters:2};return applyPreference?preferMainSix(result):result;
}
// Explicit product preference at final presentation, not an accuracy claim.
const mainSixPreference={id:'main-six-near-score-v1',scoreTolerance:.03,mbtiTolerance:.03};
function preferMainSix(result){
 if(version!=='festival-48-single-20261031-v6')return result;
 const leader=result.ranked[0],policy={...mainSixPreference,applied:false};result.productPreference=policy;
 if(result.primary===null||!leader?.support.sufficient||mainSix.has(leader.slug))return result;
 const candidate=result.ranked.find(r=>mainSix.has(r.slug)&&r.support.sufficient&&leader.similarity-r.similarity<=mainSixPreference.scoreTolerance+1e-12&&(leader.mbti===null||r.mbti===null||leader.mbti-r.mbti<=mainSixPreference.mbtiTolerance+1e-12));
 if(!candidate)return result;
 const gap=leader.similarity-candidate.similarity;result.ranked.splice(result.ranked.indexOf(candidate),1);result.ranked.unshift(candidate);result.primary=candidate.index;result.secondary=leader.index;result.similarityGap=Math.abs(gap);result.close=true;
 Object.assign(policy,{applied:true,rawPrimary:leader.slug,displayedPrimary:candidate.slug,similarityGap:gap,mbtiGap:leader.mbti!==null&&candidate.mbti!==null?leader.mbti-candidate.mbti:null});return result;
}
function plan(env,scores,fixedChoices,finalAnswers=[]){
 const model=env.PONY_NARRATIVE_MATCH;
 if(!model.choicesValid(fixedChoices)||fixedChoices.slice(12).some(c=>c.first!==null)||!Array.isArray(finalAnswers)||finalAnswers.length>4)throw Error('庆典任务与当前48题版本不一致。');
 const choices=fixedChoices.map(c=>({...c}));if(choices.some(c=>c.second!==null))throw Error('本版为单选题，每题只能选择一项。');
 const followups=[];let result=rank(env,scores,choices,followups,false),next=null;
 for(let slot=0;slot<4;slot++){
  const adaptive=nextFollowup(result,followups);
  next=adaptive?{kind:'followup',slot,question:adaptive}:{kind:'task',slot,sceneIndex:12+slot};
  const answer=finalAnswers[slot];if(answer===undefined)return {result,choices,followups,next};
  if(!answer||answer.kind!==next.kind)throw Error('后面的情境已根据前面的选择调整，请重新选择。');
  if(next.kind==='followup'){
   if(!['left','right','both','unknown'].includes(answer.choice))throw Error('请选择一个答案。');
   if(answer.questionId!==undefined&&answer.questionId!==(adaptive.id||null))throw Error('追问已根据前面的答案更新，请重新选择。');
   followups.push({questionId:adaptive.id||null,left:adaptive.left,right:adaptive.right,choice:answer.choice,leftText:adaptive.leftText,rightText:adaptive.rightText,stem:adaptive.stem});
  }else{
   if(answer.first!==null&&(!Number.isInteger(answer.first)||answer.first<0||answer.first>3))throw Error('请选择一个答案。');
   choices[next.sceneIndex]={first:answer.first,second:null};
  }
  result=rank(env,scores,choices,followups,false);
 }
 return {result:preferMainSix(result),choices,followups,next:null};
}
w.PONY_QUIZ_48={version,questions,scenes,indexes,axes,scoreCore,rank,plan,nextFollowup,contrasts,mainSixPreference:version==='festival-48-single-20261031-v6'?mainSixPreference:null,preferMainSix,personalizedQuestions:w.PONY_PERSONALIZED_FOLLOWUPS?.items||[],total:48,coreCount:32,itemsPerAxis:8,fixedTaskCount:12,finalSlots:4};
})(window);

window.PONY_QUIZ_48_V6=window.PONY_QUIZ_48;

// Copy-only edit: option positions and matching signals are unchanged.
window.PONY_COPY_V7 = {
  "revision": "20261104-distinct-scenes",
  "core": [
    [
      "筹备会还没开始，你和几位新志愿者坐在一起。你会？",
      "先打招呼，聊聊各自来帮什么忙",
      "先看看材料，聊到熟悉的话题再接话"
    ],
    [
      "苹果嘉儿教做苹果派。你更想怎么学？",
      "看她示范一步，自己跟着做一步",
      "先弄懂材料为什么这样搭配，再动手"
    ],
    [
      "两套摊位布置花费一样，你推荐哪套？",
      "能多摆些东西，把空间用足的",
      "更合摊主习惯，用起来顺手的"
    ],
    [
      "紫悦给你一张清单，明天下午开场。你会？",
      "先排好今天和明早各做什么",
      "先做手边的一项，后面边做边定"
    ],
    [
      "你想到一个还没成形的点子。怎么理清它？",
      "讲给伙伴听，边说边补细节",
      "先写下来理一理，想顺了再说"
    ],
    [
      "珍奇递来迎宾服的资料。你更想看什么？",
      "布料、尺寸和试穿照片",
      "设计主题，以及图案为什么这么搭"
    ],
    [
      "两张导览图都能印，你推荐哪一张？",
      "把各摊位和路线标得最全的那张",
      "把新来宾最担心找不到的地方标得特别醒目的那张"
    ],
    [
      "你明早要带工具来帮忙，今晚怎么准备？",
      "照暂定的分工把工具装好，明早拎包就走",
      "把常用工具放在门边，明早看看最终分工再挑"
    ],
    [
      "挂完装饰，可以歇十分钟。你更想？",
      "端杯水找伙伴聊聊刚才的事",
      "去广场边坐一会儿，安静歇歇"
    ],
    [
      "两位伙伴都想拍照，也都能迎宾。你怎么分工？",
      "按经验和空闲时间排班轮换",
      "听听各自在意什么，再商量怎么分"
    ],
    [
      "风大了，纸灯要移到桌上。你怎么摆？",
      "先定好位置，再把灯摆过去",
      "先摆一盏看效果，边摆边调"
    ],
    [
      "装饰架总是立不稳。你怎么想办法？",
      "跟伙伴说说试过的办法，边聊边找问题",
      "先记下试过的步骤，自己理出头绪再聊"
    ],
    [
      "点心桌太挤了。你从哪儿找摆法？",
      "翻往届照片，找能直接用的摆法",
      "想想桌子该分哪几块，画个新布局"
    ],
    [
      "有人贴错了摊位号，已经改好。下次怎么办？",
      "大家都用同一张清单核对",
      "问问各自容易错在哪，再调整提醒"
    ],
    [
      "彩带和招牌都归你做，时间充足。你习惯？",
      "先做完一样，再做另一样",
      "两样穿插着做，有想法就先做哪样"
    ],
    [
      "搬展板时看到一个没写用途的摆件。你先留意什么？",
      "它用什么做的，哪些部件可以转动",
      "它像什么，可能是拿来做什么的"
    ],
    [
      "来宾分组玩一个你会的游戏。你更想？",
      "轮流加入不同的小组",
      "和一两位聊得来的伙伴多玩几轮"
    ],
    [
      "庆典入口刚布置好。你先留意什么？",
      "彩带、招牌和灯的颜色与位置",
      "入口的整体感觉，以及它是否呼应主题"
    ],
    [
      "手工课只剩一个名额。你倾向留给谁？",
      "排在前面的来宾，按公布的预约顺序",
      "远道而来、以后没机会参加的来宾，说明原因再调整"
    ],
    [
      "表演结束，大家围在一起聊天。你通常会？",
      "边听边接话，想到什么就说出来",
      "先听大家聊，想好自己的看法再说"
    ],
    [
      "你要给没到场的朋友讲一件庆典趣事。怎么开头？",
      "从事情的开头讲起，按顺序说经过",
      "先说它让我想到什么，再讲几个片段"
    ],
    [
      "节目取消了，只够补办一场。你支持哪种？",
      "用足现有场地和材料，让更多来宾参加",
      "照原先那批来宾的期待安排活动"
    ],
    [
      "你和伙伴要逛三个摊位。你更喜欢？",
      "先约好路线，再按顺序逛",
      "先逛最想看的，出来再选下一站"
    ],
    [
      "下午几个时段都能拍齐舞台照片。你会？",
      "先定一个时间，到点就去拍",
      "不定时间，路过时看见合适画面就拍"
    ],
    [
      "筹备组请大家提改进意见。你更愿意怎么参加？",
      "围桌聊一轮，听听别人的想法，也当场说说我的",
      "自己把想说的写在意见卡上，交给筹备组"
    ],
    [
      "给下次庆典留份笔记，你更顺手的是？",
      "按经过记下各摊位做了什么、用了什么",
      "归纳经验，写清哪些活动能互相配合"
    ],
    [
      "收工后，附近几家店都开着。你更喜欢？",
      "出发前选好一家，到店就坐下",
      "先沿街走走，看到想吃的再选"
    ],
    [
      "散场时，旧唱片摊还能听歌。你想在哪儿听？",
      "去长桌跟几位伙伴一起听，聊聊各自喜欢的歌",
      "挑个靠边的座位，戴耳机慢慢听完整张唱片"
    ],
    [
      "有人提议把摊位串成环线。你先问什么？",
      "场地放不放得下，人多时怎么通行",
      "哪些活动能串起来，能不能玩出新花样"
    ],
    [
      "纪念册要不要写进一场引起争议的演出？你先考虑什么？",
      "按整本册子一致的收录标准，看这段是否该写进去",
      "想想写进去后，演出者和受影响的来宾会怎么看"
    ],
    [
      "下次活动有几个好名字，邀请函还不急。你会？",
      "现在选一个，按这个名字准备",
      "先留着几个，等活动内容更清楚再定"
    ],
    [
      "有人提议下次提前半小时散场。你想先弄清什么？",
      "看这次的人流和收摊记录，算算提早关门能省多少工",
      "问问晚到的邻居还能不能赶上他们最想参加的活动"
    ]
  ],
  "scenes": [
    [
      "筹备会结束了，还有半小时。你想去哪张准备台？",
      [
        "翻庆典旧记录，挑件趣事写上介绍牌",
        "烤一盘点心，分装进来宾的小盒子",
        "给演出服、桌布和饰品试几套搭配",
        "和伙伴排个开场彩蛋，趁大家没留神亮出来"
      ]
    ],
    [
      "筹备开始了，你更愿意接哪件活？",
      [
        "核对各组的材料和时间，找出撞车的安排",
        "拿上工具，帮忙赶完一件没做完的活",
        "和队友练双人跳绳，把进绳的时机对准",
        "替对强光不舒服的伙伴试选一盏柔和又好看的摊灯"
      ]
    ],
    [
      "试演结束，收工前还有二十分钟。你想做什么？",
      [
        "改个坐着也能玩的游戏，招呼伙伴试试",
        "给没领到点心的伙伴送一份，顺手收桌",
        "把玩法画成几步小图，给没听懂的人看",
        "再排一次没接上的出场，让动作对上音乐"
      ]
    ],
    [
      "要拍一段筹备花絮。你想负责什么？",
      [
        "对着镜头唱一段，唱出自己的感觉",
        "用剪下来的彩纸给取景框做一圈镂空边饰",
        "和伙伴躲在镜头外，等主持人说完一起做鬼脸",
        "陪不想露脸的伙伴在镜头外找个自在的位置"
      ]
    ],
    [
      "广场开始布置。你先去哪边帮忙？",
      [
        "绕广场看看，给新摊位找个显眼又不挡路的位置",
        "把松动的木架、桌脚固定好",
        "去投壶摊试几个站位，找出最顺手的投法",
        "给动物角找块阴凉地，铺好垫子"
      ]
    ],
    [
      "广场快布置好了。你想添点什么？",
      [
        "做个会突然弹出纸青蛙的盒子",
        "边听居民讲旧事，边布置老照片墙",
        "给谜题摊写两条看似矛盾的提示，设计一个能同时解释它们的答案",
        "替伙伴藏好惊喜礼物，到约好的时间再拿出来"
      ]
    ],
    [
      "开场前再检查一遍。你愿意负责哪处？",
      [
        "试着分一份点心套餐，看看分量和价签",
        "从台下看灯光效果，帮演员调整服装和配饰",
        "向各组讲你的分工方案，争取大家采纳",
        "独自走条不熟的小路，看看能否跟着路标找到广场"
      ]
    ],
    [
      "离开场还有半小时。你想留在哪儿？",
      [
        "和摊主搬完苹果，按约好的分量摆上台",
        "对着说明书试音响，找出杂音的原因",
        "去毽子摊练一组连续踢，试着比刚才多接两下",
        "不用现成样图，拿纸管和绳子试搭新支架"
      ]
    ],
    [
      "庆典开场了，你不用值班。先去哪儿？",
      [
        "去挑战区跑一轮，试试能不能刷新成绩",
        "报名上台，演准备好的节目",
        "换个打扮混进假扮游戏，看熟人多久能认出你",
        "去交换摊摆货，介绍自己最想换出去的东西"
      ]
    ],
    [
      "小戏快排练了。你想接哪份活？",
      [
        "演个会设局的反派，藏好宝箱线索瞒过主角",
        "在侧幕递道具，顺便提醒忘词的伙伴",
        "陪第一次上台的伙伴练最不熟的那段台词",
        "用剩布改件方便跑跳的披风"
      ]
    ],
    [
      "广场还有块空地。你想拿来做什么？",
      [
        "做个冒泡变色的实验，比较不同配比",
        "开个体验课，教来宾一招自己会的技巧",
        "摆个限时叠杯挑战，把自己的手法练熟后再上榜",
        "说服伙伴照你的设想搭个交换游戏，让不同摊位互相带来客人"
      ]
    ],
    [
      "快散场了。你更想帮忙做什么压轴活动？",
      [
        "给愿意上台的伙伴改披肩，配头饰展示",
        "约人比一场短接力，先练顺交接棒",
        "把搞怪自画像藏在谢幕卡背面，给主持人惊喜",
        "把怕吵的小鸟挪远些，等它安稳再收笼"
      ]
    ],
    [
      "来宾走得差不多了。你还想留下做什么？",
      [
        "照借用单收齐工具，约好送还到哪家",
        "和搭档换种唱法，试试合唱哪版更动人",
        "请居民认老照片，记下他们讲的庆典往事",
        "绕到钟楼背后走走，看看庆典散场后的街景"
      ]
    ],
    [
      "给下次筹备组留点东西。你想做什么？",
      [
        "把今天弄懂的办法画成图，标出交接步骤",
        "用老办法修好旧木架，下次还能用",
        "给筹备组留一张便条，记下哪些细节不能露馅",
        "重新搭配套餐，算算下次怎样摆摊更划算"
      ]
    ],
    [
      "你的活交接完了。回家前最想去哪儿？",
      [
        "找一起忙的伙伴坐坐，接着聊没聊完的话",
        "自己借台相机，从没试过的角度拍几张广场的夜景",
        "把脚疼的来宾扶到长椅，陪他等接他的人",
        "和搭档用剩下的杯子试做能吹出怪声的小哨子"
      ]
    ],
    [
      "最后一盏灯快熄了，你还想把哪件事做完？",
      [
        "请居民教做家常点心，问问做法是谁传下来的",
        "帮照护员把小兔的草料和饮水备齐，再一起关门",
        "给纪念明信片压出花边，试哪种边纹最衬图案",
        "把查到的资料分袋，标好下次交给哪一组"
      ]
    ]
  ],
  "contrasts": [
    [
      "小推车又卡住了。你想怎么帮？",
      "翻图纸，查清卡住的结构原本怎么运作",
      "拿工具检查松动的地方，把卡住的部位修好"
    ],
    [
      "挑战赛的弯道想改得更顺。你怎么帮？",
      "对照路线图看录像，找出大家在哪儿跑偏",
      "亲自跑几遍弯道，试试怎么调整脚步和发力"
    ],
    [
      "散场前十分钟交给你。你怎么开头？",
      "说清集合地点和收尾安排",
      "临时招呼还没走的人玩个小游戏"
    ],
    [
      "新伙伴说没弄懂玩法。你怎么帮？",
      "画出玩法，换个例子讲到他能自己做",
      "问问他还想不想参加，陪他找个自在的位置"
    ],
    [
      "纪念册还空着一页。你想怎么补？",
      "画张清楚的步骤图，让下次的人照着学",
      "搭配照片、颜色和留白，让它和整本册子协调"
    ],
    [
      "借来的脚踏风琴明早要归还。还有几分钟，你想做什么？",
      "拧紧松动的踏板，把风琴收进箱子",
      "把刚才总踩错节拍的那小段弹顺"
    ],
    [
      "散场前想给来宾留点东西。你愿意做什么？",
      "做一批能带走的小物件，分装给大家",
      "设计一个小惊喜，让愿意的人一起玩完再走"
    ],
    [
      "新伙伴的小摊还没收尾。你怎么帮？",
      "和他分头做，把剩下的活一起做完",
      "陪他做一件，再让他自己试一件"
    ],
    [
      "大家想记住这场庆典。你想先做什么？",
      "听居民讲旧习俗，记下今年沿用了哪些做法",
      "选出代表庆典的颜色和造型，做一张纪念页"
    ],
    [
      "桌上还摆着连环扣。你更想怎么玩？",
      "把最难解的那个扣子再拆装一遍，练到不用看图",
      "请伙伴摸黑猜扣子的形状，猜错的人编个好笑的新名字"
    ],
    [
      "几位伙伴还想在广场待会儿。你想做什么？",
      "陪想动一动的伙伴再跑一轮，边跑边试动作",
      "给累了的伙伴和小动物找块安静的地方，备好水和垫子"
    ],
    [
      "表演结束后，你最想改哪儿？",
      "回到场地试几个动作，调整转身和落点",
      "让伙伴穿着服装动一动，再调整线条和饰品"
    ],
    [
      "休息区想添项活动。你想帮哪边？",
      "摆个坐着能玩的纸牌游戏，招呼大家来一局",
      "备好水和靠垫，陪暂时不想玩的人歇一会儿"
    ],
    [
      "纪念品还能改一点。你先改什么？",
      "加个打开就出现的小惊喜，邀请大家一起试",
      "按收礼人的风格搭配颜色和饰品"
    ],
    [
      "伙伴请你帮忙准备上场。你想帮哪边？",
      "备好水和备用物品，陪他在候场区安顿好",
      "帮他试服装和配饰，改到合身又好看"
    ]
  ],
  "personal": {
    "personal-01": {
      "stem": "钟楼展最后还要补一页资料，你更想写哪一页？",
      "leftText": "列出开门、讲解和关灯分别由谁负责，方便接班",
      "rightText": "记下钟声和齿轮转动的关系，留几个没弄明白的问题"
    },
    "personal-02": {
      "stem": "要换个会发声的小装置。你先怎么试？",
      "leftText": "翻旧图纸和使用记录，圈出可能有用的地方",
      "rightText": "换个部件做小样，转一转听听有什么变化"
    },
    "personal-03": {
      "stem": "剩下的木料和布还能做件东西。你做什么？",
      "leftText": "做几个折叠支架，换地方也好摆",
      "rightText": "做一套桌旗和底板，把各摊位的颜色搭起来"
    },
    "personal-04": {
      "stem": "搭档约你提前试摆点心摊。你先试什么？",
      "leftText": "按预订数量分装，试试怎么送才不会漏单",
      "rightText": "配几份不同口味和分量的套餐，算算怎么卖"
    },
    "personal-05": {
      "stem": "收工前还能玩半小时。你选哪条路线？",
      "leftText": "再走熟悉的路线，把刚才没过的那关拿下",
      "rightText": "带地图去走新路，看看那头有什么"
    },
    "personal-06": {
      "stem": "运动摊想拍段短视频。你想拍哪种？",
      "leftText": "展示自己练成的动作，挑一遍最好看的",
      "rightText": "找个新手，从最简单的一步拍起，看看他能不能学会"
    },
    "personal-07": {
      "stem": "谢幕前还能加一段彩蛋。你更想准备哪种？",
      "leftText": "请各摊轮流录一句祝福，串成一段大家都在的声音留言",
      "rightText": "用两块彩色透明片做个小机关，试试叠在一起会变出什么图案"
    },
    "personal-08": {
      "stem": "有位小来宾错过了手工活动。你愿意留下来做什么？",
      "leftText": "问问他原本最期待哪一段，陪他挑一项还能参加的活动",
      "rightText": "把剩下的纸和线做成一个会转的小风车，给他带走"
    },
    "personal-09": {
      "stem": "动物角和石头展都开着。你想在哪儿多待会儿？",
      "leftText": "看看小动物喜欢哪种垫子，给它们换个舒服的窝",
      "rightText": "挑几块纹理不同的石头，按介绍卡认认来历"
    },
    "personal-10": {
      "stem": "散场时突然下雨，服务台还有人。你愿意做哪件？",
      "leftText": "陪一位怕打雷的来宾等雨小一点，听听他需要什么",
      "rightText": "把备用雨伞搬到出口，借给还得走一段路的人"
    },
    "personal-11": {
      "stem": "回看演出录像，你想改哪部分？",
      "leftText": "看服装在灯下的颜色和轮廓，调整配饰的位置",
      "rightText": "跟着录像再唱一遍副歌，试试哪种唱法更有感觉"
    },
    "personal-12": {
      "stem": "下次还想卖纪念品。你先试什么？",
      "leftText": "按来宾的穿搭配颜色和饰品，做几款不同的成品",
      "rightText": "把几样东西搭成套装，算算哪种组合更好卖"
    }
  },
  "genericStems": [
    "散场前还有一小段空闲。你更想去做哪件事？",
    "有人来替你值最后一班。多出来的时间，你想怎么用？",
    "搭档说还可以再留十分钟。这两件事，你会挑哪一件？",
    "临走前，广场上还有两件事可以做。哪件更吸引你？"
  ],
  "actions": {
    "knowledge": "查清展品的来历，补上介绍卡缺的信息",
    "analysis": "翻使用记录，找出装置从哪一步开始出故障",
    "experiment": "用没试过的材料做个小样，看看效果",
    "coordination": "安排散场后的接送，让一起走的人对上时间",
    "service": "给休息区添好杯子和水，方便还在忙的伙伴取用",
    "practical": "拧紧小推车的螺丝，让下次还能用",
    "craft": "用剩彩纸做个立体摆件，带回去留念",
    "aesthetics": "试几套纪念册封面配色，挑最喜欢的",
    "stage": "上小舞台演段刚想到的节目，看看现场反应",
    "play": "悄悄把伙伴的道具换个搞怪外观，等他发现",
    "athletic": "约人绕广场快走一圈，比比谁先到",
    "mastery": "计几次时，把刚学的动作做得更利落",
    "exploration": "逛逛钟楼后面没走过的小街，看看有什么新鲜事",
    "independence": "挑个没人规定做法的小项目，自己从头试",
    "care": "看看休息区谁需要帮忙，陪他处理眼前的小麻烦",
    "mentoring": "陪还不会的伙伴试一遍，直到他能自己完成",
    "belonging": "把分散的伙伴叫到一桌，玩个谁都能加入的游戏",
    "loyalty": "等约好一起回家的朋友忙完，再一起走",
    "heritage": "问居民以前怎么过节，记下最感兴趣的一段",
    "commerce": "看看什么卖得最好，试配一份新套餐",
    "influence": "把想到的改法讲给筹备组，争取下次用上",
    "recognition": "挑件最满意的成品，摆到成果墙上",
    "discretion": "收好没公开的名单和物品，只交给说好的伙伴",
    "strategy": "给寻宝游戏画条暗线，藏好障眼法和真线索",
    "foodcraft": "试调一杯新口味饮品，边尝边改",
    "fieldwork": "和搭档搬完果园里剩下的果筐，一起送回去"
  }
};


// 48 displayed questions: 32 MBTI-framework items + 16 narrative slots.
// The final four slots adapt in place, never increasing the total question count.
(function(w){
const axes=['EI','SN','TF','JP'],picks={EI:[0,1,3,4,6,7,9,10],SN:[0,1,4,5,6,7,9,10],TF:[0,1,3,4,6,7,10,11],JP:[0,1,3,4,7,8,9,10]};
const indexes=[];axes.forEach((axis,j)=>picks[axis].forEach(k=>indexes.push(k*4+j)));indexes.sort((a,b)=>a-b);
const isV7=!!(w.PONY_COPY_V7&&w.PONY_PERSONALIZED_FOLLOWUPS),copy=isV7?w.PONY_COPY_V7:null,originalBank=w.PONY_PERSONALIZED_FOLLOWUPS;
const personalizedBank=isV7?{...originalBank,items:originalBank.items.map(q=>({...q,...copy.personal[q.id]})),select(result,answered){const q=originalBank.select(result,answered);return q?{...q,...copy.personal[q.id]}:null;}}:originalBank;
const questions=indexes.map(i=>{const q=w.QUIZ_QUESTIONS[i];return [q[0],q[1].map(a=>a.slice()),{...q[2]}];}),version=isV7?'festival-48-single-20261101-v7':w.PONY_PERSONALIZED_FOLLOWUPS?(w.PONY_QUIZ_48_V5?'festival-48-single-20261031-v6':'festival-48-single-20261031-v5'):'festival-48-single-20261030-v4';
const reviseCore=(i,stem,left,right)=>{const q=questions[i];questions[i]=[stem,q[1].map(([,score])=>[score===1?left:right,score]),{...q[2],left,right}];};
reviseCore(17,'入口重新布置好了，你要给照片配一句说明。下面两句，你更想用哪句？','蓝色彩带挂在两边，门口还多了几幅画。','入口像个小剧场，和今天的故事主题很搭。');
reviseCore(21,'节目临时取消，大家只能补办一场活动。两种方案都办得成，你更支持哪种？','能多接待一些来宾，把场地和材料充分用起来的方案','人数少一些，但更贴近原来那批来宾期待的方案');
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
// Wording-only refresh: keep every option's feature coding and the 32 core
// items intact. Mischief is an activity preference, never an MBTI axis score.
const playfulCopy=(i,j,text)=>{scenes[i].options[j].text=text;};
scenes[0].stem='筹备会结束了，还有半小时。四张准备台都能参加，你先去哪边？';
playfulCopy(0,3,'和伙伴排个小恶作剧：开场时假装忘词，再一起突然接上');
playfulCopy(3,2,'约台下的伙伴藏个彩蛋，开场时突然一起举起同款小牌子');
scenes[5].stem='广场布置好了，还能加一点自己的花样。你最想弄哪一个？';
playfulCopy(5,0,'做个打开就跳出纸青蛙的小盒子，试试怎样弹得更出其不意');
playfulCopy(5,2,'给闯关卡加一条假线索，推一遍怎样才能识破这个圈套');
playfulCopy(8,2,'拉几位伙伴玩假扮游戏，扮成摊主，看看熟人多久能认出来');
playfulCopy(9,0,'演爱捣乱的反派，设计一段藏宝箱、最后又被识破的戏');
scenes[10].stem='广场还空着一小块地方，也有材料可用。你想拿它做什么？';
playfulCopy(10,0,'做个会冒泡变色的小实验，换几种配比，看看效果差在哪');
playfulCopy(10,3,'提议加一条隐藏支线，说服伙伴一起布置一个猜不到的结局');
playfulCopy(11,2,'拉上几位来宾排个反转桥段，悄悄准备好，逗主持人一下');
playfulCopy(14,3,'约伙伴试个新点子，把普通道具改成突然弹开的玩具');
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
// New editions own their wording; cached and saved editions keep their copy.
if(isV7){
 copy.core.forEach((q,i)=>reviseCore(i,...q));
 copy.scenes.forEach((q,i)=>{scenes[i].stem=q[0];scenes[i].options.forEach((o,j)=>o.text=q[1][j]);});
 copy.contrasts.forEach((q,i)=>{contrasts[i].splice(4,3,...q);});
}
const followupActions=isV7?copy.actions:w.PONY_NARRATIVE_MATCH.followupActions;
function nextFollowup(result,answered=[]){
 if(result.primary===null||(!result.close&&result.ranked[0].support.sufficient)||answered.length>=4)return null;
 const personalized=personalizedBank?.select(result,answered);if(personalized)return personalized;
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
 if([best.left,best.right].includes('strategy')&&[best.left,best.right].includes('heritage')){
  const leftText='按闯关顺序藏线索，安排几处需要猜一猜的转折',rightText='按小镇旧事串起地点，把居民的故事写进沿途介绍',forward=best.left==='strategy';
  return {left:best.left,right:best.right,stem:'下次庆典想做一条“小镇寻宝路线”，先做一个版本来试。你更想做哪一版？',leftText:forward?leftText:rightText,rightText:forward?rightText:leftText,candidateSlugs:[a.slug,b.slug],contrast:'shared-route-proposal'};
 }
 const actions=followupActions;
 const stem=isV7?(copy.genericStems?.[answered.length]||'回家前还有十分钟，两处都可以去。你更想做哪件事？'):'庆典收尾后，还能选一件事做。两边都有人帮忙，你更想先接哪件？';
 return {left:best.left,right:best.right,stem,leftText:actions[best.left],rightText:actions[best.right],candidateSlugs:[a.slug,b.slug],contrast:'nearby-candidate-difference'};
}
const mainSix=new Set(['twilight','applejack','rainbow-dash','pinkie-pie','fluttershy','rarity']);
function scoreCore(answers, items=questions, itemIndexes=indexes, edition=version){
 const perAxis=items.length/axes.length;
 if(!Array.isArray(answers)||answers.length!==items.length||answers.some((v,i)=>!Number.isInteger(v)||v<0||v>=items[i][1].length))throw Error('请完成本版的'+items.length+'道做事方式题。');
 const totals=axes.map(axis=>items.reduce((s,q,i)=>s+(q[2].axis===axis?q[1][answers[i]][1]:0),0)),scores=totals.map(v=>(v/perAxis+1)/2);
 const evidence=axes.map((axis,j)=>{const rows=items.map((q,i)=>({q,i,value:q[1][answers[i]][1]})).filter(x=>x.q[2].axis===axis),positive=rows.filter(x=>x.value>0).length,sign=totals[j]>=0?1:-1,first=rows.find(x=>Math.sign(x.value)===sign),opposite=rows.find(x=>Math.sign(x.value)!==sign);return {axis,positive,negative:perAxis-positive,stem:first.q[0],answer:first.q[1][answers[first.i]][0],counterexample:opposite?{stem:opposite.q[0],answer:opposite.q[1][answers[opposite.i]][0]}:null};});
 return {model:'four-preferences-v2',formVersion:edition,questionVersion:edition,answers:answers.slice(),questionIndexes:itemIndexes.slice(),scores,totals,itemsPerAxis:perAxis,type:scores.map((v,i)=>Math.abs(v-.5)<.1?'X':axes[i][v>.5?0:1]).join(''),closeAxes:axes.filter((_,i)=>Math.abs(scores[i]-.5)<.1),evidence};
}
function rank(env,scores,choices,followups=[],applyPreference=true){
 const result=env.PONY_NARRATIVE_MATCH.rank(env,scores,choices,followups,{scenes,maxFollowups:4});
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
 result.parameters={mbtiWeight:.6,interestWeight:.4,midpointRegularizer:.25,relativeEvidenceScale:2,closeGap:.03,minChapters:2};return applyPreference?preferMainSix(result):result;
}
// Explicit product preference at final presentation, not an accuracy claim.
const mainSixPreference={id:isV7?'main-six-near-score-v2':'main-six-near-score-v1',scoreTolerance:isV7?.04:.03,mbtiTolerance:.03};
function preferMainSix(result){
 if(!isV7&&version!=='festival-48-single-20261031-v6')return result;
 const leader=result.ranked[0],policy={...mainSixPreference,applied:false};result.productPreference=policy;
 if(result.primary===null||!leader?.support.sufficient||mainSix.has(leader.slug))return result;
 const candidate=result.ranked.find(r=>mainSix.has(r.slug)&&r.support.sufficient&&leader.similarity-r.similarity<=mainSixPreference.scoreTolerance+1e-12&&(leader.mbti===null||r.mbti===null||leader.mbti-r.mbti<=mainSixPreference.mbtiTolerance+1e-12));
 if(!candidate)return result;
 const gap=leader.similarity-candidate.similarity;result.ranked.splice(result.ranked.indexOf(candidate),1);result.ranked.unshift(candidate);result.primary=candidate.index;result.secondary=leader.index;result.similarityGap=Math.abs(gap);result.close=true;
 Object.assign(policy,{applied:true,rawPrimary:leader.slug,displayedPrimary:candidate.slug,similarityGap:gap,mbtiGap:leader.mbti!==null&&candidate.mbti!==null?leader.mbti-candidate.mbti:null});return result;
}
function plan(env,scores,fixedChoices,finalAnswers=[]){
 const model=env.PONY_NARRATIVE_MATCH;
 if(!model.choicesValid(fixedChoices)||fixedChoices.slice(12).some(c=>c.first!==null)||!Array.isArray(finalAnswers)||finalAnswers.length>4)throw Error('庆典任务与当前48题版本不一致。');
 const choices=fixedChoices.map(c=>({...c}));if(choices.some(c=>c.second!==null))throw Error('本版为单选题，每题只能选择一项。');
 const followups=[];let result=rank(env,scores,choices,followups,false),next=null;
 for(let slot=0;slot<4;slot++){
  const adaptive=nextFollowup(result,followups);
  next=adaptive?{kind:'followup',slot,question:adaptive}:{kind:'task',slot,sceneIndex:12+slot};
  const answer=finalAnswers[slot];if(answer===undefined)return {result,choices,followups,next};
  if(!answer||answer.kind!==next.kind)throw Error('后面的情境已根据前面的选择调整，请重新选择。');
  if(next.kind==='followup'){
   if(!['left','right','both','unknown'].includes(answer.choice))throw Error('请选择一个答案。');
   if(answer.questionId!==undefined&&answer.questionId!==(adaptive.id||null))throw Error('追问已根据前面的答案更新，请重新选择。');
   followups.push({questionId:adaptive.id||null,left:adaptive.left,right:adaptive.right,choice:answer.choice,leftText:adaptive.leftText,rightText:adaptive.rightText,stem:adaptive.stem});
  }else{
   if(answer.first!==null&&(!Number.isInteger(answer.first)||answer.first<0||answer.first>3))throw Error('请选择一个答案。');
   choices[next.sceneIndex]={first:answer.first,second:null};
  }
  result=rank(env,scores,choices,followups,false);
 }
 return {result:preferMainSix(result),choices,followups,next:null};
}
w.PONY_QUIZ_48={version,questions,scenes,indexes,axes,scoreCore,rank,plan,nextFollowup,contrasts,mainSixPreference:isV7||version==='festival-48-single-20261031-v6'?mainSixPreference:null,preferMainSix,personalizedQuestions:personalizedBank?.items||[],followupActions,total:48,coreCount:32,itemsPerAxis:8,fixedTaskCount:12,finalSlots:4};
// Keep six items per axis and all sixteen scenario slots.
const omittedCore=new Set([2,4,9,12,16,23,25,26]);
const shortQuestions=questions.filter((_,index)=>!omittedCore.has(index));
const shortIndexes=indexes.filter((_,index)=>!omittedCore.has(index));
const shortVersion='festival-40-single-20261103-v1';
w.PONY_QUIZ_40={
 ...w.PONY_QUIZ_48,version:shortVersion,questions:shortQuestions,indexes:shortIndexes,
 scoreCore:answers=>scoreCore(answers,shortQuestions,shortIndexes,shortVersion),
 total:40,coreCount:shortQuestions.length,itemsPerAxis:6
};
// Keep original scene indexes for adaptive selection and stored evidence.
const omittedSceneIndexes=Object.freeze([2,6,9,11]);
const shortestVersion='festival-36-single-20261103-v1';
w.PONY_QUIZ_36={
 ...w.PONY_QUIZ_40,
 version:shortestVersion,
 omittedSceneIndexes,
 total:36,
 scoreCore:answers=>scoreCore(answers,shortQuestions,shortIndexes,shortestVersion),
 plan(env,scores,choices,finalAnswers){
  if(Array.isArray(choices)&&omittedSceneIndexes.some(i=>choices[i]?.first!==null)){
   throw Error('本版删减的庆典情境不能提交答案。');
  }
  return plan(env,scores,choices,finalAnswers);
 }
};
})(window);


// Shared assembly: older inputs retain their scoring path.
(function(w){
w.PONY_NARRATIVE_SCORE=function(answers,narrative){
 const form=[w.PONY_QUIZ_48_V1,w.PONY_QUIZ_48_V2,w.PONY_QUIZ_48_V3,w.PONY_QUIZ_48_V4,w.PONY_QUIZ_48_V5,w.PONY_QUIZ_48_V6,w.PONY_QUIZ_48,w.PONY_QUIZ_40,w.PONY_QUIZ_36].find(f=>f&&f.version===narrative?.formVersion)||w.PONY_QUIZ_48,isForm=!!form&&narrative?.formVersion===form.version;
 if(narrative?.formVersion!==undefined&&!isForm)throw Error('题目版本已更新，请重新打开测评。');
 const base=isForm?form.scoreCore(answers):w.PONY_SCORE(w.QUIZ_QUESTIONS,w.CHARACTER_SLUGS,w.PREFERENCE_PROFILES,answers);
 if(narrative===undefined)return base;
 const model=narrative?.version===w.PONY_NARRATIVE_MATCH_V2?.version?w.PONY_NARRATIVE_MATCH_V2:w.PONY_NARRATIVE_MATCH;
 if(!narrative||narrative.version!==model.version)throw Error('情境版本已更新，请重新打开测评。');
 const single=isForm||narrative.selectionMode==='single';
 if(single&&(!Array.isArray(narrative.choices)||narrative.choices.some(c=>c?.second!==null)))throw Error('单选题每题只能选择一项。');
 let ranked,effectiveChoices,accepted=[];
 if(isForm){
  if(model!==w.PONY_NARRATIVE_MATCH||!Array.isArray(narrative.finalAnswers)||narrative.finalAnswers.length!==form.finalSlots)throw Error('请完成后面的情境题。');
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
 const summarize=r=>({slug:r.slug,explanations:r.explanations,limitedEvidence:r.limitedEvidence,limits:r.evidence.limits,support:r.support});
 return {...base,matchingVersion:isForm?form.version:model.version,primary:ranked.primary,secondary:ranked.secondary,alternatives:ranked.ranked.slice(0,3).map(r=>r.index),matchClose:ranked.close,sensitivity:{primaryChanges:changes,items:coreQuestions.length,scope:'Core items only; narrative selections held fixed'},narrative:{version:model.version,formVersion:isForm?form.version:undefined,selectionMode:single?'single':'ranked',choices:narrative.choices.map(c=>({first:c.first,second:c.second})),finalAnswers:isForm?narrative.finalAnswers.map(a=>a.kind==='task'?{kind:a.kind,first:a.first}:{kind:a.kind,choice:a.choice,...(a.questionId!==undefined?{questionId:a.questionId}:{})}):undefined,followups:accepted,close:ranked.close,scope:ranked.scope,tiePreference:ranked.productPreference?'main-six-near-score-with-evidence':isForm?'main-six-only-on-exact-equality':undefined,productPreference:ranked.productPreference,primary:summarize(ranked.ranked[0]),secondary:summarize(ranked.ranked[1]),notProbability:true}};
};
})(window);

export function scoreAnswers(answers,narrative){return window.PONY_NARRATIVE_SCORE(answers,narrative);}
