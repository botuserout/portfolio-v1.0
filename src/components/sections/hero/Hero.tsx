"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { IDENTITY, SECTION_IDS } from "@/lib/constants";
import { EASE } from "@/lib/animations";
import { useMousePosition } from "@/hooks/useMousePosition";
import { HeroVisual } from "./HeroVisual";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLDivElement>(null);
  const titleLine2Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const metadataRef = useRef<HTMLDivElement>(null);

  const mouse = useMousePosition();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    // Staggered reveal timeline for hero elements
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      [titleLine1Ref.current, titleLine2Ref.current],
      { y: "110%", clipPath: "inset(0 0 100% 0)" },
      {
        y: "0%",
        clipPath: "inset(0 0 0% 0)",
        duration: 1.2,
        stagger: 0.12,
        ease: EASE.outQuart,
      }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: EASE.outQuart },
        "-=0.6"
      )
      .fromTo(
        metadataRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: EASE.outQuart },
        "-=0.6"
      );
  }, []);

  return (
    <section
      id={SECTION_IDS.hero}
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-28 pb-8 sm:pb-12 overflow-hidden bg-[#080808]"
    >
      {/* Background Radial Light spotlight following cursor */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mouse.x}px ${mouse.y}px, rgba(200,255,61,0.06), transparent 80%)`,
        }}
      />

      {/* Background 3D Metallic Object */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <HeroVisual />
      </div>

      {/* Top Technical Metadata Row */}
      <div
        ref={metadataRef}
        className="container-main relative z-10 flex items-center justify-between text-mono text-muted text-xs uppercase"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>BASED IN {IDENTITY.location}</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>[{IDENTITY.status}]</span>
          <span>// {IDENTITY.year}</span>
        </div>
      </div>

      {/* Center Oversized Typography */}
      <div className="container-main relative z-10 my-auto py-12 flex flex-col items-start justify-center">
        <div className="overflow-hidden w-full">
          <div
            ref={titleLine1Ref}
            className="text-display-hero text-text font-bold tracking-tighter uppercase select-none leading-[0.85]"
          >
            CREATIVE
          </div>
        </div>

        <div className="overflow-hidden w-full flex justify-end">
          <div
            ref={titleLine2Ref}
            className="text-display-hero text-accent font-bold tracking-tighter uppercase select-none leading-[0.85] text-right"
          >
            DEVELOPER
          </div>
        </div>

        {/* Subtitle / Intro tagline */}
        <div
          ref={subtitleRef}
          className="mt-8 sm:mt-12 max-w-xl flex flex-col gap-2.5"
        >
          <p className="text-body-lg text-text/90 font-normal italic tracking-wide">
            &ldquo;{IDENTITY.tagline}&rdquo;
          </p>
          <div className="flex items-center gap-3 text-mono text-xs text-dim">
            <span>PHILOSOPHY // MOTTO</span>
            <span>•</span>
            <span className="text-accent uppercase tracking-widest">{IDENTITY.name}</span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator Row */}
      <div className="container-main relative z-10 flex items-center justify-center">
        <ScrollIndicator />
      </div>
    </section>
  );
}
