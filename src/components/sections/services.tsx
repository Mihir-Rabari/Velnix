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
import { FeatureCard } from "@/components/ui/card";

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
    icon: <Globe size={24} />,
    title: "Web Applications",
    description: "Fast, responsive, accessible web apps built with React, Next.js, and modern tooling.",
    href: "/services#web-development",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile Apps",
    description: "Native-quality iOS and Android apps. Flutter, React Native, or fully native — we'll help you pick.",
    href: "/services#mobile-development",
  },
  {
    icon: <Palette size={24} />,
    title: "UI/UX Design",
    description: "Research-led design that looks great and works even better. Wireframes through to full design systems.",
    href: "/services#design",
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud & DevOps",
    description: "AWS, Azure, GCP — we set up your infrastructure so it scales without drama.",
    href: "/services#cloud",
  },
  {
    icon: <Blocks size={24} />,
    title: "API & Integrations",
    description: "Clean, well-documented APIs. Third-party integrations that actually work reliably.",
    href: "/services#api",
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

      {/* Featured services — larger cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {featured.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
          >
            <Link href={service.href} className="block h-full group">
              <div
                className="h-full relative overflow-hidden"
                style={{
                  background: "var(--theme-surface)",
                  border: "1px solid var(--theme-border)",
                  borderRadius: "var(--radius-2xl)",
                  padding: "40px",
                  transition: "var(--default-card-transition)",
                }}
              >
                {/* Hover accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <div
                  className="flex items-center justify-center mb-6"
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
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--theme-text-primary)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "var(--theme-text-secondary)", lineHeight: "1.7" }}
                >
                  {service.description}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--brand-primary)" }}
                >
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Secondary services — smaller cards in varied grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
          >
            <Link href={service.href} className="block h-full group">
              <div
                className="h-full"
                style={{
                  background: "var(--theme-surface)",
                  border: "1px solid var(--theme-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "24px",
                  transition: "var(--default-card-transition)",
                }}
              >
                <div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "var(--feature-card-icon-bg)",
                    borderRadius: "var(--radius-md)",
                    color: "var(--brand-primary)",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  className="text-base font-semibold mb-1.5"
                  style={{ color: "var(--theme-text-primary)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--theme-text-secondary)" }}
                >
                  {service.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
