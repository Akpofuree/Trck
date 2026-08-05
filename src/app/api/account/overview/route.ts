import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    user: {
      name: "Dominion Ogbaji",
      email: "domlogbaji@gmail.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    metrics: {
      totalSpent: 4000,
      paymentsDue: 2,
    },
    featuredEvent: {
      id: "evt-200s-hiphop",
      title: "200s Hip Hop Night",
      date: "FRI-31ST : 4:00PM",
      location: "Mansory",
      avatars: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      ],
    },
    tickets: [
      {
        id: "#4432758734",
        event: "Slate & Crystal Events",
        date: "12/10/2024",
        amount: "$500.00",
        status: "Sent",
      },
      {
        id: "#4432758735",
        event: "Slate & Crystal Events",
        date: "12/10/2024",
        amount: "$500.00",
        status: "Sent",
      },
      {
        id: "#4432758736",
        event: "Slate & Crystal Events",
        date: "12/10/2024",
        amount: "$500.00",
        status: "Sent",
      },
      {
        id: "#4432758737",
        event: "Slate & Crystal Events",
        date: "12/10/2024",
        amount: "$500.00",
        status: "Sent",
      },
      {
        id: "#4432758738",
        event: "Slate & Crystal Events",
        date: "12/10/2024",
        amount: "$500.00",
        status: "Sent",
      },
    ],
  };

  return NextResponse.json(data);
}
