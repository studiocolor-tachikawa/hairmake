import type { Metadata } from "next";
import { Noto_Sans_JP, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReservationButton from "@/components/ReservationButton";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  preload: false,
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: {
    default:
      "立川のヘアメイク・ヘアセットならスタジオカラー | Studio color | 東京都立川市",
    template: "%s | スタジオカラー（立川・ヘアメイク）",
  },
  description:
    "東京都立川市でヘアメイク・ヘアセットをお探しならスタジオカラー（Studio color）。ヘアセット・メイク・着付けは¥3,300〜。イベント・ブライダルから日常まで。立川駅周辺で通いやすいサロンです。",
  keywords: [
    "スタジオカラー",
    "Studio color",
    "studio color",
    "立川 ヘアメイク",
    "立川 ヘアセット",
    "立川市 ヘアメイク",
    "東京都立川 ヘアメイク",
    "立川 着付け",
    "立川 ブライダル ヘアメイク",
    "ヘアセット サロン",
    "まつげ",
    "ヘアメイクスクール",
  ],
  openGraph: {
    title:
      "立川のヘアメイク・ヘアセットならスタジオカラー | Studio color",
    description:
      "東京都立川市のヘアメイク・ヘアセットサロン。ヘアセット・メイク・着付けを¥3,300〜。スタジオカラー（Studio color）におまかせください。",
    locale: "ja_JP",
    type: "website",
    siteName: "スタジオカラー（Studio color）",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "スタジオカラー（Studio color）",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "立川のヘアメイク・ヘアセット | スタジオカラー",
    description:
      "東京都立川市でヘアメイク・ヘアセットならスタジオカラー（Studio color）。着付け・ブライダルも。¥3,300〜。",
    images: ["/logo/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${jost.variable}`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <ReservationButton />
      </body>
    </html>
  );
}
