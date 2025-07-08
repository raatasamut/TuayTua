"use client";

import { useTheme } from "./ThemeProvider";

type ThemeToggleProps = {
  locale: string;
};

export default function ThemeToggle({ locale }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const translations = {
    th: {
      lightMode: "โหมดสว่าง",
      darkMode: "โหมดมืด",
      toggleTheme: "เปลี่ยนธีม"
    },
    en: {
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
      toggleTheme: "Toggle Theme"
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.th;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-tofu-white dark:hover:bg-warm-brown"
      aria-label={t.toggleTheme}
    >
      {theme === "light" ? (
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
          <span className="hidden md:inline">{t.darkMode}</span>
        </div>
      ) : (
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
          <span className="hidden md:inline">{t.lightMode}</span>
        </div>
      )}
    </button>
  );
}
