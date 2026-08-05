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
  Menu,
  ShieldCheck,
  Building2,
  CheckCircle2
} from "lucide-react";

type NavItem = {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  active?: boolean;
};

type NavGroups = Record<string, NavItem[]>;

const navItems: NavGroups = {
  Home: [
    { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
    { label: "Calenders", icon: CalendarIcon, href: "/admin/calendar" },
    { label: "Promotions", icon: Megaphone, href: "/admin/promotions" },
    { label: "Payouts", icon: Wallet, href: "/admin/payouts" },
  ],
  Management: [
    { label: "KYC Verification", icon: ShieldCheck, href: "/admin/kyc" },
    { label: "Bank Verification", icon: Building2, href: "/admin/bank-verification", active: true },
    { label: "KYC Status", icon: CheckCircle2, href: "/admin/kyc-status" },
    { label: "Users", icon: Users, href: "/admin/users" },
    { label: "Tickets", icon: Ticket, href: "/admin/tickets" },
    { label: "Events", icon: Music, href: "/admin/events" },
    { label: "Earnings", icon: TrendingUp, href: "/admin/earnings" },
    { label: "Reviews", icon: Star, href: "/admin/reviews" },
  ],
  Other: [
    { label: "Report", icon: FileText, href: "/admin/report" },
    { label: "Settings", icon: Settings, href: "/admin/settings" },
  ],
};

const STEPS = ["Step 1", "Step 2", "Step 3", "Step 4"];

export default function AdminBankVerificationPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [accountHolderName, setAccountHolderName] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden font-sans">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-[240px]" : "w-16"
        } bg-black border-r border-white/10 flex flex-col shrink-0 transition-all duration-300 overflow-hidden z-20 hidden md:flex`}
      >
        {/* Top Header Section above Sidebar */}
        <div className="h-[57px] bg-white border-b border-r border-gray-200 flex items-center justify-between px-4 shrink-0">
          {sidebarOpen ? (
            <Link href="/" className="flex items-center gap-1.5">
              <span className="font-extrabold text-black text-lg tracking-wider">TRCK</span>
            </Link>
          ) : null}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:text-black hover:bg-gray-100 transition-colors ml-auto"
            title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            <ChevronLeft
              size={14}
              className={`transition-transform duration-300 ${!sidebarOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Search */}
        {sidebarOpen && (
          <div className="px-3 py-3 border-b border-white/10">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
              <Search size={13} className="text-white/40" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent text-white text-xs outline-none placeholder:text-white/30"
              />
              <div className="flex items-center gap-1 text-white/30">
                <span className="text-[10px] border border-white/20 rounded px-1">⌘</span>
                <span className="text-[10px] border border-white/20 rounded px-1">K</span>
              </div>
            </div>
          </div>
        )}

        {/* Nav Groups */}
        <nav className="flex-1 overflow-y-auto py-3 space-y-1">
          {Object.entries(navItems).map(([group, items]) => (
            <div key={group} className="px-3">
              {sidebarOpen && (
                <p className="text-[1.126rem] font-semibold text-white/35 font-montserrat uppercase tracking-wider mb-1 px-2 mt-3 first:mt-0">
                  {group}
                </p>
              )}
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-[11.58px] text-[1.287rem] font-semibold font-montserrat transition-all mb-0.5 group ${
                    item.active
                      ? "bg-[#ED5E2E] text-white"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                  title={!sidebarOpen ? item.label : undefined}
                >
                  <item.icon
                    size={18}
                    className={`shrink-0 ${item.active ? "text-white" : "text-white/50 group-hover:text-white"}`}
                  />
                  {sidebarOpen && <span>{item.label}</span>}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <header className="hidden md:flex items-center justify-between px-6 py-3.5 bg-white text-black shrink-0 border-b border-gray-200 h-[57px]">
          <h1 className="text-black font-bold text-base">Bank Verification</h1>
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors relative">
              <Bell size={15} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="h-4 w-[1px] bg-gray-300" />
            <div className="flex items-center gap-2.5 cursor-pointer group">
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
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 border border-white/30 rounded-lg">
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

        {/* Main Content Body */}
        <main className="flex-1 overflow-y-auto bg-black p-4 md:p-8 space-y-6">

          {/* Step Progress Bar - Step 3 active */}
          <div className="w-full px-4 pt-4 pb-6 max-w-xl mx-auto">
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

          {/* Form Container */}
          <div className="w-full max-w-2xl mx-auto space-y-6">
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
                  href="/admin/kyc-status"
                  className="flex items-center justify-center w-full max-w-[776px] h-[60px] rounded-[11.16px] bg-[#ED5E2E] text-white font-poppins font-medium text-[1.1rem] hover:bg-[#d44d24] active:scale-[0.98] transition-all"
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
