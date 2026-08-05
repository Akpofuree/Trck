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
  Menu,
  User,
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
    { label: "Calendar", icon: CalendarIcon, href: "/admin/calendar" },
    { label: "Promotions", icon: Megaphone, href: "/admin/promotions" },
    { label: "Payouts", icon: Wallet, href: "/admin/payouts", active: true },
  ],
  Management: [
    { label: "KYC Verification", icon: ShieldCheck, href: "/admin/kyc" },
    { label: "Bank Verification", icon: Building2, href: "/admin/bank-verification" },
    { label: "KYC Status", icon: CheckCircle2, href: "/admin/kyc-status" },
    { label: "Users", icon: Users, href: "/admin/users" },
    { label: "Tickets", icon: Ticket, href: "/admin/tickets" },
    { label: "Events", icon: Music, href: "/admin/events" },
    { label: "Earnings", icon: TrendingUp, href: "/admin/earnings" },
    { label: "Reviews", icon: Star, href: "/admin/reviews" },
  ],
  Other: [
    { label: "Reports", icon: FileText, href: "/admin/report" },
    { label: "Settings", icon: Settings, href: "/admin/settings" },
  ],
};

const payoutsData = [
  { orderId: "#TRK-9842", date: "Nov 14, 2024", amount: "₦250,000", totalRequests: "1", status: "Complete" },
  { orderId: "#TRK-9841", date: "Nov 12, 2024", amount: "₦180,000", totalRequests: "2", status: "Complete" },
  { orderId: "#TRK-9840", date: "Nov 10, 2024", amount: "₦320,000", totalRequests: "1", status: "Pending" },
  { orderId: "#TRK-9839", date: "Nov 08, 2024", amount: "₦150,000", totalRequests: "1", status: "Complete" },
  { orderId: "#TRK-9838", date: "Nov 05, 2024", amount: "₦90,000", totalRequests: "3", status: "Rejected" },
];

export default function AdminPayoutsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  const filteredPayouts = payoutsData.filter((p) => {
    if (activeTab === "All") return true;
    return p.status.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden font-sans">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-[260px]" : "w-16"
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
                <p className="text-xs font-semibold text-white/35 font-montserrat uppercase tracking-wider mb-2 px-2 mt-3 first:mt-0">
                  {group}
                </p>
              )}
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-[11.58px] text-[1.287rem] font-semibold font-montserrat leading-none transition-all mb-1 group ${
                    item.active
                      ? "bg-[#ED5E2E] text-white"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                  title={!sidebarOpen ? item.label : undefined}
                >
                  <item.icon
                    size={20}
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
        {/* Main Dashboard Header (Top Right Profile Header) */}
        <header className="hidden md:flex items-center justify-end px-6 py-3.5 bg-white text-black shrink-0 border-b border-gray-200 h-[57px]">
          <div className="flex items-center gap-2.5 cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-[#ED5A2E] flex items-center justify-center text-white text-xs font-bold">
              DO
            </div>
            <div className="font-poppins">
              <p className="text-[0.826rem] font-normal leading-none text-black">Dominion Ogbaji</p>
              <p className="text-[0.641rem] font-normal leading-none text-black mt-0.5">Super Admin</p>
            </div>
          </div>
        </header>

        {/* Mobile Header Bar */}
        <header className="md:hidden flex items-center justify-between px-4 py-3 bg-black text-white border-b border-white/10">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 border border-white/30 rounded-lg">
            <Menu size={20} />
          </button>
          <h1 className="text-white font-bold text-base">Payouts</h1>
          <div className="flex items-center gap-3">
            <button className="p-1 text-white/80">
              <Search size={18} />
            </button>
            <button className="p-1 text-white/80 relative">
              <Bell size={18} />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="h-4 w-[1px] bg-white/20" />
            <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <User size={14} />
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 overflow-y-auto bg-black p-4 md:p-8 space-y-6">

          {/* Row 1: Sub-header (Payouts Title + Subtitle on Left | Search + Badges on Right on same row) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-montserrat text-[2.408rem] font-semibold leading-none text-white mb-2">
                Payouts
              </h1>
              <p className="font-lato text-[1.313rem] font-bold leading-none tracking-[0.06em] text-white/85">
                Manage payout requests and financial statistics.
              </p>
            </div>

            {/* Sub-header controls on same horizontal row as Payouts title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-[#ED5A2E]/10 border border-[#ED5A2E] rounded-full px-4 py-2 text-white">
                <Search size={15} className="text-[#ED5A2E]" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent font-montserrat text-[15.34px] tracking-[-0.46px] outline-none text-white placeholder:text-white/60 w-32 md:w-48"
                />
              </div>

              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors relative">
                <span className="text-base">💬</span>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ED5A2E] text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
              </button>

              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors relative">
                <Bell size={16} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ED5A2E] text-white text-[9px] font-bold rounded-full flex items-center justify-center">1</span>
              </button>
            </div>
          </div>

          {/* Row 2: Wallet Summary Hero Card */}
          <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 rounded-3xl p-6 md:p-8 text-white shadow-2xl space-y-6">
            <div>
              <p className="font-montserrat text-[1.174rem] leading-none tracking-[0.06em] text-white/90 mb-2 uppercase">
                Wallet Summary
              </p>
              <h2 className="font-montserrat text-[3.607rem] font-semibold leading-none tracking-tight">
                ₦1,250,001
              </h2>
            </div>

            {/* Revenue Breakdown Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/20">
              <div>
                <p className="font-lato text-[0.625rem] font-bold leading-none tracking-normal text-white/85 mb-1">
                  Revenue via Boost
                </p>
                <p className="font-montserrat text-[1.384rem] font-semibold leading-none text-white">
                  ₦450,000
                </p>
              </div>
              <div>
                <p className="font-lato text-[0.625rem] font-bold leading-none tracking-normal text-white/85 mb-1">
                  Revenue via Tickets
                </p>
                <p className="font-montserrat text-[1.384rem] font-semibold leading-none text-white">
                  ₦800,001
                </p>
              </div>
              <div>
                <p className="font-lato text-[0.625rem] font-bold leading-none tracking-normal text-white/85 mb-1">
                  Tickets Sold Out
                </p>
                <p className="font-montserrat text-[1.384rem] font-semibold leading-none text-white">
                  1,250
                </p>
              </div>
            </div>
          </div>

          {/* Row 3: 3 Statistics Cards (#161517 background, Widths: 315px, 309px, 303px) */}
          <div className="flex flex-wrap lg:flex-nowrap gap-4">
            {/* Card 1: Total Payout Requests (315px) */}
            <div className="w-full lg:w-[315px] shrink-0 bg-[#161517] border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <p className="font-lato text-[1.213rem] font-bold leading-none text-white/85">
                Total Payout Requests
              </p>
              <p className="font-montserrat text-[2.625rem] font-semibold leading-none tracking-[0.02em] text-white">
                48
              </p>
            </div>

            {/* Card 2: Successful Payouts (309px) */}
            <div className="w-full lg:w-[309px] shrink-0 bg-[#161517] border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <p className="font-lato text-[1.213rem] font-bold leading-none text-white/85">
                Successful Payouts
              </p>
              <p className="font-montserrat text-[2.625rem] font-semibold leading-none tracking-[0.02em] text-white">
                45
              </p>
            </div>

            {/* Card 3: Payouts Reversed (303px) */}
            <div className="w-full lg:w-[303px] shrink-0 bg-[#161517] border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <p className="font-lato text-[1.213rem] font-bold leading-none text-white/85">
                Payouts Reversed
              </p>
              <p className="font-montserrat text-[2.625rem] font-semibold leading-none tracking-[0.02em] text-white">
                3
              </p>
            </div>
          </div>

          {/* Row 4: Payout History Table & Filter Pills */}
          <div className="bg-[#111115] border border-white/10 rounded-2xl p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="font-montserrat text-xl font-semibold text-white">
                Payout History
              </h2>

              {/* Filter Pills with Outfit 9.25px, White bg, 69px width */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                {["All", "Complete", "Pending", "Rejected"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-[69px] h-[29.37px] rounded-[16.3px] border border-[#EBEBEB] flex items-center justify-center font-outfit text-[0.578rem] font-medium tracking-[0.01em] transition-all shrink-0 ${
                      activeTab === tab
                        ? "bg-[#ED5A2E] text-white border-[#ED5A2E]"
                        : "bg-white text-[#222222]/80 hover:bg-gray-100"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Table View (CENTER ALIGNED HEADINGS & ROW HOVER SHADE #F3F4F6) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-xs font-semibold text-white/60">
                    <th className="py-3 px-4 text-center">Order ID</th>
                    <th className="py-3 px-4 text-center">Date</th>
                    <th className="py-3 px-4 text-center">Amount</th>
                    <th className="py-3 px-4 text-center">Total Requests</th>
                    <th className="py-3 px-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredPayouts.map((row, idx) => (
                    <tr
                      key={idx}
                      className="text-sm font-medium transition-colors hover:bg-[#F3F4F6] hover:text-black cursor-pointer group"
                    >
                      <td className="py-4 px-4 text-center font-mono font-semibold">{row.orderId}</td>
                      <td className="py-4 px-4 text-center">{row.date}</td>
                      <td className="py-4 px-4 text-center font-semibold">{row.amount}</td>
                      <td className="py-4 px-4 text-center">{row.totalRequests}</td>
                      <td className="py-4 px-4 text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            row.status === "Complete"
                              ? "bg-emerald-500/20 text-emerald-400 group-hover:text-emerald-700"
                              : row.status === "Pending"
                              ? "bg-amber-500/20 text-amber-400 group-hover:text-amber-700"
                              : "bg-red-500/20 text-red-400 group-hover:text-red-700"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Desktop Pagination inside Table footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-white/50">
                <span>10 per page</span>
                <span>Page 1 of 5</span>
                <div className="flex items-center gap-2">
                  <button className="p-1 border border-white/20 rounded hover:bg-white/10 text-white disabled:opacity-30">
                    <ChevronLeft size={14} />
                  </button>
                  <button className="p-1 border border-white/20 rounded hover:bg-white/10 text-white">
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Table View (Shows only Order ID, Date, Amount) */}
            <div className="md:hidden space-y-3">
              {filteredPayouts.map((row, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between text-xs hover:bg-[#F3F4F6] hover:text-black transition-colors"
                >
                  <span className="font-mono font-semibold">{row.orderId}</span>
                  <span className="text-white/70">{row.date}</span>
                  <span className="font-bold text-[#ED5A2E]">{row.amount}</span>
                </div>
              ))}
            </div>

            {/* Mobile Pagination (Centered OUTSIDE table) */}
            <div className="md:hidden flex flex-col items-center justify-center gap-2 pt-4 text-xs text-white/60">
              <div className="flex items-center gap-3">
                <span>10 per page</span>
                <span>•</span>
                <span>Page 1 of 5</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-1.5 border border-white/20 rounded-lg hover:bg-white/10 text-white">
                  <ChevronLeft size={16} />
                </button>
                <button className="p-1.5 border border-white/20 rounded-lg hover:bg-white/10 text-white">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
