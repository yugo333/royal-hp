"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/components/LanguageContext";

export default function AccessPage() {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <div
        className="min-h-screen relative w-full overflow-hidden"
        style={{ backgroundColor: "rgb(22, 33, 39)" }}
      >
        {/* Main Content */}
        <div className="relative z-10 flex items-center min-h-screen py-20">
          <div className="container mx-auto px-6 md:px-8">
            {/* Page Title */}
            <div className="text-center mb-12">
              <h1 className="text-[rgb(207,157,123)] font-primary text-5xl md:text-7xl tracking-[0.3em] mb-4 drop-shadow-lg">
                ACCESS
              </h1>
              <p className="text-[rgb(207,157,123)] font-secondary text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
                {language === "ja"
                  ? "Shot Bar Royalへのアクセス情報をご案内いたします"
                  : "Access information to Shot Bar Royal"}
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Store Information */}
              <div className="h-full">
                <div className="bg-[rgb(22,33,39)]/80 backdrop-blur-sm border border-[rgb(207,157,123)]/30 rounded-xl p-6 md:p-8 h-full flex flex-col">
                  <h2 className="text-[rgb(207,157,123)] font-primary text-3xl md:text-4xl font-bold mb-4">
                    Shot Bar Royal
                  </h2>
                  <div className="w-20 h-1 bg-[rgb(207,157,123)] mb-6"></div>

                  {/* Address */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-[rgb(207,157,123)] font-secondary text-lg font-semibold mb-2">
                        {language === "ja" ? "住所" : "Address"}
                      </h3>
                      <p className="text-[rgb(207,157,123)]/80 font-secondary leading-relaxed">
                        {language === "ja"
                          ? "〒134-0088 東京都江戸川区西葛西３丁目１５−１０ ６東栄ビル 6 階"
                          : "6F 6 Toei Building, 3-15-10 Nishikasai, Edogawa-ku, Tokyo 134-0088"}
                      </p>
                    </div>

                    {/* Phone */}
                    <div>
                      <h3 className="text-[rgb(207,157,123)] font-secondary text-lg font-semibold mb-2">
                        {language === "ja" ? "電話番号" : "Phone"}
                      </h3>
                      <a
                        href="tel:070-1322-8595"
                        className="text-[rgb(207,157,123)]/80 font-secondary hover:text-[rgb(207,157,123)] transition-colors"
                      >
                        070-1322-8595
                      </a>
                    </div>

                    {/* Business Hours */}
                    <div>
                      <h3 className="text-[rgb(207,157,123)] font-secondary text-lg font-semibold mb-2">
                        {language === "ja" ? "営業時間" : "Business Hours"}
                      </h3>
                      <div className="text-[rgb(207,157,123)]/80 font-secondary space-y-1">
                        <p className="text-sm">
                          {language === "ja"
                            ? "月曜日～日曜日"
                            : "Monday - Sunday"}
                        </p>
                        <p>20:00 - 06:00 (Last Order 05:30)</p>
                        <p className="text-xs mt-2 opacity-60">
                          {language === "ja"
                            ? "※定休日はInstagramでご確認ください"
                            : "※Please check our Instagram for holidays"}
                        </p>
                      </div>
                    </div>

                    {/* Access Info */}
                    <div>
                      <h3 className="text-[rgb(207,157,123)] font-secondary text-lg font-semibold mb-2">
                        {language === "ja" ? "アクセス" : "Access"}
                      </h3>
                      <p className="text-[rgb(207,157,123)]/80 font-secondary leading-relaxed">
                        {language === "ja"
                          ? "西葛西駅から徒歩1分。音楽を聴きながら楽しい時間をお過ごしください。"
                          : "1 minute walk from Nishikasai Station. Enjoy a great time listening to music."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-[rgb(22,33,39)]/80 backdrop-blur-sm border border-[rgb(207,157,123)]/30 rounded-xl p-6 md:p-8 h-full flex flex-col">
                <h3 className="text-[rgb(207,157,123)] font-secondary text-lg font-semibold mb-4">
                  {language === "ja" ? "地図" : "Map"}
                </h3>
                <div className="w-20 h-1 bg-[rgb(207,157,123)] mb-6"></div>

                <div className="flex-grow flex flex-col">
                  <div className="aspect-video rounded-lg overflow-hidden border border-[rgb(207,157,123)]/20 flex-grow">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.766!2d139.855!3d35.664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM5JzUwLjQiTiAxMznCsDUxJzE4LjAiRQ!5e0!3m2!1sja!2sjp!4v1640000000000!5m2!1sja!2sjp&q=Shot+Bar+Royal,+3-15-10+Nishikasai,+Edogawa,+Tokyo"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Shot Bar Royal Location"
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    ></iframe>
                  </div>

                  <div className="mt-4">
                    <a
                      href="https://maps.google.com/?q=35.664000,139.855000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[rgb(207,157,123)] font-secondary text-sm hover:text-white transition-colors"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mr-2"
                      >
                        <path
                          d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6m7-3v8m-3-5 3 3 3-3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {language === "ja"
                        ? "Googleマップで開く"
                        : "Open in Google Maps"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
