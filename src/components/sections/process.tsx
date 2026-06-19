"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We dig into your problem, your users, and your constraints. No generic discovery workshops — just real conversations.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes, prototypes, and user flows. We design collaboratively so there are no surprises when development starts.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Agile sprints with biweekly demos. You see working software early and often — not a big reveal after 4 months.",
  },
  {
    number: "04",
    title: "Ship & Support",
    description:
      "We handle the launch, set up monitoring, and stick around for ongoing iteration. We don't ghost you after deploy.",
  },
];

export function ProcessSection() {
  return (
    <SectionWrapper id="process">
      <SectionHeader
        variant="minimal"
        title="How we work"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className="relative"
          >
            {/* Connecting line (desktop only) */}
            {i < steps.length - 1 && (
              <div
                className="hidden lg:block absolute top-6 left-full w-full h-px"
                style={{ background: "var(--theme-border)", transform: "translateX(-12px)", width: "calc(100% - 24px)" }}
              />
            )}

            {/* Step number */}
            <div
              className="text-sm font-bold mb-4"
              style={{
                color: "var(--brand-primary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {step.number}
            </div>

            {/* Step dot */}
            <div
              className="w-3 h-3 rounded-full mb-5"
              style={{ background: "var(--gradient-brand)" }}
            />

            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--theme-text-primary)" }}
            >
              {step.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--theme-text-secondary)", lineHeight: "1.7" }}
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
