"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, History, Ticket, Bell, User } from "lucide-react";

interface AccountMobileNavProps {
  className?: string;
}

export function AccountMobileNav({ className = "" }: AccountMobileNavProps) {
  const pathname = usePathname();

  const navItems = [
    { label: "Overview", icon: LayoutGrid, href: "/account/overview" },
    { label: "Bookings", icon: History, href: "/account/bookings" },
    { label: "Tickets", icon: Ticket, href: "/tickets" },
    { label: "Alerts", icon: Bell, href: "/notifications" },
    { label: "Profile", icon: User, href: "/account/edit-profile" },
  ];

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2 flex items-center justify-around shadow-lg ${className}`}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive =
          pathname === item.href ||
          (item.href !== "/account/overview" && pathname?.startsWith(item.href));

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all ${
              isActive
                ? "text-[#ED5A2E] font-semibold"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            <div
              className={`p-1 rounded-lg ${
                isActive ? "bg-[#ED5A2E]/10" : "bg-transparent"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-[0.68rem] tracking-tight">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
