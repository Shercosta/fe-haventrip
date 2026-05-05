import { type Destination } from "../../arrays/destinations";
import { ChevronRightCircle, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { ExpandableDate } from "./Expandable-Date";
import {
  constructWhatsappChatAndOpen,
  tripDurationToContext,
  useNavigateAndScroll,
} from "../../lib/common";
import { useState } from "react";

export interface HeroProps {
  heroDestination: Destination;
}

export function Hero({ heroDestination }: HeroProps) {
  const navigateAndScroll = useNavigateAndScroll();
  const [selectedDate, setSelectedDate] = useState<string>(
    heroDestination.next_available_dates[0],
  );
  return (
    <div id="hero" className="flex flex-col flex-1">
      {heroDestination.catchphrases ? (
        heroDestination.catchphrases.map((catchphrase, catchphrase_idx) => (
          <span
            key={`catchphrase-${catchphrase_idx}`}
            className={cn([
              "block leading-[0.8] text-4xl sm:text-5xl md:text-6xl lg:text-[80px]",
              "break-words",
              "text-right md:text-left",
            ])}
            style={{
              color: catchphrase.colorHex ?? "white",
              opacity: catchphrase.opacity ?? 1,
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.7)",
            }}
          >
            {catchphrase.text}
          </span>
        ))
      ) : (
        <>
          <span className="text-[100px] block leading-[0.8] text-white">
            Your Heaven
          </span>
          <span className="text-[100px] block leading-[0.8] text-white opacity-60">
            Our Trip
          </span>
        </>
      )}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 items-end">
        <div className="hidden lg:block">
          <div
            className="flex lg:max-w-[60%] text-white font-light leading-[1.2]"
            style={{ textShadow: "0 4px 12px rgba(0, 0, 0, 0.7)" }}
          >
            {heroDestination.description}
          </div>
        </div>
        <div className="text-white hidden lg:block">
          <div className="flex text-lg gap-2 items-center">
            <MapPin /> {heroDestination.location}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4 bg-black/30 backdrop-blur-sm rounded-xl p-4 text-white">
            <div className="text-xl flex justify-between">
              <div className="font-semibold text-2xl">
                {heroDestination.name}
              </div>
              <ChevronRightCircle
                className="text-white/40 hover:text-white hover:scale-110 transition cursor-pointer"
                onClick={() => {
                  navigateAndScroll(`/destination/${heroDestination.id}`);
                }}
              />
            </div>

            <ExpandableDate
              heroDestination={heroDestination}
              setParentDate={setSelectedDate}
            />

            <div className="flex lg:hidden text-sm gap-2 items-center text-white/60">
              <MapPin /> {heroDestination.location}
            </div>
            <div className="flex flex-row gap-2 justify-between items-end">
              <span>
                Rp {heroDestination.price.toLocaleString()}
                <span className="text-xs opacity-60">/orang</span>
              </span>
              <span className="text-xs">
                {tripDurationToContext(heroDestination.trip_duration)}
              </span>
            </div>
            <Button
              className="w-full"
              variant={"secondary"}
              onClick={() => {
                constructWhatsappChatAndOpen({
                  destination: heroDestination.name,
                  date: selectedDate,
                });
              }}
            >
              Reservasi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
