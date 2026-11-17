import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logoLumenAsset from "@/assets/logo-lumen.png";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const links = [
    { href: "#servicios", label: t("nav.services") },
    { href: "#proceso", label: t("nav.process") },
    { href: "#portfolio", label: t("nav.works") },
    { href: "#nosotros", label: t("nav.about") },
    { href: "#faq", label: t("nav.faq") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-[#FAFAFA]/90 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="inline-flex items-center" aria-label="Lumen — inicio">
          <img src={logoLumenAsset} alt="Lumen" className="h-7 w-auto" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-500 transition-colors hover:text-black"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contacto"
            className="magnetic hidden items-center gap-2 rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black lg:inline-flex"
          >
            {t("nav.cta")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-[#1A1A1A] lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[#FAFAFA]">
          <div className="flex items-center justify-between px-5 py-5">
            <img src={logoLumenAsset} alt="Lumen" className="h-7 w-auto" />
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-[#1A1A1A]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <nav aria-label="Móvil" className="flex flex-1 flex-col gap-2 px-6 pt-8">
            {[...links, { href: "#contacto", label: t("nav.contact") }].map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-black/5 py-4 text-3xl font-semibold tracking-tight text-[#1A1A1A]"
              >
                <span className="font-mono text-xs text-[#C0186E]">0{i + 1}</span>
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-3.5 text-base font-semibold text-white"
            >
              {t("nav.cta")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
