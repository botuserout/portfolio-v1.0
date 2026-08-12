"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SKILLS, SECTION_IDS } from "@/lib/constants";
import { EASE } from "@/lib/animations";

export function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    gsap.fromTo(
      ".skill-category-block",
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
      id={SECTION_IDS.skills}
      ref={sectionRef}
      className="w-full section-padding bg-[#080808] relative z-10"
    >
      <div className="container-main flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 text-label border-b border-white/10 pb-6">
          <span>07</span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span>TECHNICAL SKILLS & ARCHITECTURE FIELD</span>
        </div>

        {/* Skill Field Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div
              key={category}
              className="skill-category-block bg-surface p-8 rounded-lg border border-white/10 flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <h3 className="text-mono text-xs font-bold text-accent uppercase tracking-widest">
                  {category}
                </h3>
              </div>

              {/* Typographic Cloud Tags */}
              <div className="flex flex-wrap gap-2.5">
                {items.map((skill) => {
                  const isHovered = activeSkill === skill;
                  const isOtherHovered =
                    activeSkill !== null && activeSkill !== skill;

                  return (
                    <span
                      key={skill}
                      onMouseEnter={() => setActiveSkill(skill)}
                      onMouseLeave={() => setActiveSkill(null)}
                      className={`text-display-md font-medium tracking-tight px-3 py-1.5 rounded-md border transition-all duration-300 select-none cursor-pointer ${
                        isHovered
                          ? "border-accent text-accent bg-accent/15 scale-105"
                          : isOtherHovered
                          ? "border-white/5 text-dim opacity-40 scale-95"
                          : "border-white/10 text-text bg-surface-2 hover:border-accent/40"
                      }`}
                      data-cursor="pointer"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
