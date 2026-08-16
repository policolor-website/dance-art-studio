import Link from "next/link";
import Image from "next/image";
import { courses } from "@/lib/data";
import BookingEngine from "@/components/BookingEngine";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Cursuri — Dance Art Studio",
  description: "Descoperă cursurile de balet de la Dance Art Studio: Ballet Bebeluși, Copii, Adolescenți, Adulți și Pre-profesional. Balet clasic pentru toate vârstele.",
};

export default function CoursesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="relative text-center mb-12 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/ballet/ballet-group.jpg"
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="font-display text-5xl font-bold text-cream mb-4">
            Cursurile noastre
          </h1>
          <p className="text-muted text-lg">5 cursuri · Toate vârstele · Toate nivelurile</p>
          <div className="w-24 h-px rose-line mx-auto mt-6" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <BookingEngine />
        </div>

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
                <p className="text-muted text-sm mb-4 line-clamp-3">
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
    </div>
  );
}
