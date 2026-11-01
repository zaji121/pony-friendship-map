const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('node:fs'),http=require('node:http'),path=require('node:path'),assert=require('node:assert/strict');
(async()=>{
 fs.mkdirSync('tmp',{recursive:true});let origin,starts=[],exports=[];
 const records=[1,2].map(n=>({id:'00000000-0000-4000-a000-00000000000'+n,purchase:'PONY-TEST'+n,invite:'INVITE-TEST'+n,message:'欢迎来到小马谷！\n测评密码：PONY-TEST'+n+'\n赠送邀请码：INVITE-TEST'+n,label:'test',ready:true,enabled:true,purchase_used:0,invite_used:0,expires_at:null}));
 const server=http.createServer(async(req,res)=>{try{
  const url=new URL(req.url,origin);let body='';for await(const c of req)body+=c;
  const send=data=>{res.setHeader('Content-Type','application/json');res.end(JSON.stringify(data));};
  if(url.pathname==='/config.js'){res.setHeader('Content-Type','application/javascript');res.end('window.SITE_CONFIG='+JSON.stringify({basePath:'/',apiBase:origin+'/quiz-api'})+';');return;}
  if(url.pathname==='/quiz-api/start'){const input=JSON.parse(body);starts.push(input);assert(input.code);assert.match(input.start_id,/^[a-f0-9]{48}$/);if(starts.length===1){res.statusCode=503;send({error:'网络测试，请重试。'});}else send({token:input.start_id});return;}
  if(url.pathname==='/quiz-api/admin/bundles'){send({bundles:records,has_more:false,stats:{ready:100,issued:0,purchase_used:0,invite_used:0,settings:{auto_replenish:true,low_stock:20,target_stock:100}},exports:[]});return;}
  if(url.pathname==='/quiz-api/admin/exports'){const input=JSON.parse(body);exports.push(input);send({export_id:input.request_id,bundles:records});return;}
  const file=path.resolve('public','.'+(url.pathname==='/'?'/index.html':url.pathname));assert(file.startsWith(path.resolve('public')+path.sep));res.setHeader('Content-Type',({'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml'})[path.extname(file)]||'application/octet-stream');res.end(fs.readFileSync(file));
 }catch(e){res.statusCode=500;res.end(e.message);}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));origin='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({headless:true,...(process.env.BROWSER_EXECUTABLE?{executablePath:process.env.BROWSER_EXECUTABLE}:{})});
 try{
  const page=await browser.newPage({viewport:{width:390,height:844}});await page.goto(origin+'/?quiz=1');
  if(await page.locator('.mail-open').isVisible())await page.locator('.mail-open').click();
  await page.locator('#access-code').waitFor({state:'visible'});assert.equal(starts.length,0);
  await page.locator('#start-button').click();await page.waitForTimeout(100);assert.equal(starts.length,0);
  await page.locator('#access-code').fill('pony-test1');await page.locator('#start-button').click();await page.locator('#gate-error').filter({hasText:'网络测试'}).waitFor();
  await page.screenshot({path:'tmp/paid-gate-mobile.png'});await page.locator('#start-button').click();await page.locator('#quiz').waitFor({state:'visible'});
  assert.equal(starts.length,2);assert.equal(starts[0].start_id,starts[1].start_id);assert.equal(starts[1].code,'PONY-TEST1');
  await page.reload();await page.locator('#quiz').waitFor({state:'visible'});assert.equal(starts.length,2,'Reload must not consume another code');
  const admin=await browser.newPage({viewport:{width:390,height:844},acceptDownloads:true});await admin.addInitScript(()=>sessionStorage.setItem('ponyAdmin',JSON.stringify({access_token:'admin-test'})));await admin.goto(origin+'/admin.html');await admin.locator('#codes tr').first().waitFor();
  assert.equal(await admin.locator('#codes tr').count(),2);assert.equal(await admin.locator('#stock-summary>div').count(),4);
  assert(await admin.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await admin.screenshot({path:'tmp/bundle-admin-mobile.png',fullPage:true});
  await admin.locator('#export-count').fill('2');await admin.locator('#export-form button[type=submit]').click();await admin.locator('#export-result').waitFor({state:'visible'});assert.equal(exports.length,1);assert.equal(exports[0].count,2);
  let downloaded=admin.waitForEvent('download');await admin.locator('#download-csv').click();let file=await downloaded;await file.saveAs('tmp/bundle-ui-export.csv');assert(fs.readFileSync('tmp/bundle-ui-export.csv','utf8').includes('INVITE-TEST2'));
  downloaded=admin.waitForEvent('download');await admin.locator('#download-txt').click();file=await downloaded;await file.saveAs('tmp/bundle-ui-export.txt');assert.equal(fs.readFileSync('tmp/bundle-ui-export.txt','utf8').split('\r\n').length,2);assert.equal(exports.length,1,'Downloading a second format must not allocate more codes');
  console.log('Passed: single shared code entry, no blank bypass, stable retry, reload without another use, mobile admin layout, paired CSV/TXT downloads without duplicate allocation.');
 }finally{await browser.close();server.closeAllConnections();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
