import Image from "next/image";
import Link from "next/link";

// microCMS連携後に差し替え
const placeholderPosts = [
  { id: "1", title: "ヘアセットのコツ〜普段使いに♡", date: "2026.03.01", thumbnail: "/images/placeholder-hair.svg" },
  { id: "2", title: "成人式ヘアセット事例まとめ", date: "2026.02.15", thumbnail: "/images/placeholder-hair.svg" },
  { id: "3", title: "春のトレンドスタイルご紹介", date: "2026.02.01", thumbnail: "/images/placeholder-hair.svg" },
  { id: "4", title: "ブライダルヘアメイクのご案内", date: "2026.01.20", thumbnail: "/images/placeholder-hair.svg" },
  { id: "5", title: "まつげエクステ最新メニュー", date: "2026.01.10", thumbnail: "/images/placeholder-hair.svg" },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase text-center">Blog</p>
      <h1 className="text-2xl font-medium mb-12 tracking-wide text-center">ブログ</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {placeholderPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="group block">
            <div className="relative w-full aspect-square overflow-hidden bg-gray-100 mb-3">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-xs text-gray-400 mb-1">{post.date}</p>
            <p className="text-sm leading-relaxed group-hover:opacity-60 transition-opacity">{post.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
