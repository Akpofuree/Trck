export const ROUTES = {
  public: {
    home: "/home",
    explore: "/explore",
    search: "/search",
    login: "/login",
    signup: "/signup",
    verifyOtp: "/verify-otp",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    account: {
      overview: "/account/overview",
      bookings: "/account/bookings",
      favourites: "/account/favourites",
      payments: "/account/payments",
      security: "/account/security",
      rewards: "/account/rewards",
      settings: "/account/settings",
      support: "/account/support",
    },
    tickets: "/tickets",
    ticketDetail: "/ticket-detail-screen",
    notifications: "/notifications",
    checkout: {
      select: "/checkout",
      review: "/checkout/payment",
      card: "/checkout/card",
      bankTransfer: "/checkout/bank-transfer",
      ussd: "/checkout/ussd",
      confirmation: "/checkout/confirmation",
      share: "/checkout/share",
      shareLink: "/checkout/share/link",
      shareEmail: "/checkout/share/email",
      shareTransfer: "/checkout/share/transfer",
      cancel: "/checkout/cancel",
    },
  },
  host: {
    signup: "/host/signup",
    dashboard: "/host/dashboard",
    calendar: "/host/calendar",
    payouts: "/host/payouts",
    promotions: "/host/promotions",
    reviews: "/host/reviews",
    events: "/host/events",
    onboarding: {
      businessInfo: "/host/onboarding/business-info",
      kyc: "/host/onboarding/kyc",
      bankVerification: "/host/onboarding/bank-verification",
      status: "/host/onboarding/status",
    },
  },
  admin: {
    login: "/admin/login",
    dashboard: "/admin/dashboard",
    users: "/admin/users",
    events: "/admin/events",
    kyc: "/admin/kyc",
    settings: "/admin/settings",
  },
} as const;

export type Portal = "public" | "host" | "admin";
export type UserRole = "attendee" | "host" | "admin";

export interface RouteMeta {
  label: string;
  path: string;
  portal: Portal;
  requiresAuth?: boolean;
  roles?: UserRole[];
}

export const ROUTE_META: RouteMeta[] = [
  { label: "Home", path: ROUTES.public.home, portal: "public" },
  { label: "Explore", path: ROUTES.public.explore, portal: "public" },
  { label: "Account overview", path: ROUTES.public.account.overview, portal: "public", requiresAuth: true, roles: ["attendee"] },
  { label: "My tickets", path: ROUTES.public.tickets, portal: "public", requiresAuth: true, roles: ["attendee"] },
  { label: "Notifications", path: ROUTES.public.notifications, portal: "public", requiresAuth: true, roles: ["attendee"] },
  { label: "Checkout", path: ROUTES.public.checkout.select, portal: "public" },
  { label: "Booking confirmation", path: ROUTES.public.checkout.confirmation, portal: "public" },
  { label: "Ticket detail screen", path: ROUTES.public.ticketDetail, portal: "public", requiresAuth: true, roles: ["attendee"] },
  { label: "Host dashboard", path: ROUTES.host.dashboard, portal: "host", requiresAuth: true, roles: ["host"] },
  { label: "Admin dashboard", path: ROUTES.admin.dashboard, portal: "admin", requiresAuth: true, roles: ["admin"] },
];

export function canAccessRoute(path: string, role?: UserRole) {
  const match = ROUTE_META.find((route) => route.path === path);
  if (!match || !match.roles) return true;
  return Boolean(role && match.roles.includes(role));
}
