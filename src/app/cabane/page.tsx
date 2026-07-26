import Link from "next/link";
import Image from "next/image";
import { cabins } from "@/lib/data";
import BookingEngine from "@/components/BookingEngine";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Cabane — Cabanele Rus Budești Maramureș",
  description: "Descoperă cele 3 cabane ale Cabanelor Rus din Budești: Cabana 1, Cabana 2 și Cabana 3. Cazare tradițională în Maramureș, pe 1,9 ha cu Valea Răchițele.",
};

export default function CabinsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="relative text-center mb-12 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/cabanele-rus/hotel-38291926.jpg"
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="font-display text-5xl font-bold text-cream mb-4">
            Cabanele noastre
          </h1>
          <p className="text-muted text-lg">3 cabane · 11 camere · Budești, Maramureș</p>
          <div className="w-24 h-px gold-line mx-auto mt-6" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <BookingEngine />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cabins.map((cabin, i) => (
            <Reveal key={cabin.slug} delay={i * 100}>
              <Link href={`/cabane/${cabin.slug}`} className="group block no-underline">
                <div className="relative overflow-hidden aspect-4/3 mb-5">
                  <Image
                    src={cabin.image}
                    alt={cabin.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-night/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                      {cabin.roomsCount} camere · {cabin.capacity}
                    </p>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                  {cabin.name}
                </h3>
                <p className="text-muted text-sm mb-4 line-clamp-3">
                  {cabin.description}
                </p>
                <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                  Vezi camerele →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
