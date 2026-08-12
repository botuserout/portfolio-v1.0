"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { type Project } from "@/lib/constants";
import { EASE } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { y: 50, opacity: 0, clipPath: "inset(100% 0 0 0)" },
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
        duration: 1.2,
        ease: EASE.outQuart,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const href = `/work/${project.slug}`;

  // Render per-layout Awwwards design structure:
  switch (project.layout) {
    case "left-video-right-text":
      return (
        <div
          ref={cardRef}
          className="w-full py-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center group"
          data-cursor="project"
          data-cursor-label="VIEW"
        >
          {/* Left Media (16:9 box) */}
          <div className="md:col-span-7 overflow-hidden rounded-md border border-white/10 relative h-[320px] sm:h-[420px] bg-surface">
            <div
              ref={mediaRef}
              className="w-full h-full relative transition-transform duration-700 ease-out group-hover:scale-105 bg-gradient-to-br from-accent/15 via-surface to-background flex items-center justify-center p-8"
            >
              <div className="text-center flex flex-col items-center gap-2">
                <span className="text-mono text-accent text-xs">
                  [ {project.tech[0]} ]
                </span>
                <span className="text-display-md font-bold uppercase text-text">
                  {project.name}
                </span>
              </div>
            </div>
          </div>

          {/* Right Text Stack */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center justify-between text-mono text-xs text-muted">
              <span>{project.number}</span>
              <span>{project.year}</span>
            </div>
            <h3 className="text-display-lg font-medium text-text group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <p className="text-body text-muted">{project.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="text-mono text-[10px] text-muted border border-white/10 px-2.5 py-1 rounded-full uppercase"
                >
                  {cat}
                </span>
              ))}
            </div>
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-mono text-xs text-accent hover:underline pt-2"
            >
              <span>EXPLORE CASE STUDY</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      );

    case "overlapping-type":
      return (
        <div
          ref={cardRef}
          className="w-full py-20 border-t border-white/10 relative overflow-hidden group"
          data-cursor="project"
          data-cursor-label="VIEW"
        >
          {/* Background Giant Text */}
          <div className="absolute -top-6 left-0 text-display-hero opacity-5 font-bold uppercase text-text select-none whitespace-nowrap pointer-events-none">
            {project.name} {project.name}
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 flex flex-col gap-6">
              <span className="text-mono text-xs text-accent uppercase">
                {project.number} // {project.subtitle}
              </span>
              <h3 className="text-display-lg font-bold text-text group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-body-lg text-muted">{project.description}</p>
              <div className="flex gap-4 text-mono text-xs text-dim">
                <span>ROLE: {project.role}</span>
                <span>YEAR: {project.year}</span>
              </div>
            </div>

            <div className="md:col-span-6 h-[380px] bg-surface rounded-md border border-white/10 overflow-hidden relative group-hover:border-accent/40 transition-colors">
              <div className="w-full h-full bg-gradient-to-tr from-surface-2 via-surface to-accent/10 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
                <span className="text-mono text-muted text-sm text-center">
                  [ OVERLAPPING EDITORIAL MEDIA ]
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case "data-overlay":
      return (
        <div
          ref={cardRef}
          className="w-full py-16 border-t border-white/10 group"
          data-cursor="project"
          data-cursor-label="VIEW"
        >
          <div className="w-full bg-surface-2 rounded-lg border border-white/10 p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between gap-8 min-h-[440px]">
            {/* Live Data Pulse Header */}
            <div className="flex justify-between items-start z-10">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                <span className="text-mono text-xs text-accent uppercase">
                  LIVE DATA STREAM ACTIVE
                </span>
              </div>
              <span className="text-mono text-xs text-muted">
                {project.number} / {project.year}
              </span>
            </div>

            {/* Title & Description */}
            <div className="z-10 max-w-2xl flex flex-col gap-4">
              <h3 className="text-display-lg font-bold text-text group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-body-lg text-muted">{project.description}</p>
            </div>

            {/* Bottom Tech & CTA */}
            <div className="z-10 flex flex-wrap justify-between items-end border-t border-white/10 pt-6 gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-mono text-xs text-muted bg-surface px-3 py-1 rounded border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={href}
                className="text-mono text-xs text-accent hover:underline flex items-center gap-2"
              >
                <span>OPEN DASHBOARD</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      );

    case "bento-split":
      return (
        <div
          ref={cardRef}
          className="w-full py-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 group"
          data-cursor="project"
          data-cursor-label="VIEW"
        >
          <div className="md:col-span-4 bg-surface p-8 rounded-lg border border-white/10 flex flex-col justify-between h-[360px]">
            <span className="text-display-xl font-bold text-accent">
              {project.number}
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-mono text-xs text-muted uppercase">
                {project.subtitle}
              </span>
              <h3 className="text-display-md font-bold text-text">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="md:col-span-8 bg-surface-2 p-8 sm:p-12 rounded-lg border border-white/10 flex flex-col justify-between h-[360px] group-hover:border-accent/30 transition-colors">
            <p className="text-body-lg text-muted max-w-xl">
              {project.description}
            </p>
            <div className="flex justify-between items-center border-t border-white/10 pt-6">
              <span className="text-mono text-xs text-dim">
                TECH: {project.tech.slice(0, 4).join(", ")}
              </span>
              <Link
                href={href}
                className="text-mono text-xs text-accent hover:underline"
              >
                VIEW PLATFORM →
              </Link>
            </div>
          </div>
        </div>
      );

    case "cinematic-letterbox":
      return (
        <div
          ref={cardRef}
          className="w-full py-16 border-t border-white/10 group"
          data-cursor="project"
          data-cursor-label="VIEW"
        >
          <div className="w-full h-[320px] sm:h-[480px] bg-black rounded-lg border border-white/10 relative overflow-hidden flex items-center justify-center">
            {/* Top & Bottom Letterbox Bars */}
            <div className="absolute top-0 left-0 w-full h-8 bg-black z-10 border-b border-white/10" />
            <div className="absolute bottom-0 left-0 w-full h-8 bg-black z-10 border-t border-white/10" />

            <div className="w-full h-full bg-gradient-to-r from-surface via-surface-2 to-surface flex flex-col items-center justify-center p-8 text-center gap-4 transition-transform duration-700 group-hover:scale-105">
              <span className="text-mono text-xs text-accent uppercase tracking-widest">
                21:9 CINEMATIC INTERFACE
              </span>
              <h3 className="text-display-lg font-bold text-text group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-body text-muted max-w-md">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      );

    case "pure-typography":
      return (
        <div
          ref={cardRef}
          className="w-full py-20 border-t border-white/10 flex flex-col gap-8 group"
          data-cursor="project"
          data-cursor-label="VIEW"
        >
          <div className="flex justify-between items-center text-mono text-xs text-muted">
            <span>{project.number} // PURE TYPOGRAPHIC EXPERIMENT</span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-display-xl font-bold text-text group-hover:text-accent transition-colors uppercase leading-none">
            {project.name}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <p className="md:col-span-8 text-body-lg text-muted">
              {project.description}
            </p>
            <div className="md:col-span-4 flex justify-end">
              <Link
                href={href}
                className="text-mono text-xs text-accent border border-accent/40 px-6 py-3 rounded-full hover:bg-accent hover:text-background transition-colors"
              >
                READ TECHNICAL SPEC →
              </Link>
            </div>
          </div>
        </div>
      );

    default: // horizontal-scroll / default standard card
      return (
        <div
          ref={cardRef}
          className="w-full py-16 border-t border-white/10 flex flex-col gap-6 group"
          data-cursor="project"
          data-cursor-label="VIEW"
        >
          <div className="flex justify-between items-center text-mono text-xs text-muted">
            <span>{project.number}</span>
            <span>{project.category.join(" · ")}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="text-display-lg font-bold text-text group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          <p className="text-body-lg text-muted">{project.description}</p>
        </div>
      );
  }
}
