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
