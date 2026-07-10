import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

export function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
  distance = 32,
  duration = 0.7,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
  distance?: number;
  duration?: number;
}) {
  const shouldReduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render plainly during SSR and until mounted to avoid hydration
  // mismatches that leave content stuck at opacity 0.
  if (!mounted || shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  const offset: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = offset[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x, y, filter: "blur(8px)", scale: 0.98 }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -5% 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
