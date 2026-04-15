import Image from "next/image";
import Link from "next/link";
import { getBlogList } from "@/lib/microcms";

export const revalidate = 60;

export default async function BlogPage() {
  const { contents: posts } = await getBlogList();

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase text-center">Blog</p>
      <h1 className="text-2xl font-medium mb-12 tracking-wide text-center">ブログ</h1>

      {posts.length === 0 ? (
        <p className="text-sm text-gray-400 text-center">記事がまだありません</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group block">
              <div className="relative w-full aspect-square overflow-hidden bg-gray-100 mb-3">
                {post.eyecatch ? (
                  <Image
                    src={post.eyecatch.url}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">
                    No Image
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-400 mb-1">
                {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
              <p className="text-sm leading-relaxed group-hover:opacity-60 transition-opacity">
                {post.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
