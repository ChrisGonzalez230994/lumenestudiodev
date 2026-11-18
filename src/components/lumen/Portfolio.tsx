import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { useI18n } from "@/lib/i18n";
import caseRv from "@/assets/case-rv.jpg";
import caseJz from "@/assets/case-jz.jpg";
import caseLitz from "@/assets/case-litz.jpg";
import caseStele from "@/assets/case-stele.jpg";
import caseIcb from "@/assets/case-icb.jpg";
import caseGaspar from "@/assets/case-gaspar.jpg";
import caseCandela from "@/assets/case-candela.jpg";
import caseLeandro from "@/assets/case-leandro.jpg";

type Case = { key: string; img: string; name: string; href: string };

// Visible by default.
const FEATURED: Case[] = [
  {
    key: "candela",
    img: caseCandela,
    name: "Candela Chandía",
    href: "https://candelachandia.com.ar/",
  },
  {
    key: "gaspar",
    img: caseGaspar,
    name: "DimeloGasp",
    href: "https://gasparporfoliodigital.vercel.app/",
  },
  {
    key: "litz",
    img: caseLitz,
    name: "Litz Evolution Studio",
    href: "https://litzstudioevolution.vercel.app/",
  },
];

// Shown after clicking "Ver más".
const MORE: Case[] = [
  {
    key: "leandro",
    img: caseLeandro,
    name: "Leandro Sayago",
    href: "https://leandro-sayago.leandro-porfolio.workers.dev/",
  },
  { key: "rv", img: caseRv, name: "RV Departamento", href: "https://rvdepartamento.vercel.app/" },
  { key: "jz", img: caseJz, name: "JZ Motomecánica", href: "https://jzmotomecanica.vercel.app/" },
  {
    key: "stele",
    img: caseStele,
    name: "Encuadernación Stele",
    href: "https://encuadernacionstele-5ewz.vercel.app/",
  },
  {
    key: "icb",
    img: caseIcb,
    name: "ICB Mar del Plata",
    href: "https://icbmardelplata.vercel.app/",
  },
];

export function Portfolio() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    if (expanded) {
      document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setExpanded((v) => !v);
  };

  return (
    <section id="portfolio" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C0186E]">
              {t("works.label")}
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] text-[#1A1A1A] sm:text-6xl">
              {t("works.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-base leading-relaxed text-[#5E5E6E] sm:text-lg">
              {t("works.subtitle")}
            </p>
          </Reveal>
        </div>

        {/* Featured: bento cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((c, i) => (
            <Reveal
              key={c.key}
              delay={i * 0.06}
              className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <TiltCard
                as="a"
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full overflow-hidden rounded-3xl border border-black/[0.07] bg-white hover:border-black/15 hover:shadow-[0_24px_60px_-28px_rgba(192,24,110,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0186E]"
                innerClassName="flex flex-col"
              >
                <div className="p-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#6B21C8]/15 via-[#C0186E]/10 to-[#F97316]/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]">
                    <img
                      src={c.img}
                      alt={`Vista previa del sitio de ${c.name}`}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span className="absolute bottom-3 right-3 inline-flex translate-y-2 items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#1A1A1A] opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {t("works.v2.visit")}{" "}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 px-6 pb-6 pt-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6B21C8]">
                    {t(`works.${c.key}.tag`)}
                  </span>
                  <h3 className="text-xl font-semibold text-[#1A1A1A]">{c.name}</h3>
                  <p className="text-sm leading-relaxed text-[#5E5E6E]">
                    {t(`works.${c.key}.desc`)}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* More: compact list */}
        {expanded && (
          <div id="portfolio-more" className="mt-6 border-t border-black/10">
            {MORE.map((c, i) => (
              <Reveal key={c.key} delay={i * 0.05}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 border-b border-black/10 py-6 transition-all duration-300 hover:pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0186E]"
                >
                  <span className="hidden h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-black/5 sm:block">
                    <img
                      src={c.img}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xl font-semibold tracking-tight text-[#1A1A1A] sm:text-2xl">
                      {c.name}
                    </span>
                    <span className="mt-1 block text-sm text-[#5E5E6E] md:hidden">
                      {t(`works.${c.key}.tag`)}
                    </span>
                  </span>
                  <span className="hidden max-w-xs flex-1 text-sm text-[#5E5E6E] md:block">
                    {t(`works.${c.key}.tag`)}
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 text-[#1A1A1A] transition-all duration-300 group-hover:border-[#C0186E] group-hover:bg-[#C0186E] group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={expanded}
            aria-controls="portfolio-more"
            className="magnetic inline-flex min-h-[48px] items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-black/40"
          >
            {expanded ? t("works.less") : t("works.more")}
            <span
              aria-hidden="true"
              className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            >
              ↓
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
