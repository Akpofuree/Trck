import { NextResponse } from "next/server";

export async function GET() {
  const checkoutDetails = {
    orderId: "ORD-984210",
    eventTitle: "Summer Music Festival 2024",
    ticketType: "VIP Access",
    quantity: 2,
    pricePerTicket: 150,
    serviceFee: 15,
    total: 315,
    holderName: "Dominion Ogbaji",
    holderEmail: "domlogbaji@gmail.com",
    holderPhone: "+234 812 345 6789",
  };

  return NextResponse.json(checkoutDetails);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      message: "Order placed successfully",
      orderId: "ORD-" + Math.floor(100000 + Math.random() * 900000),
      data: body,
    });
  } catch {
    return NextResponse.json({ success: false, message: "Checkout failed" }, { status: 400 });
  }
}
