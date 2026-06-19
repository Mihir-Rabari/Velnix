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

      <div className="space-y-4 max-w-4xl mx-auto">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            className="group"
            style={{
              background: "var(--theme-surface)",
              border: "1px solid var(--theme-border)",
              borderRadius: "var(--radius-xl)",
              transition: "var(--default-card-transition)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center p-6 md:p-8">
              {/* Metric — left side */}
              <div className="md:col-span-3">
                <div
                  className="text-3xl md:text-4xl font-bold tabular-nums"
                  style={{ color: "var(--brand-primary)" }}
                >
                  {reason.metric}
                </div>
                <div
                  className="text-xs uppercase tracking-wider mt-1"
                  style={{ color: "var(--theme-text-tertiary)", letterSpacing: "0.06em" }}
                >
                  {reason.metricLabel}
                </div>
              </div>

              {/* Content — right side */}
              <div className="md:col-span-9">
                <h3
                  className="text-lg font-semibold mb-1.5"
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
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
