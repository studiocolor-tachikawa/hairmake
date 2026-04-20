"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { SlideImage } from "@/types";

const placeholderSlides: SlideImage[] = [
  {
    id: "0",
    url: "/mv/mv1.webp",
    alt: "メインビジュアル",
    order: 0,
    createdAt: new Date(),
  },
  {
    id: "1",
    url: "/mv/mv3.jpg",
    alt: "メインビジュアル1",
    order: 1,
    createdAt: new Date(),
  },
  {
    id: "2",
    url: "/mv/mv4.jpg",
    alt: "メインビジュアル2",
    order: 2,
    createdAt: new Date(),
  },
];

type Props = {
  slides?: SlideImage[];
};

export default function HeroSlider({ slides = placeholderSlides }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide.url}
            alt={slide.alt}
            fill
            className="object-contain"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-6" : "bg-white/50"}`}
            aria-label={`スライド${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
