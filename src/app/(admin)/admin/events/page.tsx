"use client";

import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { useState } from "react";
import {
  Bell,
  ChevronDown,
  ChevronLeft,
  FileText,
  LayoutDashboard,
  Megaphone,
  Music,
  Search,
  Settings,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Ticket,
  TrendingUp,
  Users,
  Wallet,
  Star,
} from "lucide-react";

type NavItem = {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  active?: boolean;
};

const navItems: Record<string, NavItem[]> = {
  Home: [
    { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
    { label: "Calendar", icon: ChevronDown, href: "/admin/calendar" },
    { label: "Promotions", icon: Megaphone, href: "/admin/promotions" },
    { label: "Payouts", icon: Wallet, href: "/admin/payouts" },
  ],
  Management: [
    { label: "KYC Verification", icon: ShieldCheck, href: "/admin/kyc" },
    {
      label: "Bank Verification",
      icon: Building2,
      href: "/admin/bank-verification",
    },
    { label: "KYC Status", icon: CheckCircle2, href: "/admin/kyc-status" },
    { label: "Users", icon: Users, href: "/admin/users" },
    { label: "Tickets", icon: Ticket, href: "/admin/tickets" },
    { label: "Events", icon: Music, href: "/admin/events", active: true },
    { label: "Earnings", icon: TrendingUp, href: "/admin/earnings" },
    { label: "Reviews", icon: Star, href: "/admin/reviews" },
  ],
  Other: [
    { label: "Reports", icon: FileText, href: "/admin/report" },
    { label: "Settings", icon: Settings, href: "/admin/settings" },
  ],
};

function Footer() {
  return (
    <footer className="mt-[3rem] border-t border-[#7a3cff] pt-[2rem]">
      <div className="grid gap-[2rem] md:grid-cols-2 xl:grid-cols-4">
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">
            Contact
          </h4>
          <p className="mt-[0.65rem] text-[0.875rem] font-semibold text-[#ff7a00]">
            info@getontrck.com
          </p>
        </div>
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">
            Company
          </h4>
          <ul className="mt-[0.65rem] space-y-[0.55rem] text-[0.875rem] text-white/80">
            <li>About Us</li>
            <li>How it works</li>
            <li>Features</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">
            Legal
          </h4>
          <ul className="mt-[0.65rem] space-y-[0.55rem] text-[0.875rem] text-white/80">
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Acceptable use policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">
            Support
          </h4>
          <ul className="mt-[0.65rem] space-y-[0.55rem] text-[0.875rem] text-white/80">
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <p className="mt-[2rem] border-t border-white/15 pt-[1rem] text-[0.72rem] leading-snug text-white/45">
        TRCK is a leisure technology platform based in Nigeria. All experiences
        are provided by independent third-party creators. TRCK does not host or
        supervise these experiences and disclaims liability for third-party
        actions.
        <br />
        Copyright © 2025 Trck Entertainment &amp; Technology Ltd. All rights
        reserved.
      </p>
    </footer>
  );
}

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-black text-white">
      <aside
        className={`${sidebarOpen ? "w-[260px]" : "w-16"} hidden shrink-0 flex-col border-r border-white/10 bg-black transition-all duration-300 md:flex`}
      >
        <div className="flex h-[57px] items-center justify-between border-b border-gray-200 bg-white px-4 text-black">
          {sidebarOpen ? (
            <Link href="/" aria-label="Trck home">
              <Logo width={120} height={44} className="h-8 w-auto" />
            </Link>
          ) : null}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="ml-auto flex h-7 w-7 items-center justify-center rounded-lg border border-gray-300 text-gray-600"
            title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            <ChevronLeft
              size={14}
              className={!sidebarOpen ? "rotate-180" : ""}
            />
          </button>
        </div>

        {sidebarOpen && (
          <div className="border-b border-white/10 px-3 py-3">
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <Search size={13} className="text-white/40" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent text-xs outline-none placeholder:text-white/30"
              />
            </div>
          </div>
        )}

        <nav className="flex-1 space-y-1 overflow-y-auto py-3">
          {Object.entries(navItems).map(([group, items]) => (
            <div key={group} className="px-3">
              {sidebarOpen && (
                <p className="mb-2 mt-3 px-2 text-xs font-semibold uppercase tracking-wider text-white/35">
                  {group}
                </p>
              )}
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`mb-1 flex items-center gap-3 rounded-[11.58px] px-3 py-2.5 font-montserrat text-[1.1rem] font-semibold ${
                    item.active
                      ? "bg-[#ED5E2E] text-white"
                      : "text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon size={20} />
                  {sidebarOpen && <span>{item.label}</span>}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="hidden h-[57px] items-center justify-between border-b border-gray-200 bg-white px-6 py-3.5 text-black md:flex">
          <h1 className="text-base font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="relative flex h-8 w-8 items-center justify-center rounded-full border border-gray-200">
              <Bell size={15} />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>
            <div className="h-4 w-px bg-gray-300" />
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ED5A2E] text-xs font-bold text-white">
                DO
              </div>
              <div>
                <p className="text-[0.826rem] leading-none">Dominion Ogbaji</p>
                <p className="mt-0.5 text-[0.641rem] leading-none">
                  Super Admin
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-black p-4 md:p-6">
          <div className="mx-auto max-w-[80rem]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[2rem] font-bold text-white">
                Event Management
              </h2>
              <div className="flex gap-3">
                <button className="rounded-[0.35rem] border border-[#ff7a00] px-4 py-2 text-[0.85rem] text-[#ff7a00]">
                  + Create Event Series
                </button>
                <button className="rounded-[0.35rem] bg-[#ff7a00] px-4 py-2 text-[0.85rem] font-semibold text-white">
                  + Create Event
                </button>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-4">
              {[
                "Total Events",
                "Upcoming Events",
                "Live Now",
                "Past Events",
              ].map((label, i) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-[#111115] p-6"
                >
                  <p className="text-sm text-white/65">{label}</p>
                  <p className="mt-3 text-3xl font-bold text-[#ff7a00]">
                    {[24, 12, 1, 8][i]}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-4">
              {[
                "Total Revenue",
                "This Month Revenue",
                "Avg Attendance",
                "Total Attendees",
              ].map((label, i) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-[#111115] p-6"
                >
                  <p className="text-sm text-white/65">{label}</p>
                  <p className="mt-3 text-3xl font-bold text-[#ff7a00]">
                    {["₦22.7M", "₦2780K", "70%", "6,035"][i]}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#111115] p-6">
              <div className="flex items-center gap-3">
                <button className="rounded bg-[#ff7a00] px-3 py-1 text-sm text-white">
                  List
                </button>
                <button className="rounded bg-white/5 px-3 py-1 text-sm text-white/60">
                  Calendar
                </button>
                <button className="rounded bg-white/5 px-3 py-1 text-sm text-white/60">
                  Timeline
                </button>
                <div className="ml-auto flex gap-3">
                  <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/45">
                    Search by event name, date or location
                  </div>
                  <button className="rounded bg-[#ff7a00] px-4 py-2 text-sm text-white">
                    Filters
                  </button>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {[1, 2].map((n) => (
                  <div key={n} className="rounded-2xl bg-[#171717] p-4">
                    <div className="flex items-start gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded">
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,#6c4d3d_0%,#d58a4d_50%,#1b1b1b_100%)]" />
                        <span className="absolute left-1 top-1 rounded bg-[#26e65d] px-1.5 py-0.5 text-[0.55rem] font-semibold text-black">
                          LIVE
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-lg font-semibold text-white">
                            5IVE LIVE AT O2 ARENA
                          </h3>
                          <div className="flex gap-2 text-white/50">
                            <span>◌</span>
                            <span>↻</span>
                            <span>▣</span>
                            <span>⋯</span>
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-white/55">
                          Concert · Part of Davido live at O2
                        </p>
                        <p className="mt-1 text-sm text-white/55">
                          Friday, Nov 15, 2024 · O2 Arena, London, United
                          Kingdom
                        </p>
                        <p className="mt-2 text-sm text-white/55">
                          Sold: 156/200 (78%) · Revenue: ₦450,000 · Check-ins:
                          145/156
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fixed inset-0 flex items-center justify-center bg-black/60 p-6">
              <div className="w-full max-w-[54rem] rounded-2xl bg-[#151515] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.75)]">
                <div className="mx-auto max-w-[48rem] overflow-hidden rounded-[0.35rem] bg-[#111115]">
                  <div className="h-[11rem] bg-[linear-gradient(135deg,#6c4d3d_0%,#d58a4d_30%,#3b2b25_60%,#1b1b1b_100%)]" />
                  <div className="px-6 py-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[2rem] font-black tracking-tight text-white">
                          5IVE LIVE AT{" "}
                          <span className="text-[#ff7a00]">O2 ARENA</span>
                        </h3>
                        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
                          <span className="text-[#ffd200]">★★★★★</span>
                          <span>4.8 (127 Reviews)</span>
                          <span>40,034 people are attending</span>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black text-xs font-semibold">
                            E
                          </div>
                          <div className="text-xs text-white/75">
                            Hosted by Elizabeth R Events
                          </div>
                        </div>
                      </div>
                      <button className="rounded-[0.45rem] bg-[#ff7a00] px-4 py-2 text-sm font-semibold text-white">
                        View Event →
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-10 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#26e65d] text-[1.4rem] font-bold text-black">
                    ✓
                  </div>
                  <h4 className="text-[2.25rem] font-semibold text-white">
                    Published!
                  </h4>
                  <p className="mx-auto mt-3 max-w-md text-[0.75rem] leading-snug text-white/55">
                    Congratulations! you have successfully Published your event
                    and can now manage engagement.
                  </p>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
