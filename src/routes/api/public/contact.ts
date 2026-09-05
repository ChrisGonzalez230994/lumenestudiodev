import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().default(""),
  service: z.string().trim().min(1).max(80),
  message: z.string().trim().min(10).max(2000),
});

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: corsHeaders }),
      POST: async ({ request }) => {
        const json = (data: unknown, status: number) =>
          new Response(JSON.stringify(data), {
            status,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          });

        let parsed;
        try {
          parsed = contactSchema.parse(await request.json());
        } catch {
          return json({ error: "Invalid payload" }, 400);
        }

        const lovableApiKey = process.env["LOVABLE_API_KEY"];
        const resendApiKey = process.env["RESEND_API_KEY"];
        if (!lovableApiKey || !resendApiKey) {
          console.error("Contact endpoint: email service is not configured");
          return json({ error: "Email service is not configured" }, 500);
        }

        const html = `
      <h2>Nuevo mensaje desde lumendev.estudio</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(parsed.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(parsed.email)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(parsed.phone || "-")}</p>
      <p><strong>Servicio:</strong> ${escapeHtml(parsed.service)}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(parsed.message).replace(/\n/g, "<br />")}</p>
    `;

        const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${lovableApiKey}`,
            "X-Connection-Api-Key": resendApiKey,
          },
          body: JSON.stringify({
            from: "Lumen Studio <onboarding@resend.dev>",
            to: ["lumendev.estudio@gmail.com"],
            reply_to: parsed.email,
            subject: `Nuevo contacto: ${parsed.name} — ${parsed.service}`,
            html,
          }),
        });

        if (!response.ok) {
          const errorBody = await response.text();
          console.error(`Resend request failed [${response.status}]: ${errorBody}`);
          return json({ error: `Email send failed [${response.status}]` }, 502);
        }

        return json({ ok: true }, 200);
      },
    },
  },
});
