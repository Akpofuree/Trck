import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { Logo } from "./logo";

interface PublicHeaderProps {
  showSearch?: boolean;
  showAuthButtons?: boolean;
}

export function PublicHeader({ showSearch = true, showAuthButtons = true }: PublicHeaderProps) {
  return (
    <header className="border-b border-white/8 bg-white text-gray-900">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-5">
          <Link href="/" className="inline-flex shrink-0 items-center">
            <Logo width={100} height={36} className="h-7 w-auto" />
          </Link>

          {showSearch && (
            <div className="relative hidden min-w-0 w-[460px] md:block">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                placeholder="Search event..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 text-[0.92rem] text-gray-900 outline-none placeholder:text-gray-500 focus:border-[#ED5A2E] focus:ring-2 focus:ring-[#ED5A2E]/20"
              />
            </div>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-4">
          {showAuthButtons && (
            <>
              <Link
                href="/login"
                className="hidden rounded-full px-5 py-2 text-[0.88rem] font-semibold text-gray-700 transition-colors hover:text-gray-900 sm:block"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded-full bg-[#ED5A2E] px-5 py-2 text-[0.88rem] font-bold text-white shadow-md shadow-[#ED5A2E]/30 transition-all hover:bg-[#d4501f] hover:shadow-lg hover:shadow-[#ED5A2E]/40 active:scale-[0.97]"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
