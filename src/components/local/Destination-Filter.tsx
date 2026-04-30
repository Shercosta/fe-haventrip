import { Funnel, FunnelPlus, FunnelX } from "lucide-react";
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
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

import { getTripDurations, priceRanges } from "../../arrays/destinations";

import { tripDurationToContext } from "@/lib/common";
import type { FilterDestination } from "./Destination";

interface Props {
  openFilter: FilterDestination;
  setOpenFilter: React.Dispatch<React.SetStateAction<FilterDestination>>;

  isOpenFiltered: boolean;

  applyOpenFilter: () => void;
  resetFilter: () => void;
}

export function DestinationFilter({
  openFilter,
  setOpenFilter,
  isOpenFiltered,
  applyOpenFilter,
  resetFilter,
}: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">
          <Funnel />
          Filter
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Filter</AlertDialogTitle>
        </AlertDialogHeader>

        <AlertDialogDescription className="flex flex-col gap-4">
          <p className="font-semibold">Durasi</p>

          <div className="grid grid-flow-col grid-rows-3">
            {getTripDurations().map((duration) => (
              <div className="flex gap-2 m-2" key={duration}>
                <Checkbox
                  id={`filter-duration-${duration}`}
                  checked={openFilter.tripDurations.includes(duration)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setOpenFilter((prev) => ({
                        ...prev,
                        tripDurations: [...prev.tripDurations, duration],
                      }));
                    } else {
                      setOpenFilter((prev) => ({
                        ...prev,
                        tripDurations: prev.tripDurations.filter(
                          (d) => d !== duration,
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
            value={openFilter.priceRange.id.toString()}
            onValueChange={(value) => {
              const selected = priceRanges.find(
                (p) => p.id.toString() === value,
              );

              if (!selected) return;

              setOpenFilter((prev) => ({
                ...prev,
                priceRange: {
                  id: selected.id,
                  min: selected.min,
                  max: selected.max || null,
                },
              }));
            }}
          >
            {priceRanges.map((priceRange) => (
              <div key={priceRange.id} className="flex items-center gap-3">
                <RadioGroupItem
                  value={priceRange.id.toString()}
                  id={`price-${priceRange.id}`}
                />

                <Label htmlFor={`price-${priceRange.id}`}>
                  {priceRange.max
                    ? `${priceRange.min.toLocaleString()} - ${priceRange.max.toLocaleString()}`
                    : `> ${priceRange.min.toLocaleString()}`}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </AlertDialogDescription>

        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>

          {isOpenFiltered && (
            <Button onClick={resetFilter} variant="destructive">
              <FunnelX />
              Reset
            </Button>
          )}

          <AlertDialogAction onClick={applyOpenFilter}>
            <FunnelPlus />
            Terapkan
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
