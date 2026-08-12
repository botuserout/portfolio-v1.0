"use client";

import { useEffect, useRef } from "react";
import { magnetic } from "@/lib/animations";

/**
 * useMagneticEffect
 * Attaches GSAP magnetic pull to a DOM element.
 * Automatically disabled on touch devices.
 *
 * @param maxDist - max pixel displacement (default 12)
 *
 * Usage:
 *   const ref = useMagneticEffect();
 *   <button ref={ref}>Click me</button>
 */
export function useMagneticEffect(maxDist: number = 12) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Disable on touch devices
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    // Disable if prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const cleanup = magnetic(el, maxDist);
    return cleanup;
  }, [maxDist]);

  return ref as React.RefObject<HTMLElement>;
}

// Keep React import for the ref type
import type React from "react";
