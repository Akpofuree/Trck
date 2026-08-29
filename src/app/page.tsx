import Link from "next/link";
import { Logo } from "@/components/shared/logo";

interface PageItem {
  label: string;
  href: string;
  desc: string;
  isSection?: boolean;
  indent?: boolean;
}

interface PageGroup {
  group: string;
  color: string;
  items: PageItem[];
}

const pages: PageGroup[] = [
  {
    group: "Onboarding Screens",
    color: "#A78BFA",
    items: [
      { label: "Onboarding Step 1", href: "/onboarding/step-1", desc: "Step 1: Your city has more to offer (Cards illustration)" },
      { label: "Onboarding Step 2", href: "/onboarding/step-2", desc: "Step 2: More than events, it's your lifestyle (Friends illustration)" },
      { label: "Onboarding Step 3", href: "/onboarding/step-3", desc: "Step 3: Choose your journey (Explorer / Host / Admin selector)" },
      { label: "Onboarding Step 4", href: "/onboarding/step-4", desc: "Step 4: Let's get to know you (Interest pills selection)" },
      { label: "Onboarding Home", href: "/onboarding-home", desc: "Dark landing page with 5IVE AT 02 ARENA hero, Spotify connect, VIP packages, trending events" },
      { label: "Account Overview", href: "/account/overview", desc: "User Account Overview with stats, active tickets, and booking history" },
      { label: "Edit Profile", href: "/account/edit-profile", desc: "Full profile editor with personal info, account settings, notifications, payment, privacy" },
      { label: "Booking History", href: "/account/bookings", desc: "Booking history table with total bookings, status badges, and activity feed" },
      { label: "Tickets Listing", href: "/tickets", desc: "Tickets dashboard with tab filters and Add to Wallet action" },
      { label: "Notifications Feed", href: "/notifications", desc: "Live user notification feed split by date groups (Today, Yesterday)" },
      { label: "Homepage", href: "/home", desc: "Public landing page with carnival hero background, navbar, and CTAs" },
      { label: "Login", href: "/login", desc: "Split-layout login with email/password, QR code, and social auth" },
      { label: "Sign Up", href: "/signup", desc: "Split-layout registration with email, password fields and social auth" },
      { label: "Enter Passcode", href: "/verify-otp", desc: "6-digit passcode entry (3–3 format) with fingerprint padlock illustration" },
    ],
  },
  {
    group: "Host Event Creation",
    color: "#FF7A00",
    items: [
      { label: "Basic Information", href: "/host/events/new", desc: "Event setup step 1: basic info, type, description, and tags" },
      { label: "Schedule", href: "/host/events/new/schedule", desc: "Event setup step 2: date, time, duration, and recurrence" },
      { label: "Location", href: "/host/events/new/location", desc: "Event setup step 3: venue, directions, and accessibility" },
      { label: "Media", href: "/host/events/new/media", desc: "Event setup step 4: uploads, branding, and previews" },
      { label: "Ticket Pricing", href: "/host/events/new/tickets", desc: "Event setup step 2: ticket type, tiers, and pricing" },
      { label: "Review", href: "/host/events/new/review", desc: "Event setup step 5: preview and publish" },
      { label: "Published", href: "/host/events/new/published", desc: "Post-review publish confirmation state" },
    ],
  },
  {
    group: "Public Booking Flow",
    color: "#FFFFFF",
    items: [
      { label: "Checkout Review", href: "/checkout", desc: "Mobile-style checkout review screen with ticket holder details" },
      { label: "Event Detail", href: "/events/sample-event", desc: "Desktop event detail page with long-form event information" },
    ],
  },
  {
    group: "Checkout",
    color: "#ED5A2E",
    items: [
      { label: "Checkout Select", href: "/checkout", desc: "Select tickets and review the first checkout step" },
      { label: "Checkout Review", href: "/checkout/payment", desc: "Main checkout review screen with ticket holder details and policies" },
      { label: "Card Payment", href: "/checkout/card", desc: "Choose card payment as the gateway method" },
      { label: "Bank Transfer", href: "/checkout/bank-transfer", desc: "Choose bank transfer as the gateway method" },
      { label: "USSD Payment", href: "/checkout/ussd", desc: "Choose USSD as the gateway method" },
      { label: "Checkout Confirmation", href: "/checkout/confirmation", desc: "Booking confirmation and ticket download screen" },
      { label: "Ticket Detail Screen", href: "/ticket-detail-screen", desc: "Mobile ticket detail screen with QR scan view and ticket actions" },
      { label: "Share Ticket Hub", href: "/checkout/share", desc: "Entry hub for share ticket flow" },
      { label: "Share Link", href: "/checkout/share/link", desc: "Share ticket via link screen" },
      { label: "Share Email", href: "/checkout/share/email", desc: "Share ticket via email screen" },
      { label: "Share Transfer", href: "/checkout/share/transfer", desc: "Transfer to a TRCK user screen" },
      { label: "Cancel Ticket", href: "/checkout/cancel", desc: "Cancel ticket screen" },
      { label: "Notifications", href: "/notifications", desc: "Notifications page with new notification sections" },
    ],
  },
  {
    group: "General Listing",
    color: "#ED5A2E",
    items: [
      { label: "Explore Events", href: "/explore", desc: "Main event listing page with search, filters, categories, and pagination" },
      { label: "Search Results", href: "/search", desc: "Event search results page with active filters, sort, and pagination" },
      { label: "Event Detail Screen", href: "/events/sample-event", desc: "Full desktop event detail screen with hero, schedule, reviews, FAQ, and footer" },
      { label: "Event Series Detail Screen", href: "/series/sample-series", desc: "Event series detail screen with pass card, upcoming events, highlights, and footer" },
    ],
  },
  {
    group: "Host Portal",
    color: "#ED5A2E",
    items: [
      {
        label: "Onboarding & Verification",
        href: "#onboarding-verification",
        desc: "Host onboarding flow and verification processes",
        isSection: true,
      },
      { label: "Host Sign Up", href: "/host/signup", desc: "Step 0: Create host account (Mobile & Desktop)", indent: true },
      { label: "Business Info", href: "/host/onboarding/business-info", desc: "Step 1: Set up business info", indent: true },
      { label: "KYC Verification", href: "/host/onboarding/kyc", desc: "Step 2: Upload ID & Proof of Address — dashboard shell", indent: true },
      { label: "Bank Verification", href: "/host/onboarding/bank-verification", desc: "Step 3: Bank account verification — dashboard shell", indent: true },
      { label: "KYC Status", href: "/host/onboarding/status", desc: "Step 4: Review decision (Success / Pending / Failed) — interactive", indent: true },
      {
        label: "Host Dashboard & Operations",
        href: "#host-operations",
        desc: "Host management suite with dashboard, calendar, promotions, and payouts",
        isSection: true,
      },
      { label: "Host Dashboard Overview", href: "/host/dashboard", desc: "Recent events overview with live statuses and quick actions", indent: true },
      { label: "Host Calendar", href: "/host/calendar", desc: "Calendar, list, and timeline view with event scheduler", indent: true },
      { label: "Host Promotions", href: "/host/promotions", desc: "Promotions metrics with 4 KPI cards and filter presets", indent: true },
      { label: "Host Payouts", href: "/host/payouts", desc: "Wallet summary, payout status breakdown, and withdrawal history table", indent: true },
      { label: "Host Reviews", href: "/host/reviews", desc: "Attendee feedback and event ratings summary", indent: true },
      {
        label: "Teams & Accreditation",
        href: "#teams-accreditation",
        desc: "Team management, role assignments, and permissions",
        isSection: true,
      },
      { label: "Team Management", href: "/team-management", desc: "Team overview with summary cards, search/filter, member list, and pending invitations", indent: true },
      { label: "Edit Team Member", href: "/team-management/edit-member", desc: "Edit member role (Admin/Manager/Staff) and account status (Active/Inactive)", indent: true },
      { label: "Access Role Assignment", href: "/access-role-assignment", desc: "Manage role permissions with expandable categories and toggle switches", indent: true },
      { label: "Roles and Statuses", href: "/roles-and-statuses", desc: "Global role and status permission management with reset functionality", indent: true },
    ],
  },
  {
    group: "Admin Dashboard",
    color: "#52B698",
    items: [
      { label: "Admin Dashboard", href: "/admin/dashboard", desc: "Main Dashboard with metrics, charts & customer list" },
      { label: "Admin KYC Verification", href: "/admin/kyc", desc: "KYC Verification inside Admin Dashboard layout" },
      { label: "Admin Bank Verification", href: "/admin/bank-verification", desc: "Bank Verification inside Admin Dashboard layout" },
      { label: "Admin KYC Status", href: "/admin/kyc-status", desc: "KYC Status Review Success inside Admin Dashboard layout" },
      { label: "Admin Calendar", href: "/admin/calendar", desc: "Calendar view with month grid, events list & mode switcher" },
      { label: "Admin Promotions", href: "/admin/promotions", desc: "Promotions page with metrics banner, filter pills & promotions list" },
      { label: "Admin Payouts", href: "/admin/payouts", desc: "Payouts summary page with wallet hero & payout history table" },
      { label: "Admin Events", href: "/admin/events", desc: "Event management dashboard with modal publish state" },
    ],
  },
  {
    group: "KYC and User Management",
    color: "#ED5828",
    items: [
      {
        label: "KYC & User Management",
        href: "/kyc-user-management",
        desc: "Management dashboard with 8 KPI stat cards, List view, Calendar view (Dec 2025), and Timeline view with weekly/monthly/quarterly data interpretations",
      },
      {
        label: "Event Detail View (Admin)",
        href: "/kyc-user-management/event-detail",
        desc: "Comprehensive admin event detail view with hero cover, live KPI tracking, quick actions, attendees, and financial payout breakdown",
      },
      {
        label: "Content Moderation (Admin)",
        href: "/kyc-user-management/content-moderation",
        desc: "Content moderation management with 4 KPI cards, flag reviews, auto-moderation settings, and reporting thresholds",
      },
      {
        label: "Settings Dashboard (Admin)",
        href: "/kyc-user-management/settings",
        desc: "Admin settings dashboard with 8 sidebar views including payment gateways, payout schedules, tax configurations, and footer",
      },
    ],
  },
];

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="mb-10 text-center">
        <div className="flex items-center justify-center mb-3">
          <Logo width={120} height={44} className="h-9 w-auto" />
        </div>
        <h1 className="text-3xl font-bold mb-2">TRCK Web App</h1>
        <p className="text-white/50 text-sm">Page Navigation Hub</p>
      </div>

      <div className="w-full max-w-lg space-y-8">
        {pages.map((group) => (
          <div key={group.group}>
            <h2
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: group.color }}
            >
              {group.group}
            </h2>
            <div className="space-y-2">
              {group.items.map((item) => (
                item.isSection ? (
                  <div key={item.href} className="mt-4 mb-2">
                    <h3 className="text-sm font-bold text-white/80 uppercase tracking-wide">
                      {item.label}
                    </h3>
                    <p className="text-xs text-white/40 mt-1">{item.desc}</p>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between border border-white/10 rounded-xl px-5 py-4 hover:border-white/30 hover:bg-white/5 transition-all group ${item.indent ? 'ml-4' : ''}`}
                  >
                    <div>
                      <p className="font-semibold text-sm text-white group-hover:text-[#ED5A2E] transition-colors">
                        {item.label}
                      </p>
                      <p className="text-xs text-white/40 mt-0.5">{item.desc}</p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white/30 group-hover:text-[#ED5A2E] group-hover:translate-x-1 transition-all"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
