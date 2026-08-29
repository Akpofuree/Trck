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
  Plus,
  SlidersHorizontal,
  Eye,
  Pencil,
  Copy,
  BarChart2,
  Share2,
  MoreVertical,
  MapPin,
  CalendarDays,
  UserCheck,
  CircleDollarSign,
  CheckCircle2,
  ArrowLeftRight,
  List as ListIcon,
  Activity,
} from "lucide-react";

const NAV_ITEMS = [
  {
    section: "Home",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, href: "/host/dashboard" },
      { label: "Calenders", icon: CalendarIcon, href: "/host/calendar", active: true },
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

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function HostCalendarPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeView, setActiveView] = useState<"list" | "calendar" | "timeline">("list");
  const [selectedMonth, setSelectedMonth] = useState("November 2024");

  // Calendar dates matrix for Nov 2024
  const calendarDays = [
    { day: 27, current: false },
    { day: 28, current: false },
    { day: 29, current: false },
    { day: 30, current: false },
    { day: 31, current: false },
    { day: 1, current: true, event: "Davido Rehearsals", color: "#ED5828" },
    { day: 2, current: true },
    { day: 3, current: true },
    { day: 4, current: true },
    { day: 5, current: true },
    { day: 6, current: true },
    { day: 7, current: true },
    { day: 8, current: true },
    { day: 9, current: true },
    { day: 10, current: true },
    { day: 11, current: true },
    { day: 12, current: true },
    { day: 13, current: true },
    { day: 14, current: true },
    { day: 15, current: true, event: "5IVE LIVE AT 02", color: "#22C55E" },
    { day: 16, current: true },
    { day: 17, current: true },
    { day: 18, current: true },
    { day: 19, current: true },
    { day: 20, current: true },
    { day: 21, current: true },
    { day: 22, current: true },
    { day: 23, current: true },
    { day: 24, current: true },
    { day: 25, current: true },
    { day: 26, current: true },
    { day: 27, current: true },
    { day: 28, current: true },
    { day: 29, current: true },
    { day: 30, current: true },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-montserrat">
      {/* ── WHITE TOP HEADER (Desktop) ─────────────────── */}
      <header className="hidden md:flex h-[70px] bg-white items-center justify-between px-6 border-b border-gray-100 shrink-0 z-20">
        <span className="text-black font-semibold text-[1rem] font-poppins">Calendar</span>

        {/* Right Header items: Orange Search Bar + User info */}
        <div className="flex items-center gap-4">
          {/* Orange Search Bar: 220.85px x 43.97px, radius 7.49px, search icon on right */}
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
            {/* Top Toolbar Row — Screenshot 2 */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* View Switcher Tabs: List | Calendar | Timeline */}
              <div className="flex items-center bg-[#181818] p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setActiveView("list")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeView === "list"
                      ? "bg-[#ED5828] text-white shadow-lg"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <ListIcon size={14} />
                  <span>List</span>
                </button>
                <button
                  onClick={() => setActiveView("calendar")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeView === "calendar"
                      ? "bg-[#ED5828] text-white shadow-lg"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <CalendarIcon size={14} />
                  <span>Calendar</span>
                </button>
                <button
                  onClick={() => setActiveView("timeline")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeView === "timeline"
                      ? "bg-[#ED5828] text-white shadow-lg"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <Activity size={14} />
                  <span>Timeline</span>
                </button>
              </div>

              {/* Middle Search Input */}
              <div className="relative flex-1 max-w-md w-full">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="Search by event date"
                  className="w-full bg-[#161616] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder:text-white/40 outline-none focus:border-[#ED5828] transition-colors"
                />
              </div>

              {/* Create Event Button */}
              <Link
                href="/host/events/new"
                className="flex items-center gap-2 bg-[#ED5828] hover:bg-[#d44d24] text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-md active:scale-95"
              >
                <SlidersHorizontal size={14} />
                <span>Create Event</span>
              </Link>
            </div>

            {/* Calendar View Component */}
            {activeView === "calendar" && (
              <div className="bg-[#000000] border border-white/10 rounded-2xl p-6 space-y-6">
                {/* Month Navigator */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white font-montserrat">{selectedMonth}</h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedMonth("October 2024")}
                      className="p-2 bg-[#101010] border border-white/10 rounded-lg hover:border-white/30 text-white/70"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setSelectedMonth("December 2024")}
                      className="p-2 bg-[#101010] border border-white/10 rounded-lg hover:border-white/30 text-white/70"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Day of week headers */}
                <div className="grid grid-cols-7 gap-2">
                  {DAYS_OF_WEEK.map((day) => (
                    <div key={day} className="text-center py-2 text-xs font-semibold text-white/50">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Cells Grid — Cell bg #101010, number font-size 23.328px (1.458rem) */}
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((item, index) => (
                    <div
                      key={index}
                      className={`min-h-[90px] p-2.5 rounded-xl border border-white/5 flex flex-col justify-between transition-all hover:border-[#ED5828]/50 ${
                        item.current ? "bg-[#101010] text-white" : "bg-[#0A0A0A] text-white/20"
                      }`}
                    >
                      <span
                        className="font-bold tracking-tight"
                        style={{ fontSize: "1.458rem", lineHeight: 1 }}
                      >
                        {item.day}
                      </span>
                      {item.event && (
                        <div
                          className="mt-1 px-1.5 py-0.5 rounded text-[10px] font-semibold truncate"
                          style={{
                            backgroundColor: `${item.color}20`,
                            color: item.color,
                            border: `1px solid ${item.color}40`,
                          }}
                        >
                          {item.event}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline View Placeholder */}
            {activeView === "timeline" && (
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-12 text-center text-white/60">
                <Activity size={32} className="mx-auto mb-2 text-[#ED5828]" />
                <p className="text-sm font-medium">Timeline View Scheduled for Q4 Events</p>
              </div>
            )}

            {/* Recent Events List Section — Screenshot 2 */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-white/90 font-montserrat">Recent Events List</h2>

              {/* Event Card 1 - LIVE */}
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-5 relative overflow-hidden transition-all hover:border-white/20">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="pt-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-white/30 accent-[#ED5828] bg-transparent cursor-pointer"
                    />
                  </div>

                  {/* Thumbnail with LIVE badge */}
                  <div
                    className="relative w-full md:w-[155px] h-[105px] rounded-xl overflow-hidden bg-cover bg-center shrink-0"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop')`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="absolute top-2 left-2 bg-[#22C55E] text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      LIVE
                    </span>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-white font-bold text-lg font-poppins">
                        5IVE LIVE AT 02 ARENA
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <span className="border border-white/20 text-white/80 px-2 py-0.5 rounded-md font-medium">
                        Concert
                      </span>
                      <span className="text-white/40 flex items-center gap-1">
                        <ArrowLeftRight size={11} />
                        Part of <span className="text-[#ED5828] font-medium">Davido live at 02</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays size={13} className="text-white/40" />
                        <span>Friday, Nov 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-white/40" />
                        <span>02 Arena, London, United Kingdom</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-1 text-xs" style={{ color: "#777777" }}>
                      <div className="flex items-center gap-1.5 font-medium">
                        <UserCheck size={14} />
                        <span>Sold: <strong className="text-white/90 font-semibold">156/200 (78%)</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <CircleDollarSign size={14} />
                        <span>Revenue: <strong className="text-white/90 font-semibold">₦450,000</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 size={14} />
                        <span>Check-ins: <strong className="text-white/90 font-semibold">145/156</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-[#ED5828] w-full mt-4 mb-3 opacity-90" />

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5 ml-0 md:ml-[187px]">
                    <div className="flex -space-x-1.5">
                      <div className="w-6 h-6 rounded-full bg-[#ED5828] text-white text-[9px] font-bold flex items-center justify-center border border-[#121212]">
                        JD
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#ED5828] text-white text-[9px] font-bold flex items-center justify-center border border-[#121212]">
                        D
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#ED5828] text-white text-[9px] font-bold flex items-center justify-center border border-[#121212]">
                        D
                      </div>
                    </div>
                    <span className="text-[11px] text-white/60 font-medium">+2 more</span>
                  </div>

                  {/* Action icons — 18.96px x 18.96px, radius 3.16px, white overlay bg, ORANGE icons */}
                  <div className="flex items-center gap-2">
                    <button
                      title="View Details"
                      className="flex items-center justify-center transition-all hover:opacity-80"
                      style={{
                        width: 18.96,
                        height: 18.96,
                        borderRadius: 3.16,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <Eye size={12} color="#ED5828" />
                    </button>
                    <button
                      title="Edit Event"
                      className="flex items-center justify-center transition-all hover:opacity-80"
                      style={{
                        width: 18.96,
                        height: 18.96,
                        borderRadius: 3.16,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <Pencil size={11} color="#ED5828" />
                    </button>
                    <button
                      title="Duplicate"
                      className="flex items-center justify-center transition-all hover:opacity-80"
                      style={{
                        width: 18.96,
                        height: 18.96,
                        borderRadius: 3.16,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <Copy size={11} color="#ED5828" />
                    </button>
                    <button
                      title="Analytics"
                      className="flex items-center justify-center transition-all hover:opacity-80"
                      style={{
                        width: 18.96,
                        height: 18.96,
                        borderRadius: 3.16,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <BarChart2 size={11} color="#ED5828" />
                    </button>
                    <button
                      title="Share"
                      className="flex items-center justify-center transition-all hover:opacity-80"
                      style={{
                        width: 18.96,
                        height: 18.96,
                        borderRadius: 3.16,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <Share2 size={11} color="#ED5828" />
                    </button>
                    <button
                      title="More Options"
                      className="flex items-center justify-center transition-all hover:opacity-80"
                      style={{
                        width: 18.96,
                        height: 18.96,
                        borderRadius: 3.16,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <MoreVertical size={12} color="#ED5828" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Event Card 2 - PUBLISHED */}
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-5 relative overflow-hidden transition-all hover:border-white/20">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="pt-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-white/30 accent-[#ED5828] bg-transparent cursor-pointer"
                    />
                  </div>

                  <div
                    className="relative w-full md:w-[155px] h-[105px] rounded-xl overflow-hidden bg-cover bg-center shrink-0"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop')`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="absolute top-2 left-2 bg-[#3B82F6] text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      PUBLISHED
                    </span>
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-white font-bold text-lg font-poppins">
                        5IVE LIVE AT 02 ARENA
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <span className="border border-white/20 text-white/80 px-2 py-0.5 rounded-md font-medium">
                        Concert
                      </span>
                      <span className="text-white/40 flex items-center gap-1">
                        <ArrowLeftRight size={11} />
                        Part of <span className="text-[#ED5828] font-medium">Davido live at 02</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays size={13} className="text-white/40" />
                        <span>Friday, Nov 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-white/40" />
                        <span>02 Arena, London, United Kingdom</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-1 text-xs" style={{ color: "#777777" }}>
                      <div className="flex items-center gap-1.5 font-medium">
                        <UserCheck size={14} />
                        <span>Sold: <strong className="text-white/90 font-semibold">156/200 (78%)</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <CircleDollarSign size={14} />
                        <span>Revenue: <strong className="text-white/90 font-semibold">₦450,000</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 size={14} />
                        <span>Check-ins: <strong className="text-white/90 font-semibold">145/156</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-[#ED5828] w-full mt-4 mb-3 opacity-90" />

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5 ml-0 md:ml-[187px]">
                    <div className="flex -space-x-1.5">
                      <div className="w-6 h-6 rounded-full bg-[#ED5828] text-white text-[9px] font-bold flex items-center justify-center border border-[#121212]">
                        JD
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#ED5828] text-white text-[9px] font-bold flex items-center justify-center border border-[#121212]">
                        D
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#ED5828] text-white text-[9px] font-bold flex items-center justify-center border border-[#121212]">
                        D
                      </div>
                    </div>
                    <span className="text-[11px] text-white/60 font-medium">+2 more</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      title="View Details"
                      className="flex items-center justify-center transition-all hover:opacity-80"
                      style={{
                        width: 18.96,
                        height: 18.96,
                        borderRadius: 3.16,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <Eye size={12} color="#ED5828" />
                    </button>
                    <button
                      title="Edit Event"
                      className="flex items-center justify-center transition-all hover:opacity-80"
                      style={{
                        width: 18.96,
                        height: 18.96,
                        borderRadius: 3.16,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <Pencil size={11} color="#ED5828" />
                    </button>
                    <button
                      title="Duplicate"
                      className="flex items-center justify-center transition-all hover:opacity-80"
                      style={{
                        width: 18.96,
                        height: 18.96,
                        borderRadius: 3.16,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <Copy size={11} color="#ED5828" />
                    </button>
                    <button
                      title="Analytics"
                      className="flex items-center justify-center transition-all hover:opacity-80"
                      style={{
                        width: 18.96,
                        height: 18.96,
                        borderRadius: 3.16,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <BarChart2 size={11} color="#ED5828" />
                    </button>
                    <button
                      title="Share"
                      className="flex items-center justify-center transition-all hover:opacity-80"
                      style={{
                        width: 18.96,
                        height: 18.96,
                        borderRadius: 3.16,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <Share2 size={11} color="#ED5828" />
                    </button>
                    <button
                      title="More Options"
                      className="flex items-center justify-center transition-all hover:opacity-80"
                      style={{
                        width: 18.96,
                        height: 18.96,
                        borderRadius: 3.16,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <MoreVertical size={12} color="#ED5828" />
                    </button>
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
