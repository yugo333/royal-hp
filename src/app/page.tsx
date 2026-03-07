"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/Loading";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[rgb(22,33,39)]" />,
});

type Language = "ja" | "en";

export default function Home() {
  const [language, setLanguage] = useState<Language>("ja");
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // ローディング時間を設定（シーン初期化時間を考慮）
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4秒のローディング時間（長めに設定）

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 全画面オーバーレイローディング */}
      {isLoading && (
        <div className="fixed inset-0 z-50">
          <Loading />
        </div>
      )}

      <div
        className="min-h-screen relative w-full overflow-hidden"
        style={{ backgroundColor: "rgb(22, 33, 39)" }}
      >
        {/* Logo Name - Left Top */}
        <div className="absolute top-3 left-6 md:top-4 md:left-8 z-20">
          <Image
            src="/logo/logoName.png"
            alt="Shot Bar Royal Logo Name"
            width={300}
            height={70}
            className="w-auto h-16 md:h-20 lg:h-24 drop-shadow-lg"
            priority
          />
        </div>

        {/* Language Switch */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
          <div className="flex space-x-3">
            <button
              onClick={() => setLanguage("ja")}
              className={`px-3 py-2 md:px-4 md:py-2 rounded-md text-sm md:text-base font-primary font-semibold transition-all duration-300 ${
                language === "ja"
                  ? "bg-[rgb(207,157,123)] text-[rgb(22,33,39)]"
                  : "text-[rgb(207,157,123)] border-2 border-[rgb(207,157,123)] hover:bg-[rgb(207,157,123)] hover:text-[rgb(22,33,39)]"
              }`}
            >
              日本語
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-2 md:px-4 md:py-2 rounded-md text-sm md:text-base font-primary font-semibold transition-all duration-300 ${
                language === "en"
                  ? "bg-[rgb(207,157,123)] text-[rgb(22,33,39)]"
                  : "text-[rgb(207,157,123)] border-2 border-[rgb(207,157,123)] hover:bg-[rgb(207,157,123)] hover:text-[rgb(22,33,39)]"
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Left Side Text */}
        <div className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 md:left-[-120px] z-20">
          <div className="transform -rotate-90">
            <h2 className="text-[rgb(207,157,123)] font-primary font-semibold tracking-[0.4em] text-xl md:text-1xl lg:text-2xl whitespace-nowrap drop-shadow-lg">
              SHOT BAR ROYAL
            </h2>
          </div>
        </div>

        {/* Right Side Text */}
        <div className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 md:right-[-70px] z-20">
          <div className="transform rotate-90">
            <h2 className="text-[rgb(207,157,123)] font-primary font-semibold tracking-[0.4em] text-xl md:text-1xl lg:text-2xl whitespace-nowrap drop-shadow-lg">
              NISHIKASAI
            </h2>
          </div>
        </div>

        {/* Instagram Icon - Left Bottom */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20">
          <Link
            href="https://www.instagram.com/shot_bar_royal/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 transition-all duration-300 transform hover:scale-110"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                fill="rgb(207,157,123)"
              />
            </svg>
          </Link>
        </div>

        {/* Phone Icon - Above Instagram */}
        <div className="absolute bottom-16 left-4 md:bottom-20 md:left-6 z-20">
          <Link
            href="tel:+81-3-XXXX-XXXX"
            className="block p-2 transition-all duration-300 transform hover:scale-110"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                fill="rgb(207,157,123)"
              />
            </svg>
          </Link>
        </div>

        {/* Menu Icon - Right Bottom */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block p-2 transition-all duration-300 transform hover:scale-110"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="rgb(207,157,123)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="absolute bottom-20 right-6 md:bottom-24 md:right-8 bg-[rgb(22,33,39)] border-2 border-[rgb(207,157,123)] rounded-xl p-6 min-w-[180px] shadow-2xl">
              <nav className="space-y-4">
                <Link
                  href="/"
                  className="block text-[rgb(207,157,123)] hover:text-white transition-colors font-primary font-semibold tracking-wider text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/menu"
                  className="block text-[rgb(207,157,123)] hover:text-white transition-colors font-primary font-semibold tracking-wider text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  MENU
                </Link>
                <Link
                  href="/staff"
                  className="block text-[rgb(207,157,123)] hover:text-white transition-colors font-primary font-semibold tracking-wider text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  STAFF
                </Link>
                <Link
                  href="/access"
                  className="block text-[rgb(207,157,123)] hover:text-white transition-colors font-primary font-semibold tracking-wider text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ACCESS
                </Link>
              </nav>
            </div>
          </div>
        )}

        {/* 3D Background Canvas */}
        <div className="absolute inset-0 z-0">
          <Suspense
            fallback={<div className="w-full h-full bg-[rgb(22,33,39)]" />}
          >
            <Scene />
          </Suspense>
        </div>

        {/* Logo and Content Overlay */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center">
            {/* Logo */}
            <div>
              <Image
                src="/logo/ROYAL.png"
                alt="Shot Bar Royal Logo"
                width={600}
                height={300}
                className="mx-auto drop-shadow-2xl w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
