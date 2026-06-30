import { Reveal } from "./Reveal";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

const cases = [
  { img: case1, name: "ICB Mar del Plata", type: "Sitio institucional", year: "2025", alt: "Vista previa del sitio institucional ICB Mar del Plata" },
  { img: case2, name: "Encuadernación Stele", type: "Catálogo digital", year: "2025", alt: "Vista previa del catálogo digital Stele" },
  { img: case3, name: "Casa Mate", type: "E-commerce", year: "2024", alt: "Vista previa de la tienda online Casa Mate" },
  { img: case1, name: "Estudio Solana", type: "Landing Page", year: "2024", alt: "Vista previa de la landing Estudio Solana" },
];

export function Portfolio() {
  return (
    <section id="trabajo" className="relative border-t border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-sm text-muted-foreground">[ Selección de proyectos ]</p>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-7xl">
            Nuestro trabajo, <span className="text-muted-foreground">de cerca</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-x-10 gap-y-24 md:grid-cols-2">
          {cases.map((c, i) => (
            <Reveal
              key={c.name + i}
              delay={(i % 2) * 0.08}
              className={i % 2 === 1 ? "md:mt-32" : ""}
            >
              <a href="#contacto" className="group block">
                <div className="overflow-hidden bg-card">
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    width={1280}
                    height={1700}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-6 grid grid-cols-12 gap-4">
                  <span className="col-span-2 text-xs text-muted-foreground">
                    [ 0{i + 1} ]
                  </span>
                  <div className="col-span-7">
                    <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                      {c.name}
                    </h3>
                  </div>
                  <div className="col-span-3 text-right text-xs text-muted-foreground">
                    Go →
                  </div>

                  <div className="col-span-12 mt-4 grid grid-cols-2 gap-4 border-t border-border pt-4 text-xs">
                    <div>
                      <p className="text-muted-foreground">[ Tipo ]</p>
                      <p className="mt-1 text-foreground/90">{c.type}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">[ Año ]</p>
                      <p className="mt-1 text-foreground/90">{c.year}</p>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
