import { useState } from "react";
import { Check, ChevronDown, ArrowUpRight, Wallet } from "lucide-react";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { useI18n } from "@/lib/i18n";
import { SERVICES } from "@/lib/services-data";

const WA = "https://wa.me/5492236195381?text=";
const ACCENTS = ["#6B21C8", "#C0186E", "#F97316", "#F5A623", "#C0186E", "#6B21C8"];

// Used by the contact form's service selector.
export const services = SERVICES.map((s) => ({ id: s.id, name: s.name }));

export function Services() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="stripe-gradient pointer-events-none absolute right-[-10rem] top-40 -z-10 h-96 w-96 rounded-full opacity-[0.12] blur-[80px]"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C0186E]">
              {t("services.label")}
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] text-[#1A1A1A] sm:text-6xl">
              {t("services.v2.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-base leading-relaxed text-[#5E5E6E] sm:text-lg">
              {t("services.v2.subtitle")}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const isOpen = open === s.id;
            const accent = ACCENTS[i];
            const panelId = `svc-${s.id}`;
            return (
              <Reveal key={s.id} delay={(i % 3) * 0.06}>
                <TiltCard
                  as="article"
                  className="relative overflow-hidden rounded-3xl border border-black/[0.07] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-black/15 hover:shadow-[0_24px_60px_-28px_rgba(107,33,200,0.35)]"
                  innerClassName="flex flex-col p-7"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
                  />
                  <span
                    className="font-mono text-[11px] uppercase tracking-[0.14em]"
                    style={{ color: accent }}
                  >
                    {s.tag}
                  </span>
                  <h3 className="mt-3 text-[1.35rem] font-semibold leading-tight text-[#1A1A1A]">
                    {s.name[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5E5E6E]">{s.tagline[lang]}</p>

                  <div className="mt-6 border-y border-black/[0.06] py-5">
                    <p className="text-3xl font-semibold tracking-tight text-[#1A1A1A]">
                      {s.price[lang]}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-gray-500">{s.priceNote[lang]}</p>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {s.key.map((k) => (
                      <li key={k.es} className="flex gap-2.5 text-sm leading-snug text-[#1A1A1A]">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: accent }}
                          aria-hidden="true"
                        />
                        {k[lang]}
                      </li>
                    ))}
                  </ul>

                  {isOpen && (
                    <div id={panelId} className="mt-6 space-y-6 rounded-2xl bg-[#FAFAFA] p-5">
                      {s.groups.map((g) => (
                        <div key={g.title.es}>
                          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-400">
                            {g.title[lang]}
                          </p>
                          <ul className="mt-3 space-y-3">
                            {g.items.map((item) => (
                              <li
                                key={item.title.es}
                                className="text-[13px] leading-relaxed text-[#5E5E6E]"
                              >
                                <span className="font-semibold text-[#1A1A1A]">
                                  {item.title[lang]}.
                                </span>{" "}
                                {item.desc[lang]}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : s.id)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#1A1A1A] underline-offset-4 hover:underline"
                    >
                      {isOpen ? t("services.v2.collapse") : t("services.v2.expand")}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <a
                      href={WA + encodeURIComponent(t("services.v2.wa") + s.name[lang])}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magnetic inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
                    >
                      {t("services.v2.cta")}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col gap-3 rounded-2xl border border-black/[0.07] bg-white px-6 py-5 text-sm text-[#1A1A1A] sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-3 font-medium">
              <Wallet className="h-5 w-5 text-[#C0186E]" aria-hidden="true" />
              {t("services.v2.payment")}
            </p>
            <p className="text-[#5E5E6E]">{t("services.v2.combo")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
