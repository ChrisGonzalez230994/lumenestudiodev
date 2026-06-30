import { useState } from "react";
import { Reveal } from "./Reveal";
import { services } from "./Services";

type Errors = Partial<Record<"name" | "email" | "message" | "service", string>>;

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Contanos tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email inválido.";
    if (!form.service) e.service = "Elegí un servicio.";
    if (form.message.trim().length < 10) e.message = "Contanos un poco más.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  };

  return (
    <section id="contacto" className="relative border-t border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-sm text-muted-foreground">[ Contacto ]</p>
            <h2 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-7xl">
              Ponerse
              <br />
              en contacto.
            </h2>
            <div className="mt-12 space-y-6 text-sm">
              <div>
                <p className="text-muted-foreground">[ Email ]</p>
                <a
                  href="mailto:hola@lumendev.estudio"
                  className="mt-2 block text-lg text-foreground hover:underline"
                >
                  hola@lumendev.estudio
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">[ WhatsApp ]</p>
                <a
                  href="https://wa.me/5492235555555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-lg text-foreground hover:underline"
                >
                  +54 9 223 555 5555
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">[ Estudio ]</p>
                <p className="mt-2 text-lg">Mar del Plata, Argentina</p>
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-7">
            {sent ? (
              <div className="border-t border-border pt-10">
                <p className="text-sm text-muted-foreground">[ Recibido ]</p>
                <h3 className="mt-4 font-display text-4xl font-bold tracking-tight">
                  Gracias. Te respondemos en menos de 24 hs.
                </h3>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="flex flex-col">
                <Field
                  id="name"
                  label="Nombre*"
                  value={form.name}
                  error={errors.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <Field
                  id="email"
                  type="email"
                  label="Email*"
                  value={form.email}
                  error={errors.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
                <Field
                  id="company"
                  label="Empresa o marca (opcional)"
                  value={form.company}
                  onChange={(v) => setForm({ ...form, company: v })}
                />
                <div className="flex flex-col border-b border-border py-5">
                  <label htmlFor="service" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    ¿En qué puedo ayudarte?*
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    aria-invalid={!!errors.service}
                    className="mt-2 bg-transparent text-lg outline-none"
                  >
                    <option value="" className="bg-background">Elegí un servicio…</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id} className="bg-background">
                        {s.title}
                      </option>
                    ))}
                    <option value="otro" className="bg-background">Combinar varios / no estoy seguro</option>
                  </select>
                  {errors.service && (
                    <span className="mt-1 text-xs text-destructive">{errors.service}</span>
                  )}
                </div>
                <div className="flex flex-col border-b border-border py-5">
                  <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Contame sobre tu proyecto*
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    aria-invalid={!!errors.message}
                    className="mt-2 resize-none bg-transparent text-lg outline-none"
                  />
                  {errors.message && (
                    <span className="mt-1 text-xs text-destructive">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-10 inline-flex w-fit min-h-[44px] items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                >
                  Enviar →
                </button>
              </form>
            )}
          </div>
        </div>
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
    <div className="flex flex-col border-b border-border py-5">
      <label htmlFor={id} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className="mt-2 bg-transparent text-lg outline-none"
      />
      {error && <span className="mt-1 text-xs text-destructive">{error}</span>}
    </div>
  );
}
