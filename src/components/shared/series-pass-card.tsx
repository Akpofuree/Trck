"use client";

import React from "react";
import { Sparkles, Check } from "lucide-react";

interface SeriesPassCardProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  discountText?: string;
  originalPrice?: string;
  currentPrice?: string;
  buttonText?: string;
  features?: string[];
  onBuyPass?: () => void;
  className?: string;
}

export function SeriesPassCard({
  title = "Get the Series Pass",
  subtitle = "Attend all 8 events and save on individual tickets",
  badgeText = "Best Value",
  discountText = "Save 25%",
  originalPrice = "$980",
  currentPrice = "$700",
  buttonText = "Buy Series Pass",
  features = [
    "Priority Seating",
    "Exclusive Meet & Greet Opportunity",
    "10% Discount on Food and Beverages",
    "Free Series Merchandise Package",
  ],
  onBuyPass,
  className = "",
}: SeriesPassCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] border border-[#ED5A2E]/80 bg-[#120f0d] p-5 sm:p-7 text-white shadow-xl ${className}`}
    >
      {/* Decorative Terracotta Organic Curved Wave Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
        <div className="absolute -bottom-10 -right-10 h-72 w-96 rounded-full bg-[#ED5A2E]/10 blur-3xl" />
        <svg
          className="absolute bottom-0 right-0 h-[60%] w-full"
          preserveAspectRatio="none"
          viewBox="0 0 500 200"
          fill="none"
        >
          <path
            d="M0 130 C 150 170, 300 80, 500 110 L 500 200 L 0 200 Z"
            fill="#5A2E1F"
            fillOpacity="0.45"
          />
          <path
            d="M0 165 C 180 120, 340 160, 500 135 L 500 200 L 0 200 Z"
            fill="#8B452B"
            fillOpacity="0.65"
          />
          <path
            d="M50 200 C 220 150, 370 180, 500 155 L 500 200 Z"
            fill="#A85335"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        {/* Left / Main content */}
        <div className="max-w-xl">
          {/* Header Tag and Badge */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ED5A2E]">
              <Sparkles className="h-3.5 w-3.5 fill-[#ED5A2E]" />
              <span className="text-white/90">{badgeText}</span>
            </div>
            {discountText && (
              <span className="rounded-lg bg-white/10 px-2.5 py-1 text-[0.72rem] font-medium text-white/90 backdrop-blur-sm">
                {discountText}
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-white/75">
            {subtitle}
          </p>

          {/* Checklist */}
          <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-white/90">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 shrink-0 text-white/90 stroke-[2.5]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right / Pricing & Action */}
        <div className="flex flex-row items-end justify-between md:flex-col md:items-end md:justify-end gap-3 pt-4 md:pt-0">
          <div className="text-left md:text-right">
            {originalPrice && (
              <span className="block text-xs sm:text-sm text-white/60 line-through">
                {originalPrice}
              </span>
            )}
            <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {currentPrice}
            </span>
          </div>

          <button
            type="button"
            onClick={onBuyPass}
            className="rounded-xl bg-white px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-bold text-[#ED5A2E] shadow-lg transition-all hover:bg-white/90 hover:shadow-xl active:scale-95"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
