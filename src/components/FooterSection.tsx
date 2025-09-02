import React from "react";
import ResponsiveContainer from "./ResponsiveContainer";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#f8fafc] pt-8 md:pt-12 pb-4 md:pb-6  border-t text-xs md:text-sm">
      <ResponsiveContainer>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 px-2">
          <div className="flex flex-col gap-1 md:gap-2 text-center md:text-left">
            <span className="font-bold text-lg text-[#1a3c6b]">BondsIndia</span>
            <span className="text-sm text-gray-600">
              SEBI Registration No. : INZ000296636
            </span>
            <span className="text-sm text-gray-600">
              All rights reserved © {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-end">
            <a href="#" className="text-[#1a3c6b] hover:underline text-sm">
              Terms & Conditions
            </a>
            <a href="#" className="text-[#1a3c6b] hover:underline text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[#1a3c6b] hover:underline text-sm">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-4 md:mt-8 text-center text-[10px] md:text-xs text-gray-400">
          Products | Resources | Classifications | Social | Legal | &copy;{" "}
          {new Date().getFullYear()} BondsIndia
        </div>
      </ResponsiveContainer>
    </footer>
  );
}
