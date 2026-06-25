import { Sparkles, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-12 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-mustard text-ink">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-xl font-bold">Lumen</span>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm text-cream/70">
          <a href="#servicios" className="hover:text-mustard-soft">Servicios</a>
          <a href="#planes" className="hover:text-mustard-soft">Planes</a>
          <a href="#portfolio" className="hover:text-mustard-soft">Portfolio</a>
          <a href="#contacto" className="hover:text-mustard-soft">Contacto</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/lumendev.estudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 transition-colors hover:bg-mustard hover:text-ink"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <p className="text-xs text-cream/60">© {new Date().getFullYear()} Lumen Estudio</p>
        </div>
      </div>
    </footer>
  );
}
