"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "De la ce vârstă pot începe copiii cursurile de balet?",
    answer:
      "Copiii pot începe cursul de Ballet Bebeluși de la vârsta de 3 ani. Acest curs este conceput special pentru cei mici, folosind jocul și mișcarea pentru a introduce baletul într-un mod plăcut și accesibil.",
  },
  {
    question: "Care sunt tarifele cursurilor?",
    answer:
      "Ballet Bebeluși (3-5 ani): 120 lei/lună. Ballet Copii (6-9 ani): 180 lei/lună. Ballet Adolescenți (10-14 ani): 250 lei/lună. Ballet Adulți (18+): 200 lei/lună. Program Pre-profesional: 400 lei/lună. Reduceri pentru familii cu mai mulți copii înscriși.",
  },
  {
    question: "Ce echipament este necesar pentru cursuri?",
    answer:
      "Pentru începători: leotard, colanți, papuci de balet și părul strâns. Pentru avansați: pointe (la recomandarea profesorului). Lista completă de echipament se primește la înscriere. Putem recomanda magazine specializate.",
  },
  {
    question: "Aveți parcarea gratuită?",
    answer:
      "Da, dispunem de parcare privată gratuită pentru toți părinții și elevii noștri, direct la fața locului.",
  },
  {
    question: "Ce facilități are studioul?",
    answer:
      "Studioul este dotat cu parchet profesional de dans, oglinzi pe întreg peretele, bare reglabile pe două niveluri, pian cu acompaniator live, sistem audio profesional, aer condiționat, vestiar cu dulapuri individuale și zonă de hidratare.",
  },
  {
    question: "Elevii participă la spectacole și competiții?",
    answer:
      "Da, organizăm Gala Anuală de Balet unde toți elevii dansează pe scenă. Elevii avansați participă la competiții naționale și internaționale, examene de nivel recunoscute și masterclass-uri cu invitați speciali.",
  },
  {
    question: "Pot face cursuri de balet dacă sunt adult și nu am experiență?",
    answer:
      "Absolut! Cursul de Ballet Adulți este deschis tuturor nivelurilor, inclusiv începători totali. Baletul pentru adulți oferă multiple beneficii: postură, flexibilitate, tonifiere și relaxare. Nu este necesară experiență anterioară.",
  },
  {
    question: "Cum se face înscrierea?",
    answer:
      "Înscrierea se face prin formularul de pe site sau prin WhatsApp. Vă contactăm pentru a programa o ședință de probă gratuită, unde elevul cunoaște profesorul și studioul. După probă, puteți alege cursul potrivit.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqItems.map((item, i) => (
        <div
          key={i}
          className="glass rounded-2xl overflow-hidden transition-colors hover:border-rose/30"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left bg-transparent border-0 cursor-pointer"
          >
            <span className="text-cream font-semibold text-sm md:text-base">
              {item.question}
            </span>
            <span
              className={`text-rose text-xl shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className="grid transition-all duration-300 ease-in-out"
            style={{
              gridTemplateRows: open === i ? "1fr" : "0fr",
            }}
          >
            <div className="overflow-hidden">
              <p className="px-5 pb-5 text-cream/70 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
