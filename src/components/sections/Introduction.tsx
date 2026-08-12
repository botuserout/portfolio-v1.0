"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SECTION_IDS, MARQUEE_SKILLS } from "@/lib/constants";
import { EASE } from "@/lib/animations";
import { Marquee } from "@/components/ui/Marquee";

export function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const line4Ref = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lines = [
      line1Ref.current,
      line2Ref.current,
      line3Ref.current,
      line4Ref.current,
    ];

    gsap.fromTo(
      lines,
      { y: 60, opacity: 0, clipPath: "inset(0 0 100% 0)" },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
        duration: 1.2,
        stagger: 0.15,
        ease: EASE.outQuart,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      descRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: EASE.outQuart,
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id={SECTION_IDS.intro}
      ref={sectionRef}
      className="w-full section-padding bg-[#080808] relative z-10 flex flex-col gap-16 sm:gap-24"
    >
      <div className="container-main flex flex-col gap-12">
        {/* Section Header Label */}
        <div className="flex items-center gap-4 text-label">
          <span>00</span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span>PHILOSOPHY & APPROACH</span>
        </div>

        {/* Oversized Typographic Statement */}
        <div className="flex flex-col gap-1 sm:gap-2">
          <div className="overflow-hidden">
            <div
              ref={line1Ref}
              className="text-display-xl text-text font-medium uppercase tracking-tight"
            >
              I BUILD
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              ref={line2Ref}
              className="text-display-xl font-medium uppercase tracking-tight text-text"
            >
              <span className="text-accent">DIGITAL</span> EXPERIENCES
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              ref={line3Ref}
              className="text-display-xl font-medium uppercase tracking-tight text-text"
            >
              WHERE <span className="text-accent">CODE</span> BECOMES
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              ref={line4Ref}
              className="text-display-xl font-medium uppercase tracking-tight text-text"
            >
              PART OF THE <span className="text-accent">DESIGN.</span>
            </div>
          </div>
        </div>

        {/* 12-Column Grid Description Block */}
        <div
          ref={descRef}
          className="grid-main border-t border-white/10 pt-8 sm:pt-12 mt-4"
        >
          <div className="col-span-12 md:col-span-4 text-mono text-xs text-muted uppercase">
            [ CREATIVE DIRECTION ]
          </div>
          <div className="col-span-12 md:col-span-8 flex flex-col gap-6 text-body-lg text-muted">
            <p>
              I bridge the gap between complex backend engineering and
              expressive creative frontend design. Software shouldn&apos;t just
              be functional — it should feel alive, intuitive, and visually
              inspiring.
            </p>
            <p>
              From machine learning infrastructure to WebGL motion graphics, I
              craft web applications with meticulous attention to visual hierarchy,
              interaction weight, and performance optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <Marquee items={MARQUEE_SKILLS} speed={30} direction="left" />
    </section>
  );
}
