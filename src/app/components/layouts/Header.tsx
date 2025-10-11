"use client";

import { useState } from "react";
import { items } from "@/app/screen";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export function HeaderPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg
              className="w-7 h-7 text-indigo-600 dark:text-indigo-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-bold text-lg text-gray-800 dark:text-white">
              Bò Sữa
            </span>
          </Link>

          {/* Navigation (desktop) */}
          <nav className="hidden md:flex space-x-6">
            {items.map((item) => (
              <Link
                key={item.key}
                href={item.path}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Đăng nhập/Đăng ký
            </Link>
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" /> // X icon
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" /> // Menu icon
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-2 space-y-2 pb-3 border-t border-gray-200 dark:border-gray-700">
            {items.map((item) => (
              <Link
                key={item.key}
                href={item.path}
                onClick={() => setIsOpen(false)} // đóng menu sau khi click
                className="block text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-3 py-2 text-sm font-medium transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
