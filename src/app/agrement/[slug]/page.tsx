import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { activities, getActivityBySlug } from "@/lib/data";
import Reveal from "@/components/Reveal";
import RoomGallery from "@/components/RoomGallery";

export async function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) return { title: "Activitate negăsită" };

  return {
    title: `${activity.title} — Cabanele Rus Budești`,
    description: activity.shortDescription,
  };
}

export default async function ActivityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) notFound();

  const otherActivities = activities.filter((a) => a.slug !== slug).slice(0, 4);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6">
          <Link href="/agrement" className="text-muted hover:text-gold text-sm no-underline transition-colors">
            ← Înapoi la agrement
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{activity.icon}</span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-cream">
                  {activity.title}
                </h1>
              </div>

              <div className="text-cream/80 leading-relaxed mb-8 space-y-4">
                {activity.description.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/camere"
                  className="px-8 py-4 bg-gold text-night text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-gold-light text-center"
                >
                  Rezervă cazare
                </Link>
                <a
                  href="tel:0758660941"
                  className="px-8 py-4 border border-cream/30 text-cream text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:border-gold hover:text-gold text-center"
                >
                  Sună: 0758 660 941
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar — other activities */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-cream mb-4">
              Alte activități
            </h3>
            {otherActivities.map((other) => (
              <Link
                key={other.slug}
                href={`/agrement/${other.slug}`}
                className="group flex gap-4 bg-night-light border border-border-dark p-4 no-underline transition-all hover:border-gold"
              >
                <div className="relative w-24 h-20 shrink-0 overflow-hidden">
                  <Image
                    src={other.image}
                    alt={other.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-cream text-sm font-semibold group-hover:text-gold transition-colors">
                    {other.title}
                  </p>
                  <p className="text-muted text-xs mt-1 line-clamp-2">
                    {other.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Gallery */}
        {activity.gallery.length > 1 && (
          <Reveal>
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-cream mb-6">
                Galerie foto
              </h2>
              <RoomGallery images={activity.gallery} name={activity.title} />
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
