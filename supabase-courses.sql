create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0 check (progress >= 0 and progress <= 100),
  icon_name text not null default 'BookOpen',
  created_at timestamp with time zone default now()
);

alter table public.courses enable row level security;

drop policy if exists "Allow public select courses" on public.courses;

create policy "Allow public select courses"
on public.courses
for select
to anon
using (true);

insert into public.courses (title, progress, icon_name)
values
  ('Advanced React Patterns', 75, 'BookOpen'),
  ('Next.js Fundamentals', 42, 'Code'),
  ('UI Animation Basics', 68, 'Sparkles'),
  ('Database for Beginners', 54, 'Database')
on conflict do nothing;
