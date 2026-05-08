interface Image_Destination {
  url: string;
  highlight: boolean;
}

interface Catchphrase_Destination {
  text: string;
  colorHex?: string;
  opacity?: number;
}

export interface Itinerary_Time_Destination {
  time: string;
  label: string;
}

export interface Itinerary_Day_Destination {
  day: number;
  times: Itinerary_Time_Destination[];
}

export interface Meeting_Point_Destination {
  name: string;
  latitude: number;
  longitude: number;
  google_map_url?: string;
}

export const availableMeetingPoints = {
  PlazaSemanggi: {
    name: "Plaza Semanggi / Lippo Mall Nusantara",
    latitude: -6.219522877119389,
    longitude: 106.81457713868421,
    google_map_url: "https://maps.app.goo.gl/R7Y2oWmGkzgKDUkC6",
  },

  MuaraKamal: {
    name: "Dermaga Muara Kamal",
    latitude: -6.0912380286810714,
    longitude: 106.72564659265802,
    google_map_url: "https://maps.app.goo.gl/fVbJ65k6AZCpjd3j7",
  },
} as const satisfies Record<string, Meeting_Point_Destination>;

export type AvailableMeetingPoint =
  (typeof availableMeetingPoints)[keyof typeof availableMeetingPoints];

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
  facilities_included: string[];
  facilities_excluded: string[];
  itineraries: Itinerary_Day_Destination[];
  meeting_points: AvailableMeetingPoint[];
}

const dfi = [
  "Kapal Feri PP Pelabuhan Kaliadem – Pulau Harapan",
  "Asuransi penyebrangan",
  "Homestay AC",
  "Makan 3x",
  "Barbeque",
  "Air mineral",
  "Kapal penjelajah pulau",
  "Alat Snorkeling",
  "Pelampung",
  "Asuransi",
  "Dokumentasi underwater",
  "Tour Guide",
  "P3K",
];

const dfe = [
  "Tiket Penangkaran Penyu",
  "Kebutuhan dan obat-obatan pribadi",
  "Tip guide dan crew",
];

const di: Itinerary_Day_Destination[] = [
  {
    day: 1,
    times: [
      {
        time: "07.00",
        label: "Penjelajah Pulau",
      },
      {
        time: "12.00",
        label: "Makan Siang",
      },
      {
        time: "14.00",
        label: "Snorkeling",
      },
    ],
  },
  {
    day: 2,
    times: [
      {
        time: "08.00",
        label: "Penangkaran Penyu",
      },
      {
        time: "13.00",
        label: "Coffee Break",
      },
      {
        time: "15.00",
        label: "Island Hopping",
      },
    ],
  },
];

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
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari/1.jpg",
        highlight: false,
      },
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari/2.jpg",
        highlight: false,
      },
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari/3.jpg",
        highlight: false,
      },
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari/4.jpg",
        highlight: false,
      },
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari/5.jpg",
        highlight: false,
      },
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari/6.jpg",
        highlight: false,
      },
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari/7.jpg",
        highlight: false,
      },
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari/8.jpg",
        highlight: false,
      },
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-pari/9.jpg",
        highlight: false,
      },
    ],
    isHero: true,
    description:
      "Nikmati pasir putih, laut sebening kristal, dan suasana pulau yang tenang di Pulau Pari. Tempat sempurna untuk healing, snorkeling, dan menikmati sunset romantis hanya beberapa jam dari Jakarta.",
    price: 180_000,
    location: "Kepulauan Seribu",
    trip_duration: 1,
    next_available_dates: ["2026-06-06", "2026-06-20"],
    facilities_included: [
      "Snorkeling",
      "Kapal pulang pergi",
      "Tiket pulau pari",
      "Tiket pantai pasir perawan",
      "Mineral water",
      "Tour guide",
      "Dokumentasi",
      "Retribusi pulau",
    ],
    facilities_excluded: [
      "Jetski",
      "Canoe",
      "Bentor antar jemput",
      "Banana boat",
      "Explore mangrove",
    ],
    itineraries: [
      {
        day: 1,
        times: [
          {
            time: "06.30",
            label: "Meeting point",
          },
          {
            time: "07.00",
            label: "Naik kapal menuju pulau pari",
          },
          {
            time: "10.00",
            label: "Sampai di Pulau Pari",
          },
          {
            time: "10.30",
            label: "Snorkeling dan Aktivitas Air Lainnya",
          },
          {
            time: "12.00",
            label: "Ishoma",
          },
          {
            time: "12.30",
            label: "Acara bebas di Pantai Pasir Perawan",
          },
          {
            time: "14.00",
            label: "Ganti baju dan persiapan pulang",
          },
          {
            time: "15.00",
            label: "Naik kapal menuju pulang",
          },
          {
            time: "17.30",
            label: "Sunset di Kapal",
          },
          {
            time: "18.00",
            label: "Sampai Jakarta dan Trip Selesai",
          },
        ],
      },
    ],
    meeting_points: [availableMeetingPoints.MuaraKamal],
  },
];

export const destinations_old: Destination[] = [
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
    facilities_included: dfi,
    facilities_excluded: dfe,
    itineraries: di,
    meeting_points: [
      availableMeetingPoints.PlazaSemanggi,
      availableMeetingPoints.MuaraKamal,
    ],
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
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-tidung.webp",
        highlight: true,
      },
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-tidung.webp",
        highlight: false,
      },
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-tidung.webp",
        highlight: false,
      },
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-tidung.webp",
        highlight: false,
      },
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-tidung.webp",
        highlight: false,
      },
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-tidung.webp",
        highlight: false,
      },
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pulau-tidung.webp",
        highlight: false,
      },
    ],
    isHero: false,
    description:
      "Eksplor keindahan Pulau Tidung dengan pengalaman snorkeling seru, wisata sepeda santai, dan sunset indah di Jembatan Cinta.",
    price: 350_000,
    location: "Kepulauan Seribu",
    trip_duration: 1.5,
    next_available_dates: ["2026-06-10", "2026-06-14", "2026-06-21"],
    facilities_included: dfi,
    facilities_excluded: dfe,
    itineraries: di,
    meeting_points: [
      availableMeetingPoints.PlazaSemanggi,
      availableMeetingPoints.MuaraKamal,
    ],
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
        url: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2024/11/14/183416ac-d6e6-4235-8225-79c9ba77cc22-1731562692774-1a98bca823ab1f3b15019d3ca9610c11.jpg",
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
    facilities_included: dfi,
    facilities_excluded: dfe,
    itineraries: di,
    meeting_points: [
      availableMeetingPoints.PlazaSemanggi,
      availableMeetingPoints.MuaraKamal,
    ],
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
        url: "https://www.visitpulaupari.com/wp-content/uploads/2017/05/wisata-pulau-harapan.jpg",
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
    facilities_included: dfi,
    facilities_excluded: dfe,
    itineraries: di,
    meeting_points: [
      availableMeetingPoints.PlazaSemanggi,
      availableMeetingPoints.MuaraKamal,
    ],
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
        url: "https://wisatapulauseribu.co.id/wp-content/uploads/2021/12/Menikmati-Liburan-dengan-Tenang-di-Pulau-Macan-yang-Indah.jpg",
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
    facilities_included: dfi,
    facilities_excluded: dfe,
    itineraries: di,
    meeting_points: [
      availableMeetingPoints.PlazaSemanggi,
      availableMeetingPoints.MuaraKamal,
    ],
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
        url: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01hqcw8m931066616g5j6tfqxt.jpg",
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
    facilities_included: dfi,
    facilities_excluded: dfe,
    itineraries: di,
    meeting_points: [
      availableMeetingPoints.PlazaSemanggi,
      availableMeetingPoints.MuaraKamal,
    ],
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

export function getDestinationById(id: number) {
  const destination = destinations.find((destination) => destination.id === id);
  return destination;
}
