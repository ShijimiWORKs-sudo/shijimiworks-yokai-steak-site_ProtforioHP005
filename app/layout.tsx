import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://shijimiworks.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ShijimiWORKs Design Studio | Web Design Team",
  description:
    "ShijimiWORKs Design Studioは、デザイナー、フロントエンドエンジニア、バックエンドエンジニアの3人で、ブランドサイト、LP、コーポレートサイトを制作するWebデザインチームです。",
  keywords: [
    "Webデザイン",
    "ブランドサイト",
    "LP制作",
    "コーポレートサイト",
    "UIデザイン",
    "フロントエンド開発",
    "ShijimiWORKs",
  ],
  authors: [{ name: "ShijimiWORKs" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "ShijimiWORKs Design Studio",
    title: "ShijimiWORKs Design Studio | Web Design Team",
    description:
      "デザイナー・フロントエンドエンジニア・バックエンドエンジニアの3人で、ブランドの世界観をWebサイトとして形にする制作チームです。",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "ShijimiWORKs Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShijimiWORKs Design Studio | Web Design Team",
    description:
      "デザイナー・フロントエンドエンジニア・バックエンドエンジニアの3人で、ブランドの世界観をWebサイトとして形にする制作チームです。",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#faf8f4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <a className="skip-link" href="#main">
          本文へスキップ
        </a>
        {children}
      </body>
    </html>
  );
}
