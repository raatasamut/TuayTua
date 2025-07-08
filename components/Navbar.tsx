"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";

type NavbarProps = {
  locale: string;
};

export default function Navbar({ locale }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    th: {
      home: "หน้าแรก",
      ourStory: "ประวัติความเป็นมา",
      ingredients: "แหล่งผลิตวัตถุดิบ",
      whereToBuy: "จุดจำหน่าย",
      menu: "เมนู"
    },
    en: {
      home: "Home",
      ourStory: "Our Story",
      ingredients: "Ingredients",
      whereToBuy: "Where to Buy",
      menu: "Menu"
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.th;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-soy-cream shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex-shrink-0 flex items-center">
              <Image
                src="/ic-tofu.png"
                alt="ถ้วยถั่ว (TuayTua) Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-medium text-warm-brown">{locale === "th" ? "ถ้วยถั่ว" : "TuayTua"}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href={`/${locale}`}
              className="px-3 py-2 rounded-md text-sm font-medium text-warm-brown hover:text-soybean-yellow"
            >
              {t.home}
            </Link>
            <Link
              href={`/${locale}/our-story`}
              className="px-3 py-2 rounded-md text-sm font-medium text-warm-brown hover:text-soybean-yellow"
            >
              {t.ourStory}
            </Link>
            <Link
              href={`/${locale}/ingredients`}
              className="px-3 py-2 rounded-md text-sm font-medium text-warm-brown hover:text-soybean-yellow"
            >
              {t.ingredients}
            </Link>
            <Link
              href={`/${locale}/menu`}
              className="px-3 py-2 rounded-md text-sm font-medium text-warm-brown hover:text-soybean-yellow"
            >
              {t.menu}
            </Link>
            <Link
              href={`/${locale}/where-to-buy`}
              className="px-3 py-2 rounded-md text-sm font-medium text-warm-brown hover:text-soybean-yellow"
            >
              {t.whereToBuy}
            </Link>
            <div className="ml-4 flex items-center">
              <LanguageToggle locale={locale} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <div className="flex items-center mr-2">
              <LanguageToggle locale={locale} />
            </div>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-warm-brown hover:text-soybean-yellow"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href={`/${locale}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-warm-brown hover:text-soybean-yellow"
              onClick={toggleMenu}
            >
              {t.home}
            </Link>
            <Link
              href={`/${locale}/our-story`}
              className="block px-3 py-2 rounded-md text-base font-medium text-warm-brown hover:text-soybean-yellow"
              onClick={toggleMenu}
            >
              {t.ourStory}
            </Link>
            <Link
              href={`/${locale}/ingredients`}
              className="block px-3 py-2 rounded-md text-base font-medium text-warm-brown hover:text-soybean-yellow"
              onClick={toggleMenu}
            >
              {t.ingredients}
            </Link>
            <Link
              href={`/${locale}/menu`}
              className="block px-3 py-2 rounded-md text-base font-medium text-warm-brown hover:text-soybean-yellow"
              onClick={toggleMenu}
            >
              {t.menu}
            </Link>
            <Link
              href={`/${locale}/where-to-buy`}
              className="block px-3 py-2 rounded-md text-base font-medium text-warm-brown hover:text-soybean-yellow"
              onClick={toggleMenu}
            >
              {t.whereToBuy}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
