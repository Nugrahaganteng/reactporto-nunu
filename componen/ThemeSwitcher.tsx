"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitcher() {
  // Track the current theme state
  const [isDark, setIsDark] = useState(false);
  
  // Initialize theme on component mount
  useEffect(() => {
    // Check if dark mode is already set
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  // Function to toggle theme and directly manipulate DOM
  const toggleTheme = () => {
    if (isDark) {
      // Switch to light mode
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      // Force light mode on body and main content
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      document.querySelector("main")?.classList.add("light-theme");
      document.querySelector("main")?.classList.remove("dark-theme");
    } else {
      // Switch to dark mode
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      // Force dark mode on body and main content
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      document.querySelector("main")?.classList.add("dark-theme");
      document.querySelector("main")?.classList.remove("light-theme");
    }
    
    // Update state
    setIsDark(!isDark);
  };

  return (
    <div className="flex items-center">
      <span className="mr-3 text-sm font-medium text-gray-400">Dark Theme</span>
      <button
        onClick={toggleTheme}
        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
          isDark ? "bg-purple-600" : "bg-gray-700"
        }`}
        aria-pressed={isDark}
        aria-label="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
            isDark ? "translate-x-6" : "translate-x-1"
          }`}
        />
        <span className="absolute inset-y-0 left-0 flex items-center pl-1.5">
          {!isDark && <FaMoon className="h-3 w-3 text-gray-400" />}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-1.5">
          {isDark && <FaSun className="h-3 w-3 text-white" />}
        </span>
      </button>
    </div>
  );
}