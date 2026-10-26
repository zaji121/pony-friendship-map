// Creates a private SQL import, never part of the public Pages artifact.
import {readFile,mkdir,writeFile} from 'node:fs/promises';
const root=new URL('../',import.meta.url);
const db=JSON.parse(await readFile(new URL('data/store.json',root),'utf8'));
const quote=value=>"'"+String(value).replaceAll("'","''")+"'";
let sql='begin;\n';
for(const [id,result] of Object.entries(db.results||{})){
 sql+=`insert into public.pony_results(id,payload) values(${quote(id)},${quote(JSON.stringify(result))}::jsonb) on conflict(id) do nothing;\n`;
}
for(const [hash,used] of Object.entries(db.uses||{})){
 if(!/^[a-f0-9]{64}$/.test(hash)||!Number.isInteger(used)||used<0||used>3)throw new Error('Invalid local code usage.');
 sql+=`insert into public.pony_code_uses(code_hash,used) values(${quote(hash)},${used}) on conflict(code_hash) do update set used=greatest(public.pony_code_uses.used,excluded.used);\n`;
}
sql+='commit;\n';
await mkdir(new URL('deployment-private/',root),{recursive:true});
await writeFile(new URL('deployment-private/import-existing-results.sql',root),sql);
console.log(`Prepared private import: ${Object.keys(db.results||{}).length} results and ${Object.keys(db.uses||{}).length} code counters. Do not publish this file.`);
