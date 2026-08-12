"use client";

import Link from "next/link";
import { IDENTITY, MARQUEE_FOOTER, SECTION_IDS } from "@/lib/constants";
import { Marquee } from "@/components/ui/Marquee";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id={SECTION_IDS.footer}
      className="w-full bg-[#080808] relative z-10 border-t border-white/10 flex flex-col gap-12"
    >
      {/* Infinite Footer Marquee */}
      <Marquee
        items={[
          MARQUEE_FOOTER,
          "LET'S BUILD THE FUTURE",
          "CREATIVE DEVELOPMENT & AI",
          "SOFTWARE ENGINEERING",
        ]}
        speed={25}
        direction="right"
        className="border-y-0 border-b border-white/10"
      />

      <div className="container-main flex flex-col gap-12 pb-12">
        {/* Giant Footer Name Typography */}
        <div className="flex justify-between items-end border-b border-white/10 pb-8">
          <h2 className="text-display-hero font-bold uppercase text-text select-none leading-none tracking-tighter">
            {IDENTITY.name}
          </h2>

          <button
            onClick={scrollToTop}
            className="hidden sm:inline-flex items-center gap-2 text-mono text-xs text-muted hover:text-accent border border-white/20 hover:border-accent px-4 py-2 rounded-full transition-colors mb-2"
            data-cursor="pointer"
          >
            <span>BACK TO TOP</span>
            <span>↑</span>
          </button>
        </div>

        {/* Footer Meta Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-mono text-xs text-muted gap-4">
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>{IDENTITY.location}</span>
          </div>

          <span>© {IDENTITY.year} {IDENTITY.name}. ALL RIGHTS RESERVED.</span>

          <div className="flex items-center gap-4 text-dim">
            <span>DESIGNED & ENGINEERED FROM SCRATCH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
