"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";

const posts = [
  {
    title: "Why we stopped using microservices for early-stage startups",
    excerpt:
      "The industry loves to push microservices as the default. But for most teams under 20 engineers, a well-structured monolith gets you further, faster.",
    category: "Architecture",
    date: "June 12, 2026",
    readTime: "8 min",
    color: "#6366F1",
    slug: "/blog/microservices-early-stage",
    featured: true,
  },
  {
    title: "Our approach to AI-assisted code review",
    excerpt:
      "How we integrated AI tooling into our PR workflow without sacrificing code quality or team ownership.",
    category: "Engineering",
    date: "June 8, 2026",
    readTime: "5 min",
    color: "#06B6D4",
    slug: "/blog/ai-code-review",
    featured: false,
  },
  {
    title: "Designing for trust: lessons from fintech projects",
    excerpt:
      "When users hand you their financial data, every design decision matters. Here's what we learned across 12 fintech builds.",
    category: "Design",
    date: "June 3, 2026",
    readTime: "6 min",
    color: "#10B981",
    slug: "/blog/designing-for-trust",
    featured: false,
  },
];

export function BlogPreviewSection() {
  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);

  return (
    <SectionWrapper id="blog">
      <SectionHeader
        variant="editorial"
        label="From our blog"
        title="Things we've been thinking about"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Featured post — larger */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href={featuredPost.slug} className="block group h-full">
            <div
              className="h-full flex flex-col"
              style={{
                background: "var(--theme-surface)",
                border: "1px solid var(--theme-border)",
                borderRadius: "var(--radius-2xl)",
                overflow: "hidden",
                transition: "var(--default-card-transition)",
              }}
            >
              {/* Image area */}
              <div
                className="relative h-56 md:h-64"
                style={{
                  background: `linear-gradient(135deg, ${featuredPost.color}12, ${featuredPost.color}05)`,
                  borderBottom: "1px solid var(--theme-border)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-8xl font-bold opacity-[0.06]"
                    style={{ color: featuredPost.color }}
                  >
                    {featuredPost.category.charAt(0)}
                  </div>
                </div>
                <div className="absolute top-5 left-5">
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      background: `${featuredPost.color}12`,
                      color: featuredPost.color,
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-7">
                <h3
                  className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-[var(--brand-primary)] transition-colors"
                  style={{ color: "var(--theme-text-primary)", lineHeight: "1.3" }}
                >
                  {featuredPost.title}
                </h3>
                <p
                  className="text-base mb-5 flex-1"
                  style={{ color: "var(--theme-text-secondary)", lineHeight: "1.7" }}
                >
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs" style={{ color: "var(--theme-text-tertiary)" }}>
                  <span>{featuredPost.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Secondary posts — stacked */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {secondaryPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex-1"
            >
              <Link href={post.slug} className="block group h-full">
                <div
                  className="h-full flex flex-col"
                  style={{
                    background: "var(--theme-surface)",
                    border: "1px solid var(--theme-border)",
                    borderRadius: "var(--radius-xl)",
                    padding: "24px",
                    transition: "var(--default-card-transition)",
                  }}
                >
                  <span
                    className="text-xs font-semibold mb-3 inline-block"
                    style={{ color: post.color }}
                  >
                    {post.category}
                  </span>
                  <h3
                    className="text-lg font-semibold mb-2 group-hover:text-[var(--brand-primary)] transition-colors"
                    style={{ color: "var(--theme-text-primary)", lineHeight: "1.35" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-sm flex-1 mb-4"
                    style={{ color: "var(--theme-text-secondary)", lineHeight: "1.6" }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs" style={{ color: "var(--theme-text-tertiary)" }}>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
          style={{ color: "var(--brand-primary)" }}
        >
          Read all posts
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
