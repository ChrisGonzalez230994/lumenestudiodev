import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function PricingTeaser() {
  return (
    <section id="planes" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div
            className="overflow-hidden rounded-[2rem] p-10 sm:p-14 text-center shadow-soft"
            style={{ background: "var(--cream-warm)" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">
              Planes y precios
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Cada servicio tiene planes desde USD 25
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink/70">
              Soluciones pensadas para distintos momentos del negocio. Sin sorpresas
              ni costos ocultos.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.03]"
            >
              Ver planes y precios
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
