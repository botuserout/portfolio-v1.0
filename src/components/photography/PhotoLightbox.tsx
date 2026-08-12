"use client";

import { useEffect } from "react";
import Image from "next/image";
import { type PhotoItem } from "@/lib/photography-data";

interface PhotoLightboxProps {
  photo: PhotoItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function PhotoLightbox({
  photo,
  onClose,
  onPrev,
  onNext,
}: PhotoLightboxProps) {
  useEffect(() => {
    if (!photo) return;

    // Lock scroll when lightbox is open
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [photo, onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-[#080808]/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-12 select-none">
      {/* Top Bar: Controls */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-3 text-mono text-xs text-muted">
          <span className="text-accent">{photo.category}</span>
          <span>//</span>
          <span>{photo.year}</span>
        </div>

        <button
          onClick={onClose}
          className="text-mono text-xs text-text hover:text-accent border border-white/20 hover:border-accent px-4 py-2 rounded-full transition-colors"
          data-cursor="pointer"
        >
          CLOSE [ESC]
        </button>
      </div>

      {/* Center Image Container */}
      <div className="relative my-auto w-full max-w-5xl h-[65vh] mx-auto flex items-center justify-center">
        <Image
          src={photo.image}
          alt={photo.title}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Bottom Metadata & Nav */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-t border-white/10 pt-6 gap-6 z-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-display-md font-bold text-text uppercase">
            {photo.title}
          </h2>
          <div className="flex flex-wrap gap-4 text-mono text-xs text-muted">
            <span>CAM: {photo.camera}</span>
            <span>LENS: {photo.lens}</span>
            <span>SPEC: {photo.settings}</span>
          </div>
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-4 text-mono text-xs">
          <button
            onClick={onPrev}
            className="border border-white/20 hover:border-accent hover:text-accent px-4 py-2 rounded-full transition-colors"
            data-cursor="pointer"
          >
            ← PREV
          </button>
          <button
            onClick={onNext}
            className="border border-white/20 hover:border-accent hover:text-accent px-4 py-2 rounded-full transition-colors"
            data-cursor="pointer"
          >
            NEXT →
          </button>
        </div>
      </div>
    </div>
  );
}
