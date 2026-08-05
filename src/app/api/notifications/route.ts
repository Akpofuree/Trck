import { NextResponse } from "next/server";

export async function GET() {
  const notifications = {
    today: [
      { id: "t1", text: "Your Sid4f & crystal events ticket has been sent to dominic", subtext: "@example.com", timeAgo: "2 hrs ago" },
      { id: "t2", text: "Your Sid4f & crystal events ticket has been sent to dominic", subtext: "@example.com", timeAgo: "2 hrs ago" },
      { id: "t3", text: "Your Sid4f & crystal events ticket has been sent to dominic", subtext: "@example.com", timeAgo: "2 hrs ago" },
    ],
    yesterday: [
      { id: "y1", text: "Your Sid4f & crystal events ticket has been sent to dominic", subtext: "@example.com", timeAgo: "2 hrs ago" },
      { id: "y2", text: "Your Sid4f & crystal events ticket has been sent to dominic", subtext: "@example.com", timeAgo: "2 hrs ago" },
      { id: "y3", text: "Your Sid4f & crystal events ticket has been sent to dominic", subtext: "@example.com", timeAgo: "2 hrs ago" },
    ],
  };

  return NextResponse.json(notifications);
}
