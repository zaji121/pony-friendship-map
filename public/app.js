(() => {
  let DIMS = [
    { key:'O', name:'好奇与想象', strength:'你会留意新线索、不同可能，也愿意试着理解陌生事物。', watch:'点子和路线太多时，容易迟迟不选一个开始。', practice:'挑一个最小、可在今天完成的尝试。' },
    { key:'C', name:'计划与担当', strength:'你倾向把承诺和后续步骤放在心上，让伙伴知道事情有人接住。', watch:'容易把可靠等同于“我来扛”，忘记分工也能让团队更稳。', practice:'把一件任务拆成可交接的一步，并明确邀请伙伴加入。' },
    { key:'E', name:'社交活力', strength:'你较常通过互动、分享和一起行动来建立连接。', watch:'热闹之后也需要恢复；安静不等于关系变淡。', practice:'给自己留一段不用回应任何人的休息时间。' },
    { key:'A', name:'共情与合作', strength:'你会考虑他人的处境，也愿意寻找双方都能参与的办法。', watch:'太快迁就或替人解决，可能让自己的需要退到最后。', practice:'先问对方需要什么，再说清楚自己能提供到哪里。' },
    { key:'I', name:'主动与表达', strength:'你愿意提出想法、开启行动或在关键时刻表达立场。', watch:'行动很快时，可能还没确认大家是否想要同一种帮助。', practice:'行动前用一句话确认：“这样做对你有帮助吗？”' },
    { key:'M', name:'情绪觉察', strength:'你会注意情绪和关系里的细微变化，也愿意理解它们传递的信息。', watch:'反复琢磨感受可能让你以为必须先完全想通才能行动。', practice:'给感受取个名字，再决定眼下最小的一步。' }
  ];
  const ROLE_COLORS = {
    twilight:['#8257b3','#f2eaf8'], applejack:['#b95b45','#f8eee7'], 'rainbow-dash':['#329fca','#e8f5f9'], 'pinkie-pie':['#d94e8d','#faeaf2'], fluttershy:['#d89c44','#fbf3df'], rarity:['#6862a8','#eeebf8'], starlight:['#49a88f','#e8f5f0'], spike:['#6e9f4c','#eef5e7'], luna:['#5766ab','#eceefa'], cadance:['#d65b90','#faeaf2'], discord:['#8062a5','#f1ebf6'], spitfire:['#d86a36','#fbefe6'], 'shining-armor':['#4986be','#eaf3f9'], 'big-mac':['#698b4d','#eef4e8'], maud:['#7d8379','#eef0eb'], trixie:['#637cb1','#edf0f8']
  };
  const SOCIAL_STYLES={
    warmActive:{name:'热情联结型',tagline:'愿意靠近，也愿意先迈出一步',description:'你在这次作答里既常留意关系感受，也较常选择主动互动或表达。你可能会主动邀约、回应情绪、把“我们一起做点什么”变成具体行动。',strengths:['能让伙伴感到被关注，也能推动关系有实际进展。','在需要沟通时，通常愿意开口而不是只等对方猜。','容易把关心转化成陪伴、邀请或行动。'],growth:['记得给伙伴拒绝或慢一点的空间；主动不等于替对方决定。','不必总负责维持气氛，关系也可以轮流发起。'],tips:{warmActive:'你们都愿意主动连接，合作容易升温。先确认节奏与分工，别默认对方和你同频。',warmQuiet:'给对方一些组织语言的时间。轻轻邀请即可，不要把安静解读成冷淡。',coolActive:'先确认对方想听建议还是只想被理解，再一起行动。',coolQuiet:'用低压力、清楚的邀请建立连接；给空间时，也可以约定何时再聊。'}},
    warmQuiet:{name:'温柔观察型',tagline:'先感受关系，再决定如何靠近',description:'你在这次作答里较常选择共情、合作和留意情绪的方式；相比主动带动互动，你可能更偏好先观察、认真听，再在安全的时机回应。安静不代表不在乎。',strengths:['能给对方表达空间，不急着把复杂感受变成简单结论。','擅长察觉关系气氛变化，并用细致的回应建立信任。','不靠抢话或热闹证明在场，陪伴方式更稳。'],growth:['如果希望被理解，可以把自己的需要说得更具体一点。','不要等到完全确定对方心情才开口；温和询问也能减少猜测。'],tips:{warmActive:'你们都重视关系，只是表达节奏不同。可以直接说“我想听你讲完”，也告诉对方你需要一点回应时间。',warmQuiet:'你们可能都在等对方先开口。试着明确提出一个小邀约或具体问题。',coolActive:'先约定讨论目标：先听完彼此，再决定行动，避免把差异变成对错。',coolQuiet:'从共同兴趣或具体事情开始，不必一次聊很深；有来有回地建立信任。'}},
    coolActive:{name:'直率行动型',tagline:'看到卡点，就想试着把事情往前推',description:'你在这次作答里较常选择主动互动、表达或行动；相较于先处理关系感受，你可能更习惯先把问题摆出来、找下一步。清楚直接能省去猜测，也要留意对方是否跟得上。',strengths:['遇到问题愿意发起对话，不容易让事情一直悬着。','能把模糊的困境转成具体问题或可执行的小步骤。','在团队需要有人带头时，常能提供行动能量。'],growth:['先确认对方的感受和意愿，再提出解决方案。','直接不等于尖锐；给反馈时描述行为和影响，少给人贴标签。'],tips:{warmActive:'你们都愿意推进事情。先对齐目标与分工，也给情绪和关系留一小段空间。',warmQuiet:'不要只用“那我们现在怎么做”推进；先听对方说完，再确认是否需要建议。',coolActive:'行动很快时先对齐优先级，轮流表达，避免把讨论变成抢方向盘。',coolQuiet:'给对方明确但低压力的选项，例如“现在聊五分钟，还是明天再定？”'}},
    quietIndependent:{name:'安静自主型',tagline:'先留出空间，在准备好时再建立连接',description:'你在这次作答里对主动互动与关系信号的选择相对少一些，可能更习惯独立整理、按自己的节奏回应。独处和慢热本身没有问题；如果在意某段关系，清楚表达会减少误会。',strengths:['能尊重彼此空间，不要求所有人用同一种方式相处。','较少被社交场面的即时情绪牵着走，能保留独立判断。','可以专注于共同目标或具体事务，稳定地完成自己的部分。'],growth:['提前说明自己需要独处或延迟回复，别让伙伴只能猜。','关系重要时，偶尔主动发出一个小信号：问候、确认或约时间。'],tips:{warmActive:'告诉对方你需要怎样的节奏，同时给一个明确的再联系时间，让空间不被误会成拒绝。',warmQuiet:'用简单清楚的方式互相报平安；别假设对方一定能读懂沉默。',coolActive:'把任务和关系分开谈，清晰说出边界，也确认彼此理解同一件事。',coolQuiet:'你们都能接受空间，但别让关系只剩下各自等待；约一个轻松的共同活动。'}}
  };
  const PONIES = [
    {name:'紫悦', en:'Twilight Sparkle', slug:'twilight', mark:'twilight', icon:'🔮', archetype:'把问号整理成路线的人', tagline:'用好奇心和计划，把混乱变成下一步。', description:'你擅长找线索、理解规则，再把复杂的事情整理成路线。朋友可能觉得有你在，事情会更有头绪。', strength:'你能把零散信息组织起来，也愿意认真思考接下来怎么做。', edge:'计划越做越细，开始行动反而越晚。', tip:'给准备设一个结束时间，用一小步验证你的想法。', share:'我的友谊魔法是：把一堆问号整理成下一步。', profile:[5,5,2,3,3,4]},
    {name:'苹果嘉儿', en:'Applejack', slug:'applejack', mark:'applejack', icon:'🍎', archetype:'说到就认真做到的人', tagline:'把承诺放在心上，用行动让伙伴安心。', description:'你重视承诺，也相信可靠要靠行动证明。朋友可能知道，你说会帮忙就真的会出现。', strength:'你踏实、守信，遇到麻烦时愿意留下来一起处理。', edge:'把可靠变成什么都自己扛，别人反而不知道你也需要支持。', tip:'挑一件事情，明确请伙伴一起分担。', share:'说好的事，我会记得。', profile:[2,5,2,4,4,2]},
    {name:'云宝', en:'Rainbow Dash', slug:'rainbow-dash', mark:'rainbow', icon:'🌈', archetype:'伙伴需要时会站出来的人', tagline:'有行动的勇气，也珍惜并肩作战的伙伴。', description:'你有面对挑战的冲劲，也看重伙伴间的信任。看到朋友被误解或被落下，你会认真考虑怎样出手相助。', strength:'你愿意行动、表态，也能在困难时给朋友力量。', edge:'太快替别人做决定，可能还没问清楚他们需要什么。', tip:'先问：“你想让我听你说，还是一起想办法？”', share:'伙伴需要时，我会认真考虑怎么站出来。', profile:[3,3,5,2,5,2]},
    {name:'碧琪', en:'Pinkie Pie', slug:'pinkie-pie', mark:'pinkie', icon:'🎈', archetype:'会给日常加一点快乐的人', tagline:'主动连接，把开心的小事分享出去。', description:'你愿意主动连接，也擅长把开心的小事分享出去。你能让平凡的一天多一点值得期待的东西。', strength:'你会主动创造连接，让别人感到自己被想起、被邀请。', edge:'觉得自己应该负责让所有人开心。', tip:'关心朋友之前，也看看自己今天还有多少精力。', share:'给普通的一天撒一点派对彩纸。', profile:[4,2,5,5,3,4]},
    {name:'柔柔', en:'Fluttershy', slug:'fluttershy', mark:'fluttershy', icon:'🦋', archetype:'能察觉细小变化的人', tagline:'认真倾听，也留意他人没说出口的感受。', description:'你会留意他人的感受和舒适度。认真倾听本身就是一种支持，让朋友觉得不必在你面前逞强。', strength:'你能给别人空间，让他们不必马上振作或解释清楚。', edge:'把理解别人变成替别人承担。', tip:'先问：“你希望我陪你，还是帮你处理一件具体的事？”', share:'我注意到别人没说出口的小变化。', profile:[3,4,2,5,2,5]},
    {name:'珍奇', en:'Rarity', slug:'rarity', mark:'rarity', icon:'💎', archetype:'把心意做成看得见的细节的人', tagline:'用创意、审美和体贴表达在乎。', description:'你会用创意、审美和细节表达关心，也能帮朋友发现自己的闪光点。', strength:'你擅长把抽象的心意变成别人能感受到的行动。', edge:'太想做到完美，或为了别人过度付出。', tip:'心意已经表达清楚时，允许自己停下来。', share:'我把在乎做成看得见的细节。', profile:[5,4,4,4,4,3]},
    {name:'星光熠熠', en:'Starlight Glimmer', slug:'starlight', mark:'starlight', icon:'✨', archetype:'愿意用行动重新选择的人', tagline:'从经验中学习，用新的选择建立信任。', description:'你相信人能改变，也愿意反思自己的做法。过去不是唯一的定义，今天的选择也能慢慢建立新的信任。', strength:'你能看到旧模式，也愿意练习新的做法。', edge:'犯一次错，就觉得以前的努力都不算数。', tip:'记下这周一个做得比以前更好的小地方。', share:'过去不能重写，下一步可以重选。', profile:[5,4,3,3,4,5]},
    {name:'穗龙', en:'Spike', slug:'spike', mark:'spike', icon:'🐉', archetype:'默默替团队稳住节奏的人', tagline:'记得细节、及时补位，是伙伴可靠的支点。', description:'你善于记细节、及时补位、照看重要的日常事务。你未必站在聚光灯下，却能让伙伴放心。', strength:'你让团队的日常运转更稳，也让伙伴知道有人在留心。', edge:'自己的需要总排在最后。', tip:'接受一次具体帮助，不急着马上还回去。', share:'不站在聚光灯下，也能撑住大家。', profile:[3,5,3,5,2,4]},
    {name:'露娜公主', en:'Princess Luna', slug:'luna', mark:'luna', icon:'🌙', archetype:'能认真面对复杂感受的人', tagline:'愿意理解心里的波动，也带着它继续向前。', description:'你愿意理解自己为什么在意、为什么担心。情绪觉察能帮你看见重要的事，不必因此认为自己太敏感。', strength:'你能认真面对复杂感受，不必用“没事”把它们压下去。', edge:'觉得必须完全想通，才能继续往前。', tip:'先做一件眼下能做的小事，答案可以边走边整理。', share:'带着复杂的心情，我也继续向前。', profile:[5,3,2,4,2,5]},
    {name:'音韵公主', en:'Princess Cadance', slug:'cadance', mark:'cadance', icon:'💗', archetype:'能给关系带来安稳感的人', tagline:'重视关心、承诺和彼此支持。', description:'你重视关心、承诺和彼此支持，常愿意帮大家在混乱中找回一点稳定。', strength:'你会让伙伴感受到关系里有可以依靠的地方。', edge:'为了维持和平，不说自己的界限。', tip:'练习说：“我在乎你，但这件事我现在做不到。”', share:'关心别人，也可以把自己的界限说清楚。', profile:[3,4,4,5,3,4]},
    {name:'无序', en:'Discord', slug:'discord', mark:'discord', icon:'🌀', archetype:'从奇怪角度发现新办法的人', tagline:'打破常规联想，替卡住的局面打开新门。', description:'你不总沿着常规路线思考。大家卡住时，你的联想和创意可能会打开一扇新门。', strength:'你能看到被忽略的可能性，不容易被“只能这样”限制。', edge:'点子很多，执行和收尾容易落后。', tip:'每提出一个新点子，再补一个现在能做的小步骤。', share:'路线可以奇怪，出口还是找得到。', profile:[5,1,4,2,5,3]},
    {name:'闪电天马', en:'Spitfire', slug:'spitfire', mark:'spitfire', icon:'🔥', archetype:'愿意把天赋练成实力的人', tagline:'喜欢挑战，也愿意用练习兑现潜力。', description:'你喜欢挑战，也愿意通过练习变强。你在意表现，也可以学会把注意力放在自己实际走了多远。', strength:'你愿意投入练习，面对难题时不轻易退场。', edge:'把输赢当成自我价值的判决。', tip:'给下一次挑战设一个练习目标，不只设“必须赢”。', share:'我不只想飞得快，也想知道自己怎么飞到这里。', profile:[3,5,4,2,5,2]},
    {name:'闪耀盔甲', en:'Shining Armor', slug:'shining-armor', mark:'shining', icon:'🛡️', archetype:'替重要的人守住后方的人', tagline:'看重保护和责任，在关键时刻稳住局面。', description:'你看重保护和责任，愿意在关键时候帮团队稳住局面。', strength:'你会把伙伴的安全与团队需要当回事。', edge:'觉得守护大家的人不能示弱。', tip:'把一项任务交给伙伴共同完成；信任也是守护关系的一部分。', share:'守护伙伴，也记得让伙伴守护我。', profile:[3,5,3,5,4,3]},
    {name:'大麦克', en:'Big McIntosh', slug:'big-mac', mark:'bigmac', icon:'🌾', archetype:'安静但让人放心的人', tagline:'不靠热闹证明在乎，更习惯踏实做到。', description:'你不靠热闹证明在乎，更习惯用踏实行动让伙伴知道，你会认真对待这件事。', strength:'你稳定、耐心，常能在别人需要时默默补位。', edge:'你觉得心意很明显，别人却不一定猜得到。', tip:'偶尔把心意说出来，一句“我记得你需要这个”就够。', share:'少说一点，稳稳做到。', profile:[2,5,1,4,3,2]},
    {name:'灰琪', en:'Maud Pie', slug:'maud', mark:'maud', icon:'🪨', archetype:'安静专注，把在乎放进行动的人', tagline:'话不多，却认真记住重要的人和事。', description:'你可能偏好深入钻研自己的兴趣，用具体行动表达关心。像灰琪对岩石的专注一样，外表平静也可以藏着丰富的观察和热爱。', strength:'你愿意耐心钻研，也能用稳定的行动支持重要的人。', edge:'表达太简短时，别人可能读不出你的关心。', tip:'做完一件支持对方的小事后，补一句你为什么想这样做。', share:'我的热爱很深，我的关心很稳。', profile:[4,5,1,4,2,3]},
    {name:'崔克茜', en:'Trixie Lulamoon', slug:'trixie', mark:'trixie', icon:'🎩', archetype:'希望用自己的方式被看见的人', tagline:'有表达欲和舞台感，也能练习给别人留空间。', description:'你有表达欲和舞台感，希望自己的努力得到回应。在安心的关系里，你也能学习倾听和合作，而不必收起个性。', strength:'你敢于展示个性，也能给集体带来鲜明能量。', edge:'太想证明自己时，交流容易变成输赢。', tip:'分享完自己的故事，也给别人一个完整的回合。', share:'大胆登场，也给别人留舞台。', profile:[4,2,5,2,5,4]}
  ];
  PONIES.forEach(p=>{p.name=window.CHARACTER_NAMES[p.slug]||p.name;});
  PONIES.push(...window.EXTRA_CHARACTERS);
  const LEGACY_DIMS=DIMS;
  PONIES.forEach(p=>p.legacyProfile=p.profile.slice());
  const PONY_META = {
    twilight:{species:'独角兽（后成为天角兽）',home:'小马谷 · 友谊城堡',birthday:'官方未公布',virtue:'魔法 / 友谊',markText:'粉紫色六芒星与五颗白色小星星',origin:'坎特洛特'},
    applejack:{species:'陆马',home:'小马谷 · 苹果园',birthday:'官方未公布',virtue:'诚实',markText:'三颗红苹果',origin:'苹果家族农场'},
    'rainbow-dash':{species:'飞马',home:'小马谷 · 云中城',birthday:'官方未公布',virtue:'忠诚',markText:'彩虹色闪电与云朵',origin:'云中城'},
    'pinkie-pie':{species:'陆马',home:'小马谷 · 糖块屋',birthday:'官方未公布',virtue:'欢笑',markText:'三只气球',origin:'石头农场'},
    fluttershy:{species:'飞马',home:'小马谷 · 林间小屋',birthday:'官方未公布',virtue:'善良',markText:'三只粉色蝴蝶',origin:'云中城'},
    rarity:{species:'独角兽',home:'小马谷 · 珍奇时装屋',birthday:'官方未公布',virtue:'慷慨',markText:'三颗蓝色钻石',origin:'马哈顿'},
    starlight:{species:'独角兽',home:'小马谷 · 和谐之树附近',birthday:'官方未公布',virtue:'改变与理解',markText:'粉紫色四芒星与两道蓝绿色光带',origin:'星光的家乡（Sire’s Hollow）'},
    spike:{species:'龙',home:'小马谷 · 友谊城堡',birthday:'官方未公布',virtue:'可靠与成长',markText:'没有可爱标志；以龙焰与鳞片作代表图腾',origin:'幼龙时期由紫悦照料长大'},
    luna:{species:'天角兽',home:'坎特洛特 · 皇宫',birthday:'官方未公布',virtue:'守护梦境',markText:'深色斑纹上的白色新月',origin:'马国皇室'},
    cadance:{species:'天角兽',home:'水晶帝国 · 水晶宫',birthday:'官方未公布',virtue:'爱与联结',markText:'水晶爱心',origin:'坎特洛特（曾为独角兽）'},
    discord:{species:'龙马（Draconequus）',home:'小马国 · 混沌领域',birthday:'官方未公布',virtue:'变化与混沌',markText:'没有可爱标志；以混沌漩涡作代表图腾',origin:'混沌领域'},
    spitfire:{species:'飞马',home:'小马国 · 闪电飞马队',birthday:'官方未公布',virtue:'勇气与精进',markText:'橙黄色的三道火焰',origin:'闪电飞马队'},
    'shining-armor':{species:'独角兽',home:'水晶帝国 · 水晶宫',birthday:'官方未公布',virtue:'守护与责任',markText:'蓝色盾牌、粉紫色星星与三颗蓝色小星星',origin:'坎特洛特'},
    'big-mac':{species:'陆马',home:'小马谷 · 苹果园',birthday:'官方未公布',virtue:'踏实与担当',markText:'切开的青苹果',origin:'苹果家族农场'},
    maud:{species:'陆马',home:'小马谷附近 · 地下岩洞',virtue:'专注与行动关怀',markText:'灰色的多面岩石',origin:'派家石头农场'},
    trixie:{species:'独角兽',home:'小马国 · 四处巡演',birthday:'官方未公布',virtue:'表达与自我接纳',markText:'月亮与魔法手杖',origin:'巡演马车'}
  };

  const TOASTS = ['友谊地图上，又亮起了一处新的线索。','每一次选择，都在描出你的友谊魔法。','新的旅程里，你会更看见自己的习惯。','你的伙伴画像，正在一点点成形。','再往前几步，就能看见你的友谊印记。','小马谷的朋友们，正在等你的答案。','最后一段路，看看你的选择会带你遇见谁。'];
  const $ = id => document.getElementById(id);
  window.EXTRA_CHARACTERS.forEach(p=>{PONY_META[p.slug]=p.meta;ROLE_COLORS[p.slug]=window.CHARACTER_COLORS[p.slug]||({'bon-bon':['#7d8db7','#f8f0de'],lyra:['#4faaa0','#eaf6ed']}[p.slug]);});
  PONY_META.rarity.origin='小马谷';PONY_META.cadance.origin='曾为飞马，后成为天角兽';
  function showMarkUrl(pony) { if(window.EXPANDED_ART?.[pony.slug]?.originalMark)return window.EXPANDED_ART[pony.slug].originalMark; if(window.EXTRA_CHARACTERS.includes(pony))return window.EXPANDED_ART?.[pony.slug]?.mark?'/images/show-marks/'+pony.slug+'.svg':null;return ['spike','discord'].includes(pony.slug)?null:'/images/show-marks/'+pony.slug+(pony.slug==='luna'?'.png':'.svg'); }
  function renderProfileArtwork(pony) {
    const gallery=document.createElement('div');gallery.className='profile-photo-gallery';
    [1].forEach(n=>{const figure=document.createElement('figure'),img=document.createElement('img');img.src=window.FULLBODY_ART?.[pony.slug]?.profile||window.EXPANDED_ART?.[pony.slug]?.file||'/images/ponies/'+pony.slug+'.webp?v=fullbody-20261012';img.alt=pony.name+' · 角色形象';img.className='profile-gallery-photo';img.loading='lazy';figure.append(img);gallery.append(figure);});
    $('profile-portrait').replaceChildren(gallery);
  }
  function markSvg(mark) {
    if(mark==='twilight')return '<img src="/images/show-marks/twilight.svg" alt="紫悦的可爱标志：六角星与五颗小星">';
    if(window.EXPANDED_ART?.[mark]){const source=window.EXPANDED_ART[mark];if(source.originalMark)return '<img src="'+source.originalMark+'" alt="角色标志">';if(source.mark)return '<img src="/images/show-marks/'+mark+'.svg" alt="可爱标志">';if(window.CARD_MARKS?.[mark])return window.CARD_MARKS[mark];return '<span class="species-emblem" title="种族图标，非可爱标志">'+({gilda:'🪶',gallus:'🪶',silverstream:'🪸',yona:'🏔️',ocellus:'🦋',thorax:'🦋',smolder:'🔥',ember:'🔥'}[mark]||({chrysalis:'🦋','king-sombra':'♛','flurry-heart':'❄️'}[mark])||'✦')+'</span>';}
    const shapes={
      twilight:'<path d="M50 8 58 34 84 24 67 45 91 58 63 59 68 87 50 66 32 87 37 59 9 58 33 45 16 24 42 34Z" fill="#e84a88"/><g fill="#fff"><path d="m22 17 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z"/><path d="m78 72 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z"/></g>',
      applejack:'<g fill="#d94b50"><path d="M50 31c-8-8-25-4-25 12 0 20 16 34 25 34s25-14 25-34c0-16-17-20-25-12Z"/><path d="M20 50c-8-8-17-3-17 8 0 14 12 22 19 22s18-8 18-22c0-11-12-16-20-8Z"/><path d="M80 50c-8-8-20-3-20 8 0 14 11 22 19 22s18-8 18-22c0-11-9-16-17-8Z"/></g><g fill="#69a455"><path d="M50 28c-2-13 5-20 18-20-2 12-8 19-18 20Z"/><path d="M25 46c-1-9 4-14 13-14-1 8-6 13-13 14Z"/><path d="M75 46c-1-9 4-14 13-14-1 8-6 13-13 14Z"/></g>',
      rainbow:'<path d="M18 66a32 32 0 0 1 64 0" fill="none" stroke="#f05a58" stroke-width="8"/><path d="M27 66a23 23 0 0 1 46 0" fill="none" stroke="#f3c64e" stroke-width="8"/><path d="M36 66a14 14 0 0 1 28 0" fill="none" stroke="#5cbf8a" stroke-width="8"/><path d="M15 70h70" stroke="#8b79bb" stroke-width="8" stroke-linecap="round"/>',
      pinkie:'<g stroke="#806b9d" stroke-width="3" fill="none"><path d="M35 49v39m30-47v47m17-32v32"/></g><g><circle cx="35" cy="32" r="17" fill="#f36c8f"/><circle cx="65" cy="23" r="17" fill="#f4cf55"/><circle cx="82" cy="45" r="14" fill="#83c7e8"/></g>',
      fluttershy:'<g fill="#f08ba5"><path d="M50 51C25 13 8 34 25 54 9 73 29 88 50 60Z"/><path d="M52 51c25-38 42-17 25 3 16 19-4 34-25 6Z"/><path d="M50 57c-15 18-8 31 0 34 8-3 15-16 0-34Z"/></g><path d="M50 43v45" stroke="#7e684c" stroke-width="3"/>',
      rarity:'<g fill="#62c6d0"><path d="m30 14 20 19-20 20-20-20Z"/><path d="m68 14 20 19-20 20-20-20Z"/><path d="m50 48 20 19-20 20-20-20Z"/></g><g fill="#d9fbff"><path d="m30 21 11 12-11 12Z"/><path d="m68 21 11 12-11 12Z"/></g>',
      starlight:'<path d="M50 12 59 37 85 28 67 48 87 65 60 62 52 89 44 62 17 68 36 48 18 29 43 38Z" fill="#72cfb7" stroke="#e96caa" stroke-width="6"/><path d="M13 51c9-24 25-35 45-33" fill="none" stroke="#f4c75a" stroke-width="4"/>',
      spike:'<path d="M50 15 61 28 78 24 74 42 89 53 73 63 76 81 58 76 48 91 39 75 20 78 26 60 13 48 31 40 31 22 47 30Z" fill="#8b68c5"/><path d="m52 36-13 21h11l-4 19 19-27H54l7-13Z" fill="#f7d26b"/>',
      luna:'<path d="M68 14a38 38 0 1 0 18 68A42 42 0 0 1 68 14Z" fill="#6073bd"/><path d="m30 28 3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" fill="#f1d578"/><path d="m69 61 2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" fill="#f1d578"/>',
      cadance:'<path d="M50 83 18 53C-2 28 26 12 47 34l3 4 4-4c21-22 49-6 29 19Z" fill="#ed75ae" stroke="#c84383" stroke-width="4"/><path d="m50 42 9 11-9 11-9-11Z" fill="#fff0a9"/>',
      discord:'<path d="M50 12c24 0 36 18 23 31 18 13 9 38-11 39-15 17-42 3-35-16C7 55 18 30 37 31 31 21 39 12 50 12Z" fill="#9b73c7"/><path d="M34 50c19-18 33 9 13 18 16-1 21-21 6-29" fill="none" stroke="#f5d46b" stroke-width="6" stroke-linecap="round"/>',
      spitfire:'<path d="M20 80c10-23 3-37 30-63 3 19 20 24 30 42-2 22-28 34-60 21Z" fill="#f07843"/><path d="M38 78c7-16 3-24 18-42 1 13 13 17 17 29-5 12-18 18-35 13Z" fill="#ffd45f"/>',
      shining:'<path d="M50 12 82 23v23c0 21-13 33-32 43-19-10-32-22-32-43V23Z" fill="#65a6df" stroke="#3b669b" stroke-width="5"/><g fill="#fff1a8"><path d="m50 25 5 11 12 1-9 8 3 12-11-6-11 6 3-12-9-8 12-1Z"/><circle cx="32" cy="68" r="4"/><circle cx="68" cy="68" r="4"/></g>',
      bigmac:'<path d="M52 27c-8-8-25-4-25 12 0 20 16 34 25 34s25-14 25-34c0-16-17-20-25-12Z" fill="#71a85a"/><path d="M51 25c-2-13 5-19 18-20-2 12-8 18-18 20Z" fill="#4e8e58"/><path d="m24 72 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="#edc85c"/><path d="m78 74 2 4 4 2-4 2-2 4-2-4-4-2 4-2Z" fill="#edc85c"/>',
      maud:'<g fill="#9a9b9d" stroke="#74777b" stroke-width="3"><path d="m11 69 15-26 20 7 8 27H17Z"/><path d="m42 77 13-36 24 4 12 32Z"/><path d="m30 46 12-24 18 7 8 21Z"/></g><circle cx="73" cy="25" r="10" fill="#9ccb72"/>',
      trixie:'<path d="M30 79 70 23" stroke="#d95b6c" stroke-width="7" stroke-linecap="round"/><path d="m73 13 4 9 10 2-8 7 2 10-8-5-9 5 2-10-7-7 10-2Z" fill="#f1ce66"/><path d="M35 18a17 17 0 1 0 14 28A19 19 0 0 1 35 18Z" fill="#6878c8"/>'
    };
    return `<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">${shapes[mark]||shapes.twilight}</svg>`;
  }
  function ponyImage(p, className, eager=false) {
    const img=document.createElement('img');
    img.className=className; img.src=window.EXPANDED_ART?.[p.slug]?.file||`/images/ponies/${p.slug}.webp?v=20261011-5`;
    img.alt=`${p.name}（${p.en}）`; img.decoding='async'; img.loading=eager?'eager':'lazy';
    return img;
  }
  const views = ['gate','quiz','result','shared-status'].map($);
  const questions = window.QUIZ_QUESTIONS;
  let state = { token:'', answers:Array(questions.length).fill(null), resultId:'', result:null, shared:false };
  let toastTimer;
  let quizSizeKey='',quizSizeFrame;
  let toastRevision=0;
  // Preload and decode once, before any milestone animation starts.
  const stageArtwork=new Image();
  stageArtwork.className='stage-baby';stageArtwork.alt='幼年风雪之心开心地探出脑袋';
  stageArtwork.width=46;stageArtwork.height=54;stageArtwork.decoding='async';
  stageArtwork.src='/images/flurry-stage.png';
  const stageArtworkReady=(async()=>{
    if(stageArtwork.decode)await stageArtwork.decode();
    else if(!stageArtwork.complete)await new Promise((resolve,reject)=>{stageArtwork.onload=resolve;stageArtwork.onerror=reject;});
    return stageArtwork.naturalWidth>0;
  })().catch(()=>false);
  let adminPreview=false;
  function previewRole(slug){
    const primary=PONIES.findIndex(p=>p.slug===slug);if(primary<0||(window.INACTIVE_CHARACTERS||[]).includes(slug))return;
    const scores=window.PREFERENCE_PROFILES[slug].slice();
    const secondary=PONIES.map((p,i)=>({i,d:window.PREFERENCE_PROFILES[p.slug].reduce((n,v,j)=>n+(v-scores[j])**2,0)})).filter(x=>x.i!==primary).sort((a,b)=>a.d-b.d)[0].i;
    const result=window.PONY_SCORE(questions,PONIES.map(p=>p.slug),window.PREFERENCE_PROFILES,questions.map((q,i)=>i%q[1].length));
    Object.assign(result,{primary,secondary,scores,demo:true,type:scores.map((v,i)=>['EI','SN','TF','JP'][i][v>=.5?0:1]).join('')});
    state.result=result;state.shared=true;state.resultId='';renderResult(result);showView('result');
    ['copy-link','save-image','retake'].forEach(id=>$(id).hidden=true);
    const url=new URL(location.href);url.searchParams.set('admin-preview',slug);url.searchParams.delete('r');history.replaceState(null,'',url);
    document.getElementById('admin-role-select').value=slug;
  }
  async function openAdminPreview(slug){
    if(slug==='mrs-cake')slug='dj-pon3';
    try{
      const session=JSON.parse(sessionStorage.getItem('ponyAdmin')||'null');
      if(!session?.access_token)throw new Error('请先登录管理员后台，再打开角色预览。');
      const response=await fetch(window.SITE_CONFIG.apiBase+'/admin/codes?page=0',{headers:{Authorization:'Bearer '+session.access_token}});
      if(!response.ok)throw new Error('管理员登录已过期，请返回后台重新登录。');
      adminPreview=true;
      const bar=document.createElement('aside');bar.className='admin-preview-bar';
      const label=document.createElement('label');label.textContent='管理员预览 · 非真实测评 ';
      const select=document.createElement('select');select.id='admin-role-select';select.setAttribute('aria-label','选择预览角色');
      PONIES.filter(p=>!(window.INACTIVE_CHARACTERS||[]).includes(p.slug)).forEach(p=>{const option=document.createElement('option');option.value=p.slug;option.textContent=p.name+' · '+p.en;select.append(option);});
      select.onchange=()=>previewRole(select.value);label.append(select);
      const back=document.createElement('a');back.href='admin.html';back.textContent='返回后台';bar.append(label,back);document.body.prepend(bar);document.body.classList.add('admin-preview-mode');
      previewRole(PONIES.some(p=>p.slug===slug)&&!(window.INACTIVE_CHARACTERS||[]).includes(slug)?slug:'twilight');
    }catch(error){showView('gate');updateGateError(error.message);const a=document.createElement('a');a.href='admin.html';a.textContent='打开管理员登录';$('gate').append(a);}
  }
  function scrollImmediately(top){const root=document.documentElement,previous=root.style.scrollBehavior;root.style.scrollBehavior='auto';window.scrollTo(0,top);root.style.scrollBehavior=previous;}
  function revealToast(el,duration){
    clearTimeout(toastTimer);
    toastTimer=setTimeout(()=>el.classList.remove('show'),duration);
  }
  function showView(which) { ++toastRevision;clearTimeout(toastTimer);$('toast').classList.remove('show');views.forEach(v => v.classList.toggle('hidden', v.id !== which)); scrollImmediately(0); }
  function animateToast(el,duration,revision){
    clearTimeout(toastTimer);
    el.style.transition='none';
    // Commit the hidden state first; only the whole decoded card is animated.
    requestAnimationFrame(()=>{
      if(revision!==toastRevision)return;
      el.style.transition='';
      requestAnimationFrame(()=>{
        if(revision!==toastRevision)return;
        el.classList.add('show');revealToast(el,duration);
      });
    });
  }
  function toast(message, kind='') { const revision=++toastRevision;const el=$('toast');el.textContent=message;el.className='toast '+kind;animateToast(el,2400,revision); }
  async function celebrateStage(completed) {
    const revision=++toastRevision;
    const ready=await stageArtworkReady;
    if(revision!==toastRevision||($('quiz').classList.contains('hidden')&&!state.result?.demo))return;
    const el=$('toast');
    const copy=document.createElement('div'); copy.className='stage-copy';
    const title=document.createElement('strong'); title.textContent=`已完成 ${completed} / ${questions.length} 题`;
    const text=document.createElement('span'); text.textContent=TOASTS[(completed/5-1)%TOASTS.length];
    copy.append(title,text);el.replaceChildren(...(ready?[stageArtwork,copy]:[copy]));
    el.className='toast stage-toast'+(ready?'':' stage-no-art');
    animateToast(el,3200,revision);
  }
  async function api(path, body) {
    const config=window.SITE_CONFIG||{};
    const endpoint=config.apiBase?config.apiBase.replace(/\/$/,'')+path.replace(/^\/api/,''):path;
    const headers={...(body?{'Content-Type':'application/json'}:{}),...(config.supabasePublishableKey?{apikey:config.supabasePublishableKey}:{})};
    const response=await fetch(endpoint,{method:body?'POST':'GET',headers,body:body?JSON.stringify(body):undefined});
    const data=await response.json(); if(!response.ok) throw new Error(data.error||'请求失败'); return data;
  }
  function updateGateError(message='') { $('gate-error').textContent=message; }
  async function startQuiz() {
    $('start-button').disabled=true; updateGateError('');
    try { const data=await api('/api/start',{}); state={token:data.token,answers:Array(questions.length).fill(null),resultId:'',result:null,shared:false}; sessionStorage.setItem('ponyQuiz',JSON.stringify(state)); renderQuestion(0); showView('quiz'); }
    catch(err){updateGateError(err.message);}
    finally{$('start-button').disabled=false;}
  }
  function renderQuestion(index) {
    const q=questions[index]; const selected=state.answers[index];
    $('question-count').textContent=`第 ${index+1} 题 / 共 ${questions.length} 题`;
    $('question-number').textContent=`Q${String(index+1).padStart(2,'0')}`;
    $('progress-percent').textContent=`${Math.round((index+1)/questions.length*100)}%`;
    $('progress-fill').style.width=`${(index+1)/questions.length*100}%`;
    const chapterIndex=Math.floor(index/12);
    const chapter=window.QUIZ_CHAPTERS[chapterIndex];
    $('chapter-title').textContent=`第 ${chapterIndex+1} 幕 / 共 4 幕 · ${chapter.title}`;
    $('chapter-context').textContent=chapter.context;
    $('question-text').textContent=q[0];
    $('answer-list').replaceChildren();
    q[1].forEach((option,oi)=>{
      const button=document.createElement('button'); button.type='button'; button.className='answer-option'+(selected===oi?' selected':'');
      const letter=document.createElement('span'); letter.className='answer-letter'; letter.textContent='ABCD'[oi];
      const copy=document.createElement('span'); copy.className='answer-copy'; copy.textContent=option[0];
      button.append(letter,copy); button.addEventListener('click',()=>{state.answers[index]=oi;sessionStorage.setItem('ponyQuiz',JSON.stringify(state));renderQuestion(index);}); $('answer-list').append(button);
    });
    $('prev-button').disabled=index===0;
    $('next-button').disabled=selected===null;
    $('next-button').innerHTML=index===questions.length-1?'查看我的结果 <span>✦</span>':'下一题 <span>→</span>';
    $('next-button').dataset.index=index;
    queueQuizSizing();
  }
  function queueQuizSizing(){
    cancelAnimationFrame(quizSizeFrame);
    quizSizeFrame=requestAnimationFrame(()=>{
      if($('quiz').classList.contains('hidden'))return;
      const heading=$('question-text'),copy=$('answer-list').querySelector('.answer-copy'),button=$('answer-list').querySelector('.answer-option');
      if(!copy||!button)return;
      const hs=getComputedStyle(heading),cs=getComputedStyle(copy),bs=getComputedStyle(button);
      const hw=Math.floor(heading.getBoundingClientRect().width),cw=Math.floor(copy.getBoundingClientRect().width);
      if(hw<=0||cw<=0)return;
      const key=[hw,cw,hs.font,hs.lineHeight,cs.font,cs.lineHeight,bs.paddingTop,bs.paddingBottom].join('|');
      if(key===quizSizeKey)return;
      quizSizeKey=key;
      // Reserve one shared answer height for the entire bank at this viewport.
      // Question changes and selected states must not resize the answer boxes.
      const host=document.createElement('div');
      host.setAttribute('aria-hidden','true');
      Object.assign(host.style,{position:'fixed',left:'-10000px',top:'0',visibility:'hidden',pointerEvents:'none',contain:'layout style paint'});
      const make=(text,width,style)=>{const n=document.createElement('div');n.textContent=text;Object.assign(n.style,{width:width+'px',margin:'0',padding:'0',border:'0',boxSizing:'content-box',minHeight:'0',height:'auto',whiteSpace:'normal'});for(const k of ['fontFamily','fontSize','fontWeight','fontStyle','lineHeight','letterSpacing','wordBreak','overflowWrap'])n.style[k]=style[k];host.append(n);return n;};
      const answers=questions.flatMap(q=>q[1].map(o=>make(o[0],cw,cs)));
      document.body.append(host);
      const textHeight=Math.max(...answers.map(n=>n.getBoundingClientRect().height));
      const rowHeight=Math.ceil(Math.max(textHeight+parseFloat(cs.paddingTop||0)+parseFloat(cs.paddingBottom||0),28)+parseFloat(bs.paddingTop)+parseFloat(bs.paddingBottom)+parseFloat(bs.borderTopWidth)+parseFloat(bs.borderBottomWidth));
      host.remove();
      $('quiz').style.setProperty('--quiz-stem-height','0px');
      $('quiz').style.setProperty('--quiz-answer-height',rowHeight+'px');
    });
  }
  window.addEventListener('resize',queueQuizSizing,{passive:true});
  document.fonts?.ready.then(()=>{quizSizeKey='';queueQuizSizing();});
  if('ResizeObserver' in window)new ResizeObserver(queueQuizSizing).observe($('question-text'));
  function normalizedVector(values) { const mean=values.reduce((a,b)=>a+b,0)/values.length; const sd=Math.sqrt(values.reduce((a,b)=>a+(b-mean)**2,0)/values.length)||1; return values.map(v=>(v-mean)/sd); }
  function calculateResult() {
    return window.PONY_SCORE(questions,PONIES.map(p=>p.slug),window.PREFERENCE_PROFILES,state.answers);
  }
  async function finishQuiz() {
    $('next-button').disabled=true; $('next-button').textContent='正在生成友谊印记…';
    const result=calculateResult();
    try { const saved=await api('/api/complete',{token:state.token,result}); state.resultId=saved.id; state.result=result; state.shared=false; sessionStorage.removeItem('ponyQuiz');history.replaceState(null,'',resultLink(saved.id)); renderResult(result); showView('result'); toast('你的友谊印记正在显现…'); }
    catch(err){ $('next-button').disabled=false; toast(err.message,'error'); renderQuestion(questions.length-1); }
  }
  function renderResult(result) {
    const modern=['four-preferences-v1','four-preferences-v2'].includes(result.model);
    DIMS=modern?window.PREFERENCE_DIMS:LEGACY_DIMS;
    PONIES.forEach(p=>p.profile=modern?window.PREFERENCE_PROFILES[p.slug]:p.legacyProfile);
    $('dimension-cards').parentElement.querySelector('h2').textContent=modern?'四种偏好方式拆解':'六种友谊方式拆解';
    const main=PONIES[result.primary], second=PONIES[result.secondary];

    const [accent,soft]=ROLE_COLORS[main.slug]||ROLE_COLORS.twilight;
    const resultView=$('result');resultView.style.setProperty('--role-accent',accent);resultView.style.setProperty('--role-soft',soft);
    $('result-title').textContent=main.name; $('result-title-en').textContent=main.en; $('result-tagline').textContent=result.demo?'示例结果 · 使用演示作答生成，并非你的个人结果':main.tagline;
    $('result-mark').innerHTML=markSvg(main.mark);
    const portrait=$('result-portrait'); portrait.replaceChildren(ponyImage(main,'pony-photo',true));
    portrait.setAttribute('aria-label',`${main.name} ${main.en} 角色形象`);
    $('result-heading').textContent=main.archetype; $('result-description').textContent=main.description;
    $('result-strength').textContent=main.strength; $('result-edge').textContent=main.edge; $('result-tip').textContent=main.tip;
    const scores=result.scores||DIMS.map((_,i)=>(result.counts[i]||0)/Math.max(1,(result.exposure||[])[i]||1));
    $('primary-duo-art').replaceChildren(ponyImage(main,'duo-pony-art'));
    $('primary-duo-name').textContent=main.name;$('primary-duo-en').textContent=main.en;
    $('secondary-duo-art').replaceChildren(ponyImage(second,'duo-pony-art'));
    $('secondary-name').textContent=second.name;$('secondary-english').textContent=second.en;$('secondary-tagline').textContent=second.tagline;
    const ranked=DIMS.map((d,i)=>({d,i,value:Number(scores[i])||0})).sort((a,b)=>b.value-a.value);
    const userTop=ranked.slice(0,3).map(x=>x.i);
    const explainMatch=(pony,limit=2)=>{
      const ponyTop=pony.profile.map((value,i)=>({i,value})).sort((a,b)=>b.value-a.value).slice(0,3).map(x=>x.i);
      const shared=userTop.filter(i=>ponyTop.includes(i));
      const selected=(shared.length?shared:userTop).slice(0,limit);
      return {selected,ponyTop,labels:selected.map(i=>DIMS[i].name)};
    };
    const primaryMatch=explainMatch(main),secondaryMatch=explainMatch(second);
    $('match-reading').textContent=`这次与你最接近的，是${main.name}式的应对画像。你的作答中「${primaryMatch.labels.join('、')}」相对更常出现；这些选择和${main.name}的角色侧写相契合。它描述的是你在这组情境中的偏好，不是固定性格。`;
    $('primary-duo-why').textContent=`你更常选择${primaryMatch.labels.join('、')}相关的做法，这与${main.name}画像里最突出的友谊方式相近。`;
    $('secondary-why').textContent=`它排在第二，是因为你的「${secondaryMatch.labels.join('、')}」倾向也能在${second.name}的角色画像里找到呼应。把它当成你在不同关系或情境下会调用的另一种方式。`;
    const contrast=second.profile.map((value,i)=>({i,gap:value-main.profile[i]})).sort((a,b)=>b.gap-a.gap)[0];
    const sideTrait=DIMS[contrast.i].name;
    const readings=[
      ['为什么也像'+second.name,`你的本次选择中，「${secondaryMatch.labels.join('、')}」与${second.name}的角色侧写有呼应。${second.description} 这让它成为你最接近的第二种表达方式。`],
      ['与主角色的不同侧重',contrast.gap>0?`在设定的角色画像里，${second.name}比${main.name}更侧重「${sideTrait}」。${main.name}的关键词是“${main.archetype}”，${second.name}则是“${second.archetype}”。两者放在一起，可以帮助你理解同一种关心或行动如何有不同的表达。`:`${main.name}与${second.name}有不少相近的友谊方式，但角色故事各有侧重：前者是“${main.archetype}”，后者是“${second.archetype}”。你可以用这两个角度回看自己的选择。`],
      ['给这一面的成长提醒',`值得留意的情形：${second.edge} 可以尝试：${second.tip}`]
    ];
    $('secondary-reading').replaceChildren(...readings.map(([title,text])=>{const card=document.createElement('article'),heading=document.createElement('h3'),body=document.createElement('p');heading.textContent=title;body.textContent=text;card.append(heading,body);return card;}));
    $('primary-duo-tags').replaceChildren(...primaryMatch.labels.map(label=>makeTraitTag(label)));
    $('secondary-tags').replaceChildren(...secondaryMatch.labels.map(label=>makeTraitTag(label)));
    const meta=PONY_META[main.slug];$('profile-role').textContent=`${meta.virtue} · ${meta.species}`;
    renderProfileArtwork(main);
    const facts=[['种族',meta.species],['常住地',meta.home],['故乡 / 来处',meta.origin],['兴趣爱好',window.CHARACTER_HOBBIES?.[main.slug]||'剧中未明确展示个人爱好'],['可爱标志',meta.markText],['友谊象征',meta.virtue]];
    $('profile-facts').replaceChildren(...facts.map(([label,value])=>{const row=document.createElement('div');row.className='profile-fact';const k=document.createElement('span');k.textContent=label;const v=document.createElement('strong');v.textContent=value;row.append(k,v);if(label==='可爱标志'){const url=showMarkUrl(main);if(url){const img=document.createElement('img');img.src=url;img.alt=main.name+'的可爱标志（动画版样式）';img.className='profile-original-mark';row.append(img);row.classList.add('profile-mark-fact');}}return row;}));
    const topNames=ranked.slice(0,2).map(x=>x.d.name).join('、'),low=ranked[ranked.length-1].d.name;
    $('profile-reading').textContent=`角色原型：${main.archetype}。在本次选择里，${topNames}相关做法出现得更频繁；${low}相关选项相对少一些，这只说明它不是你这次最常采用的路径，不代表你缺少这项能力。${main.description}`;
    renderRadar(scores,main);renderDimensionCards(ranked);renderSocialStyle(scores,main);window.PONY_CAREERS.render(main,scores,DIMS,result);
    if(modern){
      document.querySelector('.radar-card .profile-sub').textContent='四个连续维度 · 八个方向 · 对向两端合计100%';
      document.querySelector('.radar-card .card-label').textContent='YOUR FOUR PREFERENCES';
      document.querySelector('.social-method').textContent='本区使用 E/I 的交流偏好与 T/F 的决策偏好组织讨论建议。两条轴是本网站的展示方式，不是人际环形模型量表或社交能力分数。';
      document.querySelector('.social-axis-y').textContent='情感 F 决策偏好';
      document.querySelector('.social-axis-x').textContent='外向 E 交流偏好';
      $('social-warmth-score').textContent='F 端作答 '+Math.round((1-scores[2])*100)+'%';
      $('social-agency-score').textContent='E 端作答 '+Math.round(scores[0]*100)+'%';
      $('social-style-kicker').textContent='交流偏好 × 决策偏好 · 情境建议';
      const labels=DIMS.map((d,i)=>Math.abs(scores[i]-.5)<.1?d.key+' 偏好接近':d.key[scores[i]>=.5?0:1]+' 倾向');
      $('result-tagline').textContent='';$('result-tagline').classList.add('hidden');
      $('match-reading').textContent='这次的四维偏好：'+result.type+'。与你最接近的伙伴是'+main.name+'。';
      $('profile-reading').textContent=main.description;
      $('primary-duo-why').textContent='你的四维偏好与'+main.name+'的故事侧写距离最近。'+main.description;
      $('secondary-why').textContent='第二接近的侧写是'+second.name+'。'+second.description+' 排序相近时，小幅答题变化可能交换主副角色。';
      $('social-style-description').textContent='本次你更偏向'+(scores[0]>=.5?'在交流中整理想法':'先独自整理再交流')+'，决定时较常先考虑'+(scores[2]>=.5?'逻辑和一致标准':'个人价值和人的处境')+'。这两个偏好用于组织本区建议，不是独立的社交能力量表。';
      $('primary-duo-tags').replaceChildren(...labels.map(makeTraitTag));
      $('secondary-tags').replaceChildren(...DIMS.map((d,i)=>makeTraitTag(d.key[second.profile[i]>=.5?0:1]+' · 角色侧写')));
      $('secondary-reading').children[0].querySelector('p').textContent='四个维度采用等权平方距离比较，未使用职业、能力或临床推断。'+second.description;
      const biggest=DIMS.map((d,i)=>({d,i,gap:Math.abs(second.profile[i]-main.profile[i])})).sort((a,b)=>b.gap-a.gap)[0];
      $('secondary-reading').children[1].querySelector('p').textContent=''+main.name+'：'+main.archetype+'；'+second.name+'：'+second.archetype+'。'+(window.CHARACTER_STORIES[second.slug]?.[1]||second.description);
    }


    renderCharacters(result); bindTabs(); window.renderResultExperience?.(result,main,second); window.designFriendshipReport?.(result,main,second);
  }
  function makeTraitTag(label){const tag=document.createElement('span');tag.className='duo-tag';tag.textContent=label;return tag;}
  function renderDimensionCards(ranked){
    const rankByIndex=Object.fromEntries(ranked.map((entry,position)=>[entry.i,position]));
    const host=$('dimension-cards');host.replaceChildren(...DIMS.map((d,i)=>{
      const entry=ranked.find(x=>x.i===i),rank=rankByIndex[i],card=document.createElement('article');card.className='dimension-card';
      const top=document.createElement('div');top.className='dimension-card-top';const name=document.createElement('h3');name.textContent=d.name;const badge=document.createElement('span');badge.className='dimension-rank';badge.textContent=rank===0?'本次最常用':rank===1?'常用倾向':rank===DIMS.length-1?'较少选择':'也会调用';top.append(name,badge);
      const meter=document.createElement('div');meter.className='dimension-meter';const fill=document.createElement('i');fill.style.width=`${Math.max(4,Math.round(entry.value*100))}%`;meter.append(fill);
      const value=document.createElement('div');value.className='dimension-rate';value.textContent=DIMS.length===4?`本次作答：${d.key[0]} ${Math.round(entry.value*100)}% / ${d.key[1]} ${Math.round((1-entry.value)*100)}%`:`选择频率 ${Math.round(entry.value*100)}%`;
      const strength=document.createElement('p');const pole=DIMS.length===4&&Math.abs(entry.value-.5)>=.1?d.poles?.[entry.value>=.5?0:1]:null;strength.textContent=pole?.[0]||d.strength;const watch=document.createElement('p');watch.className='dimension-watch';watch.textContent=`留意：${pole?.[1]||d.watch}`;
      if(DIMS.length===4){badge.textContent=Math.abs(entry.value-.5)<.1?'两端偏好接近':d.key[entry.value>=.5?0:1]+' 端更常选择';}
      card.append(top,meter,value,strength,watch);return card;
    }));
  }
  function renderSocialStyle(scores,main){
    const mean=scores.reduce((sum,value)=>sum+(Number(value)||0),0)/scores.length;
    const relationship=DIMS.length===4?1-scores[2]:(scores[3]+scores[5])/2;
    const expression=DIMS.length===4?scores[0]:(scores[2]+scores[4])/2;
    const warm=relationship>=(DIMS.length===4?.5:mean),active=expression>=(DIMS.length===4?.5:mean);
    const key=warm?(active?'warmActive':'warmQuiet'):(active?'coolActive':'quietIndependent');
    const modern=DIMS.length===4;
    const style=modern?{name:`${active?'交流梳理':'独立整理'} · ${warm?'价值权衡':'原则权衡'}`,description:`你在本次选择中更常${active?'通过交谈整理思路':'先独立整理思路，再参与交流'}；做决定时更常${warm?'权衡价值与相关人的处境':'比较一致的原则与判断依据'}。`,strengths:[active?'愿意在讨论中交换想法，帮助大家看见不同思路。':'留出思考时间，带着整理过的想法参与讨论。',warm?'愿意明确讨论相关人的需求与价值。':'愿意明确讨论标准、证据与一致性。'],growth:['先确认对方希望获得倾听、建议，还是一起比较方案。','同时问清判断依据与对方在意的事情。'],tips:{warmActive:'边聊边想，也确认彼此重要的价值与需求。',warmQuiet:'给伙伴组织语言的时间，再邀请他们说明在意的事情。',coolActive:'明确讨论目标和判断标准，也核对彼此感受。',coolQuiet:'提前提供具体问题和信息，让伙伴整理后再回应。'}}:SOCIAL_STYLES[key];
    $('social-style-kicker').textContent=modern?'本次作答中的交流与判断偏好':`${warm?'关系关注偏高':'关系关注相对较少'} · ${active?'主动表达偏高':'主动表达相对较少'}`;
    $('social-style-name').textContent=style.name;$('social-style-description').textContent=style.description;
    $('social-warmth-score').textContent=`关系关注 ${Math.round(relationship*100)}%`;
    $('social-agency-score').textContent=`主动表达 ${Math.round(expression*100)}%`;
    $('social-dot').innerHTML=markSvg(main.mark);$('social-dot').setAttribute('aria-label',main.name+'的可爱标志，标记你的社交风格');
    $('social-dot').style.left=active?'72%':'28%';$('social-dot').style.top=warm?'28%':'72%';
    const fillList=(id,items)=>$(id).replaceChildren(...items.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
    fillList('social-strengths',style.strengths);fillList('social-growth',style.growth);
    if(modern){document.querySelectorAll('.social-q').forEach((el,i)=>el.textContent=['独立 · 价值','交流 · 价值','独立 · 原则','交流 · 原则'][i]);}
    const tipLabels=modern?{warmActive:'交流 · 价值',warmQuiet:'独立 · 价值',coolActive:'交流 · 原则',coolQuiet:'独立 · 原则',quietIndependent:'独立 · 原则'}:{warmActive:'热情联结型',warmQuiet:'温柔观察型',coolActive:'直率行动型',coolQuiet:'安静自主型',quietIndependent:'安静自主型'};
    $('social-partner-tips').replaceChildren(...Object.entries(style.tips).map(([partnerKey,text])=>{const item=document.createElement('article');const title=document.createElement('strong');title.textContent=tipLabels[partnerKey];const copy=document.createElement('p');copy.textContent=text;item.append(title,copy);return item;}));
  }
  function renderCharacters(result) {
    const grid=$('character-grid');grid.replaceChildren();const detail=$('character-detail');
    let dialog=document.getElementById('character-dialog');
    if(!dialog){
      dialog=document.createElement('dialog');dialog.id='character-dialog';dialog.className='character-dialog';
      dialog.setAttribute('aria-label','角色介绍');
      const close=document.createElement('button');close.type='button';close.className='character-dialog-close';close.textContent='×';close.setAttribute('aria-label','关闭角色介绍');
      close.onclick=()=>dialog.close();dialog.append(close,detail);document.body.append(dialog);
      dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
      dialog.addEventListener('close',()=>{document.body.style.overflow=dialog.dataset.previousOverflow||'';});
    }
    const order=["twilight","applejack","rainbow-dash","pinkie-pie","fluttershy","rarity","spike","starlight","sunset-shimmer","apple-bloom","sweetie-belle","scootaloo","diamond-tiara","cozy-glow","luna","celestia","discord","cadance","trixie","big-mac","shining-armor","zecora","granny-smith","sunburst","maud","pear-butter","bright-mac","bon-bon","lyra","dj-pon3","sugar-belle","daring-do","cheese-sandwich","filthy-rich","gilda","chrysalis","king-sombra","nightmare-moon","daybreaker","mistmane"];
    order.map(slug=>({p:PONIES.find(p=>p.slug===slug),i:PONIES.findIndex(p=>p.slug===slug)})).filter(x=>x.p).forEach(({p,i})=>{const card=document.createElement('button');card.type='button';card.className='character-card'+(i===result.primary?' is-primary':i===result.secondary?' is-secondary':'');const colors=ROLE_COLORS[p.slug]||ROLE_COLORS.twilight;card.style.setProperty('--pony-accent',colors[0]);card.style.setProperty('--pony-soft',colors[1]);
      if(p.slug==='flurry-heart'){const note=document.createElement('span');note.className='character-en';note.textContent='成熟形象 · 同人演绎｜仅供角色展示';card.append(note);}
      const art=document.createElement('span');art.className='character-art-mini';art.append(ponyImage(p,'pony-photo-mini'));const icon=document.createElement('span');icon.className='character-mark';icon.innerHTML=markSvg(p.mark);const name=document.createElement('span');name.className='character-name';name.textContent=p.name;const en=document.createElement('span');en.className='character-en';en.textContent=p.en;const desc=document.createElement('span');desc.className='character-archetype';desc.textContent=p.archetype;card.append(art,icon,name,en,desc);
      if(i===result.primary||i===result.secondary){const badge=document.createElement('span');badge.className='character-badge';badge.textContent=i===result.primary?'你的主角色':'你的副角色';card.append(badge);}
      card.addEventListener('click',()=>{if(adminPreview){previewRole(p.slug);return;}detail.classList.remove('hidden');const [accent,soft]=ROLE_COLORS[p.slug]||ROLE_COLORS.twilight;detail.style.setProperty('--pony-accent',accent);detail.style.setProperty('--pony-soft',soft);detail.replaceChildren();const artPane=document.createElement('span');artPane.className='character-detail-art';artPane.append(ponyImage(p,'pony-photo-detail'));const copy=document.createElement('span');copy.className='character-detail-copy';const strong=document.createElement('strong');strong.textContent=`${p.name} · ${p.en}｜${p.archetype}`;const text=document.createElement('span');text.textContent=p.description;const meta=PONY_META[p.slug];const facts=document.createElement('span');facts.className='detail-facts';facts.textContent=`${meta.species}｜友谊象征：${meta.virtue}｜可爱标志：${meta.markText}｜常住地：${meta.home}`;const traits=document.createElement('span');traits.className='detail-traits';traits.textContent=`画像关键词：${p.profile.map((value,index)=>({value,index})).sort((a,b)=>b.value-a.value).slice(0,3).map(item=>DIMS[item.index].name).join('、')}`;const strength=document.createElement('span');strength.className='detail-insight';strength.textContent=`闪光点：${p.strength}`;const edge=document.createElement('span');edge.className='detail-insight';edge.textContent=`压力提醒：${p.edge}`;const save=document.createElement('span');save.className='detail-insight';save.textContent=`成长小练习：${p.tip}`;copy.append(strong,text,facts,traits,strength,edge,save);detail.append(artPane,copy);dialog.setAttribute('aria-label',p.name+'的角色介绍');if(!dialog.open){dialog.dataset.previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.showModal();}});grid.append(card);
    });
  }
  function renderRadar(scores,main) {
    if(DIMS.length===4){
      const ends=[...DIMS.map((d,i)=>({d,i,pole:0,value:Number(scores[i])})),...DIMS.map((d,i)=>({d,i,pole:1,value:1-Number(scores[i])}))];
      const cx=360,cy=270,r=170;
      const xy=(level,i)=>{const a=(-90+i*45)*Math.PI/180;return [cx+Math.cos(a)*r*level,cy+Math.sin(a)*r*level];};
      const points=level=>ends.map((_,i)=>xy(level,i).join(',')).join(' ');
      const rings=[.25,.5,.75,1].map(v=>`<polygon points="${points(v)}"/>`).join('');
      const axes=ends.slice(0,4).map((_,i)=>{const a=xy(1,i),b=xy(1,i+4);return `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}"/>`;}).join('');
      const labels=ends.map((e,i)=>{const [x,y]=xy(1.27,i);const anchor=Math.abs(x-cx)<1?'middle':x>cx?'start':'end';return `<text class="radar-axis-label" x="${x}" y="${y}" text-anchor="${anchor}">${e.d.worldPoles[e.pole]} ${e.d.key[e.pole]}<tspan x="${x}" dy="19">${e.d.name} · ${Math.round(e.value*100)}%</tspan></text>`;}).join('');
      const url=showMarkUrl(main);const avatar=url?`<image href="${url}" x="18" y="14" width="58" height="58"/><text x="47" y="89" text-anchor="middle" class="radar-avatar-name">${main.name}</text>`:'';
      const polygon=ends.map((e,i)=>xy(e.value,i).join(',')).join(' ');
      const dots=ends.map((e,i)=>{const [x,y]=xy(e.value,i);return `<circle cx="${x}" cy="${y}" r="5"/>`;}).join('');
      $('trait-radar').innerHTML=`<svg viewBox="0 0 720 560" role="img" aria-label="四个连续偏好维度，八个方向。${ends.map(e=>e.d.worldPoles[e.pole]+e.d.key[e.pole]+Math.round(e.value*100)+'%').join('，')}">${avatar}<g class="radar-grid">${rings}${axes}</g><polygon class="radar-area" points="${polygon}"/><g class="radar-dots">${dots}</g>${labels}</svg>`;
      const legend=$('trait-legend');legend.replaceChildren(...DIMS.map((d,i)=>{const item=document.createElement('div');item.className='trait-legend-item';const title=document.createElement('span');title.textContent=d.name+'（'+d.mbtiName+'）';const value=document.createElement('strong');value.textContent=`${d.worldPoles[0]} ${d.key[0]} ${Math.round(scores[i]*100)}% ↔ ${d.worldPoles[1]} ${d.key[1]} ${Math.round((1-scores[i])*100)}%`;item.append(title,value);return item;}));
      let note=$('radar-reading-note');if(!note){note=document.createElement('p');note.id='radar-reading-note';note.className='radar-reading-note';legend.after(note);}note.textContent='每条直径是一个连续维度：E↔I、S↔N、T↔F、J↔P。对向两端合计100%；各端按本次作答比例绘制，中心为0%，外圈为100%，两端各50%表示均衡。八个方向不代表八种独立能力。';
      return;
    }
    const vals=scores.map(v=>Number(v)||0),lo=Math.min(...vals),hi=Math.max(...vals);
    const chartReference=DIMS.length===4?1:.45;
    const modern=DIMS.length===4;
    const scaled=vals.map(v=>modern?Math.abs(v-.5)*2:Math.max(.025,Math.min(1,v/chartReference)));
    const cx=DIMS.length===4?320:240,cy=195,r=140,point=(level,i)=>{const a=(-90+i*360/DIMS.length)*Math.PI/180;return `${(cx+Math.cos(a)*r*level).toFixed(1)},${(cy+Math.sin(a)*r*level).toFixed(1)}`;};
    const rings=[.25,.5,.75,1].map(level=>`<polygon points="${DIMS.map((_,i)=>point(level,i)).join(' ')}"/>`).join('');
    const axes=DIMS.map((_,i)=>`<line x1="${cx}" y1="${cy}" x2="${point(1,i).replace(',','" y2="')}"/>`).join('');
    const polygon=DIMS.map((_,i)=>point(scaled[i],i)).join(' ');
    const labels=DIMS.map((d,i)=>{const a=(-90+i*360/DIMS.length)*Math.PI/180,x=cx+Math.cos(a)*172,y=cy+Math.sin(a)*172;const anchor=Math.abs(x-cx)<1?'middle':x>cx?'start':'end';const pole=vals[i]>=.5?0:1;return `<text class="radar-axis-label" x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anchor}">${d.name}${modern?' · '+d.key:''}${modern?`<tspan x="${x.toFixed(1)}" dy="19">${Math.abs(vals[i]-.5)<.1?'两端接近':d.worldPoles[pole]+' '+d.key[pole]}</tspan>`:''}</text>`;}).join('');
    const markUrl=showMarkUrl(main);const avatar=markUrl?`<g aria-label="${main.name}的可爱标志"><image href="${markUrl}" x="12" y="8" width="62" height="62" preserveAspectRatio="xMidYMid meet"/><text x="43" y="86" text-anchor="middle" class="radar-avatar-name">${main.name}</text></g>`:`<g aria-label="${main.name}代表图标"><foreignObject x="12" y="8" width="62" height="62"><div xmlns="http://www.w3.org/1999/xhtml">${markSvg(main.mark)}</div></foreignObject></g>`;
    $('trait-radar').innerHTML=`<svg viewBox="0 0 ${DIMS.length===4?640:480} 390" role="img" aria-label="${main.name}的${DIMS.length}维画像：${DIMS.map((d,i)=>d.name+(modern?'，'+d.key[vals[i]>=.5?0:1]+'端，偏好差异'+Math.round(scaled[i]*100)+'%':Math.round(vals[i]*100)+'%')).join('，')}">${avatar}<g class="radar-grid">${rings}${axes}</g><polygon class="radar-area" points="${polygon}"/><g class="radar-dots">${DIMS.map((_,i)=>`<circle cx="${point(scaled[i],i).split(',')[0]}" cy="${point(scaled[i],i).split(',')[1]}" r="6"/>`).join('')}</g><g>${labels}</g></svg>`;
    const legend=$('trait-legend');legend.replaceChildren(...DIMS.map((d,i)=>{const item=document.createElement('div');item.className='trait-legend-item';const name=document.createElement('span');name.textContent=modern?d.name+'（'+d.mbtiName+'）':d.name;const pct=document.createElement('strong');pct.textContent=modern?`${d.worldPoles[0]} ${d.key[0]} ${Math.round(vals[i]*100)}% / ${d.worldPoles[1]} ${d.key[1]} ${Math.round((1-vals[i])*100)}%`:`${Math.round(vals[i]*100)}%`;item.append(name,pct);return item;}));
    if(modern){$('trait-radar').parentElement.querySelector('.profile-sub').textContent='四个连续维度 · 八个方向 · 对向两端合计100%';let note=$('radar-reading-note');if(!note){note=document.createElement('p');note.id='radar-reading-note';note.className='radar-reading-note';legend.after(note);}note.textContent='中心表示两端均衡，外圈表示本次选择明显偏向标注的一端。图形大小不是能力、友谊水平或人格优劣；下方保留两端完整比例。';}
  }
  function bindTabs() {
    document.querySelectorAll('.result-tab').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.result-tab').forEach(b=>b.classList.toggle('active',b===btn));$('you-panel').classList.toggle('hidden',btn.dataset.tab!=='you');$('all-panel').classList.toggle('hidden',btn.dataset.tab!=='all');});
  }
  function resultLink(id){
    const url=new URL(window.SITE_CONFIG?.basePath||'/',location.origin);
    url.searchParams.set('r',id);url.hash='result='+encodeURIComponent(id);return url.href;
  }
  async function ensureResultLink() {
    if(state.result?.demo)throw new Error('管理员示例不能作为个人结果分享。');
    if(!state.result)throw new Error('还没有可分享的测评结果。');
    if(!state.resultId){const saved=await api('/api/complete',{token:state.token,result:state.result});if(!saved.id)throw new Error('结果尚未保存，请稍后再试。');state.resultId=saved.id;}
    const verified=await api('/api/result/'+encodeURIComponent(state.resultId));
    if(!Number.isInteger(verified.primary)||!PONIES[verified.primary])throw new Error('结果暂时无法读取，请稍后再试。');
    const url=resultLink(state.resultId);history.replaceState(null,'',url);return url;
  }
  async function copyLink(){
    let link,ready;
    try{
      ready=ensureResultLink().then(value=>(link=value));
      if(navigator.clipboard?.write&&window.ClipboardItem){
        await navigator.clipboard.write([new ClipboardItem({'text/plain':ready.then(value=>new Blob([value],{type:'text/plain'}))})]);
      }else{link=await ready;await navigator.clipboard.writeText(link);}
      toast('已复制这份结果链接，打开即可查看，无需重新答题。','success');
    }catch(err){
      if(!link&&ready){try{link=await ready;}catch{}}
      if(link)window.prompt('请复制这份结果链接，打开即可查看：',link);
      else toast(err.message||'结果链接暂时无法复制，请重试。','error');
    }
  }
  function loadPonyAsset(p){return new Promise(resolve=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>resolve(null);img.src=window.EXPANDED_ART?.[p.slug]?.file||`/images/ponies/${p.slug}.webp?v=20261011-5`;});}
  function wrapText(ctx,text,x,y,maxWidth,lineHeight,maxLines=99){let line='',lines=0;for(const ch of [...text]){const test=line+ch;if(ctx.measureText(test).width>maxWidth&&line){ctx.fillText(line,x,y);line=ch;y+=lineHeight;lines++;if(lines>=maxLines)return y;}else line=test;}if(line)ctx.fillText(line,x,y);return y+lineHeight;}
  async function buildPoster() {
    const result=state.result, pony=PONIES[result.primary], side=PONIES[result.secondary];
    const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=3900;const c=canvas.getContext('2d');
    const [theme]=ROLE_COLORS[pony.slug]||ROLE_COLORS.twilight;
    const bg=c.createLinearGradient(0,0,1080,2300);bg.addColorStop(0,'#f4eff8');bg.addColorStop(.55,'#fffaf0');bg.addColorStop(1,'#e9f0eb');c.fillStyle=bg;c.fillRect(0,0,1080,canvas.height);
    c.fillStyle='#d8c9e6';c.beginPath();c.arc(920,100,230,0,Math.PI*2);c.fill();c.globalAlpha=.32;c.fillStyle='#f1d893';c.beginPath();c.arc(120,650,190,0,Math.PI*2);c.fill();c.globalAlpha=1;
    c.fillStyle='#7a698d';c.font='600 28px sans-serif';c.textAlign='center';c.fillText('小马谷友谊地图  ·  FRIENDSHIP MAP',540,96);
    c.fillStyle=theme;c.font='700 70px sans-serif';c.fillText(pony.name,540,188);
    c.fillStyle='#9385a4';c.font='500 27px sans-serif';c.fillText(pony.en,540,230);
    c.fillStyle='#806f92';c.font='30px sans-serif';c.fillText('你的友谊魔法',540,270);
    const portrait=await loadPonyAsset(pony);
    c.save();c.beginPath();c.arc(540,430,146,0,Math.PI*2);c.fillStyle='rgba(255,253,249,.72)';c.fill();c.strokeStyle='#e4d9e8';c.lineWidth=2;c.stroke();c.restore();
    if(portrait){const scale=Math.min(270/portrait.width,280/portrait.height);const w=portrait.width*scale,h=portrait.height*scale;c.drawImage(portrait,540-w/2,430-h/2,w,h);}
    c.fillStyle='#332e40';c.font='600 40px sans-serif';wrapText(c,pony.archetype,540,625,900,56,2);
    c.fillStyle='#5f5a6b';c.font='29px sans-serif';c.textAlign='left';wrapText(c,pony.description,90,755,900,49,4);
    c.fillStyle='#705d89';c.font='700 30px sans-serif';c.fillText('你的闪光点',90,980);
    c.fillStyle='#625d6d';c.font='28px sans-serif';wrapText(c,pony.strength,90,1025,900,47,3);
    c.fillStyle='#a17d58';c.font='700 30px sans-serif';c.fillText('压力下的小提醒',90,1190);
    c.fillStyle='#625d6d';c.font='28px sans-serif';wrapText(c,pony.edge,90,1235,900,47,3);
    c.fillStyle='#5e816d';c.font='700 30px sans-serif';c.fillText('你的友谊表达',90,1400);
    c.fillStyle='#625d6d';c.font='28px sans-serif';wrapText(c,pony.share,90,1445,900,47,3);
    c.textAlign='center';c.fillStyle=theme;c.font='700 30px sans-serif';c.fillText('主角色与副角色 · 两种友谊方式',540,1640);
    const sidePortrait=await loadPonyAsset(side);
    if(portrait){const scale=Math.min(150/portrait.width,150/portrait.height);c.drawImage(portrait,255-portrait.width*scale/2,1740-portrait.height*scale/2,portrait.width*scale,portrait.height*scale);}
    if(sidePortrait){const scale=Math.min(150/sidePortrait.width,150/sidePortrait.height);c.drawImage(sidePortrait,825-sidePortrait.width*scale/2,1740-sidePortrait.height*scale/2,sidePortrait.width*scale,sidePortrait.height*scale);}
    c.fillStyle='#5b4b73';c.font='700 29px sans-serif';c.fillText(`主角色：${pony.name}`,255,1840);c.fillText(`副角色：${side.name}`,825,1840);
    c.fillStyle='#847d8c';c.font='22px sans-serif';c.fillText(pony.tagline,255,1882);c.fillText(side.tagline,825,1882);
    const values=result.scores||DIMS.map((_,i)=>(result.counts[i]||0)/Math.max(1,(result.exposure||[])[i]||1));
    const personalMean=values.reduce((sum,value)=>sum+value,0)/values.length;
    const modern=values.length===4;const warm=modern?values[2]<=.5:(values[3]+values[5])/2>=personalMean,active=modern?values[0]>=.5:(values[2]+values[4])/2>=personalMean;
    const style=SOCIAL_STYLES[warm?(active?'warmActive':'warmQuiet'):(active?'coolActive':'quietIndependent')];
    c.textAlign='left';c.fillStyle=theme;c.font='700 30px sans-serif';c.fillText(`社交风格：${style.name}`,90,1960);
    c.fillStyle='#625d6d';c.font='25px sans-serif';wrapText(c,style.tagline,90,2005,900,40,2);
    c.fillStyle=theme;c.font='700 30px sans-serif';c.fillText(modern?'四维偏好 · '+result.type:'六维友谊画像',90,2090);
    c.fillStyle='#8a8290';c.font='20px sans-serif';c.fillText(modern?'百分比为左侧偏好的加权作答占比 · 非常模':'按本次选择频率呈现 · 不代表能力高低',90,2124);
    DIMS.forEach((dim,i)=>{const col=i%3,row=Math.floor(i/3),x=90+col*320,y=2170+row*75;c.fillStyle='#625a6d';c.font='22px sans-serif';c.fillText(dim.name,x,y);c.textAlign='right';c.fillStyle=theme;c.fillText(modern?`${dim.key[0]} ${Math.round(values[i]*100)}%`:`${Math.round(values[i]*100)}%`,x+275,y);c.textAlign='left';c.fillStyle='#e7e0e6';c.beginPath();c.roundRect(x,y+12,275,8,4);c.fill();c.fillStyle=theme;c.beginPath();c.roundRect(x,y+12,275*Math.max(0,Math.min(1,values[i]/(modern?1:.45))),8,4);c.fill();});
    c.fillStyle='#847d8c';c.font='23px sans-serif';c.textAlign='center';c.fillText(pony.share,540,2340);c.fillText('趣味自我探索 · 非标准化心理测验',540,2372);
    const career=window.PONY_CAREERS.roles[pony.slug];
    c.textAlign='left';c.fillStyle=theme;c.font='700 36px sans-serif';c.fillText('职业发展 · 小马谷工作手记',90,2450);
    c.fillStyle='#625d6d';c.font='25px sans-serif';wrapText(c,career.scene,90,2495,900,40,4);
    let careerY=2680;
    career.jobs.forEach(id=>{const job=window.PONY_CAREERS.jobs[id];c.fillStyle=theme;c.font='700 29px sans-serif';c.fillText(job.name+' · '+job.code,90,careerY);c.fillStyle='#625d6d';c.font='23px sans-serif';careerY=wrapText(c,'工作内容：'+job.task,90,careerY+42,900,36,2);careerY=wrapText(c,'探索练习：'+job.try,90,careerY+8,900,36,3)+30;});
    c.fillStyle='#8a8290';c.font='21px sans-serif';wrapText(c,'职业名称参考2022版公开目录及2026正式增补。角色联想与练习用于职业探索，不是职业适合度测量。完整依据见结果页。',90,canvas.height-110,900,33,3);
    return new Promise(resolve=>canvas.toBlob(blob=>resolve(blob),'image/png'));
  }
  function showPosterSave(blob){
    const file=new File([blob],`小马谷友谊结果-${PONIES[state.result.primary].name}.png`,{type:'image/png'});
    const url=URL.createObjectURL(blob),dialog=document.createElement('dialog');dialog.className='poster-save-dialog';
    const head=document.createElement('div');head.className='poster-save-head';
    const title=document.createElement('h2');title.textContent='保存结果长图';
    const close=document.createElement('button');close.type='button';close.className='icon-button';close.setAttribute('aria-label','关闭图片预览');close.textContent='×';close.onclick=()=>dialog.close();head.append(title,close);
    const note=document.createElement('p');note.className='poster-save-note';note.setAttribute('role','status');
    note.textContent=matchMedia('(pointer:coarse)').matches?'长图已生成。长按下方图片，选择“保存到相册”，保存后可在相册查看。':'长图已生成。点击“下载图片”，可在浏览器下载记录中查看。';
    const actions=document.createElement('div');actions.className='poster-save-actions';
    const download=document.createElement('button');download.type='button';download.className='button button-primary';download.textContent='下载图片';
    download.onclick=()=>{const a=document.createElement('a');a.href=url;a.download=file.name;document.body.append(a);a.click();a.remove();note.textContent='已发起图片下载，请在浏览器下载记录中查看；手机也可长按图片保存到相册。';};actions.append(download);
    if(navigator.canShare?.({files:[file]})){
      const share=document.createElement('button');share.type='button';share.className='button button-secondary';share.textContent='系统保存 / 分享';
      share.onclick=async()=>{try{await navigator.share({files:[file],title:'我的小马谷友谊结果'});note.textContent='系统操作已完成。如已选择“存储图像”，请到相册查看。';}catch(e){if(e.name!=='AbortError')note.textContent='系统菜单暂时无法打开，请长按下方图片保存到相册。';}};actions.append(share);
    }
    const image=document.createElement('img');image.src=url;image.alt='我的完整测评结果长图，长按可保存';image.draggable=false;
    dialog.append(head,note,actions,image);const oldOverflow=document.body.style.overflow;document.body.append(dialog);document.body.style.overflow='hidden';
    dialog.addEventListener('close',()=>{document.body.style.overflow=oldOverflow;URL.revokeObjectURL(url);dialog.remove();},{once:true});dialog.showModal();
  }
  async function saveImage() {
    const btn=$('save-image');btn.disabled=true;btn.textContent='正在生成长图…';
    try{const blob=await buildPoster();if(!blob)throw new Error('图片生成失败');showPosterSave(blob);}
    catch(err){toast(err.message||'图片生成失败，请重试。','error');}
    finally{btn.disabled=false;btn.textContent='✦ 保存结果长图';}
  }
  async function loadShared(id){
    $('shared-status-title').textContent='正在打开结果';$('shared-status-message').textContent='正在读取这份友谊地图，请稍候…';$('shared-retry').hidden=true;showView('shared-status');
    try{const result=await api('/api/result/'+encodeURIComponent(id));if(!Number.isInteger(result.primary)||!PONIES[result.primary])throw new Error('这份结果的数据不完整。');state.resultId=id;state.result=result;state.shared=true;renderResult(result);showView('result');history.replaceState(null,'',resultLink(id));}
    catch(err){$('shared-status-title').textContent='这份结果暂时未能打开';$('shared-status-message').textContent=(err.message||'网络暂时不可用。')+' 请点击下方按钮重新读取，无需重新答题。';$('shared-retry').hidden=false;$('shared-retry').onclick=()=>loadShared(id);}
  }
  $('start-button').addEventListener('click',startQuiz);
  $('prev-button').addEventListener('click',()=>{const i=Number($('next-button').dataset.index);if(i>0)renderQuestion(i-1);});
  $('next-button').addEventListener('click',()=>{const i=Number($('next-button').dataset.index);if(i===questions.length-1)finishQuiz();else{renderQuestion(i+1);const completed=i+1;if(completed%5===0&&state.answers.slice(0,completed).every(a=>a!==null)&&!(state.celebratedStages||[]).includes(completed)){state.celebratedStages=(state.celebratedStages||[]).concat(completed);sessionStorage.setItem('ponyQuiz',JSON.stringify(state));celebrateStage(completed);}}});
  $('exit-quiz').addEventListener('click',()=>{if(confirm('确定退出本次测评吗？退出后可以免费重新开始。')){sessionStorage.removeItem('ponyQuiz');state={token:'',answers:Array(questions.length).fill(null),resultId:'',result:null,shared:false};showView('gate');}});
  $('welcome-share').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.origin+(window.SITE_CONFIG?.basePath||'/'));toast('测评邀请链接已复制，朋友打开后即可免费开始。','success');}catch(err){toast('复制失败，请重试。','error');}});
  $('copy-link').addEventListener('click',copyLink);$('save-image').addEventListener('click',saveImage);
  $('retake').addEventListener('click',()=>{state={token:'',answers:Array(questions.length).fill(null),resultId:'',result:null,shared:false};updateGateError('');history.replaceState(null,'',window.SITE_CONFIG?.basePath||'/');showView('gate');});
  const match=location.pathname.match(/\/r\/([A-Za-z0-9_-]+)\/?$/),sharedId=new URLSearchParams(location.search).get('r')||new URLSearchParams(location.hash.slice(1)).get('result')||match?.[1];const previewSlug=new URLSearchParams(location.search).get('admin-preview');if(previewSlug)openAdminPreview(previewSlug);else if(sharedId&&/^[A-Za-z0-9_-]+$/.test(sharedId))loadShared(sharedId);
})();






