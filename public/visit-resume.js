// Same-browser, short-lived navigation recovery. No network request required.
(function(w){
 const key='ponyRecentVisit-v1',ttl=15*60*1000;let expired=false;
 const valid=r=>r&&r.schema===1&&Number.isFinite(r.savedAt)&&['quiz','result'].includes(r.view)&&(
  r.view==='quiz'?r.draft&&Array.isArray(r.draft.answers)&&r.draft.answers.length===32&&Array.isArray(r.draft.choices)&&r.draft.choices.length===16&&Number.isInteger(r.draft.index)&&r.draft.index>=0&&r.draft.index<=48:
  typeof r.resultId==='string'&&/^[A-Za-z0-9_-]+$/.test(r.resultId)&&r.result&&Number.isInteger(r.result.primary)&&Number.isInteger(r.result.secondary));
 function clear(){try{localStorage.removeItem(key);}catch{}}
 function read(){try{const raw=localStorage.getItem(key);if(!raw)return null;const r=JSON.parse(raw),age=Date.now()-r.savedAt;if(!valid(r)||age< -60000){clear();return null;}if(age>=ttl){expired=true;clear();return null;}return r;}catch{clear();return null;}}
 function write(data){const r={...data,schema:1,savedAt:Date.now()};if(!valid(r))return false;try{localStorage.setItem(key,JSON.stringify(r));expired=false;return true;}catch{return false;}}
 let initial=read();
 // Promote an existing tab-only draft once, so an update does not lose progress.
 if(!initial&&!expired)for(const legacyKey of ['ponyFestival48-v4','ponyNarrative48-v4'])try{
  const draft=JSON.parse(sessionStorage.getItem(legacyKey)||'null');if(!draft||draft.resultId)continue;
  if(draft.savedAt&&Date.now()-draft.savedAt>=ttl){expired=true;sessionStorage.removeItem(legacyKey);continue;}
  const normalized={...draft,formVersion:draft.formVersion||draft.version,savedAt:Date.now()},record={view:'quiz',draft:normalized,ui:{scrollY:0,chapterOpen:false}};
  if(valid({...record,schema:1,savedAt:Date.now()})&&typeof normalized.formVersion==='string'&&write(record)){sessionStorage.setItem('ponyFestival48-v4',JSON.stringify(normalized));initial=read();break;}
 }catch{}
 w.PONY_VISIT={key,ttl,initial,read,write,clear,get expired(){return expired;}};
})(window);
