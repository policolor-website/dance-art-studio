import { reviews } from "@/lib/data";
import Reveal from "./Reveal";

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: rating }).map((_, i) => (
      <span key={i} className="text-gold text-lg">★</span>
    ))}
  </div>
);

export default function Reviews() {
  return (
    <section className="py-24 bg-night">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Testimoniale
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Părerea oaspeților
          </h2>
          <div className="w-24 h-px gold-line mx-auto mt-6" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <div className="bg-night-light border border-border-dark p-8 h-full card-hover">
                <Stars rating={review.rating} />
                <p className="text-cream/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-gold font-semibold text-sm">— {review.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
