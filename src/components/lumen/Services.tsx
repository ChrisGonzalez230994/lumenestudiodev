import { Layout, Bot, ShoppingBag, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    desc: "Sitios de una o varias páginas, enfocados en conversión y construidos con desarrollo asistido por IA.",
  },
  {
    icon: Bot,
    title: "Automatización con IA",
    desc: "Flujos de chatbots e interacciones inteligentes con tus clientes en WhatsApp e Instagram.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Tu tienda online lista para vender: pagos, catálogo, envíos y panel todo en uno.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">
            Servicios
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Lo que iluminamos para vos
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Tres servicios, una sola idea: que tu marca se entienda, se vea y venda.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article
                className="group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                style={{ background: "var(--cream-warm)" }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-mustard text-ink">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {s.desc}
                </p>
                <a
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
                >
                  Conocer más
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
