DROP POLICY IF EXISTS "Anyone can insert RSVP" ON public.rsvp_responses;

CREATE POLICY "Anyone can insert valid RSVP"
ON public.rsvp_responses
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(guest_name)) BETWEEN 1 AND 120
  AND party_size BETWEEN 1 AND 20
  AND (notes IS NULL OR length(notes) <= 1000)
  AND length(event_slug) BETWEEN 1 AND 80
);