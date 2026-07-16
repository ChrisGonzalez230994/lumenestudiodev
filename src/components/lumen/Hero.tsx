import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import smokeVideoMp4 from "@/assets/hero-smoke-autoplay.mp4";
import smokeVideoWebm from "@/assets/hero-smoke-autoplay.webm";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_URL =
  "https://wa.me/5492236195381?text=" +
  encodeURIComponent("¡Hola Lumen! Quiero más info sobre sus servicios.");

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useI18n();


  useEffect(() => {


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
          .then(() => undefined)
          .catch(() => undefined);
      }
    };

    const handlePause = () => playVideo();
    const handleVisibilityChange = () => {
      if (!document.hidden) playVideo();
    };

    video.addEventListener("canplay", playVideo);
    video.addEventListener("pause", handlePause);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    playVideo();
    const retry = window.setTimeout(playVideo, 600);

    return () => {
      window.clearTimeout(retry);
      video.removeEventListener("canplay", playVideo);
      video.removeEventListener("pause", handlePause);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-ink"
    >
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
        className="pointer-events-none absolute inset-0 h-full w-full object-cover [--webkit-media-controls:none] [&::-webkit-media-controls]:!hidden [&::-webkit-media-controls-enclosure]:!hidden [&::-webkit-media-controls-panel]:!hidden [&::-webkit-media-controls-play-button]:!hidden [&::-webkit-media-controls-start-playback-button]:!hidden [&::-webkit-media-controls-overlay-play-button]:!hidden"
      >
        <source src={smokeVideoWebm} type="video/webm" />
        <source src={smokeVideoMp4} type="video/mp4" />
      </video>



      <motion.div
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 pb-16 text-center"
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl lg:text-[7.5rem]"
          variants={{
            hidden: { opacity: 0, y: 40, filter: "blur(12px)", scale: 0.96 },
            show: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
          }}
          transition={{ duration: 1, delay: 0.005, ease: [0.22, 1, 0.36, 1] }}
        >
          Lumen <span className="text-mustard-soft">studio</span>.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base text-ink/70 sm:text-lg"
          variants={{
            hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#servicios"
            className="group inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-gradient-purple-magenta px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
          >
            {t("hero.primary")}
          </a>
          <a
            href="#contacto"
            className="group inline-flex min-h-[44px] items-center gap-1.5 rounded-full border-[1.5px] border-[rgba(107,33,200,0.6)] bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[rgba(107,33,200,0.15)]"
          >
            {t("hero.secondary")}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-[#C0186E] transition-colors hover:text-[#F97316]"
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <MessageCircle className="h-3.5 w-3.5" />
          {t("hero.whatsapp")}
        </motion.a>
      </motion.div>

    </section>
  );
}
