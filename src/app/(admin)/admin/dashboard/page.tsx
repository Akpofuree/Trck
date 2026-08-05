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
  Menu,
  User,
  ShieldCheck,
  Building2,
  CheckCircle2,
  MessageSquare,
  Edit2,
  MoreVertical,
  ArrowUpRight
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
    { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard", active: true },
    { label: "Calendar", icon: CalendarIcon, href: "/admin/calendar" },
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

const customers = [
  { name: "Chris Friedkly", company: "Supermarket Villanova", avatar: "👨‍💼", selected: false },
  { name: "Maggie Johnson", company: "Oasis Organic Inc.", avatar: "👩‍💼", selected: true },
  { name: "Gael Harry", company: "New York Finest Fruits", avatar: "🧔", selected: false },
  { name: "Jenna Sullivan", company: "Walmart", avatar: "👩‍🌾", selected: false },
];

const upcomingEvents = [
  { date: "01 Jan", title: "NYE Party", tickets: "45 available tickets", status: "On Session" },
  { date: "01 Jan", title: "NYE Party", tickets: "45 available tickets", status: "On Session" },
  { date: "01 Jan", title: "NYE Party", tickets: "45 available tickets", status: "On Session" },
];

export default function AdminDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-black overflow-hidden font-sans text-white">
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

        {/* Nav Groups with Montserrat 20.59px font-semibold styling */}
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

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <header className="hidden md:flex items-center justify-between px-6 py-3.5 bg-white text-black shrink-0 border-b border-gray-200 h-[57px]">
          <h1 className="text-black font-bold text-base">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors relative">
              <Bell size={15} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="h-4 w-[1px] bg-gray-300" />
            <div className="flex items-center gap-2.5 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-[#ED5A2E] flex items-center justify-center text-white text-xs font-bold">
                DO
              </div>
              <div className="font-poppins">
                <p className="text-[0.826rem] font-normal leading-none text-black">Dominion Ogbaji</p>
                <p className="text-[0.641rem] font-normal leading-none text-black mt-0.5">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Header Bar */}
        <header className="md:hidden flex items-center justify-between px-4 py-3 bg-black text-white border-b border-white/10">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 border border-white/30 rounded-lg">
            <Menu size={20} />
          </button>
          <h1 className="text-white font-bold text-base">Dashboard</h1>
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

        {/* Main Content Dashboard Grid */}
        <main className="flex-1 overflow-y-auto bg-black p-4 md:p-6 space-y-6">

          {/* Row 1: Top 3 Metric Cards matching Screenshot 1 */}
          <div className="flex flex-wrap lg:flex-nowrap gap-4">

            {/* Card 1: Revenues */}
            <div className="flex-1 min-w-[280px] bg-[#111115] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-inter font-semibold text-[1.125rem] text-white mb-3">
                  Revenues
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-inter font-semibold text-[2.838rem] leading-none text-white">
                    15%
                  </span>
                  <span className="text-[#00E676] font-bold text-2xl">↗</span>
                </div>
                <p className="text-[0.8275rem] text-[#CACACA] font-normal">
                  Increase compared to last week
                </p>
              </div>
              <div className="pt-8 flex items-center gap-1.5 text-[0.8275rem] font-inter text-white">
                <span className="cursor-pointer hover:underline">Revenues report</span>
                <span>→</span>
              </div>
            </div>

            {/* Card 2: Ticket Sold */}
            <div className="flex-1 min-w-[280px] bg-[#111115] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-inter font-semibold text-[1.125rem] text-white mb-3">
                  Ticket Sold
                </h3>
                <div className="text-[2.838rem] font-inter font-semibold leading-none text-white mb-2">
                  3k
                </div>
                <p className="text-[0.8275rem] text-[#CACACA] font-normal">
                  You closed 3K out of 5K Tickets created
                </p>
              </div>
              <div className="pt-8 flex items-center gap-1.5 text-[0.8275rem] font-inter text-white">
                <span className="cursor-pointer hover:underline">All deals</span>
                <span>→</span>
              </div>
            </div>

            {/* Card 3: Quarter Goal (Narrow Width: 245.97px) */}
            <div className="w-full lg:w-[245.97px] shrink-0 bg-[#111115] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-inter font-semibold text-[1.125rem] text-white mb-4">
                  Quarter goal
                </h3>

                {/* Semi-circular gauge positioned directly beneath heading */}
                <div className="relative w-full flex flex-col items-center justify-center my-2">
                  <svg className="w-40 h-20" viewBox="0 0 100 50">
                    {/* Background Arc (White/Light) */}
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#FFFDF5"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    {/* Progress Arc (Bright Green) */}
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#00E676"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="125.6"
                      strokeDashoffset="20.1"
                    />
                  </svg>
                  {/* Centered text */}
                  <span className="font-inter font-bold text-2xl text-white mt-1">
                    84%
                  </span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-1.5 text-[0.8275rem] font-inter text-white">
                <span className="cursor-pointer hover:underline">All goals</span>
                <span>→</span>
              </div>
            </div>

          </div>

          {/* Row 2: Customers Panel (526px) + Revenue Chart Panel (510.86px) */}
          <div className="flex flex-wrap lg:flex-nowrap gap-4">
            
            {/* Customers Panel (526px) */}
            <div className="w-full lg:w-[526px] bg-[#111115] border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-end">
                <button className="text-xs text-white/80 font-medium flex items-center gap-1">
                  Sort by <span className="font-semibold text-white">Newest</span> <ChevronDown size={14} />
                </button>
              </div>

              <div className="space-y-3">
                {customers.map((c, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between transition-all ${
                      c.selected
                        ? "bg-[#FFFDF5] text-black rounded-2xl p-3.5 shadow-md"
                        : "p-2.5 rounded-xl hover:bg-white/5 text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-base shrink-0">
                        {c.avatar}
                      </div>
                      <div>
                        <p className={`text-xs font-semibold ${c.selected ? "text-black" : "text-white"}`}>
                          {c.name}
                        </p>
                        <p className={`text-[10px] ${c.selected ? "text-gray-600" : "text-white/40"}`}>
                          {c.company}
                        </p>
                      </div>
                    </div>

                    {/* Action Menu icons inside selected row matching screenshot */}
                    {c.selected ? (
                      <div className="flex items-center gap-3 text-black/70 pr-1">
                        <button className="hover:text-black transition-colors" title="Chat">
                          <MessageSquare size={16} />
                        </button>
                        <button className="hover:text-black transition-colors" title="Star">
                          <Star size={16} />
                        </button>
                        <button className="hover:text-black transition-colors" title="Edit">
                          <Edit2 size={16} />
                        </button>
                        <div className="h-4 w-[1px] bg-black/20" />
                        <button className="hover:text-black transition-colors" title="More">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    ) : (
                      <ArrowUpRight size={14} className="text-white/20" />
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button className="text-xs text-[#ED5A2E] hover:underline font-semibold flex items-center gap-1">
                  All customers →
                </button>
              </div>
            </div>

            {/* Revenue Chart Panel (510.86px) */}
            <div className="w-full lg:w-[510.86px] bg-[#111115] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-end mb-4">
                <button className="text-xs text-white/80 font-medium flex items-center gap-1">
                  Yearly <ChevronDown size={14} />
                </button>
              </div>

              {/* Dotted Area Chart matching Screenshot 1 */}
              <div className="h-48 w-full relative my-2">
                <svg className="w-full h-full" viewBox="0 0 500 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="figmaChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ED5A2E" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#ED5A2E" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="40" y1="20" x2="490" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                  <line x1="40" y1="55" x2="490" y2="55" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                  <line x1="40" y1="90" x2="490" y2="90" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                  <line x1="40" y1="125" x2="490" y2="125" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

                  {/* Area Fill */}
                  <polygon
                    points="40,120 100,110 165,70 230,55 295,120 360,105 425,60 490,30 490,140 40,140"
                    fill="url(#figmaChartGrad)"
                  />

                  {/* Red/Orange Dotted Chart Line */}
                  <polyline
                    points="40,120 100,110 165,70 230,55 295,120 360,105 425,60 490,30"
                    fill="none"
                    stroke="#ED5A2E"
                    strokeWidth="2"
                    strokeDasharray="2 2"
                  />
                </svg>

                {/* Y-Axis Labels */}
                <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-white/30 font-mono">
                  <span>100k</span>
                  <span>50k</span>
                  <span>20k</span>
                  <span>10k</span>
                  <span>0</span>
                </div>

                {/* X-Axis Labels */}
                <div className="absolute left-10 right-0 bottom-0 flex justify-between text-[10px] text-white/40 font-mono">
                  <span>2016</span>
                  <span>2017</span>
                  <span>2018</span>
                  <span>2019</span>
                  <span>2020</span>
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                </div>
              </div>

              {/* Sub-cards row matching Screenshot 1 */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                  <p className="text-[11px] font-semibold text-white">Top month</p>
                  <p className="text-base font-extrabold text-[#ED5A2E] mt-1">November</p>
                  <p className="text-xs font-semibold text-[#ED5A2E]">2024</p>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                  <p className="text-[11px] font-semibold text-white">Top year</p>
                  <p className="text-base font-extrabold text-[#ED5A2E] mt-1">2025</p>
                  <p className="text-[10px] text-white/50">26K sold so far</p>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                  <p className="text-[11px] font-semibold text-white">Top buyer</p>
                  <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-xs my-1">
                    👩‍💼
                  </div>
                  <p className="text-[10px] text-white/60 truncate">Oasis Organic Inc.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Row 3: Upcoming Events Section matching Screenshot 2 */}
          <div className="space-y-4 pt-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">Upcoming Events</h2>

            <div className="bg-[#111115] border border-white/10 rounded-2xl overflow-hidden divide-y divide-white/10">
              {upcomingEvents.map((evt, idx) => (
                <div key={idx} className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-12 w-full max-w-4xl">
                    <span className="font-bold text-base text-[#ED5A2E] w-20 shrink-0">
                      {evt.date}
                    </span>
                    <span className="font-semibold text-base text-white w-44 shrink-0">
                      {evt.title}
                    </span>
                    <span className="text-sm text-white/80 flex-1">
                      {evt.tickets}
                    </span>
                    <span className="text-sm text-white/90 font-medium">
                      {evt.status}
                    </span>
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
