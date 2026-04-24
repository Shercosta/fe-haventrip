import { type Destination } from "../../arrays/destinations";
import { ChevronRightCircle, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

interface HeroProps {
  heroDestination: Destination;
}

export function Hero({ heroDestination }: HeroProps) {
  return (
    <div className="flex flex-col flex-1">
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
          <div className="flex lg:max-w-[60%] text-white">
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
              <div>{heroDestination.name}</div>
              <ChevronRightCircle className="text-white/40" />
            </div>
            <div className="flex lg:hidden text-lg gap-2 items-center text-white/60">
              <MapPin /> {heroDestination.location}
            </div>
            <span className="block">
              Rp {heroDestination.price.toLocaleString()}
            </span>
            <Button className="w-full" variant={"secondary"}>
              Reservasi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
