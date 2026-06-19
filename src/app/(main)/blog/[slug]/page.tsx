"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import Link from "next/link";

const blogPostsData: Record<string, {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  color: string;
  content: string[];
}> = {
  "future-ai-custom-software": {
    title: "The Future of AI in Custom Software Development",
    category: "AI & Engineering",
    author: "The Velnix Team",
    date: "June 12, 2026",
    readTime: "8 min read",
    color: "#6C3AED",
    content: [
      "Artificial intelligence is no longer just a buzzword; it has become a fundamental tool in the modern developer's toolkit. From writing cleaner code with LLM copilots to architecting intelligent backend microservices, AI is transforming how we construct digital products.",
      "At The Velnix, we have integrated AI tools into our core engineering workflow. This doesn't mean we let machines write our software; rather, we use generative models to verify type definitions, write extensive unit test suites, and analyze performance bottlenecks. This elevates our code quality while shortening delivery timelines.",
      "But the real power of AI lies within client-facing applications. Integrating NLP search queries, predictive user recommendations, and semantic vector databases allows companies to offer outstanding features that feel magic. We believe every modern SaaS will require intelligent capabilities to remain competitive.",
    ],
  },
  "startup-technical-foundation": {
    title: "Why Startups Need a Strong Technical Foundation",
    category: "Startup Guide",
    author: "The Velnix Team",
    date: "June 8, 2026",
    readTime: "6 min read",
    color: "#06B6D4",
    content: [
      "When building a startup, speed is often prioritized over structural planning. While launching fast is critical, skipping foundational technical architecture can lead to massive technical debt that hampers scaling attempts just when the business is gaining momentum.",
      "A strong technical foundation starts with choosing standard, maintainable frameworks (like Next.js, TypeScript, and Go) rather than exotic databases or experimental compilers. It also involves setting up proper testing practices, setting up CI/CD pipelines, and writing clear documentation.",
      "By establishing clean separation of concerns and database schemas from day one, startups can expand their teams and deploy new features without breaking existing code. Investing in design consistency and technical guidelines pays off tenfold within the first year.",
    ],
  },
  "microservices-vs-monolith": {
    title: "Microservices vs Monolith: Making the Right Choice",
    category: "Architecture",
    author: "The Velnix Team",
    date: "June 3, 2026",
    readTime: "10 min read",
    color: "#10B981",
    content: [
      "One of the most frequent architectural discussions we have with client CTOs is the choice between microservices and a monolithic repository setup. The industry hype cycle often pushes microservices as the gold standard, but the reality is more nuanced.",
      "A monolith is simpler to build, test, and deploy. For early-stage products and smaller teams, it is almost always the correct option because it reduces operational friction and network latency. However, as the product grows and multiple teams work on separate features, a monolith can become a bottleneck.",
      "Microservices solve team scaling problems by allowing services to fail and deploy independently. But they introduce significant overhead in networking, logging, and infrastructure complexity. At The Velnix, we recommend a 'modular monolith' approach first: structure code cleanly as if it were separate services, and only extract them when actual scaling needs arise.",
    ],
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPostsData[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24">
      {/* Article Header */}
      <SectionWrapper background="primary" padding="lg">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-8 text-[var(--brand-primary)] hover:underline"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className="text-xs font-bold uppercase px-3 py-1.5 rounded-full"
              style={{
                background: `${post.color}15`,
                color: post.color,
              }}
            >
              {post.category}
            </span>
            <div className="flex items-center gap-3 text-xs text-[var(--theme-text-tertiary)]">
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {post.readTime}
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 mt-6">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ background: `linear-gradient(135deg, ${post.color}, ${post.color}99)` }}
            >
              V
            </div>
            <div>
              <div className="text-sm font-semibold">{post.author}</div>
              <div className="text-xs text-[var(--theme-text-tertiary)]">Technical Writers</div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Article Body */}
      <SectionWrapper background="secondary" padding="lg">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-[var(--theme-text-secondary)] text-base md:text-lg leading-relaxed">
            {post.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
