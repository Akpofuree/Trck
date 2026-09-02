"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  Clock3,
  Heart,
  MapPin,
  Share2,
  Users,
  Download,
  ExternalLink,
  Ticket,
  UserCheck,
} from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { OrganizerCard } from "@/components/shared/organizer-card";

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

function SectionRule() {
  return <div className="h-px w-full bg-[#ED5A2E]/70" />;
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white lg:px-16">
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
  const [isFav, setIsFav] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white font-[var(--font-inter)]">
      {/* ── DESKTOP VIEW (Screenshot 2) ─────────────────────────────────── */}
      <section className="hidden lg:block">
        <div className="relative min-h-[760px] overflow-hidden">
          <Image src="/event-hero.jpg" alt="Event hero" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black" />

          <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-12 pt-6 sm:px-8 lg:px-12">
            {/* Header */}
            <header className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <Link href="/explore" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-all">
                  <ChevronLeft className="h-5 w-5" />
                </Link>
                <Link href="/" className="inline-flex items-center">
                  <Logo width={100} height={36} className="h-7 w-auto brightness-0 invert" />
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                  <Share2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsFav(!isFav)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  <Heart className={`h-4 w-4 ${isFav ? "fill-[#ED5A2E] text-[#ED5A2E]" : "text-white"}`} />
                </button>
              </div>
            </header>

            {/* Desktop Hero Content (Screenshot 2) */}
            <div className="mt-16 flex items-end justify-between gap-8">
              <div className="max-w-[760px]">
                <h1 className="text-[3.8rem] xl:text-[5.2rem] font-black uppercase leading-[0.9] tracking-tight font-[var(--font-montserrat)]">
                  5IVE LIVE AT <span className="text-[#ED5A2E]">02 ARENA</span>
                </h1>

                {/* Rating & Attendance Row */}
                <div className="mt-5 flex flex-wrap items-center gap-6 text-[0.88rem] text-white/90">
                  <span className="inline-flex items-center gap-2">
                    <span className="text-[#FFD400]">★★★★★</span>
                    <span className="font-semibold">4.8 <span className="text-white/60 font-normal">(127 Reviews)</span></span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-white/85">
                    <Users className="h-4 w-4 text-[#ED5A2E]" />
                    <span>40,034 people are attending</span>
                  </span>
                </div>

                {/* Host Info */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black font-bold text-base">
                    E
                  </div>
                  <div className="text-sm font-medium text-white/90 flex items-center gap-1.5">
                    <span>Hosted by Elizabeth R Events</span>
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#ED5A2E] text-[0.6rem] text-white">✓</span>
                  </div>
                </div>
              </div>

              {/* Floating Book Event CTA Button (Right side per Screenshot 2) */}
              <div className="pb-4">
                <button className="flex items-center gap-2 rounded-xl bg-[#ED5A2E] px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-[#ED5A2E]/30 transition-all hover:bg-[#d4501f] active:scale-95">
                  <span>Book Event</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Key Info 4-Column Grid Below Hero (Screenshot 2) ── */}
        <div className="mx-auto max-w-[1440px] px-6 py-8 sm:px-8 lg:px-12">
          <div className="rounded-[20px] bg-[#121212] border border-white/5 p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Column 1: Date & Time */}
              <div className="md:pr-4 md:border-r md:border-[#ED5A2E]/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#ED5A2E]">
                    <CalendarDays className="h-5 w-5" />
                    <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">Date &amp; Time</span>
                  </div>
                  <p className="text-sm font-bold text-white uppercase">3RD - 30TH NOVEMBER, 2025</p>
                  <p className="text-xs text-white/60 mt-1">7:00 PM - 11:00 PM EST</p>
                </div>
                <button className="mt-4 flex items-center justify-center gap-1.5 rounded-lg bg-[#ED5A2E] py-2 px-3 text-xs font-bold text-white shadow transition-all hover:bg-[#d4501f]">
                  <Download className="h-3.5 w-3.5" />
                  <span>ADD TO CALENDER</span>
                </button>
              </div>

              {/* Column 2: Location */}
              <div className="md:px-4 md:border-r md:border-[#ED5A2E]/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#ED5A2E]">
                    <MapPin className="h-5 w-5" />
                    <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">Location</span>
                  </div>
                  <p className="text-sm font-bold text-white">02 Arena London, United Kingdom</p>
                  <p className="text-xs text-white/60 mt-1">123 Main St, London, UK 10001</p>
                </div>
                <Link href="#" className="mt-4 flex items-center gap-1 text-xs font-medium text-[#ED5A2E] hover:underline">
                  <span>View on map</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Column 3: Ticket Type */}
              <div className="md:px-4 md:border-r md:border-[#ED5A2E]/50">
                <div className="flex items-center gap-2 mb-2 text-[#ED5A2E]">
                  <Ticket className="h-5 w-5" />
                  <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">Ticket Type</span>
                </div>
                <p className="text-sm font-bold text-white">General Admission</p>
              </div>

              {/* Column 4: Age Requirement */}
              <div className="md:pl-4">
                <div className="flex items-center gap-2 mb-2 text-[#ED5A2E]">
                  <UserCheck className="h-5 w-5" />
                  <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">Age Requirement</span>
                </div>
                <p className="text-sm font-bold text-white">18+ with valid ID required</p>
              </div>
            </div>
          </div>

          {/* Section: What to expect, etc. */}
          <div className="mt-12 space-y-12">
            <section className="rounded-[18px] bg-[#111111] p-6 sm:p-8">
              <h2 className="text-[1.35rem] font-bold uppercase tracking-tight">What to expect</h2>
              <p className="mt-4 max-w-[1160px] text-[0.94rem] leading-relaxed text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu luctus risus. Sed eu pharetra mi, vel suscipit nibh. Mauris volutpat, arcu sed consequat pulvinar, dolor ante feugiat est, id ultricies arcu urna eu augue. Fusce sed odio ipsum. Suspendisse sit amet aliquam nisl. Sed in lacinia massa. Nulla maximus varius sem nec tempor. Curabitur quis elit non mi eleifend finibus.
              </p>
              <div className="mt-8"><SectionRule /></div>

              <h2 className="mt-8 text-[1.35rem] font-bold uppercase tracking-tight">Target audience</h2>
              <p className="mt-4 text-[0.94rem] leading-relaxed text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="mt-8"><SectionRule /></div>

              <h2 className="mt-8 text-[1.35rem] font-bold uppercase tracking-tight">What&apos;s included</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2 text-[0.92rem] text-white/85">
                {["Premium Seating With Excellent Sightlights", "Light Refreshments", "Full Bar Service", "Networking Opportunities"].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-[#ED5A2E]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8"><SectionRule /></div>

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

            {/* Reusable Meet Organizer Card */}
            <div className="mt-12">
              <OrganizerCard
                title="Meet the Organizer"
                name="Elizabeth R Events"
                bio="Passionate about bringing world-class experiences to Lagos. We've been curating unforgettable music events since 2018, hosting over 150 performers and welcoming 10,000+ artists worldwide."
                eventSeriesCount="24 Event Series"
                followersCount="12.5k Followers"
                avatarLetter="E"
                verified={true}
              />
            </div>

            {/* Event Schedule */}
            <section className="rounded-[18px] bg-[#111111] p-6 sm:p-8">
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

            {/* Location Section */}
            <section className="rounded-[18px] bg-[#111111] p-6 sm:p-8">
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
              </div>
            </section>

            {/* Reviews */}
            <section className="rounded-[18px] bg-[#111111] p-6 sm:p-8">
              <h2 className="text-[1.35rem] font-bold uppercase tracking-tight">Reviews &amp; Ratings</h2>
              <div className="mt-6 space-y-6">
                {reviews.map((item) => (
                  <div key={item.id} className="grid gap-4 lg:grid-cols-[60px_1fr_120px] items-start border-b border-white/5 pb-6">
                    <div className="h-12 w-12 rounded-full bg-[#b76d4c]" />
                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-xs text-white/50">{item.date}</p>
                      <p className="mt-2 text-sm text-white/80 leading-relaxed">{item.text}</p>
                    </div>
                    <div className="text-[#FFD400] lg:text-right"><Stars /></div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </section>

      {/* ── MOBILE VIEW (Screenshot 3 Right) ─────────────────────────────── */}
      <section className="lg:hidden">
        {/* Cover Image with Header Icons */}
        <div className="relative h-[290px] w-full">
          <Image src="/event-hero.jpg" alt="Event mobile hero" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
            <Link href="/explore" className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Overlapping Content Sheet (Screenshot 3 Right) */}
        <div className="relative -mt-6 rounded-t-[24px] bg-black px-4 pt-5 pb-8 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black uppercase tracking-tight text-white font-[var(--font-montserrat)]">
                5IVE LIVE AT <span className="text-[#ED5A2E]">02</span> ARENA
              </h1>
              <div className="mt-1.5 flex items-center gap-1.5 text-xs text-white/80">
                <span>by Elizabeth R Events</span>
                <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ED5A2E] text-[0.55rem] text-white">✓</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-white/75">
                <Users className="h-3.5 w-3.5 text-[#ED5A2E]" />
                <span>10,000 people are attending</span>
              </div>
            </div>

            <button
              onClick={() => setIsFav(!isFav)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white active:scale-90"
            >
              <Heart className={`h-4 w-4 ${isFav ? "fill-[#ED5A2E] text-[#ED5A2E]" : "text-white"}`} />
            </button>
          </div>

          {/* Full Width Button: Add to Calendar */}
          <button className="w-full rounded-xl bg-[#ED5A2E] py-3.5 text-sm font-bold text-white shadow-lg transition-all active:scale-95">
            Add to Calendar
          </button>

          {/* Quick Details Grid */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <div className="text-xs font-bold uppercase text-white underline decoration-[#ED5A2E] decoration-2 underline-offset-8">Ticket Type</div>
              <p className="mt-2 text-xs text-white/85">General Admission</p>
            </div>
            <div>
              <div className="text-xs font-bold uppercase text-white underline decoration-[#ED5A2E] decoration-2 underline-offset-8">Schedule</div>
              <p className="mt-2 text-xs text-white/85">3rd - 30th Nov, 2025</p>
            </div>
          </div>

          {/* Reusable Organizer Card */}
          <div className="pt-2">
            <OrganizerCard
              title="Meet the Organizer"
              name="Elizabeth R Events"
              bio="Passionate about bringing world-class experiences to Lagos."
              eventSeriesCount="24 Event Series"
              followersCount="12.5k Followers"
              avatarLetter="E"
              verified={true}
            />
          </div>

          {/* Schedule */}
          <div className="pt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white underline decoration-[#ED5A2E] decoration-2 underline-offset-8 mb-4">
              Event Schedule
            </h2>
            <div className="rounded-xl bg-[#111111] p-4 space-y-4">
              {[
                ["7:00 PM", "Doors open & Welcome drinks", "Arrive, check in, and enjoy complimentary beverages"],
                ["7:30 PM", "Opening Act", "Local talent showcase featuring emerging afrobeats artists"],
                ["8:30 PM", "Main Performance", "Headlining afrobeats ensemble performs classic pieces"],
                ["10:30 PM", "Networking Session", "Meet fellow afrobeats enthusiasts and the performers"],
              ].map(([time, title, desc]) => (
                <div key={time} className="flex gap-3 text-xs">
                  <div className="text-[#ED5A2E] font-semibold w-16 shrink-0">{time}</div>
                  <div>
                    <p className="font-semibold text-white">{title}</p>
                    <p className="text-[0.7rem] text-white/60">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </main>
  );
}
