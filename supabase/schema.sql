-- FreelanceFlow Database Schema

-- Profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE,
  display_name TEXT DEFAULT '',
  avatar_url TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Domain table: freelanceflow
CREATE TABLE IF NOT EXISTS public.freelanceflow (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  title TEXT NOT NULL DEFAULT '',
  description TEXT DEFAULT '',
  status TEXT DEFAULT 'active',
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.freelanceflow ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own freelanceflow" ON public.freelanceflow FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own freelanceflow" ON public.freelanceflow FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own freelanceflow" ON public.freelanceflow FOR UPDATE USING (auth.uid() = user_id);
