import Image from "next/image";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { events } from "@/lib/data";

export const metadata = {
  title: "Evenimente — Dance Art Studio",
  description:
    "Evenimentele Dance Art Studio: Gala anuală, competiții naționale, masterclass-uri, examene de nivel, tabără de balet și spectacol de Crăciun.",
};

export default function EvenimentePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
        <div className="relative text-center mb-12 py-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/ballet/ballet-group.jpg"
              alt=""
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h1 className="font-display text-5xl font-bold text-cream mb-4">
              Evenimente
            </h1>
            <p className="text-muted text-lg">Spectacole, competiții și activități</p>
            <div className="w-24 h-px rose-line mx-auto mt-6" />
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-6">

        <Reveal>
          <p className="text-cream/70 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Dance Art Studio organizează pe parcursul anului o serie de
            evenimente care oferă elevilor ocazia de a performa pe scenă, de a
            participa la competiții și de a învăța de la profesioniști. De la
            Gala Anuală la masterclass-uri cu invitați speciali, fiecare
            eveniment este o oportunitate de creștere artistică.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <Reveal key={event.slug} delay={i * 80}>
              <div className="group glass rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-night/80 to-transparent" />
                  <div className="absolute top-4 left-4 text-3xl">
                    {event.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-cream mb-3 group-hover:text-rose transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                    {event.shortDescription}
                  </p>
                  <Link
                    href={`/evenimente/${event.slug}`}
                    className="text-rose text-sm font-semibold uppercase tracking-wider no-underline transition-colors hover:text-rose-light"
                  >
                    Vezi detalii →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 p-8 bg-night-light border border-border-dark text-center">
            <h2 className="font-display text-2xl font-bold text-cream mb-4">
              Vrei să participi la evenimentele noastre?
            </h2>
            <p className="text-muted text-sm mb-6 max-w-2xl mx-auto">
              Contactează-ne pentru a afla mai multe despre evenimentele școlii
              și pentru a te înscrie la cursuri. Te așteptăm cu drag!
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
          </div>
        </Reveal>
      </div>
    </div>
  );
}
