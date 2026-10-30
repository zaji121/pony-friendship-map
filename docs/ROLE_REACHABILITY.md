# 36角色可达性审校

当前题库：festival-chapters-20261029-choice。穷举 28,561 个四维可达分数组合，覆盖全部 2^48 种二选一作答模式。

36 / 36 位角色都有严格第一名的分数组合；逐角色生成48题作答并调用正式计分器，36份测试全部通过。没有添加强制角色分配或随机分配。

本检查只证明当前算法中每位角色都能作为主角色出现，不证明角色映射的心理学效度。主角色为距离第一，副角色为距离第二；并列时使用固定索引顺序，不使用随机分配。

## 框架与材料边界

- MBTI四维定义：https://www.myersbriggs.org/my-mbti-personality-type/the-mbti-preferences/
- 48题是场景改编，每维12题，不是官方授权量表。
- 同一四字母类型可以对应多位角色；本网站使用连续四维侧写比较，而非把40位角色硬分为40种MBTI。
- 剧情事实来源与编辑推断分别保存，不能把行为片段或粉丝类型投票当作测量数据。
- DJ-PON3、梦魇之月、破灭之阳、雾鬃已移出当前测评名单；保留稳定索引仅用于读取历史记录，不参与当前匹配。
- 梦境形态、反派角色及剧情较少角色的侧写证据有限；不能据此判断用户道德、临床特征或能力。
- 不同答案可能得到相同分数或同一角色；同一答案在同一版本必须得到一致排序。

## 逐角色覆盖

|角色|主角色格点数|严格胜出格点数|剧情来源|
|---|---:|---:|---|
|紫悦|672|672|[Lesson Zero](https://mlp.fandom.com/wiki/Transcripts/Lesson_Zero)、[Amending Fences](https://mlp.fandom.com/wiki/Transcripts/Amending_Fences)|
|苹果嘉儿|187|187|[Applebuck Season](https://mlp.fandom.com/wiki/Transcripts/Applebuck_Season)、[The Perfect Pear](https://mlp.fandom.com/wiki/Transcripts/The_Perfect_Pear)|
|云宝|926|926|[Wonderbolts Academy](https://mlp.fandom.com/wiki/Transcripts/Wonderbolts_Academy)、[Read It and Weep](https://mlp.fandom.com/wiki/Transcripts/Read_It_and_Weep)|
|碧琪|592|592|[Pinkie Pride](https://mlp.fandom.com/wiki/Transcripts/Pinkie_Pride)、[Party of One](https://mlp.fandom.com/wiki/Transcripts/Party_of_One)|
|柔柔|1421|1421|[Flutter Brutter](https://mlp.fandom.com/wiki/Transcripts/Flutter_Brutter)、[Dragonshy](https://mlp.fandom.com/wiki/Transcripts/Dragonshy)|
|珍奇|522|522|[Rarity Takes Manehattan](https://mlp.fandom.com/wiki/Transcripts/Rarity_Takes_Manehattan)、[Suited for Success](https://mlp.fandom.com/wiki/Transcripts/Suited_for_Success)|
|星光熠熠|1362|1362|[Every Little Thing She Does](https://mlp.fandom.com/wiki/Transcripts/Every_Little_Thing_She_Does)、[To Where and Back Again - Part 2](https://mlp.fandom.com/wiki/Transcripts/To_Where_and_Back_Again_-_Part_2)|
|穗龙|525|525|[The Times They Are A Changeling](https://mlp.fandom.com/wiki/Transcripts/The_Times_They_Are_A_Changeling)、[Dragon Quest](https://mlp.fandom.com/wiki/Transcripts/Dragon_Quest)|
|月亮公主|1038|1038|[Luna Eclipsed](https://mlp.fandom.com/wiki/Transcripts/Luna_Eclipsed)、[Do Princesses Dream of Magic Sheep?](https://mlp.fandom.com/wiki/Transcripts/Do_Princesses_Dream_of_Magic_Sheep%3F)|
|音韵公主|670|670|[A Canterlot Wedding - Part 2](https://mlp.fandom.com/wiki/Transcripts/A_Canterlot_Wedding_-_Part_2)、[Games Ponies Play](https://mlp.fandom.com/wiki/Transcripts/Games_Ponies_Play)|
|无序|1346|1342|[Discordant Harmony](https://mlp.fandom.com/wiki/Transcripts/Discordant_Harmony)、[Keep Calm and Flutter On](https://mlp.fandom.com/wiki/Transcripts/Keep_Calm_and_Flutter_On)|
|闪耀盔甲|346|346|[A Canterlot Wedding - Part 2](https://mlp.fandom.com/wiki/Transcripts/A_Canterlot_Wedding_-_Part_2)、[Sparkle's Seven](https://mlp.fandom.com/wiki/Transcripts/Sparkle's_Seven)|
|麦托什|602|602|[Brotherhooves Social](https://mlp.fandom.com/wiki/Transcripts/Brotherhooves_Social)、[The Big Mac Question](https://mlp.fandom.com/wiki/Transcripts/The_Big_Mac_Question)|
|灰琪|665|665|[Maud Pie (episode)](https://mlp.fandom.com/wiki/Transcripts/Maud_Pie_(episode))、[Rock Solid Friendship](https://mlp.fandom.com/wiki/Transcripts/Rock_Solid_Friendship)|
|特丽克西|1018|1012|[No Second Prances](https://mlp.fandom.com/wiki/Transcripts/No_Second_Prances)、[All Bottled Up](https://mlp.fandom.com/wiki/Transcripts/All_Bottled_Up)|
|日光耀耀|452|452|[The Crystalling - Part 2](https://mlp.fandom.com/wiki/Transcripts/The_Crystalling_-_Part_2)、[Uncommon Bond](https://mlp.fandom.com/wiki/Transcripts/Uncommon_Bond)|
|无畏天马|1646|1646|[Daring Doubt](https://mlp.fandom.com/wiki/Transcripts/Daring_Doubt)、[Daring Don't](https://mlp.fandom.com/wiki/Transcripts/Daring_Don't)|
|宇宙公主|584|572|[Celestial Advice](https://mlp.fandom.com/wiki/Transcripts/Celestial_Advice)、[A Royal Problem](https://mlp.fandom.com/wiki/Transcripts/A_Royal_Problem)|
|可拉|1120|1104|[Bridle Gossip](https://mlp.fandom.com/wiki/Transcripts/Bridle_Gossip)、[A Health of Information](https://mlp.fandom.com/wiki/Transcripts/A_Health_of_Information)|
|芝士三明治|717|705|[The Last Laugh](https://mlp.fandom.com/wiki/Transcripts/The_Last_Laugh)、[Pinkie Pride](https://mlp.fandom.com/wiki/Transcripts/Pinkie_Pride)|
|苹果丽丽|1284|1258|[Crusaders of the Lost Mark](https://mlp.fandom.com/wiki/Transcripts/Crusaders_of_the_Lost_Mark)、[Call of the Cutie](https://mlp.fandom.com/wiki/Transcripts/Call_of_the_Cutie)|
|甜心宝宝|1938|1934|[For Whom the Sweetie Belle Toils](https://mlp.fandom.com/wiki/Transcripts/For_Whom_the_Sweetie_Belle_Toils)、[Forever Filly](https://mlp.fandom.com/wiki/Transcripts/Forever_Filly)|
|醒目露露|734|732|[Flight to the Finish](https://mlp.fandom.com/wiki/Transcripts/Flight_to_the_Finish)、[Sleepless in Ponyville](https://mlp.fandom.com/wiki/Transcripts/Sleepless_in_Ponyville)|
|吉尔达|862|862|[The Lost Treasure of Griffonstone](https://mlp.fandom.com/wiki/Transcripts/The_Lost_Treasure_of_Griffonstone)、[Griffon the Brush Off](https://mlp.fandom.com/wiki/Transcripts/Griffon_the_Brush_Off)|
|史密夫婆婆|834|834|[Family Appreciation Day](https://mlp.fandom.com/wiki/Transcripts/Family_Appreciation_Day)、[Grannies Gone Wild](https://mlp.fandom.com/wiki/Transcripts/Grannies_Gone_Wild)|
|珠玉冠冠|871|862|[Crusaders of the Lost Mark](https://mlp.fandom.com/wiki/Transcripts/Crusaders_of_the_Lost_Mark)|
|舒歌贝|182|182|[Hard to Say Anything](https://mlp.fandom.com/wiki/Transcripts/Hard_to_Say_Anything)、[The Big Mac Question](https://mlp.fandom.com/wiki/Transcripts/The_Big_Mac_Question)|
|富豪|815|815|[Where the Apple Lies](https://mlp.fandom.com/wiki/Transcripts/Where_the_Apple_Lies)、[Crusaders of the Lost Mark](https://mlp.fandom.com/wiki/Transcripts/Crusaders_of_the_Lost_Mark)|
|糖糖|382|377|[Slice of Life](https://mlp.fandom.com/wiki/Transcripts/Slice_of_Life)|
|天琴心弦|399|398|[Slice of Life](https://mlp.fandom.com/wiki/Transcripts/Slice_of_Life)|
|梨子酱|397|397|[The Perfect Pear](https://mlp.fandom.com/wiki/Transcripts/The_Perfect_Pear)|
|辉麦|382|382|[The Perfect Pear](https://mlp.fandom.com/wiki/Transcripts/The_Perfect_Pear)|
|虫茧女王|861|861|[A Canterlot Wedding - Part 2](https://mlp.fandom.com/wiki/Transcripts/A_Canterlot_Wedding_-_Part_2)、[To Where and Back Again - Part 2](https://mlp.fandom.com/wiki/Transcripts/To_Where_and_Back_Again_-_Part_2)|
|黑水晶|532|528|[The Beginning of the End - Part 2](https://mlp.fandom.com/wiki/Transcripts/The_Beginning_of_the_End_-_Part_2)|
|可西光辉|878|878|[School Raze - Part 2](https://mlp.fandom.com/wiki/Transcripts/School_Raze_-_Part_2)、[School Raze - Part 1](https://mlp.fandom.com/wiki/Transcripts/School_Raze_-_Part_1)|
|余晖烁烁|799|799|[My Little Pony Equestria Girls: Friendship Games](https://mlp.fandom.com/wiki/Transcripts/My_Little_Pony_Equestria_Girls%3A_Friendship_Games)|

完整测试答案与副角色排序见同目录 role-reachability.json；这些是算法测试夹具，不是对真实用户性格的判定。
