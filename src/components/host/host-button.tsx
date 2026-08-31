import React from "react";
import Link from "next/link";

interface HostButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
  fullWidth?: boolean;
}

export function HostButton({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  className = "",
  fullWidth = true,
}: HostButtonProps) {
  const baseClasses = `font-poppins font-medium transition-all inline-flex items-center justify-center text-center text-sm md:text-base ${
    fullWidth ? "w-full" : "w-auto px-6"
  } py-3.5 md:py-4 rounded-[11px]`;

  const variantClasses =
    variant === "primary"
      ? disabled
        ? "bg-[#ED5828] text-white opacity-50 cursor-not-allowed"
        : "bg-[#ED5828] text-white hover:bg-[#d44d24] active:scale-[0.98] cursor-pointer shadow-sm"
      : disabled
      ? "border border-white/20 text-white/40 cursor-not-allowed"
      : "border border-white/25 text-white hover:bg-white/5 active:scale-[0.98] cursor-pointer";

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
}
