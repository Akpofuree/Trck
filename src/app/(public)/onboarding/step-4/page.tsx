"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Briefcase, Utensils, Palette, Compass, Coffee, Users, Check } from "lucide-react";
import { OnboardingStepper } from "@/components/shared/onboarding-stepper";

interface InterestOption {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function OnboardingStep4Page() {
  const router = useRouter();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "party",
    "food",
    "adventure",
  ]);

  const interests: InterestOption[] = [
    { id: "party", label: "Party", icon: <Briefcase className="h-4 w-4" /> },
    { id: "food", label: "Food", icon: <Utensils className="h-4 w-4" /> },
    { id: "arts", label: "Arts", icon: <Palette className="h-4 w-4" /> },
    { id: "adventure", label: "Adventure", icon: <Compass className="h-4 w-4" /> },
    { id: "chill", label: "Chill", icon: <Coffee className="h-4 w-4" /> },
    { id: "networking", label: "Networking", icon: <Users className="h-4 w-4" /> },
  ];

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleGetStarted = () => {
    const journey = window.localStorage.getItem("trck-journey");
    router.push(journey === "admin" ? "/admin/dashboard" : journey === "host" ? "/host/signup" : "/explore");
  };

  return (
    <div className="flex min-h-screen font-[var(--font-inter)] bg-white text-gray-900">
      {/* Left side: Main Content Area */}
      <div className="flex flex-1 flex-col justify-between px-6 py-10 sm:px-12 lg:px-16 min-h-screen">
        <div />

        {/* Content Container */}
        <div className="mx-auto w-full max-w-[480px] text-center">
          {/* Stepper */}
          <OnboardingStepper currentStep={4} />

          {/* Title */}
          <h1 className="font-[var(--font-playfair)] text-[2.2rem] sm:text-[2.6rem] font-normal leading-[1.25] text-gray-900 tracking-tight mb-3">
            Let&apos;s get to know you
          </h1>

          {/* Subtitle */}
          <p className="text-[0.92rem] sm:text-[0.98rem] text-gray-500 max-w-[440px] mx-auto leading-relaxed mb-8">
            Select what excites you most, so we can show you the best experiences.
          </p>

          {/* Interests Pill Options List */}
          <div className="space-y-3 text-left">
            {interests.map((item) => {
              const isSelected = selectedInterests.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleInterest(item.id)}
                  className={`flex w-full items-center justify-between rounded-full border px-6 py-3 text-[0.92rem] font-medium transition-all ${
                    isSelected
                      ? "border-[#4F46E5] bg-indigo-50/20 ring-1 ring-[#4F46E5] text-gray-900 shadow-sm"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={
                        isSelected ? "text-[#4F46E5]" : "text-gray-500"
                      }
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>

                  {isSelected && (
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4F46E5] text-white">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mx-auto flex w-full max-w-[480px] items-center justify-center pt-8">
          <button
            type="button"
            onClick={handleGetStarted}
            className="inline-flex items-center justify-center rounded-full bg-[#ED5A2E] px-10 py-3 text-[0.92rem] font-semibold text-white shadow-md shadow-[#ED5A2E]/30 transition-all hover:bg-[#d4501f] hover:shadow-lg hover:shadow-[#ED5A2E]/40 active:scale-[0.98]"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Right side: Orange gradient with white Trck pin logo background */}
      <div className="relative hidden w-full lg:flex lg:w-[42%] xl:w-[45%] flex-col justify-between overflow-hidden bg-[#FF5C38] min-h-screen">
        <Image
          src="/onboarding-pin-bg.png"
          alt="Trck Onboarding Pin Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  );
}
