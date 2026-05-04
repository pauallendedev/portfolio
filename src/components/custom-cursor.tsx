"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "link" | "view">("default");
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 50, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 600, damping: 50, mass: 0.5 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const linkLike = t.closest('a, button, [role="button"], [data-cursor]');
      if (linkLike) {
        const dataLabel = (linkLike as HTMLElement).dataset.cursor;
        const v = (linkLike as HTMLElement).dataset.cursorVariant;
        setVariant(v === "view" ? "view" : "link");
        setLabel(dataLabel ?? null);
      } else {
        setVariant("default");
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{
          width: variant === "default" ? 8 : variant === "view" ? 96 : 64,
          height: variant === "default" ? 8 : variant === "view" ? 96 : 64,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex items-center justify-center rounded-full"
        style={{
          background: variant === "default" ? "var(--color-accent)" : "rgba(255,255,255,0.92)",
          mixBlendMode: variant === "default" ? "normal" : "difference",
        }}
      >
        {label && variant !== "default" ? (
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-black">
            {label}
          </span>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
