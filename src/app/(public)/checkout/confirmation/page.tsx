"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronLeft,
  Check,
  CalendarDays,
  Download,
  Share2,
  MapPin,
  Ticket,
  Clock3,
  ShieldCheck,
  QrCode,
  Zap,
  User,
  Hash,
  Car,
  Train,
  Info,
  Compass,
  Link as LinkIcon,
  Navigation,
} from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Footer } from "@/components/shared/footer";
import { CheckoutButton } from "@/components/shared/checkout-button";

/**
 * Reusable Digital Ticket Card (Screenshot 5)
 */
export function DigitalTicketCard() {
  return (
    <div className="rounded-[24px] border border-[#ED5A2E] bg-[#141414] overflow-hidden text-white shadow-2xl relative font-[var(--font-inter)]">
      {/* Top Area: Badges + Headline + 2x2 Details */}
      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="rounded-xl bg-[#ED5A2E] text-white text-xs font-bold px-4 py-1.5 shadow-md">
            VIP Package
          </span>

          {/* TRCK / Mastercard logo badge (Screenshot 5) */}
          <div className="flex items-center -space-x-2 bg-[#222222] border border-white/10 rounded-full px-2 py-1 shadow-sm">
            <div className="h-6 w-6 rounded-full bg-[#ED5A2E] flex items-center justify-center text-[8px] font-black text-white">
              trck
            </div>
            <div className="h-6 w-6 rounded-full bg-[#5B7B9E] flex items-center justify-center text-[10px] font-bold text-white">
              S
            </div>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-5 font-[var(--font-montserrat)]">
          5IVE LIVE AT 02 ARENA
        </h2>

        {/* 2x2 Details Grid (Screenshot 5) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
          {/* Date and Time */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-white/60">
              <CalendarDays className="h-4 w-4 text-[#ED5A2E]" />
              <span>Date and Time</span>
            </div>
            <p className="text-sm font-bold text-white pl-5.5">
              Nov 15, 2024 • 7:00 PM
            </p>
          </div>

          {/* Location */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-white/60">
              <MapPin className="h-4 w-4 text-[#ED5A2E]" />
              <span>Location</span>
            </div>
            <p className="text-sm font-bold text-white pl-5.5">
              02 Arena, London, United Kingdom
            </p>
          </div>

          {/* Ticket Holder */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-white/60">
              <User className="h-4 w-4 text-[#ED5A2E]" />
              <span>Ticket Holder</span>
            </div>
            <p className="text-sm font-bold text-white pl-5.5">
              John Doe
            </p>
          </div>

          {/* Ticket ID */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-white/60">
              <Hash className="h-4 w-4 text-[#ED5A2E]" />
              <span>Ticket ID</span>
            </div>
            <p className="text-sm font-bold text-white font-mono pl-5.5">
              GA-2024-001
            </p>
          </div>
        </div>
      </div>

      {/* Dashed perforated line with ticket notches */}
      <div className="relative border-t border-dashed border-white/20 my-1">
        <div className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-black" />
        <div className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-black" />
      </div>

      {/* QR Code & Entry Area (Screenshot 5) */}
      <div className="p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="h-28 w-28 rounded-2xl bg-white p-2.5 flex items-center justify-center shrink-0 shadow-lg">
          <QrCode className="h-full w-full text-black" strokeWidth={1.8} />
        </div>
        <div className="flex-1 space-y-1.5">
          <h3 className="text-sm font-bold text-white">
            Show this QR code at entry
          </h3>
          <p className="text-xs text-white/60">
            Present this code at the venue entrance for quick check-in
          </p>
          <div className="pt-2">
            <button
              type="button"
              className="rounded-xl bg-[#ED5A2E] px-5 py-2 text-xs font-bold text-white shadow-md hover:bg-[#d4501f] transition-all active:scale-95"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Priority Entry Bottom Banner (Screenshot 5) */}
      <div className="bg-[#ED5A2E] px-6 py-2.5 flex items-center gap-2 text-xs font-semibold text-white">
        <Zap className="h-4 w-4 fill-white" />
        <span>Priority Entry - Skip the line with VIP access</span>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <main className="min-h-screen bg-black text-white font-[var(--font-inter)]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-[#ED5A2E] text-white px-5 py-3 rounded-xl shadow-2xl text-xs font-bold animate-in fade-in slide-in-from-top-4 duration-300">
          {toastMessage}
        </div>
      )}

      {/* Top Nav Header */}
      <div className="border-b border-[#ED5A2E]/40 bg-[#151515] px-6 sm:px-8 py-4">
        <div className="mx-auto flex max-w-[1440px] items-center gap-4">
          <Link
            href="/explore"
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
                <CalendarDays className="h-3.5 w-3.5 text-[#ED5A2E]" /> Friday, Nov 15, 2024
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#ED5A2E]" /> 02 Arena, London, United Kingdom
              </span>
            </div>
          </div>
          <Link href="/" className="ml-auto inline-flex items-center">
            <Logo width={100} height={32} className="h-6 w-auto brightness-0 invert" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-10">
        {/* Booking Confirmed Hero Box */}
        <div className="rounded-[24px] bg-[#121212] border border-white/10 p-6 sm:p-10 text-center shadow-xl">
          <div className="mx-auto flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-[#ED5A2E] text-white shadow-[0_0_0_8px_rgba(237,90,46,0.18)]">
            <Check className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={3} />
          </div>
          <h2 className="mt-6 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Booking Confirmed!
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/70">
            Your tickets are ready and waiting for you
          </p>

          <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-xl bg-[#222222] px-4 py-2.5 text-xs text-white/90 font-mono border border-white/10">
            <span>Order ID - #TRK-2024-0547</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText("#TRK-2024-0547");
                triggerToast("Order ID copied to clipboard!");
              }}
              className="text-white/60 hover:text-white"
              title="Copy"
            >
              ⧉
            </button>
          </div>

          <p className="mt-4 text-xs text-white/70 flex items-center justify-center gap-2">
            <Check className="h-4 w-4 text-[#22C55E]" />
            <span>Confirmation email sent to john.doe@example.com</span>
          </p>

          {/* Action CTAs (Using Reusable Buttons) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CheckoutButton
              variant="white"
              size="md"
              onClick={() => window.print()}
              icon={<Download className="h-4 w-4" />}
            >
              Download Tickets
            </CheckoutButton>
            <CheckoutButton
              variant="white"
              size="md"
              onClick={() => window.open("https://calendar.google.com/calendar/render", "_blank", "noopener,noreferrer")}
              icon={<CalendarDays className="h-4 w-4" />}
            >
              Add To Calendar
            </CheckoutButton>
            <CheckoutButton
              variant="white"
              size="md"
              href="/checkout/share"
              icon={<Share2 className="h-4 w-4" />}
            >
              Share Event
            </CheckoutButton>
          </div>
        </div>

        {/* ── MAIN 2-COLUMN SECTION ───────────────────────────────────── */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Left Column (8 Cols): Digital Ticket + Centered Timeline + Location + Add to Calendar + Share */}
          <div className="lg:col-span-8 space-y-10">
            {/* ── YOUR DIGITAL TICKET CARD (Screenshot 5) ── */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Your Digital Ticket
              </h2>
              <DigitalTicketCard />
            </section>

            {/* What's Next? (Centered Timeline Connectors) */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight">What&apos;s Next?</h3>
              <div className="rounded-[24px] bg-[#121212] border border-white/10 p-6 sm:p-8 space-y-0">
                {[
                  ["Confirmation Email Sent", "Check your inbox for booking details", "check"],
                  ["Digital Tickets Ready", "Your tickets are available for download", "check"],
                  ["Reminder Email", "We'll send you a reminder 24 hours before the event", "bell"],
                  ["Arrive at Venue", "Gates open at 6:30 PM - arrive early for best seats", "pin"],
                  ["Event Starts", "Show begins promptly at 7:00 PM", "note"],
                ].map(([title, desc], idx) => (
                  <div key={title as string} className="flex gap-4">
                    {/* Left Column: Perfectly Centered Circle + Continuous Vertical Connecting Line */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#ED5A2E] text-[#ED5A2E] bg-[#141414] z-10 shrink-0 shadow-md">
                        {idx < 2 ? <Check className="h-4 w-4 text-[#22C55E]" /> : idx === 2 ? <Clock3 className="h-4 w-4" /> : idx === 3 ? <MapPin className="h-4 w-4" /> : <Ticket className="h-4 w-4" />}
                      </div>
                      {idx < 4 ? <div className="w-[2px] bg-[#ED5A2E]/60 flex-1 min-h-[36px]" /> : null}
                    </div>
                    {/* Right Details */}
                    <div className="pb-7 pt-1">
                      <p className={`text-sm font-bold ${idx < 2 ? "text-[#ED5A2E]" : "text-white"}`}>{title as string}</p>
                      <p className="mt-0.5 text-xs text-white/65">{desc as string}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── LOCATION SECTION (Screenshot 1) ─────────────────────────── */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight">Location</h3>
              <div className="rounded-[24px] bg-[#121212] border border-white/10 p-6 sm:p-8 space-y-6">
                {/* Map Graphic */}
                <div className="relative h-[280px] sm:h-[320px] w-full rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/event-feature.jpg"
                    alt="02 Arena Location Map"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-[#ED5A2E] flex items-center justify-center text-white shadow-xl ring-4 ring-[#ED5A2E]/30 animate-bounce">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Venue Headline & Directions Button */}
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white">02 Arena</h4>
                  <p className="text-xs text-white/70">
                    Peninsula Square London SE10 0DX United Kingdom
                  </p>
                  <button
                    type="button"
                    onClick={() => window.open("https://maps.google.com/?q=O2+Arena+London", "_blank")}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#ED5A2E] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#d4501f] transition-all shadow-md shadow-[#ED5A2E]/20 active:scale-95"
                  >
                    <Navigation className="h-4 w-4" />
                    <span>Get Directions</span>
                  </button>
                </div>

                {/* 4 Amenities / Travel Info Grid (Screenshot 1) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-white/10">
                  {/* Parking */}
                  <div className="flex items-start gap-3.5">
                    <div className="h-9 w-9 rounded-xl bg-[#ED5A2E]/15 text-[#ED5A2E] flex items-center justify-center shrink-0">
                      <Car className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Parking</h5>
                      <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                        Street parking available. Paid garage 2 blocks away on 5th Ave.
                      </p>
                    </div>
                  </div>

                  {/* Public Transport */}
                  <div className="flex items-start gap-3.5">
                    <div className="h-9 w-9 rounded-xl bg-[#ED5A2E]/15 text-[#ED5A2E] flex items-center justify-center shrink-0">
                      <Train className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Public Transport</h5>
                      <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                        Subway: L train to 14th St. Bus: M14 to Main St.
                      </p>
                    </div>
                  </div>

                  {/* Accessibility */}
                  <div className="flex items-start gap-3.5">
                    <div className="h-9 w-9 rounded-xl bg-[#ED5A2E]/15 text-[#ED5A2E] flex items-center justify-center shrink-0">
                      <Info className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Accessibility</h5>
                      <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                        Wheelchair accessible entrance and restrooms available.
                      </p>
                    </div>
                  </div>

                  {/* Nearby */}
                  <div className="flex items-start gap-3.5">
                    <div className="h-9 w-9 rounded-xl bg-[#ED5A2E]/15 text-[#ED5A2E] flex items-center justify-center shrink-0">
                      <Compass className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Nearby</h5>
                      <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                        2 blocks from Central Plaza, across from City Museum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── ADD TO CALENDAR SECTION (Screenshot 1) ──────────────────── */}
            <section className="space-y-4">
              <div className="rounded-[24px] bg-[#121212] border border-white/10 p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Add to Calendar</h3>
                  <p className="text-xs text-white/60 mt-1">
                    Never miss your event - add it to your favorite calendar app
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {/* Google Calendar */}
                  <button
                    type="button"
                    onClick={() => {
                      window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=5IVE+LIVE+AT+02+ARENA&dates=20241115T190000Z/20241115T220000Z&location=02+Arena+London", "_blank");
                    }}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#1A1A1A] border border-white/5 hover:border-[#ED5A2E]/50 transition-all hover:bg-[#222] active:scale-95 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#ED5A2E]/20 text-[#ED5A2E] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <CalendarDays className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-white">Google</span>
                    <span className="text-[10px] text-white/50 mt-0.5">Calendar</span>
                  </button>

                  {/* Apple Calendar */}
                  <button
                    type="button"
                    onClick={() => triggerToast("Downloaded Apple Calendar event (.ics)")}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#1A1A1A] border border-white/5 hover:border-[#ED5A2E]/50 transition-all hover:bg-[#222] active:scale-95 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#ED5A2E]/20 text-[#ED5A2E] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <CalendarDays className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-white">Apple</span>
                    <span className="text-[10px] text-white/50 mt-0.5">Calendar</span>
                  </button>

                  {/* Outlook */}
                  <button
                    type="button"
                    onClick={() => {
                      window.open("https://outlook.live.com/calendar/0/deeplink/compose?subject=5IVE+LIVE+AT+02+ARENA&location=02+Arena+London", "_blank");
                    }}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#1A1A1A] border border-white/5 hover:border-[#ED5A2E]/50 transition-all hover:bg-[#222] active:scale-95 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#ED5A2E]/20 text-[#ED5A2E] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <CalendarDays className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-white">Outlook</span>
                    <span className="text-[10px] text-white/50 mt-0.5">Calendar</span>
                  </button>

                  {/* Download .ics */}
                  <button
                    type="button"
                    onClick={() => triggerToast("Downloaded .ics event file")}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#1A1A1A] border border-white/5 hover:border-[#ED5A2E]/50 transition-all hover:bg-[#222] active:scale-95 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#ED5A2E]/20 text-[#ED5A2E] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Download className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-white">Download</span>
                    <span className="text-[10px] text-white/50 mt-0.5">.ics file</span>
                  </button>
                </div>
              </div>
            </section>

            {/* ── SHARE THIS EVENT SECTION (Screenshot 1) ─────────────────── */}
            <section className="space-y-4">
              <div className="rounded-[24px] bg-[#121212] border border-white/10 p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Share This Event</h3>
                  <p className="text-xs text-white/60 mt-1">
                    Invite your friends to join the experience
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {/* WhatsApp */}
                  <button
                    type="button"
                    onClick={() => {
                      window.open("https://wa.me/?text=Check%20out%205IVE%20LIVE%20AT%2002%20ARENA%20https://getontrck.com/events/5ive-live", "_blank");
                    }}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#1A1A1A] border border-white/5 hover:border-[#22C55E]/50 transition-all hover:bg-[#222] active:scale-95 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <span className="font-bold text-base">✆</span>
                    </div>
                    <span className="text-xs font-bold text-white">Whatsapp</span>
                  </button>

                  {/* Facebook */}
                  <button
                    type="button"
                    onClick={() => {
                      window.open("https://www.facebook.com/sharer/sharer.php?u=https://getontrck.com/events/5ive-live", "_blank");
                    }}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#1A1A1A] border border-white/5 hover:border-[#3B82F6]/50 transition-all hover:bg-[#222] active:scale-95 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#3B82F6]/20 text-[#3B82F6] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <span className="font-bold text-base">f</span>
                    </div>
                    <span className="text-xs font-bold text-white">Facebook</span>
                  </button>

                  {/* X (Twitter) */}
                  <button
                    type="button"
                    onClick={() => {
                      window.open("https://twitter.com/intent/tweet?text=Join%20me%20at%205IVE%20LIVE%20AT%2002%20ARENA%20https://getontrck.com/events/5ive-live", "_blank");
                    }}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#1A1A1A] border border-white/5 hover:border-white/40 transition-all hover:bg-[#222] active:scale-95 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <span className="font-bold text-base">𝕏</span>
                    </div>
                    <span className="text-xs font-bold text-white">X</span>
                  </button>

                  {/* Copy Link */}
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText("https://getontrck.com/events/5ive-live");
                      triggerToast("Event link copied to clipboard!");
                    }}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#1A1A1A] border border-white/5 hover:border-[#ED5A2E]/50 transition-all hover:bg-[#222] active:scale-95 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-[#ED5A2E]/20 text-[#ED5A2E] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <LinkIcon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-white">Copy Link</span>
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (4 Cols): Order Summary Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-[24px] bg-[#121212] border border-white/10 p-6 space-y-5 sticky top-6">
              <h3 className="text-base font-bold text-white/90">Order Summary</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">VIP PACKAGE</p>
                  <p className="text-xs text-white/50">Quantity: 1</p>
                </div>
                <p className="text-base font-bold text-[#ED5A2E]">N80,000</p>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4 text-xs text-white/70">
                <div className="flex justify-between"><span>Subtotal</span><span>N80,000</span></div>
                <div className="flex justify-between"><span>Service Fee</span><span>N5,000</span></div>
                <div className="flex justify-between"><span>Tax</span><span>N4,500</span></div>
              </div>

              <div className="rounded-xl bg-[#1E1E1E] p-4 border border-white/5">
                <p className="text-xs text-white/60">Payment Method</p>
                <p className="text-sm font-bold text-white mt-1">•••• •••• 1234</p>
              </div>

              <CheckoutButton
                onClick={() => window.print()}
                variant="primary"
                size="md"
                className="w-full"
              >
                Download Receipt
              </CheckoutButton>

              <div className="space-y-2.5 border-t border-white/10 pt-4 text-xs text-white/70">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#ED5A2E]" /><span>Secure checkout</span></div>
                <div className="flex items-center gap-2"><Ticket className="h-4 w-4 text-[#ED5A2E]" /><span>Instant delivery</span></div>
                <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#ED5A2E]" /><span>Free cancellation</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CELEBRATION BANNER (Screenshot 1) ─────────────────────────── */}
        <div className="mt-12 rounded-[24px] bg-[#121212] border border-white/10 p-8 text-center space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white">See you at the event! 🎉</h3>
          <p className="mx-auto max-w-[700px] text-xs sm:text-sm text-white/70 leading-relaxed">
            We&apos;re excited to have you join us for an unforgettable jazz experience. If you have any questions, don&apos;t hesitate to reach out to our support team.
          </p>
          <div className="pt-2 text-xs font-semibold text-[#ED5A2E] flex flex-wrap items-center justify-center gap-4">
            <Link href="/account/bookings" className="hover:underline">My Tickets</Link>
            <span>•</span>
            <Link href="/explore" className="hover:underline">Browse Events</Link>
            <span>•</span>
            <Link href="/account/support" className="hover:underline">Help Center</Link>
            <span>•</span>
            <Link href="/account/support" className="hover:underline">Contact Us</Link>
          </div>
        </div>

        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </main>
  );
}
