import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    profile: {
      fullName: "John D",
      email: "Johndoe@email.com",
      emailVerified: true,
      age: "",
      phone: { code: "+234", number: "34 1234 567 890" },
      phoneVerified: false,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
      role: "HOST",
      username: "JohnDoe2025",
      displayName: "John Doe",
      memberSince: "4th July, 2025",
    },
    accountSettings: {
      username: "JohnDoe2025",
      password: "••••••••••",
      language: "Nigeria",
      timezone: "",
    },
    locationPreferences: {
      currentCity: "",
      eventsDistance: "",
      interests: [],
      priceRange: "",
    },
    notifications: {
      sms: true,
      newsletter: true,
      email: true,
      marketing: false,
    },
    paymentInfo: {
      cardNumber: "0000 0000 0000 0000",
      cardHolder: "John Doe",
      expirationDate: "09/30",
      cvv: "965",
    },
  });
}
