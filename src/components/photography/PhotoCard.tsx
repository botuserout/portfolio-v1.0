"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { type PhotoItem } from "@/lib/photography-data";
import { EASE } from "@/lib/animations";

interface PhotoCardProps {
  photo: PhotoItem;
  onSelect: (photo: PhotoItem) => void;
}

export function PhotoCard({ photo, onSelect }: PhotoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { clipPath: "inset(100% 0 0 0)", y: 40 },
      {
        clipPath: "inset(0% 0 0 0)",
        y: 0,
        duration: 1.2,
        ease: EASE.outQuart,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(photo)}
      className={`w-full rounded-md border border-white/10 overflow-hidden bg-surface relative group cursor-pointer ${photo.aspectRatio} ${photo.offset || ""}`}
      data-cursor="view"
      data-cursor-label="VIEW"
    >
      <Image
        ref={imageRef}
        src={photo.image}
        alt={photo.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />

      {/* Hover Vignette Gradient & Specs Bar Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
        <div className="flex justify-between items-center text-mono text-[10px] text-accent">
          <span>{photo.category}</span>
          <span>{photo.year}</span>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-display-md font-bold text-text uppercase">
            {photo.title}
          </h3>
          <span className="text-mono text-xs text-muted font-light">
            {photo.settings}
          </span>
        </div>
      </div>
    </div>
  );
}
