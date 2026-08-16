import Link from "next/link";
import Image from "next/image";
import { courses } from "@/lib/data";
import Reveal from "./Reveal";

export default function RoomsPreview() {
  return (
    <section className="py-24 bg-night-light/50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-rose text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Cursuri
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Cursurile noastre
          </h2>
          <div className="w-24 h-px rose-line mx-auto mt-6" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <Reveal key={course.slug} delay={i * 100}>
              <Link href={`/cursuri/${course.slug}`} className="group block no-underline">
                <div className="relative overflow-hidden aspect-4/3 mb-5">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-night/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-rose text-xs font-semibold uppercase tracking-wider">
                      {course.ageRange} · {course.level}
                    </p>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-cream mb-2 group-hover:text-rose transition-colors">
                  {course.name}
                </h3>
                <p className="text-muted text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                <span className="text-rose text-sm font-semibold uppercase tracking-wider">
                  Vezi detalii →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
