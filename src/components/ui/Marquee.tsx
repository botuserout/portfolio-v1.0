"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface MarqueeProps {
  items: readonly string[] | string[];
  speed?: number; // duration in seconds
  direction?: "left" | "right";
  separator?: string;
  className?: string;
  accentIndex?: number;
}

export function Marquee({
  items,
  speed = 25,
  direction = "left",
  separator = "/",
  className = "",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const contentWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: direction === "left" ? -contentWidth : 0,
      duration: speed,
      ease: "none",
      repeat: -1,
      startAt: { x: direction === "left" ? 0 : -contentWidth },
    });

    return () => {
      tween.kill();
    };
  }, [direction, speed]);

  // Duplicate items array to ensure seamless infinite looping
  const doubleItems = [...items, ...items];

  return (
    <div className={`w-full overflow-hidden select-none py-4 border-y border-white/10 bg-surface/50 backdrop-blur-sm ${className}`}>
      <div
        ref={trackRef}
        className="flex whitespace-nowrap gap-8 items-center w-max"
      >
        {doubleItems.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="flex items-center gap-8 group cursor-default"
          >
            <span className="text-display-md font-semibold text-text uppercase tracking-tight group-hover:text-accent transition-colors duration-300">
              {item}
            </span>
            <span className="text-accent text-mono font-light text-xl">
              {separator}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
