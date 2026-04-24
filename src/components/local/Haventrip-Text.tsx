import { cn } from "../../lib/common";

interface HavenTripTextProps {
  classNameBoth?: string;
  classNameHaven?: string;
  classNameTrip?: string;
}

export function HavenTripText({
  classNameBoth = "",
  classNameHaven = "",
  classNameTrip = "",
}: HavenTripTextProps) {
  return (
    <div className="flex">
      <span className={cn(["text-[#013760]", classNameBoth, classNameHaven])}>
        Haven
      </span>
      <span className={cn(["text-[#C08D52]", classNameBoth, classNameTrip])}>
        Trip
      </span>
    </div>
  );
}
