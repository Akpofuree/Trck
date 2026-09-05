"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { HostButton } from "@/components/host";

const COUNTRIES = [
  { flag: "🇳🇬", code: "+234", name: "Nigeria" },
  { flag: "🇺🇸", code: "+1", name: "United States" },
  { flag: "🇬🇧", code: "+44", name: "United Kingdom" },
  { flag: "🇨🇦", code: "+1", name: "Canada" },
  { flag: "🇬🇭", code: "+233", name: "Ghana" },
  { flag: "🇰🇪", code: "+254", name: "Kenya" },
  { flag: "🇿🇦", code: "+27", name: "South Africa" },
];

export default function HostSignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedSMS, setAgreedSMS] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
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
    <div className="min-h-screen bg-black flex flex-col font-poppins overflow-x-hidden">
      {/* Top Navigation — white header */}
      <nav className="flex items-center justify-between px-4 py-3 md:px-8 bg-white border-b border-gray-100">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center">
          <Logo width={120} height={44} className="h-9 w-auto" />
        </Link>

        {/* Desktop nav items */}
        <div className="hidden md:flex items-center gap-4">
          <select className="bg-white text-gray-700 text-sm border-none outline-none cursor-pointer">
            <option>English (United States)</option>
          </select>
          {/* Login button */}
          <Link
            href="/host/login"
            className="flex items-center justify-center text-black bg-white border border-gray-300 text-sm font-semibold hover:bg-gray-50 transition-colors px-4 py-2 rounded-lg"
          >
            Log in
          </Link>
        </div>

        {/* Mobile Login Button — White background, black text per spec */}
        <Link
          href="/host/login"
          className="md:hidden flex items-center justify-center text-black bg-white border border-gray-300 text-[0.8rem] font-semibold px-4 py-1.5 rounded-md hover:bg-gray-50 transition-colors shadow-xs"
        >
          Log in
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 items-start justify-center md:items-center px-4 sm:px-8 py-6">

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

          {/* Right side form card */}
          <div
            className="bg-white shadow-2xl font-poppins flex flex-col p-10 max-w-[697px] w-full rounded-[21px]"
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
                    <select
                      value={selectedCountry.code}
                      onChange={(e) => {
                        const found = COUNTRIES.find((c) => c.code === e.target.value);
                        if (found) setSelectedCountry(found);
                      }}
                      className="bg-transparent text-sm text-gray-700 outline-none cursor-pointer"
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c.name} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
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

              {/* Sign Up + Already have an account */}
              <div className="flex items-center gap-4 pt-3">
                <HostButton
                  href="/host/onboarding/business-info"
                  disabled={!isFormValid}
                  fullWidth={false}
                  className="px-8 py-3"
                >
                  Sign up
                </HostButton>
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
        <div className="md:hidden w-full max-w-md mx-auto flex flex-col font-poppins">
          <h2 className="text-white text-[1.5rem] font-medium text-center mb-8 leading-[136%]">
            Create your host account
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

            {/* Phone with Country Flags */}
            <div>
              <label className="block text-[0.875rem] font-normal text-[#C8C8C8] mb-2">Phone Number</label>
              <div className="flex border border-white/30 rounded-lg overflow-hidden focus-within:border-[#ED5A2E] transition-colors">
                <div className="flex items-center gap-1.5 px-3 border-r border-white/20 bg-white/5 shrink-0">
                  <select
                    value={selectedCountry.code}
                    onChange={(e) => {
                      const found = COUNTRIES.find((c) => c.code === e.target.value);
                      if (found) setSelectedCountry(found);
                    }}
                    className="bg-transparent text-sm text-white outline-none cursor-pointer [&>option]:bg-black [&>option]:text-white"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.name} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
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

            {/* Mobile Sign Up Button using Reusable HostButton */}
            <div className="pt-2">
              <HostButton
                href="/host/onboarding/business-info"
                disabled={!isFormValid}
                fullWidth={true}
              >
                Sign up
              </HostButton>
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
