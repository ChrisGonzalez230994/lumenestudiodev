import { useEffect, useRef } from "react";
import { MessagesSquare, PenTool, Code2, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";

const STEPS = [
  { icon: MessagesSquare, color: "#6B21C8" },
  { icon: PenTool, color: "#C0186E" },
  { icon: Code2, color: "#F97316" },
  { icon: Rocket, color: "#F5A623" },
];

type Step = {
  n: string;
  title: string;
  desc: string;
  color: string;
  icon: (typeof STEPS)[number]["icon"];
};

function Card({ s }: { s: Step }) {
  return (
    <article className="group relative flex h-[22rem] w-full shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.07] bg-white p-8 transition-colors duration-300 hover:border-black/15 md:h-[26rem] md:w-[28rem]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: s.color }}
      />
      <div className="relative flex items-start justify-between">
        <span
          className="font-mono text-7xl font-semibold leading-none tracking-tighter text-black/[0.08] transition-colors duration-300 md:text-8xl"
          style={{ ["--c" as string]: s.color }}
        >
          <span className="group-hover:text-[var(--c)]">{s.n}</span>
        </span>
        <span
          className="grid h-12 w-12 place-items-center rounded-2xl text-white"
          style={{ background: s.color }}
        >
          <s.icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="relative">
        <h3 className="text-3xl font-semibold text-[#1A1A1A]">{s.title}</h3>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-[#5E5E6E]">{s.desc}</p>
      </div>
    </article>
  );
}

/**
 * Methodology: a 400vh container with a sticky 100vh stage; the track of step
 * cards moves horizontally with translate3d bound to scroll progress.
 * Below 768px it becomes a normal vertical list.
 */
export function Process() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const c = containerRef.current;
      const track = trackRef.current;
      if (!c || !track) return;
      if (window.innerWidth < 768) {
        track.style.transform = "";
        return;
      }
      const rect = c.getBoundingClientRect();
      const total = c.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / total));
      const distance = track.scrollWidth - track.parentElement!.clientWidth;
      track.style.transform = `translate3d(${-p * Math.max(0, distance)}px, 0, 0)`;
      if (barRef.current) barRef.current.style.width = `${(p * 100).toFixed(1)}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const steps = STEPS.map((s, i) => ({
    ...s,
    n: `0${i + 1}`,
    title: t(`about.how.${i + 1}.title`),
    desc: t(`about.how.${i + 1}.desc`),
  }));

  const intro = (
    <div className="shrink-0 md:w-[24rem]">
      <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C0186E]">
        {t("process.label")}
      </span>
      <h2 className="mt-4 text-4xl font-semibold leading-[1.05] text-[#1A1A1A] sm:text-6xl">
        {t("about.how.title")}
      </h2>
      <p className="mt-6 hidden font-mono text-xs uppercase tracking-[0.16em] text-gray-400 md:block">
        {t("process.hint")}
      </p>
    </div>
  );

  return (
    <section id="proceso" className="relative">
      {/* Mobile: vertical */}
      <div className="mx-auto max-w-7xl px-5 py-24 md:hidden">
        <Reveal>{intro}</Reveal>
        <ol className="mt-12 space-y-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <li>
                <Card s={s} />
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Desktop/tablet: horizontal */}
      <div ref={containerRef} className="relative hidden h-[400vh] md:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-7xl px-8">
            <ol ref={trackRef} className="flex items-center gap-6 will-change-transform">
              <li className="mr-10">{intro}</li>
              {steps.map((s) => (
                <li key={s.n}>
                  <Card s={s} />
                </li>
              ))}
              <li aria-hidden="true" className="w-[10vw] shrink-0" />
            </ol>
          </div>
          <div className="mx-auto mt-12 w-full max-w-7xl px-8">
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-black/[0.06]">
              <div ref={barRef} className="stripe-gradient h-full w-0 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
