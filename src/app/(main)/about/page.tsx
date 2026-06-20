"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Target, Cpu, ShieldCheck, Paintbrush } from "lucide-react";

const values = [
  {
    icon: <Target className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Product-Focused Execution",
    description: "We treat your project like our own. We focus on building what is necessary for your users to succeed, prioritizing execution speed and launch velocity.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Engineering Craftsmanship",
    description: "We write clean, type-safe, and scalable code. Our databases are normalized, our API layers are fast, and our deployments are fully automated.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Trust & Extreme Transparency",
    description: "You see working software every week. We share GitHub repositories, Figma workspaces, and Slack channels. No big reveals, no surprises.",
  },
  {
    icon: <Paintbrush className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Design Precision",
    description: "We build interfaces that look premium and function smoothly. Our designs bridge the gap from Figma tokens to clean web CSS.",
  },
];

const team = [
  {
    name: "Mihir Rabari",
    role: "Engineering • Product • Infrastructure",
    image: "MR",
    bio: "Builder focused on software systems, AI products, developer tools, automation platforms, and scalable infrastructure. Passionate about turning complex ideas into products people actually use.",
  },
  {
    name: "Khushi Trivedi",
    role: "Operations • Growth • Partnerships",
    image: "KT",
    bio: "Focused on operations, partnerships, business development, and helping products grow from early concepts into sustainable businesses.",
  },
  {
    name: "Khushi Patel",
    role: "UI/UX • Branding • Design Systems",
    image: "KP",
    bio: "Creates intuitive user experiences, design systems, visual identities, and product interfaces that connect user needs with business goals.",
  },
  {
    name: "Aangi Shah",
    role: "Product Design • Frontend Experience",
    image: "AS",
    bio: "Designs modern digital experiences with a strong focus on usability, product thinking, visual consistency, and frontend collaboration.",
  },
  {
    name: "Karan Mistry",
    role: "AI • Machine Learning • RAG Systems",
    image: "KM",
    bio: "Works on AI systems, machine learning pipelines, retrieval architectures, and intelligent applications that automate decision-making and unlock new product capabilities.",
  },
  {
    name: "Jignesh Prajapati",
    role: "Flutter • Mobile Applications",
    image: "JP",
    bio: "Builds cross-platform mobile applications focused on performance, usability, and scalable user experiences.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Intro */}
      <SectionWrapper background="primary" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "var(--feature-card-icon-bg)",
              border: "1px solid var(--border-accent)",
              borderRadius: "var(--radius-full)",
            }}
          >
            <span className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>
              About The Velnix
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            We are a team of <span className="gradient-text">software builders</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--theme-text-secondary)] leading-relaxed"
          >
            The Velnix is a modern, engineering-first studio. We help ambitious founders and businesses build digital products that scale. We do not operate like a traditional software agency. We don't employ account managers or slide creators. You work directly with the developers and designers building your software.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper background="secondary" padding="lg">
        <SectionHeader
          label="Our Core Values"
          title="The principles that guide our work"
          description="We hold ourselves to the highest standards of craft, engineering, and professionalism."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group flex flex-col gap-4 border-b border-[var(--theme-border)] pb-8 last:border-b-0 md:border-b-0 md:pb-0"
            >
              <div className="flex items-center gap-4">
                <div
                  className="p-3 bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] transition-transform duration-300 group-hover:scale-110"
                  style={{ borderRadius: "var(--radius-lg)" }}
                >
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[var(--brand-primary)]">
                  {val.title}
                </h3>
              </div>
              <p className="text-[var(--theme-text-secondary)] leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper background="primary" padding="lg">
        <SectionHeader
          label="The Builders"
          title="Engineers, designers, specialists"
          description="Meet the core execution team behind Velnix products."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-[var(--theme-border-subtle)] bg-[var(--theme-bg-secondary)]/10"
            >
              <div className="relative mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold text-white transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[3deg]"
                  style={{
                    background: "var(--gradient-brand)",
                    boxShadow: "var(--shadow-glow-brand)",
                  }}
                >
                  {member.image}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-1 transition-colors duration-300 group-hover:text-[var(--brand-primary)]">
                {member.name}
              </h3>
              <span className="text-xs font-semibold mb-3 block" style={{ color: "var(--brand-primary)" }}>
                {member.role}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "var(--theme-text-secondary)" }}>
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
