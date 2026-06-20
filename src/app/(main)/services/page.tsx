"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import {
  Layers3,
  Bot,
  Smartphone,
  Palette,
  Sparkles,
  Cloud,
  Terminal,
  Target,
  Cpu,
  ArrowRight
} from "lucide-react";

const detailedServices = [
  {
    id: "saas-development",
    icon: <Layers3 className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "SaaS Development",
    description: "We design and build complete software-as-a-service applications. From database architecture and multi-tenant isolation to billing flows, user authentication, and responsive dashboards, we write clean, type-safe codebases designed to handle high concurrency.",
    benefits: [
      "Faster time-to-market with proven boilerplates",
      "Clean, decoupled frontend and backend architectures",
      "Secure user data partitioning and access control",
      "Seamless subscription billing integration"
    ],
  },
  {
    id: "ai-agents",
    icon: <Bot className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "AI Agents",
    description: "We build custom AI agents that go beyond simple chatbot interfaces. We integrate large language models with tool-calling capabilities, vector databases, and memory systems to execute multi-step workflows, process raw data, and automate technical decisions.",
    benefits: [
      "Reduction in operational overhead for repetitive tasks",
      "High-accuracy retrieval using advanced RAG setups",
      "Autonomous agents capable of interacting with external APIs",
      "Deterministic fallbacks for safety and compliance"
    ],
  },
  {
    id: "mobile-development",
    icon: <Smartphone className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Mobile App Development",
    description: "We build fast, responsive mobile applications using Flutter and React Native. We focus on offline-first sync engine configurations, native module integrations, fluid animations, and clean layouts that work seamlessly across viewports.",
    benefits: [
      "Single codebase efficiency with native-grade performance",
      "Robust offline caching and local database synchronization",
      "Fast release pipelines and App Store/Google Play publishing",
      "Smooth micro-interactions and animations"
    ],
  },
  {
    id: "ui-ux-design",
    icon: <Palette className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "UI/UX Design",
    description: "We design product interfaces focusing on user flows, interaction logic, visual hierarchy, and developer handoff. We build comprehensive, tokenized design systems in Figma that match your production codebase components, eliminating design-to-engineering friction.",
    benefits: [
      "Intuitive user flows that lower user friction",
      "Design tokens mapped directly to code",
      "High-fidelity interactive Figma prototypes",
      "Complete design system coverage for all edge states"
    ],
  },
  {
    id: "branding",
    icon: <Sparkles className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Branding",
    description: "We define how your product looks and feels. We build minimal, premium, and engineering-forward brand identities, covering logo designs, curated color systems, custom typography, asset libraries, and digital guidelines that position you as an industry leader.",
    benefits: [
      "Cohesive visual narrative across web, app, and docs",
      "Clean, premium brand positioning that builds trust",
      "Vector-perfect assets ready for modern layouts",
      "Clear identity documentation for future scaling"
    ],
  },
  {
    id: "devops-infrastructure",
    icon: <Cloud className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "DevOps & Cloud Infrastructure",
    description: "We architect and deploy cloud infrastructure using Infrastructure as Code (IaC). We set up automated CI/CD pipelines, container orchestration, log routing, metrics collectors, and multi-region failover setups that ensure your application runs with 99.9% uptime.",
    benefits: [
      "Zero-downtime rolling deployments",
      "Infrastructure defined entirely in code (Terraform)",
      "Automated scaling based on CPU, memory, or network load",
      "Comprehensive logging and tracing for rapid debugging"
    ],
  },
  {
    id: "cto-as-a-service",
    icon: <Terminal className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "CTO-as-a-Service",
    description: "Get fractional CTO access to guide your technical roadmap. We help you make core architectural decisions, design database schemas, evaluate security standards, manage technical debt, hire engineers, and establish high-throughput development workflows.",
    benefits: [
      "Avoid costly architectural mistakes early in development",
      "Clear tech stack vetting aligned with business goals",
      "Structured technical hiring and vetting pipelines",
      "Executive technical representation for investor calls"
    ],
  },
  {
    id: "product-strategy",
    icon: <Target className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Product Strategy",
    description: "We help you define what to build, what to defer, and how to execute. We translate high-level business goals into a structured technical backlog, defining user stories, feature specs, database entity relations, and step-by-step milestones to keep execution fast.",
    benefits: [
      "Clear backlog priorities that eliminate wasted developer hours",
      "Thoroughly defined milestones that align with launch targets",
      "Deep technical vetting of product feature feasibility",
      "Granular sprint schedules and backlog documentation"
    ],
  },
  {
    id: "automation-systems",
    icon: <Cpu className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Automation Systems",
    description: "We eliminate manual operational bottlenecks. We build custom API integrations, scheduled cron synchronizers, webhook routers, scraper engines, and internal dashboard tools that sync data across your CRM, inventory system, and database.",
    benefits: [
      "Elimination of manual data entry errors",
      "Real-time syncing between database systems",
      "Automated reporting and alerting via Slack/Email",
      "Scalable webhook ingestion systems"
    ],
  },
];

const pricingApproaches = [
  {
    title: "Fixed Scope",
    price: "From $15k",
    description: "Perfect for projects with clearly defined specifications, layouts, and endpoints. Clear deliverables and timeline.",
    features: ["Defined milestone payments", "Complete engineering plan", "Daily/weekly updates", "30 days post-launch support"],
  },
  {
    title: "Time & Materials",
    price: "Hourly Rate",
    description: "Ideal for agile projects, evolving requirements, and rapid prototyping. Total flexibility to pivot at any point.",
    features: ["Bi-weekly sprint demos", "Detailed hours logging", "Flexible resource allocation", "Scale team up or down anytime"],
  },
  {
    title: "Dedicated Team",
    price: "Monthly Retainer",
    description: "Your own full-time product team: designer, lead developer, QA, and product manager. Scaled for long-term projects.",
    features: ["100% focused on your product", "Daily standups and communication", "Full integration with your tools", "Continuous code delivery"],
  },
];

export default function ServicesPage() {
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
              What We Offer
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
          >
            Empowering your team with <span className="gradient-text">premium services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--theme-text-secondary)]"
          >
            We combine high-performance engineering with modern design principles to build digital products that feel premium and scale endlessly.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Detailed Services list */}
      <SectionWrapper background="secondary" padding="lg">
        <div className="space-y-16">
          {detailedServices.map((service, idx) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Left Column: Visual description */}
              <div className="flex-1 w-full group">
                <div
                  className="w-16 h-16 rounded-2xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[2deg]"
                  style={{ background: "var(--feature-card-icon-bg)" }}
                >
                  {service.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[var(--brand-primary)]">{service.title}</h2>
                <p className="text-[var(--theme-text-secondary)] leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button variant="primary" href="/get-quote">
                  Request Quote <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              {/* Right Column: Benefits list */}
              <div className="flex-1 w-full lg:pl-6">
                <h3 className="text-xl font-bold mb-6 text-[var(--brand-primary)]">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--brand-primary)]/10 flex items-center justify-center text-[var(--brand-primary)] text-xs font-bold mt-1">
                        ✓
                      </div>
                      <span className="text-[var(--theme-text-secondary)] text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Pricing Approach */}
      <SectionWrapper background="primary" padding="lg">
        <SectionHeader
          label="Pricing Approach"
          title="Transparent engagement models"
          description="We align our business with yours. Choose the engagement structure that matches your scope and timeline."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingApproaches.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group flex flex-col justify-between border-t-2 border-[var(--theme-border)] pt-8 hover:border-[var(--brand-primary)] transition-colors duration-300"
            >
              <div>
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--brand-primary)]">{model.title}</h3>
                <div className="text-3xl font-extrabold text-[var(--brand-primary)] mb-4">{model.price}</div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--theme-text-secondary)" }}>
                  {model.description}
                </p>
                <div className="border-t border-[var(--theme-border-subtle)] my-4" />
                <ul className="space-y-3 mb-6">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs" style={{ color: "var(--theme-text-secondary)" }}>
                      <span className="text-[var(--brand-primary)]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="secondary" fullWidth href="/get-quote" className="group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-colors duration-300">
                Choose model
              </Button>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
