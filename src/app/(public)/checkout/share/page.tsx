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
  Search,
  Copy,
  CheckCircle2,
  Clock,
  ShieldCheck,
  UserCheck,
  User,
} from "lucide-react";

export default function ShareTicketPage() {
  const [shareMethod, setShareMethod] = useState<"link" | "email" | "user">("email");
  const [emails, setEmails] = useState<string[]>([""]);
  const [senderName, setSenderName] = useState("John Doe");
  const [senderEmail, setSenderEmail] = useState("john.doe@example.com");
  const [personalMessage, setPersonalMessage] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [searchUserQuery, setSearchUserQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<{ username: string; name: string; avatar: string } | null>({
    username: "@JohnDoe",
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
  });
  const [copiedLink, setCopiedLink] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const recentUsers = [
    {
      id: 1,
      username: "@JohnDoe",
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      username: "@SarahConnor",
      name: "Sarah Connor",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    },
  ];

  const handleAddEmail = () => {
    setEmails([...emails, ""]);
  };

  const handleEmailChange = (index: number, val: string) => {
    const updated = [...emails];
    updated[index] = val;
    setEmails(updated);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://getontrck.com/tickets/share/trk-847291-vip");
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSend = () => {
    if (!confirmed) return;
    setIsSuccess(true);
  };

  return (
    <main className="min-h-screen bg-black text-white font-[var(--font-inter)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[760px] space-y-8">
        {/* Top Header */}
        <div className="flex items-center gap-4">
          <Link
            href="/checkout/confirmation"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Share Ticket
          </h1>
        </div>

        {/* ── TOP EVENT SUMMARY CARD (Screenshots 1 & 2) ─────────────────── */}
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

        {/* ── CHOOSE HOW TO SHARE (Screenshots 1, 2, 3) ─────────────────── */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white tracking-tight">
            Choose How to Share
          </h3>

          {/* Option 1: Share Link */}
          <div
            onClick={() => setShareMethod("link")}
            className={`rounded-[20px] p-5 cursor-pointer transition-all ${
              shareMethod === "link"
                ? "bg-[#141414] border-2 border-[#2b9fff] shadow-[0_0_20px_rgba(43,159,255,0.2)]"
                : "bg-[#121212] border border-white/10 hover:border-white/20"
            }`}
          >
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
          <div
            onClick={() => setShareMethod("email")}
            className={`rounded-[20px] p-5 cursor-pointer transition-all ${
              shareMethod === "email"
                ? "bg-[#141414] border-2 border-[#ED5A2E] shadow-[0_0_20px_rgba(237,90,46,0.25)]"
                : "bg-[#121212] border border-white/10 hover:border-white/20"
            }`}
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

            <div className="mt-4 space-y-1.5 pl-14 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-white/50" />
                <span>Instant Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-white/50" />
                <span>Email confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-white/50" />
                <span>Professional format</span>
              </div>
            </div>
          </div>

          {/* Option 3: Send to TRCK User */}
          <div
            onClick={() => setShareMethod("user")}
            className={`rounded-[20px] p-5 cursor-pointer transition-all ${
              shareMethod === "user"
                ? "bg-[#141414] border-2 border-[#ED5A2E] shadow-[0_0_20px_rgba(237,90,46,0.25)]"
                : "bg-[#121212] border border-white/10 hover:border-white/20"
            }`}
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

            <div className="mt-4 space-y-1.5 pl-14 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-white/50" />
                <span>Instant transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-white/50" />
                <span>Verified recipient</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-white/50" />
                <span>In-app notification</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── CONDITIONAL FORM 1: SEND VIA EMAIL (Screenshots 1 & 2) ─────────── */}
        {shareMethod === "email" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Recipient Information */}
            <div className="rounded-[20px] bg-[#121212] border border-white/10 p-5 sm:p-6 space-y-4">
              <h3 className="text-sm font-bold text-white tracking-tight">
                Recipient Information
              </h3>
              <div className="space-y-3">
                <label className="text-xs text-white/70 block">Send to</label>
                {emails.map((email, idx) => (
                  <input
                    key={idx}
                    type="email"
                    value={email}
                    onChange={(e) => handleEmailChange(idx, e.target.value)}
                    placeholder="Input Email"
                    className="w-full rounded-xl bg-[#222222] border border-white/10 px-4 py-3 text-xs sm:text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ED5A2E] transition-colors"
                  />
                ))}
                <button
                  type="button"
                  onClick={handleAddEmail}
                  className="text-xs text-white/70 hover:text-white transition-colors flex items-center gap-1 font-medium"
                >
                  <span>+ Add another recipient</span>
                </button>
              </div>
            </div>

            {/* Your Information */}
            <div className="rounded-[20px] bg-[#121212] border border-white/10 p-5 sm:p-6 space-y-4">
              <h3 className="text-sm font-bold text-white tracking-tight">
                Your Information
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-white/70 block mb-1.5">Your name</label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Input Name"
                    className="w-full rounded-xl bg-[#222222] border border-white/10 px-4 py-3 text-xs sm:text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ED5A2E] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/70 block mb-1.5">Your email</label>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="Input Email"
                    className="w-full rounded-xl bg-[#222222] border border-white/10 px-4 py-3 text-xs sm:text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ED5A2E] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Personal Message */}
            <div className="rounded-[20px] bg-[#121212] border border-white/10 p-5 sm:p-6 space-y-4">
              <h3 className="text-sm font-bold text-white tracking-tight">
                Personal Message (Optional)
              </h3>
              <div className="relative">
                <textarea
                  rows={4}
                  maxLength={500}
                  value={personalMessage}
                  onChange={(e) => setPersonalMessage(e.target.value)}
                  placeholder="Add a message for the recipient"
                  className="w-full rounded-xl bg-[#222222] border border-white/10 p-4 text-xs sm:text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ED5A2E] transition-colors resize-none"
                />
                <span className="absolute bottom-3 right-3 text-[11px] text-white/40">
                  {personalMessage.length}/500
                </span>
              </div>
            </div>

            {/* Checkbox confirmation */}
            <label className="flex items-center gap-3 cursor-pointer text-xs text-white/75 select-none">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="h-4 w-4 rounded accent-[#ED5A2E] cursor-pointer"
              />
              <span>I confirm I want to transfer this ticket</span>
            </label>

            {/* Submit button */}
            <button
              type="button"
              disabled={!confirmed}
              onClick={handleSend}
              className={`w-full rounded-xl py-3.5 text-sm font-bold transition-all ${
                confirmed
                  ? "bg-[#ED5A2E] text-white hover:bg-[#d4501f] shadow-lg shadow-[#ED5A2E]/25 active:scale-98"
                  : "bg-[#ED5A2E]/40 text-white/40 cursor-not-allowed"
              }`}
            >
              {isSuccess ? "Ticket Sent Successfully!" : "Send Ticket"}
            </button>
          </div>
        )}

        {/* ── CONDITIONAL FORM 2: SEND TO TRCK USER (Screenshot 3) ─────────── */}
        {shareMethod === "user" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Find Recipient */}
            <div className="rounded-[20px] bg-[#121212] border border-white/10 p-5 sm:p-6 space-y-5">
              <h3 className="text-sm font-bold text-white tracking-tight">
                Find Recipient
              </h3>

              {/* Search input with inner Search button */}
              <div className="relative flex items-center">
                <Search className="absolute left-4 h-4 w-4 text-white/40" />
                <input
                  type="text"
                  value={searchUserQuery}
                  onChange={(e) => setSearchUserQuery(e.target.value)}
                  placeholder="Search by username"
                  className="w-full rounded-xl bg-[#222222] border border-white/10 pl-11 pr-24 py-3 text-xs sm:text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ED5A2E] transition-colors"
                />
                <button
                  type="button"
                  className="absolute right-1.5 rounded-lg bg-[#ED5A2E] text-white px-4 py-2 text-xs font-bold hover:bg-[#d4501f] transition-colors"
                >
                  Search
                </button>
              </div>

              {/* Recents list */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold text-white/70">Recents</h4>
                {recentUsers.map((u) => {
                  const isUserActive = selectedUser?.username === u.username;
                  return (
                    <div
                      key={u.id}
                      onClick={() => setSelectedUser(u)}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                        isUserActive
                          ? "bg-[#252525] border border-[#ED5A2E]/60 shadow-md"
                          : "bg-[#1E1E1E] border border-white/5 hover:bg-[#252525]"
                      }`}
                    >
                      <img
                        src={u.avatar}
                        alt={u.name}
                        className="h-10 w-10 rounded-full object-cover shrink-0"
                      />
                      <div>
                        <p className="text-xs font-bold text-white">{u.username}</p>
                        <p className="text-[11px] text-white/50">{u.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Personal Message */}
            <div className="rounded-[20px] bg-[#121212] border border-white/10 p-5 sm:p-6 space-y-4">
              <h3 className="text-sm font-bold text-white tracking-tight">
                Personal Message (Optional)
              </h3>
              <div className="relative">
                <textarea
                  rows={4}
                  maxLength={500}
                  value={personalMessage}
                  onChange={(e) => setPersonalMessage(e.target.value)}
                  placeholder="Add a message for the recipient"
                  className="w-full rounded-xl bg-[#222222] border border-white/10 p-4 text-xs sm:text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ED5A2E] transition-colors resize-none"
                />
                <span className="absolute bottom-3 right-3 text-[11px] text-white/40">
                  {personalMessage.length}/500
                </span>
              </div>
            </div>

            {/* Checkbox confirmation */}
            <label className="flex items-start gap-3 cursor-pointer text-xs text-white/75 select-none leading-relaxed">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded accent-[#ED5A2E] cursor-pointer shrink-0"
              />
              <span>
                I confirm I want to transfer this ticket to{" "}
                <span className="text-[#ED5A2E] font-semibold">{selectedUser?.username || "@johndoe"}</span>. This
                action cannot be undone once accepted.
              </span>
            </label>

            {/* Submit button */}
            <button
              type="button"
              disabled={!confirmed}
              onClick={handleSend}
              className={`w-full rounded-xl py-3.5 text-sm font-bold transition-all ${
                confirmed
                  ? "bg-[#ED5A2E] text-white hover:bg-[#d4501f] shadow-lg shadow-[#ED5A2E]/25 active:scale-98"
                  : "bg-[#ED5A2E]/40 text-white/40 cursor-not-allowed"
              }`}
            >
              {isSuccess ? "Ticket Transferred Successfully!" : "Transfer Ticket"}
            </button>
          </div>
        )}

        {/* ── CONDITIONAL FORM 3: SHARE LINK ─────────────────────────────────── */}
        {shareMethod === "link" && (
          <div className="space-y-6 animate-in fade-in duration-300">
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
                  onClick={handleCopyLink}
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
        )}
      </div>
    </main>
  );
}
