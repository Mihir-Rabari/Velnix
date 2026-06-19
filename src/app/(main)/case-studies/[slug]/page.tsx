"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Code, Award, CheckCircle } from "lucide-react";
import Link from "next/link";

const caseStudiesData: Record<string, {
  title: string;
  category: string;
  color: string;
  timeline: string;
  problem: string;
  research: string;
  solution: string;
  technologies: string[];
  results: string[];
}> = {
  finflow: {
    title: "FinFlow Dashboard",
    category: "SaaS",
    color: "#6C3AED",
    timeline: "3 Months",
    problem: "Financial institutions faced difficulties digesting high-velocity trading feeds, resulting in slow query performance and outdated static dashboard rendering.",
    research: "We analyzed standard WebSockets data loads and latency metrics under stress, discovering key data processing bottlenecks in typical client state managers.",
    solution: "Built a React + Next.js frontend integrated with Rust-based analytics brokers via high-performance WebSockets. Implemented smart window virtualization to process 5,000 tickers/sec.",
    technologies: ["Next.js", "Rust", "WebSockets", "Apache Kafka", "PostgreSQL"],
    results: ["92% improvement in database query performance", "Under-50ms data rendering delay", "4.8/5 CSAT score from financial analysts"],
  },
  mediconnect: {
    title: "MediConnect App",
    category: "Mobile",
    color: "#06B6D4",
    timeline: "4 Months",
    problem: "Patients suffered from long queue delays and unreliable scheduling interfaces when attempting to secure online appointments with healthcare professionals.",
    research: "Conducted virtual user research and interface tests with medical clinics to determine core requirements for scheduling flows and notification patterns.",
    solution: "Designed and engineered a cross-platform React Native solution incorporating WebRTC for real-time video consults and automated slot allocation alerts.",
    technologies: ["React Native", "WebRTC", "Firebase", "Node.js", "MongoDB"],
    results: ["Over 500,000 patient downloads in Q1", "Appointment wait times reduced by 73%", "98.9% platform availability index"],
  },
  cloudsync: {
    title: "CloudSync Pro",
    category: "Enterprise",
    color: "#10B981",
    timeline: "5 Months",
    problem: "Global engineering teams struggled with manual cloud resource sync tasks across multi-cloud provider environments, resulting in deployment errors.",
    research: "Audited existing continuous deployment configurations and API traffic logs to identify configuration drift patterns across multi-region server hubs.",
    solution: "Developed an automated synchronization broker in Go that monitors Terraform config files and propagates infrastructure policies in real-time.",
    technologies: ["Go", "Kubernetes", "AWS", "Google Cloud", "HashiCorp Terraform"],
    results: ["100% elimination of configuration drift failures", "10M+ automated cloud queries executed daily", "DevOps operations overhead reduced by 40%"],
  },
  docparser: {
    title: "AI Document Parser",
    category: "AI/ML",
    color: "#F59E0B",
    timeline: "3.5 Months",
    problem: "Large administrative offices spent thousands of labor hours manually extracting tabular data from complex medical receipts and tax forms.",
    research: "Analyzed scanner quality variations, tilted page images, and diverse layout templates to build an AI model robust to input errors.",
    solution: "Built a pipeline using Python, PyTorch, and customized vision transformers to normalize document angles, clean contrast, and extract key-value JSON data.",
    technologies: ["Python", "PyTorch", "TensorFlow", "FastAPI", "Docker"],
    results: ["99.7% data extraction accuracy achieved", "Document processing speed increased by 30x", "Operational data entry overhead lowered by 85%"],
  },
  shopwave: {
    title: "ShopWave Platform",
    category: "Web",
    color: "#F43F5E",
    timeline: "4.5 Months",
    problem: "An international retail brand's online checkout layout loaded slowly on low-end mobile devices, causing high cart abandonment rates.",
    research: "Tracked JS bundle sizes and core web vitals, diagnosing bloat from legacy state management libraries and image optimization scripts.",
    solution: "Created a headless e-commerce store with Next.js App Router and dynamic content rendering, complete with server-optimized responsive image sets.",
    technologies: ["Next.js", "Stripe API", "GraphQL", "Tailwind CSS", "Prisma"],
    results: ["2.4s reduction in core Page Interactive load times", "Checkout conversion metrics increased by 32%", "Cart abandonment decreased by 25%"],
  },
  taskpilot: {
    title: "TaskPilot Suite",
    category: "SaaS",
    color: "#8B5CF6",
    timeline: "3 Months",
    problem: "Remote teams suffered from task management system bloat, with engineers spending more time updating cards than writing code.",
    research: "Studied task board interaction patterns, noting that manual prioritization took up to 30 minutes of team leads' daily workflow schedules.",
    solution: "Built an intuitive project board using real-time canvas subscriptions, drag-and-drop actions, and integrated OpenAI models for priority ranking.",
    technologies: ["Vue.js", "OpenAI API", "GraphQL", "Redis", "Node.js"],
    results: ["30 minutes saved per engineer daily", "98% project board adoption rate", "Milestone delivery predictive accuracy improved by 35%"],
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = caseStudiesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="pt-24">
      {/* Intro Header */}
      <SectionWrapper background="primary" padding="lg">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-8 text-[var(--brand-primary)] hover:underline"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className="text-xs font-bold uppercase px-3 py-1.5 rounded-full"
              style={{
                background: `${data.color}15`,
                color: data.color,
              }}
            >
              {data.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[var(--theme-text-tertiary)]">
              <Clock size={14} />
              <span>Duration: {data.timeline}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            {data.title}
          </h1>
        </div>
      </SectionWrapper>

      {/* Case Details */}
      <SectionWrapper background="secondary" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info Columns */}
          <div className="lg:col-span-2 space-y-12">
            <div className="group border-b border-[var(--theme-border)] pb-8 last:border-b-0">
              <h2 className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-[var(--brand-primary)]">1. Problem Statement</h2>
              <p className="text-[var(--theme-text-secondary)] leading-relaxed text-base md:text-lg">{data.problem}</p>
            </div>

            <div className="group border-b border-[var(--theme-border)] pb-8 last:border-b-0">
              <h2 className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-[var(--brand-primary)]">2. Research & Discovery</h2>
              <p className="text-[var(--theme-text-secondary)] leading-relaxed text-base md:text-lg">{data.research}</p>
            </div>

            <div className="group border-b border-[var(--theme-border)] pb-8 last:border-b-0">
              <h2 className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-[var(--brand-primary)]">3. Solution & Architecture</h2>
              <p className="text-[var(--theme-text-secondary)] leading-relaxed text-base md:text-lg">{data.solution}</p>
            </div>
          </div>

          {/* Sidebar Info Columns */}
          <div className="space-y-10">
            {/* Tech Stack used */}
            <div className="border-t-2 border-[var(--theme-border)] pt-6">
              <div className="flex items-center gap-2 mb-4 text-[var(--brand-primary)]">
                <Code className="w-5 h-5" />
                <h3 className="text-lg font-bold">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 font-medium"
                    style={{
                      background: "var(--theme-bg-secondary)",
                      border: "1px solid var(--theme-border)",
                      borderRadius: "var(--radius-lg)",
                      color: "var(--theme-text-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results achieved */}
            <div className="border-t-2 border-[var(--theme-border)] pt-6">
              <div className="flex items-center gap-2 mb-4 text-[var(--brand-primary)]">
                <Award className="w-5 h-5" />
                <h3 className="text-lg font-bold">Project Results</h3>
              </div>
              <ul className="space-y-4">
                {data.results.map((res) => (
                  <li key={res} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[var(--accent-emerald)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--theme-text-secondary)] leading-relaxed">{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
