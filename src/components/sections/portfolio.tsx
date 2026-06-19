"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";

const projects = [
  {
    title: "Financial Analytics Platform",
    category: "SaaS · FinTech",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    description:
      "Enterprise-grade analytics dashboard processing 2M+ transactions daily. Built a real-time risk scoring engine and automated reporting that cut manual work by 80%.",
    color: "#6366F1",
    href: "/case-studies/fintech-analytics",
  },
  {
    title: "Telemedicine Application",
    category: "Mobile · HealthTech",
    tags: ["React Native", "Firebase", "WebRTC"],
    description:
      "Cross-platform telehealth app connecting patients with specialists. Video consultations, prescription management, and insurance integration. 4.8★ on both app stores.",
    color: "#06B6D4",
    href: "/case-studies/telehealth-app",
  },
  {
    title: "Cloud Infrastructure Manager",
    category: "Enterprise · DevOps",
    tags: ["Go", "Kubernetes", "Terraform", "GCP"],
    description:
      "Multi-cloud orchestration tool handling infrastructure across AWS, Azure, and GCP. Reduced deployment time from hours to minutes for a 200-person engineering org.",
    color: "#10B981",
    href: "/case-studies/cloud-manager",
  },
  {
    title: "AI Document Processing",
    category: "AI/ML · Enterprise",
    tags: ["Python", "TensorFlow", "FastAPI"],
    description:
      "Intelligent document extraction system that processes invoices, contracts, and forms with 99.2% accuracy. Replaced a 15-person data entry team.",
    color: "#F59E0B",
    href: "/case-studies/document-ai",
  },
];

export function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio" background="secondary">
      <SectionHeader
        variant="default"
        label="Selected work"
        title="Projects we're proud of"
        description="A few examples of what we've built. Every project started as a conversation."
      />

      {/* 2-column staggered layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className={i % 2 === 1 ? "md:mt-12" : ""}
          >
            <Link href={project.href} className="block group">
              <div
                className="relative overflow-hidden"
                style={{
                  background: "var(--theme-surface)",
                  border: "1px solid var(--theme-border)",
                  borderRadius: "var(--radius-2xl)",
                  transition: "var(--default-card-transition)",
                }}
              >
                {/* Project visual area */}
                <div
                  className="relative h-52 md:h-60 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}12, ${project.color}06)`,
                    borderBottom: "1px solid var(--theme-border)",
                  }}
                >
                  {/* Abstract visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)`,
                        border: `1px solid ${project.color}20`,
                      }}
                    >
                      <div
                        className="text-3xl font-bold"
                        style={{ color: project.color, opacity: 0.6 }}
                      >
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  </div>

                  {/* Category label */}
                  <div className="absolute top-5 left-5">
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

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-2 text-white text-sm font-medium bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                      View case study <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3
                    className="text-xl font-semibold mb-2 group-hover:text-[var(--brand-primary)] transition-colors"
                    style={{ color: "var(--theme-text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm mb-5"
                    style={{ color: "var(--theme-text-secondary)", lineHeight: "1.7" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{
                          background: "var(--theme-bg-tertiary)",
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
      </div>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mt-14"
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
          style={{ color: "var(--brand-primary)" }}
        >
          View all projects
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
