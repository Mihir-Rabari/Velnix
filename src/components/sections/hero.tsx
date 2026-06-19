"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Code2, Activity, RotateCcw, Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { useTheme } from "@/components/providers/theme-provider";

const stats = [
  { value: 143, suffix: "", label: "Projects shipped" },
  { value: 97, suffix: "%", label: "On-time delivery" },
  { value: 4.9, suffix: "/5", label: "Avg. client rating", isDecimal: true },
  { value: 8, suffix: " yrs", label: "In the game" },
];

function AnimatedCounter({ value, suffix, isDecimal }: { value: number; suffix: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              if (timer) clearInterval(timer);
            } else {
              setCount(isDecimal ? Math.round(start * 10) / 10 : Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [value, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

function DevSandbox() {
  const { resolvedTheme } = useTheme();
  const [buildStatus, setBuildStatus] = useState<'idle' | 'building' | 'success'>('idle');
  const [activeTab, setActiveTab] = useState<'code' | 'dashboard'>('code');
  const [logs, setLogs] = useState<string[]>(["$ npm run ship"]);
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);

  const startBuild = () => {
    if (buildStatus !== 'idle') return;
    setBuildStatus('building');
    setLogs(["$ npm run ship", "▸ packing core bundles...", "▸ compiling TypeScript config..."]);

    setTimeout(() => {
      setLogs(prev => [...prev, "▸ optimizing CSS layouts...", "▸ checking Lighthouse SLA..."]);
    }, 650);

    setTimeout(() => {
      setLogs(prev => [...prev, "✓ build compiled successfully in 1.4s!", "🚀 ship build deployed to edge!"]);
      setBuildStatus('success');
    }, 1400);
  };

  const resetBuild = () => {
    setBuildStatus('idle');
    setLogs(["$ npm run ship"]);
  };

  return (
    <div
      className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between"
      style={{
        background: resolvedTheme === "dark" ? "var(--surface-dark)" : "var(--surface-light)",
        border: "1px solid var(--theme-border)",
        transition: "var(--default-card-transition)",
      }}
    >
      {/* Window Header */}
      <div
        className="h-11 flex items-center justify-between px-4 border-b flex-shrink-0"
        style={{
          background: resolvedTheme === "dark" ? "rgba(0, 26, 35, 0.4)" : "rgba(244, 249, 214, 0.4)",
          borderColor: "var(--theme-border)",
        }}
      >
        {/* Window controls */}
        <div className="flex gap-1.5 items-center">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
        </div>

        {/* Tab Selection */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("code")}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer"
            style={{
              background: activeTab === "code" ? "var(--theme-bg-secondary)" : "transparent",
              color: activeTab === "code" ? "var(--theme-text-primary)" : "var(--theme-text-secondary)",
            }}
          >
            <Code2 size={12} />
            index.ts
          </button>
          <button
            onClick={() => setActiveTab("dashboard")}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer"
            style={{
              background: activeTab === "dashboard" ? "var(--theme-bg-secondary)" : "transparent",
              color: activeTab === "dashboard" ? "var(--theme-text-primary)" : "var(--theme-text-secondary)",
            }}
          >
            <Activity size={12} />
            dashboard.tsx
          </button>
        </div>

        {/* Build / Play control */}
        <div className="flex items-center">
          {buildStatus === "idle" && (
            <button
              onClick={startBuild}
              className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-light)] text-black rounded transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
            >
              <Play size={10} fill="black" /> Build
            </button>
          )}
          {buildStatus === "building" && (
            <div className="flex items-center gap-1 text-[11px] font-bold px-2 py-1 bg-yellow-400 text-black rounded">
              <Loader2 size={10} className="animate-spin" /> Building
            </div>
          )}
          {buildStatus === "success" && (
            <button
              onClick={resetBuild}
              className="flex items-center gap-1 text-[11px] font-bold px-2 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded transition-all cursor-pointer"
            >
              <RotateCcw size={10} /> Reset
            </button>
          )}
        </div>
      </div>

      {/* Editor Panel */}
      <div className="flex-1 relative overflow-hidden flex flex-col justify-between">
        {activeTab === "code" ? (
          <div className="p-6 font-mono text-xs leading-relaxed select-none relative z-10 flex-1">
            {/* Syntax Highlighted Code block */}
            <div className="mb-2 text-[var(--theme-text-tertiary)] italic">// Velnix Studio — Ship premium products</div>
            <div className="mb-2">
              <span className="text-[#F43F5E] mr-1.5">import</span>
              <span className="text-[var(--theme-text-primary)] mr-1.5">&#123; shipApp &#125;</span>
              <span className="text-[#F43F5E] mr-1.5">from</span>
              <span className="text-[var(--brand-primary)]">"@velnix/core"</span>;
            </div>
            <div className="mb-2">
              <span className="text-[#F43F5E] mr-1.5">const</span>
              <span className="text-[var(--theme-text-primary)]">config = &#123;</span>
            </div>
            <div className="pl-4 mb-1">
              <span className="text-[var(--theme-text-secondary)]">design:</span>
              <span className="text-[var(--brand-primary)] ml-1.5">"Premium & Minimal ✦"</span>,
            </div>
            <div className="pl-4 mb-1">
              <span className="text-[var(--theme-text-secondary)]">speed:</span>
              <span className="text-[var(--brand-primary)] ml-1.5">"Fast (100 score) ⚡"</span>,
            </div>
            <div className="pl-4 mb-2">
              <span className="text-[var(--theme-text-secondary)]">slop:</span>
              <span className="text-[#F43F5E] ml-1.5">"0% ⛔"</span>
            </div>
            <div className="mb-2">
              <span className="text-[var(--theme-text-primary)]">&#125;;</span>
            </div>
            <div className="mb-1">
              <span className="text-[#F43F5E] mr-1.5">const</span>
              <span className="text-[var(--theme-text-primary)] mr-1.5">release =</span>
              <span className="text-[#F43F5E] mr-1.5">await</span>
              <span className="text-[var(--brand-primary)]">shipApp</span>
              <span className="text-[var(--theme-text-primary)]">(config);</span>
            </div>
          </div>
        ) : (
          /* Dashboard Analytics Panel */
          <div className="flex-1 flex flex-col justify-center p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[var(--theme-text-secondary)] font-semibold">Active Deployments</span>
                <div className="text-2xl font-bold text-[var(--theme-text-primary)] mt-0.5">143,622 <span className="text-xs text-[var(--brand-primary)] font-medium">▲ 12%</span></div>
              </div>
              <Activity className="w-5 h-5 text-[var(--brand-primary)]" />
            </div>
            <div className="flex items-end justify-between h-28 gap-3 pt-6 border-b border-[var(--theme-border-subtle)]">
              {[
                { day: "M", val: 40 },
                { day: "T", val: 55 },
                { day: "W", val: 80 },
                { day: "T", val: 65 },
                { day: "F", val: 95 }
              ].map((d, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center gap-2 group/bar cursor-pointer"
                  onMouseEnter={() => setHoveredMetric(index)}
                  onMouseLeave={() => setHoveredMetric(null)}
                >
                  <div className="relative w-full flex justify-center">
                    {hoveredMetric === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: -8 }}
                        className="absolute bottom-full bg-[var(--theme-bg-secondary)] text-[10px] font-bold px-1.5 py-0.5 rounded border border-[var(--theme-border)] text-[var(--theme-text-primary)] whitespace-nowrap shadow-md z-20"
                      >
                        {d.val}%
                      </motion.div>
                    )}
                    <motion.div
                      className="w-full rounded-t-sm"
                      style={{
                        height: `${d.val}px`,
                        background: hoveredMetric === index ? "var(--brand-primary)" : "var(--theme-border)",
                        boxShadow: hoveredMetric === index ? "0 0 12px rgba(179,239,178,0.3)" : "none",
                        transition: "background 0.3s ease",
                      }}
                      whileHover={{ scaleY: 1.05 }}
                    />
                  </div>
                  <span className="text-[10px] font-semibold text-[var(--theme-text-tertiary)]">{d.day}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scan line compiler overlay */}
        {buildStatus === "building" && activeTab === "code" && (
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--brand-primary)] to-transparent pointer-events-none z-20"
            style={{
              boxShadow: "0 0 12px var(--brand-primary)",
            }}
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      {/* Interactive Terminal Footer */}
      <div
        className="h-28 bg-[#001015] border-t border-[var(--theme-border)] p-4 font-mono text-[11px] leading-relaxed overflow-y-auto flex flex-col justify-start gap-1 select-none z-10 flex-shrink-0"
        style={{ color: "#D8FAD7" }}
      >
        {logs.map((log, idx) => (
          <div key={idx} className="flex gap-2">
            {log.startsWith("$") ? (
              <span className="text-[var(--theme-text-tertiary)]">guest@velnix:~</span>
            ) : null}
            <span
              style={{
                color:
                  log.startsWith("✓") || log.startsWith("🚀")
                    ? "var(--brand-primary)"
                    : log.startsWith("▸")
                    ? "var(--brand-primary-dark)"
                    : "inherit",
              }}
            >
              {log}
            </span>
          </div>
        ))}
      </div>

      {/* Floating accent card */}
      <motion.div
        key={buildStatus}
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute rounded-xl animate-float"
        style={{
          bottom: "8%",
          right: "-10px",
          padding: "16px 20px",
          background: "var(--theme-surface)",
          border: buildStatus === "success" ? "1px solid var(--brand-primary)" : "1px solid var(--theme-border)",
          boxShadow: buildStatus === "success" ? "var(--shadow-glow-brand)" : "var(--shadow-lg)",
          zIndex: 30,
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
              buildStatus === "success"
                ? "bg-[var(--brand-primary)] text-black shadow-glow-brand"
                : "bg-[var(--theme-border)] text-[var(--theme-text-secondary)]"
            }`}
          >
            {buildStatus === "success" ? <Check size={14} /> : "✓"}
          </div>
          <div>
            <div className="text-sm font-semibold" style={{ color: "var(--theme-text-primary)" }}>
              {buildStatus === "success" ? "Build shipped" : "Build queued"}
            </div>
            <div className="text-xs" style={{ color: "var(--theme-text-secondary)" }}>
              {buildStatus === "success" ? "just now" : "idle"}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
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

  // Scroll-driven visual micro-interactions
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const visualRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

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
          style={{ padding: "var(--space-12) var(--section-px) var(--space-8)" }}
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

            {/* Main Headline — mixed fonts for premium staggered line reveal */}
            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 overflow-hidden"
              style={{
                color: "var(--theme-text-primary)",
                fontFamily: "var(--font-heading)",
              }}
            >
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  className="block"
                >
                  We design & build
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="font-display block"
                  style={{ fontWeight: 400 }}
                >
                  software people
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                  className="block"
                >
                  actually want to use
                </motion.span>
              </span>
            </h1>

            {/* Subheadline — conversational, not buzzwordy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
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
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
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
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-8 md:gap-12"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
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
            style={{ y: visualY, scale: visualScale, rotate: visualRotate }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center"
          >
            <DevSandbox />
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
