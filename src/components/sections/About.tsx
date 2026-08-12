"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { IDENTITY, SECTION_IDS } from "@/lib/constants";
import { EASE } from "@/lib/animations";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    // B&W to Color transition on image on scroll
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { filter: "grayscale(100%)", scale: 1.05 },
        {
          filter: "grayscale(0%)",
          scale: 1,
          duration: 1.5,
          ease: EASE.outQuart,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );
    }

    // Statement reveal
    if (statementRef.current) {
      gsap.fromTo(
        statementRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: EASE.outQuart,
          scrollTrigger: {
            trigger: statementRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id={SECTION_IDS.about}
      ref={sectionRef}
      className="w-full section-padding bg-[#080808] relative z-10"
    >
      <div className="container-main flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex items-center gap-4 text-label border-b border-white/10 pb-6">
          <span>05</span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span>ABOUT & BACKGROUND</span>
        </div>

        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image with B&W to Color Transition */}
          <div className="md:col-span-5 h-[480px] sm:h-[580px] rounded-2xl overflow-hidden border border-white/15 relative group bg-surface shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <Image
              ref={imageRef}
              src="/images/photography/remove_the_background_and_not__1.jpg"
              alt={IDENTITY.name}
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover transition-filter duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
            
            {/* Overlay badge with rider telemetry */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-mono text-xs">
              <div className="flex flex-col gap-1 bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                <span className="text-[10px] text-muted">[ MOTORCYCLE NERD & RIDER ]</span>
                <span className="text-accent text-[11px] font-bold">DISCIPLINE: APEX VELOCITY</span>
              </div>
              <span className="text-white/60 font-mono text-[10px] bg-black/60 backdrop-blur-md px-2.5 py-2 rounded-lg border border-white/10">
                2026 // ON ROAD
              </span>
            </div>
          </div>

          {/* Right Column: Statement & Bio */}
          <div ref={statementRef} className="md:col-span-7 flex flex-col gap-8">
            <h2 className="text-display-lg font-medium text-text uppercase leading-snug">
              I AM A <span className="text-accent">COMPUTER SCIENCE</span>{" "}
              STUDENT WHO BUILDS SOFTWARE, EXPERIMENTS WITH{" "}
              <span className="text-accent">AI</span>, AND LIVES FOR THE RUSH OF{" "}
              <span className="text-accent">TWO WHEELS</span>.
            </h2>

            <p className="text-body-lg text-muted">
              {IDENTITY.summary}
            </p>

            {/* Twin Credentials & Passion Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {/* Education Box */}
              <div className="bg-surface/80 p-6 rounded-xl border border-white/10 flex flex-col justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <span className="text-mono text-[10px] text-accent uppercase tracking-widest">
                    [ ACADEMIC CREDENTIALS ]
                  </span>
                  <h3 className="text-base font-bold text-text mt-1">
                    B.Tech in Computer Science
                  </h3>
                  <p className="text-mono text-[11px] text-muted">
                    Indus Institute of Technology & Engineering (2024 – 2027)
                  </p>
                </div>
                <div className="text-mono text-[10px] text-dim border-t border-white/10 pt-3">
                  AHMEDABAD, GUJARAT, INDIA
                </div>
              </div>

              {/* Motorcycle / Rider DNA Box */}
              <div className="bg-surface/80 p-6 rounded-xl border border-[#C8FF3D]/20 hover:border-[#C8FF3D]/50 transition-colors flex flex-col justify-between gap-3 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl pointer-events-none" />
                
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-mono text-[10px] text-accent uppercase tracking-widest">
                      [ RIDER DNA // TELEMETRY ]
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  </div>
                  <h3 className="text-base font-bold text-text mt-1 flex items-center gap-2">
                    Two-Wheel Enthusiast
                  </h3>
                  <p className="text-mono text-[11px] text-muted">
                    Apex hunting, throttle precision & split-second highway flow state.
                  </p>
                </div>

                <div className="flex items-center justify-between text-mono text-[10px] text-accent border-t border-white/10 pt-3">
                  <span>THROTTLE DISCIPLINE</span>
                  <span>100% FOCUS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
