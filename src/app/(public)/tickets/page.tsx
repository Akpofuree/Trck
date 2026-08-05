"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Plus,
  Send,
  Download,
  AlertCircle,
} from "lucide-react";
import { Logo } from "@/components/shared/logo";

interface Ticket {
  id: string;
  title: string;
  date: string;
  status: string;
}

export default function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [activeTab, setActiveTab] = useState("Tickets");
  const [filterQuery, setFilterQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchTickets() {
      try {
        const res = await fetch("/api/tickets");
        if (res.ok) {
          const data = await res.json();
          setTickets(data.tickets);
        }
      } catch (e) {
        console.error("Failed to fetch tickets", e);
      }
    }
    fetchTickets();
  }, []);

  const filteredTickets = tickets.filter((ticket) =>
    ticket.title.toLowerCase().includes(filterQuery.toLowerCase())
  );

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
      <main className="mx-auto w-full max-w-[1300px] flex-1 px-6 py-10 lg:px-12">
        <h1 className="text-[2.2rem] font-bold text-gray-900 mb-6 tracking-tight">
          Tickets
        </h1>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-gray-100 pb-3 mb-8 text-[0.92rem] font-semibold text-gray-400">
          {["Tickets", "Selling", "Transfers", "Purchases"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 relative transition-all ${
                activeTab === tab
                  ? "text-gray-900 border-b-2 border-gray-900 font-bold"
                  : "hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tickets Container Box */}
        <div className="rounded-3xl border border-gray-200/80 overflow-hidden shadow-sm">
          {/* Orange Header Action Bar */}
          <div className="bg-[#ED5A2E] p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 justify-between">
            {/* Left Action Controls */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* All Events Dropdown */}
              <button className="flex items-center gap-2 rounded-xl border border-white/35 bg-white/10 px-4 py-2.5 text-[0.88rem] font-semibold text-white hover:bg-white/20 transition-all">
                All Events <ChevronDown className="h-4 w-4 text-white" />
              </button>

              {/* Filter Search Pill */}
              <div className="relative flex-1 sm:w-[220px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/80" />
                <input
                  type="text"
                  placeholder="Filter"
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  className="w-full rounded-xl border border-white/35 bg-white/10 pl-10 pr-4 py-2.5 text-[0.88rem] text-white outline-none placeholder:text-white/70 focus:bg-white/20"
                />
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-5 py-2.5 text-[0.88rem] font-semibold text-white hover:bg-white/20 transition-all">
                <Send className="h-4 w-4 rotate-[-30deg]" /> Transfer
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-5 py-2.5 text-[0.88rem] font-semibold text-white hover:bg-white/20 transition-all">
                <Plus className="h-4 w-4" /> Add
              </button>
            </div>
          </div>

          {/* Tickets List Area */}
          <div className="bg-[#FAF9F9] divide-y divide-gray-100 p-2 sm:p-4">
            {filteredTickets.length > 0 ? (
              filteredTickets.map((ticket, index) => (
                <div
                  key={ticket.id + "-" + index}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 gap-4 hover:bg-white/60 rounded-2xl transition-all"
                >
                  {/* Title & Date */}
                  <div>
                    <h3 className="text-[1.05rem] font-bold text-gray-900 mb-0.5">
                      {ticket.title}
                    </h3>
                    <p className="text-[0.8rem] font-semibold text-gray-400">
                      {ticket.date}
                    </p>
                  </div>

                  {/* Status Indicator & Action Button */}
                  <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto">
                    {/* Status Dot */}
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-amber-500" />
                      <span className="text-[0.85rem] font-semibold text-gray-500">
                        {ticket.status}
                      </span>
                    </div>

                    {/* Add to Wallet Button */}
                    <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[0.82rem] font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:border-gray-300">
                      <Download className="h-4 w-4 text-gray-700" /> Add to Wallet
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <AlertCircle className="h-10 w-10 text-gray-300 mb-3" />
                <p className="text-[0.92rem] font-medium">No tickets found</p>
              </div>
            )}
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
