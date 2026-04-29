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
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Pulau Pari",
    catchphrases: [
      {
        text: "Surga",
      },
      {
        text: "Tropis",
        colorHex: "#FFFFFF",
        opacity: 0.7,
      },
      {
        text: "Dekat Jakarta",
      },
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
  },
];
