import { Reveal } from "./Reveal";

export function PricingTeaser() {
  return (
    <section className="relative border-t border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <Reveal>
          <p className="text-sm text-muted-foreground">[ Inversión ]</p>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-7xl">
            Desde USD 25.
            <br />
            <span className="text-muted-foreground">Sin paquetes cerrados.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base text-foreground/75">
            Cada servicio se cotiza según alcance. Te pasamos un presupuesto claro
            en menos de 24 horas, con plazos y entregables definidos.
          </p>
          <a
            href="#contacto"
            className="mt-10 inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-sm text-foreground transition-colors hover:border-foreground"
          >
            Pedir presupuesto →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
