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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with B&W to Color Transition */}
          <div className="md:col-span-5 h-[460px] sm:h-[540px] rounded-lg overflow-hidden border border-white/10 relative group bg-surface">
            <Image
              ref={imageRef}
              src="/images/photography/remove_the_background_and_not__1.jpg"
              alt={IDENTITY.name}
              fill
              className="object-cover transition-filter duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-mono text-xs text-muted">
              <span>[ KINETIC DEVELOPER PERSONA ]</span>
              <span className="text-accent">2026</span>
            </div>
          </div>

          {/* Right Column: Statement & Bio */}
          <div ref={statementRef} className="md:col-span-7 flex flex-col gap-8">
            <h2 className="text-display-lg font-medium text-text uppercase leading-snug">
              I AM A <span className="text-accent">COMPUTER SCIENCE</span>{" "}
              STUDENT WHO BUILDS SOFTWARE, EXPERIMENTS WITH{" "}
              <span className="text-accent">AI</span>, AND CARES DEEPLY ABOUT HOW{" "}
              <span className="text-accent">DIGITAL PRODUCTS</span> FEEL.
            </h2>

            <p className="text-body-lg text-muted">
              {IDENTITY.summary}
            </p>

            {/* Education Box */}
            <div className="bg-surface p-6 rounded-lg border border-white/10 flex flex-col gap-2 mt-4">
              <span className="text-mono text-xs text-accent uppercase">
                EDUCATION CREDENTIALS
              </span>
              <h3 className="text-display-md font-bold text-text">
                B.Tech in Computer Science & Engineering
              </h3>
              <p className="text-mono text-xs text-muted">
                Indus Institute of Technology and Engineering, Ahmedabad (2024 – 2027)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
