"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Check, X as XIcon } from "lucide-react";
import { RoleDefinition } from "@/types/host-portal";
import { RolePill, getRoleColor, SaveButton } from "@/components/host";
import { RoleType } from "@/components/host/role-pill";

// API Endpoint: GET /api/host-portal/team-management/edit-member/[id]
// API Endpoint: PUT /api/host-portal/team-management/edit-member/[id]
// API Endpoint: DELETE /api/host-portal/team-management/edit-member/[id]

const roleDefinitions: RoleDefinition[] = [
  {
    id: "admin",
    name: "Admin",
    description: "Can manage all aspects",
    icon: "🔐",
    color: "bg-orange-500",
    permissions: {
      manageTeam: true,
      manageEvents: true,
      viewAnalytics: true,
      billingAccess: false,
    },
  },
  {
    id: "manager",
    name: "Manager",
    description: "Manages assigned events",
    icon: "💼",
    color: "bg-purple-500",
    permissions: {
      manageTeam: false,
      manageEvents: true,
      viewAnalytics: true,
      billingAccess: false,
    },
  },
  {
    id: "staff",
    name: "Staff",
    description: "Event support staff",
    icon: "👤",
    color: "bg-blue-500",
    permissions: {
      manageTeam: false,
      manageEvents: true,
      viewAnalytics: false,
      billingAccess: false,
    },
  },
];

export default function EditTeamMemberPage() {
  const [selectedRole, setSelectedRole] = useState("admin");
  const [selectedStatus, setSelectedStatus] = useState("active");
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);

  // Dummy member data - will be fetched from API
  const member = {
    id: "1",
    name: "John Doe",
    email: "johndoe@gmail.com",
    currentRole: "Admin",
  };

  const handleSave = async () => {
    // API Call: PUT /api/host-portal/team-management/edit-member/[id]
    // await updateMemberRole(member.id, { role: selectedRole, status: selectedStatus });
    console.log("Saving changes:", { role: selectedRole, status: selectedStatus });
  };

  const handleRemove = async () => {
    // API Call: DELETE /api/host-portal/team-management/edit-member/[id]
    // await removeMember(member.id);
    console.log("Removing member:", member.id);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/host-portal/team-management" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold">Edit Team Member</h1>
        </div>
      </div>

      {/* Team Member Info */}
      <div className="bg-[#272727] border border-white/10 rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-start gap-4">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
              style={{ backgroundColor: getRoleColor(member.currentRole.toLowerCase() as RoleType).bg }}
            >
              {member.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-1">{member.name}</h2>
              <p className="text-white/60 mb-2">{member.email}</p>
              <RolePill role={member.currentRole.toLowerCase() as RoleType} />
            </div>
          </div>
          <button
            onClick={() => setShowRemoveConfirm(!showRemoveConfirm)}
            className="w-[160px] h-[24px] rounded-[8px] border border-[#F383C2] text-[#F383C2] text-sm font-semibold transition-colors"
          >
            Remove from team
          </button>
        </div>
        
        {showRemoveConfirm && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <p className="text-sm text-white/80 mb-3">
              Are you sure you want to remove this member from the team? This action cannot be undone.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleRemove}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-full text-sm font-semibold transition-colors"
              >
                Yes, remove
              </button>
              <button
                onClick={() => setShowRemoveConfirm(false)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-semibold transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Change Role Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Change Role</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roleDefinitions.map((role) => (
            <div
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                selectedRole === role.id
                  ? "border-[#ED5A2E] bg-[#ED5A2E]/10"
                  : "border-white/10 bg-[#272727] hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{role.icon}</span>
                <h3 className="text-lg font-semibold">{role.name}</h3>
              </div>
              <p className="text-white/60 text-sm mb-4">{role.description}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  {role.permissions.manageTeam ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <XIcon className="h-4 w-4 text-red-400" />
                  )}
                  <span className={role.permissions.manageTeam ? "text-white" : "text-white/40"}>
                    Manage team
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {role.permissions.manageEvents ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <XIcon className="h-4 w-4 text-red-400" />
                  )}
                  <span className={role.permissions.manageEvents ? "text-white" : "text-white/40"}>
                    Manage events
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {role.permissions.viewAnalytics ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <XIcon className="h-4 w-4 text-red-400" />
                  )}
                  <span className={role.permissions.viewAnalytics ? "text-white" : "text-white/40"}>
                    View analytics
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {role.permissions.billingAccess ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <XIcon className="h-4 w-4 text-red-400" />
                  )}
                  <span className={role.permissions.billingAccess ? "text-white" : "text-white/40"}>
                    Billing access
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Account Status Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Account Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Active Status */}
          <div
            onClick={() => setSelectedStatus("active")}
            className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
              selectedStatus === "active"
                ? "border-[#ED5A2E] bg-[#ED5A2E]/10"
                : "border-white/10 bg-[#272727] hover:bg-white/10"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold">Active</h3>
              <div className={`w-3 h-3 rounded-full ${
                selectedStatus === "active" ? "bg-green-400" : "bg-gray-400"
              }`}></div>
            </div>
            <p className="text-white/60 text-sm">Member can access the platform</p>
          </div>

          {/* Inactive Status */}
          <div
            onClick={() => setSelectedStatus("inactive")}
            className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
              selectedStatus === "inactive"
                ? "border-[#ED5A2E] bg-[#ED5A2E]/10"
                : "border-white/10 bg-[#272727] hover:bg-white/10"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold">Inactive</h3>
              <div className={`w-3 h-3 rounded-full ${
                selectedStatus === "inactive" ? "bg-white" : "bg-gray-400"
              }`}></div>
            </div>
            <p className="text-white/60 text-sm">Member access is suspended</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/host-portal/team-management"
          className="w-full h-[48px] rounded-[4px] text-lg font-semibold text-[#F383C2] border border-[#F383C2] bg-black hover:bg-[#F383C2]/10 transition-colors flex items-center justify-center"
        >
          Cancel
        </Link>
        <SaveButton 
          onClick={handleSave}
          className="w-full h-[48px] rounded-[4px] text-lg"
        >
          Save changes
        </SaveButton>
      </div>
    </div>
  );
}
