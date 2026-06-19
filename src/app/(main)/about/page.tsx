"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Shield, Target, Eye, Users } from "lucide-react";

const values = [
  {
    icon: <Target className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Mission-Driven",
    description: "To engineer exceptional digital experiences that empower organizations to scale, innovate, and lead their industries.",
  },
  {
    icon: <Eye className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Our Vision",
    description: "To be the global benchmark for premium software engineering, recognized for design elegance and technical excellence.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Trust & Transparency",
    description: "We believe in clear communication, honest timelines, complete ownership of our code, and long-term partnerships.",
  },
  {
    icon: <Users className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Human-Centric Design",
    description: "Technology is for people. We design and build systems that prioritize usability, accessibility, and delight.",
  },
];

const team = [
  { name: "Alex Mercer", role: "CEO & Founder", image: "AM", bio: "Former Tech Lead at Stripe. Passionate about software architecture and product design." },
  { name: "Elena Rostova", role: "VP of Engineering", image: "ER", bio: "Ex-Google Senior Staff Engineer. Distributed systems specialist and open-source contributor." },
  { name: "Marcus Vance", role: "Head of Design", image: "MV", bio: "Award-winning designer. Formerly lead designer at Figma and Apple." },
  { name: "Sarah Jenkins", role: "Head of AI Research", image: "SJ", bio: "Ph.D. in Computer Science from Stanford. Focuses on NLP and neural network optimizations." },
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
            We are architects of the <span className="gradient-text">digital frontier</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--theme-text-secondary)] leading-relaxed"
          >
            Founded in 2018, The Velnix has grown from a boutique agency into a premium global engineering and design partner. We help ambitious startups and established enterprises turn complex challenges into simple, beautiful software.
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
          label="Leadership Team"
          title="Engineers, designers, innovators"
          description="Meet the leaders driving technical excellence and elegant designs at The Velnix."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold text-white transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[3deg]"
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
              <span className="text-sm font-semibold mb-3 block" style={{ color: "var(--brand-primary)" }}>
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
