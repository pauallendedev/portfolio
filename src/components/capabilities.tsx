"use client";

import { CAPABILITIES, type Capability } from "@/content/stack";
import { Reveal } from "./reveal";

const SPAN_CLASSES: Record<Capability["span"], string> = {
  lg: "lg:col-span-7 lg:row-span-2",
  md: "lg:col-span-5",
  sm: "lg:col-span-5",
};

export function Capabilities() {
  return (
    <section
      id="stack"
      className="relative w-full px-6 py-32 sm:px-10 sm:py-44 lg:px-16"
    >
      <header className="mx-auto mb-16 max-w-[1400px] sm:mb-24">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-fg)]/55">
            <span className="text-[var(--color-accent)]">·</span> Capacidades
          </span>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
          <Reveal delay={0.06} className="lg:col-span-7">
            <h2 className="heading-display text-[clamp(2.6rem,9vw,7rem)] uppercase">
              Stack<span className="text-[var(--color-accent)]">/</span>
              <span className="text-[var(--color-fg)]/40">end-to-end</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14} className="lg:col-span-5">
            <p className="max-w-md text-pretty text-base leading-relaxed text-[var(--color-fg)]/65 sm:text-lg">
              No me caso con tecnologías. Elijo herramientas que se mantienen
              solas y que el siguiente que abra el repo entienda.
            </p>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 lg:grid-cols-12 lg:auto-rows-fr">
        {CAPABILITIES.map((cap, i) => (
          <Reveal
            key={cap.id}
            delay={0.06 * i}
            className={`${SPAN_CLASSES[cap.span]} group relative overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)]/60 p-6 backdrop-blur transition-all hover:border-[var(--color-accent)]/40 sm:p-8`}
          >
            <CapabilityCard capability={cap} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <div className="relative flex h-full flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: "var(--color-accent)" }}
      />
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-fg)]/45">
        <span>· {capability.kicker}</span>
        <span>{capability.id}</span>
      </div>
      <h3 className="heading-display mt-4 text-[clamp(1.8rem,3.6vw,2.8rem)] uppercase text-[var(--color-fg)]">
        {capability.title}
      </h3>
      <p className="mt-3 max-w-prose text-[var(--color-fg)]/65">
        {capability.description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {capability.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg)]/75"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
