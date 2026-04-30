import { Funnel } from "lucide-react";
import { destinations } from "../../arrays/destinations";
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

export function Destination() {
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
          <Input placeholder="Cari destinasi" />

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={"secondary"}>
                <Funnel />
                Filter
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Filter</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
                <div>Something to be put here</div>
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel size={"default"} variant={"outline"}>
                  Batal
                </AlertDialogCancel>
                <AlertDialogAction size={"default"} variant={"default"}>
                  Terapkan
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
        {[
          ...destinations,
          ...destinations,
          ...destinations,
          ...destinations,
        ].map((destination) => (
          <DestinationCard key={destination.id} {...destination} />
        ))}
      </div>
    </section>
  );
}
