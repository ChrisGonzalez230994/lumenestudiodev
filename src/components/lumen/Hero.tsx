import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_URL =
  "https://wa.me/5492236195381?text=" +
  encodeURIComponent("¡Hola Lumen! Quiero más info sobre sus servicios.");

const CLIENTS = [
  "Candela Chandía",
  "DimeloGasp",
  "Litz Evolution Studio",
  "RV Departamento",
  "JZ Motomecánica",
  "Encuadernación Stele",
  "ICB Mar del Plata",
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: delay + 1.35, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  const { t } = useI18n();
  const pre = t("hero.v2.pre");

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-16 sm:pt-44 lg:pt-52">
      {/* Decorative brand blobs */}
      <div
        aria-hidden="true"
        className="stripe-gradient pointer-events-none absolute -right-40 -top-40 -z-10 h-[38rem] w-[38rem] rotate-[25deg] rounded-[40%] opacity-20 blur-[80px] sm:-right-24 sm:opacity-40"
      />
      <div
        aria-hidden="true"
        className="stripe-gradient pointer-events-none absolute -left-32 top-[28rem] -z-10 h-72 w-72 rounded-full opacity-20 blur-[60px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.span
          {...rise(0.1)}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-600 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C0186E] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C0186E]" />
          </span>
          {t("hero.v2.badge")}
        </motion.span>

        <motion.h1
          {...rise(0.2)}
          className="mt-8 max-w-5xl text-[3.25rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#1A1A1A] sm:text-7xl lg:text-[6.5rem]"
        >
          {pre && <>{pre} </>}
          <span className="text-stripe">{t("hero.v2.accent")}</span> {t("hero.v2.post")}
        </motion.h1>

        <motion.div
          {...rise(0.35)}
          className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <p className="max-w-xl text-lg leading-relaxed text-[#5E5E6E] sm:text-xl">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#servicios"
              className="magnetic group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              {t("hero.primary")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic group inline-flex min-h-[48px] items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:border-black/40"
            >
              {t("hero.v2.wa")}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Client strip */}
      <motion.div {...rise(0.5)} className="mt-24 sm:mt-28">
        <p className="mx-auto max-w-7xl px-5 font-mono text-[11px] uppercase tracking-[0.16em] text-gray-400 sm:px-8">
          {t("hero.v2.clients")}
        </p>
        <div className="relative mt-5 overflow-hidden border-y border-black/5 py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="v2-marquee gap-14 pr-14">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={i}
                aria-hidden={i >= CLIENTS.length}
                className="whitespace-nowrap text-xl font-semibold tracking-tight text-[#1A1A1A] opacity-40 grayscale sm:text-2xl"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
