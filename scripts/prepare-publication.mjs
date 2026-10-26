import {cp,mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const destination=path.join(root,'deployment-private','publication');
await mkdir(destination,{recursive:true});
for(const relative of ['public','scripts','supabase','.github','package.json','.gitignore','ASSET_CREDITS.md']){
 await cp(path.join(root,relative),path.join(destination,relative),{recursive:true,filter:source=>!source.includes(`${path.sep}.temp${path.sep}`)&&!source.includes(`${path.sep}.branches${path.sep}`)});
}
await mkdir(path.join(destination,'docs'),{recursive:true});
await cp(path.join(root,'docs','DEPLOYMENT.md'),path.join(destination,'docs','DEPLOYMENT.md'));
await writeFile(path.join(destination,'README.md'),'# 小马谷友谊地图\n\n前端：GitHub Pages。后端与数据库：Supabase。\n\n部署说明见 [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)。\n\n本项目是粉丝制作的趣味自我探索体验，并非官方 MBTI 测验。图片素材来源见 ASSET_CREDITS.md。\n');
console.log('Publication directory prepared.');
