"use client";

/**
 * lenis-provider.tsx
 * Wraps the app in Lenis smooth scroll.
 * Also provides useScrollVelocity() hook for scroll-speed-dependent effects.
 */

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGSAP } from "./animations";

// ─── REGISTER GSAP PLUGINS AT MODULE LEVEL ───────────────────────────────────
// This ensures ScrollTrigger is registered before any component useEffect fires.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── CONTEXT ─────────────────────────────────────────────────────────────────

interface LenisContextValue {
  lenis: Lenis | null;
  scrollVelocity: number;
}

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollVelocity: 0,
});

// ─── PROVIDER ─────────────────────────────────────────────────────────────────
export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [scrollVelocity, setScrollVelocity] = useState(0);

  useEffect(() => {
    // Register GSAP plugins
    registerGSAP();

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    // Init Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", (e: { velocity: number }) => {
      setScrollVelocity(e.velocity);
      ScrollTrigger.update();
    });

    // GSAP ticker drives Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, scrollVelocity }}>
      {children}
    </LenisContext.Provider>
  );
}

// ─── HOOKS ────────────────────────────────────────────────────────────────────

/** Get access to the Lenis instance and current scroll velocity. */
export function useLenis() {
  return useContext(LenisContext);
}

/** Get just the scroll velocity (0 when still, positive down, negative up). */
export function useScrollVelocity(): number {
  return useContext(LenisContext).scrollVelocity;
}
