(()=>{
 const node=(tag,text)=>{const n=document.createElement(tag);if(text)n.textContent=text;return n;};
 fetch(new URL('./role-distribution-audit.json',location.href)).then(r=>{if(!r.ok)throw Error();return r.json();}).then(report=>{
  const section=node('section');section.className='summary';section.style.borderColor='#c69574';
  section.append(node('h2','分布警示：角色可达，不代表匹配分布合理'),node('p','当前匹配存在中心侧写吸收大量作答组合的问题。以下为算法压力测试，不能当作真实用户比例，也不是要求所有角色均匀分配。'));
  const table=node('table');table.style.cssText='width:100%;border-collapse:collapse;font-size:13px';
  const header=node('tr');for(const text of ['角色','随机二选一假设','等权分数格点'])header.append(node('th',text));table.append(header);
  for(const role of report.roles){const row=node('tr');for(const text of [role.name,(100*role.answerPatternShare).toFixed(2)+'%',(100*role.equalScoreGridShare).toFixed(2)+'%']){const cell=node('td',text);cell.style.cssText='padding:7px 4px;border-bottom:1px solid #eee4da';row.append(cell);}table.append(row);}
  const details=node('details');details.append(node('summary','展开当前角色分布明细与测试假设'),node('p',report.assumptions.answerPatternShare),node('p',report.assumptions.equalScoreGridShare),table);
  section.append(node('p','前三位：'+report.roles.slice(0,3).map(r=>r.name+' '+(100*r.answerPatternShare).toFixed(2)+'%').join('；')+'。'),node('p','DJ-PON3、梦魇之月、破灭之阳已从当前名单移除。部分集中转移到了其他中心侧写，算法仍未完成实测校准；覆盖通过不等于评估有效。'),details);
  document.getElementById('status').before(section);
 }).catch(()=>{});
 fetch(new URL('./role-audit.json',location.href)).then(r=>{if(!r.ok)throw Error('暂时无法读取检查结果，请刷新重试。');return r.json();}).then(report=>{
  const metrics=document.getElementById('metrics');
  for(const [v,label] of [[report.reachableRoles+'/'+report.eligibleRoles,'可成为主角色'],[report.strictReachableRoles+'/'+report.eligibleRoles,'有独立胜出组合'],[report.productionWitnessesVerified+'/'+report.eligibleRoles,'完整作答复核通过']]){const d=node('div');d.append(node('strong',v),node('span',label));metrics.append(d);}
  document.getElementById('status').textContent='题库版本：'+report.questionVersion+' · 此报告随发布自动重新计算。';
  for(const role of report.roles){const card=node('article'),head=node('header'),badge=node('span','覆盖通过');badge.className='pass';head.append(node('h2',role.name),badge);card.append(head,node('p','可胜出分数组合：'+role.primaryCells+'；其中严格胜出：'+role.strictPrimaryCells+'。'));
   const sources=node('details');sources.append(node('summary','剧情依据与侧写边界'));const list=node('ul');for(const fact of role.evidence.facts){const li=node('li'),a=node('a',fact.source.originalTitle);a.href=fact.source.url;a.target='_blank';a.rel='noopener noreferrer';li.append(a,node('span','：'+fact.text));list.append(li);}const limit=node('p',role.evidence.limits);limit.className='limit';sources.append(list,node('p','编辑解释：'+role.evidence.interpretation),limit);card.append(sources);
   const fixture=node('details');fixture.append(node('summary','查看一套可复现的 48 题测试答案'));fixture.append(node('p','此为算法校对数据，不是建议用户如何回答。题号与当前版本一一对应。'));const code=node('code');code.textContent=role.witness.answers.map((v,i)=>String(i+1).padStart(2,'0')+':'+String.fromCharCode(65+v)).reduce((rows,s,i)=>{if(i%8===0)rows.push([]);rows.at(-1).push(s);return rows;},[]).map(row=>row.join('  ')).join('\n');fixture.append(code,node('p','E/S/T/J 端各自题数：'+role.witness.positiveCounts.join(' / ')+'（每维 12 题）。'));card.append(fixture);document.getElementById('roles').append(card);
  }
 }).catch(e=>{document.getElementById('status').textContent=e.message;});
})();
