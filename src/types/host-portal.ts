export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Admin" | "Manager" | "Staff";
  status: "Active" | "Pending" | "Inactive";
  lastActive?: string;
  eventCount?: number;
  permissions?: string[];
}

export interface RolePermission {
  id: string;
  name: string;
  enabled: boolean;
  requires?: string[];
}

export interface PermissionCategory {
  id: string;
  name: string;
  icon: string;
  permissions: RolePermission[];
  enabledCount: number;
  totalCount: number;
}

export interface RoleDefinition {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  permissions: {
    manageTeam: boolean;
    manageEvents: boolean;
    viewAnalytics: boolean;
    billingAccess: boolean;
  };
}

export interface TeamSummary {
  totalMembers: number;
  pendingInvitations: number;
  activeEvents: number;
  planSeats: number;
  planTotal: number;
  planName: string;
}

export interface PendingInvitation {
  id: string;
  email: string;
  role: string;
  sentDate: string;
  expires: string;
}
