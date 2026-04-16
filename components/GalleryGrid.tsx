"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import type { GalleryImageItem } from "@/lib/microcms";

type Props = {
  title: string;
  images?: GalleryImageItem[];
  fallbackImages?: GalleryImageItem[];
};

export default function GalleryGrid({ title, images, fallbackImages = [] }: Props) {
  const displayImages = images && images.length > 0 ? images : fallbackImages;
  const [selected, setSelected] = useState<GalleryImageItem | null>(null);
  const [visible, setVisible] = useState(false);

  const open = useCallback((img: GalleryImageItem) => {
    setSelected(img);
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setSelected(null), 700);
  }, []);

  return (
    <>
      <div className="mb-12">
        <h3 className="text-xs tracking-widest text-gray-500 mb-4 uppercase">
          {title}
        </h3>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {displayImages.map((img) => (
            <button
              key={img.id}
              onClick={() => open(img)}
              className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 relative rounded overflow-hidden bg-gray-100 cursor-pointer"
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={close}
        >
          <div
            className="absolute inset-0 bg-black transition-opacity ease-out"
            style={{
              opacity: visible ? 0.7 : 0,
              transitionDuration: "700ms",
            }}
          />
          <div
            className="relative z-10 w-[95%] max-w-3xl aspect-square transition-all ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.4)",
              transitionDuration: "700ms",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.url}
              alt={selected.alt}
              fill
              className="object-contain rounded"
              sizes="95vw"
            />
          </div>
          <button
            onClick={close}
            className="absolute top-6 right-6 z-20 text-white text-3xl leading-none hover:opacity-70 transition-opacity"
            aria-label="閉じる"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
