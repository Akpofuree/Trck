"use client";

import Image from "next/image";

export function OnboardingLeftBanner() {
  return (
    <div className="relative hidden w-full lg:flex lg:w-[42%] xl:w-[45%] flex-col justify-between overflow-hidden bg-[#FFF9F2] p-10 min-h-screen">
      {/* Background Gradient Image */}
      <Image
        src="/onboarding-bg.png"
        alt="Trck Onboarding Background"
        fill
        className="object-cover object-left-top"
        priority
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div />

        {/* Trck Logo at bottom left */}
        <div className="flex items-center gap-2">
          <Image
            src="/trck-logo.png"
            alt="Trck"
            width={110}
            height={38}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
