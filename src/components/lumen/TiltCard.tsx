import { useRef, type ReactNode, type ElementType } from "react";

/**
 * Bento card with a 3D tilt (perspective 1000px, max 4deg) and an inner layer
 * shifted forward with translateZ(30px) for a parallax feel.
 */
export function TiltCard({
  children,
  className = "",
  innerClassName = "",
  as: Tag = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  as?: ElementType;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);

  const canTilt = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !canTilt()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg)`;
  };
  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`bento-card ${className}`}
      {...rest}
    >
      <div className={`bento-inner h-full ${innerClassName}`}>{children}</div>
    </Tag>
  );
}
