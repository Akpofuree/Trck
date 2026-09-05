"use client";

import Image from "next/image";
import { Logo } from "./logo";

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
          <Logo width={120} height={44} className="h-9 w-auto" />
        </div>
      </div>
    </div>
  );
}
