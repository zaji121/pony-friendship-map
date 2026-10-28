create table if not exists public.pony_diary_quota (
 token text not null references public.pony_sessions(token) on delete cascade,
 day date not null default current_date,
 used integer not null default 0,
 primary key(token,day)
);
alter table public.pony_diary_quota enable row level security;
revoke all on public.pony_diary_quota from anon,authenticated;
create or replace function public.pony_claim_diary(p_token text) returns boolean
language plpgsql security definer set search_path=public as $$
declare n integer;
begin
 insert into public.pony_diary_quota(token,day,used) values(p_token,current_date,1)
 on conflict(token,day) do update set used=pony_diary_quota.used+1 where pony_diary_quota.used<3
 returning used into n;
 return n is not null;
end $$;
revoke all on function public.pony_claim_diary(text) from public,anon,authenticated;
grant execute on function public.pony_claim_diary(text) to service_role;
