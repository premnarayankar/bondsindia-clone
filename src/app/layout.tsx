import "./globals.css";
import type { Metadata } from "next";
import HeaderSection from "@/components/HeaderSection";
import TopInfoBar from "@/components/TopInfoBar";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: {
    default: "BondsIndia – Invest in Bonds Online | SEBI Registered",
    template: "%s | BondsIndia", // Page titles will append here
  },
  description:
    "BondsIndia is a SEBI-registered online bond platform for investing in Indian fixed-income securities like bonds, 54EC, IPOs, Government Bonds, and more.",

  keywords: [
    "Bonds India",
    "Online Bonds Investment",
    "Buy Bonds Online",
    "Corporate Bonds",
    "Government Bonds",
    "54EC Bonds",
    "Bond IPOs",
    "Fixed Income Securities",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopInfoBar />
        <HeaderSection />
        <main>{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
