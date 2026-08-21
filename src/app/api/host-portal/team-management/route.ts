import { NextResponse } from "next/server";
import { TeamMember, TeamSummary, PendingInvitation } from "@/types/host-portal";

// GET /api/host-portal/team-management
// Fetch team members, summary data, and pending invitations
export async function GET() {
  // TODO: Replace with actual database query
  // const data = await db.teamManagement.findMany();
  
  const dummyData = {
    members: [
      {
        id: "1",
        name: "John Doe",
        email: "johndoe@gmail.com",
        role: "Manager",
        status: "Active",
        lastActive: "3 hours ago",
        eventCount: 1,
        permissions: ["Manage assigned events"],
      },
      {
        id: "2",
        name: "Jane Smith",
        email: "janesmith@gmail.com",
        role: "Staff",
        status: "Pending",
        lastActive: "Invited 2 days ago",
        eventCount: 1,
        permissions: ["Event support"],
      },
    ] as TeamMember[],
    summary: {
      totalMembers: 8,
      pendingInvitations: 2,
      activeEvents: 3,
      planSeats: 8,
      planTotal: 10,
      planName: "Pro Plan",
    } as TeamSummary,
    pendingInvitations: [
      {
        id: "inv1",
        email: "johndoe@gmail.com",
        role: "Staff",
        sentDate: "Sent 2 days ago",
        expires: "Expires in 5 days",
      },
      {
        id: "inv2",
        email: "manager@example.com",
        role: "Manager",
        sentDate: "Sent 4 days ago",
        expires: "Expires in 3 days",
      },
    ] as PendingInvitation[],
  };

  return NextResponse.json(dummyData);
}

// POST /api/host-portal/team-management
// Add new team member
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // TODO: Replace with actual database insertion
    // const newMember = await db.teamManagement.create({ data: body });
    
    return NextResponse.json({ success: true, message: "Team member added", data: body });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to add team member" }, { status: 400 });
  }
}
