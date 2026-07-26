import Image from "next/image";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { activities } from "@/lib/data";

export const metadata = {
  title: "Agrement — Cabanele Rus Budești Maramureș",
  description:
    "Activități de agrement la Cabanele Rus: piscină încălzită, plimbări cu poneii, curse cu sanii trase de Husky, schi la Cavnic, drumeții pe Creasta Cocoșului, călărie și bazine cu apă sărată.",
};

export default function AgrementPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
        <div className="relative text-center mb-12 py-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/cabanele-rus/hotel-38291930.jpg"
              alt=""
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h1 className="font-display text-5xl font-bold text-cream mb-4">
              Agrement
            </h1>
            <p className="text-muted text-lg">Activități și atracții în Maramureș</p>
            <div className="w-24 h-px gold-line mx-auto mt-6" />
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-6">

        <Reveal>
          <p className="text-cream/70 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Maramureșul oferă o gamă variată de activități de agrement pentru
            toate gusturile și vârstele. De la relaxare în piscina încălzită
            la adrenalină pe pârtiile de schi Cavnic, de la plimbări cu poneii
            la curse cu sanii trase de Husky — Cabanele Rus este punctul de
            plecare perfect pentru toate aceste experiențe.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, i) => (
            <Reveal key={activity.slug} delay={i * 80}>
              <div className="group bg-night-light border border-border-dark overflow-hidden card-hover h-full flex flex-col">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-night/80 to-transparent" />
                  <div className="absolute top-4 left-4 text-3xl">
                    {activity.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                    {activity.shortDescription}
                  </p>
                  <Link
                    href={`/agrement/${activity.slug}`}
                    className="text-gold text-sm font-semibold uppercase tracking-wider no-underline transition-colors hover:text-gold-light"
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
              Vrei să te bucuri de aceste activități?
            </h2>
            <p className="text-muted text-sm mb-6 max-w-2xl mx-auto">
              Contactează-ne pentru a organiza experiența ta perfectă în Maramureș.
              Te ajutăm cu recomandări și rezervări pentru toate activitățile de agrement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/camere"
                className="px-8 py-4 bg-gold text-night text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-gold-light"
              >
                Rezervă cazare
              </Link>
              <a
                href="tel:0758660941"
                className="px-8 py-4 border border-cream/30 text-cream text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:border-gold hover:text-gold"
              >
                Sună: 0758 660 941
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
