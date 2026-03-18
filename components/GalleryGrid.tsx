import Image from "next/image";
import type { GalleryImage } from "@/types";

const hairImages: GalleryImage[] = [
  { id: "hair-0", url: "/catalog/catalog1.png", alt: "ヘアスタイル1", category: "hair", order: 0, createdAt: new Date() },
  { id: "hair-1", url: "/catalog/catalog2.png", alt: "ヘアスタイル2", category: "hair", order: 1, createdAt: new Date() },
  { id: "hair-2", url: "/catalog/catalog3.png", alt: "ヘアスタイル3", category: "hair", order: 2, createdAt: new Date() },
  { id: "hair-3", url: "/catalog/catalog4.png", alt: "ヘアスタイル4", category: "hair", order: 3, createdAt: new Date() },
];

const kitsukeImages: GalleryImage[] = [
  { id: "kitsuke-0", url: "/kitsuke/kitsuke1.png", alt: "着付け1", category: "kitsuke", order: 0, createdAt: new Date() },
  { id: "kitsuke-1", url: "/kitsuke/kitsuke2.png", alt: "着付け2", category: "kitsuke", order: 1, createdAt: new Date() },
  { id: "kitsuke-2", url: "/kitsuke/kitsuke3.png", alt: "着付け3", category: "kitsuke", order: 2, createdAt: new Date() },
  { id: "kitsuke-3", url: "/kitsuke/kitsuke4.png", alt: "着付け4", category: "kitsuke", order: 3, createdAt: new Date() },
];

const placeholderImages = (category: string): GalleryImage[] => {
  if (category === "hair") return hairImages;
  if (category === "kitsuke") return kitsukeImages;
  return [];
};

type Props = {
  title: string;
  images?: GalleryImage[];
  category: "hair" | "kitsuke";
};

export default function GalleryGrid({ title, images, category }: Props) {
  const displayImages = images && images.length > 0 ? images : placeholderImages(category);

  return (
    <div className="mb-12">
      <h3 className="text-xs tracking-widest text-gray-500 mb-4 uppercase">{title}</h3>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {displayImages.map((img) => (
          <div
            key={img.id}
            className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 relative rounded overflow-hidden bg-gray-100"
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
