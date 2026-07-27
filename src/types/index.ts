export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  price: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'attendee' | 'host' | 'admin';
}
