"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";

const techCategories = [
  {
    title: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    techs: ["Node.js", "Python", "Go", "Java", "Rust"],
  },
  {
    title: "Mobile",
    techs: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    title: "Cloud",
    techs: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
  },
  {
    title: "Data",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "AI/ML",
    techs: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
  },
];

export function TechStackSection() {
  return (
    <SectionWrapper id="technologies" background="secondary">
      <SectionHeader
        variant="minimal"
        title="Tech we work with"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
        {techCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIndex * 0.06 }}
          >
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{
                color: "var(--brand-primary)",
                letterSpacing: "0.1em",
              }}
            >
              {category.title}
            </h3>
            <ul className="space-y-2.5">
              {category.techs.map((tech) => (
                <li
                  key={tech}
                  className="text-sm"
                  style={{ color: "var(--theme-text-secondary)" }}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
