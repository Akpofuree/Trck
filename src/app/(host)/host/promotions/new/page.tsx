"use client";

import Link from "next/link";
import { ArrowLeft, Megaphone } from "lucide-react";

export default function NewPromotionPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-2xl">
        <Link href="/host/promotions" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"><ArrowLeft size={16} /> Back to Promotions</Link>
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8">
          <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ED5828]/15 text-[#ED5828]"><Megaphone size={20} /></div><div><h1 className="text-2xl font-bold">Create Promotion</h1><p className="text-sm text-white/55">Set up a promotion for your event.</p></div></div>
          <form className="mt-8 space-y-5" onSubmit={(event) => { event.preventDefault(); window.location.href = "/host/promotions"; }}>
            <label className="block text-sm text-white/75">Promotion name<input required className="mt-2 w-full rounded-xl border border-white/15 bg-[#1A1A1A] px-4 py-3 text-white outline-none focus:border-[#ED5828]" placeholder="Early bird offer" /></label>
            <label className="block text-sm text-white/75">Discount<input required type="number" min="1" className="mt-2 w-full rounded-xl border border-white/15 bg-[#1A1A1A] px-4 py-3 text-white outline-none focus:border-[#ED5828]" placeholder="20" /></label>
            <button type="submit" className="w-full rounded-xl bg-[#ED5828] px-5 py-3 font-bold text-white transition-colors hover:bg-[#d44d24]">Save Promotion</button>
          </form>
        </div>
      </div>
    </main>
  );
}
