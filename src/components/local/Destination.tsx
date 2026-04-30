import { Funnel, FunnelPlus, FunnelX } from "lucide-react";
import {
  destinations,
  getTripDurations,
  priceRanges,
} from "../../arrays/destinations";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { DestinationCard } from "./Destination-Card";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { tripDurationToContext } from "@/lib/common";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useMemo, useState } from "react";

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
    setFilter(openFilter);
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

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={"secondary"}>
                <Funnel />
                Filter
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle onClick={() => console.log(openFilter)}>
                  Filter
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription className="flex flex-col gap-4">
                {/* Duration Filter */}
                <p className="font-semibold">Durasi</p>
                <div className="grid grid-cols-2">
                  {getTripDurations().map((duration) => (
                    <div className="flex gap-2 m-2" key={duration}>
                      <Checkbox
                        name={tripDurationToContext(duration)}
                        id={`filter-duration-${duration}`}
                        checked={openFilter.tripDurations.includes(duration)}
                        onCheckedChange={(e) => {
                          if (e) {
                            setOpenFilter((prev) => ({
                              ...prev,
                              tripDurations: [...prev.tripDurations, duration],
                            }));
                          } else {
                            setOpenFilter((prev) => ({
                              ...prev,
                              tripDurations: prev.tripDurations.filter(
                                (tripDuration) => tripDuration !== duration,
                              ),
                            }));
                          }
                        }}
                      />
                      <Label htmlFor={`filter-duration-${duration}`}>
                        {tripDurationToContext(duration)}
                      </Label>
                    </div>
                  ))}
                </div>

                <p className="font-semibold">Harga</p>
                <RadioGroup
                  className="w-fit"
                  value={openFilter.priceRange.id.toString()}
                  onValueChange={(value) => {
                    const selected = priceRanges.find(
                      (p) => p.id.toString() === value,
                    );

                    if (selected) {
                      setOpenFilter((prev) => ({
                        ...prev,
                        priceRange: {
                          id: selected.id,
                          min: selected.min,
                          max: selected.max || null,
                        },
                      }));
                    }
                  }}
                >
                  {priceRanges.map((priceRange, priceRange_idx) => (
                    <div
                      key={priceRange_idx}
                      className="flex items-center gap-3"
                    >
                      <RadioGroupItem
                        value={priceRange.id.toString()}
                        id={`r${priceRange_idx}`}
                      />

                      <Label htmlFor={`r${priceRange_idx}`}>
                        {priceRange.max
                          ? `${priceRange.min.toLocaleString()} - ${priceRange.max.toLocaleString()}`
                          : `> ${priceRange.min.toLocaleString()}`}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel size={"default"} variant={"outline"}>
                  Batal
                </AlertDialogCancel>
                <Button onClick={resetFilter} variant={"destructive"}>
                  <FunnelX /> Reset
                </Button>
                <AlertDialogAction
                  onClick={applyOpenFilter}
                  size={"default"}
                  variant={"default"}
                >
                  <FunnelPlus /> Terapkan
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
