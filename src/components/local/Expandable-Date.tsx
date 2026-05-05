import { useState } from "react";
import type { HeroProps } from "./Hero";

export interface HeroDateSelectorProps extends HeroProps {
  setParentDate?: (date: string) => void;
}

export function ExpandableDate({
  heroDestination,
  setParentDate,
}: HeroDateSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const nextDate = heroDestination.next_available_dates[0];
  const [selectedDate, setSelectedDate] = useState(nextDate);

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    setParentDate && setParentDate(date);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Next Available */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/60 text-xs uppercase tracking-wider">
            {selectedDate === nextDate
              ? "Tanggal Selanjutnya"
              : "Tanggal Dipilih"}
          </p>

          <h4 className="text-sm font-semibold">
            {new Date(selectedDate).toLocaleDateString("id-ID", {
              weekday: "short",
              day: "numeric",
              month: "long",
            })}
          </h4>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            text-sm px-4 py-2 rounded-full
            bg-white/15 hover:bg-white/25
            transition-all
          "
        >
          {isOpen ? "Tutup" : "Lainnya"}
        </button>
      </div>

      {/* Floating Dropdown Dates */}
      {isOpen && (
        <div
          className="
            absolute
            top-full
            left-0
            mt-3
            z-50

            w-[250px]

            rounded-2xl
            border border-white/10
            bg-black/70
            backdrop-blur-xl

            p-4
            shadow-2xl
          "
        >
          <div className="flex flex-wrap gap-2">
            {heroDestination.next_available_dates.map((date) => (
              <button
                key={date}
                className="
                  px-3 py-2
                  rounded-full
                  bg-white
                  text-slate-900
                  text-sm
                  hover:scale-105
                  transition-all
                "
                onClick={() => {
                  handleDateClick(date);
                  setIsOpen(false);
                }}
              >
                {new Date(date).toLocaleDateString("id-ID", {
                  weekday: "short",
                  day: "numeric",
                  month: "long",
                })}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
