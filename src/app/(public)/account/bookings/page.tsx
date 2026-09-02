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
} from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { AccountMobileNav } from "@/components/account";

interface BookingsData {
  totalBookings: number;
  bookings: Array<{
    id: string;
    ticketId: string;
    event: string;
    date: string;
    amount: string;
    status: string;
  }>;
  recentActivity: Array<{
    id: string;
    message: string;
    timeAgo: string;
  }>;
}

export default function BookingHistoryPage() {
  const [data, setData] = useState<BookingsData | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/account/bookings");
        if (res.ok) setData(await res.json());
      } catch (e) {
        console.error("Failed to fetch bookings", e);
      }
    }
    fetchData();
  }, []);

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (!data) return;
    if (selected.length === data.bookings.length) {
      setSelected([]);
    } else {
      setSelected(data.bookings.map((b) => b.id));
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-[var(--font-inter)] flex flex-col justify-between overflow-x-hidden pb-16 lg:pb-0">
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
            <Link href="/explore" className="hover:text-gray-900">Sports</Link>
            <Link href="/explore" className="hover:text-gray-900">Music</Link>
            <button className="flex items-center gap-1 hover:text-gray-900">
              More <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="flex items-center gap-4 text-[0.88rem]">
            <button className="flex items-center gap-1.5 font-medium text-gray-700 hover:text-gray-900">
              <span>🇳🇬</span> NGN <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <Link href="/host/signup" className="font-medium text-gray-700 hover:text-gray-900 hidden sm:block">Sell</Link>
            <Link href="#" className="font-medium text-gray-700 hover:text-gray-900 hidden sm:block">Support</Link>
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
        {/* ── Left Sidebar ── */}
        <aside className="w-[260px] flex-shrink-0 hidden lg:block border-r border-gray-100 pr-6">
          <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border border-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                    alt="User Avatar"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="text-[0.75rem] text-gray-400">User</p>
                  <h3 className="text-[0.9rem] font-bold text-gray-900 leading-tight">Dominion Ogbaji</h3>
                  <p className="text-[0.72rem] text-gray-400">domlogbaji@gmail.com</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
            <Link href="/account/edit-profile" className="block w-full rounded-full bg-[#ED5A2E] py-2 text-center text-[0.82rem] font-semibold text-white transition-all hover:bg-[#d4501f]">
              Edit Profile
            </Link>
          </div>

          <nav className="space-y-1">
            {[
              { label: "Overview", icon: LayoutGrid, active: false, href: "/account/overview" },
              { label: "Booking History", icon: HistoryIcon, active: true, href: "/account/bookings" },
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

        {/* ── Main Content ── */}
        <main className="flex-1 min-w-0">
          <h1 className="text-[2rem] font-bold text-gray-900 mb-8">Booking History</h1>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="rounded-2xl border border-gray-200 px-6 py-4 min-w-[160px]">
              <p className="text-[0.8rem] font-medium text-gray-500 mb-1">Total Bookings</p>
              <p className="text-[2rem] font-bold text-gray-900">{data?.totalBookings ?? "—"}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 px-6 py-4 min-w-[160px]">
              <p className="text-[0.8rem] font-medium text-gray-500 mb-1">Date</p>
              <div className="flex items-center gap-2">
                <span className="text-[1.1rem] font-bold text-gray-900">All time</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Bookings Table */}
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-[0.85rem]">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/80">
                  <th className="px-4 py-3.5 w-10">
                    <input
                      type="checkbox"
                      checked={data ? selected.length === data.bookings.length : false}
                      onChange={toggleSelectAll}
                      className="h-4 w-4 rounded border-gray-300 accent-[#ED5A2E]"
                    />
                  </th>
                  {["Tickets Id", "Event", "Date", "Amount", "Status"].map((col) => (
                    <th key={col} className="px-4 py-3.5 font-semibold text-gray-600">
                      <button className="inline-flex items-center gap-1.5 hover:text-gray-900">
                        {col}
                        <ArrowUpDown className="h-3.5 w-3.5 text-gray-400" />
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3.5">
                      <input
                        type="checkbox"
                        checked={selected.includes(booking.id)}
                        onChange={() => toggleSelect(booking.id)}
                        className="h-4 w-4 rounded border-gray-300 accent-[#ED5A2E]"
                      />
                    </td>
                    <td className="px-4 py-3.5 font-medium text-gray-900">{booking.ticketId}</td>
                    <td className="px-4 py-3.5 text-gray-600">{booking.event}</td>
                    <td className="px-4 py-3.5 text-gray-600">{booking.date}</td>
                    <td className="px-4 py-3.5 font-medium text-gray-900">{booking.amount}</td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1 text-[0.78rem] font-medium text-gray-700">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                )) ?? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-gray-400">Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Yesterday Activity */}
          <div className="mt-10">
            <h3 className="text-[1.1rem] font-bold text-gray-900 mb-4">Yesterday</h3>
            <div className="space-y-3">
              {data?.recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 transition-all hover:border-gray-200"
                >
                  <p className="text-[0.88rem] text-gray-700">{activity.message}</p>
                  <span className="text-[0.78rem] text-gray-400 flex-shrink-0 ml-4">{activity.timeAgo}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* ── Mobile Navigation ── */}
      <AccountMobileNav />

      {/* ── Full Dark Footer ── */}
      <footer className="hidden bg-black px-6 py-12 text-white lg:px-16 border-t border-white/10">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 pb-12 border-b border-white/10">
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">Contact</h4>
              <p className="text-[0.88rem] font-semibold text-[#ED5A2E] mb-4">info@getontrck.com</p>
              <div className="flex items-center gap-4 text-white/80">
                <svg className="h-4 w-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" /></svg>
                <svg className="h-4 w-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                <span className="text-[0.88rem] font-bold cursor-pointer hover:text-white">TikTok</span>
                <svg className="h-4 w-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </div>
            </div>
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">Company</h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li><Link href="#" className="hover:text-white">About Us</Link></li>
                <li><Link href="#" className="hover:text-white">How it works</Link></li>
                <li><Link href="#" className="hover:text-white">Features</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">Legal</h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li><Link href="#" className="hover:text-white">Privacy policy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms of service</Link></li>
                <li><Link href="#" className="hover:text-white">Acceptable use policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">Support</h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li><Link href="#" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 text-[0.76rem] text-white/40 leading-relaxed space-y-2">
            <p>TRCK is a leisure technology platform based in Nigeria. All experiences are provided by independent third-party creators. TRCK does not host or supervise these Experiences and disclaims liability for third-party actions.</p>
            <p>Copyright ©2025 Trck Entertainment & Technology Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
