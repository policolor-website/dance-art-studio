"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
        <div className="relative text-center mb-12 py-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/ballet/ballet-white.jpg"
              alt=""
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h1 className="font-display text-5xl font-bold text-cream mb-4">Contact</h1>
            <p className="text-muted text-lg">Suntem aici pentru tine</p>
            <div className="w-24 h-px rose-line mx-auto mt-6" />
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-cream mb-6">
              Informații de contact
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-rose rounded-full flex items-center justify-center text-rose text-xl shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider mb-1">Telefon</p>
                  <a href="tel:0758660941" className="text-cream hover:text-rose no-underline transition-colors">
                    0758 660 941
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-rose rounded-full flex items-center justify-center text-rose text-xl shrink-0">
                  ✉
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:contact@danceartstudio.ro" className="text-cream hover:text-rose no-underline transition-colors">
                    contact@danceartstudio.ro
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-rose rounded-full flex items-center justify-center text-rose text-xl shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wider mb-1">Adresă</p>
                  <p className="text-cream">Strada Artei nr. 12, București, România</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bucuresti+Romania"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose text-sm hover:text-rose-light no-underline transition-colors"
                  >
                    Vezi pe hartă →
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 relative aspect-video overflow-hidden border border-border-dark">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.347289999999!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff3a1c5b6b6f%3A0x0!2sBucurești!5e0!3m2!1sro!2sro!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dance Art Studio pe hartă"
              />
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-night-light border border-rose p-8 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h2 className="text-rose font-semibold text-xl mb-2">Mesaj trimis!</h2>
                <p className="text-cream/80 text-sm">
                  Vă vom răspunde în cel mai scurt timp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-muted hover:text-rose text-xs underline border-0 bg-transparent cursor-pointer"
                >
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-night-light border border-border-dark p-8">
                <h2 className="font-display text-2xl font-bold text-cream mb-6">
                  Trimite-ne un mesaj
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">Nume</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-rose focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-rose focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">Telefon</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-rose focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted uppercase tracking-wider mb-2">Mesaj</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full bg-night border border-border-dark text-cream px-4 py-3 text-sm focus:border-rose focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-rose text-night text-sm font-semibold uppercase tracking-wider transition-all hover:bg-rose-light cursor-pointer border-0"
                  >
                    Trimite mesajul
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
