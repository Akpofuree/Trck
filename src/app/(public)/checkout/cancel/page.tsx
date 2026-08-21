"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Clock3, CircleDot } from "lucide-react";
import { Logo } from "@/components/shared/logo";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white lg:px-16">
      <div className="mx-auto max-w-[1440px] text-[0.75rem] text-white/40">
        <p>TRCK is a leisure technology platform based in Nigeria.</p>
      </div>
    </footer>
  );
}

export default function Page() {
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
            <h2 className="text-[1.45rem] font-semibold">Cancel Ticket</h2>
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

          <div className="mx-auto mt-6 max-w-[760px] rounded-[16px] bg-[#171717] p-5">
            <h3 className="text-[1.05rem] font-semibold">Manage Ticket</h3>
            <button className="mt-5 w-full rounded-[10px] border border-[#8d2b2b] bg-[#4a1f1f] py-3 text-[0.9rem] font-semibold text-[#ff4b4b]">Cancel Ticket</button>
          </div>
        </div>

        <div className="mt-10"><Footer /></div>
      </div>
    </main>
  );
}
