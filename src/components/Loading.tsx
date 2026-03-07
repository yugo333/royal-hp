"use client";

import Image from "next/image";

export default function Loading({ fadeOut = false }: { fadeOut?: boolean }) {
  return (
    <div className="w-full h-full bg-[rgb(22,33,39)] flex items-center justify-center overflow-hidden">
      <div className="relative">
        {/* 外側でスケール制御 */}
        <div
          className={`transition-transform duration-[3000ms] ease-out ${
            fadeOut ? "scale-[10]" : "scale-100"
          }`}
        >
          {/* 内側で回転制御 */}
          <div className="animate-slow-spin">
            <Image
              src="/SubPic/S2.png"
              alt="Loading..."
              width={480}
              height={480}
              className="opacity-80"
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </div>
        </div>

        {/* カスタムアニメーション用のスタイル */}
        <style jsx>{`
          .animate-slow-spin {
            animation: slow-spin 3s linear infinite;
          }

          @keyframes slow-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>

        {/* ローディングテキスト */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <p className="text-white text-sm font-light tracking-wider animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}
