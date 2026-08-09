import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { t } = useI18n();

  const faqs = Array.from({ length: 9 }, (_, i) => ({
    q: t(`faq.q${i + 1}`),
    a: t(`faq.a${i + 1}`),
  }));

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <span className="text-gradient-brand text-xs font-semibold uppercase tracking-[0.1em]">
            {t("faq.label")}
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
            {t("faq.title")}
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-white/8 bg-cream-warm">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                      {item.q}
                    </h3>
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mustard/15 text-mustard-soft ring-1 ring-mustard/20"
                      aria-hidden="true"
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div id={`faq-panel-${i}`} className="px-6 pb-6 text-sm text-ink/70">
                      {item.a}
                    </div>
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
