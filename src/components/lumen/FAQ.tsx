import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "La mayoría de los proyectos están listos entre 5 y 15 días hábiles, según el servicio y la complejidad. Te damos un plazo concreto en el diagnóstico inicial.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Sólo una idea clara de lo que querés comunicar. Si tenés logo, textos o fotos, mejor. Si no, te guiamos paso a paso para armar todo.",
  },
  {
    q: "¿Puedo combinar servicios? (ej. landing + catálogo)",
    a: "Sí. De hecho la mayoría de los clientes combinan dos o tres servicios. Armamos un presupuesto integrado con descuento por combo.",
  },
  {
    q: "¿Trabajan con plataformas gratuitas?",
    a: "Sí, podemos publicar en Netlify o Vercel sin costo de hosting. También integramos con Tienda Nube, Shopify y otras plataformas según el caso.",
  },
  {
    q: "¿Atienden fuera de Mar del Plata?",
    a: "Sí, trabajamos con clientes de toda Argentina y Latinoamérica de forma 100% remota.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard-soft">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Lo que más nos preguntan
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-white/8 bg-cream-warm">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                      {item.q}
                    </h3>
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mustard/15 text-mustard-soft ring-1 ring-mustard/20"
                      aria-hidden="true"
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div id={`faq-panel-${i}`} className="px-6 pb-6 text-sm text-ink/75">
                      {item.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
