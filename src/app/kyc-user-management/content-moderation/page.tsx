"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronDown,
  Search,
  SlidersHorizontal,
  Clock,
  Star,
  AlertTriangle,
  Check,
  X,
  Eye,
  Sliders,
  Tag,
  ShieldAlert,
  Calendar,
  User,
} from "lucide-react";

interface ModerationItem {
  id: string;
  author: string;
  avatarText: string;
  targetEvent: string;
  tag: string;
  timeAgo: string;
  rating: number;
  content: string;
  flagReason: string;
  status: "pending" | "flagged" | "approved" | "rejected";
}

export default function ContentModerationPage() {
  // Active stat card selection
  const [selectedStatIndex, setSelectedStatIndex] = useState<number>(0);

  // Active filter tab
  const [activeTab, setActiveTab] = useState<string>("All Contents");

  // Search input query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Select all & item selection
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Auto-moderation toggles
  const [autoModComments, setAutoModComments] = useState<boolean>(true);
  const [filterProfanity, setFilterProfanity] = useState<boolean>(true);
  const [holdReviews, setHoldReviews] = useState<boolean>(false);
  const [bannedKeywords, setBannedKeywords] = useState<string>("Spam, Scam, Hate, Violence");

  // Reporting & Thresholds
  const [spamSensitivity, setSpamSensitivity] = useState<number>(70);
  const [action5Reports, setAction5Reports] = useState<string>("Auto-hide Content");
  const [action10Reports, setAction10Reports] = useState<string>("Suspend User");
  const [showDropdown5, setShowDropdown5] = useState<boolean>(false);
  const [showDropdown10, setShowDropdown10] = useState<boolean>(false);

  // Filter Modal state (Screenshot 2)
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [selectedContentTypes, setSelectedContentTypes] = useState<Set<string>>(new Set());
  const [selectedSecurityLevels, setSelectedSecurityLevels] = useState<Set<string>>(new Set());
  const [selectedDateRange, setSelectedDateRange] = useState<string>("Last 24 Hours");
  const [selectedUserStatuses, setSelectedUserStatuses] = useState<Set<string>>(new Set());

  // Moderation Items mock data
  const [items, setItems] = useState<ModerationItem[]>([
    {
      id: "mod-1",
      author: "John Doe",
      avatarText: "JD",
      targetEvent: "5IVE LIVE AT 02 ARENA",
      tag: "Auto-flagged",
      timeAgo: "2 hours ago",
      rating: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis nulla sit amet cursus vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam malesuada metus ex, nec iaculis nunc eleifend sed.",
      flagReason: "Flagged: Offensive language",
      status: "flagged",
    },
    {
      id: "mod-2",
      author: "John Doe",
      avatarText: "JD",
      targetEvent: "5IVE LIVE AT 02 ARENA",
      tag: "Auto-flagged",
      timeAgo: "2 hours ago",
      rating: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis nulla sit amet cursus vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam malesuada metus ex, nec iaculis nunc eleifend sed.",
      flagReason: "Flagged: Offensive language",
      status: "flagged",
    },
    {
      id: "mod-3",
      author: "John Doe",
      avatarText: "JD",
      targetEvent: "5IVE LIVE AT 02 ARENA",
      tag: "Auto-flagged",
      timeAgo: "2 hours ago",
      rating: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis nulla sit amet cursus vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam malesuada metus ex, nec iaculis nunc eleifend sed.",
      flagReason: "Flagged: Offensive language",
      status: "flagged",
    },
    {
      id: "mod-4",
      author: "John Doe",
      avatarText: "JD",
      targetEvent: "5IVE LIVE AT 02 ARENA",
      tag: "Auto-flagged",
      timeAgo: "3 hours ago",
      rating: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis nulla sit amet cursus vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam malesuada metus ex, nec iaculis nunc eleifend sed.",
      flagReason: "Flagged: Offensive language",
      status: "pending",
    },
    {
      id: "mod-5",
      author: "John Doe",
      avatarText: "JD",
      targetEvent: "5IVE LIVE AT 02 ARENA",
      tag: "Auto-flagged",
      timeAgo: "4 hours ago",
      rating: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis nulla sit amet cursus vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam malesuada metus ex, nec iaculis nunc eleifend sed.",
      flagReason: "Flagged: Offensive language",
      status: "pending",
    },
  ]);

  const statCards = [
    { label: "Pending Reviews", value: 2 },
    { label: "Flagged Content", value: 3 },
    { label: "Approved Today", value: 48 },
    { label: "Rejected Today", value: 12 },
  ];

  const filterTabs = [
    { label: "All Contents (5)", value: "All Contents" },
    { label: "Pending Review (2)", value: "Pending Review" },
    { label: "Flagged (3)", value: "Flagged" },
    { label: "Approved (48)", value: "Approved" },
    { label: "Rejected (12)", value: "Rejected" },
  ];

  // Selection handlers
  const handleToggleSelectAll = () => {
    if (selectAll) {
      setSelectedIds(new Set());
      setSelectAll(false);
    } else {
      setSelectedIds(new Set(items.map((i) => i.id)));
      setSelectAll(true);
    }
  };

  const handleToggleItem = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedIds(next);
    setSelectAll(next.size === items.length);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white font-sans antialiased pb-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">

        {/* Top Watermark Label (matching screenshot 1) */}
        <div className="text-xs text-white/40 font-medium tracking-wide mb-2 hidden md:block">
          Content Moderation
        </div>

        {/* Header with back navigation */}
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/kyc-user-management"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft size={18} />
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Content Moderation
          </h1>
        </div>

        {/* 4 KPI STAT CARDS (Screenshot 1) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {statCards.map((card, idx) => {
            const isSelected = selectedStatIndex === idx;
            return (
              <div
                key={card.label}
                onClick={() => setSelectedStatIndex(idx)}
                className={`bg-[#121212] rounded-2xl p-5 cursor-pointer transition-all ${
                  isSelected
                    ? "border-2 border-[#0099FF] shadow-lg"
                    : "border border-white/5 hover:border-white/15"
                }`}
              >
                <div className="text-xs sm:text-sm text-white/70 font-medium mb-3">
                  {card.label}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#ED5828]">
                  {card.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* DIVIDER & FILTER TABS BAR */}
        <div className="border-t border-white/5 pt-5 mb-5">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#141414] border border-[#3B170B] text-white shadow-sm"
                      : "bg-transparent text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar + Filters Button */}
          <div className="flex items-center gap-3 max-w-2xl mb-6">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search content, users or events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121212] border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-xs sm:text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[#ED5828] transition-colors"
              />
            </div>

            <button
              onClick={() => setShowFilterModal(true)}
              className="bg-[#FF6536] hover:bg-[#e0552b] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 shrink-0 transition-colors shadow-sm cursor-pointer"
            >
              <SlidersHorizontal size={15} />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* LIST HEADER CONTROLS (Screenshot 1 & 2) */}
        <div className="border-t border-white/5 pt-4 pb-3 flex items-center justify-between text-xs text-white/60 mb-3">
          <div className="flex items-center gap-2 cursor-pointer select-none" onClick={handleToggleSelectAll}>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleToggleSelectAll}
              className="w-4 h-4 rounded border-white/30 bg-[#161616] accent-[#ED5828] cursor-pointer"
            />
            <span className="font-semibold text-white/80">Select All</span>
          </div>

          <div className="text-white/60">
            Showing <span className="text-white font-medium">5 Items</span> • Avg response time:{" "}
            <span className="text-white font-medium">8 mins</span>
          </div>
        </div>

        {/* CONTENT MODERATION ITEMS LIST (Screenshots 1, 2, 3) */}
        <div className="space-y-4 mb-8">
          {items.map((item) => {
            const isChecked = selectedIds.has(item.id);
            return (
              <div
                key={item.id}
                className="bg-[#121212] border border-white/5 rounded-2xl p-5 sm:p-6 hover:border-white/15 transition-all"
              >
                <div className="flex items-start gap-4">
                  {/* Item Checkbox */}
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleToggleItem(item.id)}
                    className="w-4 h-4 rounded border-white/30 bg-[#161616] accent-[#ED5828] cursor-pointer mt-1 shrink-0"
                  />

                  {/* Avatar Circle */}
                  <div className="w-10 h-10 rounded-full bg-[#ED5828] text-white text-xs font-bold flex items-center justify-center shrink-0 border-2 border-[#121212]">
                    {item.avatarText}
                  </div>

                  {/* Item Content Area */}
                  <div className="flex-1 min-w-0">
                    {/* Header line: Name, Target Event, Auto-flagged Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-sm font-bold text-white">{item.author}</span>
                      <span className="text-xs text-white/70 font-medium">• @ {item.targetEvent}</span>
                      <span className="bg-[#3D1414] border border-[#661E1E] text-[#FF8585] text-[10px] font-semibold px-2 py-0.5 rounded tracking-wide">
                        {item.tag}
                      </span>
                    </div>

                    {/* Subline: Time ago & Star rating */}
                    <div className="flex items-center gap-2 text-xs text-white/40 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{item.timeAgo}</span>
                      </div>
                      <span>•</span>
                      {/* 1 yellow star, 4 dark stars */}
                      <div className="flex items-center gap-0.5 text-xs">
                        <span className="text-[#FFD400]">★</span>
                        <span className="text-white/20">★</span>
                        <span className="text-white/20">★</span>
                        <span className="text-white/20">★</span>
                        <span className="text-white/20">★</span>
                      </div>
                    </div>

                    {/* Review text */}
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal mb-3.5">
                      {item.content}
                    </p>

                    {/* Flagged Pill Box */}
                    <div className="border border-white/10 bg-[#161616] rounded-xl px-3.5 py-2 text-xs flex items-center gap-2 text-white/80 w-full max-w-xl mb-4">
                      <AlertTriangle size={14} className="text-[#FF8585] shrink-0" />
                      <span>{item.flagReason}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <button className="bg-[#181818] border border-white/10 hover:border-white/25 text-white/85 hover:text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all">
                        <Check size={13} />
                        <span>Approve</span>
                      </button>
                      <button className="bg-[#181818] border border-white/10 hover:border-white/25 text-white/85 hover:text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all">
                        <X size={13} />
                        <span>Reject</span>
                      </button>
                      <button className="bg-[#181818] border border-white/10 hover:border-white/25 text-white/85 hover:text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all">
                        <Eye size={13} />
                        <span>View full details</span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AUTO-MODERATION SECTION CARD (Screenshots 3, 4) */}
        <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold text-white mb-6">Auto-Moderation</h2>

          {/* Toggle 1: Enable Auto-moderation */}
          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <span className="text-sm font-medium text-white/85">
              Enable Auto-moderation for comments
            </span>
            <div
              className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                autoModComments ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
              }`}
              onClick={() => setAutoModComments(!autoModComments)}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                  autoModComments ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          {/* Toggle 2: Filter profanity */}
          <div className="flex items-center justify-between py-3 border-b border-white/5">
            <span className="text-sm font-medium text-white/85">
              Filter profanity automatically
            </span>
            <div
              className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                filterProfanity ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
              }`}
              onClick={() => setFilterProfanity(!filterProfanity)}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                  filterProfanity ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          {/* Toggle 3: Hold all reviews for approval */}
          <div className="flex items-center justify-between py-3 mb-6">
            <span className="text-sm font-medium text-white/85">
              Hold all reviews for approval
            </span>
            <div
              className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                holdReviews ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
              }`}
              onClick={() => setHoldReviews(!holdReviews)}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                  holdReviews ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          {/* Banned Keywords Textarea */}
          <div className="mb-5">
            <label className="block text-xs font-semibold text-white/80 mb-2">
              Banned Keywords (separated by comma)
            </label>
            <textarea
              rows={4}
              value={bannedKeywords}
              onChange={(e) => setBannedKeywords(e.target.value)}
              className="w-full bg-[#181818] border border-white/10 rounded-xl p-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#ED5828] transition-colors resize-none"
            />
          </div>

          {/* Update Button on Bottom Right */}
          <div className="flex justify-end">
            <button className="bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-all shadow-sm">
              Update
            </button>
          </div>
        </div>

        {/* REPORTING & THRESHOLDS CARD (Screenshots 4, 5) */}
        <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-8 mb-12">
          <h2 className="text-lg font-bold text-white mb-6">Reporting & Thresholds</h2>

          {/* Spam Detection Sensitivity Range Slider */}
          <div className="mb-6">
            <div className="text-xs font-semibold text-white/80 mb-3">
              Spam Detection Sensitivity
            </div>
            
            {/* Custom interactive Slider */}
            <div className="relative w-full flex items-center py-2">
              <input
                type="range"
                min="0"
                max="100"
                value={spamSensitivity}
                onChange={(e) => setSpamSensitivity(Number(e.target.value))}
                className="w-full h-1 bg-[#282828] rounded-lg appearance-none cursor-pointer accent-[#ED5828]"
              />
            </div>
          </div>

          {/* 2-Column Custom Dropdown Grid (Matching Screenshot 1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Action on 5+ reports */}
            <div className="relative">
              <label className="block text-xs font-semibold text-white/80 mb-2">
                Action on 5+ reports
              </label>
              
              <div
                onClick={() => {
                  setShowDropdown5(!showDropdown5);
                  setShowDropdown10(false);
                }}
                className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-sm text-white flex items-center justify-between cursor-pointer hover:border-white/20 transition-all select-none"
              >
                <span>{action5Reports}</span>
                <ChevronDown
                  size={16}
                  className={`text-white/40 transition-transform duration-200 ${
                    showDropdown5 ? "rotate-180 text-white" : ""
                  }`}
                />
              </div>

              {/* Dropdown Menu (Screenshot 1) */}
              {showDropdown5 && (
                <div className="mt-2 w-full bg-[#141414] border border-white/10 rounded-xl p-1.5 shadow-2xl z-20 space-y-1">
                  {[
                    "Auto-hide Content",
                    "Notify Moderator",
                    "Suspend User",
                  ].map((opt) => {
                    const isSelected = action5Reports === opt;
                    return (
                      <div
                        key={opt}
                        onClick={() => {
                          setAction5Reports(opt);
                          setShowDropdown5(false);
                        }}
                        className={`px-3.5 py-2.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                          isSelected
                            ? "bg-[#ED5828] text-white shadow-sm"
                            : "text-white/75 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {opt}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Action on 10+ reports */}
            <div className="relative">
              <label className="block text-xs font-semibold text-white/80 mb-2">
                Action on 10+ reports
              </label>
              
              <div
                onClick={() => {
                  setShowDropdown10(!showDropdown10);
                  setShowDropdown5(false);
                }}
                className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-sm text-white flex items-center justify-between cursor-pointer hover:border-white/20 transition-all select-none"
              >
                <span>{action10Reports}</span>
                <ChevronDown
                  size={16}
                  className={`text-white/40 transition-transform duration-200 ${
                    showDropdown10 ? "rotate-180 text-white" : ""
                  }`}
                />
              </div>

              {/* Dropdown Menu (Screenshot 1) */}
              {showDropdown10 && (
                <div className="mt-2 w-full bg-[#141414] border border-white/10 rounded-xl p-1.5 shadow-2xl z-20 space-y-1">
                  {[
                    "Suspend User",
                    "Ban User",
                    "Notify Admin",
                  ].map((opt) => {
                    const isSelected = action10Reports === opt;
                    return (
                      <div
                        key={opt}
                        onClick={() => {
                          setAction10Reports(opt);
                          setShowDropdown10(false);
                        }}
                        className={`px-3.5 py-2.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                          isSelected
                            ? "bg-[#ED5828] text-white shadow-sm"
                            : "text-white/75 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {opt}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Update Button on Bottom Right */}
          <div className="flex justify-end">
            <button className="bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-all shadow-sm">
              Update
            </button>
          </div>
        </div>

        {/* =========================================================================
            FILTER MODAL (Matching Screenshot 2 exactly)
        ========================================================================= */}
        {showFilterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#0C0C0C] border-2 border-[#0099FF]/80 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative p-6 sm:p-8">
              
              {/* Close Button Top Right */}
              <button
                onClick={() => setShowFilterModal(false)}
                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* 4-Column Filter Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 pb-8">
                
                {/* Column 1: Content Type */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                    <Tag size={15} className="text-white/70" />
                    <span>Content Type</span>
                  </div>
                  <div className="space-y-3 text-xs text-white/75">
                    {["All Types", "Reviews", "Comments", "Event Reports"].map((type) => {
                      const isChecked = selectedContentTypes.has(type);
                      return (
                        <label
                          key={type}
                          className="flex items-center gap-2.5 cursor-pointer hover:text-white select-none"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {
                              const next = new Set(selectedContentTypes);
                              if (next.has(type)) next.delete(type);
                              else next.add(type);
                              setSelectedContentTypes(next);
                            }}
                            className="w-4 h-4 rounded border-white/20 bg-[#161616] accent-[#ED5828] cursor-pointer"
                          />
                          <span>{type}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2: Security Level */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                    <ShieldAlert size={15} className="text-white/70" />
                    <span>Security Level</span>
                  </div>
                  <div className="space-y-3 text-xs text-white/75">
                    {["All Types", "Reviews", "Comments", "Event Reports"].map((level) => {
                      const isChecked = selectedSecurityLevels.has(level);
                      return (
                        <label
                          key={level}
                          className="flex items-center gap-2.5 cursor-pointer hover:text-white select-none"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {
                              const next = new Set(selectedSecurityLevels);
                              if (next.has(level)) next.delete(level);
                              else next.add(level);
                              setSelectedSecurityLevels(next);
                            }}
                            className="w-4 h-4 rounded border-white/20 bg-[#161616] accent-[#ED5828] cursor-pointer"
                          />
                          <span>{level}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3: Date Range */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                    <Calendar size={15} className="text-white/70" />
                    <span>Date Range</span>
                  </div>
                  <div className="relative">
                    <select
                      value={selectedDateRange}
                      onChange={(e) => setSelectedDateRange(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl py-2.5 px-3.5 text-xs text-white appearance-none focus:outline-none focus:border-[#ED5828] cursor-pointer"
                    >
                      <option value="Last 24 Hours">Last 24 Hours</option>
                      <option value="Last 7 Days">Last 7 Days</option>
                      <option value="Last 30 Days">Last 30 Days</option>
                      <option value="All Time">All Time</option>
                    </select>
                    <ChevronDown
                      size={15}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Column 4: User Status */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                    <User size={15} className="text-white/70" />
                    <span>User Status</span>
                  </div>
                  <div className="space-y-3 text-xs text-white/75">
                    {[
                      "New accounts (<30 days)",
                      "Users with violations",
                      "Verified users",
                      "Banned users",
                    ].map((status) => {
                      const isChecked = selectedUserStatuses.has(status);
                      return (
                        <label
                          key={status}
                          className="flex items-center gap-2.5 cursor-pointer hover:text-white select-none"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {
                              const next = new Set(selectedUserStatuses);
                              if (next.has(status)) next.delete(status);
                              else next.add(status);
                              setSelectedUserStatuses(next);
                            }}
                            className="w-4 h-4 rounded border-white/20 bg-[#161616] accent-[#ED5828] cursor-pointer"
                          />
                          <span>{status}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Bottom Divider */}
              <div className="border-t border-[#3B170B] pt-5 flex items-center justify-end gap-3">
                <button
                  onClick={() => {
                    setSelectedContentTypes(new Set());
                    setSelectedSecurityLevels(new Set());
                    setSelectedDateRange("Last 24 Hours");
                    setSelectedUserStatuses(new Set());
                  }}
                  className="bg-[#181818] hover:bg-white/10 text-white/70 hover:text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all"
                >
                  Reset All
                </button>
                <button
                  onClick={() => setShowFilterModal(false)}
                  className="bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-all shadow-sm"
                >
                  Apply Filters
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* FOOTER (Screenshot 5) */}
      <footer className="mt-12 border-t border-white/10 pt-12 pb-8 bg-black">
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

        </div>
      </footer>
    </div>
  );
}
