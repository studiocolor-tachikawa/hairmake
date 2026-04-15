export type SlideImage = {
  id: string;
  url: string;
  alt: string;
  order: number;
  createdAt: Date;
};

export type GalleryImage = {
  id: string;
  url: string;
  alt: string;
  category: "hair" | "kitsuke";
  order: number;
  createdAt: Date;
};

export type MenuItem = {
  id: string;
  category: "hairmake" | "matsuge" | "kitsuke" | "bridal";
  name: string;
  price: number;
  priceNote?: string;
  description?: string;
  order: number;
};

