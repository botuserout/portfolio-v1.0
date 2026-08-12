"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-[#080808] z-[9998] pointer-events-none hidden origin-bottom"
        style={{ transform: "scaleY(0)" }}
      />
      <div key={pathname}>{children}</div>
    </>
  );
}
