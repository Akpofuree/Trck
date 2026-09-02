"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronDown, ChevronLeft, Clock3, Heart, MapPin, Share2, Star, Users } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { OrganizerCard } from "@/components/shared/organizer-card";

const details = [
  { title: "Date & Time", value: "3RD - 30TH NOVEMBER, 2025", sub: "7:00 PM - 11:00 PM EST", icon: "/Time Circle 7.png" },
  { title: "Location", value: "02 Arena London, United Kingdom", sub: "123 Main St, London, UK 10001", icon: "/Location.png" },
  { title: "Ticket Type", value: "General Admission", sub: "View on map", icon: "/Ticket 1.png" },
  { title: "Age Requirement", value: "18+ with valid ID required", sub: "", icon: "/Profile 1.png" },
];

const faqs = [
  { q: "Can I attend individual events?", a: "Yes, you can attend individual dates depending on availability." },
  { q: "What is the cancellation policy?", a: "Cancellation policies depend on the organizer and ticket class." },
  { q: "Is there parking available?", a: "Parking details are shown in the location section." },
  { q: "Are recordings available?", a: "Some events may offer replays after the live show." },
  { q: "Are there age restrictions?", a: "Age restrictions are listed per event and enforced at checkout." },
];

const reviews = Array.from({ length: 4 }).map((_, index) => ({
  id: index,
  name: "Jane Doe",
  date: "November 3rd, 2025",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu luctus risus. Sed eu pharetra mi, vel suscipit nibh. Mauris volutpat, arcu sed consequat pulvinar.",
}));

function Stars() {
  return <div className="text-[#FFD400]">{"★★★★★"}</div>;
}

function DesktopHeader() {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Link href="/explore" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <Link href="/" className="inline-flex items-center">
          <Logo width={120} height={36} className="h-6 w-auto" />
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
          <Share2 className="h-4 w-4" />
        </button>
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
          <Heart className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}

function SectionRule() {
  return <div className="h-px w-full bg-[#ED5A2E]/70" />;
}

function Footer() {
  return (
    <footer className="hidden border-t border-white/10 bg-black px-6 py-12 text-white lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider">Contact</h4>
            <p className="mb-4 text-[0.88rem] font-semibold text-[#ED5A2E]">info@getontrck.com</p>
          </div>
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-[0.85rem] text-white/70">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">How it works</Link></li>
              <li><Link href="#">Features</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5 text-[0.85rem] text-white/70">
              <li><Link href="#">Privacy policy</Link></li>
              <li><Link href="#">Terms of service</Link></li>
              <li><Link href="#">Acceptable use policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider">Support</h4>
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

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="hidden lg:block">
        <div className="relative min-h-[760px] overflow-hidden">
          <Image src="/event-hero.jpg" alt="Event hero" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-4 pb-12 pt-6 sm:px-6 lg:px-8">
            <DesktopHeader />

            <div className="mt-10 max-w-[760px]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black font-semibold">E</div>
                <div className="text-[0.9rem] text-white/85">
                  by Elizabeth R Events <span className="text-[#ED5A2E]">{"✓"}</span>
                </div>
              </div>
              <h1 className="mt-6 text-[3.2rem] font-black uppercase leading-[0.88] tracking-tight sm:text-[5.1rem]">
                5IVE LIVE AT <span className="text-[#ED5A2E]">02</span> ARENA
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-[0.82rem] text-white/80">
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#FFD400]">★★★★★</span>
                  <span>4.8 (127 Reviews)</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#ED5A2E]" />
                  <span>40,034 people are attending</span>
                </span>
              </div>
              <div className="mt-8 flex gap-4">
                <button className="inline-flex h-[52px] items-center gap-3 rounded-[12px] border-2 border-[#ED5A2E] bg-[#ED5A2E] px-6 text-[0.95rem] font-semibold text-white shadow-[0_0_0_1px_rgba(237,90,46,0.18)]">
                  Book Event <span className="ml-2">{"→"}</span>
                </button>
                <button className="inline-flex h-[52px] items-center gap-3 rounded-[12px] border border-white/15 bg-black/20 px-6 text-[0.95rem] font-semibold text-white/95 backdrop-blur-sm">
                  Add to Calendar
                </button>
              </div>
            </div>

            <nav className="mt-12 flex gap-8 overflow-x-auto border-b border-white/20 text-[0.88rem]">
              {["Overview", "Events", "Reviews", "About Organizers"].map((item, index) => (
                <button key={item} className={`pb-3 ${index === 0 ? "border-b-2 border-[#ED5A2E] text-white" : "text-white/70"}`}>
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="hidden lg:block mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-[1280px]">
          <section className="rounded-[18px] bg-[#111111] p-6">
            <div className="grid gap-5 md:grid-cols-4">
              {details.map((item) => (
                <article key={item.title} className="min-h-[200px] px-4 py-4 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center">
                    <Image src={item.icon} alt={item.title} width={36} height={36} className="h-10 w-10 object-contain" />
                  </div>
                  <div className="mt-4 text-[0.72rem] uppercase tracking-[0.18em] text-white/55">{item.title}</div>
                  <div className="mt-5 text-[0.95rem] font-semibold leading-snug text-white">{item.value}</div>
                  {item.sub ? <div className="mt-4 text-[0.78rem] text-white/55">{item.sub}</div> : null}
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-[18px] bg-[#111111] p-6">
            <h2 className="text-[1.35rem] font-bold uppercase tracking-tight">What to expect</h2>
            <p className="mt-4 max-w-[1160px] text-[0.94rem] leading-relaxed text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu luctus risus. Sed eu pharetra mi, vel suscipit nibh. Mauris volutpat, arcu sed consequat pulvinar, dolor ante feugiat est, id ultricies arcu urna eu augue. Fusce sed odio ipsum. Suspendisse sit amet aliquam nisl. Sed in lacinia massa. Nulla maximus varius sem nec tempor. Curabitur quis elit non mi eleifend finibus.
            </p>
            <div className="mt-8">
              <SectionRule />
            </div>

            <h2 className="mt-8 text-[1.35rem] font-bold uppercase tracking-tight">Target audience</h2>
            <p className="mt-4 text-[0.94rem] leading-relaxed text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="mt-8">
              <SectionRule />
            </div>

            <h2 className="mt-8 text-[1.35rem] font-bold uppercase tracking-tight">What&apos;s included</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2 text-[0.92rem] text-white/85">
              {["Premium Seating With Excellent Sightlights", "Light Refreshments", "Full Bar Service", "Networking Opportunities"].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-[#ED5A2E]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <SectionRule />
            </div>

            <h2 className="mt-8 text-[1.35rem] font-bold uppercase tracking-tight">What to bring</h2>
            <div className="mt-4 grid gap-3 text-[0.92rem] text-white/85">
              {["Valid Government-issued ID (18+ Event)", "Your ticket confirmation (digital or printed)", "Light refreshments"].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-[#ED5A2E]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 rounded-[22px] border-2 border-[#8f5f4d]/80 bg-[linear-gradient(90deg,#2c1811_0%,#121212_46%,#6a5d50_100%)] p-6 lg:p-8">
            <h2 className="text-[1.35rem] font-bold">Meet The Host</h2>
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
                  <button className="rounded-[12px] bg-[#ED5A2E] px-10 py-3 text-[0.95rem] font-semibold text-white">Follow</button>
                  <button className="rounded-[12px] bg-[#ED5A2E] px-10 py-3 text-[0.95rem] font-semibold text-white">View Profile</button>
                  <div className="ml-auto flex items-center gap-5 text-white/95">
                    <span className="text-[1.8rem]">{"◌"}</span>
                    <span className="text-[1.8rem]">{"X"}</span>
                    <span className="text-[1.8rem]">{"◯"}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[18px] bg-[#111111] p-6">
            <h2 className="text-[1.35rem] font-bold uppercase tracking-tight">Event Schedule</h2>
            <div className="mt-6 space-y-6">
              {[
                ["7:00 PM", "Doors Open & Welcome Drinks", "Arrive, check in, and enjoy complimentary beverages"],
                ["7:30 PM", "Opening Act", "Local talent showcase featuring emerging afrobeats artists"],
                ["8:30 PM", "Main Performance", "Headlining afrobeats ensemble performs classic and contemporary pieces"],
                ["10:30 PM", "Networking Session", "Meet fellow afrobeats enthusiasts and the performers"],
                ["11:00 PM", "Event Ends", "Thank you for joining us!"],
              ].map(([time, title, desc]) => (
                <div key={time} className="grid grid-cols-[44px_1fr] gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#ED5A2E] text-[#ED5A2E]">
                      <Clock3 className="h-4 w-4" />
                    </div>
                    <div className="mt-1 h-10 w-px bg-[#ED5A2E]/70" />
                  </div>
                  <div className="pb-2">
                    <div className="text-[0.72rem] font-medium text-[#ED5A2E]">{time}</div>
                    <div className="mt-1 text-[1rem] font-semibold">{title}</div>
                    <div className="mt-1 text-[0.78rem] text-white/65">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-[18px] bg-[#111111] p-6">
            <h2 className="text-[1.35rem] font-bold uppercase tracking-tight">Location</h2>
            <div className="mt-6 overflow-hidden rounded-[12px] border border-white/10">
              <Image src="/event-feature.jpg" alt="Location map" width={1200} height={560} className="h-[260px] w-full object-cover object-center" />
            </div>
            <div className="mt-6 rounded-[18px] bg-[#0f0f0f] p-6">
              <div className="max-w-[360px]">
                <h3 className="text-[1.25rem] font-medium">02 Arena</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-white/80">Peninsula Square London SE10 0DX United Kingdom</p>
                <button className="mt-6 inline-flex items-center gap-3 rounded-[10px] bg-[#ED5A2E] px-5 py-3 text-[0.95rem] font-semibold text-white">
                  <span className="text-[1rem]">➜</span>
                  Get Directions
                </button>
              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {[
                  ["Parking", "Street parking available. Paid garage 2 blocks away on 5th Ave."],
                  ["Public Transport", "Subway: L train to 14th St. Bus: M14 to Main St."],
                  ["Accessibility", "Wheelchair accessible entrance and restrooms available."],
                  ["Nearby", "2 blocks from Central Plaza, across from City Museum."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-3">
                    <Image
                      src={title === "Parking" ? "/Profile 1.png" : title === "Public Transport" ? "/Ticket 1.png" : title === "Accessibility" ? "/Profile 1.png" : "/Location.png"}
                      alt={title}
                      width={22}
                      height={22}
                      className="mt-1 h-5 w-5 object-contain"
                    />
                    <div>
                      <h4 className="text-[1.05rem] font-medium">{title}</h4>
                      <p className="mt-1 text-[0.88rem] leading-relaxed text-white/75">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[18px] bg-[#111111] p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-[1.35rem] font-bold uppercase tracking-tight">Reviews &amp; Ratings</h2>
            </div>
            <div className="mt-6 space-y-8">
              {reviews.map((item) => (
                <div key={item.id} className="grid gap-6 lg:grid-cols-[84px_1fr_180px] lg:items-start">
                  <div className="flex items-center gap-4 lg:block">
                    <div className="h-12 w-12 rounded-full bg-[#b76d4c]" />
                    <div className="lg:hidden">
                      <p className="text-[1.05rem] font-semibold text-white">{item.name}</p>
                      <p className="text-[0.82rem] text-white/60">{item.date}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[1.05rem] font-semibold text-white">{item.name}</p>
                    <p className="text-[0.82rem] text-white/60">{item.date}</p>
                    <p className="mt-4 max-w-[900px] text-[0.9rem] leading-relaxed text-white/80">{item.text}</p>
                  </div>
                  <div className="text-[#FFD400] lg:text-right">{'★★★★★'}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-[18px] bg-[#111111] p-6">
            <h2 className="text-[1.35rem] font-bold uppercase tracking-tight">Frequently Asked Questions</h2>
            <div className="mt-6">
              {faqs.map((faq, index) => (
                <div key={`${faq.q}-${index}`} className="border-b border-[#ED5A2E] py-5">
                  <button className="flex w-full items-center justify-between text-left text-[1rem] font-medium">
                    <span>{faq.q}</span>
                    <ChevronDown className="h-5 w-5 text-[#ED5A2E]" />
                  </button>
                  {index === 4 ? <p className="mt-3 max-w-[900px] text-[0.92rem] leading-relaxed text-[#ED5A2E]">{faq.a}</p> : null}
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

        <div className="mt-20">
          <Footer />
        </div>
      </section>

      <section className="lg:hidden px-4 pt-3 pb-6">
        <div className="overflow-hidden rounded-[16px] bg-black">
          <div className="relative">
            <div className="absolute left-0 top-0 z-10 flex w-full items-center justify-between px-4 py-3 text-white">
              <button className="text-[1.1rem]">{"‹"}</button>
              <Logo width={82} height={28} className="h-5 w-auto" />
              <button className="text-[1.1rem]">{"↗"}</button>
            </div>
            <Image src="/event-hero.jpg" alt="Event hero mobile" width={900} height={650} className="h-[290px] w-full object-cover object-center" />
            <div className="-mt-8 rounded-t-[22px] bg-black px-4 pb-5 pt-4">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h1 className="text-[1.55rem] font-black uppercase leading-[0.95] tracking-tight">
                    5IVE LIVE AT <span className="text-[#ED5A2E]">02</span> ARENA
                  </h1>
                  <div className="mt-2 text-[0.72rem] text-white/80">by Elizabeth R Events <span className="text-[#ED5A2E]">{"✦"}</span></div>
                  <div className="mt-3 text-[0.72rem] text-white/75">10,000 people are attending</div>
                </div>
                <button className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35 text-white">♡</button>
              </div>
              <button className="mt-4 inline-flex h-[36px] w-full items-center justify-center rounded-[8px] bg-[#ED5A2E] text-[0.9rem] font-semibold text-white">Add to Calendar</button>
            </div>
          </div>
        </div>

        <section className="mt-3 grid grid-cols-2 gap-x-8 gap-y-6 px-1">
          <div>
            <div className="text-[1.05rem] font-semibold underline decoration-[#ED5A2E] decoration-2 underline-offset-8">Ticket Type</div>
            <div className="mt-2 text-[0.82rem] text-white/90">General Admission</div>
          </div>
          <div>
            <div className="text-[1.05rem] font-semibold underline decoration-[#ED5A2E] decoration-2 underline-offset-8">Schedule</div>
            <div className="mt-2 text-[0.82rem] text-white/90">3rd - 30th Nov, 2025</div>
          </div>
          <div>
            <div className="text-[1.05rem] font-semibold underline decoration-[#ED5A2E] decoration-2 underline-offset-8">Venue</div>
            <div className="mt-2 text-[0.82rem] leading-relaxed text-white/90">02 Arena London, United Kingdom</div>
          </div>
          <div>
            <div className="text-[1.05rem] font-semibold underline decoration-[#ED5A2E] decoration-2 underline-offset-8">Age Requirement</div>
            <div className="mt-2 text-[0.82rem] text-white/90">18+ with valid ID Required</div>
          </div>
          <div>
            <div className="text-[1.05rem] font-semibold underline decoration-[#ED5A2E] decoration-2 underline-offset-8">Rating</div>
            <div className="mt-2"><Stars /></div>
          </div>
          <div>
            <div className="text-[1.05rem] font-semibold underline decoration-[#ED5A2E] decoration-2 underline-offset-8">Capacity</div>
            <div className="mt-2 text-[0.82rem] text-white/90">20,000 Seats</div>
          </div>
        </section>

        <section className="mt-6">
          <div className="rounded-[16px] bg-black px-1">
            <h2 className="text-[1rem] font-bold uppercase tracking-tight underline decoration-[#ED5A2E] decoration-2 underline-offset-8">About This Event</h2>
            <p className="mt-3 text-[0.78rem] leading-relaxed text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus metus sed felis pulvinar gravida. Vivamus eu augue volutpat lectus lacinia molestie.
            </p>
            <button className="mt-2 text-[0.8rem] text-[#ED5A2E]">Read more</button>

            <div className="mt-5 pt-5">
              <h3 className="text-[1rem] font-bold uppercase tracking-tight underline decoration-[#ED5A2E] decoration-2 underline-offset-8">What&apos;s Included</h3>
              <ul className="mt-3 space-y-2 text-[0.78rem] text-white/85">
                <li className="flex items-start gap-2"><span className="text-[#ED5A2E]">•</span><span>Premium Seating With Excellent Sightlights</span></li>
                <li className="flex items-start gap-2"><span className="text-[#ED5A2E]">•</span><span>Full bar service</span></li>
                <li className="flex items-start gap-2"><span className="text-[#ED5A2E]">•</span><span>Light refreshments</span></li>
                <li className="flex items-start gap-2"><span className="text-[#ED5A2E]">•</span><span>Networking opportunities</span></li>
              </ul>
            </div>

            <div className="mt-5 pt-5">
              <h3 className="text-[1rem] font-bold uppercase tracking-tight underline decoration-[#ED5A2E] decoration-2 underline-offset-8">What to bring</h3>
              <ul className="mt-3 space-y-2 text-[0.78rem] text-white/85">
                <li className="flex items-start gap-2"><span className="text-[#ED5A2E]">•</span><span>Valid Government-issued ID (18+ Event)</span></li>
                <li className="flex items-start gap-2"><span className="text-[#ED5A2E]">•</span><span>Your ticket confirmation (digital or printed)</span></li>
                <li className="flex items-start gap-2"><span className="text-[#ED5A2E]">•</span><span>Light refreshments</span></li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-6">
          <OrganizerCard
            title="Meet the Organizer"
            name="Elizabeth R Events"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit justo a est pellentesque pulvinar."
            eventSeriesCount="24 Event Series"
            followersCount="12.5k Followers"
            avatarLetter="E"
            verified={true}
          />
        </div>

        <h2 className="mt-6 text-[1rem] font-bold uppercase tracking-tight underline decoration-[#ED5A2E] decoration-2 underline-offset-8">Event Schedule</h2>
        <div className="mt-4 rounded-[16px] bg-[#111111] p-4">
          {[
            ["7:00 PM", "Doors open & Welcome drinks", "Arrive, check in, and enjoy complimentary beverages"],
            ["7:30 PM", "Opening Act", "Local talent showcase featuring emerging afrobeats artists"],
            ["8:30 PM", "Main Performance", "Headlining afrobeats ensemble performs classic pieces"],
            ["10:30 PM", "Networking Session", "Meet fellow afrobeats enthusiasts and the performers"],
            ["11:00 PM", "Event Ends", "Thank you for joining us!"],
          ].map(([time, title, desc]) => (
            <div key={time} className="grid grid-cols-[34px_1fr] gap-3 pb-5">
              <div className="flex flex-col items-center">
                <Image src="/mobile-time.png" alt="Time" width={24} height={24} className="h-6 w-6 object-contain" />
                <div className="mt-2 h-10 w-px bg-[#ED5A2E]" />
              </div>
              <div>
                <div className="text-[0.68rem] font-medium text-[#ED5A2E]">{time}</div>
                <div className="mt-1 text-[0.9rem] font-medium">{title}</div>
                <div className="mt-1 text-[0.7rem] leading-relaxed text-white/65">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-6 text-[1rem] font-bold uppercase tracking-tight underline decoration-[#ED5A2E] decoration-2 underline-offset-8">Location</h2>
        <div className="mt-4 rounded-[16px] bg-[#111111] p-4">
          <div className="overflow-hidden rounded-[8px] border border-white/10">
            <Image src="/event-feature.jpg" alt="Map" width={800} height={420} className="h-[210px] w-full object-cover object-center" />
          </div>
          <div className="mt-5">
            <div className="text-[1rem] font-medium">02 Arena</div>
            <div className="mt-2 text-[0.82rem] leading-relaxed text-white/80">Peninsula Square London SE10 0DX United Kingdom</div>
            <button className="mt-4 inline-flex items-center gap-2 rounded-[10px] bg-[#ED5A2E] px-4 py-2 text-[0.82rem] font-semibold text-white">
              <Image src="/mobile-location.png" alt="Directions" width={18} height={18} className="h-4 w-4 object-contain" />
              Get Directions
            </button>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4">
            {[
              ["Parking", "Street parking available. Paid garage 2 blocks away on 5th Ave.", "/mobile-profile.png"],
              ["Public Transport", "Subway: L train to 14th St. Bus: M14 to Main St.", "/mobile-ticket.png"],
              ["Accessibility", "Wheelchair accessible entrance and restrooms available.", "/mobile-profile.png"],
              ["Nearby", "2 blocks from Central Plaza, across from City Museum.", "/mobile-location.png"],
            ].map(([title, desc, icon]) => (
              <div key={title} className="flex items-start gap-3">
                <Image src={icon as string} alt={title} width={18} height={18} className="mt-1 h-4 w-4 object-contain" />
                <div>
                  <div className="text-[0.95rem] font-medium">{title}</div>
                  <div className="mt-1 text-[0.72rem] leading-relaxed text-white/75">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="mt-6 text-[1rem] font-bold uppercase tracking-tight underline decoration-[#ED5A2E] decoration-2 underline-offset-8">Review &amp; Ratings</h2>
        <div className="mt-4 space-y-3">
          {reviews.slice(0, 2).map((item) => (
            <div key={`${item.name}-${item.id}`} className="rounded-[16px] bg-[#111111] p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#b76d4c]" />
                  <div>
                    <div className="text-[0.88rem] font-semibold">{item.name}</div>
                    <div className="text-[0.68rem] text-white/65">{item.date}</div>
                  </div>
                </div>
                <Stars />
              </div>
              <p className="mt-3 text-[0.72rem] leading-relaxed text-white/75">{item.text}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-6 text-[1rem] font-bold uppercase tracking-tight underline decoration-[#ED5A2E] decoration-2 underline-offset-8">Frequently Asked Questions</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((faq, index) => (
            <div key={`${faq.q}-${index}`} className="border-b border-[#ED5A2E] pb-3">
              <div className="flex items-center justify-between gap-3 text-[0.8rem]">
                <span>{faq.q}</span>
                <ChevronDown className="h-4 w-4 text-[#ED5A2E]" />
              </div>
              {index === 4 ? <p className="mt-2 text-[0.72rem] leading-relaxed text-[#ED5A2E]">{faq.a}</p> : null}
            </div>
          ))}
        </div>

        <h2 className="mt-6 text-[1rem] font-bold uppercase tracking-tight underline decoration-[#ED5A2E] decoration-2 underline-offset-8">You Might Also Like</h2>
        <div className="mt-4 space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <article key={index} className="overflow-hidden rounded-[16px] bg-[#f6764f]">
              <div className="relative h-[170px]">
                <Image src="/event-feature.jpg" alt="Recommended" fill className="object-cover" />
              </div>
              <div className="p-3 text-white">
                <div className="flex items-start justify-between">
                  <h3 className="text-[0.9rem] font-medium">Summer Music Festival 2024</h3>
                  <Heart className="h-4 w-4" />
                </div>
                <div className="mt-1 flex items-center gap-1 text-[0.7rem] text-white/90">
                  <MapPin className="h-3 w-3" />
                  <span>Eko Conventional Center</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Footer />
      </section>
    </main>
  );
}
