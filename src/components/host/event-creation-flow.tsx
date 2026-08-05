import Link from "next/link";

type Step = {
  number: number;
  title: string;
  description: string;
  active?: boolean;
  completed?: boolean;
};

type TicketType = {
  title: string;
  description: string;
  icon: React.ReactNode;
  active?: boolean;
};

function ArrowLeftIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M15 19L8 12L15 5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M20 7L9 18L4 13"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[2.5rem] w-[2.5rem]">
      <path
        d="M12 22s6-5.1 6-12a6 6 0 10-12 0c0 6.9 6 12 6 12z"
        fill="#ff7a00"
      />
      <circle cx="12" cy="10" r="2.3" fill="#111111" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[2.5rem] w-[2.5rem]">
      <path
        d="M4 7.5A1.5 1.5 0 015.5 6h8A1.5 1.5 0 0115 7.5v9A1.5 1.5 0 0113.5 18h-8A1.5 1.5 0 014 16.5v-9z"
        fill="#fff"
      />
      <path
        d="M16 9.2l4-2v9.6l-4-2.1V9.2z"
        fill="#fff"
      />
    </svg>
  );
}

function TicketIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 7h16v3a2 2 0 010 4v3H4v-3a2 2 0 010-4V7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GiftIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M3 11h18v3H3v-3zm1.5-4h15v4h-15V7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12 7v11" stroke="currentColor" strokeWidth="2" />
      <path d="M8 7c0-1.4 1.1-2.5 2.5-2.5S13 5.6 13 7" stroke="currentColor" strokeWidth="2" />
      <path d="M16 7c0-1.4-1.1-2.5-2.5-2.5S11 5.6 11 7" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function DollarIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14.5 9.2c0-1.2-1.1-2.2-2.5-2.2s-2.5.8-2.5 2 .9 1.8 2.5 2.2 2.5 1 2.5 2.2S13.4 16 12 16s-2.5-.9-2.5-2.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Checkbox({ checked }: { checked?: boolean }) {
  return (
    <span
      className={`flex h-[1.125rem] w-[1.125rem] items-center justify-center rounded-[0.25rem] border ${
        checked ? "border-[#ff7a00] bg-[#ff7a00]" : "border-white/15 bg-black/20"
      }`}
    >
      {checked ? <CheckIcon className="h-[0.8rem] w-[0.8rem] text-white" /> : null}
    </span>
  );
}

function Footer() {
  return (
    <footer className="mt-[4rem] border-t border-[#7a3cff] pt-[2.5rem]">
      <div className="grid gap-[2rem] md:grid-cols-2 xl:grid-cols-4">
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">
            Contact
          </h4>
          <p className="mt-[0.65rem] text-[0.875rem] font-semibold text-[#ff7a00]">
            info@getontrck.com
          </p>
          <div className="mt-[1rem] flex items-center gap-[0.8rem] text-[1.2rem] text-white">
            <span>in</span>
            <span>◎</span>
            <span>♪</span>
            <span>X</span>
          </div>
        </div>
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">
            Company
          </h4>
          <ul className="mt-[0.65rem] space-y-[0.55rem] text-[0.875rem] text-white/80">
            <li>About Us</li>
            <li>How it works</li>
            <li>Features</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">
            Legal
          </h4>
          <ul className="mt-[0.65rem] space-y-[0.55rem] text-[0.875rem] text-white/80">
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Acceptable use policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">
            Support
          </h4>
          <ul className="mt-[0.65rem] space-y-[0.55rem] text-[0.875rem] text-white/80">
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <p className="mt-[2rem] border-t border-white/15 pt-[1rem] text-[0.72rem] leading-snug text-white/45">
        TRCK is a leisure technology platform based in Nigeria. All experiences are
        provided by independent third-party creators. TRCK does not host or supervise
        these experiences and disclaims liability for third-party actions.
        <br />
        Copyright © 2025 Trck Entertainment &amp; Technology Ltd. All rights reserved.
      </p>
    </footer>
  );
}

export function EventCreationShell({
  pageTitle,
  pageDescription,
  steps,
  footerBackHref,
  footerBackLabel,
  footerPrimaryLabel,
  footerSecondaryLabel,
  footerPrimaryHref,
  footerSecondaryHref,
  rightContent,
  showTips = false,
  tipsTitle,
  tips,
}: {
  pageTitle: string;
  pageDescription: string;
  steps: Step[];
  footerBackHref: string;
  footerBackLabel: string;
  footerPrimaryLabel: string;
  footerSecondaryLabel?: string;
  footerPrimaryHref: string;
  footerSecondaryHref?: string;
  rightContent: React.ReactNode;
  showTips?: boolean;
  tipsTitle?: string;
  tips?: string[];
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[96rem] flex-col xl:flex-row">
        <aside className="w-full border-b border-white/10 bg-[#090909] px-[1.5rem] py-[1.5rem] xl:w-[20.25rem] xl:border-b-0 xl:border-r xl:border-r-[#1d1d1d] xl:px-[1.25rem] xl:py-[1.5rem]">
          <div className="flex h-full flex-col">
            <Link
              href={footerBackHref}
              className="inline-flex items-center gap-[0.6rem] text-[1.122rem] font-medium leading-none text-white transition-opacity hover:opacity-80"
            >
              <ArrowLeftIcon className="h-[1.2rem] w-[1.2rem] text-[#2d6bff]" />
              {footerBackLabel}
            </Link>

            <div className="mt-[1.5rem] inline-flex w-fit items-center gap-[0.5rem] rounded-[9999px] bg-[#ff7a00] px-[1rem] py-[0.65rem] text-[0.906rem] font-normal leading-none text-white">
              <span className="h-[0.68rem] w-[0.68rem] rounded-full bg-white" />
              Draft
            </div>

            <div className="mt-[2.3rem]">
              <h1 className="font-montserrat text-[1.5rem] font-bold leading-none text-white">
                New Event
              </h1>
              <p className="mt-[1rem] font-montserrat text-[0.875rem] font-medium leading-none text-white">
                Complete all steps to publish your event.
              </p>
            </div>

            <div className="my-[1.75rem] h-px bg-white/10" />

            <nav className="space-y-[1.6rem]">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-[0.75rem]">
                  <div
                    className={`mt-[0.1rem] flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full text-[1rem] font-semibold leading-none ${
                      step.completed
                        ? "bg-[#2ecc71] text-white"
                        : step.active
                          ? "bg-[#ff7a00] text-white"
                          : "bg-[#9a9a9a] text-[#171717]"
                    }`}
                  >
                    {step.completed ? <CheckIcon className="h-[1rem] w-[1rem] text-white" /> : step.number}
                  </div>
                  <div className="pt-[0.1rem]">
                    <p
                      className={`font-montserrat text-[1.125rem] font-semibold leading-none ${
                        step.active ? "text-white" : "text-white/80"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="mt-[0.4rem] font-montserrat text-[0.75rem] font-medium leading-none text-white">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </nav>

            <div className="mt-auto pt-[2rem]">
              <div className="h-px bg-white/10" />
              <div className="mt-[2rem]">
                <Link
                  href="/"
                  className="inline-flex items-center gap-[0.55rem] font-montserrat text-[1.043rem] font-medium leading-none text-white"
                >
                  <span className="flex h-[1.1rem] w-[1.1rem] items-center justify-center rounded-full bg-[#2d6bff] text-[0.8rem] font-bold">
                    ?
                  </span>
                  Help &amp; Support
                </Link>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1 px-[1.25rem] py-[2rem] sm:px-[2rem] lg:px-[3rem] xl:px-[4rem] xl:py-[3rem]">
          <div className="mx-auto max-w-[74rem]">
            <div className="max-w-[46rem]">
              <h2 className="font-montserrat text-[2rem] font-bold leading-none text-white sm:text-[2.5rem]">
                {pageTitle}
              </h2>
              <p className="mt-[1rem] font-montserrat text-[1.125rem] font-medium leading-snug text-white">
                {pageDescription}
              </p>
            </div>

            <div className="mt-[2rem] rounded-[1rem] bg-[#151515] p-[1.25rem] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:p-[2rem]">
              {rightContent}
            </div>

            {showTips ? (
              <div className="mt-[2rem] rounded-[0.75rem] border border-[#ff7a00] bg-[#fff2ea] p-[1.5rem] text-[#1e1e1e]">
                <div className="flex items-start gap-[0.75rem]">
                  <span className="mt-[0.15rem] text-[#ff9a1f]">💡</span>
                  <div className="flex-1">
                    <h3 className="font-montserrat text-[1.125rem] font-semibold leading-none text-black/75">
                      {tipsTitle}
                    </h3>
                    <div className="mt-[1rem] space-y-[0.8rem]">
                      {tips?.map((tip) => (
                        <div key={tip} className="flex items-start gap-[0.7rem]">
                          <CheckIcon className="mt-[0.1rem] h-[1rem] w-[1rem] text-[#ff9a1f]" />
                          <p className="font-montserrat text-[0.875rem] font-semibold leading-snug text-black/55">
                            {tip}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="mt-[2rem] flex flex-col items-center justify-between gap-[1rem] sm:flex-row">
              <Link
                href={footerBackHref}
                className="inline-flex items-center gap-[0.6rem] font-montserrat text-[1.103rem] font-semibold leading-none text-white/75"
              >
                <ArrowLeftIcon className="h-[1.15rem] w-[1.15rem] text-white/75" />
                {footerBackLabel}
              </Link>

              <div className="flex w-full flex-col gap-[0.75rem] sm:w-auto sm:flex-row">
                {footerSecondaryLabel ? (
                  <Link
                    href={footerSecondaryHref ?? footerBackHref}
                    className="inline-flex h-[3.693rem] items-center justify-center rounded-[0.64rem] border border-white/75 px-[1.5rem] font-montserrat text-[1.103rem] font-semibold leading-none text-white/75 transition-colors hover:bg-white/5"
                  >
                    {footerSecondaryLabel}
                  </Link>
                ) : null}
                <Link
                  href={footerPrimaryHref}
                  className="inline-flex h-[3.693rem] min-w-[15.01rem] items-center justify-center rounded-[0.64rem] bg-[#ff7a00] px-[1.5rem] font-montserrat text-[1.103rem] font-semibold leading-none text-white transition-opacity hover:opacity-90"
                >
                  {footerPrimaryLabel}
                </Link>
              </div>
            </div>

            <Footer />
          </div>
        </section>
      </div>
    </main>
  );
}

export function BasicInfoPage() {
  const steps: Step[] = [
    { number: 1, title: "Basic Info", description: "Name, description, category", active: true, completed: true },
    { number: 2, title: "Schedule", description: "Date, time, duration" },
    { number: 3, title: "Location", description: "Venue or online link" },
    { number: 4, title: "Tickets", description: "Pricing & availability" },
    { number: 5, title: "Media", description: "Images & gallery" },
    { number: 6, title: "Review", description: "Preview & publish" },
  ];

  const ticketTypes: TicketType[] = [
    {
      title: "Physical Event",
      description: "In-person at a venue",
      icon: <LocationIcon />,
      active: true,
    },
    {
      title: "Virtual Event",
      description: "Online meeting or stream",
      icon: <VideoIcon />,
    },
  ];

  return (
    <EventCreationShell
      pageTitle="Basic Information"
      pageDescription="Tell attendees what your event is about and what makes it special"
      steps={steps}
      footerBackHref="/host/events"
      footerBackLabel="Back To Events"
      footerPrimaryLabel="Continue to Schedule"
      footerPrimaryHref="/host/events/new/tickets"
      rightContent={
        <div className="space-y-[1.6rem]">
          <div>
            <label className="mb-[0.55rem] block font-montserrat text-[0.875rem] font-medium leading-none text-white">
              Ticket Name
            </label>
            <div className="rounded-[0.7rem] bg-[#2b2b2b] px-[1rem] py-[0.9rem] text-[0.875rem] font-semibold text-white/70">
              Early Bird
            </div>
            <p className="mt-[0.6rem] text-[0.75rem] font-medium leading-none text-white/55">
              Be clear and descriptive
            </p>
            <p className="text-right text-[0.75rem] leading-none text-white/55">0/75</p>
          </div>

          <div>
            <label className="mb-[0.55rem] block font-montserrat text-[0.875rem] font-medium leading-none text-white">
              Event Category
            </label>
            <div className="rounded-[0.7rem] bg-[#2b2b2b] px-[1rem] py-[0.9rem] text-[0.875rem] font-semibold text-white/70">
              Select a category
            </div>
          </div>

          <div>
            <label className="mb-[0.8rem] block font-montserrat text-[0.875rem] font-medium leading-none text-white">
              Event Type
            </label>
            <div className="grid gap-[1rem] md:grid-cols-2">
              {ticketTypes.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-[0.75rem] border p-[1.4rem] ${
                    item.active ? "border-[#ff7a00] bg-[#171717]" : "border-white/25 bg-[#141414]"
                  }`}
                >
                  <div className="flex min-h-[7.9rem] items-center justify-center gap-[1rem] text-center md:justify-start md:text-left">
                    {item.icon}
                    <div>
                      <div className="font-montserrat text-[0.875rem] font-semibold leading-none text-white/70">
                        {item.title}
                      </div>
                      <div className="mt-[0.55rem] font-montserrat text-[0.75rem] font-medium leading-none text-white">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-[0.55rem] block font-montserrat text-[0.875rem] font-medium leading-none text-white">
              Description
            </label>
            <div className="min-h-[11rem] rounded-[0.7rem] bg-[#2b2b2b] px-[1rem] py-[1rem] text-[0.904rem] font-semibold text-white/45">
              Describe your event. What will attendees experience? What should they expect
            </div>
            <p className="mt-[0.6rem] text-[0.75rem] font-medium leading-none text-white/55">
              Include key details and highlights.
            </p>
            <p className="text-right text-[0.75rem] leading-none text-white/55">0/2000</p>
          </div>

          <div>
            <label className="mb-[0.55rem] block font-montserrat text-[0.875rem] font-medium leading-none text-white">
              Tags
            </label>
            <div className="rounded-[0.7rem] border border-white/25 bg-[#2b2b2b] px-[1rem] py-[0.95rem] text-[0.875rem] font-semibold text-white/45">
              Add tags to help people find your event (e.g., Yoga, networking, workshop)
            </div>
            <p className="mt-[0.6rem] text-[0.75rem] font-medium leading-none text-white/55">
              Separate tags with commas
            </p>
          </div>
        </div>
      }
      showTips
      tipsTitle="Tip for a Great Event Listing"
      tips={[
        "Use a clear descriptive title that tells what your event is about",
        "Write a compelling description that highlights key benefits",
        "Choose the most relevant category to help people discover your event",
      ]}
    />
  );
}

export function TicketPricingPage() {
  const steps: Step[] = [
    { number: 1, title: "Basic Info", description: "Name, description, category", completed: true },
    { number: 2, title: "Schedule", description: "Date, time, duration", active: true },
    { number: 3, title: "Location", description: "Venue or online link" },
    { number: 4, title: "Tickets", description: "Pricing & availability" },
    { number: 5, title: "Media", description: "Images & gallery" },
    { number: 6, title: "Review", description: "Preview & publish" },
  ];

  const pricingTypes: TicketType[] = [
    {
      title: "Paid Event",
      description: "Charge for tickets",
      icon: <TicketIcon className="h-[2.3rem] w-[2.3rem] text-[#ff7a00]" />,
      active: true,
    },
    {
      title: "Free Event",
      description: "No charge to attend",
      icon: <GiftIcon className="h-[2.3rem] w-[2.3rem] text-white" />,
    },
    {
      title: "Donation",
      description: "Pay what you want",
      icon: <DollarIcon className="h-[2.3rem] w-[2.3rem] text-white" />,
    },
  ];

  return (
    <EventCreationShell
      pageTitle="Create ticket and set pricing"
      pageDescription="Choose how attendees will access your event and define your ticket structure."
      steps={steps}
      footerBackHref="/host/events/new"
      footerBackLabel="Back to Location"
      footerPrimaryLabel="Continue to Media"
      footerPrimaryHref="/host/events/new"
      footerSecondaryLabel="Save as Draft"
      footerSecondaryHref="/host/events/new"
      rightContent={
        <div className="space-y-[2rem]">
          <div className="rounded-[0.8rem] border border-white/10 bg-[#101010] p-[1rem]">
            <h3 className="text-[1rem] font-semibold text-white">What type of event is this?</h3>
            <div className="mt-[1.1rem] grid gap-[0.9rem] lg:grid-cols-3">
              {pricingTypes.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-[0.55rem] border p-[1.25rem] ${
                    item.active ? "border-[#ff7a00] bg-[#fde6dc]" : "border-white/75 bg-[#141414]"
                  }`}
                >
                  <div className="flex min-h-[7rem] items-center justify-center text-center">
                    <div>
                      <div className="mx-auto flex justify-center">{item.icon}</div>
                      <div className={`mt-[0.85rem] font-montserrat text-[1rem] font-semibold leading-none ${item.active ? "text-[#2a2a2a]" : "text-white/75"}`}>
                        {item.title}
                      </div>
                      <div className={`mt-[0.55rem] font-montserrat text-[0.75rem] font-medium leading-none ${item.active ? "text-[#5c5c5c]" : "text-white/60"}`}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-[0.85rem] flex items-center justify-between">
              <h3 className="text-[1.125rem] font-semibold text-white">Ticket Tiers</h3>
              <button type="button" className="text-[0.95rem] font-medium text-[#ff7a00]">
                + Add Ticket Tier
              </button>
            </div>

            <div className="rounded-[0.9rem] bg-[#151515] p-[1.1rem] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
              <div className="flex items-start justify-between gap-[1rem]">
                <div className="flex items-start gap-[0.75rem]">
                  <TicketIcon className="mt-[0.1rem] h-[2rem] w-[2rem] text-[#ff7a00]" />
                  <div>
                    <p className="text-[1rem] font-semibold text-white">Early Bird</p>
                    <p className="text-[0.8rem] font-medium text-white/70">Limited availability</p>
                  </div>
                </div>
                <div className="flex items-center gap-[0.65rem] text-white">
                  <span>✎</span>
                  <span>🗑</span>
                </div>
              </div>

              <div className="mt-[1rem] grid gap-[1rem] lg:grid-cols-3">
                {["Ticket Name", "Price", "Quantity"].map((label, index) => (
                  <div key={label}>
                    <label className="mb-[0.45rem] block text-[0.85rem] font-medium text-white">{label}</label>
                    <div className="rounded-[0.55rem] bg-[#2b2b2b] px-[0.95rem] py-[0.8rem] text-[0.875rem] font-semibold text-white/70">
                      {index === 0 ? "Early Bird" : index === 1 ? "$ 25.00" : "100"}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-[1rem] grid gap-[1rem] lg:grid-cols-2">
                {["Sales Start", "Sales End"].map((label) => (
                  <div key={label}>
                    <label className="mb-[0.45rem] block text-[0.85rem] font-medium text-white">{label}</label>
                    <div className="rounded-[0.55rem] border border-[#ff7a00] bg-[#2b2b2b] px-[0.95rem] py-[0.8rem] text-[0.875rem] font-semibold text-white/50">
                      dd ---- yyyy -- -- --
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-[1rem]">
                <label className="mb-[0.45rem] block text-[0.85rem] font-medium text-white">
                  Description (Optional)
                </label>
                <div className="rounded-[0.55rem] bg-[#2b2b2b] px-[0.95rem] py-[1rem] text-[0.875rem] font-semibold text-white/35">
                  Describe what&apos;s included with this ticket
                </div>
              </div>

              <div className="mt-[1rem] flex flex-wrap items-center gap-[1.5rem]">
                <label className="flex items-center gap-[0.5rem] text-[0.85rem] text-white">
                  <Checkbox checked />
                  Visible on event page
                </label>
                <label className="flex items-center gap-[0.5rem] text-[0.85rem] text-white">
                  <Checkbox />
                  Require approval
                </label>
              </div>
            </div>
          </div>

          <div className="rounded-[0.95rem] border border-[#7b3d0e] bg-[#101010] p-[1.35rem]">
            <div className="mb-[1rem] flex items-center justify-between">
              <div>
                <h3 className="text-[1.125rem] font-semibold text-white">Promotional Codes</h3>
                <p className="mt-[0.5rem] text-[0.875rem] text-white/55">
                  Create discount codes for your event
                </p>
              </div>
              <button type="button" className="text-[0.95rem] font-medium text-[#ff7a00]">
                + Add Promo Code
              </button>
            </div>

            <div className="space-y-[0.9rem]">
              <div className="rounded-[0.75rem] border border-white/10 bg-[#121212] p-[1rem]">
                <div className="flex items-start justify-between gap-[1rem]">
                  <div>
                    <div className="flex items-center gap-[0.8rem]">
                      <h4 className="text-[1rem] font-semibold text-white">EARLYBIRD2026</h4>
                      <span className="rounded-[0.2rem] bg-[#e9f8e9] px-[0.45rem] py-[0.2rem] text-[0.72rem] font-semibold text-[#138a20]">
                        Active
                      </span>
                    </div>
                    <p className="mt-[0.45rem] text-[0.9rem] text-white/55">
                      20% off all tickets
                    </p>
                  </div>
                  <div className="flex items-center gap-[0.65rem] text-white">
                    <span>✎</span>
                    <span>🗑</span>
                  </div>
                </div>
                <div className="mt-[1.2rem] grid gap-[1rem] md:grid-cols-4">
                  <div>
                    <p className="text-[0.8rem] font-medium text-white/45">Discount</p>
                    <p className="mt-[0.3rem] text-[0.875rem] font-semibold text-white/70">20%</p>
                  </div>
                  <div>
                    <p className="text-[0.8rem] font-medium text-white/45">Used</p>
                    <p className="mt-[0.3rem] text-[0.875rem] font-semibold text-white/70">23 / 100</p>
                  </div>
                  <div>
                    <p className="text-[0.8rem] font-medium text-white/45">Valid Until</p>
                    <p className="mt-[0.3rem] text-[0.875rem] font-semibold text-white/70">Feb 15, 2026</p>
                  </div>
                  <div>
                    <p className="text-[0.8rem] font-medium text-white/45">Revenue Impact</p>
                    <p className="mt-[0.3rem] text-[0.875rem] font-semibold text-white/70">-$345.00</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[0.75rem] border border-white/10 bg-[#121212] p-[1rem]">
                <div className="flex items-start justify-between gap-[1rem]">
                  <div>
                    <div className="flex items-center gap-[0.8rem]">
                      <h4 className="text-[1rem] font-semibold text-white">STUDENT50</h4>
                      <span className="rounded-[0.2rem] bg-[#e9f8e9] px-[0.45rem] py-[0.2rem] text-[0.72rem] font-semibold text-[#138a20]">
                        Active
                      </span>
                    </div>
                    <p className="mt-[0.45rem] text-[0.9rem] text-white/55">
                      50% off all tickets
                    </p>
                  </div>
                  <div className="flex items-center gap-[0.65rem] text-white">
                    <span>✎</span>
                    <span>🗑</span>
                  </div>
                </div>
                <div className="mt-[1.2rem] grid gap-[1rem] md:grid-cols-4">
                  <div>
                    <p className="text-[0.8rem] font-medium text-white/45">Discount</p>
                    <p className="mt-[0.3rem] text-[0.875rem] font-semibold text-white/70">$50.00</p>
                  </div>
                  <div>
                    <p className="text-[0.8rem] font-medium text-white/45">Used</p>
                    <p className="mt-[0.3rem] text-[0.875rem] font-semibold text-white/70">8 / 50</p>
                  </div>
                  <div>
                    <p className="text-[0.8rem] font-medium text-white/45">Valid Until</p>
                    <p className="mt-[0.3rem] text-[0.875rem] font-semibold text-white/70">Mar 1, 2026</p>
                  </div>
                  <div>
                    <p className="text-[0.8rem] font-medium text-white/45">Revenue Impact</p>
                    <p className="mt-[0.3rem] text-[0.875rem] font-semibold text-white/70">-$400.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[0.95rem] border border-[#7b3d0e] bg-[#101010] p-[1.35rem]">
            <h3 className="text-[1.125rem] font-semibold text-white">Revenue Summary</h3>
            <div className="mt-[1.1rem] grid gap-[1rem] md:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "Total Tickets", value: "650", icon: <TicketIcon className="h-[1rem] w-[1rem] text-[#2d6bff]" />, sub: "Available for sale for sale" },
                { label: "Potential Revenue", value: "$24,000", icon: <span className="text-[#3ed166]">$</span>, sub: "If all tickets are sold" },
                { label: "Average Price", value: "$37.31", icon: <span className="text-[#b400ff]">↗</span>, sub: "Per Ticket" },
                { label: "Platform fees", value: "$1,942", icon: <span className="text-[#ff7a00]">▣</span>, sub: "Est. 8% of revenue" },
              ].map((card) => (
                <div key={card.label} className="rounded-[0.55rem] bg-[#171717] p-[1.1rem] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                  <div className="flex items-center justify-between">
                    <p className="text-[0.85rem] font-medium text-white/45">{card.label}</p>
                    <span>{card.icon}</span>
                  </div>
                  <p className="mt-[0.55rem] text-[1.75rem] font-semibold text-white">{card.value}</p>
                  <p className="mt-[0.45rem] text-[0.8rem] text-white/45">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[0.95rem] border border-[#ff7a00] bg-[#141414] p-[1.35rem]">
            <div className="flex items-start gap-[0.7rem]">
              <span className="text-[1.2rem] text-[#ff9a1f]">💡</span>
              <div>
                <h3 className="text-[1.125rem] font-semibold text-white/75">
                  Ticket Pricing Best Practices
                </h3>
                <ul className="mt-[0.55rem] space-y-[0.45rem] text-[0.875rem] text-white/55">
                  <li>Offer early bird pricing to encourage early registrations</li>
                  <li>Create multiple tiers to appeal to different budgets</li>
                  <li>Limit VIP tickets to create exclusivity and urgency</li>
                  <li>Use promotional codes strategically for marketing campaigns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

function PageCard({ children }: { children: React.ReactNode }) {
  return <div className="mt-[2rem] rounded-[1rem] bg-[#151515] p-[1.25rem] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:p-[2rem]">{children}</div>;
}

function EventSidebar({ activeIndex }: { activeIndex: number }) {
  const steps = [
    ["Basic Info", "Name, description, category", true],
    ["Schedule", "Date, time, duration", true],
    ["Location", "Venue or online link", true],
    ["Tickets", "Pricing & availability", false],
    ["Media", "Images & gallery", false],
    ["Review", "Preview & publish", false],
  ] as const;

  return (
    <aside className="w-full border-b border-white/10 bg-[#090909] px-[1.5rem] py-[1.5rem] xl:w-[20.25rem] xl:border-b-0 xl:border-r xl:border-r-[#1d1d1d] xl:px-[1.25rem] xl:py-[1.5rem]">
      <div className="flex h-full flex-col">
        <Link href="/host/events" className="inline-flex items-center gap-[0.6rem] text-[1.122rem] font-medium leading-none text-white">
          <ArrowLeftIcon className="h-[1.2rem] w-[1.2rem] text-[#2d6bff]" />
          Back To Events
        </Link>
        <div className="mt-[1.5rem] inline-flex w-fit items-center gap-[0.5rem] rounded-[9999px] bg-[#ff7a00] px-[1rem] py-[0.65rem] text-[0.906rem] text-white">
          <span className="h-[0.68rem] w-[0.68rem] rounded-full bg-white" /> Draft
        </div>
        <div className="mt-[2.3rem]">
          <h1 className="font-montserrat text-[1.5rem] font-bold leading-none">New Event</h1>
          <p className="mt-[1rem] text-[0.875rem] font-medium leading-none">Complete all steps to publish your event.</p>
        </div>
        <div className="my-[1.75rem] h-px bg-white/10" />
        <nav className="space-y-[1.6rem]">
          {steps.map(([title, desc], index) => (
            <div key={title} className="flex items-start gap-[0.75rem]">
              <div className={`mt-[0.1rem] flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full text-[1rem] font-semibold ${index < activeIndex ? "bg-[#2ecc71] text-white" : index === activeIndex ? "bg-[#ff7a00] text-white" : "bg-[#9a9a9a] text-[#171717]"}`}>
                {index < activeIndex ? "✓" : index + 1}
              </div>
              <div>
                <p className={`font-montserrat text-[1.125rem] font-semibold leading-none ${index === activeIndex ? "text-white" : "text-white/80"}`}>{title}</p>
                <p className="mt-[0.4rem] text-[0.75rem] font-medium leading-none">{desc}</p>
              </div>
            </div>
          ))}
        </nav>
        <div className="mt-auto pt-[2rem]">
          <div className="h-px bg-white/10" />
          <div className="mt-[2rem]">
            <Link href="/" className="inline-flex items-center gap-[0.55rem] font-montserrat text-[1.043rem] font-medium leading-none text-white">
              <span className="flex h-[1.1rem] w-[1.1rem] items-center justify-center rounded-full bg-[#2d6bff] text-[0.8rem] font-bold">?</span>
              Help &amp; Support
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function SchedulePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[96rem] flex-col xl:flex-row">
        <EventSidebar activeIndex={1} />
        <section className="flex-1 px-[1.25rem] py-[2rem] sm:px-[2rem] lg:px-[3rem] xl:px-[4rem] xl:py-[3rem]">
          <div className="mx-auto max-w-[74rem]">
            <div className="max-w-[46rem]">
              <h2 className="font-montserrat text-[2rem] font-bold leading-none text-white sm:text-[2.5rem]">Schedule</h2>
              <p className="mt-[0.7rem] font-montserrat text-[1.125rem] font-medium leading-snug text-white">Plan the date and timing for your event</p>
            </div>
            <PageCard>
        <div className="grid gap-[1.1rem] lg:grid-cols-3">
          {[
            { label: "Date", value: "Jul 14, 2021", icon: "📅" },
            { label: "Time", value: "02:00 PM", icon: "🕒" },
            { label: "Duration", value: "1h 45m", icon: "▲▼" },
          ].map((field) => (
            <div key={field.label}>
              <label className="mb-[0.65rem] block text-[1rem] font-medium text-white">{field.label}</label>
              <div className="flex items-center justify-between rounded-[0.55rem] bg-[#f4f4f8] px-[0.95rem] py-[0.85rem] text-[0.9rem] font-medium text-[#7b7b7b]">
                <span>{field.value}</span>
                <span className="text-[0.95rem]">{field.icon}</span>
              </div>
            </div>
          ))}
        </div>

        <label className="mt-[0.8rem] flex items-center gap-[0.6rem] text-[0.85rem] text-white">
          <Checkbox checked />
          <span>This Event will take place on the 14th of July, 2026 from 02:00PM until 04:00PM</span>
        </label>

        <div className="mt-[3rem]">
          <label className="flex items-center gap-[0.6rem] text-[0.9rem] text-white">
            <Checkbox checked />
            <span>This is a recurring event</span>
          </label>
          <p className="ml-[1.7rem] mt-[0.3rem] text-[0.85rem] text-white/45">Event repeats on a regular schedule</p>

          <div className="mt-[1.8rem] grid gap-[1rem] lg:grid-cols-[1.6fr_1fr_1fr]">
            {[
              { label: "How often does this event occur?", value: "Daily" },
              { label: "Starts from", value: "05 / 01 / 2026" },
              { label: "Till", value: "05 / 31 / 2026" },
            ].map((field) => (
              <div key={field.label}>
                <label className="mb-[0.65rem] block text-[1rem] font-medium text-white">{field.label}</label>
                <div className="flex items-center justify-between rounded-[0.55rem] border border-white/20 px-[0.95rem] py-[0.85rem] text-[0.9rem] text-white/55">
                  <span>{field.value}</span>
                  <span>⌄</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[3.5rem] flex items-center justify-between gap-[1rem]">
          <Link href="/host/events/new" className="inline-flex items-center gap-[0.55rem] text-[1.05rem] font-semibold text-white/75">
            <ArrowLeftIcon className="h-[1.1rem] w-[1.1rem] text-white/75" />
            Back to Schedule
          </Link>
          <Link href="/host/events/new/location" className="inline-flex h-[3.1rem] items-center justify-center rounded-[0.7rem] bg-[#ff7a00] px-[1.5rem] text-[1rem] font-semibold text-white">
            Continue to Location
          </Link>
        </div>

        <div className="mt-[2rem] rounded-[0.95rem] border border-[#ff7a00] bg-[#141414] p-[1.35rem]">
          <div className="flex items-start gap-[0.7rem]">
            <span className="text-[1.2rem] text-[#ff9a1f]">💡</span>
            <div>
              <h3 className="text-[1.125rem] font-semibold text-white/75">Tips for a great event listing</h3>
              <ul className="mt-[0.55rem] space-y-[0.45rem] text-[0.875rem] text-white/55">
                <li>Use a clear descriptive title that tells what your event is about</li>
                <li>Write a compelling description that highlights key benefits</li>
                <li>Choose the most relevant category to help people discover your event</li>
                <li>Add relevant tags to improve search visibility</li>
              </ul>
            </div>
          </div>
        </div>
            </PageCard>
          </div>
        </section>
      </div>
    </main>
  );
}

export function LocationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[96rem] flex-col xl:flex-row">
        <aside className="w-full border-b border-white/10 bg-[#090909] px-[1.5rem] py-[1.5rem] xl:w-[20.25rem] xl:border-b-0 xl:border-r xl:border-r-[#1d1d1d] xl:px-[1.25rem] xl:py-[1.5rem]">
          <div className="flex h-full flex-col">
            <Link href="/host/events" className="inline-flex items-center gap-[0.6rem] text-[1.122rem] font-medium leading-none text-white">
              <ArrowLeftIcon className="h-[1.2rem] w-[1.2rem] text-[#2d6bff]" />
              Back To Events
            </Link>
            <div className="mt-[1.5rem] inline-flex w-fit items-center gap-[0.5rem] rounded-[9999px] bg-[#ff7a00] px-[1rem] py-[0.65rem] text-[0.906rem] text-white">
              <span className="h-[0.68rem] w-[0.68rem] rounded-full bg-white" /> Draft
            </div>
            <div className="mt-[2.3rem]">
              <h1 className="font-montserrat text-[1.5rem] font-bold leading-none">New Event</h1>
              <p className="mt-[1rem] text-[0.875rem] font-medium leading-none">Complete all steps to publish your event.</p>
            </div>
            <div className="my-[1.75rem] h-px bg-white/10" />
            <nav className="space-y-[1.6rem]">
              {[
                ["Basic Info", "Name, description, category", true],
                ["Schedule", "Date, time, duration", true],
                ["Location", "Venue or online link", true],
                ["Tickets", "Pricing & availability", false],
                ["Media", "Images & gallery", false],
                ["Review", "Preview & publish", false],
              ].map(([title, desc, done], index) => (
                <div key={String(title)} className="flex items-start gap-[0.75rem]">
                  <div className={`mt-[0.1rem] flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full text-[1rem] font-semibold ${done ? "bg-[#2ecc71] text-white" : index === 2 ? "bg-[#ff7a00] text-white" : "bg-[#9a9a9a] text-[#171717]"}`}>
                    {done ? "✓" : index + 1}
                  </div>
                  <div>
                    <p className={`font-montserrat text-[1.125rem] font-semibold leading-none ${index === 2 ? "text-white" : "text-white/80"}`}>{title}</p>
                    <p className="mt-[0.4rem] text-[0.75rem] font-medium leading-none">{desc}</p>
                  </div>
                </div>
              ))}
            </nav>
            <div className="mt-auto pt-[2rem]">
              <div className="h-px bg-white/10" />
              <div className="mt-[2rem]">
                <Link href="/" className="inline-flex items-center gap-[0.55rem] font-montserrat text-[1.043rem] font-medium leading-none text-white">
                  <span className="flex h-[1.1rem] w-[1.1rem] items-center justify-center rounded-full bg-[#2d6bff] text-[0.8rem] font-bold">?</span>
                  Help &amp; Support
                </Link>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1 px-[1.25rem] py-[2rem] sm:px-[2rem] lg:px-[3rem] xl:px-[4rem] xl:py-[3rem]">
          <div className="mx-auto max-w-[74rem]">
            <div className="max-w-[46rem]">
              <h2 className="font-montserrat text-[2rem] font-bold leading-none text-white sm:text-[2.5rem]">Location</h2>
              <p className="mt-[1rem] font-montserrat text-[1.125rem] font-medium leading-snug text-white">Plan the location where your event will be held</p>
            </div>

            <div className="mt-[2rem] rounded-[1rem] bg-[#151515] p-[1.25rem] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:p-[2rem]">
              <div className="grid gap-[1rem] lg:grid-cols-[1.2fr_0.9fr_0.7fr]">
                {["Location", "Country", "State"].map((label, idx) => (
                  <div key={label}>
                    <label className="mb-[0.65rem] block text-[1rem] font-medium text-white">{label}</label>
                    <div className="flex items-center justify-between rounded-[0.55rem] border border-white/20 px-[0.95rem] py-[0.85rem] text-[0.9rem] text-white/45">
                      <span>{idx === 0 ? "Search locations" : idx === 1 ? "Nigeria" : "Lagos"}</span>
                      <span>⌄</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-[1.1rem]">
                <label className="mb-[0.65rem] block text-[1rem] font-medium text-white">Give Directions</label>
                <div className="rounded-[0.55rem] bg-[#2b2b2b] px-[0.95rem] py-[0.95rem] text-[0.9rem] text-white/35">Describe How to get to your event location</div>
              </div>

              <div className="mt-[2rem] grid gap-[1.2rem] lg:grid-cols-2">
                {[
                  ["Parking options", ["Add option", "Add option"], "🚗"],
                  ["Public Transport options", ["Add option", "Add option"], "🚌"],
                  ["Accessibility options", ["Add option", "Add option"], "ⓘ"],
                  ["Nearby spots", ["Add option", "Add option"], "➤"],
                ].map(([title, options, icon]) => (
                  <div key={String(title)}>
                    <div className="mb-[0.7rem] flex items-center gap-[0.7rem]">
                      <span className="text-[#ff7a00]">{icon as string}</span>
                      <h3 className="text-[1rem] font-medium text-white">{title as string}</h3>
                    </div>
                    <div className="space-y-[0.7rem]">
                      {(options as string[]).map((opt, optIdx) => (
                        <div key={optIdx} className="flex items-center justify-between rounded-[0.55rem] border border-white/20 px-[0.95rem] py-[0.8rem] text-[0.9rem] text-white/45">
                          <span>{opt}</span>
                          <span>+</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-[2.2rem]">
                <div className="h-[20rem] overflow-hidden rounded-[0.2rem] bg-[linear-gradient(135deg,#f3f0e9_0%,#dfe8d5_35%,#b8def2_65%,#efe5ba_100%)]" />
                <div className="mt-[1.4rem]">
                  <h3 className="text-[1.4rem] font-medium text-white">O2 Arena</h3>
                  <p className="mt-[0.4rem] text-[0.85rem] text-white/75">Peninsula Square London SE10 ODX United Kingdom</p>
                  <button className="mt-[1.3rem] inline-flex items-center gap-[0.55rem] rounded-[0.45rem] bg-[#ff7a00] px-[1rem] py-[0.8rem] text-[0.85rem] font-medium text-white">
                    Direction Preview
                  </button>

                  <div className="mt-[2.5rem] grid gap-[1.5rem] md:grid-cols-2">
                    {[
                      ["Parking", "Street parking available. Paid garage 2 blocks away on 5th Ave.", "🚗"],
                      ["Public Transport", "Subway: L train to 14th St. Bus: M14 to Main St.", "🚌"],
                      ["Accessibility", "Wheelchair accessible entrance and restrooms available.", "ⓘ"],
                      ["Nearby", "2 blocks from Central Plaza, across from City Museum.", "➤"],
                    ].map(([title, desc, icon]) => (
                      <div key={String(title)}>
                        <div className="mb-[0.55rem] flex items-center gap-[0.65rem] text-[#ff7a00]">
                          <span>{icon as string}</span>
                          <h4 className="text-[1rem] font-medium text-white">{title as string}</h4>
                        </div>
                        <p className="text-[0.8rem] leading-snug text-white/75">{desc as string}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-[3rem] flex items-center justify-between gap-[1rem]">
                <Link href="/host/events/new/schedule" className="inline-flex items-center gap-[0.55rem] text-[1.05rem] font-semibold text-white/75">
                  <ArrowLeftIcon className="h-[1.1rem] w-[1.1rem] text-white/75" />
                  Back to Schedule
                </Link>
                <Link href="/host/events/new/media" className="inline-flex h-[3.1rem] items-center justify-center rounded-[0.7rem] bg-[#ff7a00] px-[1.5rem] text-[1rem] font-semibold text-white">
                  Continue to Tickets
                </Link>
              </div>

              <div className="mt-[2rem] rounded-[0.95rem] border border-[#ff7a00] bg-[#141414] p-[1.35rem]">
                <div className="flex items-start gap-[0.7rem]">
                  <span className="text-[1.2rem] text-[#ff9a1f]">💡</span>
                  <div>
                    <h3 className="text-[1.125rem] font-semibold text-white/75">Tips for a great event listing</h3>
                    <ul className="mt-[0.55rem] space-y-[0.45rem] text-[0.875rem] text-white/55">
                      <li>Use a clear descriptive title that tells what your event is about</li>
                      <li>Write a compelling description that highlights key benefits</li>
                      <li>Choose the most relevant category to help people discover your event</li>
                      <li>Add relevant tags to improve search visibility</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export function MediaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[96rem] flex-col xl:flex-row">
        <EventSidebar activeIndex={4} />
        <section className="flex-1 px-[1.25rem] py-[2rem] sm:px-[2rem] lg:px-[3rem] xl:px-[4rem] xl:py-[3rem]">
        <div className="max-w-[74rem]">
          <h2 className="font-montserrat text-[2rem] font-bold leading-none text-white sm:text-[2.5rem]">Media</h2>
          <p className="mt-[0.7rem] font-montserrat text-[1.125rem] font-medium leading-snug text-white">Upload images as related to your event</p>

          <PageCard>
            <div className="rounded-[0.75rem] bg-[#151515] p-[1.5rem] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
              <div className="flex min-h-[17rem] flex-col items-center justify-center rounded-[0.7rem] bg-[#1c1c1c] text-center">
                <h3 className="text-[1.25rem] font-semibold text-white">Drop your image here</h3>
                <p className="mt-[0.55rem] text-[0.95rem] text-white/85">or click to browse from your computer</p>
                <button className="mt-[1.25rem] rounded-[0.55rem] bg-[#ff7a00] px-[1.3rem] py-[0.85rem] text-[0.95rem] font-semibold text-white">Choose File</button>
                <p className="mt-[1.3rem] text-[0.8rem] text-white/55">Supported formats: JPG, PNG GIF (Max10mb)</p>
              </div>

              <div className="mt-[1.5rem] grid gap-[1rem] md:grid-cols-3">
                {[
                  ["Stock Photos", "Browse free images", "🖼"],
                  ["AI Generator", "Create with AI", "✦"],
                  ["My Library", "Previous uploads", "▢"],
                ].map(([title, desc, icon]) => (
                  <div key={String(title)} className="rounded-[0.55rem] bg-[#1b1b1b] p-[1rem]">
                    <div className="text-[1.2rem] text-white">{icon as string}</div>
                    <p className="mt-[0.7rem] text-[0.95rem] text-white/85">{title as string}</p>
                    <p className="text-[0.75rem] text-white/55">{desc as string}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[2.5rem]">
              <div className="flex items-end justify-between gap-[1rem]">
                <div>
                  <h3 className="text-[1.6rem] font-semibold text-white">Event Gallery</h3>
                  <p className="mt-[0.5rem] text-[0.95rem] text-white/85">Add multiple images to showcase your event</p>
                </div>
                <button className="rounded-[0.45rem] border border-white/60 px-[0.9rem] py-[0.5rem] text-[0.9rem] text-white">+ Add images</button>
              </div>
              <div className="mt-[1.5rem] grid grid-cols-2 gap-[1rem] md:grid-cols-4">
                <div className="aspect-square bg-[linear-gradient(45deg,#eaeaea_25%,#ffffff_25%,#ffffff_50%,#eaeaea_50%,#eaeaea_75%,#ffffff_75%)] bg-[length:1.2rem_1.2rem]" />
                <div className="aspect-square bg-[linear-gradient(45deg,#eaeaea_25%,#ffffff_25%,#ffffff_50%,#eaeaea_50%,#eaeaea_75%,#ffffff_75%)] bg-[length:1.2rem_1.2rem]" />
                <div className="aspect-square bg-[linear-gradient(45deg,#eaeaea_25%,#ffffff_25%,#ffffff_50%,#eaeaea_50%,#eaeaea_75%,#ffffff_75%)] bg-[length:1.2rem_1.2rem]" />
                <div className="flex aspect-square items-center justify-center border border-white/20 bg-black text-white">+<span className="ml-[0.4rem]">Add More</span></div>
              </div>
            </div>

            <div className="mt-[2.5rem] grid gap-[1rem] md:grid-cols-2">
              {[
                ["Upload Video", "MP4, MOV, AVI (Max 500MB)", "⤴"],
                ["YouTube/Vimeo Link", "Embed from video platforms", "▶"],
              ].map(([title, desc, icon]) => (
                <div key={String(title)} className="rounded-[0.75rem] border border-white/10 bg-[#1a1a1a] p-[1.2rem]">
                  <div className="text-[1.25rem] text-[#ff7a00]">{icon as string}</div>
                  <p className="mt-[0.8rem] text-[0.95rem] text-white/85">{title as string}</p>
                  <p className="text-[0.8rem] text-white/55">{desc as string}</p>
                </div>
              ))}
            </div>

            <div className="mt-[2.5rem] rounded-[0.95rem] bg-[#1a1a1a] p-[1.5rem]">
              <h3 className="text-[1.5rem] font-semibold text-white">Event Branding</h3>
              <div className="mt-[1rem] grid gap-[1rem] lg:grid-cols-2">
                <div className="rounded-[0.65rem] border border-dashed border-white/15 p-[1.5rem] text-center">
                  <div className="text-[1.5rem]">🖼</div>
                  <p className="mt-[0.8rem] text-[0.95rem] text-white/85">Upload Logo</p>
                  <p className="text-[0.75rem] text-white/55">PNG or SVG (Max 2MB)</p>
                </div>
                <div>
                  <label className="mb-[0.55rem] block text-[0.9rem] text-white">Brand Color</label>
                  <div className="rounded-[0.2rem] border border-[#ff7a00] bg-black px-[0.95rem] py-[0.8rem] text-[0.85rem] text-white">#FF6835</div>
                  <p className="mt-[0.55rem] text-[0.75rem] text-white/55">This colour will be used in tickets and professionally</p>
                </div>
              </div>
            </div>

            <div className="mt-[2rem] grid gap-[1rem] lg:grid-cols-2">
              {["Facebook Preview", "Twitter Preview"].map((label, idx) => (
                <div key={idx} className="rounded-[0.75rem] bg-[#1a1a1a] p-[0.75rem]">
                  <div className="flex items-center gap-[0.5rem] text-[0.8rem] text-white/85">
                    <span className="h-[1rem] w-[1rem] rounded-full bg-[#1877f2]" />
                    {label}
                  </div>
                  <div className="mt-[0.65rem] h-[10rem] rounded-[0.35rem] bg-[linear-gradient(135deg,#7d5a48,#caa18f)]" />
                  <div className="mt-[0.65rem] text-[0.95rem] text-white">Summer Music Festival 2024</div>
                  <p className="text-[0.75rem] text-white/55">Join us for an unforgettable night of music...</p>
                </div>
              ))}
            </div>

            <div className="mt-[3rem] flex items-center justify-between gap-[1rem]">
              <Link href="/host/events/new/location" className="inline-flex items-center gap-[0.55rem] text-[1.05rem] font-semibold text-white/75">
                <ArrowLeftIcon className="h-[1.1rem] w-[1.1rem] text-white/75" />
                Back to Location
              </Link>
              <div className="flex gap-[0.8rem]">
                <Link href="/host/events/new" className="inline-flex h-[3.1rem] items-center justify-center rounded-[0.55rem] border border-white/70 px-[1.2rem] text-[1rem] font-semibold text-white">Save as Draft</Link>
                <Link href="/host/events/new" className="inline-flex h-[3.1rem] items-center justify-center rounded-[0.55rem] bg-[#ff7a00] px-[1.2rem] text-[1rem] font-semibold text-white">Continue to Review</Link>
              </div>
            </div>

            <Footer />
          </PageCard>
        </div>
        </section>
      </div>
    </main>
  );
}

function ReviewTopCard() {
  return (
    <div className="rounded-[1rem] bg-[#151515] p-[1rem] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:p-[1.25rem]">
      <div className="h-[8rem] overflow-hidden rounded-[0.35rem] bg-[linear-gradient(135deg,#6c4d3d_0%,#d58a4d_30%,#3b2b25_60%,#1b1b1b_100%)]" />
      <div className="mt-[1rem] flex flex-col gap-[1rem] lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h3 className="font-montserrat text-[2rem] font-bold leading-none text-white">
            5IVE LIVE AT <span className="text-[#ff7a00]">O2 ARENA</span>
          </h3>
          <div className="mt-[0.85rem] flex flex-wrap items-center gap-x-[1.5rem] gap-y-[0.75rem] text-[0.85rem] text-white/75">
            <span className="text-[#ffd200]">★★★★★</span>
            <span>4.8 (127 Reviews)</span>
            <span>40,034 people are attending</span>
            <span>Hosted by Elizabeth R Events</span>
          </div>
        </div>
        <button className="inline-flex h-[2.2rem] items-center justify-center rounded-[0.45rem] bg-[#ff7a00] px-[1rem] text-[0.95rem] font-semibold text-white">
          Book Event →
        </button>
      </div>
    </div>
  );
}

function ReviewPanel({ title, children, action }: { title: string; children: React.ReactNode; action?: string }) {
  return (
    <section className="rounded-[1rem] bg-[#151515] p-[1.25rem] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      <div className="mb-[1rem] flex items-center justify-between">
        <h3 className="text-[1.2rem] font-semibold text-white">{title}</h3>
        {action ? <button className="rounded-[0.35rem] bg-[#ff7a00] px-[0.85rem] py-[0.35rem] text-[0.75rem] font-semibold text-white">{action}</button> : null}
      </div>
      {children}
    </section>
  );
}

export function ReviewPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[96rem] flex-col xl:flex-row">
        <EventSidebar activeIndex={5} />
        <section className="flex-1 px-[1.25rem] py-[2rem] sm:px-[2rem] lg:px-[3rem] xl:px-[4rem] xl:py-[3rem]">
          <div className="mx-auto max-w-[74rem]">
            <div className="max-w-[46rem]">
              <h2 className="font-montserrat text-[2rem] font-bold leading-none text-white sm:text-[2.5rem]">Review</h2>
              <p className="mt-[0.7rem] font-montserrat text-[1.125rem] font-medium leading-snug text-white">Preview your changes and publish them</p>
            </div>

            <div className="mt-[2rem] space-y-[2rem]">
              <ReviewTopCard />

              <ReviewPanel title="">
                <div className="grid gap-[1.2rem] md:grid-cols-2 xl:grid-cols-4">
                  <div className="border-r border-white/15 pr-[1rem]">
                    <p className="text-[0.8rem] text-white/55">Date &amp; Time</p>
                    <p className="mt-[0.8rem] text-[0.95rem] font-semibold text-white">3RD - 30TH NOVEMBER, 2025</p>
                    <p className="mt-[0.55rem] text-[0.75rem] text-white/45">7:00 PM - 11:00 PM EST</p>
                    <button className="mt-[1rem] rounded-[0.35rem] bg-[#ff7a00] px-[0.85rem] py-[0.4rem] text-[0.75rem] font-semibold text-white">Add to Calendar</button>
                  </div>
                  <div className="border-r border-white/15 pr-[1rem]">
                    <p className="text-[0.8rem] text-white/55">Location</p>
                    <p className="mt-[0.8rem] text-[0.95rem] font-semibold text-white">O2 Arena London, United Kingdom</p>
                    <p className="mt-[0.55rem] text-[0.75rem] text-white/45">123 Main St, London, UK 10001</p>
                    <p className="mt-[1rem] text-[0.72rem] text-[#ff7a00]">View on map</p>
                  </div>
                  <div className="border-r border-white/15 pr-[1rem]">
                    <p className="text-[0.8rem] text-white/55">Ticket Type</p>
                    <p className="mt-[0.8rem] text-[0.95rem] font-semibold text-white">General Admission</p>
                  </div>
                  <div>
                    <p className="text-[0.8rem] text-white/55">Age Requirement</p>
                    <p className="mt-[0.8rem] text-[0.95rem] font-semibold text-white">18+ with valid ID required</p>
                  </div>
                </div>
              </ReviewPanel>

              <ReviewPanel title="About This Event" action="Edit About">
                <p className="max-w-[60rem] text-[0.9rem] leading-relaxed text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor felis sit amet pulvinar interdum. Quisque eu turpis arcu. Pellentesque id nisi in nunc lobortis laoreet. In hac habitasse platea dictumst. Pellentesque sed tincidunt sem, vel tempus est. Duis accumsan tellus nec finibus pretium. Morbi congue volutpat consequat. Fusce feugiat quam ac nulla ultrices auctor.
                </p>
              </ReviewPanel>

              <ReviewPanel title="What’s Included">
                <div className="grid gap-[1rem] md:grid-cols-2">
                  <ul className="space-y-[0.55rem] text-[0.9rem] text-white/85">
                    <li>• Premium Seating With Excellent Sightlights</li>
                    <li>• Light Refreshments</li>
                  </ul>
                  <ul className="space-y-[0.55rem] text-[0.9rem] text-white/85">
                    <li>• Full Bar Service</li>
                    <li>• Networking Opportunities</li>
                  </ul>
                </div>
                <div className="mt-[1.5rem] border-t border-[#ff7a00] pt-[1.25rem]">
                  <h4 className="text-[1.1rem] font-semibold text-white">What to bring</h4>
                  <ul className="mt-[0.75rem] space-y-[0.55rem] text-[0.9rem] text-white/85">
                    <li>• Valid Government-Issued ID (18+ Event)</li>
                    <li>• Your ticket confirmation (digital or printed)</li>
                    <li>• Networking Opportunities</li>
                  </ul>
                </div>
              </ReviewPanel>

              <ReviewPanel title="Event Schedule" action="Edit Schedule">
                <div className="space-y-[1.2rem]">
                  {[
                    ["7:00 PM", "Doors Open & Welcome Drinks", "Arrive, check in, and enjoy complimentary beverages"],
                    ["7:30 PM", "Opening Act", "Local talent showcase featuring emerging afrobeat artists"],
                    ["8:30 PM", "Main Performance", "Headlining afrobeats ensemble performs classic and contemporary pieces"],
                    ["10:30 PM", "Networking Session", "Meet fellow afrobeats enthusiasts and the performers"],
                    ["11:00 PM", "Event Ends", "Thank you for joining us!"],
                  ].map(([time, title, desc]) => (
                    <div key={String(time)} className="flex gap-[1rem]">
                      <div className="w-[4.5rem] text-[0.72rem] text-[#ff7a00]">{time}</div>
                      <div className="border-l border-[#ff7a00] pl-[1rem]">
                        <p className="text-[0.95rem] font-semibold text-white">{title}</p>
                        <p className="mt-[0.25rem] text-[0.78rem] text-white/55">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ReviewPanel>

              <ReviewPanel title="Location" action="Edit Location">
                <div className="h-[18rem] overflow-hidden rounded-[0.5rem] bg-[linear-gradient(135deg,#f3f0e9_0%,#dfe8d5_35%,#b8def2_65%,#efe5ba_100%)]" />
                <div className="mt-[1.25rem]">
                  <h4 className="text-[1.3rem] font-semibold text-white">O2 Arena</h4>
                  <p className="mt-[0.4rem] text-[0.85rem] text-white/75">Peninsula Square London SE10 ODX United Kingdom</p>
                  <button className="mt-[1rem] inline-flex rounded-[0.45rem] bg-[#ff7a00] px-[1rem] py-[0.65rem] text-[0.85rem] font-semibold text-white">Get Directions</button>
                </div>
                <div className="mt-[1.5rem] grid gap-[1rem] md:grid-cols-2 xl:grid-cols-4">
                  {[
                    ["Parking", "Street parking available. Paid garage 2 blocks away on 5th Ave."],
                    ["Public Transport", "Subway: L train to 14th St. Bus: M14 to Main St."],
                    ["Accessibility", "Wheelchair accessible entrance and restrooms available."],
                    ["Nearby", "2 blocks from Central Plaza, across from City Museum."],
                  ].map(([title, desc]) => (
                    <div key={title}>
                      <h5 className="text-[1rem] font-semibold text-white">{title}</h5>
                      <p className="mt-[0.35rem] text-[0.78rem] leading-snug text-white/75">{desc}</p>
                    </div>
                  ))}
                </div>
              </ReviewPanel>

              <ReviewPanel title="Tickets" action="Edit Tickets">
                <div className="space-y-[1rem]">
                  <div className="rounded-[0.75rem] border border-[#1f6fff] bg-[#101010] p-[1rem]">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="inline-flex rounded-[0.45rem] bg-[#ff7a00] px-[0.7rem] py-[0.25rem] text-[0.75rem] font-semibold text-white">VIP Package</div>
                        <h4 className="mt-[0.9rem] text-[1.45rem] font-semibold text-white">5IVE LIVE AT O2 ARENA</h4>
                        <div className="mt-[1rem] grid gap-[1rem] md:grid-cols-2 xl:grid-cols-4">
                          <div><p className="text-[0.72rem] text-white/55">Date and Time</p><p className="mt-[0.3rem] text-[0.85rem] text-white">Nov 15, 2024 · 7:00 PM</p></div>
                          <div><p className="text-[0.72rem] text-white/55">Location</p><p className="mt-[0.3rem] text-[0.85rem] text-white">O2 Arena, London, United Kingdom</p></div>
                          <div><p className="text-[0.72rem] text-white/55">Ticket Holder</p><p className="mt-[0.3rem] text-[0.85rem] text-white">John Doe</p></div>
                          <div><p className="text-[0.72rem] text-white/55">Ticket ID</p><p className="mt-[0.3rem] text-[0.85rem] text-white">GA-2024-001</p></div>
                        </div>
                      </div>
                      <button className="rounded-[0.45rem] bg-[#ff7a00] px-[0.8rem] py-[0.35rem] text-[0.75rem] font-semibold text-white">Edit Tickets</button>
                    </div>
                    <div className="mt-[1rem] grid grid-cols-[6rem_1fr] gap-[1rem] rounded-[0.5rem] border-t border-white/10 bg-[#2a2a2a] p-[1rem]">
                      <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded-[0.35rem] bg-white text-black">QR</div>
                      <div>
                        <p className="text-[0.95rem] font-semibold text-white">Show this QR code at entry</p>
                        <p className="mt-[0.35rem] text-[0.78rem] text-white/60">Present this code at the venue entrance for quick check-in</p>
                        <button className="mt-[0.75rem] rounded-[0.45rem] bg-[#ff7a00] px-[0.85rem] py-[0.5rem] text-[0.85rem] font-semibold text-white">View Details</button>
                      </div>
                    </div>
                    <div className="mt-[0.5rem] border-t border-[#ff7a00] bg-[#ff7a00] px-[0.85rem] py-[0.35rem] text-[0.75rem] text-white">⚡ Priority Entry - Skip the line with VIP access</div>
                  </div>
                </div>
              </ReviewPanel>

              <div className="flex items-center justify-between gap-[1rem]">
                <Link href="/host/events/new/media" className="inline-flex items-center gap-[0.55rem] text-[1.05rem] font-semibold text-white/75">
                  <ArrowLeftIcon className="h-[1.1rem] w-[1.1rem] text-white/75" />
                  Back to Media
                </Link>
                <div className="flex gap-[0.8rem]">
                  <Link href="/host/events/new" className="inline-flex h-[3.1rem] items-center justify-center rounded-[0.55rem] border border-white/70 px-[1.2rem] text-[1rem] font-semibold text-white">Save as Draft</Link>
                  <Link href="/host/events/new/published" className="inline-flex h-[3.1rem] items-center justify-center rounded-[0.55rem] bg-[#ff7a00] px-[1.2rem] text-[1rem] font-semibold text-white">Publish Details</Link>
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export function PublishedPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen items-center justify-center px-[1.5rem] py-[2rem]">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 w-full max-w-[62rem] rounded-[0.8rem] bg-[#121212] p-[1.25rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <div className="h-[10rem] overflow-hidden rounded-[0.35rem] bg-[linear-gradient(135deg,#6c4d3d_0%,#d58a4d_30%,#3b2b25_60%,#1b1b1b_100%)]" />
          <div className="mt-[1rem] flex flex-col gap-[1rem] items-center text-center">
            <div className="rounded-full bg-[#26e65d] p-[0.45rem] text-black">✓</div>
            <h2 className="text-[2rem] font-semibold text-white">Published!</h2>
            <p className="max-w-[24rem] text-[0.85rem] text-white/55">Congratulations! you have successfully Published your event and can now manage engagement.</p>
            <Link href="/admin/events" className="inline-flex h-[3rem] items-center justify-center rounded-[0.55rem] bg-[#ff7a00] px-[1.2rem] text-[1rem] font-semibold text-white">
              View Event →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
