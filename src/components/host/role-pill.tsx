export type RoleType = "owner" | "admin" | "manager" | "staff";

interface RolePillProps {
  role: RoleType;
  className?: string;
}

const roleColors = {
  owner: {
    bg: "#ED5A2E",
    bgLight: "#ED5A2E20",
    border: "#ED5A2E",
    text: "#ED5A2E",
  },
  admin: {
    bg: "#FF3E3C",
    bgLight: "#FF3E3C20",
    border: "#FF3E3C",
    text: "#FF3E3C",
  },
  manager: {
    bg: "#CB30E0",
    bgLight: "#CB30E020",
    border: "#CB30E0",
    text: "#CB30E0",
  },
  staff: {
    bg: "#00EEFF",
    bgLight: "#00EEFF20",
    border: "#00EEFF",
    text: "#00EEFF",
  },
};

export function RolePill({ role, className = "" }: RolePillProps) {
  const colors = roleColors[role];
  const roleLabel = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <span
      className={`inline-block px-2 py-1 rounded text-sm font-semibold ${className}`}
      style={{
        backgroundColor: colors.bgLight,
        color: colors.text,
        border: `1px solid ${colors.border}`,
      }}
    >
      {roleLabel}
    </span>
  );
}

export function RoleCircle({ role, size = 12 }: { role: RoleType; size?: number }) {
  const colors = roleColors[role];

  return (
    <div
      className="rounded-full flex items-center justify-center"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: colors.bg,
      }}
    />
  );
}

export function getRoleColor(role: RoleType) {
  return roleColors[role];
}
