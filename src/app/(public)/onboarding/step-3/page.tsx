"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, Briefcase, Banknote, Clock, Check } from "lucide-react";
import { OnboardingStepper } from "@/components/shared/onboarding-stepper";

type JourneyOption = "explorer" | "host" | "admin";

interface OptionItem {
  id: JourneyOption;
  title: string;
  desc: string;
}

interface Step3Data {
  title: string;
  subtitle: string;
  options: OptionItem[];
}

export default function OnboardingStep3Page() {
  const router = useRouter();
  const [selectedJourney, setSelectedJourney] = useState<JourneyOption>("explorer");
  const [data, setData] = useState<Step3Data | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/onboarding");
        if (res.ok) {
          const apiData = await res.json();
          setData(apiData.steps[2]);
        }
      } catch (e) {
        console.error("Failed to load onboarding data", e);
      }
    }
    loadData();
  }, []);

  const handleContinue = async () => {
    try {
      await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ journey: selectedJourney }),
      });
    } catch (e) {
      console.error("Failed to post onboarding choice", e);
    }
    router.push("/onboarding/step-4");
  };

  const getIcon = (id: JourneyOption) => {
    switch (id) {
      case "explorer":
        return <Briefcase className="h-5 w-5" />;
      case "host":
        return <Banknote className="h-5 w-5" />;
      case "admin":
        return <Clock className="h-5 w-5" />;
    }
  };

  const options = data?.options || [
    { id: "explorer", title: "Explorer", desc: "Discover and book experiences" },
    { id: "host", title: "Host", desc: "Create, share & manage events" },
    { id: "admin", title: "Admin", desc: "Manage and oversee activities" },
  ];

  return (
    <div className="flex min-h-screen font-[var(--font-inter)] bg-white text-gray-900">
      {/* Left side: Main Content Area */}
      <div className="flex flex-1 flex-col justify-between px-6 py-10 sm:px-12 lg:px-16 min-h-screen">
        <div />

        {/* Content Container */}
        <div className="mx-auto w-full max-w-[560px] text-center">
          {/* Stepper */}
          <OnboardingStepper currentStep={3} />

          {/* Title */}
          <h1 className="font-[var(--font-playfair)] text-[2.2rem] sm:text-[2.6rem] font-normal leading-[1.25] text-gray-900 tracking-tight mb-3">
            {data ? data.title : "Choose your journey."}
          </h1>

          {/* Subtitle */}
          <p className="text-[0.92rem] sm:text-[1rem] text-gray-500 max-w-[420px] mx-auto leading-relaxed mb-10">
            {data ? data.subtitle : "Are you here to explore events, or to create them?"}
          </p>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-left">
            {options.map((item) => {
              const isSelected = selectedJourney === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedJourney(item.id)}
                  className={`relative flex flex-col justify-between rounded-2xl p-5 border text-left transition-all ${
                    isSelected
                      ? "border-[#ED5A2E] bg-orange-50/20 ring-2 ring-[#ED5A2E]/20 shadow-md"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#ED5A2E] text-white">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                  )}
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                      isSelected
                        ? "bg-orange-100 text-[#ED5A2E]"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {getIcon(item.id)}
                  </div>
                  <div>
                    <h3 className="text-[0.95rem] font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[0.78rem] leading-relaxed text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="mx-auto flex w-full max-w-[560px] items-center justify-center gap-4 pt-8">
          <Link
            href="/onboarding/step-2"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-gray-200 px-7 py-2.5 text-[0.88rem] font-medium text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98]"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Link>

          <button
            type="button"
            onClick={handleContinue}
            className="inline-flex items-center justify-center rounded-full bg-[#ED5A2E] px-8 py-2.5 text-[0.88rem] font-semibold text-white shadow-md shadow-[#ED5A2E]/30 transition-all hover:bg-[#d4501f] hover:shadow-lg hover:shadow-[#ED5A2E]/40 active:scale-[0.98]"
          >
            Continue
          </button>
        </div>
      </div>

      {/* Right side: Orange gradient banner */}
      <div className="relative hidden w-full lg:flex lg:w-[42%] xl:w-[45%] flex-col justify-between overflow-hidden bg-[#FF5C38] min-h-screen">
        <Image
          src="/onboarding-pin-bg.png"
          alt="Trck Onboarding Pin Background"
          fill
          className="object-cover object-center"
          unoptimized
          priority
        />
      </div>
    </div>
  );
}
