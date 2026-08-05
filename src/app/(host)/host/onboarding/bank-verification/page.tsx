"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, Bell, Menu } from "lucide-react";
import { Logo } from "@/components/shared/logo";

const STEPS = ["Step 1", "Step 2", "Step 3", "Step 4"];

export default function BankVerificationPage() {
  const [accountHolderName, setAccountHolderName] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="w-full h-full flex flex-col min-h-screen bg-[#000000] text-white font-montserrat">
      {/* Desktop Top Header Bar */}
      <header className="hidden md:flex items-center justify-between px-6 py-3 bg-white text-black shrink-0 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Logo width={120} height={44} className="h-9 w-auto" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-3 py-1 text-gray-500 text-xs">
            <Search size={14} />
            <span>Search</span>
          </div>
          <span className="text-xs font-medium">English (United States)</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#ED5A2E] flex items-center justify-center text-white text-xs font-bold">
              DO
            </div>
            <div className="font-poppins">
              <p className="text-[0.826rem] font-normal leading-none text-black">Dominion Ogbaji</p>
              <p className="text-[0.641rem] font-normal leading-none text-black mt-0.5">Super Admin</p>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header Bar */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-[#000000] text-white border-b border-white/10">
        <button className="p-1.5 border border-white/30 rounded-lg">
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-3">
          <button className="p-1 text-white/80">
            <Search size={20} />
          </button>
          <button className="p-1 text-white/80 relative">
            <Bell size={20} />
            <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center text-xs text-white font-bold">
            👤
          </div>
        </div>
      </header>

      {/* Step Progress Bar - Step 3 active */}
      <div className="w-full px-4 pt-8 pb-6 max-w-xl mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="absolute left-0 right-0 top-[9px] h-[2px] bg-white/20 z-0" />
          <div
            className="absolute left-0 top-[9px] h-[2px] bg-[#ED5E2E] z-0 transition-all"
            style={{ width: "66.66%" }}
          />

          {STEPS.map((step, idx) => (
            <div key={step} className="flex flex-col items-center z-10 gap-1.5">
              <div
                className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-all ${
                  idx <= 2
                    ? "bg-[#ED5E2E] border-[#ED5E2E]"
                    : "bg-transparent border-white/30"
                }`}
              >
                {idx <= 2 && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className={`text-[11px] ${idx <= 2 ? "text-white" : "text-white/40"}`}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-2xl mx-auto px-4 pb-12">
        {/* Desktop Title & Subtitle */}
        <div className="hidden md:block text-center mb-8">
          <h1 className="text-[2.349rem] font-semibold leading-none tracking-normal text-white mb-2 font-montserrat">
            Bank Verification
          </h1>
          <p className="text-[1.101rem] font-normal leading-none tracking-normal text-white font-montserrat">
            Enter your bank account details to receive payouts.
          </p>
        </div>

        {/* Mobile Title & Subtitle */}
        <div className="md:hidden text-center mb-6">
          <h1 className="text-[1.326rem] font-semibold text-white mb-1 font-montserrat">
            Bank Verification
          </h1>
          <p className="text-[0.621rem] font-normal text-white font-montserrat">
            Enter your bank account details to receive payouts.
          </p>
        </div>

        <div className="space-y-6">
          {/* Account Holder Name */}
          <div>
            <label className="block text-[0.715rem] md:text-[0.93rem] font-normal text-white mb-1.5 font-poppins">
              Account Holder Name
            </label>
            <input
              type="text"
              value={accountHolderName}
              onChange={(e) => setAccountHolderName(e.target.value)}
              className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5E2E] transition-colors"
            />
          </div>

          {/* Bank Name & Account Number Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[0.715rem] md:text-[0.93rem] font-normal text-white mb-1.5 font-poppins">
                Bank Name
              </label>
              <div className="relative">
                <select
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none appearance-none focus:border-[#ED5E2E] transition-colors cursor-pointer"
                >
                  <option value="" className="bg-black"></option>
                  <option className="bg-black">Chase Bank</option>
                  <option className="bg-black">Bank of America</option>
                  <option className="bg-black">Wells Fargo</option>
                  <option className="bg-black">Barclays</option>
                  <option className="bg-black">Guaranty Trust Bank</option>
                  <option className="bg-black">Zenith Bank</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-[0.715rem] md:text-[0.93rem] font-normal text-white mb-1.5 font-poppins">
                Account Number
              </label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5E2E] transition-colors"
              />
            </div>
          </div>

          {/* Bank Code */}
          <div>
            <label className="block text-[0.715rem] md:text-[0.93rem] font-normal text-white mb-1.5 font-poppins">
              Bank Code
            </label>
            <div className="relative">
              <select
                value={bankCode}
                onChange={(e) => setBankCode(e.target.value)}
                className="w-full bg-white text-black border border-white/30 rounded-lg px-4 py-3 text-sm outline-none appearance-none cursor-pointer font-medium"
              >
                <option value="" className="bg-white text-gray-500">Select</option>
                <option value="058" className="bg-white text-black">058 - GTBank</option>
                <option value="033" className="bg-white text-black">033 - UBA</option>
                <option value="011" className="bg-white text-black">011 - First Bank</option>
                <option value="057" className="bg-white text-black">057 - Zenith Bank</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-black/60 pointer-events-none" />
            </div>
          </div>

          {/* Confirmation Checkbox */}
          <label className="flex items-start gap-2.5 cursor-pointer pt-2">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-[#ED5E2E] cursor-pointer"
            />
            <span className="font-lato text-[1.074rem] font-medium leading-none text-white">
              I confirm that the bank details provided belong to the registered business or individual host.
            </span>
          </label>

          {/* Primary Action Button */}
          <div className="flex justify-center pt-2">
            <Link
              href="/host/onboarding/status"
              className="flex items-center justify-center w-full max-w-[776px] h-[60px] rounded-[11.16px] bg-[#ED5E2E] text-white font-poppins font-medium text-[1.1rem] hover:bg-[#d44d24] active:scale-[0.98] transition-all"
            >
              Verify Bank
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
