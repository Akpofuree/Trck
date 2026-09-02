"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronLeft, Clock3, Plus, Minus, Ticket, CircleDot, Search, Star, CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/shared/logo";

const ticketCards = [
  {
    name: "General Admission",
    badge: "Available",
    price: "N80,000",
    subtitle: "Standard entry with access to main floor",
    features: ["Event access", "Welcome drink", "General seating"],
    stock: "143 of 200 spots remaining",
  },
  {
    name: "VIP Package",
    badge: "Most Popular",
    price: "N180,000",
    subtitle: "Premium experience with exclusive benefits",
    features: ["All General Admission benefits", "Priority seating in VIP section", "Meet & greet with host and performers"],
    stock: "Only 8 left",
    highlighted: true,
  },
  {
    name: "Early Bird Special",
    badge: "Selling fast",
    price: "N60,000",
    subtitle: "Limited time offer - Save 20% on General Admission",
    features: ["All General Admission benefits", "Same great experience at a discount", "Limited availability"],
    stock: "",
  },
];

function Footer() {
  return (
    <footer className="hidden border-t border-white/10 bg-black px-6 py-12 text-white lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider text-white">Contact</h4>
            <p className="mb-4 text-[0.88rem] font-semibold text-[#ED5A2E]">info@getontrck.com</p>
            <p className="text-[0.85rem] text-white/70">Follow the brand across the channels you already know.</p>
          </div>
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5 text-[0.85rem] text-white/70">
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">How it works</Link></li>
              <li><Link href="#" className="hover:text-white">Features</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-2.5 text-[0.85rem] text-white/70">
              <li><Link href="#" className="hover:text-white">Privacy policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of service</Link></li>
              <li><Link href="#" className="hover:text-white">Acceptable use policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider text-white">Support</h4>
            <ul className="space-y-2.5 text-[0.85rem] text-white/70">
              <li><Link href="#" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="space-y-2 pt-8 text-[0.76rem] leading-relaxed text-white/40">
          <p>TRCK is a leisure technology platform based in Nigeria. All experiences are provided by independent third-party creators.</p>
          <p>Copyright &copy; 2025 Trck Entertainment &amp; Technology Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
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
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-[0.95rem] font-semibold ${idx === 0 ? "bg-[#ED5A2E] text-white" : "border border-[#ED5A2E]/50 text-white/70"}`}>
              {num}
            </div>
            <div className="mt-2 text-[0.78rem] text-white/70">{label}</div>
          </div>
          {idx < 2 ? <div className="hidden h-px w-28 bg-white/20 md:block" /> : null}
        </div>
      ))}
    </div>
  );
}

function TicketCard({
  name,
  badge,
  price,
  subtitle,
  features,
  stock,
  highlighted,
}: {
  name: string;
  badge: string;
  price: string;
  subtitle: string;
  features: string[];
  stock: string;
  highlighted?: boolean;
}) {
  return (
    <article className={`rounded-[16px] bg-[#171717] p-5 ${highlighted ? "shadow-[0_0_0_1px_rgba(237,90,46,0.65),0_0_20px_rgba(237,90,46,0.25)]" : "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[1rem] font-semibold text-white">{name}</h3>
          <p className="mt-1 text-[0.8rem] text-white/55">{subtitle}</p>
        </div>
        <span className={`rounded-[8px] px-3 py-1 text-[0.72rem] font-medium ${badge === "Available" ? "border border-[#ED5A2E] text-[#ED5A2E]" : badge === "Most Popular" ? "bg-[#ED5A2E] text-white" : "bg-[#ED5A2E] text-white"}`}>
          {badge}
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between gap-4 border-b border-[#ED5A2E]/50 pb-4">
        <div>
          <div className="text-[1.8rem] font-semibold text-[#ED5A2E]">{price}</div>
          {name === "Early Bird Special" ? <div className="mt-1 text-[0.8rem] text-[#ED5A2E]"><Clock3 className="mr-1 inline-block h-3.5 w-3.5" />Offer ends in 2h 34m</div> : null}
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <button type="button" data-transaction="Decrease ticket quantity" className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#5b3c32]"><Minus className="h-3.5 w-3.5" /></button>
          <div className="w-6 text-center text-[1rem] font-medium">1</div>
          <button type="button" data-transaction="Increase ticket quantity" className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#5b3c32]"><Plus className="h-3.5 w-3.5" /></button>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-[0.85rem] text-white/80">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-[0.18rem] text-[#ED5A2E]">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-3 text-[0.8rem] text-white/55">Max 10 per order {stock ? <span className={`ml-3 rounded-full border px-3 py-1 text-[0.72rem] ${highlighted ? "border-red-500 text-red-500" : "border-[#ED5A2E] text-[#ED5A2E]"}`}>{stock}</span> : null}</div>
    </article>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="hidden lg:block">
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

        <div className="mx-auto max-w-[1440px] px-8 py-10">
          <Stepper />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
            <div>
              <h2 className="text-[2rem] font-semibold">Select Your Ticket</h2>
              <p className="mt-2 text-[0.9rem] text-white/55">Choose ticket types and quantities</p>
              <div className="mt-4 flex flex-wrap gap-3 text-[0.78rem]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ED5A2E] bg-[#221513] px-3 py-1 text-[#ED5A2E]"><Ticket className="h-3.5 w-3.5" /> 143 of 200 spots remaining</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-white/70"><Search className="h-3.5 w-3.5" /> 45 people viewing this event</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-white/70"><Clock3 className="h-3.5 w-3.5" /> 10 tickets sold in last hour</span>
              </div>

              <div className="mt-8 space-y-5">
                {ticketCards.map((card) => <TicketCard key={card.name} {...card} />)}
              </div>

              <section className="mt-8 rounded-[16px] bg-[#4b322b] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-[1rem] font-semibold">Group Discount Available</h3>
                    <p className="mt-2 text-[0.84rem] text-white/70">Book 10+ tickets and save 15% on your entire order</p>
                  </div>
                  <button type="button" data-transaction="Contact us" className="rounded-[8px] bg-white px-4 py-2 text-[0.78rem] font-semibold text-[#4b322b]">Contact Us</button>
                </div>
              </section>

              <section className="mt-5 rounded-[16px] bg-[#171717] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <h3 className="text-[1rem] font-semibold">Ticket Policies</h3>
                <div className="mt-4 space-y-4 text-[0.85rem] text-white/70">
                  <div>
                    <p className="font-medium text-white">Refund Policy</p>
                    <p className="mt-1">Full refund available up to 24 hours before the event. After this period, tickets are non-refundable but can be transferred to another person.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Transfer Policy</p>
                    <p className="mt-1">Tickets can be transferred to another person up to 2 hours before the event start time through your account dashboard.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Age Restrictions</p>
                    <p className="mt-1">This event is 18+ only. Valid government-issued ID required at entry. No exceptions.</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Accessibility</p>
                    <p className="mt-1">Wheelchair accessible seating available. Please contact us at least 48 hours in advance to arrange accommodations.</p>
                  </div>
                  <div className="pt-2 text-[0.78rem] text-[#ED5A2E]">Read full terms and conditions →</div>
                </div>
              </section>

              <section className="mt-8">
                <h3 className="mb-4 text-[1.1rem] font-semibold">Enhance Your Experience</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <article key={idx} className="overflow-hidden rounded-[12px] bg-[#171717] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                      <div className="h-[170px] bg-[#999]" />
                      <div className="p-4">
                        <h4 className="text-[0.95rem] font-semibold">Event Merchandise</h4>
                        <p className="mt-1 text-[0.72rem] text-white/55">Exclusive event t-shirt and poster</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-[0.95rem] font-semibold text-[#ED5A2E]">N20,000</span>
                          <button type="button" data-transaction="Add merchandise" className="rounded-[8px] border border-[#ED5A2E] px-3 py-1 text-[0.72rem] text-white/85">+ Add</button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="mt-8 rounded-[16px] bg-[#171717] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <h3 className="text-[1rem] font-semibold">Frequently Asked Questions</h3>
                <div className="mt-4 space-y-0">
                  {["Can I attend individual events?", "What’s the cancellation policy?", "Is there parking available?", "Are recordings available?", "Are there age restrictions?"].map((q, idx) => (
                    <details key={q} className="border-b border-[#ED5A2E] py-4 group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[0.9rem]">
                        <span>{q}</span>
                        <ChevronDown className="h-4 w-4 text-[#ED5A2E] transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="mt-2 max-w-[600px] text-[0.78rem] leading-relaxed text-[#ED5A2E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit justo a est pellentesque pulvinar.</p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="mt-8 rounded-[16px] bg-[#171717] p-5">
                <h3 className="text-[1rem] font-semibold">Why Book with Trck?</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-3 text-center">
                  {[
                    ["Secure Payment", "Your payment information is encrypted and secure"],
                    ["Instant Confirmation", "Receive your tickets immediately via email"],
                    ["Best Price Guarantee", "We offer competitive pricing and exclusive deals"],
                  ].map(([title, desc]) => (
                    <div key={title}>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ED5A2E]/75"><CheckCircle2 className="h-5 w-5" /></div>
                      <div className="mt-3 text-[0.88rem] font-medium">{title}</div>
                      <p className="mt-2 text-[0.75rem] leading-relaxed text-white/60">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-8 rounded-[16px] bg-[#171717] p-5">
                <h3 className="text-[1rem] font-semibold">What Our Customers Say</h3>
                <div className="mt-6 space-y-6">
                  {Array.from({ length: 2 }).map((_, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-[#b76d4c]" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Jane Doe</p>
                            <p className="text-[0.72rem] text-white/55">November 3rd, 2025</p>
                          </div>
                          <div className="text-[#FFD400]">{'★★★★★'}</div>
                        </div>
                        <p className="mt-2 text-[0.78rem] leading-relaxed text-white/65">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu luctus risus. Sed eu pharetra mi, vel suscipit nibh.</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button type="button" data-transaction="Load more reviews" className="mt-6 rounded-[10px] bg-[#ED5A2E] px-5 py-3 text-[0.85rem] font-semibold text-white">Load More Reviews</button>
              </section>
            </div>

            <aside className="space-y-5">
              <section className="rounded-[16px] bg-[#171717] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#2b2b2b] p-4 text-[0.8rem] text-white/75">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[0.9rem] text-white/70">Tickets reserved for</p>
                    <div className="text-[2rem] font-semibold">11:32</div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-white/20">
                      <div className="h-full w-[82%] rounded-full bg-[#ED5A2E]" />
                    </div>
                    <p className="mt-2 text-[0.8rem] text-white/55">Complete checkout to secure your tickets</p>
                  </div>
                </div>
              </section>

              <section className="rounded-[16px] bg-[#171717] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                <h3 className="text-[0.95rem] font-semibold text-white/80">Order Total</h3>
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
                  <button type="button" data-transaction="Apply promo code" className="h-11 rounded-[0.35rem] bg-[#ED5A2E] px-4 text-[0.85rem] font-semibold text-white">Apply</button>
                </div>
                <div className="mt-4 flex justify-between border-t border-[#ED5A2E]/30 pt-4">
                  <span className="text-[1rem] font-semibold">Total</span>
                  <span className="text-[1rem] font-semibold text-[#ED5A2E]">N89,500</span>
                </div>
                <Link href="/checkout/payment" data-transaction="Continue to review" className="mt-5 flex w-full items-center justify-center rounded-[10px] bg-[#ED5A2E] py-3 text-[0.9rem] font-semibold text-white transition-colors hover:bg-[#d44d24]">Continue to Review</Link>
                <button type="button" data-transaction="Save checkout for later" onClick={() => window.localStorage.setItem("trck-checkout-progress", "saved")} className="mt-3 w-full rounded-[10px] border border-[#ED5A2E] py-3 text-[0.9rem] font-semibold text-white transition-colors hover:bg-[#3a2721]">Save for later</button>
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

          <div className="mt-16">
            <Footer />
          </div>
        </div>
      </section>

      <section className="lg:hidden px-4 py-4">
        <div className="mx-auto max-w-[28rem]">
          <div className="flex items-center justify-between pb-4">
            <button className="text-[1.2rem]"><ChevronLeft className="h-5 w-5" /></button>
            <div className="text-[0.95rem] font-semibold">Review Your Order</div>
            <div />
          </div>

          <div className="rounded-[16px] bg-[#141414] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <div className="flex items-center gap-3">
              <Image src="/event-feature.jpg" alt="event" width={72} height={72} className="h-[72px] w-[72px] rounded-[12px] object-cover" />
              <div>
                <h1 className="text-[0.95rem] font-semibold">5IVE LIVE AT 02 ARENA</h1>
                <div className="mt-2 text-[0.75rem] text-white/75">Friday, Nov 15, 2024</div>
                <div className="mt-1 text-[0.75rem] text-white/75">02 Arena, London, United Kingdom</div>
              </div>
            </div>
            <div className="mt-4 border-t border-[#ED5A2E]/40 pt-4">
              <Stepper />
            </div>
          </div>

          <div className="mt-4 rounded-[16px] bg-[#171717] p-4">
            <div className="text-center text-[1.05rem] font-semibold">Review Your Order</div>
            <div className="mt-4 rounded-[14px] bg-[#2b2b2b] p-4">
              <div className="flex items-center gap-2 text-white/75">
                <Clock3 className="h-4 w-4" />
                <span className="text-[0.82rem]">Tickets reserved for</span>
              </div>
              <div className="mt-3 text-[1.6rem] font-semibold">11:32</div>
              <div className="mt-3 h-1.5 rounded-full bg-white/20"><div className="h-full w-[82%] rounded-full bg-[#ED5A2E]" /></div>
              <p className="mt-3 text-[0.78rem] text-white/55">Complete checkout to secure your tickets</p>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <section className="rounded-[16px] bg-[#171717] p-4">
              <h2 className="text-[0.95rem] font-semibold">Select Tickets</h2>
              <div className="mt-3 space-y-3">
                {ticketCards.map((card) => (
                  <div key={card.name} className={`rounded-[14px] p-4 ${card.highlighted ? "shadow-[0_0_0_1px_rgba(237,90,46,0.65),0_0_18px_rgba(237,90,46,0.18)]" : "bg-[#1f1f1f]"}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[0.92rem] font-semibold">{card.name}</h3>
                        <p className="mt-1 text-[0.74rem] text-white/55">{card.subtitle}</p>
                      </div>
                      <span className="rounded-[8px] bg-[#ED5A2E] px-2 py-1 text-[0.65rem]">{card.badge}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-[1.4rem] font-semibold text-[#ED5A2E]">{card.price}</div>
                      <div className="flex items-center gap-2">
                        <button className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#5b3c32] text-white"><Minus className="h-3.5 w-3.5" /></button>
                        <span className="w-5 text-center">1</span>
                        <button className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#5b3c32] text-white"><Plus className="h-3.5 w-3.5" /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[16px] bg-[#171717] p-4">
              <h2 className="text-[0.95rem] font-semibold">Order Total</h2>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-[0.9rem] font-semibold">VIP PACKAGE</p>
                  <p className="text-[0.72rem] text-white/45">Quantity: 1</p>
                </div>
                <p className="text-[0.95rem] font-semibold text-[#ED5A2E]">N80,000</p>
              </div>
              <div className="mt-3 space-y-1 border-t border-[#ED5A2E]/30 pt-3 text-[0.78rem] text-white/70">
                <div className="flex justify-between"><span>Subtotal</span><span>N80,000</span></div>
                <div className="flex justify-between"><span>Service Fee</span><span>N5,000</span></div>
                <div className="flex justify-between"><span>Tax</span><span>N4,500</span></div>
              </div>
              <div className="mt-3 flex gap-2">
                <input className="h-10 flex-1 rounded-[0.35rem] border border-[#ED5A2E] bg-[#5a3b31] px-3 text-[0.82rem] text-white placeholder:text-white/50" placeholder="Promo Code" />
                <button className="h-10 rounded-[0.35rem] bg-[#ED5A2E] px-4 text-[0.82rem] font-semibold text-white">Apply</button>
              </div>
              <div className="mt-3 flex justify-between border-t border-[#ED5A2E]/30 pt-3">
                <span className="text-[0.95rem] font-semibold">Total</span>
                <span className="text-[0.95rem] font-semibold text-[#ED5A2E]">N89,500</span>
              </div>
              <Link href="/checkout/payment" className="mt-4 flex w-full items-center justify-center rounded-[10px] bg-[#ED5A2E] py-3 text-[0.85rem] font-semibold text-white transition-colors hover:bg-[#d44d24]">Continue to Review</Link>
              <button type="button" onClick={() => window.localStorage.setItem("trck-checkout-progress", "saved")} className="mt-3 w-full rounded-[10px] border border-[#ED5A2E] py-3 text-[0.85rem] font-semibold text-white transition-colors hover:bg-[#3a2721]">Save for later</button>
            </section>

            <section className="rounded-[16px] bg-[#171717] p-4">
              <h2 className="text-[0.95rem] font-semibold">Ticket Holder Details</h2>
              <div className="mt-3 space-y-3">
                {[
                  ["First Name *", "John"],
                  ["Last Name *", "Doe"],
                  ["Email Address *", "johndoe@gmail.com"],
                  ["Phone Number *", "+234 5678901234"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <label className="mb-1 block text-[0.78rem] text-white/75">{label}</label>
                    <div className="rounded-[0.45rem] bg-[#2b2b2b] px-3 py-3 text-[0.82rem] text-white/55">{value}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[16px] bg-[#171717] p-4">
              <h2 className="text-[0.95rem] font-semibold">Special Requests (Optional)</h2>
              <textarea aria-label="Special requests" placeholder="Any special requirements? (dietary, accessibility, etc)" className="mt-3 min-h-20 w-full resize-y rounded-[0.45rem] border border-white/20 bg-[#2b2b2b] px-3 py-3 text-[0.82rem] text-white outline-none placeholder:text-white/35 focus:ring-1 focus:ring-[#ED5A2E]" />
              <button type="button" data-transaction="Submit special requests" className="mt-3 rounded-[0.45rem] bg-[#ED5A2E] px-4 py-2 text-[0.82rem] font-semibold">Submit</button>
            </section>

            <section className="rounded-[16px] bg-[#171717] p-4">
              <h2 className="text-[0.95rem] font-semibold">Important Information &amp; Policies</h2>
              <div className="mt-3 space-y-3 text-[0.78rem] text-white/70">
                <div><p className="font-medium text-white">Event Policies</p><p className="mt-1">Please arrive 30 minutes before the event start time. Late arrivals may not be admitted until a suitable break.</p></div>
                <div><p className="font-medium text-white">Refund Policy</p><p className="mt-1">Full refund available up to 24 hours before the event. No refunds after this period.</p></div>
                <div><p className="font-medium text-white">Age Restrictions</p><p className="mt-1">This event is 18+ only. Valid government-issued ID required at entry. No exceptions.</p></div>
                <div><p className="font-medium text-white">Health &amp; Safety</p><p className="mt-1">All attendees must follow venue health and safety guidelines. Masks may be required.</p></div>
                <div className="pt-1 text-[0.74rem] text-[#ED5A2E]">Read full terms and conditions →</div>
              </div>
            </section>

            <section className="rounded-[16px] bg-[#171717] p-4">
              <h2 className="text-[0.95rem] font-semibold">FAQs</h2>
              <div className="mt-3 space-y-3">
                {["Can I attend individual events?", "What’s the cancellation policy?", "Is there parking available?", "Are recordings available?", "Are there age restrictions?"].map((q, idx) => (
                  <details key={q} className="border-b border-[#ED5A2E] pb-3 group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[0.8rem]"><span>{q}</span><ChevronDown className="h-4 w-4 text-[#ED5A2E] transition-transform group-open:rotate-180" /></summary>
                    <p className="mt-2 text-[0.72rem] leading-relaxed text-[#ED5A2E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit justo a est pellentesque pulvinar.</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="rounded-[16px] bg-[#171717] p-4">
              <h2 className="text-[0.95rem] font-semibold">Why Book with Trck?</h2>
              <div className="mt-4 grid gap-4">
                {["Secure Payment", "Instant Confirmation", "Best Price Guarantee"].map((title) => (
                  <div key={title} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ED5A2E]/75"><CheckCircle2 className="h-4 w-4" /></div>
                    <div>
                      <div className="text-[0.84rem] font-medium">{title}</div>
                      <div className="text-[0.72rem] text-white/55">Your payment information is encrypted and secure</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[16px] bg-[#171717] p-4">
              <h2 className="text-[0.95rem] font-semibold">What Our Customers Say</h2>
              <div className="mt-4 space-y-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#b76d4c]" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[0.88rem] font-semibold">Jane Doe</p>
                          <p className="text-[0.68rem] text-white/55">November 3rd, 2025</p>
                        </div>
                        <div className="text-[#FFD400]">{'★★★★★'}</div>
                      </div>
                      <p className="mt-2 text-[0.72rem] leading-relaxed text-white/65">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu luctus risus. Sed eu pharetra mi, vel suscipit nibh.</p>
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" data-transaction="Load more reviews" className="mt-4 rounded-[10px] bg-[#ED5A2E] px-4 py-3 text-[0.82rem] font-semibold text-white">Load More Reviews</button>
            </section>
          </div>

          <div className="mt-8">
            <Footer />
          </div>
        </div>
      </section>
    </main>
  );
}
