import {
  Layout,
  BookOpen,
  QrCode,
  Briefcase,
  Building2,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./Reveal";

export const services = [
  {
    id: "landing-pages",
    icon: Layout,
    title: "Landing Pages",
    desc: "Sitios de una página enfocados en conversión, listos en días.",
  },
  {
    id: "catalogos",
    icon: BookOpen,
    title: "Catálogos digitales",
    desc: "Mostrá tus productos sin checkout completo, con botón directo a WhatsApp.",
  },
  {
    id: "invitaciones-qr",
    icon: QrCode,
    title: "Invitaciones & Menú QR",
    desc: "Para eventos y gastronomía, con QR listo para compartir o imprimir.",
  },
  {
    id: "portfolios",
    icon: Briefcase,
    title: "Portfolios profesionales",
    desc: "Para abogados, diseñadores, fotógrafos y consultores que necesitan una vidriera online.",
  },
  {
    id: "institucionales",
    icon: Building2,
    title: "Sitios institucionales",
    desc: "Para ONGs, clubes e iglesias, con secciones de actividades y novedades.",
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "Asistencia e-commerce",
    desc: "Te ayudamos a montar tu tienda en Tienda Nube, Shopify u otra plataforma.",
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
            Seis formas de iluminar tu presencia digital
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Elegí el servicio que mejor encaja con tu momento. Todos pensados para
            negocios reales que necesitan resultados claros.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <article
                className="group relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                style={{ background: "var(--cream-warm)" }}
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-mustard text-ink"
                  aria-hidden="true"
                >
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.desc}</p>
                <a
                  href="#contacto"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
                  aria-label={`Conocer más sobre ${s.title}`}
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
