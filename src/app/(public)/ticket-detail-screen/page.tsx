"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, CircleCheck, SunMedium, QrCode, BadgeInfo, MapPin, AlertCircle, PlaneTakeoff, Download, WalletCards, ArrowRight, Ticket as TicketIcon, Clock3 } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 gap-8 border-b border-white/10 pb-10 md:grid-cols-4">
          <div>
            <h4 className="mb-3 text-[0.78rem] font-bold uppercase tracking-wider">Contact</h4>
            <p className="text-[0.88rem] font-semibold text-[#ED5A2E]">info@getontrck.com</p>
          </div>
          <div>
            <h4 className="mb-3 text-[0.78rem] font-bold uppercase tracking-wider">Company</h4>
            <div className="space-y-2 text-[0.84rem] text-white/70">
              <p>About Us</p>
              <p>How it works</p>
              <p>Features</p>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-[0.78rem] font-bold uppercase tracking-wider">Legal</h4>
            <div className="space-y-2 text-[0.84rem] text-white/70">
              <p>Privacy policy</p>
              <p>Terms of service</p>
              <p>Acceptable use policy</p>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-[0.78rem] font-bold uppercase tracking-wider">Support</h4>
            <p className="text-[0.84rem] text-white/70">FAQ</p>
          </div>
        </div>
        <div className="pt-6 text-[0.76rem] text-white/40">
          TRCK is a leisure technology platform based in Nigeria. All experiences are provided by independent third-party creators.
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-4 py-4 md:px-6 lg:px-8">
        <div className="mx-auto hidden max-w-[900px] lg:block">
          <p className="mb-3 text-[0.95rem] text-white/45">Ticket Details Screen</p>
          <div className="rounded-[14px] bg-[#151515] px-6 py-5">
            <div className="flex items-center gap-3">
              <ChevronLeft className="h-5 w-5" />
              <span className="text-[1rem] font-semibold">My Tickets</span>
            </div>
            <div className="mt-4 bg-[#2ecc71] px-4 py-3 text-center text-[0.82rem] font-medium text-white">
              <span className="inline-flex items-center gap-2"><CircleCheck className="h-4 w-4" /> Valid Ticket - Ready to Scan</span>
            </div>

            <div className="mt-8 space-y-8">
              <section className="rounded-[16px] bg-[#171717] px-6 py-6">
                <div className="rounded-[8px] bg-[#303030] px-4 py-2 text-[0.78rem] text-white/85">
                  <span className="inline-flex items-center gap-2"><SunMedium className="h-4 w-4" /> Keep your screen brightness high for easy scanning</span>
                </div>
                <div className="mt-6 flex justify-center">
                  <div className="rounded-[16px] bg-white p-2">
                    <QrCode className="h-[220px] w-[220px] text-black" strokeWidth={1.8} />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <p className="text-[0.95rem] text-white/90">Show this to staff at entry</p>
                  <p className="mt-1 text-[0.75rem] text-white/45">Keep screen brightness high</p>
                </div>
                <div className="mx-auto mt-5 max-w-[420px] rounded-[12px] bg-[#303030] px-4 py-4 text-center">
                  <p className="text-[0.78rem] text-white/55">Backup Barcode Number</p>
                  <p className="mt-1 text-[1rem] font-semibold tracking-[0.14em]">7482 9156 3847 2910</p>
                </div>
                <p className="mt-4 text-center text-[0.75rem] text-white/55">Tap QR code to enlarge to fullscreen</p>
              </section>

              <section className="rounded-[16px] bg-[#171717] p-5">
                <p className="text-center text-[0.82rem] text-[#1fd166]"><span className="inline-flex items-center gap-2"><TicketIcon className="h-4 w-4" /> Available offline • Last synced 2 minutes ago</span></p>
              </section>

              <section className="rounded-[16px] bg-[#171717] p-5">
                <span className="inline-flex h-6 w-[78px] items-center justify-center rounded-[4px] bg-[#ED5A2E] text-[0.72rem] font-semibold text-white">VIP Package</span>
                <h1 className="mt-4 text-[1.8rem] font-semibold">5IVE AT 02 ARENA 2025</h1>
                <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-[#ED5A2E]/35 pt-4">
                  <div className="flex items-start gap-3">
                    <BadgeInfo className="mt-1 h-4 w-4 text-[#ED5A2E]" />
                    <div>
                      <p className="text-[0.72rem] text-white/55">Ticket Holder</p>
                      <p className="mt-1 text-[0.82rem] font-medium">John Doe</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BadgeInfo className="mt-1 h-4 w-4 text-[#ED5A2E]" />
                    <div>
                      <p className="text-[0.72rem] text-white/55">Ticket Number</p>
                      <p className="mt-1 text-[0.82rem] font-medium">#TC2025-7482</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-[16px] bg-[#171717] p-5">
                <div className="flex items-center gap-3 text-[0.95rem]">
                  <BadgeInfo className="h-4 w-4 text-[#ED5A2E]" />
                  <span className="font-semibold">Saturday, March 16th, 2025</span>
                </div>
                <div className="mt-3 flex items-center gap-3 text-[0.82rem] text-white/80">
                  <Clock3 className="h-4 w-4 text-[#ED5A2E]" />
                  <span>2PM - 8PM PST</span>
                </div>
                <div className="mt-4 rounded-[10px] bg-[#303030] px-4 py-3 text-[0.78rem] text-white/85">
                  <span className="inline-flex items-center gap-2"><SunMedium className="h-4 w-4 text-[#ED5A2E]" /> Keep your screen brightness high for easy screening</span>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-[#ED5A2E]" />
                  <div>
                    <div className="text-[0.82rem] font-medium">O2 Arena</div>
                    <div className="mt-1 text-[0.78rem] text-white/70">London, United Kingdom</div>
                  </div>
                </div>
              </section>

              <section className="rounded-[16px] bg-[#171717] p-5">
                <div className="grid grid-cols-2 gap-4">
                  <button className="rounded-[14px] bg-[#2b2b2b] px-4 py-5 text-center">
                    <div className="flex justify-center text-[#ED5A2E]"><PlaneTakeoff className="h-6 w-6" /></div>
                    <div className="mt-3 text-[0.9rem] font-medium text-white">Get Directions</div>
                  </button>
                  <button className="rounded-[14px] bg-[#2b2b2b] px-4 py-5 text-center">
                    <div className="flex justify-center text-[#ED5A2E]"><Download className="h-6 w-6" /></div>
                    <div className="mt-3 text-[0.9rem] font-medium text-white">Add To Calendar</div>
                  </button>
                  <button className="rounded-[14px] bg-[#2b2b2b] px-4 py-5 text-center">
                    <div className="flex justify-center text-[#ED5A2E]"><ArrowRight className="h-6 w-6" /></div>
                    <div className="mt-3 text-[0.9rem] font-medium text-white">Call Venue</div>
                  </button>
                  <button className="rounded-[14px] bg-[#2b2b2b] px-4 py-5 text-center">
                    <div className="flex justify-center text-[#ED5A2E]"><AlertCircle className="h-6 w-6" /></div>
                    <div className="mt-3 text-[0.9rem] font-medium text-white">Share</div>
                  </button>
                </div>
              </section>

              <section className="rounded-[16px] bg-[#171717] p-5">
                <h2 className="mb-4 text-[1rem] font-semibold">Entry Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 rounded-[10px] bg-[#303030] p-4">
                    <BadgeInfo className="h-4 w-4 text-[#ED5A2E]" />
                    <div>
                      <p className="text-[0.9rem] font-medium">Doors Open</p>
                      <p className="mt-1 text-[0.72rem] text-white/65">1:30 pm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-[10px] bg-[#303030] p-4">
                    <MapPin className="h-4 w-4 text-[#ED5A2E]" />
                    <div>
                      <p className="text-[0.9rem] font-medium">Entry Location</p>
                      <p className="mt-1 text-[0.72rem] text-white/65">South Entrance, Hall A</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-[10px] bg-[#303030] p-4">
                    <AlertCircle className="h-4 w-4 text-[#ED5A2E]" />
                    <div>
                      <p className="text-[0.9rem] font-medium">ID Required</p>
                      <p className="mt-1 text-[0.72rem] text-white/65">Valid photo ID must match ticket holder&apos;s name</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-[16px] bg-[#171717] p-5">
                <h2 className="mb-4 text-[1rem] font-semibold">Manage Ticket</h2>
                <div className="space-y-3">
                  <button className="flex w-full items-center justify-between rounded-[10px] bg-[#303030] px-4 py-4 text-left">
                    <span className="inline-flex items-center gap-3"><PlaneTakeoff className="h-4 w-4 text-[#ED5A2E]" /> Transfer Ticket</span>
                    <ArrowRight className="h-4 w-4 text-white/80" />
                  </button>
                  <button className="flex w-full items-center justify-between rounded-[10px] bg-[#303030] px-4 py-4 text-left">
                    <span className="inline-flex items-center gap-3"><Download className="h-4 w-4 text-[#ED5A2E]" /> Download as PDF</span>
                    <ArrowRight className="h-4 w-4 text-white/80" />
                  </button>
                  <button className="flex w-full items-center justify-between rounded-[10px] bg-[#303030] px-4 py-4 text-left">
                    <span className="inline-flex items-center gap-3"><WalletCards className="h-4 w-4 text-[#ED5A2E]" /> Add to wallet</span>
                    <ArrowRight className="h-4 w-4 text-white/80" />
                  </button>
                  <button className="flex w-full items-center justify-between rounded-[10px] bg-[#303030] px-4 py-4 text-left">
                    <span className="inline-flex items-center gap-3 text-[#ff4c4c]"><AlertCircle className="h-4 w-4 text-[#ff4c4c]" /> Request Refund</span>
                    <ArrowRight className="h-4 w-4 text-white/80" />
                  </button>
                </div>
              </section>

              <section className="rounded-[16px] bg-[#171717] p-5">
                <h2 className="mb-4 text-[1rem] font-semibold">Need Help?</h2>
                <p className="text-[0.8rem] text-white/70">Our support team is here to assist you with any questions about your ticket or the event</p>
                <button className="mt-4 w-full rounded-[10px] bg-[#ED5A2E] py-3 text-[0.9rem] font-semibold text-white">Chat with support</button>
              </section>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[520px] md:max-w-[720px] lg:hidden">
          <p className="mb-3 text-[0.95rem] text-white/45">Ticket Details Screen (Mobile)</p>
          <div className="rounded-[12px] bg-[#151515]">
            <div className="flex items-center gap-3 px-5 py-4">
              <ChevronLeft className="h-5 w-5" />
              <span className="text-[1rem] font-semibold">My Tickets</span>
            </div>
            <div className="bg-[#2ecc71] px-4 py-3 text-center text-[0.82rem] font-medium text-white">
              <span className="inline-flex items-center gap-2"><CircleCheck className="h-4 w-4" /> Valid Ticket - Ready to Scan</span>
            </div>

            <div className="px-4 py-6">
              <div className="rounded-[16px] bg-[#171717] px-4 py-4">
                <div className="rounded-[8px] bg-[#303030] px-4 py-2 text-[0.78rem] text-white/85">
                  <span className="inline-flex items-center gap-2"><SunMedium className="h-4 w-4" /> Keep your screen brightness high for easy scanning</span>
                </div>

                <div className="mt-5 flex justify-center">
                  <div className="rounded-[16px] bg-white p-2">
                    <QrCode className="h-[150px] w-[150px] text-black" strokeWidth={1.8} />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <p className="text-[0.9rem] text-white/90">Show this to staff at entry</p>
                  <p className="mt-1 text-[0.75rem] text-white/45">Keep screen brightness high</p>
                </div>

                <div className="mt-5 rounded-[12px] bg-[#303030] px-4 py-4 text-center">
                  <p className="text-[0.78rem] text-white/55">Backup Barcode Number</p>
                  <p className="mt-1 text-[1rem] font-semibold tracking-[0.14em]">7482 9156 3847 2910</p>
                </div>

                <p className="mt-4 text-center text-[0.75rem] text-white/55">Tap QR code to enlarge to fullscreen</p>
              </div>
            </div>

            <div className="px-4 pb-5">
              <p className="text-center text-[0.82rem] text-[#1fd166]"><span className="inline-flex items-center gap-2"><TicketIcon className="h-4 w-4" /> Available offline • Last synced 2 minutes ago</span></p>
            </div>

            <div className="px-4 pb-5">
              <div className="rounded-[16px] bg-[#171717] p-4">
                <span className="inline-flex h-6 w-[78px] items-center justify-center rounded-[4px] bg-[#ED5A2E] text-[0.72rem] font-semibold text-white">VIP Package</span>
                <h1 className="mt-4 text-[1.7rem] font-semibold">5IVE AT 02 ARENA 2025</h1>
                <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#ED5A2E]/35 pt-4">
                  <div className="flex items-start gap-3">
                    <BadgeInfo className="mt-1 h-4 w-4 text-[#ED5A2E]" />
                    <div>
                      <p className="text-[0.72rem] text-white/55">Ticket Holder</p>
                      <p className="mt-1 text-[0.82rem] font-medium">John Doe</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BadgeInfo className="mt-1 h-4 w-4 text-[#ED5A2E]" />
                    <div>
                      <p className="text-[0.72rem] text-white/55">Ticket Number</p>
                      <p className="mt-1 text-[0.82rem] font-medium">#TC2025-7482</p>
                    </div>
                  </div>
                </div>
                <button className="mt-5 w-full rounded-[12px] bg-[#ED5A2E] py-4 text-[0.95rem] font-semibold text-white">View Event Details</button>
              </div>
            </div>

            <div className="px-4 pb-5">
              <h2 className="mb-4 text-[1rem] font-semibold">Entry Information</h2>
              <div className="space-y-3 rounded-[16px] bg-[#171717] p-4">
                <div className="flex items-center gap-3 rounded-[10px] bg-[#303030] p-4">
                  <BadgeInfo className="h-4 w-4 text-[#ED5A2E]" />
                  <div>
                    <p className="text-[0.9rem] font-medium">Doors Open</p>
                    <p className="mt-1 text-[0.72rem] text-white/65">1:30 pm</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-[10px] bg-[#303030] p-4">
                  <MapPin className="h-4 w-4 text-[#ED5A2E]" />
                  <div>
                    <p className="text-[0.9rem] font-medium">Entry Location</p>
                    <p className="mt-1 text-[0.72rem] text-white/65">South Entrance, Hall A</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-[10px] bg-[#303030] p-4">
                  <AlertCircle className="h-4 w-4 text-[#ED5A2E]" />
                  <div>
                    <p className="text-[0.9rem] font-medium">ID Required</p>
                    <p className="mt-1 text-[0.72rem] text-white/65">Valid photo ID must match ticket holder&apos;s name</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 pb-5">
              <h2 className="mb-4 text-[1rem] font-semibold">Manage Ticket</h2>
              <div className="space-y-3 rounded-[16px] bg-[#171717] p-4">
                <button className="flex w-full items-center justify-between rounded-[10px] bg-[#303030] px-4 py-4 text-left">
                  <span className="inline-flex items-center gap-3"><PlaneTakeoff className="h-4 w-4 text-[#ED5A2E]" /> Transfer Ticket</span>
                  <ArrowRight className="h-4 w-4 text-white/80" />
                </button>
                <button className="flex w-full items-center justify-between rounded-[10px] bg-[#303030] px-4 py-4 text-left">
                  <span className="inline-flex items-center gap-3"><Download className="h-4 w-4 text-[#ED5A2E]" /> Download as PDF</span>
                  <ArrowRight className="h-4 w-4 text-white/80" />
                </button>
                <button className="flex w-full items-center justify-between rounded-[10px] bg-[#303030] px-4 py-4 text-left">
                  <span className="inline-flex items-center gap-3"><WalletCards className="h-4 w-4 text-[#ED5A2E]" /> Add to wallet</span>
                  <ArrowRight className="h-4 w-4 text-white/80" />
                </button>
                <button className="flex w-full items-center justify-between rounded-[10px] bg-[#303030] px-4 py-4 text-left">
                  <span className="inline-flex items-center gap-3 text-[#ff4c4c]"><AlertCircle className="h-4 w-4 text-[#ff4c4c]" /> Request Refund</span>
                  <ArrowRight className="h-4 w-4 text-white/80" />
                </button>
              </div>
            </div>

            <div className="px-4 pb-8">
              <h2 className="mb-4 text-[1rem] font-semibold">Need Help?</h2>
              <div className="rounded-[16px] bg-[#171717] p-5">
                <p className="text-[0.8rem] text-white/70">Our support team is here to assist you with any questions about your ticket or the event</p>
                <button className="mt-4 w-full rounded-[10px] bg-[#ED5A2E] py-3 text-[0.9rem] font-semibold text-white">Chat with support</button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="mx-auto max-w-[900px] px-8 py-16 text-center">
            <h1 className="text-[2rem] font-semibold">Ticket Details Screen</h1>
            <p className="mt-3 text-white/65">Open this route on mobile to match the attached layout.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
