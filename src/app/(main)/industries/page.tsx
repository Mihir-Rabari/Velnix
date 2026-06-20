"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Heart, Landmark, ShoppingBag, GraduationCap, Truck, Home } from "lucide-react";

const industries = [
  {
    icon: <Heart className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Healthcare & MedTech",
    description: "Build HIPAA-compliant portal applications, remote patient diagnostics trackers, and custom medical systems that safeguard patient confidentiality.",
  },
  {
    icon: <Landmark className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Finance & FinTech",
    description: "High-security payment processing setups, real-time portfolio dashboards, fraud detection models, and custom automated accounting ledgers.",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "E-Commerce & Retail",
    description: "Highly interactive product selectors, headless catalog management systems, multi-currency Stripe checkouts, and custom automated warehouse interfaces.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Education & EdTech",
    description: "Intuitive learning management structures (LMS), real-time class interfaces, automated homework evaluation tools, and interactive educational portals.",
  },
  {
    icon: <Truck className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Logistics & Supply Chain",
    description: "Real-time delivery status feeds, automated vehicle dispatch systems, multi-warehouse supply coordination, and optimized routing scripts.",
  },
  {
    icon: <Home className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Real Estate & PropTech",
    description: "Virtual house tour listings, automatic tenant payment management pipelines, real estate evaluation algorithms, and custom mortgage calculators.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <SectionWrapper background="primary" padding="sm">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "var(--feature-card-icon-bg)",
              border: "1px solid var(--border-accent)",
              borderRadius: "var(--radius-full)",
            }}
          >
            <span className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>
              Industries
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
          >
            Tailored solutions for <span className="gradient-text">every sector</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--theme-text-secondary)]"
          >
            We combine our architectural standards with deep domain knowledge to satisfy compliance regulations and fulfill specific user needs.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Grid of industries */}
      <SectionWrapper background="secondary" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="group flex flex-col gap-4 border-b border-[var(--theme-border)] pb-8 last:border-b-0 md:border-b-0 md:pb-0"
            >
              <div
                className="w-16 h-16 rounded-2xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[2deg]"
                style={{ background: "var(--feature-card-icon-bg)" }}
              >
                {ind.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--brand-primary)]">{ind.title}</h3>
                <p className="text-sm text-[var(--theme-text-secondary)] leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
