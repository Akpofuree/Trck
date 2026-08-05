"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { OnboardingStepper } from "@/components/shared/onboarding-stepper";
import { OnboardingLeftBanner } from "@/components/shared/onboarding-left-banner";

interface StepData {
  title: string;
  subtitle: string;
  graphic: string;
}

export default function OnboardingStep1Page() {
  const [data, setData] = useState<StepData | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/onboarding");
        if (res.ok) {
          const apiData = await res.json();
          setData(apiData.steps[0]);
        }
      } catch (e) {
        console.error("Failed to load onboarding data", e);
      }
    }
    loadData();
  }, []);

  return (
    <div className="flex min-h-screen font-[var(--font-inter)] bg-white text-gray-900">
      {/* Left side: Orange gradient banner with Trck logo */}
      <OnboardingLeftBanner />

      {/* Right side: Main content */}
      <div className="flex flex-1 flex-col justify-between px-6 py-10 sm:px-12 lg:px-16 min-h-screen">
        <div />

        {/* Center Container */}
        <div className="mx-auto w-full max-w-[560px] text-center">
          {/* Stepper */}
          <OnboardingStepper currentStep={1} />

          {/* Title */}
          <h1 className="font-[var(--font-playfair)] text-[2.2rem] sm:text-[2.6rem] font-normal leading-[1.25] text-gray-900 tracking-tight mb-3">
            {data ? data.title : "Your city has more to offer."}
          </h1>

          {/* Subtitle */}
          <p className="text-[0.92rem] sm:text-[1rem] text-gray-500 max-w-[420px] mx-auto leading-relaxed mb-10">
            {data ? data.subtitle : "Find hidden gems, premium events, and unique hangouts made for you."}
          </p>

          {/* Main Graphic Illustration */}
          <div className="relative mx-auto my-6 flex justify-center items-center w-full max-w-[420px] h-[180px] sm:h-[220px]">
            <Image
              src={data ? data.graphic : "/onboarding-cards.png"}
              alt="City experiences cards"
              fill
              className="object-contain"
              unoptimized
              priority
            />
          </div>
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="mx-auto flex w-full max-w-[560px] items-center justify-center gap-4 pt-6">
          <Link
            href="/home"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-gray-200 px-7 py-2.5 text-[0.88rem] font-medium text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98]"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Link>

          <Link
            href="/onboarding/step-2"
            className="inline-flex items-center justify-center rounded-full bg-[#ED5A2E] px-8 py-2.5 text-[0.88rem] font-semibold text-white shadow-md shadow-[#ED5A2E]/30 transition-all hover:bg-[#d4501f] hover:shadow-lg hover:shadow-[#ED5A2E]/40 active:scale-[0.98]"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
