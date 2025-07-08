import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sarabun } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "thai"],
});

// Metadata is defined in [locale]/layout.tsx
// This layout is only used as a parent wrapper and the page immediately redirects to a localized route

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body
        className={`${sarabun.className} ${inter.className} font-sans antialiased bg-cream dark:bg-gray-900 text-gray-800 dark:text-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}
