import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    { href: "#faq", label: t("nav.faq") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="inline-flex items-center">
          <img src={logoLumenAsset} alt="Lumen" className="h-7 w-auto" />
        </a>

        <nav
          aria-label="Principal"
          className="hidden lg:flex items-center gap-1 rounded-full pill-nav px-2 py-1.5"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm text-ink/75 transition-colors hover:bg-white/5 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          <a
            href="#contacto"
            className="hidden lg:inline-flex items-center gap-1.5 rounded-lg bg-gradient-cta px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
          >
            {t("nav.cta")}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full pill-nav text-ink"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-cream/95 backdrop-blur-xl animate-fade-in">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="inline-flex items-center">
              <img src={logoLumenAsset} alt="Lumen" className="h-7 w-auto" />
            </span>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full pill-nav text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <nav aria-label="Móvil" className="flex flex-col gap-5 px-8 pt-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-base font-medium text-cream"
            >
              {t("nav.cta")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
