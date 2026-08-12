import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LenisProvider } from "@/lib/lenis-provider";
import { CustomCursor } from "@/components/core/CustomCursor";
import { FilmGrain } from "@/components/core/FilmGrain";
import { Navigation } from "@/components/layout/Navigation";
import { PageTransition } from "@/components/core/PageTransition";
import { Preloader } from "@/components/core/Preloader";
import { IDENTITY } from "@/lib/constants";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://rakeshjena.dev"),
  title: {
    default: `${IDENTITY.name} — ${IDENTITY.title}`,
    template: `%s — ${IDENTITY.name}`,
  },
  description:
    "Fresh Computer Science graduate (B.Tech, 2027) specializing in full-stack development, AI/ML systems, and creative web engineering. 6+ production applications shipped. Google Cloud certified.",
  keywords: [
    "Rakesh Jena",
    "Botuserout",
    "Software Engineer",
    "Creative Developer",
    "Full Stack Developer",
    "Machine Learning",
    "Java Spring Boot",
    "Python Flask",
    "Next.js",
    "GSAP",
    "Three.js",
    "React",
    "Firebase",
    "AI ML Developer",
    "Portfolio",
    "Ahmedabad",
    "India",
  ],
  authors: [{ name: IDENTITY.name, url: IDENTITY.github }],
  creator: IDENTITY.name,
  publisher: IDENTITY.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rakeshjena.dev",
    siteName: `${IDENTITY.name} Portfolio`,
    title: `${IDENTITY.name} — ${IDENTITY.title}`,
    description:
      "Full-Stack Developer & AI Systems Builder. 6+ production apps across Spring Boot, Flask, Next.js, Firebase. Google Cloud certified. Ahmedabad, India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${IDENTITY.name} — Creative Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${IDENTITY.name} — ${IDENTITY.title}`,
    description:
      "Full-Stack Developer & AI Systems Builder. Portfolio showcasing creative development, AI/ML projects, and interactive digital experiences.",
    images: ["/og-image.png"],
    creator: `@${IDENTITY.handle}`,
  },
  alternates: {
    canonical: "https://rakeshjena.dev",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ─── ROOT LAYOUT ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#080808] text-[#F4F4F0] antialiased">
      <head>
        {/* Preconnect to Google Fonts for faster load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col relative bg-[#080808] text-[#F4F4F0] overflow-x-hidden">
        {/* Accessibility: skip to main content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <LenisProvider>
          {/* Film grain texture overlay */}
          <FilmGrain />

          {/* Cinematic Preloader */}
          <Preloader />

          {/* Custom cursor (desktop only) */}
          <CustomCursor />

          {/* Floating navigation */}
          <Navigation />

          {/* Page content with transition wrapper */}
          <PageTransition>
            <main
              id="main-content"
              className="flex-1 w-full relative"
              tabIndex={-1}
            >
              {children}
            </main>
          </PageTransition>
        </LenisProvider>
      </body>
    </html>
  );
}
