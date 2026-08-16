"use client";

import { useState } from "react";
import { courses } from "@/lib/data";

export default function BookingEngine() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [courseType, setCourseType] = useState("all");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const courseName = courseType === "all"
      ? "Fără preferință"
      : courses.find((c) => c.slug === courseType)?.name ?? courseType;

    const message =
      `Înscriere Dance Art Studio\n\n` +
      `Nume elev: ${name}\n` +
      `Vârstă: ${age || "Nespecificată"}\n` +
      `Curs dorit: ${courseName}\n` +
      `Telefon: ${phone}\n\n` +
      `Vă rog să mă contactați pentru înscriere. Mulțumesc!`;

    const whatsappUrl = `https://wa.me/40722335357?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-night-light border border-border-dark p-4 md:p-6">
      <h3 className="font-display text-xl font-bold text-cream mb-4">
        Înscrie-te la cursuri
      </h3>
      <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label className="block text-xs text-rose uppercase tracking-wider mb-1.5">
            Nume elev
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Numele copilului"
            className="w-full bg-night border border-border-dark text-cream px-4 py-2.5 text-sm focus:border-rose focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-rose uppercase tracking-wider mb-1.5">
            Vârstă
          </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="3"
            max="99"
            placeholder="Vârsta"
            className="w-full bg-night border border-border-dark text-cream px-4 py-2.5 text-sm focus:border-rose focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-rose uppercase tracking-wider mb-1.5">
            Curs dorit
          </label>
          <select
            value={courseType}
            onChange={(e) => setCourseType(e.target.value)}
            className="w-full bg-night border border-border-dark text-cream px-4 py-2.5 text-sm focus:border-rose focus:outline-none transition-colors"
          >
            <option value="all">Fără preferință</option>
            {courses.map((course) => (
              <option key={course.slug} value={course.slug}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-rose uppercase tracking-wider mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="07xx xxx xxx"
            className="w-full bg-night border border-border-dark text-cream px-4 py-2.5 text-sm focus:border-rose focus:outline-none transition-colors"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full px-6 py-2.5 bg-rose text-night text-sm font-semibold uppercase tracking-wider transition-all hover:bg-rose-light cursor-pointer border-0"
          >
            Înscrie-te
          </button>
        </div>
      </form>

      <p className="text-muted text-xs mt-4">
        Înscrierea se trimite prin WhatsApp. Vă vom contacta în cel mai scurt timp pentru confirmare.
      </p>
    </div>
  );
}
