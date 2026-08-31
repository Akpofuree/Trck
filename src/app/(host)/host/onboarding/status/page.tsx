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
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Building2,
  X,
} from "lucide-react";
import { HostButton } from "@/components/host";

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

type DecisionStatus = "success" | "pending" | "failed";

const DECISION_STATES: Record<
  DecisionStatus,
  { label: string; subtitle: string; borderColor: string; bgColor: string; textColor: string; subtitleColor: string; icon: React.ReactNode }
> = {
  success: {
    label: "Review Success",
    subtitle: "Your document has successfully been reviewed",
    borderColor: "#22c55e",
    bgColor: "rgba(34,197,94,0.08)",
    textColor: "#22c55e",
    subtitleColor: "#22c55e",
    icon: <CheckCircle2 size={22} className="text-green-500" />,
  },
  pending: {
    label: "Pending Review",
    subtitle: "Your KYC is still pending review by our team",
    borderColor: "#f59e0b",
    bgColor: "rgba(245,158,11,0.08)",
    textColor: "#f59e0b",
    subtitleColor: "#f59e0b",
    icon: <Clock size={22} className="text-amber-400" />,
  },
  failed: {
    label: "Review Failed",
    subtitle: "Your document review was unsuccessful. Please re-submit.",
    borderColor: "#ef4444",
    bgColor: "rgba(239,68,68,0.08)",
    textColor: "#ef4444",
    subtitleColor: "#ef4444",
    icon: <AlertCircle size={22} className="text-red-500" />,
  },
};

export default function KYCStatusPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [decisionStatus, setDecisionStatus] = useState<DecisionStatus>("success");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const decision = DECISION_STATES[decisionStatus];

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-montserrat overflow-x-hidden">

      {/* ── WHITE TOP HEADER (Desktop) ─────────────────── */}
      <header className="hidden md:flex h-[70px] bg-white items-center justify-between px-6 border-b border-gray-100 shrink-0 z-20">
        <span className="text-black font-semibold text-[1rem] font-poppins">KYC Status</span>
        <div className="flex items-center gap-3">
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
          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 border-2 border-dashed border-white/40 rounded-lg flex items-center justify-center text-white active:scale-95 transition-all"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <X size={18} />
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <rect width="18" height="2" rx="1" fill="white"/>
                <rect y="6" width="18" height="2" rx="1" fill="white"/>
                <rect y="12" width="18" height="2" rx="1" fill="white"/>
              </svg>
            )}
          </button>
          {/* Right icons */}
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
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>
        </header>
        {/* Blue brand line */}
        <div className="h-[3px] bg-[#0099FF] w-full" />

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="bg-[#121212] border-b border-white/15 px-4 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <p className="text-[0.7rem] font-bold uppercase tracking-wider text-white/40">Host Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/host/dashboard" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 text-xs text-white hover:bg-[#ED5828]">
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
          {/* Collapse toggle */}
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

          {/* Search */}
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

          {/* Nav sections */}
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
        <main className="flex-1 bg-[#0D0D0D] overflow-y-auto">
          <div className="max-w-2xl mx-auto px-6 py-10">

            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-[2rem] font-bold text-white mb-1">Review Success</h1>
              <p className="text-[0.9rem] text-white/60">Your KYC is Pending review by our team</p>
            </div>

            {/* Checklist Card */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 mb-5">
              <p className="text-[0.95rem] font-semibold text-white mb-4">Checklist</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-white/80 text-[0.9rem]">
                  <ShieldCheck size={18} className="text-white/50 shrink-0" />
                  <span>ID Verified</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 text-[0.9rem]">
                  <CheckCircle2 size={18} className="text-white/50 shrink-0" />
                  <span>Address Verified</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 text-[0.9rem]">
                  <Building2 size={18} className="text-white/50 shrink-0" />
                  <span>Bank Linked</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-5 py-2 border border-white/25 rounded-lg text-white text-sm font-medium hover:bg-white/5 transition-colors">
                  Update Documents
                </button>
                <button className="px-5 py-2 border border-white/25 rounded-lg text-white text-sm font-medium hover:bg-white/5 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>

            {/* Estimated time */}
            <div className="flex items-center gap-2 text-[0.85rem] text-white/60 mb-6">
              <AlertCircle size={15} className="shrink-0" />
              <span>
                Estimated time: <span className="font-medium text-white/80">1/2 business days</span>
              </span>
            </div>

            {/* Decision Section */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-[1rem] font-bold text-white">Decision</h2>
                {/* Interactive state switcher (demo toggle) */}
                <div className="flex items-center gap-1.5 bg-[#1A1A1A] border border-white/10 rounded-lg p-1">
                  {(["success", "pending", "failed"] as DecisionStatus[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => setDecisionStatus(s)}
                      className={`px-2.5 py-1 rounded-md text-[0.68rem] font-semibold transition-all capitalize ${
                        decisionStatus === s
                          ? s === "success"
                            ? "bg-green-500/20 text-green-400"
                            : s === "pending"
                            ? "bg-amber-500/20 text-amber-400"
                            : "bg-red-500/20 text-red-400"
                          : "text-white/40 hover:text-white/60"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              {/* Orange underline */}
              <div className="h-[2px] bg-[#ED5828] rounded-full w-16 mb-4" />

              {/* Decision card — dynamic */}
              <div
                className="rounded-xl p-5 flex items-start gap-3 border transition-all"
                style={{
                  borderColor: decision.borderColor,
                  backgroundColor: decision.bgColor,
                }}
              >
                <div className="shrink-0 mt-0.5">{decision.icon}</div>
                <div>
                  <p className="font-bold text-[1rem]" style={{ color: decision.textColor }}>
                    {decision.label}
                  </p>
                  <p className="text-[0.85rem] mt-0.5" style={{ color: decision.subtitleColor }}>
                    {decision.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Action after decision */}
            {decisionStatus === "failed" && (
              <div className="mt-6">
                <HostButton
                  href="/host/onboarding/kyc"
                  fullWidth={true}
                  className="max-w-[400px]"
                >
                  Re-submit Documents
                </HostButton>
              </div>
            )}
            {decisionStatus === "success" && (
              <div className="mt-6">
                <HostButton
                  href="/host/dashboard"
                  fullWidth={true}
                  className="max-w-[400px]"
                >
                  Continue to Dashboard
                </HostButton>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
