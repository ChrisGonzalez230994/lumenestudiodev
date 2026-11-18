import { useEffect, useState } from "react";
import lumenIcon from "@/assets/lumen-icon.png";

/**
 * Intro loader shown on every visit: the Lumen icon spins in, a bar fills, and
 * the overlay slides away. It is driven by CSS so it starts on first paint (before
 * hydration) and always ends at 1.8s, even if JavaScript is slow or fails.
 * JS only unmounts it afterwards.
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
      <div className="v2-preloader-mark">
        <span aria-hidden="true" className="v2-preloader-glow stripe-gradient" />
        <img src={lumenIcon} alt="" width={112} height={112} className="v2-preloader-icon" />
      </div>
      <span aria-hidden="true" className="v2-preloader-bar">
        <span className="stripe-gradient" />
      </span>
    </div>
  );
}
