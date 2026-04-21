import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import GalleryGrid from "@/components/GalleryGrid";
import ScrollReveal from "@/components/ScrollReveal";
import LetterReveal from "@/components/LetterReveal";
import LineReveal from "@/components/LineReveal";
import Link from "next/link";
import {
  getBlogList,
  getHairGalleryList,
  getKitsukeGalleryList,
} from "@/lib/microcms";

export const revalidate = 60;

export default async function Home() {
  const { contents: posts } = await getBlogList(3);
  const hairGalleryImages = await getHairGalleryList(12);
  const kitsukeGalleryImages = await getKitsukeGalleryList(12);
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Catchcopy */}
      <ScrollReveal>
        <section className="max-w-2xl mx-auto px-4 py-16 text-center">
          <h1 className="text-xl sm:text-2xl font-bold mb-6 leading-relaxed tracking-wide">
            立川で評判のヘアセットサロン！
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-loose mb-2">
            イベント先だけではなく日常にも取り組みやすい
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-loose mb-2">
            ヘアセットを提案いたします。
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-loose mb-8">
            ヘアセットをもっと身近に♡
          </p>
          <div className="inline-block border border-black px-8 py-3">
            <span className="text-sm tracking-widest">
              ヘアセット　¥3,300〜
            </span>
          </div>
        </section>
      </ScrollReveal>

      <LineReveal className="px-4" />

      {/* Hot Pepper Banner */}
      <ScrollReveal>
        <section className="max-w-2xl mx-auto px-4 py-12 text-center">
          <a
            href="https://beauty.hotpepper.jp/slnH000411289/?vos=cpahpbprosmaf131118003&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcARSn_RleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAacuiYpahhEixmuS_d-7o6oPbIzO6rpVtU8EKZkUcHZ6S7JvQGYorKhVv0hD4Q_aem_j_7jN8_O6_DVHqZLjUazFA"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <span className="text-sm text-pink-300 tracking-wide">
              ホットペッパーでもっとお得に♡
            </span>
            <span className="text-xs text-gray-400 underline underline-offset-2">
              ホットペッパービューティーで予約する →
            </span>
          </a>
        </section>
      </ScrollReveal>

      <LineReveal className="px-4" />

      {/* Menu Preview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <LetterReveal
            text="Menu"
            tag="h2"
            className="text-xs tracking-widest text-gray-400 mb-12 uppercase text-center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Hairmake Price */}
            <ScrollReveal delay={0}>
              <Link
                href="/hairmake-price"
                className="group block border border-gray-200 bg-white p-8 hover:border-black transition-colors"
              >
                <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase">
                  Hairmake
                </p>
                <h3 className="text-lg font-medium mb-3">Price</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  ヘアセット・メイク・着付け
                  <br />
                  ブライダルヘアメイク
                  <br />
                  立川なら当店におまかせ！
                </p>
                <span className="text-xs tracking-widest group-hover:underline">
                  詳しく見る →
                </span>
              </Link>
            </ScrollReveal>

            {/* まつげ Price */}
            <ScrollReveal delay={0.1}>
              <Link
                href="/matsuge-price"
                className="group block border border-gray-200 bg-white p-8 hover:border-black transition-colors"
              >
                <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase">
                  Eyelash
                </p>
                <h3 className="text-lg font-medium mb-3">まつげ Price</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  まつげメニューのご提供に向けて
                  <br />
                  安心してご利用いただける体制を整えるため
                  <br />
                  現在オープン準備中です。
                </p>
                <span className="text-xs tracking-widest group-hover:underline">
                  詳しく見る →
                </span>
              </Link>
            </ScrollReveal>

            {/* School */}
            <ScrollReveal delay={0.2} className="sm:col-span-2">
              <Link
                href="https://hairmake-school.studio-color.jp"
                className="group block border border-gray-200 bg-white p-8 hover:border-black transition-colors"
              >
                <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase">
                  Hair Set
                </p>
                <h3 className="text-lg font-medium mb-3">School</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  東京都立川市でヘアセットの資格が取れる！
                  <br />
                  ヘアセットの最高資格取り組み中
                </p>
                <span className="text-xs tracking-widest group-hover:underline">
                  詳しく見る →
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery / Catalog */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-4 py-16">
          <LetterReveal
            text="Catalog & Gallery"
            tag="h2"
            className="text-xs tracking-widest text-gray-400 mb-10 uppercase text-center"
          />
          <GalleryGrid title="Hair" images={hairGalleryImages} />
          <GalleryGrid title="着付け" images={kitsukeGalleryImages} />
        </section>
      </ScrollReveal>

      <LineReveal className="px-4" />

      {/* Blog */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <LetterReveal
          text="Blog"
          className="text-xs tracking-widest text-gray-400 mb-2 uppercase text-center"
        />
        <ScrollReveal>
          <h2 className="text-xl font-medium mb-10 tracking-wide text-center">
            ブログ
          </h2>
        </ScrollReveal>
        {posts.length === 0 ? (
          <p className="text-sm text-gray-400 text-center mb-10">
            記事がまだありません
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            {posts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.1}>
                <Link href={`/blog/${post.id}`} className="group block">
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
              </ScrollReveal>
            ))}
          </div>
        )}
        <ScrollReveal>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-black px-8 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              もっと見る →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <LineReveal className="px-4" />

      {/* Shop Info */}
      <ScrollReveal>
        <section className="max-w-3xl mx-auto px-4 py-16">
          <LetterReveal
            text="Shop Info"
            className="text-xs tracking-widest text-gray-400 mb-2 uppercase text-center"
          />
          <h2 className="text-xl font-medium mb-12 tracking-wide text-center">
            店舗情報
          </h2>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-100">
              {[
                { label: "サロン名", value: "Studio Color（スタジオカラー）" },
                {
                  label: "Address",
                  value: "東京都立川市錦町2-1-26 Nビルディング401",
                },
                { label: "TEL", value: "042-595-8124" },
                { label: "OPEN", value: "10:00〜22:00" },
                { label: "定休日", value: "年末年始" },
              ].map(({ label, value }) => (
                <tr key={label}>
                  <th className="py-4 pr-6 text-left text-xs tracking-wider text-gray-400 font-normal w-32 align-top">
                    {label}
                  </th>
                  <td className="py-4 text-gray-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8 text-center">
            <a
              href="https://maps.google.com/?q=東京都立川市錦町2-1-26+Nビルディング401"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black px-8 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              Google Mapで詳しく見る →
            </a>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
