"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SECTION_IDS } from "@/lib/constants";
import { EASE } from "@/lib/animations";

export interface LabExperiment {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  offset: string;
}

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: "isolation-forest",
    number: "EXP // 01",
    title: "Isolation Forest Anomaly Engine",
    category: "AI / ML",
    description:
      "Unsupervised anomaly detection model trained on financial transaction data to flag fraudulent behavior and outlier patterns in real-time.",
    tech: ["Python", "Isolation Forest", "Scikit-Learn", "Flask"],
    link: "https://github.com/botuserout",
    offset: "md:mt-0",
  },
  {
    id: "financial-calculators",
    number: "EXP // 02",
    title: "Financial Tax & Loan Engine",
    category: "Interactive FinTech",
    description:
      "Interactive engine comparing Old vs. New Tax Regimes in India, calculating GST breakdowns, and generating amortization schedules.",
    tech: ["JavaScript ES6+", "Algorithms", "FinTech"],
    link: "https://github.com/botuserout",
    offset: "md:mt-12",
  },
  {
    id: "3d-equipment-monitor",
    number: "EXP // 03",
    title: "3D Equipment Status Monitor",
    category: "WebGL / 3D",
    description:
      "Interactive Three.js canvas mapping live industrial sensor feeds to 3D equipment mesh states with failure forecasting.",
    tech: ["Three.js", "Plotly", "Python", "Google Sheets API"],
    link: "https://github.com/botuserout",
    offset: "md:-mt-8",
  },
  {
    id: "n8n-automation",
    number: "EXP // 04",
    title: "n8n Workflow Automation",
    category: "Automation",
    description:
      "Automated lead routing pipelines triggering CRM synchronization, WhatsApp notifications, and database backups on event hooks.",
    tech: ["n8n", "REST APIs", "Webhooks", "Node.js"],
    link: "https://github.com/botuserout",
    offset: "md:mt-8",
  },
  {
    id: "netlify-serverless-router",
    number: "EXP // 05",
    title: "Netlify Serverless Micro-Router",
    category: "Serverless",
    description:
      "Edge serverless function routing form submissions, lead verification, and dynamic SEO content rendering without server overhead.",
    tech: ["Netlify Functions", "Node.js", "Serverless"],
    link: "https://github.com/botuserout",
    offset: "md:-mt-12",
  },
  {
    id: "geolocation-tracker",
    number: "EXP // 06",
    title: "OpenWeather Geolocation Tracker",
    category: "API Utility",
    description:
      "Browser geolocation-aware weather tracker with dynamic UI theme shifts, error recovery, and LocalStorage state persistence.",
    tech: ["JavaScript", "Geolocation API", "OpenWeatherMap API"],
    link: "https://github.com/botuserout",
    offset: "md:mt-4",
  },
];

export function Lab() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    gsap.fromTo(
      ".lab-card",
      { y: 50, opacity: 0 },
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
      id={SECTION_IDS.lab}
      ref={sectionRef}
      className="w-full section-padding bg-[#080808] relative z-10"
    >
      <div className="container-main flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 text-label border-b border-white/10 pb-6">
          <span>03</span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span>LAB & EXPERIMENTS</span>
          <span className="text-muted font-normal">[{LAB_EXPERIMENTS.length}]</span>
        </div>

        {/* Asymmetric Offset Lab Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LAB_EXPERIMENTS.map((item) => (
            <div
              key={item.id}
              className={`lab-card bg-surface p-8 rounded-lg border border-white/10 flex flex-col justify-between gap-6 hover:border-accent/40 transition-colors group ${item.offset}`}
              data-cursor="pointer"
            >
              <div className="flex justify-between items-center text-mono text-xs">
                <span className="text-accent">{item.number}</span>
                <span className="text-muted">{item.category}</span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-display-md font-bold text-text group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-body text-muted">{item.description}</p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-mono text-[10px] text-muted border border-white/10 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mono text-xs text-accent hover:underline flex items-center gap-1"
                >
                  <span>VIEW REPO</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
