"use client";

import { useState, useRef } from "react";

type GalleryItem = { id: string; url: string; alt: string; category: "hair" | "kitsuke" };

const mockImages: GalleryItem[] = [
  { id: "h1", url: "/images/placeholder-hair.svg", alt: "ヘアサンプル1", category: "hair" },
  { id: "h2", url: "/images/placeholder-hair.svg", alt: "ヘアサンプル2", category: "hair" },
  { id: "k1", url: "/images/placeholder-kitsuke.svg", alt: "着付けサンプル1", category: "kitsuke" },
];

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryItem[]>(mockImages);
  const [activeTab, setActiveTab] = useState<"hair" | "kitsuke">("hair");
  const fileRef = useRef<HTMLInputElement>(null);

  const filtered = images.filter((img) => img.category === activeTab);

  const handleDelete = (id: string) => {
    if (!confirm("削除しますか？")) return;
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-medium mb-1">ギャラリー管理</h1>
          <p className="text-xs text-gray-500">hair / 着付けの写真を管理します</p>
        </div>
        <button
          onClick={() => fileRef.current?.click()}
          className="bg-black text-white text-xs px-4 py-2 hover:bg-gray-800 transition-colors"
        >
          + 画像を追加
        </button>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={() => {}} />
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {(["hair", "kitsuke"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-xs tracking-wide transition-colors ${
              activeTab === tab
                ? "border-b-2 border-black font-medium"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab === "hair" ? "Hair" : "着付け"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {filtered.map((img) => (
          <div key={img.id} className="bg-white border border-gray-200 overflow-hidden">
            <div className="aspect-square bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
            </div>
            <div className="p-2 flex items-center justify-between">
              <span className="text-xs text-gray-500 truncate">{img.alt}</span>
              <button
                onClick={() => handleDelete(img.id)}
                className="text-xs text-red-500 hover:text-red-700 ml-2 flex-shrink-0"
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
