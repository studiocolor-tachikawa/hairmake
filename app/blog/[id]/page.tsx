import Image from "next/image";
import Link from "next/link";
import { getBlogDetail, getBlogList } from "@/lib/microcms";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const { contents } = await getBlogList();
  return contents.map((post) => ({ id: post.id }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;

  let post;
  try {
    post = await getBlogDetail(id);
  } catch {
    notFound();
  }
  if (!post) notFound();

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <Link href="/blog" className="text-xs text-gray-400 hover:text-gray-600 mb-8 inline-block">
        ← ブログ一覧
      </Link>
      <p className="text-xs text-gray-400 mb-4">
        {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </p>
      <h1 className="text-xl font-medium mb-8 leading-relaxed">{post.title}</h1>

      {post.eyecatch && (
        <div className="relative w-full aspect-video overflow-hidden bg-gray-100 mb-10">
          <Image
            src={post.eyecatch.url}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div
        className="prose prose-sm max-w-none text-gray-600 leading-loose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
