import { useEffect, useState } from "react";
import { useUserLocation } from "@/lib/user-location";
import { useUserLocationContext } from "@/context/UserLocationContext";

export function UserLocationRequest() {
  const [show, setShow] = useState(false);

  const { location, error, loading, requestLocation } = useUserLocation();
  const {
    location: globalLocation,
    setLocation,
    hasRequested,
    setHasRequested,
  } = useUserLocationContext();

  // Show only if never requested before
  useEffect(() => {
    if (hasRequested || globalLocation) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasRequested, globalLocation]);

  // When user successfully gives location
  useEffect(() => {
    if (location) {
      setLocation(location);
      setHasRequested(true);
      setShow(false);
    }
  }, [location, setLocation, setHasRequested]);

  // If user clicks "Not now", we still mark as requested (so it won't show again)
  const handleDismiss = () => {
    setHasRequested(true);
    setShow(false);
  };

  const handleAllow = async () => {
    setHasRequested(true);
    requestLocation();
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
      <div className="rounded-2xl border border-border bg-background/90 backdrop-blur-md shadow-xl p-4">
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold text-sm">Gunakan lokasi?</p>
            <p className="text-xs text-muted-foreground mt-1">
              Kami menggunakan lokasi untuk menemukan meeting point trip
              terdekat dari anda.
            </p>
          </div>

          <div className="flex items-center justify-between gap-2">
            <button
              onClick={handleDismiss}
              className="text-xs text-muted-foreground hover:underline"
            >
              Tidak
            </button>

            <button
              onClick={handleAllow}
              disabled={loading}
              className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-medium"
            >
              {loading ? "Memproses..." : "Gunakan lokasi"}
            </button>
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}
