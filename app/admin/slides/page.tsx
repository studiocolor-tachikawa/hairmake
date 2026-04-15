"use client";

import { useState, useRef } from "react";

type Slide = { id: string; url: string; alt: string; order: number };

const mockSlides: Slide[] = [
  { id: "1", url: "/images/placeholder-salon.svg", alt: "店内画像", order: 0 },
  { id: "2", url: "/images/placeholder-style.svg", alt: "スタイル写真", order: 1 },
  { id: "3", url: "/images/placeholder-school.svg", alt: "スクール写真", order: 2 },
];

export default function AdminSlidesPage() {
  const [slides, setSlides] = useState<Slide[]>(mockSlides);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleDelete = (id: string) => {
    if (!confirm("削除しますか？")) return;
    setSlides((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-medium mb-1">スライドショー管理</h1>
          <p className="text-xs text-gray-500">トップページのヒーロースライドを管理します</p>
        </div>
        <button
          onClick={() => fileRef.current?.click()}
          className="bg-black text-white text-xs px-4 py-2 hover:bg-gray-800 transition-colors"
        >
          + 画像を追加
        </button>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={() => {}} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {slides.map((slide) => (
          <div key={slide.id} className="bg-white border border-gray-200 overflow-hidden">
            <div className="relative aspect-video bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.url} alt={slide.alt} className="w-full h-full object-cover" />
            </div>
            <div className="p-3 flex items-center justify-between">
              <span className="text-xs text-gray-500">{slide.alt}</span>
              <button
                onClick={() => handleDelete(slide.id)}
                className="text-xs text-red-500 hover:text-red-700 transition-colors"
              >
                削除
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
