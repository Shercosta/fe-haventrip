interface Image_Destination {
  url: string;
  highlight: boolean;
}

interface Catchphrase_Destination {
  text: string;
  colorHex?: string;
  opacity?: number;
}

export interface Destination {
  id: number;
  name: string;
  catchphrases?: Catchphrase_Destination[];
  images: Image_Destination[];
  isHero: boolean;
  description: string;
  price: number;
  location: string;
  trip_duration: number; // in days
  next_available_dates: string[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Pulau Pari",
    catchphrases: [
      { text: "Surga" },
      { text: "Tropis", colorHex: "#FFFFFF", opacity: 0.7 },
      { text: "Dekat Jakarta" },
    ],
    images: [
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari.webp",
        highlight: true,
      },
    ],
    isHero: true,
    description:
      "Nikmati pasir putih, laut sebening kristal, dan suasana pulau yang tenang di Pulau Pari. Tempat sempurna untuk healing, snorkeling, dan menikmati sunset romantis hanya beberapa jam dari Jakarta.",
    price: 180_000,
    location: "Kepulauan Seribu",
    trip_duration: 1,
    next_available_dates: ["2026-06-06", "2026-06-07", "2026-06-08"],
  },

  {
    id: 2,
    name: "Pulau Tidung",
    catchphrases: [
      { text: "Jembatan Cinta" },
      { text: "Snorkeling" },
      { text: "Liburan Hemat" },
    ],
    images: [
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari.webp",
        highlight: true,
      },
    ],
    isHero: false,
    description:
      "Eksplor keindahan Pulau Tidung dengan pengalaman snorkeling seru, wisata sepeda santai, dan sunset indah di Jembatan Cinta.",
    price: 350_000,
    location: "Kepulauan Seribu",
    trip_duration: 1.5,
    next_available_dates: ["2026-06-10", "2026-06-14", "2026-06-21"],
  },

  {
    id: 3,
    name: "Pulau Pramuka",
    catchphrases: [
      { text: "Konservasi Penyu" },
      { text: "Island Escape" },
      { text: "Santai" },
    ],
    images: [
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari.webp",
        highlight: true,
      },
    ],
    isHero: false,
    description:
      "Rasakan pengalaman island hopping dan kunjungi pusat konservasi penyu di Pulau Pramuka dengan suasana laut yang menenangkan.",
    price: 420_000,
    location: "Kepulauan Seribu",
    trip_duration: 3,
    next_available_dates: ["2026-06-12", "2026-06-19", "2026-06-26"],
  },

  {
    id: 4,
    name: "Pulau Harapan",
    catchphrases: [
      { text: "Hidden Gem" },
      { text: "Sunrise View" },
      { text: "Healing" },
    ],
    images: [
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari.webp",
        highlight: true,
      },
    ],
    isHero: false,
    description:
      "Nikmati suasana tenang dan pemandangan sunrise spektakuler sambil menjelajahi pulau-pulau kecil di sekitar Pulau Harapan.",
    price: 550_000,
    location: "Kepulauan Seribu",
    trip_duration: 2,
    next_available_dates: ["2026-06-15", "2026-06-22", "2026-06-29"],
  },

  {
    id: 5,
    name: "Pulau Macan",
    catchphrases: [
      { text: "Eco Resort" },
      { text: "Private Escape" },
      { text: "Luxury Island" },
    ],
    images: [
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari.webp",
        highlight: true,
      },
    ],
    isHero: false,
    description:
      "Liburan eksklusif dengan konsep eco-resort yang cocok untuk honeymoon, staycation mewah, dan relaksasi total.",
    price: 1_250_000,
    location: "Kepulauan Seribu",
    trip_duration: 4,
    next_available_dates: ["2026-07-01", "2026-07-08", "2026-07-15"],
  },

  {
    id: 6,
    name: "Pulau Dolphin",
    catchphrases: [
      { text: "Petualangan Laut" },
      { text: "Camping" },
      { text: "Nature Trip" },
    ],
    images: [
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari.webp",
        highlight: true,
      },
    ],
    isHero: false,
    description:
      "Cocok untuk pecinta alam dan petualangan dengan pengalaman camping pinggir pantai dan aktivitas laut yang seru.",
    price: 780_000,
    location: "Kepulauan Seribu",
    trip_duration: 5,
    next_available_dates: ["2026-07-03", "2026-07-10", "2026-07-17"],
  },

  {
    id: 7,
    name: "Pulau Pari",
    catchphrases: [
      { text: "Surga" },
      { text: "Tropis", colorHex: "#FFFFFF", opacity: 0.7 },
      { text: "Dekat Jakarta" },
    ],
    images: [
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pinewood.jpg",
        highlight: true,
      },
    ],
    isHero: true,
    description:
      "Nikmati pasir putih, laut sebening kristal, dan suasana pulau yang tenang di Pulau Pari. Tempat sempurna untuk healing, snorkeling, dan menikmati sunset romantis hanya beberapa jam dari Jakarta.",
    price: 180_000,
    location: "Kepulauan Seribu",
    trip_duration: 1,
    next_available_dates: ["2026-06-06", "2026-06-07", "2026-06-08"],
  },

  {
    id: 8,
    name: "Pulau Tidung",
    catchphrases: [
      { text: "Jembatan Cinta" },
      { text: "Snorkeling" },
      { text: "Liburan Hemat" },
    ],
    images: [
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pinewood.jpg",
        highlight: true,
      },
    ],
    isHero: false,
    description:
      "Eksplor keindahan Pulau Tidung dengan pengalaman snorkeling seru, wisata sepeda santai, dan sunset indah di Jembatan Cinta.",
    price: 350_000,
    location: "Kepulauan Seribu",
    trip_duration: 1.5,
    next_available_dates: ["2026-06-10", "2026-06-14", "2026-06-21"],
  },

  {
    id: 9,
    name: "Pulau Pramuka",
    catchphrases: [
      { text: "Konservasi Penyu" },
      { text: "Island Escape" },
      { text: "Santai" },
    ],
    images: [
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pinewood.jpg",
        highlight: true,
      },
    ],
    isHero: false,
    description:
      "Rasakan pengalaman island hopping dan kunjungi pusat konservasi penyu di Pulau Pramuka dengan suasana laut yang menenangkan.",
    price: 420_000,
    location: "Kepulauan Seribu",
    trip_duration: 3,
    next_available_dates: ["2026-06-12", "2026-06-19", "2026-06-26"],
  },

  {
    id: 10,
    name: "Pulau Harapan",
    catchphrases: [
      { text: "Hidden Gem" },
      { text: "Sunrise View" },
      { text: "Healing" },
    ],
    images: [
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pinewood.jpg",
        highlight: true,
      },
    ],
    isHero: false,
    description:
      "Nikmati suasana tenang dan pemandangan sunrise spektakuler sambil menjelajahi pulau-pulau kecil di sekitar Pulau Harapan.",
    price: 550_000,
    location: "Kepulauan Seribu",
    trip_duration: 2,
    next_available_dates: ["2026-06-15", "2026-06-22", "2026-06-29"],
  },

  {
    id: 11,
    name: "Pulau Macan",
    catchphrases: [
      { text: "Eco Resort" },
      { text: "Private Escape" },
      { text: "Luxury Island" },
    ],
    images: [
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pinewood.jpg",
        highlight: true,
      },
    ],
    isHero: false,
    description:
      "Liburan eksklusif dengan konsep eco-resort yang cocok untuk honeymoon, staycation mewah, dan relaksasi total.",
    price: 1_250_000,
    location: "Kepulauan Seribu",
    trip_duration: 4,
    next_available_dates: ["2026-07-01", "2026-07-08", "2026-07-15"],
  },

  {
    id: 12,
    name: "Pulau Dolphin",
    catchphrases: [
      { text: "Petualangan Laut" },
      { text: "Camping" },
      { text: "Nature Trip" },
    ],
    images: [
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pinewood.jpg",
        highlight: true,
      },
    ],
    isHero: false,
    description:
      "Cocok untuk pecinta alam dan petualangan dengan pengalaman camping pinggir pantai dan aktivitas laut yang seru.",
    price: 780_000,
    location: "Kepulauan Seribu",
    trip_duration: 5,
    next_available_dates: ["2026-07-03", "2026-07-10", "2026-07-17"],
  },
];

export function getTripDurations() {
  const durations = new Set<number>();
  destinations.forEach((destination) => {
    durations.add(destination.trip_duration);
  });

  const arrDuration = Array.from(durations);
  arrDuration.sort((a, b) => a - b);

  return Array.from(arrDuration);
}

export const priceRanges = [
  {
    id: 1,
    min: 100_000,
    max: 250_000,
  },
  {
    id: 2,
    min: 250_000,
    max: 500_000,
  },
  {
    id: 3,
    min: 500_000,
  },
];
