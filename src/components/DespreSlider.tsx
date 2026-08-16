"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const sliderImages = [
  { src: "/images/ballet/dancer-stage.jpg", alt: "Spectacol de balet" },
  { src: "/images/ballet/ballet-group.jpg", alt: "Dans de grup" },
  { src: "/images/ballet/ballet-bw.jpg", alt: "Poză artistică balet" },
  { src: "/images/ballet/ballet-girl.jpg", alt: "Curs pentru copii" },
  { src: "/images/ballet/ballet-jump.jpg", alt: "Săritură de balet" },
];

export default function DespreSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative aspect-4/3 overflow-hidden">
      {sliderImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-night/20" />
      <div className="absolute bottom-3 left-3 flex gap-1.5 z-20">
        {sliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === i ? "w-6 bg-rose" : "w-1.5 bg-cream/40 hover:bg-cream/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
