'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkTheme: true,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkTheme', JSON.stringify(newTheme));
    }
  };

  // Check for saved theme or system preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme !== null) {
      setIsDarkTheme(JSON.parse(savedTheme));
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkTheme(prefersDark);
    }

    setMounted(true);
  }, []);

  // Apply the theme to <html> element when isDarkTheme changes
  useEffect(() => {
    if (mounted) {
      if (isDarkTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkTheme, mounted]);

  // Prevent flickering during SSR (render nothing until mounted)
  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
