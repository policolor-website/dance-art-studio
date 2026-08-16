import { facilities } from "@/lib/data";
import Reveal from "./Reveal";

const iconMap: Record<string, string> = {
  mirror: "\u{1FA9E}",
  floor: "\u{1F6BF}",
  barre: "\u{1F9F9}",
  piano: "\u{1F3B9}",
  sound: "\u{1F50A}",
  ac: "\u{2744}\u{FE0F}",
  lockers: "\u{1F9F5}",
  water: "\u{1F4A7}",
  stage: "\u{1F3AD}",
  costumes: "\u{1F455}",
  parking: "\u{1F697}",
  wifi: "\u{1F4F6}",
};

export default function Facilities() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-rose text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Dotări
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Studio-ul nostru
          </h2>
          <div className="w-24 h-px rose-line mx-auto mt-6" />
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
