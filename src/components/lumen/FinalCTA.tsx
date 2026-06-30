import { MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const WHATSAPP_URL =
  "https://wa.me/5492235555555?text=" +
  encodeURIComponent("¡Hola Lumen! Quiero empezar un proyecto.");

export function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div
            className="overflow-hidden rounded-[2rem] p-10 sm:p-16 text-center shadow-glow"
            style={{ background: "var(--ink)" }}
          >
            <h2 className="font-display text-3xl font-bold text-cream sm:text-5xl">
              ¿Empezamos tu proyecto?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-cream/80">
              Contanos qué necesitás y armamos juntos la mejor solución. Te respondemos
              en menos de 24 horas.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-mustard px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" />
                Hablar por WhatsApp
              </a>
              <a
                href="#contacto"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                Escribir un mensaje
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
