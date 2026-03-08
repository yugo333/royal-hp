import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";
import LoadingProvider from "@/components/LoadingProvider";
import { LanguageProvider } from "@/components/LanguageContext";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shot Bar Royal | 西葛西のショットバー・音楽バー",
  description:
    "西葛西駅徒歩1分のショットバー「Shot Bar Royal」。お酒と音楽を楽しむ大人の隠れ家。バーテンダーが作る本格カクテル、ウイスキー、ワインをご堪能ください。テーブルチャージなし。",
  keywords: [
    "西葛西",
    "BAR",
    "バー",
    "お酒",
    "葛西",
    "shot bar",
    "ショットバー",
    "音楽",
    "music",
    "カクテル",
    "ウイスキー",
    "ワイン",
    "江戸川区",
    "Shot Bar Royal",
    "バーテンダー",
    "深夜営業",
    "international",
    "インターナショナル",
  ],
  openGraph: {
    title: "Shot Bar Royal | 西葛西のショットバー・音楽バー",
    description: "西葛西駅徒歩1分。お酒と音楽を楽しむ大人の隠れ家バー。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shot Bar Royal | 西葛西のショットバー",
    description: "西葛西駅徒歩1分。お酒と音楽を楽しむ大人の隠れ家バー。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    name: "Shot Bar Royal",
    image: "https://royal-hp.vercel.app/logo/ROYAL.png",
    "@id": "https://royal-hp.vercel.app",
    url: "https://royal-hp.vercel.app",
    telephone: "+81-3-XXXX-XXXX",
    priceRange: "¥3000-¥5,000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "西葛西3-15-10 6東栄ビル",
      addressLocality: "江戸川区",
      addressRegion: "東京都",
      postalCode: "134-0088",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.6645,
      longitude: 139.8686,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "18:00",
        closes: "05:00",
      },
    ],
    servesCuisine: "Cocktails & Bar Food",
    acceptsReservations: "True",
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${crimsonText.variable} ${inter.variable} font-sans`}>
        <LanguageProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
