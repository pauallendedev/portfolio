"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS = [
  { id: "hero", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "stack", label: "Stack" },
  { id: "contacto", label: "Contacto" },
];

export function Dock() {
  const [active, setActive] = useState<string>("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
              setActive(id);
            }
          });
        },
        { threshold: [0.35, 0.6] },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          aria-label="Navegación principal"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
        >
          <div className="flex items-center gap-1 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg)]/80 p-1.5 backdrop-blur-xl">
            {ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  data-cursor-variant="link"
                  className="relative px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg)]/70 transition-colors hover:text-[var(--color-fg)] sm:px-4"
                >
                  {isActive && (
                    <motion.span
                      layoutId="dock-pill"
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                      className="absolute inset-0 -z-0 rounded-full bg-[var(--color-elevated)]"
                    />
                  )}
                  <span className={`relative ${isActive ? "text-[var(--color-fg)]" : ""}`}>
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
