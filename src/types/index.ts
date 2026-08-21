export interface EventItem {
  id: string;
  title: string;
  description?: string;
  date: string;
  time?: string;
  location: string;
  price: string;
  category: string;
  organizer?: string;
  image: string;
  ticketsAvailable?: number;
  tags?: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'attendee' | 'host' | 'admin';
}

export interface AccountOverviewData {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  metrics: {
    totalSpent: number;
    paymentsDue: number;
  };
  featuredEvent: {
    id: string;
    title: string;
    date: string;
    location: string;
    avatars: string[];
  };
  tickets: Array<{
    id: string;
    event: string;
    date: string;
    amount: string;
    status: string;
  }>;
}

export interface FilterState {
  dateRange: string;
  location: string;
  withinMiles: number;
  minPrice: string;
  maxPrice: string;
  eventTypes: string[];
  moreFilters: string[];
}

export interface OnboardingStepData {
  step: number;
  title: string;
  subtitle: string;
  graphic?: string;
  options?: Array<{ id: string; title: string; desc: string }>;
  interests?: Array<{ id: string; label: string }>;
}
