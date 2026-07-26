import Image from "next/image";
import Link from "next/link";
import { cabins } from "@/lib/data";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import DespreSlider from "@/components/DespreSlider";

export const metadata = {
  title: "Despre Noi — Cabanele Rus Budești Maramureș",
  description:
    "Cabanele Rus Budești — 3 cabane rustice pe 1,9 ha în inima Maramureșului, cu piscină încălzită, ponei, husky și peisaje de poveste.",
};

export default function DespreNoiPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
        <div className="relative text-center mb-12 py-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/cabanele-rus/hotel-38291926.jpg"
              alt=""
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <h1 className="font-display text-5xl font-bold text-cream mb-4">
              Despre Noi
            </h1>
            <p className="text-muted text-lg">Cabanele Rus · Budești Maramureș</p>
            <div className="w-24 h-px gold-line mx-auto mt-6" />
          </div>
        </div>

      <div className="max-w-5xl mx-auto px-6">

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
            <DespreSlider />
            <div className="space-y-6 text-cream/80 leading-relaxed">
              <p className="text-lg">
                Cabanele Rus este situată în Budești, Maramureș, o zonă
                renumită pentru tradițiile autentice, bisericile de lemn UNESCO
                și peisajele montane spectaculoase. Oferim cazare tradițională
                în 3 cabane rustice pe o suprafață de 1,9 ha, transversate de
                Valea Răchițele.
              </p>
              <p>
                Locația noastră îți oferă acces rapid la principalele atracții
                turistice din zonă: Biserica UNESCO Budești (3 km), pârtiile de
                schi Cavnic și Casele Prințului Charles din Breb (5 km),
                Mănăstirea Bârsana (30 km) și Cimitirul Vesel Săpânța (40 km).
              </p>
              <p>
                Pe lângă cabane, pe proprietate găsiți piscină încălzită cu
                vedere, 2 ciubere exterioare, șemineu, grătar profesional,
                trambulină, tobogan și hamace. Cei 2 ponei drăgălași, Chico și
                Zoro, vă așteaptă la plimbare, iar câinii Husky completează
                experiența rurală autentică.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">�</div>
              <h3 className="text-cream font-semibold mb-2">Piscuină încălzită</h3>
              <p className="text-muted text-sm">
                Piscuină exterioară cu vedere la munte, disponibilă în toate sezoanele
              </p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">🐴</div>
              <h3 className="text-cream font-semibold mb-2">Ponei & Husky</h3>
              <p className="text-muted text-sm">
                Chico și Zoro, plimbări cu poneii și câini Husky prietenoși
              </p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="text-cream font-semibold mb-2">Parcare gratuită</h3>
              <p className="text-muted text-sm">
                Parcare privată la fața locului, inclusă pentru toți oaspeții
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-night-light border border-border-dark p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold">4</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">Tipuri camere</p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold">WiFi</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">Gratuit</p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold">24/7</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">Recepție</p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold">9.6</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">Recenzii Travelminit</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12">
            <h2 className="font-display text-3xl font-bold text-cream mb-6 text-center">
              De ce să ne alegi
            </h2>
            <div className="w-24 h-px gold-line mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-night-light border border-border-dark p-6 flex gap-4">
                <div className="text-2xl shrink-0">📍</div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Locație excelentă</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Situați în Budești, Maramureș, la 3 km de Biserica UNESCO și
                    5 km de pârtiile de schi Cavnic și Casele Prințului Charles
                    din Breb.
                  </p>
                </div>
              </div>
              <div className="bg-night-light border border-border-dark p-6 flex gap-4">
                <div className="text-2xl shrink-0">🏡</div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">3 cabane rustice</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    11 camere tradiționale, 3 livinguri cu șemineu și bucătării
                    complet utilate. Maxim 30 persoane, închiriere integrală
                    disponibilă.
                  </p>
                </div>
              </div>
              <div className="bg-night-light border border-border-dark p-6 flex gap-4">
                <div className="text-2xl shrink-0">�</div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Piscuină & Ciubere</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Piscuină încălzită cu vedere la munte și 2 ciubere exterioare
                    încălzite pentru relaxare în toate sezoanele.
                  </p>
                </div>
              </div>
              <div className="bg-night-light border border-border-dark p-6 flex gap-4">
                <div className="text-2xl shrink-0">�</div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Ponei & Husky</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Plimbări cu poneii Chico și Zoro, câini Husky prietenoși,
                    trambulină, tobogan și loc de joacă pentru copii.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-12 p-8 bg-night-light border border-border-dark">
            <h2 className="font-display text-2xl font-bold text-cream mb-4">
              Facilități incluse
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "WiFi gratuit",
                "TV satelit",
                "Pat matrimonial",
                "Parcare gratuită",
                "Piscuină încălzită",
                "2 ciubere încălzite",
                "Șemineu",
                "Grătar profesional",
                "Bucătărie complet utilată",
                "Mașină spălat rufe",
                "Ponei & Husky",
                "Trambulină & tobogan",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-cream/80">
                  <span className="text-gold">✦</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4 text-center">
              Cazare
            </p>
            <h2 className="font-display text-3xl font-bold text-cream mb-6 text-center">
              Cabanele noastre
            </h2>
            <div className="w-24 h-px gold-line mx-auto mb-8" />
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
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-cream mb-6 text-center">
              Întrebări frecvente
            </h2>
            <div className="w-24 h-px gold-line mx-auto mb-8" />
            <FAQ />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
