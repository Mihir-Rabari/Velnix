"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";

const techCategories = [
  {
    title: "Frontend",
    techs: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "var(--theme-text-primary)" },
      { name: "Vue.js", color: "#4FC08D" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#38BDF8" },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", color: "#339933" },
      { name: "Python", color: "#3776AB" },
      { name: "Go", color: "#00ADD8" },
      { name: "Java", color: "#ED8B00" },
      { name: "Rust", color: "#DEA584" },
    ],
  },
  {
    title: "Mobile",
    techs: [
      { name: "React Native", color: "#61DAFB" },
      { name: "Flutter", color: "#02569B" },
      { name: "Swift", color: "#F05138" },
      { name: "Kotlin", color: "#7F52FF" },
    ],
  },
  {
    title: "Cloud",
    techs: [
      { name: "AWS", color: "#FF9900" },
      { name: "Azure", color: "#0089D6" },
      { name: "GCP", color: "#4285F4" },
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
    ],
  },
  {
    title: "Data",
    techs: [
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Redis", color: "#DC382D" },
      { name: "Supabase", color: "#3ECF8E" },
    ],
  },
  {
    title: "AI/ML",
    techs: [
      { name: "TensorFlow", color: "#FF6F00" },
      { name: "PyTorch", color: "#EE4C2C" },
      { name: "OpenAI", color: "#10A37F" },
      { name: "LangChain", color: "#FFD700" },
    ],
  },
];

function TechBadge({ tech }: { tech: typeof techCategories[0]["techs"][0] }) {
  const [hovered, setHovered] = useState(false);

  // Fallback for theme variable colors (e.g. Next.js black/white)
  const isDefaultTextTheme = tech.color.startsWith("var");
  const activeColor = isDefaultTextTheme ? "var(--brand-primary)" : tech.color;

  return (
    <motion.span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -2, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-300 cursor-default flex items-center gap-2 select-none"
      style={{
        background: hovered ? `${activeColor}12` : "var(--theme-bg-secondary)",
        border: hovered ? `1px solid ${activeColor}` : "1px solid var(--theme-border-subtle)",
        color: hovered ? (isDefaultTextTheme ? "var(--theme-text-primary)" : tech.color) : "var(--theme-text-secondary)",
        boxShadow: hovered ? `0 0 10px ${activeColor}20` : "none",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
        style={{
          backgroundColor: hovered ? activeColor : "var(--theme-text-tertiary)",
        }}
      />
      {tech.name}
    </motion.span>
  );
}

export function TechStackSection() {
  return (
    <SectionWrapper id="technologies" background="secondary">
      <SectionHeader
        variant="default"
        label="Technology Stack"
        title="Tools we use to build the future"
        description="We build on robust, modern, and production-tested technologies that scale with your business."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {techCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            className="p-6 rounded-2xl border border-[var(--theme-border-subtle)] bg-[var(--theme-bg-secondary)]/30 backdrop-blur-sm shadow-sm flex flex-col gap-5 hover:border-[var(--brand-primary)]/30 transition-colors duration-500 group"
          >
            <div className="flex items-center gap-2 border-b border-[var(--theme-border-subtle)] pb-3">
              <span className="w-1.5 h-3 rounded bg-[var(--brand-primary)]" />
              <h3
                className="text-sm font-bold uppercase tracking-wider text-[var(--theme-text-primary)]"
                style={{
                  letterSpacing: "0.12em",
                }}
              >
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {category.techs.map((tech) => (
                <TechBadge key={tech.name} tech={tech} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
