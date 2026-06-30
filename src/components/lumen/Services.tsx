import { Reveal } from "./Reveal";

export const services = [
  { id: "landing-pages", title: "Landing Pages", desc: "Una página, foco total en convertir." },
  { id: "catalogos", title: "Catálogos digitales", desc: "Productos visibles, sin checkout completo." },
  { id: "invitaciones-qr", title: "Invitaciones & Menú QR", desc: "Listos para compartir o imprimir." },
  { id: "portfolios", title: "Portfolios profesionales", desc: "Tu vidriera online, con foco editorial." },
  { id: "institucionales", title: "Sitios institucionales", desc: "Para ONGs, clubes e iglesias." },
  { id: "ecommerce", title: "Asistencia e-commerce", desc: "Tienda Nube, Shopify y más." },
];

const groups = [
  {
    title: "Diseño Web & UI",
    items: ["Landing Pages", "Sitios institucionales", "Portfolios profesionales", "Sistemas de diseño"],
  },
  {
    title: "Comercio & Catálogos",
    items: ["Catálogos digitales", "Asistencia e-commerce", "Integración con WhatsApp", "Pasarelas de pago"],
  },
  {
    title: "Eventos & Hospitality",
    items: ["Invitaciones digitales", "Menú QR para gastronomía", "Confirmación de asistencia", "Galerías y agenda"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative border-t border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-sm text-muted-foreground">[ Servicios creativos ]</p>
            <h2 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl">
              Más allá
              <br />
              del sitio web
            </h2>
            <p className="mt-6 max-w-sm text-base text-foreground/75">
              Seis líneas de servicio pensadas para negocios reales que necesitan
              resultados claros — sin vueltas.
            </p>
          </Reveal>

          <div className="md:col-span-8 md:pl-8">
            <ul className="divide-y divide-border">
              {groups.map((g, gi) => (
                <Reveal key={g.title} delay={gi * 0.06}>
                  <li className="grid grid-cols-12 gap-6 py-8">
                    <span className="col-span-12 text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
                      0{gi + 1}
                    </span>
                    <h3 className="col-span-12 font-display text-2xl font-semibold tracking-tight md:col-span-4 sm:text-3xl">
                      {g.title}
                    </h3>
                    <ul className="col-span-12 space-y-1.5 text-sm text-foreground/80 md:col-span-5">
                      {g.items.map((it) => (
                        <li key={it}>— {it}</li>
                      ))}
                    </ul>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
