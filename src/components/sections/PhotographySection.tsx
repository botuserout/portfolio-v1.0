"use client";

import { useState } from "react";
import Link from "next/link";
import { SECTION_IDS } from "@/lib/constants";
import { PHOTOGRAPHY_ITEMS, type PhotoItem } from "@/lib/photography-data";
import { PhotoCard } from "@/components/photography/PhotoCard";
import { PhotoLightbox } from "@/components/photography/PhotoLightbox";

export function PhotographySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currentIndex = PHOTOGRAPHY_ITEMS.findIndex(
      (p) => p.id === selectedPhoto.id
    );
    const prevIndex =
      (currentIndex - 1 + PHOTOGRAPHY_ITEMS.length) % PHOTOGRAPHY_ITEMS.length;
    setSelectedPhoto(PHOTOGRAPHY_ITEMS[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = PHOTOGRAPHY_ITEMS.findIndex(
      (p) => p.id === selectedPhoto.id
    );
    const nextIndex = (currentIndex + 1) % PHOTOGRAPHY_ITEMS.length;
    setSelectedPhoto(PHOTOGRAPHY_ITEMS[nextIndex]);
  };

  return (
    <section
      id={SECTION_IDS.photography}
      className="w-full section-padding bg-[#080808] relative z-10"
    >
      <div className="container-main flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4 text-label">
            <span>02</span>
            <span className="w-8 h-[1px] bg-white/20" />
            <span>PHOTOGRAPHY & VISUAL GALLERY</span>
          </div>

          <Link
            href="/photography"
            className="text-mono text-xs text-accent hover:underline flex items-center gap-2"
            data-cursor="pointer"
          >
            <span>EXPLORE FULL GALLERY</span>
            <span>→</span>
          </Link>
        </div>

        {/* Asymmetric Staggered Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHOTOGRAPHY_ITEMS.slice(0, 6).map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              onSelect={setSelectedPhoto}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <PhotoLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
