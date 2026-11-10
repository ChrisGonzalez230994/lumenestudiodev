import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";
import caseRv from "@/assets/case-rv.jpg";
import caseJz from "@/assets/case-jz.jpg";
import caseLitz from "@/assets/case-litz.jpg";
import caseBotbol from "@/assets/case-botbol.jpg";
import caseStele from "@/assets/case-stele.jpg";
import caseIcb from "@/assets/case-icb.jpg";
import caseGaspar from "@/assets/case-gaspar.jpg";
import caseCandela from "@/assets/case-candela.jpg";

type Case = { key: string; img: string; name: string; href: string };

// Visible by default.
const FEATURED: Case[] = [
  { key: "candela", img: caseCandela, name: "Candela Chandía", href: "https://candelachandia.com.ar/" },
  { key: "gaspar", img: caseGaspar, name: "DimeloGasp", href: "https://gasparporfoliodigital.vercel.app/" },
  { key: "litz", img: caseLitz, name: "Litz Evolution Studio", href: "https://litzstudioevolution.vercel.app/" },
];

// Shown after clicking "Ver más".
const MORE: Case[] = [
  { key: "rv", img: caseRv, name: "RV Departamento", href: "https://rvdepartamento.vercel.app/" },
  { key: "jz", img: caseJz, name: "JZ Motomecánica", href: "https://jzmotomecanica.vercel.app/" },
  { key: "botbol", img: caseBotbol, name: "Botbol Clothes", href: "https://botbolclothes.vercel.app/" },
  { key: "stele", img: caseStele, name: "Encuadernación Stele", href: "https://encuadernacionstele-5ewz.vercel.app/" },
  { key: "icb", img: caseIcb, name: "ICB Mar del Plata", href: "https://icbmardelplata.vercel.app/" },
];

export function Portfolio() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const visible = expanded ? [...FEATURED, ...MORE] : FEATURED;

  const toggle = () => {
    if (expanded) {
      // Bring the grid back into view so collapsing doesn't leave the user lost further down.
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setExpanded((v) => !v);
  };

  return (
    <section id="portfolio" className="section-light relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6B21C8]">
            {t("works.label")}
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[#0D0D12] sm:text-5xl">
            {t("works.title")}
          </h2>
          <p className="mt-4 text-base text-[#4A4A6A]">{t("works.subtitle")}</p>
        </Reveal>

        <div
          id="portfolio-grid"
          ref={gridRef}
          className="mt-14 grid scroll-mt-28 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((c, i) => (
            <Reveal key={c.key} delay={(i < FEATURED.length ? i : i - FEATURED.length) * 0.06}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#DEDEE8] bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#C0186E] hover:shadow-[0_8px_32px_rgba(192,24,110,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0186E]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={`Vista previa del sitio de ${c.name}`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-display text-base font-semibold text-[#0D0D12]">{c.name}</h3>
                  <span className="w-fit rounded-full bg-[#F3EFFE] px-3 py-1 text-xs font-medium text-[#6B21C8]">
                    {t(`works.${c.key}.tag`)}
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-[#4A4A6A]">
                    {t(`works.${c.key}.desc`)}
                  </p>
                  <span className="mt-auto pt-3 text-sm font-semibold text-[#C0186E]">
                    {t("works.view")} →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={expanded}
            aria-controls="portfolio-grid"
            className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border-[1.5px] border-[#C0186E] bg-white px-6 py-2.5 text-sm font-semibold text-[#C0186E] transition-colors hover:bg-[#C0186E] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C0186E] focus-visible:ring-offset-2"
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
