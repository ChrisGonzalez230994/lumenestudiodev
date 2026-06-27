
CREATE TABLE public.rsvp_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  guest_name TEXT NOT NULL,
  party_size INTEGER NOT NULL DEFAULT 1,
  attending BOOLEAN NOT NULL,
  notes TEXT,
  event_slug TEXT NOT NULL DEFAULT 'default',
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.rsvp_responses TO anon;
GRANT SELECT, INSERT ON public.rsvp_responses TO authenticated;
GRANT ALL ON public.rsvp_responses TO service_role;
ALTER TABLE public.rsvp_responses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert RSVP" ON public.rsvp_responses FOR INSERT TO anon, authenticated WITH CHECK (true);
-- Reads are restricted: admin gate is server-side via password; no public select policy.
