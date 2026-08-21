"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronDown,
  Search,
  Settings as SettingsIcon,
  CreditCard,
  DollarSign,
  FolderTree,
  RotateCcw,
  Bell,
  Shield,
  Zap,
  Check,
  Building2,
  Lock,
  Globe,
  Sliders,
  Wallet,
  Music,
  Mic,
  Wrench,
  Trophy,
  Drama,
  Wine,
  Users,
  Gamepad2,
  Smile,
  Pencil,
  Trash2,
  Plus,
  Mail,
  Smartphone,
  SlidersHorizontal,
} from "lucide-react";

type SettingsTab =
  | "general"
  | "payment"
  | "fees"
  | "categories"
  | "refunds"
  | "notifications"
  | "security"
  | "ratelimit";

interface CategoryItem {
  id: string;
  name: string;
  count: string;
  enabled: boolean;
  iconName: string;
}

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("payment");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Payment Settings State (Screenshots from previous prompt)
  const [primaryGateway, setPrimaryGateway] = useState<string>("Paystack");
  const [backupGateway, setBackupGateway] = useState<string>("Flutterwave");
  const [payoutSchedule, setPayoutSchedule] = useState<string>("Weekly (Monday)");
  const [minPayoutAmount, setMinPayoutAmount] = useState<string>("₦5,000");
  const [requireBankVerification, setRequireBankVerification] = useState<boolean>(true);
  const [holdFirstTimePayouts, setHoldFirstTimePayouts] = useState<boolean>(true);
  const [collectVat, setCollectVat] = useState<boolean>(true);
  const [vatRate, setVatRate] = useState<number>(7.5);
  const [taxId, setTaxId] = useState<string>("N5,000");

  // Fees & Pricing State (Screenshot 1)
  const [platformCommission, setPlatformCommission] = useState<number>(5);
  const [processingFee, setProcessingFee] = useState<number>(5);
  const [passFeesToAttendee, setPassFeesToAttendee] = useState<boolean>(true);
  const [allowOrganizersAbsorb, setAllowOrganizersAbsorb] = useState<boolean>(false);
  const [minTicketPrice, setMinTicketPrice] = useState<string>("N500");
  const [maxTicketPrice, setMaxTicketPrice] = useState<string>("N10,000,000");

  // Event Categories State (Screenshot 2)
  const [categories, setCategories] = useState<CategoryItem[]>([
    { id: "cat-1", name: "Music Concert", count: "156 events", enabled: true, iconName: "music" },
    { id: "cat-2", name: "Conference", count: "156 events", enabled: true, iconName: "mic" },
    { id: "cat-3", name: "Workshop", count: "156 events", enabled: true, iconName: "workshop" },
    { id: "cat-4", name: "Sports", count: "156 events", enabled: true, iconName: "sports" },
    { id: "cat-5", name: "Arts & Theater", count: "156 events", enabled: true, iconName: "theater" },
    { id: "cat-6", name: "Food & Drink", count: "156 events", enabled: true, iconName: "food" },
    { id: "cat-7", name: "Networking", count: "156 events", enabled: true, iconName: "networking" },
    { id: "cat-8", name: "Gaming", count: "156 events", enabled: true, iconName: "gaming" },
    { id: "cat-9", name: "Wellness", count: "156 events", enabled: true, iconName: "wellness" },
  ]);

  // Refund & Policies State (Screenshots 3 & 4)
  const [defaultRefundWindow, setDefaultRefundWindow] = useState<number>(30);
  const [gracePeriodHours, setGracePeriodHours] = useState<number>(34);
  const [allowStricterPolicies, setAllowStricterPolicies] = useState<boolean>(true);
  const [autoApproveRefunds, setAutoApproveRefunds] = useState<boolean>(false);
  const [cancellationFee, setCancellationFee] = useState<string>("");
  const [organizerRefundRules, setOrganizerRefundRules] = useState<string>(
    "Organizers must process manual refund requests within 5 business days."
  );
  const [attendeeRefundRules, setAttendeeRefundRules] = useState<string>(
    "Organizers must process manual refund requests within 5 business days."
  );

  // Notifications State (Screenshot 5)
  const [emailNotifs, setEmailNotifs] = useState<boolean>(true);
  const [smsNotifs, setSmsNotifs] = useState<boolean>(true);
  const [pushNotifs, setPushNotifs] = useState<boolean>(false);
  const [reminder24h, setReminder24h] = useState<boolean>(true);
  const [reminder1h, setReminder1h] = useState<boolean>(true);
  const [postEventFeedback, setPostEventFeedback] = useState<boolean>(true);
  const [weeklyNewsletter, setWeeklyNewsletter] = useState<boolean>(true);
  const [partnerPromos, setPartnerPromos] = useState<boolean>(false);

  // General Settings State
  const [platformName, setPlatformName] = useState<string>("TRCK Entertainment & Leisure");
  const [platformEmail, setPlatformEmail] = useState<string>("info@getontrck.com");
  const [defaultCurrency, setDefaultCurrency] = useState<string>("NGN (₦)");
  const [platformTimezone, setPlatformTimezone] = useState<string>("Africa/Lagos (GMT+1)");

  // Security State
  const [enforce2FA, setEnforce2FA] = useState<boolean>(true);
  const [sessionTimeout, setSessionTimeout] = useState<string>("30 minutes");

  // Sidebar Menu Items
  const menuItems = [
    { id: "general" as SettingsTab, label: "General Settings", icon: SettingsIcon },
    { id: "payment" as SettingsTab, label: "Payment Settings", icon: CreditCard },
    { id: "fees" as SettingsTab, label: "Fees & Pricing", icon: DollarSign },
    { id: "categories" as SettingsTab, label: "Event Categories", icon: FolderTree },
    { id: "refunds" as SettingsTab, label: "Refund Policies", icon: RotateCcw },
    { id: "notifications" as SettingsTab, label: "Notifications", icon: Bell },
    { id: "security" as SettingsTab, label: "Security & Privacy", icon: Shield },
    { id: "ratelimit" as SettingsTab, label: "Rate Limit", icon: Zap },
  ];

  // Helper to toggle category enabled
  const toggleCategory = (id: string) => {
    setCategories((prev) =>
      prev.map((cat) => (cat.id === id ? { ...cat, enabled: !cat.enabled } : cat))
    );
  };

  // Render category icon
  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "music":
        return <Music size={18} className="text-[#ED5828]" />;
      case "mic":
        return <Mic size={18} className="text-[#ED5828]" />;
      case "workshop":
        return <Wrench size={18} className="text-[#ED5828]" />;
      case "sports":
        return <Trophy size={18} className="text-[#ED5828]" />;
      case "theater":
        return <Drama size={18} className="text-[#ED5828]" />;
      case "food":
        return <Wine size={18} className="text-[#ED5828]" />;
      case "networking":
        return <Users size={18} className="text-[#ED5828]" />;
      case "gaming":
        return <Gamepad2 size={18} className="text-[#ED5828]" />;
      case "wellness":
        return <Smile size={18} className="text-[#ED5828]" />;
      default:
        return <FolderTree size={18} className="text-[#ED5828]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white font-sans antialiased pb-24">
      {/* Container */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">

        {/* Top Watermark Label */}
        <div className="text-xs text-white/40 font-medium tracking-wide mb-2 hidden md:block">
          Settings Screen ({menuItems.find((m) => m.id === activeTab)?.label})
        </div>

        {/* Header with Title & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/5">
          {/* Title with back navigation */}
          <div className="flex items-center gap-3">
            <Link
              href="/kyc-user-management"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Settings
            </h1>
          </div>

          {/* Search Input (Pill shape) */}
          <div className="relative w-full sm:w-80">
            <Search
              size={15}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search Settings"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-white/10 rounded-full py-2 pl-10 pr-4 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#ED5828] transition-colors"
            />
          </div>
        </div>

        {/* DASHBOARD LAYOUT: SIDEBAR + MAIN CONTENT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* =========================================================================
              LEFT SIDEBAR NAVIGATION (4 Columns)
          ========================================================================= */}
          <aside className="lg:col-span-3 space-y-1.5 bg-[#0D0D0D] border border-white/5 rounded-2xl p-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all select-none cursor-pointer ${
                    isActive
                      ? "bg-[#ED5828] text-white shadow-md"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </aside>

          {/* =========================================================================
              MAIN CONTENT AREA (9 Columns)
          ========================================================================= */}
          <main className="lg:col-span-9 space-y-6">

            {/* =========================================================================
                TAB 1: FEES & PRICING (Screenshot 1)
            ========================================================================= */}
            {activeTab === "fees" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white mb-2">Fees & Pricing</h2>

                {/* Card 1: Platform Fees */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-6">
                  <h3 className="text-base font-bold text-white">Platform Fees</h3>

                  {/* Platform Commission Slider */}
                  <div>
                    <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-white/90 mb-2">
                      <span>Platform Commission</span>
                      <span className="font-bold text-white text-sm">{platformCommission}%</span>
                    </div>
                    <div className="relative w-full flex items-center py-2">
                      <input
                        type="range"
                        min="0"
                        max="30"
                        value={platformCommission}
                        onChange={(e) => setPlatformCommission(Number(e.target.value))}
                        className="w-full h-1 bg-[#282828] rounded-lg appearance-none cursor-pointer accent-[#ED5828]"
                      />
                    </div>
                    <div className="text-[11px] text-white/40 mt-1">
                      Percentage taken from each ticket sale.
                    </div>
                  </div>

                  {/* Processing Fee Slider */}
                  <div>
                    <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-white/90 mb-2">
                      <span>Processing Fee</span>
                      <span className="font-bold text-white text-sm">{processingFee}%</span>
                    </div>
                    <div className="relative w-full flex items-center py-2">
                      <input
                        type="range"
                        min="0"
                        max="30"
                        value={processingFee}
                        onChange={(e) => setProcessingFee(Number(e.target.value))}
                        className="w-full h-1 bg-[#282828] rounded-lg appearance-none cursor-pointer accent-[#ED5828]"
                      />
                    </div>
                    <div className="text-[11px] text-white/40 mt-1">
                      Percentage taken from each ticket sale.
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/5 pt-4 space-y-4">
                    {/* Toggle: Pass fees to attendee */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium text-white/85">
                        Pass fees to attendee (Default)
                      </span>
                      <div
                        className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                          passFeesToAttendee ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                        }`}
                        onClick={() => setPassFeesToAttendee(!passFeesToAttendee)}
                      >
                        <div
                          className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                            passFeesToAttendee ? "translate-x-5" : "translate-x-0"
                          }`}
                        ></div>
                      </div>
                    </div>

                    {/* Toggle: Allow organizers to absorb fees */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium text-white/85">
                        Allow organizers to absorb fees
                      </span>
                      <div
                        className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                          allowOrganizersAbsorb ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                        }`}
                        onClick={() => setAllowOrganizersAbsorb(!allowOrganizersAbsorb)}
                      >
                        <div
                          className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                            allowOrganizersAbsorb ? "translate-x-5" : "translate-x-0"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Ticket Limits */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Ticket Limits</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Minimum Price
                      </label>
                      <input
                        type="text"
                        value={minTicketPrice}
                        onChange={(e) => setMinTicketPrice(e.target.value)}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Maximum Price
                      </label>
                      <input
                        type="text"
                        value={maxTicketPrice}
                        onChange={(e) => setMaxTicketPrice(e.target.value)}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-end pt-2">
                  <button className="bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs sm:text-sm font-semibold px-8 py-3 rounded-xl transition-all shadow-md">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 2: EVENT CATEGORIES (Screenshot 2)
            ========================================================================= */}
            {activeTab === "categories" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white">Event Categories</h2>
                  <button className="bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow-sm">
                    <Plus size={15} />
                    <span>Create Event</span>
                  </button>
                </div>

                <div className="text-sm font-semibold text-white/90">Categories</div>

                {/* Categories List */}
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      className="bg-[#121212] border border-white/5 rounded-2xl p-4 sm:p-5 flex items-center justify-between hover:border-white/15 transition-all"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-[#181818] flex items-center justify-center shrink-0">
                          {renderCategoryIcon(cat.iconName)}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{cat.name}</div>
                          <div className="text-xs text-white/40">{cat.count}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-5">
                        {/* Enabled Checkbox */}
                        <label
                          className="flex items-center gap-2 text-xs font-semibold text-white/80 cursor-pointer select-none"
                          onClick={() => toggleCategory(cat.id)}
                        >
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                              cat.enabled ? "bg-[#ED5828] text-white" : "border border-white/30 bg-[#181818]"
                            }`}
                          >
                            {cat.enabled && <Check size={11} />}
                          </div>
                          <span>Enabled</span>
                        </label>

                        {/* Action Icons */}
                        <div className="flex items-center gap-1">
                          <button
                            title="Edit Category"
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#ED5828] hover:bg-white/5 transition-colors"
                          >
                            <Pencil size={14} />
                          </button>
                          <button
                            title="Delete Category"
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#ED5828] hover:bg-white/5 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 3: REFUND POLICIES (Screenshots 3 & 4)
            ========================================================================= */}
            {activeTab === "refunds" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white mb-2">Refund & Policies</h2>

                {/* Card 1: General Policy Settings */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-6">
                  <h3 className="text-base font-bold text-white">General Policy Settings</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Default Refund Window (Days)
                      </label>
                      <input
                        type="number"
                        value={defaultRefundWindow}
                        onChange={(e) => setDefaultRefundWindow(Number(e.target.value))}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                      <div className="text-[11px] text-white/40 mt-1.5">
                        Days before event start date where refunds are allowed
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Grace Period (Hours)
                      </label>
                      <input
                        type="number"
                        value={gracePeriodHours}
                        onChange={(e) => setGracePeriodHours(Number(e.target.value))}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                      <div className="text-[11px] text-white/40 mt-1.5">
                        Timeframe after booking where full refund is guaranteed
                      </div>
                    </div>
                  </div>

                  {/* Toggles */}
                  <div className="border-t border-white/5 pt-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium text-white/85">
                        Allow organizers to set stricter policies
                      </span>
                      <div
                        className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                          allowStricterPolicies ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                        }`}
                        onClick={() => setAllowStricterPolicies(!allowStricterPolicies)}
                      >
                        <div
                          className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                            allowStricterPolicies ? "translate-x-5" : "translate-x-0"
                          }`}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium text-white/85">
                        Auto-approve refunds within window
                      </span>
                      <div
                        className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                          autoApproveRefunds ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                        }`}
                        onClick={() => setAutoApproveRefunds(!autoApproveRefunds)}
                      >
                        <div
                          className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                            autoApproveRefunds ? "translate-x-5" : "translate-x-0"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Refund Tiers */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <div>
                    <h3 className="text-base font-bold text-white">Refund Tiers</h3>
                    <div className="text-xs text-white/40 mt-1">
                      Configure how much is refunded based on days remaining.
                    </div>
                  </div>

                  {/* Tiers List Sub-box */}
                  <div className="bg-[#181818] border border-white/5 rounded-xl p-4 space-y-3">
                    <div className="flex justify-between text-xs sm:text-sm text-white/80">
                      <span>30+ Days Before</span>
                      <span className="font-bold text-white">100%</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm text-white/80">
                      <span>7-30 Days Before</span>
                      <span className="font-bold text-white">50%</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm text-white/80">
                      <span>Less than 7 Days</span>
                      <span className="font-bold text-white">0%</span>
                    </div>
                  </div>

                  {/* Cancellation Fee */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Cancellation Fee
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ₦1,000 flat fee"
                      value={cancellationFee}
                      onChange={(e) => setCancellationFee(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#ED5828] transition-colors"
                    />
                  </div>
                </div>

                {/* Card 3: Rules */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Rules</h3>

                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Organizer Refund Rules
                    </label>
                    <textarea
                      rows={3}
                      value={organizerRefundRules}
                      onChange={(e) => setOrganizerRefundRules(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl p-4 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#ED5828] transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Attendee Refund Rules
                    </label>
                    <textarea
                      rows={3}
                      value={attendeeRefundRules}
                      onChange={(e) => setAttendeeRefundRules(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl p-4 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#ED5828] transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-end pt-2">
                  <button className="bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs sm:text-sm font-semibold px-8 py-3 rounded-xl transition-all shadow-md">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 4: NOTIFICATIONS (Screenshot 5)
            ========================================================================= */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white mb-2">Notifications</h2>

                {/* Card 1: Communication Channels */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Communication Channels</h3>

                  {/* Email Notifications */}
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-white/85">
                      <Mail size={15} className="text-[#ED5828]" />
                      <span>Email Notifications</span>
                    </div>
                    <div
                      className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                        emailNotifs ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                      }`}
                      onClick={() => setEmailNotifs(!emailNotifs)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                          emailNotifs ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* SMS Notifications */}
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-white/85">
                      <Smartphone size={15} className="text-[#ED5828]" />
                      <span>SMS Notifications</span>
                    </div>
                    <div
                      className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                        smsNotifs ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                      }`}
                      onClick={() => setSmsNotifs(!smsNotifs)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                          smsNotifs ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Push Notifications */}
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-white/85">
                      <Bell size={15} className="text-[#ED5828]" />
                      <span>Push Notifications</span>
                    </div>
                    <div
                      className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                        pushNotifs ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                      }`}
                      onClick={() => setPushNotifs(!pushNotifs)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                          pushNotifs ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Automated Reminders */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Automated Reminders</h3>

                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-xs sm:text-sm font-medium text-white/85">
                      24 Hours Before Event
                    </span>
                    <div
                      className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                        reminder24h ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                      }`}
                      onClick={() => setReminder24h(!reminder24h)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                          reminder24h ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-xs sm:text-sm font-medium text-white/85">
                      1 Hour Before Event
                    </span>
                    <div
                      className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                        reminder1h ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                      }`}
                      onClick={() => setReminder1h(!reminder1h)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                          reminder1h ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <span className="text-xs sm:text-sm font-medium text-white/85">
                      Post-Event Feedback (24h after)
                    </span>
                    <div
                      className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                        postEventFeedback ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                      }`}
                      onClick={() => setPostEventFeedback(!postEventFeedback)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                          postEventFeedback ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Marketing */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Marketing</h3>

                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-xs sm:text-sm font-medium text-white/85">
                      Enable Weekly Newsletter
                    </span>
                    <div
                      className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                        weeklyNewsletter ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                      }`}
                      onClick={() => setWeeklyNewsletter(!weeklyNewsletter)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                          weeklyNewsletter ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <span className="text-xs sm:text-sm font-medium text-white/85">
                      Send Promotional Emails for Partner Events
                    </span>
                    <div
                      className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                        partnerPromos ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                      }`}
                      onClick={() => setPartnerPromos(!partnerPromos)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                          partnerPromos ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-end pt-2">
                  <button className="bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs sm:text-sm font-semibold px-8 py-3 rounded-xl transition-all shadow-md">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 5: PAYMENT SETTINGS (Screenshots from earlier prompt)
            ========================================================================= */}
            {activeTab === "payment" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white mb-2">Payment Settings</h2>

                {/* CARD 1: PAYMENT GATEWAY */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Payment Gateway</h3>

                  {/* Active Gateway Banner Subcard */}
                  <div className="bg-[#181818] border border-white/5 rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#ED5828] text-white flex items-center justify-center">
                        <CreditCard size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Active Gateway</div>
                        <div className="text-xs text-white/50">Paystack (Connected)</div>
                      </div>
                    </div>

                    <button className="text-xs font-semibold text-[#ED5828] hover:text-[#ff6e3d] transition-colors cursor-pointer">
                      Configure
                    </button>
                  </div>

                  {/* Primary Payment Gateway */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Primary Payment Gateway
                    </label>
                    <div className="relative">
                      <select
                        value={primaryGateway}
                        onChange={(e) => setPrimaryGateway(e.target.value)}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white appearance-none focus:outline-none focus:border-[#ED5828] cursor-pointer"
                      >
                        <option value="Paystack">Paystack</option>
                        <option value="Flutterwave">Flutterwave</option>
                        <option value="Stripe">Stripe</option>
                        <option value="Monnify">Monnify</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Backup Payment Gateway */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Backup Payment Gateway
                    </label>
                    <div className="relative">
                      <select
                        value={backupGateway}
                        onChange={(e) => setBackupGateway(e.target.value)}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white appearance-none focus:outline-none focus:border-[#ED5828] cursor-pointer"
                      >
                        <option value="Flutterwave">Flutterwave</option>
                        <option value="Paystack">Paystack</option>
                        <option value="Stripe">Stripe</option>
                        <option value="None">None</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                {/* CARD 2: PAYOUT CONFIGURATION */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Payout Configuration</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Payout Schedule */}
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Payout Schedule
                      </label>
                      <div className="relative">
                        <select
                          value={payoutSchedule}
                          onChange={(e) => setPayoutSchedule(e.target.value)}
                          className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white appearance-none focus:outline-none focus:border-[#ED5828] cursor-pointer"
                        >
                          <option value="Weekly (Monday)">Weekly (Monday)</option>
                          <option value="Daily">Daily</option>
                          <option value="Bi-Weekly">Bi-Weekly</option>
                          <option value="Monthly">Monthly</option>
                        </select>
                        <ChevronDown
                          size={16}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                        />
                      </div>
                    </div>

                    {/* Minimum Payout Amount */}
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Minimum Payout Amount
                      </label>
                      <input
                        type="text"
                        value={minPayoutAmount}
                        onChange={(e) => setMinPayoutAmount(e.target.value)}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                      <div className="text-[11px] text-white/40 mt-1.5">
                        Organizers must earn this amount before payout.
                      </div>
                    </div>
                  </div>

                  {/* Toggle 1: Require Bank Account Verification */}
                  <div className="flex items-center justify-between py-3 border-t border-white/5">
                    <span className="text-xs sm:text-sm font-medium text-white/85">
                      Require Bank Account Verification
                    </span>
                    <div
                      className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                        requireBankVerification ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                      }`}
                      onClick={() => setRequireBankVerification(!requireBankVerification)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                          requireBankVerification ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Toggle 2: Hold payouts for first-time organizers */}
                  <div className="flex items-center justify-between py-3 border-t border-white/5">
                    <span className="text-xs sm:text-sm font-medium text-white/85">
                      Hold payouts for first-time organizers (7 days)
                    </span>
                    <div
                      className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                        holdFirstTimePayouts ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                      }`}
                      onClick={() => setHoldFirstTimePayouts(!holdFirstTimePayouts)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                          holdFirstTimePayouts ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* CARD 3: TAX SETTINGS */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Tax Settings</h3>

                  {/* Toggle: Collect VAT automatically */}
                  <div className="flex items-center justify-between pb-3">
                    <span className="text-xs sm:text-sm font-medium text-white/85">
                      Collect VAT automatically
                    </span>
                    <div
                      className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                        collectVat ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                      }`}
                      onClick={() => setCollectVat(!collectVat)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                          collectVat ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* 2-Column Tax Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* VAT Rate */}
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        VAT Rate (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={vatRate}
                        onChange={(e) => setVatRate(Number(e.target.value))}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                      <div className="text-[11px] text-white/40 mt-1.5">
                        VAT is calculated on top of the ticket price + fees.
                      </div>
                    </div>

                    {/* Tax ID */}
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Tax ID
                      </label>
                      <input
                        type="text"
                        value={taxId}
                        onChange={(e) => setTaxId(e.target.value)}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-end pt-2">
                  <button className="bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs sm:text-sm font-semibold px-8 py-3 rounded-xl transition-all shadow-md">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 6: GENERAL SETTINGS
            ========================================================================= */}
            {activeTab === "general" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white mb-2">General Settings</h2>
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Platform Information</h3>
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">Platform Name</label>
                    <input
                      type="text"
                      value={platformName}
                      onChange={(e) => setPlatformName(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#ED5828]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">Support Email</label>
                    <input
                      type="email"
                      value={platformEmail}
                      onChange={(e) => setPlatformEmail(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#ED5828]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">Default Currency</label>
                      <input
                        type="text"
                        value={defaultCurrency}
                        onChange={(e) => setDefaultCurrency(e.target.value)}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#ED5828]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">Timezone</label>
                      <input
                        type="text"
                        value={platformTimezone}
                        onChange={(e) => setPlatformTimezone(e.target.value)}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#ED5828]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs sm:text-sm font-semibold px-8 py-3 rounded-xl transition-all shadow-md">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 7: SECURITY & PRIVACY (Screenshot 1)
            ========================================================================= */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white mb-2">Security & Privacy</h2>

                {/* Card 1: Authentication */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Authentication</h3>

                  {/* Toggle 1: Enforce 2FA for Admins */}
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-xs sm:text-sm font-medium text-white/85">
                      Enforce 2FA for Admins
                    </span>
                    <div
                      className={`w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none ${
                        enforce2FA ? "bg-[#ED5828]" : "bg-[#2A2A2A]"
                      }`}
                      onClick={() => setEnforce2FA(!enforce2FA)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm ${
                          enforce2FA ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Toggle 2: Enforce 2FA for Organizers */}
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-xs sm:text-sm font-medium text-white/85">
                      Enforce 2FA for Organizers
                    </span>
                    <div
                      className="w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none bg-[#2A2A2A]"
                    >
                      <div className="w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm translate-x-0"></div>
                    </div>
                  </div>

                  {/* Session Timeout */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Session Timeout
                    </label>
                    <div className="relative">
                      <select
                        value={sessionTimeout}
                        onChange={(e) => setSessionTimeout(e.target.value)}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white appearance-none focus:outline-none focus:border-[#ED5828] cursor-pointer"
                      >
                        <option value="30 Minutes">30 Minutes</option>
                        <option value="15 Minutes">15 Minutes</option>
                        <option value="1 Hour">1 Hour</option>
                        <option value="24 Hours">24 Hours</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Password Requirements */}
                  <div>
                    <div className="text-xs font-semibold text-white/80 mb-2">
                      Password Requirements
                    </div>
                    <ul className="space-y-1.5 text-xs text-white/60">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED5828]"></span>
                        <span>Min 8 characters</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED5828]"></span>
                        <span>One number</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED5828]"></span>
                        <span>One uppercase</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED5828]"></span>
                        <span>One special character</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 2: Data & Compliance */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Data & Compliance</h3>

                  {/* Toggle: GDPR Compliance Mode */}
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-xs sm:text-sm font-medium text-white/85">
                      GDPR Compliance Mode
                    </span>
                    <div
                      className="w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none bg-[#ED5828]"
                    >
                      <div className="w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm translate-x-5"></div>
                    </div>
                  </div>

                  {/* Toggle: Cookie Consent Banner */}
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-xs sm:text-sm font-medium text-white/85">
                      Cookie Consent Banner
                    </span>
                    <div
                      className="w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none bg-[#ED5828]"
                    >
                      <div className="w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm translate-x-5"></div>
                    </div>
                  </div>

                  {/* Data Retention Period */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Data Retention Period
                    </label>
                    <div className="relative">
                      <select
                        defaultValue="1 Year"
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white appearance-none focus:outline-none focus:border-[#ED5828] cursor-pointer"
                      >
                        <option value="1 Year">1 Year</option>
                        <option value="2 Years">2 Years</option>
                        <option value="5 Years">5 Years</option>
                        <option value="Indefinite">Indefinite</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Purge deleted data Button */}
                  <button className="w-full bg-[#3A1719] hover:bg-[#481d20] text-[#FF5C5C] text-xs sm:text-sm font-semibold py-3.5 rounded-xl transition-colors text-center cursor-pointer shadow-sm">
                    Purge deleted data
                  </button>
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-end pt-2">
                  <button className="bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs sm:text-sm font-semibold px-8 py-3 rounded-xl transition-all shadow-md">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 8: RATE LIMITING (Screenshots 2, 3, 4)
            ========================================================================= */}
            {activeTab === "ratelimit" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white mb-2">Rate Limiting</h2>

                {/* CARD 1: EVENT CREATION LIMITS (Screenshot 2) */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Event Creation Limits</h3>

                  {/* Current Usage (Daily) Subcard */}
                  <div className="bg-[#181818] border border-white/5 rounded-xl p-4 space-y-2.5">
                    <div className="text-xs font-bold text-white">Current Usage (Daily)</div>
                    <div className="flex justify-between text-xs text-white/60">
                      <span>Total Events Created</span>
                      <span className="font-semibold text-white">842 / 1000</span>
                    </div>
                    {/* Orange Progress Bar */}
                    <div className="w-full bg-[#303030] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#ED5828] h-full rounded-full" style={{ width: "84.2%" }}></div>
                    </div>
                  </div>

                  {/* Max events per organizer (Monthly) */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Max events per organizer (Monthly)
                    </label>
                    <input
                      type="number"
                      defaultValue={50}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED5828] transition-colors"
                    />
                  </div>

                  {/* 2-Column: Max per day + Cooldown (mins) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Max per day
                      </label>
                      <input
                        type="number"
                        defaultValue={5}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Cooldown (mins)
                      </label>
                      <input
                        type="number"
                        defaultValue={30}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Toggle: Require verification for first event */}
                  <div className="flex items-center justify-between py-2 border-t border-white/5">
                    <span className="text-xs sm:text-sm font-medium text-white/85">
                      Require verification for first event
                    </span>
                    <div
                      className="w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none bg-[#ED5828]"
                    >
                      <div className="w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm translate-x-5"></div>
                    </div>
                  </div>

                  {/* Impact Notice Badge */}
                  <div className="bg-[#2D1612] border border-[#5E2218] rounded-xl p-3.5 text-xs text-[#ED5828] font-medium">
                    Update will impact approx. 120 users immediately.
                  </div>
                </div>

                {/* CARD 2: TICKET PURCHASE CONTROL (Screenshot 2) */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Ticket Purchase Control</h3>

                  {/* Max tickets per transaction */}
                  <div>
                    <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-white/90 mb-2">
                      <span>Max tickets per transaction</span>
                      <span className="font-bold text-white text-sm">5%</span>
                    </div>
                    <div className="relative w-full flex items-center py-2">
                      <input
                        type="range"
                        min="1"
                        max="20"
                        defaultValue={5}
                        className="w-full h-1 bg-[#282828] rounded-lg appearance-none cursor-pointer accent-[#ED5828]"
                      />
                    </div>
                  </div>

                  {/* Max tickets per user/event */}
                  <div>
                    <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-white/90 mb-2">
                      <span>Max tickets per user/event</span>
                      <span className="font-bold text-white text-sm">5%</span>
                    </div>
                    <div className="relative w-full flex items-center py-2">
                      <input
                        type="range"
                        min="1"
                        max="20"
                        defaultValue={5}
                        className="w-full h-1 bg-[#282828] rounded-lg appearance-none cursor-pointer accent-[#ED5828]"
                      />
                    </div>
                  </div>

                  {/* Divider + Toggles */}
                  <div className="border-t border-white/5 pt-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium text-white/85">
                        Limit purchases in first 5 mins (Anti-bot)
                      </span>
                      <div
                        className="w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none bg-[#ED5828]"
                      >
                        <div className="w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm translate-x-5"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium text-white/85">
                        Enforce IP-based limits
                      </span>
                      <div
                        className="w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none bg-[#ED5828]"
                      >
                        <div className="w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm translate-x-5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Low Limits Warning Box */}
                  <div className="bg-[#181818] border border-white/10 rounded-xl p-3.5 flex items-center gap-2.5 text-xs text-white/60">
                    <span className="text-white/40">ⓘ</span>
                    <span>Setting low limits during high-traffic onsales may increase support tickets.</span>
                  </div>
                </div>

                {/* CARD 3: API RATE LIMITING (Screenshot 3) */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">API Rate Limiting</h3>

                  {/* 2 KPI Mini Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#181818] border border-white/5 rounded-xl p-4 text-center">
                      <div className="text-xl sm:text-2xl font-black text-white">45k</div>
                      <div className="text-xs text-white/40 mt-0.5">Req/Hour</div>
                    </div>
                    <div className="bg-[#181818] border border-white/5 rounded-xl p-4 text-center">
                      <div className="text-xl sm:text-2xl font-black text-white">98%</div>
                      <div className="text-xs text-white/40 mt-0.5">Load Capacity</div>
                    </div>
                  </div>

                  {/* Partner Tier Limit */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Partner Tier Limit
                    </label>
                    <div className="relative">
                      <select
                        defaultValue="5,000 req/min"
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white appearance-none focus:outline-none focus:border-[#ED5828] cursor-pointer"
                      >
                        <option value="5,000 req/min">5,000 req/min</option>
                        <option value="10,000 req/min">10,000 req/min</option>
                        <option value="20,000 req/min">20,000 req/min</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Public API Limit */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Public API Limit
                    </label>
                    <div className="relative">
                      <select
                        defaultValue="60 req/min"
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white appearance-none focus:outline-none focus:border-[#ED5828] cursor-pointer"
                      >
                        <option value="60 req/min">60 req/min</option>
                        <option value="120 req/min">120 req/min</option>
                        <option value="30 req/min">30 req/min</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* 2-Column: Max per day + Cooldown (mins) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Max per day
                      </label>
                      <input
                        type="number"
                        defaultValue={5}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Cooldown (mins)
                      </label>
                      <input
                        type="number"
                        defaultValue={30}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Burst Allowance */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Burst Allowance
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-[#303030] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#ED5828] h-full rounded-full" style={{ width: "25%" }}></div>
                      </div>
                      <span className="text-xs text-white/60 shrink-0 font-medium">
                        20% overage allowed
                      </span>
                    </div>
                  </div>
                </div>

                {/* CARD 4: USER ACTIONS & SCRAPING (Screenshots 3 & 4) */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">User Actions & Scraping</h3>

                  {/* Max account creations per IP/Day */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Max account creations per IP/Day
                    </label>
                    <input
                      type="number"
                      defaultValue={3}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED5828] transition-colors"
                    />
                  </div>

                  {/* Public API Limit */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Public API Limit
                    </label>
                    <input
                      type="number"
                      defaultValue={5}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED5828] transition-colors"
                    />
                  </div>

                  {/* Event browsing rate (pages/min) */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Event browsing rate (pages/min)
                    </label>
                    <input
                      type="number"
                      defaultValue={60}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED5828] transition-colors"
                    />
                  </div>

                  {/* Alert Banner: High Activity Detected */}
                  <div className="bg-[#281114] border border-[#4E191E] rounded-xl p-3.5 flex items-center justify-between text-xs text-[#FF6B6B]">
                    <div className="flex items-center gap-2">
                      <span>ⓘ</span>
                      <span>High Activity Detected: 12 IPs blocked in last hour for excessive scraping.</span>
                    </div>
                    <a href="#" className="underline font-semibold hover:text-white transition-colors shrink-0">
                      View Logs
                    </a>
                  </div>
                </div>

                {/* CARD 5: CONTENT CONSTRAINTS (Screenshot 4) */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Content Constraints</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Max Images per Event
                      </label>
                      <input
                        type="number"
                        defaultValue={10}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Max Ticket Types
                      </label>
                      <input
                        type="number"
                        defaultValue={30}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Max File Upload Size */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Max File Upload Size
                    </label>
                    <div className="relative">
                      <select
                        defaultValue="5 MB"
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white appearance-none focus:outline-none focus:border-[#ED5828] cursor-pointer"
                      >
                        <option value="5 MB">5 MB</option>
                        <option value="10 MB">10 MB</option>
                        <option value="25 MB">25 MB</option>
                        <option value="50 MB">50 MB</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Toggle: Scan images for prohibited content (AI) */}
                  <div className="flex items-center justify-between py-2 border-t border-white/5">
                    <span className="text-xs sm:text-sm font-medium text-white/85">
                      Scan images for prohibited content (AI)
                    </span>
                    <div
                      className="w-11 h-6 rounded-full transition-colors relative flex items-center p-0.5 cursor-pointer select-none bg-[#ED5828]"
                    >
                      <div className="w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-sm translate-x-5"></div>
                    </div>
                  </div>
                </div>

                {/* CARD 6: FINANCIAL CONTROLS (Screenshot 4) */}
                <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-7 space-y-5">
                  <h3 className="text-base font-bold text-white">Financial Controls</h3>

                  {/* Withdrawal Frequency Readonly Card */}
                  <div className="bg-[#181818] border border-white/10 rounded-xl p-3.5 flex items-center justify-between text-xs sm:text-sm text-white">
                    <span className="text-white/80">Withdrawal Frequency</span>
                    <span className="font-semibold text-white">Weekly</span>
                  </div>

                  {/* Max Refund Requests (User/Month) */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Max Refund Requests (User/Month)
                    </label>
                    <div className="relative">
                      <select
                        defaultValue="3"
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white appearance-none focus:outline-none focus:border-[#ED5828] cursor-pointer"
                      >
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="Unlimited">Unlimited</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* 2-Column: Min Ticket Price + Max Ticket Price */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Min Ticket Price
                      </label>
                      <input
                        type="text"
                        defaultValue="N500"
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Max Ticket Price
                      </label>
                      <input
                        type="text"
                        defaultValue="N1,000,000"
                        className="w-full bg-[#181818] border border-white/10 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED5828] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-end pt-2">
                  <button className="bg-[#ED5828] hover:bg-[#d84a1e] text-white text-xs sm:text-sm font-semibold px-8 py-3 rounded-xl transition-all shadow-md">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

          </main>

        </div>

      </div>

      {/* FOOTER (Matching Screenshot 5) */}
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
