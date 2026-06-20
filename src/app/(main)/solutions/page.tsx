"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Server, Zap, LayoutGrid, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

const solutions = [
  {
    icon: <Server className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Enterprise Digitalization",
    description: "Scale infrastructure, establish governance, and build custom ERP, CRM, and analytics systems designed for secure high-throughput corporate operations.",
    features: [
      "SOC 2 Type II & GDPR compliance standards",
      "Seamless Active Directory / SSO authentication integration",
      "Robust failover systems and auto-scaling configurations",
      "High-availability SLA policies",
    ],
  },
  {
    icon: <Zap className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "Startup Acceleration",
    description: "Go from napkin sketch to market MVP quickly with optimized architectures, dynamic prototypes, and rapid iterations that align with investor timelines.",
    features: [
      "Rapid prototype creation and agile feedback cycles",
      "Scalable infrastructure layout using serverless setups",
      "Cost-optimized deployment with Vercel and AWS",
      "Integration-ready API structures",
    ],
  },
  {
    icon: <LayoutGrid className="w-8 h-8 text-[var(--brand-primary)]" />,
    title: "SaaS Product Engineering",
    description: "Construct multi-tenant cloud products. Handle customer billing subscriptions, organization configurations, localized states, and metrics collections.",
    features: [
      "Stripe and billing cycle logic integration",
      "Secure multi-tenant database designs",
      "Comprehensive telemetry and dashboard views",
      "Customizable user seat licensing models",
    ],
  },
];

export default function SolutionsPage() {
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
              Our Blueprints
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
          >
            Engineered blueprints for <span className="gradient-text">scale and speed</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--theme-text-secondary)]"
          >
            We don&apos;t start from scratch. We bring standard architectural blueprints for common systems (SaaS databases, RAG indices, and DevOps pipelines) to speed up technical execution.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Solutions Cards */}
      <SectionWrapper background="secondary" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {solutions.map((sol, idx) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group flex flex-col justify-between border-t-2 border-[var(--theme-border)] pt-8 hover:border-[var(--brand-primary)] transition-colors duration-300"
            >
              <div>
                <div
                  className="w-16 h-16 rounded-2xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[2deg]"
                  style={{ background: "var(--feature-card-icon-bg)" }}
                >
                  {sol.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-[var(--brand-primary)]">{sol.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--theme-text-secondary)" }}>
                  {sol.description}
                </p>
                <div className="border-t border-[var(--theme-border-subtle)] my-4" />
                <ul className="space-y-3 mb-8">
                  {sol.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs" style={{ color: "var(--theme-text-secondary)" }}>
                      <span className="text-[var(--brand-primary)] font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="primary" fullWidth href="/get-quote" className="group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-colors duration-300">
                Get Started <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Integration and custom features capabilities section */}
      <SectionWrapper background="primary" padding="lg">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Infinite <span className="gradient-text">Integration Power</span>
            </h2>
            <p className="text-[var(--theme-text-secondary)] leading-relaxed mb-6">
              No software is an island. We build our solutions to connect with your existing workflows, databases, CRM, and cloud storage providers. We specialize in building secure gateway API routers, queue configurations, and real-time syncing brokers.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[var(--brand-primary)]" />
                <span className="text-sm font-semibold">End-to-End Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[var(--brand-primary)]" />
                <span className="text-sm font-semibold">Real-Time Syncing</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="border-t border-[var(--theme-border)] pt-8">
              <div className="text-xs uppercase tracking-widest text-[var(--brand-primary)] font-bold mb-4">Supported Integrations</div>
              <div className="flex flex-wrap gap-3">
                {["Stripe", "AWS", "Google Cloud", "Azure", "Salesforce", "HubSpot", "Zapier", "Slack", "OAuth 2.0", "GraphQL", "Algolia", "OpenAI"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3.5 py-2 font-medium"
                    style={{
                      background: "var(--theme-bg-secondary)",
                      border: "1px solid var(--theme-border)",
                      borderRadius: "var(--radius-lg)",
                      color: "var(--theme-text-secondary)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
