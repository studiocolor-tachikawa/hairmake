import HeroSlider from "@/components/HeroSlider";
import GalleryGrid from "@/components/GalleryGrid";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Catchcopy */}
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
          <span className="text-sm tracking-widest">ヘアセット　¥3,300〜</span>
        </div>
      </section>

      <hr className="border-gray-200 max-w-6xl mx-auto px-4" />

      {/* Hot Pepper Banner */}
      <section className="max-w-2xl mx-auto px-4 py-12 text-center">
        <a
          href="https://beauty.hotpepper.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-col items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <span className="text-sm text-pink-300 tracking-wide">ホットペッパーでもっとお得に♡</span>
          <span className="text-xs text-gray-400 underline underline-offset-2">
            ホットペッパービューティーで予約する →
          </span>
        </a>
      </section>

      <hr className="border-gray-200 max-w-6xl mx-auto px-4" />

      {/* Menu Preview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xs tracking-widest text-gray-400 mb-12 uppercase text-center">Menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Hairmake Price */}
            <Link
              href="/hairmake-price"
              className="group block border border-gray-200 bg-white p-8 hover:border-black transition-colors"
            >
              <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase">Hairmake</p>
              <h3 className="text-lg font-medium mb-3">Price</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                ヘアセット・メイク・着付け<br />
                ブライダルヘアメイク<br />
                立川なら絶対にガンバできます
              </p>
              <span className="text-xs tracking-widest group-hover:underline">詳しく見る →</span>
            </Link>

            {/* まつげ Price */}
            <Link
              href="/matsuge-price"
              className="group block border border-gray-200 bg-white p-8 hover:border-black transition-colors"
            >
              <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase">Eyelash</p>
              <h3 className="text-lg font-medium mb-3">まつげ Price</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                まつげエクステ・まつげパーマ<br />
                各種メニューをご用意しています
              </p>
              <span className="text-xs tracking-widest group-hover:underline">詳しく見る →</span>
            </Link>

            {/* School */}
            <Link
              href="/school"
              className="group block border border-gray-200 bg-white p-8 hover:border-black transition-colors sm:col-span-2"
            >
              <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase">Hair Set</p>
              <h3 className="text-lg font-medium mb-3">School</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                東京都立川市でヘアセットの資格が取れる！<br />
                ヘアセットの最高資格取り組み中 — OPEN準備中♡
              </p>
              <span className="text-xs tracking-widest group-hover:underline">詳しく見る →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery / Catalog */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-xs tracking-widest text-gray-400 mb-10 uppercase text-center">
          Catalog &amp; Gallery
        </h2>
        <GalleryGrid title="Hair" category="hair" />
        <GalleryGrid title="着付け" category="kitsuke" />
      </section>

      <hr className="border-gray-200 max-w-6xl mx-auto px-4" />

      {/* Shop Info */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase text-center">Shop Info</p>
        <h2 className="text-xl font-medium mb-12 tracking-wide text-center">店舗情報</h2>
        <table className="w-full text-sm">
          <tbody className="divide-y divide-gray-100">
            {[
              { label: "サロン名", value: "Studio Color（スタジオカラー）" },
              { label: "Address", value: "東京都立川市錦町2-1-26 Nビルディング401" },
              { label: "TEL", value: "042-595-8087" },
              { label: "OPEN", value: "10:00〜23:00" },
              { label: "定休日", value: "年始のみ" },
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
    </>
  );
}
