"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  MapPin,
  Heart,
  X,
} from "lucide-react";
import { Logo } from "@/components/shared/logo";

type EventItem = {
  id: string;
  title: string;
  organizer?: string;
  date: string;
  time?: string;
  location: string;
  price: string;
  category: string;
  description?: string;
  image: string;
  ticketsAvailable?: number;
  tags?: string[];
};

type FilterState = {
  dateRange: string;
  location: string;
  withinMiles: number;
  minPrice: string;
  maxPrice: string;
  eventTypes: string[];
  moreFilters: string[];
};

const categories = [
  "All Categories",
  "Music & Concerts",
  "Business & Marketing",
  "Arts & Culture",
  "Sports & Fitness",
  "Learning & Workshops",
  "Entertainment",
  "Food & Drinks",
];

const dateRanges = ["Today", "Tomorrow", "This Week", "This Month", "Custom"];
const eventTypes = ["In-Person", "Virtual", "Hybrid"];
const moreFilterLabels = ["Parking Space", "Wheelchair Accessible", "Family Friendly"];
const pageSize = 9;

function parseCurrency(value: string) {
  const cleaned = value.replace(/[^0-9.]/g, "");
  return Number(cleaned || 0);
}

export function EventListingPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Date");
  const [activePage, setActivePage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    dateRange: "This Month",
    location: "Lagos, Nigeria",
    withinMiles: 50,
    minPrice: "0",
    maxPrice: "1000000",
    eventTypes: ["In-Person"],
    moreFilters: ["Parking Space"],
  });

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/events");
        if (res.ok) {
          const json = await res.json();
          setEvents(json.events ?? []);
        }
      } catch (error) {
        console.error("Failed to load events", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filteredEvents = useMemo(() => {
    const q = query.trim().toLowerCase();
    return events
      .filter((event) => {
        const matchesQuery =
          !q ||
          [event.title, event.location, event.category, event.organizer, ...(event.tags ?? [])]
            .filter(Boolean)
            .some((value) => String(value).toLowerCase().includes(q));
        const matchesCategory =
          category === "All Categories" ||
          event.category.toLowerCase().includes(category.toLowerCase().split(" & ")[0]);
        const matchesPrice =
          parseCurrency(event.price) >= Number(filters.minPrice || 0) &&
          parseCurrency(event.price) <= Number(filters.maxPrice || Number.MAX_SAFE_INTEGER);
        return matchesQuery && matchesCategory && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === "Price") {
          return parseCurrency(a.price) - parseCurrency(b.price);
        }
        return a.date.localeCompare(b.date);
      });
  }, [events, query, category, sortBy, filters.minPrice, filters.maxPrice]);

  const totalPages = Math.max(1, Math.ceil(filteredEvents.length / pageSize));
  const currentPageEvents = filteredEvents.slice(
    (activePage - 1) * pageSize,
    activePage * pageSize
  );

  const toggleEventType = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      eventTypes: prev.eventTypes.includes(value)
        ? prev.eventTypes.filter((item) => item !== value)
        : [...prev.eventTypes, value],
    }));
  };

  const toggleMoreFilter = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      moreFilters: prev.moreFilters.includes(value)
        ? prev.moreFilters.filter((item) => item !== value)
        : [...prev.moreFilters, value],
    }));
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <header className="border-b border-white/8 bg-white text-gray-900">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-5">
            <Link href="/" className="inline-flex shrink-0 items-center">
              <Logo width={100} height={36} className="h-7 w-auto" />
            </Link>

            <div className="relative hidden min-w-0 w-[460px] md:block">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search event..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 text-[0.92rem] text-gray-900 outline-none placeholder:text-gray-500 focus:border-[#ED5A2E] focus:ring-2 focus:ring-[#ED5A2E]/20"
              />
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <button
              onClick={() => setFiltersOpen(true)}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#f4f4f4] px-4 py-2.5 text-[0.9rem] font-medium text-gray-700 hover:bg-gray-100"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </button>

            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none rounded-full bg-[#ED5A2E] px-5 py-2.5 pr-11 text-[0.9rem] font-medium text-white outline-none"
              >
                {categories.map((item) => (
                  <option key={item} value={item} className="bg-white text-gray-900">
                    {item}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
            </div>

            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ED5A2E] text-[0.95rem] font-bold text-white">
              D
            </button>
          </div>
        </div>

        <div className="border-t border-gray-100 px-4 py-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search event..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 text-[0.92rem] text-gray-900 outline-none placeholder:text-gray-500 focus:border-[#ED5A2E] focus:ring-2 focus:ring-[#ED5A2E]/20"
            />
          </div>
        </div>
      </header>

      <main className="bg-white text-gray-900">
        <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-[1.9rem] font-semibold tracking-tight text-gray-900 sm:text-[2.35rem]">
                {query ? `Showing Results for “${query}”` : "Trending Events"}
              </h1>
              <p className="mt-1 text-[0.92rem] text-gray-600">
                Found {filteredEvents.length || events.length} events
              </p>
            </div>

            {query ? (
              <div className="flex items-center gap-3">
                <span className="text-[0.95rem] text-gray-600">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none rounded-full bg-[#f4f4f4] px-6 py-2.5 pr-12 text-[0.95rem] text-gray-800 outline-none"
                  >
                    <option>Date</option>
                    <option>Price</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                </div>
              </div>
            ) : null}
          </div>

          {query ? (
            <div className="mb-8 rounded-2xl bg-[#f3f3f3] px-6 py-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[0.95rem] text-gray-700">Active Filters:</span>
                {[filters.dateRange, category, filters.location, `Within ${filters.withinMiles} miles`].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-[0.92rem] text-gray-700"
                  >
                    {item}
                    <button
                      type="button"
                      onClick={() => {
                        if (item === category) setCategory("All Categories");
                        if (item === filters.dateRange) setFilters((prev) => ({ ...prev, dateRange: "" }));
                        if (item === filters.location) setFilters((prev) => ({ ...prev, location: "" }));
                      }}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </span>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    setFilters({
                      dateRange: "This Month",
                      location: "Lagos, Nigeria",
                      withinMiles: 50,
                      minPrice: "0",
                      maxPrice: "1000000",
                      eventTypes: ["In-Person"],
                      moreFilters: ["Parking Space"],
                    })
                  }
                  className="ml-auto text-[0.92rem] text-gray-600 underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          ) : (
            <div className="mb-8">
              <h2 className="text-[1.7rem] font-semibold tracking-tight text-gray-900">
                Trending Events
              </h2>
              <p className="mt-1 text-[0.92rem] text-gray-600">Showing {events.length || 0} events</p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {(loading ? Array.from({ length: pageSize }) : currentPageEvents).map((event: EventItem, index) => {
              if (loading) {
                return <div key={index} className="h-[320px] rounded-[20px] bg-gray-100 animate-pulse" />;
              }

              return (
                <article key={event.id} className="overflow-hidden rounded-[20px] bg-[#f6764f] shadow-sm">
                  <div className="relative h-[220px] bg-black">
                    <Image src={event.image} alt={event.title} fill className="object-cover" unoptimized />
                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[0.7rem] font-medium text-gray-900">
                      {event.category}
                    </span>
                    <span className="absolute right-3 top-3 rounded-lg bg-white/95 px-2 py-1 text-center text-[0.7rem] font-semibold text-gray-700">
                      {event.date.slice(0, 3).toUpperCase()}
                      <br />
                      {event.date.match(/\d+/)?.[0] ?? ""}
                    </span>
                  </div>

                  <div className="p-4 text-white">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[1rem] font-medium leading-tight">{event.title}</h3>
                      <button className="text-white/90 hover:text-white">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-[0.82rem] text-white/90">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{event.location}</span>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-[0.82rem] font-medium">{event.price}</span>
                      <button className="rounded-full bg-white px-4 py-1.5 text-[0.82rem] font-medium text-gray-800">
                        Book Now
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-5 text-[0.98rem] text-gray-700">
            <button
              type="button"
              onClick={() => setActivePage((prev) => Math.max(1, prev - 1))}
              disabled={activePage === 1}
              className="disabled:opacity-40"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }).slice(0, 5).map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => setActivePage(page)}
                  className={`h-8 w-8 rounded-full ${activePage === page ? "bg-[#ED5A2E] text-white" : "text-gray-700"}`}
                >
                  {page}
                </button>
              );
            })}
            {totalPages > 6 ? <span>...</span> : null}
            {totalPages > 5 ? <button type="button" className="text-gray-700">{totalPages}</button> : null}
            <button
              type="button"
              onClick={() => setActivePage((prev) => Math.min(totalPages, prev + 1))}
              disabled={activePage === totalPages}
              className="disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-black px-6 py-12 text-white lg:px-16 border-t border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 pb-12 border-b border-white/10">
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">Contact</h4>
              <p className="text-[0.88rem] font-semibold text-[#ED5A2E] mb-4">info@getontrck.com</p>
              <p className="text-[0.88rem] text-white/70">Follow the brand across the channels you already know.</p>
            </div>
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">Company</h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li><Link href="#" className="hover:text-white">About Us</Link></li>
                <li><Link href="#" className="hover:text-white">How it works</Link></li>
                <li><Link href="#" className="hover:text-white">Features</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">Legal</h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li><Link href="/privacy" className="hover:text-white">Privacy policy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms of service</Link></li>
                <li><Link href="#" className="hover:text-white">Acceptable use policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">Support</h4>
              <ul className="space-y-2.5 text-[0.85rem] text-white/70">
                <li><Link href="#" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 text-[0.76rem] text-white/40 leading-relaxed space-y-2">
            <p>
              TRCK is a leisure technology platform based in Nigeria. All experiences are provided by independent third-party creators.
            </p>
            <p>Copyright ©2025 Trck Entertainment &amp; Technology Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {filtersOpen ? (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="absolute left-0 top-0 h-full w-full max-w-[390px] bg-white text-gray-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <h3 className="text-[1.05rem] font-semibold">All Filters</h3>
              <button onClick={() => setFiltersOpen(false)} className="rounded-full p-2 hover:bg-gray-100">
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="h-[calc(100%-65px)] overflow-y-auto px-5 py-4">
              <div className="space-y-6">
                <section>
                  <h4 className="mb-3 text-[0.9rem] font-semibold text-gray-900">Date Range</h4>
                  <div className="space-y-2">
                    {dateRanges.map((item) => (
                      <label key={item} className="flex items-center gap-3 text-[0.88rem] text-gray-700">
                        <input
                          type="radio"
                          name="dateRange"
                          checked={filters.dateRange === item}
                          onChange={() => setFilters((prev) => ({ ...prev, dateRange: item }))}
                          className="h-4 w-4 accent-[#ED5A2E]"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </section>

                <section className="border-t border-gray-100 pt-5">
                  <h4 className="mb-3 text-[0.9rem] font-semibold text-gray-900">Location</h4>
                  <input
                    value={filters.location}
                    onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[0.88rem] outline-none focus:border-[#ED5A2E]"
                  />
                  <div className="mt-4">
                    <div className="mb-2 flex items-center justify-between text-[0.8rem] text-gray-600">
                      <span>Within 50 miles</span>
                      <span>{filters.withinMiles} miles</span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={100}
                      value={filters.withinMiles}
                      onChange={(e) => setFilters((prev) => ({ ...prev, withinMiles: Number(e.target.value) }))}
                      className="w-full accent-[#ED5A2E]"
                    />
                  </div>
                </section>

                <section className="border-t border-gray-100 pt-5">
                  <h4 className="mb-3 text-[0.9rem] font-semibold text-gray-900">Price Range</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      value={filters.minPrice}
                      onChange={(e) => setFilters((prev) => ({ ...prev, minPrice: e.target.value }))}
                      className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[0.88rem] outline-none focus:border-[#ED5A2E]"
                      placeholder="Min"
                    />
                    <input
                      value={filters.maxPrice}
                      onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))}
                      className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[0.88rem] outline-none focus:border-[#ED5A2E]"
                      placeholder="Max"
                    />
                  </div>
                  <p className="mt-3 text-[0.8rem] text-gray-500">
                    What you see is what you pay, with all fees included.
                  </p>
                </section>

                <section className="border-t border-gray-100 pt-5">
                  <h4 className="mb-3 text-[0.9rem] font-semibold text-gray-900">Event Type</h4>
                  <div className="space-y-2">
                    {eventTypes.map((item) => (
                      <label key={item} className="flex items-center justify-between text-[0.88rem] text-gray-700">
                        <span>{item}</span>
                        <input
                          type="checkbox"
                          checked={filters.eventTypes.includes(item)}
                          onChange={() => toggleEventType(item)}
                          className="h-4 w-4 accent-[#ED5A2E]"
                        />
                      </label>
                    ))}
                  </div>
                </section>

                <section className="border-t border-gray-100 pt-5">
                  <h4 className="mb-3 text-[0.9rem] font-semibold text-gray-900">More Filters</h4>
                  <div className="space-y-2">
                    {moreFilterLabels.map((item) => (
                      <label key={item} className="flex items-center justify-between text-[0.88rem] text-gray-700">
                        <span>{item}</span>
                        <input
                          type="checkbox"
                          checked={filters.moreFilters.includes(item)}
                          onChange={() => toggleMoreFilter(item)}
                          className="h-4 w-4 accent-[#ED5A2E]"
                        />
                      </label>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <div className="border-t border-gray-200 p-4">
              <button
                onClick={() => setFiltersOpen(false)}
                className="w-full rounded-full bg-[#ED5A2E] px-4 py-3 text-[0.92rem] font-semibold text-white"
              >
                View {filteredEvents.length || events.length} listings
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
