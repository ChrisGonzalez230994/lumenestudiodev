import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-solid" : "glass-light"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span
            className={`grid h-9 w-9 place-items-center rounded-full transition-colors ${
              scrolled ? "bg-mustard text-ink" : "bg-white/20 text-white"
            }`}
            aria-hidden="true"
          >
            <Sparkles className="h-4 w-4" />
          </span>
          <span
            className={`font-display text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            Lumen
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-ink/80 hover:text-ink" : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center rounded-full bg-mustard px-5 py-2.5 text-sm font-semibold text-ink shadow-soft transition-transform hover:scale-[1.03]"
        >
          Empezar proyecto
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className={`lg:hidden grid h-11 w-11 place-items-center rounded-full ${
            scrolled ? "bg-ink/5 text-ink" : "bg-white/15 text-white"
          }`}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-ink/90 backdrop-blur-xl animate-fade-in">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="flex items-center gap-2 text-white">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-mustard text-ink">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="font-display text-xl font-bold">Lumen</span>
            </span>
            <button
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav aria-label="Móvil" className="flex flex-col gap-5 px-8 pt-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-bold text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit items-center rounded-full bg-mustard px-6 py-3 text-base font-semibold text-ink"
            >
              Empezar proyecto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
