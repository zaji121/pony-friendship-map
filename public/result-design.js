(()=>{
const node=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls||'';if(text)n.textContent=text;return n;};
const photo=(p,kind='profile')=>{const image=node('img','chapter-pony');image.src=window.FULLBODY_ART?.[p.slug]?.[kind]||window.EXPANDED_ART?.[p.slug]?.file||document.querySelector('#result-portrait img')?.src;image.alt=p.name;image.loading='lazy';return image;};
window.designFriendshipReport=(result,main,second)=>{
 const panel=document.getElementById('you-panel');if(!panel)return;
 document.querySelector('.result').classList.add('illustrated-report');
 const hero=document.querySelector('.result-hero');hero.classList.add('report-cover');
 if(!hero.querySelector('.cover-caption')){hero.append(node('p','cover-caption','每一种友谊，都有属于自己的魔法。'));}
 const intro=hero.querySelector('.result-pretitle');intro.textContent='在小马谷，与你相近的伙伴是';
 // 封面与档案共用同一个角色形象，切换只移动已有元素。
 const facts=document.getElementById('profile-facts');
 let coverProfile=hero.querySelector('.cover-profile');
 if(!coverProfile){
  const oldProfile=facts.closest('.profile-card');
  coverProfile=node('section','cover-profile');coverProfile.id='cover-profile';coverProfile.hidden=true;
  coverProfile.append(node('span','eyebrow','PONY PROFILE'),node('h2','','角色档案'),document.getElementById('profile-role'),facts);
  hero.append(coverProfile);oldProfile.hidden=true;oldProfile.classList.add('hidden');
  const toggle=node('button','cover-profile-toggle','✧ 查看档案');toggle.type='button';toggle.setAttribute('aria-controls','cover-profile');toggle.setAttribute('aria-expanded','false');hero.append(toggle);
  const portrait=document.getElementById('result-portrait');portrait.setAttribute('role','button');portrait.tabIndex=0;portrait.setAttribute('aria-controls','cover-profile');
  let profileHideTimer;
  const switchProfile=()=>{
   const open=!hero.classList.contains('profile-open');clearTimeout(profileHideTimer);
   if(open){coverProfile.hidden=false;void coverProfile.offsetWidth;}
   hero.classList.toggle('profile-open',open);
   if(!open)profileHideTimer=setTimeout(()=>{if(!hero.classList.contains('profile-open'))coverProfile.hidden=true;},300);
   toggle.textContent=open?'← 返回封面':'✧ 查看档案';toggle.setAttribute('aria-expanded',String(open));portrait.setAttribute('aria-expanded',String(open));portrait.setAttribute('aria-label',open?'返回角色封面':'查看'+main.name+'的角色档案');
  };
  toggle.onclick=switchProfile;portrait.onclick=switchProfile;portrait.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();switchProfile();}};
 }
 hero.querySelector('.cover-character-identity')?.remove();
 coverProfile.querySelector('.cover-profile-name')?.remove();
 const iconPaths=['M9 12l2 2 4-4 M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0','M12 8v5 M12 16h.01 M10.3 4.8L2.8 18a1.3 1.3 0 0 0 1.1 2h16.2a1.3 1.3 0 0 0 1.1-2L13.7 4.8a2 2 0 0 0-3.4 0'];
 storyIconUpdate();
 function storyIconUpdate(){document.querySelectorAll('.insight-grid .insight-icon').forEach((host,i)=>{host.replaceChildren();const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');const path=document.createElementNS(svg.namespaceURI,'path');path.setAttribute('d',iconPaths[i]);svg.append(path);host.append(svg);});}
 const story=document.querySelector('.result-main-card');story.id='report-story';
 const radar=document.querySelector('.radar-card');radar.id='report-portrait';
 const prefs=document.getElementById('dimension-cards').closest('.profile-card');prefs.id='report-preferences';
 const social=document.querySelector('.social-card');social.id='report-relationships';
 const career=document.querySelector('.career-card');career.id='report-career';
 const duo=document.querySelector('.secondary-card');duo.id='report-partners';social.before(career);
 const chapters=[[story,'01','性格概览'],[radar,'02','偏好画像'],[prefs,'03','偏好解读'],[career,'04','职业探索'],[social,'05','你的社交风格'],[duo,'06','主副角色']];
 chapters.forEach(([section,num,title])=>{section.classList.add('report-chapter');const titleHeading=section.querySelector('h2');if(titleHeading)titleHeading.textContent=title;let label=section.querySelector('.chapter-number');if(!label){label=node('span','chapter-number',num);const heading=section.querySelector('h2');heading?.prepend(label);}});
 let layout=document.querySelector('.report-layout');
 if(!layout){layout=node('div','report-layout');panel.before(layout);layout.append(panel);const aside=node('aside','report-nav');aside.setAttribute('aria-label','结果章节导航');layout.append(aside);}
 const aside=layout.querySelector('.report-nav');aside.replaceChildren();
 const avatar=node('div','nav-character');avatar.append(photo(main),node('div','nav-character-name',main.name),node('small','',result.type||'你的友谊伙伴'));aside.append(avatar,node('p','nav-label','这份友谊地图'));
 chapters.forEach(([section,num,title])=>{const a=node('a','report-nav-link');a.href='#'+section.id;a.append(node('span','',num),node('span','',title));aside.append(a);});
 const share=node('button','nav-share','分享我的友谊地图 ↗');share.type='button';share.onclick=()=>document.getElementById('copy-link').click();aside.append(share);
 prefs.querySelector('.chapter-art-banner')?.remove();
 social.querySelector('.chapter-art-banner')?.remove();
 social.querySelector('.social-interaction')?.remove();
 const interaction=window.PONY_INTERACTIONS?.[main.slug];
 if(interaction){const figure=node('figure','social-interaction');const img=node('img');img.src=interaction.file;img.alt=interaction.caption;img.loading='lazy';figure.append(img,node('figcaption','',interaction.caption));social.querySelector('.profile-title').after(figure);}
 const careerHero=career.querySelector('.career-hero');if(careerHero)careerHero.classList.add('illustrated-career');
 story.querySelector('.story-illustration')?.remove();
 document.querySelectorAll('.dimension-card').forEach((card,i)=>{card.style.setProperty('--chapter-color',['#7e71aa','#c5a454','#70a798','#b884a4'][i]);card.classList.add('colored-preference');});
 window.reportObserver?.disconnect();window.reportObserver=new IntersectionObserver(entries=>{const visible=entries.filter(x=>x.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];if(!visible)return;aside.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.hash==='#'+visible.target.id));},{rootMargin:'-8% 0px -55% 0px'});chapters.forEach(([section])=>window.reportObserver.observe(section));
};
})();

