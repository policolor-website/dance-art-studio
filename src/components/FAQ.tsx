"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Ce ore sunt check-in-ul și check-out-ul?",
    answer:
      "Check-in-ul se face începând cu ora 14:00, iar check-out-ul până la ora 11:00. Pentru arrivări târzii sau cerințe speciale, vă rugăm să ne contactați telefonic.",
  },
  {
    question: "Care sunt tarifele de cazare?",
    answer:
      "Doar cazare: 100 lei/pers/noapte. Cu mic dejun: 150 lei/pers/noapte. Mic dejun + prânz/cină: 250 lei/pers/noapte. Pensiune completă: 350 lei/pers/noapte. Copii 0-6 ani: gratuit. Copii 6-14 ani: -50%. Închiriere integrală: 2000 lei.",
  },
  {
    question: "Aveți parcare gratuită?",
    answer:
      "Da, dispunem de parcare privată gratuită pentru toți oaspeții noștri, direct la fața locului.",
  },
  {
    question: "Ce facilități aveți?",
    answer:
      "Piscină încălzită cu vedere, 2 ciubere exterioare încălzite, șemineu, trambulină, tobogan, hamace, șezlonguri, foișor, grătar profesional, ceaun, disc, plită pe lemne, cuptor pâine, terasă, loc de joacă copii, WiFi, tir cu arcul, badminton, haine tradiționale pentru poze.",
  },
  {
    question: "Ce atracții turistice sunt în apropiere?",
    answer:
      "La 2 min: curse cu sanii trase de Husky. La 3 km: Biserica UNESCO Budești (Pintea Viteazul). La 5 km: pârtii de schi Cavnic și Casele Prințului Charles din Breb. La 13 km: bazine cu apă sărată Ocna Șugatag. La 30 km: Mănăstirea Bârsana. La 40 km: Cimitirul Vesel Săpânța.",
  },
  {
    question: "Se pot organiza evenimente sau închiriere integrală?",
    answer:
      "Da, oferim posibilitatea de închiriere integrală a celor 3 cabane (maxim 30 persoane) pentru evenimente, team-building-uri sau petreceri de Crăciun. Disponibil și All Inclusive / Ultra All Inclusive pentru grupuri.",
  },
  {
    question: "Copii beneficiază de reducere?",
    answer:
      "Da! Copiii 0-6 ani beneficiază de cazare și masă GRATUIT. Copiii 6-14 ani au -50% din preț. Avem loc de joacă, trambulină, tobogan, hamace și plimbări cu poneii Chico și Zoro.",
  },
  {
    question: "Aveți WiFi gratuit?",
    answer:
      "Da, toate camerele și spațiile comune dispun de WiFi gratuit cu acces internet.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqItems.map((item, i) => (
        <div
          key={i}
          className="bg-night-light border border-border-dark overflow-hidden transition-colors hover:border-gold/30"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left bg-transparent border-0 cursor-pointer"
          >
            <span className="text-cream font-semibold text-sm md:text-base">
              {item.question}
            </span>
            <span
              className={`text-gold text-xl shrink-0 transition-transform duration-300 ${
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
