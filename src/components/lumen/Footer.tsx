import { Instagram, Mail } from "lucide-react";
import logoLumenAsset from "@/assets/logo-lumen.png.asset.json";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="relative bg-cream text-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center">
            <img
              src={logoLumenAsset.url}
              alt="Lumen"
              className="h-8 w-auto"
            />
          </div>
          <p className="mt-4 text-sm text-ink/60">
            Estudio digital en Mar del Plata. Soluciones claras para hacer crecer tu
            negocio online.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
            Navegación
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
            Contacto
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
            <li>Mar del Plata, Argentina</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
            Seguinos
          </h3>
          <a
            href="https://instagram.com/lumendev.estudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Lumen"
            className="mt-4 grid h-11 w-11 place-items-center rounded-full pill-nav text-ink transition-colors hover:text-mustard-soft"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="mx-auto max-w-7xl px-6 py-5 text-xs text-ink/45">
          © {new Date().getFullYear()} Lumen Estudio · Mar del Plata, Argentina
        </p>
      </div>
    </footer>
  );
}
