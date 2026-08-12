import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/lib/lenis-provider";
import { CustomCursor } from "@/components/core/CustomCursor";
import { FilmGrain } from "@/components/core/FilmGrain";
import { Navigation } from "@/components/layout/Navigation";
import { PageTransition } from "@/components/core/PageTransition";
import { IDENTITY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${IDENTITY.name} — ${IDENTITY.title}`,
  description: `${IDENTITY.tagline}. Portfolio showcasing creative development, machine learning, and interactive digital experiences.`,
  keywords: [
    "Rakesh Jena",
    "Botuserout",
    "Creative Developer",
    "Machine Learning",
    "Next.js",
    "GSAP",
    "Three.js",
    "Frontend Engineer",
    "Portfolio",
  ],
  authors: [{ name: IDENTITY.name, url: IDENTITY.github }],
  openGraph: {
    title: `${IDENTITY.name} — ${IDENTITY.title}`,
    description: IDENTITY.tagline,
    url: "https://rakeshjena.dev",
    siteName: `${IDENTITY.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${IDENTITY.name} — ${IDENTITY.title}`,
    description: IDENTITY.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#080808] text-[#F4F4F0] antialiased">
      <body className="min-h-full flex flex-col relative bg-[#080808] text-[#F4F4F0] selection:bg-accent selection:text-background overflow-x-hidden">
        <LenisProvider>
          <FilmGrain />
          <CustomCursor />
          <Navigation />
          <PageTransition>
            <main className="flex-1 w-full relative">{children}</main>
          </PageTransition>
        </LenisProvider>
      </body>
    </html>
  );
}
