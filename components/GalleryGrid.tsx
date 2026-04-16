import Image from "next/image";
import type { GalleryImageItem } from "@/lib/microcms";

type Props = {
  title: string;
  images?: GalleryImageItem[];
  fallbackImages?: GalleryImageItem[];
};

export default function GalleryGrid({ title, images, fallbackImages = [] }: Props) {
  const displayImages = images && images.length > 0 ? images : fallbackImages;

  return (
    <div className="mb-12">
      <h3 className="text-xs tracking-widest text-gray-500 mb-4 uppercase">
        {title}
      </h3>
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
