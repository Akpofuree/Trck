"use client";

import Link from "next/link";
import { Heart, Search, LogOut, Settings, BadgeHelp, CreditCard, ShieldCheck, Gift, LayoutDashboard, BookOpen, Star, ChevronRight } from "lucide-react";
import { Logo } from "@/components/shared/logo";

const menuItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Booking History", icon: BookOpen },
  { label: "Favourites", icon: Star, active: true },
  { label: "Payments & shipping", icon: CreditCard },
  { label: "Login & security", icon: ShieldCheck },
  { label: "Offers and rewards", icon: Gift },
  { label: "Settings", icon: Settings },
  { label: "Help & support", icon: BadgeHelp },
  { label: "Logout", icon: LogOut },
];

const cards = [
  { title: "Side Crystal Events", date: "12/16/2024", location: "Lagos" },
  { title: "Side Crystal Events", date: "12/16/2024", location: "Lagos" },
  { title: "Side Crystal Events", date: "12/16/2024", location: "Lagos" },
  { title: "Side Crystal Events", date: "12/16/2024", location: "Lagos" },
  { title: "Side Crystal Events", date: "12/16/2024", location: "Lagos" },
  { title: "Side Crystal Events", date: "12/16/2024", location: "Lagos" },
];

function Sidebar() {
  return (
    <aside className="hidden lg:flex w-[290px] shrink-0 flex-col border-r border-black/5 bg-[#f7f7f7] px-8 py-8">
      <div className="rounded-[28px] bg-white p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between text-[0.8rem] font-semibold text-black">
          <span>User</span>
          <span className="text-black/50">...</span>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-[#d9d9d9]">
            <div className="flex h-full w-full items-center justify-center bg-[#e6e6e6] text-[0.9rem] font-bold text-black">D</div>
          </div>
          <div>
            <p className="text-[0.82rem] font-semibold text-black">Dominion Ogbaji</p>
            <p className="text-[0.68rem] text-black/45">dominiogbaji@gmail.com</p>
          </div>
        </div>
        <button className="mt-4 w-full rounded-full bg-[#ED5A2E] py-3 text-[0.8rem] font-semibold text-white">Edit Profile</button>
      </div>

      <nav className="mt-10 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href="#"
              className={`flex items-center gap-3 rounded-[16px] px-4 py-3 text-[0.92rem] transition-colors ${
                item.active ? "bg-[#ED5A2E] text-white" : "text-black/85 hover:bg-black/5"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="flex-1">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

function Card({ title, date, location }: { title: string; date: string; location: string }) {
  return (
    <div className="relative min-h-[224px] rounded-[18px] border border-[#dedede] bg-white px-6 py-6 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <button className="absolute right-5 top-5 text-[1.9rem] leading-none text-black/45">×</button>
      <h3 className="pr-8 text-[1.05rem] font-semibold text-black">{title}</h3>
      <p className="mt-4 text-[0.95rem] text-black">{date}</p>
      <p className="mt-4 text-[0.95rem] text-black">{location}</p>
      <button className="absolute bottom-5 right-5 text-[1.35rem] text-black/85"><Heart className="h-5 w-5" /></button>
    </div>
  );
}

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex min-h-screen flex-col">
        <header className="flex h-[104px] items-center border-b border-black/5 bg-white px-6 lg:px-10">
          <div className="mx-auto flex w-full max-w-[1600px] items-center gap-6">
            <Link href="/" className="inline-flex items-center">
              <Logo width={110} height={36} className="h-8 w-auto" />
            </Link>
            <div className="hidden flex-1 items-center justify-center lg:flex">
              <div className="relative w-full max-w-[380px]">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/50" />
                <input
                  readOnly
                  value="Search by categories"
                  className="w-full rounded-full border border-black/5 bg-[#f4f4f4] py-3 pl-12 pr-4 text-[0.95rem] text-black/70 outline-none"
                />
              </div>
            </div>
            <div className="ml-auto hidden items-center gap-8 text-[0.95rem] text-black/80 lg:flex">
              <span>Sports</span>
              <span>Music</span>
              <span>More</span>
              <span className="inline-flex items-center gap-2"><span className="h-4 w-6 bg-[#0d7c3a]"></span> NGN</span>
              <span>Sell</span>
              <span>Support</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ED5A2E] text-white font-semibold">D</div>
            </div>
          </div>
        </header>

        <div className="flex flex-1">
          <Sidebar />

          <section className="flex-1 bg-white px-5 py-8 lg:px-10">
            <div className="mx-auto max-w-[1100px]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="mb-4 text-[0.92rem] font-medium uppercase tracking-[0.12em] text-black/45">Notifications</p>
                  <h1 className="text-[2.8rem] font-semibold tracking-tight text-black lg:text-[4rem]">Favourites</h1>
                </div>
                <Heart className="mt-6 hidden h-9 w-9 text-black lg:block" />
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {cards.map((card, index) => (
                  <Card key={`${card.title}-${index}`} {...card} />
                ))}
              </div>

              <div className="mt-10 hidden text-right lg:block">
                <Link href="#" className="inline-flex items-center gap-2 text-[0.95rem] text-black/80">
                  View all <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-6 lg:hidden">
                {cards.slice(0, 3).map((card, index) => (
                  <div key={`${card.title}-${index}`} className="rounded-[18px] border border-[#dedede] bg-white p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-[1.05rem] font-semibold">{card.title}</h3>
                        <p className="mt-3 text-[0.95rem]">{card.date}</p>
                        <p className="mt-3 text-[0.95rem]">{card.location}</p>
                      </div>
                      <button className="text-black/45">×</button>
                    </div>
                    <div className="mt-8 flex justify-end">
                      <Heart className="h-5 w-5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <footer className="border-t border-black/5 bg-black px-6 py-12 text-white lg:px-16">
          <div className="mx-auto max-w-[1300px]">
            <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider">Contact</h4>
                <p className="mb-4 text-[0.88rem] font-semibold text-[#ED5A2E]">info@getontrck.com</p>
              </div>
              <div>
                <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider">Company</h4>
                <div className="space-y-2 text-[0.85rem] text-white/70">
                  <p>About Us</p>
                  <p>How it works</p>
                  <p>Features</p>
                </div>
              </div>
              <div>
                <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider">Legal</h4>
                <div className="space-y-2 text-[0.85rem] text-white/70">
                  <p>Privacy policy</p>
                  <p>Terms of service</p>
                  <p>Acceptable use policy</p>
                </div>
              </div>
              <div>
                <h4 className="mb-4 text-[0.78rem] font-bold uppercase tracking-wider">Support</h4>
                <p className="text-[0.85rem] text-white/70">FAQ</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 text-[0.76rem] text-white/40">
              TRCK is a leisure technology platform based in Nigeria. All experiences are provided by independent third-party creators.
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
