import { useState } from "react";
import { MessageCircle, Instagram, Mail, Send } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div
            className="overflow-hidden rounded-[2rem] p-8 sm:p-14 shadow-soft"
            style={{ background: "var(--cream)" }}
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
                    href="https://wa.me/0000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl bg-card p-4 transition-transform hover:-translate-y-0.5"
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
                    className="flex items-center gap-4 rounded-2xl bg-card p-4 transition-transform hover:-translate-y-0.5"
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
                    className="flex items-center gap-4 rounded-2xl bg-card p-4 transition-transform hover:-translate-y-0.5"
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

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="flex flex-col gap-4 rounded-3xl bg-card p-8 shadow-soft"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-ink">
                    Nombre
                  </label>
                  <input
                    id="name"
                    required
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-mustard focus:ring-2 focus:ring-mustard/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-mustard focus:ring-2 focus:ring-mustard/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-ink">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-mustard focus:ring-2 focus:ring-mustard/30"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-mustard px-6 py-3.5 text-sm font-semibold text-ink shadow-soft transition-transform hover:scale-[1.02]"
                >
                  {sent ? "¡Gracias! Te respondemos pronto" : (
                    <>
                      Enviar mensaje
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
