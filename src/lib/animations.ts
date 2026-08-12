/**
 * animations.ts — Centralized GSAP animation utilities
 * All reusable motion primitives live here.
 * Import these in components — never duplicate GSAP code.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── GSAP PLUGIN REGISTRATION ─────────────────────────────────────────────────
// Call this once at app boot (in layout.tsx via useGSAP or in a provider)
export function registerGSAP() {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
}

// ─── DEFAULT EASES ────────────────────────────────────────────────────────────
export const EASE = {
  outExpo:   "expo.out",
  outQuart:  "power4.out",
  outCubic:  "power3.out",
  outQuad:   "power2.out",
  inOutQuart:"power4.inOut",
  spring:    "elastic.out(1, 0.5)",
} as const;

// ─── FADE UP ──────────────────────────────────────────────────────────────────
/**
 * Fades element(s) upward from a Y offset.
 * @param targets  - CSS selector or element ref(s)
 * @param options  - optional overrides
 */
export function fadeUp(
  targets: gsap.TweenTarget,
  options: {
    y?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    ease?: string;
    scrollTrigger?: ScrollTrigger.Vars;
  } = {}
): gsap.core.Tween {
  const {
    y = 40,
    duration = 1.0,
    delay = 0,
    stagger = 0,
    ease = EASE.outQuart,
    scrollTrigger,
  } = options;

  return gsap.from(targets, {
    y,
    opacity: 0,
    duration,
    delay,
    stagger,
    ease,
    scrollTrigger,
  });
}

// ─── TEXT REVEAL (clip-path mask) ─────────────────────────────────────────────
/**
 * Reveals text lines using a clip-path inset animation.
 * Wrap text in a div with overflow:hidden for proper masking.
 * @param targets - the text element(s) or lines
 */
export function revealText(
  targets: gsap.TweenTarget,
  options: {
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
    scrollTrigger?: ScrollTrigger.Vars;
  } = {}
): gsap.core.Tween {
  const {
    duration = 1.2,
    stagger = 0.1,
    delay = 0,
    ease = EASE.outQuart,
    scrollTrigger,
  } = options;

  return gsap.from(targets, {
    clipPath: "inset(0 0 100% 0)",
    y: "110%",
    duration,
    stagger,
    delay,
    ease,
    scrollTrigger,
  });
}

// ─── IMAGE REVEAL (editorial clip + scale) ────────────────────────────────────
/**
 * Reveals an image with clip-path + scale back from 1.08.
 * Apply to the image element inside an overflow:hidden wrapper.
 * @param wrapper - the overflow:hidden container
 * @param image   - the img/video element inside
 */
export function imageReveal(
  wrapper: gsap.TweenTarget,
  image: gsap.TweenTarget,
  options: {
    duration?: number;
    delay?: number;
    ease?: string;
    scrollTrigger?: ScrollTrigger.Vars;
  } = {}
): gsap.core.Timeline {
  const {
    duration = 1.4,
    delay = 0,
    ease = EASE.outQuart,
    scrollTrigger,
  } = options;

  const tl = gsap.timeline({ delay, scrollTrigger });

  tl.fromTo(
    wrapper,
    { clipPath: "inset(100% 0 0 0)" },
    { clipPath: "inset(0% 0 0 0)", duration, ease }
  ).fromTo(
    image,
    { scale: 1.08 },
    { scale: 1, duration, ease },
    "<" // start at same time
  );

  return tl;
}

// ─── PARALLAX ─────────────────────────────────────────────────────────────────
/**
 * Attaches a vertical parallax to an element tied to scroll.
 * @param target - element to parallax
 * @param speed  - 0.1 (slow) to 0.5 (fast). Negative = opposite direction.
 */
export function parallax(
  target: gsap.TweenTarget,
  speed: number = 0.2,
  scrubValue: number | boolean = true
): gsap.core.Tween {
  const distance = typeof window !== "undefined" ? window.innerHeight * speed : 200;

  return gsap.to(target, {
    y: distance,
    ease: "none",
    scrollTrigger: {
      trigger: target as Element,
      start: "top bottom",
      end: "bottom top",
      scrub: scrubValue,
    },
  });
}

// ─── MAGNETIC EFFECT ──────────────────────────────────────────────────────────
/**
 * Adds a magnetic pull to a button-like element.
 * Returns cleanup function to remove listeners.
 * @param element   - the DOM element
 * @param maxDist   - max pixel displacement (default 12)
 */
export function magnetic(
  element: HTMLElement,
  maxDist: number = 12
): () => void {
  const onMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = Math.max(rect.width, rect.height) * 0.8;

    if (dist < radius) {
      const factor = (1 - dist / radius) * maxDist;
      gsap.to(element, {
        x: (dx / dist) * factor,
        y: (dy / dist) * factor,
        duration: 0.4,
        ease: EASE.outQuad,
      });
    } else {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: EASE.outQuart,
      });
    }
  };

  const onLeave = () => {
    gsap.to(element, { x: 0, y: 0, duration: 0.6, ease: EASE.outQuart });
  };

  window.addEventListener("mousemove", onMove);
  element.addEventListener("mouseleave", onLeave);

  return () => {
    window.removeEventListener("mousemove", onMove);
    element.removeEventListener("mouseleave", onLeave);
    gsap.set(element, { clearProps: "x,y" });
  };
}

// ─── HORIZONTAL SCROLL ────────────────────────────────────────────────────────
/**
 * Creates a pinned horizontal scroll section.
 * @param trigger    - the outer pin container
 * @param track      - the inner horizontally scrolling element
 */
export function horizontalScroll(
  trigger: string | Element,
  track: string | Element
): ScrollTrigger {
  const trackEl =
    typeof track === "string" ? document.querySelector<HTMLElement>(track) : track as HTMLElement;

  if (!trackEl) throw new Error("horizontalScroll: track element not found");

  const totalWidth = trackEl.scrollWidth - window.innerWidth;

  gsap.to(track, {
    x: -totalWidth,
    ease: "none",
    scrollTrigger: {
      trigger,
      start: "top top",
      end: () => `+=${totalWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  return ScrollTrigger.getAll().at(-1)!;
}

// ─── SPLIT TEXT REVEAL (word-by-word) ─────────────────────────────────────────
/**
 * Splits element's text into word spans and reveals them staggered.
 * Preserves accessible text in aria-label.
 * @param element - the container element
 */
export function splitTextReveal(
  element: HTMLElement,
  options: {
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
    scrollTrigger?: ScrollTrigger.Vars;
  } = {}
): gsap.core.Tween | null {
  if (!element) return null;

  const {
    duration = 0.8,
    stagger = 0.06,
    delay = 0,
    ease = EASE.outQuart,
    scrollTrigger,
  } = options;

  const originalText = element.textContent || "";
  element.setAttribute("aria-label", originalText);

  const words = originalText.split(" ").map((word) => {
    const outer = document.createElement("span");
    const inner = document.createElement("span");
    outer.style.cssText = "display:inline-block;overflow:hidden;vertical-align:bottom;";
    inner.style.cssText = "display:inline-block;";
    inner.textContent = word;
    outer.appendChild(inner);
    return { outer, inner };
  });

  element.innerHTML = "";
  words.forEach(({ outer }, i) => {
    element.appendChild(outer);
    if (i < words.length - 1) {
      element.appendChild(document.createTextNode(" "));
    }
  });

  return gsap.from(
    words.map((w) => w.inner),
    {
      y: "110%",
      opacity: 0,
      duration,
      stagger,
      delay,
      ease,
      scrollTrigger,
    }
  );
}

// ─── PAGE TRANSITION ──────────────────────────────────────────────────────────
/**
 * Returns GSAP timelines for page enter/exit transitions.
 * overlay should be a fixed full-screen black div.
 */
export function pageTransitionOut(overlay: HTMLElement): gsap.core.Timeline {
  return gsap
    .timeline()
    .set(overlay, { display: "block" })
    .fromTo(overlay, { scaleY: 0, transformOrigin: "bottom" }, {
      scaleY: 1,
      duration: 0.5,
      ease: EASE.inOutQuart,
    });
}

export function pageTransitionIn(overlay: HTMLElement): gsap.core.Timeline {
  return gsap.timeline().to(overlay, {
    scaleY: 0,
    transformOrigin: "top",
    duration: 0.5,
    ease: EASE.inOutQuart,
    onComplete: () => gsap.set(overlay, { display: "none" }),
  });
}

// ─── SCROLL-VELOCITY SKEW ────────────────────────────────────────────────────
/**
 * Applies a subtle skewX based on scroll velocity.
 * Attach to decorative elements.
 */
export function velocitySkew(
  targets: gsap.TweenTarget,
  maxSkew: number = 3
): () => void {
  let velocity = 0;
  let lastY = 0;
  let rafId: number;
  let skewSetter: gsap.QuickToFunc;

  if (typeof window === "undefined") return () => {};

  skewSetter = gsap.quickTo(targets, "skewX", {
    duration: 0.8,
    ease: EASE.outQuad,
  });

  const tick = () => {
    const currentY = window.scrollY;
    velocity = (currentY - lastY) * 0.4;
    velocity = Math.max(-maxSkew, Math.min(maxSkew, velocity));
    skewSetter(velocity);
    lastY = currentY;
    rafId = requestAnimationFrame(tick);
  };

  rafId = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(rafId);
}

// ─── COUNTER ANIMATION ───────────────────────────────────────────────────────
/**
 * Animates a number from start to end.
 * Used in preloader percentage counter.
 * @param setter - callback receiving the current number (e.g. update DOM)
 */
export function animateCounter(
  setter: (value: number) => void,
  options: {
    from?: number;
    to?: number;
    duration?: number;
    ease?: string;
    onComplete?: () => void;
    nonLinearStops?: number[];
  } = {}
): gsap.core.Tween {
  const {
    from = 0,
    to = 100,
    duration = 1.8,
    ease = "power2.inOut",
    onComplete,
  } = options;

  const obj = { value: from };

  return gsap.to(obj, {
    value: to,
    duration,
    ease,
    onUpdate: () => setter(Math.round(obj.value)),
    onComplete,
  });
}
