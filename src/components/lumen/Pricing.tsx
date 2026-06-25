import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const tiers = [
  {
    name: "Starter",
    desc: "Ideal para arrancar tu presencia digital.",
    features: [
      "Landing page de hasta 4 secciones",
      "Diseño responsive",
      "Publicación incluida (Netlify/Vercel)",
      "1 ronda de ajustes",
    ],
    cta: "Quiero este plan",
    highlight: false,
  },
  {
    name: "Pro",
    desc: "Para negocios que quieren crecer.",
    features: [
      "Landing page de hasta 7 secciones",
      "Dominio propio",
      "Formulario de contacto + integración WhatsApp",
      "1 automatización con IA incluida",
      "2 rondas de ajustes",
    ],
    cta: "Quiero este plan",
    highlight: true,
  },
  {
    name: "Premium",
    desc: "Solución completa para vender online.",
    features: [
      "Todo lo de Pro",
      "Tienda online (Tienda Nube) o automatización avanzada",
      "Copy profesional y SEO básico",
      "Mantenimiento mensual incluido (primer mes)",
    ],
    cta: "Hablemos de tu proyecto",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="planes" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">
            Planes
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Precios claros, sin sorpresas
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Elegí el plan que mejor se adapta a tu momento. Siempre podés escalar.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all ${
                  t.highlight
                    ? "bg-card border-2 border-mustard shadow-glow lg:scale-[1.03]"
                    : "bg-card border border-border shadow-soft"
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-mustard px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                    Más elegido
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold text-ink">{t.name}</h3>
                <p className="mt-2 text-sm text-ink/60">{t.desc}</p>
                <div className="mt-6 font-display text-3xl font-bold text-ink">
                  {t.price}
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-mustard" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    t.highlight
                      ? "bg-mustard text-ink shadow-soft"
                      : "bg-ink text-cream"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
