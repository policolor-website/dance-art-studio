"use client";

import { useState } from "react";
import Image from "next/image";
import { courses } from "@/lib/data";

export default function InscrierePage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [courseType, setCourseType] = useState("");
  const [experience, setExperience] = useState("none");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const courseName = courseType
      ? courses.find((c) => c.slug === courseType)?.name ?? courseType
      : "Fără preferință";

    const expText = experience === "none" ? "Fără experiență" :
                    experience === "beginner" ? "Începător" :
                    experience === "intermediate" ? "Intermediar" : "Avansat";

    const message =
      `Înscriere Dance Art Studio\n\n` +
      `Nume elev: ${name}\n` +
      `Vârstă: ${age || "Nespecificată"}\n` +
      `Părinte/Tutore: ${parentName || "—"}\n` +
      `Curs dorit: ${courseName}\n` +
      `Experiență: ${expText}\n` +
      `Telefon: ${phone}\n` +
      `Email: ${email || "—"}\n\n` +
      `Vă rog să mă contactați pentru înscriere și ședința de probă. Mulțumesc!`;

    const whatsappUrl = `https://wa.me/40722335357?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
        <div className="relative text-center mb-12 py-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/ballet/ballet-girl.jpg"
              alt=""
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h1 className="font-display text-5xl font-bold text-cream mb-4">Înscriere</h1>
            <p className="text-muted text-lg">Fă primul pas în lumea baletului</p>
            <div className="w-24 h-px rose-line mx-auto mt-6" />
          </div>
        </div>

      <div className="max-w-3xl mx-auto px-6">

        {submitted ? (
          <div className="bg-night-light border border-rose p-8 text-center">
            <div className="text-4xl mb-4">🩰</div>
            <h2 className="font-display text-2xl font-bold text-rose mb-2">Înscriere trimisă!</h2>
            <p className="text-cream/80 text-sm mb-6">
              Am deschis WhatsApp cu mesajul tău. Te vom contacta în cel mai scurt timp
              pentru a programa ședința de probă gratuită.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 bg-rose text-night text-sm font-semibold uppercase tracking-wider transition-all hover:bg-rose-light cursor-pointer border-0"
            >
              Trimite altă înscriere
            </button>
          </div>
        ) : (
          <>
            <div className="bg-night-light border border-border-dark p-6 mb-8">
              <h2 className="font-display text-xl font-bold text-cream mb-3">
                Ședința de probă este gratuită
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                Completează formularul de mai jos și te vom contacta pentru a programa
                o ședință de probă gratuită. Elevul va cunoaște profesorul, studioul și
                va putea participa la o oră de balet pentru a descoperi dacă acest curs
                este potrivit.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-night-light border border-border-dark p-8">
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-rose uppercase tracking-wider mb-2">Nume elev *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Numele copilului"
                      className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-rose focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-rose uppercase tracking-wider mb-2">Vârstă</label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      min="3"
                      max="99"
                      placeholder="Vârsta"
                      className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-rose focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-rose uppercase tracking-wider mb-2">Nume părinte/tutore</label>
                  <input
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Numele părintelui (pentru minori)"
                    className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-rose focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-rose uppercase tracking-wider mb-2">Telefon *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="07xx xxx xxx"
                      className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-rose focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-rose uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@exemplu.com"
                      className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-rose focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-rose uppercase tracking-wider mb-2">Curs dorit</label>
                  <select
                    value={courseType}
                    onChange={(e) => setCourseType(e.target.value)}
                    className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-rose focus:outline-none transition-colors"
                  >
                    <option value="">Fără preferință (recomandați-mi)</option>
                    {courses.map((course) => (
                      <option key={course.slug} value={course.slug}>
                        {course.name} ({course.ageRange})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-rose uppercase tracking-wider mb-2">Experiență anterioară</label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-rose focus:outline-none transition-colors"
                  >
                    <option value="none">Fără experiență</option>
                    <option value="beginner">Începător (1-2 ani)</option>
                    <option value="intermediate">Intermediar (3-5 ani)</option>
                    <option value="advanced">Avansat (5+ ani)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-rose text-night text-sm font-semibold uppercase tracking-wider transition-all hover:bg-rose-light cursor-pointer border-0"
                >
                  Trimite înscrierea prin WhatsApp
                </button>

                <p className="text-muted text-xs text-center">
                  Datele tale sunt confidențiale și nu sunt stocate. Mesajul se
                  trimite direct prin WhatsApp către școala noastră.
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
