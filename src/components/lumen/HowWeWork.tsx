import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Entendemos tu negocio, tu audiencia y los objetivos del proyecto.",
  },
  {
    n: "02",
    title: "Desarrollo con IA",
    desc: "Construimos rápido y prolijo usando herramientas de IA de punta.",
  },
  {
    n: "03",
    title: "Lanzamiento y soporte",
    desc: "Deploy, capacitación y mantenimiento continuo para que sigas creciendo.",
  },
];

export function HowWeWork() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-[#0D0D12] py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-gradient-brand text-xs font-semibold uppercase tracking-[0.1em]">
            Cómo trabajamos
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Un proceso simple, en tres pasos
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden md:block">
            <div className="mx-auto h-px w-full max-w-[80%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <li className="relative flex flex-col items-start md:items-center md:text-center">
                  <span className="relative z-10 grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-cream-warm text-mustard-soft font-display text-lg font-semibold ring-8 ring-cream">
                    {s.n}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-ink/70">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
