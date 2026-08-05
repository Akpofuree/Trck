import { NextResponse } from "next/server";

export async function GET() {
  const events = [
    {
      id: "sample-event",
      title: "Summer Music Festival 2024",
      organizer: "Trck Entertainment",
      date: "Saturday, August 24, 2024",
      time: "4:00 PM - 11:00 PM WAT",
      location: "O2 Arena, Victoria Island, Lagos",
      price: "$150.00",
      category: "Music",
      description: "Join us for an unforgettable night of music, art, and food. Featuring top international and local artists across two stages.",
      image: "/carnival-hero-bg.jpg",
      ticketsAvailable: 450,
      tags: ["Music", "Festival", "Nightlife", "Lagos"],
    },
    {
      id: "evt-hiphop-200s",
      title: "200s Hip Hop Night",
      organizer: "Mansory Club",
      date: "Friday, August 31, 2024",
      time: "9:00 PM - 4:00 AM WAT",
      location: "Mansory, Ikoyi, Lagos",
      price: "$50.00",
      category: "Nightlife",
      description: "Throwback 200s Hip Hop night with DJ sets, cocktails, and VIP tables.",
      image: "/carnival-hero-bg.jpg",
      ticketsAvailable: 120,
      tags: ["Party", "Hip Hop", "Nightlife"],
    },
  ];

  return NextResponse.json({ events });
}
