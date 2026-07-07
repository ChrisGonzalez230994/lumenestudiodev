import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import smokeVideoMp4 from "@/assets/hero-smoke-autoplay.mp4";
import smokeVideoWebm from "@/assets/hero-smoke-autoplay.webm";

const WHATSAPP_URL =
  "https://wa.me/5492235555555?text=" +
  encodeURIComponent("¡Hola Lumen! Quiero más info sobre sus servicios.");

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

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

    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = false;
    video.disablePictureInPicture = true;
    video.setAttribute("muted", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.removeAttribute("controls");

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise) {
        playPromise
          .then(() => setIsVideoPlaying(true))
          .catch(() => setIsVideoPlaying(false));
      }
    };

    const handlePlaying = () => setIsVideoPlaying(true);
    const handlePause = () => {
      setIsVideoPlaying(false);
      playVideo();
    };
    const handleVisibilityChange = () => {
      if (!document.hidden) playVideo();
    };

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("canplay", playVideo);
    video.addEventListener("pause", handlePause);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    playVideo();
    const retry = window.setTimeout(playVideo, 600);

    return () => {
      window.clearTimeout(retry);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("canplay", playVideo);
      video.removeEventListener("pause", handlePause);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [reducedMotion]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-ink"
    >
      {!reducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          disablePictureInPicture
          controls={false}
          aria-hidden="true"
          tabIndex={-1}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-300 [--webkit-media-controls:none] [&::-webkit-media-controls]:!hidden [&::-webkit-media-controls-enclosure]:!hidden [&::-webkit-media-controls-panel]:!hidden [&::-webkit-media-controls-play-button]:!hidden [&::-webkit-media-controls-start-playback-button]:!hidden [&::-webkit-media-controls-overlay-play-button]:!hidden ${
            isVideoPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={smokeVideoWebm} type="video/webm" />
          <source src={smokeVideoMp4} type="video/mp4" />
        </video>
      )}


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
