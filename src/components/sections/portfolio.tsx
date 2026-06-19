"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { TiltCard } from "@/components/ui/card";

const projects = [
  {
    title: "FinFlow Dashboard",
    category: "SaaS · FinTech",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    description:
      "Enterprise financial analytics platform with real-time data visualization and predictive modeling. Built a real-time risk scoring engine and automated reporting that cut manual work by 80%.",
    color: "var(--accent-violet)",
    href: "/case-studies/finflow",
  },
  {
    title: "MediConnect App",
    category: "Mobile · HealthTech",
    tags: ["React Native", "Firebase", "WebRTC"],
    description:
      "Cross-platform telehealth app connecting patients with specialists. Video consultations, prescription management, and insurance integration. 500K+ downloads in first quarter.",
    color: "var(--accent-cyan)",
    href: "/case-studies/mediconnect",
  },
  {
    title: "CloudSync Pro",
    category: "Enterprise · DevOps",
    tags: ["Go", "Kubernetes", "Terraform", "GCP"],
    description:
      "Multi-cloud infrastructure management platform handling 10M+ daily API requests. Reduced deployment time from hours to minutes for a 200-person engineering org.",
    color: "var(--accent-emerald)",
    href: "/case-studies/cloudsync",
  },
  {
    title: "AI Document Parser",
    category: "AI/ML · Enterprise",
    tags: ["Python", "TensorFlow", "FastAPI"],
    description:
      "Intelligent document extraction system that processes invoices, contracts, and forms with 99.7% accuracy. Replaced a 15-person data entry team.",
    color: "var(--accent-amber)",
    href: "/case-studies/docparser",
  },
];

function PortfolioCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Scroll parallax: translate and scale the abstract visual thumbnail
  const visualY = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const visualScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className={index % 2 === 1 ? "md:mt-12" : ""}
    >
      <Link href={project.href} className="block group">
        <div className="flex flex-col gap-5">
          {/* Immersive visual panel - using TiltCard */}
          <TiltCard tiltAmount={4}>
            <div
              className="relative h-60 md:h-72 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${project.color}12, ${project.color}06)`,
                border: "1px solid var(--theme-border)",
                borderRadius: "var(--radius-2xl)",
                transition: "var(--default-card-transition)",
              }}
            >
              {/* Abstract visual with Parallax */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ y: visualY, scale: visualScale }}
              >
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
              </motion.div>

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
          </TiltCard>

          {/* Description details below visual */}
          <div className="px-1">
            <div className="flex items-center justify-between gap-4 mb-2">
              <h3
                className="text-xl font-bold transition-colors duration-300 group-hover:text-[var(--brand-primary)]"
                style={{ color: "var(--theme-text-primary)" }}
              >
                {project.title}
              </h3>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 opacity-0 group-hover:opacity-100"
                style={{ color: "var(--brand-primary)" }}
              />
            </div>
            <p
              className="text-sm mb-4 leading-relaxed max-w-xl"
              style={{ color: "var(--theme-text-secondary)", lineHeight: "1.7" }}
            >
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
  );
}

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {projects.map((project, i) => (
          <PortfolioCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mt-16"
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
