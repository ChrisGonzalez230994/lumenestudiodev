import { useState } from "react";
import { MessageCircle, Instagram, Mail, Send, Loader2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { services } from "./Services";
import { useI18n } from "@/lib/i18n";

// El envío de mails corre en este mismo proyecto (/api/public/contact),
// deployado junto con el sitio en Vercel.
const contactEndpoint = () => "/api/public/contact";

const WHATSAPP_URL =
  "https://wa.me/5492236195381?text=" +
  encodeURIComponent("¡Hola Lumen! Quiero más info sobre sus servicios.");

type Errors = Partial<Record<"name" | "email" | "message" | "service", string>>;

export function Contact() {
  const { t, lang } = useI18n();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = t("contact.form.err.name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t("contact.form.err.email");
    if (!form.service) e.service = t("contact.form.err.service");
    if (form.message.trim().length < 10) e.message = t("contact.form.err.message");
    return e;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSending(true);
    setSendError("");
    try {
      const res = await fetch(contactEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          service: form.service,
          message: form.message.trim(),
        }),
      });
      if (!res.ok) throw new Error(`Request failed [${res.status}]`);
      setSent(true);
    } catch {
      setSendError("No pudimos enviar tu mensaje. Probá de nuevo o escribinos por WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-black/[0.07] bg-white/60 p-5 backdrop-blur sm:p-10 lg:p-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C0186E]">
                  {t("contact.label")}
                </span>
                <h2 className="mt-4 text-4xl font-semibold leading-[1.05] text-[#1A1A1A] sm:text-5xl">
                  {t("contact.title")}
                </h2>
                <p className="mt-4 text-base text-[#5E5E6E]">{t("contact.subtitle")}</p>

                <div className="mt-10 space-y-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] items-center gap-4 rounded-2xl border border-[#E6E6EC] bg-white p-4 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#6B21C8] to-[#C0186E] text-white">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-[#1A1A1A]">
                        {t("contact.wa.title")}
                      </span>
                      <span className="block text-xs text-[#5E5E6E]">{t("contact.wa.desc")}</span>
                    </span>
                  </a>
                  <a
                    href="https://instagram.com/lumendev.estudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] items-center gap-4 rounded-2xl border border-[#E6E6EC] bg-white p-4 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#6B21C8] to-[#C0186E] text-white">
                      <Instagram className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-[#1A1A1A]">
                        @lumendev.estudio
                      </span>
                      <span className="block text-xs text-[#5E5E6E]">{t("contact.ig.desc")}</span>
                    </span>
                  </a>
                  <a
                    href="mailto:lumendev.estudio@gmail.com"
                    className="flex min-h-[44px] items-center gap-4 rounded-2xl border border-[#E6E6EC] bg-white p-4 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#6B21C8] to-[#C0186E] text-white">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-[#1A1A1A]">
                        lumendev.estudio@gmail.com
                      </span>
                      <span className="block text-xs text-[#5E5E6E]">{t("contact.mail.desc")}</span>
                    </span>
                  </a>
                </div>
              </div>

              {sent ? (
                <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-[#E6E6EC] bg-white p-10 text-center shadow-[0_10px_30px_-16px_rgba(26,26,26,0.35)]">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#6B21C8] to-[#C0186E] text-white">
                    <Send className="h-5 w-5" />
                  </span>
                  <h3 className="text-2xl font-bold text-[#1A1A1A]">{t("contact.sent.title")}</h3>
                  <p className="text-sm text-[#5E5E6E]">{t("contact.sent.desc")}</p>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="flex min-w-0 flex-col gap-4 rounded-3xl border border-[#E6E6EC] bg-white p-5 shadow-[0_24px_60px_-30px_rgba(107,33,200,0.25)] sm:p-8"
                >
                  <Field
                    id="name"
                    label={t("contact.form.name")}
                    value={form.name}
                    error={errors.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                  />
                  <Field
                    id="email"
                    type="email"
                    label={t("contact.form.email")}
                    value={form.email}
                    error={errors.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                  />
                  <Field
                    id="phone"
                    type="tel"
                    label={t("contact.form.phone")}
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                  />
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-sm font-medium text-[#1A1A1A]">
                      {t("contact.form.service")}
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      aria-invalid={!!errors.service}
                      className="w-full min-w-0 truncate rounded-xl border border-[#E6E6EC] bg-white px-4 py-3 text-base text-[#1A1A1A] placeholder:text-[#A0A0B8] outline-none transition-colors focus:border-[#C0186E] focus:ring-2 focus:ring-[#C0186E]/20"
                    >
                      <option value="">{t("contact.form.serviceSelect")}</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name[lang]}
                        </option>
                      ))}
                      <option value="otro">{t("contact.form.serviceOther")}</option>
                    </select>
                    {errors.service && (
                      <span className="text-xs text-destructive">{errors.service}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-[#1A1A1A]">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      aria-invalid={!!errors.message}
                      className="resize-none rounded-xl border border-[#E6E6EC] bg-white px-4 py-3 text-base text-[#1A1A1A] placeholder:text-[#A0A0B8] outline-none transition-colors focus:border-[#C0186E] focus:ring-2 focus:ring-[#C0186E]/20"
                    />
                    {errors.message && (
                      <span className="text-xs text-destructive">{errors.message}</span>
                    )}
                  </div>
                  <p className="text-xs text-[#5E5E6E]">{t("contact.form.privacy")}</p>
                  {sendError && <p className="text-xs text-destructive">{sendError}</p>}
                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-1 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-16px_rgba(26,26,26,0.35)] transition-colors duration-300 hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {t("contact.form.submit")}
                    {sending ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-[#1A1A1A]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className="rounded-xl border border-[#E6E6EC] bg-white px-4 py-3 text-base text-[#1A1A1A] placeholder:text-[#A0A0B8] outline-none transition-colors focus:border-[#C0186E] focus:ring-2 focus:ring-[#C0186E]/20"
      />
      {error && <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
}
