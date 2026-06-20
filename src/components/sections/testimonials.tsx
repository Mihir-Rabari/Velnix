"use client";

import { Quote } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";

const testimonials = [
  { name: "Sarah Chen", role: "CTO", company: "Finora", avatar: "SC", content: "Velnix rethought our legacy architecture and delivered a week early. Our engineering team still uses their codebase as the quality benchmark.", color: "#6366F1" },
  { name: "Marcus Rodriguez", role: "Founder", company: "Northstar AI", avatar: "MR", content: "They challenged our brief, asked the hard questions, and built something stronger than what we originally specified. A genuine product partner.", color: "#06B6D4" },
  { name: "Emily Watson", role: "VP Engineering", company: "Cloudline", avatar: "EW", content: "Their engineers care about maintainability as much as delivery speed. The handoff was cleaner than most code we had written internally.", color: "#10B981" },
  { name: "James Park", role: "Product Director", company: "MediCore", avatar: "JP", content: "The team felt embedded with ours from day one: fast communication, proactive risk management, and complete transparency around tradeoffs.", color: "#F59E0B" },
  { name: "Nadia Patel", role: "COO", company: "Relay Commerce", avatar: "NP", content: "Our checkout conversion improved within the first month. Velnix connected design decisions directly to measurable business outcomes.", color: "#EC4899" },
  { name: "Daniel Kim", role: "Head of Product", company: "Atlas Works", avatar: "DK", content: "They turned a complicated operational workflow into a product our team understood immediately. Adoption was faster than we expected.", color: "#8B5CF6" },
  { name: "Olivia Martin", role: "CEO", company: "Luma Health", avatar: "OM", content: "Velnix brought clarity to every stage, from discovery through launch. We always knew what was shipping, why it mattered, and what came next.", color: "#14B8A6" },
  { name: "Aiden Brooks", role: "Engineering Lead", company: "Orbit Labs", avatar: "AB", content: "Performance improved dramatically without adding complexity. Their technical judgment saved us months of future rework.", color: "#F97316" },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <article className="w-[280px] shrink-0 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-5 shadow-sm sm:w-[320px]">
      <Quote size={17} className="mb-3 text-[var(--brand-primary)]" aria-hidden="true" />
      <blockquote className="min-h-24 text-sm leading-6 text-[var(--theme-text-secondary)]">&ldquo;{testimonial.content}&rdquo;</blockquote>
      <div className="mt-4 flex items-center gap-3 border-t border-[var(--theme-border)] pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white" style={{ background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}99)` }}>
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--theme-text-primary)]">{testimonial.name}</p>
          <p className="text-xs text-[var(--theme-text-tertiary)]">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof testimonials; reverse?: boolean }) {
  return (
    <div className="testimonial-marquee overflow-hidden" aria-label="Client testimonials">
      <div className={`testimonial-marquee-track ${reverse ? "testimonial-marquee-track-reverse" : ""}`}>
        <div className="flex shrink-0 gap-5 pr-5">
          {items.map((testimonial) => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)}
        </div>
        <div className="flex shrink-0 gap-5 pr-5" aria-hidden="true">
          {items.map((testimonial) => <TestimonialCard key={`${testimonial.name}-duplicate`} testimonial={testimonial} />)}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" containerWidth="full" padding="sm">
      <div className="px-[var(--section-px)]">
        <SectionHeader variant="default" label="From our clients" title="Don't take our word for it" />
      </div>
      <div className="space-y-4 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
        <MarqueeRow items={testimonials.slice(0, 4)} />
        <MarqueeRow items={testimonials.slice(4)} reverse />
      </div>
    </SectionWrapper>
  );
}
