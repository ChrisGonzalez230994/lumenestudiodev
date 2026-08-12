import {
  Layout,
  BookOpen,
  Building2,
  Briefcase,
  ShoppingBag,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";

export const services = [
  { id: "landing-pages", icon: Layout, titleKey: "services.landing.title", descKey: "services.landing.desc" },
  { id: "catalogos", icon: BookOpen, titleKey: "services.catalog.title", descKey: "services.catalog.desc" },
  { id: "institucionales", icon: Building2, titleKey: "services.institutional.title", descKey: "services.institutional.desc" },
  { id: "portfolios", icon: Briefcase, titleKey: "services.portfolio.title", descKey: "services.portfolio.desc" },
  { id: "ecommerce", icon: ShoppingBag, titleKey: "services.ecommerce.title", descKey: "services.ecommerce.desc" },
  { id: "branding", icon: Sparkles, titleKey: "services.branding.title", descKey: "services.branding.desc" },
] as const;

export function Services() {
  const { t } = useI18n();
  return (
    <section id="servicios" className="relative bg-[#0D0D12] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#C0186E]">
            {t("services.label")}
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-base text-[#A0A0B8] sm:text-lg">
            {t("services.subtitle")}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <article
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A2E] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#C0186E] hover:shadow-[0_4px_24px_rgba(192,24,110,0.2)]"
              >
                <div
                  className="grid h-10 w-10 place-items-center rounded-full text-white"
                  style={{ background: "linear-gradient(135deg, #6B21C8, #C0186E)" }}
                  aria-hidden="true"
                >
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {t(s.titleKey)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A0A0B8]">{t(s.descKey)}</p>

                <a
                  href="#contacto"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#C0186E] transition-colors hover:text-[#F97316]"
                  aria-label={`${t("services.more")} — ${t(s.titleKey)}`}
                >
                  {t("services.more")}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
