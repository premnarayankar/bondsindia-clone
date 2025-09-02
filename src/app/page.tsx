"use client";
import NextImage from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* ================= HERO SECTION ================= */}
      <section
        className="w-full relative flex flex-col md:flex-row items-stretch justify-between overflow-x-hidden"
        style={{ background: "#ffe1cf" }}
      >
        {/* Left Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-16 py-12 gap-8 max-w-2xl">
          <h1 className="text-[40px] text-center md:text-left font-light text-[#222] leading-[60px] tracking-tight">
            The easy, fast way to invest money in{" "}
            <span className="font-extrabold text-[#222] inline-block border-b-8 border-[#ff6600]">
              BONDS
            </span>
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-[#1ec0e6] to-[#1a3c6b] shadow-md">
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <polygon points="10,8 16,12 10,16" fill="white" />
              </svg>
            </span>
            <span className="text-lg sm:text-xl text-[#222] font-medium">
              What are Bonds & How do I Invest?
            </span>
          </div>
          <div className="flex flex-row mt-8 text-center w-full justify-start divide-x-2 divide-white">
            <div className="flex-1 px-4">
              <div className="text-[#1ec0e6] text-3xl md:text-4xl font-bold">
                106392+
              </div>
              <div className="text-[#222] text-base md:text-lg font-medium">
                Users
              </div>
            </div>
            <div className="flex-1 px-4">
              <div className="text-[#1ec0e6] text-3xl md:text-4xl font-bold">
                16936+
              </div>
              <div className="text-[#222] text-base md:text-lg font-medium">
                Bonds
              </div>
            </div>
            <div className="flex-1 px-4">
              <div className="text-[#1ec0e6] text-3xl md:text-4xl font-bold">
                29+
              </div>
              <div className="text-[#222] text-base md:text-lg font-medium">
                IPOs
              </div>
            </div>
          </div>
        </div>

        {/* Right Calculator */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-12">
          <div className="bg-[#fff6ee] rounded-xl border border-[#f7d7b7] w-full max-w-md p-6 flex flex-col gap-4 shadow-md">
            <div className="bg-white rounded-lg border border-[#e0e0e0] p-5 flex flex-col gap-4">
              <div className="font-semibold text-[#6b7a8f] text-base">
                Your Investment
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#222] text-lg font-bold">₹</span>
                <input
                  type="number"
                  className="border border-[#e0e0e0] rounded px-2 py-1 w-full text-right font-bold text-lg text-black"
                  defaultValue={100000}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#222]">Duration (Years)</span>
                <input
                  type="range"
                  min={1}
                  max={10}
                  defaultValue={3}
                  className="flex-1 accent-[#ff6600] ml-2"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#222]">Return Rate (%)</span>
                <input
                  type="range"
                  min={1}
                  max={15}
                  defaultValue={7}
                  className="flex-1 accent-[#ff6600] ml-2"
                />
              </div>
            </div>
            <div className="flex flex-col items-center mt-4 gap-2">
              <div className="text-[#222] text-base font-semibold">
                After 3 Years, You will receive
              </div>
              <div className="text-3xl font-bold text-[#ff6600]">₹ 121000</div>
              <div className="text-[#1ec0e6] font-bold text-base">
                and ₹ 21000 as interest
              </div>
              <button className="bg-[#ff9900] text-white rounded-full px-8 py-3 font-bold text-lg mt-4 shadow hover:bg-orange-600 transition w-full">
                START INVESTING NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-16 text-center max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#222] mb-8">
          Embracing Future of Investments
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Fund", "Safe", "Trust", "Value"].map((cat) => (
            <div
              key={cat}
              className="bg-white border rounded-lg shadow-md px-6 py-4 min-w-[140px]"
            >
              <div className="text-xl font-semibold text-[#1a3c6b]">{cat}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CURATED INVESTMENTS ================= */}
      <section className="py-16 bg-[#e7f7fa] text-center">
        <h2 className="text-3xl font-bold text-[#222] mb-8">
          We have curated investments based on categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-white border rounded-lg shadow-md p-6">
              <h3 className="font-bold text-xl text-[#1a3c6b]">
                Adani Airports
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Secure corporate bond with strong rating
              </p>
              <button className="mt-4 bg-[#ff9900] px-6 py-2 text-white font-semibold rounded-full hover:bg-orange-600 transition">
                Know More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW TO INVEST ================= */}
      <section className="py-16 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#222] mb-10">
          How Easy to Invest?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Complete your KYC", "Select Bond", "Fill & Submit"].map(
            (step, idx) => (
              <div
                key={step}
                className="bg-white border rounded-lg shadow-md p-6"
              >
                <div className="text-5xl font-bold text-[#ff6600] mb-4">
                  {idx + 1}
                </div>
                <p className="text-[#222] font-medium">{step}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["Real Time", "100%", "7 Minutes", "0% Commission"].map((txt) => (
            <div key={txt} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="font-bold text-xl text-[#1a3c6b]">{txt}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#222] mb-6">
          Frequently Asked Questions
        </h2>
        {[
          "What are Bonds?",
          "Why choose BondsIndia?",
          "How do I start investing?",
        ].map((q, idx) => (
          <div key={idx} className="border-b py-4">
            <button
              onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
              className="flex justify-between w-full text-left font-semibold text-[#1a3c6b]"
            >
              {q}
              <span>{faqOpen === idx ? "-" : "+"}</span>
            </button>
            {faqOpen === idx && (
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet facilisis urna.
              </p>
            )}
          </div>
        ))}
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#1a3c6b] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-xl mb-2">BondsIndia</h3>
            <p className="text-sm">
              The easy, fast way to invest money in bonds.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>How it Works</li>
              <li>Bonds Library</li>
              <li>Resources</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Stay Connected</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded text-black w-full"
            />
            <button className="mt-3 bg-[#ff9900] px-6 py-2 text-white font-semibold rounded-full hover:bg-orange-600 transition">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center text-xs text-gray-300 mt-8">
          © {new Date().getFullYear()} BondsIndia. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
