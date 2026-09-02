"use client";

import { useEffect, useState } from "react";

/** Provides consistent visible and console feedback for transaction actions. */
export function TransactionFeedback() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const action = target?.closest<HTMLElement>("[data-transaction]");
      if (!action) return;

      const label = action.dataset.transaction || "Transaction";
      console.log(`${label} button click`);
      setMessage(`${label} button was clicked`);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!message) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4" role="presentation">
      <div role="dialog" aria-modal="true" aria-label="Action feedback" className="w-full max-w-xs rounded-2xl border border-[#ED5A2E]/40 bg-white p-5 text-center text-[#171717] shadow-2xl">
        <p className="text-sm font-semibold">{message}</p>
        <button type="button" onClick={() => setMessage(null)} className="mt-4 rounded-lg bg-[#ED5A2E] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#d94d25]">
          Close
        </button>
      </div>
    </div>
  );
}
