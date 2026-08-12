"use client";

export function ScrollIndicator() {
  return (
    <a
      href="#intro"
      className="inline-flex flex-col items-center gap-3 text-mono text-[10px] text-muted hover:text-accent transition-colors group cursor-pointer"
      data-cursor="pointer"
    >
      <span className="tracking-widest uppercase text-muted group-hover:text-accent transition-colors">
        SCROLL TO EXPLORE
      </span>
      <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
        <div className="w-full h-1/2 bg-accent absolute top-0 left-0 animate-bounce duration-1000" />
      </div>
    </a>
  );
}
