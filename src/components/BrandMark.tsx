import React from "react";

interface BrandMarkProps {
  className?: string;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ className = "" }) => (
  <span
    className={`inline-flex shrink-0 items-center justify-center rounded-xl border border-white/15 bg-[#116e52] shadow-md ${className}`}
    aria-hidden="true"
  >
    <svg viewBox="0 0 40 40" className="h-full w-full p-[7px]" fill="none">
      <path
        d="M5 8.5 10.2 29l9.8-14.2L29.8 29 35 8.5"
        stroke="white"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 34h16"
        stroke="#f5d126"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </span>
);
