create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.waitlist enable row level security;

create policy "Allow anonymous inserts to waitlist"
  on public.waitlist
  for insert
  with check (true);

create policy "Allow reading waitlist entries"
  on public.waitlist
  for select
  using (true);
