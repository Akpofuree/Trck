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
  Plus,
  Share2,
  MoreVertical,
  MapPin,
  Eye,
  Edit2,
  BarChart2,
  Copy,
  Menu,
  Globe,
  Link2,
  CheckCircle2,
  CircleDollarSign,
  User,
  ShieldCheck,
  Building2,
  Radio,
  Send,
  DollarSign
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
    { label: "Promotions", icon: Megaphone, href: "/admin/promotions", active: true },
    { label: "Payouts", icon: Wallet, href: "/admin/payouts" },
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

const promotionsList = [
  {
    id: 1,
    title: "5IVE LIVE AT 02 ARENA",
    tag: "LIVE",
    category: "Concert",
    partOf: "Davido live at 02",
    date: "Friday, Nov 15, 2024",
    location: "02 Arena, London, United Kingdom",
    sold: "156/200 (78%)",
    revenue: "₦450,000",
    checkins: "145/156",
  },
  {
    id: 2,
    title: "5IVE LIVE AT 02 ARENA",
    tag: "PUBLISHED",
    category: "Concert",
    partOf: "Davido live at 02",
    date: "Friday, Nov 15, 2024",
    location: "02 Arena, London, United Kingdom",
    sold: "156/200 (78%)",
    revenue: "₦450,000",
    checkins: "145/156",
  },
];

export default function AdminPromotionsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [hasPromotions] = useState(true);

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
          <h1 className="text-white font-bold text-base">Promotions</h1>
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

        {/* Main Content Body */}
        <main className="flex-1 overflow-y-auto bg-black p-4 md:p-8 space-y-6">

          {/* Row 1: Dashboard Sub-header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-montserrat text-[2.408rem] font-semibold leading-none text-white mb-2">
                Promotions
              </h1>
              <p className="font-montserrat text-[1.248rem] font-medium leading-none text-white">
                Boost event visibility and ticket sales.
              </p>
            </div>

            {/* Dashboard Sub-header controls directly on dark background */}
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

          {/* Row 2: Statistics Cards (2x2 grid on mobile, 4 cols on desktop, CENTER ALIGNED) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Card 1: Active Promotions */}
            <div className="bg-[#111115] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-[#ED5A2E] flex items-center justify-center mb-3">
                <Send size={20} />
              </div>
              <span className="font-montserrat text-[2.346rem] font-semibold leading-none text-white mb-2">
                12
              </span>
              <p className="font-montserrat text-[1.503rem] font-medium leading-none text-white mb-2">
                Active Promotions
              </p>
              <p className="font-montserrat text-[0.994rem] font-medium leading-none text-white/50">
                Running campaigns
              </p>
            </div>

            {/* Card 2: Users / Total Reach */}
            <div className="bg-[#111115] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-[#ED5A2E] flex items-center justify-center mb-3">
                <Radio size={20} />
              </div>
              <span className="font-montserrat text-[2.346rem] font-semibold leading-none text-white mb-2">
                124,500
              </span>
              <p className="font-montserrat text-[1.503rem] font-medium leading-none text-white mb-2">
                Users
              </p>
              <p className="font-montserrat text-[0.994rem] font-medium leading-none text-white/50">
                Total Impressions
              </p>
            </div>

            {/* Card 3: Ticket Sales */}
            <div className="bg-[#111115] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-[#ED5A2E] flex items-center justify-center mb-3">
                <Ticket size={20} />
              </div>
              <span className="font-montserrat text-[2.346rem] font-semibold leading-none text-white mb-2">
                3,420
              </span>
              <p className="font-montserrat text-[1.503rem] font-medium leading-none text-white mb-2">
                Ticket Sales
              </p>
              <p className="font-montserrat text-[0.994rem] font-medium leading-none text-white/50">
                From Promotions
              </p>
            </div>

            {/* Card 4: Revenue Boost */}
            <div className="bg-[#111115] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-[#ED5A2E] flex items-center justify-center mb-3">
                <DollarSign size={20} />
              </div>
              <span className="font-montserrat text-[2.346rem] font-semibold leading-none text-white mb-2">
                +35%
              </span>
              <p className="font-montserrat text-[1.503rem] font-medium leading-none text-white mb-2">
                Revenue Boost
              </p>
              <p className="font-montserrat text-[0.994rem] font-medium leading-none text-white/50">
                Compared to organic
              </p>
            </div>

          </div>

          {/* Row 3: Filter Dropdowns (Horizontally scrollable on mobile) */}
          <div className="overflow-x-auto no-scrollbar py-2">
            <div className="flex items-center gap-3 min-w-max">
              {/* Status Pill */}
              <button className="flex items-center gap-2 bg-[#111115] border border-white/20 rounded-xl px-4 py-2.5 font-montserrat text-[1.031rem] font-semibold text-white hover:bg-white/10 transition-colors">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Status</span>
                <ChevronDown size={16} />
              </button>

              {/* Promotion Type Pill (Solid Orange) */}
              <button className="flex items-center gap-2 bg-[#ED5A2E] rounded-xl px-4 py-2.5 font-montserrat text-[1.031rem] font-semibold text-white shadow-lg hover:bg-[#d44d24] transition-colors">
                <Send size={16} className="text-white" />
                <span>Promotion Type</span>
                <ChevronDown size={16} className="text-white" />
              </button>

              {/* Cost Pill */}
              <button className="flex items-center gap-2 bg-[#111115] border border-white/20 rounded-xl px-4 py-2.5 font-montserrat text-[1.031rem] font-semibold text-white hover:bg-white/10 transition-colors">
                <CircleDollarSign size={16} className="text-[#ED5A2E]" />
                <span>Cost</span>
                <ChevronDown size={16} />
              </button>

              {/* Best Performing Pill */}
              <button className="flex items-center gap-2 bg-[#111115] border border-white/20 rounded-xl px-4 py-2.5 font-montserrat text-[1.031rem] font-semibold text-white hover:bg-white/10 transition-colors">
                <span>Best Performing</span>
                <span className="bg-white/20 text-xs px-2 py-0.5 rounded font-normal text-white">Smart</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Row 4: Promotions Section */}
          <div className="space-y-4 pt-2">
            <h2 className="font-montserrat text-[2.256rem] font-semibold leading-none text-white">
              Promotions
            </h2>

            {hasPromotions ? (
              <div className="space-y-4">
                {promotionsList.map((evt) => (
                  <div
                    key={evt.id}
                    className="bg-[#111115] border border-white/10 rounded-2xl p-4 flex flex-col gap-4"
                  >
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <input type="checkbox" className="mt-1 accent-[#ED5A2E] hidden md:block" />
                      
                      <div className="w-full md:w-24 h-32 md:h-24 rounded-xl bg-gradient-to-tr from-amber-600 to-purple-800 relative shrink-0 flex items-center justify-center text-2xl font-bold">
                        🎤
                        <span className="absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded text-white bg-black/60 backdrop-blur border border-emerald-500 text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {evt.tag}
                        </span>
                      </div>

                      <div className="space-y-1.5 flex-1">
                        <h4 className="font-bold text-base text-white">{evt.title}</h4>
                        
                        <div className="flex items-center gap-2 text-xs flex-wrap">
                          <span className="border border-[#ED5A2E] bg-neutral-800 text-white px-2 py-0.5 rounded text-[10px] font-medium">
                            {evt.category}
                          </span>
                          <Link2 size={13} className="text-white/60" />
                          <span className="font-montserrat text-[9.48px] font-semibold leading-[12.64px] text-white">
                            Part of <strong className="text-[#ED5A2E] font-semibold">{evt.partOf}</strong>
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-4 text-xs text-white/70 pt-1">
                          <span className="flex items-center gap-1.5">
                            <Globe size={13} className="text-gray-400" /> {evt.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-gray-400" /> {evt.location}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-4 text-xs text-white/90 pt-1">
                          <span className="flex items-center gap-1.5">
                            <Users size={13} className="text-[#ED5A2E]" /> Sold: {evt.sold}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <CircleDollarSign size={13} className="text-[#ED5A2E]" /> Revenue: {evt.revenue}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 size={13} className="text-[#ED5A2E]" /> Check-ins: {evt.checkins}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-[1px] bg-[#ED5A2E]" />

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center -space-x-1.5">
                          <div className="w-7 h-7 rounded-full bg-[#ED5A2E] text-[10px] font-bold text-white flex items-center justify-center border border-black">
                            JD
                          </div>
                          <div className="w-7 h-7 rounded-full bg-[#ED5A2E]/80 text-[10px] font-bold text-white flex items-center justify-center border border-black">
                            D
                          </div>
                          <div className="w-7 h-7 rounded-full bg-[#ED5A2E]/60 text-[10px] font-bold text-white flex items-center justify-center border border-black">
                            D
                          </div>
                        </div>
                        <span className="text-xs text-white/60 font-medium">+2 more</span>
                      </div>

                      <div className="flex items-center gap-2 text-white/40">
                        <button className="p-1.5 hover:text-white transition-colors" title="View"><Eye size={14} /></button>
                        <button className="p-1.5 hover:text-white transition-colors" title="Edit"><Edit2 size={14} /></button>
                        <button className="p-1.5 hover:text-white transition-colors" title="Duplicate"><Copy size={14} /></button>
                        <button className="p-1.5 hover:text-white transition-colors" title="Analytics"><BarChart2 size={14} /></button>
                        <button className="p-1.5 hover:text-white transition-colors" title="Share"><Share2 size={14} /></button>
                        <button className="p-1.5 hover:text-white transition-colors" title="More"><MoreVertical size={14} /></button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              /* Empty State Component */
              <div className="bg-[#111115] border border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ED5A2E]/10 text-[#ED5A2E] flex items-center justify-center mb-2">
                  <Megaphone size={32} />
                </div>
                <h3 className="font-montserrat text-[1.619rem] font-semibold leading-none text-white">
                  No Promotions Yet
                </h3>
                <p className="font-montserrat text-[1.161rem] font-semibold leading-none text-white/60">
                  Create a promotion to boost ticket sales.
                </p>
                <button className="w-[132.06px] md:w-[209px] h-[26.6px] md:h-[43px] rounded-[6.32px] md:rounded-[10px] bg-[#F46E28] text-white font-montserrat text-xs md:text-[1.161rem] font-semibold flex items-center justify-center gap-2 hover:bg-[#e05f19] transition-colors mt-2">
                  <Plus size={16} />
                  <span>Create Promotion</span>
                </button>
              </div>
            )}
          </div>

        </main>
      </div>
    </div>
  );
}
