import Link from "next/link";
import Image from "next/image";
import { cabins } from "@/lib/data";
import Reveal from "./Reveal";

export default function RoomsPreview() {
  return (
    <section className="py-24 bg-night-light">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Cazare
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Cabanele noastre
          </h2>
          <div className="w-24 h-px gold-line mx-auto mt-6" />
        </Reveal>

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
                <p className="text-muted text-sm mb-4 line-clamp-2">
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
    </section>
  );
}
