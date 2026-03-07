"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import Loading from "./Loading";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export default function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // ローディング表示
    setShowOverlay(true);
    setIsLoading(true);

    // HOME以外の場合、リダイレクト
    if (pathname !== "/") {
      router.replace("/");
    }

    // 4秒後にローディング完了
    const timer = setTimeout(() => {
      sessionStorage.setItem("home-loaded", "1");
      setIsLoading(false);
      setShowOverlay(false);
    }, 4000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- pathnameとrouterは初回マウント時のみ使用するため依存配列に入れない
  }, []); // 空の依存配列で初回マウント時のみ実行

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {showOverlay && (
        <div className="fixed inset-0 z-[9999] bg-black">
          <Loading />
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
}
