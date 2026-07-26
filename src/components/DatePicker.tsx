"use client";

import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { ro } from "react-day-picker/locale";
import { format } from "date-fns";

type DatePickerProps = {
  value: string;
  onChange: (date: string) => void;
  placeholder?: string;
  minDate?: Date;
};

export default function DatePicker({
  value,
  onChange,
  placeholder = "Selectează data",
  minDate,
}: DatePickerProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>(
    value ? new Date(value) : undefined
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (date: Date | undefined) => {
    setSelected(date);
    if (date) {
      onChange(format(date, "yyyy-MM-dd"));
      setOpen(false);
    }
  };

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full bg-night border border-border-dark text-cream px-4 py-2.5 text-sm focus:border-gold focus:outline-none transition-colors text-left flex items-center justify-between cursor-pointer"
      >
        <span className={selected ? "text-cream" : "text-muted"}>
          {selected ? format(selected, "dd/MM/yyyy") : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-gold transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute z-50 mt-2 bg-night-light border border-gold/30 p-4 shadow-2xl"
          style={{ animation: "fadeIn 0.2s ease forwards" }}
        >
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleSelect}
            locale={ro}
            disabled={minDate ? { before: minDate } : { before: today }}
            classNames={{
              root: "rdp-dark",
              month_caption: "font-display text-gold font-bold text-sm",
              weekdays: "mb-2",
              weekday: "text-gold text-xs font-semibold uppercase tracking-wider",
              day: "rdp-day",
              day_button: "rdp-day_button",
              selected: "rdp-selected",
              today: "rdp-today",
              disabled: "rdp-disabled",
              outside: "rdp-outside",
              chevron: "rdp-chevron",
            }}
          />
        </div>
      )}
    </div>
  );
}
