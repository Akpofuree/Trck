"use client";

interface OnboardingStepperProps {
  currentStep: 1 | 2 | 3 | 4;
}

export function OnboardingStepper({ currentStep }: OnboardingStepperProps) {
  const steps = [
    { num: 1, label: "Step 1" },
    { num: 2, label: "Step 2" },
    { num: 3, label: "Step 3" },
    { num: 4, label: "Step 4" },
  ];

  return (
    <div className="relative mx-auto mb-10 w-full max-w-[440px] px-4">
      {/* Connecting line background */}
      <div className="absolute top-[13px] left-[15%] right-[15%] h-[2.5px] bg-slate-100 -z-0">
        <div
          className="h-full bg-[#ED5A2E] transition-all duration-300"
          style={{
            width:
              currentStep === 1
                ? "0%"
                : currentStep === 2
                ? "33.3%"
                : currentStep === 3
                ? "66.6%"
                : "100%",
          }}
        />
      </div>

      {/* Step nodes */}
      <div className="relative z-10 flex items-center justify-between">
        {steps.map((step) => {
          const isActive = currentStep === step.num;
          const isPassed = currentStep > step.num;

          return (
            <div key={step.num} className="flex flex-col items-center gap-2">
              <div className="relative flex items-center justify-center">
                {/* Active Outer Soft Purple/Blue Ring Halo */}
                {isActive && (
                  <div className="absolute -inset-2.5 rounded-full bg-[#8B5CF6]/15 ring-8 ring-[#8B5CF6]/10" />
                )}

                {/* Node Circle */}
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full transition-all ${
                    isPassed
                      ? "bg-[#ED5A2E] text-white shadow-sm"
                      : isActive
                      ? "border-2 border-[#ED5A2E] bg-white shadow-md"
                      : "border-2 border-slate-200 bg-white"
                  }`}
                >
                  {/* Inner Dot */}
                  <div
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      isPassed
                        ? "bg-white"
                        : isActive
                        ? "bg-[#ED5A2E]"
                        : "bg-slate-200"
                    }`}
                  />
                </div>
              </div>

              {/* Label */}
              <span
                className={`text-[0.8rem] font-semibold tracking-tight ${
                  isActive || isPassed ? "text-[#1E293B]" : "text-slate-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
