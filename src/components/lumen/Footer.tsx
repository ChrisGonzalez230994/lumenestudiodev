import { Sparkles, Instagram, Mail } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-mustard text-ink">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-xl font-bold">Lumen</span>
          </div>
          <p className="mt-4 text-sm text-cream/70">
            Estudio digital en Mar del Plata. Soluciones claras para hacer crecer tu
            negocio online.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-cream">
            Navegación
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
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
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-cream">
            Contacto
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>
              <a
                href="mailto:hola@lumendev.estudio"
                className="inline-flex items-center gap-2 hover:text-mustard-soft"
              >
                <Mail className="h-4 w-4" /> hola@lumendev.estudio
              </a>
            </li>
            <li>Mar del Plata, Argentina</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-cream">
            Seguinos
          </h3>
          <a
            href="https://instagram.com/lumendev.estudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Lumen"
            className="mt-4 grid h-11 w-11 place-items-center rounded-full bg-cream/10 transition-colors hover:bg-mustard hover:text-ink"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-7xl px-6 py-5 text-xs text-cream/60">
          © {new Date().getFullYear()} Lumen Estudio · Mar del Plata, Argentina
        </p>
      </div>
    </footer>
  );
}
