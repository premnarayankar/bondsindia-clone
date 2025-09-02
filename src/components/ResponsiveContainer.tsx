import React from "react";

export default function ResponsiveContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full px-2 sm:px-4 md:px-6 lg:px-0 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
