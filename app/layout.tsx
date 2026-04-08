import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Klenek Bisnes",
  description: "Sesi 1-on-1 analisis data jualan + Zoom untuk pemilik bisnes Malaysia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <body className={`${playfair.variable} ${jakarta.variable}`}>{children}</body>
    </html>
  );
}
