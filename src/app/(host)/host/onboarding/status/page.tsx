"use client";

import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { CheckCircle2, AlertCircle, Search, ShieldCheck, Building2, Bell, Menu } from "lucide-react";

export default function KYCStatusPage() {
  return (
    <div className="w-full h-full flex flex-col min-h-screen bg-[#000000] text-white font-montserrat">
      {/* Header Desktop */}
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

      {/* Header Mobile */}
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

      {/* Main Content */}
      <div className="flex-1 w-full max-w-2xl mx-auto px-4 py-10">
        {/* Main Heading & Subtitle */}
        <h1 className="font-montserrat text-[2.349rem] font-semibold leading-none tracking-normal text-white mb-2">
          Review Success
        </h1>
        <p className="font-montserrat text-[1.101rem] font-normal leading-none tracking-normal text-white mb-8">
          Your document has successfully been reviewed.
        </p>

        {/* Checklist Card */}
        <div className="bg-[#212124] rounded-2xl p-6 mb-8 border border-white/10">
          <p className="font-montserrat text-[1.2rem] font-semibold leading-none tracking-normal text-white mb-6">
            Checklist
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <ShieldCheck size={22} className="text-white/80" />
              <span className="font-montserrat text-[1.2rem] font-semibold leading-none tracking-normal text-white">
                ID Verified
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={22} className="text-white/80" />
              <span className="font-montserrat text-[1.2rem] font-semibold leading-none tracking-normal text-white">
                Address Verified
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Building2 size={22} className="text-white/80" />
              <span className="font-montserrat text-[1.2rem] font-semibold leading-none tracking-normal text-white">
                Bank Linked
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-[7.32px]">
            <button className="w-[249.51px] max-w-full h-[58.54px] rounded-[8.7px] border-[0.73px] border-white/40 bg-transparent px-[17.56px] py-[7.32px] font-montserrat text-[1.167rem] font-normal leading-none tracking-normal text-white hover:bg-white/5 transition-colors flex items-center justify-center gap-[7.32px]">
              Update Document
            </button>
            <button className="w-[249.51px] max-w-full h-[58.54px] rounded-[8.7px] border-[0.73px] border-white/40 bg-transparent px-[17.56px] py-[7.32px] font-montserrat text-[1.167rem] font-normal leading-none tracking-normal text-white hover:bg-white/5 transition-colors flex items-center justify-center gap-[7.32px]">
              Contact Support
            </button>
          </div>
        </div>

        {/* Estimated Processing Time */}
        <div className="flex items-center gap-2 text-white mb-8">
          <AlertCircle size={18} className="text-white/70" />
          <span className="font-montserrat text-[1.056rem] font-medium leading-none tracking-normal text-white">
            Estimated Time:{" "}
            <span className="font-poppins text-[1.056rem] font-medium leading-none tracking-normal text-white">
              1–2 Business Days
            </span>
          </span>
        </div>

        {/* Reposition Section Heading */}
        <div className="space-y-4">
          <h2 className="font-montserrat text-[1.261rem] font-semibold leading-none tracking-normal text-white">
            Decision
          </h2>

          {/* Success Notification Card */}
          <div className="border border-[#00FF00] bg-green-950/20 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#00FF00] flex items-center justify-center text-black font-bold shrink-0 mt-0.5">
              ✓
            </div>
            <div>
              <p className="font-montserrat text-[1.396rem] font-semibold leading-none tracking-normal text-white mb-2">
                Review Success
              </p>
              <p className="font-montserrat text-[1.059rem] font-medium leading-none tracking-normal text-[#32CD32]">
                Your document has successfully been reviewed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
