import { Reveal } from "./Reveal";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

const cases = [
  { img: case1, name: "Estudio Solana", tag: "Landing Page" },
  { img: case2, name: "Helena Bot", tag: "Automatización IA" },
  { img: case3, name: "Casa Mate", tag: "E-commerce" },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32"
      style={{ background: "var(--cream-warm)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">
            Portfolio
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Proyectos recientes
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <a
                href="#contacto"
                className="group block overflow-hidden rounded-3xl bg-card shadow-soft transition-transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="font-display text-lg font-bold text-ink">{c.name}</h3>
                  <span className="rounded-full bg-mustard-soft px-3 py-1 text-xs font-semibold text-ink">
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
