"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { IDENTITY } from "@/lib/constants";
import { EASE } from "@/lib/animations";

const BOOT_LOGS = [
  "INITIALIZING GRAPHICS ENGINE...",
  "COMPILING THREE.JS SHADERS...",
  "CACHING EDITORIAL ASSETS...",
  "CONFIGURING LENIS KINETIC SCROLL...",
  "SYNCHRONIZING INTERACTION HOOKS...",
  "SYSTEM ONLINE. LAUNCHING EXPERIENCE.",
];

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const [counter, setCounter] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setIsDone(true);
      if (onComplete) onComplete();
      return;
    }

    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    // Non-linear counter progression (0% -> 18% -> 39% -> 64% -> 88% -> 100%)
    const stops = [0, 18, 39, 64, 88, 100];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < stops.length) {
        setCounter(stops[currentIndex]);
        setLogIndex(currentIndex);
      } else {
        clearInterval(interval);
        runExitTimeline();
      }
    }, 340); // ~2.0 seconds total progression

    const runExitTimeline = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          setIsDone(true);
          if (onComplete) onComplete();
        },
      });

      tl.to([counterRef.current, logRef.current], {
        y: -20,
        opacity: 0,
        duration: 0.35,
        ease: EASE.outQuart,
      })
        .to(
          nameRef.current,
          {
            y: -25,
            scale: 1.04,
            opacity: 0,
            duration: 0.45,
            ease: EASE.outQuart,
          },
          "-=0.2"
        )
        .to(
          cardRef.current,
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.4,
            ease: EASE.outQuart,
          },
          "-=0.25"
        )
        .to(
          progressBarRef.current,
          {
            scaleX: 0,
            duration: 0.3,
            ease: EASE.outQuart,
          },
          "-=0.3"
        )
        .to(containerRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.85,
          ease: EASE.inOutQuart,
        })
        .to(
          videoRef.current,
          {
            scale: 1.12,
            duration: 0.85,
            ease: EASE.inOutQuart,
          },
          "<"
        );
    };

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-[#080808] flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none"
      style={{ clipPath: "inset(0 0 0% 0)" }}
    >
      {/* Background Fullscreen Video with Dark Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/videos/preload.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover opacity-35 scale-100 transition-transform duration-1000"
        />
        {/* Subtle Cyber Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Radial Darkening Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#080808]/75 to-[#080808]" />
      </div>

      {/* ── TOP HUD HEADER ── */}
      <div className="relative z-10 flex items-center justify-between text-mono text-xs text-muted border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="relative flex items-center justify-center w-5 h-5">
            <span className="absolute w-4 h-4 rounded-full bg-accent/25 animate-ping" />
            <span className="relative w-2 h-2 rounded-full bg-accent" />
          </span>
          <span className="uppercase tracking-widest text-text font-medium text-[11px]">
            CORE SYSTEM // BOOT SEQUENCE
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[10px] tracking-wider text-muted">
          <span>PORTFOLIO v1.0</span>
          <span className="text-white/20">|</span>
          <span className="text-accent font-mono">[ 2026 ]</span>
        </div>
      </div>

      {/* ── CENTER HOLOGRAPHIC HUD CARD ── */}
      <div
        ref={cardRef}
        className="relative z-10 max-w-lg w-full mx-auto my-auto p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/15 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] flex flex-col items-center text-center"
      >
        {/* Corner HUD Crosshairs */}
        <span className="absolute -top-2 -left-2 text-accent text-xs font-mono select-none">+</span>
        <span className="absolute -top-2 -right-2 text-accent text-xs font-mono select-none">+</span>
        <span className="absolute -bottom-2 -left-2 text-accent text-xs font-mono select-none">+</span>
        <span className="absolute -bottom-2 -right-2 text-accent text-xs font-mono select-none">+</span>

        {/* Ambient Glow behind identity */}
        <div className="absolute w-48 h-20 bg-accent/15 blur-3xl -top-4 pointer-events-none" />

        {/* Identity Category Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-mono text-[9px] uppercase tracking-[0.2em] text-accent mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>CREATIVE ENGINEER & ARCHITECT</span>
        </div>

        {/* Main Title Name */}
        <h1
          ref={nameRef}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="text-4xl sm:text-6xl font-bold uppercase tracking-[0.14em] text-text mb-3 leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
        >
          {IDENTITY.name}
        </h1>

        {/* Large Mechanical Digital Counter */}
        <div
          ref={counterRef}
          className="font-mono text-5xl sm:text-6xl font-light text-accent tracking-tighter my-3 drop-shadow-[0_0_20px_rgba(200,255,61,0.35)]"
        >
          {String(counter).padStart(3, "0")}
          <span className="text-2xl sm:text-3xl text-accent/80 font-normal ml-1">%</span>
        </div>

        {/* Dynamic Terminal Diagnostic Readout */}
        <div
          ref={logRef}
          className="mt-4 text-mono text-[10px] text-muted tracking-wider flex items-center gap-2 h-5"
        >
          <span className="text-accent">&gt;</span>
          <span className="text-white/80">{BOOT_LOGS[logIndex] || BOOT_LOGS[0]}</span>
          <span className="w-1.5 h-3 bg-accent animate-pulse inline-block" />
        </div>
      </div>

      {/* ── BOTTOM PROGRESS BAR & READOUTS ── */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col gap-3">
        {/* Neon Progress Bar */}
        <div className="w-full h-1.5 bg-white/10 overflow-hidden rounded-full p-[1px]">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-accent/70 via-accent to-accent rounded-full transition-all duration-300 ease-out shadow-[0_0_12px_rgba(200,255,61,0.5)]"
            style={{ width: `${counter}%` }}
          />
        </div>

        {/* Diagnostics Info Row */}
        <div className="flex justify-between items-center text-mono text-[9px] text-muted uppercase tracking-widest pt-1">
          <div className="flex items-center gap-2">
            <span className="text-accent">[GPS]</span>
            <span>{IDENTITY.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>MEM: 1024MB</span>
            <span className="text-white/20">/</span>
            <span className="text-accent">FPS: 60</span>
          </div>
        </div>
      </div>
    </div>
  );
}
