"use client";

import Link from "next/link";
import Image from "next/image";
import { IDENTITY, MARQUEE_FOOTER, SECTION_IDS } from "@/lib/constants";
import { Marquee } from "@/components/ui/Marquee";
import { PearlButton } from "@/components/ui/pearl-button";

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
        {/* Giant Footer Name Typography & Logo */}
        <div className="flex justify-between items-end border-b border-white/10 pb-8 gap-4">
          <div className="flex items-center gap-6">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.05] border border-white/15 p-2 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt={IDENTITY.name}
                width={64}
                height={64}
                className="object-contain filter drop-shadow-[0_0_12px_rgba(200,255,61,0.35)]"
              />
            </div>
            <h2 className="text-display-hero font-bold uppercase text-text select-none leading-none tracking-tighter">
              {IDENTITY.name}
            </h2>
          </div>

          <div className="hidden sm:block mb-2">
            <PearlButton
              onClick={scrollToTop}
              size="sm"
              label="BACK TO TOP ↑"
              data-cursor="pointer"
            />
          </div>
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
