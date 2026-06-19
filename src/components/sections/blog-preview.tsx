"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";

const posts = [
  {
    title: "The Future of AI in Custom Software Development",
    excerpt:
      "How artificial intelligence is transforming the way we architect, build, and deploy custom software solutions. Elevating quality and shortening delivery timelines.",
    category: "AI & Engineering",
    date: "June 12, 2026",
    readTime: "8 min",
    color: "var(--accent-violet)",
    slug: "/blog/future-ai-custom-software",
    featured: true,
  },
  {
    title: "Why Startups Need a Strong Technical Foundation",
    excerpt:
      "Building on solid engineering principles from day one saves time, money, and headaches as you scale your team and codebase.",
    category: "Startup Guide",
    date: "June 8, 2026",
    readTime: "6 min",
    color: "var(--accent-cyan)",
    slug: "/blog/startup-technical-foundation",
    featured: false,
  },
  {
    title: "Microservices vs Monolith: Making the Right Choice",
    excerpt:
      "A practical guide to choosing the right architecture for your project based on team size, scale, and timeline. Start modular and scale carefully.",
    category: "Architecture",
    date: "June 3, 2026",
    readTime: "10 min",
    color: "var(--accent-emerald)",
    slug: "/blog/microservices-vs-monolith",
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: Featured Post - Immersive borderless column */}
        <motion.div
          className="lg:col-span-6 flex flex-col"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href={featuredPost.slug} className="block group h-full">
            <div className="flex flex-col gap-5 h-full">
              {/* Image Banner area */}
              <div
                className="relative h-60 md:h-72 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${featuredPost.color}15, ${featuredPost.color}05)`,
                  border: "1px solid var(--theme-border)",
                  borderRadius: "var(--radius-2xl)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-[120px] font-bold opacity-[0.06] select-none"
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
                      border: `1px solid ${featuredPost.color}20`,
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Title & Excerpt */}
              <div className="px-1 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-2xl font-bold mb-3 group-hover:text-[var(--brand-primary)] transition-colors leading-tight"
                    style={{ color: "var(--theme-text-primary)" }}
                  >
                    {featuredPost.title}
                  </h3>
                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{ color: "var(--theme-text-secondary)" }}
                  >
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs" style={{ color: "var(--theme-text-tertiary)" }}>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Calendar size={13} /> {featuredPost.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock size={13} /> {featuredPost.readTime}</span>
                  </div>
                  <span className="flex items-center gap-1 text-[var(--brand-primary)] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Read article <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Right: Editorial News List */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h4 className="text-xs font-semibold uppercase tracking-wider mb-6 text-[var(--theme-text-tertiary)] pl-2">
            More News & Insights
          </h4>
          <div className="border-t border-[var(--theme-border)]">
            {secondaryPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <Link href={post.slug} className="block group">
                  <div
                    className="flex flex-col py-6 px-4 border-b border-[var(--theme-border-subtle)] transition-all duration-300 hover:bg-[var(--theme-surface-hover)]/30"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-semibold"
                        style={{ color: post.color }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-[var(--theme-text-tertiary)] flex items-center gap-1">
                        · <Clock size={11} /> {post.readTime}
                      </span>
                    </div>

                    <div className="flex justify-between items-start gap-4">
                      <h3
                        className="text-lg font-bold group-hover:text-[var(--brand-primary)] transition-colors leading-snug"
                        style={{ color: "var(--theme-text-primary)" }}
                      >
                        {post.title}
                      </h3>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0 mt-1"
                        style={{ color: "var(--brand-primary)" }}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
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
