export type Capability = {
  id: string;
  title: string;
  kicker: string;
  description: string;
  items: string[];
  span: "lg" | "md" | "sm";
};

export const CAPABILITIES: Capability[] = [
  {
    id: "frontend",
    title: "Frontend",
    kicker: "Interfaces vivas",
    description:
      "Diseño y código de interfaces accesibles, performantes y con personalidad. Motion deliberado, no decorativo.",
    items: [
      "React 19 + Server Components",
      "Next.js 16 App Router",
      "Tailwind v4 (CSS-first)",
      "Framer Motion · Lenis · WebGL",
      "Diseño de sistemas tipográficos",
      "WCAG AA accesibilidad",
    ],
    span: "lg",
  },
  {
    id: "backend",
    title: "Backend & Data",
    kicker: "Sistemas honestos",
    description:
      "Modelos de datos pensados antes que la UI. Validación en boundaries, defensa en profundidad.",
    items: [
      "PostgreSQL · RLS · migraciones",
      "Supabase Auth + Storage + Realtime",
      "Stripe billing recurrente",
      "Zod en boundaries",
      "Resend (email) · Upstash (rate limit)",
    ],
    span: "md",
  },
  {
    id: "quality",
    title: "Quality",
    kicker: "Lo que no se rompe",
    description:
      "Testing como diseño, no como gasto. Lighthouse, axe y type-check como puerta de release.",
    items: [
      "Vitest unit + integration",
      "Playwright e2e + axe a11y",
      "TypeScript strict en todo",
      "Sentry + structured logs",
      "Lighthouse CI por PR",
    ],
    span: "md",
  },
  {
    id: "infra",
    title: "Infra & DevOps",
    kicker: "Deploys aburridos",
    description: "Pipelines simples y reversibles.",
    items: [
      "Vercel (Edge + cron)",
      "GitHub Actions",
      "Preview environments",
      "Observabilidad y alertas",
    ],
    span: "sm",
  },
];
