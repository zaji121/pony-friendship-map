// User-facing explanations adapted from Myers & Briggs Foundation preference definitions.
(()=>{
const $=id=>document.getElementById(id),el=(tag,text,cls)=>{const n=document.createElement(tag);n.textContent=text;if(cls)n.className=cls;return n;};
const preferences={
 E:['结伴交流','你更容易把注意力放到身边的人与正在发生的事上。交流、参与和即时回应，常能让你重新有精神。','讨论时，你可能先说出一个初步想法，再借伙伴的回应把它补完整。你喜欢有来有回的过程。','筹备小马谷庆典时，你可能先把伙伴叫到一起，边讨论边明确每个人能做什么。'],
 I:['静心蓄能','你更容易把注意力放到自己的思考和体验上。独处、阅读或安静整理，常能让你恢复精力。','讨论前，你可能先想清楚重点，再选择时机表达。你也可能更喜欢一对一的深入交流。','庆典结束后，你可能先找个安静的地方休息，等思路整理好了，再与伙伴聊当天的经历。'],
 S:['实境观察','你通常从看得见、听得到和已经发生的事开始理解问题。具体细节、实际经验和清楚的步骤，是你常用的线索。','学习新东西时，你可能先想看一个实例或完整示范，再自己试一遍。讨论中，你会问目前有什么证据。','拿到城堡地图时，你可能先确认入口、楼梯与路标；准备材料时，也会先核对数量和使用方法。'],
 N:['灵感联想','你通常先寻找线索之间的联系，关注它们可能意味着什么。整体方向、新的解释和未来的可能，容易吸引你。','学习新东西时，你可能先问背后的原理，再联想到其他用法。讨论中，你喜欢探索还没试过的路径。','看到城堡地图时，你可能先想各处如何连成路线；筹备庆典时，也会从一个主题联想到不同活动。'],
 T:['原则推演','做决定时，你通常先比较理由、因果和一致的标准。你希望能解释为什么选这个方案，以及它能解决什么问题。','出现分歧时，你可能先拆开问题，核对证据和利弊，再提出一个各方都能理解的判断依据。','两组伙伴都想用同一间教室时，你可能先比较人数、时间和用途，再商量一套共同适用的安排。'],
 F:['心意权衡','做决定时，你通常先考虑什么值得珍惜，以及选择会怎样影响相关的人。你希望结果能照顾重要的价值和具体处境。','出现分歧时，你可能先问每个人最在意什么，再寻找大家愿意接受的安排。对你而言，理由也需要放回人的生活里理解。','两组伙伴都想用同一间教室时，你可能先听听各组的需要，了解哪些安排对他们特别重要，再一起协调。'],
 J:['行程筹划','面对外部事务，你通常更喜欢先确定方向、安排步骤，并知道事情何时能完成。明确的约定能让你把注意力放回行动。','旅行或合作前，你可能先确认时间与分工。完成一项任务、划掉一个待办，往往让你感到踏实。','去水晶帝国旅行前，你可能先订好车次与住宿，列出主要行程，让伙伴知道接下来怎么走。'],
 P:['随机应变','面对外部事务，你通常更喜欢保持选择的余地，看看新信息会带来什么。能根据实际情况调整，会让你感觉更自在。','旅行或合作时，你可能先了解有哪些选择，边尝试边决定。新的线索出现后，你愿意改变原来的做法。','去水晶帝国旅行时，你可能先确定必要的安排，把部分时间留给到了当地才发现的景点与活动。']
};
const dimensions=[['友谊能量','EI','注意力与精力'],['线索探索','SN','获取信息的方式'],['友谊抉择','TF','作出决定的依据'],['冒险节奏','JP','安排生活的节奏']];
const partners=[
 ['边聊边想，重视感受的伙伴','EF','他们可能一边交流一边形成想法，也希望你回应他们在意的人和事。','一起筹备庆典时，可以先听他们想让谁参与、希望大家有什么体验，再商量分工。','“你最希望大家感受到什么？我们一起把它安排出来。”'],
 ['先想再说，重视感受的伙伴','IF','他们可能需要一点时间组织语言，更愿意在安心的环境里谈自己的想法与需要。','伙伴对活动安排有顾虑时，可以私下问一个具体问题，给他们思考和回应的时间。','“这个安排里，有没有哪一部分让你不舒服？想好了再告诉我也可以。”'],
 ['边聊边想，重视理由的伙伴','ET','他们可能通过讨论检验想法，想知道目标、证据和方案各自的利弊。','讨论庆典预算时，可以先说清需要解决的问题，再一起比较两三个可行方案。','“我们先比较成本和效果，你觉得哪个理由最站得住？”'],
 ['先想再说，重视理由的伙伴','IT','他们可能先独立分析，再给出经过整理的意见。具体资料与清楚的问题，能帮助他们参与。','需要他们评估旅行路线时，可以提前发时间、预算和备选路线，再约定一起讨论的时间。','“这是两条路线和已知条件，你看完后，我们再一起选。”']
];
window.renderResultExperience=(result,main,second)=>{
 if(result.model!=='four-preferences-v2'&&result.model!=='four-preferences-v1')return;
 const scores=result.scores;
 // 概览基于用户作答；角色剧情保留在独立的故事区域。
 const overview=[
  ['从本次作答看，你更倾向把注意力投向外部的人与活动。想法往往在交流过程中逐渐清晰：先提出一个方向，再通过回应发现遗漏或补充理由。参与讨论、获得即时反馈，可能比独自反复推敲更容易让你进入状态。协作时，说明哪些是探索中的想法、哪些已成为决定，有助于他人准确理解你的表达。','从本次作答看，你更倾向先关注内在的思考与体验。面对新问题，你可能需要一段独立整理的时间，再分享较完整的意见。安静思考、书面准备或较少干扰的交流，可能更符合你的节奏。协作时，提前了解议题并约定回应时间，能让你的思考更容易被看见。','本次作答中，外向与内向偏好较接近。你可能在需要反馈时通过交流推进想法，也会在信息复杂时先独立整理。可以观察不同任务中，哪种方式让你更容易集中注意力与恢复精力，并据此安排讨论和独处的时间。'],
  ['获取信息时，你更倾向从具体事实、实际经验与可观察的细节入手。学习新内容时，实例、示范和清楚的操作步骤可能更容易帮助你建立理解。评估方案时，你会关心它在现实条件下怎样实施、已有经验能提供什么依据；在核对可行性的同时，也可以留意尚未尝试的新路径。','获取信息时，你更倾向先把握整体联系、背后的含义与未来可能。学习新内容时，你可能希望先理解原理与全貌，再把细节放回其中。面对方案，你容易关注它还能怎样发展、能否换一种思路；将构想连接到具体证据与实施步骤，有助于他人跟上你的思考。','获取信息时，本次作答没有明显偏向具体事实或整体联系。理解新内容时，可以先建立整体框架，再用实例检验；也可以从真实细节出发，归纳它们背后的规律。值得观察的是，面对陌生问题，你通常先寻找哪一种线索，以及另一种线索何时能帮助你补全理解。'],
  ['作出决定时，你更倾向比较逻辑关系、因果与一致的标准。遇到分歧，你可能先追问证据是否充分、规则能否同样适用于不同方案，而不是立即表态。清楚说明评估条件能帮助合作；同时了解决定对具体人的影响，也能让判断包含更完整的信息。','作出决定时，你更倾向从个人价值与相关人的处境出发。你关心方案是否符合真正重视的事情，以及不同选择会给人带来怎样的影响。遇到分歧，你可能先了解各方的需求，再寻找可以接受的安排。把重要价值、现实条件与自己的边界说明清楚，能让他人更理解你的判断依据。','作出决定时，本次作答中的逻辑标准与价值考虑较接近。你可以同时比较方案的证据、成本与后果，也考虑它对相关人的意义。遇到两种依据冲突的情况，明确哪些条件必须满足、哪些需求可以协商，会比只追求一个面面俱到的答案更容易推进决定。'],
  ['安排外部事务时，你更倾向先确定目标、步骤与完成时间。明确的计划能减少悬而未决的事项，让你把注意力集中到推进工作上。合作中，你可能希望尽早确认分工与约定；为变化预留调整空间，则能帮助计划适应新的条件。','安排外部事务时，你更倾向保持选择的余地，让行动随新信息调整。比较不同路径、实际尝试后再决定，可能比过早固定全部步骤更适合你。合作中，保留弹性有助于应对变化；同时约定必要的期限与阶段成果，能让他人知道事情怎样向前推进。','安排事务时，本次作答中的规划与灵活调整较接近。你可能愿意先确定必要的时间和责任，同时让尚未明确的部分保留变化。对于合作任务，可以把必须兑现的约定与可以调整的细节区分开，既保留探索空间，也让进度清楚可见。']
 ];
 $('result-description').replaceChildren(...overview.map((texts,i)=>el('p',texts[Math.abs(scores[i]-.5)<.1?2:scores[i]>=.5?0:1])));
 const clear=scores.map((value,i)=>({value,i})).filter(({value})=>Math.abs(value-.5)>=.1).sort((a,b)=>Math.abs(b.value-.5)-Math.abs(a.value-.5)).slice(0,2);
 const benefits=[['及时交换想法，推动讨论。','独立整理信息，提供经过思考的意见。'],['核对细节，让方案有事实依据。','发现联系，为问题提出新的路径。'],['明确判断标准，比较方案的利弊。','辨认不同需求，让选择兼顾重要价值。'],['明确步骤与期限，帮助协作形成进度。','根据变化调整方案，保留探索空间。']];
 const reminders=[['将初步想法与最终决定区分清楚。','让他人知道你需要思考时间，并约定回应时机。'],['也留意既有经验之外的新解释。','将整体构想落实为可核对的细节。'],['说明理由时，也询问对方的具体处境。','照顾他人需要时，也明确自己的边界与判断依据。'],['条件变化时，重新检查原有安排。','保留选择的同时，明确阶段目标与收尾时间。']];
 $('result-strength').textContent=clear.length?clear.map(({value,i})=>benefits[i][value>=.5?0:1]).join(''):'本次四项偏好均接近两端，可结合具体任务选择不同方式。';
 $('result-edge').textContent=clear.length?clear.map(({value,i})=>reminders[i][value>=.5?0:1]).join(''):'先明确当前任务需要什么，再选择表达、判断与安排方式。';
 const host=$('dimension-cards');host.replaceChildren();
 dimensions.forEach(([title,key,subject],i)=>{
  const v=scores[i],close=Math.abs(v-.5)<.1,p=preferences[key[v>=.5?0:1]],card=el('article','', 'dimension-card');
  const top=el('div','', 'dimension-card-top');top.append(el('h3',title),el('span',close?'两种方式都常用':p[0]+' · '+key[v>=.5?0:1],'dimension-rank'));card.append(top,el('p',subject,'dimension-subject'));
  const meter=el('div','','dimension-meter'),fill=el('i','');fill.style.width=(v*100)+'%';meter.append(fill);card.append(meter,el('div',`${key[0]} ${Math.round(v*100)}% · ${key[1]} ${Math.round((1-v)*100)}%`,'dimension-rate'));
  const blocks=close?[['偏好概述',`本次作答在「${preferences[key[0]][0]}」与「${preferences[key[1]][0]}」之间没有明显偏向。`],['两种方式',preferences[key[0]][1]+' '+preferences[key[1]][1]]]:[['偏好概述',p[1]],['日常表现',p[2]]];
  blocks.forEach(([label,text])=>{const b=el('div','','preference-explanation');b.append(el('strong',label),el('p',text));card.append(b);});host.append(card);
 });
 const dimensionTitle=host.closest('.profile-card').querySelector('.profile-sub');dimensionTitle.textContent='偏好概述 · 日常表现';
 const social=document.querySelector('.social-card');social.querySelector('h2').textContent='你的社交风格';social.querySelector('.profile-sub').textContent='交流节奏 · 决策依据';
 const e=scores[0],f=1-scores[2],ec=Math.abs(e-.5)<.1,fc=Math.abs(f-.5)<.1;
 $('social-style-kicker').textContent='本次交流偏好';
 $('social-style-name').textContent=(ec?'灵活交流':e>=.5?'互动探索':'独立思考')+' · '+(fc?'综合判断':f>=.5?'价值导向':'逻辑导向');
 $('social-style-description').textContent=(ec?'你会按场景选择边聊边想，或先独自整理。':e>=.5?'你常通过交流理清思路，伙伴的回应能帮助你把想法继续往前推。':'你常先独自整理，再分享较清楚的想法；提前知道讨论内容，会让你更容易参与。')+(fc?'商量决定时，你会同时考虑判断理由和相关人的处境。':f>=.5?'商量决定时，你更想先听清大家在意什么，再寻找能照顾重要需要的安排。':'商量决定时，你更想先弄清理由与条件，再比较方案是否可行、公平。');
 const dot=$('social-dot');dot.style.left=(18+e*64)+'%';dot.style.top=(82-f*64)+'%';
 social.querySelectorAll('.social-q').forEach((n,i)=>n.textContent=['先想再说 · 感受','边聊边想 · 感受','先想再说 · 理由','边聊边想 · 理由'][i]);
 social.querySelector('.social-axis-y').textContent='感受与价值';social.querySelector('.social-axis-x').textContent='逻辑与原则';
 const map=social.querySelector('.social-map');map.querySelectorAll('.social-axis-side').forEach(n=>n.remove());map.append(el('span','先想再说','social-axis-side axis-left'),el('span','边聊边想','social-axis-side axis-right'));
 map.setAttribute('aria-label','交流节奏与决策依据：横轴从先想再说到边聊边想，纵轴从逻辑与原则到感受与价值；角色标志表示本次作答位置。');
 $('social-warmth-score').textContent='决定时：'+(fc?'两种依据接近':f>=.5?'先看感受与价值':'先看理由与原则');$('social-agency-score').textContent='交流时：'+(ec?'两种节奏接近':e>=.5?'边聊边想':'先想再说');
 const list=(id,texts)=>$(id).replaceChildren(...texts.map(t=>el('li',t)));
 list('social-strengths',[ec?'能够按讨论场景调整表达节奏。':e>=.5?'愿意发起交流，让伙伴及时交换信息。':'愿意留出思考时间，把想法整理清楚再分享。',fc?'商量决定时，会兼顾方案理由与伙伴需要。':f>=.5?'会询问伙伴的需要，让每个人有表达的机会。':'会说明判断依据，让讨论有清楚的重点。']);
 social.querySelector('.social-growth-grid article:nth-child(2) h3').textContent='让伙伴更懂你';list('social-growth',[e>=.5?'“我想边聊边理清思路，先说的还不是最后决定。”':'“我想先整理一下，晚一点把想法完整告诉你。”',f>=.5?'“我想先了解这件事对大家的影响，再决定怎么做。”':'“我想先比较理由和条件，也想听听你的需要。”']);
 social.querySelector('.social-partners h3').textContent='小马宝莉中的伙伴故事';
 const partners=social.querySelector('.social-partners');
 partners.querySelector('.partner-story-intro')?.remove();partners.querySelector('.partner-spoiler-note')?.remove();
 const intro=el('p','从《小马宝莉》的故事中，看看伙伴如何面对性格差异、误会与合作。每则先概括剧情，再整理值得留意的相处细节。','partner-story-intro');
 const spoiler=el('p','剧透提示：以下内容涉及部分剧集的情节发展与结局，请按自己的观看进度阅读。','partner-spoiler-note');
 partners.querySelector('h3').after(intro,spoiler);
 const tips=$('social-partner-tips');tips.replaceChildren();const stories=window.selectPartnerStories(main.slug);stories.forEach(({title,episode,story,insight})=>{const a=el('article','');a.append(el('strong',title),el('span',window.PONY_EPISODES.label(episode),'partner-code'));[['剧情梗概',story],['相处观察',insight]].forEach(([label,text])=>{const row=el('div','','partner-example');row.append(el('span',label),el('p',text));a.append(row);});tips.append(a);});
 let storyDisclosure=partners.querySelector('.partner-story-disclosure');
 if(!storyDisclosure){
  storyDisclosure=el('details','','partner-story-disclosure');
  const summary=el('summary','展开伙伴故事（含剧透）');storyDisclosure.append(summary);partners.append(storyDisclosure);
  storyDisclosure.addEventListener('toggle',()=>{summary.textContent=storyDisclosure.open?'收起伙伴故事':'展开伙伴故事（含剧透）';});
 }
 storyDisclosure.open=false;storyDisclosure.append(tips);
 const method=social.querySelector('.social-method');method.replaceChildren(el('span','参考 MBTI 的 E/I 交流偏好与 T/F 决策偏好。'));const source=el('a','了解沟通偏好');source.href='https://www.myersbriggs.org/type-in-my-life/personality-type-and-relationships/';source.target='_blank';source.rel='noopener noreferrer';method.append(source);
 $('primary-duo-why').textContent=main.description;$('secondary-why').textContent=second.description;$('secondary-tagline').classList.add('hidden');
 const plain={E:'边聊边想',I:'先想再说',S:'关注事实与细节',N:'寻找联系与可能',T:'比较理由与原则',F:'考虑感受与需要',J:'喜欢提前安排',P:'喜欢灵活调整'};
 const subjects=['交流方式','信息关注','决定依据','生活安排'];
 const tags=(id,values,person)=>{
  const host=$(id);host.replaceChildren();
  const hint=el('p',person?`${person.name}的表达方式`:'你的四种偏好','duo-preference-hint');host.append(hint);
  values.forEach((v,i)=>{
   const key=dimensions[i][1],close=Math.abs(v-.5)<.1,letter=key[v>=.5?0:1];
   const detail=el('article','','duo-preference');
   const summary=el('div','','duo-preference-heading');summary.append(el('small',close?key:letter),el('span',subjects[i],'duo-preference-label'),el('strong',close?'两种方式都常用':plain[letter]));
   const text=close?`在「${plain[key[0]]}」和「${plain[key[1]]}」之间，会随情境采用不同方式。`:preferences[letter][1];
   const explanation=el('p',person?text.replaceAll('你',person.name):text);explanation.hidden=true;detail.append(summary,explanation);host.append(detail);
  });
 };
 document.querySelectorAll('.duo-pony-art').forEach(img=>{
 const b=window.ART_BOUNDS?.[img.getAttribute('src').split('?')[0]];if(!b)return;
 const [w,h,x,y,r,bottom]=b,frame=innerWidth<=650?240:300,target=innerWidth<=650?200:230,scale=Math.min(frame/(r-x),target/(bottom-y));
 img.style.width=w*scale+'px';img.style.height=h*scale+'px';img.style.maxWidth='none';
 img.style.position='absolute';img.style.left=(frame-(r-x)*scale)/2-x*scale+'px';img.style.top=target-(bottom-y)*scale-y*scale+'px';
 });
 tags('primary-duo-tags',scores);tags('secondary-tags',second.profile,second);
 const heading=document.querySelector('.duo-heading');document.querySelector('.duo-expand-all')?.remove();
 const toggle=el('button','展开全部偏好说明','duo-expand-all');toggle.type='button';toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-controls','primary-duo-tags secondary-tags');
 toggle.addEventListener('click',()=>{
 const expanded=toggle.getAttribute('aria-expanded')!=='true';
 document.querySelectorAll('.duo-preference').forEach(card=>{card.classList.toggle('is-expanded',expanded);card.querySelector('p').hidden=!expanded;});
 toggle.setAttribute('aria-expanded',String(expanded));toggle.textContent=expanded?'收起全部偏好说明':'展开全部偏好说明';
 });const hint=document.querySelector('#primary-duo-tags .duo-preference-hint');hint.append(toggle);
 document.querySelector('#secondary-reading article:first-child p').textContent=second.description;
 document.querySelector('.duo-heading>p').textContent='一位像你最熟悉的自己，一位带你看见另一种表达。看看他们的故事，哪些细节让你觉得亲切？';

 // Preference definitions: Myers & Briggs Foundation; Dunning, Introduction to Type and Communication.
 // Scenes and example sentences below are editorial applications, not official test items or diagnostic findings.
 const communicationNotes={
 E:['表达中的探索','讨论旅行安排时，你可能先说出几个还没定下来的方案，借大家的回应继续思考。伙伴却可能把每句话当成承诺，觉得你总在改主意。','“我先说几个备选想法，还没有决定；确认后我会单独告诉你。”','表达与倾听','提出一个方案后，先停下来问伙伴的意见，再补充下一个想法。讨论结束时，用一句话确认最终决定，区分探索和承诺。'],
 I:['回应前的沉思','伙伴当场问你的意见时，你可能需要先整理信息。没有马上回应，可能被理解成不感兴趣，或不愿参与。','“我有在认真想，给我十分钟；想清楚后我会把意见告诉你。”','思考与回应','需要独处整理时，给伙伴一个具体的回应时间。即使结论还没形成，也可以先说出一个确定的关注点，让对方知道你在参与。'],
 S:['细节与可行性','筹备活动时，你可能先问人数、预算和具体步骤。提出新点子的伙伴可能以为你在挑错，或不愿接受新办法。','“我想让这个点子真的做成，先确认一下预算和需要准备的东西。”','经验与尝试','听到新方案时，先问它想改善什么，再检查细节。可以一起选一个小范围试做，既保留具体依据，也给新办法一次机会。'],
 N:['整体与可能性','你可能从一个活动主题联想到几个新玩法。需要明确步骤的伙伴可能不知道该先做什么，觉得你说得有趣却难以执行。','“我想做的是这个主题；第一步先确定场地，其他点子暂时放到备选里。”','构想与落实','选一个最想推进的点子，补上时间、资源和第一步。开始前请伙伴复述一下目标，确认彼此理解的是同一件事。'],
 T:['问题与逻辑','伙伴说活动没有做好时，你可能马上分析原因、提出改法。对方若正在难过，可能把解决问题的回应听成批评。','“我知道你为这件事花了很多心思。你想先说说感受，还是一起找办法？”','分析与理解','给建议前，先确认对方需要倾听还是方案。比较利弊时，也问一句这个安排会给谁带来什么负担，把影响具体说清楚。'],
 F:['感受与价值','分工时，你可能先问伙伴是否愿意、是否会感到压力。急着确定方案的人可能误以为你没有判断标准，或只是在迁就别人。','“我重视大家能接受这个分工，也会一起比较时间和工作量；这两点都需要考虑。”','关怀与边界','协调分工时，先说明你能承担什么、不能承担什么，再了解伙伴的情况。把关心转成明确条件，避免留下大家各自猜测的约定。'],
 J:['计划与确定性','出行前，你可能想尽早确定车次和集合时间。还在探索选择的伙伴可能感觉被催促，觉得你不愿听新想法。','“车次需要今天定；到了以后怎么玩，我们可以留一段自由时间。”','秩序与弹性','做计划时，把截止时间、预算等必要约定单独列出，其余部分留出调整空间。出现变化时，先核实影响，再决定哪些步骤需要重排。'],
 P:['开放与灵活性','你可能想多看几个选择，晚一点再定行程。需要提前准备的伙伴可能把暂未决定理解成没有重视共同安排。','“我还想比较两条路线，今晚八点前给你确定答复。”','探索与收尾','探索方案前，先和伙伴约定最晚何时决定、什么信息足以作出选择。到约定时间就给出当前可行的方案，让对方能继续准备。']
 };
 const strongest=scores.map((value,i)=>({value,i,strength:Math.abs(value-.5)})).sort((a,b)=>b.strength-a.strength||a.i-b.i).slice(0,2);
 const reading=$('secondary-reading');reading.querySelectorAll('article').forEach(card=>{if(card.querySelector('h3').textContent==='给这一面的成长提醒')card.remove();});
 const growth=el('article','','preference-insight-card'),misread=el('article','','preference-insight-card');growth.append(el('h3','成长方向'));misread.append(el('h3','容易被误会的点'));
 strongest.forEach(({value,i,strength})=>{
 const key=dimensions[i][1],close=strength<.1,letters=close?key.split(''):[key[value>=.5?0:1]];
 const g=el('div','','insight-example'),m=el('div','','insight-example');
 if(close){g.append(el('strong',dimensions[i][0]+'：给伙伴一个明确说明'),el('p','你在这一维度的两种方式之间切换。一起做事时，可以先说明这一次需要思考、讨论或调整的时间，再确认共同安排。'));m.append(el('strong',dimensions[i][0]+'：不同场景采用不同方式'),el('p','你在这一维度没有明显偏向一端。伙伴如果只见过你某一次的表现，可能不理解你为什么换了做法。可以解释这次有哪些条件发生了变化。'));}
 else {const n=communicationNotes[letters[0]];g.append(el('strong',n[3]),el('p',n[4]));m.append(el('strong',n[0]),el('p',n[1]));}
 growth.append(g);misread.append(m);
 });reading.append(growth,misread);

 document.querySelector('.duo-footnote')?.remove();
};
})();

