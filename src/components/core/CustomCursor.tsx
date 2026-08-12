"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { EASE } from "@/lib/animations";

export type CursorState =
  | "default"
  | "pointer"
  | "project"
  | "view"
  | "drag"
  | "external";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Target and current interpolated coordinates
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch / mobile
    const checkTouch = () => {
      const touch =
        window.matchMedia("(hover: none)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
      setIsTouchDevice(touch);
    };

    checkTouch();
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Event delegation for contextual cursor triggers
    const onPointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor") as CursorState;
        const label = cursorTarget.getAttribute("data-cursor-label") || "";

        setCursorState(type || "pointer");
        setCursorText(label);
      } else if (target.closest("a, button, [role='button'], input, textarea")) {
        setCursorState("pointer");
        setCursorText("");
      } else {
        setCursorState("default");
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", onPointerOver, { passive: true });

    // Smooth lerp loop
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const render = () => {
      currentPos.current.x = lerp(
        currentPos.current.x,
        mousePos.current.x,
        0.18
      );
      currentPos.current.y = lerp(
        currentPos.current.y,
        mousePos.current.y,
        0.18
      );

      if (cursorRef.current) {
        gsap.set(cursorRef.current, {
          x: currentPos.current.x,
          y: currentPos.current.y,
        });
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onPointerOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isTouchDevice, isVisible]);

  // Animate size/style changes based on state
  useEffect(() => {
    if (!cursorRef.current || isTouchDevice) return;

    let width = 12;
    let height = 12;
    let backgroundColor = "#C8FF3D";
    let scale = 1;
    let mixBlendMode = "difference";

    switch (cursorState) {
      case "pointer":
        width = 40;
        height = 40;
        backgroundColor = "rgba(200, 255, 61, 0.2)";
        scale = 1.2;
        mixBlendMode = "normal";
        break;
      case "project":
      case "view":
        width = 90;
        height = 90;
        backgroundColor = "#C8FF3D";
        scale = 1;
        mixBlendMode = "normal";
        break;
      case "drag":
        width = 80;
        height = 80;
        backgroundColor = "#F4F4F0";
        scale = 1;
        mixBlendMode = "normal";
        break;
      case "external":
        width = 70;
        height = 70;
        backgroundColor = "#C8FF3D";
        scale = 1;
        mixBlendMode = "normal";
        break;
      default:
        width = 12;
        height = 12;
        backgroundColor = "#C8FF3D";
        scale = 1;
        mixBlendMode = "difference";
        break;
    }

    gsap.to(cursorRef.current, {
      width,
      height,
      backgroundColor,
      scale,
      duration: 0.35,
      ease: EASE.outQuart,
    });
  }, [cursorState, isTouchDevice]);

  if (isTouchDevice) return null;

  const isTextState =
    cursorState === "project" ||
    cursorState === "view" ||
    cursorState === "drag" ||
    cursorState === "external";

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: 12,
        height: 12,
        backgroundColor: "#C8FF3D",
        mixBlendMode: "difference",
      }}
    >
      {isTextState && (
        <span
          ref={textRef}
          className="text-[10px] font-mono font-bold tracking-widest text-[#080808] uppercase text-center select-none leading-none px-1"
        >
          {cursorText ||
            (cursorState === "project" || cursorState === "view"
              ? "VIEW"
              : cursorState === "drag"
              ? "DRAG"
              : "OPEN")}
        </span>
      )}
    </div>
  );
}
