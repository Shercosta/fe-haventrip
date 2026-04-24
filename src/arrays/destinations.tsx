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
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Evergreen Pine Family Lodge",
    catchphrases: [
      {
        text: "Nature's",
      },
      {
        text: "Perfect",
        colorHex: "#FFFFFF",
        opacity: 0.6,
      },
      {
        text: "Hideaways",
      },
    ],
    images: [
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pinewood.jpg",
        highlight: true,
      },
    ],
    isHero: true,
  },
];
