"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, ChevronDown, ChevronRight, Users, Calendar, Users2, DollarSign, Megaphone, Check, AlertTriangle } from "lucide-react";
import { PermissionCategory } from "@/types/host-portal";
import { Footer } from "@/components/shared/footer";
import { RolePill, getRoleColor, SaveButton, CancelButton } from "@/components/host";

// API Endpoint: GET /api/host-portal/access-role-assignment/[roleId]
// API Endpoint: PUT /api/host-portal/access-role-assignment/[roleId]

const permissionCategories: PermissionCategory[] = [
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
  {
    id: "attendee-management",
    name: "Attendee Management",
    icon: "users-2",
    permissions: [
      { id: "view-attendees", name: "View all attendees", enabled: true },
      { id: "view-details", name: "View attendee details", enabled: true, requires: ["view-attendees"] },
      { id: "check-in", name: "View check-in status", enabled: true, requires: ["view-attendees"] },
      { id: "manual-validate", name: "Manual ticket validation", enabled: true, requires: ["view-attendees"] },
      { id: "issue-refunds", name: "Issue refunds", enabled: false },
      { id: "cancel-bookings", name: "Cancel bookings", enabled: false },
      { id: "export-data", name: "Export attendee data", enabled: false },
    ],
    enabledCount: 5,
    totalCount: 7,
  },
  {
    id: "financial-reporting",
    name: "Financial & Reporting",
    icon: "dollar-sign",
    permissions: [
      { id: "view-revenue", name: "View revenue reports", enabled: true },
      { id: "view-transactions", name: "View transactions", enabled: false },
      { id: "export-reports", name: "Export financial reports", enabled: false },
      { id: "manage-payouts", name: "Manage payouts", enabled: false },
      { id: "view-tax-info", name: "View tax information", enabled: false },
      { id: "manage-invoices", name: "Manage invoices", enabled: false },
      { id: "view-refunds", name: "View refund history", enabled: false },
      { id: "process-refunds", name: "Process refunds", enabled: false },
      { id: "view-discounts", name: "View discount codes", enabled: false },
      { id: "manage-discounts", name: "Manage discount codes", enabled: false },
    ],
    enabledCount: 1,
    totalCount: 10,
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: "megaphone",
    permissions: [
      { id: "view-campaigns", name: "View marketing campaigns", enabled: true },
      { id: "create-campaigns", name: "Create campaigns", enabled: true },
      { id: "edit-campaigns", name: "Edit campaigns", enabled: true },
      { id: "delete-campaigns", name: "Delete campaigns", enabled: true },
      { id: "view-analytics", name: "View marketing analytics", enabled: false },
      { id: "manage-social", name: "Manage social media", enabled: false },
      { id: "send-emails", name: "Send email campaigns", enabled: false },
      { id: "manage-segments", name: "Manage audience segments", enabled: false },
    ],
    enabledCount: 4,
    totalCount: 8,
  },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "calendar":
      return <Calendar className="h-5 w-5" />;
    case "users":
      return <Users className="h-5 w-5" />;
    case "users-2":
      return <Users2 className="h-5 w-5" />;
    case "dollar-sign":
      return <DollarSign className="h-5 w-5" />;
    case "megaphone":
      return <Megaphone className="h-5 w-5" />;
    default:
      return <Users className="h-5 w-5" />;
  }
};

export default function AccessRoleAssignmentPage() {
  const [categories, setCategories] = useState<PermissionCategory[]>(permissionCategories);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [permissionsDropdownOpen, setPermissionsDropdownOpen] = useState(false);
  const [selectedPermissionFilter, setSelectedPermissionFilter] = useState("All Permissions");

  // Dummy role data - will be fetched from API
  const roleData = {
    name: "Manager",
    memberCount: 3,
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const toggleAllInCategory = (categoryId: string) => {
    setCategories((prev) =>
      prev.map((cat) => {
        if (cat.id === categoryId) {
          const allEnabled = cat.enabledCount === cat.totalCount;
          const newPermissions = cat.permissions.map((perm) => ({
            ...perm,
            enabled: !allEnabled,
          }));
          return {
            ...cat,
            permissions: newPermissions,
            enabledCount: allEnabled ? 0 : cat.totalCount,
          };
        }
        return cat;
      })
    );
  };

  const togglePermission = (categoryId: string, permissionId: string) => {
    setCategories((prev) =>
      prev.map((cat) => {
        if (cat.id === categoryId) {
          const newPermissions = cat.permissions.map((perm) =>
            perm.id === permissionId ? { ...perm, enabled: !perm.enabled } : perm
          );
          const enabledCount = newPermissions.filter((p) => p.enabled).length;
          return {
            ...cat,
            permissions: newPermissions,
            enabledCount,
          };
        }
        return cat;
      })
    );
  };

  const handleSave = async () => {
    // API Call: PUT /api/host-portal/access-role-assignment/[roleId]
    // await updateRolePermissions(roleId, categories);
    console.log("Saving permissions:", categories);
  };

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.permissions.some((perm) => perm.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/host-portal" className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold">Access Role Assignment</h1>
      </div>

      {/* Role Permissions Section */}
      <div className="bg-[#ED5A2E] border border-white/10 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-white">Role Permissions</h2>
            <span 
              className="text-sm font-semibold"
              style={{ color: roleData.name === "Manager" ? "#CB30E0" : "#ED5A2E" }}
            >
              {roleData.memberCount} members with this role
            </span>
          </div>
          <div className="flex items-center gap-3">
            <RolePill role={roleData.name.toLowerCase() as any} />
            <button className="border border-white text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
              View Members
            </button>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs">:</span>
            </div>
            <AlertTriangle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-white mb-1">
                Changes affect all members with this role
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
          <input
            type="text"
            placeholder="Search by name or employee ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-[#ED5A2E] rounded-full py-3 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ED5A2E] transition-colors"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setPermissionsDropdownOpen(!permissionsDropdownOpen)}
            className="bg-[#F37656] hover:bg-[#e06545] w-[246px] h-[40px] rounded-[12px] text-sm font-semibold text-white transition-colors flex items-center justify-center gap-2"
          >
            {selectedPermissionFilter}
            <ChevronDown className="h-4 w-4" />
          </button>

          {permissionsDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl py-2 min-w-[180px] z-50 shadow-xl">
              <button
                onClick={() => {
                  setSelectedPermissionFilter("All Permissions");
                  setPermissionsDropdownOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors"
              >
                All Permissions
              </button>
              <button
                onClick={() => {
                  setSelectedPermissionFilter("Event Management");
                  setPermissionsDropdownOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors"
              >
                Event Management
              </button>
              <button
                onClick={() => {
                  setSelectedPermissionFilter("Team Management");
                  setPermissionsDropdownOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors"
              >
                Team Management
              </button>
              <button
                onClick={() => {
                  setSelectedPermissionFilter("Attendee Management");
                  setPermissionsDropdownOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors"
              >
                Attendee Management
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Permission Categories */}
      <div className="space-y-4 mb-8">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white/20 border border-white/10 rounded-2xl overflow-hidden"
          >
            {/* Category Header */}
            <div
              className="p-5 cursor-pointer hover:bg-white/10 transition-colors"
              onClick={() => toggleCategory(category.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                    <p className="text-white/60 text-sm">
                      {category.enabledCount} of {category.totalCount}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAllInCategory(category.id);
                    }}
                    className="relative w-12 h-6 bg-white/10 rounded-full transition-colors hover:bg-white/20"
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full transition-all ${
                        category.enabledCount === category.totalCount
                          ? "left-7 bg-[#ED5A2E]"
                          : "left-1 bg-white/60"
                      }`}
                    />
                  </button>
                  <ChevronRight
                    className={`h-5 w-5 text-[#ED5A2E] transition-transform ${
                      expandedCategories.has(category.id) ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Expanded Permissions */}
            {expandedCategories.has(category.id) && (
              <div className="border-t border-white/10 p-5 space-y-3">
                {category.permissions.map((permission) => (
                  <div key={permission.id} className="flex items-start gap-3">
                    <button
                      onClick={() => togglePermission(category.id, permission.id)}
                      className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        permission.enabled
                          ? "border-[#ED5A2E] bg-[#ED5A2E]"
                          : "border-white/20 hover:border-white/40"
                      }`}
                    >
                      {permission.enabled && <Check className="h-3 w-3 text-white" />}
                    </button>
                    <div className="flex-1">
                      <p
                        className={`text-sm ${
                          permission.enabled ? "text-white" : "text-white/40"
                        }`}
                      >
                        {permission.name}
                      </p>
                      {permission.requires && permission.requires.length > 0 && (
                        <p className="text-xs text-white/30 mt-1">
                          Requires: {permission.requires.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <CancelButton className="w-[176px] h-[46px] rounded-[8px] text-lg" />
        <SaveButton 
          onClick={handleSave}
          className="w-[160px] h-[48px] rounded-[8px] text-lg"
        >
          Save
        </SaveButton>
      </div>
      <Footer />
    </div>
  );
}
