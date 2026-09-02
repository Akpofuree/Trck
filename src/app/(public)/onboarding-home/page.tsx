"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Star,
  ArrowUpRight,
  Heart,
  Menu,
} from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { MobileSidebar } from "@/components/shared/mobile-sidebar";

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

const defaultData: HomeData = {
  hero: {
    titleLine1: "5IVE AT",
    titleLine2Part1: "02",
    titleLine2Part2: "ARENA02",
    stars: 3,
    subtitle: "13-15 APRIL 2026, LEGEND SIAM - PATTAYA",
    ctaText: "GET TICKETS",
  },
  featureCards: [
    {
      id: "fc-1",
      title: "Lagos Investors Hangout",
      description: "",
    },
    {
      id: "fc-2",
      title: "Pvc For Cate Even at the Home",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: "fc-3",
      title: "Pvc For Cate Even Home",
      description: "",
    },
  ],
  vipPackages: [
    {
      id: "vip-1",
      category: "Meet & Greets, Special Access",
      title: "Browse",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "vip-2",
      category: "Special Country Concerts",
      title: "Davido",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "vip-3",
      category: "Special Country Concerts",
      title: "Davido",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "vip-4",
      category: "Special Country Concerts",
      title: "Davido",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80",
    },
  ],
  trendingEvents: [
    {
      id: "trend-1",
      title: "Alan Jacjson One more st...",
      date: "Oct 17",
      price: "From $166",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "trend-2",
      title: "Alan Jacjson One more st...",
      date: "Oct 17",
      price: "From $166",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "trend-3",
      title: "Alan Jacjson One more st...",
      date: "Oct 17",
      price: "From $166",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc436?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "trend-4",
      title: "Alan Jacjson One more st...",
      date: "Oct 17",
      price: "From $166",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&auto=format&fit=crop&q=80",
    },
  ],
  categories: [
    "Design Workshops",
    "Design",
    "Designer",
    "Design",
    "Design gigs",
    "Design Multiply",
  ],
  discoverArticles: [
    {
      id: "art-1",
      category: "Tips",
      title: "How All In Prices Make Buying Tickets Easier",
      excerpt: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "art-2",
      category: "Tips",
      title: "How All In Prices Make Buying Tickets Easier",
      excerpt: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "art-3",
      category: "Tips",
      title: "How All In Prices Make Buying Tickets Easier",
      excerpt: "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&auto=format&fit=crop&q=80",
    },
  ],
};

export default function OnboardingHomePage() {
  const [data, setData] = useState<HomeData>(defaultData);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [spotifyConnected, setSpotifyConnected] = useState(false);

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

  const hero = data.hero || defaultData.hero;
  const featureCards = data.featureCards?.length ? data.featureCards : defaultData.featureCards;
  const vipPackages = data.vipPackages?.length ? data.vipPackages : defaultData.vipPackages;
  const trendingEvents = data.trendingEvents?.length ? data.trendingEvents : defaultData.trendingEvents;
  const discoverArticles = data.discoverArticles?.length ? data.discoverArticles : defaultData.discoverArticles;

  return (
    <div className="min-h-screen bg-black text-white font-[var(--font-inter)] selection:bg-[#ED5A2E] selection:text-white">
      {/* ── Working Mobile Sidebar Drawer ── */}
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* ── Mobile Header (Screenshots 2) ── */}
      <header className="lg:hidden flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10 sticky top-0 z-40 bg-black/90 backdrop-blur-md">
        {/* Left: Brand Logo */}
        <Link href="/" className="inline-flex shrink-0 items-center">
          <Logo width={76} height={26} className="h-5 w-auto brightness-0 invert" />
        </Link>

        {/* Center: Search by categories capsule */}
        <div className="relative flex-1 max-w-[220px] sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/50" />
          <input
            type="text"
            placeholder="Search by categories"
            className="w-full rounded-full border border-white/20 bg-[#1A1A1A] pl-8 pr-3 py-1.5 text-[0.75rem] text-white outline-none placeholder:text-white/50 focus:border-[#ED5A2E] focus:ring-1 focus:ring-[#ED5A2E]"
          />
        </div>

        {/* Right: Hamburger button (3 lines) */}
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open menu"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white/90 hover:text-white transition-colors active:scale-95"
        >
          <Menu className="h-6 w-6 stroke-[2]" />
        </button>
      </header>

      {/* ── Desktop Navbar (Preserved for Large Screens) ── */}
      <header className="hidden lg:flex items-center justify-between border-b border-white/10 px-12 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="inline-flex items-center">
            <Logo width={100} height={36} className="h-8 w-auto brightness-0 invert" />
          </Link>
          <nav className="flex items-center gap-6 text-[0.88rem] font-medium text-white/80">
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

        <div className="relative flex-1 max-w-[380px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
          <input
            type="text"
            placeholder="Search by categories"
            className="w-full rounded-full border border-white/40 bg-transparent pl-10 pr-4 py-2 text-[0.85rem] text-white outline-none placeholder:text-white/60 focus:border-white focus:ring-1 focus:ring-white"
          />
        </div>

        <div className="flex items-center gap-6 text-[0.88rem] font-medium">
          <Link href="/login" className="text-white hover:text-white/80 transition-colors">
            Sign in
          </Link>
          <Link href="#" className="text-white hover:text-white/80 transition-colors">
            Support
          </Link>
        </div>
      </header>

      {/* ── Hero Section (Screenshots 2) ── */}
      <section className="relative px-4 pt-8 pb-10 sm:px-6 lg:px-12 lg:py-16 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/event-hero.jpg"
            alt="Hero Concert Background"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1300px]">
          {/* Main Headline */}
          <div className="text-center lg:text-left">
            <h1 className="text-[2.6rem] sm:text-[4rem] lg:text-[5.5rem] font-black uppercase leading-[0.92] tracking-tight font-[var(--font-montserrat)]">
              {hero.titleLine1 || "5IVE AT"}
              <br />
              <span className="text-[#ED5A2E]">{hero.titleLine2Part1 || "02"}</span>
              <span className="text-white">{hero.titleLine2Part2 || "ARENA02"}</span>
            </h1>
          </div>

          {/* Rating Stars (3 solid white stars) */}
          <div className="mt-3.5 flex items-center justify-center lg:justify-start gap-1 text-white">
            <Star className="h-4 w-4 fill-white text-white" />
            <Star className="h-4 w-4 fill-white text-white" />
            <Star className="h-4 w-4 fill-white text-white" />
          </div>

          {/* Date Subtitle */}
          <p className="mt-2 text-[0.72rem] sm:text-xs font-semibold text-white/80 tracking-wider uppercase text-center lg:text-left">
            {hero.subtitle || "13-15 APRIL 2026, LEGEND SIAM - PATTAYA"}
          </p>

          {/* Primary CTA Button: GET TICKETS */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <Link
              href="/explore"
              className="inline-flex items-center justify-center rounded-2xl bg-[#ED5A2E] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#ED5A2E]/40 transition-all hover:bg-[#d4501f] active:scale-95"
            >
              {hero.ctaText || "GET TICKETS"}
            </Link>
          </div>

          {/* ── Feature Cards (Screenshots 2 & 3) ── */}
          <div className="mt-10 space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-5">
            {/* Feature Card 1: Lagos Investors Hangout */}
            <div className="rounded-2xl border border-white/10 bg-[#141414] p-5 flex flex-col justify-between min-h-[140px] hover:border-white/20 transition-all">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Lagos Investors<br />Hangout
              </h3>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-white/90">Visit</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-sm">
                  <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* Feature Card 2: Pvc For Cate Even at the Home (Split layout with thumbnail) */}
            <div className="rounded-2xl border border-white/10 bg-[#141414] p-5 flex items-center justify-between gap-4 min-h-[140px] hover:border-white/20 transition-all">
              <div className="flex flex-col justify-between h-full py-1">
                <div>
                  <h3 className="text-sm font-medium text-white leading-tight">
                    Pvc For Cate
                  </h3>
                  <p className="text-sm font-medium text-white leading-tight">
                    Even at the Home
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-sm font-medium text-white/90">Visit</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ED5A2E] text-white shadow-sm">
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
              <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-[#1f1f1f] border border-white/5">
                <Image
                  src="/event-feature.jpg"
                  alt="Thumbnail"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>

            {/* Feature Card 3: Pvc For Cate Even Home */}
            <div className="rounded-2xl border border-white/10 bg-[#141414] p-5 flex flex-col justify-between min-h-[140px] hover:border-white/20 transition-all">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Pvc For Cate<br />Even Home
              </h3>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-white/90">Visit</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-sm">
                  <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Spotify Connect Section (Screenshot 3) ── */}
      <section className="bg-black py-8 px-4 sm:px-6 lg:px-12 border-t border-white/10">
        <div className="mx-auto max-w-[1300px] text-center">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Connect to Spotify
          </h3>
          <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-md mx-auto">
            Be the first to know when your favorite artists play nearby
          </p>
          <button
            type="button"
            onClick={() => setSpotifyConnected(true)}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1DB954] px-6 py-2.5 text-xs sm:text-sm font-bold text-black shadow-md transition-all hover:bg-[#1ed760] active:scale-95 mx-auto"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.376 0 0 5.377 0 12s5.376 12 12 12 12-5.377 12-12S18.624 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C13.56 8.4 7.08 8.16 3.36 9.3c-.6.18-1.26-.18-1.44-.72-.18-.6.18-1.26.72-1.44C6.96 5.82 14.16 6.06 18.72 8.76c.54.3.72 1.02.42 1.56-.3.48-1.02.72-1.56.42z" />
            </svg>
            {spotifyConnected ? "Connected" : "Connect"}
          </button>
        </div>
      </section>

      {/* ── White Background Section (Screenshots 4 & 5) ── */}
      <div className="bg-white text-gray-900">
        {/* ── VIP Packages (Screenshot 4) ── */}
        <section className="py-6 px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-[1300px]">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {vipPackages.map((pkg) => (
                <div key={pkg.id} className="group cursor-pointer">
                  <div className="relative mb-2 aspect-square w-full overflow-hidden bg-black">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <p className="text-[0.7rem] sm:text-xs text-gray-700 text-center leading-tight">
                    {pkg.category}
                  </p>
                  <h4 className="text-xs sm:text-sm font-bold text-black text-center mt-0.5">
                    {pkg.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Trending Events (Screenshot 4) ── */}
        <section className="py-6 px-4 sm:px-6 lg:px-12 border-t border-gray-100">
          <div className="mx-auto max-w-[1300px]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-bold text-black tracking-tight">
                Trending Events
              </h2>
              <Link href="/explore" className="text-xs sm:text-sm font-medium text-gray-500 hover:text-black">
                See All
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {trendingEvents.map((evt) => {
                const isFav = favorites.includes(evt.id);
                return (
                  <div key={evt.id} className="group cursor-pointer">
                    <div className="relative mb-2 aspect-square w-full overflow-hidden bg-black">
                      <Image
                        src={evt.image}
                        alt={evt.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(evt.id);
                        }}
                        aria-label="Favorite event"
                        className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-transform active:scale-90"
                      >
                        <Heart
                          className={`h-4 w-4 ${
                            isFav ? "fill-[#ED5A2E] text-[#ED5A2E]" : "text-white"
                          }`}
                        />
                      </button>
                    </div>
                    <h4 className="text-xs sm:text-sm font-medium text-black text-center truncate">
                      {evt.title}
                    </h4>
                    <p className="text-[0.7rem] text-gray-600 text-center">
                      {evt.date}
                    </p>
                    <p className="text-[0.7rem] font-bold text-black text-center">
                      {evt.price}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Discover More Section (Screenshot 5) ── */}
        <section className="py-10 px-4 sm:px-6 lg:px-12 border-t border-gray-100">
          <div className="mx-auto max-w-[800px]">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-black text-center mb-8">
              DISCOVER MORE
            </h2>

            <div className="space-y-8">
              {discoverArticles.map((art) => (
                <article key={art.id} className="group flex flex-col items-center text-center">
                  <div className="relative mb-3 h-48 sm:h-56 w-full overflow-hidden bg-black">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <p className="text-xs font-bold text-black uppercase tracking-wide">
                    {art.category}
                  </p>
                  <h3 className="text-sm sm:text-base font-black text-black mt-1 leading-snug max-w-lg">
                    {art.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed max-w-md">
                    {art.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mt-2.5 hover:underline"
                  >
                    DISCOVER MORE
                  </Link>
                </article>
              ))}
            </div>

            {/* Quick Step Launcher Bar */}
            <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h4 className="text-[0.8rem] font-bold uppercase tracking-wider text-[#ED5A2E] mb-3 text-center">
                Onboarding Steps Navigation
              </h4>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Link
                  href="/onboarding/step-1"
                  className="rounded-xl border border-gray-200 bg-white p-3 text-center transition-all hover:border-[#ED5A2E] hover:bg-[#ED5A2E]/5"
                >
                  <p className="text-[0.85rem] font-bold text-gray-900">Step 1</p>
                  <p className="text-[0.72rem] text-gray-500">Your City</p>
                </Link>
                <Link
                  href="/onboarding/step-2"
                  className="rounded-xl border border-gray-200 bg-white p-3 text-center transition-all hover:border-[#ED5A2E] hover:bg-[#ED5A2E]/5"
                >
                  <p className="text-[0.85rem] font-bold text-gray-900">Step 2</p>
                  <p className="text-[0.72rem] text-gray-500">Lifestyle</p>
                </Link>
                <Link
                  href="/onboarding/step-3"
                  className="rounded-xl border border-gray-200 bg-white p-3 text-center transition-all hover:border-[#ED5A2E] hover:bg-[#ED5A2E]/5"
                >
                  <p className="text-[0.85rem] font-bold text-gray-900">Step 3</p>
                  <p className="text-[0.72rem] text-gray-500">Journey</p>
                </Link>
                <Link
                  href="/onboarding/step-4"
                  className="rounded-xl border border-gray-200 bg-white p-3 text-center transition-all hover:border-[#ED5A2E] hover:bg-[#ED5A2E]/5"
                >
                  <p className="text-[0.85rem] font-bold text-gray-900">Step 4</p>
                  <p className="text-[0.72rem] text-gray-500">Interests</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Full Dark Footer ── */}
      <footer className="hidden bg-black px-6 py-12 text-white lg:px-16 border-t border-white/10">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 pb-12 border-b border-white/10">
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

            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li><Link href="#" className="hover:text-white">About Us</Link></li>
                <li><Link href="#" className="hover:text-white">How it works</Link></li>
                <li><Link href="#" className="hover:text-white">Features</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li><Link href="/privacy" className="hover:text-white">Privacy policy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms of service</Link></li>
                <li><Link href="#" className="hover:text-white">Acceptable use policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
                Support
              </h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li><Link href="#" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 text-[0.76rem] text-white/40 leading-relaxed space-y-2">
            <p>
              TRCK is a leisure technology platform based in Nigeria. All experiences are provided by independent third-party creators.
            </p>
            <p>
              Copyright ©2025 Trck Entertainment & Technology Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
