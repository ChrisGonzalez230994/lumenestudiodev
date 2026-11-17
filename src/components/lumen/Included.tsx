import { Activity, MessageCircle, Globe, KeyRound, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { useI18n } from "@/lib/i18n";
import { INCLUDED } from "@/lib/services-data";

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Supabase",
  "Vercel",
  "Framer Motion",
  "Node.js",
];

const card =
  "group relative h-full overflow-hidden rounded-3xl border border-black/[0.07] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-black/15 hover:shadow-[0_24px_60px_-28px_rgba(107,33,200,0.35)]";

export function Included() {
  const { t, lang } = useI18n();
  const x = (k: keyof typeof INCLUDED) => ({
    title: INCLUDED[k].title[lang],
    desc: INCLUDED[k].desc[lang],
  });
  const design = x("design");
  const mobile = x("mobile");
  const monitor = x("monitor");
  const domain = x("domain");
  const yours = x("yours");

  return (
    <section id="incluido" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C0186E]">
            {t("inc.label")}
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] text-[#1A1A1A] sm:text-6xl">
            {t("inc.title")}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:auto-rows-[20rem] lg:grid-cols-4">
          {/* 1 — Diseño a medida (2x2) */}
          <Reveal className="md:col-span-2 lg:row-span-2">
            <TiltCard className={card} innerClassName="flex flex-col p-8">
              <div className="relative grid flex-1 place-items-center py-10">
                <div className="relative grid h-56 w-56 place-items-center">
                  {[0, 1.2, 2.4].map((d) => (
                    <span
                      key={d}
                      aria-hidden="true"
                      className="v2-pulse-ring absolute inset-0 rounded-full border-2 border-[#C0186E]/40"
                      style={{ animationDelay: `${d}s` }}
                    />
                  ))}
                  <span
                    aria-hidden="true"
                    className="absolute inset-10 rounded-full border border-dashed border-black/10"
                  />
                  <span
                    aria-hidden="true"
                    className="stripe-gradient h-24 w-24 rounded-full shadow-[0_20px_60px_-10px_rgba(192,24,110,0.6)]"
                  />
                  <span className="absolute -right-4 top-6 rounded-full border border-black/10 bg-white px-3 py-1 font-mono text-[11px] text-gray-600 shadow-sm">
                    #6B21C8
                  </span>
                  <span className="absolute -left-6 bottom-10 rounded-full border border-black/10 bg-white px-3 py-1 font-mono text-[11px] text-gray-600 shadow-sm">
                    {lang === "es" ? "tu logo" : "your logo"}
                  </span>
                  <span className="absolute -bottom-2 right-2 rounded-full border border-black/10 bg-white px-3 py-1 font-mono text-[11px] text-gray-600 shadow-sm">
                    #F97316
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#1A1A1A] sm:text-3xl">
                  {design.title}
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-[#5E5E6E]">
                  {design.desc}
                </p>
                <p className="mt-4 text-sm font-medium text-[#1A1A1A]">
                  <Smartphone
                    className="mr-1.5 inline h-4 w-4 -translate-y-px text-[#6B21C8]"
                    aria-hidden="true"
                  />
                  {mobile.title} — <span className="font-normal text-[#5E5E6E]">{mobile.desc}</span>
                </p>
              </div>
            </TiltCard>
          </Reveal>

          {/* 2 — Código a medida (1x2) */}
          <Reveal delay={0.06} className="lg:row-span-2">
            <TiltCard className={`${card} !bg-[#14141C]`} innerClassName="flex flex-col p-7">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F97316]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F5A623]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#C0186E]" />
              </div>
              <pre
                aria-hidden="true"
                className="mt-6 flex-1 overflow-hidden font-mono text-[12.5px] leading-6 text-white/70"
              >
                <code>
                  <span className="text-[#C9A0FF]">const</span> web{" "}
                  <span className="text-white/40">=</span>{" "}
                  <span className="text-[#F5A623]">lumen</span>.
                  <span className="text-[#FF8FC8]">create</span>({"{"}
                  {"\n"} marca: <span className="text-[#FDBA74]">"Tu negocio"</span>,{"\n"}{" "}
                  whatsapp: <span className="text-[#C9A0FF]">true</span>,{"\n"} celular:{" "}
                  <span className="text-[#FDBA74]">"primero"</span>,{"\n"} seo:{" "}
                  <span className="text-[#FDBA74]">"google"</span>,{"\n"} entrega:{" "}
                  <span className="text-[#FDBA74]">"en días"</span>,{"\n"}
                  {"}"});
                  {"\n"}
                  {"\n"}
                  <span className="text-white/35">// ✓ deploy listo</span>
                  {"\n"}
                  <span className="text-[#C9A0FF]">await</span> web.
                  <span className="text-[#FF8FC8]">publish</span>();
                </code>
              </pre>
              <div>
                <h3 className="text-xl font-semibold text-white">{t("inc.code.title")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{t("inc.code.desc")}</p>
              </div>
            </TiltCard>
          </Reveal>

          {/* 4 — Monitoreo (1x1) */}
          <Reveal delay={0.12}>
            <TiltCard className={card} innerClassName="flex flex-col justify-between p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#6B21C8]/10 text-[#6B21C8]">
                <Activity className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> online · 5 min
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[#1A1A1A]">{monitor.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5E5E6E]">{monitor.desc}</p>
              </div>
            </TiltCard>
          </Reveal>

          {/* 5 — WhatsApp (1x1) */}
          <Reveal delay={0.18}>
            <TiltCard className={card} innerClassName="flex flex-col justify-between p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#C0186E]/10 text-[#C0186E]">
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#1A1A1A]">{t("inc.wa.title")}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5E5E6E]">{t("inc.wa.desc")}</p>
              </div>
            </TiltCard>
          </Reveal>

          {/* 3 — Paneles (2x1) with a faux dashboard that slides on hover */}
          <Reveal delay={0.06} className="md:col-span-2">
            <TiltCard
              className={card}
              innerClassName="grid h-full gap-6 p-7 sm:grid-cols-[1fr_1.1fr]"
            >
              <div className="flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-[#1A1A1A]">{t("inc.panel.title")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5E5E6E]">{t("inc.panel.desc")}</p>
              </div>
              <div
                aria-hidden="true"
                className="relative min-h-[15.5rem] overflow-hidden rounded-2xl lg:min-h-[11rem] bg-gradient-to-br from-[#6B21C8]/15 via-[#C0186E]/10 to-[#F97316]/15 p-4"
              >
                <div className="absolute inset-x-4 top-4 rounded-xl bg-white p-4 shadow-sm transition-transform duration-500 ease-out lg:translate-y-3 lg:group-hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400">
                      {t("inc.panel.visits")}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-600">+38%</span>
                  </div>
                  <p className="mt-1 text-2xl font-semibold tracking-tight text-[#1A1A1A]">2.481</p>
                  <div className="mt-3 flex h-12 items-end gap-1.5">
                    {[30, 45, 38, 60, 52, 75, 68, 90, 82, 100].map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-[#6B21C8] to-[#C0186E] opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-3 right-4 w-44 rounded-xl bg-white p-3 shadow-sm transition-transform delay-75 duration-500 ease-out lg:translate-y-10 lg:group-hover:translate-y-0">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400">
                    {t("inc.panel.orders")}
                  </span>
                  <p className="mt-0.5 text-lg font-semibold text-[#1A1A1A]">
                    124{" "}
                    <span className="text-xs font-medium text-[#F97316]">
                      ● {lang === "es" ? "hoy" : "today"} 9
                    </span>
                  </p>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* 6 — Dominio + Es tuya + stack (2x1) */}
          <Reveal delay={0.12} className="md:col-span-2">
            <TiltCard
              className={card}
              innerClassName="flex h-full flex-col justify-between gap-6 p-7"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Globe className="h-6 w-6 text-[#F97316]" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-semibold text-[#1A1A1A]">{domain.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5E5E6E]">{domain.desc}</p>
                </div>
                <div>
                  <KeyRound className="h-6 w-6 text-[#F5A623]" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-semibold text-[#1A1A1A]">{yours.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5E5E6E]">{yours.desc}</p>
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-400">
                  {t("inc.stack")}
                </p>
                <div className="mt-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                  <div className="v2-marquee gap-2 pr-2">
                    {[...STACK, ...STACK].map((s, i) => (
                      <span
                        key={i}
                        aria-hidden={i >= STACK.length}
                        className="whitespace-nowrap rounded-full border border-black/10 bg-[#FAFAFA] px-3 py-1 font-mono text-xs text-gray-600"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
