"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Bell,
  CheckCircle,
  Ticket,
  AlertCircle,
  CreditCard,
  Heart,
  LayoutDashboard,
  History,
  Lock,
  Tag,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { AccountMobileNav } from "@/components/account";

const menuItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/account/overview" },
  { label: "Booking History", icon: History, href: "/account/bookings" },
  { label: "Favourites", icon: Heart, href: "/account/favourites" },
  { label: "Payments & shipping", icon: CreditCard, href: "/account/payments" },
  { label: "Login & security", icon: Lock, href: "/account/security" },
  { label: "Offers and rewards", icon: Tag, href: "/account/rewards" },
  { label: "Settings", icon: Settings, href: "/account/settings" },
  { label: "Help & support", icon: HelpCircle, href: "/account/support" },
  { label: "Logout", icon: LogOut, href: "/login" },
];

interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "ticket" | "payment" | "alert" | "system";
  unread?: boolean;
}

const todayNotifications: NotificationItem[] = [
  {
    id: "n1",
    title: "Ticket Confirmed",
    description: "Your ticket for 200s Hip Hop Night (Mansory) has been confirmed and is ready in your wallet.",
    time: "10 mins ago",
    type: "ticket",
    unread: true,
  },
  {
    id: "n2",
    title: "Payment Successful",
    description: "Payment of NGN 45,000 for VIP pass was successfully processed.",
    time: "2 hours ago",
    type: "payment",
    unread: true,
  },
  {
    id: "n3",
    title: "Event Reminder",
    description: "The 5ive At O2 Arena festival begins in 3 days. Check your schedule and gate passes.",
    time: "5 hours ago",
    type: "alert",
  },
];

const yesterdayNotifications: NotificationItem[] = [
  {
    id: "n4",
    title: "Special Offer Available",
    description: "Use code TRCK2026 to get 15% off any music festival this weekend.",
    time: "Yesterday, 4:30 PM",
    type: "system",
  },
  {
    id: "n5",
    title: "Ticket Transferred",
    description: "Dominion Ogbaji transferred 1x General Admission ticket to your account.",
    time: "Yesterday, 11:15 AM",
    type: "ticket",
  },
];

function getNotificationIcon(type: NotificationItem["type"]) {
  switch (type) {
    case "ticket":
      return <Ticket className="h-5 w-5 text-[#ED5A2E]" />;
    case "payment":
      return <CheckCircle className="h-5 w-5 text-emerald-500" />;
    case "alert":
      return <AlertCircle className="h-5 w-5 text-amber-500" />;
    case "system":
    default:
      return <Bell className="h-5 w-5 text-blue-500" />;
  }
}

export default function NotificationsPage() {
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-[var(--font-inter)] flex flex-col justify-between overflow-x-hidden pb-16 lg:pb-0">
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
                  <Link href="/home" className="block px-4 py-2 text-[0.85rem] text-gray-700 hover:bg-gray-50 hover:text-[#ED5A2E]">Homepage</Link>
                  <Link href="/account/overview" className="block px-4 py-2 text-[0.85rem] text-gray-700 hover:bg-gray-50 hover:text-[#ED5A2E]">Account Overview</Link>
                  <Link href="/account/bookings" className="block px-4 py-2 text-[0.85rem] text-gray-700 hover:bg-gray-50 hover:text-[#ED5A2E]">Booking History</Link>
                  <Link href="/tickets" className="block px-4 py-2 text-[0.85rem] text-gray-700 hover:bg-gray-50 hover:text-[#ED5A2E]">My Tickets</Link>
                  <Link href="/notifications" className="block px-4 py-2 text-[0.85rem] text-[#ED5A2E] font-semibold bg-gray-50">Notifications</Link>
                  <Link href="/account/edit-profile" className="block px-4 py-2 text-[0.85rem] text-gray-700 hover:bg-gray-50 hover:text-[#ED5A2E]">Edit Profile</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ── Main Layout ── */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 px-4 py-8 sm:px-6 lg:px-12 gap-8">
        {/* Left Sidebar */}
        <aside className="w-[260px] flex-shrink-0 hidden lg:block border-r border-gray-100 pr-6">
          <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ED5A2E] text-white font-bold text-base">
                D
              </div>
              <div>
                <h3 className="text-[0.9rem] font-bold text-gray-900 leading-tight">Dominion Ogbaji</h3>
                <p className="text-[0.72rem] text-gray-400">domlogbaji@gmail.com</p>
              </div>
            </div>
            <Link
              href="/account/edit-profile"
              className="block text-center w-full rounded-full bg-[#ED5A2E] py-2 text-[0.82rem] font-semibold text-white transition-all hover:bg-[#d4501f]"
            >
              Edit Profile
            </Link>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-[0.88rem] font-medium text-gray-700 hover:bg-gray-100/80 transition-all"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <section className="flex-1 max-w-[900px] min-w-0">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-[2rem] font-bold text-gray-900 tracking-tight">
                Notifications
              </h1>
              <p className="text-[0.88rem] text-gray-400">
                Stay updated on your ticket orders, event alerts, and messages
              </p>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filter === "all" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("unread")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filter === "unread" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
                }`}
              >
                Unread
              </button>
            </div>
          </div>

          {/* Today */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Today
            </h2>
            <div className="space-y-3">
              {(filter === "all" ? todayNotifications : todayNotifications.filter((n) => n.unread)).map((item) => (
                <div
                  key={item.id}
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${
                    item.unread
                      ? "border-[#ED5A2E]/30 bg-[#ED5A2E]/5 shadow-sm"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-white border border-gray-100 shadow-xs shrink-0">
                    {getNotificationIcon(item.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-[0.95rem] font-bold text-gray-900">{item.title}</h3>
                      <span className="text-[0.75rem] text-gray-400 shrink-0">{item.time}</span>
                    </div>
                    <p className="text-[0.84rem] text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                  {item.unread && (
                    <span className="h-2 w-2 rounded-full bg-[#ED5A2E] shrink-0 mt-2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Yesterday */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Yesterday
            </h2>
            <div className="space-y-3">
              {(filter === "all" ? yesterdayNotifications : yesterdayNotifications.filter((n) => n.unread)).map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-all"
                >
                  <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 shrink-0">
                    {getNotificationIcon(item.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-[0.95rem] font-bold text-gray-900">{item.title}</h3>
                      <span className="text-[0.75rem] text-gray-400 shrink-0">{item.time}</span>
                    </div>
                    <p className="text-[0.84rem] text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Navigation */}
      <AccountMobileNav />

      {/* Footer */}
      <footer className="hidden bg-black px-6 py-12 text-white lg:px-16 border-t border-white/10 mt-12">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 pb-12 border-b border-white/10">
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">Contact</h4>
              <p className="text-[0.88rem] font-semibold text-[#ED5A2E] mb-4">info@getontrck.com</p>
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
          <div className="pt-8 text-[0.76rem] text-white/40 leading-relaxed">
            <p>Copyright ©2025 Trck Entertainment & Technology Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
