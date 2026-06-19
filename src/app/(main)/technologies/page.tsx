"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { Code2, Server, Database, Smartphone, Cloud, Brain, Shield, Heart } from "lucide-react";

const details = [
  {
    icon: <Code2 className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Modern Frontend Stack",
    description: "React, Next.js, and TypeScript form our core framework. We utilize compiler-driven optimization and Jamstack architectures for speed.",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    icon: <Server className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Backend & Systems",
    description: "Engineered with Node.js, Go, Python, and Rust. We design microservices and API gateways built to handle heavy client requests.",
    techs: ["Node.js", "Go", "Python", "Rust", "Express", "FastAPI"],
  },
  {
    icon: <Smartphone className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Mobile Frameworks",
    description: "Hybrid and native development pathways. We leverage React Native and Flutter for multi-platform synchronization.",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  },
  {
    icon: <Cloud className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Cloud & Infrastructure",
    description: "Multi-cloud hosting environments managed via automated infrastructure. Supported by container virtualization.",
    techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: <Database className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "Data Management",
    description: "Scalable relational and document-oriented databases. Optimized with cache brokers for lightning-fast reads.",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma", "DynamoDB"],
  },
  {
    icon: <Brain className="w-6 h-6 text-[var(--brand-primary)]" />,
    title: "AI Integration Tools",
    description: "We deploy machine learning models, build embeddings, establish semantic search capabilities, and customize open weights models.",
    techs: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "LangChain", "ChromaDB"],
  },
];

export default function TechnologiesPage() {
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
              Tech Infrastructure
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            Built on <span className="gradient-text">state of the art</span> tools
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--theme-text-secondary)]"
          >
            We don&apos;t compromise on developer tools, system libraries, or deployment servers. Discover our tech guidelines.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Categories */}
      <SectionWrapper background="secondary" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ gap: "var(--grid-gap)" }}>
          {details.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <Card className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[var(--theme-bg-secondary)]" style={{ borderRadius: "var(--radius-lg)" }}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--theme-text-secondary)] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div>
                  <div className="border-t border-[var(--theme-border-subtle)] my-4" />
                  <div className="flex flex-wrap gap-2">
                    {item.techs.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1.5 rounded-lg font-medium"
                        style={{
                          background: "var(--theme-bg-secondary)",
                          border: "1px solid var(--theme-border)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
