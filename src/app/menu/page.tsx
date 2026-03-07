"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import PageLayout from "@/components/PageLayout";

const MenuScene = dynamic(() => import("@/components/MenuScene"), {
  ssr: false,
  loading: () => null,
});

type Language = "ja" | "en";

interface MenuItem {
  nameJa: string;
  nameEn: string;
  descriptionJa: string;
  descriptionEn: string;
  price: string;
}

export default function MenuPage() {
  const [language, setLanguage] = useState<Language>("ja");

  const cocktails: MenuItem[] = [
    {
      nameJa: "レッド・プル・ヲッカ",
      nameEn: "Red Bull Vodka",
      descriptionJa: "エナジードリンクとウォッカの組み合わせ",
      descriptionEn: "Energy drink and vodka combination",
      price: "¥1,000",
    },
    {
      nameJa: "モスコミュール",
      nameEn: "Moscow Mule",
      descriptionJa: "ウォッカとジンジャービア",
      descriptionEn: "Vodka and ginger beer",
      price: "¥800",
    },
    {
      nameJa: "マティーニ",
      nameEn: "Martini",
      descriptionJa: "ジンとドライベルモット",
      descriptionEn: "Gin and dry vermouth",
      price: "¥800",
    },
    {
      nameJa: "ギムレット",
      nameEn: "Gimlet",
      descriptionJa: "ジンとライムジュース",
      descriptionEn: "Gin and lime juice",
      price: "¥800",
    },
    {
      nameJa: "ジントニック",
      nameEn: "Gin Tonic",
      descriptionJa: "ジンとトニックウォーター",
      descriptionEn: "Gin and tonic water",
      price: "¥800",
    },
    {
      nameJa: "マルガリータ",
      nameEn: "Margarita",
      descriptionJa: "テキーラとライムの定番カクテル",
      descriptionEn: "Classic tequila and lime cocktail",
      price: "¥800",
    },
  ];

  const shots: MenuItem[] = [
    {
      nameJa: "コカレロ",
      nameEn: "Cocalero",
      descriptionJa: "南米のハーブリキュール",
      descriptionEn: "South American herbal liqueur",
      price: "¥800",
    },
    {
      nameJa: "コカボム",
      nameEn: "Cocalero Bomb",
      descriptionJa: "コカレロとレッドブルの組み合わせ",
      descriptionEn: "Cocalero and Red Bull combination",
      price: "¥1,000",
    },
    {
      nameJa: "イエガー",
      nameEn: "Jägermeister",
      descriptionJa: "ドイツのハーブリキュール",
      descriptionEn: "German herbal liqueur",
      price: "¥800",
    },
    {
      nameJa: "ジャガーボム",
      nameEn: "Jäger Bomb",
      descriptionJa: "イエガーとレッドブル",
      descriptionEn: "Jägermeister and Red Bull",
      price: "¥1,000",
    },
    {
      nameJa: "クエルボ ゴールド",
      nameEn: "Cuervo Gold",
      descriptionJa: "プレミアムテキーラ",
      descriptionEn: "Premium tequila",
      price: "¥800",
    },
    {
      nameJa: "B52",
      nameEn: "B52",
      descriptionJa: "3層のレイヤードショット",
      descriptionEn: "Three-layer shot cocktail",
      price: "¥1,000",
    },
  ];

  const whisky: MenuItem[] = [
    {
      nameJa: "角",
      nameEn: "Kaku",
      descriptionJa: "サントリー角瓶",
      descriptionEn: "Suntory Kaku whiskey",
      price: "¥800",
    },
    {
      nameJa: "山崎",
      nameEn: "Yamazaki",
      descriptionJa: "日本のシングルモルト",
      descriptionEn: "Japanese single malt",
      price: "¥1,200",
    },
    {
      nameJa: "ジャック ダニエルズ",
      nameEn: "Jack Daniels",
      descriptionJa: "アメリカンウイスキー",
      descriptionEn: "American whiskey",
      price: "¥800",
    },
    {
      nameJa: "ワイルドターキー",
      nameEn: "Wild Turkey",
      descriptionJa: "バーボンウイスキー",
      descriptionEn: "Bourbon whiskey",
      price: "¥900",
    },
    {
      nameJa: "シーバスリーガル",
      nameEn: "Chivas Regal",
      descriptionJa: "スコッチウイスキー",
      descriptionEn: "Scotch whiskey",
      price: "¥900",
    },
  ];

  const beerBottle: MenuItem[] = [
    {
      nameJa: "アサヒスーパードライ",
      nameEn: "Asahi Super Dry",
      descriptionJa: "日本の代表的ビール",
      descriptionEn: "Japan's representative beer",
      price: "¥600",
    },
    {
      nameJa: "ハイネケン",
      nameEn: "Heineken",
      descriptionJa: "オランダのプレミアムビール",
      descriptionEn: "Dutch premium beer",
      price: "¥800",
    },
    {
      nameJa: "ギネス",
      nameEn: "Guinness",
      descriptionJa: "アイルランドの黒ビール",
      descriptionEn: "Irish black beer",
      price: "¥800",
    },
    {
      nameJa: "コロナ",
      nameEn: "Corona",
      descriptionJa: "メキシコの軽やかビール",
      descriptionEn: "Mexican light beer",
      price: "¥800",
    },
    {
      nameJa: "スミノフアイス",
      nameEn: "Smirnoff Ice",
      descriptionJa: "ウォッカベースのさっぱり飲料",
      descriptionEn: "Vodka-based refreshing drink",
      price: "¥800",
    },
  ];

  const brandy: MenuItem[] = [
    {
      nameJa: "レミイ",
      nameEn: "Rémy Martin",
      descriptionJa: "フランスの高級コニャック",
      descriptionEn: "French premium cognac",
      price: "¥1,000",
    },
    {
      nameJa: "ヘネシー",
      nameEn: "Hennessy",
      descriptionJa: "世界最高級コニャック",
      descriptionEn: "World's finest cognac",
      price: "¥1,000",
    },
  ];

  const wineChampagne: MenuItem[] = [
    {
      nameJa: "赤ワイン",
      nameEn: "Red Wine",
      descriptionJa: "厳選されたフルボディ赤ワイン",
      descriptionEn: "Selected full-bodied red wine",
      price: "¥800",
    },
    {
      nameJa: "白ワイン",
      nameEn: "White Wine",
      descriptionJa: "爆やかな辛口白ワイン",
      descriptionEn: "Crisp and dry white wine",
      price: "¥800",
    },
    {
      nameJa: "本日のシャンパン",
      nameEn: "Daily Champagne",
      descriptionJa: "ソムリエが選んだシャンパン",
      descriptionEn: "Sommelier's choice champagne",
      price: "¥5,000",
    },
    {
      nameJa: "マルティーニアスティー",
      nameEn: "Martini Asti",
      descriptionJa: "イタリアの甜口スパークリング",
      descriptionEn: "Italian sweet sparkling wine",
      price: "¥6,000",
    },
    {
      nameJa: "モエ・エ・シャンドン",
      nameEn: "Moët & Chandon",
      descriptionJa: "世界最高級シャンパン",
      descriptionEn: "World's finest champagne",
      price: "¥21,000",
    },
  ];

  const food: MenuItem[] = [
    {
      nameJa: "フライドチキン",
      nameEn: "Fried Chicken",
      descriptionJa: "サクサクジューシーなチキン",
      descriptionEn: "Crispy and juicy chicken",
      price: "¥800",
    },
    {
      nameJa: "フライドポテト",
      nameEn: "Fried Potatoes",
      descriptionJa: "カリカリの手作りポテト",
      descriptionEn: "Crispy handmade potatoes",
      price: "¥800",
    },
    {
      nameJa: "ビーフジャーキー",
      nameEn: "Beef Jerky",
      descriptionJa: "スパイシーなビーフジャーキー",
      descriptionEn: "Spicy beef jerky",
      price: "¥1,000",
    },
    {
      nameJa: "ミックスナッツ",
      nameEn: "Mixed Nuts",
      descriptionJa: "お酒にぴったりなナッツ",
      descriptionEn: "Perfect nuts for drinks",
      price: "¥500",
    },
  ];

  return (
    <PageLayout language={language} setLanguage={setLanguage}>
      <div
        className="min-h-screen relative w-full overflow-hidden"
        style={{ backgroundColor: "rgb(22, 33, 39)" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/MainPic/M2.png"
            alt="Shot Bar Interior"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgb(22,33,39)]/80 to-[rgb(22,33,39)]/60" />
        </div>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          {/* 3D Scene - 全画面 */}
          <div className="absolute inset-0 z-0">
            <Suspense fallback={null}>
              <MenuScene />
            </Suspense>
          </div>

          <div
            className="absolute inset-0 z-10 flex items-center justify-center text-center backdrop-blur-md"
            style={{
              background:
                "radial-gradient(ellipse 120% 60% at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 40%, transparent 80%)",
            }}
          >
            <div className="px-8 py-6">
              <h1 className="text-[rgb(207,157,123)] font-primary text-5xl md:text-7xl tracking-[0.3em] mb-4 drop-shadow-lg">
                MENU
              </h1>
              <p className="text-[rgb(207,157,123)] font-secondary text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
                {language === "ja"
                  ? "厳選された食材と最高のお酒で、特別な時間をお過ごしください"
                  : "Experience exceptional moments with carefully selected ingredients and finest spirits"}
              </p>
            </div>
          </div>
        </section>

        {/* Menu Sections */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20">
          {/* Cocktails Section */}
          <section className="mb-24">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-[rgb(207,157,123)] font-primary text-4xl mb-8 tracking-[0.2em] text-center lg:text-left drop-shadow-lg">
                  COCKTAILS
                </h2>
                <div className="space-y-4">
                  {cocktails.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[rgb(22,33,39)]/80 backdrop-blur-sm border border-[rgb(207,157,123)]/30 rounded-lg p-4 hover:bg-[rgb(207,157,123)]/5 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-[rgb(207,157,123)] font-primary text-lg tracking-wide">
                          {language === "ja" ? item.nameJa : item.nameEn}
                        </h3>
                        <span className="text-[rgb(207,157,123)] font-primary text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-[rgb(207,157,123)]/70 font-secondary text-xs">
                        {language === "ja"
                          ? item.descriptionJa
                          : item.descriptionEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[rgb(207,157,123)]/10 transform rotate-3"></div>
                  <Image
                    src="/MainPic/M2.png"
                    alt="Cocktails"
                    width={500}
                    height={600}
                    className="relative z-10 w-full h-96 object-cover drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Shots Section */}
          <section className="mb-24">
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-[rgb(207,157,123)] font-primary text-4xl mb-8 tracking-[0.2em] text-center lg:text-left drop-shadow-lg">
                  SHOTS
                </h2>
                <div className="space-y-4">
                  {shots.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[rgb(22,33,39)]/80 backdrop-blur-sm border border-[rgb(207,157,123)]/30 rounded-lg p-4 hover:bg-[rgb(207,157,123)]/5 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-[rgb(207,157,123)] font-primary text-lg tracking-wide">
                          {language === "ja" ? item.nameJa : item.nameEn}
                        </h3>
                        <span className="text-[rgb(207,157,123)] font-primary text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-[rgb(207,157,123)]/70 font-secondary text-xs">
                        {language === "ja"
                          ? item.descriptionJa
                          : item.descriptionEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[rgb(207,157,123)]/10 transform -rotate-3"></div>
                  <Image
                    src="/MainPic/M3.png"
                    alt="Shots"
                    width={500}
                    height={600}
                    className="relative z-10 w-full h-96 object-cover drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Whisky Section */}
          <section className="mb-24">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-[rgb(207,157,123)] font-primary text-4xl mb-8 tracking-[0.2em] text-center lg:text-left drop-shadow-lg">
                  WHISKY
                </h2>
                <div className="space-y-4">
                  {whisky.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[rgb(22,33,39)]/80 backdrop-blur-sm border border-[rgb(207,157,123)]/30 rounded-lg p-4 hover:bg-[rgb(207,157,123)]/5 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-[rgb(207,157,123)] font-primary text-lg tracking-wide">
                          {language === "ja" ? item.nameJa : item.nameEn}
                        </h3>
                        <span className="text-[rgb(207,157,123)] font-primary text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-[rgb(207,157,123)]/70 font-secondary text-xs">
                        {language === "ja"
                          ? item.descriptionJa
                          : item.descriptionEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[rgb(207,157,123)]/10 transform rotate-3"></div>
                  <Image
                    src="/MainPic/M4.png"
                    alt="Whisky"
                    width={500}
                    height={600}
                    className="relative z-10 w-full h-96 object-cover drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Beer & Bottle Drink Section */}
          <section className="mb-24">
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-[rgb(207,157,123)] font-primary text-4xl mb-8 tracking-[0.2em] text-center lg:text-left drop-shadow-lg">
                  BEER & BOTTLE
                </h2>
                <div className="space-y-4">
                  {beerBottle.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[rgb(22,33,39)]/80 backdrop-blur-sm border border-[rgb(207,157,123)]/30 rounded-lg p-4 hover:bg-[rgb(207,157,123)]/5 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-[rgb(207,157,123)] font-primary text-lg tracking-wide">
                          {language === "ja" ? item.nameJa : item.nameEn}
                        </h3>
                        <span className="text-[rgb(207,157,123)] font-primary text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-[rgb(207,157,123)]/70 font-secondary text-xs">
                        {language === "ja"
                          ? item.descriptionJa
                          : item.descriptionEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[rgb(207,157,123)]/10 transform -rotate-3"></div>
                  <Image
                    src="/MainPic/M1.png"
                    alt="Beer & Bottle"
                    width={500}
                    height={600}
                    className="relative z-10 w-full h-96 object-cover drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Brandy Section */}
          <section className="mb-24">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-[rgb(207,157,123)] font-primary text-4xl mb-8 tracking-[0.2em] text-center lg:text-left drop-shadow-lg">
                  BRANDY
                </h2>
                <div className="space-y-4">
                  {brandy.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[rgb(22,33,39)]/80 backdrop-blur-sm border border-[rgb(207,157,123)]/30 rounded-lg p-4 hover:bg-[rgb(207,157,123)]/5 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-[rgb(207,157,123)] font-primary text-lg tracking-wide">
                          {language === "ja" ? item.nameJa : item.nameEn}
                        </h3>
                        <span className="text-[rgb(207,157,123)] font-primary text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-[rgb(207,157,123)]/70 font-secondary text-xs">
                        {language === "ja"
                          ? item.descriptionJa
                          : item.descriptionEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[rgb(207,157,123)]/10 transform rotate-3"></div>
                  <Image
                    src="/MainPic/M2.png"
                    alt="Brandy"
                    width={500}
                    height={600}
                    className="relative z-10 w-full h-96 object-cover drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Wine & Champagne Section */}
          <section className="mb-24">
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-[rgb(207,157,123)] font-primary text-4xl mb-8 tracking-[0.2em] text-center lg:text-left drop-shadow-lg">
                  WINE & CHAMPAGNE
                </h2>
                <div className="space-y-4">
                  {wineChampagne.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[rgb(22,33,39)]/80 backdrop-blur-sm border border-[rgb(207,157,123)]/30 rounded-lg p-4 hover:bg-[rgb(207,157,123)]/5 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-[rgb(207,157,123)] font-primary text-lg tracking-wide">
                          {language === "ja" ? item.nameJa : item.nameEn}
                        </h3>
                        <span className="text-[rgb(207,157,123)] font-primary text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-[rgb(207,157,123)]/70 font-secondary text-xs">
                        {language === "ja"
                          ? item.descriptionJa
                          : item.descriptionEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[rgb(207,157,123)]/10 transform -rotate-3"></div>
                  <Image
                    src="/MainPic/M3.png"
                    alt="Wine & Champagne"
                    width={500}
                    height={600}
                    className="relative z-10 w-full h-96 object-cover drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Food Section */}
          <section className="mb-24">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-[rgb(207,157,123)] font-primary text-4xl mb-8 tracking-[0.2em] text-center lg:text-left drop-shadow-lg">
                  FOOD
                </h2>
                <div className="space-y-4">
                  {food.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[rgb(22,33,39)]/80 backdrop-blur-sm border border-[rgb(207,157,123)]/30 rounded-lg p-4 hover:bg-[rgb(207,157,123)]/5 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-[rgb(207,157,123)] font-primary text-lg tracking-wide">
                          {language === "ja" ? item.nameJa : item.nameEn}
                        </h3>
                        <span className="text-[rgb(207,157,123)] font-primary text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-[rgb(207,157,123)]/70 font-secondary text-xs">
                        {language === "ja"
                          ? item.descriptionJa
                          : item.descriptionEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[rgb(207,157,123)]/10 transform rotate-3"></div>
                  <Image
                    src="/MainPic/M4.png"
                    alt="Food"
                    width={500}
                    height={600}
                    className="relative z-10 w-full h-96 object-cover drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
