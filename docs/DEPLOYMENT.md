# GitHub Pages + Supabase 部署

前端由 GitHub Pages 提供，Supabase Edge Function `quiz-api` 负责密码验证、云端计分和数据库访问。数据库不对匿名访客开放。保留每个密码最多 3 次、会话 6 小时过期、重复提交返回同一份结果的规则。

## Supabase

1. 登录并创建项目；执行 `supabase/migrations/202610250001_quiz.sql`。
2. 本地运行 `npm run prepare:backend`，生成共用计分题库。
3. 登录 Supabase CLI，关联项目，部署：`supabase functions deploy quiz-api`。
4. 在 Supabase 的 Edge Function Secrets 中设置：
   - `PONY_ACCESS_CODES`：正式测评密码，多个以英文逗号隔开；只在服务器端保存。
   - `ALLOWED_ORIGINS`：实际 Pages 域名，例如 `https://你的账号.github.io`（不含路径），多个以英文逗号隔开。
   - `SUPABASE_URL` 和 `SUPABASE_SERVICE_ROLE_KEY` 使用平台内置值，绝不写入前端。

## GitHub Pages

1. 仓库仅上传网站相关源文件，不上传 `data/`、`tmp/`、本地作业目录或私密部署材料。
2. Settings → Pages 选择 GitHub Actions。
3. Settings → Secrets and variables → Actions → Variables 设置：
   - `SUPABASE_API_URL`：`https://项目ID.supabase.co/functions/v1/quiz-api`。
   - `SUPABASE_PUBLISHABLE_KEY`：项目公开 key（可选；当前函数以测评密码和会话令牌授权）。
4. 触发 Deploy GitHub Pages 工作流。构建会自动适配仓库子目录。

结果分享链接使用 `https://账号.github.io/仓库/?r=结果ID`，刷新无需服务器路由。

## 现有本地结果

旧结果仍在 `data/store.json`，部署代码不上传此文件。运行 `node scripts/export-cloud-data.mjs` 会生成 `deployment-private/import-existing-results.sql`，在 Supabase SQL Editor 执行即可导入历史结果及密码次数。此 SQL 只用于私密迁移，不要提交仓库。会话无需迁移，未完成的本地测评可继续在原本地服务完成。

## 访问与可用性

部署完成后，关闭本机不会影响网站。第三方服务的套餐、区域网络和维护状态仍会影响可用性；免费套餐不等于永久在线保证。上线时应根据当前 Supabase 套餐的暂停规则确认是否需要付费方案。
