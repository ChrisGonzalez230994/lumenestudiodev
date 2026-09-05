import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

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

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    const resendApiKey = process.env["RESEND_API_KEY"];
    if (!lovableApiKey || !resendApiKey) {
      throw new Error("Email service is not configured");
    }

    const html = `
      <h2>Nuevo mensaje desde lumendev.estudio</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(data.phone || "-")}</p>
      <p><strong>Servicio:</strong> ${escapeHtml(data.service)}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
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
        reply_to: data.email,
        subject: `Nuevo contacto: ${data.name} — ${data.service}`,
        html,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Resend request failed [${response.status}]: ${errorBody}`);
      throw new Error(`Email send failed [${response.status}]`);
    }

    return { ok: true };
  });
