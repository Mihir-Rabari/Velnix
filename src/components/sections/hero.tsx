"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/animated-background";

const stats = [
  { value: 143, suffix: "", label: "Projects shipped" },
  { value: 97, suffix: "%", label: "On-time delivery" },
  { value: 4.9, suffix: "/5", label: "Avg. client rating", isDecimal: true },
  { value: 8, suffix: " yrs", label: "In the game" },
];

function AnimatedCounter({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(isDecimal ? Math.round(start * 10) / 10 : Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        paddingTop: "var(--navbar-height)",
        background: "var(--theme-bg)",
      }}
    >
      <AnimatedBackground />

      <motion.div
        style={{ y, opacity }}
        className="container-custom relative z-10 w-full"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center"
          style={{ padding: "var(--section-py-lg) var(--section-px) var(--section-py-md)" }}
        >
          {/* Left content — 7 cols */}
          <div className="lg:col-span-7">
            {/* Small eyebrow — no pill badge, just understated text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm font-medium tracking-wide uppercase mb-6"
              style={{
                color: "var(--brand-primary)",
                letterSpacing: "0.08em",
              }}
            >
              Software studio
            </motion.p>

            {/* Main Headline — mixed fonts for editorial feel */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
              style={{
                color: "var(--theme-text-primary)",
                fontFamily: "var(--font-heading)",
              }}
            >
              We design & build{" "}
              <span className="font-display" style={{ fontWeight: 400 }}>
                software people
              </span>
              <br />
              <span className="font-display" style={{ fontWeight: 400 }}>
                actually
              </span>{" "}
              want to use
            </motion.h1>

            {/* Subheadline — conversational, not buzzwordy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="text-lg md:text-xl mb-10"
              style={{
                color: "var(--theme-text-secondary)",
                lineHeight: "1.7",
                maxWidth: "540px",
              }}
            >
              From early-stage product to enterprise platform — we help teams
              ship thoughtful, well-crafted digital products.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-14"
            >
              <Button
                variant="primary"
                size="lg"
                href="/get-quote"
                icon={<ArrowRight size={18} />}
              >
                Start a conversation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/portfolio"
              >
                See our work
              </Button>
            </motion.div>

            {/* Stats — inline, understated */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8 md:gap-12"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + i * 0.08 }}
                >
                  <div
                    className="text-2xl md:text-3xl font-bold tabular-nums"
                    style={{
                      color: "var(--theme-text-primary)",
                    }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                  </div>
                  <div
                    className="text-sm mt-0.5"
                    style={{ color: "var(--theme-text-tertiary)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right visual — 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center"
          >
            <div
              className="relative w-full aspect-square max-w-md"
            >
              {/* Abstract geometric composition */}
              <motion.div
                className="absolute rounded-3xl"
                style={{
                  width: "70%",
                  height: "70%",
                  top: "5%",
                  left: "5%",
                  background: "var(--gradient-brand)",
                  opacity: 0.08,
                }}
                animate={{ rotate: [0, 3, -2, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute rounded-2xl overflow-hidden"
                style={{
                  width: "75%",
                  height: "75%",
                  top: "12%",
                  left: "12%",
                  background: "var(--theme-surface)",
                  border: "1px solid var(--theme-border)",
                  boxShadow: "var(--shadow-xl)",
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Code-like visual inside */}
                <div style={{ padding: "24px" }}>
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full" style={{ background: "#F43F5E" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "#F59E0B" }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "#10B981" }} />
                  </div>
                  {[60, 85, 45, 70, 55, 90, 40, 65, 80, 50].map((w, i) => (
                    <div
                      key={i}
                      className="mb-2.5 rounded"
                      style={{
                        width: `${w}%`,
                        height: "10px",
                        background: i === 3 || i === 7
                          ? "var(--brand-primary)"
                          : "var(--theme-border)",
                        opacity: i === 3 || i === 7 ? 0.4 : 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating accent card */}
              <motion.div
                className="absolute rounded-xl"
                style={{
                  bottom: "8%",
                  right: "0%",
                  padding: "16px 20px",
                  background: "var(--theme-surface)",
                  border: "1px solid var(--theme-border)",
                  boxShadow: "var(--shadow-lg)",
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "var(--gradient-brand)", color: "white" }}
                  >
                    ✓
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--theme-text-primary)" }}>
                      Build shipped
                    </div>
                    <div className="text-xs" style={{ color: "var(--theme-text-tertiary)" }}>
                      2 min ago
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
          style={{ borderColor: "var(--theme-border)" }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--brand-primary)" }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
