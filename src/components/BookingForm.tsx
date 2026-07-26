"use client";

import { useState } from "react";
import { format } from "date-fns";
import DatePicker from "./DatePicker";

export default function BookingForm({
  roomName,
  roomPrice,
}: {
  roomName: string;
  roomPrice: number;
}) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [checkIn, setCheckIn] = useState(format(today, "yyyy-MM-dd"));
  const [checkOut, setCheckOut] = useState(format(tomorrow, "yyyy-MM-dd"));
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nights = Math.ceil(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)
    );
    const totalPrice = nights * roomPrice;

    const message =
      `Rezervare Cabanele Rus\n\n` +
      `Camera: ${roomName}\n` +
      `Check-in: ${checkIn}\n` +
      `Check-out: ${checkOut}\n` +
      `Nopți: ${nights}\n` +
      `Oaspeți: ${guests}\n` +
      `Nume: ${name || "-"}\n` +
      `Telefon: ${phone || "-"}\n` +
      `Preț estimat: ${totalPrice} lei (${nights} × ${roomPrice} lei)\n\n` +
      `Vă rog să confirmați disponibilitatea. Mulțumesc!`;

    const whatsappUrl = `https://wa.me/40758660941?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-night-light border border-border-dark p-6">
      <h3 className="text-gold font-semibold text-lg mb-4">Rezervă această cameră</h3>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-xs text-muted uppercase tracking-wider mb-1">Check-in</label>
          <DatePicker
            value={checkIn}
            onChange={setCheckIn}
            placeholder="Check-in"
          />
        </div>
        <div>
          <label className="block text-xs text-muted uppercase tracking-wider mb-1">Check-out</label>
          <DatePicker
            value={checkOut}
            onChange={setCheckOut}
            placeholder="Check-out"
            minDate={checkIn ? new Date(checkIn) : undefined}
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="block text-xs text-muted uppercase tracking-wider mb-1">Oaspeți</label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full bg-night border border-border-dark text-cream px-3 py-2 text-sm focus:border-gold focus:outline-none transition-colors"
        >
          <option value="1">1 persoană</option>
          <option value="2">2 persoane</option>
          <option value="3">3 persoane</option>
          <option value="4">4 persoane</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block text-xs text-muted uppercase tracking-wider mb-1">Nume</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Numele tău"
          className="w-full bg-night border border-border-dark text-cream px-3 py-2 text-sm focus:border-gold focus:outline-none transition-colors"
        />
      </div>
      <div className="mb-4">
        <label className="block text-xs text-muted uppercase tracking-wider mb-1">Telefon</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Numărul tău de telefon"
          className="w-full bg-night border border-border-dark text-cream px-3 py-2 text-sm focus:border-gold focus:outline-none transition-colors"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-muted text-xs">Preț/noapte</span>
        <span className="text-gold font-bold">{roomPrice} lei</span>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-gold text-night text-sm font-semibold uppercase tracking-wider transition-all hover:bg-gold-light cursor-pointer border-0"
      >
        Rezervă
      </button>
      <p className="text-muted text-xs mt-3 text-center">
        Rezervarea se trimite prin WhatsApp. Vă vom confirma disponibilitatea.
      </p>
    </form>
  );
}
