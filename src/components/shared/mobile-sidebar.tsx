"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  X,
  Search,
  Compass,
  Calendar,
  Ticket,
  Bell,
  User,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Logo } from "./logo";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden animate-in fade-in duration-200">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside className="fixed inset-y-0 right-0 w-full max-w-[320px] bg-[#0F0F0F] text-white shadow-2xl border-l border-white/10 flex flex-col z-50 overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black/60 sticky top-0 z-10 backdrop-blur-md">
          <Link href="/" onClick={onClose} className="inline-flex items-center">
            <Logo width={90} height={32} className="h-6 w-auto" />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search inside Sidebar */}
        <div className="p-4 border-b border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
            <input
              type="text"
              placeholder="Search by categories..."
              className="w-full rounded-xl border border-white/20 bg-white/5 pl-9 pr-3 py-2 text-xs text-white placeholder:text-white/40 focus:border-[#ED5A2E] focus:outline-none focus:ring-1 focus:ring-[#ED5A2E]"
            />
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 px-4 py-3 space-y-6">
          {/* Main Discover */}
          <div>
            <p className="px-2 text-[0.7rem] font-bold uppercase tracking-wider text-white/40 mb-2">
              Discover Experiences
            </p>
            <div className="space-y-1">
              {[
                { label: "Sports & Games", href: "/explore" },
                { label: "Music & Concerts", href: "/explore" },
                { label: "Festivals & Raves", href: "/explore" },
                { label: "Arts & Theatre", href: "/explore" },
                { label: "Nightlife & Lounges", href: "/explore" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-3.5 w-3.5 text-white/30" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Portals */}
          <div>
            <p className="px-2 text-[0.7rem] font-bold uppercase tracking-wider text-white/40 mb-2">
              Navigation & Portals
            </p>
            <div className="space-y-1">
              <Link
                href="/explore"
                onClick={onClose}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-white/85 hover:bg-white/5 hover:text-white transition-colors"
              >
                <Compass className="h-4 w-4 text-[#ED5A2E]" />
                <span>Explore Events</span>
              </Link>
              <Link
                href="/onboarding/step-1"
                onClick={onClose}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-white/85 hover:bg-white/5 hover:text-white transition-colors"
              >
                <Sparkles className="h-4 w-4 text-[#ED5A2E]" />
                <span>Onboarding Steps</span>
              </Link>
              <Link
                href="/tickets"
                onClick={onClose}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-white/85 hover:bg-white/5 hover:text-white transition-colors"
              >
                <Ticket className="h-4 w-4 text-[#ED5A2E]" />
                <span>My Tickets</span>
              </Link>
              <Link
                href="/notifications"
                onClick={onClose}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-white/85 hover:bg-white/5 hover:text-white transition-colors"
              >
                <Bell className="h-4 w-4 text-[#ED5A2E]" />
                <span>Notifications</span>
              </Link>
              <Link
                href="/account/overview"
                onClick={onClose}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-white/85 hover:bg-white/5 hover:text-white transition-colors"
              >
                <User className="h-4 w-4 text-[#ED5A2E]" />
                <span>My Account</span>
              </Link>
              <Link
                href="/host/signup"
                onClick={onClose}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-white/85 hover:bg-white/5 hover:text-white transition-colors"
              >
                <ShieldCheck className="h-4 w-4 text-[#ED5A2E]" />
                <span>Become a Host</span>
              </Link>
            </div>
          </div>

          {/* Spotify Promo inside Sidebar */}
          <div className="rounded-xl border border-white/10 bg-[#141414] p-3 text-center">
            <p className="text-[0.75rem] font-bold text-white mb-1">
              Connect to Spotify
            </p>
            <p className="text-[0.68rem] text-white/60 mb-2.5">
              Sync your music taste & get live event alerts
            </p>
            <button
              type="button"
              className="w-full rounded-full bg-[#1DB954] py-1.5 text-xs font-bold text-black transition-transform active:scale-95 flex items-center justify-center gap-1.5"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.376 0 0 5.377 0 12s5.376 12 12 12 12-5.377 12-12S18.624 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C13.56 8.4 7.08 8.16 3.36 9.3c-.6.18-1.26-.18-1.44-.72-.18-.6.18-1.26.72-1.44C6.96 5.82 14.16 6.06 18.72 8.76c.54.3.72 1.02.42 1.56-.3.48-1.02.72-1.56.42z" />
              </svg>
              Connect
            </button>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-white/10 bg-black/40 space-y-2">
          <Link
            href="/login"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-xl border border-white/20 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/10"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-xl bg-[#ED5A2E] py-2.5 text-xs font-bold text-white shadow-md transition-colors hover:bg-[#d4501f]"
          >
            Create Account
          </Link>
        </div>
      </aside>
    </div>
  );
}
