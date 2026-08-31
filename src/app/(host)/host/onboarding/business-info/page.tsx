"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, X, Zap } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { HostButton } from "@/components/host";

const INDUSTRIES = [
  "Music",
  "Sports",
  "Parties",
  "Comedy",
  "Theatre",
  "Arts",
  "Food & Drink",
  "Networking",
  "Fitness",
  "Gaming",
];

const BUSINESS_TYPES = [
  "Individual",
  "Company",
  "Non-profit",
  "Government",
];

export default function BusinessInfoPage() {
  const [orgName, setOrgName] = useState("");
  const [businessType, setBusinessType] = useState("Individual");
  const [regNumber, setRegNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Music", "Sport", "Parties"]);
  const [categoryInput, setCategoryInput] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [shareData, setShareData] = useState(true);
  const [showCatDropdown, setShowCatDropdown] = useState(false);

  const removeCategory = (cat: string) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== cat));
  };

  const addCategory = (cat: string) => {
    if (!selectedCategories.includes(cat)) {
      setSelectedCategories([...selectedCategories, cat]);
    }
    setCategoryInput("");
    setShowCatDropdown(false);
  };

  const filteredCats = INDUSTRIES.filter(
    (i) => i.toLowerCase().includes(categoryInput.toLowerCase()) && !selectedCategories.includes(i)
  );

  const isValid = orgName && businessType && country;

  return (
    <div className="min-h-screen bg-black flex flex-col font-poppins overflow-x-hidden">
      {/* Top Nav — white header */}
      <nav className="flex items-center justify-between px-4 py-3 md:px-10 bg-white border-b border-gray-100">
        <Logo width={120} height={44} className="h-9 w-auto" />

        <div className="hidden md:flex items-center gap-4">
          {/* Search — Figma: 99×34px, radius 16px */}
          <button
            className="flex items-center gap-2 border border-gray-200 text-gray-500 text-sm bg-white hover:bg-gray-50 transition-colors"
            style={{ width: 99, height: 34, borderRadius: 16, paddingLeft: 12, paddingRight: 12 }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <span className="text-xs">Search</span>
          </button>
          <select className="bg-white text-gray-700 text-sm border-none outline-none cursor-pointer">
            <option>English (United States)</option>
          </select>
          {/* Login button — Figma: 98×40px, radius 8px, bg #111111, white text */}
          <Link
            href="/host/login"
            className="flex items-center justify-center text-white text-sm font-semibold hover:bg-[#222222] transition-colors"
            style={{ width: 98, height: 40, borderRadius: 8, backgroundColor: "#111111" }}
          >
            Log in
          </Link>
        </div>
        {/* Mobile login — Figma: 76.71×31.31px, radius 6.26px, bg #111111 */}
        <Link
          href="/host/login"
          className="md:hidden flex items-center justify-center text-white text-[0.75rem] font-medium"
          style={{ width: 76.71, height: 31.31, borderRadius: 6.26, backgroundColor: "#111111" }}
        >
          Log in
        </Link>
      </nav>

      {/* Content */}
      <div className="flex flex-1 items-start md:items-center justify-center px-4 md:px-8 py-6 md:py-10">
        {/* Desktop: White card */}
        <div className="hidden md:block w-full max-w-[540px] bg-white rounded-2xl shadow-2xl px-10 py-10">
          <h1 className="text-black text-[1.861rem] font-medium text-center mb-6">
            Set Up My Business Info
          </h1>
          <hr className="border-gray-200 mb-7" />

          <div className="space-y-5">
            {/* Org Name */}
            <div>
              <label className="block text-[0.93rem] text-[#666666] font-normal mb-1.5">
                Organization Name
              </label>
              <input
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="Enter Business name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-black text-sm outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E] transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* Business Type */}
            <div>
              <label className="block text-[0.93rem] text-[#666666] font-normal mb-1.5">
                Business Type
              </label>
              <div className="relative">
                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2.5 bg-gray-50">
                  <Zap size={15} className="text-gray-400 mr-2" />
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="flex-1 bg-transparent text-black text-sm outline-none cursor-pointer appearance-none"
                  >
                    {BUSINESS_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <ChevronDown size={15} className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Reg Number */}
            <div>
              <label className="block text-[0.93rem] text-[#666666] font-normal mb-1.5">
                Registered Business Number
              </label>
              <input
                type="text"
                value={regNumber}
                onChange={(e) => setRegNumber(e.target.value)}
                placeholder="EPX37628890E"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-black text-sm outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E] transition-colors placeholder:text-gray-400"
              />
              <p className="mt-1.5 text-xs text-gray-500">
                Use 8 or more characters with a mix of letters, numbers &amp; symbols
              </p>
            </div>

            {/* Website */}
            <div>
              <label className="block text-[0.93rem] text-[#666666] font-normal mb-1.5">
                Website / Social Links
              </label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-black text-sm outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E] transition-colors placeholder:text-gray-400"
              />
              <p className="mt-1.5 text-xs text-gray-500">
                Use comma to separate multiple links
              </p>
            </div>

            {/* Industry/Event Categories */}
            <div>
              <label className="block text-[0.93rem] text-[#666666] font-normal mb-1.5">
                Industry / Event Categories <span className="text-[#ED5A2E]">*</span>
              </label>
              <div
                className="flex flex-wrap items-center gap-2 min-h-[44px] border border-[#ED5A2E] rounded-lg px-3 py-2 cursor-text focus-within:ring-1 focus-within:ring-[#ED5A2E] transition-colors"
                onClick={() => setShowCatDropdown(true)}
              >
                {selectedCategories.map((cat) => (
                  <span
                    key={cat}
                    className="flex items-center gap-1 bg-[#ED5A2E] text-white text-xs font-medium shrink-0"
                    style={{ width: 59, height: 23, borderRadius: 4, paddingLeft: 6, paddingRight: 4 }}
                  >
                    <span className="flex-1 truncate">{cat}</span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); removeCategory(cat); }}
                    >
                      <X size={9} />
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  value={categoryInput}
                  onChange={(e) => { setCategoryInput(e.target.value); setShowCatDropdown(true); }}
                  onFocus={() => setShowCatDropdown(true)}
                  onBlur={() => setTimeout(() => setShowCatDropdown(false), 150)}
                  className="flex-1 min-w-[60px] bg-transparent text-black text-sm outline-none"
                  placeholder={selectedCategories.length === 0 ? "Select categories..." : ""}
                />
              </div>
              {showCatDropdown && filteredCats.length > 0 && (
                <div className="mt-1 border border-gray-200 rounded-lg bg-white shadow-lg z-10 relative">
                  {filteredCats.slice(0, 6).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onMouseDown={() => addCategory(cat)}
                      className="w-full text-left px-4 py-2 text-sm text-black hover:bg-orange-50 transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location */}
            <div>
              <p className="text-[0.93rem] font-normal text-[#111111] mb-3">What&apos;s Your Location?</p>
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div>
                  <label className="block text-[0.93rem] font-normal text-[#111111] mb-1.5">Country</label>
                  <div className="relative">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-black text-sm outline-none appearance-none bg-white focus:border-[#ED5A2E] transition-colors"
                    >
                      <option value=""></option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Nigeria</option>
                      <option>Canada</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[0.93rem] font-normal text-[#111111] mb-1.5">State</label>
                  <div className="relative">
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-black text-sm outline-none appearance-none bg-white focus:border-[#ED5A2E] transition-colors"
                    >
                      <option value=""></option>
                      <option>California</option>
                      <option>New York</option>
                      <option>Texas</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[0.93rem] font-normal text-[#111111] mb-1.5">City</label>
                  <div className="relative">
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-black text-sm outline-none appearance-none bg-white focus:border-[#ED5A2E] transition-colors"
                    >
                      <option value=""></option>
                      <option>Los Angeles</option>
                      <option>San Francisco</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Address 1 */}
              <div className="mb-3">
                <label className="block text-[0.93rem] font-normal text-[#111111] mb-1.5">
                  Business Address
                </label>
                <input
                  type="text"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-black text-sm outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E] transition-colors"
                />
              </div>

              {/* Address 2 */}
              <div>
                <label className="block text-[0.93rem] font-normal text-[#111111] mb-1.5">
                  Business Address 2
                </label>
                <input
                  type="text"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-black text-sm outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E] transition-colors"
                />
              </div>
            </div>

            {/* Share data checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={shareData}
                onChange={(e) => setShareData(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-[#ED5A2E] cursor-pointer"
              />
              <span className="text-[0.93rem] font-normal text-[#333333] leading-relaxed">
                Share my registration data with our content creators.
              </span>
            </label>

            {/* Continue */}
            <div className="flex justify-center pt-1">
              <HostButton
                href="/host/onboarding/kyc"
                disabled={!isValid}
                fullWidth={true}
              >
                Continue
              </HostButton>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden w-full flex flex-col font-poppins px-5">
          <h1 className="text-white text-[1.5rem] font-medium text-center mb-8">
            Set Up Your Business
          </h1>

          <div className="space-y-5">
            {/* Org Name */}
            <div>
              <label className="block text-[0.918rem] font-normal text-[#E8E8E8] mb-2">Organization Name</label>
              <input
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="Enter Business name"
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5A2E] transition-colors placeholder:text-white/30"
              />
            </div>

            {/* Business Type */}
            <div>
              <label className="block text-[0.918rem] font-normal text-[#E8E8E8] mb-2">Business Type</label>
              <div className="flex items-center border border-white/30 rounded-lg px-4 py-3 bg-transparent focus-within:border-[#ED5A2E] transition-colors">
                <Zap size={15} className="text-white/40 mr-2" />
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="flex-1 bg-transparent text-white text-sm outline-none appearance-none cursor-pointer"
                >
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-black text-white">{t}</option>
                  ))}
                </select>
                <ChevronDown size={15} className="text-white/40" />
              </div>
            </div>

            {/* Reg Number */}
            <div>
              <label className="block text-[0.918rem] font-normal text-[#E8E8E8] mb-2">Registered Business Number</label>
              <input
                type="text"
                value={regNumber}
                onChange={(e) => setRegNumber(e.target.value)}
                placeholder="EPX37628890E"
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5A2E] transition-colors placeholder:text-white/30"
              />
              <p className="mt-1.5 text-xs text-white/40">
                8 or more characters, mix of letters, numbers &amp; symbols
              </p>
            </div>

            {/* Website */}
            <div>
              <label className="block text-[0.918rem] font-normal text-[#E8E8E8] mb-2">Website / Social Links</label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://"
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5A2E] transition-colors placeholder:text-white/30"
              />
              <p className="mt-1.5 text-xs text-white/40">Use comma to separate multiple links</p>
            </div>

            {/* Industry/Event Categories */}
            <div>
              <label className="block text-[0.918rem] font-normal text-[#E8E8E8] mb-2">
                Industry / Event Categories <span className="text-[#ED5A2E]">*</span>
              </label>
              <div className="flex flex-wrap items-center gap-2 min-h-[50px] border border-[#ED5A2E] rounded-lg px-3 py-2 cursor-text">
                {selectedCategories.map((cat) => (
                  <span
                    key={cat}
                    className="flex items-center gap-1 bg-[#ED5A2E] text-white text-xs px-2.5 py-1 rounded-full"
                  >
                    {cat}
                    <button type="button" onClick={() => removeCategory(cat)}>
                      <X size={10} />
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                  className="flex-1 min-w-[60px] bg-transparent text-white text-sm outline-none"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <p className="text-[0.918rem] font-normal text-[#E8E8E8] mb-3">Location</p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-[0.918rem] font-normal text-[#E8E8E8] mb-1.5">Country</label>
                  <div className="relative">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full bg-transparent border border-white/30 rounded-lg px-3 py-3 text-white text-sm outline-none appearance-none focus:border-[#ED5A2E] transition-colors"
                    >
                      <option value="" className="bg-black"></option>
                      <option className="bg-black">United States</option>
                      <option className="bg-black">United Kingdom</option>
                      <option className="bg-black">Nigeria</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[0.918rem] font-normal text-[#E8E8E8] mb-1.5">State</label>
                  <div className="relative">
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full bg-transparent border border-white/30 rounded-lg px-3 py-3 text-white text-sm outline-none appearance-none focus:border-[#ED5A2E] transition-colors"
                    >
                      <option value="" className="bg-black"></option>
                      <option className="bg-black">California</option>
                      <option className="bg-black">New York</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="block text-[0.918rem] font-normal text-[#E8E8E8] mb-1.5">City</label>
                <div className="relative w-1/2">
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-transparent border border-white/30 rounded-lg px-3 py-3 text-white text-sm outline-none appearance-none focus:border-[#ED5A2E] transition-colors"
                  >
                    <option value="" className="bg-black"></option>
                    <option className="bg-black">Los Angeles</option>
                    <option className="bg-black">San Francisco</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                </div>
              </div>

              <div className="mb-3">
                <label className="block text-[0.918rem] font-normal text-[#E8E8E8] mb-2">Business Address</label>
                <input
                  type="text"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5A2E] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[0.918rem] font-normal text-[#E8E8E8] mb-2">Business Address 2</label>
                <input
                  type="text"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5A2E] transition-colors"
                />
              </div>
            </div>

            {/* Share data */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={shareData}
                onChange={(e) => setShareData(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-[#ED5A2E] cursor-pointer"
              />
              <span className="text-xs text-white/70 leading-relaxed">
                Share my registration data with our content creators.
              </span>
            </label>

            {/* Continue */}
            <div className="flex justify-center pt-2 pb-6">
              <HostButton
                href="/host/onboarding/kyc"
                disabled={!isValid}
                fullWidth={true}
              >
                Continue
              </HostButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
