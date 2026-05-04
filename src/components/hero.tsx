"use client";

import { ArrowDown, ArrowUpRight, GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { CharReveal } from "./reveal";
import { MagneticLink } from "./magnetic-link";

const easeOutQuint = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden px-6 pb-10 pt-28 sm:px-10 sm:pt-32 lg:px-16"
    >
      <header className="flex w-full items-start justify-between text-xs uppercase tracking-[0.22em] text-[var(--color-fg)]/55 sm:text-[13px]">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeOutQuint }}
          className="flex items-center gap-3 font-mono"
        >
          <span className="inline-block size-2 rounded-full bg-[var(--color-accent)] pulse-dot" />
          <span>Pau Allende · MMXXVI</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: easeOutQuint }}
          className="hidden font-mono sm:block"
        >
          BCN · 41.38°N 2.16°E
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26, ease: easeOutQuint }}
          className="font-mono"
        >
          Portfolio · v1
        </motion.div>
      </header>

      <div className="relative grid grow place-items-center py-12">
        <div className="flex w-full flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOutQuint }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)]/40 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg)]/75 backdrop-blur"
          >
            <span className="inline-block size-1.5 rounded-full bg-[var(--color-accent)]" />
            Disponible para nuevos proyectos
          </motion.span>

          <h1 className="heading-display flex flex-col text-[clamp(3.4rem,14vw,11rem)] uppercase">
            <span className="overflow-hidden">
              <CharReveal text="PAU" delay={0.45} stagger={32} />
            </span>
            <span className="overflow-hidden">
              <CharReveal text="ALLENDE" delay={0.7} stagger={28} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4, ease: easeOutQuint }}
            className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-[var(--color-fg)]/75 sm:text-lg"
          >
            Ingeniero full-stack. Diseño y construyo productos web de
            principio a fin —{" "}
            <span className="text-[var(--color-fg)]">del schema al pixel</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: easeOutQuint }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <MagneticLink
              href="#proyectos"
              cursor="ver"
              cursorVariant="view"
              className="inline-flex"
            >
              <span className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-medium tracking-tight text-black transition-shadow duration-300 hover:accent-glow">
                Ver proyectos
                <ArrowDown weight="bold" className="size-4 transition-transform group-hover:translate-y-0.5" />
              </span>
            </MagneticLink>
            <MagneticLink
              href="mailto:admin@prepopos.com"
              cursor="copiar"
              cursorVariant="link"
            >
              <span className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)]/40 px-6 py-3.5 text-sm font-medium tracking-tight text-[var(--color-fg)] backdrop-blur transition-colors hover:bg-[var(--color-elevated)]">
                Hablemos
                <ArrowUpRight weight="bold" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </MagneticLink>
          </motion.div>
        </div>
      </div>

      <footer className="flex flex-wrap items-end justify-between gap-6 text-sm text-[var(--color-fg)]/60">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.8, ease: easeOutQuint }}
          className="max-w-xs font-mono text-xs uppercase tracking-[0.22em]"
        >
          <span className="block text-[var(--color-fg)]/40">// índice</span>
          <span className="mt-1 block text-[var(--color-fg)]">
            Trabajo · Stack · Contacto
          </span>
        </motion.div>

        <motion.nav
          aria-label="Redes sociales"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.95, ease: easeOutQuint }}
          className="flex items-center gap-1"
        >
          <SocialIcon
            href="https://github.com/pauallendedev"
            label="GitHub de Pau Allende"
            icon={<GithubLogo weight="regular" className="size-4" />}
            text="GitHub"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/pau-allende/"
            label="LinkedIn de Pau Allende"
            icon={<LinkedinLogo weight="regular" className="size-4" />}
            text="LinkedIn"
          />
          <SocialIcon
            href="mailto:admin@prepopos.com"
            label="Email"
            icon={<Envelope weight="regular" className="size-4" />}
            text="Email"
          />
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.1, ease: easeOutQuint }}
          className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-fg)]/45"
        >
          Scroll
          <span className="ml-2 inline-block size-1 align-middle rounded-full bg-[var(--color-accent)]" />
        </motion.div>
      </footer>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  icon,
  text,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      data-cursor="abrir"
      data-cursor-variant="link"
      className="group inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg)]/70 transition-all hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
    >
      <span className="text-[var(--color-fg)]/80 transition-colors group-hover:text-[var(--color-accent)]">
        {icon}
      </span>
      {text}
    </a>
  );
}
