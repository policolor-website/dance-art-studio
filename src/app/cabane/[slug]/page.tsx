import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cabins, getCabinBySlug, getRoomsByCabinSlug } from "@/lib/data";
import BookingEngine from "@/components/BookingEngine";
import Reveal from "@/components/Reveal";

export async function generateStaticParams() {
  return cabins.map((cabin) => ({ slug: cabin.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cabin = getCabinBySlug(slug);
  if (!cabin) return { title: "Cabană — Cabanele Rus Budești" };
  return {
    title: `${cabin.name} — Cabanele Rus Budești`,
    description: cabin.description,
  };
}

export default async function CabinPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cabin = getCabinBySlug(slug);
  if (!cabin) notFound();

  const cabinRooms = getRoomsByCabinSlug(slug);
  const otherCabins = cabins.filter((c) => c.slug !== slug);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6">
          <Link href="/cabane" className="text-muted hover:text-gold text-sm no-underline transition-colors">
            ← Înapoi la cabane
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-4/3 overflow-hidden">
            <Image
              src={cabin.image}
              alt={cabin.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
              {cabin.name}
            </h1>
            <p className="text-gold text-lg font-semibold mb-6">
              {cabin.roomsCount} camere · {cabin.capacity}
            </p>
            <p className="text-cream/80 leading-relaxed mb-8">
              {cabin.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-night-light border border-border-dark p-4 text-center">
                <p className="text-gold text-2xl font-bold">{cabin.roomsCount}</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">Camere</p>
              </div>
              <div className="bg-night-light border border-border-dark p-4 text-center">
                <p className="text-gold text-2xl font-bold">{cabin.toilets}</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">Toalete</p>
              </div>
              <div className="bg-night-light border border-border-dark p-4 text-center">
                <p className="text-gold text-2xl font-bold">{cabin.showers}</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">Dușuri</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
                Caracteristici
              </h3>
              <ul className="space-y-2">
                {cabin.features.map((feature) => (
                  <li key={feature} className="text-cream/80 text-sm flex items-center gap-2">
                    <span className="text-gold">✦</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <BookingEngine />
        </div>

        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-cream mb-2">
            Camerele din {cabin.name}
          </h2>
          <p className="text-muted text-sm mb-8">
            {cabinRooms.length} camere disponibile
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cabinRooms.map((room, i) => (
              <Reveal key={room.slug} delay={i * 80}>
                <Link href={`/camere/${room.slug}`} className="group block no-underline">
                  <div className="relative overflow-hidden aspect-4/3 mb-5">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-night/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                        De la {room.price} lei/noapte
                      </p>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-muted text-sm mb-4">
                    {room.size} mp² · {room.capacity} · {room.beds}
                  </p>
                  <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                    Vezi detalii →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {cabin.gallery.length > 1 && (
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-cream mb-6">Galerie {cabin.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cabin.gallery.map((img, i) => (
                <div key={i} className="relative overflow-hidden aspect-square">
                  <Image
                    src={img}
                    alt={`${cabin.name} ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="font-display text-2xl font-bold text-cream mb-6">Celelalte cabane</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherCabins.map((c) => (
              <Link key={c.slug} href={`/cabane/${c.slug}`} className="group block no-underline">
                <div className="relative overflow-hidden aspect-4/3 mb-3">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-cream font-semibold group-hover:text-gold transition-colors">{c.name}</h3>
                <p className="text-muted text-xs">{c.roomsCount} camere · {c.capacity}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
