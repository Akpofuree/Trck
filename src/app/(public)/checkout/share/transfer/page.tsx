"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Clock3, CircleDot, Send, Search, Check } from "lucide-react";
import { Logo } from "@/components/shared/logo";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 text-white lg:px-8">
      <div className="mx-auto max-w-[1120px] text-[0.75rem] text-white/40">
        <p>TRCK is a leisure technology platform based in Nigeria.</p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="border-b border-[#ED5A2E]/40 bg-[#151515] px-4 py-4 lg:px-8">
        <div className="mx-auto flex max-w-[1120px] items-center gap-4">
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

      <div className="mx-auto max-w-[1120px] px-4 py-8 lg:px-8">
        <div className="flex items-center gap-3 text-white/90">
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

        <div className="mx-auto mt-8 max-w-[760px]">
          <h3 className="text-[1.15rem] font-semibold">Choose How to Share</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-[16px] bg-[#171717] p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff9a7c] text-[#111]"><Send className="h-5 w-5" /></div>
                  <div>
                    <div className="text-[1rem] font-semibold">Send to TRCK User</div>
                    <p className="mt-1 text-[0.8rem] text-white/60">Transfer to someone with a TRCK account</p>
                  </div>
                </div>
                <span className="rounded-full border border-green-500/70 px-3 py-1 text-[0.7rem] text-green-400">Most Secure</span>
              </div>
              <div className="mt-4 grid gap-3 text-[0.78rem] text-white/60 sm:grid-cols-3">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-white/55" /> Instant transfer</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-white/55" /> Verified recipient</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-white/55" /> In-app notification</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-[760px] rounded-[16px] bg-[#171717] p-5">
          <h3 className="text-[1.05rem] font-semibold">Find Recipient</h3>
          <div className="mt-4 flex gap-2">
            <div className="flex flex-1 items-center gap-2 rounded-[10px] bg-[#2b2b2b] px-4 py-3 text-white/45">
              <Search className="h-4 w-4" />
              <span>Search by username</span>
            </div>
            <button className="rounded-[10px] bg-[#ED5A2E] px-4 py-3 text-[0.85rem] font-semibold text-white">Search</button>
          </div>

          <h4 className="mt-5 text-[1rem] font-semibold">Recents</h4>
          <div className="mt-3 space-y-3">
            {["@JohnDoe", "@JohnDoe"].map((handle, idx) => (
              <div key={`${handle}-${idx}`} className="flex items-center gap-3 rounded-[12px] bg-[#2b2b2b] px-4 py-3">
                <div className="h-12 w-12 rounded-full bg-[#6c6c6c]" />
                <div>
                  <div className="text-[0.9rem] font-semibold">{handle}</div>
                  <div className="text-[0.75rem] text-white/55">John Doe</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <div className="text-[0.95rem] font-semibold">Personal Message (Optional)</div>
            <div className="mt-3 rounded-[10px] bg-[#2b2b2b] px-4 py-4 text-[0.85rem] text-white/45">Add a message for the recipient</div>
          </div>

          <label className="mt-4 flex items-start gap-2 text-[0.75rem] text-white/60">
            <span className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-[0.2rem] bg-[#ED5A2E] text-[0.7rem]">✓</span>
            <span>I confirm I want to transfer this ticket to <span className="text-[#ED5A2E]">@johndoe</span>. This action cannot be undone once accepted.</span>
          </label>
          <button className="mt-4 w-full rounded-[10px] bg-[#ED5A2E] py-3 text-[0.9rem] font-semibold text-white">Transfer Ticket</button>
        </div>

        <div className="mt-10"><Footer /></div>
      </div>
    </main>
  );
}
