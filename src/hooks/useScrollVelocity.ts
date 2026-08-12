"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useScrollVelocity
 * Measures scroll velocity independently of Lenis.
 * Falls back to native scroll events.
 * Returns scroll speed in px/frame (positive = scrolling down).
 */
export function useScrollVelocity(): number {
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      // Smooth out the velocity with lerp
      setVelocity((prev) => prev + (delta - prev) * 0.15);
      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return velocity;
}
