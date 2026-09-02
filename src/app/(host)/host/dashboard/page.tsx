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
  Plus,
  DollarSign,
  Target,
  Award,
  X,
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

export default function HostDashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sortBy, setSortBy] = useState("Newest");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-montserrat overflow-x-hidden">
      {/* ── WHITE TOP HEADER (Desktop) ─────────────────── */}
      <header className="hidden md:flex h-[70px] bg-white items-center justify-between px-6 border-b border-gray-100 shrink-0 z-20">
        <span className="text-black font-semibold text-[1rem] font-poppins">Dashboard Overview</span>
        <div className="flex items-center gap-3">
          <Link
            href="/host/events/new"
            className="flex items-center gap-1.5 bg-[#ED5828] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#d44d24] transition-colors"
          >
            <Plus size={14} /> Create Event
          </Link>
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
            <Link
              href="/host/events/new"
              className="flex items-center gap-1 bg-[#ED5828] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg"
            >
              <Plus size={12} /> New
            </Link>
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
              <Link href="/host/dashboard" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#ED5828] text-xs font-semibold text-white">
                <LayoutDashboard size={14} /> Dashboard
              </Link>
              <Link href="/host/calendar" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 text-xs text-white hover:bg-[#ED5828]">
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
          <div className="max-w-6xl mx-auto space-y-8">
            {/* ── KPI PERFORMANCE METRICS ROW (Item 25 Restoration) ── */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4 font-poppins">
                Performance Overview
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Revenue */}
                <div className="rounded-2xl border border-white/10 bg-[#141414] p-5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-white/60">Total Revenue</span>
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <DollarSign size={16} />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    $128,450
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span className="font-bold">+18.2%</span>
                    <span className="text-white/40">vs last month</span>
                  </div>
                </div>

                {/* Tickets Sold */}
                <div className="rounded-2xl border border-white/10 bg-[#141414] p-5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-white/60">Tickets Sold</span>
                    <div className="p-2 rounded-xl bg-[#ED5828]/10 text-[#ED5828]">
                      <Ticket size={16} />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    4,820
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-[#ED5828] font-medium">
                    <span className="font-bold">85.4%</span>
                    <span className="text-white/40">capacity rate</span>
                  </div>
                </div>

                {/* Current Quarter */}
                <div className="rounded-2xl border border-white/10 bg-[#141414] p-5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-white/60">Quarter Target</span>
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                      <Award size={16} />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Q4 2026
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-blue-400 font-medium">
                    <span className="font-bold">$150,000</span>
                    <span className="text-white/40">quarter goal</span>
                  </div>
                </div>

                {/* Goal Completion */}
                <div className="rounded-2xl border border-white/10 bg-[#141414] p-5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-white/60">Goal Progress</span>
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                      <Target size={16} />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    85.6%
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                    <span className="font-bold">On track</span>
                    <span className="text-white/40">to reach target</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Header controls */}
            <div className="flex items-center justify-between pt-2">
              <div>
                <h1 className="text-xl font-bold text-white font-montserrat">Recent Events List</h1>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span>Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-[#1A1A1A] border border-white/20 text-white rounded-lg px-3 py-1.5 pr-8 appearance-none text-xs outline-none cursor-pointer focus:border-[#ED5828]"
                  >
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Most Revenue</option>
                    <option>Most Sold</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Event List Items */}
            <div className="space-y-4">
              {/* Event Card 1 - LIVE */}
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-5 relative overflow-hidden transition-all hover:border-white/20">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  {/* Left Checkbox */}
                  <div className="pt-2 hidden sm:block">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-white/30 accent-[#ED5828] bg-transparent cursor-pointer"
                    />
                  </div>

                  {/* Thumbnail with LIVE badge */}
                  <div className="relative w-full md:w-[155px] h-[105px] rounded-xl overflow-hidden bg-cover bg-center shrink-0"
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

                  {/* Content details */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-white font-bold text-lg font-poppins">
                        5IVE LIVE AT 02 ARENA
                      </h2>
                    </div>

                    {/* Tag + series */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-[#ED5828] font-semibold bg-[#ED5828]/10 px-2 py-0.5 rounded-md">Concert</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/60">Series #102</span>
                    </div>

                    {/* Location & Date */}
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

                  {/* Metrics & Actions */}
                  <div className="flex flex-wrap md:flex-col items-end justify-between gap-3 w-full md:w-auto border-t md:border-t-0 border-white/10 pt-3 md:pt-0">
                    <div className="text-right">
                      <p className="text-xs text-white/50">Revenue</p>
                      <p className="text-lg font-bold text-emerald-400 font-poppins">$45,200</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href="/host/events/new"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                        title="Edit"
                      >
                        <Pencil size={14} />
                      </Link>
                      <button
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                        title="Analytics"
                      >
                        <BarChart2 size={14} />
                      </button>
                      <Link
                        href="/host/calendar"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                        title="View Schedule"
                      >
                        <Eye size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Card 2 - UPCOMING */}
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-5 relative overflow-hidden transition-all hover:border-white/20">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="pt-2 hidden sm:block">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-white/30 accent-[#ED5828] bg-transparent cursor-pointer"
                    />
                  </div>

                  <div className="relative w-full md:w-[155px] h-[105px] rounded-xl overflow-hidden bg-cover bg-center shrink-0"
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
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-white font-bold text-lg font-poppins">
                        Afrobeats Beach Festival
                      </h2>
                    </div>

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
                      <p className="text-lg font-bold text-emerald-400 font-poppins">$28,900</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href="/host/events/new"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                        title="Edit"
                      >
                        <Pencil size={14} />
                      </Link>
                      <button
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                        title="Analytics"
                      >
                        <BarChart2 size={14} />
                      </button>
                      <Link
                        href="/host/calendar"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                        title="View Schedule"
                      >
                        <Eye size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Card 3 - COMPLETED */}
              <div className="bg-[#121212] border border-white/10 rounded-2xl p-5 relative overflow-hidden transition-all hover:border-white/20 opacity-80">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="pt-2 hidden sm:block">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-white/30 accent-[#ED5828] bg-transparent cursor-pointer"
                    />
                  </div>

                  <div className="relative w-full md:w-[155px] h-[105px] rounded-xl overflow-hidden bg-cover bg-center shrink-0"
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
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-white font-bold text-lg font-poppins">
                        Lagos Tech & Music Summit
                      </h2>
                    </div>

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
                      <p className="text-lg font-bold text-white/80 font-poppins">$54,350</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                        title="Analytics"
                      >
                        <BarChart2 size={14} />
                      </button>
                      <Link
                        href="/host/calendar"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                        title="View Schedule"
                      >
                        <Eye size={14} />
                      </Link>
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
