import { useState } from "react";
import { MessageCircle, Instagram, Mail, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { services } from "./Services";

const WHATSAPP_URL =
  "https://wa.me/5492235555555?text=" +
  encodeURIComponent("¡Hola Lumen! Quiero más info sobre sus servicios.");

type Errors = Partial<Record<"name" | "email" | "message" | "service", string>>;

export function Contact() {
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
    if (!form.name.trim()) e.name = "Contanos tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Ingresá un email válido.";
    if (!form.service) e.service = "Elegí un servicio.";
    if (form.message.trim().length < 10) e.message = "Mensaje muy corto (mínimo 10 caracteres).";
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
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div
            className="overflow-hidden rounded-[2rem] p-8 sm:p-14 shadow-soft"
            style={{ background: "var(--cream-warm)" }}
          >
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">
                  Contacto
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
                  Encendamos tu próximo proyecto
                </h2>
                <p className="mt-4 text-base text-ink/70">
                  Contanos en qué estás pensando. Te respondemos en menos de 24 hs.
                </p>

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
                      <span className="block text-sm font-semibold text-ink">WhatsApp</span>
                      <span className="block text-xs text-ink/60">Respuesta rápida</span>
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
                      <span className="block text-xs text-ink/60">Detrás de escena y proyectos</span>
                    </span>
                  </a>
                  <a
                    href="mailto:hola@lumendev.estudio"
                    className="flex min-h-[44px] items-center gap-4 rounded-2xl bg-card p-4 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-mustard text-ink">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">hola@lumendev.estudio</span>
                      <span className="block text-xs text-ink/60">Para propuestas detalladas</span>
                    </span>
                  </a>
                </div>
              </div>

              {sent ? (
                <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-card p-10 text-center shadow-soft">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-mustard text-ink">
                    <Send className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-ink">¡Gracias!</h3>
                  <p className="text-sm text-ink/70">
                    Recibimos tu mensaje. Te respondemos en menos de 24 horas.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="flex flex-col gap-4 rounded-3xl bg-card p-8 shadow-soft"
                >
                  <Field
                    id="name"
                    label="Nombre"
                    value={form.name}
                    error={errors.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                  />
                  <Field
                    id="email"
                    type="email"
                    label="Email"
                    value={form.email}
                    error={errors.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                  />
                  <Field
                    id="phone"
                    type="tel"
                    label="Teléfono (opcional)"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                  />
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-sm font-medium text-ink">
                      ¿Qué servicio te interesa?
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      aria-invalid={!!errors.service}
                      className="rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-mustard focus:ring-2 focus:ring-mustard/30"
                    >
                      <option value="">Elegí un servicio…</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                      <option value="otro">No estoy seguro / combinar varios</option>
                    </select>
                    {errors.service && (
                      <span className="text-xs text-destructive">{errors.service}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-ink">
                      Mensaje
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
                  <p className="text-xs text-ink/55">
                    Tus datos se usan solo para responder tu consulta.
                  </p>
                  <button
                    type="submit"
                    className="mt-1 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-mustard px-6 py-3.5 text-sm font-semibold text-ink shadow-soft transition-transform hover:scale-[1.02]"
                  >
                    Enviar mensaje
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
