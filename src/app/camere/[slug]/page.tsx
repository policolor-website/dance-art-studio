import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { rooms, getRoomBySlug } from "@/lib/data";
import BookingForm from "@/components/BookingForm";
import RoomGallery from "@/components/RoomGallery";

export async function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return { title: "Cameră — Cabanele Rus Budești" };
  return {
    title: `${room.name} — Cabanele Rus Budești`,
    description: room.description,
  };
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  const otherRooms = rooms.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6">
          <Link href={`/cabane/${room.cabinSlug}`} className="text-muted hover:text-gold text-sm no-underline transition-colors">
            ← Înapoi la cabină
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src={room.image}
                alt={room.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
                {room.name}
              </h1>
              <p className="text-gold text-2xl font-bold mb-6">
                De la {room.price} lei<span className="text-muted text-base font-normal">/noapte</span>
              </p>
              <div className="text-cream/80 leading-relaxed mb-8 space-y-4">
                {room.description.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-night-light border border-border-dark p-4">
                  <p className="text-muted text-xs uppercase tracking-wider mb-1">Capacitate</p>
                  <p className="text-cream text-sm">{room.capacity}</p>
                </div>
                <div className="bg-night-light border border-border-dark p-4">
                  <p className="text-muted text-xs uppercase tracking-wider mb-1">Suprafață</p>
                  <p className="text-cream text-sm">{room.size} mp²</p>
                </div>
                <div className="bg-night-light border border-border-dark p-4">
                  <p className="text-muted text-xs uppercase tracking-wider mb-1">Pat</p>
                  <p className="text-cream text-sm">{room.beds}</p>
                </div>
                <div className="bg-night-light border border-border-dark p-4">
                  <p className="text-muted text-xs uppercase tracking-wider mb-1">Băi</p>
                  <p className="text-cream text-sm">{room.baths}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
                  Facilități
                </h3>
                <div className="flex flex-wrap gap-2">
                  {room.facilities.map((f) => (
                    <span key={f} className="text-xs text-cream border border-border-dark px-3 py-1.5">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {room.gallery.length > 1 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-cream mb-6">Galerie</h2>
                <RoomGallery images={room.gallery} name={room.name} />
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingForm roomName={room.name} roomPrice={room.price} />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-cream mb-6">Poate vrei să încerci</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherRooms.map((r) => (
              <Link key={r.slug} href={`/camere/${r.slug}`} className="group block no-underline">
                <div className="relative overflow-hidden aspect-4/3 mb-3">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-cream font-semibold group-hover:text-gold transition-colors">{r.name}</h3>
                <p className="text-muted text-xs">De la {r.price} lei/noapte</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
