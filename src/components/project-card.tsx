"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Project } from "@/content/projects";
import { Reveal } from "./reveal";

const easeOutQuint = [0.22, 1, 0.36, 1] as const;

export function ProjectCard({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const tx = useMotionValue(0);
  const ty = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 18, mass: 0.6 });
  const sry = useSpring(ry, { stiffness: 120, damping: 18, mass: 0.6 });
  const stx = useSpring(tx, { stiffness: 200, damping: 24 });
  const sty = useSpring(ty, { stiffness: 200, damping: 24 });
  const glowX = useTransform(sry, [-12, 12], ["20%", "80%"]);
  const glowY = useTransform(srx, [-12, 12], ["80%", "20%"]);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * 14);
    rx.set(-(py - 0.5) * 12);
    tx.set((px - 0.5) * 8);
    ty.set((py - 0.5) * 8);
  };
  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
    tx.set(0);
    ty.set(0);
  };

  return (
    <article className="relative grid w-full grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
      <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
        <Reveal y={40}>
          <motion.div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{
              perspective: 1400,
              transformStyle: "preserve-3d",
            }}
            className="group relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)]"
          >
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="visitar"
              data-cursor-variant="view"
              aria-label={`Abrir ${project.name} en una nueva pestaña`}
              style={{
                rotateX: srx,
                rotateY: sry,
                x: stx,
                y: sty,
                transformStyle: "preserve-3d",
              }}
              className="relative block size-full"
            >
              <motion.div
                aria-hidden
                style={{
                  background: `radial-gradient(420px circle at ${glowX.get()} ${glowY.get()}, ${project.accent}26, transparent 60%)`,
                }}
                className="pointer-events-none absolute inset-0 z-10 transition-opacity group-hover:opacity-100"
              />
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="size-full object-cover"
                priority={project.index === "01"}
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/60 to-transparent p-5 sm:p-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/80">
                  <span
                    className="mr-2 inline-block size-1.5 rounded-full align-middle"
                    style={{ background: project.accent }}
                  />
                  {project.status}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                  Visitar
                  <ArrowUpRight weight="bold" className="size-3" />
                </span>
              </div>
            </motion.a>
          </motion.div>
        </Reveal>
      </div>

      <div className={`flex flex-col justify-between lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
        <div>
          <Reveal>
            <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-fg)]/55">
              <span className="text-[var(--color-fg)]/35">Proyecto / {project.index}</span>
              <span className="h-px flex-1 bg-[var(--color-border)]" />
              <span>{project.year}</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="heading-display mt-6 text-[clamp(2.4rem,6vw,4.4rem)] uppercase">
              {project.name}
            </h3>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-3 text-lg text-[var(--color-fg)]/80">{project.tagline}</p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-prose text-[var(--color-fg)]/65">{project.description}</p>
          </Reveal>

          <Reveal delay={0.22}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)]/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg)]/80 backdrop-blur"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-border)]">
            {project.highlights.map((h, i) => (
              <Reveal key={h.title} delay={0.04 * i + 0.3}>
                <li className="bg-[var(--color-surface)]/60 px-5 py-4 backdrop-blur">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-medium text-[var(--color-fg)]">
                      {h.title}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg)]/35">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-fg)]/65">{h.detail}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.4} className="mt-10">
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="abrir"
            data-cursor-variant="link"
            whileHover={{ x: 6 }}
            transition={{ ease: easeOutQuint, duration: 0.4 }}
            className="group inline-flex items-center gap-3 text-base"
          >
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-fg)]/55">
              {new URL(project.url).hostname.replace("www.", "")}
            </span>
            <span className="h-px w-12 bg-[var(--color-border-strong)] transition-all group-hover:w-20 group-hover:bg-[var(--color-accent)]" />
            <span className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-fg)] transition-colors group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-black">
              <ArrowUpRight weight="bold" className="size-4" />
            </span>
          </motion.a>
        </Reveal>
      </div>
    </article>
  );
}
