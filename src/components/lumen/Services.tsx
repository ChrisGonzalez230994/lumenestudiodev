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
    title: "Portfolios digitales",
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
    <section id="servicios" className="section-light relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6B21C8]">
            Servicios
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[#0D0D12] sm:text-5xl">
            Seis formas de iluminar tu presencia digital
          </h2>
          <p className="mt-4 text-base text-[#4A4A6A] sm:text-lg">
            Elegí el servicio que mejor encaja con tu momento. Todos pensados para
            negocios reales que necesitan resultados claros.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <article
                className="group relative h-full overflow-hidden rounded-2xl border border-[#DEDEE8] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#C0186E] hover:shadow-[0_4px_24px_rgba(192,24,110,0.12)]"
              >
                <div
                  className="grid h-10 w-10 place-items-center rounded-full text-[#6B21C8]"
                  style={{ background: "linear-gradient(135deg, #F3EFFE, #FCE8F3)" }}
                  aria-hidden="true"
                >
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-[#0D0D12]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4A6A]">{s.desc}</p>
                <a
                  href="#contacto"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#C0186E] transition-colors hover:text-[#F97316]"
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
