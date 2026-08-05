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
  ChevronsLeft,
  ChevronsRight,
  Activity,
  X,
  ShieldCheck,
  Building2
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
    { label: "Calendar", icon: CalendarIcon, href: "/admin/calendar", active: true },
    { label: "Promotions", icon: Megaphone, href: "/admin/promotions" },
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

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const calendarDays = [
  { day: 31, isPrev: true },
  { day: 1 },
  { day: 2, dots: ["#A855F7", "#10B981", "#EC4899"] },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 6, avatars: true },
  { day: 7 },
  { day: 8 },
  { day: 9 },
  { day: 10, label: "Franklin.", subLabel: "2+ 600.00" },
  { day: 11 },
  { day: 12 },
  { day: 13 },
  { day: 14 },
  { day: 15, avatars: true },
  { day: 16 },
  { day: 17 },
  { day: 18, label: "Franklin.", subLabel: "2+ 600.00" },
  { day: 19 },
  { day: 20, dots: ["#A855F7", "#10B981", "#EC4899"] },
  { day: 21 },
  { day: 22 },
  { day: 23 },
  { day: 24, dots: ["#A855F7", "#10B981", "#EC4899"] },
  { day: 25 },
  { day: 26 },
  { day: 27 },
  { day: 28 },
  { day: 29, label: "Franklin.", subLabel: "2+ 600.00" },
  { day: 30 },
  { day: 1, isNext: true },
  { day: 2, isNext: true },
  { day: 3, isNext: true },
  { day: 4, isNext: true },
];

const eventItems = [
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

export default function AdminCalendarPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [viewMode, setViewMode] = useState<"list" | "calendar" | "timeline">("calendar");
  const [monthIndex, setMonthIndex] = useState(11);
  const [yearNum, setYearNum] = useState(2021);
  const [selectedEvent, setSelectedEvent] = useState<typeof eventItems[0] | null>(null);

  const prevMonth = () => {
    if (monthIndex === 0) {
      setMonthIndex(11);
      setYearNum(yearNum - 1);
    } else {
      setMonthIndex(monthIndex - 1);
    }
  };

  const nextMonth = () => {
    if (monthIndex === 11) {
      setMonthIndex(0);
      setYearNum(yearNum + 1);
    } else {
      setMonthIndex(monthIndex + 1);
    }
  };

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
          <h1 className="text-white font-bold text-base">Calendar</h1>
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
          
          {/* Row 1: Sub-header (Left: Calendar Title | Right: Search + Messages badge + Notifications badge) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="font-montserrat text-[2.408rem] font-semibold leading-none text-white">
              Calendar
            </h1>

            {/* Dashboard Sub-header controls directly on dark background */}
            <div className="flex items-center gap-3">
              {/* Primary-colored Search Input */}
              <div className="flex items-center gap-2 bg-[#ED5A2E]/10 border border-[#ED5A2E] rounded-full px-4 py-2 text-white">
                <Search size={15} className="text-[#ED5A2E]" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent font-montserrat text-[15.34px] tracking-[-0.46px] outline-none text-white placeholder:text-white/60 w-32 md:w-48"
                />
              </div>

              {/* Messages Badge (3) */}
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors relative">
                <span className="text-base">💬</span>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ED5A2E] text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
              </button>

              {/* Notification Badge (1) */}
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors relative">
                <Bell size={16} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ED5A2E] text-white text-[9px] font-bold rounded-full flex items-center justify-center">1</span>
              </button>
            </div>
          </div>

          {/* Row 2: Month Title (December 2021) directly opposite Previous / Next navigation arrows */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold font-montserrat">{MONTHS[monthIndex]}</span>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-2xl font-bold font-montserrat">{yearNum}</span>
                <ChevronDown size={18} className="text-white/60" />
              </div>
            </div>

            {/* Double Arrow Navigation directly opposite month label */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevMonth}
                className="w-9 h-9 bg-[#ED5A2E] rounded-xl flex items-center justify-center hover:bg-[#d44d24] transition-colors text-white"
                title="Previous Month"
              >
                <ChevronsLeft size={18} />
              </button>
              <button
                onClick={nextMonth}
                className="w-9 h-9 bg-[#ED5A2E] rounded-xl flex items-center justify-center hover:bg-[#d44d24] transition-colors text-white"
                title="Next Month"
              >
                <ChevronsRight size={18} />
              </button>
            </div>
          </div>

          {/* Mode Switcher Tabs for Mobile view */}
          <div className="md:hidden flex justify-center">
            <div className="inline-flex bg-[#111115] border border-white/10 p-1 rounded-xl">
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-1.5 text-xs rounded-lg font-medium transition-all ${
                  viewMode === "list" ? "bg-[#ED5A2E] text-white" : "text-white/60"
                }`}
              >
                ≡ List
              </button>
              <button
                onClick={() => setViewMode("calendar")}
                className={`px-4 py-1.5 text-xs rounded-lg font-medium transition-all ${
                  viewMode === "calendar" ? "bg-[#ED5A2E] text-white" : "text-white/60"
                }`}
              >
                📅 Calendar
              </button>
              <button
                onClick={() => setViewMode("timeline")}
                className={`px-4 py-1.5 text-xs rounded-lg font-medium transition-all ${
                  viewMode === "timeline" ? "bg-[#ED5A2E] text-white" : "text-white/60"
                }`}
              >
                ∿ Timeline
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="space-y-2">
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 text-center font-poppins text-[1.037rem] tracking-[-0.5px] font-semibold text-white/80 py-2">
              <span>Monday</span>
              <span>Tuesday</span>
              <span>Wednesday</span>
              <span>Thursday</span>
              <span>Friday</span>
              <span>Saturday</span>
              <span>Sunday</span>
            </div>

            {/* Grid Cells */}
            <div className="grid grid-cols-7 gap-2 md:gap-3">
              {calendarDays.map((cell, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedEvent(eventItems[0])}
                  className={`bg-[#111115] border border-white/10 rounded-2xl p-2 md:p-3 min-h-[64px] md:min-h-[85px] flex flex-col justify-between transition-colors hover:border-white/30 cursor-pointer ${
                    cell.isPrev || cell.isNext ? "opacity-30" : "opacity-100"
                  }`}
                >
                  <span className="font-montserrat text-[1.455rem] font-semibold tracking-[0.78px] text-white">
                    {cell.day}
                  </span>

                  {cell.dots && (
                    <div className="flex items-center gap-1 mt-1">
                      {cell.dots.map((color, dIdx) => (
                        <span key={dIdx} className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                  )}

                  {cell.avatars && (
                    <div className="flex items-center -space-x-1.5 mt-1">
                      <div className="w-5 h-5 rounded-full bg-amber-200 border border-black flex items-center justify-center text-[10px]">👩</div>
                      <div className="w-5 h-5 rounded-full bg-blue-200 border border-black flex items-center justify-center text-[10px]">👨</div>
                      <div className="w-5 h-5 rounded-full bg-purple-200 border border-black flex items-center justify-center text-[10px]">🧔</div>
                      <span className="text-[9px] text-white/60 pl-2">7+</span>
                    </div>
                  )}

                  {cell.label && (
                    <div className="mt-1 bg-white/5 border-l-2 border-[#ED5A2E] pl-1.5 py-0.5 rounded-r">
                      <p className="text-[9px] font-semibold text-white leading-none">{cell.label}</p>
                      <p className="text-[8px] text-white/50">{cell.subLabel}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Toolbar Switcher & Create Event Button */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
            <div className="hidden md:inline-flex bg-[#111115] border border-white/10 p-1 rounded-xl">
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 text-xs rounded-lg font-medium transition-all ${
                  viewMode === "list" ? "bg-[#ED5A2E] text-white" : "text-white/60"
                }`}
              >
                ≡ List
              </button>
              <button
                onClick={() => setViewMode("calendar")}
                className={`px-4 py-2 text-xs rounded-lg font-medium transition-all ${
                  viewMode === "calendar" ? "bg-[#ED5A2E] text-white" : "text-white/60"
                }`}
              >
                📅 Calendar
              </button>
              <button
                onClick={() => setViewMode("timeline")}
                className={`px-4 py-2 text-xs rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                  viewMode === "timeline" ? "bg-[#ED5A2E] text-white" : "text-white/60"
                }`}
              >
                <Activity size={14} /> Timeline
              </button>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="flex-1 md:w-64 flex items-center gap-2 bg-[#111115] border border-[#ED5A2E] rounded-xl px-3 py-2 text-xs">
                <Search size={14} className="text-[#ED5A2E]" />
                <input
                  type="text"
                  placeholder="Search by event date"
                  className="bg-transparent text-white font-montserrat text-[15.34px] tracking-[-0.46px] outline-none w-full placeholder:text-white/30"
                />
              </div>
              <button className="flex items-center gap-2 bg-[#F37C56] text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-[#e06b45] transition-colors shrink-0">
                <Plus size={14} />
                <span>Create Event</span>
              </button>
            </div>
          </div>

          {/* Recent Events List */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider">Recent Events List</h3>

            <div className="space-y-4">
              {eventItems.map((evt) => (
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
                      <button className="p-1.5 hover:text-white transition-colors" title="View" onClick={() => setSelectedEvent(evt)}><Eye size={14} /></button>
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
          </div>

        </main>
      </div>

      {/* Interactive Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#111115] border border-white/20 rounded-2xl max-w-md w-full p-6 text-white space-y-4 shadow-2xl relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold font-montserrat">{selectedEvent.title}</h3>
            <p className="text-xs text-emerald-400 font-semibold uppercase">{selectedEvent.category} • {selectedEvent.tag}</p>
            <div className="space-y-2 text-sm text-white/80">
              <p>📅 <strong>Date:</strong> {selectedEvent.date}</p>
              <p>📍 <strong>Location:</strong> {selectedEvent.location}</p>
              <p>🎫 <strong>Tickets Sold:</strong> {selectedEvent.sold}</p>
              <p>💰 <strong>Revenue:</strong> {selectedEvent.revenue}</p>
              <p>✅ <strong>Check-ins:</strong> {selectedEvent.checkins}</p>
            </div>
            <button
              onClick={() => setSelectedEvent(null)}
              className="w-full bg-[#ED5A2E] text-white py-2.5 rounded-xl font-semibold hover:bg-[#d44d24] transition-colors mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
