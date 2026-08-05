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
  Menu,
  ShieldCheck,
  Building2,
  CheckCircle2,
  AlertCircle
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
    { label: "Bank Verification", icon: Building2, href: "/admin/bank-verification" },
    { label: "KYC Status", icon: CheckCircle2, href: "/admin/kyc-status", active: true },
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

export default function AdminKYCStatusPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
          <h1 className="text-black font-bold text-base">KYC Status</h1>
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

          <div className="w-full max-w-2xl mx-auto space-y-6">
            {/* Main Heading & Subtitle */}
            <div>
              <h1 className="font-montserrat text-[2.349rem] font-semibold leading-none tracking-normal text-white mb-2">
                Review Success
              </h1>
              <p className="font-montserrat text-[1.101rem] font-normal leading-none tracking-normal text-white mb-6">
                Your document has successfully been reviewed.
              </p>
            </div>

            {/* Checklist Card */}
            <div className="bg-[#212124] rounded-2xl p-6 border border-white/10">
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
            <div className="flex items-center gap-2 text-white">
              <AlertCircle size={18} className="text-white/70" />
              <span className="font-montserrat text-[1.056rem] font-medium leading-none tracking-normal text-white">
                Estimated Time:{" "}
                <span className="font-poppins text-[1.056rem] font-medium leading-none tracking-normal text-white">
                  1–2 Business Days
                </span>
              </span>
            </div>

            {/* Reposition Section Heading */}
            <div className="space-y-4 pt-2">
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

        </main>
      </div>
    </div>
  );
}
