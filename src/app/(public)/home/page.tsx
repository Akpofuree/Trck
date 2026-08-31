"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/logo";

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Track", href: "/home", isBrand: true },
    { label: "Personal", href: "/explore" },
    { label: "Business", href: "/host/signup" },
    { label: "Trck+", href: "/onboarding/step-1" },
    { label: "Company", href: "#" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden font-[var(--font-montserrat)]">
      {/* ── Background image ── */}
      <Image
        src="/carnival-hero-bg.jpg"
        alt="Trck carnival experience background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* ── Page content ── */}
      <div className="relative z-10 flex min-h-screen flex-col">

        {/* ── Navbar ── */}
        <nav className="flex items-center justify-between px-6 py-5 sm:px-8 lg:px-14">
          {/* Left section: Logo + Grouped Nav Items */}
          <div className="flex items-center gap-10">
            <Link href="/" className="inline-flex items-center">
              <Logo width={120} height={44} className="h-9 w-auto brightness-0 invert" />
            </Link>

            {/* Nav links grouped together */}
            <div className="hidden items-center gap-7 lg:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[0.9rem] transition-colors ${
                    item.isBrand
                      ? "font-bold text-[#ED5A2E] hover:text-[#d4501f]"
                      : "font-medium text-white/85 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right section: Auth buttons + Mobile menu button */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              id="nav-login"
              className="hidden rounded-full px-5 py-2 text-[0.88rem] font-semibold text-white transition-colors hover:text-white/70 sm:block"
            >
              Login
            </Link>
            <Link
              href="/signup"
              id="nav-signup"
              className="hidden sm:inline-flex rounded-full bg-white px-5 py-2 text-[0.88rem] font-bold text-gray-900 shadow-md transition-all hover:bg-white/90 hover:shadow-lg active:scale-[0.97]"
            >
              Sign up
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* ── Mobile Navigation Drawer ── */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] z-50 bg-black/90 backdrop-blur-xl px-6 py-8 flex flex-col justify-between border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                Navigation
              </p>
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-xl text-base transition-colors ${
                    item.isBrand
                      ? "bg-[#ED5A2E]/10 font-bold text-[#ED5A2E]"
                      : "font-medium text-white/90 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-xl border border-white/20 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-[#ED5A2E] py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#d4501f]"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}

        {/* ── Hero ── */}
        <div className="flex flex-1 flex-col justify-center px-6 pb-24 pt-8 sm:px-8 lg:px-14">
          <div className="max-w-[580px]">
            {/* Headline */}
            <h1 className="text-[2.5rem] font-extrabold uppercase leading-[1.1] tracking-tight text-white sm:text-[3rem] lg:text-[3.4rem]">
              Book Incredible
              <br />
              <span className="text-[#ED5A2E]">Experiences</span>
              <br />
              In Seconds
            </h1>

            {/* Underline accent */}
            <div className="mt-3 h-[3px] w-[120px] rounded-full bg-[#ED5A2E]" />

            {/* Subtext */}
            <p className="mt-6 max-w-[440px] text-[0.95rem] leading-relaxed text-white/70">
              Discover live events, concerts, festivals, and more — all in one
              place. Tap once, book instantly, and never miss a moment.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/explore"
                id="hero-get-app"
                className="rounded-full bg-[#ED5A2E] px-8 py-3.5 text-[0.95rem] font-bold text-white shadow-lg shadow-[#ED5A2E]/40 transition-all hover:bg-[#d4501f] hover:shadow-xl hover:shadow-[#ED5A2E]/50 active:scale-[0.97]"
              >
                Get the app
              </Link>
              <Link
                href="/explore"
                id="hero-explore"
                className="rounded-full border border-white/40 px-8 py-3.5 text-[0.95rem] font-semibold text-white backdrop-blur-sm transition-all hover:border-white/70 hover:bg-white/10"
              >
                Explore events
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {["#ED5A2E", "#f4a26c", "#c0392b", "#e67e22"].map((color, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white/30"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className="text-[0.8rem] text-white/60">
                <span className="font-bold text-white">10,000+</span> events booked this month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
