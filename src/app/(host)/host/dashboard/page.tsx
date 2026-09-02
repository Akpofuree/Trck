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
  ArrowUpRight,
  ArrowRight,
  MessageSquare,
  Pencil,
  MoreVertical,
  X,
  Menu,
} from "lucide-react";

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

const customers = [
  {
    id: 1,
    name: "Chris Friedkly",
    company: "Supermarket Villanova",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
    active: false,
  },
  {
    id: 2,
    name: "Maggie Johnson",
    company: "Oasis Organic Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    active: true,
  },
  {
    id: 3,
    name: "Gael Harry",
    company: "New York Finest Fruits",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80",
    active: false,
  },
  {
    id: 4,
    name: "Jenna Sullivan",
    company: "Walmart",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
    active: false,
  },
];

const upcomingEvents = [
  { id: 1, date: "01 Jan", title: "NYE Party", tickets: "45 available tickets", status: "On Session" },
  { id: 2, date: "01 Jan", title: "NYE Party", tickets: "45 available tickets", status: "On Session" },
  { id: 3, date: "01 Jan", title: "NYE Party", tickets: "45 available tickets", status: "On Session" },
];

export default function HostDashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCustomer, setActiveCustomer] = useState(2);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-[var(--font-inter)] selection:bg-[#ED5A2E] selection:text-white">
      {/* ── TOP HEADER (Screenshot 4) ─────────────────────────────────── */}
      <header className="h-[68px] bg-black border-b border-white/10 flex items-center justify-between px-6 shrink-0 z-20 sticky top-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h1 className="text-xl font-bold text-white tracking-tight">Dashboard</h1>
        </div>

        {/* Right side: Bell icon & Profile */}
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

      {/* ── BODY: SIDEBAR + CONTENT ───────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        {/* ── LEFT SIDEBAR (Screenshot 4) ─────────────────────────────── */}
        <aside
          className={`hidden md:flex flex-col bg-[#0A0A0A] border-r border-white/10 transition-all duration-300 shrink-0 ${
            sidebarCollapsed ? "w-[68px]" : "w-[240px]"
          }`}
        >
          {/* Top Sidebar: Logo + Collapse Icon */}
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

          {/* Search Box */}
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

          {/* Nav Items */}
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

        {/* ── MAIN DASHBOARD CONTENT (Screenshot 4) ────────────────────── */}
        <main className="flex-1 bg-black overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-[1400px] mx-auto space-y-6">
            {/* ── TOP 3 KPI CARDS (Screenshot 4) ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Card 1: Revenues */}
              <div className="rounded-[20px] border border-white/10 bg-[#121212] p-6 flex flex-col justify-between min-h-[190px]">
                <div>
                  <h3 className="text-sm font-semibold text-white/80">Revenues</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      15%
                    </span>
                    <span className="text-2xl font-bold text-[#22C55E]">↗</span>
                  </div>
                  <p className="text-xs text-white/50 mt-1.5">
                    Increase compared to last week
                  </p>
                </div>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors"
                >
                  <span>Revenues report</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Card 2: Ticket Sold */}
              <div className="rounded-[20px] border border-white/10 bg-[#121212] p-6 flex flex-col justify-between min-h-[190px]">
                <div>
                  <h3 className="text-sm font-semibold text-white/80">Ticket Sold</h3>
                  <div className="mt-3 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    3k
                  </div>
                  <p className="text-xs text-white/50 mt-1.5">
                    You closed 3K out of 5K Tickets created
                  </p>
                </div>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors"
                >
                  <span>All deals</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Card 3: Quarter goal (Semi-circular progress gauge) */}
              <div className="rounded-[20px] border border-white/10 bg-[#121212] p-6 flex flex-col justify-between min-h-[190px]">
                <div>
                  <h3 className="text-sm font-semibold text-white/80">Quarter goal</h3>
                  <div className="mt-1 flex items-center justify-center relative h-24">
                    {/* SVG Gauge */}
                    <svg className="w-48 h-24 overflow-visible" viewBox="0 0 100 50">
                      {/* Background track */}
                      <path
                        d="M 10 50 A 40 40 0 0 1 90 50"
                        fill="none"
                        stroke="#262626"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                      {/* Active progress arc (84%) */}
                      <path
                        d="M 10 50 A 40 40 0 0 1 78 22"
                        fill="none"
                        stroke="#22C55E"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute bottom-0 text-center">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white">84%</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors"
                >
                  <span>All goals</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* ── MIDDLE ROW: CUSTOMERS (Left) & SALES ANALYTICS (Right) (Screenshot 4) ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left Column (Customer List - 5 Cols) */}
              <div className="lg:col-span-5 rounded-[20px] border border-white/10 bg-[#121212] p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-end mb-4">
                    <button className="flex items-center gap-1 text-xs text-white/60 hover:text-white">
                      <span>Sort by</span>
                      <span className="font-semibold text-white">Newest</span>
                      <ChevronDown size={13} />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {customers.map((c) => {
                      const isSelected = activeCustomer === c.id;
                      return (
                        <div
                          key={c.id}
                          onClick={() => setActiveCustomer(c.id)}
                          className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                            isSelected
                              ? "bg-[#FAF4E6] text-gray-900 shadow-md"
                              : "hover:bg-white/5 text-white"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={c.avatar}
                              alt={c.name}
                              className="h-10 w-10 rounded-full object-cover shrink-0"
                            />
                            <div>
                              <p className={`text-xs font-bold leading-tight ${isSelected ? "text-gray-900" : "text-white"}`}>
                                {c.name}
                              </p>
                              <p className={`text-[0.68rem] leading-tight ${isSelected ? "text-gray-600" : "text-white/50"}`}>
                                {c.company}
                              </p>
                            </div>
                          </div>

                          {isSelected && (
                            <div className="flex items-center gap-3 text-gray-700">
                              <MessageSquare size={14} className="hover:text-black" />
                              <Star size={14} className="hover:text-black" />
                              <Pencil size={14} className="hover:text-black" />
                              <MoreVertical size={14} className="hover:text-black" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors"
                >
                  <span>All customers</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Right Column (Analytics Chart + 3 Mini Cards - 7 Cols) */}
              <div className="lg:col-span-7 space-y-5">
                {/* Area Chart Box */}
                <div className="rounded-[20px] border border-white/10 bg-[#121212] p-5 sm:p-6">
                  <div className="flex items-center justify-end mb-4">
                    <button className="flex items-center gap-1 text-xs text-white/70 hover:text-white bg-[#1A1A1A] border border-white/10 px-2.5 py-1 rounded-lg">
                      <span>Yearly</span>
                      <ChevronDown size={12} />
                    </button>
                  </div>

                  {/* SVG Line / Area Graph spanning 2016 to 2023 */}
                  <div className="relative h-44 w-full">
                    <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ED5A2E" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#ED5A2E" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Y-axis gridlines */}
                      <line x1="40" y1="20" x2="490" y2="20" stroke="#222" strokeDasharray="3 3" />
                      <line x1="40" y1="55" x2="490" y2="55" stroke="#222" strokeDasharray="3 3" />
                      <line x1="40" y1="90" x2="490" y2="90" stroke="#222" strokeDasharray="3 3" />
                      <line x1="40" y1="125" x2="490" y2="125" stroke="#222" strokeDasharray="3 3" />

                      {/* Area Fill */}
                      <path
                        d="M 50 115 Q 120 105 180 85 T 260 50 T 320 110 T 380 95 T 480 40 L 480 130 L 50 130 Z"
                        fill="url(#chartGradient)"
                      />

                      {/* Stroke Curve */}
                      <path
                        d="M 50 115 Q 120 105 180 85 T 260 50 T 320 110 T 380 95 T 480 40"
                        fill="none"
                        stroke="#ED5A2E"
                        strokeWidth="2.5"
                      />

                      {/* Y-axis labels */}
                      <text x="5" y="24" fill="#555" fontSize="9">100k</text>
                      <text x="8" y="59" fill="#555" fontSize="9">50k</text>
                      <text x="8" y="94" fill="#555" fontSize="9">20k</text>
                      <text x="8" y="129" fill="#555" fontSize="9">0</text>

                      {/* X-axis year labels */}
                      <text x="50" y="145" fill="#555" fontSize="9">2016</text>
                      <text x="110" y="145" fill="#555" fontSize="9">2017</text>
                      <text x="170" y="145" fill="#555" fontSize="9">2018</text>
                      <text x="230" y="145" fill="#555" fontSize="9">2019</text>
                      <text x="290" y="145" fill="#555" fontSize="9">2020</text>
                      <text x="350" y="145" fill="#555" fontSize="9">2021</text>
                      <text x="410" y="145" fill="#555" fontSize="9">2022</text>
                      <text x="465" y="145" fill="#555" fontSize="9">2023</text>
                    </svg>
                  </div>
                </div>

                {/* 3 Mini Metric Cards in a row (Screenshot 4) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Top month */}
                  <div className="rounded-2xl border border-white/10 bg-[#121212] p-4">
                    <p className="text-xs text-white/50">Top month</p>
                    <p className="text-base font-bold text-[#ED5A2E] mt-1">November</p>
                    <p className="text-[0.68rem] text-white/40">2024</p>
                  </div>

                  {/* Top year */}
                  <div className="rounded-2xl border border-white/10 bg-[#121212] p-4">
                    <p className="text-xs text-white/50">Top year</p>
                    <p className="text-base font-bold text-[#ED5A2E] mt-1">2025</p>
                    <p className="text-[0.68rem] text-white/40">26K sold so far</p>
                  </div>

                  {/* Top buyer */}
                  <div className="rounded-2xl border border-white/10 bg-[#121212] p-4">
                    <p className="text-xs text-white/50">Top buyer</p>
                    <div className="flex items-center gap-2 mt-1">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
                        alt="Oasis Organic"
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      <p className="text-xs font-semibold text-white truncate">Oasis Organic Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── BOTTOM SECTION: UPCOMING EVENTS (Screenshot 4) ── */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-white tracking-tight">
                Upcoming Events
              </h2>

              <div className="rounded-[20px] border border-white/10 bg-[#121212] divide-y divide-white/5 overflow-hidden">
                {upcomingEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 p-4 sm:px-6 items-center text-xs hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="font-bold text-[#ED5A2E] text-sm sm:text-xs">{evt.date}</div>
                    <div className="font-semibold text-white">{evt.title}</div>
                    <div className="text-white/60">{evt.tickets}</div>
                    <div className="text-white/85 sm:text-right font-medium">{evt.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
