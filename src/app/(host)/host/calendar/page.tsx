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
  Building2,
  ShieldCheck,
  CircleDollarSign,
  CheckCircle2,
  ArrowLeftRight,
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
    section: "Host Portal",
    items: [
      { label: "Host Sign Up", icon: UserCheck, href: "/host/signup", active: false },
      { label: "Business Info", icon: Building2, href: "/host/onboarding/business-info", active: false },
      { label: "KYC Verification", icon: ShieldCheck, href: "/host/onboarding/kyc", active: false },
      { label: "Bank Verification", icon: Wallet, href: "/host/onboarding/bank-verification", active: false },
      { label: "KYC Status", icon: CheckCircle2, href: "/host/onboarding/status", active: false },
    ],
  },
  {
    section: "Management",
    items: [
      // TODO: Management screens (Users, Tickets, Events, Earnings) awaiting designer/product specifications
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
      // TODO: Report and Settings screens awaiting designer/product specifications
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
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-montserrat overflow-x-hidden">
      {/* ── WHITE TOP HEADER (Desktop) ─────────────────── */}
      <header className="hidden md:flex h-[70px] bg-white items-center justify-between px-6 border-b border-gray-100 shrink-0 z-20">
        <span className="text-black font-semibold text-[1rem] font-poppins">Calendar</span>

        {/* Right Header: standard top-bar actions */}
        <div className="flex items-center gap-4">
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
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 border-2 border-dashed border-white/40 rounded-lg flex items-center justify-center text-white active:scale-95 transition-all"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <X size={18} />
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <rect width="18" height="2" rx="1" fill="white" />
                <rect y="6" width="18" height="2" rx="1" fill="white" />
                <rect y="12" width="18" height="2" rx="1" fill="white" />
              </svg>
            )}
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

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="bg-[#121212] border-b border-white/15 px-4 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <p className="text-[0.7rem] font-bold uppercase tracking-wider text-white/40">Host Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/host/dashboard" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 text-xs text-white hover:bg-[#ED5828]">
                <LayoutDashboard size={14} /> Dashboard
              </Link>
              <Link href="/host/calendar" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#ED5828] text-xs font-semibold text-white">
                <CalendarIcon size={14} /> Calendar
              </Link>
              <Link href="/host/promotions" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 text-xs text-white hover:bg-[#ED5828]">
                <Megaphone size={14} /> Promotions
              </Link>
              <Link href="/host/payouts" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 text-xs text-white hover:bg-[#ED5828]">
                <Wallet size={14} /> Payouts
              </Link>
              <Link href="/host/reviews" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 text-xs text-white hover:bg-[#ED5828]">
                <Star size={14} /> Reviews
              </Link>
            </div>
          </div>
        )}
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
        <main className="flex-1 bg-[#0D0D0D] overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">

            {/* Page Heading */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white font-montserrat">
                  Calendar &amp; Schedule
                </h1>
                <p className="text-xs sm:text-sm text-white/60 mt-1">
                  Manage your event dates, timelines, and live schedules
                </p>
              </div>

              <Link
                href="/host/events/new"
                className="flex items-center gap-2 bg-[#ED5828] hover:bg-[#d44d24] text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-md active:scale-95 shrink-0"
              >
                <Plus size={15} />
                <span>Create Event</span>
              </Link>
            </div>

            {/* Controls Toolbar Directly Under Heading (Item 27) */}
            <div className={`${activeView === "calendar" ? "hidden" : ""} flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-[#141414] border border-white/10 p-3 sm:p-4 rounded-2xl`}>
              {/* View Switcher Tabs: List | Calendar | Timeline */}
              <div className="flex items-center bg-[#1E1E1E] p-1 rounded-xl border border-white/10 shrink-0">
                <button
                  onClick={() => setActiveView("list")}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
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
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
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
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeView === "timeline"
                      ? "bg-[#ED5828] text-white shadow-lg"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <Activity size={14} />
                  <span>Timeline</span>
                </button>
              </div>

              {/* Event Search Input with Orange Search Action Button (Item 27) */}
              <div className="flex items-center gap-2 flex-1 max-w-full lg:max-w-lg">
                <div className="relative flex-1">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by event title or date..."
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder:text-white/40 outline-none focus:border-[#ED5828] transition-colors"
                  />
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#ED5828] hover:bg-[#d44d24] text-white rounded-xl text-xs font-bold transition-all shadow shrink-0"
                >
                  <Search size={14} />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </div>

            {/* Calendar View Component */}
            {activeView === "calendar" && (
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-4 sm:p-6 space-y-6">
                {/* Month Navigator */}
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-bold text-white font-montserrat">{selectedMonth}</h2>
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

                {/* Contained scrolling container for small mobile viewports */}
                <div className="w-full overflow-x-auto">
                  <div className="min-w-[600px] space-y-2">
                    {/* Day of week headers */}
                    <div className="grid grid-cols-7 gap-2">
                      {DAYS_OF_WEEK.map((day) => (
                        <div key={day} className="text-center py-2 text-xs font-semibold text-white/50">
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Cells Grid */}
                    <div className="grid grid-cols-7 gap-2">
                      {calendarDays.map((item, index) => (
                        <div
                          key={index}
                          className={`min-h-[85px] p-2.5 rounded-xl border border-white/5 flex flex-col justify-between transition-all hover:border-[#ED5828]/50 ${
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

            {activeView === "calendar" && (
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-[#141414] border border-white/10 p-3 sm:p-4">
                <div className="flex items-center bg-[#1E1E1E] p-1 rounded-xl border border-white/10 shrink-0">
                  <button onClick={() => setActiveView("list")} className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white/60 hover:text-white"><ListIcon size={14} /> List</button>
                  <button onClick={() => setActiveView("calendar")} className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[#ED5828] text-white shadow-lg"><CalendarIcon size={14} /> Calendar</button>
                  <button onClick={() => setActiveView("timeline")} className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white/60 hover:text-white"><Activity size={14} /> Timeline</button>
                </div>
                <div className="flex items-center gap-2 flex-1 sm:max-w-lg">
                  <div className="relative flex-1"><Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" /><input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by event date" className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder:text-white/40 outline-none focus:border-[#ED5828]" /></div>
                  <Link href="/host/events/new" className="flex items-center gap-1.5 px-4 py-2.5 bg-[#ED5828] text-white rounded-xl text-xs font-bold shadow shrink-0"><Plus size={14} /> <span className="hidden sm:inline">Create Event</span></Link>
                </div>
              </div>
            )}

            {/* List View */}
            {activeView === "list" && (
              <div className="space-y-4">
                {/* Event 1 */}
                <div className="bg-[#121212] border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ED5828]/10 text-[#ED5828] flex flex-col items-center justify-center font-bold">
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

                {/* Event 2 */}
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
          </div>
        </main>
      </div>
    </div>
  );
}
