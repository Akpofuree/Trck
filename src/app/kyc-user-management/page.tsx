"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  SlidersHorizontal,
  List as ListIcon,
  Calendar as CalendarIcon,
  Activity,
  Eye,
  Edit2,
  Copy,
  BarChart2,
  Share2,
  MoreVertical,
  MapPin,
  Calendar,
  Users,
  CheckCircle2,
  X,
  Check,
} from "lucide-react";

// =============================================================================
// TYPES & INTERFACES (Ready for real API integration)
// =============================================================================
export type EventStatus = "live" | "published" | "draft" | "completed" | "sold_out";
export type ViewTab = "list" | "calendar" | "timeline";
export type TimelineInterval = "week" | "month" | "quarter";

export interface EventItemData {
  id: string;
  title: string;
  category: string;
  seriesTitle?: string;
  status: EventStatus;
  date: string;
  location: string;
  soldTickets: number;
  totalTickets: number;
  soldPercentage: number;
  revenue: string;
  checkIns: number;
  totalCheckIns: number;
  image: string;
  team: string[];
  extraTeamCount: number;
}

export interface ManagementSummary {
  totalEvents: number;
  upcomingEvents: number;
  liveNow: number;
  pastEvents: number;
  totalRevenue: string;
  thisMonthRevenue: string;
  avgAttendance: string;
  totalAttendees: string;
}

// =============================================================================
// MOCK DATA GENERATOR / API HOOK RESERVATION
// =============================================================================
// API Endpoint: GET /api/admin/events or /api/host-portal/events
// This placeholder simulates network request and provides mock-up data matching screenshots
const fetchEventManagementData = async (): Promise<{
  summary: ManagementSummary;
  events: EventItemData[];
}> => {
  await new Promise((resolve) => setTimeout(resolve, 200));

  return {
    summary: {
      totalEvents: 24,
      upcomingEvents: 12,
      liveNow: 1,
      pastEvents: 8,
      totalRevenue: "\u20A622.7M",
      thisMonthRevenue: "\u20A62780K",
      avgAttendance: "70%",
      totalAttendees: "6,035",
    },
    events: [
      {
        id: "evt-1",
        title: "5IVE LIVE AT O2 ARENA",
        category: "Concert",
        seriesTitle: "Davido live at 02",
        status: "live",
        date: "Friday, Nov 15, 2024",
        location: "O2 Arena, London, United Kingdom",
        soldTickets: 156,
        totalTickets: 200,
        soldPercentage: 78,
        revenue: "\u20A6450,000",
        checkIns: 145,
        totalCheckIns: 156,
        image: "/eb527c4ccb8bb286d228cef7d0145670 1.png",
        team: ["JD", "D", "D"],
        extraTeamCount: 2,
      },
      {
        id: "evt-2",
        title: "5IVE LIVE AT O2 ARENA",
        category: "Concert",
        seriesTitle: "Davido live at 02",
        status: "published",
        date: "Friday, Nov 15, 2024",
        location: "O2 Arena, London, United Kingdom",
        soldTickets: 156,
        totalTickets: 200,
        soldPercentage: 78,
        revenue: "\u20A6450,000",
        checkIns: 145,
        totalCheckIns: 156,
        image: "/eb527c4ccb8bb286d228cef7d0145670 1.png",
        team: ["JD", "D", "D"],
        extraTeamCount: 2,
      },
      {
        id: "evt-3",
        title: "5IVE LIVE AT O2 ARENA",
        category: "Conference",
        seriesTitle: "Davido live at 02",
        status: "draft",
        date: "Friday, Nov 15, 2024",
        location: "O2 Arena, London, United Kingdom",
        soldTickets: 156,
        totalTickets: 200,
        soldPercentage: 78,
        revenue: "\u20A6450,000",
        checkIns: 145,
        totalCheckIns: 156,
        image: "/eb527c4ccb8bb286d228cef7d0145670 1.png",
        team: ["JD", "D", "D"],
        extraTeamCount: 2,
      },
      {
        id: "evt-4",
        title: "5IVE LIVE AT O2 ARENA",
        category: "Conference",
        seriesTitle: "Davido live at 02",
        status: "completed",
        date: "Friday, Nov 15, 2024",
        location: "O2 Arena, London, United Kingdom",
        soldTickets: 156,
        totalTickets: 200,
        soldPercentage: 78,
        revenue: "\u20A6450,000",
        checkIns: 145,
        totalCheckIns: 156,
        image: "/eb527c4ccb8bb286d228cef7d0145670 1.png",
        team: ["JD", "D", "D"],
        extraTeamCount: 2,
      },
    ],
  };
};


export default function KYCUserManagementPage() {
  const [summary, setSummary] = useState<ManagementSummary | null>(null);
  const [events, setEvents] = useState<EventItemData[]>([]);
  const [loading, setLoading] = useState(true);

  // Active view tab: list, calendar, timeline
  const [activeTab, setActiveTab] = useState<ViewTab>("list");

  // Selected stat card (default: Total Events with blue outline as in screenshot 1)
  const [selectedStatIndex, setSelectedStatIndex] = useState<number>(0);

  // Active filter pill
  const [activeFilter, setActiveFilter] = useState<string>("All Events");

  // Search input query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Multi-select state
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedEventIds, setSelectedEventIds] = useState<Set<string>>(new Set());

  // Calendar / Timeline Date state
  const [calendarDate, setCalendarDate] = useState({ month: "December", year: 2025 });

  // Timeline Interval mode: week (default), month, quarter
  const [timelineInterval, setTimelineInterval] = useState<TimelineInterval>("week");

  // Interactive Filter Modal state
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [filterPriceRange, setFilterPriceRange] = useState<string>("All");

  useEffect(() => {
    fetchEventManagementData().then((res) => {
      setSummary(res.summary);
      setEvents(res.events);
      setLoading(false);
    });
  }, []);

  // Handle selection toggles
  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedEventIds(new Set());
      setSelectAll(false);
    } else {
      setSelectedEventIds(new Set(events.map((e) => e.id)));
      setSelectAll(true);
    }
  };

  const toggleSelectEvent = (id: string) => {
    const newSet = new Set(selectedEventIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedEventIds(newSet);
    setSelectAll(newSet.size === events.length && events.length > 0);
  };

  // Filter pills configuration
  const filterPills = [
    { label: "All Events (24)", value: "All Events" },
    { label: "Upcoming (12)", value: "Upcoming" },
    { label: "Live Now (1)", value: "Live Now" },
    { label: "Draft (3)", value: "Draft" },
    { label: "Past (8)", value: "Past" },
    { label: "Series (5)", value: "Series" },
  ];

  // Helper for status badges
  const renderStatusBadge = (status: EventStatus) => {
    switch (status) {
      case "live":
        return (
          <span className="bg-[#00C853] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider uppercase flex items-center gap-1 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            LIVE
          </span>
        );
      case "published":
        return (
          <span className="bg-[#5E5ADB] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider uppercase shadow-sm">
            • PUBLISHED
          </span>
        );
      case "draft":
        return (
          <span className="bg-[#6B7280] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider uppercase shadow-sm">
            • DRAFT
          </span>
        );
      case "completed":
        return (
          <span className="bg-[#EA580C] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider uppercase shadow-sm">
            • COMPLETED
          </span>
        );
      case "sold_out":
        return (
          <span className="bg-[#EF4444] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm tracking-wider uppercase shadow-sm">
            • SOLD OUT
          </span>
        );
      default:
        return null;
    }
  };

  if (loading || !summary) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
        <div className="flex items-center gap-3 text-white/60">
          <div className="w-5 h-5 border-2 border-[#ED5828] border-t-transparent rounded-full animate-spin"></div>
          <span>Loading Event Management...</span>
        </div>
      </div>
    );
  }

  const statCards = [
    { label: "Total Events", value: summary.totalEvents.toString() },
    { label: "Upcoming Events", value: summary.upcomingEvents.toString() },
    { label: "Live Now", value: summary.liveNow.toString() },
    { label: "Past Events", value: summary.pastEvents.toString() },
    { label: "Total Revenue", value: summary.totalRevenue },
    { label: "This Month Revenue", value: summary.thisMonthRevenue },
    { label: "Avg Attendance", value: summary.avgAttendance },
    { label: "Total Attendees", value: summary.totalAttendees },
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-white font-sans antialiased pb-20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Top Header Row with Back Arrow & Title */}
        <div className="flex items-center gap-3 mb-7">
          <Link
            href="/"
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white/80 hover:text-white"
          >
            <ChevronLeft size={22} />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Event Management
          </h1>
        </div>

        {/* 8 Stats Cards in 2 Rows of 4 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {statCards.slice(0, 4).map((card, index) => {
            const isSelected = selectedStatIndex === index;
            return (
              <div
                key={card.label}
                onClick={() => setSelectedStatIndex(index)}
                className={`bg-[#121212] rounded-[14px] p-5 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "border-2 border-[#0099FF] shadow-[0_0_15px_rgba(0,153,255,0.25)]"
                    : "border border-white/5 hover:border-white/20"
                }`}
              >
                <div className="text-sm text-white/70 font-medium mb-3">
                  {card.label}
                </div>
                <div className="text-3xl font-bold text-[#ED5828] tracking-tight">
                  {card.value}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statCards.slice(4, 8).map((card, index) => {
            const actualIndex = index + 4;
            const isSelected = selectedStatIndex === actualIndex;
            return (
              <div
                key={card.label}
                onClick={() => setSelectedStatIndex(actualIndex)}
                className={`bg-[#121212] rounded-[14px] p-5 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "border-2 border-[#0099FF] shadow-[0_0_15px_rgba(0,153,255,0.25)]"
                    : "border border-white/5 hover:border-white/20"
                }`}
              >
                <div className="text-sm text-white/70 font-medium mb-3">
                  {card.label}
                </div>
                <div className="text-3xl font-bold text-[#ED5828] tracking-tight">
                  {card.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* Separator Line */}
        <div className="h-[1px] bg-white/10 w-full mb-6"></div>

        {/* Controls Bar: [List | Calendar | Timeline] Tabs, Search Bar, and Filters Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          {/* View Tab Switcher */}
          <div className="bg-[#161616] p-1 rounded-xl flex items-center gap-1 border border-white/5 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("list")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "list"
                  ? "bg-[#ED5828] text-white shadow-md"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <ListIcon size={16} />
              <span>List</span>
            </button>
            <button
              onClick={() => setActiveTab("calendar")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "calendar"
                  ? "bg-[#ED5828] text-white shadow-md"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <CalendarIcon size={16} />
              <span>Calendar</span>
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "timeline"
                  ? "bg-[#ED5828] text-white shadow-md"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <Activity size={16} />
              <span>Timeline</span>
            </button>
          </div>

          {/* Search Input & Filters Button */}
          <div className="flex items-center gap-3 flex-1 max-w-2xl">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search by event name, date or location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121212] border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[#ED5828] transition-colors"
              />
            </div>

            <button
              onClick={() => setShowFilterModal(true)}
              className="bg-[#FF6536] hover:bg-[#e0552b] text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shrink-0 transition-colors shadow-sm cursor-pointer"
            >
              <SlidersHorizontal size={16} />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-4">
          {filterPills.map((pill) => {
            const isActive = activeFilter === pill.value;
            return (
              <button
                key={pill.value}
                onClick={() => setActiveFilter(pill.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#ED5828] text-white shadow-sm"
                    : "bg-[#161616] text-white/70 border border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        {/* Thin Orange-tinted Section Divider */}
        <div className="h-[1px] bg-[#3B170B] w-full mb-5"></div>


        {/* =========================================================================
            VIEW 1: LIST VIEW (Screenshots 1 & 2)
        ========================================================================= */}
        {activeTab === "list" && (
          <div>
            {/* Header sub-row: Select All checkbox & Counter */}
            <div className="flex items-center justify-between mb-4 px-1">
              <label className="flex items-center gap-3 cursor-pointer text-sm text-white/80 font-medium select-none">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 rounded border-white/30 bg-[#161616] accent-[#ED5828] cursor-pointer"
                />
                <span>Select All</span>
              </label>
              <div className="text-xs sm:text-sm text-white/50">
                Showing {events.length} of {summary.totalEvents} events
              </div>
            </div>

            {/* Event List Items */}
            <div className="space-y-4">
              {events.map((event) => {
                const isSelected = selectedEventIds.has(event.id);
                return (
                  <div
                    key={event.id}
                    className="bg-[#121212] border border-white/5 rounded-2xl p-5 hover:border-white/15 transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelectEvent(event.id)}
                        className="w-4 h-4 rounded border-white/30 bg-[#161616] accent-[#ED5828] cursor-pointer mt-1 shrink-0"
                      />

                      {/* Thumbnail Image with Overlaid Badge */}
                      <div className="relative w-full md:w-[130px] h-[100px] rounded-xl overflow-hidden shrink-0 bg-[#1E1E1E] border border-white/5">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                        <div className="absolute top-2 left-2 z-10">
                          {renderStatusBadge(event.status)}
                        </div>
                      </div>

                      {/* Event Main Info */}
                      <div className="flex-1 min-w-0">
                        {/* Title and Tags Row */}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Link
                            href="/kyc-user-management/event-detail"
                            className="text-base font-bold text-white hover:text-[#ED5828] tracking-wide uppercase transition-colors"
                          >
                            {event.title}
                          </Link>
                          <span className="bg-[#1A1A1A] border border-white/10 text-white/70 text-[11px] font-medium px-2.5 py-0.5 rounded">
                            {event.category}
                          </span>
                          {event.seriesTitle && (
                            <span className="text-xs text-[#ED5828] flex items-center gap-1 font-medium">
                              <span className="text-white/40">(–)</span>
                              <span>Part of {event.seriesTitle}</span>
                            </span>
                          )}
                        </div>

                        {/* Date and Location Row */}
                        <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-white/60 mb-2.5">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-white/40" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-white/40" />
                            <span>{event.location}</span>
                          </div>
                        </div>

                        {/* Metrics Row: Sold, Revenue, Check-ins */}
                        <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-white/80 font-medium">
                          <div className="flex items-center gap-1.5 text-white/70">
                            <Users size={14} className="text-white/50" />
                            <span>
                              Sold: {event.soldTickets}/{event.totalTickets} ({event.soldPercentage}%)
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[#ED5828]">
                            <span className="font-bold">₦</span>
                            <span>Revenue: {event.revenue}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[#ED5828]">
                            <CheckCircle2 size={14} className="text-[#ED5828]" />
                            <span>
                              Check-ins: {event.checkIns}/{event.totalCheckIns}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar under Details */}
                    <div className="w-full bg-[#242424] h-[3px] rounded-full mt-4 mb-3 overflow-hidden">
                      <div
                        className="bg-[#ED5828] h-full rounded-full"
                        style={{ width: `${event.soldPercentage}%` }}
                      ></div>
                    </div>

                    {/* Bottom Row: Team Avatars & Action Icons */}
                    <div className="flex items-center justify-between pt-1">
                      {/* Avatar Overlap Circles */}
                      <div className="flex items-center">
                        <div className="flex -space-x-2 overflow-hidden">
                          {event.team.map((initial, i) => (
                            <div
                              key={i}
                              className="w-7 h-7 rounded-full bg-[#ED5828] text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#121212]"
                            >
                              {initial}
                            </div>
                          ))}
                        </div>
                        {event.extraTeamCount > 0 && (
                          <span className="text-xs text-white/40 font-medium ml-3">
                            +{event.extraTeamCount} more
                          </span>
                        )}
                      </div>

                      {/* 6 Action Icon Buttons */}
                      <div className="flex items-center gap-1">
                        <Link
                          href="/kyc-user-management/event-detail"
                          title="View Details"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <Eye size={15} />
                        </Link>
                        <button
                          title="Edit Event"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <Edit2 size={15} />
                        </button>
                        <button
                          title="Duplicate Event"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <Copy size={15} />
                        </button>
                        <button
                          title="Event Analytics"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <BarChart2 size={15} />
                        </button>
                        <button
                          title="Share Event"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <Share2 size={15} />
                        </button>
                        <button
                          title="More Options"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <MoreVertical size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================================
            VIEW 2: CALENDAR VIEW (Screenshots 3 & 4)
        ========================================================================= */}
        {activeTab === "calendar" && (
          <div className="mt-2">
            {/* Calendar Header with Title & Navigation */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">
                {calendarDate.month} {calendarDate.year}
              </h2>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCalendarDate({ month: "November", year: 2025 })}
                  className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setCalendarDate({ month: "December", year: 2025 })}
                  className="text-xs font-semibold text-white/80 hover:text-white px-2 py-1"
                >
                  Today
                </button>
                <button
                  onClick={() => setCalendarDate({ month: "January", year: 2026 })}
                  className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Calendar Grid Tiles (Matches screenshot 3 & 4) */}
            <div className="grid grid-cols-7 gap-2.5">
              {/* Row 1: 1 - 6 */}
              {[1, 2, 3, 4, 5, 6, ""].map((day, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="bg-[#161616] border border-white/5 rounded-xl min-h-[120px] sm:min-h-[140px] p-3 text-white/70 font-medium text-xs hover:border-white/15 transition-colors cursor-pointer"
                >
                  {day !== "" && <span>{day}</span>}
                </div>
              ))}

              {/* Row 2: 7 - 13 */}
              {[7, 8, 9, 10, 11, 12, 13].map((day) => (
                <div
                  key={`r2-${day}`}
                  className="bg-[#161616] border border-white/5 rounded-xl min-h-[120px] sm:min-h-[140px] p-3 text-white/70 font-medium text-xs hover:border-white/15 transition-colors cursor-pointer"
                >
                  <span>{day}</span>
                </div>
              ))}

              {/* Row 3: 14 - 19 & 1 */}
              {[14, 15, 16, 17, 18, 19, 1].map((day, idx) => (
                <div
                  key={`r3-${idx}`}
                  className="bg-[#161616] border border-white/5 rounded-xl min-h-[120px] sm:min-h-[140px] p-3 text-white/70 font-medium text-xs hover:border-white/15 transition-colors cursor-pointer"
                >
                  <span>{day}</span>
                </div>
              ))}

              {/* Row 4: 20 - 26 */}
              {[20, 21, 22, 23, 24, 25, 26].map((day) => (
                <div
                  key={`r4-${day}`}
                  className="bg-[#161616] border border-white/5 rounded-xl min-h-[120px] sm:min-h-[140px] p-3 text-white/70 font-medium text-xs hover:border-white/15 transition-colors cursor-pointer"
                >
                  <span>{day}</span>
                </div>
              ))}

              {/* Row 5: 27 - 31 */}
              {[27, 28, 29, 30, 31, "", ""].map((day, idx) => (
                <div
                  key={`r5-${idx}`}
                  className="bg-[#161616] border border-white/5 rounded-xl min-h-[120px] sm:min-h-[140px] p-3 text-white/70 font-medium text-xs hover:border-white/15 transition-colors cursor-pointer"
                >
                  {day !== "" && <span>{day}</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            VIEW 3: TIMELINE VIEW (Screenshot 5 + Weekly/Monthly/Quarterly Spec)
        ========================================================================= */}
        {activeTab === "timeline" && (
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6">
            {/* Timeline Header with Week/Month/Quarter toggles */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h2 className="text-xl font-bold text-white">Timeline View</h2>

              <div className="flex items-center gap-3 self-start sm:self-auto">
                {/* Interval Toggles: Week / Month / Quarter */}
                <div className="bg-[#1A1A1A] p-1 rounded-xl flex items-center border border-white/5">
                  <button
                    onClick={() => setTimelineInterval("week")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      timelineInterval === "week"
                        ? "bg-[#ED5828] text-white shadow-sm"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Week
                  </button>
                  <button
                    onClick={() => setTimelineInterval("month")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      timelineInterval === "month"
                        ? "bg-[#ED5828] text-white shadow-sm"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Month
                  </button>
                  <button
                    onClick={() => setTimelineInterval("quarter")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      timelineInterval === "quarter"
                        ? "bg-[#ED5828] text-white shadow-sm"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Quarter
                  </button>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-1">
                  <button className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                    <ChevronLeft size={16} />
                  </button>
                  <span className="text-xs font-semibold text-white/80 px-2">Today</span>
                  <button className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Dynamic Monthly / Quarterly Interpretation Banner (Per user specification) */}
            {timelineInterval === "month" && (
              <div className="mb-6 p-4 bg-[#181818] border border-[#ED5828]/30 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ED5828]"></span>
                      Monthly Interpretation & Analytics (December 2025)
                    </h4>
                    <p className="text-xs text-white/60 mt-1">
                      Showing aggregated monthly event distribution, scheduled live releases, and projected ticket volume across all 24 events.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
                    <div>
                      <span className="text-white/40 block">Total Monthly Capacity:</span>
                      <span className="text-[#ED5828] text-sm font-bold">4,800 Tickets</span>
                    </div>
                    <div className="h-8 w-[1px] bg-white/10"></div>
                    <div>
                      <span className="text-white/40 block">Target Revenue:</span>
                      <span className="text-green-400 text-sm font-bold">₦3,200,000</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {timelineInterval === "quarter" && (
              <div className="mb-6 p-4 bg-[#181818] border border-[#5E5ADB]/30 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#5E5ADB]"></span>
                      Quarterly Interpretation & Strategy (Q4 2025 Overview)
                    </h4>
                    <p className="text-xs text-white/60 mt-1">
                      Quarterly pacing indicator: 18 events published, 4 in draft stage, 2 live now across 3 regions.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
                    <div>
                      <span className="text-white/40 block">Quarterly Run Rate:</span>
                      <span className="text-[#5E5ADB] text-sm font-bold">86% on-target</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Timeline Grid Container with vertical separator lines (Screenshot 5) */}
            <div className="relative border-b border-[#3B170B] pb-10 mb-6">
              {/* Header dates row */}
              <div className="grid grid-cols-11 text-center text-xs text-white/40 font-medium mb-8">
                {Array.from({ length: 11 }).map((_, i) => (
                  <div key={i}>Dec 1</div>
                ))}
              </div>

              {/* Vertical Orange-brown guidelines */}
              <div className="grid grid-cols-11 h-[140px] w-full">
                {Array.from({ length: 11 }).map((_, i) => (
                  <div
                    key={i}
                    className="border-r border-[#3B170B] h-full first:border-l"
                  ></div>
                ))}
              </div>

              {/* Centered "No events in this time range" text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-sm text-white/60 font-medium bg-[#121212] px-4 py-2 rounded-lg border border-white/5">
                  No events in this time range
                </span>
              </div>
            </div>

            {/* Status Legend Row (Screenshot 5) */}
            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-white/70 pt-2">
              <span className="font-semibold text-white/90">Status:</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00C853]"></span>
                <span>Live</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#5E5ADB]"></span>
                <span>Published</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6B7280]"></span>
                <span>Draft</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
                <span>Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EF4444]"></span>
                <span>Sold out</span>
              </div>
            </div>
          </div>
        )}
        {/* =========================================================================
            FILTER MODAL / DRAWER (Triggered by Filters Button)
        ========================================================================= */}
        {showFilterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#141414] border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={18} className="text-[#ED5828]" />
                  <h3 className="text-base font-bold text-white">Filter Events</h3>
                </div>
                <button
                  onClick={() => setShowFilterModal(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                {/* Filter by Status */}
                <div>
                  <label className="text-xs font-semibold text-white/50 uppercase tracking-wider block mb-3">
                    Event Status
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["All", "Live Now", "Upcoming", "Draft", "Past", "Series"].map((status) => (
                      <button
                        key={status}
                        onClick={() => setActiveFilter(status === "All" ? "All Events" : status)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          (activeFilter === status || (status === "All" && activeFilter === "All Events"))
                            ? "bg-[#ED5828] text-white"
                            : "bg-[#1C1C1C] border border-white/10 text-white/70 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filter by Category */}
                <div>
                  <label className="text-xs font-semibold text-white/50 uppercase tracking-wider block mb-3">
                    Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["All", "Concert", "Conference", "Festival", "Workshop", "Comedy"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFilterCategory(cat)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          filterCategory === cat
                            ? "bg-[#ED5828] text-white"
                            : "bg-[#1C1C1C] border border-white/10 text-white/70 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filter by Price Range */}
                <div>
                  <label className="text-xs font-semibold text-white/50 uppercase tracking-wider block mb-3">
                    Ticket Price Range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["All", "Free", "Under ₦50,000", "₦50,000 - ₦100,000", "Above ₦100,000"].map((range) => (
                      <button
                        key={range}
                        onClick={() => setFilterPriceRange(range)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          filterPriceRange === range
                            ? "bg-[#ED5828] text-white"
                            : "bg-[#1C1C1C] border border-white/10 text-white/70 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-5 border-t border-white/10 flex items-center justify-between gap-3 bg-[#111111]">
                <button
                  onClick={() => {
                    setActiveFilter("All Events");
                    setFilterCategory("All");
                    setFilterPriceRange("All");
                  }}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Reset All
                </button>
                <button
                  onClick={() => setShowFilterModal(false)}
                  className="bg-[#ED5828] hover:bg-[#d84a1e] text-white px-6 py-2.5 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
