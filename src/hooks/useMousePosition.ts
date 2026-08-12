"use client";

import { useEffect, useRef, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
  /** Normalized -1 to 1 relative to viewport center */
  nx: number;
  ny: number;
}

/**
 * useMousePosition
 * Tracks the current mouse/pointer position.
 * Returns absolute (x, y) and normalized (nx, ny) values.
 * Safe — returns { 0, 0 } on SSR / touch devices.
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    nx: 0,
    ny: 0,
  });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      setPosition({ x: e.clientX, y: e.clientY, nx, ny });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return position;
}
