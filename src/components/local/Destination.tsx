import { FunnelX } from "lucide-react";
import { destinations } from "../../arrays/destinations";
import { Button } from "../ui/button";
import { DestinationCard } from "./Destination-Card";
import { Input } from "../ui/input";
import { useMemo, useState } from "react";
import { DestinationFilter } from "./Destination-Filter";

export interface FilterDestination {
  search: string;
  tripDurations: number[];
  priceRange: {
    id: number;
    min: number;
    max: number | null;
  };
}

export function Destination() {
  const [filter, setFilter] = useState<FilterDestination>({
    search: "",
    tripDurations: [],
    priceRange: {
      id: 0,
      min: 0,
      max: null,
    },
  });

  const [openFilter, setOpenFilter] = useState<FilterDestination>(filter);

  const isFiltered = useMemo(() => {
    if (filter.search) return true;
    if (filter.tripDurations.length) return true;
    if (filter.priceRange.min) return true; // max is not required
    if (filter.priceRange.min !== 0) return true;
    return false;
  }, [filter]);

  const isOpenFiltered = useMemo(() => {
    if (openFilter.search) return true;
    if (openFilter.tripDurations.length) return true;
    if (openFilter.priceRange.min) return true; // max is not required
    if (openFilter.priceRange.min !== 0) return true;
    return false;
  }, [openFilter]);

  const filteredDestinations = useMemo(() => {
    let initialDestinations = destinations;
    if (filter.search) {
      initialDestinations = initialDestinations.filter((destination) => {
        if (
          destination.name
            .toLowerCase()
            .includes(filter.search.toLowerCase()) ||
          destination.location
            .toLowerCase()
            .includes(filter.search.toLowerCase()) ||
          destination.description
            .toLowerCase()
            .includes(filter.search.toLowerCase())
        ) {
          return destination;
        }
        return null;
      });
    }

    if (filter.tripDurations.length) {
      initialDestinations = initialDestinations.filter((destination) => {
        if (filter.tripDurations.includes(destination.trip_duration)) {
          return destination;
        }
        return null;
      });
    }

    if (filter.priceRange.min) {
      initialDestinations = initialDestinations.filter((destination) => {
        if (
          destination.price >= filter.priceRange.min &&
          (!filter.priceRange.max || destination.price <= filter.priceRange.max)
        ) {
          return destination;
        }
        return null;
      });
    }

    return initialDestinations;
  }, [filter]);

  function resetFilter() {
    const resetValue = {
      search: "",
      tripDurations: [],
      priceRange: {
        id: 0,
        min: 0,
        max: null,
      },
    };
    setFilter(resetValue);
    setOpenFilter(resetValue);
  }

  function applyOpenFilter() {
    setFilter({
      ...openFilter,
      search: filter.search,
    });
  }

  return (
    <section
      id="destination"
      className="w-full px-4 md:px-10 lg:px-16 py-20 bg-[#f8fbff]"
    >
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

        {/* Filters */}
        <div className="flex gap-2">
          <Input
            value={filter.search}
            onChange={(e) => {
              setFilter((prev) => ({
                ...prev,
                search: e.target.value,
              }));
            }}
            placeholder="Cari destinasi"
          />

          {isFiltered && (
            <Button onClick={resetFilter} variant={"destructive"}>
              <FunnelX />
            </Button>
          )}

          <DestinationFilter
            openFilter={openFilter}
            setOpenFilter={setOpenFilter}
            isOpenFiltered={isOpenFiltered}
            applyOpenFilter={applyOpenFilter}
            resetFilter={resetFilter}
          />
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
        {[...filteredDestinations].map((destination) => (
          <DestinationCard key={destination.id} {...destination} />
        ))}
      </div>
    </section>
  );
}
