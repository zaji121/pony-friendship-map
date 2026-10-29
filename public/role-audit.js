(()=>{
 const node=(tag,text)=>{const n=document.createElement(tag);if(text)n.textContent=text;return n;};
 fetch(new URL('./role-audit.json',location.href)).then(r=>{if(!r.ok)throw Error('暂时无法读取检查结果，请刷新重试。');return r.json();}).then(report=>{
  const metrics=document.getElementById('metrics');
  for(const [v,label] of [[report.reachableRoles+'/40','可成为主角色'],[report.strictReachableRoles+'/40','有独立胜出组合'],[report.productionWitnessesVerified+'/40','完整作答复核通过']]){const d=node('div');d.append(node('strong',v),node('span',label));metrics.append(d);}
  document.getElementById('status').textContent='题库版本：'+report.questionVersion+' · 此报告随发布自动重新计算。';
  for(const role of report.roles){const card=node('article'),head=node('header'),badge=node('span','覆盖通过');badge.className='pass';head.append(node('h2',role.name),badge);card.append(head,node('p','可胜出分数组合：'+role.primaryCells+'；其中严格胜出：'+role.strictPrimaryCells+'。'));
   const sources=node('details');sources.append(node('summary','剧情依据与侧写边界'));const list=node('ul');for(const fact of role.evidence.facts){const li=node('li'),a=node('a',fact.source.originalTitle);a.href=fact.source.url;a.target='_blank';a.rel='noopener noreferrer';li.append(a,node('span','：'+fact.text));list.append(li);}const limit=node('p',role.evidence.limits);limit.className='limit';sources.append(list,node('p','编辑解释：'+role.evidence.interpretation),limit);card.append(sources);
   const fixture=node('details');fixture.append(node('summary','查看一套可复现的 48 题测试答案'));fixture.append(node('p','此为算法校对数据，不是建议用户如何回答。题号与当前版本一一对应。'));const code=node('code');code.textContent=role.witness.answers.map((v,i)=>String(i+1).padStart(2,'0')+':'+String.fromCharCode(65+v)).reduce((rows,s,i)=>{if(i%8===0)rows.push([]);rows.at(-1).push(s);return rows;},[]).map(row=>row.join('  ')).join('\n');fixture.append(code,node('p','E/S/T/J 端各自题数：'+role.witness.positiveCounts.join(' / ')+'（每维 12 题）。'));card.append(fixture);document.getElementById('roles').append(card);
  }
 }).catch(e=>{document.getElementById('status').textContent=e.message;});
})();
