import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#planes", label: "Planes" },
  { href: "#portfolio", label: "Portfolio" },
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

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:opacity-100 ${
                scrolled ? "text-ink/80 hover:text-ink" : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-full bg-mustard px-5 py-2.5 text-sm font-semibold text-ink shadow-soft transition-transform hover:scale-[1.03]"
        >
          Empezar proyecto
        </a>

        <button
          aria-label="Menú"
          onClick={() => setOpen(true)}
          className={`md:hidden grid h-10 w-10 place-items-center rounded-full ${
            scrolled ? "bg-ink/5 text-ink" : "bg-white/15 text-white"
          }`}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-ink/85 backdrop-blur-xl animate-fade-in">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="flex items-center gap-2 text-white">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-mustard text-ink">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="font-display text-xl font-bold">Lumen</span>
            </span>
            <button
              aria-label="Cerrar"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 px-8 pt-12">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-bold text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-fit items-center rounded-full bg-mustard px-6 py-3 text-base font-semibold text-ink"
            >
              Empezar proyecto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
