import React from "react";

export default function TopInfoBar() {
  return (
    <div
      className="w-full hidden md:block bg-white border-b text-xs text-[#222] font-medium tracking-tight px-2 sm:px-4 md:px-8 py-1.5"
      aria-label="Top Info Bar"
    >
      <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-y-2 gap-x-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center w-full sm:w-auto justify-center sm:justify-start">
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-[#ff6600]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75z"
              />
            </svg>
            <span className="whitespace-nowrap">+91-8882-200-300</span>
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-[#ff6600]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a4 4 0 01-4 4H8a4 4 0 01-4-4v-1"
              />
            </svg>
            <span className="whitespace-nowrap">info@bondsindia.com</span>
          </span>
        </div>
        <div className="text-[13px] text-[#222] text-center w-full sm:w-auto">
          We have special deals every day.{" "}
          <a href="#" className="text-[#ff6600] font-semibold hover:underline">
            Find Your Deal
          </a>
        </div>
        <div className="flex gap-2 sm:gap-4 items-center w-full sm:w-auto justify-center sm:justify-end">
          <span className="hidden md:inline text-black/80">
            <svg
              className="w-4 h-4 inline-block mr-1 text-[#1a3c6b]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <circle cx="12" cy="8" r="1" />
            </svg>{" "}
            Help
          </span>
          <a href="#" className="text-[#1a3c6b] font-semibold hover:underline">
            BondsPedia
          </a>
        </div>
      </div>
    </div>
  );
}
