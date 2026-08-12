"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { type Project } from "@/lib/constants";
import { EASE } from "@/lib/animations";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { y: 60, opacity: 0, clipPath: "inset(0 0 100% 0)" },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
        duration: 1.2,
        ease: EASE.outQuart,
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full pt-32 pb-16 bg-[#080808] border-b border-white/10 relative overflow-hidden"
    >
      <div className="container-main flex flex-col gap-12">
        {/* Back Link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-mono text-xs text-muted hover:text-accent transition-colors w-fit"
          data-cursor="pointer"
        >
          <span>←</span>
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-mono text-xs text-muted">
          <div className="flex items-center gap-3">
            <span className="text-accent">{project.number}</span>
            <span>//</span>
            <span>{project.category.join(" · ")}</span>
          </div>
          <span>YEAR: {project.year}</span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-display-xl font-bold uppercase tracking-tight text-text leading-none"
        >
          {project.name}
        </h1>

        {/* Tagline / Subtitle */}
        <p className="text-display-md text-muted max-w-3xl font-light">
          {project.subtitle}
        </p>

        {/* Hero Visual Box */}
        <div className="w-full h-[400px] sm:h-[560px] bg-surface rounded-lg border border-white/10 relative overflow-hidden flex items-center justify-center mt-6">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface to-background opacity-80" />
          <div className="relative z-10 text-center flex flex-col items-center gap-3 p-8">
            <span className="text-mono text-xs text-accent uppercase tracking-widest">
              [ EDITORIAL HERO PRESENTATION ]
            </span>
            <span className="text-display-lg font-bold uppercase text-text">
              {project.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
