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
  Star,
  Users,
} from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { SeriesPassCard } from "@/components/shared/series-pass-card";
import { OrganizerCard } from "@/components/shared/organizer-card";

const details = [
  { title: "GENRE", value: "AFROBEATS", icon: "/icon-calendar.png" },
  {
    title: "SCHEDULE",
    value: "3RD - 30TH NOVEMBER, 2025",
    icon: "/icon-calendar.png",
  },
  {
    title: "VENUE",
    value: "02 ARENA LONDON, UNITED KINGDOM",
    icon: "/icon-location.png",
  },
  {
    title: "PRICE",
    value: "$120 - $200 PER EVENT",
    icon: "/icon-dollar-circle.png",
  },
  { title: "RATING", value: "4.8 / 5", icon: "/icon-star.png" },
  { title: "CAPACITY", value: "20,000 SEATS", icon: "/icon-group.png" },
];

const upcoming = [
  {
    status: "Available",
    title: "5IVE ALBUM TOUR",
    date: "Nov 15, 2025",
    time: "20:00 WAT",
    location: "O2 Arena London, United Kingdom",
    price: "$70",
  },
  {
    status: "Selling Fast",
    title: "5IVE ALBUM TOUR",
    date: "Nov 15, 2025",
    time: "20:00 WAT",
    location: "O2 Arena London, United Kingdom",
    price: "$70",
  },
  {
    status: "Sold Out",
    title: "5IVE ALBUM TOUR",
    date: "Nov 15, 2025",
    time: "20:00 WAT",
    location: "O2 Arena London, United Kingdom",
    price: "$70",
  },
];

const highlights = Array.from({ length: 6 }, () => "MIAMI, FLORIDA");

const faqs = [
  {
    q: "Can I attend individual events?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu luctus risus. Sed eu pharetra mi, vel suscipit nibh.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    q: "Is there parking available?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    q: "Are recordings available?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    q: "Are there age restrictions?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu luctus risus. Sed eu pharetra mi.",
  },
];

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isFav, setIsFav] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white font-[var(--font-inter)]">
      {/* ── DESKTOP VIEW (Screenshot 1) ─────────────────────────────────── */}
      <section className="hidden lg:block">
        <div className="relative min-h-[760px] overflow-hidden">
          <Image
            src="/event-hero.jpg"
            alt="Series hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black" />

          <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-12 pt-6 sm:px-8 lg:px-12">
            {/* Desktop Header */}
            <header className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <Link
                  href="/explore"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Link>
                <Link href="/" className="inline-flex items-center">
                  <Logo width={100} height={36} className="h-7 w-auto" />
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
                  <Heart
                    className={`h-4 w-4 ${isFav ? "fill-[#ED5A2E] text-[#ED5A2E]" : "text-white"}`}
                  />
                </button>
              </div>
            </header>

            {/* Desktop Hero Content (Screenshot 1) */}
            <div className="mt-12 flex items-end justify-between gap-8">
              <div className="max-w-[760px]">
                {/* Yellow D Badge */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD400] text-xl font-bold text-black shadow-lg">
                  D
                </div>

                <h1 className="text-[4rem] xl:text-[5.2rem] font-black uppercase leading-[0.88] tracking-tight font-[var(--font-montserrat)]">
                  5IVE AT
                  <br />
                  <span className="text-[#ED5A2E]">02</span>ARENA
                </h1>

                <div className="mt-4 flex items-center gap-2 text-sm text-white/90">
                  <span>by Elizabeth R Events</span>
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#ED5A2E] text-[0.6rem] text-white">
                    ✓
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-[0.82rem] text-white/80 font-semibold uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1.5 text-[#ED5A2E]">
                    <CalendarDays className="h-4 w-4 text-[#ED5A2E]" />
                    <span className="text-white/85">8 EVENTS</span>
                  </span>
                  <span className="text-[#ED5A2E]">•</span>
                  <span>4 WEEKS</span>
                  <span className="text-[#ED5A2E]">•</span>
                  <span className="inline-flex items-center gap-1.5 text-[#ED5A2E]">
                    <MapPin className="h-4 w-4 text-[#ED5A2E]" />
                    <span className="text-white/85">
                      02 ARENA LONDON, UNITED KINGDOM
                    </span>
                  </span>
                </div>

                <div className="mt-6">
                  <button className="rounded-xl bg-[#ED5A2E] px-8 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#d4501f] active:scale-95">
                    VIEW ALL DATES
                  </button>
                </div>
              </div>

              {/* Floating Book Event Button (Right side per Screenshot 1) */}
              <div className="pb-4">
                <button className="flex items-center gap-2 rounded-xl bg-[#ED5A2E] px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-[#ED5A2E]/30 transition-all hover:bg-[#d4501f] active:scale-95">
                  <span>Book Event</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="mt-16 flex gap-8 border-b border-white/20 text-[0.88rem]">
              {["Overview", "Events", "Reviews", "About Organizers"].map(
                (item, index) => (
                  <button
                    key={item}
                    className={`pb-3 transition-colors ${
                      index === 0
                        ? "border-b-2 border-[#ED5A2E] font-semibold text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </nav>
          </div>
        </div>

        {/* Desktop Sections */}
        <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-8 lg:px-12">
          <div className="max-w-[1280px]">
            <p className="max-w-[1160px] text-[0.94rem] leading-relaxed text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              eu luctus risus. Sed eu pharetra mi, vel suscipit nibh. Mauris
              volutpat, arcu sed consequat pulvinar, dolor ante feugiat est, id
              ultricies arcu urna eu augue. Fusce sed odio ipsum. Suspendisse
              sit amet aliquam nisl. Sed in lacinia massa. Nulla maximus varius
              sem nec tempor. Curabitur quis elit non mi eleifend finibus.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {details.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[12px] bg-[#111111] p-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#FF9A76]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <h3 className="text-[1.05rem] font-medium tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.9rem] text-white/80">
                    {item.value}
                  </p>
                </article>
              ))}
            </div>

            {/* Reusable Series Pass Card */}
            <div className="mt-16">
              <SeriesPassCard />
            </div>

            {/* Upcoming Events */}
            <section className="mt-16">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-[1.35rem] font-bold uppercase tracking-tight">
                  Upcoming Events
                </h2>
                <Link
                  href="/explore"
                  className="text-[0.9rem] text-white/75 hover:text-white"
                >
                  View All Events
                </Link>
              </div>
              <div className="space-y-5">
                {upcoming.map((item) => (
                  <article
                    key={`${item.title}-${item.status}`}
                    className="grid overflow-hidden rounded-[18px] bg-[#151515] lg:grid-cols-[340px_1fr]"
                  >
                    <div className="relative min-h-[220px]">
                      <Image
                        src="/event-hero.jpg"
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[0.82rem] text-black font-semibold">
                        {item.status}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-4 text-[0.92rem] text-white/85">
                        <span className="inline-flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-[#ED5A2E]" />{" "}
                          {item.date}
                        </span>
                        <span className="text-[#ED5A2E]">{"•"}</span>
                        <span className="inline-flex items-center gap-2">
                          <Clock3 className="h-4 w-4 text-[#ED5A2E]" />{" "}
                          {item.time}
                        </span>
                      </div>
                      <h3 className="mt-4 text-[1.1rem] font-medium">
                        {item.title}
                      </h3>
                      <div className="mt-4 flex items-center gap-2 text-[0.95rem] text-white/85">
                        <MapPin className="h-4 w-4 text-[#ED5A2E]" />
                        <span>{item.location}</span>
                      </div>
                      <div className="mt-6 flex items-center justify-between border-t border-[#ED5A2E]/60 pt-4">
                        <div>
                          <p className="text-[0.8rem] text-white/70">
                            Starting At
                          </p>
                          <p className="text-[1.8rem] font-semibold">
                            {item.price}
                          </p>
                        </div>
                        <button className="rounded-full bg-[#ED5A2E] px-6 py-3 text-[0.95rem] font-semibold text-white hover:bg-[#d4501f] transition-all">
                          Book This Event
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section className="mt-16">
              <h2 className="text-[1.35rem] font-bold uppercase tracking-tight">
                Past Events Highlights
              </h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {highlights.map((label, idx) => (
                  <div
                    key={`${label}-${idx}`}
                    className="relative h-[200px] overflow-hidden rounded-[14px]"
                  >
                    <Image
                      src="/event-feature.jpg"
                      alt={label}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-red-600/65" />
                    <span className="absolute bottom-4 left-4 text-[0.82rem]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Reusable Meet Organizer Card */}
            <div className="mt-16">
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

            {/* FAQs */}
            <section className="mt-16">
              <h2 className="text-[1.35rem] font-bold uppercase tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="mt-6">
                {faqs.map((faq, idx) => (
                  <div key={faq.q} className="border-b border-[#ED5A2E] py-5">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="flex w-full items-center justify-between text-left text-[1rem] font-medium"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-[#ED5A2E] transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openFaq === idx ? (
                      <p className="mt-3 max-w-[900px] text-[0.92rem] leading-relaxed text-[#ED5A2E]">
                        {faq.a}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black px-6 py-12 text-white lg:px-16">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider text-white">
                  Contact
                </h4>
                <p className="mb-4 text-[0.88rem] font-semibold text-[#ED5A2E]">
                  info@getontrck.com
                </p>
                <p className="text-[0.85rem] text-white/70">
                  Follow the brand across the channels you already know.
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
                Copyright &copy; 2025 Trck Entertainment &amp; Technology Ltd.
                All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>

      {/* ── MOBILE VIEW (Screenshot 3 Left) ─────────────────────────────── */}
      <section className="lg:hidden">
        {/* Cover Photo with Back & Share Buttons */}
        <div className="relative h-[290px] w-full">
          <Image
            src="/event-hero.jpg"
            alt="Event Series mobile hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
            <Link
              href="/explore"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Overlapping Content Sheet (Screenshot 3 Left) */}
        <div className="relative -mt-6 rounded-t-[24px] bg-black px-4 pt-5 pb-8 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black uppercase tracking-tight text-white font-[var(--font-montserrat)]">
                5IVE AT <span className="text-[#ED5A2E]">02</span> ARENA
              </h1>
              <div className="mt-1.5 flex items-center gap-1.5 text-xs text-white/80">
                <span>by Elizabeth R Events</span>
                <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ED5A2E] text-[0.55rem] text-white">
                  ✓
                </span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[0.72rem] text-white/75">
                <span className="inline-flex items-center gap-1 text-[#ED5A2E]">
                  <CalendarDays className="h-3 w-3" />
                  <span className="text-white/85">8 Events</span>
                </span>
                <span>•</span>
                <span>4 Weeks</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 text-[#ED5A2E]">
                  <MapPin className="h-3 w-3" />
                  <span className="text-white/85">
                    02 Arena London, United Kingdom
                  </span>
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsFav(!isFav)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white active:scale-90"
            >
              <Heart
                className={`h-4 w-4 ${isFav ? "fill-[#ED5A2E] text-[#ED5A2E]" : "text-white"}`}
              />
            </button>
          </div>

          {/* Full Width Button: View All Dates */}
          <button className="w-full rounded-xl bg-[#ED5A2E] py-3.5 text-sm font-bold text-white shadow-lg transition-all active:scale-95">
            View All Dates
          </button>

          {/* Section: OVERVIEW */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white underline decoration-[#ED5A2E] decoration-2 underline-offset-8">
              OVERVIEW
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-white/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              cursus metus sed felis pulvinar gravida. Vivamus eu augue volutpat
              lectus lacinia molestie.
            </p>
          </div>

          {/* Series Pass Reusable Card */}
          <div className="pt-2">
            <SeriesPassCard />
          </div>

          {/* Organizer Reusable Card */}
          <div className="pt-2">
            <OrganizerCard
              title="Meet the Organizer"
              name="Elizabeth R Events"
              bio="Passionate about bringing world-class experiences to Lagos. We've been curating unforgettable music events since 2018."
              eventSeriesCount="24 Event Series"
              followersCount="12.5k Followers"
              avatarLetter="E"
              verified={true}
            />
          </div>

          {/* FAQs */}
          <div className="pt-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white underline decoration-[#ED5A2E] decoration-2 underline-offset-8 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={faq.q} className="border-b border-[#ED5A2E]/60 pb-3">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="flex w-full items-center justify-between text-left text-xs font-medium"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 text-[#ED5A2E] transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === idx ? (
                    <p className="mt-2 text-xs leading-relaxed text-[#ED5A2E]">
                      {faq.a}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
