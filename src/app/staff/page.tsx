"use client";

import { useState } from "react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

type Language = "ja" | "en";

interface StaffMember {
  name: string;
  image: string;
  title: {
    ja: string;
    en: string;
  };
}

export default function StaffPage() {
  const [language, setLanguage] = useState<Language>("ja");
  const [currentStaff, setCurrentStaff] = useState(0);

  const staffMembers: StaffMember[] = [
    {
      name: "TERU",
      image: "/Staff/Teru.png",
      title: {
        ja: "バーテンダー",
        en: "Bartender",
      },
    },
    {
      name: "SOLOMON",
      image: "/Staff/Solo.png",
      title: {
        ja: "バーテンダー",
        en: "Bartender",
      },
    },
  ];

  const nextStaff = () => {
    setCurrentStaff((prev) => (prev + 1) % staffMembers.length);
  };

  const prevStaff = () => {
    setCurrentStaff(
      (prev) => (prev - 1 + staffMembers.length) % staffMembers.length,
    );
  };

  return (
    <PageLayout language={language} setLanguage={setLanguage}>
      <div
        className="min-h-screen w-full relative overflow-hidden"
        style={{ backgroundColor: "rgb(22, 33, 39)" }}
      >
        {/* Main Content - 添付デザイン風 */}
        <div className="h-screen flex items-center justify-center relative">
          {/* スタッフ写真 - 背景全体 */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src={staffMembers[currentStaff].image}
              alt={staffMembers[currentStaff].name}
              fill
              className="object-cover grayscale object-right md:object-center"
              sizes="100vw"
              priority
            />
            {/* デスクトップ用グラデーション */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background: `linear-gradient(to right, 
                  rgba(22, 33, 39, 0.9) 0%, 
                  rgba(22, 33, 39, 0.85) 8%, 
                  rgba(22, 33, 39, 0.8) 15%, 
                  rgba(22, 33, 39, 0.7) 22%, 
                  rgba(22, 33, 39, 0.6) 28%, 
                  rgba(22, 33, 39, 0.5) 35%, 
                  rgba(0, 0, 0, 0.4) 40%, 
                  rgba(0, 0, 0, 0.6) 44%, 
                  rgba(0, 0, 0, 0.8) 46%, 
                  rgba(0, 0, 0, 1.0) 48%, 
                  rgba(0, 0, 0, 1.0) 52%, 
                  rgba(0, 0, 0, 0.8) 54%, 
                  rgba(0, 0, 0, 0.6) 56%, 
                  rgba(0, 0, 0, 0.4) 60%, 
                  rgba(22, 33, 39, 0.5) 65%, 
                  rgba(22, 33, 39, 0.6) 72%, 
                  rgba(22, 33, 39, 0.5) 78%, 
                  rgba(22, 33, 39, 0.4) 84%, 
                  rgba(22, 33, 39, 0.2) 90%, 
                  rgba(22, 33, 39, 0.1) 95%, 
                  transparent 100%)`,
              }}
            />
            {/* モバイル用グラデーション */}
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background: `linear-gradient(to top, 
                  rgba(22, 33, 39, 1.0) 0%, 
                  rgba(22, 33, 39, 0.8) 30%, 
                  rgba(22, 33, 39, 0.3) 60%, 
                  transparent 100%)`,
              }}
            />
          </div>

          {/* テキストコンテンツ - 左側 */}
          <div className="absolute left-6 md:left-12 lg:left-20 top-1/2 transform -translate-y-1/2 z-10 max-w-lg">
            <h1 className="text-[rgb(207,157,123)] font-primary text-7xl md:text-8xl lg:text-9xl font-bold mb-4 drop-shadow-2xl">
              {staffMembers[currentStaff].name}
            </h1>
            <div className="w-32 h-1 bg-[rgb(207,157,123)] mb-6"></div>
            <p className="text-[rgb(207,157,123)] font-secondary text-xl md:text-2xl mb-8 opacity-80">
              {language === "ja"
                ? staffMembers[currentStaff].title.ja
                : staffMembers[currentStaff].title.en}
            </p>
            <p className="text-[rgb(207,157,123)] font-secondary text-lg leading-relaxed opacity-70">
              {language === "ja"
                ? "最高のひとときをお約束します"
                : "Promising you the finest moments"}
            </p>
          </div>

          {/* ナビゲーションドット */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {staffMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStaff(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStaff
                    ? "bg-[rgb(207,157,123)]"
                    : "bg-[rgb(207,157,123)]/30 hover:bg-[rgb(207,157,123)]/60"
                }`}
              />
            ))}
          </div>

          {/* 左右ナビゲーション矢印 */}
          <button
            onClick={prevStaff}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-[rgb(207,157,123)] hover:text-white transition-colors duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={nextStaff}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-[rgb(207,157,123)] hover:text-white transition-colors duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
