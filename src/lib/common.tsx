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
