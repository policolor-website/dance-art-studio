import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { courses, getCourseBySlug } from "@/lib/data";
import BookingEngine from "@/components/BookingEngine";
import Reveal from "@/components/Reveal";

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Curs — Dance Art Studio" };
  return {
    title: `${course.name} — Dance Art Studio`,
    description: course.description,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const otherCourses = courses.filter((c) => c.slug !== slug);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6">
          <Link href="/cursuri" className="text-muted hover:text-rose text-sm no-underline transition-colors">
            ← Înapoi la cursuri
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-4/3 overflow-hidden">
            <Image
              src={course.image}
              alt={course.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
              {course.name}
            </h1>
            <p className="text-rose text-lg font-semibold mb-6">
              {course.ageRange} · {course.level}
            </p>
            <p className="text-cream/80 leading-relaxed mb-8">
              {course.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="glass rounded-2xl p-4 text-center">
                <p className="text-rose text-2xl font-bold">{course.duration}</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">Durată</p>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <p className="text-rose text-2xl font-bold">{course.price}</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">Lei/lună</p>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <p className="text-rose text-sm font-bold leading-tight">{course.schedule}</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">Program</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-rose text-sm font-semibold uppercase tracking-wider mb-4">
                Programă
              </h3>
              <ul className="space-y-2">
                {course.curriculum.map((item) => (
                  <li key={item} className="text-cream/80 text-sm flex items-center gap-2">
                    <span className="text-rose">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <BookingEngine />
        </div>

        {course.gallery.length > 1 && (
          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-cream mb-6">Galerie {course.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {course.gallery.map((img, i) => (
                <div key={i} className="relative overflow-hidden aspect-square">
                  <Image
                    src={img}
                    alt={`${course.name} ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="font-display text-2xl font-bold text-cream mb-6">Celelalte cursuri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherCourses.map((c) => (
              <Link key={c.slug} href={`/cursuri/${c.slug}`} className="group block no-underline">
                <div className="relative overflow-hidden aspect-4/3 mb-3">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-cream font-semibold group-hover:text-rose transition-colors">{c.name}</h3>
                <p className="text-muted text-xs">{c.ageRange} · {c.level}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
