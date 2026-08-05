import { NextResponse } from "next/server";

export async function GET() {
  const tickets = [
    { id: "1", title: "Side & Crystal Events", date: "05/18/2025", status: "Pending" },
    { id: "2", title: "Side & Crystal Events", date: "05/18/2025", status: "Pending" },
    { id: "3", title: "Side & Crystal Events", date: "05/18/2025", status: "Pending" },
    { id: "4", title: "Side & Crystal Events", date: "05/18/2025", status: "Pending" },
    { id: "5", title: "Side & Crystal Events", date: "05/18/2025", status: "Pending" },
    { id: "6", title: "Side & Crystal Events", date: "05/18/2025", status: "Pending" },
    { id: "7", title: "Side & Crystal Events", date: "05/18/2025", status: "Pending" },
    { id: "8", title: "Side & Crystal Events", date: "05/18/2025", status: "Pending" },
    { id: "9", title: "Side & Crystal Events", date: "05/18/2025", status: "Pending" },
  ];

  return NextResponse.json({ tickets });
}
