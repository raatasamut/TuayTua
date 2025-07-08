"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "light",
  enableSystem = false,
  ...props
}: ThemeProviderProps) {
  // Allow theme to be changed
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  // Initialize theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setThemeState(storedTheme);
    }
  }, []);

  // Set theme in DOM
  useEffect(() => {
    // Only run in the browser
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;

      // Remove any theme classes and add current theme
      root.classList.remove("dark", "light");
      root.classList.add(theme);

      if (attribute === "class") {
        root.setAttribute("data-theme", theme);
      }

      // Save theme to localStorage
      localStorage.setItem("theme", theme);
    }
  }, [theme, attribute]);

  const value = {
    theme,
    // setTheme function to change the theme
    setTheme: (newTheme: Theme) => {
      setThemeState(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
