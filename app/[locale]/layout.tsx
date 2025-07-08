import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sarabun } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "ถ้วยถั่ว (TuayTua)",
  description: "คาเฟ่น้ำเต้าหู้มินิมอล เน้นสุขภาพ อบอุ่น เรียบง่าย | Minimalist tofu milk cafe focused on health, warmth, and simplicity",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = React.use(params).locale || "th";

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${sarabun.className} ${inter.className} font-sans antialiased bg-soy-cream text-warm-brown`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="flex flex-col min-h-screen">
            <Navbar locale={locale} />
            <main className="flex-grow">
              {children}
            </main>
            <Footer locale={locale} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
