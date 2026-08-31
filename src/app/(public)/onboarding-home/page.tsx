"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Star,
  ArrowUpRight,
  ArrowRight,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Logo } from "@/components/shared/logo";

interface HomeData {
  hero: {
    titleLine1: string;
    titleLine2Part1: string;
    titleLine2Part2: string;
    stars: number;
    subtitle: string;
    ctaText: string;
  };
  featureCards: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  vipPackages: Array<{
    id: string;
    category: string;
    title: string;
    image: string;
  }>;
  trendingEvents: Array<{
    id: string;
    title: string;
    date: string;
    price: string;
    image: string;
  }>;
  categories: string[];
  discoverArticles: Array<{
    id: string;
    category: string;
    title: string;
    excerpt: string;
    image: string;
  }>;
}

export default function OnboardingHomePage() {
  const [data, setData] = useState<HomeData | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/home");
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (e) {
        console.error("Failed to fetch home page data", e);
      }
    }
    fetchData();
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-black text-white font-[var(--font-inter)] selection:bg-[#ED5A2E] selection:text-white">
      {/* ── Navbar ── */}
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-4 lg:px-12">
        {/* Left: Logo & Nav items */}
        <div className="flex items-center gap-8">
          <Link href="/" className="inline-flex items-center">
            <Logo width={100} height={36} className="h-8 w-auto brightness-0 invert" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-[0.88rem] font-medium text-white/80">
            <Link href="/explore" className="hover:text-white transition-colors">
              Sports
            </Link>
            <Link href="/explore" className="hover:text-white transition-colors">
              Music
            </Link>
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              More <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </nav>
        </div>

        {/* Center: Search input */}
        <div className="relative flex-1 max-w-[380px] hidden sm:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
          <input
            type="text"
            placeholder="Search by categories"
            className="w-full rounded-full border border-white/40 bg-transparent pl-10 pr-4 py-2 text-[0.85rem] text-white outline-none placeholder:text-white/60 focus:border-white focus:ring-1 focus:ring-white"
          />
        </div>

        {/* Right: Sign in & Support */}
        <div className="flex items-center gap-6 text-[0.88rem] font-medium">
          <Link href="/login" className="text-white hover:text-white/80 transition-colors">
            Sign in
          </Link>
          <Link href="#" className="text-white hover:text-white/80 transition-colors">
            Support
          </Link>
        </div>
      </header>

      {/* ── Hero Section ── */}
      <section className="relative px-6 pt-12 pb-24 lg:px-12">
        <div className="mx-auto max-w-[1300px]">
          {/* Main Headline */}
          <div className="mb-6">
            <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[6rem] font-black uppercase leading-[0.95] tracking-tight font-[var(--font-montserrat)]">
              5IVE AT
              <br />
              <span className="text-[#ED5A2E]">02</span>ARENA
            </h1>
          </div>

          {/* Rating & Date Subtitle */}
          <div className="flex flex-wrap items-center gap-3 text-[0.82rem] font-semibold text-white/70 tracking-wider mb-8 uppercase">
            <div className="flex text-white gap-0.5">
              <Star className="h-3.5 w-3.5 fill-white text-white" />
              <Star className="h-3.5 w-3.5 fill-white text-white" />
              <Star className="h-3.5 w-3.5 fill-white text-white" />
            </div>
            <span>13-15 APRIL 2026, LEGEND SIAM - PATTAYA</span>
          </div>

          {/* Primary CTA */}
          <Link
            href="/onboarding/step-1"
            className="inline-flex items-center justify-center rounded-full bg-[#ED5A2E] px-8 py-3.5 text-[0.92rem] font-bold text-white shadow-lg shadow-[#ED5A2E]/40 transition-all hover:bg-[#d4501f] hover:shadow-xl hover:shadow-[#ED5A2E]/50 active:scale-[0.98]"
          >
            GET TICKETS
          </Link>
        </div>

        {/* Overlapping Feature Cards Row */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 mx-auto max-w-[1300px]">
          {data?.featureCards.map((card, idx) => (
            <div
              key={card.id}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121212] p-6 transition-all hover:border-white/20"
            >
              <div>
                <h3 className="text-[1.05rem] font-bold text-white mb-2">
                  {card.title}
                </h3>
                {card.description && (
                  <p className="text-[0.8rem] text-white/50 leading-relaxed">
                    {card.description}
                  </p>
                )}
              </div>

              <div className="mt-8 flex items-center justify-between pt-4 border-t border-white/10 text-[0.85rem] font-medium text-white/80">
                <span>Visite</span>
                {/* Second item PVC for Kids arrow: horizontal with orange background */}
                {idx === 1 ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ED5A2E] text-white shadow-sm">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            </div>
          )) || [1, 2, 3].map((i) => (
            <div key={i} className="h-36 rounded-2xl bg-white/5 animate-pulse" />
          ))}
        </div>
      </section>

      {/* ── Spotify Connect Integration Banner ── */}
      <section className="bg-black py-10 px-6 lg:px-12 border-t border-white/10">
        <div className="mx-auto max-w-[1300px] flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-[#0D0D0D] border border-white/10 p-6 sm:p-8">
          <div className="flex items-center gap-6">
            {/* 3 Stacked White Cards Graphic (Image 3 asset) */}
            <div className="relative h-14 w-28 flex-shrink-0">
              <Image
                src="/spotify-cards.png"
                alt="Spotify cards illustration"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div>
              <h3 className="text-[1.1rem] font-bold text-white">
                Connect to Spotify
              </h3>
              <p className="text-[0.82rem] text-white/60">
                Be the first to know when your favorite artists play nearby
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 rounded-full bg-[#1DB954] px-6 py-2.5 text-[0.88rem] font-bold text-black shadow-md transition-all hover:bg-[#1ed760] active:scale-[0.98]">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.376 0 0 5.377 0 12s5.376 12 12 12 12-5.377 12-12S18.624 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C13.56 8.4 7.08 8.16 3.36 9.3c-.6.18-1.26-.18-1.44-.72-.18-.6.18-1.26.72-1.44C6.96 5.82 14.16 6.06 18.72 8.76c.54.3.72 1.02.42 1.56-.3.48-1.02.72-1.56.42z" />
            </svg>
            Connect Spotify
          </button>
        </div>
      </section>

      {/* ── VIP Packages Section (White Background) ── */}
      <section className="bg-white text-gray-900 py-16 px-6 lg:px-12">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {data?.vipPackages.map((pkg) => (
              <div key={pkg.id} className="group cursor-pointer">
                {/* Image Placeholder / Thumbnail */}
                <div className="relative mb-4 h-[220px] w-full overflow-hidden rounded-2xl bg-gray-900">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <p className="text-[0.75rem] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  {pkg.category}
                </p>
                <h3 className="text-[1.1rem] font-bold text-gray-900 group-hover:text-[#ED5A2E] transition-colors">
                  {pkg.title}
                </h3>
              </div>
            )) || [1, 2, 3].map((i) => (
              <div key={i} className="h-60 rounded-2xl bg-gray-100 animate-pulse" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Trending Events Section (White Background) ── */}
      <section className="bg-white text-gray-900 py-12 px-6 lg:px-12 border-t border-gray-100">
        <div className="mx-auto max-w-[1300px]">
          {/* Header & Carousel Control */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-[1.8rem] font-bold text-gray-900 tracking-tight">
                Trending Events
              </h2>
              {/* TODO: Trending Events 'Book Now' destination to be confirmed with product/designer. */}
              {/* TODO: Interactive hat element interaction to be clarified with designer. */}
            </div>
            <div className="flex items-center gap-2 rounded-full bg-black px-4 py-1.5 text-white text-[0.82rem] font-semibold">
              <button
                onClick={() => setActiveSlide((prev) => Math.max(1, prev - 1))}
                className="hover:text-[#ED5A2E]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span>{activeSlide} of 4</span>
              <button
                onClick={() => setActiveSlide((prev) => Math.min(4, prev + 1))}
                className="hover:text-[#ED5A2E]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {data?.trendingEvents.map((evt) => {
              const isFav = favorites.includes(evt.id);
              return (
                <div key={evt.id} className="group cursor-pointer">
                  <div className="relative mb-3 h-[240px] w-full overflow-hidden rounded-2xl bg-gray-900">
                    <Image
                      src={evt.image}
                      alt={evt.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(evt.id);
                      }}
                      className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white transition-all hover:scale-110"
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          isFav ? "fill-[#ED5A2E] text-[#ED5A2E]" : "text-white"
                        }`}
                      />
                    </button>
                  </div>
                  <h3 className="text-[1rem] font-bold text-gray-900 group-hover:text-[#ED5A2E] transition-colors">
                    {evt.title}
                  </h3>
                  <div className="mt-1 flex items-center justify-between text-[0.85rem]">
                    <span className="text-gray-500 font-medium">{evt.date}</span>
                    <span className="font-bold text-gray-900">{evt.price}</span>
                  </div>
                </div>
              );
            }) || [1, 2, 3].map((i) => (
              <div key={i} className="h-64 rounded-2xl bg-gray-100 animate-pulse" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Banners & Category Filter Tags ── */}
      <section className="bg-white text-gray-900 py-12 px-6 lg:px-12 border-t border-gray-100">
        <div className="mx-auto max-w-[1300px]">
          {/* Two Large Black Feature Banners */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Workflow Integration Card */}
            <div className="rounded-2xl bg-black p-8 text-white flex flex-col justify-between min-h-[200px]">
              <div>
                <h3 className="text-[1.3rem] font-black uppercase tracking-tight mb-2">
                  WORKFLOW INTEGRATION
                </h3>
                <p className="text-[0.88rem] text-white/60">
                  Seamlessly connect all your existing apps
                </p>
              </div>
            </div>

            {/* AI Experiences Card */}
            <div className="rounded-2xl bg-black p-8 text-white flex items-center justify-between min-h-[200px]">
              <div className="max-w-[260px]">
                <h3 className="text-[1.3rem] font-black uppercase tracking-tight mb-2">
                  WHAT ARE YOU FEELING LIKE TODAY?
                </h3>
                <p className="text-[0.85rem] text-white/60">
                  Trck&apos;s AI creates experiences that match how you feel
                </p>
              </div>

              {/* Overlapping Colorful Circles */}
              <div className="flex -space-x-3">
                <div className="h-12 w-12 rounded-full border-2 border-black bg-white" />
                <div className="h-12 w-12 rounded-full border-2 border-black bg-[#ED5A2E]" />
                <div className="h-12 w-12 rounded-full border-2 border-black bg-[#8B5CF6]" />
                <div className="h-12 w-12 rounded-full border-2 border-black bg-slate-700" />
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {data?.categories.map((cat, idx) => (
              <button
                key={idx}
                className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-3 text-[0.92rem] font-semibold text-gray-800 shadow-sm transition-all hover:border-[#ED5A2E] hover:text-[#ED5A2E] hover:shadow-md"
              >
                <Star className="h-4 w-4 fill-[#ED5A2E] text-[#ED5A2E]" />
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCOVER MORE Section (Light Gray Background) ── */}
      <section className="bg-gray-50 text-gray-900 py-16 px-6 lg:px-12 border-t border-gray-200/60">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="text-[1.8rem] font-black uppercase tracking-tight text-center mb-12">
            DISCOVER MORE
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-12">
            {data?.discoverArticles.map((art) => (
              <div key={art.id} className="group cursor-pointer flex flex-col justify-between">
                <div>
                  <div className="relative mb-4 h-[220px] w-full overflow-hidden rounded-2xl bg-gray-900">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <p className="text-[0.8rem] font-semibold text-gray-500 mb-1">
                    {art.category}
                  </p>
                  <h3 className="text-[1.15rem] font-bold text-gray-900 mb-3 group-hover:text-[#ED5A2E] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-[0.85rem] text-gray-500 leading-relaxed mb-4">
                    {art.excerpt}
                  </p>
                </div>
                <Link
                  href="#"
                  className="text-[0.85rem] font-bold text-[#2563EB] hover:text-[#1d4ed8] hover:underline uppercase tracking-wide"
                >
                  DISCOVER MORE
                </Link>
              </div>
            )) || [1, 2, 3].map((i) => (
              <div key={i} className="h-72 rounded-2xl bg-gray-200 animate-pulse" />
            ))}
          </div>

          {/* ── Quick Launcher Bar for All Onboarding Screens ── */}
          {/* TODO: Quick Onboarding Screens Launcher kept functional for navigation per spec; confirm with product/design before production release */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-[0.85rem] font-bold uppercase tracking-wider text-[#ED5A2E] mb-3 text-center">
              Quick Onboarding Screens Launcher
            </h4>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Link
                href="/onboarding/step-1"
                className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center transition-all hover:border-[#ED5A2E] hover:bg-[#ED5A2E]/10"
              >
                <p className="text-[0.88rem] font-bold text-gray-900">Step 1</p>
                <p className="text-[0.75rem] text-gray-500">Your City</p>
              </Link>
              <Link
                href="/onboarding/step-2"
                className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center transition-all hover:border-[#ED5A2E] hover:bg-[#ED5A2E]/10"
              >
                <p className="text-[0.88rem] font-bold text-gray-900">Step 2</p>
                <p className="text-[0.75rem] text-gray-500">Lifestyle</p>
              </Link>
              <Link
                href="/onboarding/step-3"
                className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center transition-all hover:border-[#ED5A2E] hover:bg-[#ED5A2E]/10"
              >
                <p className="text-[0.88rem] font-bold text-gray-900">Step 3</p>
                <p className="text-[0.75rem] text-gray-500">Journey</p>
              </Link>
              <Link
                href="/onboarding/step-4"
                className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center transition-all hover:border-[#ED5A2E] hover:bg-[#ED5A2E]/10"
              >
                <p className="text-[0.88rem] font-bold text-gray-900">Step 4</p>
                <p className="text-[0.75rem] text-gray-500">Interests</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full Dark Footer ── */}
      <footer className="bg-black px-6 py-12 text-white lg:px-16 border-t border-white/10">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 pb-12 border-b border-white/10">
            {/* Contact */}
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
                Contact
              </h4>
              <p className="text-[0.88rem] font-semibold text-[#ED5A2E] mb-4">
                info@getontrck.com
              </p>
              <div className="flex items-center gap-4 text-white/80">
                <svg className="h-4 w-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                </svg>
                <svg className="h-4 w-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                <span className="text-[0.88rem] font-bold cursor-pointer hover:text-white">
                  TikTok
                </span>
                <svg className="h-4 w-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Acceptable use policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
                Support
              </h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Disclaimer */}
          <div className="pt-8 text-[0.76rem] text-white/40 leading-relaxed space-y-2">
            <p>
              TRCK is a leisure technology platform based in Nigeria. All
              experiences are provided by independent third-party creators. TRCK
              does not host or supervise these Experiences and disclaims
              liability for third-party actions.
            </p>
            <p>
              Copyright ©2025 Trck Entertainment & Technology Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
