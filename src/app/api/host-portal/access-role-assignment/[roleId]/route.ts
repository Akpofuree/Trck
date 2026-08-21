import { NextResponse } from "next/server";
import { PermissionCategory } from "@/types/host-portal";

// GET /api/host-portal/access-role-assignment/[roleId]
// Fetch role permissions for a specific role
export async function GET(
  request: Request,
  { params }: { params: Promise<{ roleId: string }> }
) {
  const { roleId } = await params;
  
  const dummyPermissions: PermissionCategory[] = [
    {
      id: "event-management",
      name: "Event Management",
      icon: "calendar",
      permissions: [
        { id: "view-events", name: "View all events", enabled: true },
        { id: "create-events", name: "Create new events", enabled: true, requires: ["view-events"] },
        { id: "edit-events", name: "Edit event details", enabled: true, requires: ["view-events"] },
        { id: "delete-events", name: "Delete events", enabled: true, requires: ["view-events"] },
        { id: "view-analytics", name: "View event analytics", enabled: true, requires: ["view-events"] },
        { id: "manage-tickets", name: "Manage ticket types", enabled: true, requires: ["view-events"] },
      ],
      enabledCount: 6,
      totalCount: 6,
    },
    {
      id: "team-management",
      name: "Team Management",
      icon: "users",
      permissions: [
        { id: "view-team", name: "View all team members", enabled: true },
        { id: "view-activity", name: "View team activity log", enabled: true, requires: ["view-team"] },
        { id: "invite-members", name: "Invite team members", enabled: true, requires: ["view-team"] },
        { id: "manage-roles", name: "Manage team roles", enabled: false, requires: ["view-team"] },
      ],
      enabledCount: 3,
      totalCount: 4,
    },
  ];

  return NextResponse.json({ roleId, permissions: dummyPermissions });
}

// PUT /api/host-portal/access-role-assignment/[roleId]
// Update role permissions
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ roleId: string }> }
) {
  try {
    const { roleId } = await params;
    const body = await request.json();
    
    return NextResponse.json({ success: true, message: "Permissions updated", data: body, roleId });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to update permissions" }, { status: 400 });
  }
}
