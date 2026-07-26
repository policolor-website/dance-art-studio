"use client";

import { useState } from "react";
import Image from "next/image";

export default function RoomGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightbox(img)}
            className="relative aspect-square overflow-hidden block w-full cursor-pointer border-0 bg-transparent p-0 group"
          >
            <Image
              src={img}
              alt={`${name} ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-night/0 group-hover:bg-night/30 transition-colors duration-300 flex items-center justify-center">
              <span className="text-gold text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ⤢
              </span>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-100 bg-night/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
          style={{ animation: "fadeIn 0.3s ease forwards" }}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-cream hover:text-gold text-3xl bg-transparent border-0 cursor-pointer"
          >
            ✕
          </button>
          <div className="relative w-full max-w-4xl aspect-4/3">
            <Image
              src={lightbox}
              alt={name}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
