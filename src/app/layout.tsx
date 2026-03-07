import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
// @ts-expect-error Next.js のグローバルCSS副作用importをTypeScript上で一時的に許可
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
  title: "Shot Bar Royal",
  description: "Shot Bar Royal - 西葛西の高級ショットバー",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${crimsonText.variable} ${inter.variable} font-sans`}>
        <LanguageProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
