"use client";

import { ReactNode } from "react";
import Navigation from "./Navigation";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative">
      <Navigation />
      {children}
    </div>
  );
}
