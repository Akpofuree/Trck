import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black px-6 py-12 text-white lg:px-16 border-t border-white/10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 pb-12 border-b border-white/10">
          {/* Contact */}
          <div>
            <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <p className="text-[0.88rem] font-semibold text-[#ED5A2E] mb-4">
              info@getontrck.com
            </p>
            <p className="text-[0.88rem] text-white/70">
              Follow the brand across the channels you already know.
            </p>
            <div className="flex items-center gap-4 text-white/80 mt-4">
              {/* LinkedIn */}
              <svg className="h-4 w-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
              </svg>
              {/* Instagram */}
              <svg className="h-4 w-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              {/* TikTok */}
              <svg className="h-4 w-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24" aria-label="TikTok">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
              </svg>
              {/* X / Twitter */}
              <svg className="h-4 w-4 fill-current cursor-pointer hover:text-white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[0.85rem] text-white/70">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-[0.85rem] text-white/70">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Acceptable use policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[0.78rem] font-bold uppercase tracking-wider text-white mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-[0.85rem] text-white/70">
              <li>
                <Link href="#" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Disclaimer */}
        <div className="pt-8 text-[0.76rem] text-white/40 leading-relaxed space-y-2">
          <p>
            TRCK is a leisure technology platform based in Nigeria. All
            experiences are provided by independent third-party creators. TRCK
            does not host or supervise these Experiences and disclaims
            liability for third-party actions.
          </p>
          <p>
            Copyright ©2025 Trck Entertainment & Technology Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
