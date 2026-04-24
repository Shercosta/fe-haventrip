interface Image_Destination {
  url: string;
  highlight: boolean;
}

export interface Destination {
  id: number;
  name: string;
  images: Image_Destination[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Evergreen Pine Family Lodge",
    images: [
      {
        url: "https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pinewood.jpg",
        highlight: true,
      },
    ],
  },
];
