import { MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_URL =
  "https://wa.me/5492236195381?text=" +
  encodeURIComponent("¡Hola Lumen! Quiero empezar un proyecto.");

export function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-2xl border border-[rgba(107,33,200,0.3)] p-10 sm:p-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(107,33,200,0.2), rgba(192,24,110,0.1))",
            }}
          >
            <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#A0A0B8]">
              {t("cta.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gradient-cta px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                {t("cta.whatsapp")}
              </a>
              <a
                href="#contacto"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                {t("cta.write")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
