-- Tables are never directly readable by visitors. Only the Edge Function's
-- server-side service role can invoke the transaction functions below.
create table if not exists public.pony_code_uses (
 code_hash text primary key,
 used integer not null default 0 check (used between 0 and 3)
);
create table if not exists public.pony_sessions (
 token text primary key,
 created_at timestamptz not null default now(),
 result_id text unique
);
create table if not exists public.pony_results (
 id text primary key,
 payload jsonb not null,
 created_at timestamptz not null default now()
);
alter table public.pony_code_uses enable row level security;
alter table public.pony_sessions enable row level security;
alter table public.pony_results enable row level security;
revoke all on public.pony_code_uses,public.pony_sessions,public.pony_results from anon,authenticated;

create or replace function public.pony_start(p_hash text,p_token text)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare n integer;
begin
 insert into public.pony_code_uses(code_hash) values(p_hash) on conflict do nothing;
 update public.pony_code_uses set used=used+1 where code_hash=p_hash and used<3 returning used into n;
 if n is null then return jsonb_build_object('error','这个密码的 3 次测评机会已经用完。','status',403);end if;
 insert into public.pony_sessions(token) values(p_token);
 return jsonb_build_object('token',p_token,'remaining',3-n);
end $$;

create or replace function public.pony_complete(p_token text,p_id text,p_result jsonb)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare s public.pony_sessions%rowtype;
begin
 select * into s from public.pony_sessions where token=p_token for update;
 if not found then return jsonb_build_object('error','测评会话已失效，请重新输入密码。','status',401);end if;
 if s.result_id is not null then return jsonb_build_object('id',s.result_id);end if;
 if s.created_at<now()-interval '6 hours' then return jsonb_build_object('error','测评会话已失效，请重新输入密码。','status',401);end if;
 insert into public.pony_results(id,payload) values(p_id,p_result||jsonb_build_object('id',p_id,'createdAt',floor(extract(epoch from now())*1000)));
 update public.pony_sessions set result_id=p_id where token=p_token;
 return jsonb_build_object('id',p_id);
end $$;

revoke all on function public.pony_start(text,text),public.pony_complete(text,text,jsonb) from public,anon,authenticated;
grant execute on function public.pony_start(text,text),public.pony_complete(text,text,jsonb) to service_role;
