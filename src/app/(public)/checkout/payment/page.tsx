"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronLeft, Clock3, ShieldCheck, Ticket, CircleDot } from "lucide-react";
import { Logo } from "@/components/shared/logo";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider text-white">Contact</h4>
            <p className="mb-4 text-[0.88rem] font-semibold text-[#ED5A2E]">info@getontrck.com</p>
          </div>
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5 text-[0.85rem] text-white/70">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">How it works</Link></li>
              <li><Link href="#">Features</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-2.5 text-[0.85rem] text-white/70">
              <li><Link href="#">Privacy policy</Link></li>
              <li><Link href="#">Terms of service</Link></li>
              <li><Link href="#">Acceptable use policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider text-white">Support</h4>
            <ul className="space-y-2.5 text-[0.85rem] text-white/70">
              <li><Link href="#">FAQ</Link></li>
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
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-[0.95rem] font-semibold ${idx === 1 ? "bg-[#ED5A2E] text-white" : "border border-[#ED5A2E]/50 text-white/70"}`}>{num}</div>
            <div className="mt-2 text-[0.78rem] text-white/70">{label}</div>
          </div>
          {idx < 2 ? <div className="hidden h-px w-28 bg-white/20 md:block" /> : null}
        </div>
      ))}
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[16px] bg-[#171717] p-5">
      <h3 className="text-[1rem] font-semibold">{title}</h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="hidden lg:block">
        <Header />
        <div className="mx-auto max-w-[1440px] px-8 py-10">
          <Stepper />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
            <div>
              <h2 className="text-[2rem] font-semibold">Review Your Order</h2>

              <SectionCard title="Your Tickets">
                <div className="rounded-[14px] bg-[#232323] p-4">
                  <div className="flex items-center gap-4">
                    <Image src="/event-feature.jpg" alt="event" width={120} height={84} className="h-[84px] w-[120px] rounded-[10px] object-cover" />
                    <div className="flex-1">
                      <h4 className="text-[1rem] font-semibold">5IVE LIVE AT 02 ARENA</h4>
                      <div className="mt-2 flex flex-wrap items-center gap-5 text-[0.76rem] text-white/75">
                        <span className="inline-flex items-center gap-2"><Ticket className="h-3.5 w-3.5 text-[#ED5A2E]" /> Friday, Nov 15, 2024</span>
                        <span className="inline-flex items-center gap-2"><CircleDot className="h-3.5 w-3.5 text-[#ED5A2E]" /> 02 Arena, London, United Kingdom</span>
                      </div>
                      <div className="mt-2 text-[0.78rem] text-[#ED5A2E]">View event details</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-[14px] bg-[#232323] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-[0.95rem] font-semibold">VIP Package</h4>
                      <p className="mt-1 text-[0.78rem] text-white/55">Quantity: 1 × N80,000</p>
                    </div>
                    <p className="text-[0.95rem] font-semibold text-[#ED5A2E]">N80,000</p>
                  </div>
                  <div className="mt-4 border-t border-[#ED5A2E]/30 pt-4 text-[0.8rem] text-white/70">
                    <div className="mb-2 text-[#ED5A2E]">What&apos;s included ▾</div>
                    <div className="space-y-2">
                      <div>All General Admission benefits</div>
                      <div>Priority seating in VIP section</div>
                      <div>Meet &amp; greet with host and performers</div>
                    </div>
                  </div>
                </div>
              </SectionCard>

              <SectionCard title="Ticket Holder Details">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    ["First Name *", "John"],
                    ["Last Name *", "Doe"],
                    ["Email Address *", "johndoe@gmail.com"],
                    ["Phone Number *", "+234 5678901234"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <label className="mb-2 block text-[0.8rem] text-white/75">{label}</label>
                      <div className="rounded-[0.45rem] bg-[#2b2b2b] px-3 py-3 text-[0.85rem] text-white/55">{value}</div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard title="Special Requests (Optional)">
                <div className="rounded-[0.45rem] border border-white/20 bg-[#2b2b2b] px-3 py-3 text-[0.85rem] text-white/35">
                  Any special requirements? (dietary, accessibility, etc)
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="rounded-[0.45rem] bg-[#ED5A2E] px-4 py-2 text-[0.85rem] font-semibold text-white">Submit</button>
                </div>
              </SectionCard>

              <SectionCard title="Important Information &amp; Policies">
                <div className="space-y-4 text-[0.8rem] text-white/70">
                  <div><p className="font-medium text-white">Event Policies</p><p className="mt-1">Please arrive 30 minutes before the event start time. Late arrivals may not be admitted until a suitable break.</p></div>
                  <div><p className="font-medium text-white">Refund Policy</p><p className="mt-1">Full refund available up to 24 hours before the event. No refunds after this period.</p></div>
                  <div><p className="font-medium text-white">Age Restrictions</p><p className="mt-1">This event is 18+ only. Valid government-issued ID required at entry. No exceptions.</p></div>
                  <div><p className="font-medium text-white">Health &amp; Safety</p><p className="mt-1">All attendees must follow venue health and safety guidelines. Masks may be required.</p></div>
                  <div className="pt-1 text-[0.75rem] text-[#ED5A2E]">Read full terms and conditions ›</div>
                </div>
              </SectionCard>

              <SectionCard title="FAQs">
                <div className="space-y-4">
                  {["Can I attend individual events?", "What’s the cancellation policy?", "Is there parking available?", "Are recordings available?", "Are there age restrictions?"].map((q, idx) => (
                    <div key={q} className="border-b border-[#ED5A2E] pb-3">
                      <div className="flex items-center justify-between gap-3 text-[0.82rem]">
                        <span>{q}</span>
                        <ChevronDown className="h-4 w-4 text-[#ED5A2E]" />
                      </div>
                      {idx === 4 ? <p className="mt-2 max-w-[620px] text-[0.72rem] leading-relaxed text-[#ED5A2E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit justo a est pellentesque pulvinar.</p> : null}
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard title="Why Book with Trck?">
                <div className="grid gap-4 text-center sm:grid-cols-3">
                  {[
                    ["Secure Payment", "Your payment information is encrypted and secure"],
                    ["Instant Confirmation", "Receive your tickets immediately via email"],
                    ["Best Price Guarantee", "We offer competitive pricing and exclusive deals"],
                  ].map(([title, desc]) => (
                    <div key={title}>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ED5A2E]/75"><ShieldCheck className="h-5 w-5" /></div>
                      <div className="mt-3 text-[0.88rem] font-medium">{title}</div>
                      <p className="mt-2 text-[0.75rem] leading-relaxed text-white/60">{desc}</p>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard title="What Our Customers Say">
                <div className="space-y-6">
                  {Array.from({ length: 2 }).map((_, idx) => (
                    <div key={idx} className="flex items-start gap-4">
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
                <button className="mt-5 rounded-[10px] bg-[#ED5A2E] px-5 py-3 text-[0.85rem] font-semibold text-white">Load More Reviews</button>
              </SectionCard>
            </div>

            <aside className="space-y-5">
              <SectionCard title="">
                <div className="flex items-center gap-3 text-white/75">
                  <Clock3 className="h-4 w-4" />
                  <span className="text-[0.85rem]">Tickets reserved for</span>
                </div>
                <div className="mt-3 text-[1.7rem] font-semibold">11:32</div>
                <div className="mt-3 h-1.5 rounded-full bg-white/20"><div className="h-full w-[82%] rounded-full bg-[#ED5A2E]" /></div>
                <p className="mt-3 text-[0.8rem] text-white/55">Complete checkout to secure your tickets</p>
              </SectionCard>

              <SectionCard title="Order Total">
                <div className="flex items-center justify-between">
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
                <button className="mt-5 w-full rounded-[10px] bg-[#ED5A2E] py-3 text-[0.9rem] font-semibold text-white">Continue to Payment</button>
                <button className="mt-3 w-full rounded-[10px] border border-[#ED5A2E] py-3 text-[0.9rem] font-semibold text-white">Save for later</button>
                <div className="mt-4 space-y-3 border-t border-[#ED5A2E]/30 pt-4 text-[0.8rem] text-white/70">
                  <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#ED5A2E]" /> Secure checkout</div>
                  <div className="flex items-center gap-2"><Ticket className="h-4 w-4 text-[#ED5A2E]" /> Instant delivery</div>
                  <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#ED5A2E]" /> Free cancellation</div>
                </div>
                <div className="mt-5 border-t border-[#ED5A2E]/30 pt-4 text-center text-[0.82rem] text-[#ED5A2E]">Need help? Chat with us</div>
                <div className="mt-3 text-center text-[0.74rem] text-white/55">View seating chart · Event details · FAQs</div>
              </SectionCard>
            </aside>
          </div>
          <div className="mt-16"><Footer /></div>
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
            <div className="mt-4 border-t border-[#ED5A2E]/40 pt-4"><Stepper /></div>
          </div>

          <div className="mt-4 rounded-[16px] bg-[#171717] p-4">
            <div className="text-center text-[1.05rem] font-semibold">Review Your Order</div>
            <div className="mt-4 rounded-[14px] bg-[#2b2b2b] p-4">
              <div className="flex items-center gap-2 text-white/75"><Clock3 className="h-4 w-4" /><span className="text-[0.82rem]">Tickets reserved for</span></div>
              <div className="mt-3 text-[1.6rem] font-semibold">11:32</div>
              <div className="mt-3 h-1.5 rounded-full bg-white/20"><div className="h-full w-[82%] rounded-full bg-[#ED5A2E]" /></div>
              <p className="mt-3 text-[0.78rem] text-white/55">Complete checkout to secure your tickets</p>
            </div>
          </div>

          <SectionCard title="Order Total">
            <div className="flex items-center justify-between">
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
            <button className="mt-4 w-full rounded-[10px] bg-[#ED5A2E] py-3 text-[0.85rem] font-semibold text-white">Continue to Payment</button>
            <button className="mt-3 w-full rounded-[10px] border border-[#ED5A2E] py-3 text-[0.85rem] font-semibold text-white">Save for later</button>
          </SectionCard>

          <SectionCard title="Important Information &amp; Policies">
            <div className="space-y-3 text-[0.78rem] text-white/70">
              <div><p className="font-medium text-white">Event Policies</p><p className="mt-1">Please arrive 30 minutes before the event start time. Late arrivals may not be admitted until a suitable break.</p></div>
              <div><p className="font-medium text-white">Refund Policy</p><p className="mt-1">Full refund available up to 24 hours before the event. No refunds after this period.</p></div>
              <div><p className="font-medium text-white">Age Restrictions</p><p className="mt-1">This event is 18+ only. Valid government-issued ID required at entry. No exceptions.</p></div>
              <div><p className="font-medium text-white">Health &amp; Safety</p><p className="mt-1">All attendees must follow venue health and safety guidelines. Masks may be required.</p></div>
              <div className="pt-1 text-[0.74rem] text-[#ED5A2E]">Read full terms and conditions →</div>
            </div>
          </SectionCard>

          <SectionCard title="Enhance Your Experience">
            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: 4 }).map((_, idx) => (
                <article key={idx} className="overflow-hidden rounded-[12px] bg-[#111111]">
                  <div className="h-[120px] bg-[#999]" />
                  <div className="p-3">
                    <div className="text-[0.82rem] font-medium">Event Merchandise</div>
                    <div className="mt-1 text-[0.68rem] text-white/55">Exclusive event t-shirt and poster</div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[0.82rem] font-semibold text-[#ED5A2E]">N20,000</span>
                      <button className="rounded-[8px] border border-[#ED5A2E] px-2 py-1 text-[0.65rem]">+ Add</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Frequently Asked Questions">
            <div className="space-y-3">
              {["Can I attend individual events?", "What’s the cancellation policy?", "Is there parking available?", "Are recordings available?", "Are there age restrictions?"].map((q, idx) => (
                <div key={q} className="border-b border-[#ED5A2E] pb-3">
                  <div className="flex items-center justify-between gap-3 text-[0.8rem]">
                    <span>{q}</span>
                    <ChevronDown className="h-4 w-4 text-[#ED5A2E]" />
                  </div>
                  {idx === 4 ? <p className="mt-2 text-[0.72rem] leading-relaxed text-[#ED5A2E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit justo a est pellentesque pulvinar.</p> : null}
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Why Book with Trck?">
            <div className="grid gap-4 sm:grid-cols-3">
              {["Secure Payment", "Instant Confirmation", "Best Price Guarantee"].map((title) => (
                <div key={title} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ED5A2E]/75"><ShieldCheck className="h-5 w-5" /></div>
                  <div className="mt-3 text-[0.88rem] font-medium">{title}</div>
                  <p className="mt-2 text-[0.75rem] leading-relaxed text-white/60">Your payment information is encrypted and secure</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="What Our Customers Say">
            <div className="space-y-5">
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
            <button className="mt-4 rounded-[10px] bg-[#ED5A2E] px-5 py-3 text-[0.85rem] font-semibold text-white">Load More Reviews</button>
          </SectionCard>

          <div className="mt-6"><Footer /></div>
        </div>
      </section>
    </main>
  );
}
