"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

const sliderImages = [
  { src: "/images/cabanele-rus/hotel-38291929.jpg", alt: "Exterior cabană" },
  { src: "/images/cabanele-rus/hotel-38291928.jpg", alt: "Interior living" },
  { src: "/images/cabanele-rus/hotel-38291944.jpg", alt: "Peisaj montan" },
  { src: "/images/cabanele-rus/camera-12415487.jpg", alt: "Camera dublă family" },
  { src: "/images/cabanele-rus/camera-12415470.jpg", alt: "Camera dublă la etaj" },
];

export default function DespreNoi() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 bg-night">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative group">
              <div className="absolute -top-4 -right-4 w-full h-full border border-gold/40 z-0 transition-all duration-500 group-hover:top-4 group-hover:right-4" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-gold/20 z-0 transition-all duration-500 group-hover:bottom-4 group-hover:left-4" />
              <div className="relative aspect-4/3 overflow-hidden z-10 bg-night-light">
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
                <div className="absolute inset-0 bg-night/40" />
                <div className="absolute inset-0 bg-linear-to-t from-night/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-3 left-3 flex gap-1.5 z-20">
                  {sliderImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        current === i ? "w-6 bg-gold" : "w-1.5 bg-cream/40 hover:bg-cream/60"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                Despre noi
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
                Cabane tradiționale în Maramureș
              </h2>
              <div className="w-24 h-px gold-line mb-6" />
              <p className="text-cream/80 leading-relaxed mb-4">
                Cabanele Rus din Budești, Maramureș, oferă cazare tradițională
                în 3 cabane rustice situate pe o suprafață de 1,9 ha, transversate
                de Valea Răchițele. Locația îți oferă acces rapid la principalele
                atracții din zonă: Biserica UNESCO Budești, pârtiile de schi Cavnic,
                Casele Prințului Charles din Breb și Mănăstirea Bârsana.
              </p>
              <p className="text-cream/70 leading-relaxed mb-8">
                Pe lângă cabane, avem câini prietenoși Husky, iar cei 2 ponei
                drăgălași, Chico și Zoro, vă așteaptă la plimbare. Piscină încălzită
                cu vedere, ciubere, șemineu, grătar profesional și terasă — totul
                într-un cadru natural spectaculos în inima Maramureșului.
              </p>
              <Link
                href="/despre-noi"
                className="inline-block px-8 py-4 border border-gold text-gold text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-gold hover:text-night"
              >
                Vezi detalii
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
