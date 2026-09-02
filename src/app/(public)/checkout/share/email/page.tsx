"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, Check, ChevronDown, Clock3, CircleDot, Link2, Mail, Send } from "lucide-react";
import { Logo } from "@/components/shared/logo";

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="border-b border-[#ED5A2E]/40 bg-[#151515] px-8 py-4">
        <div className="mx-auto flex max-w-[1440px] items-center gap-4">
          <button className="text-[1.2rem] text-white/90"><ChevronLeft className="h-5 w-5" /></button>
          <Image src="/event-feature.jpg" alt="event" width={88} height={88} className="h-[72px] w-[72px] rounded-[12px] object-cover" />
          <div className="min-w-0 flex-1">
            <h1 className="text-[1rem] font-semibold">5IVE LIVE AT 02 ARENA</h1>
            <div className="mt-2 flex flex-wrap items-center gap-6 text-[0.82rem] text-white/75">
              <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#ED5A2E]" /> March 15, 2025</span>
              <span className="inline-flex items-center gap-2"><CircleDot className="h-4 w-4 text-[#ED5A2E]" /> 02 Arena, London, United Kingdom</span>
            </div>
          </div>
          <Link href="/" className="ml-auto inline-flex items-center"><Logo width={110} height={32} className="h-6 w-auto" /></Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1120px] px-6 py-10 lg:px-8">
        <div className="rounded-[18px] bg-[#171717] p-6 lg:p-8">
          <div className="flex items-center gap-3">
            <ChevronLeft className="h-5 w-5" />
            <h2 className="text-[1.45rem] font-semibold">Share Ticket</h2>
          </div>

          <div className="mx-auto mt-8 max-w-[760px] rounded-[16px] bg-[#232323] p-5">
            <div className="flex items-center gap-4">
              <Image src="/event-feature.jpg" alt="ticket" width={92} height={92} className="h-[92px] w-[92px] rounded-[12px] object-cover" />
              <div>
                <div className="text-[1rem] font-semibold">5IVE LIVE AT 02 ARENA 2025</div>
                <div className="mt-2 flex items-center gap-2 text-[0.82rem] text-white/70"><Clock3 className="h-4 w-4 text-[#ED5A2E]" /> March 15, 2025</div>
                <div className="mt-1 flex items-center gap-2 text-[0.82rem] text-white/70"><CircleDot className="h-4 w-4 text-[#ED5A2E]" /> 02 Arena, London, United Kingdom</div>
              </div>
            </div>
            <div className="mt-5 grid gap-4 border-t border-[#ED5A2E]/40 pt-5 sm:grid-cols-2">
              <div><div className="text-[0.72rem] text-white/45">Ticket Type</div><div className="mt-1 text-[0.9rem] font-semibold">VIP Package</div></div>
              <div><div className="text-[0.72rem] text-white/45">Current Holder</div><div className="mt-1 text-[0.9rem] font-semibold">John Doe</div></div>
            </div>
          </div>

          <h3 className="mt-8 text-[1.15rem] font-semibold">Choose How to Share</h3>
          <div className="mx-auto mt-4 max-w-[760px] space-y-4">
            <div className="rounded-[16px] bg-[#171717] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff9a7c] text-[#111]"><Link2 className="h-5 w-5" /></div>
                <div>
                  <div className="text-[1rem] font-semibold">Share Link</div>
                  <p className="mt-1 text-[0.8rem] text-white/60">Generate a secure link to share anywhere</p>
                </div>
              </div>
            </div>

            <div className="rounded-[16px] border border-[#ED5A2E] bg-[#171717] p-5 shadow-[0_0_0_1px_rgba(237,90,46,0.35)]">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff9a7c] text-[#111]"><Mail className="h-5 w-5" /></div>
                  <div>
                    <div className="text-[1rem] font-semibold">Send via Email</div>
                    <p className="mt-1 text-[0.8rem] text-white/60">Directly email the ticket to someone</p>
                  </div>
                </div>
                <span className="rounded-full border border-[#ED5A2E]/70 px-3 py-1 text-[0.7rem] text-[#ED5A2E]">Active</span>
              </div>
              <div className="mt-4 grid gap-3 text-[0.78rem] text-white/60 sm:grid-cols-3">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-white/55" /> Instant Delivery</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-white/55" /> Email confirmation</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-white/55" /> Professional format</div>
              </div>
            </div>

            <div className="rounded-[16px] bg-[#171717] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff9a7c] text-[#111]"><Send className="h-5 w-5" /></div>
                <div>
                  <div className="text-[1rem] font-semibold">Send to TRCK User</div>
                  <p className="mt-1 text-[0.8rem] text-white/60">Transfer to someone with a TRCK account</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-[760px] rounded-[16px] bg-[#171717] p-5">
            <h3 className="text-[1.05rem] font-semibold">Recipient Information</h3>
            <div className="mt-4 space-y-4">
              <div>
                <div className="text-[0.78rem] text-white/60">Send to</div>
                <input type="email" required placeholder="Input Email" className="mt-2 w-full rounded-[10px] border border-white/10 bg-[#2b2b2b] px-4 py-3 text-[0.85rem] text-white outline-none placeholder:text-white/45 focus:border-[#ED5A2E]" />
                <div className="mt-3 text-[0.78rem] text-white/60">+ Add another recipient</div>
              </div>
            </div>
          </div>

          <div className="mt-5 max-w-[760px] rounded-[16px] bg-[#171717] p-5">
            <h3 className="text-[1.05rem] font-semibold">Your Information</h3>
            <div className="mt-4 space-y-4">
              <div>
                <div className="text-[0.78rem] text-white/60">Your name</div>
                <input type="text" required placeholder="Input Name" className="mt-2 w-full rounded-[10px] border border-white/10 bg-[#2b2b2b] px-4 py-3 text-[0.85rem] text-white outline-none placeholder:text-white/45 focus:border-[#ED5A2E]" />
              </div>
              <div>
                <div className="text-[0.78rem] text-white/60">Your email</div>
                <input type="email" required placeholder="Input Email" className="mt-2 w-full rounded-[10px] border border-white/10 bg-[#2b2b2b] px-4 py-3 text-[0.85rem] text-white outline-none placeholder:text-white/45 focus:border-[#ED5A2E]" />
              </div>
            </div>
          </div>

          <div className="mt-5 max-w-[760px] rounded-[16px] bg-[#171717] p-5">
            <h3 className="text-[1.05rem] font-semibold">Personal Message (Optional)</h3>
            <textarea placeholder="Add a message for the recipient" className="mt-4 min-h-24 w-full rounded-[10px] border border-white/10 bg-[#2b2b2b] px-4 py-4 text-[0.85rem] text-white outline-none placeholder:text-white/45 focus:border-[#ED5A2E]" />
            <label className="mt-4 flex items-center gap-2 text-[0.75rem] text-white/60">
              <span className="flex h-4 w-4 items-center justify-center rounded-[0.2rem] bg-[#ED5A2E] text-[0.7rem]">✓</span>
              I confirm I want to transfer this ticket
            </label>
            <button type="button" data-transaction="Send ticket by email" onClick={() => setSent(true)} className="mt-4 w-full rounded-[10px] bg-[#ED5A2E] py-3 text-[0.9rem] font-semibold text-white transition-colors hover:bg-[#d44d24]">{sent ? "Ticket Sent" : "Send Ticket"}</button>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 px-6 py-12 text-[0.75rem] text-white/40">
          <div className="mx-auto max-w-[1440px]">TRCK is a leisure technology platform based in Nigeria.</div>
        </div>
      </div>
    </main>
  );
}
