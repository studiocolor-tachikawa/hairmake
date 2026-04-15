"use client";

import { useState } from "react";

type MenuItemData = {
  id: string;
  category: "hairmake" | "matsuge";
  name: string;
  price: string;
};

const initialItems: MenuItemData[] = [
  { id: "1", category: "hairmake", name: "ヘアセット（シンプル）", price: "¥3,300〜" },
  { id: "2", category: "hairmake", name: "フルメイク", price: "¥4,400〜" },
  { id: "3", category: "matsuge", name: "まつげエクステ 80本", price: "¥4,400〜" },
];

export default function AdminMenuPage() {
  const [items, setItems] = useState<MenuItemData[]>(initialItems);
  const [activeTab, setActiveTab] = useState<"hairmake" | "matsuge">("hairmake");
  const [form, setForm] = useState({ name: "", price: "" });
  const [editing, setEditing] = useState<string | null>(null);

  const filtered = items.filter((item) => item.category === activeTab);

  const handleAdd = () => {
    if (!form.name || !form.price) return;
    const newItem: MenuItemData = {
      id: Date.now().toString(),
      category: activeTab,
      name: form.name,
      price: form.price,
    };
    setItems((prev) => [...prev, newItem]);
    setForm({ name: "", price: "" });
  };

  const handleDelete = (id: string) => {
    if (!confirm("削除しますか？")) return;
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1 className="text-xl font-medium mb-1">料金メニュー管理</h1>
      <p className="text-xs text-gray-500 mb-8">メニューと料金を編集します</p>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {(["hairmake", "matsuge"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-xs tracking-wide transition-colors ${
              activeTab === tab ? "border-b-2 border-black font-medium" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab === "hairmake" ? "Hairmake" : "まつげ"}
          </button>
        ))}
      </div>

      {/* Add Form */}
      <div className="bg-white border border-gray-200 p-4 mb-6 flex gap-3 items-end">
        <div className="flex-1">
          <label className="text-xs text-gray-500 block mb-1">メニュー名</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black"
            placeholder="例：ヘアセット（アップスタイル）"
          />
        </div>
        <div className="w-32">
          <label className="text-xs text-gray-500 block mb-1">料金</label>
          <input
            type="text"
            value={form.price}
            onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
            className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-black"
            placeholder="¥3,300〜"
          />
        </div>
        <button
          onClick={handleAdd}
          className="bg-black text-white text-xs px-4 py-2.5 hover:bg-gray-800 transition-colors whitespace-nowrap"
        >
          追加
        </button>
      </div>

      {/* List */}
      <ul className="divide-y divide-gray-100">
        {filtered.map((item) => (
          <li key={item.id} className="bg-white flex items-center justify-between px-4 py-3">
            <span className="text-sm">{item.name}</span>
            <div className="flex items-center gap-4">
              <span className="text-sm tabular-nums text-gray-600">{item.price}</span>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-xs text-red-500 hover:text-red-700"
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
