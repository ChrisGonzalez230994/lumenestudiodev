import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";

export function HowWeWork() {
  const { t } = useI18n();
  const steps = [
    { n: "01", title: t("process.step1.title"), desc: t("process.step1.desc") },
    { n: "02", title: t("process.step2.title"), desc: t("process.step2.desc") },
    { n: "03", title: t("process.step3.title"), desc: t("process.step3.desc") },
  ];

  return (
    <section id="proceso" className="relative overflow-hidden bg-[#0D0D12] py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-gradient-brand text-xs font-semibold uppercase tracking-[0.1em]">
            {t("process.label")}
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            {t("process.title")}
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-6 hidden md:block">
            <div className="mx-auto h-px w-full max-w-[80%] bg-gradient-to-r from-[#6B21C8] via-[#C0186E] to-[#F97316] opacity-40" />
          </div>

          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <li className="relative flex flex-col items-start md:items-center md:text-center">
                  <span className="relative z-10 grid h-12 w-12 place-items-center rounded-xl bg-gradient-purple-magenta font-display text-lg font-bold text-white ring-8 ring-[#0D0D12]">
                    {s.n}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-sm text-[#A0A0B8]">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
