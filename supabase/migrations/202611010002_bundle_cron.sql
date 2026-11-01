create extension if not exists pg_cron with schema pg_catalog;
create extension if not exists pg_net with schema extensions;
create or replace function public.pony_dispatch_replenish() returns bigint
language sql security definer set search_path='' as $$
 select net.http_post(
   url:=(select decrypted_secret from vault.decrypted_secrets where name='pony_stock_project_url')||'/functions/v1/quiz-api/internal/replenish',
   headers:=jsonb_build_object('Content-Type','application/json','Authorization','Bearer '||(select decrypted_secret from vault.decrypted_secrets where name='pony_stock_cron_secret')),
   body:='{}'::jsonb,timeout_milliseconds:=20000
 );
$$;
revoke all on function public.pony_dispatch_replenish() from public,anon,authenticated;
select cron.schedule('pony-voucher-stock-replenish','*/5 * * * *','select public.pony_dispatch_replenish();');
