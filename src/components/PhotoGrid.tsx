"use client";

import { useState } from "react";
import Image from "next/image";
import type { Photo } from "@/lib/photos";

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <>
      {/* Grid */}
      <div className="columns-2 sm:columns-3 gap-3 space-y-3">
        {photos.map((photo) => (
          <button
            key={photo.filename}
            onClick={() => setSelected(photo)}
            className="block w-full break-inside-avoid overflow-hidden rounded-lg cursor-zoom-in group"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={selected.alt}
              width={1200}
              height={900}
              className="max-h-[90vh] w-auto object-contain rounded-lg"
            />
            {selected.alt && (
              <p className="text-white/60 text-sm text-center mt-3 capitalize">
                {selected.alt}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
