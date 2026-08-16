import Image from "next/image";
import Link from "next/link";
import { courses, teachers } from "@/lib/data";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import DespreSlider from "@/components/DespreSlider";

export const metadata = {
  title: "Despre Noi — Dance Art Studio",
  description:
    "Dance Art Studio — cursuri de balet clasic cu profesori dedicați. Studio profesional, spectacole, competiții și examene naționale.",
};

export default function DespreNoiPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
        <div className="relative text-center mb-12 py-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/ballet/dancer-stage.jpg"
              alt=""
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <h1 className="font-display text-5xl font-bold text-cream mb-4">
              Despre Noi
            </h1>
            <p className="text-muted text-lg">Dance Art Studio</p>
            <div className="w-24 h-px rose-line mx-auto mt-6" />
          </div>
        </div>

      <div className="max-w-5xl mx-auto px-6">

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
            <DespreSlider />
            <div className="space-y-6 text-cream/80 leading-relaxed">
              <p className="text-lg">
                Dance Art Studio a fost fondată din pasiunea pentru
                dansul clasic și dorința de a transmite mai departe arta
                baletului. Cu peste 15 ani de experiență, școala noastră a
                format sute de elevi, de la cei care fac primii pași în dans
                până la artiști care au urmat o carieră profesională.
              </p>
              <p>
                Misiunea noastră este să oferim o educație de balet de înaltă
                calitate, într-un mediu prietenos, sigur și motivant. Credem
                că baletul este pentru toată lumea — copii, adolescenți și
                adulți, indiferent de nivel sau experiență anterioară.
              </p>
              <p>
                Studioul nostru este dotat cu parchet profesional de dans,
                oglinzi pe întreg peretele, bare reglabile pe două niveluri
                și pian cu acompaniator live. Elevii noștri participă la
                spectacole, competiții naționale și internaționale, examene
                de nivel și masterclass-uri cu invitați speciali.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glass rounded-2xl p-6 text-center card-hover">
              <div className="text-3xl mb-3">🩰</div>
              <h3 className="text-cream font-semibold mb-2">Balet clasic</h3>
              <p className="text-muted text-sm">
                Tehnică clasică pentru toate vârstele și nivelurile
              </p>
            </div>
            <div className="glass rounded-2xl p-6 text-center card-hover">
              <div className="text-3xl mb-3">🎭</div>
              <h3 className="text-cream font-semibold mb-2">Spectacole</h3>
              <p className="text-muted text-sm">
                Gala anuală, spectacole de Crăciun și competiții
              </p>
            </div>
            <div className="glass rounded-2xl p-6 text-center card-hover">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-cream font-semibold mb-2">Examene & Premii</h3>
              <p className="text-muted text-sm">
                Examene recunoscute și premii la competiții naționale
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-3xl font-bold text-rose">15+</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">Ani experiență</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-3xl font-bold text-rose">500+</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">Elevi formați</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-3xl font-bold text-rose">5</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">Cursuri</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-3xl font-bold text-rose">3</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">Profesori</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-cream mb-6 text-center">
              Echipa noastră de profesori
            </h2>
            <div className="w-24 h-px rose-line mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teachers.map((teacher, i) => (
                <Reveal key={teacher.slug} delay={i * 100}>
                  <div className="glass rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                    <div className="relative aspect-4/3 overflow-hidden">
                      <Image
                        src={teacher.image}
                        alt={teacher.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-night/80 to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-display text-xl font-bold text-cream mb-1">{teacher.name}</h3>
                      <p className="text-rose text-sm font-semibold mb-3">{teacher.role}</p>
                      <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{teacher.bio}</p>
                      <ul className="space-y-1">
                        {teacher.achievements.map((a) => (
                          <li key={a} className="text-cream/70 text-xs flex items-center gap-2">
                            <span className="text-rose">✦</span> {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16">
            <p className="text-rose text-sm font-semibold uppercase tracking-[0.3em] mb-4 text-center">
              Cursuri
            </p>
            <h2 className="font-display text-3xl font-bold text-cream mb-6 text-center">
              Cursurile noastre
            </h2>
            <div className="w-24 h-px rose-line mx-auto mb-8" />
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
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-cream mb-6 text-center">
              Întrebări frecvente
            </h2>
            <div className="w-24 h-px rose-line mx-auto mb-8" />
            <FAQ />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
