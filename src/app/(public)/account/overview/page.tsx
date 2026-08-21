"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  MoreHorizontal,
  LayoutGrid,
  History as HistoryIcon,
  Heart,
  CreditCard,
  Lock,
  Tag,
  Settings,
  HelpCircle,
  LogOut,
  ArrowUpDown,
  Ticket,
  Calendar,
  MapPin,
} from "lucide-react";
import { Logo } from "@/components/shared";
import { AccountOverviewData } from "@/types";

export default function AccountOverviewPage() {
  const [data, setData] = useState<AccountOverviewData | null>(null);
  const [selectedTickets, setSelectedTickets] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/account/overview");
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (e) {
        console.error("Failed to fetch account overview", e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const toggleSelectAll = () => {
    if (!data) return;
    if (selectedTickets.length === data.tickets.length) {
      setSelectedTickets([]);
    } else {
      setSelectedTickets(data.tickets.map((t) => t.id));
    }
  };

  const toggleSelectTicket = (id: string) => {
    setSelectedTickets((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-[var(--font-inter)] flex flex-col justify-between">
      {/* ── Top Header ── */}
      <header className="border-b border-gray-100 px-6 py-3.5 lg:px-12 flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="inline-flex items-center">
            <Logo width={100} height={36} className="h-8 w-auto" />
          </Link>
        </div>

        {/* Center: Search */}
        <div className="relative flex-1 max-w-[400px] hidden sm:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by categories"
            className="w-full rounded-full border border-gray-200 bg-gray-50/80 pl-10 pr-4 py-2 text-[0.85rem] text-gray-800 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
          />
        </div>

        {/* Right: Category Links, Currency & Profile */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-[0.88rem] font-medium text-gray-600">
            <Link href="/explore" className="hover:text-gray-900">
              Sports
            </Link>
            <Link href="/explore" className="hover:text-gray-900">
              Music
            </Link>
            <button className="flex items-center gap-1 hover:text-gray-900">
              More <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-4 text-[0.88rem]">
            <button className="flex items-center gap-1.5 font-medium text-gray-700 hover:text-gray-900">
              <span>🇳🇬</span> NGN <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <Link href="/host/signup" className="font-medium text-gray-700 hover:text-gray-900 hidden sm:block">
              Sell
            </Link>
            <Link href="#" className="font-medium text-gray-700 hover:text-gray-900 hidden sm:block">
              Support
            </Link>
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ED5A2E] text-[0.95rem] font-bold text-white shadow-sm hover:bg-[#d4501f] transition-all"
              >
                D
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl border border-gray-200 bg-white py-2 shadow-lg z-50">
                  <Link href="/launcher" className="block px-4 py-2 text-[0.85rem] text-gray-700 hover:bg-gray-50 hover:text-[#ED5A2E]">Launcher Hub</Link>
                  <Link href="/home" className="block px-4 py-2 text-[0.85rem] text-gray-700 hover:bg-gray-50 hover:text-[#ED5A2E]">Homepage</Link>
                  <Link href="/account/overview" className="block px-4 py-2 text-[0.85rem] text-gray-700 hover:bg-gray-50 hover:text-[#ED5A2E]">Account Overview</Link>
                  <Link href="/account/bookings" className="block px-4 py-2 text-[0.85rem] text-gray-700 hover:bg-gray-50 hover:text-[#ED5A2E]">Booking History</Link>
                  <Link href="/tickets" className="block px-4 py-2 text-[0.85rem] text-gray-700 hover:bg-gray-50 hover:text-[#ED5A2E]">My Tickets</Link>
                  <Link href="/notifications" className="block px-4 py-2 text-[0.85rem] text-gray-700 hover:bg-gray-50 hover:text-[#ED5A2E]">Notifications</Link>
                  <Link href="/account/edit-profile" className="block px-4 py-2 text-[0.85rem] text-gray-700 hover:bg-gray-50 hover:text-[#ED5A2E]">Edit Profile</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ── Main Layout (Sidebar + Content) ── */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 px-4 py-8 sm:px-6 lg:px-12 gap-8">
        {/* ── Left Sidebar Navigation ── */}
        <aside className="w-[260px] flex-shrink-0 hidden lg:block border-r border-gray-100 pr-6">
          {/* User Profile Card */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border border-gray-200">
                  <Image
                    src={data?.user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"}
                    alt={data?.user.name || "User Avatar"}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="text-[0.9rem] font-bold text-gray-900 leading-tight">
                    {data?.user.name || "Dominion Ogbaji"}
                  </h3>
                  <p className="text-[0.72rem] text-gray-400">
                    {data?.user.email || "domlogbaji@gmail.com"}
                  </p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
            <button className="w-full rounded-full bg-[#ED5A2E] py-2 text-[0.82rem] font-semibold text-white transition-all hover:bg-[#d4501f]">
              Edit Profile
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {[
              { label: "Overview", icon: LayoutGrid, active: true, href: "/account/overview" },
              { label: "Booking History", icon: HistoryIcon, active: false, href: "/account/bookings" },
              { label: "Favourites", icon: Heart, active: false, href: "/account/favourites" },
              { label: "Payments & shipping", icon: CreditCard, active: false, href: "/account/payments" },
              { label: "Login & security", icon: Lock, active: false, href: "/account/security" },
              { label: "Offers and rewards", icon: Tag, active: false, href: "/account/rewards" },
              { label: "Settings", icon: Settings, active: false, href: "/account/settings" },
              { label: "Help & support", icon: HelpCircle, active: false, href: "/account/support" },
              { label: "Logout", icon: LogOut, active: false, href: "/login" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-[0.88rem] font-medium transition-all ${
                  item.active
                    ? "bg-[#ED5A2E] text-white font-semibold shadow-sm"
                    : "text-gray-700 hover:bg-gray-100/80"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* ── Main Content Column ── */}
        <main className="flex-1 max-w-[1000px]">
          {/* Header Title */}
          <div className="mb-6">
            <h1 className="text-[1.8rem] font-bold text-gray-900 tracking-tight">
              Overview
            </h1>
            <p className="text-[0.88rem] text-gray-400">
              Access premium features on yor account
            </p>
          </div>

          {/* Promo Code Card */}
          <div className="mb-6 flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50/40 p-4 sm:p-5">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
                  <Ticket className="h-5 w-5" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
                  <Ticket className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-[0.95rem] font-bold text-gray-900">
                  Add promo code
                </h3>
                <p className="text-[0.82rem] text-gray-500">
                  Apply a promo code checkout to get a discount on tickets!
                </p>
              </div>
            </div>
          </div>

          {/* Metrics & Active Event Grid */}
          <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Total Spent Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-gray-200/80 p-5 bg-white">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[0.88rem] font-semibold text-gray-700">
                    Total Spent
                  </span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-[2.2rem] font-extrabold text-gray-900 tracking-tight">
                  ${data?.metrics.totalSpent.toLocaleString() || "4,000"}
                </div>
                <div className="mt-2 inline-block rounded-full bg-pink-100 px-3 py-1 text-[0.75rem] font-semibold text-pink-600">
                  You have {data?.metrics.paymentsDue || 2} payments due
                </div>
              </div>
              <div className="mt-4 text-right">
                <Link
                  href="/account/payments"
                  className="text-[0.82rem] font-medium text-gray-400 hover:text-gray-600"
                >
                  History
                </Link>
              </div>
            </div>

            {/* Featured Active Ticket Hero */}
            <div className="relative overflow-hidden rounded-2xl bg-[#ED5A2E] p-6 text-white shadow-md">
              <h3 className="text-[1.35rem] font-bold tracking-tight mb-3">
                {data?.featuredEvent.title || "200s Hip Hop Night"}
              </h3>
              <div className="flex items-center gap-4 text-[0.82rem] text-white/90 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {data?.featuredEvent.date || "FRI-31ST : 4:00PM"}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {data?.featuredEvent.location || "Mansory"}
                </span>
              </div>
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-300" />
                <div className="h-8 w-8 rounded-full border-2 border-white bg-indigo-500" />
                <div className="h-8 w-8 rounded-full border-2 border-white bg-purple-600" />
              </div>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mb-4 flex items-center gap-3">
            <button className="rounded-full border border-gray-200 px-4 py-1.5 text-[0.82rem] font-medium text-gray-700 hover:bg-gray-50">
              Favourites
            </button>
            <button className="rounded-full border border-gray-200 px-4 py-1.5 text-[0.82rem] font-medium text-gray-700 hover:bg-gray-50">
              Active Tickets
            </button>
          </div>

          {/* Booking History Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white">
            <table className="w-full text-left text-[0.88rem]">
              <thead className="border-b border-gray-100 bg-pink-50/30 text-[0.82rem] font-semibold text-gray-600">
                <tr>
                  <th className="p-4 w-10">
                    <input
                      type="checkbox"
                      checked={
                        !!(data?.tickets &&
                        selectedTickets.length === data.tickets.length)
                      }
                      onChange={toggleSelectAll}
                      className="h-4 w-4 rounded border-gray-300 accent-[#ED5A2E]"
                    />
                  </th>
                  <th className="p-4">
                    <div className="flex items-center gap-1.5">
                      Tickets Id <ArrowUpDown className="h-3.5 w-3.5 text-gray-400" />
                    </div>
                  </th>
                  <th className="p-4">
                    <div className="flex items-center gap-1.5">
                      Event <ArrowUpDown className="h-3.5 w-3.5 text-gray-400" />
                    </div>
                  </th>
                  <th className="p-4">
                    <div className="flex items-center gap-1.5">
                      Date <ArrowUpDown className="h-3.5 w-3.5 text-gray-400" />
                    </div>
                  </th>
                  <th className="p-4">
                    <div className="flex items-center gap-1.5">
                      Amount <ArrowUpDown className="h-3.5 w-3.5 text-gray-400" />
                    </div>
                  </th>
                  <th className="p-4">
                    <div className="flex items-center gap-1.5">
                      Status <ArrowUpDown className="h-3.5 w-3.5 text-gray-400" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-gray-400">
                      Loading tickets...
                    </td>
                  </tr>
                ) : (
                  data?.tickets.map((ticket) => (
                    <tr
                      key={ticket.id}
                      className="hover:bg-gray-50/60 transition-colors"
                    >
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={selectedTickets.includes(ticket.id)}
                          onChange={() => toggleSelectTicket(ticket.id)}
                          className="h-4 w-4 rounded border-gray-300 accent-[#ED5A2E]"
                        />
                      </td>
                      <td className="p-4 font-semibold text-gray-900">
                        {ticket.id}
                      </td>
                      <td className="p-4 text-gray-700">{ticket.event}</td>
                      <td className="p-4 text-gray-500">{ticket.date}</td>
                      <td className="p-4 font-semibold text-gray-900">
                        {ticket.amount}
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/80 px-3 py-0.5 text-[0.78rem] font-semibold text-emerald-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          {ticket.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
