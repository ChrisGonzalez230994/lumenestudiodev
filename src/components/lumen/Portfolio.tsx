import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";
import case1 from "@/assets/case-icb.png";
import case2 from "@/assets/case-stele.png";
import case3 from "@/assets/case-botbol.png";

export function Portfolio() {
  const { t } = useI18n();

  const cases = [
    { img: case1, name: "ICB Mar del Plata", tagKey: "works.tag.institutional", href: "https://icbmardelplata.lovable.app", alt: "ICB Mar del Plata" },
    { img: case2, name: "Encuadernación Stele", tagKey: "works.tag.landing", href: "https://encuadernacionstele.lovable.app/", alt: "Encuadernación Stele" },
    { img: case3, name: "Botbol Clothes", tagKey: "works.tag.ecommerce", href: "https://botbolclothes.lovable.app", alt: "Botbol Clothes" },
  ];

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

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.name + i} delay={i * 0.06}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-[#DEDEE8] bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#C0186E] hover:shadow-[0_8px_32px_rgba(192,24,110,0.1)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1.5 p-5">
                  <h3 className="font-display text-base font-semibold text-[#0D0D12]">{c.name}</h3>
                  <span className="w-fit rounded-full bg-[#F3EFFE] px-3 py-1 text-xs font-medium text-[#6B21C8]">
                    {t(c.tagKey)}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
