(() => {
  const CATALOG='https://srsj.cngy.gov.cn/Files/UploadFile/SiteFile/20160720104022026/2026/04/14/8a8384d8e7d34d90b1a8e191a4f585cb.pdf';
  const UPDATE='https://www.mohrss.gov.cn/xxgk2020/fdzdgknr/rcrs_4225/jnrc/202609/W020260909399793190879.pdf';
  const jobs={
    library:{name:'文献信息专业人员',code:'2-10-06-01',theme:'研究与整理',task:'收集、整理、保存和开发利用文献信息，提供检索与阅读服务。',try:'围绕一个感兴趣的问题，整理五份可信资料，写一页带出处的阅读指南。',learn:'检索方法、信息组织、来源判断和读者服务。',check:'你喜欢查资料，也愿意反复编目、核对来源和回应读者的问题吗？'},
    teacher:{name:'小学教师',code:'2-08-02-04',theme:'教育与支持',task:'开展小学教育教学，设计教学活动，观察并评价学生学习情况。',try:'选择一个熟悉的知识点，给朋友做一次十分钟讲解，询问哪里还没听懂。',learn:'教学设计、儿童发展、课堂组织和学习评价。',check:'你是否愿意根据不同学习者调整解释，并接受备课、评价等日常工作？'},
    agriculture:{name:'农业技术指导人员',code:'2-03-02-00',theme:'生产与技术服务',task:'提供农业技术指导、咨询和培训，推广种养技术与相关信息。',try:'访问当地农业科普场馆或公开课程，整理一种作物的生产流程和常见问题。',learn:'农业生产知识、技术资料整理、现场沟通和问题记录。',check:'除了喜欢田园环境，你是否也愿意学习生产技术，面对季节和现场条件？'},
    gardening:{name:'园艺工',code:'5-01-02-02',theme:'种植与实践',task:'进行园地管理、种苗培育、园艺作物栽培和收获。',try:'养护一盆适合本地环境的植物，记录光照、浇水和生长变化。',learn:'植物养护、土壤与环境管理、工具使用和操作规范。',check:'你愿意持续做重复养护、观察变化，也接受户外劳动吗？'},
    coach:{name:'教练员',code:'2-09-07-01',theme:'训练与指导',task:'培养、训练和指导运动员，制定训练计划和参赛方案。',try:'观察一节正规训练课，记录教练如何示范、纠错和组织训练。',learn:'专项运动知识、训练计划、沟通反馈和运动安全。',check:'你享受帮助别人进步吗？喜欢比赛和能够长期指导训练，是两件需要分别验证的事。'},
    events:{name:'会展策划专业人员',code:'2-06-07-05',theme:'策划与协作',task:'进行会展项目调研、策划、运营和推广，并管理相关风险。',try:'为一次小型读书会写主题、流程、人员分工、预算和备用方案。',learn:'需求调研、流程安排、预算、客户沟通和风险管理。',check:'你既喜欢构思活动，也愿意做协调、预算、执行和收尾吗？'},
    pastry:{name:'西式面点师',code:'4-03-02-04',theme:'制作与服务',task:'加工面点原辅料，运用成型和成熟方法制作西式面食、点心。',try:'按可靠食谱完成一道简单点心，记录称量、时间与成品差异。',learn:'原料知识、称量、加工方法、食品卫生和稳定出品。',check:'你是否喜欢制作过程，也愿意接受卫生要求、重复操作和时间安排？'},
    animal:{name:'宠物医师',code:'2-03-06-03',theme:'动物健康与诊疗',task:'开展宠物疾病诊断、治疗及传染病预防控制。',try:'了解兽医相关专业的课程和执业要求，访谈从业者的典型工作日。',learn:'动物医学知识、临床训练、与照护者沟通及病历记录。',check:'喜欢动物只是起点；你还愿意学习医学、面对疾病，并承担专业责任吗？'},
    social:{name:'社会工作者',code:'2-07-10-01',theme:'社会服务与支持',task:'设计社会服务项目，开展个案、小组和社区服务。',try:'在正规组织的指导下参与一次志愿活动，观察需求评估、分工和服务记录。',learn:'服务需求评估、沟通、资源链接、专业伦理和服务评价。',check:'你是否愿意在关心他人的同时守住服务界限，并学习规范的方法？'},
    fashion:{name:'服装设计人员',code:'2-09-06-02',theme:'设计与表达',task:'设计服装及饰品的风格和款式，绘制效果图并调整样品方案。',try:'给一个具体使用场景设计服装草图，写清面料、预算与穿着需求。',learn:'造型、色彩、材料、设计表达和样品迭代。',check:'你愿意根据使用者反馈反复修改，兼顾审美、成本和实用需求吗？'},
    animation:{name:'动画设计人员',code:'2-09-06-03',theme:'创意与叙事',task:'开展动画、漫画、游戏项目的创意、场景、角色与分镜设计。',try:'画六格分镜，讲清一个小马谷式的友情故事，再请朋友复述情节。',learn:'视觉叙事、角色与场景设计、分镜和制作协作。',check:'除了不断产生点子，你是否也愿意打磨画面、修改细节并按计划完成？'},
    magician:{name:'杂技魔术演员',code:'2-09-02-06',theme:'舞台与表演',task:'排练和表演杂技、魔术等节目，训练技巧并创作表演作品。',try:'选择一个安全的纸牌小节目，排练后向朋友展示，询问节奏和表达是否清楚。',learn:'表演基本功、节目编排、排练方法、观众沟通和舞台安全。',check:'你喜欢登场，也愿意接受反复排练、反馈和幕后准备吗？'},
    secretary:{name:'秘书',code:'3-01-02-02',theme:'组织与事务服务',task:'办理文书和会议事务，管理文件并支持日常办公。',try:'为一次团队活动整理议程、会议纪要和待办清单，跟进任务完成情况。',learn:'文书处理、会议组织、信息管理、沟通与保密。',check:'你愿意通过细致的事务工作帮助团队运转，同时清楚表达任务边界吗？'},
    security:{name:'保安员',code:'4-07-05-01',theme:'安全与守护',task:'提供安全防范服务，进行巡查、风险识别和相关目标守护。',try:'参加正规的安全教育活动，阅读一个公共场所的安全流程并提出问题。',learn:'安全防范知识、观察记录、规范沟通和应急流程。',check:'你愿意遵守工作程序、保持警觉，并接受具体岗位的班次和责任要求吗？'},
    geology:{name:'地质实验测试工程技术人员',code:'2-02-01-01',theme:'岩石与实验研究',task:'测试地质样品的成分、组成、结构与物理化学性能，研究相关方法。',try:'参观地质博物馆，用展品资料整理岩石的观察特征、来源和待核实问题。',learn:'地质基础、样品制备、实验方法、数据记录和质量控制。',check:'你喜欢岩石，也愿意学习实验、统计和严谨的记录方法吗？'},
    sportsData:{name:'运动数据分析师',code:'4-14-05-09',theme:'运动与数据',version:'2026新增职业',page:5,task:'收集、清洗和分析体育运动数据，编制并应用运动表现分析报告。',try:'使用公开比赛数据做一张图，注明数据来源、指标定义和无法推断的部分。',learn:'运动知识、数据采集与清洗、统计分析和可视化表达。',check:'你愿意理解运动场景，也耐心核对数据质量，而不只关注胜负吗？'},
    twins:{name:'数字孪生工程技术人员',code:'2-02-38-14',theme:'系统与仿真',version:'2026新增职业',page:2,task:'研发、规划和实施数字孪生系统，构建模型并开展仿真、调试和维护。',try:'用一个简单流程图描述真实系统、可观察数据和模型输出，列出模型的限制。',learn:'系统建模、数据集成、软件技术、仿真和运行维护。',check:'你是否享受抽象建模，也愿意检查模型与现实的误差并持续维护？'},
    sustainability:{name:'企业可持续发展规划师',code:'4-07-02-07',theme:'可持续发展与规划',version:'2026新增职业',page:4,task:'分析和制定企业环境、社会与治理规划，建立管理流程并跟踪实施。',try:'研究一家企业公开的可持续发展报告，整理一个目标、指标和可核实证据。',learn:'环境、社会与治理知识，议题识别、数据管理和实施跟踪。',check:'你愿意把关心环境与社会转化成可执行计划，也接受数据、协调和长期跟进吗？'}
  };
  const roles={
    twilight:{scene:'从金橡树图书馆的阅读，到友谊学校的教学，紫悦习惯先弄清问题，再组织知识与伙伴。',jobs:['library', 'teacher', 'twins', 'sustainability'],place:'金橡树图书馆 · 友谊学校',wiki:'Twilight_Sparkle'},
    applejack:{scene:'苹果嘉儿在甜苹果园参与种植、收获与农场事务。她的故事让人想到把承诺变成稳定产出的工作。',jobs:['gardening', 'agriculture', 'sustainability', 'events'],place:'甜苹果园',wiki:'Applejack'},
    'rainbow-dash':{scene:'云宝加入闪电飞马队，反复练习飞行技巧。这个场景可以作为了解训练指导与运动分析工作的入口。',jobs:['coach', 'sportsData', 'events', 'security'],place:'闪电飞马队训练场',wiki:'Rainbow_Dash'},
    'pinkie-pie':{scene:'碧琪在糖块屋工作，也热衷筹备派对。快乐背后还有配方、流程、材料和对参与者需求的照顾。',jobs:['pastry', 'events', 'animation', 'magician'],place:'糖块屋 · 小马谷派对',wiki:'Pinkie_Pie'},
    fluttershy:{scene:'柔柔照料动物，并参与建立动物庇护所。她的耐心关怀，让人想到动物健康与社会支持两种不同的工作主题。',jobs:['animal', 'social', 'gardening', 'teacher'],place:'动物庇护所 · 林间小屋',wiki:'Fluttershy'},
    rarity:{scene:'珍奇经营服装店，为顾客设计服装。把心意做成作品，也需要理解需求、选择材料和不断修改。',jobs:['fashion', 'events', 'animation', 'sustainability'],place:'珍奇时装屋',wiki:'Rarity'},
    starlight:{scene:'星光熠熠后来承担友谊学校的辅导与管理工作。重新建立信任的故事，可以引出教育与社会服务的工作主题。',jobs:['teacher', 'social', 'secretary', 'twins'],place:'友谊学校',wiki:'Starlight_Glimmer'},
    spike:{scene:'穗龙长期协助紫悦处理书信与日常事务。可靠的支持往往来自资料整理、任务跟进和清楚的沟通。',jobs:['secretary', 'library', 'events', 'social'],place:'友谊城堡',wiki:'Spike'},
    luna:{scene:'月亮公主守护小马的梦境，在故事中帮助伙伴面对恐惧。现实探索可以从支持服务或视觉叙事开始；梦境魔法是作品设定。',jobs:['social', 'animation', 'library', 'teacher'],place:'梦境世界',wiki:'Princess_Luna'},
    cadance:{scene:'音韵公主与闪耀盔甲共同守护水晶帝国。对关系和共同体的关心，可以转化为对社会服务、组织协调的了解。',jobs:['social', 'events', 'teacher', 'sustainability'],place:'水晶帝国',wiki:'Princess_Cadance'},
    discord:{scene:'无序用混沌魔法打破常规。他的角色故事提供创意联想的入口，而现实创作还需要设计表达、制作协作与收尾。',jobs:['animation', 'events', 'magician', 'fashion'],place:'混沌领域',wiki:'Discord'},
    spitfire:{scene:'喷火作为闪电飞马队队长，参与训练与团队指导。从挑战走向精进，需要反馈、规则和持续练习。',jobs:['coach', 'sportsData', 'security', 'events'],place:'闪电飞马队',wiki:'Spitfire'},
    'shining-armor':{scene:'闪耀盔甲曾任皇家卫队队长，也守护水晶帝国。现实工作可以围绕安全防范和组织协调展开探索。',jobs:['security', 'secretary', 'events', 'social'],place:'皇家卫队 · 水晶帝国',wiki:'Shining_Armor'},
    'big-mac':{scene:'麦托什在甜苹果园承担农场工作。他的安静与踏实，可以引出长期养护、生产操作和农业技术服务的工作主题。',jobs:['gardening', 'agriculture', 'sustainability', 'secretary'],place:'甜苹果园',wiki:'Big_McIntosh'},
    maud:{scene:'灰琪专注于岩石研究，取得岩石学博士学位。现实世界的地质实验与文献信息工作，都需要耐心观察和可核实的记录。',jobs:['geology', 'library', 'twins', 'teacher'],place:'岩石研究 · 地下岩洞',wiki:'Maud_Pie'},
    trixie:{scene:'特丽克西巡演魔术，以舞台表达建立自己的风格。现实探索可关注魔术表演与活动策划，并练习回应观众反馈。',jobs:['magician', 'events', 'animation', 'fashion'],place:'巡演马车 · 舞台',wiki:'Trixie'}
  };
  window.EXTRA_CHARACTERS.forEach(p=>{roles[p.slug]={scene:p.story+' 下面把故事主题接到现实职业任务，供你进一步了解。',jobs:p.jobs,place:p.meta.home,wiki:({'bright-mac':'Bright_Mac_and_Pear_Butter','pear-butter':'Bright_Mac_and_Pear_Butter','daybreaker':'Princess_Celestia','nightmare-moon':'Princess_Luna'}[p.slug]||p.en.replaceAll(' ','_'))};});
  const workWays=[
    ['探索与构思','你可以留意检索、研究、设计等活动是否让你持续投入。先完成一份小作品，观察自己是否愿意继续修改。'],
    ['计划与落实','你可以试着负责一次明确的交付：列步骤、定时间、跟进结果。同时练习分工，避免把可靠变成独自承担。'],
    ['连接与沟通','你可以观察自己是否享受与客户、参与者或团队持续交流。也要体验沟通之后的记录、协调与收尾。'],
    ['合作与支持','你可以尝试需求访谈、合作任务或有指导的服务活动。留意自己能否既帮助对方，也清楚说明服务范围。'],
    ['推动与表达','你可以练习提出方案、说明理由和推进一项小任务。收集他人反馈，观察自己能否调整最初的主张。'],
    ['观察与回应','你可以留意需要细致观察、理解反馈的工作活动。将观察写成具体事实，避免只凭感觉下结论。']
  ];
  // Editorial task links use observed answers, never MBTI type letters or inferred RIASEC scores.
  const answerTasks={5:[['patterns'],['detail']],18:[['analysis','organization'],['support']],28:[['records'],['communication']],29:[['creative'],['detail']],34:[['analysis'],['support']]};
  const taskNames={patterns:'线索整合',detail:'细节核对',analysis:'问题分析',organization:'流程改进',support:'需求理解',records:'书面整理',communication:'沟通表达',creative:'创意构思'};
  const jobTasks={library:['records','detail','patterns'],teacher:['support','communication','organization'],agriculture:['detail','communication'],gardening:['detail'],coach:['support','organization','communication'],events:['organization','communication','analysis'],pastry:['detail','organization'],animal:['analysis','detail','support'],social:['support','communication','records'],fashion:['creative','detail'],animation:['creative','patterns'],magician:['creative','communication'],secretary:['records','organization','detail'],security:['detail','analysis'],geology:['analysis','detail','records'],sportsData:['analysis','patterns'],twins:['patterns','analysis'],sustainability:['analysis','organization','support']};
  function recommend(result,role){
   const evidence=[];Object.entries(answerTasks).forEach(([index,alternatives])=>{
    const q=window.QUIZ_QUESTIONS?.[index],answer=result?.answers?.[index];
    if(!q||!Number.isInteger(answer)||!q[1][answer]||!alternatives[answer])return;
    evidence.push({index,tags:alternatives[answer],answer:q[1][answer][0]});
   });
   if(evidence.length<3)return [];
   return Object.entries(jobTasks).filter(([id])=>role.jobs.includes(id)).map(([id,tags])=>({id,evidence:evidence.filter(e=>e.tags.some(t=>tags.includes(t))),score:evidence.filter(e=>e.tags.some(t=>tags.includes(t))).length/tags.length})).sort((a,b)=>b.evidence.length-a.evidence.length||b.score-a.score||a.id.localeCompare(b.id)).slice(0,4);
  }
  function render(main,scores,dims,result){
    const host=document.getElementById('career-content');if(!host)return;
    const role=roles[main.slug];
    const modern=scores.length===4;
    const ranked=scores.map((value,i)=>({i,value:Number(value)||0})).sort((a,b)=>b.value-a.value);
    host.replaceChildren();
    const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n;};
    const link=(text,url)=>{const a=el('a','career-source-link',text);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;};
    const hero=el('div','career-hero'),img=el('img','career-portrait');img.src=window.FULLBODY_ART?.[main.slug]?.career||window.EXPANDED_ART?.[main.slug]?.file||`/images/ponies/${main.slug}.webp?v=fullbody-20261012`;img.alt=main.name;
    const copy=el('div','career-hero-copy');copy.append(el('span','career-kicker','小马谷工作手记 · '+role.place),el('h3','',main.name+'式的职业探索'),el('p','',role.scene),link('角色故事资料','https://mlp.fandom.com/wiki/'+role.wiki));hero.append(img,copy);host.append(hero);
    const evidence=el('div','career-evidence');evidence.append(el('strong','', '从你的实际选择出发'),el('p','',`这次「${dims[ranked[0].i].name}」与「${dims[ranked[1].i].name}」相关选项较常出现。下方练习帮助你把情境偏好放进真实任务中观察；岗位根据具体选项涉及的工作方式与岗位任务联系推荐，不提供职业适合度分数。`));host.append(evidence);
    if(modern)evidence.lastChild.textContent=recommend(result,role).length?'先根据角色在剧中的经历与行为选择职业方向，再用你在具体情境中的选项调整顺序。每项分别说明角色关联与作答依据，供职业探索参考。':'这份结果中可用于工作方式分析的选项不足，先展示与角色故事相关的岗位供了解。';
    const ways=el('div','career-work-grid');(modern?[]:ranked.slice(0,2)).forEach(({i,value})=>{const card=el('article','career-work-card');card.append(el('span','career-kicker',`本次选择频率 ${Math.round(value*100)}%`),el('h4','',workWays[i][0]),el('p','',workWays[i][1]));ways.append(card);});host.append(ways);
    host.append(el('h3','career-section-title','职业方向'));
    const suggestions=recommend(result,role),selected=suggestions.length?suggestions.map(x=>x.id):role.jobs;
    const cards=el('div','career-job-grid');selected.forEach(id=>{const job=jobs[id],card=el('article','career-job');card.append(el('span','career-job-theme',job.theme),el('h4','',job.name),el('span','career-code',job.code+' · '+(job.version||'既有职业条目')));
      const suggestion=suggestions.find(x=>x.id===id);card.append(el('h5','','角色关联'),el('p','',(main.slug==='pinkie-pie'?{pastry:'碧琪在糖块屋参与点心制作与店内工作，烘焙经历对应配方、加工与稳定出品。',events:'碧琪为云宝筹备生日派对，并与芝士三明治合作；这一经历对应活动主题、流程与参与者体验。',animation:'碧琪善于把点子变成歌舞与派对主题，可由此探索创意构思和视觉叙事；动画制作仍需另行学习专业技能。',magician:'碧琪常用歌舞、道具和夸张的登场方式调动气氛，可由此探索节目编排与观众互动。'}[id]:main.name+'的故事呈现了'+role.place+'中的经历。这一方向着重探索'+job.theme+'，可以通过下方实际任务判断自己是否愿意投入。')));
      if(suggestion&&suggestion.evidence.length){card.append(el('h5','','推荐依据'),el('p','',suggestion.evidence.slice(0,2).map(e=>'你选择了“'+e.answer+'”').join('；')+'。这些选择涉及'+[...new Set(suggestion.evidence.flatMap(e=>e.tags).filter(t=>jobTasks[id].includes(t)))].map(t=>taskNames[t]).join('、')+'，可与该岗位的任务对照。'));}
      [['实际工作',job.task],['先做一个小尝试',job.try],['接下来可学习',job.learn],['问问自己',job.check]].forEach(([title,text])=>{card.append(el('h5','',title),el('p','',text));});
      card.append(link(job.version?'2026正式增补 · 查看原文':'职业名称、编码与任务 · 查看政府公开条目',job.version?UPDATE+'#page='+job.page:CATALOG));cards.append(card);
    });host.append(cards);
    const theory=el('details','career-method');theory.append(el('summary','','依据、版本与适用范围'));
    theory.append(el('p','','职业兴趣研究中，Holland 的 RIASEC 框架将工作兴趣分为现实型、研究型、艺术型、社会型、企业型和常规型。兴趣需要围绕具体工作活动进行专门测量；本网站的四维偏好、选项中的工作方式及旧版六维友谊频率均非 RIASEC 分数，也没有验证“某只小马必然适合某职业”的对应关系。'),link('O*NET 职业兴趣工具与研究说明','https://www.onetcenter.org/IP.html'));
    theory.append(el('p','','本篇先从角色剧情相关职业中选取候选，再读取地图核对、复盘、记录、设计介绍和项目评估等具体选项，按任务标签联系既有职业资料。标签和联系规则由编辑整理，未验证预测效度，也不推断技能或职业兴趣。有效选项不足时展示角色相关职业供了解。小尝试、学习建议和角色到职业的联系属于基于任务的产品建议；不是大典给出的职业推荐，也不是职业资格或晋升标准。'));
    theory.append(el('p','','版本核对：2026-10-11。查到的最近完整大典为2022年版，最新查到的正式动态增补为2026年第八批。既有条目的名称、编码与任务依据政府公开的2022年版公示资料核对；该公开PDF是公示稿，属于公开公示稿。2026新增职业直接核对人社部正式发布附件。'),link('2022版正式颁布信息','https://www.mohrss.gov.cn/SYrlzyhshbzb/dongtaixinwen/buneiyaowen/hyhd/202209/t20220929_487969.html'),link('2026年第八批正式发布','https://tyjrswj.beijing.gov.cn/fwzl/jycy/202609/t20260911_4859156.html'),link('2026正式职业信息附件',UPDATE));
    theory.append(el('p','','本篇不推断你的职业能力、薪资前景或录用机会。教师、动物诊疗等方向需要另行核对相关教育、资格与执业规定。若希望测量职业兴趣，可使用经研究的独立兴趣量表，再结合个人经历讨论。'),link('独立职业兴趣测评（英语）','https://onetinterestprofiler.org/'));
    host.append(theory);
  }
  window.PONY_CAREERS={jobs,roles,render,recommend};
})();


