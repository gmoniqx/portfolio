create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  user_agent text,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);
