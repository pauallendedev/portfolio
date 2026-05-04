import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CustomCursor } from "@/components/custom-cursor";
import { WebGLBackground } from "@/components/webgl-background";

const SITE_URL = "https://portfolio-pau-eight.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pau Allende — Full-stack engineer",
    template: "%s · Pau Allende",
  },
  description:
    "Pau Allende Herraiz — diseño y construyo productos web de principio a fin. Next.js, React, Supabase, Stripe. Creador de Prepopos y Pàunia.",
  keywords: [
    "Pau Allende",
    "Full-stack engineer",
    "Next.js",
    "React",
    "Supabase",
    "Prepopos",
    "Pàunia",
    "TypeScript",
    "Freelance developer",
  ],
  authors: [{ name: "Pau Allende Herraiz", url: SITE_URL }],
  creator: "Pau Allende Herraiz",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    title: "Pau Allende — Full-stack engineer",
    description:
      "Diseño y construyo productos web de principio a fin. Next.js, React, Supabase, Stripe.",
    siteName: "Pau Allende",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pau Allende — Full-stack engineer",
    description:
      "Diseño y construyo productos web de principio a fin. Creador de Prepopos y Pàunia.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pau Allende Herraiz",
  url: SITE_URL,
  email: "mailto:admin@prepopos.com",
  jobTitle: "Full-stack Software Engineer",
  sameAs: [
    "https://www.linkedin.com/in/pau-allende/",
    "https://github.com/pauallendedev",
    "https://prepopos.com/",
    "https://paunia.vercel.app/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="grain antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--color-accent)] focus:px-3 focus:py-2 focus:text-sm focus:text-black"
        >
          Saltar al contenido
        </a>
        <WebGLBackground />
        <SmoothScroll>
          <main id="main" className="relative z-10">
            {children}
          </main>
        </SmoothScroll>
        <CustomCursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
