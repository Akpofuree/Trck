"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  Clock3,
  ShieldCheck,
  Ticket,
  CircleDot,
  CheckCircle2,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { Logo } from "@/components/shared/logo";
import {
  CheckoutButton,
  CheckoutStepper,
} from "@/components/shared/checkout-button";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white lg:px-16 font-[var(--font-inter)]">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <p className="mb-4 text-[0.88rem] font-semibold text-[#ED5A2E]">
              info@getontrck.com
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-[0.85rem] text-white/70">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="space-y-2.5 text-[0.85rem] text-white/70">
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Acceptable use policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider text-white">
              Support
            </h4>
            <ul className="space-y-2.5 text-[0.85rem] text-white/70">
              <li>
                <Link href="#" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-2 pt-8 text-[0.76rem] leading-relaxed text-white/40">
          <p>
            TRCK is a leisure technology platform based in Nigeria. All
            experiences are provided by independent third-party creators.
          </p>
          <p>
            Copyright &copy; 2025 Trck Entertainment &amp; Technology Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Header() {
  return (
    <div className="border-b border-[#ED5A2E]/40 bg-[#151515] px-6 sm:px-8 py-4">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4">
        <Link
          href="/checkout"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <Image
          src="/event-feature.jpg"
          alt="event"
          width={88}
          height={88}
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-cover"
        />
        <div className="min-w-0 flex-1">
          <h1 className="text-sm sm:text-base font-bold text-white truncate">
            5IVE LIVE AT 02 ARENA
          </h1>
          <div className="mt-1 flex flex-wrap items-center gap-4 text-xs text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-[#ED5A2E]" /> Friday,
              Nov 15, 2024
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#ED5A2E]" /> 02 Arena,
              London, United Kingdom
            </span>
          </div>
        </div>
        <Link href="/" className="ml-auto inline-flex items-center">
          <Logo width={100} height={32} className="h-6 w-auto" />
        </Link>
      </div>
    </div>
  );
}

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[20px] bg-[#121212] border border-white/10 p-5 sm:p-6 shadow-md">
      {title ? (
        <h3 className="text-sm sm:text-base font-bold text-white mb-4">
          {title}
        </h3>
      ) : null}
      <div>{children}</div>
    </section>
  );
}

export default function ReviewAndPaymentPage() {
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white font-[var(--font-inter)]">
      <Header />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8">
        {/* Reusable Centered Stepper (Step 2: Review) */}
        <CheckoutStepper currentStep={2} />

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Left Column (8 Cols): Order Details + Important Info + Reviews */}
          <div className="lg:col-span-8 space-y-6">
            <SectionCard title="Review Your Order">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl bg-[#1A1A1A] p-4 border border-white/5">
                  <div className="space-y-1">
                    <span className="rounded-md bg-[#ED5A2E]/20 text-[#ED5A2E] text-[11px] font-bold px-2.5 py-0.5">
                      VIP Package
                    </span>
                    <h4 className="text-base font-bold text-white mt-1">
                      5IVE LIVE AT 02 ARENA
                    </h4>
                    <p className="text-xs text-white/60">
                      Nov 15, 2024 • 7:00 PM • 02 Arena London
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs text-white/50">Quantity: 1</p>
                    <p className="text-base font-bold text-[#ED5A2E]">
                      N80,000
                    </p>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Important Information &amp; Policies">
              <div className="space-y-3.5 text-xs text-white/70">
                <div>
                  <p className="font-bold text-white">Event Policies</p>
                  <p className="mt-0.5 leading-relaxed text-white/60">
                    Please arrive 30 minutes before the event start time. Late
                    arrivals may not be admitted until a suitable break.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-white">Refund Policy</p>
                  <p className="mt-0.5 leading-relaxed text-white/60">
                    Full refund available up to 24 hours before the event. No
                    refunds after this period.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-white">Age Restrictions</p>
                  <p className="mt-0.5 leading-relaxed text-white/60">
                    This event is 18+ only. Valid government-issued ID required
                    at entry. No exceptions.
                  </p>
                </div>
                <div className="pt-2 text-xs font-semibold text-[#ED5A2E] hover:underline cursor-pointer">
                  Read full terms and conditions →
                </div>
              </div>
            </SectionCard>

            <SectionCard title="What Our Customers Say">
              <div className="space-y-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 border-b border-white/5 pb-4 last:border-b-0"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#b76d4c] shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-white">
                            Jane Doe
                          </p>
                          <p className="text-[11px] text-white/45">
                            November 3rd, 2025
                          </p>
                        </div>
                        <div className="text-[#FFD400] text-xs">{"★★★★★"}</div>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-white/65">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus eu luctus risus. Sed eu pharetra mi, vel
                        suscipit nibh.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* Right Column (4 Cols): Order Total & Proceed to Payment */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-[20px] bg-[#121212] border border-white/10 p-6 space-y-5 sticky top-6">
              {/* Countdown Timer */}
              <div className="rounded-xl bg-[#1A1A1A] p-4 border border-white/5">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <Clock3 className="h-4 w-4 text-[#ED5A2E]" />
                  <span>Tickets reserved for</span>
                </div>
                <div className="mt-2 text-2xl font-black text-white font-mono">
                  11:32
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[82%] rounded-full bg-[#ED5A2E]" />
                </div>
                <p className="mt-2 text-[11px] text-white/40">
                  Complete checkout to secure your tickets
                </p>
              </div>

              {/* Order Total Breakdown */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white">Order Total</h3>
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-white">VIP PACKAGE</p>
                    <p className="text-white/50">Quantity: 1</p>
                  </div>
                  <p className="font-bold text-[#ED5A2E] text-sm">N80,000</p>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-3 text-xs text-white/70">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>N80,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Fee</span>
                    <span>N5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>N4,500</span>
                  </div>
                </div>

                {/* Promo code */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo Code"
                    className="flex-1 rounded-xl bg-[#222] border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 outline-none focus:border-[#ED5A2E]"
                  />
                  <button
                    type="button"
                    onClick={() => setPromoApplied(true)}
                    className="rounded-xl bg-[#ED5A2E] px-4 py-2 text-xs font-bold text-white hover:bg-[#d4501f]"
                  >
                    {promoApplied ? "Applied" : "Apply"}
                  </button>
                </div>

                <div className="flex justify-between border-t border-white/10 pt-3 text-base font-bold">
                  <span>Total</span>
                  <span className="text-[#ED5A2E]">N89,500</span>
                </div>

                {/* Reusable Proceed Button -> Navigates to /checkout/card */}
                <div className="space-y-2 pt-2">
                  <CheckoutButton
                    href="/checkout/card"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Continue to Payment
                  </CheckoutButton>

                  <CheckoutButton
                    variant="secondary"
                    size="md"
                    className="w-full"
                  >
                    Save for later
                  </CheckoutButton>
                </div>

                {/* Trust Badges */}
                <div className="space-y-2 border-t border-white/10 pt-4 text-xs text-white/60">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#ED5A2E]" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ticket className="h-4 w-4 text-[#ED5A2E]" />
                    <span>Instant delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-[#ED5A2E]" />
                    <span>Free cancellation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </main>
  );
}
