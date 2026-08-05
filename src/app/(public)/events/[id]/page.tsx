function Footer() {
  return (
    <footer className="mt-[3rem] border-t border-[#7a3cff] pt-[2rem]">
      <div className="grid gap-[2rem] md:grid-cols-2 xl:grid-cols-4">
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">Contact</h4>
          <p className="mt-[0.65rem] text-[0.875rem] font-semibold text-[#ff7a00]">info@getontrck.com</p>
        </div>
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">Company</h4>
          <ul className="mt-[0.65rem] space-y-[0.55rem] text-[0.875rem] text-white/80">
            <li>About Us</li>
            <li>How it works</li>
            <li>Features</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">Legal</h4>
          <ul className="mt-[0.65rem] space-y-[0.55rem] text-[0.875rem] text-white/80">
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Acceptable use policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.875rem] font-bold uppercase tracking-wide text-white">Support</h4>
          <ul className="mt-[0.65rem] space-y-[0.55rem] text-[0.875rem] text-white/80">
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <p className="mt-[2rem] border-t border-white/15 pt-[1rem] text-[0.72rem] leading-snug text-white/45">
        TRCK is a leisure technology platform based in Nigeria. All experiences are provided by independent third-party creators. TRCK does not host or supervise these experiences and disclaims liability for third-party actions.
        <br />
        Copyright © 2025 Trck Entertainment &amp; Technology Ltd. All rights reserved.
      </p>
    </footer>
  );
}

function Section({ title, action, children }: { title: string; action?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[1rem] bg-[#151515] p-[1.25rem] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      <div className="mb-[1rem] flex items-center justify-between">
        <h3 className="text-[1.1rem] font-semibold text-white">{title}</h3>
        {action ? <button className="rounded-[0.35rem] bg-[#3a3a3a] px-[0.8rem] py-[0.35rem] text-[0.75rem] font-medium text-white/80">{action}</button> : null}
      </div>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-[96rem] px-[1rem] py-[1rem]">
        <div className="mb-[1rem] flex items-center justify-between rounded-[0.5rem] border border-white/10 bg-white px-[1rem] py-[0.9rem] text-black">
          <div className="flex items-center gap-[1rem]">
            <button className="rounded-[0.35rem] border border-black/20 px-[0.55rem] py-[0.2rem]">〈</button>
            <h1 className="text-[1rem] font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-[0.7rem] text-sm">
            <div className="h-8 w-8 rounded-full bg-[#ff7a00] text-white flex items-center justify-center">A</div>
            <span>Dominion Ogbaji</span>
            <span className="text-black/40">Super Admin</span>
          </div>
        </div>

        <div className="grid gap-[1rem] xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-[1rem]">
            <section className="relative overflow-hidden rounded-[1rem] bg-[#151515] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="h-[22rem] bg-[linear-gradient(135deg,#1d1d1d_0%,#4b352c_40%,#7b4f37_55%,#101010_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_45%,rgba(0,0,0,0.65)_100%)]" />
              <button className="absolute right-[1.5rem] top-[1.5rem] rounded-[0.5rem] bg-white/20 px-[1rem] py-[0.45rem] text-[0.8rem] font-semibold text-white">Edit Cover</button>
              <div className="relative -mt-[8rem] px-[1.5rem] pb-[1.5rem]">
                <div className="inline-flex gap-[0.5rem]">
                  <span className="rounded-[0.35rem] border border-[#ff7a00] px-[0.8rem] py-[0.2rem] text-[0.75rem]">Concert</span>
                  <span className="rounded-[0.35rem] border border-[#ff7a00] px-[0.8rem] py-[0.2rem] text-[0.75rem]">Music</span>
                </div>
                <h2 className="mt-[1rem] max-w-[34rem] text-[2.4rem] font-black leading-none">
                  5IVE LIVE AT <span className="text-[#ff7a00]">O2 ARENA</span>
                </h2>
                <div className="mt-[1rem] flex gap-[1.2rem] text-[0.8rem] text-white/75">
                  <label className="inline-flex items-center gap-[0.45rem]"><span className="h-[0.8rem] w-[0.8rem] rounded-full bg-[#ff7a00]" /> Published</label>
                  <label className="inline-flex items-center gap-[0.45rem]"><span className="h-[0.8rem] w-[0.8rem] rounded-full bg-[#ffc2a6]" /> Featured</label>
                </div>
              </div>
            </section>

            <div className="grid gap-[1rem] xl:grid-cols-2">
              <Section title="Key Information">
                <div className="space-y-[1.4rem]">
                  <div>
                    <h4 className="mb-[0.5rem] text-[1rem] font-semibold">Date &amp; Time</h4>
                    <p className="text-[0.85rem] text-white/75">Friday, Nov 15, 2024</p>
                    <p className="text-[0.85rem] text-white/75">7:00 PM - 11:00 PM (4 hours)</p>
                    <p className="text-[0.85rem] text-white/55">Timezone: EST</p>
                    <div className="mt-[0.8rem] rounded-[0.5rem] bg-[#232323] px-[1rem] py-[0.8rem] text-[0.85rem]">Time until event: 2 days, 5 hours</div>
                    <div className="mt-[0.8rem] flex gap-[0.75rem]">
                      <button className="rounded-[0.45rem] border border-[#ff7a00] px-[1rem] py-[0.55rem] text-[0.85rem]">Add to calendar</button>
                      <button className="rounded-[0.45rem] border border-[#ff7a00] px-[1rem] py-[0.55rem] text-[0.85rem]">Reschedule Event</button>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-[0.5rem] text-[1rem] font-semibold">Location</h4>
                    <p className="text-[0.85rem] text-white/75">O2 Arena, London, United Kingdom</p>
                    <p className="text-[0.85rem] text-white/75">Peninsula Square London SE10 ODX United Kingdom</p>
                    <div className="mt-[0.65rem] grid grid-cols-2 gap-[0.5rem] text-[0.8rem] text-white/55">
                      <span>Capacity: 200 people</span>
                      <span>Layout: General seating</span>
                      <span>Parking: Available nearby</span>
                      <span>Accessibility: Wheelchair accessible</span>
                    </div>
                    <div className="mt-[0.8rem] flex gap-[0.75rem]">
                      <button className="rounded-[0.45rem] border border-[#ff7a00] px-[1rem] py-[0.55rem] text-[0.85rem]">View on map</button>
                      <button className="rounded-[0.45rem] border border-[#ff7a00] px-[1rem] py-[0.55rem] text-[0.85rem]">Get Directions</button>
                      <button className="rounded-[0.45rem] border border-[#ff7a00] px-[1rem] py-[0.55rem] text-[0.85rem]">Change Venue</button>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-[0.65rem] text-[1rem] font-semibold">Tickets &amp; Pricing</h4>
                    <div className="space-y-[0.75rem]">
                      {[
                        ["General Admission", "150 available", "₦80,000"],
                        ["VIP Experience", "40 available", "₦180,000"],
                        ["Early Bird", "10 sold", "₦60,000"],
                      ].map(([name, sub, price]) => (
                        <div key={name} className="flex items-center justify-between rounded-[0.55rem] bg-[#2b2b2b] px-[1rem] py-[0.8rem]">
                          <div>
                            <p className="text-[0.9rem]">{name}</p>
                            <p className="text-[0.75rem] text-white/45">{sub}</p>
                          </div>
                          <p className="text-[0.85rem]">{price}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-[0.8rem] flex gap-[0.75rem]">
                      <button className="rounded-[0.45rem] bg-[#ff7a00] px-[1rem] py-[0.55rem] text-[0.85rem] font-semibold">Manage Ticket Types</button>
                      <button className="rounded-[0.45rem] border border-[#ff7a00] px-[1rem] py-[0.55rem] text-[0.85rem]">Edit Pricing</button>
                    </div>
                  </div>
                </div>
              </Section>

              <Section title="Event Performance">
                <div className="space-y-[1.4rem]">
                  <div>
                    <p className="text-[0.85rem] text-white/55">TICKET SALES</p>
                    <p className="mt-[0.5rem] text-[2rem] font-bold">156 <span className="text-[1rem] text-white/55">/ 200 Sold</span></p>
                    <div className="mt-[0.55rem] h-[0.35rem] rounded-full bg-white/20"><div className="h-full w-[78%] rounded-full bg-[#ff7a00]" /></div>
                    <p className="mt-[0.45rem] text-[0.8rem] text-white/55">78%</p>
                  </div>
                  <div>
                    <p className="text-[0.85rem] text-white/55">REVENUE</p>
                    <p className="mt-[0.5rem] text-[2rem] font-bold">₦450K <span className="text-[1rem] text-white/55">/ 600K</span></p>
                    <div className="mt-[0.55rem] h-[0.35rem] rounded-full bg-white/20"><div className="h-full w-[75%] rounded-full bg-[#ff7a00]" /></div>
                    <p className="mt-[0.45rem] text-[0.8rem] text-white/55">Target: 75% achieved</p>
                  </div>
                  <div>
                    <p className="text-[0.85rem] text-white/55">CHECK-INS</p>
                    <p className="mt-[0.5rem] text-[2rem] font-bold">145 <span className="text-[1rem] text-white/55">/ 156 checked in</span></p>
                    <div className="mt-[0.55rem] h-[0.35rem] rounded-full bg-white/20"><div className="h-full w-[78%] rounded-full bg-[#ff7a00]" /></div>
                    <p className="mt-[0.45rem] text-[0.8rem] text-white/55">78%</p>
                  </div>
                  <div>
                    <p className="text-[0.85rem] text-white/55">ENGAGEMENT</p>
                    <div className="mt-[1rem] grid grid-cols-3 text-center">
                      <div><p className="text-[1.8rem] font-bold text-[#ff7a00]">234</p><p className="text-[0.8rem] text-white/55">views today</p></div>
                      <div><p className="text-[1.8rem] font-bold text-[#ff7a00]">12</p><p className="text-[0.8rem] text-white/55">Shares</p></div>
                      <div><p className="text-[1.8rem] font-bold text-[#ff7a00]">8</p><p className="text-[0.8rem] text-white/55">Saves</p></div>
                    </div>
                  </div>
                  <button className="w-full rounded-[0.45rem] bg-[#ff7a00] py-[0.8rem] text-[0.95rem] font-semibold text-white">View Full Analytics</button>
                </div>
              </Section>
            </div>

            <div className="grid gap-[1rem] xl:grid-cols-[1fr_0.7fr]">
              <Section title="Event Description" action="Edit Description">
                <p className="text-[0.88rem] leading-relaxed text-white/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dolor vitae mauris maximus rhoncus. Duis sodales tellus non nibh ultricies volutpat id sodales nulla. Vestibulum tempor dui quam, a congue ligula porttitor id. Quisque id viverra tellus.
                </p>
              </Section>

              <Section title="Quick Actions">
                <div className="space-y-[0.6rem]">
                  {["Email all attendees", "Send Update", "Generate comp ticket", "Export attendee list", "Download report", "Duplicate event"].map((item, idx) => (
                    <button key={item} className={`w-full rounded-[0.45rem] px-[1rem] py-[0.65rem] text-left text-[0.85rem] ${idx === 0 ? "bg-[#ff7a00] text-white" : "bg-[#2b2b2b] text-white/85"}`}>
                      {item}
                    </button>
                  ))}
                </div>
              </Section>
            </div>

            <div className="grid gap-[1rem] xl:grid-cols-[1fr_0.7fr]">
              <Section title="Marketing &amp; Promotion">
                <div className="grid gap-[0.75rem] md:grid-cols-2">
                  {["Social Media Cards", "Email Preview", "Event QR Code", "Promo Codes"].map((item, idx) => (
                    <div key={item} className="rounded-[0.55rem] bg-[#2b2b2b] px-[0.85rem] py-[0.9rem]">
                      <p className="text-[0.9rem]">{item}</p>
                      <p className="text-[0.72rem] text-white/45">{idx === 1 ? "View & Customize" : idx === 3 ? "3 Active" : "Download"}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-[1rem] flex gap-[0.75rem]">
                  <button className="rounded-[0.45rem] bg-[#ff7a00] px-[1rem] py-[0.55rem] text-[0.85rem] font-semibold text-white">Create Promo Code</button>
                  <button className="rounded-[0.45rem] border border-[#ff7a00] px-[1rem] py-[0.55rem] text-[0.85rem]">Send Email Blast</button>
                  <button className="rounded-[0.45rem] border border-[#ff7a00] px-[1rem] py-[0.55rem] text-[0.85rem]">Generate Marketing Kit</button>
                </div>
              </Section>

              <Section title="Attendees (156)">
                <div className="space-y-[0.8rem]">
                  {["John Doe", "John Doe", "John Doe", "John Doe", "John Doe"].map((name, idx) => (
                    <div key={idx} className="flex items-center gap-[0.75rem]">
                      <div className="flex h-[1.8rem] w-[1.8rem] items-center justify-center rounded-full bg-[#ff5b5b] text-[0.7rem]">JD</div>
                      <div>
                        <p className="text-[0.85rem]">{name}</p>
                        <p className="text-[0.72rem] text-white/45">GA · 2h ago</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-[1rem] space-y-[0.5rem] border-t border-white/10 pt-[1rem]">
                  <button className="w-full rounded-[0.45rem] bg-[#ff7a00] py-[0.65rem] text-[0.85rem] font-semibold text-white">View All Attendees</button>
                  <button className="w-full rounded-[0.45rem] bg-[#2b2b2b] py-[0.65rem] text-[0.85rem] font-semibold text-white/85">Check-in Mode</button>
                </div>
              </Section>
            </div>

            <div className="grid gap-[1rem] xl:grid-cols-[1fr_0.7fr]">
              <Section title="What’s Included">
                <div className="grid gap-[0.6rem] md:grid-cols-2">
                  <div className="rounded-[0.55rem] bg-[#2b2b2b] px-[0.85rem] py-[0.8rem]">Premium Seating With Excellent Sightlights</div>
                  <div className="rounded-[0.55rem] bg-[#2b2b2b] px-[0.85rem] py-[0.8rem]">Full Bar Service</div>
                  <div className="rounded-[0.55rem] bg-[#2b2b2b] px-[0.85rem] py-[0.8rem]">Light Refreshments</div>
                  <div className="rounded-[0.55rem] bg-[#2b2b2b] px-[0.85rem] py-[0.8rem]">Networking Opportunities</div>
                </div>
                <div className="mt-[1.2rem] border-t border-[#ff7a00] pt-[1rem]">
                  <h4 className="text-[1rem] font-semibold">What to bring</h4>
                  <div className="mt-[0.55rem] space-y-[0.45rem] text-[0.85rem] text-white/75">
                    <p>Valid Government-Issued ID (18+ Event)</p>
                    <p>Your ticket confirmation (digital or printed)</p>
                    <p>Networking Opportunities</p>
                  </div>
                </div>
              </Section>

              <Section title="Revenue Details">
                <div className="space-y-[0.7rem] text-[0.85rem] text-white/75">
                  <div className="flex justify-between"><span>Gross Sales:</span><span>₦480,000</span></div>
                  <div className="flex justify-between"><span>Discounts:</span><span>-₦30,000</span></div>
                  <div className="flex justify-between"><span>Refunds:</span><span>-₦0</span></div>
                  <div className="border-t border-[#ff7a00] pt-[0.8rem] flex justify-between"><span className="font-semibold text-white">Net Revenue:</span><span className="font-semibold text-white">₦450,000</span></div>
                  <div className="flex justify-between"><span>Platform fee (5%):</span><span>-₦22,500</span></div>
                  <div className="flex justify-between"><span>Payment processing:</span><span>-₦7,200</span></div>
                  <div className="border-t border-[#ff7a00] pt-[0.8rem] flex justify-between"><span className="font-semibold text-white">Your Payout:</span><span className="font-semibold text-white">₦420,300</span></div>
                  <div className="text-[0.75rem] text-white/55">Status: Processing</div>
                  <div className="text-[0.75rem] text-white/55">Expected: Nov 20, 2024</div>
                  <button className="mt-[0.8rem] w-full rounded-[0.45rem] bg-[#2b2b2b] py-[0.65rem] text-[0.85rem] text-white/85">View Detailed Report</button>
                </div>
              </Section>
            </div>

            <Section title="FAQs">
              <div className="space-y-[0.7rem]">
                {["Can I attend individual events?", "What's the cancellation policy?", "Is there parking available?", "Are recordings available?", "Are there age restrictions?"].map((q, idx) => (
                  <div key={q} className="border-b border-[#ff7a00] pb-[0.65rem] text-[0.85rem]">
                    <div className="flex items-center justify-between">
                      <span>{q}</span>
                      <span>{idx === 4 ? "⌃" : "⌄"}</span>
                    </div>
                    {idx === 4 ? <p className="mt-[0.45rem] text-[0.75rem] text-white/55">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit justo a est pellentesque pulvinar.</p> : null}
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Why book with Trck?">
              <div className="space-y-[0.8rem] text-[0.85rem] text-white/75">
                <p><strong>Secure Payment</strong> - Your payment information is encrypted and secure.</p>
                <p><strong>Instant Confirmation</strong> - Receive your tickets immediately via email.</p>
                <p><strong>Best Price Guarantee</strong> - We offer competitive pricing and exclusive deals.</p>
              </div>
            </Section>

            <Section title="What Our Customers Say">
              <div className="space-y-[0.75rem]">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="rounded-[0.8rem] bg-[#2b2b2b] p-[0.9rem]">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[0.9rem] font-semibold">Jane Doe</p>
                        <p className="text-[0.72rem] text-white/45">November 3rd, 2025</p>
                      </div>
                      <p className="text-[#ffd200]">★★★★★</p>
                    </div>
                    <p className="mt-[0.6rem] text-[0.78rem] text-white/75">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit justo a est pellentesque pulvinar.</p>
                  </div>
                ))}
                <div className="text-right text-[0.85rem] text-white/75">View All →</div>
              </div>
            </Section>

            <Section title="Discover More">
              <div className="space-y-[1.5rem]">
                <div className="text-center">
                  <h3 className="font-serif text-[2rem] font-bold text-black bg-white inline-block px-[1rem] py-[0.2rem]">DISCOVER MORE</h3>
                </div>
                {[1,2,3].map((n) => (
                  <div key={n} className="space-y-[0.7rem] text-center">
                    <div className="h-[13rem] bg-black" />
                    <div className="text-[0.9rem] font-semibold text-black">Tips</div>
                    <div className="text-[1rem] font-semibold text-black">How All In Prices Make Buying Tickets Easier</div>
                    <p className="text-[0.9rem] text-black/45">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="text-[0.85rem] font-semibold text-[#2d6bff]">DISCOVER MORE</div>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
}
