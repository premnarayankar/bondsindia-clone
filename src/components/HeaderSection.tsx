"use client";
import React, { useState } from "react";
import MainNavigation from "./MainNavigation";
import { useRouter } from "next/navigation";

export default function HeaderSection() {
  const router = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-30">
      {/* Mobile: hamburger | logo | user icon */}
      <div className="flex items-center justify-between min-h-[56px] px-3 py-2 md:hidden">
        {/* Hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-[#1a3c6b] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1a3c6b]"
          aria-label="Open navigation menu"
          onClick={() => setMobileNavOpen((v) => !v)}
        >
          <svg
            className="h-7 w-7"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Logo */}
        <div
          className="flex flex-col items-center flex-1 cursor-pointer"
          onClick={() => router.replace("/")}
        >
          <span className="text-2xl font-bold text-orange-400 tracking-wider truncate space">
            BONDS<span className="text-[#1ec0e6]">INDIA</span>
            <sup className="text-xs align-super text-[#1ec0e6]">®</sup>
          </span>
        </div>
        {/* User/Profile Icon */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-[#1a3c6b] hover:bg-gray-100 focus:outline-none"
          aria-label="User profile"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M6 20c0-2.21 3.58-4 6-4s6 1.79 6 4" />
          </svg>
        </button>
      </div>
      {/* Desktop: logo | nav | auth */}
      <div className="hidden md:flex flex-row items-center justify-between min-h-[64px] px-6 md:px-8">
        <div
          className="flex items-center gap-2 cursor-pointer min-w-0"
          onClick={() => router.replace("/")}
        >
          <span className="text-2xl font-bold text-orange-400 tracking-wider truncate">
            BONDS<span className="text-[#1ec0e6]">INDIA</span>
            <sup className="text-xs align-super text-[#1ec0e6]">®</sup>
          </span>
        </div>
        {/* <div className="flex-1"> */}
        <MainNavigation />
        {/* </div> */}
        <div className="flex gap-2 items-center">
          <span className="text-black cursor-pointer">LOGIN</span>
          <a
            href="#"
            className="bg-white border border-[#ff6600] text-[#ff6600] px-4 md:px-6 py-1.5 rounded-full font-bold hover:bg-[#ff6600] hover:text-white transition ml-2"
          >
            SIGNUP
          </a>
        </div>
      </div>
      {/* Mobile Navigation Overlay */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 flex md:hidden"
          onClick={() => setMobileNavOpen(false)}
        >
          <div
            className="bg-white w-72 max-w-full h-full shadow-lg p-6 flex flex-col gap-4 animate-slide-in-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 text-[#1a3c6b]"
              aria-label="Close navigation menu"
              onClick={() => setMobileNavOpen(false)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <MainNavigation mobile onNavigate={() => setMobileNavOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
