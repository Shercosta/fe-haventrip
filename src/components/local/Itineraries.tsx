// components/destination/ItinerarySection.tsx

import type { Itinerary_Day_Destination } from "@/arrays/destinations";
import { cn } from "@/lib/utils";
import { Clock3, CalendarDays, Info } from "lucide-react";
import { useState } from "react";

interface Props {
  itineraries: Itinerary_Day_Destination[];
}

export default function ItinerarySection({ itineraries }: Props) {
  const [selectedDay, setSelectedDay] = useState<Itinerary_Day_Destination>(
    itineraries[0],
  );

  return (
    <section className="mt-16" id="itinerary">
      <div className="flex items-center gap-3 mb-8">
        <CalendarDays className="w-7 h-7 text-primary" />
        <h2 className="text-3xl font-bold">Itinerary</h2>
      </div>

      <div className="space-y-8">
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-muted-foreground">
          <Info className="w-4 h-4 mt-0.5 text-primary shrink-0" />

          <p>
            Itinerary dapat berubah tergantung pada cuaca, lalu lintas, kondisi
            laut, dan keadaan operasional untuk memastikan pengalaman dan
            keselamatan terbaik.
          </p>
        </div>

        <div
          key={selectedDay.day}
          className="
              rounded-3xl
              border
              border-border
              bg-background/70
              backdrop-blur-sm
              p-6
              shadow-sm
            "
        >
          <div className="flex gap-2 mb-6">
            {itineraries.map((daay, day_index) => (
              <div
                className={cn([
                  "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-primary/10 text-primary cursor-pointer",
                  selectedDay.day === daay.day &&
                    "bg-primary text-primary-foreground",
                  selectedDay.day !== daay.day &&
                    "hover:bg-secondary hover:text-secondary-foreground",
                ])}
                key={`day-${day_index}`}
                onClick={() => setSelectedDay(daay)}
              >
                Day {daay.day}
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {selectedDay.times.map((activity, index) => (
              <div key={`${activity.time}-${index}`} className="flex gap-4">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div
                    className="
                        w-10
                        h-10
                        rounded-full
                        bg-primary/10
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                  >
                    <Clock3 className="w-5 h-5 text-primary" />
                  </div>

                  {index !== selectedDay.times.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    {activity.time}
                  </p>

                  <p className="text-base mt-1 leading-relaxed">
                    {activity.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
