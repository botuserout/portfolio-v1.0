"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CERTIFICATIONS, SECTION_IDS } from "@/lib/constants";
import { EASE } from "@/lib/animations";

export function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    gsap.fromTo(
      ".cert-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: EASE.outQuart,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="w-full section-padding bg-[#080808] relative z-10"
    >
      <div className="container-main flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 text-label border-b border-white/10 pb-6">
          <span>04</span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span>VERIFIED CERTIFICATIONS & CREDENTIALS</span>
          <span className="text-muted font-normal">[{CERTIFICATIONS.length}]</span>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.title}
              className="cert-card bg-surface p-8 rounded-lg border border-white/10 flex items-start justify-between gap-6 hover:border-accent/40 transition-colors group"
              data-cursor="pointer"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-mono text-xs text-muted uppercase">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-display-md font-bold text-text group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>

                <span className="text-mono text-xs text-dim">
                  ISSUED: {cert.date}
                </span>
              </div>

              <div className="text-mono text-xs text-accent border border-white/10 group-hover:border-accent px-3 py-1.5 rounded-full transition-colors">
                VERIFIED ✓
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
