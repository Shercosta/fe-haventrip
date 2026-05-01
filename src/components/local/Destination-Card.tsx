import { CircleChevronRight } from "lucide-react";
import type { Destination } from "../../arrays/destinations";
import {
  defaultDateShow,
  idNavigator,
  tripDurationToContext,
  useNavigateAndScroll,
} from "../../lib/common";
import { useHero } from "@/context/HeroContext";

export function DestinationCard(destination: Destination) {
  const { setHero } = useHero();
  const naviscroll = useNavigateAndScroll();

  return (
    <div
      className="
              group
              relative
              overflow-hidden
              rounded-[24px]
              md:rounded-[32px]

              h-[320px]
              md:h-[520px]

              cursor-pointer

              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            "
      onClick={() => {
        setHero(destination);
        idNavigator("hero");
      }}
    >
      {/* Background Image */}
      <img
        src={destination.images[0].url}
        alt={destination.name}
        className="
                absolute inset-0
                w-full h-full
                object-cover

                group-hover:scale-110
                transition-transform
                duration-700
              "
      />

      {/* Overlay */}
      <div
        className="
                absolute inset-0
                bg-gradient-to-t
                from-black/90
                via-black/20
                to-transparent
              "
      />

      {/* Badge */}
      {/* <div className="absolute top-4 left-4">
        <div
          className="
                  backdrop-blur-md
                  bg-white/15
                  border border-white/20
                  text-white

                  px-3 py-2
                  md:px-4

                  rounded-full

                  text-xs md:text-sm
                "
        >
          ✨ Popular
        </div>
      </div> */}

      {/* Content */}
      <div
        className="
                absolute bottom-0 left-0 right-0

                p-4 md:p-8

                text-white
              "
      >
        <div className="hidden lg:flex items-center gap-2 text-white/80 mb-2 md:mb-3 text-xs md:text-base">
          <span>📍</span>
          <span>{destination.location}</span>
        </div>

        <h3 className="text-lg md:text-3xl font-semibold mb-2 md:mb-4">
          {destination.name}
        </h3>

        {/* <p
          className="
                  hidden md:block
                  text-white/80
                  leading-relaxed
                  line-clamp-3
                  mb-6
                "
        >
          {ellipseText(destination.description, 100)}
        </p> */}

        <span className="text-xs lg:text-lg">
          {tripDurationToContext(destination.trip_duration)} |{" "}
          {defaultDateShow(destination.next_available_dates[0])}
        </span>

        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-white/60 text-xs md:text-sm">Mulai dari</p>

            <h4 className="text-lg md:text-2xl font-bold">
              Rp {destination.price.toLocaleString("id-ID")}
            </h4>
          </div>

          <button
            className="
                    px-3 py-2
                    rounded-full
                    bg-white
                    text-slate-900
                    text-xs md:text-base
                    font-medium
                    hover:bg-slate-100
                    hover:scale-105
                    transition-all
                  "
            onClick={(e) => {
              e.stopPropagation();
              naviscroll(`/destination/${destination.id}`);
            }}
          >
            <CircleChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
