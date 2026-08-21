"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Calendar,
  Clock,
  MapPin,
  Ticket,
  TrendingUp,
  Mail,
  MessageSquare,
  Gift,
  Download,
  FileText,
  Copy,
  Edit2,
  Share2,
  Users,
  DollarSign,
  CheckCircle2,
  Zap,
  ArrowRight,
  ExternalLink,
  Shield,
} from "lucide-react";

export default function EventDetailAdminPage() {
  // Interactive toggle switches
  const [isPublished, setIsPublished] = useState(true);
  const [isFeatured, setIsFeatured] = useState(false);

  // Attendees list
  const recentBookings = [
    { id: 1, name: "John Doe", type: "GA", time: "2h ago" },
    { id: 2, name: "John Doe", type: "GA", time: "2h ago" },
    { id: 3, name: "John Doe", type: "GA", time: "2h ago" },
    { id: 4, name: "John Doe", type: "GA", time: "2h ago" },
    { id: 5, name: "John Doe", type: "GA", time: "2h ago" },
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-white font-sans antialiased pb-24">
      {/* Container matching screenshot */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">

        {/* Top Header Watermark (as seen in screenshot 1: Event Detail View (Admin)) */}
        <div className="text-xs text-[#00A3FF] font-medium tracking-wide mb-2 hidden md:block">
          Event Detail View (Admin)
        </div>

        {/* HERO SECTION */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-6 border border-white/10 bg-[#121212]">
          {/* Cover image area */}
          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px]">
            <img
              src="/eb527c4ccb8bb286d228cef7d0145670 1.png"
              alt="5IVE LIVE AT O2 ARENA"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />

            {/* Gradient overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>

            {/* Top Bar on Image: Back Arrow + Edit Cover Button */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <Link
                href="/kyc-user-management"
                className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <ChevronLeft size={20} />
              </Link>

              <button className="bg-black/60 backdrop-blur-md hover:bg-black/80 border border-white/20 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm">
                <Edit2 size={13} />
                <span>Edit Cover</span>
              </button>
            </div>
          </div>

          {/* Floating Info Overlay Card inside/under hero */}
          <div className="bg-[#121212] p-6 sm:p-8 border-t border-white/10">
            {/* Category Tags */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="bg-[#1A1A1A] border border-[#3B170B] text-white/85 text-xs font-medium px-3.5 py-1 rounded-md">
                Concert
              </span>
              <span className="bg-[#1A1A1A] border border-[#3B170B] text-white/85 text-xs font-medium px-3.5 py-1 rounded-md">
                Music
              </span>
            </div>

            {/* Big Event Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              5IVE LIVE AT <span className="text-[#ED5828]">O2 ARENA</span>
            </h1>

            {/* Toggle Switches: Published & Featured */}
            <div className="flex items-center gap-6">
              {/* Published Toggle */}
              <div
                className="flex items-center gap-2.5 cursor-pointer select-none"
                onClick={() => setIsPublished(!isPublished)}
              >
                <div
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
                    isPublished ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                      isPublished ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </div>
                <span className="text-sm font-semibold text-white/90">Published</span>
              </div>

              {/* Featured Toggle */}
              <div
                className="flex items-center gap-2.5 cursor-pointer select-none"
                onClick={() => setIsFeatured(!isFeatured)}
              >
                <div
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
                    isFeatured ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                      isFeatured ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </div>
                <span className="text-sm font-semibold text-white/70">Featured</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-COLUMN MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* =========================================================================
              LEFT COLUMN (7 Columns)
          ========================================================================= */}
          <div className="lg:col-span-7 space-y-6">

            {/* CARD 1: KEY INFORMATION */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7">
              <h2 className="text-lg font-bold text-white mb-6">Key Information</h2>

              {/* Date & Time Section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                  <Calendar size={16} className="text-[#ED5828]" />
                  <span>Date & Time</span>
                </div>

                <div className="pl-6 space-y-1 text-sm text-white/70">
                  <div className="text-white font-semibold">Friday, Nov 15, 2024</div>
                  <div>7:00 PM - 11:00 PM (4 hours)</div>
                  <div className="text-xs text-white/40">Timezone: EST</div>
                </div>

                {/* Highlight banner: Time until event */}
                <div className="mt-3 ml-6 bg-[#181818] border border-white/5 rounded-xl px-4 py-2.5 flex items-center gap-2 text-xs text-white/80 font-medium">
                  <Clock size={14} className="text-[#ED5828]" />
                  <span>Time until event: 2 days, 5 hours</span>
                </div>

                {/* Buttons: Add to calendar & Reschedule Event */}
                <div className="mt-3.5 ml-6 flex flex-wrap items-center gap-3">
                  <button className="bg-[#181818] border border-[#3B170B] hover:border-[#ED5828] text-white/80 hover:text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all">
                    Add to calendar
                  </button>
                  <button className="bg-[#181818] border border-[#3B170B] hover:border-[#ED5828] text-white/80 hover:text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all">
                    Reschedule Event
                  </button>
                </div>
              </div>

              {/* Location Section */}
              <div className="mb-6 pt-5 border-t border-white/5">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                  <MapPin size={16} className="text-[#ED5828]" />
                  <span>Location</span>
                </div>

                <div className="pl-6 space-y-1 text-sm text-white/70">
                  <div className="text-white font-semibold">02 Arena, London, United Kingdom</div>
                  <div className="text-xs text-white/60">Peninsula Square London SE10 0DX</div>
                  <div className="text-xs text-white/40">United Kingdom</div>

                  {/* 2x2 Venue Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 pt-3 text-xs text-white/60">
                    <div>Capacity: <span className="text-white/85 font-medium">200 people</span></div>
                    <div>Layout: <span className="text-white/85 font-medium">General seating</span></div>
                    <div>Parking: <span className="text-white/85 font-medium">Available nearby</span></div>
                    <div>Accessibility: <span className="text-white/85 font-medium">Wheelchair accessible</span></div>
                  </div>
                </div>

                {/* Buttons: View on map, Get Directions, Change Venue */}
                <div className="mt-4 ml-6 flex flex-wrap items-center gap-3">
                  <button className="bg-[#181818] border border-[#3B170B] hover:border-[#ED5828] text-white/80 hover:text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all">
                    View on map
                  </button>
                  <button className="bg-[#181818] border border-[#3B170B] hover:border-[#ED5828] text-white/80 hover:text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all">
                    Get Directions
                  </button>
                  <button className="bg-[#181818] border border-[#3B170B] hover:border-[#ED5828] text-white/80 hover:text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all">
                    Change Venue
                  </button>
                </div>
              </div>

              {/* Tickets & Pricing Section */}
              <div className="pt-5 border-t border-white/5">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                  <Ticket size={16} className="text-[#ED5828]" />
                  <span>Tickets & Pricing</span>
                </div>

                {/* Ticket cards */}
                <div className="pl-6 space-y-2.5">
                  <div className="bg-[#181818] border border-white/5 rounded-xl p-3.5 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">General Admission</div>
                      <div className="text-xs text-white/40">150 available</div>
                    </div>
                    <div className="text-sm font-bold text-white">₦80,000</div>
                  </div>

                  <div className="bg-[#181818] border border-white/5 rounded-xl p-3.5 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">VIP Experience</div>
                      <div className="text-xs text-white/40">40 available</div>
                    </div>
                    <div className="text-sm font-bold text-white">₦180,000</div>
                  </div>

                  <div className="bg-[#181818] border border-white/5 rounded-xl p-3.5 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Early Bird</div>
                      <div className="text-xs text-white/40">10 sold</div>
                    </div>
                    <div className="text-sm font-bold text-white">₦60,000</div>
                  </div>
                </div>

                {/* Buttons: Manage Ticket Types & Edit Pricing */}
                <div className="mt-4 ml-6 flex flex-wrap items-center gap-3">
                  <button className="bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-sm">
                    Manage Ticket Types
                  </button>
                  <button className="bg-[#181818] border border-[#3B170B] hover:border-[#ED5828] text-white/80 hover:text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all">
                    Edit Pricing
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 2: EVENT DESCRIPTION */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-white">Event Description</h2>
                <button className="bg-[#181818] border border-white/10 hover:border-white/20 text-white/80 hover:text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all">
                  <Edit2 size={12} />
                  <span>Edit Description</span>
                </button>
              </div>

              <p className="text-sm text-white/60 leading-relaxed font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dolor vitae mauris
                maximus rhoncus. Duis sodales tellus non nibh ultrices volutpat id sodales nulla. Vestibulum
                tempor dui quam, a congue ligula porttitor id. Quisque id viverra tellus. Sed at augue quis
                magna viverra molestie et sed lacus. Mauris id tellus non lorem facilisis posuere. Phasellus
                ornare eros ligula, sed semper quam auctor id. Ut ut ornare justo. Suspendisse justo arcu,
                laoreet sit amet congue non, congue vel arcu. Maecenas sodales velit in orci mollis, vitae
                cursus ex lacinia. Nullam non dignissim metus.
              </p>
            </div>

            {/* CARD 3: MARKETING & PROMOTION */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7">
              <h2 className="text-lg font-bold text-white mb-1">Marketing & Promotion</h2>
              <div className="text-xs text-white/40 uppercase font-semibold tracking-wider mb-4">
                Promotional Materials
              </div>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <div className="bg-[#181818] border border-white/5 rounded-xl p-4 cursor-pointer hover:border-white/20 transition-all">
                  <div className="text-sm font-bold text-white">Social Media Cards</div>
                  <div className="text-xs text-white/40 mt-0.5">Download Graphics</div>
                </div>

                <div className="bg-[#181818] border border-white/5 rounded-xl p-4 cursor-pointer hover:border-white/20 transition-all">
                  <div className="text-sm font-bold text-white">Email Preview</div>
                  <div className="text-xs text-white/40 mt-0.5">View & Customize</div>
                </div>

                <div className="bg-[#181818] border border-white/5 rounded-xl p-4 cursor-pointer hover:border-white/20 transition-all">
                  <div className="text-sm font-bold text-white">Event QR Code</div>
                  <div className="text-xs text-white/40 mt-0.5">Download Code</div>
                </div>

                <div className="bg-[#181818] border border-white/5 rounded-xl p-4 cursor-pointer hover:border-white/20 transition-all">
                  <div className="text-sm font-bold text-white">Promo Codes</div>
                  <div className="text-xs text-white/40 mt-0.5">3 Active</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button className="bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-sm">
                  Create Promo Code
                </button>
                <button className="bg-[#181818] border border-[#3B170B] hover:border-[#ED5828] text-white/80 hover:text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all">
                  Send Email Blast
                </button>
                <button className="bg-[#181818] border border-[#3B170B] hover:border-[#ED5828] text-white/80 hover:text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all">
                  Generate Marketing Kit
                </button>
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN (5 Columns)
          ========================================================================= */}
          <div className="lg:col-span-5 space-y-6">

            {/* CARD 4: EVENT PERFORMANCE */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-2 text-base font-bold text-white mb-5">
                <TrendingUp size={18} className="text-white/60" />
                <span>Event Performance</span>
              </div>

              {/* Metric 1: Ticket Sales */}
              <div className="mb-5">
                <div className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-1">
                  Ticket Sales
                </div>
                <div className="flex items-baseline gap-1 text-2xl font-bold text-white">
                  <span>156</span>
                  <span className="text-sm text-white/50 font-normal">/ 200 Sold</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-[#242424] h-[3px] rounded-full mt-2 mb-1 overflow-hidden">
                  <div className="bg-[#ED5828] h-full rounded-full" style={{ width: "78%" }}></div>
                </div>
                <div className="text-[11px] text-white/40">78%</div>
              </div>

              {/* Metric 2: Revenue */}
              <div className="mb-5">
                <div className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-1">
                  Revenue
                </div>
                <div className="flex items-baseline gap-1 text-2xl font-bold text-white">
                  <span>N450K</span>
                  <span className="text-sm text-white/50 font-normal">/ 600K</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-[#242424] h-[3px] rounded-full mt-2 mb-1 overflow-hidden">
                  <div className="bg-[#ED5828] h-full rounded-full" style={{ width: "75%" }}></div>
                </div>
                <div className="text-[11px] text-white/40">Target: 75% achieved</div>
              </div>

              {/* Metric 3: Check-ins */}
              <div className="mb-6">
                <div className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-1">
                  Check-ins
                </div>
                <div className="flex items-baseline gap-1 text-2xl font-bold text-white">
                  <span>145</span>
                  <span className="text-sm text-white/50 font-normal">/ 156 checked in</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-[#242424] h-[3px] rounded-full mt-2 mb-1 overflow-hidden">
                  <div className="bg-[#ED5828] h-full rounded-full" style={{ width: "78%" }}></div>
                </div>
                <div className="text-[11px] text-white/40">78%</div>
              </div>

              {/* Metric 4: Engagement */}
              <div className="mb-6 pt-4 border-t border-white/5">
                <div className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-3">
                  Engagement
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#ED5828]">234</div>
                    <div className="text-xs text-white/50 mt-0.5">views today</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#ED5828]">12</div>
                    <div className="text-xs text-white/50 mt-0.5">Shares</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#ED5828]">8</div>
                    <div className="text-xs text-white/50 mt-0.5">Saves</div>
                  </div>
                </div>
              </div>

              {/* Full Analytics Button */}
              <button className="w-full bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs font-semibold py-3 rounded-xl transition-all shadow-sm">
                View Full Analytics
              </button>
            </div>

            {/* CARD 5: QUICK ACTIONS */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-2 text-base font-bold text-white mb-4">
                <Zap size={18} className="text-white/60" />
                <span>Quick Actions</span>
              </div>

              <div className="space-y-2.5">
                <button className="w-full bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center gap-2 transition-all shadow-sm">
                  <Mail size={15} />
                  <span>Email all attendees</span>
                </button>

                <button className="w-full bg-[#181818] hover:bg-white/10 text-white/85 hover:text-white text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center gap-2 transition-all">
                  <MessageSquare size={15} />
                  <span>Send Update</span>
                </button>

                <button className="w-full bg-[#181818] hover:bg-white/10 text-white/85 hover:text-white text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center gap-2 transition-all">
                  <Gift size={15} />
                  <span>Generate comp ticket</span>
                </button>

                <button className="w-full bg-[#181818] hover:bg-white/10 text-white/85 hover:text-white text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center gap-2 transition-all">
                  <Download size={15} />
                  <span>Export attendee list</span>
                </button>

                <button className="w-full bg-[#181818] hover:bg-white/10 text-white/85 hover:text-white text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center gap-2 transition-all">
                  <FileText size={15} />
                  <span>Download report</span>
                </button>

                <button className="w-full bg-[#181818] hover:bg-white/10 text-white/85 hover:text-white text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center gap-2 transition-all">
                  <Copy size={15} />
                  <span>Duplicate event</span>
                </button>
              </div>
            </div>

            {/* CARD 6: ATTENDEES (156) */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-2 text-base font-bold text-white mb-4">
                <Users size={18} className="text-white/60" />
                <span>Attendees (156)</span>
              </div>

              {/* By Ticket Type */}
              <div className="text-xs text-white/40 uppercase font-semibold tracking-wider mb-2.5">
                By Ticket Type
              </div>
              <div className="space-y-1.5 text-xs text-white/70 mb-4">
                <div className="flex justify-between">
                  <span>General Admission:</span>
                  <span className="font-bold text-white">120</span>
                </div>
                <div className="flex justify-between">
                  <span>VIP:</span>
                  <span className="font-bold text-white">30</span>
                </div>
                <div className="flex justify-between">
                  <span>Complimentary:</span>
                  <span className="font-bold text-white">6</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-white/5 w-full mb-4"></div>

              {/* By Attendance Status */}
              <div className="text-xs text-white/40 uppercase font-semibold tracking-wider mb-2.5">
                By Attendance Status
              </div>
              <div className="space-y-1.5 text-xs text-white/70 mb-4">
                <div className="flex justify-between">
                  <span>Confirmed:</span>
                  <span className="font-bold text-white">156</span>
                </div>
                <div className="flex justify-between">
                  <span>Checked-In:</span>
                  <span className="font-bold text-white">145</span>
                </div>
                <div className="flex justify-between">
                  <span>No-shows:</span>
                  <span className="font-bold text-white">11</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-white/5 w-full mb-4"></div>

              {/* Recent Bookings */}
              <div className="text-xs text-white/40 uppercase font-semibold tracking-wider mb-3">
                Recent Bookings (5)
              </div>
              <div className="space-y-3 mb-6">
                {recentBookings.map((b) => (
                  <div key={b.id} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#ED5828] text-white text-[11px] font-bold flex items-center justify-center shrink-0 border-2 border-[#121212]">
                      JD
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-white truncate">{b.name}</div>
                      <div className="text-[11px] text-white/40">{b.type} • {b.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Attendees Button */}
              <button className="w-full bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs font-semibold py-3 rounded-xl transition-all shadow-sm">
                View All Attendees
              </button>
            </div>

            {/* CARD 7: REVENUE DETAILS */}
            <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-2 text-base font-bold text-white mb-5">
                <DollarSign size={18} className="text-white/60" />
                <span>Revenue Details</span>
              </div>

              {/* Sales Breakdown */}
              <div className="space-y-2 text-xs text-white/70 mb-4">
                <div className="flex justify-between">
                  <span>Gross Sales:</span>
                  <span className="font-semibold text-white">₦480,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Discounts:</span>
                  <span className="text-white/50">-₦30,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Refunds:</span>
                  <span className="text-white/50">-₦0</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-white/5 w-full mb-4"></div>

              {/* Net Revenue */}
              <div className="flex justify-between text-sm font-bold text-white mb-4">
                <span>Net Revenue:</span>
                <span>₦450,000</span>
              </div>

              {/* Fees */}
              <div className="text-xs text-white/40 uppercase font-semibold tracking-wider mb-2">
                Fees:
              </div>
              <div className="space-y-1.5 text-xs text-white/70 mb-4">
                <div className="flex justify-between">
                  <span>Platform fee (5%):</span>
                  <span className="text-white/50">-₦22,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment processing:</span>
                  <span className="text-white/50">-₦7,200</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-white/5 w-full mb-4"></div>

              {/* Payout Details */}
              <div className="flex justify-between text-sm font-bold text-white mb-2">
                <span>Your Payout:</span>
                <span>₦420,300</span>
              </div>

              <div className="text-xs text-white/60 space-y-1 mb-5">
                <div>Status: <span className="text-white font-medium">Processing</span></div>
                <div>Expected: <span className="text-white font-medium">Nov 20, 2024</span></div>
              </div>

              {/* View Detailed Report Button */}
              <button className="w-full bg-[#181818] border border-white/10 hover:border-white/20 text-white/80 hover:text-white text-xs font-semibold py-2.5 rounded-xl transition-all">
                View Detailed Report
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* FOOTER (Matching Screenshot 4) */}
      <footer className="mt-20 border-t border-white/10 pt-12 pb-8 bg-black">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">CONTACT</h4>
              <p className="text-xs font-semibold text-[#ED5828] mb-4">info@getontrck.com</p>
              {/* Social Icons */}
              <div className="flex items-center gap-3 text-white/60">
                <a href="#" className="hover:text-white cursor-pointer transition-colors" title="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.89 0-1.61.72-1.61 1.61 0 .88.72 1.6 1.61 1.6.88 0 1.6-.72 1.6-1.6 0-.89-.72-1.61-1.6-1.61Z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white cursor-pointer transition-colors" title="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white cursor-pointer transition-colors" title="TikTok">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.48 2.79 1.26-.01 2.45-.72 3.04-1.83.33-.58.49-1.24.49-1.92.03-4.52.01-9.04.02-13.56.02-.12.01-.24.01-.36z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white cursor-pointer transition-colors" title="X">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">COMPANY</h4>
              <ul className="space-y-2 text-xs text-white/60 font-medium">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">How it works</li>
                <li className="hover:text-white cursor-pointer">Features</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">LEGAL</h4>
              <ul className="space-y-2 text-xs text-white/60 font-medium">
                <li className="hover:text-white cursor-pointer">Privacy policy</li>
                <li className="hover:text-white cursor-pointer">Terms of service</li>
                <li className="hover:text-white cursor-pointer">Acceptable use policy</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">SUPPORT</h4>
              <ul className="space-y-2 text-xs text-white/60 font-medium">
                <li className="hover:text-white cursor-pointer">FAQ</li>
              </ul>
            </div>
          </div>

          {/* Disclaimer & Copyright */}
          <div className="pt-6 border-t border-white/5 text-[11px] text-white/40 leading-relaxed space-y-2">
            <p>
              TRCK is a leisure technology platform based in Nigeria. All experiences are provided by independent third-party creators. TRCK does not host or supervise these Experiences and disclaims liability for third-party actions.
            </p>
            <p>
              Copyright © 2025 Trck Entertainment & Technology Ltd. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
