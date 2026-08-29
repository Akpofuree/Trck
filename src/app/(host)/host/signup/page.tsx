"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Logo } from "@/components/shared/logo";

export default function HostSignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedSMS, setAgreedSMS] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.phone &&
    form.password &&
    agreedTerms;

  return (
    <div className="min-h-screen bg-black flex flex-col font-poppins">
      {/* Top Navigation — white header */}
      <nav className="flex items-center justify-between px-4 py-3 md:px-8 bg-white border-b border-gray-100">
        {/* Logo */}
        <Logo width={120} height={44} className="h-9 w-auto" />

        {/* Desktop nav items */}
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

        {/* Mobile Login Button — Figma: 76.71×31.31px, radius 6.26px, bg #111111 */}
        <Link
          href="/host/login"
          className="md:hidden flex items-center justify-center text-white text-[0.75rem] font-medium"
          style={{ width: 76.71, height: 31.31, borderRadius: 6.26, backgroundColor: "#111111" }}
        >
          Log in
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 items-start justify-center md:items-center md:px-8 py-6">

        {/* Desktop: side text + card layout */}
        <div className="hidden md:flex w-full max-w-6xl gap-12 items-center justify-center">
          {/* Left side text */}
          <div className="flex-1 text-white font-montserrat max-w-sm">
            <h1 className="text-[2.5rem] font-bold leading-none tracking-normal mb-4 uppercase">
              BECOME A HOST
            </h1>
            <p className="text-[1.5rem] font-normal leading-[1.6] text-white/90">
              Create events, manage bookings, and reach your audience. Hosting starts here.
            </p>
          </div>

          {/* Right side form card — Figma: 697×787.28px, radius 21.67px */}
          <div
            className="bg-white shadow-2xl font-poppins flex flex-col p-10"
            style={{ width: 697, minHeight: 787.28, borderRadius: 21.67 }}
          >
            <h2 className="text-black text-[1.806rem] font-medium leading-none mb-6">
              Create your host account
            </h2>

            <div className="space-y-4 flex-1">
              {/* First & Last Name row */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-[0.903rem] text-[#666666] font-normal mb-1.5">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-black text-sm outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E] transition-colors"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[0.903rem] text-[#666666] font-normal mb-1.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-black text-sm outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E] transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[0.903rem] text-[#666666] font-normal mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-black text-sm outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E] transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[0.903rem] text-[#666666] font-normal mb-1.5">
                  Phone number
                </label>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-[#ED5A2E] focus-within:ring-1 focus-within:ring-[#ED5A2E] transition-colors">
                  <div className="flex items-center gap-1.5 px-3 border-r border-gray-300 bg-gray-50 shrink-0">
                    <span className="text-base">🇺🇸</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                    <span className="text-sm text-gray-600">+1</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="flex-1 px-3 py-2.5 text-black text-sm outline-none bg-white"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-[0.903rem] text-[#666666] font-normal">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    <span>{showPassword ? "Hide" : "Hide"}</span>
                  </button>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-black text-sm outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E] transition-colors"
                />
                <p className="mt-1.5 text-[0.79rem] text-[#666666] font-normal">
                  Use 8 or more characters with a mix of letters, numbers &amp; symbols
                </p>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedTerms}
                    onChange={(e) => setAgreedTerms(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-[#ED5A2E] cursor-pointer"
                  />
                  <span className="text-[0.903rem] text-[#666666] font-normal leading-relaxed">
                    By creating an account, I agree to our{" "}
                    <Link href="/terms" className="text-[#666666] underline">
                      Terms of use
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#666666] underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedSMS}
                    onChange={(e) => setAgreedSMS(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-[#ED5A2E] cursor-pointer"
                  />
                  <span className="text-[0.903rem] text-[#666666] font-normal leading-relaxed">
                    By creating an account, I am also consenting to receive SMS messages and emails, including product new feature updates, events, and marketing promotions.
                  </span>
                </label>
              </div>

              {/* Sign Up + Already have an account — same row as per screenshot */}
              <div className="flex items-center gap-4 pt-3">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`rounded-[36.11px] text-[1rem] font-medium transition-all flex items-center justify-center px-8 py-2 ${
                    isFormValid
                      ? "bg-[#ED5A2E] text-white hover:bg-[#d44d24]"
                      : "bg-[#ED5A2E] text-white opacity-40 cursor-not-allowed"
                  }`}
                >
                  Sign up
                </button>
                <p className="text-[0.903rem] font-normal text-[#666666]">
                  Already have an account?{" "}
                  <Link href="/host/login" className="text-[#333333] underline">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden w-full px-5 flex flex-col font-poppins">
          <h2 className="text-white text-[1.5rem] font-medium text-center mb-8 leading-[136%]">
            Create Your Account
          </h2>

          <div className="space-y-5">
            {/* First name */}
            <div>
              <label className="block text-[0.875rem] font-normal text-[#C8C8C8] mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5A2E] transition-colors"
              />
            </div>

            {/* Last name */}
            <div>
              <label className="block text-[0.875rem] font-normal text-[#C8C8C8] mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5A2E] transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[0.875rem] font-normal text-[#C8C8C8] mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5A2E] transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[0.875rem] font-normal text-[#C8C8C8] mb-2">Phone Number</label>
              <div className="flex border border-white/30 rounded-lg overflow-hidden focus-within:border-[#ED5A2E] transition-colors">
                <div className="flex items-center gap-1.5 px-3 border-r border-white/20 bg-white/5 shrink-0">
                  <span className="text-base">🇺🇸</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="opacity-60">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                  <span className="text-sm text-white/70">+1</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="flex-1 px-3 py-3 text-white text-sm outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[0.875rem] font-normal text-[#C8C8C8]">Password</label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="flex items-center gap-1 text-sm text-white/50 hover:text-white/80 transition-colors"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  <span>{showPassword ? "Hide" : "Hide"}</span>
                </button>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5A2E] transition-colors"
              />
              <p className="mt-2 text-[0.75rem] font-normal text-[#C8C8C8]">
                Use 8 or more characters with a mix of letters, numbers &amp; symbols
              </p>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 pt-1">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedTerms}
                  onChange={(e) => setAgreedTerms(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#ED5A2E] cursor-pointer"
                />
                <span className="text-[0.745rem] font-normal text-white/80 leading-relaxed">
                  By creating an account, I agree to our{" "}
                  <Link href="/terms" className="text-[#666666] underline">Terms of use</Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#666666] underline">Privacy Policy</Link>
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedSMS}
                  onChange={(e) => setAgreedSMS(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#ED5A2E] cursor-pointer"
                />
                <span className="text-[0.745rem] font-normal text-white/80 leading-relaxed">
                  By creating an account, I am also consenting to receive SMS messages and emails, including product new feature updates, events, and marketing promotions.
                </span>
              </label>
            </div>

            {/* Mobile Sign Up Button — fills width like inputs, radius 7.1px */}
            <button
              type="button"
              style={{ borderRadius: 7.1 }}
              className="w-full py-4 bg-[#ED5E2E] text-white text-[1.1rem] font-medium flex items-center justify-center hover:bg-[#d44d24] active:scale-[0.98] transition-all mt-2"
            >
              Sign up
            </button>

            <p className="text-center text-xs text-white/50 pb-6">
              Already have an account?{" "}
              <Link href="/host/login" className="text-[#ED5A2E] underline font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
