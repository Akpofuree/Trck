"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  User,
  Check,
  ArrowLeft,
  Share2,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Image as ImageIcon,
  Folder,
  Navigation,
  Car,
  Bus,
  Info,
  Compass,
  Star,
  Users,
  ShieldCheck,
  QrCode,
  Zap,
  Plus,
  Trash2,
  Edit2,
  Upload,
  Video,
  Eye,
  CheckCircle,
  X,
} from "lucide-react";

export const BRAND_ORANGE = "#FE6600";

type Step = {
  number: number;
  title: string;
  description: string;
  href: string;
};

const FLOW_STEPS: Step[] = [
  { number: 1, title: "Basic Info", description: "Name, description, category", href: "/host/events/new" },
  { number: 2, title: "Schedule", description: "Date, time, duration", href: "/host/events/new/schedule" },
  { number: 3, title: "Location", description: "Venue or online link", href: "/host/events/new/location" },
  { number: 4, title: "Tickets", description: "Pricing & availability", href: "/host/events/new/tickets" },
  { number: 5, title: "Media", description: "Images & gallery", href: "/host/events/new/media" },
  { number: 6, title: "Review", description: "Preview & publish", href: "/host/events/new/review" },
];

function ArrowLeftIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M15 19L8 12L15 5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[2.5rem] w-[2.5rem]">
      <path d="M12 22s6-5.1 6-12a6 6 0 10-12 0c0 6.9 6 12 6 12z" fill={BRAND_ORANGE} />
      <circle cx="12" cy="10" r="2.3" fill="#111111" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[2.5rem] w-[2.5rem]">
      <path d="M4 7.5A1.5 1.5 0 015.5 6h8A1.5 1.5 0 0115 7.5v9A1.5 1.5 0 0113.5 18h-8A1.5 1.5 0 014 16.5v-9z" fill="#fff" />
      <path d="M16 9.2l4-2v9.6l-4-2.1V9.2z" fill="#fff" />
    </svg>
  );
}

// ── REUSABLE TIPS CARD (LIGHT BACKGROUND WITH 💡 AND GREEN CHECKS) ──
export function TipsCard({
  title = "Tips for a great event listing",
  tips = [
    "Use a clear descriptive title that tells what your event is about",
    "Write a compelling description that highlights key benefits",
    "Choose the most relevant category to help people discover your event",
    "Add relevant tags to improve search visibility",
  ],
}: {
  title?: string;
  tips?: string[];
}) {
  return (
    <div className="mt-[2rem] rounded-[0.85rem] border border-[#FE6600] bg-[#fff2ea] p-[1.5rem] text-[#1e1e1e] shadow-sm">
      <div className="flex items-start gap-[0.85rem]">
        <span className="text-2xl mt-0.5 select-none">💡</span>
        <div className="flex-1">
          <h3 className="font-montserrat text-[1.125rem] font-bold leading-none text-black/85">
            {title}
          </h3>
          <div className="mt-[1rem] space-y-[0.75rem]">
            {tips.map((tip) => (
              <div key={tip} className="flex items-start gap-[0.7rem]">
                <Check className="mt-[0.15rem] h-[1.05rem] w-[1.05rem] text-[#16A34A] shrink-0 stroke-[3]" />
                <p className="font-montserrat text-[0.875rem] font-medium leading-snug text-black/75">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── REUSABLE FOOTER ─────────────────────────────────────────────
function FlowFooter() {
  return (
    <footer className="mt-[4rem] border-t border-white/10 pt-[2.5rem]">
      <div className="grid gap-[2rem] md:grid-cols-2 xl:grid-cols-4">
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">Contact</h4>
          <p className="mt-[0.65rem] text-[0.875rem] font-semibold text-[#FE6600]">info@getontrck.com</p>
          <div className="mt-[1rem] flex items-center gap-[0.8rem] text-[1.2rem] text-white/70">
            <span className="hover:text-white cursor-pointer">in</span>
            <span className="hover:text-white cursor-pointer">◎</span>
            <span className="hover:text-white cursor-pointer">♪</span>
            <span className="hover:text-white cursor-pointer">X</span>
          </div>
        </div>
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">Company</h4>
          <ul className="mt-[0.65rem] space-y-[0.55rem] text-[0.875rem] text-white/70">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">How it works</li>
            <li className="hover:text-white cursor-pointer">Features</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">Legal</h4>
          <ul className="mt-[0.65rem] space-y-[0.55rem] text-[0.875rem] text-white/70">
            <li className="hover:text-white cursor-pointer">Privacy policy</li>
            <li className="hover:text-white cursor-pointer">Terms of service</li>
            <li className="hover:text-white cursor-pointer">Acceptable use policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">Support</h4>
          <ul className="mt-[0.65rem] space-y-[0.55rem] text-[0.875rem] text-white/70">
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>
      </div>
      <p className="mt-[2rem] border-t border-white/10 pt-[1rem] text-[0.72rem] leading-snug text-white/40">
        TRCK is a leisure technology platform based in Nigeria. All experiences are provided by independent third-party creators. TRCK does not host or supervise these experiences and disclaims liability for third-party actions.
        <br />
        Copyright © 2025 Trck Entertainment &amp; Technology Ltd. All rights reserved.
      </p>
    </footer>
  );
}

// ── REUSABLE FLOW SIDEBAR ───────────────────────────────────────
function EventSidebar({ activeStep }: { activeStep: number }) {
  return (
    <aside className="w-full border-b border-white/10 bg-[#090909] px-[1.5rem] py-[1.5rem] xl:w-[20.25rem] xl:border-b-0 xl:border-r xl:border-r-[#1d1d1d] xl:px-[1.25rem] xl:py-[1.5rem] shrink-0">
      <div className="flex h-full flex-col">
        {/* TODO: Route /host/events does not exist. Clarify with product/design. Temporarily linking to /host/dashboard. */}
        <Link
          href="/host/dashboard"
          className="inline-flex items-center gap-[0.6rem] text-[1.05rem] font-medium text-white transition-opacity hover:opacity-80"
        >
          <ArrowLeft className="h-[1.1rem] w-[1.1rem] text-[#2d6bff]" />
          Back To Events
        </Link>

        <div className="mt-[1.5rem] inline-flex w-fit items-center gap-[0.5rem] rounded-full bg-[#FE6600] px-[1rem] py-[0.55rem] text-[0.85rem] font-semibold text-white">
          <span className="h-[0.6rem] w-[0.6rem] rounded-full bg-white animate-pulse" />
          Draft
        </div>

        <div className="mt-[2rem]">
          <h1 className="font-montserrat text-[1.5rem] font-bold text-white">New Event</h1>
          <p className="mt-[0.5rem] font-montserrat text-[0.85rem] font-medium text-white/60">
            Complete all steps to publish your event.
          </p>
        </div>

        <div className="my-[1.5rem] h-px bg-white/10" />

        <nav className="space-y-[1.4rem]">
          {FLOW_STEPS.map((step) => {
            const isCompleted = step.number < activeStep;
            const isActive = step.number === activeStep;
            return (
              <Link key={step.number} href={step.href} className="flex items-start gap-[0.75rem] group">
                <div
                  className={`mt-[0.1rem] flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full text-[0.95rem] font-bold transition-all shrink-0 ${
                    isCompleted
                      ? "bg-[#16A34A] text-white"
                      : isActive
                      ? "bg-[#FE6600] text-white ring-4 ring-[#FE6600]/20"
                      : "bg-[#252525] text-white/40 group-hover:bg-[#303030]"
                  }`}
                >
                  {isCompleted ? <Check className="h-4 w-4 stroke-[3]" /> : step.number}
                </div>
                <div>
                  <p
                    className={`font-montserrat text-[1rem] font-semibold ${
                      isActive ? "text-white" : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p className="mt-[0.25rem] font-montserrat text-[0.75rem] text-white/50">
                    {step.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-[2rem]">
          <div className="h-px bg-white/10" />
          <div className="mt-[1.5rem]">
            <Link
              href="/"
              className="inline-flex items-center gap-[0.55rem] font-montserrat text-[0.95rem] font-medium text-white/70 hover:text-white"
            >
              <span className="flex h-[1.1rem] w-[1.1rem] items-center justify-center rounded-full bg-[#2d6bff] text-[0.75rem] font-bold text-white">
                ?
              </span>
              Help &amp; Support
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

// ── 1. BASIC INFORMATION PAGE ──────────────────────────────────
export function BasicInfoPage() {
  const [ticketName, setTicketName] = useState("5IVE LIVE AT 02 ARENA");
  const [category, setCategory] = useState("Concert & Live Music");
  const [eventType, setEventType] = useState<"physical" | "virtual">("physical");
  const [description, setDescription] = useState(
    "Join us for an electrifying night of live afrobeats music headlined by 5IVE at the iconic O2 Arena in London."
  );
  const [tags, setTags] = useState(["Afrobeats", "Concert", "Live Music", "London"]);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (t: string) => {
    setTags(tags.filter((item) => item !== t));
  };

  return (
    <main className="min-h-screen bg-black text-white font-montserrat">
      <div className="mx-auto flex min-h-screen w-full max-w-[96rem] flex-col xl:flex-row">
        <EventSidebar activeStep={1} />

        <section className="flex-1 px-4 py-8 sm:px-8 lg:px-12 xl:py-12">
          <div className="mx-auto max-w-[74rem]">
            <div className="max-w-[46rem]">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Basic Information</h2>
              <p className="mt-2 text-base text-white/70">
                Tell attendees what your event is about and what makes it special
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-[#141414] border border-white/10 p-6 sm:p-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-white">Event Title</label>
                <input
                  type="text"
                  value={ticketName}
                  onChange={(e) => setTicketName(e.target.value)}
                  maxLength={75}
                  className="w-full rounded-xl bg-[#222222] border border-white/10 px-4 py-3 text-sm font-medium text-white outline-none focus:border-[#FE6600] transition-colors"
                />
                <div className="mt-2 flex justify-between text-xs text-white/50">
                  <span>Be clear and descriptive</span>
                  <span>{ticketName.length}/75</span>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">Event Category</label>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-xl bg-[#222222] border border-white/10 px-4 py-3 text-sm font-medium text-white appearance-none outline-none focus:border-[#FE6600] cursor-pointer"
                  >
                    <option>Concert &amp; Live Music</option>
                    <option>Nightlife &amp; Clubbing</option>
                    <option>Festival &amp; Culture</option>
                    <option>Sports &amp; Fitness</option>
                    <option>Arts &amp; Theatre</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" size={16} />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-white">Event Type</label>
                <div className="grid gap-4 md:grid-cols-2">
                  <div
                    onClick={() => setEventType("physical")}
                    className={`rounded-xl border p-5 cursor-pointer transition-all ${
                      eventType === "physical"
                        ? "border-[#FE6600] bg-[#1a130f]"
                        : "border-white/10 bg-[#181818] hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <LocationIcon />
                      <div>
                        <p className="font-semibold text-white">Physical Event</p>
                        <p className="text-xs text-white/60 mt-1">In-person at a venue</p>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => setEventType("virtual")}
                    className={`rounded-xl border p-5 cursor-pointer transition-all ${
                      eventType === "virtual"
                        ? "border-[#FE6600] bg-[#1a130f]"
                        : "border-white/10 bg-[#181818] hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <VideoIcon />
                      <div>
                        <p className="font-semibold text-white">Virtual Event</p>
                        <p className="text-xs text-white/60 mt-1">Online meeting or stream</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">Description</label>
                <textarea
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  maxLength={2000}
                  className="w-full rounded-xl bg-[#222222] border border-white/10 px-4 py-3 text-sm font-medium text-white outline-none focus:border-[#FE6600] transition-colors resize-none"
                />
                <div className="mt-2 flex justify-between text-xs text-white/50">
                  <span>Include key details and highlights</span>
                  <span>{description.length}/2000</span>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">Tags</label>
                <div className="flex flex-wrap items-center gap-2 rounded-xl bg-[#222222] border border-white/10 p-3 min-h-[48px]">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 bg-[#FE6600]/20 border border-[#FE6600]/40 text-[#FE6600] text-xs font-semibold px-2.5 py-1 rounded-lg"
                    >
                      {t}
                      <button type="button" onClick={() => removeTag(t)} className="hover:text-white">
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleAddTag}
                    placeholder="Type tag & press Enter..."
                    className="flex-1 bg-transparent text-xs text-white outline-none min-w-[140px]"
                  />
                </div>
                <p className="mt-2 text-xs text-white/50">Press Enter or comma to add tags</p>
              </div>
            </div>

            {/* Tips Section */}
            <TipsCard
              title="Tip for a Great Event Listing"
              tips={[
                "Use a clear descriptive title that tells what your event is about",
                "Write a compelling description that highlights key benefits",
                "Choose the most relevant category to help people discover your event",
                "Add relevant tags to improve search visibility",
              ]}
            />

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              {/* TODO: Route /host/events does not exist. Clarify with product/design. Temporarily linking to /host/dashboard. */}
              <Link href="/host/dashboard" className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white/70 hover:text-white">
                <ArrowLeft size={16} />
                Back To Events
              </Link>

              <Link
                href="/host/events/new/schedule"
                className="inline-flex items-center justify-center rounded-xl bg-[#FE6600] px-5 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                Continue to Schedule
              </Link>
            </div>

            <FlowFooter />
          </div>
        </section>
      </div>
    </main>
  );
}

// ── 2. SCHEDULE PAGE ───────────────────────────────────────────
export function SchedulePage() {
  const [eventDate, setEventDate] = useState("2024-11-15");
  const [eventTime, setEventTime] = useState("19:00");
  const [duration, setDuration] = useState("4 hours");
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState("Daily");
  const [startDate, setStartDate] = useState("2026-05-01");
  const [endDate, setEndDate] = useState("2026-05-31");

  return (
    <main className="min-h-screen bg-black text-white font-montserrat">
      <div className="mx-auto flex min-h-screen w-full max-w-[96rem] flex-col xl:flex-row">
        <EventSidebar activeStep={2} />

        <section className="flex-1 px-4 py-8 sm:px-8 lg:px-12 xl:py-12">
          <div className="mx-auto max-w-[74rem]">
            <div className="max-w-[46rem]">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Schedule</h2>
              <p className="mt-2 text-base text-white/70">
                Plan the date and timing for your event
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-[#141414] border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="grid gap-4 lg:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Date</label>
                  <div className="flex items-center justify-between rounded-xl bg-[#222222] border border-white/10 px-4 py-3 text-sm text-white">
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="bg-transparent text-white outline-none w-full cursor-pointer"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Time</label>
                  <div className="flex items-center justify-between rounded-xl bg-[#222222] border border-white/10 px-4 py-3 text-sm text-white">
                    <input
                      type="time"
                      value={eventTime}
                      onChange={(e) => setEventTime(e.target.value)}
                      className="bg-transparent text-white outline-none w-full cursor-pointer"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Duration</label>
                  <div className="relative">
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full rounded-xl bg-[#222222] border border-white/10 px-4 py-3 text-sm text-white appearance-none outline-none cursor-pointer"
                    >
                      <option>1 hour</option>
                      <option>2 hours</option>
                      <option>3 hours</option>
                      <option>4 hours</option>
                      <option>All Day</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" size={16} />
                  </div>
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#FE6600]" />
                <span className="text-sm text-white/80">
                  This Event will take place on Friday, 15th of November, 2024 from 07:00 PM until 11:00 PM
                </span>
              </label>

              <div className="border-t border-white/10 pt-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)}
                    className="w-4 h-4 accent-[#FE6600]"
                  />
                  <div>
                    <span className="text-sm font-semibold text-white">This is a recurring event</span>
                    <p className="text-xs text-white/50">Event repeats on a regular schedule</p>
                  </div>
                </label>

                {isRecurring && (
                  <div className="mt-4 grid gap-4 lg:grid-cols-[1.6fr_1fr_1fr]">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white">How often does this event occur?</label>
                      <select
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        className="w-full rounded-xl bg-[#222222] border border-white/10 px-4 py-3 text-sm text-white outline-none"
                      >
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white">Starts from</label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full rounded-xl bg-[#222222] border border-white/10 px-4 py-2.5 text-sm text-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white">Till</label>
                      <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full rounded-xl bg-[#222222] border border-white/10 px-4 py-2.5 text-sm text-white outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tips Section — Exact same light box with 💡 and green checks */}
            <TipsCard
              title="Tips for a great event listing"
              tips={[
                "Use a clear descriptive title that tells what your event is about",
                "Write a compelling description that highlights key benefits",
                "Choose the most relevant category to help people discover your event",
                "Add relevant tags to improve search visibility",
              ]}
            />

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <Link href="/host/events/new" className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white/70 hover:text-white">
                <ArrowLeft size={16} />
                Back to Basic Info
              </Link>

              <Link
                href="/host/events/new/location"
                className="inline-flex items-center justify-center rounded-xl bg-[#FE6600] px-5 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                Continue to Location
              </Link>
            </div>

            <FlowFooter />
          </div>
        </section>
      </div>
    </main>
  );
}

// ── 3. LOCATION PAGE (WITH FULL RESTORED INPUTS + DYNAMIC MAP) ──
export function LocationPage() {
  const [locationName, setLocationName] = useState("O2 Arena");
  const [country, setCountry] = useState("United Kingdom");
  const [stateCity, setStateCity] = useState("London");
  const [directions, setDirections] = useState("Take Jubilee Line to North Greenwich station, exit towards the main arena gates.");

  // Interactive Options State
  const [parkingList, setParkingList] = useState([
    "Street parking available. Paid garage 2 blocks away on 5th Ave.",
    "Valet drop-off at Gate 3",
  ]);
  const [transitList, setTransitList] = useState([
    "Subway: L train to 14th St. Bus: M14 to Main St.",
    "North Greenwich Jubilee Line underground station",
  ]);
  const [accessList, setAccessList] = useState([
    "Wheelchair accessible entrance and restrooms available.",
    "Step-free elevator access to all tiers",
  ]);
  const [nearbyList, setNearbyList] = useState([
    "2 blocks from Central Plaza, across from City Museum.",
    "Greenwich Peninsula & Icon Outlet Shopping",
  ]);

  const [newOption, setNewOption] = useState<{ category: string; value: string } | null>(null);

  const handleAddOption = (category: string) => {
    if (!newOption || !newOption.value.trim()) return;
    if (category === "parking") setParkingList([...parkingList, newOption.value.trim()]);
    if (category === "transit") setTransitList([...transitList, newOption.value.trim()]);
    if (category === "access") setAccessList([...accessList, newOption.value.trim()]);
    if (category === "nearby") setNearbyList([...nearbyList, newOption.value.trim()]);
    setNewOption(null);
  };

  return (
    <main className="min-h-screen bg-black text-white font-montserrat">
      <div className="mx-auto flex min-h-screen w-full max-w-[96rem] flex-col xl:flex-row">
        <EventSidebar activeStep={3} />

        <section className="flex-1 px-4 py-8 sm:px-8 lg:px-12 xl:py-12">
          <div className="mx-auto max-w-[74rem]">
            <div className="max-w-[46rem]">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Location</h2>
              <p className="mt-2 text-base text-white/70">
                Plan the location where your event will be held
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-[#141414] border border-white/10 p-6 sm:p-8 space-y-6">
              {/* 3-Column Location, Country, State */}
              <div className="grid gap-4 lg:grid-cols-[1.2fr_0.9fr_0.7fr]">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Location / Venue</label>
                  <input
                    type="text"
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                    placeholder="Search locations..."
                    className="w-full rounded-xl bg-[#222222] border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[#FE6600]"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Country</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full rounded-xl bg-[#222222] border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[#FE6600] cursor-pointer"
                  >
                    <option>United Kingdom</option>
                    <option>Nigeria</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Ghana</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">State / City</label>
                  <input
                    type="text"
                    value={stateCity}
                    onChange={(e) => setStateCity(e.target.value)}
                    placeholder="City or State"
                    className="w-full rounded-xl bg-[#222222] border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[#FE6600]"
                  />
                </div>
              </div>

              {/* Give Directions */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white">Give Directions</label>
                <textarea
                  rows={3}
                  value={directions}
                  onChange={(e) => setDirections(e.target.value)}
                  placeholder="Describe How to get to your event location"
                  className="w-full rounded-xl bg-[#222222] border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-[#FE6600] resize-none"
                />
              </div>

              {/* 4 Option Adder Boxes */}
              <div className="grid gap-6 lg:grid-cols-2 pt-2">
                {/* Parking Options */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#FE6600]">
                      <Car size={16} />
                      <h4 className="text-sm font-semibold text-white">Parking options</h4>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {parkingList.map((opt, i) => (
                      <div key={i} className="flex items-center justify-between rounded-xl bg-[#1c1c1c] border border-white/10 px-4 py-2.5 text-xs text-white/80">
                        <span>{opt}</span>
                        <button type="button" onClick={() => setParkingList(parkingList.filter((_, idx) => idx !== i))} className="text-white/40 hover:text-rose-400">
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ))}
                    {newOption?.category === "parking" ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          autoFocus
                          placeholder="Add parking detail..."
                          value={newOption.value}
                          onChange={(e) => setNewOption({ category: "parking", value: e.target.value })}
                          className="flex-1 bg-[#222222] border border-[#FE6600] rounded-lg px-3 py-1.5 text-xs text-white outline-none"
                        />
                        <button type="button" onClick={() => handleAddOption("parking")} className="bg-[#FE6600] text-white text-xs px-3 py-1.5 rounded-lg font-bold">Save</button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setNewOption({ category: "parking", value: "" })}
                        className="w-full flex items-center justify-between rounded-xl border border-dashed border-white/20 px-4 py-2.5 text-xs text-white/60 hover:text-white hover:border-white/40 transition-colors"
                      >
                        <span>Add option</span>
                        <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Public Transport Options */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#FE6600]">
                      <Bus size={16} />
                      <h4 className="text-sm font-semibold text-white">Public Transport options</h4>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {transitList.map((opt, i) => (
                      <div key={i} className="flex items-center justify-between rounded-xl bg-[#1c1c1c] border border-white/10 px-4 py-2.5 text-xs text-white/80">
                        <span>{opt}</span>
                        <button type="button" onClick={() => setTransitList(transitList.filter((_, idx) => idx !== i))} className="text-white/40 hover:text-rose-400">
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ))}
                    {newOption?.category === "transit" ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          autoFocus
                          placeholder="Add transport route..."
                          value={newOption.value}
                          onChange={(e) => setNewOption({ category: "transit", value: e.target.value })}
                          className="flex-1 bg-[#222222] border border-[#FE6600] rounded-lg px-3 py-1.5 text-xs text-white outline-none"
                        />
                        <button type="button" onClick={() => handleAddOption("transit")} className="bg-[#FE6600] text-white text-xs px-3 py-1.5 rounded-lg font-bold">Save</button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setNewOption({ category: "transit", value: "" })}
                        className="w-full flex items-center justify-between rounded-xl border border-dashed border-white/20 px-4 py-2.5 text-xs text-white/60 hover:text-white hover:border-white/40 transition-colors"
                      >
                        <span>Add option</span>
                        <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Accessibility Options */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#FE6600]">
                      <Info size={16} />
                      <h4 className="text-sm font-semibold text-white">Accessibility options</h4>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {accessList.map((opt, i) => (
                      <div key={i} className="flex items-center justify-between rounded-xl bg-[#1c1c1c] border border-white/10 px-4 py-2.5 text-xs text-white/80">
                        <span>{opt}</span>
                        <button type="button" onClick={() => setAccessList(accessList.filter((_, idx) => idx !== i))} className="text-white/40 hover:text-rose-400">
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ))}
                    {newOption?.category === "access" ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          autoFocus
                          placeholder="Add accessibility feature..."
                          value={newOption.value}
                          onChange={(e) => setNewOption({ category: "access", value: e.target.value })}
                          className="flex-1 bg-[#222222] border border-[#FE6600] rounded-lg px-3 py-1.5 text-xs text-white outline-none"
                        />
                        <button type="button" onClick={() => handleAddOption("access")} className="bg-[#FE6600] text-white text-xs px-3 py-1.5 rounded-lg font-bold">Save</button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setNewOption({ category: "access", value: "" })}
                        className="w-full flex items-center justify-between rounded-xl border border-dashed border-white/20 px-4 py-2.5 text-xs text-white/60 hover:text-white hover:border-white/40 transition-colors"
                      >
                        <span>Add option</span>
                        <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Nearby Spots */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#FE6600]">
                      <Compass size={16} />
                      <h4 className="text-sm font-semibold text-white">Nearby spots</h4>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {nearbyList.map((opt, i) => (
                      <div key={i} className="flex items-center justify-between rounded-xl bg-[#1c1c1c] border border-white/10 px-4 py-2.5 text-xs text-white/80">
                        <span>{opt}</span>
                        <button type="button" onClick={() => setNearbyList(nearbyList.filter((_, idx) => idx !== i))} className="text-white/40 hover:text-rose-400">
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ))}
                    {newOption?.category === "nearby" ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          autoFocus
                          placeholder="Add landmark / spot..."
                          value={newOption.value}
                          onChange={(e) => setNewOption({ category: "nearby", value: e.target.value })}
                          className="flex-1 bg-[#222222] border border-[#FE6600] rounded-lg px-3 py-1.5 text-xs text-white outline-none"
                        />
                        <button type="button" onClick={() => handleAddOption("nearby")} className="bg-[#FE6600] text-white text-xs px-3 py-1.5 rounded-lg font-bold">Save</button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setNewOption({ category: "nearby", value: "" })}
                        className="w-full flex items-center justify-between rounded-xl border border-dashed border-white/20 px-4 py-2.5 text-xs text-white/60 hover:text-white hover:border-white/40 transition-colors"
                      >
                        <span>Add option</span>
                        <Plus size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Live Interactive Map Preview (Screenshot 2 Alignment) */}
              <div className="mt-8 pt-4 border-t border-white/10 space-y-6">
                <div className="h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/15 relative">
                  <iframe
                    title="Event Location Live Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.015,51.495,0.025,51.515&layer=mapnik&marker=51.503,0.0032"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/20 px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-xl">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FE6600] animate-ping" />
                    <span className="text-xs font-bold text-white">{locationName || "02 Arena"}</span>
                  </div>
                </div>

                {/* Venue Name, Address and Get Directions Button Directly Underneath */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white font-montserrat">{locationName || "02 Arena"}</h3>
                  <p className="text-sm text-white/70 leading-snug">
                    Peninsula Square London SE10 0DX<br />United Kingdom
                  </p>

                  <div className="pt-2">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=O2+Arena+London"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#FE6600] px-6 py-3 rounded-xl text-xs font-bold text-white shadow hover:brightness-110 transition-all"
                    >
                      <Navigation size={14} />
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* 2-Column Info Layout (Screenshot 2) */}
                <div className="grid gap-6 md:grid-cols-2 pt-4 border-t border-white/10">
                  {/* Left Column: Parking & Accessibility */}
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[#FE6600]">
                        <Car size={16} />
                        <h4 className="text-sm font-bold text-white">Parking</h4>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">
                        Street parking available. Paid garage 2 blocks away on 5th Ave.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[#FE6600]">
                        <Info size={16} />
                        <h4 className="text-sm font-bold text-white">Accessibility</h4>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">
                        Wheelchair accessible entrance and restrooms available.
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Public Transport & Nearby */}
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[#FE6600]">
                        <Bus size={16} />
                        <h4 className="text-sm font-bold text-white">Public Transport</h4>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">
                        Subway: L train to 14th St. Bus: M14 to Main St.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[#FE6600]">
                        <Compass size={16} />
                        <h4 className="text-sm font-bold text-white">Nearby</h4>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">
                        2 blocks from Central Plaza, across from City Museum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips Section — Light box with 💡 and green checks */}
            <TipsCard
              title="Tips for a great event listing"
              tips={[
                "Use a clear descriptive title that tells what your event is about",
                "Write a compelling description that highlights key benefits",
                "Choose the most relevant category to help people discover your event",
                "Add relevant tags to improve search visibility",
              ]}
            />

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <Link href="/host/events/new/schedule" className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white/70 hover:text-white">
                <ArrowLeft size={16} />
                Back to Schedule
              </Link>

              <Link
                href="/host/events/new/tickets"
                className="inline-flex items-center justify-center rounded-xl bg-[#FE6600] px-5 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                Continue to Tickets
              </Link>
            </div>

            <FlowFooter />
          </div>
        </section>
      </div>
    </main>
  );
}

// ── 4. TICKETS PAGE (WITH FULL TIER & PROMO CREATION & CALCULATIONS) ──
export function TicketPricingPage() {
  const [pricingType, setPricingType] = useState<"paid" | "free" | "donation">("paid");
  const [tiers, setTiers] = useState([
    { id: 1, name: "Early Bird", price: 25, quantity: 100, salesStart: "2024-11-01", salesEnd: "2024-11-10", desc: "Limited early tickets", visible: true, approval: false },
    { id: 2, name: "VIP Package", price: 150, quantity: 150, salesStart: "2024-11-01", salesEnd: "2024-11-15", desc: "Priority entry + lounge", visible: true, approval: false },
    { id: 3, name: "General Admission", price: 50, quantity: 400, salesStart: "2024-11-01", salesEnd: "2024-11-15", desc: "Standard entry", visible: true, approval: false },
  ]);

  const [promos, setPromos] = useState([
    { id: 1, code: "EARLYBIRD2026", discount: "20%", used: "23 / 100", validUntil: "Feb 15, 2026", impact: "-$345.00", active: true },
    { id: 2, code: "STUDENT50", discount: "$50.00", used: "8 / 50", validUntil: "Mar 1, 2026", impact: "-$400.00", active: true },
  ]);

  const [showAddTier, setShowAddTier] = useState(false);
  const [newTierName, setNewTierName] = useState("");
  const [newTierPrice, setNewTierPrice] = useState("35");
  const [newTierQty, setNewTierQty] = useState("100");

  const totalTickets = tiers.reduce((acc, t) => acc + Number(t.quantity || 0), 0);
  const potentialRevenue = tiers.reduce((acc, t) => acc + Number(t.price || 0) * Number(t.quantity || 0), 0);
  const averagePrice = totalTickets > 0 ? (potentialRevenue / totalTickets).toFixed(2) : "0.00";
  const platformFees = (potentialRevenue * 0.08).toFixed(0);

  const handleCreateTier = () => {
    if (!newTierName.trim()) return;
    setTiers([
      ...tiers,
      {
        id: Date.now(),
        name: newTierName,
        price: Number(newTierPrice) || 0,
        quantity: Number(newTierQty) || 50,
        salesStart: "2024-11-01",
        salesEnd: "2024-11-15",
        desc: "Custom tier",
        visible: true,
        approval: false,
      },
    ]);
    setNewTierName("");
    setShowAddTier(false);
  };

  return (
    <main className="min-h-screen bg-black text-white font-montserrat">
      <div className="mx-auto flex min-h-screen w-full max-w-[96rem] flex-col xl:flex-row">
        <EventSidebar activeStep={4} />

        <section className="flex-1 px-4 py-8 sm:px-8 lg:px-12 xl:py-12">
          <div className="mx-auto max-w-[74rem] space-y-8">
            <div className="max-w-[46rem]">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Create Ticket &amp; Set Pricing</h2>
              <p className="mt-2 text-base text-white/70">
                Choose how attendees will access your event and define your ticket structure.
              </p>
            </div>

            {/* Event Pricing Type Selector */}
            <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 space-y-4">
              <h3 className="text-base font-semibold text-white">What type of event is this?</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { type: "paid" as const, title: "Paid Event", desc: "Charge for tickets", icon: "🎟" },
                  { type: "free" as const, title: "Free Event", desc: "No charge to attend", icon: "🎁" },
                  { type: "donation" as const, title: "Donation", desc: "Pay what you want", icon: "💰" },
                ].map((item) => (
                  <div
                    key={item.type}
                    onClick={() => setPricingType(item.type)}
                    className={`rounded-xl border p-5 cursor-pointer text-center transition-all ${
                      pricingType === item.type
                        ? "border-[#FE6600] bg-[#fff2ea] text-black"
                        : "border-white/10 bg-[#1a1a1a] text-white hover:border-white/30"
                    }`}
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <p className={`font-bold text-sm ${pricingType === item.type ? "text-black" : "text-white"}`}>{item.title}</p>
                    <p className={`text-xs mt-0.5 ${pricingType === item.type ? "text-black/60" : "text-white/50"}`}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ticket Tiers List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Ticket Tiers</h3>
                <button
                  type="button"
                  onClick={() => setShowAddTier(!showAddTier)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FE6600] hover:underline"
                >
                  <Plus size={14} /> Add Ticket Tier
                </button>
              </div>

              {/* Add Tier Inline Modal/Box */}
              {showAddTier && (
                <div className="rounded-2xl bg-[#1c1c1c] border border-[#FE6600] p-5 space-y-4">
                  <h4 className="text-sm font-bold text-white">Add New Ticket Tier</h4>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Tier Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Backstage Pass"
                        value={newTierName}
                        onChange={(e) => setNewTierName(e.target.value)}
                        className="w-full bg-[#252525] border border-white/20 rounded-xl px-3 py-2 text-xs text-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Price ($)</label>
                      <input
                        type="number"
                        value={newTierPrice}
                        onChange={(e) => setNewTierPrice(e.target.value)}
                        className="w-full bg-[#252525] border border-white/20 rounded-xl px-3 py-2 text-xs text-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Quantity</label>
                      <input
                        type="number"
                        value={newTierQty}
                        onChange={(e) => setNewTierQty(e.target.value)}
                        className="w-full bg-[#252525] border border-white/20 rounded-xl px-3 py-2 text-xs text-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button type="button" onClick={() => setShowAddTier(false)} className="px-4 py-1.5 text-xs text-white/60 hover:text-white">Cancel</button>
                    <button type="button" onClick={handleCreateTier} className="bg-[#FE6600] px-5 py-1.5 rounded-lg text-xs font-bold text-white">Add Tier</button>
                  </div>
                </div>
              )}

              {tiers.map((tier) => (
                <div key={tier.id} className="rounded-2xl bg-[#141414] border border-white/10 p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FE6600]/20 text-[#FE6600] flex items-center justify-center">
                        <Ticket size={20} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">{tier.name}</h4>
                        <p className="text-xs text-white/50">{tier.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-extrabold text-[#FE6600]">${tier.price}.00</span>
                      <button
                        type="button"
                        onClick={() => setTiers(tiers.filter((t) => t.id !== tier.id))}
                        className="text-white/40 hover:text-rose-400 p-1.5"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3 pt-2">
                    <div>
                      <p className="text-xs text-white/50">Price</p>
                      <p className="text-sm font-bold text-white mt-0.5">${tier.price}.00</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Quantity Available</p>
                      <p className="text-sm font-bold text-white mt-0.5">{tier.quantity} tickets</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/50">Sales Dates</p>
                      <p className="text-sm font-bold text-white mt-0.5">{tier.salesStart} — {tier.salesEnd}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promotional Codes */}
            <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Promotional Codes</h3>
                  <p className="text-xs text-white/50">Create discount codes for your marketing campaigns</p>
                </div>
              </div>

              <div className="space-y-3">
                {promos.map((promo) => (
                  <div key={promo.id} className="rounded-xl bg-[#1a1a1a] border border-white/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-sm text-white">{promo.code}</span>
                        <span className="bg-[#16A34A]/20 text-[#16A34A] text-[10px] font-bold px-2 py-0.5 rounded">Active</span>
                      </div>
                      <p className="text-xs text-white/60">{promo.discount} off all tickets</p>
                    </div>
                    <div className="flex items-center gap-6 text-xs text-white/70">
                      <div>
                        <span className="text-white/40 block">Used</span>
                        <strong>{promo.used}</strong>
                      </div>
                      <div>
                        <span className="text-white/40 block">Impact</span>
                        <strong className="text-amber-400">{promo.impact}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-time Dynamic Revenue Summary */}
            <div className="rounded-2xl bg-[#141414] border border-white/10 p-6">
              <h3 className="text-base font-bold text-white mb-4">Revenue Summary</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-[#1a1a1a] p-4 border border-white/5 space-y-1">
                  <span className="text-xs text-white/50">Total Tickets</span>
                  <p className="text-2xl font-extrabold text-white font-montserrat">{totalTickets}</p>
                  <span className="text-[10px] text-white/40">Available across all tiers</span>
                </div>
                <div className="rounded-xl bg-[#1a1a1a] p-4 border border-white/5 space-y-1">
                  <span className="text-xs text-white/50">Potential Revenue</span>
                  <p className="text-2xl font-extrabold text-[#16A34A] font-montserrat">${potentialRevenue.toLocaleString()}</p>
                  <span className="text-[10px] text-white/40">If all tickets are sold</span>
                </div>
                <div className="rounded-xl bg-[#1a1a1a] p-4 border border-white/5 space-y-1">
                  <span className="text-xs text-white/50">Average Price</span>
                  <p className="text-2xl font-extrabold text-white font-montserrat">${averagePrice}</p>
                  <span className="text-[10px] text-white/40">Per Ticket</span>
                </div>
                <div className="rounded-xl bg-[#1a1a1a] p-4 border border-white/5 space-y-1">
                  <span className="text-xs text-white/50">Platform Fees</span>
                  <p className="text-2xl font-extrabold text-[#FE6600] font-montserrat">${platformFees}</p>
                  <span className="text-[10px] text-white/40">Est. 8% of revenue</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <Link href="/host/events/new/location" className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white/70 hover:text-white">
                <ArrowLeft size={16} />
                Back to Location
              </Link>

              <Link
                href="/host/events/new/media"
                className="inline-flex items-center justify-center rounded-xl bg-[#FE6600] px-5 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                Continue to Media
              </Link>
            </div>

            <FlowFooter />
          </div>
        </section>
      </div>
    </main>
  );
}

// ── 5. MEDIA PAGE (WITH FUNCTIONAL UPLOADS & SCREENSHOT 2 SPECS) ─
export function MediaPage() {
  const [coverPhoto, setCoverPhoto] = useState<string | null>(
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop"
  );
  const [galleryImages, setGalleryImages] = useState<string[]>([
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400&auto=format&fit=crop",
  ]);
  const [logoImage, setLogoImage] = useState<string | null>(null);
  const [brandColor, setBrandColor] = useState("#FE6600");
  const [videoUrl, setVideoUrl] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const handleCoverSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setCoverPhoto(url);
    }
  };

  const handleGallerySelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setGalleryImages([...galleryImages, url]);
    }
  };

  const handleLogoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setLogoImage(url);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-montserrat">
      <div className="mx-auto flex min-h-screen w-full max-w-[96rem] flex-col xl:flex-row">
        <EventSidebar activeStep={5} />

        <section className="flex-1 px-4 py-8 sm:px-8 lg:px-12 xl:py-12">
          <div className="mx-auto max-w-[74rem] space-y-8">
            <div className="max-w-[46rem]">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Media</h2>
              <p className="mt-2 text-base text-white/70">
                Upload cover images and promotional media for your event
              </p>
            </div>

            {/* Hidden File Inputs for Device Access */}
            <input type="file" ref={fileInputRef} onChange={handleCoverSelect} accept="image/*" className="hidden" />
            <input type="file" ref={galleryInputRef} onChange={handleGallerySelect} accept="image/*" className="hidden" />
            <input type="file" ref={logoInputRef} onChange={handleLogoSelect} accept="image/*" className="hidden" />

            <div className="rounded-2xl bg-[#141414] border border-white/10 p-8 space-y-8">
              {/* Drop area */}
              <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/15 bg-[#181818] py-12 px-6 text-center">
                {coverPhoto ? (
                  <div className="relative w-full max-w-xl h-48 rounded-2xl overflow-hidden mb-4 shadow-xl">
                    <img src={coverPhoto} alt="Cover Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setCoverPhoto(null)}
                      className="absolute top-2 right-2 bg-black/70 text-white p-1.5 rounded-full hover:bg-black"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-white">Drop your image here</h3>
                    <p className="mt-1 text-sm text-white/60">or click to browse from your computer</p>
                  </>
                )}

                {/* Choose File Button — Figma: width 188px, height 58px, radius 10.2px, bg #FE6600 */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-4 flex items-center justify-center font-bold text-white text-base shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  style={{
                    backgroundColor: BRAND_ORANGE,
                    width: "188px",
                    height: "58px",
                    borderRadius: "10.2px",
                  }}
                >
                  Choose File
                </button>

                <p className="mt-4 text-xs text-white/50">
                  Supported formats: JPG, PNG GIF (Max 10mb)
                </p>

                {/* 3 Box Row — Screenshot 2: width 296.63px, height 92.2px, radius 12px */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-5 w-full">
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-4 px-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#FE6600] transition-colors cursor-pointer text-left"
                    style={{ width: "296.63px", height: "92.2px" }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
                      <ImageIcon size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Stock Photos</h4>
                      <p className="text-xs text-white/50 mt-0.5">Browse free images</p>
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      setCoverPhoto("https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1200&auto=format&fit=crop");
                    }}
                    className="flex items-center gap-4 px-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#FE6600] transition-colors cursor-pointer text-left"
                    style={{ width: "296.63px", height: "92.2px" }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
                      <Sparkles size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">AI Generator</h4>
                      <p className="text-xs text-white/50 mt-0.5">Create with AI</p>
                    </div>
                  </div>

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-4 px-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#FE6600] transition-colors cursor-pointer text-left"
                    style={{ width: "296.63px", height: "92.2px" }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
                      <Folder size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">My Library</h4>
                      <p className="text-xs text-white/50 mt-0.5">Previous uploads</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Gallery */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">Event Gallery</h3>
                    <p className="text-xs text-white/50">Add multiple images to showcase your venue and atmosphere</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => galleryInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 border border-white/30 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <Plus size={14} /> Add Images
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {galleryImages.map((src, idx) => (
                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group border border-white/10">
                      <img src={src} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => setGalleryImages(galleryImages.filter((_, i) => i !== idx))}
                        className="absolute top-2 right-2 bg-black/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}
                  <div
                    onClick={() => galleryInputRef.current?.click()}
                    className="aspect-square rounded-xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center gap-1 text-white/60 hover:border-[#FE6600] hover:text-white cursor-pointer transition-colors"
                  >
                    <Plus size={24} />
                    <span className="text-xs font-bold">Add More</span>
                  </div>
                </div>
              </div>

              {/* Upload Video & Links */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-[#1c1c1c] border border-white/10 p-5 space-y-2">
                  <div className="text-[#FE6600]"><Upload size={20} /></div>
                  <h4 className="text-sm font-bold text-white">Upload Video</h4>
                  <p className="text-xs text-white/50">MP4, MOV, AVI (Max 500MB)</p>
                  <button type="button" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#FE6600]">
                    Select file from device
                  </button>
                </div>

                <div className="rounded-xl bg-[#1c1c1c] border border-white/10 p-5 space-y-2">
                  <div className="text-[#FE6600]"><Video size={20} /></div>
                  <h4 className="text-sm font-bold text-white">YouTube / Vimeo Link</h4>
                  <input
                    type="url"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="https://youtube.com/watch?v=..."
                    className="w-full bg-[#252525] border border-white/15 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-[#FE6600]"
                  />
                </div>
              </div>

              {/* Event Branding (Logo + Brand Color) */}
              <div className="rounded-xl bg-[#1c1c1c] border border-white/10 p-6 space-y-4">
                <h3 className="text-base font-bold text-white">Event Branding</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div
                    onClick={() => logoInputRef.current?.click()}
                    className="rounded-xl border border-dashed border-white/20 p-6 text-center cursor-pointer hover:border-[#FE6600] transition-colors"
                  >
                    {logoImage ? (
                      <div className="w-14 h-14 mx-auto rounded-xl overflow-hidden bg-white p-1">
                        <img src={logoImage} alt="Logo" className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <>
                        <div className="text-2xl mb-1">🖼</div>
                        <p className="text-sm font-bold text-white">Upload Logo</p>
                        <p className="text-xs text-white/50">PNG or SVG (Max 2MB)</p>
                      </>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-white">Brand Color</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={brandColor}
                        onChange={(e) => setBrandColor(e.target.value)}
                        className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
                      />
                      <input
                        type="text"
                        value={brandColor}
                        onChange={(e) => setBrandColor(e.target.value)}
                        className="bg-[#252525] border border-white/20 rounded-xl px-4 py-2 text-xs text-white font-mono"
                      />
                    </div>
                    <p className="text-xs text-white/50">This color will be used in ticket passes and digital receipts.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <Link href="/host/events/new/tickets" className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white/70 hover:text-white">
                <ArrowLeft size={16} />
                Back to Tickets
              </Link>

              <Link
                href="/host/events/new/review"
                className="inline-flex items-center justify-center rounded-xl bg-[#FE6600] px-5 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                Continue to Review
              </Link>
            </div>

            <FlowFooter />
          </div>
        </section>
      </div>
    </main>
  );
}

// ── 6. REVIEW PAGE (SCREENSHOTS 1, 2, 3 EXACT ORDER & LAYOUT) ────
export function ReviewPage() {
  const [showFullAbout, setShowFullAbout] = useState(false);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [bookingToast, setBookingToast] = useState(false);

  const handleDownloadIcs = () => {
    const icsData = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:5IVE LIVE AT 02 ARENA\nLOCATION:O2 Arena London, UK\nDESCRIPTION:Live Afrobeats Concert by Elizabeth R Events\nDTSTART:20251103T190000Z\nDTEND:20251130T230000Z\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "5ive-live-at-o2.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-black text-white font-montserrat">
      <div className="mx-auto flex min-h-screen w-full max-w-[96rem] flex-col xl:flex-row">
        <EventSidebar activeStep={6} />

        <section className="flex-1 px-4 py-8 sm:px-8 lg:px-12 xl:py-12">
          <div className="mx-auto max-w-[74rem] space-y-8">
            <div className="max-w-[46rem]">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Review</h2>
              <p className="mt-2 text-base text-white/70">
                Preview your event details before publishing to attendees
              </p>
            </div>

            {/* Toast feedback */}
            {bookingToast && (
              <div className="fixed bottom-6 right-6 z-50 bg-[#16A34A] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3">
                <CheckCircle size={18} />
                <span className="text-sm font-bold">Booking preview confirmed for 5IVE Live!</span>
              </div>
            )}

            {/* ── 1. HERO HEADER & QUICK INFO STRIP (SCREENSHOT 1) ── */}
            <div className="rounded-2xl bg-[#141414] border border-white/10 overflow-hidden shadow-2xl">
              <div
                className="h-48 sm:h-64 w-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40" />
              </div>

              <div className="p-6 sm:p-8 -mt-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-montserrat">
                      5IVE LIVE AT <span style={{ color: BRAND_ORANGE }}>02 ARENA</span>
                    </h1>

                    <div className="mt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-white/80">
                      <div className="flex items-center gap-1.5">
                        <div className="flex text-amber-400">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={14} fill="currentColor" />
                          ))}
                        </div>
                        <span className="font-bold text-white">4.8</span>
                        <span className="text-white/60">(127 Reviews)</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-[#FE6600]" />
                        <span><strong>40,034</strong> people are attending</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/20 text-white font-bold text-xs flex items-center justify-center">
                          E
                        </div>
                        <span>Hosted by <strong>Elizabeth R Events</strong></span>
                        <ShieldCheck size={14} className="text-[#2ECC71]" />
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setBookingToast(true);
                      setTimeout(() => setBookingToast(false), 3000);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE6600] px-7 py-3.5 font-bold text-white shadow-xl hover:brightness-110 transition-all shrink-0 cursor-pointer"
                  >
                    Book Event →
                  </button>
                </div>
              </div>

              {/* 4-Column Quick Info Strip (Screenshot 1) */}
              <div className="border-t border-[#FE6600]/30 bg-[#0E0E0E] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#FE6600]/30">
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-white/60">
                    <Calendar size={18} className="text-[#FE6600]" />
                    <span>Date &amp; Time</span>
                  </div>
                  <p className="text-sm font-extrabold text-white">3RD - 30TH NOVEMBER, 2025</p>
                  <p className="text-xs text-white/60">7:00 PM - 11:00 PM EST</p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleDownloadIcs}
                      className="inline-flex items-center gap-1.5 bg-[#FE6600] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg shadow hover:brightness-110 cursor-pointer"
                    >
                      <span>ADD TO CALENDER</span>
                      <span>📅</span>
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-white/60">
                    <MapPin size={18} className="text-[#FE6600]" />
                    <span>Location</span>
                  </div>
                  <p className="text-sm font-extrabold text-white">02 Arena London, United Kingdom</p>
                  <p className="text-xs text-white/60">123 Main St, London, UK 10001</p>
                  <div className="pt-2">
                    <a href="#location-map" className="inline-flex items-center gap-1 text-[#FE6600] text-xs font-bold hover:underline">
                      View on map <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-white/60">
                    <Ticket size={18} className="text-[#FE6600]" />
                    <span>Ticket Type</span>
                  </div>
                  <p className="text-sm font-extrabold text-white">General Admission</p>
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-white/60">
                    <User size={18} className="text-[#FE6600]" />
                    <span>Age Requirement</span>
                  </div>
                  <p className="text-sm font-extrabold text-white">18+ with valid ID required</p>
                </div>
              </div>
            </div>

            {/* ── 2. ABOUT THIS EVENT (SCREENSHOT 1) ── */}
            <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">About This Event</h3>
                <Link
                  href="/host/events/new"
                  className="inline-flex items-center justify-center rounded-xl bg-[#FE6600] px-5 py-2 text-xs font-bold text-white shadow hover:brightness-110 transition-all"
                >
                  Edit About
                </Link>
              </div>

              <p className="text-sm leading-relaxed text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor felis sit amet pulvinar interdum. Quisque eu turpis arcu. Pellentesque id nisi in nunc lobortis laoreet. In hac habitasse platea dictumst. Pellentesque sed tincidunt sem, vel tempus est. Duis accumsan tellus nec finibus pretium. Morbi congue volutpat consequat. Fusce feugiat quam ac nulla ultrices auctor.
                {showFullAbout && (
                  <span className="block mt-2">
                    Experience an unforgettable night featuring special guest appearances, signature stage visuals, and world-class live acoustics.
                  </span>
                )}
              </p>

              <button
                type="button"
                onClick={() => setShowFullAbout(!showFullAbout)}
                className="text-xs font-bold text-[#FE6600] hover:underline"
              >
                {showFullAbout ? "Read less" : "Read more"}
              </button>

              {/* Divider */}
              <div className="border-t border-white/10 pt-6 space-y-4">
                <h4 className="text-base font-bold text-white">What’s Included</h4>
                <div className="grid gap-3 md:grid-cols-2 text-xs text-white/80">
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FE6600]" />
                      Premium Seating With Excellent Sightlights
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FE6600]" />
                      Light Refreshments
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FE6600]" />
                      Full Bar Service
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FE6600]" />
                      Networking Opportunities
                    </p>
                  </div>
                </div>
              </div>

              {/* What to bring */}
              <div className="border-t border-white/10 pt-6 space-y-4">
                <h4 className="text-base font-bold text-white">What to bring</h4>
                <div className="space-y-2 text-xs text-white/80">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FE6600]" />
                    Valid Government-Issued ID (18+ Event)
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FE6600]" />
                    Your ticket confirmation (digital or printed)
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FE6600]" />
                    Networking Opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* ── 3. EVENT SCHEDULE (SCREENSHOT 3: NO OUTER CIRCLE, CENTERED CLOCKS, SEPARATE LINES) ── */}
            <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Event Schedule</h3>
                <Link
                  href="/host/events/new/schedule"
                  className="inline-flex items-center justify-center rounded-xl bg-[#FE6600] px-5 py-2 text-xs font-bold text-white shadow hover:brightness-110 transition-all"
                >
                  Edit Schedule
                </Link>
              </div>

              <div className="space-y-0 max-w-2xl">
                {[
                  {
                    time: "7:00PM",
                    title: "Doors Open & Welcome Drinks",
                    desc: "Arrive, check in, and enjoy complimentary beverages",
                  },
                  {
                    time: "7:30 PM",
                    title: "Opening Act",
                    desc: "Local talent showcase featuring emerging afrobeats artists",
                  },
                  {
                    time: "8:30 PM",
                    title: "Main Performance",
                    desc: "Headlining afrobeats ensemble performs classic and contemporary pieces",
                  },
                  {
                    time: "10:30 PM",
                    title: "Networking Session",
                    desc: "Meet fellow afrobeats enthusiasts and the performers",
                  },
                  {
                    time: "11:00 PM",
                    title: "Event Ends",
                    desc: "Thank you for joining us!",
                  },
                ].map((item, idx, arr) => (
                  <div key={idx} className="flex items-stretch gap-6">
                    {/* Left Icon + Line Segment Column */}
                    <div className="flex flex-col items-center w-8 shrink-0">
                      {/* Top line if not first */}
                      <div className="w-[1.5px] h-3" />
                      {/* Standalone Clock Icon (no outer background circle) */}
                      <Clock size={24} className="text-[#FE6600] shrink-0" />
                      {/* Connecting Line to next item (does not touch clock) */}
                      {idx < arr.length - 1 && (
                        <div className="w-[1.5px] flex-1 my-2 bg-[#FE6600]" />
                      )}
                    </div>

                    {/* Right Details */}
                    <div className="pb-8 pt-0.5">
                      <span className="text-xs font-bold text-[#FE6600] block">{item.time}</span>
                      <h4 className="text-base font-bold text-white mt-1">{item.title}</h4>
                      <p className="text-xs text-white/60 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 4. LOCATION (SCREENSHOT 2: MAP, ADDRESS, GET DIRECTIONS, 2-COLUMN LAYOUT) ── */}
            <div id="location-map" className="rounded-2xl bg-[#141414] border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Location</h3>
                <Link
                  href="/host/events/new/location"
                  className="inline-flex items-center justify-center rounded-xl bg-[#FE6600] px-5 py-2 text-xs font-bold text-white shadow hover:brightness-110 transition-all"
                >
                  Edit Location
                </Link>
              </div>

              {/* Map view */}
              <div className="h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/15 relative">
                <iframe
                  title="Event Location Review Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.015,51.495,0.025,51.515&layer=mapnik&marker=51.503,0.0032"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              {/* Venue Title & Address */}
              <div className="space-y-3">
                <h4 className="text-2xl font-bold text-white font-montserrat">02 Arena</h4>
                <p className="text-sm text-white/70 leading-snug">
                  Peninsula Square London SE10 0DX<br />United Kingdom
                </p>

                {/* Get Directions Button Directly Under Address */}
                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=O2+Arena+London"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#FE6600] px-6 py-3 rounded-xl text-xs font-bold text-white hover:brightness-110 transition-all"
                  >
                    <Navigation size={14} />
                    Get Directions
                  </a>
                </div>
              </div>

              {/* 2-Column Info Grid (Screenshot 2) */}
              <div className="grid gap-6 md:grid-cols-2 pt-4 border-t border-white/10">
                {/* Column 1 (Left): Parking & Accessibility */}
                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#FE6600]">
                      <Car size={16} />
                      <h5 className="font-bold text-sm text-white">Parking</h5>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Street parking available. Paid garage 2 blocks away on 5th Ave.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#FE6600]">
                      <Info size={16} />
                      <h5 className="font-bold text-sm text-white">Accessibility</h5>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Wheelchair accessible entrance and restrooms available.
                    </p>
                  </div>
                </div>

                {/* Column 2 (Right): Public Transport & Nearby */}
                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#FE6600]">
                      <Bus size={16} />
                      <h5 className="font-bold text-sm text-white">Public Transport</h5>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Subway: L train to 14th St. Bus: M14 to Main St.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#FE6600]">
                      <Compass size={16} />
                      <h5 className="font-bold text-sm text-white">Nearby</h5>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      2 blocks from Central Plaza, across from City Museum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 5. TICKETS / VIP PACKAGE (PLACED AFTER LOCATION PER SCREENSHOTS) ── */}
            <div className="rounded-2xl bg-[#141414] border border-white/10 overflow-hidden space-y-6">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-lg bg-[#FE6600] px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
                    VIP Package
                  </span>
                  <Link
                    href="/host/events/new/tickets"
                    className="inline-flex items-center justify-center rounded-xl bg-[#FE6600] px-5 py-2 text-xs font-bold text-white shadow hover:brightness-110 transition-all"
                  >
                    Edit Tickets
                  </Link>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat">
                  5IVE LIVE AT 02 ARENA
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-white/60 font-semibold mb-1">
                      <Calendar size={14} className="text-[#FE6600]" />
                      <span>Date and Time</span>
                    </div>
                    <p className="text-sm font-bold text-white">Nov 15, 2024 · 7:00 PM</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-white/60 font-semibold mb-1">
                      <MapPin size={14} className="text-[#FE6600]" />
                      <span>Location</span>
                    </div>
                    <p className="text-sm font-bold text-white">02 Arena, London, United Kingdom</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-white/60 font-semibold mb-1">
                      <User size={14} className="text-[#FE6600]" />
                      <span>Ticket Holder</span>
                    </div>
                    <p className="text-sm font-bold text-white">John Doe</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-white/60 font-semibold mb-1">
                      <span className="text-[#FE6600] font-bold">#</span>
                      <span>Ticket ID</span>
                    </div>
                    <p className="text-sm font-bold text-white font-mono">GA-2024-001</p>
                  </div>
                </div>

                <div className="border-t border-dashed border-white/20 pt-4" />

                <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-xl bg-[#1C1C1C]">
                  <div className="w-24 h-24 bg-white p-2 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <QrCode size={80} className="text-black" />
                  </div>

                  <div className="flex-1 text-center sm:text-left space-y-1">
                    <h4 className="text-base font-bold text-white">Show this QR code at entry</h4>
                    <p className="text-xs text-white/60">
                      Present this code at the venue entrance for quick check-in
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setShowTicketModal(true)}
                        className="inline-flex items-center justify-center bg-[#FE6600] px-4 py-2 rounded-lg text-xs font-bold text-white hover:brightness-110 transition-all cursor-pointer"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FE6600] px-6 py-3 text-white text-xs font-bold flex items-center gap-2">
                <Zap size={16} className="fill-white" />
                <span>Priority Entry - Skip the line with VIP access</span>
              </div>
            </div>

            {/* Ticket Modal */}
            {showTicketModal && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-[#181818] border border-[#FE6600] rounded-3xl p-6 space-y-4 shadow-2xl relative">
                  <button
                    type="button"
                    onClick={() => setShowTicketModal(false)}
                    className="absolute top-4 right-4 text-white/50 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                  <span className="inline-flex bg-[#FE6600] text-white text-xs font-bold px-3 py-1 rounded-md">VIP Package Ticket</span>
                  <h3 className="text-xl font-bold text-white">5IVE LIVE AT 02 ARENA</h3>
                  <div className="bg-white p-4 rounded-2xl flex justify-center">
                    <QrCode size={160} className="text-black" />
                  </div>
                  <div className="text-xs text-white/70 space-y-1">
                    <p><strong>Holder:</strong> John Doe</p>
                    <p><strong>ID:</strong> GA-2024-001</p>
                    <p><strong>Date:</strong> Nov 15, 2024 · 7:00 PM</p>
                    <p><strong>Gate:</strong> Gate 3 (VIP Fast-track)</p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/host/events/new/media"
                className="inline-flex items-center gap-2 font-semibold text-white/70 hover:text-white"
              >
                <ArrowLeft size={16} />
                Back to Media
              </Link>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/host/events/new"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/5 transition-all"
                >
                  Save as Draft
                </Link>
                <Link
                  href="/host/events/new/published"
                  className="inline-flex items-center justify-center rounded-xl bg-[#FE6600] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-xl hover:brightness-110 active:scale-95 transition-all"
                >
                  Publish Details
                </Link>
              </div>
            </div>

            <FlowFooter />
          </div>
        </section>
      </div>
    </main>
  );
}

// ── 7. PUBLISHED PAGE (SCREENSHOT 4 GREEN TICK EMBEDDED) ────────
export function PublishedPage() {
  return (
    <main className="min-h-screen bg-black text-white font-montserrat flex items-center justify-center p-6 overflow-x-hidden">
      <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-[#141414] border border-white/10 p-8 sm:p-12 text-center shadow-2xl space-y-6">
        {/* Exact Green Tick Image from Screenshot 4 */}
        <div className="w-24 h-24 mx-auto relative flex items-center justify-center drop-shadow-2xl">
          <Image
            src="/images/green-check.png"
            alt="Published Success Checkmark"
            width={96}
            height={96}
            className="w-24 h-24 object-contain animate-bounce"
          />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-montserrat">
          Published!
        </h2>

        <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
          Congratulations! You have successfully published your event and can now manage engagement, view attendees, and track real-time ticket sales.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* TODO: Route /host/events does not exist. Clarify with product/design. Temporarily linking to /host/dashboard. */}
          <Link
            href="/host/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-xs font-bold text-white hover:bg-white/5 transition-all"
          >
            Manage Events
          </Link>
          <Link
            href="/host/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#FE6600] px-8 py-3 text-xs font-bold text-white shadow-xl hover:brightness-110 transition-all"
          >
            Go to Dashboard →
          </Link>
        </div>
      </div>
    </main>
  );
}
