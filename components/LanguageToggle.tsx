"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LanguageToggleProps = {
  locale: string;
};

export default function LanguageToggle({ locale }: LanguageToggleProps) {
  const pathname = usePathname();
  const otherLocale = locale === "en" ? "th" : "en";

  // Remove the current locale from the pathname
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");

  // Create the new path with the other locale
  const newPath = `/${otherLocale}${pathnameWithoutLocale}`;

  return (
    <Link
      href={newPath}
      className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-tofu-white dark:hover:bg-warm-brown"
      aria-label={locale === "en" ? "Switch to Thai" : "Switch to English"}
    >
      {locale === "en" ? (
        // Thai flag when current locale is English
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 900 600"
          className="w-6 h-6"
        >
          <rect width="900" height="600" fill="#ED1C24" />
          <rect y="100" width="900" height="400" fill="#FFFFFF" />
          <rect y="200" width="900" height="200" fill="#241D4F" />
        </svg>
      ) : (
        // UK flag when current locale is Thai
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 30"
          className="w-6 h-6"
        >
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z" />
          </clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      )}
    </Link>
  );
}
