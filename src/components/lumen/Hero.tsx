import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-between bg-background px-6 pt-32 pb-12 sm:px-10"
    >
      <div className="mx-auto w-full max-w-[1600px] flex-1 flex flex-col justify-center">
        <p className="text-sm text-muted-foreground">
          [ Estudio digital · Mar del Plata ]
        </p>
        <h1 className="mt-6 font-display font-bold tracking-[-0.045em] leading-[0.92] text-[clamp(3rem,12vw,12rem)] text-foreground">
          Diseño que
          <br />
          se ve, se siente
          <br />
          <span className="text-muted-foreground">y convierte.</span>
        </h1>

        <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-base text-foreground/80">
            Landing pages, catálogos, invitaciones, portfolios, sitios institucionales
            y e-commerce. Trabajamos con luz, listos en días.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#trabajo"
              className="group inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-foreground transition-colors hover:border-foreground"
            >
              Ver trabajo
              <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contacto"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Iniciar proyecto →
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid w-full max-w-[1600px] grid-cols-2 gap-6 border-t border-border pt-6 text-xs text-muted-foreground sm:grid-cols-4">
        <span>© 2026 — Lumen</span>
        <span className="hidden sm:inline">Disponible para nuevos proyectos</span>
        <span className="hidden sm:inline">Mar del Plata, AR</span>
        <span className="text-right">Scroll ↓</span>
      </div>
    </section>
  );
}
