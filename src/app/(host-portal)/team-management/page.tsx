"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  ChevronDown,
  MoreVertical,
  Plus,
  Link as LinkIcon,
  Crown,
  Key,
  Briefcase,
  User,
  Check,
  X,
  Clock,
  Users,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/shared/footer";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Admin" | "Manager" | "Staff";
  status: "Active" | "Inactive" | "Pending" | "Deactivated";
  description: string;
  lastActive: string;
  eventsCount: string;
  avatarBg: string;
}

const INITIAL_MEMBERS: TeamMember[] = [
  {
    id: "mem-1",
    name: "John Doe",
    email: "Johndoe@gmail.com",
    role: "Owner",
    status: "Active",
    description: "Full access to everything",
    lastActive: "Active now",
    eventsCount: "All Events",
    avatarBg: "bg-[#ED5A2E]",
  },
  {
    id: "mem-2",
    name: "John Doe",
    email: "Johndoe@gmail.com",
    role: "Admin",
    status: "Active",
    description: "Can manage everything",
    lastActive: "1 Hour ago",
    eventsCount: "All Events",
    avatarBg: "bg-[#EF4444]",
  },
  {
    id: "mem-3",
    name: "John Doe",
    email: "Johndoe@gmail.com",
    role: "Manager",
    status: "Active",
    description: "Manages assigned events",
    lastActive: "Active now",
    eventsCount: "2 Events",
    avatarBg: "bg-[#A855F7]",
  },
  {
    id: "mem-4",
    name: "John Doe",
    email: "Johndoe@gmail.com",
    role: "Staff",
    status: "Active",
    description: "Event support staff",
    lastActive: "Yesterday",
    eventsCount: "1 Event",
    avatarBg: "bg-[#3B82F6]",
  },
  {
    id: "mem-5",
    name: "John Doe",
    email: "Johndoe@gmail.com",
    role: "Manager",
    status: "Active",
    description: "Manages assigned events",
    lastActive: "3 hours ago",
    eventsCount: "1 Event",
    avatarBg: "bg-[#A855F7]",
  },
  {
    id: "mem-6",
    name: "John Doe",
    email: "Johndoe@gmail.com",
    role: "Staff",
    status: "Pending",
    description: "Invitation pending",
    lastActive: "Invited 2 days ago",
    eventsCount: "1 Event",
    avatarBg: "bg-[#3B82F6]",
  },
];

const ROLE_CARDS = [
  {
    id: "owner",
    name: "Owner",
    membersCount: "1 member",
    icon: Crown,
    iconBg: "bg-[#ED5A2E]/20 text-[#ED5A2E]",
    description: "Full access to everything",
    permissions: [
      { label: "Manage team", allowed: true },
      { label: "Manage events", allowed: true },
      { label: "View analytics", allowed: true },
      { label: "Billing access", allowed: true },
    ],
  },
  {
    id: "admin",
    name: "Admin",
    membersCount: "1 member",
    icon: Key,
    iconBg: "bg-red-500/20 text-red-400",
    description: "Can manage all aspects",
    permissions: [
      { label: "Manage team", allowed: true },
      { label: "Manage events", allowed: true },
      { label: "View analytics", allowed: true },
      { label: "Billing access", allowed: false },
    ],
  },
  {
    id: "manager",
    name: "Manager",
    membersCount: "2 members",
    icon: Briefcase,
    iconBg: "bg-purple-500/20 text-purple-400",
    description: "Manages assigned events",
    permissions: [
      { label: "Manage team", allowed: false },
      { label: "Manage events", allowed: true },
      { label: "View analytics", allowed: true },
      { label: "Billing access", allowed: false },
    ],
  },
  {
    id: "staff",
    name: "Staff",
    membersCount: "2 members",
    icon: User,
    iconBg: "bg-blue-500/20 text-blue-400",
    description: "Event support staff",
    permissions: [
      { label: "Manage team", allowed: false },
      { label: "Manage events", allowed: true },
      { label: "View analytics", allowed: true },
      { label: "Billing access", allowed: false },
    ],
  },
];

const INITIAL_PENDING_INVITATIONS = [
  {
    id: "inv-1",
    email: "Johndoe@gmail.com",
    role: "Staff",
    roleColor: "bg-[#1E3A5F] text-[#60A5FA]",
    sentAgo: "Sent 2 days ago",
    expiresIn: "Expires in 5 days",
  },
  {
    id: "inv-2",
    email: "Johndoe@gmail.com",
    role: "Manager",
    roleColor: "bg-[#3B1E4A] text-[#C084FC]",
    sentAgo: "Sent 4 days ago",
    expiresIn: "Expires in 3 days",
  },
];

export default function TeamManagementPage() {
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [pendingInvitations, setPendingInvitations] = useState(INITIAL_PENDING_INVITATIONS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoleFilter, setSelectedRoleFilter] = useState("All Roles");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("All Statuses");
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("Staff");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleResend = (id: string, email: string) => {
    triggerToast(`Invitation resent to ${email}`);
  };

  const handleCancel = (id: string) => {
    setPendingInvitations((prev) => prev.filter((inv) => inv.id !== id));
    triggerToast("Invitation cancelled");
  };

  const handleSendInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail) return;

    const newInv = {
      id: `inv-${Date.now()}`,
      email: inviteEmail,
      role: inviteRole,
      roleColor:
        inviteRole === "Manager"
          ? "bg-[#3B1E4A] text-[#C084FC]"
          : inviteRole === "Admin"
          ? "bg-red-500/20 text-red-400"
          : "bg-[#1E3A5F] text-[#60A5FA]",
      sentAgo: "Sent just now",
      expiresIn: "Expires in 7 days",
    };

    setPendingInvitations([newInv, ...pendingInvitations]);
    setInviteEmail("");
    setShowInviteModal(false);
    triggerToast(`Invitation sent to ${newInv.email}`);
  };

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole =
      selectedRoleFilter === "All Roles" || member.role === selectedRoleFilter;
    const matchesStatus =
      selectedStatusFilter === "All Statuses" || member.status === selectedStatusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 lg:p-8 font-[var(--font-inter)] selection:bg-[#ED5A2E] selection:text-white">
      <div className="max-w-[1400px] mx-auto space-y-10">
        {/* ── TOP HEADER (Screenshot 2) ────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/host/dashboard"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Team Management
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowInviteModal(true)}
              className="bg-[#ED5A2E] hover:bg-[#d4501f] text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ED5A2E]/20 active:scale-95"
            >
              <Plus className="h-4 w-4" />
              <span>Add team member</span>
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText("https://getontrck.com/invite/team-host-2026");
                triggerToast("Invite link copied to clipboard!");
              }}
              className="bg-[#ED5A2E]/15 hover:bg-[#ED5A2E]/25 border border-[#ED5A2E]/50 text-[#ED5A2E] px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <LinkIcon className="h-4 w-4" />
              <span>Invite via link</span>
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed top-6 right-6 z-50 bg-[#ED5A2E] text-white px-5 py-3 rounded-xl shadow-2xl text-xs font-bold animate-in fade-in slide-in-from-top-4 duration-300">
            {toastMessage}
          </div>
        )}

        {/* ── 3 SUMMARY METRIC CARDS (Screenshot 2) ────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Team Members */}
          <div className="rounded-[22px] border border-white/10 bg-[#121212] p-6 space-y-4 shadow-lg hover:border-white/20 transition-all">
            <div className="h-10 w-10 rounded-xl bg-[#ED5A2E]/15 text-[#ED5A2E] flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-white/60">Team Members</p>
              <p className="text-3xl font-extrabold text-white mt-1">8</p>
              <p className="text-xs text-white/45 mt-1">2 pending invitations</p>
            </div>
          </div>

          {/* Card 2: Active Events */}
          <div className="rounded-[22px] border border-white/10 bg-[#121212] p-6 space-y-4 shadow-lg hover:border-white/20 transition-all">
            <div className="h-10 w-10 rounded-xl bg-[#ED5A2E]/15 text-[#ED5A2E] flex items-center justify-center">
              <CalendarDays className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-white/60">Active Events</p>
              <p className="text-3xl font-extrabold text-white mt-1">3</p>
              <p className="text-xs text-white/45 mt-1">All events covered</p>
            </div>
          </div>

          {/* Card 3: Team Plan */}
          <div className="rounded-[22px] border border-white/10 bg-[#121212] p-6 space-y-4 shadow-lg hover:border-white/20 transition-all">
            <div className="h-10 w-10 rounded-xl bg-[#ED5A2E]/15 text-[#ED5A2E] flex items-center justify-center">
              <Crown className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-white/60">Team Plan</p>
              <p className="text-3xl font-extrabold text-white mt-1">8/10</p>
              <p className="text-xs text-white/45 mt-1">Pro Plan - 2 seats left</p>
            </div>
          </div>
        </div>

        {/* ── SEARCH & FILTER BAR (Screenshot 2) ───────────────────────── */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or employee ID"
              className="w-full rounded-2xl bg-[#141414] border border-white/10 py-3.5 pl-11 pr-4 text-xs text-white placeholder:text-white/40 outline-none focus:border-[#ED5A2E] transition-all"
            />
          </div>

          {/* All Roles Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowRoleDropdown(!showRoleDropdown);
                setShowStatusDropdown(false);
              }}
              className="w-full sm:w-auto flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-[#ED5A2E] hover:bg-[#d4501f] text-white text-xs font-semibold shadow-md transition-all active:scale-95"
            >
              <span>{selectedRoleFilter}</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {showRoleDropdown && (
              <div className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-[#1C1C1C] border border-white/10 p-1.5 shadow-2xl z-30 space-y-1">
                {["All Roles", "Owner", "Admin", "Manager", "Staff"].map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setSelectedRoleFilter(r);
                      setShowRoleDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      selectedRoleFilter === r
                        ? "bg-[#ED5A2E] text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* All Statuses Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowStatusDropdown(!showStatusDropdown);
                setShowRoleDropdown(false);
              }}
              className="w-full sm:w-auto flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-[#ED5A2E] hover:bg-[#d4501f] text-white text-xs font-semibold shadow-md transition-all active:scale-95"
            >
              <span>{selectedStatusFilter}</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {showStatusDropdown && (
              <div className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-[#1C1C1C] border border-white/10 p-1.5 shadow-2xl z-30 space-y-1">
                {["All Statuses", "Active", "Inactive", "Pending", "Deactivated"].map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSelectedStatusFilter(s);
                      setShowStatusDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      selectedStatusFilter === s
                        ? "bg-[#ED5A2E] text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── SECTION 1: TEAM MEMBERS GRID (2 Columns - Screenshot 2 & 3) ─ */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Team Members
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-[22px] border border-white/10 bg-[#121212] p-5 sm:p-6 space-y-4 hover:border-white/20 transition-all shadow-md"
              >
                {/* Member Top Row: Avatar + Name/Email + 3-dots */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`h-12 w-12 rounded-full ${member.avatarBg} text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md`}
                    >
                      JD
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{member.name}</h3>
                      <p className="text-xs text-white/50">{member.email}</p>
                    </div>
                  </div>

                  <button className="text-white/40 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>

                {/* Badges: Role + Status */}
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-lg text-[11px] font-bold ${
                      member.role === "Owner"
                        ? "bg-[#ED5A2E]/20 text-[#ED5A2E] border border-[#ED5A2E]/40"
                        : member.role === "Admin"
                        ? "bg-red-500/20 text-red-400 border border-red-500/40"
                        : member.role === "Manager"
                        ? "bg-purple-500/20 text-purple-400 border border-purple-500/40"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                    }`}
                  >
                    {member.role === "Owner" ? "👑 Owner" : member.role}
                  </span>

                  <span
                    className={`px-3 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 ${
                      member.status === "Active"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-amber-500/10 text-amber-400"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        member.status === "Active" ? "bg-emerald-400" : "bg-amber-400"
                      }`}
                    />
                    <span>{member.status}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-white/70 font-medium">
                  {member.description}
                </p>

                {/* Footer Meta: Activity + Events */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-white/45">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{member.lastActive}</span>
                  </span>
                  <span className="font-semibold text-white/70">{member.eventsCount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 2: TEAM ROLES DEFINITION CARDS (Screenshot 3) ─────── */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Team Members
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROLE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="rounded-[20px] border border-white/10 bg-[#121212] p-5 sm:p-6 flex flex-col justify-between transition-all hover:border-white/20 shadow-lg"
                >
                  <div>
                    {/* Top: Circle Icon + Title & Member count */}
                    <div className="flex items-center gap-3">
                      <div className={`h-11 w-11 rounded-full flex items-center justify-center ${card.iconBg} shrink-0`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">{card.name}</h3>
                        <p className="text-xs text-white/50">{card.membersCount}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-white/70 mt-4 mb-4 font-medium">
                      {card.description}
                    </p>

                    {/* Permissions list */}
                    <div className="space-y-2.5 pt-1">
                      {card.permissions.map((p) => (
                        <div key={p.label} className="flex items-center gap-2 text-xs">
                          {p.allowed ? (
                            <Check className="h-3.5 w-3.5 text-[#22C55E] shrink-0" strokeWidth={3} />
                          ) : (
                            <X className="h-3.5 w-3.5 text-white/40 shrink-0" strokeWidth={2.5} />
                          )}
                          <span className={p.allowed ? "text-white/90" : "text-white/40"}>
                            {p.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── SECTION 3: PENDING INVITATIONS (Screenshot 3) ────────────── */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Pending Invitations
          </h2>

          <div className="space-y-3">
            {pendingInvitations.map((inv) => (
              <div
                key={inv.id}
                className="rounded-[20px] border border-white/10 bg-[#121212] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-white/20 shadow-md"
              >
                {/* Left: Avatar + Details */}
                <div className="flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-full bg-[#ED5A2E]/15 text-[#ED5A2E] flex items-center justify-center shrink-0">
                    <User className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-white">{inv.email}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/50">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${inv.roleColor}`}>
                        {inv.role}
                      </span>
                      <span>•</span>
                      <span>{inv.sentAgo}</span>
                      <span>•</span>
                      <span className="text-[#ED5A2E] font-medium">{inv.expiresIn}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Actions (Resend & Cancel) */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => handleResend(inv.id, inv.email)}
                    className="bg-[#ED5A2E] hover:bg-[#d4501f] text-white px-4 py-2 rounded-xl text-xs font-semibold transition-all shadow-md shadow-[#ED5A2E]/20 active:scale-95"
                  >
                    Resend
                  </button>
                  <button
                    onClick={() => handleCancel(inv.id)}
                    className="bg-[#222222] hover:bg-[#2c2c2c] text-white/80 hover:text-white px-4 py-2 rounded-xl text-xs font-semibold transition-all border border-white/10 active:scale-95"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MODAL: ADD TEAM MEMBER ─────────────────────────────────── */}
        {showInviteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="w-full max-w-md rounded-[24px] bg-[#141414] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Add Team Member</h3>
                <button
                  onClick={() => setShowInviteModal(false)}
                  className="text-white/40 hover:text-white p-1 rounded-lg"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSendInvite} className="space-y-4">
                <div>
                  <label className="text-xs text-white/70 block mb-1.5 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    placeholder="teammate@company.com"
                    className="w-full rounded-xl bg-[#222] border border-white/10 px-4 py-3 text-xs text-white outline-none focus:border-[#ED5A2E]"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/70 block mb-1.5 font-medium">
                    Role
                  </label>
                  <select
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value)}
                    className="w-full rounded-xl bg-[#222] border border-white/10 px-4 py-3 text-xs text-white outline-none focus:border-[#ED5A2E]"
                  >
                    <option value="Admin">Admin (Can manage everything)</option>
                    <option value="Manager">Manager (Manages assigned events)</option>
                    <option value="Staff">Staff (Event support staff)</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowInviteModal(false)}
                    className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/70"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#ED5A2E] hover:bg-[#d4501f] text-xs font-bold text-white shadow-lg shadow-[#ED5A2E]/20"
                  >
                    Send Invitation
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}
