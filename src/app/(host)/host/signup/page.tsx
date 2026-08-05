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
      {/* Top Navigation */}
      <nav className="flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Logo width={120} height={44} className="h-9 w-auto" />

        {/* Desktop nav items */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 border border-white/20 text-white text-sm px-4 py-1.5 rounded-full">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            Search
          </button>
          <select className="bg-black text-white text-sm border-none outline-none cursor-pointer">
            <option>English (United States)</option>
          </select>
          <Link
            href="/host/login"
            className="bg-black text-white border border-white/40 text-sm font-semibold px-5 py-2 rounded-full hover:bg-white/10 transition-colors"
          >
            Log in
          </Link>
        </div>

        {/* Mobile Login Button */}
        <Link
          href="/host/login"
          className="md:hidden bg-white text-black text-[0.783rem] font-normal px-4 py-1.5 rounded-full text-center"
        >
          Log in
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 items-start justify-center md:items-center md:px-8 py-6">
        {/* Desktop: side text + card layout */}
        <div className="hidden md:flex w-full max-w-5xl gap-12 items-center">
          {/* Left side text */}
          <div className="flex-1 text-white font-montserrat">
            <h1 className="text-[2.5rem] font-semibold leading-none tracking-normal mb-4">
              Become a Host
            </h1>
            <p className="text-[2rem] font-normal leading-[3.0625rem] tracking-[0.01em] text-white/90">
              Create events, manage bookings, and reach your audience.
            </p>
          </div>

          {/* Right side form card */}
          <div className="w-[420px] bg-white rounded-2xl p-8 shadow-2xl font-poppins">
            <h2 className="text-black text-[1.806rem] font-medium leading-none mb-6 text-center">
              Create Your Host Account
            </h2>

            <div className="space-y-4">
              {/* First & Last Name row */}
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-[0.903rem] text-[#666666] font-normal mb-1.5">
                    First Name
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
                    Last Name
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
                  Email Address
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
                  Phone Number
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
                    <span>{showPassword ? "Hide" : "Show"}</span>
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
                  Use at least 8 characters
                </p>
              </div>

              {/* Checkboxes */}
              <div className="space-y-2.5 pt-1">
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
                      Terms of Use
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

              {/* Sign Up Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-[148px] h-[27.78px] rounded-[36.11px] text-[1.241rem] font-medium transition-all flex items-center justify-center ${
                    isFormValid
                      ? "bg-[#ED5A2E] text-white hover:bg-[#d44d24] opacity-100"
                      : "bg-[#ED5A2E] text-white opacity-25 cursor-not-allowed"
                  }`}
                >
                  Sign up
                </button>
              </div>

              <p className="text-center text-[0.903rem] font-normal text-[#666666]">
                Already have an account?{" "}
                <Link href="/host/login" className="text-[#333333] underline">
                  Login
                </Link>
              </p>
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
                  <span>{showPassword ? "Hide" : "Show"}</span>
                </button>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white text-sm outline-none focus:border-[#ED5A2E] transition-colors"
              />
              <p className="mt-2 text-[0.875rem] font-normal text-[#C8C8C8]">
                Use 8 or more characters with a mix of letters
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
                  <Link href="/privacy" className="text-[#ED5A2E] underline">
                    Privacy Policy
                  </Link>
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
                  By creating an account, I am also consenting to receive SMS messages and emails,
                </span>
              </label>
            </div>

            {/* Sign Up Button */}
            <div className="flex justify-center">
              <button
                type="button"
                className="w-[332px] h-[58px] rounded-[7.1px] bg-[#ED5E2E] text-white text-[1.256rem] font-medium flex items-center justify-center hover:bg-[#d44d24] active:scale-[0.98] transition-all mt-2"
              >
                Sign up
              </button>
            </div>

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
