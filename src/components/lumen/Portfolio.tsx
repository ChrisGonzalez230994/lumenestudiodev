import { Reveal } from "./Reveal";
import case1 from "@/assets/case-icb.png.asset.json";
import case2 from "@/assets/case-stele.png.asset.json";
import case3 from "@/assets/case-botbol.png.asset.json";

const cases = [
  { img: case1.url, name: "ICB Mar del Plata", tag: "Sitio institucional", href: "https://icbmardelplata.lovable.app", alt: "Vista previa del sitio institucional ICB Mar del Plata" },
  { img: case2.url, name: "Encuadernación Stele", tag: "Landing page", href: "https://encuadernacionstele.lovable.app/", alt: "Vista previa de la landing page de Encuadernación Stele" },
  { img: case3.url, name: "Botbol Clothes", tag: "E-commerce", href: "https://botbolclothes.lovable.app", alt: "Vista previa de la tienda online Botbol Clothes" },
];


export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard-soft">
            Portfolio
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Proyectos recientes
          </h2>
          <p className="mt-4 text-base text-ink/60">
            Una muestra de trabajos hechos para negocios e instituciones de Mar del Plata
            y el país.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.name + i} delay={i * 0.06}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-3xl border border-white/8 bg-cream-warm transition-all hover:-translate-y-1 hover:border-white/15"
              >

                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1.5 p-5">
                  <h3 className="font-display text-base font-semibold text-ink">{c.name}</h3>
                  <span className="w-fit rounded-full bg-mustard/15 px-3 py-1 text-xs font-medium text-mustard-soft ring-1 ring-mustard/20">
                    {c.tag}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
