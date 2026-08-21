"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Search, ChevronDown, MoreVertical, Plus, Link as LinkIcon, Crown, Clock, Users, Calendar, Users as Users2, Check } from "lucide-react";
import { TeamMember, TeamSummary, PendingInvitation, RoleDefinition } from "@/types/host-portal";
import { Footer } from "@/components/shared/footer";
import { RolePill, RoleCircle, getRoleColor } from "@/components/host";
import { ResendButton, CancelButton } from "@/components/host";

// API Endpoint: GET /api/host-portal/team-management
// This will be replaced with actual API call
const fetchTeamData = async (): Promise<{
  members: TeamMember[];
  summary: TeamSummary;
  pendingInvitations: PendingInvitation[];
}> => {
  // Dummy data - will be replaced with API call
  return {
    members: [
      {
        id: "1",
        name: "John Doe",
        email: "johndoe@gmail.com",
        role: "Owner",
        status: "Active",
        lastActive: "Active now",
        eventCount: 3,
        permissions: ["Full access"],
      },
      {
        id: "2",
        name: "Jane Owner",
        email: "janeowner@gmail.com",
        role: "Owner",
        status: "Active",
        lastActive: "2 hours ago",
        eventCount: 2,
        permissions: ["Full access"],
      },
      {
        id: "3",
        name: "Admin One",
        email: "admin1@gmail.com",
        role: "Admin",
        status: "Active",
        lastActive: "1 hour ago",
        eventCount: 4,
        permissions: ["Manage all aspects"],
      },
      {
        id: "4",
        name: "Admin Two",
        email: "admin2@gmail.com",
        role: "Admin",
        status: "Active",
        lastActive: "5 hours ago",
        eventCount: 3,
        permissions: ["Manage all aspects"],
      },
      {
        id: "5",
        name: "Manager One",
        email: "manager1@gmail.com",
        role: "Manager",
        status: "Active",
        lastActive: "3 hours ago",
        eventCount: 1,
        permissions: ["Manage assigned events"],
      },
      {
        id: "6",
        name: "Manager Two",
        email: "manager2@gmail.com",
        role: "Manager",
        status: "Active",
        lastActive: "6 hours ago",
        eventCount: 2,
        permissions: ["Manage assigned events"],
      },
      {
        id: "7",
        name: "Staff One",
        email: "staff1@gmail.com",
        role: "Staff",
        status: "Active",
        lastActive: "1 day ago",
        eventCount: 1,
        permissions: ["Event support"],
      },
      {
        id: "8",
        name: "Staff Two",
        email: "staff2@gmail.com",
        role: "Staff",
        status: "Pending",
        lastActive: "Invited 2 days ago",
        eventCount: 0,
        permissions: ["Event support"],
      },
    ],
    summary: {
      totalMembers: 8,
      pendingInvitations: 2,
      activeEvents: 3,
      planSeats: 8,
      planTotal: 10,
      planName: "Pro Plan",
    },
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
    ],
  };
};

const roleDefinitions: RoleDefinition[] = [
  {
    id: "owner",
    name: "Owner",
    description: "Full access to all features",
    icon: "👑",
    color: "bg-red-500",
    permissions: {
      manageTeam: true,
      manageEvents: true,
      viewAnalytics: true,
      billingAccess: true,
    },
  },
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

export default function TeamManagementPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [summary, setSummary] = useState<TeamSummary | null>(null);
  const [pendingInvitations, setPendingInvitations] = useState<PendingInvitation[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Dropdown states
  const [rolesDropdownOpen, setRolesDropdownOpen] = useState(false);
  const [statusesDropdownOpen, setStatusesDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");
  
  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Role options
  const roleOptions = ["All Roles", "Owner", "Admin", "Manager", "Staff"];
  const statusOptions = ["All Statuses", "Active", "Pending", "Inactive"];

  useEffect(() => {
    fetchTeamData().then((data) => {
      setMembers(data.members);
      setSummary(data.summary);
      setPendingInvitations(data.pendingInvitations);
      setLoading(false);
    });
  }, []);

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "All Roles" || member.role === selectedRole;
    const matchesStatus = selectedStatus === "All Statuses" || member.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link href="/host-portal" className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold">Team Management</h1>
          </div>
          <div className="flex gap-3">
            <button className="bg-[#ED5A2E] hover:bg-[#d4501f] w-[225px] h-[38px] rounded-[8px] text-sm font-semibold transition-colors flex items-center justify-center gap-2">
              <Plus className="h-4 w-4" />
              Add team member
            </button>
            <button className="bg-white/10 hover:bg-white/20 w-[225px] h-[38px] rounded-[8px] text-sm font-semibold transition-colors flex items-center justify-center gap-2">
              <LinkIcon className="h-4 w-4" />
              Invite via link
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      {summary && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Team Members Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-start">
            <Users className="h-5 w-5 text-white/60 mb-2" />
            <h3 className="text-lg font-semibold mb-1">Team Members</h3>
            <span className="text-2xl font-bold text-[#ED5A2E] mb-1">{summary.totalMembers}</span>
            <p className="text-sm text-white/60">{summary.pendingInvitations} pending invitations</p>
          </div>

          {/* Active Events Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-start">
            <Calendar className="h-5 w-5 text-white/60 mb-2" />
            <h3 className="text-lg font-semibold mb-1">Active Events</h3>
            <span className="text-2xl font-bold text-[#ED5A2E] mb-1">{summary.activeEvents}</span>
            <p className="text-sm text-white/60">All events covered</p>
          </div>

          {/* Team Plan Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-start">
            <Users2 className="h-5 w-5 text-white/60 mb-2" />
            <h3 className="text-lg font-semibold mb-1">Team Plan</h3>
            <span className="text-2xl font-bold text-[#ED5A2E] mb-1">
              {summary.planSeats}/{summary.planTotal}
            </span>
            <p className="text-sm text-white/60">
              {summary.planName} - {summary.planTotal - summary.planSeats} seats left
            </p>
          </div>
        </div>
      )}

      {/* Search and Filter Section */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
            <input
              type="text"
              placeholder="Search by name or employee ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ED5A2E] transition-colors"
            />
          </div>

          <div className="flex gap-3">
            {/* Roles Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRolesDropdownOpen(!rolesDropdownOpen)}
                className="bg-[#ED5A2E] hover:bg-[#d4501f] w-[246px] h-[48px] rounded-[12px] text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {selectedRole}
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {rolesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl py-2 min-w-[160px] z-50 shadow-xl">
                  {roleOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedRole(option);
                        setRolesDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Statuses Dropdown */}
            <div className="relative">
              <button
                onClick={() => setStatusesDropdownOpen(!statusesDropdownOpen)}
                className="bg-[#ED5A2E] hover:bg-[#d4501f] w-[246px] h-[48px] rounded-[12px] text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {selectedStatus}
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {statusesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl py-2 min-w-[160px] z-50 shadow-xl">
                  {statusOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedStatus(option);
                        setStatusesDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Team Members List */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                {/* Circle with initials */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg"
                    style={{ backgroundColor: getRoleColor(member.role.toLowerCase() as any).bg }}
                  >
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="flex flex-row gap-1">
                    <RolePill role={member.role.toLowerCase() as any} />
                    <span className={`px-2 py-1 rounded text-xs ${
                      member.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                    }`}>
                      {member.status}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    {member.role === "Owner" && <Crown className="h-4 w-4 text-yellow-400" />}
                  </div>
                  <p className="text-white/60 text-sm mb-2">{member.email}</p>
                  <div className="flex items-center justify-between text-sm text-white/40 mb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      <span>{member.lastActive}</span>
                    </div>
                    {member.eventCount && <span>{member.eventCount} Event{member.eventCount > 1 ? 's' : ''}</span>}
                  </div>
                  {member.permissions && member.permissions.length > 0 && (
                    <p className="text-white/40 text-sm mt-2">{member.permissions[0]}</p>
                  )}
                </div>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0">
                  <MoreVertical className="h-5 w-5 text-white/60" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Role Cards */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Team Roles</h2>
        <div className="grid grid-cols-2 gap-4">
          {roleDefinitions.map((role) => (
            <div
              key={role.id}
              className="bg-white/5 border border-[#ED5A2E] rounded-2xl p-5 flex flex-col items-start"
            >
              <div className="flex items-center gap-4 mb-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: getRoleColor(role.id as any).bg }}
                >
                  <span className="text-lg">{role.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{role.name}</h3>
                  <p className="text-white/60 text-sm">1 member</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm text-white/40">
                {role.permissions.manageTeam && <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-400" />Manage team</span>}
                {role.permissions.manageEvents && <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-400" />Manage events</span>}
                {role.permissions.viewAnalytics && <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-400" />View analytics</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pending Invitations */}
      {pendingInvitations.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Pending Invitations</h2>
          <div className="space-y-4">
            {pendingInvitations.map((invitation) => (
              <div
                key={invitation.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{invitation.email}</h3>
                    <div className="w-1 h-1 rounded-full bg-white/40"></div>
                    <RolePill role={invitation.role.toLowerCase() as any} />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/40 flex items-center gap-2">
                    <p>{invitation.sentDate}</p>
                    <span>•</span>
                    <p className="text-[#FFCC00]">{invitation.expires}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-[#85D8E] hover:bg-[#76c2d1] px-4 py-2 rounded-full text-sm font-semibold text-white transition-colors">
                      Resend
                    </button>
                    <button className="px-4 py-2 rounded-full text-sm font-semibold text-[#F3A3C] border border-[#F3A3C] bg-[#F3A3C]/20 transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
