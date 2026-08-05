import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    hero: {
      titleLine1: "5IVE AT",
      titleLine2Part1: "02",
      titleLine2Part2: "ARENA",
      stars: 3,
      subtitle: "13-15 APRIL 2026, LEGEND SIAM - PATTAYA",
      ctaText: "GET TICKETS",
    },
    featureCards: [
      {
        id: "fc-1",
        title: "Pvc For Cate Even Home",
        description: "",
      },
      {
        id: "fc-2",
        title: "Pvc For Cate Even at the Home",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
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
        title: "Browse Available VIP Packages",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&auto=format&fit=crop&q=80",
      },
      {
        id: "vip-2",
        category: "Meet & Greets, Special Access",
        title: "Browse Available VIP Packages",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80",
      },
      {
        id: "vip-3",
        category: "Meet & Greets, Special Access",
        title: "Browse Available VIP Packages",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=80",
      },
    ],
    trendingEvents: [
      {
        id: "trend-1",
        title: "Alan Jackson One stop ho...",
        date: "Oct 17",
        price: "From $166",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80",
      },
      {
        id: "trend-2",
        title: "Alan Jackson One stop ho...",
        date: "Oct 17",
        price: "From $166",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80",
      },
      {
        id: "trend-3",
        title: "Alan Jackson One stop ho...",
        date: "Oct 17",
        price: "From $166",
        image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc436?w=600&auto=format&fit=crop&q=80",
      },
    ],
    categories: [
      "Design Workshops",
      "Design",
      "Designer",
      "Design",
      "Design gigs",
      "Design Multiply",
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

  return NextResponse.json(data);
}
