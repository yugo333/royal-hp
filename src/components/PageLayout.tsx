"use client";

import { ReactNode } from "react";
import Navigation from "./Navigation";

type Language = "ja" | "en";

interface PageLayoutProps {
  children: ReactNode;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function PageLayout({
  children,
  language,
  setLanguage,
}: PageLayoutProps) {
  return (
    <div className="relative">
      <Navigation language={language} setLanguage={setLanguage} />
      {children}
    </div>
  );
}
