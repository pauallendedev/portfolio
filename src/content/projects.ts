export type Project = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  status: "Live" | "In production" | "Beta";
  year: string;
  role: string;
  stack: string[];
  highlights: { title: string; detail: string }[];
  image: string;
  imageAlt: string;
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "prepopos",
    index: "01",
    name: "Prepopos",
    tagline: "Plataforma online para preparar oposiciones.",
    description:
      "Producto SaaS completo para opositores: temario teórico estructurado, tests, simulacros, flashcards y seguimiento de progreso. Multi-vertical, multi-plan, con SEO técnico y suscripciones recurrentes.",
    url: "https://prepopos.com",
    status: "Live",
    year: "2026",
    role: "Diseño · Producto · Ingeniería",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Tailwind v4",
      "Framer Motion",
      "Sentry",
      "Resend",
      "Vercel",
    ],
    highlights: [
      {
        title: "Auth + billing",
        detail: "Supabase Auth con SSR cookies y suscripciones Stripe (mensual/anual + tres planes).",
      },
      {
        title: "Defense in depth",
        detail: "RLS por fila en Postgres + validación en Route Handlers como segunda capa.",
      },
      {
        title: "Arquitectura multi-vertical",
        detail: "Cada oposición es una vertical configurable (temarios, exámenes, landings) sin tocar core.",
      },
      {
        title: "SEO técnico avanzado",
        detail: "JSON-LD (Course, Organization, FAQ), sitemap dinámico, OG dinámico y Lighthouse 100.",
      },
      {
        title: "Test suite completa",
        detail: "Vitest unit + Playwright e2e + axe a11y + Lighthouse CI en cada deploy.",
      },
    ],
    image: "/projects/prepopos.svg",
    imageAlt: "Mockup del dashboard de Prepopos",
    accent: "#C8FF00",
  },
  {
    slug: "paunia",
    index: "02",
    name: "Pàunia",
    tagline: "App per a parelles. Núcleo, calendario, economía interna y tienda.",
    description:
      "Web app PWA en catalán para parejas. Cuatro sub-proyectos modulares: núcleo + emparejament, calendario compartido con recurrencias RFC 5545, moneda interna XKH y tienda de recompensas.",
    url: "https://paunia.vercel.app",
    status: "In production",
    year: "2026",
    role: "Diseño · Arquitectura · Ingeniería",
    stack: [
      "Next.js 16",
      "React 19",
      "Supabase RLS",
      "next-intl",
      "Serwist (PWA)",
      "Upstash Redis",
      "Resend",
      "rrule",
      "dnd-kit",
      "Vitest",
      "Playwright",
    ],
    highlights: [
      {
        title: "Hybrid arquitectura",
        detail: "Supabase Auth + Postgres + RLS como defensa, Route Handlers como capa de negocio explícita.",
      },
      {
        title: "Domain-driven modules",
        detail: "Cada dominio vive en src/features/<domain> con schemas, server.ts y tests autocontenidos.",
      },
      {
        title: "PWA real",
        detail: "Serwist service worker, push notifications, splash screens iOS, instalable nativa.",
      },
      {
        title: "Calendario con recurrencias",
        detail: "RFC 5545 (rrule) + drag & drop con dnd-kit + zonas horarias correctas (date-fns-tz).",
      },
      {
        title: "i18n catalán",
        detail: "next-intl 4 con infraestructura preparada para más idiomas. Rate limit con Upstash.",
      },
    ],
    image: "/projects/paunia.svg",
    imageAlt: "Mockup de la app Pàunia",
    accent: "#FF6B9D",
  },
];
