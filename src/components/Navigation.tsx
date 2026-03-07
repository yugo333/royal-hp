"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Language = "ja" | "en";

interface NavigationProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Navigation({ language, setLanguage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* Logo - Left Top */}
      <div className="fixed top-3 left-6 md:top-4 md:left-8 z-20">
        <Link href="/">
          <Image
            src="/logo/logoName.png"
            alt="Shot Bar Royal Logo Name"
            width={300}
            height={70}
            className="w-auto h-16 md:h-20 lg:h-24 drop-shadow-lg hover:opacity-80 transition-opacity"
            priority
          />
        </Link>
      </div>

      {/* Language Toggle - Right Top */}
      <div className="fixed top-8 right-6 md:top-10 md:right-8 z-20">
        <div className="flex space-x-1 bg-[rgb(22,33,39)]/80 backdrop-blur-sm rounded-full p-1 border border-[rgb(207,157,123)]/30">
          <button
            onClick={() => setLanguage("ja")}
            className={`px-3 py-1 rounded-full text-sm font-secondary font-medium transition-all duration-300 ${
              language === "ja"
                ? "bg-[rgb(207,157,123)] text-white"
                : "text-[rgb(207,157,123)] hover:bg-[rgb(207,157,123)]/20"
            }`}
          >
            JA
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded-full text-sm font-secondary font-medium transition-all duration-300 ${
              language === "en"
                ? "bg-[rgb(207,157,123)] text-white"
                : "text-[rgb(207,157,123)] hover:bg-[rgb(207,157,123)]/20"
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Menu Icon - Right Bottom */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-20">
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="absolute bottom-20 right-6 md:bottom-24 md:right-8 bg-[rgb(22,33,39)] border-2 border-[rgb(207,157,123)] rounded-xl p-6 min-w-[180px] shadow-2xl">
            <nav className="space-y-4">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push("/");
                }}
                className={`block w-full text-left font-primary font-semibold tracking-wider text-lg transition-colors ${
                  pathname === "/"
                    ? "text-white bg-[rgb(207,157,123)] px-3 py-1 rounded"
                    : "text-[rgb(207,157,123)] hover:text-white"
                }`}
              >
                HOME
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push("/menu");
                }}
                className={`block w-full text-left font-primary font-semibold tracking-wider text-lg transition-colors ${
                  pathname === "/menu"
                    ? "text-white bg-[rgb(207,157,123)] px-3 py-1 rounded"
                    : "text-[rgb(207,157,123)] hover:text-white"
                }`}
              >
                MENU
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push("/staff");
                }}
                className={`block w-full text-left font-primary font-semibold tracking-wider text-lg transition-colors ${
                  pathname === "/staff"
                    ? "text-white bg-[rgb(207,157,123)] px-3 py-1 rounded"
                    : "text-[rgb(207,157,123)] hover:text-white"
                }`}
              >
                STAFF
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push("/access");
                }}
                className={`block w-full text-left font-primary font-semibold tracking-wider text-lg transition-colors ${
                  pathname === "/access"
                    ? "text-white bg-[rgb(207,157,123)] px-3 py-1 rounded"
                    : "text-[rgb(207,157,123)] hover:text-white"
                }`}
              >
                ACCESS
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
