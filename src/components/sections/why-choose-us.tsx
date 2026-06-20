"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";

const reasons = [
  {
    metric: "Weekly",
    metricLabel: "Demos & Releases",
    title: "We ship working software, not PowerPoints",
    description:
      "Transparent milestones and continuous delivery. We build with automated staging pipelines so you can test real code every week, not slides decks.",
  },
  {
    metric: "Direct",
    metricLabel: "Slack & GitHub Access",
    title: "We are builders working for builders",
    description:
      "No account managers playing telephone. You collaborate directly with senior engineers and product designers in shared Slack rooms and Linear backlogs.",
  },
  {
    metric: "99.9%",
    metricLabel: "Platform Uptime SLA",
    title: "We don't disappear after launch",
    description:
      "Comprehensive telemetry, error monitoring, and post-launch SLA maintenance. We make sure your codebase and servers scale smoothly as you grow.",
  },
];

export function WhyChooseUsSection() {
  return (
    <SectionWrapper id="why-choose-us">
      <SectionHeader
        variant="default"
        label="Why us"
        title="Senior builders only. No overhead."
        description="We operate as a product partner and technical execution team. We focus on shipping products, not selling PowerPoints."
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
