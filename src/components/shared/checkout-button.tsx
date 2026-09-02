"use client";

import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

interface CheckoutButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}

export function CheckoutButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  type = "button",
  icon,
}: CheckoutButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-tight rounded-xl transition-all duration-200 select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-3 text-xs sm:text-sm gap-2",
    lg: "px-6 py-3.5 sm:py-4 text-sm sm:text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#ED5A2E] text-white hover:bg-[#d4501f] shadow-lg shadow-[#ED5A2E]/25 active:bg-[#c04518]",
    secondary:
      "bg-[#222222] text-white hover:bg-[#2c2c2c] border border-white/10 hover:border-white/20",
    outline:
      "border border-[#ED5A2E] text-[#ED5A2E] bg-transparent hover:bg-[#ED5A2E]/10",
    white:
      "bg-white text-[#ED5A2E] border border-[#ED5A2E] hover:bg-[#FDDDD5] shadow-sm",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href && !disabled && !loading) {
    return (
      <Link href={href} className={combinedClasses}>
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClasses}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
      <span>{children}</span>
    </button>
  );
}

/**
 * Reusable Centered Checkout Stepper (Steps 1 -> 2 -> 3)
 * Connecting line is perfectly centered through the node circles.
 */
interface CheckoutStepperProps {
  currentStep: 1 | 2 | 3;
}

export function CheckoutStepper({ currentStep }: CheckoutStepperProps) {
  const steps = [
    { num: 1, label: "Select Tickets" },
    { num: 2, label: "Review" },
    { num: 3, label: "Payment" },
  ];

  return (
    <div className="relative mx-auto my-6 w-full max-w-[480px] px-6">
      {/* Centered Connecting Line */}
      <div className="absolute top-[16px] left-[18%] right-[18%] h-[2px] bg-white/15 -z-0">
        <div
          className="h-full bg-[#ED5A2E] transition-all duration-300"
          style={{
            width:
              currentStep === 1
                ? "0%"
                : currentStep === 2
                ? "50%"
                : "100%",
          }}
        />
      </div>

      {/* Step Nodes */}
      <div className="relative z-10 flex items-center justify-between">
        {steps.map((step) => {
          const isPassed = currentStep > step.num;
          const isActive = currentStep === step.num;

          return (
            <div key={step.num} className="flex flex-col items-center">
              {/* Circle Node */}
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all shadow-md ${
                  isPassed
                    ? "bg-[#ED5A2E] text-white"
                    : isActive
                    ? "bg-[#ED5A2E] text-white ring-4 ring-[#ED5A2E]/20"
                    : "bg-[#1E1E1E] text-white/50 border border-white/20"
                }`}
              >
                {step.num}
              </div>

              {/* Label below */}
              <span
                className={`mt-2 text-xs font-medium tracking-tight ${
                  isActive || isPassed ? "text-white" : "text-white/45"
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
