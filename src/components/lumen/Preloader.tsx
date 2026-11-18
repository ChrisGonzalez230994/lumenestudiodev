import { useEffect, useState } from "react";
import logoLumen from "@/assets/logo-lumen.png";

/**
 * Intro loader shown on every visit: the full Lumen logo (icon + word) fills in
 * color from left to right over a faint copy of itself, then the overlay slides
 * away. It is driven by CSS so it starts on first paint (before hydration) and
 * always ends at 1.8s, even if JavaScript is slow or fails. JS only unmounts it.
 */
export const PRELOADER_MS = 1800;

export function Preloader() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setGone(true), PRELOADER_MS + 150);
    return () => window.clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="v2-preloader" role="status" aria-label="Cargando Lumen">
      <div className="v2-preloader-logo">
        <img src={logoLumen} alt="" width={859} height={268} className="v2-preloader-base" />
        <img
          src={logoLumen}
          alt="Lumen"
          width={859}
          height={268}
          className="v2-preloader-fill"
        />
      </div>
    </div>
  );
}
