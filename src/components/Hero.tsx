import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cabanele-rus/hotel-38291926.jpg"
          alt="Cabanele Rus Budești"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl py-20">
        <p
          className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4"
          style={{ animation: "fadeUp 0.8s ease forwards" }}
        >
          Budești · Maramureș
        </p>
        <h1
          className="font-display text-4xl md:text-6xl font-bold text-cream leading-tight mb-4"
          style={{ animation: "fadeUp 0.8s ease 0.2s forwards", opacity: 0 }}
        >
          Cabanele <span className="text-gradient-gold">Rus</span>
        </h1>
        <p
          className="text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-6 leading-relaxed"
          style={{ animation: "fadeUp 0.8s ease 0.4s forwards", opacity: 0 }}
        >
          3 cabane rustice pe 1,9 ha în inima Maramureșului. Piscină încălzită,
          ponei, husky, șemineu și peisaje de poveste. Escapada perfectă la munte.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: "fadeUp 0.8s ease 0.6s forwards", opacity: 0 }}
        >
          <Link
            href="/cabane"
            className="px-8 py-4 bg-gold text-night text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-gold-light"
          >
            Rezervă acum
          </Link>
          <Link
            href="/galerie"
            className="px-8 py-4 border border-cream/30 text-cream text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:border-gold hover:text-gold"
          >
            Vezi galeria
          </Link>
        </div>
      </div>
    </section>
  );
}
