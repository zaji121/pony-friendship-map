begin;
create table if not exists public.pony_code_bundles (
 id uuid primary key,
 created_at timestamptz not null default now(),
 issued_at timestamptz,
 export_id uuid
);
create table if not exists public.pony_code_exports (
 id uuid primary key,
 bundle_ids uuid[] not null,
 created_at timestamptz not null default now()
);
create table if not exists public.pony_code_settings (
 id boolean primary key default true check(id),
 auto_replenish boolean not null default true,
 low_stock integer not null default 20 check(low_stock between 1 and 100),
 target_stock integer not null default 100 check(target_stock between 1 and 100),
 check(target_stock>=low_stock)
);
insert into public.pony_code_settings(id) values(true) on conflict do nothing;
alter table public.pony_access_codes add column if not exists bundle_id uuid references public.pony_code_bundles(id);
alter table public.pony_access_codes add column if not exists code_kind text not null default 'legacy' check(code_kind in ('legacy','purchase','invite'));
alter table public.pony_access_codes add column if not exists redeemed_at timestamptz;
create unique index if not exists pony_bundle_code_kind on public.pony_access_codes(bundle_id,code_kind) where bundle_id is not null;
alter table public.pony_sessions add column if not exists code_hash text references public.pony_access_codes(code_hash);
create index if not exists pony_sessions_code_hash on public.pony_sessions(code_hash);
alter table public.pony_code_bundles enable row level security;
alter table public.pony_code_exports enable row level security;
alter table public.pony_code_settings enable row level security;
revoke all on public.pony_code_bundles,public.pony_code_exports,public.pony_code_settings from public,anon,authenticated;
grant select,insert,update on public.pony_code_bundles,public.pony_code_exports,public.pony_code_settings to service_role;

create or replace view public.pony_bundle_inventory with (security_invoker=true) as
 select b.*,p.label,p.expires_at,p.enabled and i.enabled as enabled,
 p.code_hash as purchase_id,p.code_cipher as purchase_cipher,p.redeemed_at as purchase_redeemed_at,
 i.code_hash as invite_id,i.code_cipher as invite_cipher,i.redeemed_at as invite_redeemed_at,
 coalesce(pu.used,0) as purchase_used,coalesce(iu.used,0) as invite_used,
 b.issued_at is null and p.enabled and i.enabled
   and (p.expires_at is null or p.expires_at>now()) and (i.expires_at is null or i.expires_at>now())
   and coalesce(pu.used,0)=0 and coalesce(iu.used,0)=0 as ready
 from public.pony_code_bundles b
 join public.pony_access_codes p on p.bundle_id=b.id and p.code_kind='purchase'
 join public.pony_access_codes i on i.bundle_id=b.id and i.code_kind='invite'
 left join public.pony_code_uses pu on pu.code_hash=p.code_hash
 left join public.pony_code_uses iu on iu.code_hash=i.code_hash;
revoke all on public.pony_bundle_inventory from public,anon,authenticated;
grant select on public.pony_bundle_inventory to service_role;

create or replace function public.pony_bundle_stats() returns jsonb
language sql security definer set search_path='' as $$
 select jsonb_build_object('total',count(*),'ready',count(*) filter(where ready),
 'issued',count(*) filter(where issued_at is not null),
 'purchase_used',count(*) filter(where purchase_used>0),'invite_used',count(*) filter(where invite_used>0),
 'settings',(select to_jsonb(s)-'id' from public.pony_code_settings s where id=true))
 from public.pony_bundle_inventory;
$$;

create or replace function public.pony_insert_bundles(p_rows jsonb,p_refill boolean default false) returns jsonb
language plpgsql security definer set search_path='' as $$
declare r jsonb; c public.pony_code_settings%rowtype; n integer; available integer; limit_n integer; ids jsonb:='[]'::jsonb;
begin
 perform pg_advisory_xact_lock(71961101);
 if jsonb_typeof(p_rows)<>'array' or jsonb_array_length(p_rows)>100 then raise exception 'Invalid batch';end if;
 select * into c from public.pony_code_settings where id=true for update;
 select count(*) into available from public.pony_bundle_inventory where ready;
 limit_n:=jsonb_array_length(p_rows);
 if p_refill then
   if not c.auto_replenish or available>=c.low_stock then return jsonb_build_object('ids',ids,'created',0,'stock',available);end if;
   limit_n:=least(limit_n,c.target_stock-available);
 end if;
 n:=0;
 for r in select value from jsonb_array_elements(p_rows) loop
   exit when n>=limit_n;
   insert into public.pony_code_bundles(id) values((r->>'id')::uuid);
   insert into public.pony_access_codes(code_hash,code_cipher,code_preview,label,max_uses,expires_at,bundle_id,code_kind)
   values(r->'purchase'->>'hash',r->'purchase'->>'cipher',r->'purchase'->>'preview',coalesce(r->>'label',''),1,(r->>'expires_at')::timestamptz,(r->>'id')::uuid,'purchase'),
         (r->'invite'->>'hash',r->'invite'->>'cipher',r->'invite'->>'preview',coalesce(r->>'label',''),1,(r->>'expires_at')::timestamptz,(r->>'id')::uuid,'invite');
   ids:=ids||jsonb_build_array(r->>'id');n:=n+1;
 end loop;
 return jsonb_build_object('ids',ids,'created',n,'stock',available+n);
end $$;

create or replace function public.pony_pair_legacy(p_hash text,p_id uuid,p_invite jsonb) returns void
language plpgsql security definer set search_path='' as $$
declare c public.pony_access_codes%rowtype;
begin
 perform pg_advisory_xact_lock(71961101);
 select * into c from public.pony_access_codes where code_hash=p_hash for update;
 if not found or c.bundle_id is not null then return;end if;
 insert into public.pony_code_bundles(id,issued_at) values(p_id,now());
 update public.pony_access_codes set bundle_id=p_id,code_kind='purchase' where code_hash=p_hash;
 insert into public.pony_access_codes(code_hash,code_cipher,code_preview,label,max_uses,expires_at,enabled,bundle_id,code_kind)
 values(p_invite->>'hash',p_invite->>'cipher',p_invite->>'preview',c.label,1,c.expires_at,c.enabled,p_id,'invite');
end $$;

create or replace function public.pony_export_bundles(p_id uuid,p_count integer) returns jsonb
language plpgsql security definer set search_path='' as $$
declare ids uuid[]; previous uuid[];
begin
 perform pg_advisory_xact_lock(71961101);
 if p_count<1 or p_count>100 then return jsonb_build_object('error','每批导出 1–100 组。','status',400);end if;
 perform pg_advisory_xact_lock(hashtextextended(p_id::text,71961101));
 select bundle_ids into previous from public.pony_code_exports where id=p_id;
 if found then
   if cardinality(previous)<>p_count then return jsonb_build_object('error','导出请求不一致，请重试。','status',409);end if;
   return jsonb_build_object('ids',to_jsonb(previous),'export_id',p_id);
 end if;
 select array_agg(x.id) into ids from (
   select b.id from public.pony_code_bundles b
   where exists(select 1 from public.pony_bundle_inventory v where v.id=b.id and v.ready)
   order by b.created_at,b.id limit p_count for update of b skip locked
 ) x;
 if coalesce(cardinality(ids),0)<>p_count then return jsonb_build_object('error','待发货库存不足，请减少数量或先生成新组。','status',409);end if;
 insert into public.pony_code_exports(id,bundle_ids) values(p_id,ids);
 update public.pony_code_bundles set issued_at=now(),export_id=p_id where id=any(ids);
 return jsonb_build_object('ids',to_jsonb(ids),'export_id',p_id);
end $$;

create or replace function public.pony_start(p_hash text,p_token text) returns jsonb
language plpgsql security definer set search_path='' as $$
declare c public.pony_access_codes%rowtype; s public.pony_sessions%rowtype; n integer;
begin
 perform pg_advisory_xact_lock(71961101);
 select * into c from public.pony_access_codes where code_hash=p_hash for update;
 if not found then return jsonb_build_object('error','测评密码或邀请码不正确，请检查后重试。','status',401);end if;
 select * into s from public.pony_sessions where token=p_token;
 if found then
   if s.code_hash=p_hash and s.created_at>now()-interval '6 hours' then return jsonb_build_object('token',p_token,'code_kind',c.code_kind);end if;
   return jsonb_build_object('error','请刷新后重新输入测评密码或邀请码。','status',409);
 end if;
 if not c.enabled or exists(select 1 from public.pony_access_codes where bundle_id=c.bundle_id and not enabled) then return jsonb_build_object('error','这个测评密码或邀请码已停用。','status',403);end if;
 if c.expires_at is not null and c.expires_at<=now() then return jsonb_build_object('error','这个测评密码或邀请码已过期。','status',403);end if;
 insert into public.pony_code_uses(code_hash) values(p_hash) on conflict do nothing;
 update public.pony_code_uses set used=used+1 where code_hash=p_hash and used<1 returning used into n;
 if n is null then return jsonb_build_object('error','这个测评密码或邀请码已经使用过了。','status',403);end if;
 insert into public.pony_sessions(token,code_hash) values(p_token,p_hash);
 update public.pony_access_codes set redeemed_at=now() where code_hash=p_hash;
 update public.pony_code_bundles set issued_at=coalesce(issued_at,now()) where id=c.bundle_id;
 return jsonb_build_object('token',p_token,'code_kind',c.code_kind,'remaining',0);
end $$;
create or replace function public.pony_start_public(p_token text) returns jsonb
language sql security definer set search_path='' as $$
 select jsonb_build_object('error','请刷新页面，输入测评密码或邀请码后开始。','status',401);
$$;

create or replace function public.pony_issue_bundle(p_id uuid) returns jsonb
language plpgsql security definer set search_path='' as $$
declare b public.pony_code_bundles%rowtype;
begin
 perform pg_advisory_xact_lock(71961101);
 select * into b from public.pony_code_bundles where id=p_id for update;
 if not found then return jsonb_build_object('error','没有找到这组密码。','status',404);end if;
 if not exists(select 1 from public.pony_bundle_inventory where id=p_id and enabled and (expires_at is null or expires_at>now())) then return jsonb_build_object('error','这组码已停用或过期，请先修改状态。','status',403);end if;
 update public.pony_code_bundles set issued_at=coalesce(issued_at,now()) where id=p_id;
 return jsonb_build_object('id',p_id);
end $$;

revoke all on function public.pony_bundle_stats(),public.pony_insert_bundles(jsonb,boolean),public.pony_pair_legacy(text,uuid,jsonb),public.pony_export_bundles(uuid,integer),public.pony_start(text,text),public.pony_start_public(text) from public,anon,authenticated;
grant execute on function public.pony_bundle_stats(),public.pony_insert_bundles(jsonb,boolean),public.pony_pair_legacy(text,uuid,jsonb),public.pony_export_bundles(uuid,integer),public.pony_start(text,text),public.pony_start_public(text) to service_role;
revoke all on function public.pony_issue_bundle(uuid) from public,anon,authenticated;
grant execute on function public.pony_issue_bundle(uuid) to service_role;
commit;
