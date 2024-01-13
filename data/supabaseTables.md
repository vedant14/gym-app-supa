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

# Exercise

```
CREATE TABLE exercises (
    id bigint primary key generated always as identity,
    name VARCHAR not null,
    deleted_at timestamp with time zone,
    inserted_at timestamp with time zone default timezone('ist'::text, now()) not null,
    updated_at timestamp with time zone default timezone('ist'::text, now()) not null
);
```

# Focus area

```
CREATE TABLE focus_areas (
    id bigint primary key generated always as identity,
    name VARCHAR not null,
    muscle_group VARCHAR not null,
    deleted_at timestamp with time zone,
    inserted_at timestamp with time zone default timezone('ist'::text, now()) not null,
    updated_at timestamp with time zone default timezone('ist'::text, now()) not null
);
```

# Session Exercise

```
CREATE TABLE gym_session_exercises (
    id bigint primary key generated always as identity,
    session bigint references gym_sessions on delete cascade not null,
    exercise bigint references exercises on delete cascade not null,
    deleted_at timestamp with time zone,
    inserted_at timestamp with time zone default timezone('ist'::text, now()) not null,
    updated_at timestamp with time zone default timezone('ist'::text, now()) not null
);
```

# Exercise Focus Area

```
CREATE TABLE exercise_focus_areas (
    id bigint primary key generated always as identity,
    exercise BIGINT REFERENCES exercises on delete cascade not null,
    focus_area BIGINT REFERENCES focus_areas on delete cascade not null,
    deleted_at timestamp with time zone,
    inserted_at timestamp with time zone default timezone('ist'::text, now()) not null,
    updated_at timestamp with time zone default timezone('ist'::text, now()) not null
);
```

# Session Sets

```
CREATE TABLE session_exercise_sets (
    id bigint primary key generated always as identity,
    session_exercise BIGINT REFERENCES gym_session_exercises on delete cascade not null,
    round_count int not null,
    weight BIGINT not null,
    use_weight_unit weight_unit not null,
    deleted_at timestamp with time zone,
    inserted_at timestamp with time zone default timezone('ist'::text, now()) not null,
    updated_at timestamp with time zone default timezone('ist'::text, now()) not null
);
```

```
create type weight_unit as enum (
  'reps',
  'kgs'
);
```
