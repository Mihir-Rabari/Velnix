"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Palette,
  Search,
  Terminal,
  Settings,
  Activity,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

const detailedServices = [
  {
    id: "custom-software",
    icon: <Code2 className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Custom Software Development",
    description: "Bespoke backend systems, operational hubs, and integrations customized to your business goals. We design with performance, scalability, and security from the core.",
    benefits: ["Customized fit for unique workflows", "Full ownership of source code", "No monthly licensing overheads", "Enterprise integrations ready"],
  },
  {
    id: "web-development",
    icon: <Globe className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Web Development & Jamstack",
    description: "High-speed frontend solutions powered by React, Next.js, and headless CMSs. Superb rendering, rich SEO setups, and fluid motion that wows your audience.",
    benefits: ["Vercel and Netlify optimization", "95+ Lighthouse score guaranteed", "Responsive mobile-first layouts", "Dynamic transitions"],
  },
  {
    id: "mobile-development",
    icon: <Smartphone className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Mobile App Development",
    description: "Premium iOS and Android apps built via React Native and Flutter. Get the performance of native code combined with quick hybrid delivery pipelines.",
    benefits: ["App Store & Google Play launch support", "Offline-first capability", "Push notifications & widgets", "Smooth micro-interactions"],
  },
  {
    id: "ai-ml",
    icon: <Brain className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "AI & Machine Learning Integration",
    description: "Incorporate large language models, machine learning algorithms, OCR pipelines, and conversational voice interfaces into your existing applications.",
    benefits: ["Cognitive automation & analysis", "OpenAI, Anthropic & custom models", "Fine-tuning & RAG architectures", "Operational efficiency boost"],
  },
  {
    id: "cloud",
    icon: <Cloud className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Cloud & Devops Solutions",
    description: "Highly available, auto-scaling architectures designed on AWS, GCP, and Azure. Fully managed pipelines with Docker, Kubernetes, and Terraform.",
    benefits: ["Infrastructure as Code (IaC)", "Proactive cost containment", "Continuous deployment setups", "Comprehensive logging & metrics"],
  },
  {
    id: "design",
    icon: <Palette className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "UI/UX & Design Systems",
    description: "Outstanding, premium designs and interactive prototypes crafted to wow visitors. Complete with structured components for seamless engineering integration.",
    benefits: ["User-centric research", "Interactive Figma prototypes", "Scalable UI component libraries", "Premium light/dark themes"],
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
    description: "Your own full-time product team: designer, lead developer, QA, and project manager. Scaled for long-term projects.",
    features: ["100% focused on your product", "Daily standups and communication", "Full integration with your tools", "Continuous code delivery"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
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
              What We Offer
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            Empowering your team with <span className="gradient-text">premium services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--theme-text-secondary)]"
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
              <div className="flex-1 w-full">
                <div
                  className="p-8 relative overflow-hidden"
                  style={{
                    background: "var(--theme-surface)",
                    border: "1px solid var(--theme-border)",
                    borderRadius: "var(--radius-2xl)",
                    minHeight: "320px",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl bg-[var(--theme-bg-secondary)] flex items-center justify-center mb-6"
                    style={{ background: "var(--feature-card-icon-bg)" }}
                  >
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-[var(--theme-text-secondary)] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button variant="primary" href="/get-quote">
                    Request Quote <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ gap: "var(--grid-gap)" }}>
          {pricingApproaches.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                  <div className="text-3xl font-extrabold text-[var(--brand-primary)] mb-4">{model.price}</div>
                  <p className="text-sm text-[var(--theme-text-secondary)] leading-relaxed mb-6">
                    {model.description}
                  </p>
                  <div className="border-t border-[var(--theme-border-subtle)] my-4" />
                  <ul className="space-y-3 mb-6">
                    {model.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[var(--theme-text-secondary)]">
                        <span className="text-[var(--brand-primary)]">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="secondary" fullWidth href="/get-quote">
                  Choose model
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
