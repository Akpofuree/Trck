"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Camera, ChevronRight, ChevronDown, Globe } from "lucide-react";

export default function EditProfilePage() {
  const [notifications, setNotifications] = useState({
    sms: true,
    newsletter: true,
    email: true,
    marketing: false,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-[var(--font-inter)]">
      <div className="mx-auto max-w-[1200px] px-6 py-8 lg:px-12">
        {/* ── Header ── */}
        <div className="mb-10 flex items-center gap-4">
          <Link
            href="/account/overview"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:border-gray-400 hover:text-gray-900"
          >
            <ArrowLeft className="h-4.5 w-4.5" />
          </Link>
          <h1 className="text-[1.8rem] font-black uppercase tracking-tight">
            EDIT PROFILE
          </h1>
        </div>

        {/* ── Two-column Layout ── */}
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* ── Left: Profile Sidebar ── */}
          <aside className="w-full lg:w-[280px] flex-shrink-0">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
              {/* Avatar */}
              <div className="relative mx-auto mb-5 h-[180px] w-[180px]">
                <div className="h-full w-full overflow-hidden rounded-full border-2 border-gray-100">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80"
                    alt="Profile photo"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <button className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#ED5A2E] text-white shadow-lg transition-all hover:bg-[#d4501f] hover:scale-105">
                  <Camera className="h-5 w-5" />
                </button>
              </div>

              {/* HOST Badge */}
              <div className="mb-4 flex justify-center">
                <span className="rounded-full bg-[#ED5A2E] px-6 py-1.5 text-[0.82rem] font-bold text-white uppercase tracking-wider">
                  HOST
                </span>
              </div>

              {/* User Info */}
              <h2 className="text-[1.2rem] font-bold text-gray-900 mb-1">John Doe</h2>
              <p className="text-[0.88rem] text-gray-500 mb-1">@JohnDoe2025</p>
              <p className="text-[0.85rem] text-gray-500 mb-4">Johndoe@email.com</p>
              <p className="text-[0.82rem] text-gray-400">Member Since: 4th July, 2025</p>
            </div>
          </aside>

          {/* ── Right: Form Sections ── */}
          <div className="flex-1 space-y-0">
            {/* ═══ Section 1: Personal Information ═══ */}
            <section>
              <h2 className="text-[1.4rem] font-bold text-gray-900 mb-1">Personal Information</h2>
              <p className="text-[0.85rem] text-gray-500 mb-6">Update your Profile and personal details here</p>

              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    defaultValue="John D"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[0.9rem] text-gray-900 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    defaultValue="Johndoe@email.com"
                    className="w-full rounded-xl border-2 border-[#ED5A2E] bg-white px-4 py-3 text-[0.9rem] text-gray-900 outline-none focus:ring-1 focus:ring-[#ED5A2E]"
                  />
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="text-green-500 text-[0.82rem]">✅</span>
                    <span className="text-[0.78rem] font-medium text-green-600">Email Verified</span>
                  </div>
                </div>

                {/* Age */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Age</label>
                  <div className="relative">
                    <select
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-[0.9rem] text-gray-400 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                      defaultValue=""
                    >
                      <option value="" disabled>Enter your age</option>
                      {Array.from({ length: 82 }, (_, i) => i + 18).map((age) => (
                        <option key={age} value={age}>{age}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Phone Number</label>
                  <div className="flex gap-2">
                    <div className="relative w-[90px]">
                      <select
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-3 py-3 text-[0.9rem] text-gray-900 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                        defaultValue="+234"
                      >
                        <option value="+234">+234</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      defaultValue="34 1234 567 890"
                      className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-[0.9rem] text-gray-900 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                    />
                  </div>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="text-[0.78rem] font-medium text-gray-500">Not Verified</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="rounded-full bg-[#ED5A2E] px-8 py-2.5 text-[0.88rem] font-bold text-white shadow-sm transition-all hover:bg-[#d4501f]">
                  Save
                </button>
              </div>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* ═══ Section 2: Account Settings ═══ */}
            <section>
              <h2 className="text-[1.4rem] font-bold text-gray-900 mb-1">Account Settings</h2>
              <p className="text-[0.85rem] text-gray-500 mb-6">Edit and Update your Account Settings here</p>

              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                {/* Username */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Username</label>
                  <input
                    type="text"
                    defaultValue="JohnDoe2025"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[0.9rem] text-gray-900 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Password</label>
                  <input
                    type="password"
                    defaultValue="1234567890"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[0.9rem] text-gray-900 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                  />
                </div>

                {/* Language Preference */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Language Preference</label>
                  <div className="relative">
                    <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-400" />
                    <input
                      type="text"
                      defaultValue="Nigeria"
                      className="w-full rounded-xl border border-gray-200 bg-white pl-10 pr-4 py-3 text-[0.9rem] text-gray-900 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                    />
                  </div>
                </div>

                {/* Timezone */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Timezone</label>
                  <div className="relative">
                    <select
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-[0.9rem] text-gray-400 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                      defaultValue=""
                    >
                      <option value="" disabled>Enter your timezone</option>
                      <option value="WAT">WAT (West Africa Time)</option>
                      <option value="GMT">GMT (Greenwich Mean Time)</option>
                      <option value="EST">EST (Eastern Standard Time)</option>
                      <option value="PST">PST (Pacific Standard Time)</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button className="rounded-full border border-gray-300 px-6 py-2.5 text-[0.88rem] font-semibold text-gray-700 transition-all hover:border-gray-500 hover:text-gray-900">
                  Change Password
                </button>
                <button className="rounded-full bg-[#ED5A2E] px-8 py-2.5 text-[0.88rem] font-bold text-white shadow-sm transition-all hover:bg-[#d4501f]">
                  Save
                </button>
              </div>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* ═══ Section 3: Location & Preferences ═══ */}
            <section>
              <h2 className="text-[1.4rem] font-bold text-gray-900 mb-1">Location & Preferences</h2>
              <p className="text-[0.85rem] text-gray-500 mb-6">Edit and Update your Location Settings here</p>

              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                {/* Current City */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Current City</label>
                  <input
                    type="text"
                    placeholder="Enter your current city"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[0.9rem] text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                  />
                </div>

                {/* Preferred Events Distance */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Preferred Events Distance</label>
                  <div className="relative">
                    <select
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-[0.9rem] text-gray-400 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                      defaultValue=""
                    >
                      <option value="" disabled>Radius</option>
                      <option value="5km">5 km</option>
                      <option value="10km">10 km</option>
                      <option value="25km">25 km</option>
                      <option value="50km">50 km</option>
                      <option value="100km">100 km</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Interests</label>
                  <div className="relative">
                    <select
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-[0.9rem] text-gray-400 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                      defaultValue=""
                    >
                      <option value="" disabled>Pick Interests</option>
                      <option value="party">Party</option>
                      <option value="food">Food</option>
                      <option value="arts">Arts</option>
                      <option value="adventure">Adventure</option>
                      <option value="chill">Chill</option>
                      <option value="networking">Networking</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* Price Range Preference */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Price Range Prefrence</label>
                  <div className="relative">
                    <select
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-[0.9rem] text-gray-400 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                      defaultValue=""
                    >
                      <option value="" disabled>Choose preferred range</option>
                      <option value="free">Free</option>
                      <option value="0-50">$0 - $50</option>
                      <option value="50-100">$50 - $100</option>
                      <option value="100-500">$100 - $500</option>
                      <option value="500+">$500+</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="rounded-full bg-[#ED5A2E] px-8 py-2.5 text-[0.88rem] font-bold text-white shadow-sm transition-all hover:bg-[#d4501f]">
                  Save
                </button>
              </div>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* ═══ Section 4: Notifications ═══ */}
            <section>
              <h2 className="text-[1.4rem] font-bold text-gray-900 mb-1">Notifications</h2>
              <p className="text-[0.85rem] text-gray-500 mb-6">Edit and Update your Notification Preferences here</p>

              <div className="space-y-5">
                {([
                  { key: "sms" as const, label: "SMS Notifications" },
                  { key: "newsletter" as const, label: "Newsletter Subscriptions" },
                  { key: "email" as const, label: "Email Notifications" },
                  { key: "marketing" as const, label: "Marketing Communications" },
                ]).map((item) => (
                  <div key={item.key} className="flex items-center justify-between">
                    <span className="text-[0.92rem] font-medium text-gray-800">{item.label}</span>
                    <button
                      onClick={() => toggleNotification(item.key)}
                      className={`relative h-7 w-12 rounded-full transition-colors duration-200 ${
                        notifications[item.key] ? "bg-[#ED5A2E]" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-200 ${
                          notifications[item.key] ? "left-[22px]" : "left-0.5"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button className="rounded-full bg-[#ED5A2E] px-8 py-2.5 text-[0.88rem] font-bold text-white shadow-sm transition-all hover:bg-[#d4501f]">
                  Save
                </button>
              </div>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* ═══ Section 5: Payment Information ═══ */}
            <section>
              <h2 className="text-[1.4rem] font-bold text-gray-900 mb-1">Payment Information</h2>
              <p className="text-[0.85rem] text-gray-500 mb-6">Edit and Update your Payment Information here</p>

              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                {/* Card Number */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="0000 0000 0000 0000"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-12 text-[0.9rem] text-gray-900 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                    />
                    {/* Card brand icon */}
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center">
                      <Image
                        src="/mastercard.png"
                        alt="Mastercard"
                        width={24}
                        height={16}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                {/* Card Holder's Name */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Card Holder&apos;s Name</label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[0.9rem] text-gray-900 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                  />
                </div>

                {/* Expiration Date */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">Expiration Date</label>
                  <input
                    type="text"
                    defaultValue="09/30"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[0.9rem] text-gray-900 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                  />
                </div>

                {/* CVV */}
                <div>
                  <label className="mb-1.5 block text-[0.85rem] font-semibold text-gray-700">CVV</label>
                  <input
                    type="text"
                    defaultValue="965"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[0.9rem] text-gray-900 outline-none focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="rounded-full bg-[#ED5A2E] px-8 py-2.5 text-[0.88rem] font-bold text-white shadow-sm transition-all hover:bg-[#d4501f]">
                  Save
                </button>
              </div>
            </section>

            <hr className="my-8 border-gray-200" />

            {/* ═══ Section 6: Privacy & Data ═══ */}
            <section className="pb-8">
              <h2 className="text-[1.4rem] font-bold text-gray-900 mb-1">Privacy & Data</h2>
              <p className="text-[0.85rem] text-gray-500 mb-6">Edit and Update your Privacy Preferences here</p>

              <div className="divide-y divide-gray-100">
                {[
                  "Profile Visibility Settings",
                  "Data Sharing Preferences",
                  "Download my data",
                  "Delete Account",
                ].map((item) => (
                  <button
                    key={item}
                    className="flex w-full items-center justify-between py-4 text-[0.92rem] font-medium text-gray-800 transition-colors hover:text-[#ED5A2E]"
                  >
                    <span>{item}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button className="rounded-full bg-[#ED5A2E] px-8 py-2.5 text-[0.88rem] font-bold text-white shadow-sm transition-all hover:bg-[#d4501f]">
                  Save
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
