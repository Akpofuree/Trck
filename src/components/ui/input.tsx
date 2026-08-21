import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error = false, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "w-full rounded-[0.5rem] border bg-gray-50 px-4 py-3.5 text-[0.9rem] text-gray-800 outline-none transition-all placeholder:text-gray-400",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            : "border-gray-200 focus:border-[#ED5A2E] focus:ring-2 focus:ring-[#ED5A2E]/20",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
