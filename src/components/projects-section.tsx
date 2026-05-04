"use client";

import { PROJECTS } from "@/content/projects";
import { Reveal } from "./reveal";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="relative w-full px-6 py-32 sm:px-10 sm:py-44 lg:px-16"
    >
      <header className="mx-auto mb-20 max-w-[1400px] sm:mb-28">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-fg)]/55">
            <span className="text-[var(--color-accent)]">·</span> Trabajo seleccionado · 2026
          </span>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
          <Reveal delay={0.06} className="lg:col-span-7">
            <h2 className="heading-display text-[clamp(2.6rem,9vw,7rem)] uppercase">
              Productos<span className="text-[var(--color-accent)]">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14} className="lg:col-span-5">
            <p className="max-w-md text-pretty text-base leading-relaxed text-[var(--color-fg)]/65 sm:text-lg">
              Dos productos en producción que diseñé, programé y operé en
              solitario. Stack moderno, decisiones explicables, sin atajos.
            </p>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] flex-col gap-32 sm:gap-44">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.slug} project={project} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
