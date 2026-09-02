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
  Eye,
  Pencil,
  BarChart2,
  MapPin,
  CalendarDays,
  List as ListIcon,
  Activity,
  X,
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
  const [activeView, setActiveView] = useState<"list" | "calendar" | "timeline">("calendar");
  const [selectedMonth, setSelectedMonth] = useState("November 2026");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Calendar dates matrix for Nov 2026
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
    <div className="min-h-screen bg-black text-white flex flex-col font-[var(--font-inter)] selection:bg-[#ED5A2E] selection:text-white">
      {/* ── TOP HEADER ─────────────────────────────────── */}
      <header className="h-[68px] bg-black border-b border-white/10 flex items-center justify-between px-6 shrink-0 z-20 sticky top-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white"
          >
            {mobileMenuOpen ? <X size={20} /> : <CalendarIcon size={20} />}
          </button>
          <h1 className="text-xl font-bold text-white tracking-tight">Calendar</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/80 hover:text-white transition-colors">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-black" />
          </button>

          <div className="flex items-center gap-2.5 pl-2 border-l border-white/10">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ED5A2E] text-white font-bold text-xs shadow-md">
              DO
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="text-xs font-semibold text-white">Dominion Ogbaji</p>
              <p className="text-[0.68rem] text-white/50">Super Admin</p>
            </div>
          </div>
        </div>
      </header>

      {/* ── BODY: SIDEBAR + CONTENT ──────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        {/* ── SIDEBAR ────────────────────────────────── */}
        <aside
          className={`hidden md:flex flex-col bg-[#0A0A0A] border-r border-white/10 transition-all duration-300 shrink-0 ${
            sidebarCollapsed ? "w-[68px]" : "w-[240px]"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/5">
            {!sidebarCollapsed && (
              <span className="text-xs font-bold uppercase tracking-wider text-white/40">
                Menu
              </span>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="ml-auto flex h-7 w-7 items-center justify-center rounded-lg border border-white/15 text-white/60 hover:text-white transition-colors"
            >
              <ChevronLeft
                size={14}
                className={`transition-transform duration-300 ${sidebarCollapsed ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {!sidebarCollapsed && (
            <div className="p-3">
              <div className="flex items-center gap-2 rounded-xl bg-[#141414] border border-white/10 px-3 py-2">
                <Search size={14} className="text-white/40 shrink-0" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent text-xs text-white placeholder:text-white/30 outline-none"
                />
                <div className="flex items-center gap-0.5 text-[10px] text-white/40 font-mono border border-white/15 rounded px-1">
                  <span>⌘</span>
                  <span>K</span>
                </div>
              </div>
            </div>
          )}

          <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-5">
            {NAV_ITEMS.map((section) => (
              <div key={section.section}>
                {!sidebarCollapsed && (
                  <p className="px-3 text-[0.68rem] font-bold uppercase tracking-wider text-white/35 mb-1.5">
                    {section.section}
                  </p>
                )}
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                          item.active
                            ? "bg-[#ED5A2E] text-white font-semibold shadow-md shadow-[#ED5A2E]/20"
                            : "text-white/65 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Icon size={16} className="shrink-0" />
                        {!sidebarCollapsed && <span>{item.label}</span>}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[68px] z-50 bg-black/95 backdrop-blur-md px-6 py-6 overflow-y-auto border-t border-white/10 animate-in fade-in duration-200">
            <div className="space-y-6">
              {NAV_ITEMS.map((section) => (
                <div key={section.section}>
                  <p className="text-[0.7rem] font-bold uppercase tracking-wider text-white/40 mb-2">
                    {section.section}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-2 p-3 rounded-xl text-xs font-semibold ${
                            item.active ? "bg-[#ED5A2E] text-white" : "bg-[#141414] text-white/80 hover:text-white"
                          }`}
                        >
                          <Icon size={16} />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── MAIN CONTENT ───────────────────────────── */}
        <main className="flex-1 bg-black overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-[1400px] mx-auto space-y-6">
            {/* Page Heading */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Calendar &amp; Schedule
                </h1>
                <p className="text-xs sm:text-sm text-white/60 mt-1">
                  Manage your event dates, timelines, and live schedules
                </p>
              </div>

              <Link
                href="/host/events/new"
                className="flex items-center gap-2 bg-[#ED5A2E] hover:bg-[#d4501f] text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-md active:scale-95 shrink-0"
              >
                <Plus size={15} />
                <span>Create Event</span>
              </Link>
            </div>

            {/* Controls Toolbar */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-[#141414] border border-white/10 p-3 sm:p-4 rounded-2xl">
              {/* View Switcher Tabs */}
              <div className="flex items-center bg-[#1E1E1E] p-1 rounded-xl border border-white/10 shrink-0">
                <button
                  onClick={() => setActiveView("list")}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeView === "list"
                      ? "bg-[#ED5A2E] text-white shadow-lg"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <ListIcon size={14} />
                  <span>List</span>
                </button>
                <button
                  onClick={() => setActiveView("calendar")}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeView === "calendar"
                      ? "bg-[#ED5A2E] text-white shadow-lg"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <CalendarIcon size={14} />
                  <span>Calendar</span>
                </button>
                <button
                  onClick={() => setActiveView("timeline")}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeView === "timeline"
                      ? "bg-[#ED5A2E] text-white shadow-lg"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <Activity size={14} />
                  <span>Timeline</span>
                </button>
              </div>

              {/* Event Search Input */}
              <div className="flex items-center gap-2 flex-1 max-w-full lg:max-w-lg">
                <div className="relative flex-1">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by event title or date..."
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder:text-white/40 outline-none focus:border-[#ED5A2E] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Calendar View Component */}
            {activeView === "calendar" && (
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-4 sm:p-6 space-y-6">
                {/* Month Navigator */}
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-bold text-white">{selectedMonth}</h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedMonth("October 2026")}
                      className="p-2 bg-[#1A1A1A] border border-white/10 rounded-lg hover:border-white/30 text-white/70"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setSelectedMonth("December 2026")}
                      className="p-2 bg-[#1A1A1A] border border-white/10 rounded-lg hover:border-white/30 text-white/70"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="w-full overflow-x-auto">
                  <div className="min-w-[600px] space-y-2">
                    <div className="grid grid-cols-7 gap-2">
                      {DAYS_OF_WEEK.map((day) => (
                        <div key={day} className="text-center py-2 text-xs font-semibold text-white/50">
                          {day}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                      {calendarDays.map((item, index) => (
                        <div
                          key={index}
                          className={`min-h-[85px] p-2.5 rounded-xl border border-white/5 flex flex-col justify-between transition-all hover:border-[#ED5A2E]/50 ${
                            item.current ? "bg-[#181818] text-white" : "bg-[#0E0E0E] text-white/20"
                          }`}
                        >
                          <span
                            className="font-bold tracking-tight text-lg sm:text-xl"
                            style={{ lineHeight: 1 }}
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
                </div>
              </div>
            )}

            {/* List View */}
            {activeView === "list" && (
              <div className="space-y-4">
                <div className="bg-[#121212] border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ED5A2E]/10 text-[#ED5A2E] flex flex-col items-center justify-center font-bold">
                      <span className="text-xs uppercase">Nov</span>
                      <span className="text-base leading-none">15</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">5IVE LIVE AT 02 ARENA</h3>
                      <p className="text-xs text-white/60">O2 Arena, London • 19:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-md">
                      Confirmed
                    </span>
                    <Link
                      href="/host/events/new"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <Pencil size={13} /> Edit
                    </Link>
                  </div>
                </div>

                <div className="bg-[#121212] border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex flex-col items-center justify-center font-bold">
                      <span className="text-xs uppercase">Dec</span>
                      <span className="text-base leading-none">22</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Afrobeats Beach Festival</h3>
                      <p className="text-xs text-white/60">Landmark Beach, Lagos • 14:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <span className="bg-blue-500/10 text-blue-400 text-xs font-bold px-2.5 py-1 rounded-md">
                      Upcoming
                    </span>
                    <Link
                      href="/host/events/new"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <Pencil size={13} /> Edit
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Timeline View Placeholder */}
            {activeView === "timeline" && (
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-12 text-center text-white/60">
                <CalendarDays size={36} className="mx-auto mb-3 text-white/30" />
                <p className="text-sm font-semibold text-white">Timeline Schedule Mode</p>
                <p className="text-xs text-white/40 mt-1">
                  Sequential timeline mode displays overlapping schedule tracks for multi-day events.
                </p>
              </div>
            )}

            {/* ── UPCOMING & RECENT EVENTS LIST (Always displayed at bottom per user instruction) ── */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Recent Events List
                </h2>
                <Link
                  href="/host/events/new"
                  className="text-xs font-semibold text-[#ED5A2E] hover:underline flex items-center gap-1"
                >
                  <span>Create new</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="space-y-4">
                {/* Event 1 */}
                <div className="bg-[#121212] border border-white/10 rounded-2xl p-5 relative overflow-hidden transition-all hover:border-white/20">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
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
                      <h3 className="text-white font-bold text-lg">
                        5IVE LIVE AT 02 ARENA
                      </h3>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#ED5A2E] font-semibold bg-[#ED5A2E]/10 px-2 py-0.5 rounded-md">Concert</span>
                        <span className="text-white/40">•</span>
                        <span className="text-white/60">Series #102</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
                        <div className="flex items-center gap-1">
                          <MapPin size={13} className="text-white/50" />
                          <span>O2 Arena, London, UK</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays size={13} className="text-white/50" />
                          <span>15 Nov 2026, 19:00</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap md:flex-col items-end justify-between gap-3 w-full md:w-auto border-t md:border-t-0 border-white/10 pt-3 md:pt-0">
                      <div className="text-right">
                        <p className="text-xs text-white/50">Revenue</p>
                        <p className="text-lg font-bold text-emerald-400">$45,200</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link href="/host/events/new" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" title="Edit">
                          <Pencil size={14} />
                        </Link>
                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" title="Analytics">
                          <BarChart2 size={14} />
                        </button>
                        <Link href="/events/sample-event" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" title="View">
                          <Eye size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="bg-[#121212] border border-white/10 rounded-2xl p-5 relative overflow-hidden transition-all hover:border-white/20">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div
                      className="relative w-full md:w-[155px] h-[105px] rounded-xl overflow-hidden bg-cover bg-center shrink-0"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop')`,
                      }}
                    >
                      <div className="absolute inset-0 bg-black/20" />
                      <span className="absolute top-2 left-2 bg-[#3B82F6] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                        UPCOMING
                      </span>
                    </div>

                    <div className="flex-1 space-y-2">
                      <h3 className="text-white font-bold text-lg">
                        Afrobeats Beach Festival
                      </h3>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#3B82F6] font-semibold bg-[#3B82F6]/10 px-2 py-0.5 rounded-md">Festival</span>
                        <span className="text-white/40">•</span>
                        <span className="text-white/60">Series #103</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
                        <div className="flex items-center gap-1">
                          <MapPin size={13} className="text-white/50" />
                          <span>Landmark Beach, Lagos</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays size={13} className="text-white/50" />
                          <span>22 Dec 2026, 14:00</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap md:flex-col items-end justify-between gap-3 w-full md:w-auto border-t md:border-t-0 border-white/10 pt-3 md:pt-0">
                      <div className="text-right">
                        <p className="text-xs text-white/50">Revenue</p>
                        <p className="text-lg font-bold text-emerald-400">$28,900</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link href="/host/events/new" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" title="Edit">
                          <Pencil size={14} />
                        </Link>
                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" title="Analytics">
                          <BarChart2 size={14} />
                        </button>
                        <Link href="/events/sample-event" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" title="View">
                          <Eye size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="bg-[#121212] border border-white/10 rounded-2xl p-5 relative overflow-hidden transition-all hover:border-white/20 opacity-85">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div
                      className="relative w-full md:w-[155px] h-[105px] rounded-xl overflow-hidden bg-cover bg-center shrink-0"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400&auto=format&fit=crop')`,
                      }}
                    >
                      <div className="absolute inset-0 bg-black/40" />
                      <span className="absolute top-2 left-2 bg-gray-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                        COMPLETED
                      </span>
                    </div>

                    <div className="flex-1 space-y-2">
                      <h3 className="text-white font-bold text-lg">
                        Lagos Tech &amp; Music Summit
                      </h3>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-gray-400 font-semibold bg-white/5 px-2 py-0.5 rounded-md">Conference</span>
                        <span className="text-white/40">•</span>
                        <span className="text-white/60">Series #101</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
                        <div className="flex items-center gap-1">
                          <MapPin size={13} className="text-white/50" />
                          <span>Eko Convention Centre, Lagos</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays size={13} className="text-white/50" />
                          <span>10 Oct 2026, 09:00</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap md:flex-col items-end justify-between gap-3 w-full md:w-auto border-t md:border-t-0 border-white/10 pt-3 md:pt-0">
                      <div className="text-right">
                        <p className="text-xs text-white/50">Revenue</p>
                        <p className="text-lg font-bold text-white/80">$54,350</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" title="Analytics">
                          <BarChart2 size={14} />
                        </button>
                        <Link href="/events/sample-event" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors" title="View">
                          <Eye size={14} />
                        </Link>
                      </div>
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
