import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ballet/ballet-group.jpg"
          alt="Dance Art Studio"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-night/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 glass rounded-3xl py-12">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
            Descoperă arta <span className="text-gradient-rose">baletului</span>
          </h2>
          <p className="text-lg text-cream/80 mb-10 leading-relaxed">
            Înscrie-te acum la Dance Art Studio și fă primul pas spre
            lumea dansului clasic. Cursuri pentru toate vârstele și nivelurile,
            cu profesori dedicați și pasionați.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscriere"
              className="px-8 py-4 bg-rose text-night text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-rose-light"
            >
              Înscrie-te acum
            </Link>
            <a
              href="tel:0722335357"
              className="px-8 py-4 border border-cream/30 text-cream text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:border-rose hover:text-rose"
            >
              Sună: 0722 335 357
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
