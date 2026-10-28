create or replace function public.pony_start_public(p_token text) returns jsonb
language plpgsql security definer set search_path='' as $$
begin
 insert into public.pony_sessions(token) values(p_token);
 return jsonb_build_object('token',p_token);
end $$;
revoke all on function public.pony_start_public(text) from public,anon,authenticated;
grant execute on function public.pony_start_public(text) to service_role;
create or replace function public.pony_complete(p_token text,p_id text,p_result jsonb)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare s public.pony_sessions%rowtype;
begin
 select * into s from public.pony_sessions where token=p_token for update;
 if not found then return jsonb_build_object('error','测评会话已失效，请重新开始。','status',401);end if;
 if s.result_id is not null then return jsonb_build_object('id',s.result_id);end if;
 if s.created_at<now()-interval '6 hours' then return jsonb_build_object('error','测评会话已失效，请重新开始。','status',401);end if;
 insert into public.pony_results(id,payload) values(p_id,p_result||jsonb_build_object('id',p_id,'createdAt',floor(extract(epoch from now())*1000)));
 update public.pony_sessions set result_id=p_id where token=p_token;
 return jsonb_build_object('id',p_id);
end $$;

