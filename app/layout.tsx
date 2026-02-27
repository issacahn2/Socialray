import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SocialRay — Viral Engineering for X",
  description: "Proprietary access to the X algorithm. We make anything go viral.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-white text-slate-900">
      <body className={`${inter.variable} font-sans antialiased bg-ray-bg`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
