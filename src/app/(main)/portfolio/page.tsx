"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { TiltCard } from "@/components/ui/card";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Web", "Mobile", "AI/ML", "SaaS", "Enterprise"];

const projects = [
  {
    slug: "finflow",
    title: "FinFlow Dashboard",
    category: "SaaS",
    tags: ["React", "Node.js", "PostgreSQL"],
    description: "Enterprise financial analytics platform with real-time data visualization and predictive modeling.",
    color: "#6C3AED",
  },
  {
    slug: "mediconnect",
    title: "MediConnect",
    category: "Mobile",
    tags: ["React Native", "Firebase", "AI"],
    description: "Telemedicine app connecting patients with specialists. 500K+ downloads in first quarter.",
    color: "#06B6D4",
  },
  {
    slug: "cloudsync",
    title: "CloudSync Pro",
    category: "Enterprise",
    tags: ["AWS", "Kubernetes", "Go"],
    description: "Multi-cloud infrastructure management platform handling 10M+ daily API requests.",
    color: "#10B981",
  },
  {
    slug: "docparser",
    title: "AI Document Parser",
    category: "AI/ML",
    tags: ["Python", "TensorFlow", "NLP"],
    description: "Intelligent document processing system with 99.7% accuracy across 50+ document types.",
    color: "#F59E0B",
  },
  {
    slug: "shopwave",
    title: "ShopWave",
    category: "Web",
    tags: ["Next.js", "Stripe", "Prisma"],
    description: "High-performance e-commerce platform with headless CMS and 3D product visualization.",
    color: "#F43F5E",
  },
  {
    slug: "taskpilot",
    title: "TaskPilot",
    category: "SaaS",
    tags: ["Vue.js", "GraphQL", "Redis"],
    description: "Project management suite with AI-powered task prioritization and resource allocation.",
    color: "#8B5CF6",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
              Case Studies
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
          >
            Our portfolio of <span className="gradient-text">excellent work</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--theme-text-secondary)]"
          >
            Browse our case studies to explore how we solved technical constraints and brought elegant solutions to market.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Grid wrapper with filter */}
      <SectionWrapper background="secondary" padding="lg">
        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-5 py-2 text-sm font-medium rounded-full transition-all cursor-pointer"
              style={{
                color: activeCategory === cat ? "white" : "var(--theme-text-secondary)",
                borderRadius: "var(--radius-full)",
              }}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="portfolio-page-filter"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "var(--gradient-brand)" }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ gap: "var(--grid-gap)" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Link href={`/case-studies/${project.slug}`} className="block group">
                  <div className="flex flex-col gap-5">
                    {/* Immersive visual panel - using TiltCard */}
                    <TiltCard tiltAmount={4}>
                      <div
                        className="relative h-48 overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                          border: "1px solid var(--theme-border)",
                          borderRadius: "var(--radius-2xl)",
                          transition: "var(--default-card-transition)",
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white transition-transform duration-500 group-hover:scale-105"
                            style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}99)` }}
                          >
                            {project.title.charAt(0)}
                          </div>
                        </div>

                        {/* Category label */}
                        <div className="absolute top-4 left-4">
                          <span
                            className="text-xs font-semibold px-3 py-1.5 rounded-full"
                            style={{
                              background: `${project.color}12`,
                              color: project.color,
                              borderRadius: "var(--radius-full)",
                              border: `1px solid ${project.color}15`,
                            }}
                          >
                            {project.category}
                          </span>
                        </div>

                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="flex items-center gap-2 text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                            Explore Case Study <ExternalLink size={14} />
                          </div>
                        </div>
                      </div>
                    </TiltCard>

                    {/* Description details below visual */}
                    <div className="px-1">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-[var(--brand-primary)]">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-0 group-hover:opacity-100"
                          style={{ color: "var(--brand-primary)" }}
                        />
                      </div>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--theme-text-secondary)", lineHeight: "1.7" }}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full font-medium"
                            style={{
                              background: "var(--theme-bg-secondary)",
                              border: "1px solid var(--theme-border-subtle)",
                              color: "var(--theme-text-tertiary)",
                              borderRadius: "var(--radius-full)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
