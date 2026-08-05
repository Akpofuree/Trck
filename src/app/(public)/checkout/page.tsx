function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[1rem] bg-[#1b1b1b] p-[1rem] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      <h2 className="text-[1rem] font-semibold text-white">{title}</h2>
      <div className="mt-[0.85rem]">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto min-h-screen max-w-[28rem] px-[1rem] pb-[2rem] pt-[1rem] sm:max-w-[40rem]">
        <div className="flex items-center justify-between pb-[1rem] text-white">
          <button className="text-[1.2rem]">‹</button>
          <div className="text-[0.95rem] font-semibold">Review Your Order</div>
          <div />
        </div>

        <div className="rounded-[0.9rem] bg-[#141414] p-[0.75rem] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          <div className="h-[7.5rem] overflow-hidden rounded-[0.5rem] bg-[linear-gradient(135deg,#6c4d3d_0%,#d58a4d_30%,#3b2b25_60%,#1b1b1b_100%)]" />
          <div className="mt-[0.85rem] flex items-start gap-[0.75rem]">
            <div className="h-[4.4rem] w-[4.4rem] rounded-[0.35rem] bg-[linear-gradient(135deg,#6c4d3d_0%,#d58a4d_50%,#1b1b1b_100%)]" />
            <div className="flex-1">
              <p className="text-[0.85rem] text-white/70">5IVE LIVE AT <span className="text-[#ff7a00]">O2 ARENA</span></p>
              <p className="mt-[0.35rem] text-[0.75rem] text-white/55">Friday November, 2024</p>
              <p className="text-[0.75rem] text-white/55">O2 Arena London, United Kingdom</p>
            </div>
          </div>

          <div className="mt-[0.9rem] grid grid-cols-3 gap-[0.5rem] text-center text-[0.7rem]">
            {[
              ["1", "Select Tickets"],
              ["2", "Review"],
              ["3", "Payment"],
            ].map(([num, label], idx) => (
              <div key={label as string} className="flex flex-col items-center">
                <div className={`flex h-[2rem] w-[2rem] items-center justify-center rounded-full ${idx === 1 ? "bg-[#ff7a00]" : "bg-[#2a2a2a]"} text-white`}>
                  {num}
                </div>
                <div className="mt-[0.45rem] text-white/65">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[1rem] rounded-[1rem] bg-[#171717] p-[1rem]">
          <div className="text-center text-[1.1rem] font-semibold text-white">Review Your Order</div>
          <div className="mt-[1rem] rounded-[0.85rem] bg-[#2b2b2b] p-[1rem]">
            <div className="flex items-center gap-[0.6rem] text-white/75">
              <span>◔</span>
              <span className="text-[0.85rem]">Tickets reserved for</span>
            </div>
            <div className="mt-[0.8rem] text-[1.5rem] font-bold">11:32</div>
            <div className="mt-[0.75rem] h-[0.3rem] rounded-full bg-white/20">
              <div className="h-full w-[82%] rounded-full bg-[#ff7a00]" />
            </div>
            <p className="mt-[0.6rem] text-[0.8rem] text-white/55">Complete checkout to secure your tickets</p>
          </div>
        </div>

        <div className="mt-[1rem] space-y-[1rem]">
          <SectionCard title="Order Total">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[0.95rem] font-semibold">VIP PACKAGE</p>
                <p className="text-[0.72rem] text-white/45">Quantity: 1</p>
              </div>
              <p className="text-[1rem] font-semibold text-[#ff7a00]">₦80,000</p>
            </div>
            <div className="mt-[1rem] space-y-[0.45rem] border-t border-white/10 pt-[1rem] text-[0.8rem] text-white/70">
              <div className="flex justify-between"><span>Subtotal</span><span>₦80,000</span></div>
              <div className="flex justify-between"><span>Service Fee</span><span>₦5,000</span></div>
              <div className="flex justify-between"><span>Tax</span><span>₦4,500</span></div>
            </div>
            <div className="mt-[0.9rem] flex gap-[0.5rem]">
              <input className="h-[2.6rem] flex-1 rounded-[0.35rem] border border-[#ff7a00] bg-[#2b2b2b] px-[0.8rem] text-[0.85rem] text-white placeholder:text-white/35" placeholder="Promo Code" />
              <button className="h-[2.6rem] rounded-[0.35rem] bg-[#ff7a00] px-[1rem] text-[0.85rem] font-semibold text-white">Apply</button>
            </div>
            <div className="mt-[0.9rem] flex justify-between border-t border-[#ff7a00] pt-[0.85rem]">
              <span className="text-[1rem] font-semibold">Total</span>
              <span className="text-[1rem] font-semibold text-[#ff7a00]">₦89,500</span>
            </div>
            <button className="mt-[1rem] w-full rounded-[0.45rem] bg-[#ff7a00] py-[0.85rem] text-[0.9rem] font-semibold text-white">Continue to Payment</button>
            <div className="mt-[1rem] space-y-[0.5rem] border-t border-[#ff7a00] pt-[1rem] text-[0.8rem] text-white/70">
              <div>🔒 Secure checkout</div>
              <div>🎟 Instant delivery</div>
              <div>↻ Free cancellation</div>
            </div>
            <div className="mt-[1rem] border-t border-[#ff7a00] pt-[1rem] text-center text-[0.78rem] text-white/55">
              Need help? Chat with us
              <div className="mt-[0.45rem]">View seating · Event details · FAQs</div>
            </div>
          </SectionCard>

          <SectionCard title="Ticket Holder Details">
            <div className="space-y-[0.8rem]">
              {[
                ["First Name *", "John"],
                ["Last Name *", "Doe"],
                ["Email Address *", "Johndoe@email.com"],
                ["Phone Number *", "+234 34 1234 567 890"],
              ].map(([label, value]) => (
                <div key={label as string}>
                  <label className="mb-[0.35rem] block text-[0.8rem] text-white/75">{label}</label>
                  <div className="rounded-[0.45rem] bg-[#2b2b2b] px-[0.8rem] py-[0.85rem] text-[0.85rem] text-white/55">{value}</div>
                </div>
              ))}
              <label className="flex items-center gap-[0.5rem] text-[0.8rem] text-white/75">
                <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-[0.2rem] bg-[#ff7a00] text-[0.7rem]">✓</span>
                Send me updates about this event
              </label>
              <label className="flex items-center gap-[0.5rem] text-[0.8rem] text-white/75">
                <span className="h-[1rem] w-[1rem] rounded-[0.2rem] border border-white/25" />
                Subscribe to newsletter for event recommendations
              </label>
            </div>
          </SectionCard>

          <SectionCard title="Special Requests (Optional)">
            <div className="rounded-[0.45rem] border border-white/20 bg-[#2b2b2b] px-[0.8rem] py-[0.85rem] text-[0.85rem] text-white/35">
              Any special requirements? (dietary, accessibility, etc)
            </div>
            <button className="mt-[0.85rem] rounded-[0.45rem] bg-[#ff7a00] px-[1rem] py-[0.65rem] text-[0.85rem] font-semibold text-white">Submit</button>
          </SectionCard>

          <SectionCard title="Important Information &amp; Policies">
            <div className="space-y-[0.9rem] text-[0.8rem] text-white/70">
              <div>
                <p className="font-semibold text-white">Event Policy</p>
                <p className="mt-[0.3rem]">Please arrive 30 minutes before the event start time. Late arrivals may not be admitted until a suitable break.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Refund Policy</p>
                <p className="mt-[0.3rem]">Full refund available up to 24 hours before the event. After this period, tickets are non-refundable but can be transferred to another person.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Age Restrictions</p>
                <p className="mt-[0.3rem]">This event is 18+ only. Valid government-issued ID required at entry. No exceptions.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Health &amp; Safety</p>
                <p className="mt-[0.3rem]">All attendees must follow venue health and safety guidelines. Masks may be required.</p>
              </div>
              <div className="pt-[0.5rem] text-[0.75rem] text-white/55">Read full terms and conditions ›</div>
            </div>
          </SectionCard>

          <SectionCard title="FAQs">
            <div className="space-y-[0.7rem]">
              {["Can I attend individual events?", "What’s the cancellation policy?", "Is there parking available?", "Are recordings available?", "Are there age restrictions?"].map((q, idx) => (
                <div key={q} className="border-b border-[#ff7a00] pb-[0.6rem] text-[0.82rem]">
                  <div className="flex items-center justify-between">
                    <span>{q}</span>
                    <span>{idx === 4 ? "⌃" : "⌄"}</span>
                  </div>
                  {idx === 4 ? <p className="mt-[0.4rem] text-[0.74rem] text-white/55">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit justo a est pellentesque pulvinar.</p> : null}
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </main>
  );
}
