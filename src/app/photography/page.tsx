"use client";

import { useState } from "react";
import Link from "next/link";
import { PHOTOGRAPHY_ITEMS, type PhotoItem } from "@/lib/photography-data";
import { PhotoCard } from "@/components/photography/PhotoCard";
import { PhotoLightbox } from "@/components/photography/PhotoLightbox";

const CATEGORIES = ["ALL", "Cinematic", "Street", "Urban", "Portrait"] as const;

export default function PhotographyPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos =
    activeCategory === "ALL"
      ? PHOTOGRAPHY_ITEMS
      : PHOTOGRAPHY_ITEMS.filter((p) => p.category === activeCategory);

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex(
      (p) => p.id === selectedPhoto.id
    );
    const prevIndex =
      (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex(
      (p) => p.id === selectedPhoto.id
    );
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  return (
    <main className="w-full min-h-screen bg-[#080808] pt-32 pb-24">
      <div className="container-main flex flex-col gap-16">
        {/* Header Navigation & Title */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-mono text-xs text-muted hover:text-accent transition-colors w-fit"
            data-cursor="pointer"
          >
            <span>←</span>
            <span>BACK TO HOME</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-mono text-xs text-accent uppercase tracking-widest block mb-2">
                [ VISUAL ARCHIVE ]
              </span>
              <h1 className="text-display-xl font-bold uppercase tracking-tight text-text leading-none">
                PHOTOGRAPHY
              </h1>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 text-mono text-xs">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full border transition-colors ${
                    activeCategory === cat
                      ? "border-accent bg-accent text-background font-medium"
                      : "border-white/10 text-muted hover:border-white/30 hover:text-text"
                  }`}
                  data-cursor="pointer"
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetric Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
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
    </main>
  );
}
