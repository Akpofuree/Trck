import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    totalBookings: 18,
    bookings: [
      { id: "b1", ticketId: "#4432758734", event: "Slate & Crystal Events", date: "12/10/2024", amount: "$500.00", status: "Sent" },
      { id: "b2", ticketId: "#4432758734", event: "Slate & Crystal Events", date: "12/10/2024", amount: "$500.00", status: "Sent" },
      { id: "b3", ticketId: "#4432758734", event: "Slate & Crystal Events", date: "12/10/2024", amount: "$500.00", status: "Sent" },
      { id: "b4", ticketId: "#4432758734", event: "Slate & Crystal Events", date: "12/10/2024", amount: "$500.00", status: "Sent" },
      { id: "b5", ticketId: "#4432758734", event: "Slate & Crystal Events", date: "12/10/2024", amount: "$500.00", status: "Sent" },
    ],
    recentActivity: [
      { id: "a1", message: "Booking confirmed for Side and Crystal Events on May 13, 2024", timeAgo: "1 day ago" },
      { id: "a2", message: "Booking confirmed for Side and Crystal Events on May 13, 2024", timeAgo: "2 day ago" },
    ],
  });
}
