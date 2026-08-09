import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";
import { Palette, Code2, Target } from "lucide-react";
import christianPhoto from "@/assets/christian.jpg";

const VALUE_ICONS = [Palette, Code2, Target];

export function About() {
  const { t } = useI18n();

  const values = [1, 2, 3].map((n, i) => ({
    Icon: VALUE_ICONS[i],
    title: t(`about.value.${n}.title`),
    desc: t(`about.value.${n}.desc`),
  }));

  const steps = [1, 2, 3, 4].map((n) => ({
    n: `0${n}`,
    title: t(`about.how.${n}.title`),
    desc: t(`about.how.${n}.desc`),
  }));

  return (
    <section id="nosotros" className="relative overflow-hidden bg-[#0D0D12] py-24 sm:py-32">
      {/* decorative brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#6B21C8] opacity-20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-[#C0186E] opacity-15 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* BLOCK 1 — statement + photo */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="text-gradient-brand text-xs font-semibold uppercase tracking-[0.1em]">
              {t("about.label")}
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
              {t("about.statement")}
            </h2>
            <div className="mt-8 h-px w-32 bg-gradient-to-r from-[#6B21C8] via-[#C0186E] to-[#F5A623]" />
          </Reveal>

          <Reveal delay={0.12} className="order-first lg:order-none">
            <div className="relative mx-auto w-full max-w-sm">
              {/* concentric halo rings, echoing the logo */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#6B21C8] via-[#C0186E] to-[#F5A623] opacity-25 blur-2xl"
              />
              <div className="relative aspect-square rounded-full bg-gradient-to-br from-[#6B21C8] via-[#C0186E] to-[#F5A623] p-[3px]">
  <div className="grid h-full w-full place-items-center overflow-hidden rounded-full bg-[#1A1A2E]">
    <img
      src={christianPhoto}
      alt={t("about.photoAlt")}
      className="h-full w-full object-cover"
    />
  </div>
</div>
            </div>
          </Reveal>
        </div>

        {/* BLOCK 2 — bio */}
        <Reveal className="mt-20 max-w-4xl">
          <p className="text-lg leading-relaxed text-[#C9C9DB] sm:text-xl">{t("about.bio")}</p>
        </Reveal>

        {/* BLOCK 3 — value proposition */}
        <div className="mt-24">
          <Reveal className="max-w-2xl">
            <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              {t("about.value.title")}
            </h3>
            <p className="mt-4 text-base text-[#A0A0B8]">{t("about.value.intro")}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-white/10 bg-[#1A1A2E] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#C0186E]/60">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#6B21C8] to-[#C0186E]">
                    <v.Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <h4 className="mt-5 font-display text-xl font-semibold text-white">{v.title}</h4>
                  <p className="mt-2 text-sm text-[#A0A0B8]">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* BLOCK 4 — how we work */}
        <div className="mt-24">
          <Reveal className="max-w-2xl">
            <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              {t("about.how.title")}
            </h3>
          </Reveal>

          <div className="relative mt-14">
            <div aria-hidden="true" className="absolute left-0 right-0 top-6 hidden md:block">
              <div className="mx-auto h-px w-full max-w-[85%] bg-gradient-to-r from-[#6B21C8] via-[#C0186E] to-[#F5A623] opacity-40" />
            </div>

            <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <li className="relative flex flex-col items-start md:items-center md:text-center">
                    <span className="relative z-10 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#6B21C8] to-[#C0186E] font-display text-lg font-bold text-white ring-8 ring-[#0D0D12]">
                      {s.n}
                    </span>
                    <h4 className="mt-6 font-display text-xl font-semibold text-white">{s.title}</h4>
                    <p className="mt-2 max-w-xs text-sm text-[#A0A0B8]">{s.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* CTA */}
        <Reveal className="mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1A1A2E] px-8 py-12 text-center sm:px-14 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 w-64 rounded-full bg-[#6B21C8] opacity-30 blur-[90px]"
            />
            <div className="relative">
              <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                {t("about.cta.title")}
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#A0A0B8]">
                {t("about.cta.subtitle")}
              </p>
              <a
                href="#contacto"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6B21C8] via-[#C0186E] to-[#F97316] px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A2E]"
              >
                {t("about.cta.button")}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
