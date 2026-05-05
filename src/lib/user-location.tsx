import { useState } from "react";

interface UserLocation {
  latitude: number;
  longitude: number;
}

export function useUserLocation() {
  const [location, setLocation] = useState<UserLocation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log("Pass 1");
        setLoading(false);
      },
      (err) => {
        setLoading(false);

        console.log("Pass 2");
        switch (err.code) {
          case err.PERMISSION_DENIED:
            setError("Permission denied");
            break;
          case err.POSITION_UNAVAILABLE:
            setError("Location unavailable");
            break;
          case err.TIMEOUT:
            setError("Request timed out");
            break;
          default:
            setError("Unknown error");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      },
    );
  };

  return { location, error, loading, requestLocation };
}
