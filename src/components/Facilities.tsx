import { facilities } from "@/lib/data";
import Reveal from "./Reveal";

const iconMap: Record<string, string> = {
  pool: "\u{1F3CA}",
  hot_tub: "\u{1F6C1}",
  fireplace: "\u{1F525}",
  car: "\u{1F697}",
  wifi: "\u{1F4F6}",
  garden: "\u{1F333}",
  bbq: "\u{1F356}",
  kids: "\u{1F9D2}",
  pets: "\u{1F434}",
  kitchen: "\u{1F373}",
  restaurant: "\u{1F37D}",
  archery: "\u{1F3F9}",
};

export default function Facilities() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Facilitati
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Facilitatile cabanelor
          </h2>
          <div className="w-24 h-px gold-line mx-auto mt-6" />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {facilities.map((f, i) => (
            <Reveal key={f.label} delay={i * 80}>
              <div className="card-hover bg-night-light border border-border-dark p-6 text-center h-full">
                <div className="text-3xl mb-3">{iconMap[f.icon] || "\u2728"}</div>
                <h3 className="text-cream font-semibold text-sm mb-1">{f.label}</h3>
                <p className="text-muted text-xs">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
