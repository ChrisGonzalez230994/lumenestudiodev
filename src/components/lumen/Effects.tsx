import { useEffect, useRef } from "react";

/**
 * Site-wide interaction layer for the v2 design:
 * - fixed 6rem grid overlay
 * - custom cursor (dot + lagging ring), only >= 1024px with a fine pointer
 * - smooth wheel scrolling (Lenis-style: duration 1.2, expo-out easing)
 * - magnetic buttons: any element with the `magnetic` class moves 20% toward the cursor
 */
export function Effects() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  // Light color scheme for the html element while the home page is mounted.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("lumen-v2-root");
    return () => root.classList.remove("lumen-v2-root");
  }, []);

  // Custom cursor
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let raf = 0;
    let active = false;
    let mx = -100,
      my = -100,
      ox = -100,
      oy = -100;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
      dot.style.opacity = "1";
      outline.style.opacity = "1";
      const interactive = (e.target as Element | null)?.closest?.(
        "a, button, [role='button'], summary",
      );
      outline.classList.toggle("is-hover", !!interactive);
    };
    const onLeave = () => {
      dot.style.opacity = "0";
      outline.style.opacity = "0";
    };
    const loop = () => {
      ox += (mx - ox) * 0.15;
      oy += (my - oy) * 0.15;
      const size = outline.offsetWidth;
      outline.style.transform = `translate3d(${ox - size / 2}px, ${oy - size / 2}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const enable = () => {
      if (active) return;
      active = true;
      document.documentElement.classList.add("has-custom-cursor");
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseleave", onLeave);
      raf = requestAnimationFrame(loop);
    };
    const disable = () => {
      if (!active) return;
      active = false;
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      onLeave();
    };
    const sync = () => (mq.matches ? enable() : disable());
    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      disable();
    };
  }, []);

  // Smooth wheel scrolling
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    const ease = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
    const duration = 1200;
    let target = window.scrollY;
    let start = window.scrollY;
    let startTime = 0;
    let raf = 0;
    let animating = false;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

    const step = (now: number) => {
      const p = Math.min(1, (now - startTime) / duration);
      window.scrollTo(0, start + (target - start) * ease(p));
      if (p < 1) raf = requestAnimationFrame(step);
      else animating = false;
    };

    const scrollTo = (y: number) => {
      target = Math.max(0, Math.min(maxScroll(), y));
      start = window.scrollY;
      startTime = performance.now();
      if (!animating) {
        animating = true;
        raf = requestAnimationFrame(step);
      }
    };

    const isScrollable = (el: Element | null) => {
      while (el && el !== document.body) {
        const s = getComputedStyle(el);
        if (/(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight) return true;
        el = el.parentElement;
      }
      return false;
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.defaultPrevented) return;
      if (isScrollable(e.target as Element)) return;
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY;
      scrollTo((animating ? target : window.scrollY) + delta);
    };

    // Keep in sync when the user scrolls by other means (keyboard, scrollbar, anchors).
    const onScroll = () => {
      if (!animating) target = window.scrollY;
    };

    // Smooth in-page anchor navigation.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      const el = id ? document.getElementById(id) : null;
      if (!el && id !== "top") return;
      e.preventDefault();
      const y = el ? el.getBoundingClientRect().top + window.scrollY - 72 : 0;
      scrollTo(y);
      history.replaceState(null, "", `#${id}`);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, []);

  // Magnetic buttons (event delegation)
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    let current: HTMLElement | null = null;

    const onMove = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.(".magnetic") as HTMLElement | null;
      if (current && current !== el) {
        current.style.transform = "";
        current = null;
      }
      if (!el) return;
      current = el;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * 0.2;
      const y = (e.clientY - (r.top + r.height / 2)) * 0.2;
      el.style.transition = "transform 0.15s ease-out";
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const reset = () => {
      if (current) current.style.transform = "";
      current = null;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", reset);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="bg-grid-overlay" />
      <div ref={outlineRef} aria-hidden="true" className="cursor-outline" />
      <div ref={dotRef} aria-hidden="true" className="cursor-dot" />
    </>
  );
}
