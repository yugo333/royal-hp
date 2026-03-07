"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-full bg-[rgb(22,33,39)] flex items-center justify-center">
      <div className="relative">
        {/* ゆっくり回転するローディング画像 */}
        <div className="animate-slow-spin">
          <Image
            src="/SubPic/S2.png"
            alt="Loading..."
            width={480}
            height={480}
            className="opacity-80"
          />
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
