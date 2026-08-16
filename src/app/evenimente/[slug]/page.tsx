import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { events, getEventBySlug } from "@/lib/data";
import Reveal from "@/components/Reveal";

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Eveniment — Dance Art Studio" };
  return {
    title: `${event.title} — Dance Art Studio`,
    description: event.shortDescription,
  };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const otherEvents = events.filter((e) => e.slug !== slug);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6">
          <Link href="/evenimente" className="text-muted hover:text-rose text-sm no-underline transition-colors">
            ← Înapoi la evenimente
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-4/3 overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-4xl mb-4">{event.icon}</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
              {event.title}
            </h1>
            <p className="text-cream/80 leading-relaxed mb-8 whitespace-pre-line">
              {event.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/inscriere"
                className="px-8 py-4 bg-rose text-night text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-rose-light text-center"
              >
                Înscrie-te acum
              </Link>
              <a
                href="tel:0722335357"
                className="px-8 py-4 border border-cream/30 text-cream text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:border-rose hover:text-rose text-center"
              >
                Sună: 0722 335 357
              </a>
            </div>
          </div>
        </div>

        {event.gallery.length > 1 && (
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-cream mb-6">Galerie</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {event.gallery.map((img, i) => (
                <div key={i} className="relative overflow-hidden aspect-square">
                  <Image
                    src={img}
                    alt={`${event.title} ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="font-display text-2xl font-bold text-cream mb-6">Celelalte evenimente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherEvents.map((e) => (
              <Link key={e.slug} href={`/evenimente/${e.slug}`} className="group block no-underline">
                <div className="relative overflow-hidden aspect-4/3 mb-3">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-night/80 to-transparent" />
                  <div className="absolute top-3 left-3 text-2xl">{e.icon}</div>
                </div>
                <h3 className="text-cream font-semibold group-hover:text-rose transition-colors">{e.title}</h3>
                <p className="text-muted text-xs line-clamp-2">{e.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
