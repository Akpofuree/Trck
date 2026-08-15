"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronDown, ChevronLeft, Clock3, Heart, MapPin, Share2, Star, Users, Sparkles } from "lucide-react";
import { Logo } from "@/components/shared/logo";

const details = [
  { title: "GENRE", value: "AFROBEATS", icon: "/icon-calendar.png" },
  { title: "SCHEDULE", value: "3RD - 30TH NOVEMBER, 2025", icon: "/icon-calendar.png" },
  { title: "VENUE", value: "02 ARENA LONDON, UNITED KINGDOM", icon: "/icon-location.png" },
  { title: "PRICE", value: "$120 - $200 PER EVENT", icon: "/icon-dollar-circle.png" },
  { title: "RATING", value: "4.8 / 5", icon: "/icon-star.png" },
  { title: "CAPACITY", value: "20,000 SEATS", icon: "/icon-group.png" },
];

const upcoming = [
  { status: "Available", title: "5IVE ALBUM TOUR", date: "Nov 15, 2025", time: "20:00 WAT", location: "O2 Arena London, United Kingdom", price: "$70" },
  { status: "Selling Fast", title: "5IVE ALBUM TOUR", date: "Nov 15, 2025", time: "20:00 WAT", location: "O2 Arena London, United Kingdom", price: "$70" },
  { status: "Sold Out", title: "5IVE ALBUM TOUR", date: "Nov 15, 2025", time: "20:00 WAT", location: "O2 Arena London, United Kingdom", price: "$70" },
];

const highlights = Array.from({ length: 6 }, () => "MIAMI, FLORIDA");

const faqs = [
  { q: "Can I attend individual events?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu luctus risus. Sed eu pharetra mi, vel suscipit nibh." },
  { q: "What is the cancellation policy?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { q: "Is there parking available?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { q: "Are recordings available?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { q: "Are there age restrictions?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu luctus risus. Sed eu pharetra mi." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="relative min-h-[760px]">
          <Image src="/event-hero.jpg" alt="Series hero" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black" />

          <div className="relative z-10 mx-auto max-w-[1440px] px-4 pb-12 pt-6 sm:px-6 lg:px-8">
            <header className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Link href="/explore" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/15">
                  <ChevronLeft className="h-5 w-5" />
                </Link>
                <Link href="/" className="inline-flex items-center">
                  <Logo width={139} height={41} className="h-6 w-auto" />
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/15">
                  <Share2 className="h-4 w-4" />
                </button>
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/15">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
            </header>

            <div className="mt-10 max-w-[720px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#f0b31f] px-4 py-2 text-[0.88rem] font-medium text-black shadow-md">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black font-bold">D</span>
                <span>Elizabeth R Events</span>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#ED5A2E] text-[0.65rem] text-white">{"✓"}</span>
              </div>

              <h1 className="text-[3.2rem] font-black uppercase leading-[0.88] tracking-tight sm:text-[5.1rem]">
                5IVE LIVE AT <span className="text-[#ED5A2E]">02</span> ARENA
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-[0.82rem] text-white/80">
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#FFD400]">{'★★★★★'}</span>
                  <span>4.8 (127 Reviews)</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#ED5A2E]" />
                  <span>40,034 people are attending</span>
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3 text-[0.9rem] text-white/85">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black font-semibold">E</div>
                <span>
                  Hosted by <span className="font-medium">Elizabeth R Events</span> <span className="text-[#ED5A2E]">{"✓"}</span>
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full bg-[#ED5A2E] px-6 py-3 text-[0.95rem] font-semibold text-white shadow-lg shadow-black/20">
                  View All Dates
                </button>
                <button className="rounded-full bg-white px-6 py-3 text-[0.95rem] font-semibold text-[#ED5A2E] shadow-lg shadow-black/10">
                  Add to Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-[1280px]">
          <nav className="flex gap-8 border-b border-white/20 text-[0.88rem]">
            {["Overview", "Events", "Reviews", "About Organizers"].map((item, index) => (
              <button key={item} className={`pb-3 ${index === 0 ? "border-b-2 border-[#ED5A2E] text-white" : "text-white/70"}`}>
                {item}
              </button>
            ))}
          </nav>

          <p className="mt-8 max-w-[1160px] text-[0.94rem] leading-relaxed text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu luctus risus. Sed eu pharetra mi, vel suscipit nibh. Mauris volutpat, arcu sed consequat pulvinar, dolor ante feugiat est, id ultricies arcu urna eu augue. Fusce sed odio ipsum. Suspendisse sit amet aliquam nisl. Sed in lacinia massa. Nulla maximus varius sem nec tempor. Curabitur quis elit non mi eleifend finibus.
          </p>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {details.map((item) => (
              <article key={item.title} className="rounded-[12px] bg-[#111111] p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#FF9A76]">
                  <Image src={item.icon} alt={item.title} width={24} height={24} className="h-6 w-6 object-contain" />
                </div>
                <h3 className="text-[1.05rem] font-medium tracking-wide">{item.title}</h3>
                <p className="mt-3 text-[0.9rem] text-white/80">{item.value}</p>
              </article>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="text-[1.35rem] font-bold uppercase tracking-tight">What to expect</h2>
            <p className="mt-4 max-w-[1160px] text-[0.94rem] leading-relaxed text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu luctus risus. Sed eu pharetra mi, vel suscipit nibh. Mauris volutpat, arcu sed consequat pulvinar, dolor ante feugiat est, id ultricies arcu urna eu augue. Fusce sed odio ipsum. Suspendisse sit amet aliquam nisl. Sed in lacinia massa. Nulla maximus varius sem nec tempor. Curabitur quis elit non mi eleifend finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec fringilla fringilla sem. Integer nisi justo, gravida in sodales vitae, vehicula at dolor. Pellentesque mollis accumsan rhoncus. Cras vestibulum, sem a pulvinar pretium, sem est molestie mauris, sed fermentum elit nibh quis ligula. Cras id consequat nisi, a dignissim ipsum.
            </p>

            <h2 className="mt-12 text-[1.35rem] font-bold uppercase tracking-tight">Target audience</h2>
            <p className="mt-4 text-[0.94rem] leading-relaxed text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <h2 className="mt-12 text-[1.35rem] font-bold uppercase tracking-tight">What&apos;s included</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2 text-[0.92rem] text-white/85">
              {["Premium Seating With Excellent Sightlights", "Light Refreshments", "Full Bar Service", "Networking Opportunities"].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-[#ED5A2E]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 rounded-[22px] border border-[#2b9fff] bg-[linear-gradient(90deg,#FFFFFF_0%,#f8b39b_15%,#ED5A2E_100%)] p-6 text-white">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-[560px]">
                <div className="mb-4 inline-flex items-center gap-2 text-[0.85rem] font-medium text-white/95">
                  <Sparkles className="h-4 w-4" />
                  Best Value
                </div>
                <h3 className="text-[2rem] font-bold leading-tight">Get the Series Pass</h3>
                <p className="mt-4 text-[0.95rem] text-white/90">Attend all 8 events and save on individual tickets</p>
                <ul className="mt-6 space-y-3 text-[0.92rem]">
                  {["Priority Seating", "Exclusive Meet & Greet Opportunity", "10% Discount on Food and Beverages", "Free Series Merchandise Package"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span>{"✓"}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative flex min-h-[240px] min-w-[220px] items-end justify-end overflow-hidden">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/15" />
                <div className="relative z-10 text-right">
                  <span className="inline-flex rounded-full bg-white/18 px-4 py-1 text-[0.9rem]">Save 25%</span>
                  <div className="mt-14 text-white/80 line-through">$980</div>
                  <div className="text-[3rem] font-black">$700</div>
                  <button className="mt-8 rounded-xl bg-white px-6 py-3 text-[1rem] font-semibold text-[#ED5A2E] shadow-lg">Buy Series Pass</button>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[1.35rem] font-bold uppercase tracking-tight">Upcoming Events</h2>
              <Link href="/explore" className="text-[0.9rem] text-white/75">View All Events</Link>
            </div>
            <div className="space-y-5">
              {upcoming.map((item) => (
                <article key={`${item.title}-${item.status}`} className="grid overflow-hidden rounded-[18px] bg-[#151515] lg:grid-cols-[340px_1fr]">
                  <div className="relative min-h-[220px]">
                    <Image src="/event-hero.jpg" alt={item.title} fill className="object-cover" />
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[0.82rem] text-black">{item.status}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-4 text-[0.92rem] text-white/85">
                      <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#ED5A2E]" /> {item.date}</span>
                      <span className="text-[#ED5A2E]">{"•"}</span>
                      <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#ED5A2E]" /> {item.time}</span>
                    </div>
                    <h3 className="mt-4 text-[1.1rem] font-medium">{item.title}</h3>
                    <div className="mt-4 flex items-center gap-2 text-[0.95rem] text-white/85">
                      <MapPin className="h-4 w-4 text-[#ED5A2E]" />
                      <span>{item.location}</span>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-[#ED5A2E]/60 pt-4">
                      <div>
                        <p className="text-[0.8rem] text-white/70">Starting At</p>
                        <p className="text-[1.8rem] font-semibold">{item.price}</p>
                      </div>
                      <button className="rounded-full bg-[#ED5A2E] px-6 py-3 text-[0.95rem] font-semibold text-white">Book This Event</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-[1.35rem] font-bold uppercase tracking-tight">Past Events Highlights</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {highlights.map((label, idx) => (
                <div key={`${label}-${idx}`} className="relative h-[200px] overflow-hidden rounded-[14px]">
                  <Image src="/event-feature.jpg" alt={label} fill className="object-cover" />
                  <div className="absolute inset-0 bg-red-600/65" />
                  <span className="absolute bottom-4 left-4 text-[0.82rem]">{label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <div className="flex items-center justify-between">
              <h2 className="text-[1.35rem] font-bold">Reviews &amp; Ratings</h2>
              <Link href="#" className="text-[0.9rem] text-white/75">See All Reviews</Link>
            </div>
            <div className="mt-3 flex gap-1 text-[#FFD400]">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <div className="mt-6 space-y-4">
              {Array.from({ length: 2 }).map((_, idx) => (
                <article key={idx} className="rounded-[18px] bg-[#e8e8e8] p-5 text-gray-800">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#b76d4c]" />
                      <div>
                        <p className="text-[1.05rem] font-semibold">Jane Doe</p>
                        <p className="text-[0.82rem] text-gray-500">November 3rd, 2025</p>
                      </div>
                    </div>
                    <div className="text-[#FFD400]">{'★★★★★'}</div>
                  </div>
                  <p className="mt-4 text-[0.9rem] leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu luctus risus. Sed eu pharetra mi, vel suscipit nibh.
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-[22px] border border-[#8f5f4d] bg-[linear-gradient(90deg,#2d201c_0%,#141414_45%,#6e6657_100%)] p-6">
            <h2 className="text-[1.35rem] font-bold">Meet The Organizer</h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-[240px_1fr]">
              <div className="flex items-center justify-center">
                <div className="flex h-56 w-56 items-center justify-center rounded-full bg-white text-[6rem] font-light text-black">E</div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-[1.2rem] font-medium">Elizabeth R Events</h3>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#ED5A2E] text-[0.65rem] text-white">{"✓"}</span>
                </div>
                <p className="mt-4 max-w-[760px] text-[0.95rem] leading-relaxed text-white/85">
                  Passionate about bringing world-class experiences to Lagos. We&apos;ve been curating unforgettable music events since 2018, hosting over 150 performers and welcoming 10,000+ artists worldwide.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-6 text-[0.9rem] text-white/85">
                  <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-[#ED5A2E]" /> 24 Event Series</span>
                  <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-[#ED5A2E]" /> 12.5k followers</span>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button className="rounded-xl bg-[#ED5A2E] px-10 py-3 text-[0.95rem] font-semibold text-white">Follow</button>
                  <button className="rounded-xl bg-[#ED5A2E] px-10 py-3 text-[0.95rem] font-semibold text-white">View Profile</button>
                  <div className="ml-auto flex items-center gap-5 text-white">
                    <span className="text-[1.8rem]">{"◌"}</span>
                    <span className="text-[1.8rem]">{"X"}</span>
                    <span className="text-[1.8rem]">{"◯"}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-[1.35rem] font-bold uppercase tracking-tight">Frequently Asked Questions</h2>
            <div className="mt-6">
              {faqs.map((faq, idx) => (
                <div key={faq.q} className="border-b border-[#ED5A2E] py-5">
                  <button className="flex w-full items-center justify-between text-left text-[1rem] font-medium">
                    <span>{faq.q}</span>
                    <ChevronDown className="h-5 w-5 text-[#ED5A2E]" />
                  </button>
                  {idx === 4 ? <p className="mt-3 max-w-[900px] text-[0.92rem] leading-relaxed text-[#ED5A2E]">{faq.a}</p> : null}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[1.35rem] font-bold">You Might Also Like</h2>
              <Link href="/explore" className="text-[0.9rem] text-white/75">See More Events</Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, idx) => (
                <article key={idx} className="overflow-hidden rounded-[18px] bg-[#f6764f]">
                  <div className="relative h-[240px]">
                    <Image src="/event-feature.jpg" alt="Recommended event" fill className="object-cover" />
                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[0.72rem] text-gray-900">Music</span>
                    <span className="absolute right-3 top-3 rounded-md bg-white px-2 py-1 text-center text-[0.72rem] text-gray-900">NOV<br />14</span>
                  </div>
                  <div className="p-4 text-white">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[1rem] font-medium">Summer Music Festival 2024</h3>
                      <Heart className="h-5 w-5" />
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-[0.82rem] text-white/90">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Eko Conventional Center</span>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-[0.82rem]">N80,000</span>
                      <button className="rounded-full bg-white px-4 py-1.5 text-[0.82rem] text-gray-800">Book Now</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-12 text-white lg:px-16">
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
    </main>
  );
}
