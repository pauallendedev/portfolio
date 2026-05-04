"use client";

import { ABOUT, SKILLS, TECH_MARQUEE } from "@/content/about";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";
import { Marquee } from "./marquee";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="relative w-full px-6 py-32 sm:px-10 sm:py-44 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-fg)]/55">
              <span className="text-[var(--color-accent)]">·</span> Sobre mí
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-display mt-5 text-[clamp(2.4rem,6vw,4.5rem)] uppercase">
              {ABOUT.greeting}
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-[var(--color-fg)]/80 sm:text-lg">
              {ABOUT.intro}
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-[var(--color-fg)]/65 sm:text-lg">
              {ABOUT.philosophy}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg)]/55">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[var(--color-accent)] pulse-dot" />
                {ABOUT.location}
              </span>
              <span className="hidden text-[var(--color-fg)]/30 sm:inline">/</span>
              <span>{ABOUT.available}</span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-fg)]/55">
              <span className="text-[var(--color-accent)]">·</span> Lo que hago bien
            </span>
          </Reveal>
          <StaggerGroup className="mt-8 grid grid-cols-1 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <ul className="divide-y divide-[var(--color-border)]">
              {SKILLS.slice(0, 5).map((s, i) => (
                <SkillRow key={s} text={s} index={i} />
              ))}
            </ul>
            <ul className="divide-y divide-[var(--color-border)]">
              {SKILLS.slice(5).map((s, i) => (
                <SkillRow key={s} text={s} index={i + 5} />
              ))}
            </ul>
          </StaggerGroup>
        </div>
      </div>

      <Reveal delay={0.1} className="mt-24 sm:mt-32">
        <Marquee items={TECH_MARQUEE} speed={48} />
      </Reveal>
    </section>
  );
}

function SkillRow({ text, index }: { text: string; index: number }) {
  return (
    <StaggerItem>
      <li className="group flex items-center gap-5 px-1 py-5 transition-colors">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg)]/35">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-base text-[var(--color-fg)]/85 transition-colors group-hover:text-[var(--color-fg)]">
          {text}
        </span>
        <span className="ml-auto h-px w-6 bg-[var(--color-border-strong)] transition-all group-hover:w-12 group-hover:bg-[var(--color-accent)]" />
      </li>
    </StaggerItem>
  );
}
