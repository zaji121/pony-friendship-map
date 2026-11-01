const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
(async()=>{
 const {scoreAnswers}=await import(pathToFileURL(path.resolve('supabase/functions/quiz-api/quiz-data.js')).href);
 const input=JSON.parse(fs.readFileSync('scripts/fixtures/g6-policy-input.json','utf8'));
 const modern=scoreAnswers(input.answers,input.narrative);
 const legacy={primary:0,secondary:1,counts:[3,4,2,5,1,2],exposure:[12,12,12,12,12,12]};
 const results={modern,extremes:{...modern,scores:[0,1,.5,.875]},legacy};
 const root=path.resolve('public');let origin;
 const server=http.createServer(async(req,res)=>{try{
  const url=new URL(req.url,origin);
  if(url.pathname==='/config.js'){res.setHeader('Content-Type','application/javascript');res.end('window.SITE_CONFIG='+JSON.stringify({basePath:'/',apiBase:origin+'/quiz-api'})+';');return;}
  if(url.pathname.startsWith('/quiz-api/result/')){res.setHeader('Content-Type','application/json');res.end(JSON.stringify(results[url.pathname.split('/').pop()]));return;}
  const target=path.resolve(root,'.'+(url.pathname==='/'?'/index.html':url.pathname));if(!target.startsWith(root+path.sep)){res.writeHead(403).end();return;}
  res.setHeader('Content-Type',({'.js':'application/javascript','.css':'text/css','.html':'text/html','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp'})[path.extname(target)]||'application/octet-stream');res.end(await fs.promises.readFile(target));
 }catch(e){res.writeHead(500).end(e.message);}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));origin='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({headless:true,...(process.env.BROWSER_EXECUTABLE?{executablePath:process.env.BROWSER_EXECUTABLE}:{})});
 try{for(const key of Object.keys(results)){
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const page=await context.newPage();
  await page.addInitScript(()=>{window.posterDraw={texts:[],dots:[]};const p=CanvasRenderingContext2D.prototype,fill=p.fillText,arc=p.arc;p.fillText=function(text,x,y,...args){if(this.canvas.width===1080&&this.canvas.height===4800)posterDraw.texts.push({text:String(text),x,y});return fill.call(this,text,x,y,...args);};p.arc=function(x,y,r,...args){if(this.canvas.width===1080&&this.canvas.height===4800&&r===6)posterDraw.dots.push({x,y});return arc.call(this,x,y,r,...args);};});
  await page.goto(origin+'/?r='+key);await page.locator('#result:not(.hidden)').waitFor();
  const source=await page.locator('#trait-radar .radar-dots circle').evaluateAll(nodes=>nodes.map(n=>({x:+n.getAttribute('cx'),y:+n.getAttribute('cy')})));
  await page.locator('#save-image').click();await page.locator('.poster-save-dialog[open]').waitFor({timeout:20000});
  assert.equal(await page.locator('.poster-save-actions button').count(),1);
  assert((await page.locator('.poster-save-note').textContent()).includes('不会自动存入相册'));
  assert(!(await page.locator('.poster-save-dialog').textContent()).includes('长按'));
  assert(!(await page.locator('.poster-save-dialog>img').getAttribute('alt')).includes('长按'));
  const drawn=await page.evaluate(()=>posterDraw);assert.equal(drawn.dots.length,key==='legacy'?6:8);
  if(key!=='legacy'){
   for(let i=0;i<8;i++){assert(Math.abs((drawn.dots[i].x-540)/200-(source[i].x-360)/170)<.00001);assert(Math.abs((drawn.dots[i].y-2480)/200-(source[i].y-270)/170)<.00001);}
   const percentages=drawn.texts.filter(t=>t.y>2150&&t.y<2840).map(t=>t.text).filter(t=>t.endsWith('%'));
   const left=results[key].scores.map(v=>Math.round(v*100));assert.deepEqual(percentages,[...left,...left.map(v=>100-v)].map(v=>v+'%'));
   for(let i=0;i<4;i++)assert.equal(parseInt(percentages[i])+parseInt(percentages[i+4]),100);
  }
  const downloaded=page.waitForEvent('download');await page.getByRole('button',{name:'下载图片',exact:true}).click();const file=await downloaded;assert(file.suggestedFilename().endsWith('.png'));
  assert((await page.locator('.poster-save-note').textContent()).includes('不会自动存入相册'));
  assert(!(await page.locator('.poster-save-note').textContent()).includes('长按'));
  await page.waitForFunction(()=>document.querySelector('.poster-save-dialog>img').naturalHeight===4800);
  if(key==='modern'){
   await fs.promises.mkdir('tmp',{recursive:true});await file.saveAs('tmp/result-poster-with-radar.png');
   await page.screenshot({path:'tmp/poster-save-instructions-mobile.png'});
   const preview=await context.newPage();await preview.goto(origin+'/');await preview.evaluate(async src=>{const img=new Image();img.src=src;await img.decode();document.body.replaceChildren();const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1220;canvas.getContext('2d').drawImage(img,0,2040,1080,1220,0,0,1080,1220);canvas.style.width='540px';document.body.append(canvas);},await page.locator('.poster-save-dialog>img').getAttribute('src'));await preview.setViewportSize({width:560,height:630});await preview.locator('canvas').screenshot({path:'tmp/result-poster-radar-detail.png'});
  }
  await context.close();
 }
 console.log('Passed: PNG contains the same eight radar points and percentages as the report, including 0/50/100% cases; six-dimension historical exports retain six axes; mobile album/download instructions and one working download button.');
 }finally{await browser.close();server.closeAllConnections();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
