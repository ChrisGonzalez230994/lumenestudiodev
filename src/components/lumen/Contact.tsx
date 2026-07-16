import { useState } from "react";
import { MessageCircle, Instagram, Mail, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { services } from "./Services";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_URL =
  "https://wa.me/5492236195381?text=" +
  encodeURIComponent("¡Hola Lumen! Quiero más info sobre sus servicios.");

type Errors = Partial<Record<"name" | "email" | "message" | "service", string>>;

export function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = t("contact.form.err.name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t("contact.form.err.email");
    if (!form.service) e.service = t("contact.form.err.service");
    if (form.message.trim().length < 10) e.message = t("contact.form.err.message");
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
    }
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div
            className="overflow-hidden rounded-[1.75rem] border border-white/10 p-5 sm:rounded-[2rem] sm:p-10 lg:p-14"
            style={{ background: "var(--cream-warm)" }}
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="text-gradient-brand text-xs font-semibold uppercase tracking-[0.1em]">
                  {t("contact.label")}
                </span>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
                  {t("contact.title")}
                </h2>
                <p className="mt-4 text-base text-ink/65">{t("contact.subtitle")}</p>

                <div className="mt-10 space-y-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] items-center gap-4 rounded-2xl bg-card p-4 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-mustard text-ink">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{t("contact.wa.title")}</span>
                      <span className="block text-xs text-ink/60">{t("contact.wa.desc")}</span>
                    </span>
                  </a>
                  <a
                    href="https://instagram.com/lumendev.estudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[44px] items-center gap-4 rounded-2xl bg-card p-4 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-mustard text-ink">
                      <Instagram className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">@lumendev.estudio</span>
                      <span className="block text-xs text-ink/60">{t("contact.ig.desc")}</span>
                    </span>
                  </a>
                  <a
                    href="mailto:lumendev.estudio@gmail.com"
                    className="flex min-h-[44px] items-center gap-4 rounded-2xl bg-card p-4 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mustard text-ink">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-ink">lumendev.estudio@gmail.com</span>
                      <span className="block text-xs text-ink/60">{t("contact.mail.desc")}</span>
                    </span>
                  </a>
                </div>
              </div>

              {sent ? (
                <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-card p-10 text-center shadow-soft">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-mustard text-ink">
                    <Send className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-ink">{t("contact.sent.title")}</h3>
                  <p className="text-sm text-ink/70">{t("contact.sent.desc")}</p>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="flex flex-col gap-4 rounded-3xl bg-card p-5 shadow-soft sm:p-8"
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
                    <label htmlFor="service" className="text-sm font-medium text-ink">
                      {t("contact.form.service")}
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      aria-invalid={!!errors.service}
                      className="rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-mustard focus:ring-2 focus:ring-mustard/30"
                    >
                      <option value="">{t("contact.form.serviceSelect")}</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {t(s.titleKey)}
                        </option>
                      ))}
                      <option value="otro">{t("contact.form.serviceOther")}</option>
                    </select>
                    {errors.service && (
                      <span className="text-xs text-destructive">{errors.service}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-ink">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      aria-invalid={!!errors.message}
                      className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-mustard focus:ring-2 focus:ring-mustard/30"
                    />
                    {errors.message && (
                      <span className="text-xs text-destructive">{errors.message}</span>
                    )}
                  </div>
                  <p className="text-xs text-ink/55">{t("contact.form.privacy")}</p>
                  <button
                    type="submit"
                    className="mt-1 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-gradient-cta-full px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
                  >
                    {t("contact.form.submit")}
                    <Send className="h-4 w-4" />
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
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className="rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-mustard focus:ring-2 focus:ring-mustard/30"
      />
      {error && <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
}
