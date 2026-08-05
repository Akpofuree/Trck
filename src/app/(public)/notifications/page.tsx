"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Bell } from "lucide-react";
import { Logo } from "@/components/shared/logo";

interface NotificationItem {
  id: string;
  text: string;
  subtext: string;
  timeAgo: string;
}

interface NotificationsData {
  today: NotificationItem[];
  yesterday: NotificationItem[];
}

export default function NotificationsPage() {
  const [data, setData] = useState<NotificationsData | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const res = await fetch("/api/notifications");
        if (res.ok) {
          setData(await res.json());
        }
      } catch (e) {
        console.error("Failed to fetch notifications", e);
      }
    }
    fetchNotifications();
  }, []);

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

      {/* ── Main Layout ── */}
      <main className="mx-auto w-full max-w-[900px] flex-1 px-6 py-10">
        {/* Title + Green Notification Dot */}
        <div className="flex items-center gap-2 mb-8">
          <h1 className="text-[2.2rem] font-bold text-gray-900 tracking-tight">
            Notifications
          </h1>
          <span className="h-3.5 w-3.5 rounded-full bg-green-500 mt-2" />
        </div>

        {/* Notifications Sections */}
        <div className="space-y-10">
          {/* Today Section */}
          <div>
            <h2 className="text-[1.2rem] font-bold text-gray-900 mb-4">Today</h2>
            <div className="rounded-2xl border border-gray-200/80 bg-white overflow-hidden divide-y divide-gray-100 shadow-sm">
              {data?.today.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between p-5 gap-4 hover:bg-gray-50/50 transition-all cursor-pointer"
                >
                  <div className="space-y-1">
                    <p className="text-[0.95rem] font-semibold text-gray-900 leading-snug">
                      {item.text}
                    </p>
                    <p className="text-[0.82rem] font-medium text-gray-400">
                      {item.subtext}
                    </p>
                  </div>
                  <span className="text-[0.8rem] font-medium text-gray-400 flex-shrink-0 ml-4">
                    {item.timeAgo}
                  </span>
                </div>
              )) || [1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-gray-50 animate-pulse" />
              ))}
            </div>
          </div>

          {/* Yesterday Section */}
          <div>
            <h2 className="text-[1.2rem] font-bold text-gray-900 mb-4">Yesterday</h2>
            <div className="rounded-2xl border border-gray-200/80 bg-white overflow-hidden divide-y divide-gray-100 shadow-sm">
              {data?.yesterday.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between p-5 gap-4 hover:bg-gray-50/50 transition-all cursor-pointer"
                >
                  <div className="space-y-1">
                    <p className="text-[0.95rem] font-semibold text-gray-900 leading-snug">
                      {item.text}
                    </p>
                    <p className="text-[0.82rem] font-medium text-gray-400">
                      {item.subtext}
                    </p>
                  </div>
                  <span className="text-[0.8rem] font-medium text-gray-400 flex-shrink-0 ml-4">
                    {item.timeAgo}
                  </span>
                </div>
              )) || [1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-gray-50 animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ── Full Dark Footer ── */}
      <footer className="bg-black px-6 py-12 text-white lg:px-16 border-t border-white/10 mt-12">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 pb-12 border-b border-white/10">
            {/* Contact */}
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
                Contact
              </h4>
              <p className="text-[0.88rem] font-semibold text-[#ED5A2E] mb-4">
                info@getontrck.com
              </p>
              <div className="flex items-center gap-4 text-white/80">
                <svg className="h-4 w-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                </svg>
                <svg className="h-4 w-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                <span className="text-[0.88rem] font-bold cursor-pointer hover:text-white">
                  TikTok
                </span>
                <svg className="h-4 w-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Acceptable use policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
                Support
              </h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Disclaimer */}
          <div className="pt-8 text-[0.76rem] text-white/40 leading-relaxed space-y-2">
            <p>
              TRCK is a leisure technology platform based in Nigeria. All
              experiences are provided by independent third-party creators. TRCK
              does not host or supervise these Experiences and disclaims
              liability for third-party actions.
            </p>
            <p>
              Copyright ©2025 Trck Entertainment & Technology Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
