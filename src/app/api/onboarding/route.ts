import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    steps: [
      {
        step: 1,
        title: "Your city has more to offer.",
        subtitle: "Find hidden gems, premium events, and unique hangouts made for you.",
        graphic: "/onboarding-cards.png",
      },
      {
        step: 2,
        title: "More than events, it's your lifestyle",
        subtitle: "From concerts to chill spots, from solo adventures to group hangouts — Trck brings experiences to life.",
        graphic: "/onboarding-friends.png",
      },
      {
        step: 3,
        title: "Choose your journey.",
        subtitle: "Are you here to explore events, or to create them?",
        options: [
          { id: "explorer", title: "Explorer", desc: "Discover and book experiences" },
          { id: "host", title: "Host", desc: "Create, share & manage events" },
          { id: "admin", title: "Admin", desc: "Manage and oversee activities" },
        ],
      },
      {
        step: 4,
        title: "Let's get to know you",
        subtitle: "Select what excites you most, so we can show you the best experiences.",
        interests: [
          { id: "party", label: "Party" },
          { id: "food", label: "Food" },
          { id: "arts", label: "Arts" },
          { id: "adventure", label: "Adventure" },
          { id: "chill", label: "Chill" },
          { id: "networking", label: "Networking" },
        ],
      },
    ],
  };

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({ success: true, message: "Onboarding preferences saved", data: body });
  } catch {
    return NextResponse.json({ success: false, message: "Invalid payload" }, { status: 400 });
  }
}
