import { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import posterImg from "@/assets/hero-poster.jpg";

const HLS_SRC =
  "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
const MP4_SRC =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBigBuckBunny.mp4";

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

  useEffect(() => {
    if (reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;

    let hls: { destroy: () => void } | null = null;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC;
    } else {
      import("hls.js").then(({ default: Hls }) => {
        if (Hls.isSupported()) {
          const instance = new Hls();
          instance.loadSource(HLS_SRC);
          instance.attachMedia(video);
          hls = instance;
        } else {
          video.src = MP4_SRC;
        }
      }).catch(() => {
        video.src = MP4_SRC;
      });
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, [reducedMotion]);

  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink">
      {!reducedMotion && (
        <video
          ref={videoRef}
          poster={posterImg}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {reducedMotion && (
        <img
          src={posterImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(43,43,43,0.15) 0%, rgba(43,43,43,0.25) 45%, rgba(43,43,43,0.65) 100%)",
        }}
      />
      {/* Side vignette for legibility */}
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
            <Sparkles className="h-3.5 w-3.5 text-mustard-soft" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/90">
              Estudio digital
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Lumen —{" "}
            <span className="text-mustard-soft">claridad digital</span>{" "}
            para tu negocio
          </h1>

          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Landing pages que convierten, automatización con IA y tiendas online.
            Construidos rápido, con luz y propósito.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#servicios"
              className="group inline-flex items-center gap-2 rounded-full bg-mustard px-6 py-3.5 text-sm font-semibold text-ink shadow-glow transition-transform hover:scale-[1.03]"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
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
