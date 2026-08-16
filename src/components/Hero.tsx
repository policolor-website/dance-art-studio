import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ballet/hero-ballet.jpg"
          alt="Dance Art Studio"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl py-20">
        <p
          className="text-rose text-sm font-semibold uppercase tracking-[0.3em] mb-4"
          style={{ animation: "fadeUp 0.8s ease forwards" }}
        >
          Balet · Dans · Artă
        </p>
        <h1
          className="font-display text-4xl md:text-6xl font-bold text-cream leading-tight mb-4"
          style={{ animation: "fadeUp 0.8s ease 0.2s forwards", opacity: 0 }}
        >
          Dance Art <span className="text-gradient-rose">Studio</span>
        </h1>
        <p
          className="text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-6 leading-relaxed"
          style={{ animation: "fadeUp 0.8s ease 0.4s forwards", opacity: 0 }}
        >
          Pasiune, grație și disciplină. Cursuri de balet clasic pentru toate
          vârstele și nivelurile, de la cei mici la adulți. Descoperă arta
          dansului într-o școală cu profesori dedicați.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: "fadeUp 0.8s ease 0.6s forwards", opacity: 0 }}
        >
          <Link
            href="/inscriere"
            className="px-8 py-4 bg-rose text-night text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-rose-light"
          >
            Înscrie-te acum
          </Link>
          <Link
            href="/cursuri"
            className="px-8 py-4 border border-cream/30 text-cream text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:border-rose hover:text-rose"
          >
            Vezi cursurile
          </Link>
        </div>
      </div>
    </section>
  );
}
