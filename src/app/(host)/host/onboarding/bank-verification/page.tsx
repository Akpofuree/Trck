"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Calendar as CalendarIcon,
  Megaphone,
  Wallet,
  Users,
  Ticket,
  Music,
  TrendingUp,
  Star,
  FileText,
  Settings,
  Search,
  Bell,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";

const STEPS = ["Step 1", "Step 2", "Step 3", "Step 4"];

const NAV_ITEMS = [
  {
    section: "Home",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, href: "/host/dashboard", active: true },
      { label: "Calenders", icon: CalendarIcon, href: "/host/calendar" },
      { label: "Promotions", icon: Megaphone, href: "/host/promotions" },
      { label: "Payouts", icon: Wallet, href: "/host/payouts" },
    ],
  },
  {
    section: "Management",
    items: [
      { label: "Users", icon: Users, href: "#" },
      { label: "Tickets", icon: Ticket, href: "#" },
      { label: "Events", icon: Music, href: "#" },
      { label: "Earnings", icon: TrendingUp, href: "#" },
      { label: "Reviews", icon: Star, href: "/host/reviews" },
    ],
  },
  {
    section: "Other",
    items: [
      { label: "Report", icon: FileText, href: "#" },
      { label: "Settings", icon: Settings, href: "#" },
    ],
  },
];

export default function BankVerificationPage() {
  const [accountHolderName, setAccountHolderName] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-montserrat">

      {/* ── WHITE TOP HEADER (Desktop) ─────────────────── */}
      <header className="hidden md:flex h-[70px] bg-white items-center justify-between px-6 border-b border-gray-100 shrink-0 z-20">
        <span className="text-black font-semibold text-[1rem] font-poppins">Dashboard</span>
        <div className="flex items-center gap-3">
          <button className="relative p-1.5 text-gray-500 hover:text-gray-700 transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="w-px h-6 bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#ED5828] flex items-center justify-center text-white text-xs font-bold">
              DO
            </div>
            <div className="font-poppins">
              <p className="text-[0.826rem] font-normal leading-none text-black">Dominion Ogbaji</p>
              <p className="text-[0.641rem] font-normal leading-none text-gray-500 mt-0.5">Super Admin</p>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE HEADER ───────────────────────────────── */}
      <div className="md:hidden flex flex-col shrink-0">
        <header className="flex items-center justify-between px-4 py-3 bg-[#000000]">
          {/* Hamburger */}
          <button className="w-10 h-10 border-2 border-dashed border-white/40 rounded-lg flex items-center justify-center text-white">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <rect width="18" height="2" rx="1" fill="white"/>
              <rect y="6" width="18" height="2" rx="1" fill="white"/>
              <rect y="12" width="18" height="2" rx="1" fill="white"/>
            </svg>
          </button>
          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80">
              <Search size={18} />
            </button>
            <button className="relative w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80">
              <Bell size={18} />
              <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border border-black" />
            </button>
            <div className="w-9 h-9 rounded-full bg-[#5B9BD5] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>
        </header>
        {/* Blue brand line */}
        <div className="h-[3px] bg-[#0099FF] w-full" />
      </div>

      {/* ── BODY: SIDEBAR + CONTENT ──────────────────── */}
      <div className="flex flex-1">

        {/* ── SIDEBAR ────────────────────────────────── */}
        <aside
          className={`hidden md:flex flex-col bg-[#0D0D0D] border-r border-white/10 transition-all duration-300 shrink-0 ${
            sidebarCollapsed ? "w-[60px]" : "w-[240px]"
          }`}
        >
          {/* Collapse toggle */}
          <div className="flex items-center justify-end px-3 pt-4 pb-2">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="w-7 h-7 rounded-lg border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
            >
              <ChevronLeft
                size={14}
                className={`transition-transform duration-300 ${sidebarCollapsed ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Search */}
          {!sidebarCollapsed && (
            <div className="px-3 pb-4">
              <div className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 rounded-lg px-3 py-2">
                <Search size={13} className="text-white/40 shrink-0" />
                <span className="text-white/30 text-xs flex-1">Search</span>
                <div className="flex items-center gap-0.5">
                  <span className="text-[10px] text-white/30 border border-white/20 rounded px-1">⌘</span>
                  <span className="text-[10px] text-white/30 border border-white/20 rounded px-1">K</span>
                </div>
              </div>
            </div>
          )}

          {/* Nav sections */}
          <nav className="flex-1 overflow-y-auto px-2 space-y-4 pb-6">
            {NAV_ITEMS.map((section) => (
              <div key={section.section}>
                {!sidebarCollapsed && (
                  <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/30 px-3 mb-2">
                    {section.section}
                  </p>
                )}
                <div className="space-y-0.5">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group relative ${
                          item.active
                            ? "bg-[#ED5828] text-white"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.active && !sidebarCollapsed && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#ED5828] rounded-r-full -ml-2" />
                        )}
                        <Icon size={17} className="shrink-0" />
                        {!sidebarCollapsed && (
                          <span className="text-[0.82rem] font-medium">{item.label}</span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* ── MAIN CONTENT ───────────────────────────── */}
        <main className="flex-1 bg-[#0D0D0D] overflow-y-auto">
          <div className="max-w-3xl mx-auto px-6 py-8">

            {/* Step Progress Bar — Step 3 active */}
            <div className="w-full max-w-xl mx-auto mb-8">
              <div className="relative flex items-center justify-between">
                <div className="absolute left-0 right-0 top-[9px] h-[2px] bg-white/15 z-0" />
                <div
                  className="absolute left-0 top-[9px] h-[2px] bg-[#ED5828] z-0"
                  style={{ width: "66.66%" }}
                />
                {STEPS.map((step, idx) => (
                  <div key={step} className="flex flex-col items-center z-10 gap-1.5">
                    <div
                      className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-all ${
                        idx <= 2
                          ? "bg-[#ED5828] border-[#ED5828]"
                          : "bg-transparent border-white/30"
                      }`}
                    >
                      {idx <= 2 && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <span className={`text-[11px] ${idx <= 2 ? "text-white" : "text-white/40"}`}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Page Title */}
            <div className="text-center mb-8">
              <h1 className="text-[2.2rem] font-semibold text-white mb-2">
                Bank Verification
              </h1>
              <p className="text-[1rem] text-white/70">
                Enter your bank account details to receive payouts.
              </p>
            </div>

            <div className="space-y-6">
              {/* Account Holder Name */}
              <div>
                <label className="block text-[0.93rem] font-normal text-white mb-1.5 font-poppins">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  value={accountHolderName}
                  onChange={(e) => setAccountHolderName(e.target.value)}
                  className="w-full bg-transparent border border-white/25 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5828] transition-colors"
                />
              </div>

              {/* Bank Name & Account Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.93rem] font-normal text-white mb-1.5 font-poppins">
                    Bank Name
                  </label>
                  <div className="relative">
                    <select
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      className="w-full bg-transparent border border-white/25 rounded-lg px-4 py-3 text-white text-sm outline-none appearance-none focus:border-[#ED5828] transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-[#0D0D0D]" />
                      <option className="bg-[#0D0D0D]">Chase Bank</option>
                      <option className="bg-[#0D0D0D]">Bank of America</option>
                      <option className="bg-[#0D0D0D]">Wells Fargo</option>
                      <option className="bg-[#0D0D0D]">Barclays</option>
                      <option className="bg-[#0D0D0D]">Guaranty Trust Bank</option>
                      <option className="bg-[#0D0D0D]">Zenith Bank</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[0.93rem] font-normal text-white mb-1.5 font-poppins">
                    Account Number
                  </label>
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="w-full bg-transparent border border-white/25 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5828] transition-colors"
                  />
                </div>
              </div>

              {/* Bank Code */}
              <div>
                <label className="block text-[0.93rem] font-normal text-white mb-1.5 font-poppins">
                  Bank Code
                </label>
                <div className="relative">
                  <select
                    value={bankCode}
                    onChange={(e) => setBankCode(e.target.value)}
                    className="w-full bg-white text-black border border-white/25 rounded-lg px-4 py-3 text-sm outline-none appearance-none cursor-pointer font-medium"
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
                  className="mt-0.5 w-4 h-4 accent-[#ED5828] cursor-pointer"
                />
                <span className="text-[0.9rem] font-medium text-white leading-relaxed">
                  I confirm that the bank details provided belong to the registered business or individual host.
                </span>
              </label>

              {/* Verify Button */}
              <div className="flex justify-center pt-2">
                <Link
                  href="/host/onboarding/status"
                  className="flex items-center justify-center w-full max-w-[600px] h-[52px] rounded-[11px] bg-[#ED5828] text-white font-poppins font-medium text-[1rem] hover:bg-[#d44d24] active:scale-[0.98] transition-all"
                >
                  Verify Bank
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
