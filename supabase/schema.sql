-- Run in the Supabase SQL editor. No service-role key belongs in browser code.
create table if not exists public.menu_admins (user_id uuid primary key references auth.users(id) on delete cascade);
alter table public.menu_admins enable row level security;
-- No public policies: membership is provisioned only through trusted SQL/admin tooling.
create or replace function public.is_menu_admin() returns boolean language sql stable security definer set search_path = '' as $$ select exists(select 1 from public.menu_admins where user_id = (select auth.uid())); $$;
revoke all on function public.is_menu_admin() from public;
grant execute on function public.is_menu_admin() to authenticated;
create table if not exists public.menu_items (
 id uuid primary key default gen_random_uuid(), name text not null check(length(trim(name)) > 0),
 description text, category text not null check(length(trim(category)) > 0),
 diet text check(diet in ('vegetarian','non-vegetarian')), price numeric(10,2) check(price >= 0),
 photo_url text check(photo_url is null or photo_url like 'https://%'), available boolean not null default true,
 published boolean not null default false, sort_order integer not null default 0
);
alter table public.menu_items enable row level security;
create policy "Public reads published menu" on public.menu_items for select to anon, authenticated using (published = true);
create policy "Authorized admins manage menu" on public.menu_items for all to authenticated using (public.is_menu_admin()) with check (public.is_menu_admin());
grant select on public.menu_items to anon;
grant select, insert, update, delete on public.menu_items to authenticated;
