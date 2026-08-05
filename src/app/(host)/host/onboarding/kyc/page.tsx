"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Zap, Search, Bell, Menu } from "lucide-react";
import { Logo } from "@/components/shared/logo";

const STEPS = ["Step 1", "Step 2", "Step 3", "Step 4"];

export default function KYCVerificationPage() {
  const [currentStep] = useState(1);
  const [legalName, setLegalName] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [idType, setIdType] = useState("Individual");
  const [nationalId, setNationalId] = useState("");
  const [idFile, setIdFile] = useState<File | null>(null);
  const [addressFile, setAddressFile] = useState<File | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const years = Array.from({ length: 80 }, (_, i) => String(2006 - i));
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));

  return (
    <div className="w-full h-full flex flex-col min-h-screen bg-[#000000] text-white font-montserrat">
      {/* Desktop Top Navigation */}
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

      {/* Step Progress Bar */}
      <div className="w-full px-4 pt-8 pb-6 max-w-xl mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="absolute left-0 right-0 top-[9px] h-[2px] bg-white/20 z-0" />
          <div
            className="absolute left-0 top-[9px] h-[2px] bg-[#ED5E2E] z-0 transition-all"
            style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
          />

          {STEPS.map((step, idx) => (
            <div key={step} className="flex flex-col items-center z-10 gap-1.5">
              <div
                className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-all ${
                  idx <= currentStep
                    ? "bg-[#ED5E2E] border-[#ED5E2E]"
                    : "bg-transparent border-white/30"
                }`}
              >
                {idx <= currentStep && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className={`text-[11px] ${idx <= currentStep ? "text-white" : "text-white/40"}`}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Form Content */}
      <div className="flex-1 w-full max-w-2xl mx-auto px-4 pb-12">
        {/* Desktop Title & Subtitle */}
        <div className="hidden md:block text-center mb-8">
          <h1 className="text-[2.349rem] font-semibold leading-none tracking-normal text-white mb-2 font-montserrat">
            KYC Verification
          </h1>
          <p className="text-[1.101rem] font-normal leading-none tracking-normal text-white font-montserrat">
            Enter valid government-issued identification information.
          </p>
        </div>

        {/* Mobile Title & Subtitle */}
        <div className="md:hidden text-center mb-6">
          <h1 className="text-[1.326rem] font-semibold text-white mb-1 font-montserrat">
            KYC Verification
          </h1>
          <p className="text-[0.621rem] font-normal text-white font-montserrat">
            Enter valid government-issued identification information.
          </p>
        </div>

        <div className="space-y-6">
          {/* Legal Full Name */}
          <div>
            <label className="block text-[0.715rem] md:text-[0.93rem] font-normal text-white mb-1.5 font-poppins">
              Legal Name
            </label>
            <input
              type="text"
              value={legalName}
              onChange={(e) => setLegalName(e.target.value)}
              placeholder="Matching ID"
              className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5E2E] transition-colors placeholder:text-white/30"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-[0.715rem] md:text-[0.93rem] font-normal text-white mb-1.5 font-poppins">
              Date of Birth
            </label>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[0.715rem] md:text-[0.93rem] font-normal text-white mb-1 font-poppins">Year</label>
                <div className="relative">
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full bg-transparent border border-white/30 rounded-lg px-3 py-3 text-white text-sm outline-none appearance-none focus:border-[#ED5E2E] transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-[#000000]" />
                    {years.map((y) => (
                      <option key={y} value={y} className="bg-[#000000]">{y}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[0.715rem] md:text-[0.93rem] font-normal text-white mb-1 font-poppins">Month</label>
                <div className="relative">
                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-full bg-transparent border border-white/30 rounded-lg px-3 py-3 text-white text-sm outline-none appearance-none focus:border-[#ED5E2E] transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-[#000000]" />
                    {months.map((m) => (
                      <option key={m} value={m} className="bg-[#000000]">{m}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[0.715rem] md:text-[0.93rem] font-normal text-white mb-1 font-poppins">Day</label>
                <div className="relative">
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="w-full bg-transparent border border-white/30 rounded-lg px-3 py-3 text-white text-sm outline-none appearance-none focus:border-[#ED5E2E] transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-[#000000]" />
                    {days.map((d) => (
                      <option key={d} value={d} className="bg-[#000000]">{d}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* ID Type + National ID Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[0.715rem] md:text-[0.93rem] font-normal text-white mb-1.5 font-poppins">ID Type</label>
              <div className="relative">
                <div className="flex items-center border border-white/30 rounded-lg px-3.5 py-3 bg-white text-black focus-within:border-[#ED5E2E] transition-colors">
                  <Zap size={14} className="text-black/60 mr-2 shrink-0" />
                  <select
                    value={idType}
                    onChange={(e) => setIdType(e.target.value)}
                    className="flex-1 bg-transparent text-black font-medium text-sm outline-none appearance-none cursor-pointer"
                  >
                    <option className="bg-white">Individual</option>
                    <option className="bg-white">National ID</option>
                    <option className="bg-white">Passport</option>
                    <option className="bg-white">Driver&apos;s License</option>
                  </select>
                  <ChevronDown size={14} className="text-black/60 ml-1 shrink-0" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[0.715rem] md:text-[0.93rem] font-normal text-white mb-1.5 font-poppins">National ID Number</label>
              <input
                type="text"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
                placeholder="EPX37628890E"
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5E2E] transition-colors placeholder:text-white/30"
              />
            </div>
          </div>

          {/* Upload Cards */}
          <div className="space-y-4 pt-2">
            {/* ID Document Card */}
            <div className="bg-white text-black rounded-xl p-6 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mb-3 bg-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <p className="font-inter font-medium text-[0.749rem] md:text-[0.875rem] leading-[150%] text-[#101010] md:text-[#000000] mb-1">
                Upload ID Document
              </p>
              <p className="font-inter font-normal text-[0.626rem] md:text-[0.75rem] text-[#878787] mb-4">
                JPEG • PNG • PDF
              </p>
              <label className="cursor-pointer w-[90px] h-[34px] bg-white border border-gray-300 rounded-[4px] px-[12px] py-[8px] flex items-center justify-center gap-[8px] hover:bg-gray-50 transition-colors">
                <span className="font-inter font-medium text-[0.642rem] md:text-xs text-[#383838] md:text-[#000000]">
                  Browse File
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setIdFile(e.target.files?.[0] ?? null)}
                />
              </label>
              {idFile && <span className="mt-2 text-xs text-green-600 font-medium">{idFile.name}</span>}
            </div>

            {/* Proof of Address Card */}
            <div className="bg-white text-black rounded-xl p-6 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mb-3 bg-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <p className="font-inter font-medium text-[0.749rem] md:text-[0.875rem] leading-[150%] text-[#101010] md:text-[#000000] mb-1">
                Upload Proof of Address
              </p>
              <p className="font-inter font-normal text-[0.626rem] md:text-[0.75rem] text-[#878787] mb-4">
                JPEG • PNG • PDF
              </p>
              <label className="cursor-pointer w-[90px] h-[34px] bg-white border border-gray-300 rounded-[4px] px-[12px] py-[8px] flex items-center justify-center gap-[8px] hover:bg-gray-50 transition-colors">
                <span className="font-inter font-medium text-[0.642rem] md:text-xs text-[#383838] md:text-[#000000]">
                  Browse File
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setAddressFile(e.target.files?.[0] ?? null)}
                />
              </label>
              {addressFile && <span className="mt-2 text-xs text-green-600 font-medium">{addressFile.name}</span>}
            </div>
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-2.5 cursor-pointer pt-2">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-[#ED5E2E] cursor-pointer"
            />
            <span className="font-lato text-[1.074rem] font-medium leading-none text-white">
              I confirm that the information provided is accurate and matches my government ID.
            </span>
          </label>

          {/* Submit / Continue Button */}
          <div className="flex justify-center pt-2">
            <Link
              href="/host/onboarding/bank-verification"
              className="flex items-center justify-center w-full max-w-[776px] h-[60px] rounded-[11.16px] bg-[#ED5E2E] text-white font-poppins font-medium text-[1.1rem] hover:bg-[#d44d24] active:scale-[0.98] transition-all"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
