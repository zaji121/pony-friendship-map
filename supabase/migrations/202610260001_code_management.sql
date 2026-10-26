alter table public.pony_code_uses drop constraint if exists pony_code_uses_used_check;
alter table public.pony_code_uses add constraint pony_code_uses_used_check check(used>=0);

create table if not exists public.pony_access_codes(
 code_hash text primary key,
 code_cipher text not null,
 code_preview text not null,
 label text not null default '',
 max_uses integer not null default 1 check(max_uses=1),
 enabled boolean not null default true,
 expires_at timestamptz,
 created_at timestamptz not null default now()
);
alter table public.pony_access_codes enable row level security;
revoke all on public.pony_access_codes from anon,authenticated;
grant select,insert,update on public.pony_access_codes to service_role;
grant select on public.pony_code_uses to service_role;

create or replace function public.pony_start(p_hash text,p_token text)
returns jsonb language plpgsql security definer set search_path='' as $$
declare c public.pony_access_codes%rowtype; n integer;
begin
 select * into c from public.pony_access_codes where code_hash=p_hash for update;
 if not found then return jsonb_build_object('error','密码不正确，请检查后重试。','status',401);end if;
 if not c.enabled then return jsonb_build_object('error','这个密码已停用。','status',403);end if;
 if c.expires_at is not null and c.expires_at<=now() then return jsonb_build_object('error','这个密码已过期。','status',403);end if;
 insert into public.pony_code_uses(code_hash) values(p_hash) on conflict do nothing;
 update public.pony_code_uses set used=used+1 where code_hash=p_hash and used<c.max_uses returning used into n;
 if n is null then return jsonb_build_object('error','这个密码的测评机会已经用完。','status',403);end if;
 insert into public.pony_sessions(token) values(p_token);
 return jsonb_build_object('token',p_token,'remaining',c.max_uses-n);
end $$;
revoke all on function public.pony_start(text,text) from public,anon,authenticated;
grant execute on function public.pony_start(text,text) to service_role;
