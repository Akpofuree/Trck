"use client";

import Link from "next/link";
import { ChevronLeft, Link2, Mail, Send } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white lg:px-8">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center">
        <div className="w-full max-w-[760px]">
          <div className="flex items-center gap-3 text-white/90">
            <ChevronLeft className="h-5 w-5" />
            <h1 className="text-[1.45rem] font-semibold">Share Ticket</h1>
          </div>
          <p className="mt-3 text-[0.92rem] text-white/60">
            Choose the share method you want to open. Each route below is a separate page so you can review it on its own.
          </p>
        </div>

        <div className="mt-8 w-full max-w-[760px] space-y-4">
          <Link href="/checkout/share/link" className="block rounded-[18px] border border-[#ED5A2E] bg-[#171717] p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff9a7c] text-[#111]"><Link2 className="h-5 w-5" /></div>
              <div>
                <div className="text-[1rem] font-semibold">Share Link</div>
                <p className="mt-1 text-[0.8rem] text-white/60">Generate a secure link to share anywhere</p>
              </div>
            </div>
          </Link>

          <Link href="/checkout/share/email" className="block rounded-[18px] border border-[#ED5A2E] bg-[#171717] p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff9a7c] text-[#111]"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-[1rem] font-semibold">Send via Email</div>
                <p className="mt-1 text-[0.8rem] text-white/60">Directly email the ticket to someone</p>
              </div>
            </div>
          </Link>

          <Link href="/checkout/share/transfer" className="block rounded-[18px] border border-[#ED5A2E] bg-[#171717] p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff9a7c] text-[#111]"><Send className="h-5 w-5" /></div>
              <div>
                <div className="text-[1rem] font-semibold">Send to TRCK User</div>
                <p className="mt-1 text-[0.8rem] text-white/60">Transfer to someone with a TRCK account</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-8 w-full max-w-[760px] rounded-[18px] bg-[#171717] p-5 text-[0.85rem] text-white/65">
          <div className="flex items-center gap-2 font-semibold text-white"><Send className="h-4 w-4 text-[#ED5A2E]" /> Share Ticket Flow</div>
          <p className="mt-2">
            The share experience is split into dedicated pages so the link, email, and transfer states can each match the screenshots and be opened directly from the hub.
          </p>
        </div>
      </div>
    </main>
  );
}
