import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import smokeVideo from "@/assets/hero-smoke.mp4.asset.json";

const WHATSAPP_URL =
  "https://wa.me/5492235555555?text=" +
  encodeURIComponent("¡Hola Lumen! Quiero más info sobre sus servicios.");

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-ink"
    >
      {!reducedMotion && (
        <video
          ref={videoRef}
          src={smokeVideo.url}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, rgba(10,10,11,0.35) 0%, rgba(10,10,11,0.65) 55%, rgba(10,10,11,0.95) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 pb-16 text-center animate-fade-in">

        <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl lg:text-[7.5rem]">
          Lumen <span className="text-mustard-soft">studio</span>.
        </h1>

        <p className="mt-6 max-w-xl text-base text-ink/70 sm:text-lg">
          Desarrollamos soluciones digitales a medida para negocios que quieren
          crecer online.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-2 rounded-full pill-nav p-1.5">
          <a
            href="#servicios"
            className="group inline-flex min-h-[42px] items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-ink/85 transition-colors hover:bg-white/5"
          >
            Nuestros servicios
          </a>
          <a
            href="#contacto"
            className="group inline-flex min-h-[42px] items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-transform hover:scale-[1.02]"
          >
            Contactanos
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-ink/60 transition-colors hover:text-mustard-soft"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          o escribinos por WhatsApp
        </a>
      </div>
    </section>
  );
}
