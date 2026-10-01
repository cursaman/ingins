import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://cursamanworks.kr"),
  title: { default: "커사맨웍스 | 홈페이지와 업무를 함께 개선합니다", template: "%s | 커사맨웍스" },
  description: "중소기업의 홈페이지와 반복 업무를 함께 개선하는 웹 제작 파트너입니다.",
  openGraph: { type: "website", locale: "ko_KR", siteName: "커사맨웍스" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><a className="skip-link" href="#main-content">본문 바로가기</a><Header />{children}<Footer /></body></html>;
}
