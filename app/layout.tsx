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
  title: "Studio color | 東京都立川市 ヘアセット＆フォト",
  description:
    "立川で評判のヘアセットサロン。ヘアセット・メイク・着付けを¥3,300〜。イベントだけでなく日常使いにも。ヘアセットをもっと身近に♡",
  openGraph: {
    title: "Studio color | 東京都立川市 ヘアセット＆フォト",
    description: "立川で評判のヘアセットサロン。ヘアセット¥3,300〜。",
    locale: "ja_JP",
    type: "website",
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
