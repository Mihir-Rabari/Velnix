"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "A Series B fintech startup",
    avatar: "SC",
    content:
      "We came to Velnix with a mess of legacy code and a 3-month deadline. They didn't just refactor — they rethought the entire architecture and delivered a week early. Our engineering team still references their codebase as the gold standard.",
    color: "#6366F1",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder",
    company: "An AI analytics company",
    avatar: "MR",
    content:
      "Most agencies nod along and build what you ask for. Velnix pushed back, asked harder questions, and ultimately built something better than what I'd spec'd. That's the difference between a vendor and a partner.",
    color: "#06B6D4",
  },
  {
    name: "Emily Watson",
    role: "VP of Engineering",
    company: "A cloud infrastructure company",
    avatar: "EW",
    content:
      "We've worked with five different agencies over the years. Velnix is the only one we kept. Their engineers genuinely care about code quality, not just shipping fast. The codebase they handed off was cleaner than most of our internal code.",
    color: "#10B981",
  },
  {
    name: "James Park",
    role: "Product Director",
    company: "A healthcare SaaS platform",
    avatar: "JP",
    content:
      "The team felt like an extension of ours from day one. Slack responses in minutes, proactive about potential issues, transparent about tradeoffs. I've recommended them to three other companies since.",
    color: "#F59E0B",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <SectionWrapper id="testimonials">
      <SectionHeader
        variant="default"
        label="From our clients"
        title="Don't take our word for it"
      />

      {/* Featured testimonial — large, centered */}
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Quote */}
            <blockquote
              className="text-xl md:text-2xl font-normal leading-relaxed mb-10"
              style={{
                color: "var(--theme-text-primary)",
                lineHeight: "1.6",
                fontFamily: "var(--font-body)",
              }}
            >
              &ldquo;{testimonials[current].content}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center justify-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{
                  background: `linear-gradient(135deg, ${testimonials[current].color}, ${testimonials[current].color}88)`,
                }}
              >
                {testimonials[current].avatar}
              </div>
              <div className="text-left">
                <div
                  className="text-base font-semibold"
                  style={{ color: "var(--theme-text-primary)" }}
                >
                  {testimonials[current].name}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  {testimonials[current].role}, {testimonials[current].company}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-colors cursor-pointer"
            style={{
              background: "var(--theme-surface)",
              border: "1px solid var(--theme-border)",
              color: "var(--theme-text-primary)",
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all cursor-pointer"
                style={{
                  width: current === i ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "var(--radius-full)",
                  background: current === i ? "var(--brand-primary)" : "var(--theme-border)",
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-colors cursor-pointer"
            style={{
              background: "var(--theme-surface)",
              border: "1px solid var(--theme-border)",
              color: "var(--theme-text-primary)",
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
