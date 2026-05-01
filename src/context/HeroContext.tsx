import { destinations, type Destination } from "@/arrays/destinations";
import { createContext, useState, type ReactNode } from "react";

type HeroContextType = {
  hero: Destination;
  setHero: (hero: Destination) => void;
};

const HeroContext = createContext<HeroContextType | null>(null);

export function HeroProvider({ children }: { children: ReactNode }) {
  const [hero, setHero] = useState<Destination>(
    destinations.filter((destination) => destination.isHero)[0],
  );
  return (
    <HeroContext.Provider value={{ hero, setHero }}>
      {children}
    </HeroContext.Provider>
  );
}

export function useHero() {
  const context = HeroContext;
  if (context === null) {
    throw new Error("useHero must be used within a HeroProvider");
  }
  return context;
}
