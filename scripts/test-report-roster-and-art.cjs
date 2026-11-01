const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const assert=require('node:assert/strict'),crypto=require('node:crypto');

(async()=>{
  fs.mkdirSync('tmp',{recursive:true});
  const root=path.resolve('public');let origin;
  const server=http.createServer(async(req,res)=>{
    try{
      const url=new URL(req.url,origin);
      if(url.pathname==='/config.js'){
        res.setHeader('Content-Type','application/javascript');
        res.end('window.SITE_CONFIG='+JSON.stringify({basePath:'/',apiBase:origin+'/quiz-api'})+';');return;
      }
      if(url.pathname==='/quiz-api/admin/codes'){
        assert.equal(req.headers.authorization,'Bearer local-report-test');
        res.setHeader('Content-Type','application/json');res.end('{}');return;
      }
      const target=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
      assert(target.startsWith(root+path.sep));
      res.setHeader('Content-Type',({'.js':'application/javascript','.css':'text/css','.html':'text/html','.json':'application/json','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg'})[path.extname(target)]||'application/octet-stream');
      res.end(await fs.promises.readFile(target));
    }catch(e){res.statusCode=500;res.end(e.message);}
  });
  await new Promise(r=>server.listen(0,'127.0.0.1',r));origin='http://127.0.0.1:'+server.address().port;
  const browser=await chromium.launch({headless:true,...(process.env.BROWSER_EXECUTABLE?{executablePath:process.env.BROWSER_EXECUTABLE}:{})});
  const assetPath=url=>path.join(root,new URL(url,origin).pathname);
  const digest=url=>crypto.createHash('sha256').update(fs.readFileSync(assetPath(url))).digest('hex');
  try{
    const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});
    await page.addInitScript(()=>sessionStorage.setItem('ponyAdmin',JSON.stringify({access_token:'local-report-test'})));
    await page.goto(origin+'/?admin-preview=twilight');
    await page.locator('#admin-role-select').waitFor();
    const roles=await page.locator('#admin-role-select option').evaluateAll(ns=>ns.map(n=>({slug:n.value,name:n.textContent.split(' · ')[0]})));
    assert.equal(roles.length,36);const names=new Set(roles.map(r=>r.name));
    const rows=[],replaced=['cadance','shining-armor','diamond-tiara','discord','sunburst','bright-mac'];
    for(const role of roles){
      await page.locator('#admin-role-select').selectOption(role.slug);
      assert.equal(await page.locator('#primary-duo-name').textContent(),role.name);
      const secondary=await page.locator('#secondary-name').textContent();
      assert(names.has(secondary),role.slug+' has an inactive secondary: '+secondary);assert.notEqual(role.name,secondary);
      assert.equal(await page.locator('.character-card').count(),36);
      const art=await page.evaluate(slug=>({cover:document.querySelector('#result-portrait img').src,career:document.querySelector('.illustrated-career img').src,social:window.PONY_INTERACTIONS[slug].file}),role.slug);
      assert.notEqual(digest(art.cover),digest(art.career),role.slug+' repeats cover artwork in career');
      const figure=page.locator('.social-interaction');await figure.scrollIntoViewIfNeeded();
      const image=figure.locator('img');await image.evaluate(img=>img.decode());
      assert.equal(new URL(await image.getAttribute('src'),origin).pathname,art.social);
      const alpha=await image.evaluate(img=>{
        const c=document.createElement('canvas');c.width=256;c.height=Math.max(1,Math.round(256*img.naturalHeight/img.naturalWidth));
        const ctx=c.getContext('2d');ctx.drawImage(img,0,0,c.width,c.height);const px=ctx.getImageData(0,0,c.width,c.height).data;
        let transparent=0;for(let i=3;i<px.length;i+=4)if(px[i]<8)transparent++;
        return {w:img.naturalWidth,h:img.naturalHeight,transparentShare:transparent/(px.length/4),corners:[[0,0],[c.width-1,0],[0,c.height-1],[c.width-1,c.height-1]].map(([x,y])=>ctx.getImageData(x,y,1,1).data[3])};
      });
      assert(alpha.transparentShare>.12,role.slug+' social artwork has an opaque background');
      if(replaced.includes(role.slug)){
        assert(alpha.corners.every(a=>a===0),role.slug+' has an opaque corner');
        await figure.screenshot({path:'tmp/report-art-'+role.slug+'-mobile.png'});
      }
      if(['big-mac','chrysalis','king-sombra','diamond-tiara','sugar-belle'].includes(role.slug)){
        const career=page.locator('.illustrated-career');await career.scrollIntoViewIfNeeded();
        const image=career.locator('img');await image.evaluate(img=>img.decode());
        assert.equal(await image.evaluate(img=>getComputedStyle(img).objectFit),'contain');
        const corners=await image.evaluate(img=>{
          const c=document.createElement('canvas');c.width=256;c.height=Math.max(1,Math.round(256*img.naturalHeight/img.naturalWidth));
          const ctx=c.getContext('2d');ctx.drawImage(img,0,0,c.width,c.height);
          return [[0,0],[c.width-1,0],[0,c.height-1],[c.width-1,c.height-1]].map(([x,y])=>ctx.getImageData(x,y,1,1).data[3]);
        });
        assert(corners.every(a=>a===0),role.slug+' career artwork has an opaque corner');
        await career.screenshot({path:'tmp/report-art-'+role.slug+'-career-mobile.png'});
      }
      rows.push({slug:role.slug,secondary,cover:new URL(art.cover).pathname,career:new URL(art.career).pathname,social:art.social,...alpha});
    }
    for(const width of [390,1200]){
      await page.setViewportSize({width,height:900});await page.locator('#admin-role-select').selectOption('big-mac');
      const hero=page.locator('.report-cover');await hero.scrollIntoViewIfNeeded();await page.locator('#result-portrait img').evaluate(img=>img.decode());
      const toggle=page.locator('.cover-profile-toggle');
      if(await toggle.getAttribute('aria-expanded')!=='true')await toggle.click();
      await page.waitForTimeout(350);assert(await hero.evaluate(el=>el.classList.contains('profile-open')));
      await hero.screenshot({path:'tmp/report-art-big-mac-profile-'+width+'.png'});
      const career=page.locator('.illustrated-career');await career.scrollIntoViewIfNeeded();await career.locator('img').evaluate(img=>img.decode());
      await career.screenshot({path:'tmp/report-art-big-mac-career-'+width+'.png'});
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Report overflows at '+width);
    }
    fs.writeFileSync('tmp/report-roster-art-audit.json',JSON.stringify(rows,null,2)+'\n');
    console.log(JSON.stringify({roles:rows.length,activeSecondary:rows.length,distinctCoverCareer:rows.length,transparentSocial:rows.length,replacedSocial:replaced}));
    console.log('Passed: all 36 report previews use active secondary roles, distinct cover/career artwork, and transparent social images; mobile and desktop Big Mac screenshots saved.');
  }finally{await browser.close();server.closeAllConnections();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
