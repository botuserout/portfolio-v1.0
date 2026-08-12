"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { EXPERIENCE, SECTION_IDS } from "@/lib/constants";
import { EASE } from "@/lib/animations";

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    gsap.fromTo(
      ".experience-row",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: EASE.outQuart,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id={SECTION_IDS.experience}
      ref={sectionRef}
      className="w-full section-padding bg-[#080808] relative z-10"
    >
      <div className="container-main flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 text-label border-b border-white/10 pb-6">
          <span>06</span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span>CAREER & EXPERIENCE TIMELINE</span>
        </div>

        {/* Vertical Timeline List */}
        <div className="flex flex-col border-t border-white/10">
          {EXPERIENCE.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              className="experience-row border-b border-white/10 py-10 flex flex-col md:flex-row justify-between gap-6 group hover:bg-surface/30 px-4 sm:px-6 rounded-md transition-colors duration-300"
              data-cursor="pointer"
            >
              {/* Left Column: Year & Role */}
              <div className="md:w-1/3 flex flex-col gap-2">
                <span className="text-mono text-xs text-accent">
                  [ {exp.year} ]
                </span>
                <h3 className="text-display-md font-bold text-text group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <span className="text-mono text-xs text-muted font-light">
                  {exp.company}
                </span>
              </div>

              {/* Right Column: Description & Bullets */}
              <div className="md:w-2/3 flex flex-col gap-4">
                <p className="text-body-lg text-muted">{exp.description}</p>

                {exp.bullets && (
                  <ul className="flex flex-col gap-2 pt-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-body text-dim flex items-start gap-2"
                      >
                        <span className="text-accent text-xs mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-mono text-[10px] text-muted border border-white/10 px-2.5 py-1 rounded-full uppercase group-hover:border-accent/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
