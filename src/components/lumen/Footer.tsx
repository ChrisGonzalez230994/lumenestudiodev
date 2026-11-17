import { Instagram, Mail, ArrowUpRight } from "lucide-react";
import logoLumenAsset from "@/assets/logo-lumen.png";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const links = [
    { href: "#servicios", label: t("nav.services") },
    { href: "#proceso", label: t("nav.process") },
    { href: "#portfolio", label: t("nav.works") },
    { href: "#nosotros", label: t("nav.about") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-black/5 pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src={logoLumenAsset} alt="Lumen" className="h-8 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#5E5E6E]">
            {t("footer.tagline")}
          </p>
          <a
            href="#contacto"
            className="magnetic mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-semibold text-white"
          >
            {t("nav.cta")}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-gray-400">
            {t("footer.nav")}
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-[#1A1A1A]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-gray-600 transition-colors hover:text-black">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-gray-400">
            {t("footer.contact")}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-gray-600">
            <li>
              <a
                href="mailto:lumendev.estudio@gmail.com"
                className="inline-flex items-center gap-2 hover:text-black"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> lumendev.estudio@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/lumendev.estudio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-black"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" /> @lumendev.estudio
              </a>
            </li>
            <li>{t("footer.location")}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-2 px-5 font-mono text-[11px] text-gray-400 sm:flex-row sm:justify-between sm:px-8">
        <span>
          © {new Date().getFullYear()} {t("footer.copyright")}
        </span>
        <a href="#top" className="hover:text-black">
          ↑ Top
        </a>
      </div>

      <FooterWord />
    </footer>
  );
}

/**
 * Giant outlined "LUMEN", intentionally clipped at the bottom. Each letter fills
 * black on hover; a click or tap toggles it so it stays filled.
 */
function FooterWord() {
  const letters = "LUMEN".split("");
  const [on, setOn] = useState<boolean[]>(() => letters.map(() => false));
  return (
    <div
      aria-label="Lumen"
      role="img"
      className="-mb-[0.22em] mt-6 flex select-none justify-center whitespace-nowrap text-[24vw] font-extrabold leading-none tracking-[-0.06em]"
    >
      {letters.map((l, i) => (
        <span
          key={i}
          aria-hidden="true"
          onClick={() => setOn((prev) => prev.map((v, k) => (k === i ? !v : v)))}
          className={`v2-letter ${on[i] ? "is-on" : ""}`}
        >
          {l}
        </span>
      ))}
    </div>
  );
}
