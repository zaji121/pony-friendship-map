const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
(async()=>{
 const root=path.resolve('public');let origin;
 const server=http.createServer(async(req,res)=>{try{
  const url=new URL(req.url,origin);
  if(url.pathname==='/config.js'){res.setHeader('Content-Type','application/javascript');res.end('window.SITE_CONFIG='+JSON.stringify({basePath:'/',apiBase:origin+'/quiz-api'})+';');return;}
  if(url.pathname==='/quiz-api/start'){res.setHeader('Content-Type','application/json');res.end(JSON.stringify({token:'a'.repeat(48)}));return;}
  const target=path.resolve(root,'.'+(url.pathname==='/'?'/index.html':url.pathname));if(!target.startsWith(root+path.sep)){res.writeHead(403).end();return;}
  res.setHeader('Content-Type',({'.js':'application/javascript','.css':'text/css','.html':'text/html','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp'})[path.extname(target)]||'application/octet-stream');res.end(await fs.promises.readFile(target));
 }catch(e){res.writeHead(500).end(e.message);}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));origin='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({headless:true,...(process.env.BROWSER_EXECUTABLE?{executablePath:process.env.BROWSER_EXECUTABLE}:{})});
 const iphone='Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 MicroMessenger/8.0.54 NetType/WIFI Language/zh_CN';
 const android='Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Version/4.0 Chrome/124.0.0.0 Mobile Safari/537.36 MicroMessenger/8.0.54';
 const metrics=[];
 try{for(const spec of [{width:320},{width:375},{width:390},{width:430},{width:393,android:true},{width:390,largeText:true}].filter(s=>!process.env.BASELINE_APP||(s.width===390&&!s.largeText))){
  for(const inflated of [false,true]){
   const context=await browser.newContext({viewport:{width:spec.width,height:844},isMobile:true,hasTouch:true,userAgent:spec.android?android:iphone});const page=await context.newPage();
   if(process.env.BASELINE_APP)await page.route('**/app.js*',route=>route.fulfill({contentType:'application/javascript',body:fs.readFileSync(process.env.BASELINE_APP,'utf8')}));
   await page.addInitScript(()=>sessionStorage.setItem('ponyFestival48-v4',JSON.stringify({formVersion:'festival-48-single-20261101-v7',index:8,answers:Array(32).fill(0),choices:Array.from({length:16},()=>({first:0,second:null})),completedTasks:Array.from({length:12},(_,i)=>i),finalAnswers:[null,null,null,null],openedChapters:[0,1,2,3],celebratedStages:[],token:'a'.repeat(48)})));
   // Reproduce hidden-block font inflation separately from visible quiz text.
   if(inflated||spec.largeText)await page.route('**/mobile.css*',async route=>{const response=await route.fetch();await route.fulfill({response,body:(await response.text())+(inflated?'\nbody>div[aria-hidden="true"]>div{font-size:38px!important;line-height:60px!important}':'')+(spec.largeText?'\n#quiz .answer-option{font-size:19.5px;line-height:1.7}':'')});});
   await page.goto(origin+'/?quiz=1');await page.locator('#quiz:not(.hidden)').waitFor();await page.waitForFunction(()=>parseFloat(document.querySelector('#quiz').style.getPropertyValue('--quiz-answer-height'))>0);
   await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
   assert((await page.locator('#question-text').textContent()).includes('筹备会结束'));
   const inspect=()=>page.locator('.answer-option').evaluateAll(nodes=>nodes.map(n=>{const r=n.getBoundingClientRect(),s=getComputedStyle(n),copy=n.querySelector('.answer-copy');return {w:r.width,h:r.height,textH:copy.getBoundingClientRect().height,availableH:n.clientHeight-parseFloat(s.paddingTop)-parseFloat(s.paddingBottom),font:s.fontSize};}));
   const boxes=await inspect();metrics.push({...spec,inflated,...boxes[0]});
   if(!process.env.BASELINE_APP){
    assert(boxes.every(b=>Math.abs(b.h-boxes[0].h)<1&&Math.abs(b.w-boxes[0].w)<1));assert(boxes[0].h<=(spec.largeText?200:150),JSON.stringify(metrics.at(-1)));
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    const overflowing=await page.evaluate(()=>{const f=window.PONY_QUIZ_48,copy=document.querySelector('.answer-copy'),button=copy.closest('button'),s=getComputedStyle(button),maxH=button.clientHeight-parseFloat(s.paddingTop)-parseFloat(s.paddingBottom),old=copy.textContent;const labels=[...f.questions.flatMap(q=>q[1].map(o=>o[0])),...f.scenes.flatMap(q=>q.options.map(o=>o.text)),...f.contrasts.flatMap(c=>[c[5],c[6]]),...f.personalizedQuestions.flatMap(q=>[q.leftText,q.rightText]),...Object.values(f.followupActions||window.PONY_NARRATIVE_MATCH.followupActions)];const bad=labels.filter(text=>{copy.textContent=text;return copy.getBoundingClientRect().height>maxH+1;});copy.textContent=old;return bad;});assert.deepEqual(overflowing,[],'Every fixed and adaptive option must fit without clipping');
    await page.locator('.answer-option').first().click();assert(Math.abs((await inspect())[0].h-boxes[0].h)<1);await page.locator('#next-button').click();assert(Math.abs((await inspect())[0].h-boxes[0].h)<1);
    if(spec.width===390&&!spec.largeText&&!inflated){await page.locator('#prev-button').click();await page.locator('.question-panel').screenshot({path:'tmp/wechat-answer-panel.png'});}
    await page.setViewportSize({width:spec.width+25,height:680});await page.waitForTimeout(100);const resized=await inspect();assert(resized.every(b=>b.textH<=b.availableH+1));
   }
   await context.close();
  }
 }
 console.log(JSON.stringify(metrics));if(!process.env.BASELINE_APP){for(let i=0;i<metrics.length;i+=2)assert(Math.abs(metrics[i].h-metrics[i+1].h)<1,'Hidden-block inflation must not change visible answer height');console.log('Passed: 320–430px iOS/Android WeChat user agents, inflated offscreen text, larger visible text, all option-bank copy fits, equal rows, selected/next-question stability, viewport resize. This is browser emulation, not a real WeChat device test.');}
 }finally{await browser.close();server.closeAllConnections();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
