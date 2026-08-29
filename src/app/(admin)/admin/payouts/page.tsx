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
  ChevronRight,
  ChevronDown,
  X,
  Check,
  RotateCcw,
  MessageSquare,
} from "lucide-react";

const NAV_ITEMS = [
  {
    section: "Home",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, href: "/host/dashboard" },
      { label: "Calenders", icon: CalendarIcon, href: "/host/calendar" },
      { label: "Promotions", icon: Megaphone, href: "/host/promotions" },
      { label: "Payouts", icon: Wallet, href: "/host/payouts", active: true },
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

const PAYOUT_RECORDS = [
  { id: "#15267", date: "Mar 1, 2023", amount: "100", questions: "1", status: "Success", statusColor: "text-gray-900" },
  { id: "#153587", date: "Jan 26, 2023", amount: "300", questions: "3", status: "Success", statusColor: "text-emerald-500" },
  { id: "#12436", date: "Feb 12, 2033", amount: "100", questions: "1", status: "Success", statusColor: "text-emerald-500" },
  { id: "#16879", date: "Feb 12, 2033", amount: "500", questions: "5", status: "Success", statusColor: "text-emerald-500" },
  { id: "#16378", date: "Feb 28, 2033", amount: "500", questions: "5", status: "Rejected", statusColor: "text-rose-500" },
  { id: "#16609", date: "March 13, 2033", amount: "100", questions: "1", status: "Success", statusColor: "text-emerald-500" },
  { id: "#16907", date: "March 18, 2033", amount: "100", questions: "1", status: "Pending", statusColor: "text-sky-500" },
];

export default function HostPayoutsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<"All" | "Complete" | "Pending" | "Rejected">("All");

  const filteredRecords = PAYOUT_RECORDS.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Complete") return item.status === "Success";
    if (activeTab === "Pending") return item.status === "Pending";
    if (activeTab === "Rejected") return item.status === "Rejected";
    return true;
  });

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-montserrat">
      {/* ── WHITE TOP HEADER (Desktop) ─────────────────── */}
      <header className="hidden md:flex h-[70px] bg-white items-center justify-between px-6 border-b border-gray-100 shrink-0 z-20">
        <span className="text-black font-semibold text-[1rem] font-poppins">Payouts</span>

        <div className="flex items-center gap-4">
          {/* Orange Search Bar */}
          <div
            className="flex items-center justify-between px-4 bg-[#ED5A2E] text-white cursor-pointer transition-opacity hover:opacity-95"
            style={{
              width: 220.85,
              height: 43.97,
              borderRadius: 7.49,
            }}
          >
            <span className="text-xs font-medium tracking-wide">Search Here</span>
            <Search size={16} className="text-white" />
          </div>

          <button className="relative p-2 bg-[#F5F5F5] rounded-xl text-gray-700 hover:bg-gray-200 transition-colors">
            <MessageSquare size={18} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ED5828] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          <button className="relative p-2 bg-[#F5F5F5] rounded-xl text-gray-700 hover:bg-gray-200 transition-colors">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ED5828] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              1
            </span>
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
          <button className="w-10 h-10 border-2 border-dashed border-white/40 rounded-lg flex items-center justify-center text-white">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <rect width="18" height="2" rx="1" fill="white" />
              <rect y="6" width="18" height="2" rx="1" fill="white" />
              <rect y="12" width="18" height="2" rx="1" fill="white" />
            </svg>
          </button>
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
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
          </div>
        </header>
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
        <main className="flex-1 bg-[#0D0D0D] overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Title Block */}
            <div>
              <h1 className="text-2xl font-bold text-white font-montserrat">Payouts</h1>
              <p className="text-sm text-white/60 mt-0.5">Track earnings and withdrawals</p>
            </div>

            {/* Wallet Summary Card — Screenshot 4 */}
            <div className="relative bg-gradient-to-r from-[#171717] via-[#1C1714] to-[#2B1B14] border border-white/10 rounded-2xl p-7 overflow-hidden shadow-2xl">
              <div className="relative z-10 max-w-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ED5828]" />
                  <span>Wallet Summary</span>
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold text-white font-montserrat tracking-tight">
                  N1, 250,000
                </div>

                {/* Sub statistics row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div>
                    <p className="text-[11px] text-white/50">Revenue via Boost</p>
                    <p className="text-base font-bold text-white mt-0.5 font-montserrat">N320,000</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-white/50">Revenue via Tickets</p>
                    <p className="text-base font-bold text-white mt-0.5 font-montserrat">N24,560</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-white/50">Tickets sold out</p>
                    <p className="text-base font-bold text-white mt-0.5 font-montserrat">N5,940,000</p>
                  </div>
                </div>
              </div>

              {/* Decorative 3D Vault / Safe Graphic Simulation */}
              <div className="absolute right-4 bottom-2 top-2 hidden lg:flex items-center justify-center opacity-90 pointer-events-none">
                <div className="relative w-64 h-48 flex items-center justify-center">
                  {/* Vault box */}
                  <div className="w-48 h-36 bg-[#252525] border-2 border-white/10 rounded-2xl shadow-2xl flex items-center justify-center relative">
                    <div className="w-24 h-24 rounded-full border-4 border-amber-500/40 bg-[#1A1A1A] flex items-center justify-center shadow-inner">
                      <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center">
                        <div className="w-4 h-4 bg-[#ED5828] rounded-full" />
                      </div>
                    </div>
                  </div>
                  {/* Floating 3D Silver coins */}
                  <div className="absolute -left-4 top-8 w-12 h-12 rounded-full bg-gradient-to-tr from-gray-400 to-white shadow-lg border border-white/40 transform -rotate-12" />
                  <div className="absolute -left-2 bottom-4 w-10 h-10 rounded-full bg-gradient-to-tr from-gray-400 to-white shadow-lg border border-white/40 transform rotate-45" />
                </div>
              </div>
            </div>

            {/* 3 Summary / KPI Cards with Colored Badges — Screenshot 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Total Payout Requests: 48 with blue (X) */}
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-5 space-y-2">
                <p className="text-xs text-white/60 font-medium">Total Payout Requests</p>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-white font-montserrat">48</span>
                  <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center text-white">
                    <X size={14} strokeWidth={3} />
                  </div>
                </div>
              </div>

              {/* Successful Payouts: 45 with green (X/check) */}
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-5 space-y-2">
                <p className="text-xs text-white/60 font-medium">Successful Payouts</p>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-white font-montserrat">45</span>
                  <div className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center text-white">
                    <X size={14} strokeWidth={3} />
                  </div>
                </div>
              </div>

              {/* Payments Reversed: 3 with red (X) */}
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-5 space-y-2">
                <p className="text-xs text-white/60 font-medium">Payments Reversed</p>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-white font-montserrat">3</span>
                  <div className="w-6 h-6 rounded-full bg-[#EF4444] flex items-center justify-center text-white">
                    <X size={14} strokeWidth={3} />
                  </div>
                </div>
              </div>
            </div>

            {/* Payout History Section — Screenshot 5 */}
            <div className="space-y-4 pt-2">
              <h2 className="text-xl font-bold text-white font-montserrat">Payout History</h2>

              {/* Filter Tabs (White Pill Buttons) */}
              <div className="flex flex-wrap items-center gap-3">
                {(["All", "Complete", "Pending", "Rejected"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full text-xs font-semibold transition-all border ${
                      activeTab === tab
                        ? "bg-white text-black border-white shadow-md"
                        : "bg-transparent text-white/70 border-white/20 hover:border-white/40"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* White Payout History Table Card — Screenshot 5 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl text-gray-800">
                <div className="overflow-x-auto">
                  <table className="w-full text-center border-collapse">
                    <thead>
                      <tr className="border-b border-gray-100 text-xs font-semibold text-gray-500 bg-white">
                        <th className="py-4 px-6 text-center">Order ID</th>
                        <th className="py-4 px-6 text-center">Date</th>
                        <th className="py-4 px-6 text-center">Ammount</th>
                        <th className="py-4 px-6 text-center">Total Questions</th>
                        <th className="py-4 px-6 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-xs font-medium text-gray-800">
                      {filteredRecords.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50/80 transition-colors">
                          <td className="py-4 px-6 text-gray-700 font-normal">{row.id}</td>
                          <td className="py-4 px-6 text-gray-700 font-normal">{row.date}</td>
                          <td className="py-4 px-6 text-gray-900 font-semibold">{row.amount}</td>
                          <td className="py-4 px-6 text-gray-700 font-normal">{row.questions}</td>
                          <td className={`py-4 px-6 font-semibold ${row.statusColor}`}>{row.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Controls Footer — Screenshot 5 */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 text-xs text-gray-500 bg-white">
                  {/* Left: Per page */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-md text-gray-700 font-semibold cursor-pointer">
                      <span>10</span>
                      <ChevronDown size={12} />
                    </div>
                    <span>per page</span>
                  </div>

                  {/* Right: Page 1 of 1 */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-md text-gray-700 font-semibold cursor-pointer">
                      <span>1</span>
                      <ChevronDown size={12} />
                    </div>
                    <span>of 1 pages</span>
                    <div className="flex items-center gap-1 ml-2 text-gray-400">
                      <button className="p-1 hover:text-gray-700 disabled:opacity-30">
                        <ChevronLeft size={14} />
                      </button>
                      <button className="p-1 hover:text-gray-700 disabled:opacity-30">
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
