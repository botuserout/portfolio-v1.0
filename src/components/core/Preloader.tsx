"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { IDENTITY } from "@/lib/constants";
import { EASE } from "@/lib/animations";

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [counter, setCounter] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
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

    // Non-linear counter progression (0% -> 10% -> 28% -> 47% -> 71% -> 100%)
    const stops = [0, 10, 28, 47, 71, 100];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < stops.length) {
        setCounter(stops[currentIndex]);
      } else {
        clearInterval(interval);
        runExitTimeline();
      }
    }, 320); // ~1.9 seconds total progression

    const runExitTimeline = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          setIsDone(true);
          if (onComplete) onComplete();
        },
      });

      tl.to(counterRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.4,
        ease: EASE.outQuart,
      })
        .to(
          nameRef.current,
          {
            y: -30,
            scale: 1.05,
            duration: 0.5,
            ease: EASE.outQuart,
          },
          "-=0.2"
        )
        .to(
          progressBarRef.current,
          {
            scaleX: 0,
            duration: 0.3,
            ease: EASE.outQuart,
          },
          "-=0.4"
        )
        .to(containerRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.9,
          ease: EASE.inOutQuart,
        })
        .to(
          videoRef.current,
          {
            scale: 1.1,
            duration: 0.9,
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
      className="fixed inset-0 z-[99999] bg-[#080808] flex flex-col justify-between p-8 sm:p-12 overflow-hidden select-none"
      style={{ clipPath: "inset(0 0 0% 0)" }}
    >
      {/* Background Fullscreen Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/preload.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 scale-100 transition-transform duration-1000"
        />
        {/* Dark Vignette Gradient */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#080808]/60 to-[#080808] pointer-events-none" />
      </div>

      {/* Top Header Label */}
      <div className="relative z-10 flex items-center justify-between text-mono text-muted text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="uppercase tracking-widest text-text">SYSTEM LOADING</span>
        </div>
        <span>[ 2026 // PORTFOLIO ]</span>
      </div>

      {/* Center Name & Counter */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
        <h1
          ref={nameRef}
          className="text-display-lg sm:text-display-xl font-bold tracking-tight text-text mb-4 uppercase"
        >
          {IDENTITY.name}
        </h1>

        <div
          ref={counterRef}
          className="font-mono text-4xl sm:text-6xl font-light text-accent tracking-tighter"
        >
          {String(counter).padStart(3, "0")}%
        </div>
      </div>

      {/* Bottom Progress Bar & Status */}
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col gap-3">
        <div className="w-full h-[2px] bg-white/10 overflow-hidden rounded-full">
          <div
            ref={progressBarRef}
            className="h-full bg-accent transition-all duration-300 ease-out origin-left"
            style={{ width: `${counter}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-mono text-[10px] text-muted uppercase">
          <span>INITIALIZING CORE</span>
          <span>{IDENTITY.location}</span>
        </div>
      </div>
    </div>
  );
}
