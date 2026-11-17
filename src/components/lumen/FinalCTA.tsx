import { MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_URL =
  "https://wa.me/5492236195381?text=" +
  encodeURIComponent("¡Hola Lumen! Quiero empezar un proyecto.");

export function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="relative px-5 py-12 sm:px-8 sm:py-16">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#14141C] px-8 py-16 text-center sm:px-16 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#6B21C8] opacity-60 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-[#C0186E] opacity-50 blur-[90px]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.02] text-white sm:text-6xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/65 sm:text-lg">
              {t("cta.subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-white/90"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {t("cta.whatsapp")}
              </a>
              <a
                href="#contacto"
                className="magnetic inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60"
              >
                {t("cta.write")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
