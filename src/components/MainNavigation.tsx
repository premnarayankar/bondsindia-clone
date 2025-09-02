"use client";
import React, { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Bonds Library", href: "/bonds-library" },
  {
    label: "Products",
    dropdown: [
      { label: "Bonds", href: "/bonds" },
      { label: "IPO - Initial Public Offering", href: "/ipo" },
      { label: "GSEC Strips", href: "/gsec-strips" },
      { label: "54EC Bonds", href: "/54ec-bonds" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Blog", href: "/blog" },
      { label: "Reports", href: "/reports" },
      { label: "Webinars", href: "/webinars" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Who we are",
    dropdown: [
      { label: "About us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

export default function MainNavigation({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  if (mobile) {
    return (
      <nav className="flex flex-col gap-2 text-[#222] font-thin">
        {navItems.map((item) =>
          item.dropdown ? (
            <div key={item.label} className="relative group">
              <button
                type="button"
                className="flex items-center gap-2 w-full py-2 px-2 rounded hover:bg-gray-100 focus:outline-none"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === item.label ? null : item.label
                  )
                }
              >
                {item.label}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    openDropdown === item.label ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === item.label && (
                <div className="flex flex-col bg-white rounded shadow border mt-1">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="px-4 py-2 hover:bg-gray-50 text-[#1a3c6b] border-b last:border-b-0 font-thin"
                      onClick={onNavigate}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="px-2 py-2 hover:text-[#ff6600] font-thin "
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          )
        )}
      </nav>
    );
  }

  return (
    <nav className="hidden lg:flex gap-6 xl:gap-10 text-[#222] font-bold relative z-30 h-[64px] items-center">
      {navItems.map((item) =>
        item.dropdown ? (
          <div
            key={item.label}
            className="relative group"
            onMouseEnter={() => setOpenDropdown(item.label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="flex items-center gap-2 hover:text-[#ff6600] focus:outline-none font-thin  px-2 py-2 rounded-md transition-colors"
            >
              {item.label}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === item.label && (
              <div className="absolute left-0 top-full w-56 md:w-64 bg-white rounded-2xl shadow-lg border z-30 min-w-max mt-2">
                {item.dropdown.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    className="flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 hover:bg-gray-50 border-b last:border-b-0 text-[#1a3c6b] font-thin"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className="hover:text-[#ff6600] font-thin xl:font-thin px-1"
          >
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}
