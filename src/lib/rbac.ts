import type { UserRole } from "./routes";

export type Permission =
  | "browse-events"
  | "manage-own-bookings"
  | "manage-events"
  | "manage-team"
  | "manage-payouts"
  | "manage-platform";

const permissions: Record<UserRole, readonly Permission[]> = {
  attendee: ["browse-events", "manage-own-bookings"],
  host: ["browse-events", "manage-events", "manage-team", "manage-payouts"],
  admin: ["browse-events", "manage-events", "manage-team", "manage-payouts", "manage-platform"],
};

export function hasPermission(role: UserRole | undefined, permission: Permission) {
  return Boolean(role && permissions[role].includes(permission));
}

export function getPermissions(role: UserRole | undefined) {
  return role ? permissions[role] : [];
}
