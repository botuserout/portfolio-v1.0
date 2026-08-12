"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { IDENTITY } from "@/lib/constants";
import { EASE } from "@/lib/animations";

const BOOT_LOGS = [
  "INITIALIZING GRAPHICS ENGINE...",
  "CALIBRATING KINETIC RIDER TELEMETRY...",
  "COMPILING THREE.JS SHADERS...",
  "CONFIGURING LENIS VELOCITY SCROLL...",
  "SYNCHRONIZING APEX REACTION HOOKS...",
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
      className="fixed inset-0 z-[99999] bg-[#080808] flex flex-col justify-between items-center p-6 sm:p-12 overflow-hidden select-none w-screen h-screen"
      style={{ clipPath: "inset(0 0 0% 0)" }}
    >
      {/* Background Fullscreen Video with Dark Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
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

      {/* ── 1. TOP HUD HEADER (Full width) ── */}
      <div className="relative z-10 w-full flex items-center justify-between text-mono text-xs text-muted border-b border-white/10 pb-4">
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

      {/* ── 2. CENTER CONTAINER: Perfectly Centered In Viewport ── */}
      <div className="relative z-10 flex-1 w-full flex items-center justify-center px-4 py-6">
        <div
          ref={cardRef}
          className="relative max-w-xl w-full p-8 sm:p-12 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-2xl shadow-[0_12px_50px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center text-center"
        >
          {/* Corner HUD Crosshairs */}
          <span className="absolute -top-2.5 -left-2.5 text-accent text-sm font-mono select-none font-bold">+</span>
          <span className="absolute -top-2.5 -right-2.5 text-accent text-sm font-mono select-none font-bold">+</span>
          <span className="absolute -bottom-2.5 -left-2.5 text-accent text-sm font-mono select-none font-bold">+</span>
          <span className="absolute -bottom-2.5 -right-2.5 text-accent text-sm font-mono select-none font-bold">+</span>

          {/* Ambient Glow behind identity */}
          <div className="absolute w-64 h-24 bg-accent/15 blur-3xl -top-6 pointer-events-none" />

          {/* Custom Futuristic Logo */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 p-2 rounded-2xl bg-white/[0.05] border border-white/20 shadow-[0_0_24px_rgba(200,255,61,0.25)] flex items-center justify-center">
            <Image
              src="/logo.png"
              alt={IDENTITY.name}
              width={70}
              height={70}
              className="object-contain filter drop-shadow-[0_0_12px_rgba(200,255,61,0.4)]"
              priority
            />
          </div>

          {/* Identity Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.05] text-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>CREATIVE ENGINEER & ARCHITECT</span>
          </div>

          {/* Main Title Name (Centered & Scaled) */}
          <h1
            ref={nameRef}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-4xl sm:text-6xl font-bold uppercase tracking-[0.14em] pl-[0.14em] text-text mb-4 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] text-center w-full"
          >
            {IDENTITY.name}
          </h1>

          {/* Large Mechanical Digital Counter */}
          <div
            ref={counterRef}
            className="font-mono text-5xl sm:text-6xl font-light text-accent tracking-tight my-2 drop-shadow-[0_0_24px_rgba(200,255,61,0.4)] flex items-baseline justify-center"
          >
            <span>{String(counter).padStart(3, "0")}</span>
            <span className="text-2xl sm:text-3xl text-accent/80 font-normal ml-1">%</span>
          </div>

          {/* Dynamic Terminal Diagnostic Readout */}
          <div
            ref={logRef}
            className="mt-5 text-mono text-[11px] text-muted tracking-wider flex items-center justify-center gap-2 h-6 w-full"
          >
            <span className="text-accent font-bold">&gt;</span>
            <span className="text-white/90">{BOOT_LOGS[logIndex] || BOOT_LOGS[0]}</span>
            <span className="w-1.5 h-3.5 bg-accent animate-pulse inline-block" />
          </div>
        </div>
      </div>

      {/* ── 3. BOTTOM PROGRESS BAR & READOUTS (Full width centered) ── */}
      <div className="relative z-10 w-full max-w-xl flex flex-col gap-3">
        {/* Neon Progress Bar */}
        <div className="w-full h-2 bg-white/10 overflow-hidden rounded-full p-[1px] border border-white/10">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-accent/60 via-accent to-accent rounded-full transition-all duration-300 ease-out shadow-[0_0_16px_rgba(200,255,61,0.6)]"
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
