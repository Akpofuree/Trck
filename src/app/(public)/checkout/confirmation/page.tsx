"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Check, CalendarDays, Download, Share2, MapPin, Ticket, Clock3, CircleDot, ShieldCheck, QrCode } from "lucide-react";
import { Logo } from "@/components/shared/logo";

function Footer() {
  return (
    <footer className="hidden border-t border-white/10 bg-black px-6 py-12 text-white lg:px-16">
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
        <div className="border-b border-[#ED5A2E]/40 bg-[#151515] px-8 py-4">
          <div className="mx-auto flex max-w-[1440px] items-center gap-4">
            <button className="text-[1.2rem] text-white/90"><ChevronLeft className="h-5 w-5" /></button>
            <Image src="/event-feature.jpg" alt="event" width={88} height={88} className="h-[72px] w-[72px] rounded-[12px] object-cover" />
            <div className="min-w-0 flex-1">
              <h1 className="text-[1rem] font-semibold">5IVE LIVE AT 02 ARENA</h1>
              <div className="mt-2 flex flex-wrap items-center gap-6 text-[0.82rem] text-white/75">
                <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#ED5A2E]" /> Friday, Nov 15, 2024</span>
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#ED5A2E]" /> 02 Arena, London, United Kingdom</span>
              </div>
            </div>
            <Link href="/" className="ml-auto inline-flex items-center">
              <Logo width={110} height={32} className="h-6 w-auto" />
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] px-8 py-10">
          <div className="rounded-[20px] bg-[#171717] p-8">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#ED5A2E] text-white shadow-[0_0_0_8px_rgba(237,90,46,0.18)]">
              <Check className="h-12 w-12" />
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-[2rem] font-semibold">Booking Confirmed!</h2>
              <p className="mt-2 text-[0.95rem] text-white/70">Your tickets are ready and waiting for you</p>
            </div>
            <div className="mx-auto mt-5 w-fit rounded-[10px] bg-[#2b2b2b] px-4 py-3 text-[0.9rem] text-white/80">
              Order ID - #TRK-2024-0547 <button className="ml-2 text-white/55">⧉</button>
            </div>
            <div className="mt-5 text-center text-[0.9rem] text-white/80">
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-white/70" /> Confirmation email sent to john.doe@example.com</span>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button type="button" data-transaction="Download tickets" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-[10px] border border-[#ED5A2E] bg-white px-5 py-3 text-[0.92rem] font-medium text-[#ED5A2E] transition-colors hover:bg-[#FDDDD5]">
                Download Tickets <Download className="h-4 w-4" />
              </button>
              <button type="button" data-transaction="Add to calendar" onClick={() => window.open("https://calendar.google.com/calendar/render", "_blank", "noopener,noreferrer")} className="inline-flex items-center gap-2 rounded-[10px] border border-[#ED5A2E] bg-white px-5 py-3 text-[0.92rem] font-medium text-[#ED5A2E] transition-colors hover:bg-[#FDDDD5]">
                Add To Calendar <CalendarDays className="h-4 w-4" />
              </button>
              <Link href="/checkout/share" data-transaction="Share event" className="inline-flex items-center gap-2 rounded-[10px] border border-[#ED5A2E] bg-white px-5 py-3 text-[0.92rem] font-medium text-[#ED5A2E] transition-colors hover:bg-[#FDDDD5]">
                Share Event <Share2 className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <section>
                <h3 className="mb-4 text-[1.5rem] font-semibold">Your Digital Ticket</h3>
                <div className="overflow-hidden rounded-[18px] bg-[#171717] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
                  <div className="border-b border-[#ED5A2E]/40 p-5">
                    <div className="inline-flex rounded-full bg-[#ED5A2E] px-3 py-1 text-[0.75rem] font-semibold">VIP Package</div>
                    <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                      <div>
                        <h4 className="text-[1.35rem] font-semibold">5IVE LIVE AT 02 ARENA</h4>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                          <div>
                            <div className="text-[0.75rem] text-white/55">Date and Time</div>
                            <div className="mt-1 text-[0.9rem]">Nov 15, 2024 · 7:00 PM</div>
                          </div>
                          <div>
                            <div className="text-[0.75rem] text-white/55">Location</div>
                            <div className="mt-1 text-[0.9rem]">02 Arena, London, United Kingdom</div>
                          </div>
                          <div>
                            <div className="text-[0.75rem] text-white/55">Ticket Holder</div>
                            <div className="mt-1 text-[0.9rem]">John Doe</div>
                          </div>
                          <div>
                            <div className="text-[0.75rem] text-white/55">Ticket ID</div>
                            <div className="mt-1 text-[0.9rem]">GA-2024-001</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end gap-5 p-5 text-[0.88rem] text-white/80">
                    <div className="h-32 w-32 shrink-0 rounded-[16px] bg-[repeating-linear-gradient(90deg,#fff_0,#fff_4px,#000_4px,#000_8px)] p-3">
                      <div className="flex h-full items-center justify-center rounded-[10px] bg-white text-black text-[0.85rem] font-semibold">QR</div>
                    </div>
                    <div>
                      <div className="font-medium text-white">Show this QR code at entry</div>
                      <div className="mt-1 text-white/55">Present this code at the venue entrance for quick check-in</div>
                    </div>
                    <button type="button" data-transaction="View ticket details" className="rounded-[10px] bg-[#ED5A2E] px-4 py-3 text-[0.85rem] font-semibold text-white">View Details</button>
                  </div>
                  <div className="border-t border-[#ED5A2E]/40 bg-[#ED5A2E] px-5 py-3 text-[0.8rem] text-white">Priority Entry - Skip the line with VIP access</div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 text-[1.5rem] font-semibold">What&apos;s Next?</h3>
                <div className="rounded-[18px] bg-[#171717] p-6">
                  <div className="space-y-7">
                    {[
                      ["Confirmation Email Sent", "Check your inbox for booking details", "check"],
                      ["Digital Tickets Ready", "Your tickets are available for download", "check"],
                      ["Reminder Email", "We&apos;ll send you a reminder 24 hours before the event", "bell"],
                      ["Arrive at Venue", "Gates open at 6:30 PM - arrive early for best seats", "pin"],
                      ["Event Starts", "Show begins promptly at 7:00 PM", "note"],
                    ].map(([title, desc], idx) => (
                      <div key={title as string} className="grid grid-cols-[40px_1fr] gap-4">
                        <div className="flex flex-col items-center">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#ED5A2E] text-[#ED5A2E]">
                            {idx < 2 ? <Check className="h-4 w-4" /> : idx === 2 ? <Clock3 className="h-4 w-4" /> : idx === 3 ? <MapPin className="h-4 w-4" /> : <Ticket className="h-4 w-4" />}
                          </div>
                          {idx < 4 ? <div className="mt-2 h-12 w-px bg-[#ED5A2E]/80" /> : null}
                        </div>
                        <div>
                          <div className={`text-[0.95rem] font-semibold ${idx < 2 ? "text-[#ED5A2E]" : "text-white"}`}>{title as string}</div>
                          <div className="mt-1 text-[0.8rem] text-white/70">{desc as string}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 text-[1.5rem] font-semibold">Location</h3>
                <div className="rounded-[18px] bg-[#171717] p-6">
                  <Image src="/event-feature.jpg" alt="Location map" width={1200} height={540} className="h-[330px] w-full rounded-[10px] object-cover object-center" />
                  <div className="mt-6">
                    <h4 className="text-[1.25rem] font-medium">02 Arena</h4>
                    <p className="mt-2 text-[0.92rem] text-white/80">Peninsula Square London SE10 0DX United Kingdom</p>
                    <button type="button" data-transaction="Get directions" className="mt-5 inline-flex items-center gap-2 rounded-[10px] bg-[#ED5A2E] px-4 py-3 text-[0.85rem] font-semibold text-white">
                      <MapPin className="h-4 w-4" /> Get Directions
                    </button>
                  </div>
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {[
                      ["Parking", "Street parking available. Paid garage 2 blocks away on 5th Ave."],
                      ["Public Transport", "Subway: L train to 14th St. Bus: M14 to Main St."],
                      ["Accessibility", "Wheelchair accessible entrance and restrooms available."],
                      ["Nearby", "2 blocks from Central Plaza, across from City Museum."],
                    ].map(([title, desc]) => (
                      <div key={title as string} className="flex items-start gap-3">
                        <div className="mt-1 text-[#ED5A2E]"><CircleDot className="h-4 w-4" /></div>
                        <div>
                          <h5 className="text-[1rem] font-medium">{title as string}</h5>
                          <p className="mt-1 text-[0.84rem] text-white/75">{desc as string}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <aside className="space-y-5">
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
                <div className="mt-4 rounded-[14px] bg-[#232323] p-4">
                  <div className="text-[0.85rem] text-white/70">Payment Method</div>
                  <div className="mt-2 text-[1rem] font-semibold">•••• •••• 1234</div>
                </div>
                <button type="button" data-transaction="Download receipt" className="mt-4 w-full rounded-[10px] bg-[#ED5A2E] py-3 text-[0.95rem] font-semibold text-white">Download Receipt</button>
                <div className="mt-4 space-y-3 border-t border-[#ED5A2E]/30 pt-4 text-[0.8rem] text-white/70">
                  <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#ED5A2E]" /> Secure checkout</div>
                  <div className="flex items-center gap-2"><Ticket className="h-4 w-4 text-[#ED5A2E]" /> Instant delivery</div>
                  <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#ED5A2E]" /> Free cancellation</div>
                </div>
                <div className="mt-5 border-t border-[#ED5A2E]/30 pt-4 text-center text-[0.82rem] text-[#ED5A2E]">Need help? Chat with us</div>
                <div className="mt-3 text-center text-[0.74rem] text-white/55">View seating chart · Event details · FAQs</div>
              </section>
            </aside>
          </div>

          <section className="mt-12 rounded-[18px] bg-[#171717] p-6 text-center">
            <h3 className="text-[1.4rem] font-semibold">See you at the event! 🎉</h3>
            <p className="mx-auto mt-3 max-w-[760px] text-[0.9rem] text-white/70">
              We&apos;re excited to have you join us for an unforgettable experience. If you have any questions, don&apos;t hesitate to reach out to our support team.
            </p>
            <div className="mt-5 text-[0.85rem] text-[#ED5A2E]">My Tickets · Browse Events · Help Center · Contact Us</div>
          </section>

          <div className="mt-16">
            <Footer />
          </div>
        </div>
      </section>

      <section className="lg:hidden px-4 py-4">
          <div className="mx-auto max-w-[28rem] space-y-4">
          <div className="flex items-center justify-between pb-2">
            <button className="text-[1.2rem]"><ChevronLeft className="h-5 w-5" /></button>
            <div className="text-[0.95rem] font-semibold">Booking Confirmed</div>
            <div />
          </div>

          <section className="rounded-[16px] bg-[#171717] p-5 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#ED5A2E]"><Check className="h-10 w-10" /></div>
            <h2 className="mt-5 text-[1.35rem] font-semibold">Booking Confirmed!</h2>
            <p className="mt-2 text-[0.82rem] text-white/70">Your tickets are ready and waiting for you</p>
            <div className="mx-auto mt-4 w-fit rounded-[10px] bg-[#2b2b2b] px-4 py-3 text-[0.82rem]">Order ID - #TRK-2024-0547</div>
            <div className="mt-4 text-[0.78rem] text-white/70">Confirmation email sent to john.doe@example.com</div>
            <div className="mt-5 grid grid-cols-1 gap-2">
              <button type="button" data-transaction="Download tickets" onClick={() => window.print()} className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#ED5A2E] bg-white px-2 py-3 text-[0.72rem] font-medium text-[#ED5A2E] transition-colors hover:bg-[#FDDDD5]">Download Tickets <Download className="h-4 w-4" /></button>
              <button type="button" data-transaction="Add to calendar" onClick={() => window.open("https://calendar.google.com/calendar/render", "_blank", "noopener,noreferrer")} className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#ED5A2E] bg-white px-2 py-3 text-[0.72rem] font-medium text-[#ED5A2E] transition-colors hover:bg-[#FDDDD5]">Add To Calendar <CalendarDays className="h-4 w-4" /></button>
              <Link href="/checkout/share" data-transaction="Share event" className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#ED5A2E] bg-white px-2 py-3 text-[0.72rem] font-medium text-[#ED5A2E] transition-colors hover:bg-[#FDDDD5]">Share event <Share2 className="h-4 w-4" /></Link>
            </div>
            <div className="mt-2">
              <button type="button" data-transaction="View order summary" className="w-full rounded-[10px] bg-[#ED5A2E] px-2 py-3 text-[0.72rem] font-medium text-white">View Order Summary</button>
            </div>
          </section>

          <SectionCard title="Your Digital Ticket">
            <div className="rounded-[16px] bg-[#171717] p-4">
              <div className="inline-flex h-6 w-[78px] items-center justify-center rounded-[4px] bg-[#ED5A2E] text-[0.72rem] font-semibold text-white">VIP Package</div>
              <h3 className="mt-6 text-[1.55rem] font-semibold tracking-tight">5IVE LIVE AT 02 ARENA</h3>
              <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-1 h-4 w-4 text-[#ED5A2E]" />
                  <div>
                    <div className="text-[0.78rem] text-white/70">Date and Time</div>
                    <div className="mt-2 text-[0.92rem] font-medium">Nov 15, 2024 · 7:00pm</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-[#ED5A2E]" />
                  <div>
                    <div className="text-[0.78rem] text-white/70">Location</div>
                    <div className="mt-2 text-[0.92rem] font-medium">02 Arena, London, United Kingdom</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-4 w-4 items-center justify-center text-[#ED5A2E]"><span className="text-[1.2rem] leading-none">●</span></div>
                  <div>
                    <div className="text-[0.78rem] text-white/70">Ticket Holder</div>
                    <div className="mt-2 text-[0.92rem] font-medium">John Doe</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-4 w-4 items-center justify-center text-[#ED5A2E]"><span className="text-[1.2rem] leading-none">#</span></div>
                  <div>
                    <div className="text-[0.78rem] text-white/70">Ticket ID</div>
                    <div className="mt-2 text-[0.92rem] font-medium">GA-2024-001</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 border-t border-dashed border-white/30" />
              <div className="mt-6 flex items-center gap-4">
                <div className="h-[126px] w-[126px] rounded-[14px] bg-white p-2">
                  <QrCode className="h-full w-full text-black" strokeWidth={1.8} />
                </div>
                <div className="flex-1">
                  <div className="text-[0.95rem] font-medium">Show this QR code at entry</div>
                  <p className="mt-3 text-[0.82rem] text-white/70">Present this at the venue for quick check-in</p>
                  <button type="button" data-transaction="View ticket details" className="mt-4 rounded-[8px] bg-[#ED5A2E] px-4 py-2 text-[0.78rem] font-medium text-white">View Details</button>
                </div>
              </div>
            </div>
            <div className="border-t border-[#ED5A2E]/40 bg-[#ED5A2E] px-5 py-3 text-[0.8rem] text-white">
              <span className="inline-flex items-center gap-2"><Ticket className="h-4 w-4" /> Priority Entry - Skip the line with VIP access</span>
            </div>
          </SectionCard>

          <SectionCard title="What&apos;s Next?">
            <div className="space-y-4">
              {["Confirmation Email Sent", "Digital Tickets Ready", "Reminder Email", "Arrive at Venue", "Event Starts"].map((title) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full border border-[#ED5A2E]" />
                  <div>
                    <div className="text-[0.88rem] font-medium text-[#ED5A2E]">{title}</div>
                    <div className="mt-1 text-[0.72rem] text-white/65">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Location">
            <Image src="/event-feature.jpg" alt="Location map" width={900} height={500} className="h-[220px] w-full rounded-[10px] object-cover" />
            <div className="mt-4 text-[0.95rem] font-medium">02 Arena</div>
            <div className="mt-2 text-[0.8rem] text-white/75">Peninsula Square London SE10 0DX United Kingdom</div>
          </SectionCard>

          <SectionCard title="Add to Calendar">
            <div className="grid grid-cols-2 gap-3">
              {["Google", "Apple", "Outlook", "Download"].map((item) => (
                <div key={item} className="rounded-[12px] bg-[#2b2b2b] p-3 text-center text-[0.8rem]">{item}</div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Share This Event">
            <div className="grid grid-cols-4 gap-3">
              {["Whatsapp", "Facebook", "X", "Copy Link"].map((item) => (
                <div key={item} className="rounded-[12px] bg-[#2b2b2b] p-3 text-center text-[0.72rem]">{item}</div>
              ))}
            </div>
          </SectionCard>

          <section className="text-center">
            <h3 className="text-[1.1rem] font-semibold">See you at the event! 🎉</h3>
            <p className="mt-2 text-[0.8rem] text-white/65">We&apos;re excited to have you join us for an unforgettable experience.</p>
          </section>

          <div className="hidden"><Footer /></div>
        </div>
      </section>
    </main>
  );
}
