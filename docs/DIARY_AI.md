# 小马谷日记：国内开源模型

体验入口为 `diary.html`，结果页同样有入口。默认只在浏览器中排版、用 IndexedDB 保存 PNG 和日记，不上传内容，不称为 AI 生成。清理浏览器会删除记录，提醒用户下载备份。

## 模型

- 文字：Qwen3-8B，Apache-2.0：https://huggingface.co/Qwen/Qwen3-8B
- 背景：Qwen-Image（原始 Apache-2.0 版本）：https://huggingface.co/Qwen/Qwen-Image
- 角色使用现有素材叠加，不生成角色本身，避免造型漂移。素材版权仍属于原权利人；模型许可证不授予角色版权。
- 可自部署 vLLM/兼容服务，也可选择国内托管推理。托管费用、数据政策需要管理员自行确认。

## Supabase 服务端 Secrets（不要放入 GitHub 或前端）

```
DIARY_AI_BASE_URL=https://api.siliconflow.cn/v1
DIARY_AI_MODEL=Qwen/Qwen3-8B
DIARY_AI_KEY=在 Supabase Dashboard 中安全填写
DIARY_IMAGE_MODEL=Qwen/Qwen-Image
```

模型名须先在供应商账号中确认可用；若只有文字服务，先不设置 DIARY_IMAGE_MODEL。自部署时填自己的 HTTPS 兼容服务地址和模型名，不要求使用硅基流动。

文字适配 `/chat/completions`；背景适配硅基流动 `/images/generations` 的 `images[0].url`（兼容 `data[0].url/b64_json`）。接口文档：https://api-docs.siliconflow.cn/docs/api/images-generations-post 。其他供应商若格式不同需修改 diary.ts。

部署迁移 `202610270001_diary_quota.sql` 以及 quiz-api 函数。模型未配置时 status 返回 textReady=false，AI 按钮禁用；本地体验卡仍可使用。

AI 仅支持有已完成测评 token 的用户，不支持通过公开结果链接消费额度。每个测评 token 每个数据库日最多 3 次（失败也计入），通过原子 RPC 扣次；管理员示例无 token 不能调用。当前没有跨 token 的全站预算封顶，配置真实收费模型前需在供应商控制台设置预算上限。

用户必须主动勾选同意才发送留言、所选角色和已保存的测评行动摘要。后端不记录留言到数据库、不输出留言或凭证到日志。AI 供应商仍会接收这些内容，其留存政策以选择的服务为准。

当前卡片收藏仅在设备本地，不是 Supabase 云端日记。跨设备收藏需要单独的用户登录、RLS 和私人图片存储，不能把公开结果 ID 当作私人日记的凭证。
