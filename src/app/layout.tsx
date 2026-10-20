import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: `${siteConfig.name} | Crescimento com previsibilidade`,
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: "#000d34",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
