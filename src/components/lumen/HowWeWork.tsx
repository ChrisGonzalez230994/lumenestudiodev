import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Explorar & entender",
    desc: "Nos metemos a fondo en cada proyecto para entender objetivos, usuarios y contexto. Preguntamos, analizamos referencias y definimos una dirección clara antes de diseñar.",
  },
  {
    n: "02",
    title: "Diseñar & prototipar",
    desc: "Damos vida a las ideas a través del diseño. Desde la identidad visual hasta prototipos UX/UI completos. Todo se construye con detalle y consistencia.",
  },
  {
    n: "03",
    title: "Construir & afinar",
    desc: "Desarrollamos el sitio completo o trabajamos junto a tu equipo de devs, asegurando que el producto final mantenga la visión y evolucione con el feedback.",
  },
];

export function HowWeWork() {
  return (
    <section id="proceso" className="relative border-t border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-sm text-muted-foreground">[ Cómo trabajamos ]</p>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-7xl">
            Tres pasos,
            <br />
            sin sorpresas.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="border-t border-border pt-6">
                <span className="text-xs text-muted-foreground">[ {s.n} ]</span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
