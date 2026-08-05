"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import { Logo } from "@/components/shared/logo";

const TOTAL_DIGITS = 6;

export default function Page() {
  const [digits, setDigits] = useState<string[]>(Array(TOTAL_DIGITS).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const updated = [...digits];
    updated[index] = value;
    setDigits(updated);
    if (value && index < TOTAL_DIGITS - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, TOTAL_DIGITS);
    const updated = [...digits];
    pasted.split("").forEach((char, i) => { updated[i] = char; });
    setDigits(updated);
    const nextEmpty = updated.findIndex((d) => !d);
    inputRefs.current[nextEmpty === -1 ? TOTAL_DIGITS - 1 : nextEmpty]?.focus();
  };

  // Split into two groups of 3 (with dash between)
  const group1 = [0, 1, 2];
  const group2 = [3, 4, 5];

  return (
    <div className="flex min-h-screen flex-col bg-white font-[var(--font-inter)]">
      {/* Header */}
      <div className="px-8 py-6">
        <Link href="/" className="inline-flex items-center">
          <Logo width={120} height={44} className="h-8 w-auto" />
        </Link>
      </div>

      {/* Main content */}
      <div className="flex flex-1 items-center justify-center px-8">
        <div className="flex w-full max-w-[700px] items-center justify-between gap-16">
          {/* Left: Passcode entry */}
          <div className="flex-1">
            <h1 className="mb-8 text-[2rem] font-semibold text-gray-800 tracking-tight">
              Enter Passcode
            </h1>

            {/* Digit inputs */}
            <div
              className="flex items-center gap-3"
              onPaste={handlePaste}
            >
              {/* Group 1 */}
              {group1.map((idx) => (
                <input
                  key={idx}
                  id={`passcode-digit-${idx}`}
                  ref={(el) => { inputRefs.current[idx] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digits[idx]}
                  onChange={(e) => handleChange(e.target.value, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className="h-[3.2rem] w-[3.2rem] rounded-[0.55rem] border-0 bg-[#FDDDD5] text-center text-[1.2rem] font-semibold text-[#ED5A2E] outline-none ring-2 ring-transparent transition-all focus:ring-[#ED5A2E] placeholder:text-[#ED5A2E]/40 caret-[#ED5A2E]"
                />
              ))}

              {/* Dash */}
              <span className="text-[1.5rem] font-light text-gray-400 select-none">—</span>

              {/* Group 2 */}
              {group2.map((idx) => (
                <input
                  key={idx}
                  id={`passcode-digit-${idx}`}
                  ref={(el) => { inputRefs.current[idx] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digits[idx]}
                  onChange={(e) => handleChange(e.target.value, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className="h-[3.2rem] w-[3.2rem] rounded-[0.55rem] border-0 bg-[#FDDDD5] text-center text-[1.2rem] font-semibold text-[#ED5A2E] outline-none ring-2 ring-transparent transition-all focus:ring-[#ED5A2E] placeholder:text-[#ED5A2E]/40 caret-[#ED5A2E]"
                />
              ))}
            </div>

            <Link
              href="/forgot-passcode"
              id="forgot-passcode"
              className="mt-5 inline-block text-[0.85rem] text-[#ED5A2E] hover:underline transition-opacity hover:opacity-80"
            >
              Forgot your passcode?
            </Link>
          </div>

          {/* Right: Padlock illustration */}
          <div className="hidden flex-shrink-0 sm:flex items-center justify-center">
            <div className="relative flex h-[160px] w-[130px] flex-col items-center">
              {/* Shackle (top arc) */}
              <div className="absolute -top-[52px] left-1/2 h-[72px] w-[72px] -translate-x-1/2 rounded-t-full border-[10px] border-gray-300 border-b-transparent bg-transparent" />
              {/* Lock body */}
              <div className="absolute bottom-0 flex h-[110px] w-full flex-col items-center justify-center rounded-[1.2rem] bg-gray-100 shadow-md">
                {/* Fingerprint button */}
                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#FDDDD5] shadow-inner">
                  {/* SVG Fingerprint */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 stroke-[#ED5A2E] fill-none"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  >
                    <path d="M12 2C9.24 2 6.8 3.23 5.17 5.2" />
                    <path d="M2.46 8.5A9.96 9.96 0 0 0 2 12c0 2.21.72 4.26 1.93 5.92" />
                    <path d="M21.54 8.5A9.96 9.96 0 0 1 22 12c0 1.64-.4 3.18-1.1 4.55" />
                    <path d="M18.83 5.2A9.95 9.95 0 0 0 12 2" />
                    <path d="M7.5 12a4.5 4.5 0 0 1 9 0c0 1.65-.56 3.17-1.5 4.38" />
                    <path d="M12 7.5a4.5 4.5 0 0 1 4.47 4" />
                    <path d="M9.5 16.5A4.49 4.49 0 0 1 7.5 12" />
                    <path d="M12 12v.01" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-8 py-6 text-[0.78rem] text-gray-400">
        <button id="passcode-language-picker" className="flex items-center gap-1 hover:text-gray-600 transition-colors">
          English (United Kingdom)
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
        <Link href="/privacy" className="hover:text-gray-600 transition-colors">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
