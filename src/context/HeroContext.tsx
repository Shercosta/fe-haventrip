import { destinations, type Destination } from "@/arrays/destinations";
import { createContext, useContext, useState, type ReactNode } from "react";

type HeroContextType = {
  hero: Destination;
  setHero: (hero: Destination) => void;
};

const HeroContext = createContext<HeroContextType | null>(null);

const HERO_LOCAL_STORAGE_KEY = "HERO_HAVEN_TRIP_LAST_DESTINATION";
const HERO_EXPIRY_MS = 1000 * 60 * 60; // 1 hour

function getDefaultHero() {
  return destinations.find((destination) => destination.isHero)!;
}

function getHeroFromLocalStorage() {
  const stored = localStorage.getItem(HERO_LOCAL_STORAGE_KEY);

  if (!stored) {
    return getDefaultHero();
  }

  try {
    const parsed = JSON.parse(stored);

    // expired
    if (Date.now() > parsed.expiresAt) {
      localStorage.removeItem(HERO_LOCAL_STORAGE_KEY);
      return getDefaultHero();
    }

    const hero = destinations.find(
      (destination) => destination.id === parsed.heroId,
    );

    return hero || getDefaultHero();
  } catch {
    localStorage.removeItem(HERO_LOCAL_STORAGE_KEY);
    return getDefaultHero();
  }
}

function setHeroToLocalStorage(hero: Destination) {
  localStorage.setItem(
    HERO_LOCAL_STORAGE_KEY,
    JSON.stringify({
      heroId: hero.id,
      expiresAt: Date.now() + HERO_EXPIRY_MS,
    }),
  );
}

export function HeroProvider({ children }: { children: ReactNode }) {
  const [hero, xHero] = useState<Destination>(getHeroFromLocalStorage);

  function setHero(hero: Destination) {
    xHero(hero);
    setHeroToLocalStorage(hero);
  }

  return (
    <HeroContext.Provider value={{ hero, setHero }}>
      {children}
    </HeroContext.Provider>
  );
}

export function useHero() {
  const context = useContext(HeroContext);

  if (context === null) {
    throw new Error("useHero must be used within a HeroProvider");
  }

  return context;
}
