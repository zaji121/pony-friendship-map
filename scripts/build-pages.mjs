import {mkdir,readdir,readFile,writeFile,copyFile} from 'node:fs/promises';
import path from 'node:path';
import './audit-role-reachability.mjs';
import './audit-role-distribution.mjs';
const root=path.resolve(import.meta.dirname,'..');
const base=process.env.PAGES_BASE_PATH||'/';
if(!/^\/(?:[A-Za-z0-9_.-]+\/)*$/.test(base))throw new Error('PAGES_BASE_PATH must start and end with /.');
const apiBase=process.env.SUPABASE_API_URL;
if(!apiBase||!/^https:\/\/[a-z0-9-]+\.supabase\.co\/functions\/v1\/quiz-api$/.test(apiBase))throw new Error('Set SUPABASE_API_URL to your quiz-api function HTTPS URL.');
const config={basePath:base,apiBase,supabasePublishableKey:process.env.SUPABASE_PUBLISHABLE_KEY||''};
const dest=path.join(root,'dist');await mkdir(dest,{recursive:true});
async function copy(dir,relative=''){
 for(const item of await readdir(dir,{withFileTypes:true})){
  const rel=path.join(relative,item.name),src=path.join(dir,item.name),out=path.join(dest,rel);
  if(item.isDirectory()){await mkdir(out,{recursive:true});await copy(src,rel);continue;}
  if(/\.(js|css|html|svg|json)$/.test(item.name)){
   let text=await readFile(src,'utf8');
   // Root-relative assets in HTML, CSS and JS also work under /repository/.
   text=text.replace(/(["'`(=])\/(images\/|[a-zA-Z0-9_-]+\.(?:js|css|webp|png|svg)(?:[?"'`)]|$))/g,(_,lead,tail)=>lead+base+tail);
   if(item.name==='index.html')text=text.replace(/href="\/"/g,`href="${base}"`);
   if(rel==='config.js')text='window.SITE_CONFIG='+JSON.stringify(config)+';\n';
   await writeFile(out,text);
  }else await copyFile(src,out);
 }
}
await copy(path.join(root,'public'));
await writeFile(path.join(dest,'.nojekyll'),'');
// Old /r/id links gracefully redirect to a static-friendly query URL.
await writeFile(path.join(dest,'404.html'),String.raw`<!doctype html><meta charset="utf-8"><title>打开测评结果</title><script>const base=${JSON.stringify(base)};const m=location.pathname.slice(base.length).match(/^r\/([A-Za-z0-9_-]+)$/);location.replace(base+(m?'?r='+encodeURIComponent(m[1]):''));</script>`);
console.log('GitHub Pages files prepared in dist/.');
