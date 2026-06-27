import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  password: z.string().min(1).max(200),
  eventSlug: z.string().min(1).max(120).optional(),
});

export const getRsvpResponses = createServerFn({ method: "POST" })
  .inputValidator((data) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const expected = process.env.ADMIN_PASSPHRASE;
    if (!expected) {
      return { ok: false as const, error: "Admin no configurado." };
    }
    if (data.password !== expected) {
      return { ok: false as const, error: "Contraseña incorrecta." };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    let query = supabaseAdmin
      .from("rsvp_responses")
      .select("id, guest_name, party_size, attending, notes, event_slug, submitted_at")
      .order("submitted_at", { ascending: false });
    if (data.eventSlug) query = query.eq("event_slug", data.eventSlug);

    const { data: rows, error } = await query;
    if (error) return { ok: false as const, error: error.message };

    const confirmedGuests = (rows ?? [])
      .filter((r) => r.attending)
      .reduce((sum, r) => sum + (r.party_size ?? 0), 0);

    return { ok: true as const, rows: rows ?? [], confirmedGuests };
  });
