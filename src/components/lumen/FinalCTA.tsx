import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative border-t border-border bg-background py-32 sm:py-48">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <Reveal>
          <p className="text-sm text-muted-foreground">[ Próximo paso ]</p>
          <h2 className="mt-6 font-display font-bold tracking-[-0.045em] leading-[0.92] text-[clamp(3rem,11vw,11rem)]">
            Empecemos
            <br />
            algo bueno.
          </h2>
          <a
            href="#contacto"
            className="mt-12 inline-flex items-center gap-3 border-b border-foreground/40 pb-1 text-base text-foreground transition-colors hover:border-foreground"
          >
            Iniciar un proyecto →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
