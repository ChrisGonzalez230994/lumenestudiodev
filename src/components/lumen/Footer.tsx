const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajo", label: "Trabajo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-12 sm:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-semibold tracking-tight">
              Lumen — Estudio digital
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Soluciones digitales para negocios reales. Mar del Plata, Argentina.
            </p>
          </div>
          <nav aria-label="Footer" className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Navegar</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/80 hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Seguir</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://instagram.com/lumendev.estudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a href="mailto:hola@lumendev.estudio" className="hover:underline">
                  hola@lumendev.estudio
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Lumen Estudio</span>
          <span>Mar del Plata · AR</span>
        </div>
      </div>
    </footer>
  );
}
