import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "¿En cuánto tiempo entregan un proyecto?",
    a: "Una landing simple en 3 a 7 días. Sitios institucionales o e-commerce entre 2 y 4 semanas según alcance.",
  },
  {
    q: "¿Puedo combinar varios servicios?",
    a: "Sí. Muchos clientes suman invitación digital + menú QR, o landing + catálogo. Te armamos un combo a medida.",
  },
  {
    q: "¿Trabajan solo en Mar del Plata?",
    a: "Estamos en Mar del Plata pero trabajamos 100% online con clientes de toda Argentina y Latinoamérica.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Una idea, un objetivo y ganas. Del resto nos encargamos nosotros: textos, imágenes, dominio, hosting.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative border-t border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-sm text-muted-foreground">[ Preguntas frecuentes ]</p>
            <h2 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl">
              Lo que
              <br />
              nos preguntan.
            </h2>
          </Reveal>

          <div className="md:col-span-8 md:pl-8">
            <ul className="divide-y divide-border border-t border-border">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                        {f.q}
                      </span>
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="pb-8 text-base text-foreground/75 sm:max-w-xl">{f.a}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
