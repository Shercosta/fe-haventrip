import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export function tripDurationToContext(trip_duration: number) {
  switch (trip_duration) {
    case 1:
      return "One-Day Trip";
    case 1.5:
      return "One-Day Trip - Start Malam";
    default:
      return `${trip_duration} Hari ${trip_duration - 1} Malam`;
  }
}

export function ellipseText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + "...";
  }
  return text;
}

export function defaultDateShow(dateString: string) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    weekday: "short",
    day: "numeric",
    month: "long",
  });
}

export function idNavigator(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
}

export function useNavigateAndScroll() {
  const navigate = useNavigate();

  return (path: string) => {
    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}

export interface WaLinkProps {
  phoneNumber?: string;
  message?: string;
}

export function whatsappLink({
  phoneNumber = "+6281818885271",
  message,
}: WaLinkProps) {
  let link = `https://wa.me/${phoneNumber}`;

  if (message) {
    link += `?text=${message}`;
  }
  return link;
}

export const getUserLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log("Lat:", latitude);
      console.log("Lng:", longitude);
    },
    (error) => {
      console.error(error);

      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("Location permission denied");
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location unavailable");
          break;
        case error.TIMEOUT:
          alert("Location request timed out");
          break;
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
    },
  );
};

export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) {
  const R = 6371; // km

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}
