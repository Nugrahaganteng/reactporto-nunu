'use client';
import React, { useEffect, useState } from 'react';
import { FaDribbble, FaGithub, FaLinkedin, FaMoon, FaSun, FaTwitter } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';
import ThemeSwitcher from './ThemeSwitcher';

export default function Footer() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  return (
    <footer className="w-full bg-black text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Social Media Icons */}
        <div className="flex items-center space-x-6 mb-4 md:mb-0">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://dribbble.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Dribbble"
          >
            <FaDribbble size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
        </div>
        
        {/* Copyright Text */}
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          © 2025 - Template designed & developed by <a href="#" className="text-white hover:underline">Syed Mohsin</a>
        </div>
        
        {/* Theme Toggle */}
        <div className="flex items-center">
          <span className="mr-3 text-sm font-medium text-gray-400">
            Dark Theme
          </span>
          <button 
            onClick={toggleTheme}
            className={`relative inline-flex h-6 w-11 items-center rounded-full ${isDarkTheme ? 'bg-purple-600' : 'bg-gray-700'}`}
            aria-pressed={isDarkTheme}
            aria-label="Toggle theme"
          >
            <span className="sr-only">Toggle theme</span>
            <span 
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isDarkTheme ? 'translate-x-6' : 'translate-x-1'}`}
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-1.5">
              {!isDarkTheme && <FaMoon className="h-3 w-3 text-gray-400" />}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-1.5">
              {isDarkTheme && <FaSun className="h-3 w-3 text-white" />}
            </span>
          </button>        </div>      </div>
    </footer>
  );
}
