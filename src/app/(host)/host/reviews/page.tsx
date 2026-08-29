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
  MessageSquare,
  ThumbsUp,
} from "lucide-react";

const NAV_ITEMS = [
  {
    section: "Home",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, href: "/host/dashboard" },
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
      { label: "Reviews", icon: Star, href: "/host/reviews", active: true },
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

const REVIEWS = [
  {
    author: "Sarah Jenkins",
    role: "VIP Attendee",
    event: "5IVE LIVE AT 02 ARENA",
    rating: 5,
    date: "Nov 16, 2024",
    comment: "The sound engineering and crowd management was top tier. Check-in with the digital pass was seamless!",
  },
  {
    author: "Michael Adebayo",
    role: "General Admission",
    event: "5IVE LIVE AT 02 ARENA",
    rating: 5,
    date: "Nov 16, 2024",
    comment: "Unbelievable energy! The host kept all communications active right up until stage time.",
  },
  {
    author: "David Chen",
    role: "Regular",
    event: "Davido Rehearsals",
    rating: 4,
    date: "Nov 2, 2024",
    comment: "Great experience overall, stage access was well guided.",
  },
];

export default function HostReviewsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-montserrat">
      {/* ── WHITE TOP HEADER (Desktop) ─────────────────── */}
      <header className="hidden md:flex h-[70px] bg-white items-center justify-between px-6 border-b border-gray-100 shrink-0 z-20">
        <span className="text-black font-semibold text-[1rem] font-poppins">Reviews &amp; Ratings</span>

        <div className="flex items-center gap-4">
          <div
            className="flex items-center justify-between px-4 bg-[#ED5A2E] text-white cursor-pointer transition-opacity hover:opacity-95"
            style={{ width: 220.85, height: 43.97, borderRadius: 7.49 }}
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

        <main className="flex-1 bg-[#0D0D0D] overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-white font-montserrat">Host Reviews</h1>
              <p className="text-sm text-white/60 mt-0.5">Attendee feedback and ratings across all your hosted events</p>
            </div>

            {/* Rating summary banner */}
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-black text-[#ED5828] font-montserrat">4.9</div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-white/60 mt-1">Based on 148 verified event reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-center">
                  <p className="text-lg font-bold text-white font-montserrat">98%</p>
                  <p className="text-[10px] text-white/50">Recommendation Rate</p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-center">
                  <p className="text-lg font-bold text-white font-montserrat">4.8h</p>
                  <p className="text-[10px] text-white/50">Avg Response Time</p>
                </div>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
              {REVIEWS.map((r, i) => (
                <div key={i} className="bg-[#121212] border border-white/10 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#ED5828]/20 text-[#ED5828] border border-[#ED5828]/40 flex items-center justify-center font-bold text-sm">
                        {r.author[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{r.author}</p>
                        <p className="text-xs text-white/40">{r.role} • {r.event}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: r.rating }).map((_, starIndex) => (
                        <Star key={starIndex} size={13} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-white/80 leading-relaxed">{r.comment}</p>

                  <div className="flex items-center justify-between pt-1 text-[11px] text-white/40 border-t border-white/5">
                    <span>{r.date}</span>
                    <button className="flex items-center gap-1 hover:text-white transition-colors">
                      <ThumbsUp size={12} />
                      <span>Helpful</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
