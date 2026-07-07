import { MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const WHATSAPP_URL =
  "https://wa.me/542236195381?text=" +
  encodeURIComponent("¡Hola Lumen! Quiero empezar un proyecto.");

export function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[2rem] border border-white/10 p-10 sm:p-16 text-center"
            style={{
              background:
                "radial-gradient(120% 100% at 50% 0%, rgba(107,166,255,0.18) 0%, rgba(23,23,26,1) 60%)",
            }}
          >
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-5xl">
              ¿Empezamos tu proyecto?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink/70">
              Contanos qué necesitás y armamos juntos la mejor solución. Te
              respondemos en menos de 24 horas.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-mustard px-6 py-3.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" />
                Hablar por WhatsApp
              </a>
              <a
                href="#contacto"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white/10"
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
