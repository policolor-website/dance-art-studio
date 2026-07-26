"use client";

import { useState } from "react";
import { format } from "date-fns";
import { cabins } from "@/lib/data";
import DatePicker from "./DatePicker";

export default function BookingEngine() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [checkIn, setCheckIn] = useState(format(today, "yyyy-MM-dd"));
  const [checkOut, setCheckOut] = useState(format(tomorrow, "yyyy-MM-dd"));
  const [guests, setGuests] = useState("2");
  const [cabinType, setCabinType] = useState("all");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) return;

    const cabinName = cabinType === "all"
      ? "Toate cabanele"
      : cabins.find((c) => c.slug === cabinType)?.name ?? cabinType;

    const message =
      `Rezervare Cabanele Rus\n\n` +
      `Check-in: ${checkIn}\n` +
      `Check-out: ${checkOut}\n` +
      `Cabana: ${cabinName}\n` +
      `Oaspeți: ${guests}\n\n` +
      `Vă rog să confirmați disponibilitatea. Mulțumesc!`;

    const whatsappUrl = `https://wa.me/40758660941?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-night-light border border-border-dark p-4 md:p-6">
      <h3 className="font-display text-xl font-bold text-cream mb-4">
        Verifică disponibilitatea
      </h3>
      <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label className="block text-xs text-gold uppercase tracking-wider mb-1.5">
            Check-in
          </label>
          <DatePicker
            value={checkIn}
            onChange={setCheckIn}
            placeholder="Check-in"
          />
        </div>
        <div>
          <label className="block text-xs text-gold uppercase tracking-wider mb-1.5">
            Check-out
          </label>
          <DatePicker
            value={checkOut}
            onChange={setCheckOut}
            placeholder="Check-out"
            minDate={checkIn ? new Date(checkIn) : undefined}
          />
        </div>
        <div>
          <label className="block text-xs text-gold uppercase tracking-wider mb-1.5">
            Cabana
          </label>
          <select
            value={cabinType}
            onChange={(e) => setCabinType(e.target.value)}
            className="w-full bg-night border border-border-dark text-cream px-4 py-2.5 text-sm focus:border-gold focus:outline-none transition-colors"
          >
            <option value="all">Toate cabanele</option>
            {cabins.map((cabin) => (
              <option key={cabin.slug} value={cabin.slug}>
                {cabin.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-gold uppercase tracking-wider mb-1.5">
            Oaspeți
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-night border border-border-dark text-cream px-4 py-2.5 text-sm focus:border-gold focus:outline-none transition-colors"
          >
            <option value="1">1 persoană</option>
            <option value="2">2 persoane</option>
            <option value="3">3 persoane</option>
            <option value="4">4 persoane</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full px-6 py-2.5 bg-gold text-night text-sm font-semibold uppercase tracking-wider transition-all hover:bg-gold-light cursor-pointer border-0"
          >
            Rezervă
          </button>
        </div>
      </form>

      <p className="text-muted text-xs mt-4">
        Rezervarea se trimite prin WhatsApp. Vă vom confirma disponibilitatea în cel mai scurt timp.
      </p>
    </div>
  );
}
