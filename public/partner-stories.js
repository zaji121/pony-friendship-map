// 已有动画故事；“相处启示”为编辑总结，不为角色指定MBTI类型。
window.PONY_PARTNER_STORIES = [
 {roles:['lyra','bon-bon'],title:'天琴心弦与糖糖 · 信任与坦白',episode:'Slice of Life',story:'筹备婚礼时，糖糖坦白自己曾执行秘密任务。天琴心弦对伙伴的隐瞒感到不满，也直接表达了这份失落。两匹小马继续交谈，没有因一次误会就结束关系。',insight:'亲近并不意味着彼此已经知道所有经历。发现隐瞒时，先说明自己为何受伤，再了解对方当时的处境，才能讨论今后怎样建立信任。'},
 {roles:['fluttershy','discord'],title:'柔柔与无序 · 接纳差异',episode:'Discordant Harmony',story:'邀请柔柔来家里喝茶前，无序把混沌的家改得十分普通，连自己的行为也刻意变得规矩。柔柔发现他因此逐渐消失，鼓励他恢复原来的样子，也主动参与那些奇妙的事物。',insight:'不同的生活趣味可以共同存在。相处时可以询问对方是否舒服，再协商共同的活动，不必为了获得认可而彻底改变自己的表达方式。'},
 {roles:['pinkie-pie','maud'],title:'碧琪与灰琪 · 热情与安静',episode:'Maud Pie (episode)',story:'碧琪希望朋友们和灰琪马上成为好友，但灰琪对岩石的专注与平静表达，让大家一时找不到共同话题。碧琪在自制游乐设施中遇险时，灰琪立刻救下她。大家由此看见，两姐妹表达关爱的方式虽然不同，却都十分重视彼此。',insight:'话少或反应平静，并不等于缺少关心。与表达节奏不同的人相处，可以留意对方的行动，也让共同兴趣慢慢形成，而不是要求立刻热络。'},
 {roles:['starlight','trixie'],title:'星光熠熠与特丽克西 · 分歧与表达',episode:'All Bottled Up',story:'特丽克西练习魔法时把友谊地图传送走了。星光为了避免伤害友谊，将怒气封进瓶子，却让情绪意外影响了旁人。最后，她直接向特丽克西说明自己的不满，两人再一起面对问题。',insight:'维持关系也需要表达不满。把具体事件、造成的影响和希望怎样处理说清楚，能让对方知道要解决什么，而不只是感受到突然爆发的情绪。'},
 {roles:['pinkie-pie','cheese-sandwich','rainbow-dash'],title:'碧琪与芝士三明治 · 竞争与合作',episode:'Pinkie Pride',story:'为云宝筹备生日派对时，碧琪与芝士三明治开始比拼谁更会制造欢乐。发现竞争让云宝不开心后，碧琪停下来关注寿星的感受。芝士也说明碧琪曾带给自己的启发，最后两匹小马共同办好派对。',insight:'共同目标容易被输赢掩盖。合作出现竞争时，可以重新确认活动是为谁而做，再把各自擅长的部分放到同一个方案里。'},
 {roles:['sunburst','starlight'],title:'星光熠熠与日光耀耀 · 兴趣的变化',episode:'Uncommon Bond',story:'日光耀耀来访时，星光期待重新找回童年共同的兴趣，却发现他也能与其他朋友分享魔法、古物和游戏。她尝试重现小时候的相处，反而让日光感到不自在。两人后来重新寻找当下都愿意参与的活动。',insight:'关系中的共同点也会随成长变化。与其要求对方保持过去的样子，不如了解彼此现在喜欢什么，再创造新的共同经历。'},
 {roles:['luna','celestia','daybreaker'],title:'宇宙公主与月亮公主 · 看见彼此的负担',episode:'A Royal Problem',story:'两位公主都觉得对方的职责更轻松。星光交换了她们的可爱标志，让她们体验对方的工作：白天的公务与笑脸、夜里的梦境与危险。亲自面对这些困难后，她们开始理解彼此原先没有说出口的疲惫。',insight:'看到的成果并不包含全部付出。分工出现不满时，可以把各自的任务与压力列清楚，讨论具体支持，而不是只比较谁看起来更忙。'}
];
// 为每位角色补充其已有剧情资料中的独立故事，优先当前角色，避免固定四张卡片。
(() => {
const themes={
twilight:['紫悦与旧友 · 修复疏远','重新联系时，先了解对方经历了什么，并为自己忽略的部分承担责任。'],
applejack:['苹果嘉儿与伙伴 · 接受帮助','可靠不必等于独自承担全部任务。及时说明负担，才能让共同承诺真正落实。'],
'rainbow-dash':['云宝与训练伙伴 · 安全与原则','共同的目标需要共同的边界。面对危险的做法，表达反对也可以是在保护团队。'],
'pinkie-pie':['碧琪与朋友 · 误会与求证','看不懂朋友的行动时，直接询问比独自猜测更容易接近真实原因。'],
fluttershy:['柔柔与弟弟 · 支持与界限','提供支持时，也可以要求对方承担自己的责任。关怀与清楚的界限能够并存。'],
rarity:['珍奇与朋友 · 工作与关怀','忙于交付时，也需要关注帮忙的人承受了什么，而不是把支持视为理所当然。'],
spike:['穗龙与索瑞斯 · 跨越成见','判断新朋友时，可以了解他的实际行为，不必让族群印象代替认识。'],
starlight:['星光与救援伙伴 · 各有所长','合作需要为不同成员的办法留出位置，而不是只采用自己最熟悉的能力。'],
luna:['月亮公主与伙伴 · 接受支持','承担过错之后，也可以接受别人帮助；持续惩罚自己无法代替修复与成长。'],
cadance:['音韵公主与闪耀盔甲 · 共同守护','面对困难时，明确彼此能够提供的支持，比要求一个人完成所有事情更有力量。'],
discord:['无序与柔柔 · 学习珍惜','关系建立需要具体回应。关心一个朋友，也意味着认真对待她的信任。'],
'shining-armor':['闪耀盔甲与紫悦 · 兄妹合作','熟悉的家人也有各自的判断。共同面对任务时，可以重新认识彼此的长处。'],
'big-mac':['麦托什与苹果丽丽 · 陪伴的表达','平日话少的人也可能用主动参与表达重视。理解关心时，可以同时看语言与行动。'],
maud:['灰琪与星光 · 新的连接','找到共同兴趣需要时间。一个具体话题，也能成为理解彼此的入口。'],
trixie:['特丽克西与星光 · 珍惜新友谊','获得认可之后，也需要顾及朋友的感受；承认伤害是重新连接的一步。'],
sunburst:['日光耀耀与伙伴 · 坦诚能力','承认自己的局限，可以让团队更清楚怎样使用已有知识与不同成员的能力。'],
celestia:['宇宙公主与紫悦 · 放手与信任','支持成长有时意味着减少代替决定，让对方真正承担下一步。'],
zecora:['可拉与居民 · 从误解到了解','面对陌生的人，先求证具体事实，比顺着流言判断更有助于建立关系。'],
'daring-do':['无畏天马与伙伴 · 听见另一面','自己的经历并不包含全部视角。听取其他人的解释，有助于重新理解共同事件。'],
'cheese-sandwich':['芝士三明治与观众 · 找回回应','活动的价值也来自参与者的真实体验。持续获得反馈，才能知道自己的付出是否到达对方。'],
'apple-bloom':['苹果丽丽与珠玉冠冠 · 理解处境','冲突之后仍可以了解对方的压力；理解处境并不等于认可伤害行为。'],
'sweetie-belle':['甜心宝宝与珍奇 · 看见投入','被比较时，可以先了解对方为自己做了什么，再表达真正希望获得的支持。'],
scootaloo:['醒目露露与云宝 · 说出害怕','向信任的人说出担心，能让支持变得具体，也不妨碍继续尝试。'],
gilda:['吉尔达与旧友 · 重新选择','修复关系可以从一个实际行动开始。眼前如何对待朋友，比维持强硬形象更关键。'],
'granny-smith':['史密夫婆婆与家人 · 理解传统','了解习惯背后的经历，能让代际沟通从嫌弃规则走向理解其来由。'],
'diamond-tiara':['珠玉冠冠与同学 · 改变立场','拒绝不合适的期待，也可以把已有资源用来支持曾经伤害过的人。'],
'dj-pon3':['DJ-PON3 与奥塔维亚 · 不同节奏的合奏','合作不必消除彼此的风格。把需要对齐的节拍与可以保留的特色说明白，才能让不同声音组成作品。'],
'sugar-belle':['糖贝儿与麦托什 · 真正的需要','表达心意时，先了解对方实际在意什么，比把追求变成比赛更容易建立连接。'],
'filthy-rich':['财大气粗与苹果家族 · 交易与承诺','合作建立在信息准确与承诺明确之上。误解出现时，应回到具体事实核对。'],
'bon-bon':['糖糖与天琴心弦 · 隐私与信任','私人经历与关系期待之间，需要明确沟通哪些事情会影响双方的信任。'],
lyra:['天琴心弦与糖糖 · 双向承诺','在日常陪伴之外，明确表达关系中的期待，也能帮助双方确认共同的未来。'],
'pear-butter':['梨子酱与辉麦 · 家族与选择','面对家族冲突，关系需要双方清楚表达自己的选择，并共同承担选择带来的变化。'],
'bright-mac':['辉麦与梨子酱 · 责任与诚意','承担责任、持续弥补，是表达诚意的一种具体方式。'],
mistmane:['雾鬃与故友 · 嫉妒与修复','嫉妒背后可能存在未被表达的痛苦。故事中的修复也涉及共同生活的环境。'],
'nightmare-moon':['月亮公主与紫悦一行 · 冲突的终点','这段故事呈现的是特殊形态下的冲突与转变，不能据此要求现实中的人容忍伤害。'],
daybreaker:['两位公主与星光 · 冲突的想象','梦境放大了对冲突升级的担忧。现实沟通仍应回到具体职责与需要。'],
chrysalis:['虫茧女王与星光 · 拒绝改变','合作无法只靠一方提供机会；对方是否愿意改变，也会影响关系能走到哪里。'],
'king-sombra':['森布拉与同盟 · 独行的代价','共同目标不代表真正合作。忽视伙伴与反馈，会限制解决问题的路径。'],
'cozy-glow':['可西光辉与同学 · 信任的边界','友善的表现需要与持续行为一起观察；不能仅凭帮助的姿态忽略实际伤害。'],
'sunset-shimmer':['余晖烁烁与紫悦 · 理解新的处境','面对不了解的变化，先探索原因，再听取对方的经历，能为理解留出空间。']
};
const pool=[...window.PONY_PARTNER_STORIES];
Object.entries(themes).forEach(([slug,[title,insight]])=>{const facts=window.CHARACTER_EVIDENCE?.[slug]?.facts||[];const fact=slug==='lyra'?{source:{originalTitle:'The Big Mac Question'},text:'天琴心弦向糖糖拿出求婚戒指时，糖糖也拿出了准备好的戒指。两匹小马在同一个时刻表达了彼此的承诺。'}:facts[0];if(fact)pool.push({roles:[slug],title,episode:fact.source.originalTitle,story:fact.text,insight});});
window.selectPartnerStories=slug=>{const own=pool.filter(s=>s.roles.includes(slug));const others=pool.filter(s=>!s.roles.includes(slug));const seed=[...slug].reduce((n,c)=>n*31+c.charCodeAt(0),0)>>>0;const selected=own.slice(0,2);const used=new Set(selected.map(s=>s.episode));for(let i=0;i<others.length&&selected.length<4;i++){const candidate=others[(seed+i*7)%others.length];if(!used.has(candidate.episode)){selected.push(candidate);used.add(candidate.episode);}}for(const candidate of others){if(selected.length>=4)break;if(!used.has(candidate.episode)){selected.push(candidate);used.add(candidate.episode);}}return selected;};
})();

window.PONY_PARTNER_STORIES.push({roles:['dj-pon3'],title:'DJ-PON3 与奥塔维亚 · 两种音乐，一次合作',episode:'Slice of Life',story:'奥塔维亚为婚礼准备音乐时，DJ-PON3 用自己的设备加入。大提琴与电子节拍结合，两位音乐伙伴以不同的风格一起完成演出准备。',insight:'先确认共同作品需要什么，再说明各自擅长的部分。尊重差异可以落实成分工、试奏与调整。'});
const originalStorySelector=window.selectPartnerStories;window.selectPartnerStories=slug=>slug==='dj-pon3'?[window.PONY_PARTNER_STORIES.at(-1),...originalStorySelector(slug).filter(s=>s.episode!=='Slice of Life')].slice(0,4):originalStorySelector(slug);
