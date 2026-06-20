"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, DollarSign, Calendar, Heart, Shield, Award } from "lucide-react";

const perks = [
  {
    icon: <Shield className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "High Autonomy",
    description: "Work asynchronously with clear goals, minimal meetings, and full ownership of your domain.",
  },
  {
    icon: <Award className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Modern Tooling",
    description: "Access to state-of-the-art developer tools, top-tier SaaS subscriptions, and clean setups.",
  },
  {
    icon: <Heart className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Professional Growth",
    description: "Work directly on high-performance infrastructure, advanced AI pipelines, and premium design products.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Competitive Compensation",
    description: "Attractive compensation structures matching global industry benchmarks for senior engineering talent.",
  },
];

const jobs = [
  {
    title: "Senior Frontend Engineer (Next.js)",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-Time",
  },
  {
    title: "Full Stack Go/Rust Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-Time",
  },
  {
    title: "Senior UI/UX Product Designer",
    department: "Design",
    location: "San Francisco / Hybrid",
    type: "Full-Time",
  },
  {
    title: "DevOps Infrastructure Lead",
    department: "Operations",
    location: "Remote (US/EU)",
    type: "Full-Time",
  },
];

export default function CareersPage() {
  return (
    <div className="pt-24">
      {/* Intro */}
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
              Build with us
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
          >
            Join a team of <span className="gradient-text">senior builders</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--theme-text-secondary)]"
          >
            We are a remote-first team of dedicated engineers and designers obsessed with layout precision, performance, and technical challenge. We don&apos;t care about credentials — we care about execution.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Perks */}
      <SectionWrapper background="secondary" padding="lg">
        <SectionHeader
          label="Why Join Us"
          title="Designed for high performance"
          description="We take care of our builders so they can focus entirely on creating exceptional software."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group flex flex-col gap-4 border-b border-[var(--theme-border)] pb-8 last:border-b-0 md:border-b-0 md:pb-0"
            >
              <div
                className="w-12 h-12 rounded-xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: "var(--feature-card-icon-bg)" }}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--brand-primary)]">{p.title}</h3>
                <p className="text-sm text-[var(--theme-text-secondary)] leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Jobs */}
      <SectionWrapper background="primary" padding="lg">
        <SectionHeader
          label="Open Roles"
          title="Find your place at The Velnix"
          description="We are always looking for curious mindsets and excellent developers. See open opportunities."
        />
        <div className="max-w-4xl mx-auto border-t border-[var(--theme-border)]">
          {jobs.map((job, idx) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group border-b border-[var(--theme-border)] py-6 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--brand-primary)]" style={{ color: "var(--theme-text-primary)" }}>
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "var(--theme-text-tertiary)" }}>
                    <span className="flex items-center gap-1">
                      <Briefcase size={14} /> {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {job.type}
                    </span>
                  </div>
                </div>
                <Button variant="secondary" href="/contact" className="transition-transform group-hover:translate-x-1">
                  Apply Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
