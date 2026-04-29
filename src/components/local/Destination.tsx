import { useMemo, useState } from "react";
import { destinations } from "../../arrays/destinations";

export function Destination() {
  const [selectedLocation, setSelectedLocation] = useState("all");

  const locations = useMemo(() => {
    return ["all", ...new Set(destinations.map((d) => d.location))];
  }, []);

  const filteredDestinations = useMemo(() => {
    if (selectedLocation === "all") return destinations;

    return destinations.filter((d) => d.location === selectedLocation);
  }, [selectedLocation]);

  return (
    <section className="w-full px-4 md:px-10 lg:px-16 py-20 bg-[#f8fbff]">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
            Explore Paradise
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">
            Destinasi Favorit
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600 text-base md:text-lg">
            Temukan pulau tropis, pantai eksotis, dan pengalaman liburan yang
            tak terlupakan bersama HavenTrip.
          </p>
        </div>

        {/* Responsive Filter */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Mobile Select */}
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="
              sm:hidden
              w-full
              rounded-2xl
              border border-slate-200
              bg-white
              px-4 py-3
              text-slate-700
              outline-none
            "
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location === "all" ? "Semua Destinasi" : location}
              </option>
            ))}
          </select>

          {/* Desktop Pills */}
          <div className="hidden sm:flex flex-wrap gap-3">
            {locations.map((location) => {
              const isActive = selectedLocation === location;

              return (
                <button
                  key={location}
                  onClick={() => setSelectedLocation(location)}
                  className={`
                    px-5 py-3
                    rounded-full
                    transition-all
                    border

                    ${
                      isActive
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
                    }
                  `}
                >
                  {location === "all" ? "Semua" : location}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-3
          gap-4 md:gap-8
        "
      >
        {[
          ...filteredDestinations,
          ...filteredDestinations,
          ...filteredDestinations,

          ...filteredDestinations,
        ].map((destination) => (
          <div
            key={destination.id}
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
            <div className="absolute top-4 left-4">
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
            </div>

            {/* Content */}
            <div
              className="
                absolute bottom-0 left-0 right-0

                p-4 md:p-8

                text-white
              "
            >
              <div className="flex items-center gap-2 text-white/80 mb-2 md:mb-3 text-xs md:text-base">
                <span>📍</span>
                <span>{destination.location}</span>
              </div>

              <h3 className="text-lg md:text-3xl font-semibold mb-2 md:mb-4">
                {destination.name}
              </h3>

              <p
                className="
                  hidden md:block
                  text-white/80
                  leading-relaxed
                  line-clamp-3
                  mb-6
                "
              >
                {destination.description}
              </p>

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
                    md:px-5 md:py-3

                    rounded-full

                    bg-white
                    text-slate-900

                    text-xs md:text-base
                    font-medium

                    hover:bg-slate-100
                    transition-all
                  "
                >
                  Explore →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
