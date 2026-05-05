import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { PHONENUMBER } from "./constants";

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
  phoneNumber = PHONENUMBER,
  message,
}: WaLinkProps) {
  let link = `https://wa.me/${phoneNumber}`;

  if (message) {
    link += `?text=${encodeURIComponent(message)}`;
  }
  return link;
}

// lib/location-utils.ts

export interface Coordinates {
  latitude: number;
  longitude: number;
}

/**
 * Calculate distance between 2 coordinates in KM
 */
export function calculateDistance(a: Coordinates, b: Coordinates): number {
  const R = 6371; // Earth radius in km

  const dLat = ((b.latitude - a.latitude) * Math.PI) / 180;
  const dLon = ((b.longitude - a.longitude) * Math.PI) / 180;

  const lat1 = (a.latitude * Math.PI) / 180;
  const lat2 = (b.latitude * Math.PI) / 180;

  const x =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);

  const distance = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));

  return R * distance;
}

/**
 * Sort meeting points by closest distance to user
 */
export function sortMeetingPointsByDistance<T extends Coordinates>(
  userLocation: Coordinates,
  meetingPoints: T[],
): T[] {
  return [...meetingPoints].sort((a, b) => {
    const distA = calculateDistance(userLocation, a);
    const distB = calculateDistance(userLocation, b);

    return distA - distB;
  });
}

export function sortMeetingPointsWithDistance<T extends Coordinates>(
  userLocation: Coordinates,
  meetingPoints: T[],
) {
  return meetingPoints
    .map((point) => ({
      ...point,
      distance: calculateDistance(userLocation, point),
    }))
    .sort((a, b) => a.distance - b.distance);
}

export interface Reservation {
  destination?: string;
  date?: string;
  meetingPoint?: string;
  amount?: number;
}

export function constructWhatsappChatAndOpen({
  destination,
  date,
  meetingPoint,
  amount,
}: Reservation) {
  let message = "Hai HavenTrip!\n";
  message += "Saya ingin memesan trip";

  message += ".\n\n";

  if (destination) {
    message += `Destinasi: ${destination}\n`;
  }

  if (date) {
    message += `Tanggal: ${new Date(date).toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })}\n`;
  }

  if (meetingPoint) {
    message += `Meeting Point: ${meetingPoint}\n`;
  }

  if (amount) {
    message += `Jumlah Peserta: ${amount} orang\n`;
  }

  const walink = whatsappLink({ message });
  window.open(walink, "_blank");
}
