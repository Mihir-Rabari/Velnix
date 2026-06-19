"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    slug: "future-ai-custom-software",
    title: "The Future of AI in Custom Software Development",
    excerpt: "How artificial intelligence is transforming the way we architect, build, and deploy custom software solutions.",
    category: "AI & Engineering",
    author: "The Velnix Team",
    date: "June 12, 2026",
    readTime: "8 min read",
    color: "#6C3AED",
  },
  {
    slug: "startup-technical-foundation",
    title: "Why Startups Need a Strong Technical Foundation",
    excerpt: "Building on solid engineering principles from day one saves time, money, and headaches as you scale.",
    category: "Startup Guide",
    author: "The Velnix Team",
    date: "June 8, 2026",
    readTime: "6 min read",
    color: "#06B6D4",
  },
  {
    slug: "microservices-vs-monolith",
    title: "Microservices vs Monolith: Making the Right Choice",
    excerpt: "A practical guide to choosing the right architecture for your project based on team size, scale, and timeline.",
    category: "Architecture",
    author: "The Velnix Team",
    date: "June 3, 2026",
    readTime: "10 min read",
    color: "#10B981",
  },
];

export default function BlogPage() {
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
              The Velnix Blog
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            Engineering and <span className="gradient-text">design insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--theme-text-secondary)]"
          >
            Deep dives, project architectures, software tutorials, and notes from our daily shipping cycles.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Grid of posts */}
      <SectionWrapper background="secondary" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ gap: "var(--grid-gap)" }}>
          {posts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="block group h-full">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Header Banner - Standalone Rounded Visual */}
                    <div
                      className="relative h-44 mb-5 overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
                      style={{
                        background: `linear-gradient(135deg, ${post.color}15, ${post.color}05)`,
                        border: `1px solid var(--theme-border)`,
                        borderRadius: "var(--radius-2xl)",
                      }}
                    >
                      <div className="absolute top-4 left-4">
                        <span
                          className="text-xs font-semibold px-3 py-1.5 rounded-full"
                          style={{
                            background: `${post.color}12`,
                            color: post.color,
                            border: `1px solid ${post.color}15`,
                            borderRadius: "var(--radius-full)",
                          }}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--brand-primary)] leading-snug" style={{ color: "var(--theme-text-primary)" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--theme-text-secondary)" }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    <div className="border-t border-[var(--theme-border-subtle)] my-4" />
                    <div className="flex items-center justify-between text-xs" style={{ color: "var(--theme-text-tertiary)" }}>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <User size={12} /> {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: "var(--brand-primary)" }} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
