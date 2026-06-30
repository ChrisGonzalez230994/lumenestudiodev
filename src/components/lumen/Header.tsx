import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajo", label: "Trabajo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass-solid" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-10">
        <a href="#top" className="text-sm font-medium tracking-tight text-foreground">
          Lumen<span className="text-muted-foreground"> · Estudio</span>
        </a>

        <nav aria-label="Principal" className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/85 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://instagram.com/lumendev.estudio"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline text-sm text-foreground/85 hover:text-foreground"
        >
          IG
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="md:hidden grid h-11 w-11 place-items-center rounded-full border border-border text-foreground"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-background animate-fade-in">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="text-sm font-medium">Lumen · Estudio</span>
            <button
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav aria-label="Móvil" className="flex flex-col gap-6 px-8 pt-12">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-bold tracking-tight"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
