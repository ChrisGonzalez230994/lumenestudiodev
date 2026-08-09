import { Instagram, Mail } from "lucide-react";
import logoLumenAsset from "@/assets/logo-lumen.png";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const links = [
    { href: "#nosotros", label: t("nav.about") },
    { href: "#servicios", label: t("nav.services") },
    { href: "#portfolio", label: t("nav.works") },

    { href: "#faq", label: t("nav.faq") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  return (
    <footer className="relative bg-cream text-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center">
            <img src={logoLumenAsset} alt="Lumen" className="h-8 w-auto" />
          </div>
          <p className="mt-4 text-sm text-ink/60">{t("footer.tagline")}</p>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
            {t("footer.nav")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink/75">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-mustard-soft">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
            {t("footer.contact")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink/75">
            <li>
              <a
                href="mailto:lumendev.estudio@gmail.com"
                className="inline-flex items-center gap-2 hover:text-mustard-soft"
              >
                <Mail className="h-4 w-4" /> lumendev.estudio@gmail.com
              </a>
            </li>
            <li>{t("footer.location")}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
            {t("footer.follow")}
          </h3>
          <a
            href="https://instagram.com/lumendev.estudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Lumen"
            className="mt-4 grid h-11 w-11 place-items-center rounded-full pill-nav text-ink transition-colors hover:text-mustard-soft"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="mx-auto max-w-7xl px-6 py-5 text-xs text-ink/45">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
