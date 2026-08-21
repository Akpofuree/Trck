import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all active:scale-[0.97]";
    
    const variants = {
      primary: "bg-[#ED5A2E] text-white shadow-md shadow-[#ED5A2E]/30 hover:bg-[#d4501f] hover:shadow-lg hover:shadow-[#ED5A2E]/40",
      secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
      outline: "border border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50",
      ghost: "text-gray-700 hover:bg-gray-100",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-[0.82rem]",
      md: "px-5 py-2.5 text-[0.88rem]",
      lg: "px-8 py-3.5 text-[0.95rem]",
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
