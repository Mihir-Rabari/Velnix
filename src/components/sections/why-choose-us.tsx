"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";

const reasons = [
  {
    metric: "97%",
    metricLabel: "on-time delivery",
    title: "We ship when we say we will",
    description:
      "Transparent timelines, milestone tracking, and honest updates. We don't overpromise — we build in buffer and deliver on schedule.",
  },
  {
    metric: "143",
    metricLabel: "projects completed",
    title: "We've done this before",
    description:
      "Across startups, scale-ups, and enterprises — from fintech to healthcare to e-commerce. We bring cross-industry perspective to every engagement.",
  },
  {
    metric: "<2h",
    metricLabel: "avg response time",
    title: "You'll always know what's happening",
    description:
      "Dedicated Slack channel, weekly demos, direct access to your engineering lead. No account managers playing telephone.",
  },
  {
    metric: "99.9%",
    metricLabel: "uptime SLA",
    title: "We don't disappear after launch",
    description:
      "24/7 monitoring, proactive maintenance, and ongoing support. Your product keeps running smoothly while you focus on growth.",
  },
];

export function WhyChooseUsSection() {
  return (
    <SectionWrapper id="why-choose-us">
      <SectionHeader
        variant="default"
        label="Why us"
        title={`What makes working with us ${String.fromCharCode(8203)}different`}
        description="We're a small, senior team that treats your project like our own product. No juniors learning on your dime."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 max-w-5xl mx-auto mt-12">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            className="group relative flex flex-col items-start"
          >
            {/* Metric Display */}
            <div className="flex items-baseline gap-2.5">
              <span
                className="text-5xl md:text-6xl font-extrabold tracking-tight transition-transform duration-300 group-hover:scale-105 origin-left"
                style={{ color: "var(--brand-primary)", fontFamily: "var(--font-heading)" }}
              >
                {reason.metric}
              </span>
              <span
                className="text-xs uppercase tracking-wider font-semibold opacity-70"
                style={{ color: "var(--theme-text-tertiary)", letterSpacing: "0.06em" }}
              >
                {reason.metricLabel}
              </span>
            </div>

            {/* Accent Line */}
            <div className="w-12 h-[2px] bg-[var(--theme-border)] mt-4 mb-3 transition-all duration-300 group-hover:w-20 group-hover:bg-[var(--brand-primary)]" />

            {/* Content */}
            <h3
              className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--brand-primary)]"
              style={{ color: "var(--theme-text-primary)" }}
            >
              {reason.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--theme-text-secondary)", lineHeight: "1.7" }}
            >
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
