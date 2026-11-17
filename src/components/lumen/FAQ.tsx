import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";

const ORDER = [2, 5, 1, 3, 4, 6, 7, 8, 9];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { t } = useI18n();

  const faqs = ORDER.map((n) => ({ q: t(`faq.q${n}`), a: t(`faq.a${n}`) }));

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C0186E]">
            {t("faq.label")}
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] text-[#1A1A1A] sm:text-6xl">
            {t("faq.title")}
          </h2>
        </Reveal>

        <div className="border-t border-black/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.03}>
                <div className="border-b border-black/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-gray-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold text-[#1A1A1A] transition-colors group-hover:text-[#6B21C8] sm:text-xl">
                        {item.q}
                      </h3>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-[#C0186E] bg-[#C0186E] text-white"
                          : "text-[#1A1A1A]"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <p
                      id={`faq-panel-${i}`}
                      className="max-w-2xl pb-6 pl-9 text-[15px] leading-relaxed text-[#5E5E6E]"
                    >
                      {item.a}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
