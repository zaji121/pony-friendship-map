# Password + gift invitation delivery

Each bundle contains a 96-bit random `PONY-` purchase password and a separately generated 96-bit `INVITE-` gift code. Each starts one assessment. Both use the same website input. Gift codes do not create another invitation. Server-side verification in Supabase is required before entering the quiz; static query parameters cannot create a valid assessment session.

Start requests carry a random, persisted client request token. Repeating the same request recovers the original session without charging another use. A different request cannot reuse a redeemed code. Redemption and inventory transactions share a database advisory lock; two distinct export batches cannot allocate the same ready bundle. Result submission remains idempotent for each session.

The administrator page shows the two redemption counters and timestamps separately. CSV includes bundle ID, purchase code, gift code, entry URL, and a complete customer delivery message. TXT contains one bundle per line. Exporting reserves inventory; it does **not** claim a customer message has been sent. Export batches are recoverable from the history, including after a lost response. A repeated export request ID returns the original allocation.

Existing passwords retain their counters and validity. They receive one paired invitation and are marked as historical issued inventory, so they are not allocated again as fresh stock. Used codes are never reset by replenishment.

Default ready inventory: 100 bundles. Replenish when fewer than 20 remain, up to 100. The administrator can change the thresholds or pause replenishment. Supabase Cron checks every five minutes; administrator inventory reads and exports also check. A database lock rechecks the threshold before inserting, preventing concurrent refill requests from creating duplicate or excessive stock.

Deployment: apply `202611010001_invitation_bundles.sql`; deploy the Edge Function with the existing administrator and AES-GCM encryption settings plus `STOCK_CRON_SECRET`; store `pony_stock_cron_secret` and `pony_stock_project_url` in Supabase Vault; apply `202611010002_bundle_cron.sql`. Secrets stay in deployment-private files, Edge Function secrets, and Vault, never in GitHub Pages.

Scheduling follows [Supabase's pg_cron + pg_net + Vault workflow](https://supabase.com/docs/guides/functions/schedule-functions). Database functions revoke public/anonymous execution, set an empty search path, and expose administrator operations only through verified Supabase Auth sessions.

Validation: `scripts/test-code-bundles.mjs` (Node 24), `scripts/test-paid-ui.cjs`, and the SQL transaction tests. Live checks cover purchase/gift single use, concurrent retries, disabling, export recovery, authenticated inventory access, result save/reopen, and the actual database-to-Edge scheduled request. Dedicated smoke records are removed afterward.

Scope: backend delivery export is enabled. No Xiaohongshu store, payment, or customer-service sending tool is connected. A selected tool can later consume the exported delivery content or an authenticated integration added for that tool.
