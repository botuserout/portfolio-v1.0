export interface PhotoItem {
  id: string;
  title: string;
  category: "Cinematic" | "Street" | "Portrait" | "Urban" | "Experimental";
  year: string;
  camera: string;
  lens: string;
  settings: string;
  image: string;
  aspectRatio: "aspect-[4/5]" | "aspect-[16/9]" | "aspect-[3/4]" | "aspect-square";
  offset?: string; // CSS margin offset for asymmetric layout
}

export const PHOTOGRAPHY_ITEMS: PhotoItem[] = [
  {
    id: "kinetic-rider",
    title: "KINETIC RIDER // CYBER",
    category: "Cinematic",
    year: "2026",
    camera: "Sony A7IV",
    lens: "35mm f/1.4 GM",
    settings: "ISO 800 · f/1.8 · 1/500s",
    image: "/images/photography/herosection.jpg",
    aspectRatio: "aspect-[16/9]",
    offset: "mt-0",
  },
  {
    id: "urban-silhouette",
    title: "URBAN SILHOUETTE",
    category: "Urban",
    year: "2025",
    camera: "Fujifilm X-T5",
    lens: "23mm f/2",
    settings: "ISO 400 · f/2.8 · 1/1000s",
    image: "/images/photography/only_remove_the_background_of__1.jpg",
    aspectRatio: "aspect-[4/5]",
    offset: "md:mt-16",
  },
  {
    id: "neon-metropolis",
    title: "NEON METROPOLIS",
    category: "Street",
    year: "2026",
    camera: "Sony A7IV",
    lens: "50mm f/1.2 GM",
    settings: "ISO 1600 · f/1.4 · 1/250s",
    image: "/images/photography/convert_the_image_into_the_16__4.jpg",
    aspectRatio: "aspect-[16/9]",
    offset: "md:-mt-8",
  },
  {
    id: "helmet-portrait",
    title: "ANONYMOUS PERSPECTIVE",
    category: "Portrait",
    year: "2025",
    camera: "Sony A7IV",
    lens: "85mm f/1.4 GM",
    settings: "ISO 200 · f/2.0 · 1/2000s",
    image: "/images/photography/remove_the_background_and_not__1.jpg",
    aspectRatio: "aspect-[3/4]",
    offset: "md:mt-12",
  },
  {
    id: "velocity-frames",
    title: "VELOCITY IN MOTION",
    category: "Experimental",
    year: "2026",
    camera: "Sony A7IV",
    lens: "24-70mm f/2.8",
    settings: "ISO 100 · f/8.0 · 1/60s",
    image: "/images/photography/herosection.jpg",
    aspectRatio: "aspect-[4/5]",
    offset: "md:-mt-12",
  },
  {
    id: "night-luminescence",
    title: "NIGHT LUMINESCENCE",
    category: "Street",
    year: "2025",
    camera: "Fujifilm X100V",
    lens: "23mm f/2",
    settings: "ISO 1200 · f/2.0 · 1/125s",
    image: "/images/photography/convert_the_image_into_the_16__4.jpg",
    aspectRatio: "aspect-square",
    offset: "md:mt-8",
  },
];
