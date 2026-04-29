import { useState } from "react";
import type { HeroProps } from "./Hero";

export function ExpandableDate({ heroDestination }: HeroProps) {
  const [openDates, setOpenDates] = useState<Record<number, boolean>>({});

  return (
    <div>
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
          onClick={() =>
            setOpenDates((prev) => ({
              ...prev,
              [heroDestination.id]: !prev[heroDestination.id],
            }))
          }
          className="text-sm px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 transition-all"
        >
          {openDates[heroDestination.id] ? "Tutup" : "Lainnya"}
        </button>
      </div>

      {/* Expandable Dates */}
      {openDates[heroDestination.id] && (
        <div className="flex flex-wrap gap-2 mt-4">
          {heroDestination.next_available_dates.map((date) => (
            <button
              key={date}
              className="px-3 py-2 rounded-full bg-white text-slate-900 text-sm hover:scale-105 transition-all"
            >
              {new Date(date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
              })}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
