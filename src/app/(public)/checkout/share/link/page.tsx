"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  CalendarDays,
  MapPin,
  Link2,
  Mail,
  Send,
  Check,
  Copy,
  CheckCircle2,
} from "lucide-react";

export default function ShareLinkPage() {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("https://getontrck.com/tickets/share/trk-847291-vip");
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <main className="min-h-screen bg-black text-white font-[var(--font-inter)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[760px] space-y-8">
        {/* Top Header */}
        <div className="flex items-center gap-4">
          <Link
            href="/checkout/share"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Share Ticket
          </h1>
        </div>

        {/* ── TOP EVENT SUMMARY CARD ─────────────────── */}
        <div className="rounded-[20px] bg-[#121212] border border-white/10 p-5 sm:p-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-xl overflow-hidden shrink-0">
              <Image
                src="/event-hero.jpg"
                alt="Event cover"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                5IVE LIVE AT 02 ARENA 2025
              </h2>
              <div className="mt-2 flex items-center gap-2 text-xs text-white/70">
                <CalendarDays className="h-3.5 w-3.5 text-[#ED5A2E]" />
                <span>March 15, 2025</span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-xs text-white/70">
                <MapPin className="h-3.5 w-3.5 text-[#ED5A2E]" />
                <span>02 Arena, London, United Kingdom</span>
              </div>
            </div>
          </div>

          <div className="mt-5 border-t border-[#ED5A2E]/40 pt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-[0.72rem] text-white/50 uppercase tracking-wider">Ticket Type</p>
              <p className="text-sm font-bold text-white mt-0.5">VIP Package</p>
            </div>
            <div>
              <p className="text-[0.72rem] text-white/50 uppercase tracking-wider">Current Holder</p>
              <p className="text-sm font-bold text-white mt-0.5">John Doe</p>
            </div>
          </div>
        </div>

        {/* ── CHOOSE HOW TO SHARE ─────────────────── */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white tracking-tight">
            Choose How to Share
          </h3>

          {/* Option 1: Share Link (Selected) */}
          <div className="rounded-[20px] p-5 bg-[#141414] border-2 border-[#2b9fff] shadow-[0_0_20px_rgba(43,159,255,0.2)]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF8A65]/20 text-[#FF8A65] shrink-0">
                  <Link2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Share Link</h4>
                  <p className="text-xs text-white/60 mt-0.5">
                    Generate a secure link to share anywhere
                  </p>
                </div>
              </div>
              <span className="rounded-lg bg-[#3D1E16] border border-[#FF8A65]/30 text-[#FF8A65] text-[11px] font-semibold px-2.5 py-0.5">
                Most Popular
              </span>
            </div>

            <div className="mt-4 space-y-1.5 pl-14 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-white/50" />
                <span>Works with anyone</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-white/50" />
                <span>Set expiry time</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-white/50" />
                <span>Can revoke anytime</span>
              </div>
            </div>
          </div>

          {/* Option 2: Send via Email */}
          <Link
            href="/checkout/share/email"
            className="block rounded-[20px] p-5 bg-[#121212] border border-white/10 hover:border-white/20 transition-all"
          >
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF8A65]/20 text-[#FF8A65] shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Send via Email</h4>
                <p className="text-xs text-white/60 mt-0.5">
                  Directly email the ticket to someone
                </p>
              </div>
            </div>
          </Link>

          {/* Option 3: Send to TRCK User */}
          <Link
            href="/checkout/share/transfer"
            className="block rounded-[20px] p-5 bg-[#121212] border border-white/10 hover:border-white/20 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF8A65]/20 text-[#FF8A65] shrink-0">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Send to TRCK User</h4>
                  <p className="text-xs text-white/60 mt-0.5">
                    Transfer to someone with a TRCK account
                  </p>
                </div>
              </div>
              <span className="rounded-lg bg-[#132A1C] border border-[#22C55E]/30 text-[#22C55E] text-[11px] font-semibold px-2.5 py-0.5">
                Most Secure
              </span>
            </div>
          </Link>
        </div>

        {/* ── SHARE LINK GENERATOR ─────────────────── */}
        <div className="rounded-[20px] bg-[#121212] border border-white/10 p-5 sm:p-6 space-y-4">
          <h3 className="text-sm font-bold text-white tracking-tight">
            Generated Secure Link
          </h3>
          <div className="flex items-center gap-2 rounded-xl bg-[#222222] border border-white/10 p-2 pl-4">
            <span className="text-xs text-white/80 font-mono truncate flex-1">
              https://getontrck.com/tickets/share/trk-847291-vip
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg bg-[#ED5A2E] text-white px-4 py-2 text-xs font-bold hover:bg-[#d4501f] transition-colors shrink-0"
            >
              {copiedLink ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedLink ? "Copied!" : "Copy Link"}</span>
            </button>
          </div>

          <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-white/60">
            <div className="p-3 rounded-xl bg-[#1A1A1A] border border-white/5">
              <p className="font-semibold text-white">Expires In</p>
              <p className="mt-1">24 Hours</p>
            </div>
            <div className="p-3 rounded-xl bg-[#1A1A1A] border border-white/5">
              <p className="font-semibold text-white">Security</p>
              <p className="mt-1">One-time claim</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
