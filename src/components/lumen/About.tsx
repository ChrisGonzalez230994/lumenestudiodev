import { Palette, Code2, Target, Linkedin, BriefcaseBusiness, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { useI18n } from "@/lib/i18n";
import christianPhoto from "@/assets/team/christian-gonzalez.jpg";
import ayelenPhoto from "@/assets/team/ayelen-gonzalez.jpg";

const VALUES = [
  { Icon: Palette, color: "#6B21C8" },
  { Icon: Code2, color: "#C0186E" },
  { Icon: Target, color: "#F97316" },
];

type Link = { kind: "linkedin" | "portfolio"; href: string };

const TEAM: { n: number; name: string; photo: string; links: Link[] }[] = [
  {
    n: 1,
    name: "Christian González",
    photo: christianPhoto,
    links: [
      { kind: "linkedin", href: "https://www.linkedin.com/in/chris-gonzalez-alejandro/" },
      { kind: "portfolio", href: "https://portfolio-christian-gonzalez.vercel.app/" },
    ],
  },
  {
    n: 2,
    name: "Ayelén González",
    photo: ayelenPhoto,
    links: [{ kind: "linkedin", href: "https://www.linkedin.com/in/ayelengonz%C3%A1lez/" }],
  },
];

export function About() {
  const { t } = useI18n();

  return (
    <section id="nosotros" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="stripe-gradient pointer-events-none absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full opacity-[0.12] blur-[80px]"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C0186E]">
              {t("about.label")}
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] text-[#1A1A1A] sm:text-6xl">
              {t("about.statement")}
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:pt-10">
            <p className="text-lg leading-relaxed text-[#5E5E6E]">{t("about.bio")}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {VALUES.map(({ Icon, color }, i) => (
                <li key={i} className="rounded-2xl border border-black/[0.07] bg-white p-4">
                  <Icon className="h-5 w-5" style={{ color }} aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-[#1A1A1A]">
                    {t(`about.value.${i + 1}.title`)}
                  </p>
                  <p className="mt-0.5 text-[13px] leading-snug text-[#5E5E6E]">
                    {t(`about.value.${i + 1}.desc`)}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-24">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-gray-400">
            {t("team.label")}
          </span>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <TiltCard
                as="article"
                className="group h-full overflow-hidden rounded-3xl border border-black/[0.07] bg-white hover:border-black/15 hover:shadow-[0_24px_60px_-28px_rgba(107,33,200,0.35)]"
                innerClassName="grid h-full gap-0 sm:grid-cols-[0.9fr_1.1fr]"
              >
                <TeamPhoto src={m.photo} alt={t(`team.${m.n}.photoAlt`)} />
                <div className="flex flex-col p-7">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#6B21C8]">
                    {t(`team.${m.n}.role`)}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-[#1A1A1A]">{m.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5E5E6E]">
                    {t(`team.${m.n}.bio`)}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-7">
                    {m.links.map((l) =>
                      l.kind === "linkedin" ? (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn de ${m.name}`}
                          className="magnetic inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#1A1A1A] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6B21C8]"
                        >
                          <Linkedin className="h-4 w-4" aria-hidden="true" />
                          {t("team.linkedin")}
                        </a>
                      ) : (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Portfolio de ${m.name}`}
                          className="magnetic inline-flex min-h-[44px] items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-black/40"
                        >
                          <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                          {t("team.portfolio")}
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Grayscale portrait that turns to color on hover (desktop) or on tap (mobile). */
function TeamPhoto({ src, alt }: { src: string; alt: string }) {
  const [color, setColor] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setColor((v) => !v)}
      aria-pressed={color}
      aria-label={alt}
      className="relative block aspect-[4/5] w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C0186E] sm:aspect-auto sm:h-full"
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover object-top transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.03] group-hover:[filter:grayscale(0%)] ${
          color ? "scale-[1.03] [filter:grayscale(0%)]" : "[filter:grayscale(100%)_contrast(1.05)]"
        }`}
      />
    </button>
  );
}
