import { createContext, useContext, useEffect, useState } from "react";

interface UserLocation {
  latitude: number;
  longitude: number;
}

interface UserLocationContextType {
  location: UserLocation | null;
  setLocation: (loc: UserLocation) => void;
  hasRequested: boolean;
  setHasRequested: (val: boolean) => void;
}

const UserLocationContext = createContext<UserLocationContextType | null>(null);

export function UserLocationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [location, setLocation] = useState<UserLocation | null>(null);
  const [hasRequested, setHasRequested] = useState(false);

  // Load persisted state
  useEffect(() => {
    const stored = localStorage.getItem("user_location");
    const requested = localStorage.getItem("location_requested");

    if (stored) {
      setLocation(JSON.parse(stored));
    }

    if (requested === "true") {
      setHasRequested(true);
    }
  }, []);

  // Persist location
  useEffect(() => {
    if (location) {
      localStorage.setItem("user_location", JSON.stringify(location));
    }
  }, [location]);

  // Persist request state
  useEffect(() => {
    localStorage.setItem("location_requested", String(hasRequested));
  }, [hasRequested]);

  // Automatically watch location after permission granted
  useEffect(() => {
    if (!hasRequested) return;

    if (!navigator.geolocation) return;

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (err) => {
        console.error("Location watch error:", err);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 10000,
      },
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [hasRequested]);

  return (
    <UserLocationContext.Provider
      value={{
        location,
        setLocation,
        hasRequested,
        setHasRequested,
      }}
    >
      {children}
    </UserLocationContext.Provider>
  );
}

export function useUserLocationContext() {
  const ctx = useContext(UserLocationContext);

  if (!ctx) {
    throw new Error(
      "useUserLocationContext must be used inside LocationProvider",
    );
  }

  return ctx;
}
