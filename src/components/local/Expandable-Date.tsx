import { useState } from "react";
import type { HeroProps } from "./Hero";

export function ExpandableDate({ heroDestination }: HeroProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Next Available */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/60 text-xs uppercase tracking-wider">
            Tanggal Selanjutnya
          </p>

          <h4 className="text-lg font-semibold">
            {new Date(
              heroDestination.next_available_dates[0],
            ).toLocaleDateString("id-ID", {
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

            w-[320px]

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
              >
                {new Date(date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                })}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
