"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Palette,
  Blocks,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";

const featured = [
  {
    icon: <Code2 size={24} />,
    title: "Custom Software",
    description:
      "We build the software your business needs but can't find off the shelf. Thoughtfully architected, well-tested, built to grow with you.",
    href: "/services#custom-software",
  },
  {
    icon: <Brain size={24} />,
    title: "AI & Machine Learning",
    description:
      "Practical AI that solves real problems — from intelligent document processing to predictive analytics and conversational interfaces.",
    href: "/services#ai-ml",
  },
];

const services = [
  {
    icon: <Globe size={20} />,
    title: "Web Applications",
    description: "Fast, responsive, accessible web apps built with React, Next.js, and modern tooling.",
    href: "/services#web-development",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Mobile Apps",
    description: "Native-quality iOS and Android apps. Flutter, React Native, or fully native — we'll help you pick.",
    href: "/services#mobile-development",
  },
  {
    icon: <Palette size={20} />,
    title: "UI/UX Design",
    description: "Research-led design that looks great and works even better. Wireframes through to full design systems.",
    href: "/services#design",
  },
  {
    icon: <Cloud size={20} />,
    title: "Cloud & DevOps",
    description: "AWS, Azure, GCP — we set up your infrastructure so it scales without drama.",
    href: "/services#cloud",
  },
  {
    icon: <Blocks size={20} />,
    title: "API & Integrations",
    description: "Clean, well-documented APIs. Third-party integrations that actually work reliably.",
    href: "/services#custom-software",
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services" background="secondary">
      <SectionHeader
        variant="editorial"
        label="What we do"
        title="End-to-end product development, done right"
        description="We handle the full lifecycle — research, design, engineering, and launch. One team, no handoffs, no surprises."
      />

      {/* Featured services — flat editorial column blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
        {featured.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className="group flex flex-col justify-between border-t-2 border-[var(--theme-border)] pt-8 hover:border-[var(--brand-primary)] transition-colors duration-500"
          >
            <Link href={service.href} className="block h-full">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div
                    className="flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      width: "52px",
                      height: "52px",
                      background: "var(--feature-card-icon-bg)",
                      borderRadius: "var(--radius-lg)",
                      color: "var(--brand-primary)",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--brand-primary)]"
                    style={{ color: "var(--theme-text-primary)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: "var(--theme-text-secondary)", lineHeight: "1.7" }}
                  >
                    {service.description}
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: "var(--brand-primary)" }}
                >
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Secondary services — editorial row list instead of cards */}
      <div className="max-w-5xl mx-auto flex flex-col">
        <h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-[var(--theme-text-tertiary)] pl-2">
          Additional Capabilities
        </h4>
        <div className="border-t border-[var(--theme-border)]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
            >
              <Link href={service.href} className="block group">
                <div
                  className="flex flex-col md:flex-row md:items-center justify-between py-6 px-4 border-b border-[var(--theme-border-subtle)] transition-colors duration-300 hover:bg-[var(--theme-surface-hover)]/30"
                  style={{ transition: "all 0.3s ease" }}
                >
                  <div className="flex items-center gap-4 md:w-1/3">
                    <div
                      className="flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                      style={{
                        width: "36px",
                        height: "36px",
                        background: "var(--feature-card-icon-bg)",
                        color: "var(--brand-primary)",
                      }}
                    >
                      {service.icon}
                    </div>
                    <h3
                      className="text-lg font-bold transition-colors duration-300 group-hover:text-[var(--brand-primary)]"
                      style={{ color: "var(--theme-text-primary)" }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-relaxed mt-2 md:mt-0 md:w-1/2"
                    style={{ color: "var(--theme-text-secondary)" }}
                  >
                    {service.description}
                  </p>
                  <div className="flex justify-end items-center mt-3 md:mt-0 md:w-[10%]">
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                      style={{ color: "var(--brand-primary)" }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
