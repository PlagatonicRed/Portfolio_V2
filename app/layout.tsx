"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(systemPrefersDark);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${isDarkMode ? "dark" : ""}`}>
      <body className="antialiased font-sans">

        <header 
          className={`
            fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out backdrop-blur-md
            ${isShrunk 
              ? "py-4 border-b shadow-lg" 
              : "py-10 bg-transparent border-b border-transparent"
            }
          `}
          style={{
            backgroundColor: isShrunk 
              ? (isDarkMode ? "rgba(8, 8, 10, 0.4)" : "rgba(241, 243, 245, 0.4)")
              : "transparent",
            borderColor: isShrunk
              ? (isDarkMode ? "#000000" : "rgba(228, 228, 231, 0.5)")
              : "transparent"
          }}
        >
          
          <div className="w-full px-6 md:px-12 flex justify-between items-center relative z-10">
            <h1 className="font-bold tracking-tight text-[clamp(1.1rem,3vw,1.5rem)] text-foreground">
              <Link href="/" className="hover:text-[var(--accent-hover)] inline-block py-2 -my-2">
                Ian Lampley
              </Link>
            </h1>
            
            <nav className="flex items-center gap-6 md:gap-8">
              <ul className="flex gap-2 sm:gap-4 md:gap-6 text-[clamp(0.85rem,2vw,0.95rem)] font-medium text-[var(--muted-text)]">
                <li>
                  <Link href="/" className="inline-block py-2.5 px-3 -my-2.5 -mx-1.5 sm:-mx-3 hover:text-[var(--accent-hover)] rounded-sm transition-colors duration-200">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="inline-block py-2.5 px-3 -my-2.5 -mx-1.5 sm:-mx-3 hover:text-[var(--accent-hover)] rounded-sm transition-colors duration-200">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/aboutme" className="inline-block py-2.5 px-3 -my-2.5 -mx-1.5 sm:-mx-3 hover:text-[var(--accent-hover)] rounded-sm transition-colors duration-200">
                    About Me
                  </Link>
                </li>
              </ul>

              {/* Increased padding + offset margin to produce an optimized mobile tap target footprint */}
              <button 
                onClick={toggleTheme}
                className="p-3 -m-1 rounded-md border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 hover:text-[var(--accent-hover)] hover:border-zinc-300 dark:hover:border-zinc-700 text-[var(--muted-text)] transition-all duration-200"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728A9 9 0 115.636 5.636m12.728 12.728A9 9 0 015.636 5.636z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </nav>
            
          </div>
        </header>

        <div className="pt-32">
          {children}
        </div>
      </body>
    </html>
  );
}