# Profiles

```
    create table public.profiles (
    id uuid not null references auth.users on delete cascade,
    first_name text,
    last_name text,
    primary key (id)
    );
    alter table public.profiles enable row level security;
    create policy "Users can update own profile."
    on profiles for update
using ( auth.uid() = id );
```

# Sessions

```
create table gym_sessions (
id bigint primary key generated always as identity,
user_id uuid references auth.users (id) on delete cascade not null,
session_date timestamp with time zone default timezone('ist'::text, now()) not null,
deleted_at timestamp with time zone,
inserted_at timestamp with time zone default timezone('ist'::text, now()) not null,
updated_at timestamp with time zone default timezone('ist'::text, now()) not null
);
alter table public.gym_sessions enable row level security;
CREATE POLICY store_gym_session
  ON gym_sessions
  FOR SELECT
  USING (auth.uid() = user_id);
```
