import { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import posterImg from "@/assets/hero-poster.jpg";
import video1 from "@/assets/hero-1.mp4.asset.json";
import video3 from "@/assets/hero-3.mp4.asset.json";

const SOURCES = [video1.url, video3.url];
const LOOPS_PER_VIDEO = 3;
const WHATSAPP_URL =
  "https://wa.me/5492235555555?text=" +
  encodeURIComponent("¡Hola Lumen! Quiero más info sobre sus servicios.");

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playCountRef = useRef(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;
    playCountRef.current = 0;

    const onEnded = () => {
      playCountRef.current += 1;
      if (playCountRef.current < LOOPS_PER_VIDEO) {
        video.currentTime = 0;
        void video.play();
      } else {
        setIndex((i) => (i + 1) % SOURCES.length);
      }
    };

    video.addEventListener("ended", onEnded);
    void video.play().catch(() => {});
    return () => video.removeEventListener("ended", onEnded);
  }, [index, reducedMotion]);

  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink">
      {!reducedMotion ? (
        <video
          ref={videoRef}
          key={SOURCES[index]}
          src={SOURCES[index]}
          poster={posterImg}
          autoPlay
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover animate-fade-in"
        />
      ) : (
        <img
          src={posterImg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(43,43,43,0.15) 0%, rgba(43,43,43,0.25) 45%, rgba(43,43,43,0.7) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(43,43,43,0.55) 0%, rgba(43,43,43,0.1) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 sm:pb-24">
        <div className="max-w-2xl animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md ring-1 ring-white/20">
            <Sparkles className="h-3.5 w-3.5 text-mustard-soft" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/90">
              Estudio digital · Mar del Plata
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Lumen
            <span className="block text-mustard-soft">soluciones digitales</span>
            <span className="block">para tu negocio</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Landing pages, catálogos, invitaciones, menús QR, portfolios, sitios
            institucionales y e-commerce. Diseñados con luz, listos en días.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#servicios"
              className="group inline-flex min-h-[44px] items-center gap-2 rounded-full bg-mustard px-6 py-3.5 text-sm font-semibold text-ink shadow-glow transition-transform hover:scale-[1.03]"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
