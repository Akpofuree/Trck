"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronLeft, Clock3, Minus, Plus, Ticket, CircleDot, CreditCard, Building2, Phone, CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/shared/logo";

type Method = "card" | "bank" | "ussd";

const methods: Record<Method, { label: string; subtitle: string; icon: ReactNode; selectedBg: string }> = {
  card: { label: "Card Payment", subtitle: "Visa, Mastercard, Verve", icon: <CreditCard className="h-5 w-5" />, selectedBg: "border-[#ED5A2E] bg-[#2f2f2f] shadow-[0_0_0_1px_rgba(237,90,46,0.65)]" },
  bank: { label: "Bank Transfer", subtitle: "Instant Verification", icon: <Building2 className="h-5 w-5" />, selectedBg: "border-[#ED5A2E] bg-[#2f2f2f] shadow-[0_0_0_1px_rgba(237,90,46,0.65)]" },
  ussd: { label: "USSD", subtitle: "Dial code to pay", icon: <Phone className="h-5 w-5" />, selectedBg: "border-[#ED5A2E] bg-[#2f2f2f] shadow-[0_0_0_1px_rgba(237,90,46,0.65)]" },
};

const pageTitles: Record<Method, string> = {
  card: "Payment Gateway (Card Payment)",
  bank: "Payment Gateway (Bank Transfer)",
  ussd: "Payment Gateway (USSD)",
};

function Header() {
  return (
    <div className="border-b border-[#ED5A2E]/40 bg-[#151515] px-8 py-4">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4">
        <button className="text-[1.2rem] text-white/90"><ChevronLeft className="h-5 w-5" /></button>
        <Image src="/event-feature.jpg" alt="event" width={88} height={88} className="h-[72px] w-[72px] rounded-[12px] object-cover" />
        <div className="min-w-0 flex-1">
          <h1 className="text-[1rem] font-semibold">5IVE LIVE AT 02 ARENA</h1>
          <div className="mt-2 flex flex-wrap items-center gap-6 text-[0.82rem] text-white/75">
            <span className="inline-flex items-center gap-2"><Ticket className="h-4 w-4 text-[#ED5A2E]" /> Friday, Nov 15, 2024</span>
            <span className="inline-flex items-center gap-2"><CircleDot className="h-4 w-4 text-[#ED5A2E]" /> 02 Arena, London, United Kingdom</span>
          </div>
        </div>
        <Link href="/" className="ml-auto inline-flex items-center">
          <Logo width={110} height={32} className="h-6 w-auto" />
        </Link>
      </div>
    </div>
  );
}

function Stepper() {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      {[
        ["1", "Select Tickets"],
        ["2", "Review"],
        ["3", "Payment"],
      ].map(([num, label], idx) => (
        <div key={label} className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-[0.95rem] font-semibold ${idx === 2 ? "bg-[#ED5A2E] text-white" : "border border-[#ED5A2E]/50 text-white/70"}`}>{num}</div>
            <div className="mt-2 text-[0.78rem] text-white/70">{label}</div>
          </div>
          {idx < 2 ? <div className="hidden h-px w-28 bg-white/20 md:block" /> : null}
        </div>
      ))}
    </div>
  );
}

function MethodCard({ method, active }: { method: Method; active?: boolean }) {
  const item = methods[method];
  return (
    <div className={`rounded-[14px] p-5 ${active ? item.selectedBg : "bg-[#2f2f2f]"}`}>
      <div className="text-[#ED5A2E]">{item.icon}</div>
      <div className="mt-10">
        <div className="text-[1rem] font-semibold">{item.label}</div>
        <div className="mt-1 text-[0.8rem] text-white/55">{item.subtitle}</div>
      </div>
    </div>
  );
}

export function PaymentGatewayPage({ method }: { method: Method }) {
  const selected = methods[method];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="block">
        <Header />
        <div className="mx-auto max-w-[1440px] px-8 py-10">
          <Stepper />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
            <div>
              <h2 className="text-[2rem] font-semibold">Choose Payment Method</h2>
              <p className="mt-2 text-[0.9rem] text-white/55">Select how you&apos;d like to pay</p>

              <section className="mt-8 rounded-[18px] bg-[#171717] p-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <MethodCard method="card" active={method === "card"} />
                  <MethodCard method="bank" active={method === "bank"} />
                  <MethodCard method="ussd" active={method === "ussd"} />
                  <div className="rounded-[14px] bg-[#2f2f2f] p-5">
                    <div className="text-[#ED5A2E]"><Phone className="h-5 w-5" /></div>
                    <div className="mt-10">
                      <div className="text-[1rem] font-semibold">Mobile Money</div>
                      <div className="mt-1 text-[0.8rem] text-white/55">Pay from your wallet</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-[16px] bg-[#232323] p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-[1.15rem] font-semibold">{selected.label}</div>
                    <div className="text-[0.82rem] text-[#ED5A2E]">Selected</div>
                  </div>

                  {method === "card" ? (
                    <div className="mt-5 space-y-4">
                      <div className="rounded-[16px] border border-[#ED5A2E] bg-[#5b5b5b] p-5">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="rounded-[6px] bg-[#232323] px-2 py-1 text-[0.72rem] font-semibold text-white">Master Card</div>
                            <div className="mt-8 text-[1.2rem] font-semibold tracking-wider">•••• •••• 1234</div>
                            <div className="mt-4 text-[0.8rem] text-white/90">Master Card</div>
                          </div>
                          <div className="h-5 w-5 rounded-full bg-green-500" />
                        </div>
                      </div>
                      <div className="rounded-[16px] bg-[#2f2f2f] p-5">
                        <div className="rounded-[6px] bg-[#4d7bd5] px-2 py-1 text-[0.72rem] font-semibold text-white">V54</div>
                        <div className="mt-8 text-[1.2rem] font-semibold tracking-wider">•••• •••• 1234</div>
                        <div className="mt-4 text-[0.8rem] text-white/90">Visa Card</div>
                      </div>
                      <button className="inline-flex items-center gap-3 rounded-[12px] bg-[#ED5A2E] px-5 py-3 text-[0.9rem] font-semibold text-white">
                        <Plus className="h-5 w-5" /> Add payment method
                      </button>
                      <label className="flex items-center gap-2 text-[0.78rem] text-white/70">
                        <span className="flex h-4 w-4 items-center justify-center rounded-[0.2rem] bg-[#ED5A2E] text-[0.7rem]">✓</span>
                        I agree to the terms and conditions, privacy policy and cancellation policy
                      </label>
                      <div className="pt-3 text-center text-[0.82rem] text-white/80">
                        <div>Powered by <span className="text-[#ED5A2E]">Paystack</span></div>
                        <div>Trusted by 80,000+ businesses in Africa</div>
                      </div>
                    </div>
                  ) : method === "bank" ? (
                    <div className="mt-5 rounded-[16px] bg-[#2f2f2f] p-5 text-[0.88rem] text-white/75">
                      <p>Transfer the exact amount to the account below. Your payment will be confirmed automatically within 5 minutes</p>
                      <div className="mt-4 space-y-4">
                        <div>
                          <div className="text-[0.72rem] text-white/45">Bank Name</div>
                          <div className="mt-1 text-[1rem] text-white">Wema Bank</div>
                        </div>
                        <div>
                          <div className="text-[0.72rem] text-white/45">Account Number</div>
                          <div className="mt-1 text-[1rem] text-[#ED5A2E]">7890123456</div>
                        </div>
                        <div>
                          <div className="text-[0.72rem] text-white/45">Account Name</div>
                          <div className="mt-1 text-[1rem] text-white">trck - Event Payment</div>
                        </div>
                        <div>
                          <div className="text-[0.72rem] text-white/45">Amount</div>
                          <div className="mt-1 text-[1rem] text-[#ED5A2E]">N89,500</div>
                        </div>
                      </div>
                      <label className="mt-5 flex items-center gap-2 text-[0.78rem] text-white/70">
                        <span className="flex h-4 w-4 items-center justify-center rounded-[0.2rem] bg-[#ED5A2E] text-[0.7rem]">✓</span>
                        I agree to the terms and conditions, privacy policy and cancellation policy
                      </label>
                      <div className="pt-5 text-center text-[0.82rem] text-white/80">
                        <div>Powered by <span className="text-[#ED5A2E]">Paystack</span></div>
                        <div>Trusted by 80,000+ businesses in Africa</div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-5 rounded-[16px] bg-[#2f2f2f] p-5 text-[0.88rem] text-white/75">
                      <p>Select your bank and dial the USSD code to complete payment</p>
                      <div className="mt-4 space-y-4">
                        {["GTBANK", "Access Bank", "Zenith Bank", "First Bank"].map((bank) => (
                          <div key={bank}>
                            <div className="text-[0.72rem] text-white/45">{bank}</div>
                            <div className="mt-1 text-[1rem] text-[#ED5A2E]">*737*50*Amount#</div>
                          </div>
                        ))}
                      </div>
                      <label className="mt-5 flex items-center gap-2 text-[0.78rem] text-white/70">
                        <span className="flex h-4 w-4 items-center justify-center rounded-[0.2rem] bg-[#ED5A2E] text-[0.7rem]">✓</span>
                        I agree to the terms and conditions, privacy policy and cancellation policy
                      </label>
                      <div className="pt-5 text-center text-[0.82rem] text-white/80">
                        <div>Powered by <span className="text-[#ED5A2E]">Paystack</span></div>
                        <div>Trusted by 80,000+ businesses in Africa</div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>

            <aside className="space-y-5">
              <section className="rounded-[16px] bg-[#171717] p-5">
                <div className="flex items-center gap-3 text-white/75">
                  <Clock3 className="h-4 w-4" />
                  <span className="text-[0.85rem]">Tickets reserved for</span>
                </div>
                <div className="mt-3 text-[1.7rem] font-semibold">11:32</div>
                <div className="mt-3 h-1.5 rounded-full bg-white/20"><div className="h-full w-[82%] rounded-full bg-[#ED5A2E]" /></div>
                <p className="mt-3 text-[0.8rem] text-white/55">Complete checkout to secure your tickets</p>
              </section>

              <section className="rounded-[16px] bg-[#171717] p-5">
                <h3 className="text-[0.95rem] font-semibold text-white/80">Order Summary</h3>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-[0.95rem] font-semibold">VIP PACKAGE</p>
                    <p className="text-[0.72rem] text-white/45">Quantity: 1</p>
                  </div>
                  <p className="text-[0.95rem] font-semibold text-[#ED5A2E]">N80,000</p>
                </div>
                <div className="mt-4 space-y-2 border-t border-[#ED5A2E]/30 pt-4 text-[0.8rem] text-white/70">
                  <div className="flex justify-between"><span>Subtotal</span><span>N80,000</span></div>
                  <div className="flex justify-between"><span>Service Fee</span><span>N5,000</span></div>
                  <div className="flex justify-between"><span>Tax</span><span>N4,500</span></div>
                </div>
                <div className="mt-4 flex gap-2">
                  <input className="h-11 flex-1 rounded-[0.35rem] border border-[#ED5A2E] bg-[#5a3b31] px-3 text-[0.85rem] text-white placeholder:text-white/50" placeholder="Promo Code" />
                  <button className="h-11 rounded-[0.35rem] bg-[#ED5A2E] px-4 text-[0.85rem] font-semibold text-white">Apply</button>
                </div>
                <div className="mt-4 flex justify-between border-t border-[#ED5A2E]/30 pt-4">
                  <span className="text-[1rem] font-semibold">Total</span>
                  <span className="text-[1rem] font-semibold text-[#ED5A2E]">N89,500</span>
                </div>
                <button className="mt-5 w-full rounded-[10px] bg-[#ED5A2E] py-3 text-[0.95rem] font-semibold text-white">{method === "card" ? "Pay N89,500" : "Continue to Review"}</button>
                <div className="mt-4 space-y-3 border-t border-[#ED5A2E]/30 pt-4 text-[0.8rem] text-white/70">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#ED5A2E]" /> Secure checkout</div>
                  <div className="flex items-center gap-2"><Ticket className="h-4 w-4 text-[#ED5A2E]" /> Instant delivery</div>
                  <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#ED5A2E]" /> Free cancellation</div>
                </div>
                <div className="mt-5 border-t border-[#ED5A2E]/30 pt-4 text-center text-[0.82rem] text-[#ED5A2E]">Need help? Chat with us</div>
                <div className="mt-3 text-center text-[0.74rem] text-white/55">View seating chart · Event details · FAQs</div>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
