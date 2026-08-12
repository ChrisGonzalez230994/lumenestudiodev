import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";
import { Palette, Code2, Target } from "lucide-react";
import christianPhoto from "@/assets/team/christian-gonzalez.jpg.asset.json";
import ayelenPhoto from "@/assets/team/ayelen-gonzalez.jpg.asset.json";

const VALUE_ICONS = [Palette, Code2, Target];

const TEAM = [
  { n: 1, name: "Christian González", photo: christianPhoto.url },
  { n: 2, name: "Ayelén González", photo: ayelenPhoto.url },
];

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
    <section id="nosotros" className="relative overflow-hidden bg-[#F7F7FA] py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* BLOCK 1 — statement */}
        <Reveal className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6B21C8]">
            {t("about.label")}
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-[#0D0D12] sm:text-5xl lg:text-[3.4rem]">
            {t("about.statement")}
          </h2>
          <div className="mt-8 h-px w-32 bg-gradient-to-r from-[#6B21C8] via-[#C0186E] to-[#F5A623]" />
        </Reveal>

        {/* BLOCK 2 — bio */}
        <Reveal className="mt-14 max-w-4xl">
          <p className="text-lg leading-relaxed text-[#4A4A6A] sm:text-xl">{t("about.bio")}</p>
        </Reveal>

        {/* BLOCK 3 — value proposition */}
        <div className="mt-24">
          <Reveal className="max-w-2xl">
            <h3 className="font-display text-3xl font-semibold text-[#0D0D12] sm:text-4xl">
              {t("about.value.title")}
            </h3>
            <p className="mt-4 text-base text-[#4A4A6A]">{t("about.value.intro")}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-[#DEDEE8] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#C0186E]/60">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#6B21C8] to-[#C0186E]">
                    <v.Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <h4 className="mt-5 font-display text-xl font-semibold text-[#0D0D12]">{v.title}</h4>
                  <p className="mt-2 text-sm text-[#4A4A6A]">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* BLOCK 3.5 — team */}
        <div className="mt-24">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6B21C8]">
              {t("team.label")}
            </span>
          </Reveal>

          <div className="mx-auto mt-10 grid gap-6 md:grid-cols-2">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <article className="group mx-auto w-full max-w-[480px] cursor-pointer overflow-hidden rounded-2xl border-[0.5px] border-[#DDDDE8] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(107,33,200,0.12)]">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                    <img
                      src={m.photo}
                      alt={t(`team.${m.n}.photoAlt`)}
                      loading="lazy"
                      className="block h-full w-full object-cover object-top [filter:grayscale(100%)_contrast(1.1)] transition-[filter,transform] duration-500 ease-out group-hover:[filter:grayscale(0%)_contrast(1)] group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(13,13,18,0.35)] to-transparent opacity-100 transition-opacity duration-[400ms] ease-out group-hover:opacity-0"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-[17px] font-bold text-[#0D0D12]">{m.name}</h4>
                    <p className="mt-1 text-[13px] uppercase tracking-[0.06em] text-[#6B21C8]">
                      {t(`team.${m.n}.role`)}
                    </p>
                    <p className="mt-2 text-[13px] leading-[1.6] text-[#4A4A6A]">
                      {t(`team.${m.n}.bio`)}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* BLOCK 4 — how we work */}
        <div className="mt-24">
          <Reveal className="max-w-2xl">
            <h3 className="font-display text-3xl font-semibold text-[#0D0D12] sm:text-4xl">
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
                    <span className="relative z-10 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#6B21C8] to-[#C0186E] font-display text-lg font-bold text-white ring-8 ring-[#F7F7FA]">
                      {s.n}
                    </span>
                    <h4 className="mt-6 font-display text-xl font-semibold text-[#0D0D12]">{s.title}</h4>
                    <p className="mt-2 max-w-xs text-sm text-[#4A4A6A]">{s.desc}</p>
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
