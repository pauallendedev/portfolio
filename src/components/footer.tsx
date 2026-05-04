"use client";

import { useState } from "react";
import { ArrowUpRight, GithubLogo, LinkedinLogo, Copy, Check } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";

const EMAIL = "admin@prepopos.com";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // ignore
    }
  };

  return (
    <footer
      id="contacto"
      className="relative w-full px-6 pb-12 pt-32 sm:px-10 sm:pt-44 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-fg)]/55">
            <span className="text-[var(--color-accent)]">·</span> Hablemos
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="heading-display mt-6 text-[clamp(2.4rem,8.5vw,7.5rem)] uppercase leading-[0.95] text-balance">
            ¿Construimos algo<br />
            <span className="text-[var(--color-fg)]/40">juntos</span>
            <span className="text-[var(--color-accent)]">?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={`mailto:${EMAIL}`}
              data-cursor="enviar"
              data-cursor-variant="view"
              className="group inline-flex items-baseline gap-3 text-[clamp(1.5rem,4vw,2.8rem)] font-medium tracking-tight text-[var(--color-fg)] underline decoration-[var(--color-border-strong)] decoration-2 underline-offset-[0.18em] transition-colors hover:decoration-[var(--color-accent)]"
            >
              {EMAIL}
              <ArrowUpRight
                weight="bold"
                className="size-7 text-[var(--color-fg)]/55 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--color-accent)] sm:size-9"
              />
            </a>
            <button
              type="button"
              onClick={copy}
              data-cursor={copied ? "ok" : "copiar"}
              data-cursor-variant="link"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)]/60 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-fg)]/85 backdrop-blur transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              {copied ? (
                <>
                  <Check weight="bold" className="size-4" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy weight="bold" className="size-4" />
                  Copiar
                </>
              )}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-xl text-pretty text-base leading-relaxed text-[var(--color-fg)]/65 sm:text-lg">
            Disponible para proyectos freelance y oportunidades full-time.
            Respondo rápido. Stack abierto si la idea encaja.
          </p>
        </Reveal>

        <div className="mt-24 flex flex-col gap-10 border-t border-[var(--color-border)] pt-10 sm:flex-row sm:items-center sm:justify-between">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-fg)]/45">
              © 2026 Pau Allende Herraiz · Construido con Next.js + Tailwind
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <nav aria-label="Redes" className="flex flex-wrap items-center gap-2">
              <FooterLink
                href="https://github.com/pauallendedev"
                icon={<GithubLogo weight="regular" className="size-4" />}
                text="GitHub"
              />
              <FooterLink
                href="https://www.linkedin.com/in/pau-allende/"
                icon={<LinkedinLogo weight="regular" className="size-4" />}
                text="LinkedIn"
              />
              <FooterLink
                href="https://prepopos.com"
                icon={<ArrowUpRight weight="bold" className="size-4" />}
                text="Prepopos"
              />
              <FooterLink
                href="https://paunia.vercel.app"
                icon={<ArrowUpRight weight="bold" className="size-4" />}
                text="Pàunia"
              />
            </nav>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <a
      href={href}
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
