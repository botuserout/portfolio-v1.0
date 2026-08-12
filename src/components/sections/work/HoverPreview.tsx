"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { EASE } from "@/lib/animations";
import { useMousePosition } from "@/hooks/useMousePosition";

interface HoverPreviewProps {
  activeProject: {
    name: string;
    category: string[];
    image?: string;
  } | null;
}

export function HoverPreview({ activeProject }: HoverPreviewProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition();
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!previewRef.current) return;

    // Interpolate preview box toward cursor position
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    let rafId: number;

    const render = () => {
      currentPos.current.x = lerp(currentPos.current.x, mouse.x, 0.15);
      currentPos.current.y = lerp(currentPos.current.y, mouse.y, 0.15);

      if (previewRef.current) {
        gsap.set(previewRef.current, {
          x: currentPos.current.x + 20,
          y: currentPos.current.y - 120,
        });
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(rafId);
  }, [mouse]);

  useEffect(() => {
    if (!previewRef.current) return;

    if (activeProject) {
      gsap.to(previewRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: EASE.outQuart,
      });
    } else {
      gsap.to(previewRef.current, {
        opacity: 0,
        scale: 0.85,
        duration: 0.3,
        ease: EASE.outQuart,
      });
    }
  }, [activeProject]);

  return (
    <div
      ref={previewRef}
      className="fixed top-0 left-0 pointer-events-none z-[9990] hidden md:block w-72 h-44 rounded-lg overflow-hidden border border-white/20 bg-surface shadow-2xl opacity-0 scale-95 origin-center"
    >
      <div className="w-full h-full relative bg-surface-2 flex items-center justify-center p-4">
        {/* Placeholder mesh/preview graphic */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-surface opacity-60" />
        <div className="relative z-10 flex flex-col items-center text-center gap-1">
          <span className="text-mono text-[10px] text-accent uppercase tracking-widest">
            {activeProject?.category[0]}
          </span>
          <span className="text-display-md font-bold text-text uppercase tracking-tight">
            {activeProject?.name}
          </span>
        </div>
      </div>
    </div>
  );
}
