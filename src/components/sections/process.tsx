"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence, useScroll } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/theme-provider";

/* ========================================================
   Process Stage Visuals
   ======================================================== */

function UnderstandVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 flex items-center justify-center p-6"
    >
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Connection lines */}
        <motion.path
          d="M60 60 H140"
          stroke="var(--theme-border)"
          strokeWidth="2"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M140 60 H220"
          stroke="var(--theme-border)"
          strokeWidth="2"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Node 1 */}
        <motion.circle
          cx="60"
          cy="60"
          r="22"
          fill="var(--feature-card-icon-bg)"
          stroke="var(--brand-primary)"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="60" y="64" fill="var(--theme-text-primary)" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-mono)">
          USER
        </text>

        {/* Node 2 */}
        <motion.circle
          cx="140"
          cy="60"
          r="22"
          fill="var(--feature-card-icon-bg)"
          stroke="var(--brand-primary)"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <text x="140" y="64" fill="var(--theme-text-primary)" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-mono)">
          IDEAS
        </text>

        {/* Node 3 */}
        <motion.circle
          cx="220"
          cy="60"
          r="22"
          fill="var(--feature-card-icon-bg)"
          stroke="var(--brand-primary)"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        <text x="220" y="64" fill="var(--theme-text-primary)" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-mono)">
          TECH
        </text>
      </svg>
    </motion.div>
  );
}

function DesignVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-[280px] h-28 border border-[var(--theme-border-subtle)] rounded-lg bg-[var(--theme-surface)]/50 relative overflow-hidden p-3 flex flex-col justify-between">
        {/* Figma-like frame mockup */}
        <div className="flex justify-between items-center border-b border-[var(--theme-border-subtle)] pb-2 flex-shrink-0">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-border)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--theme-border)]" />
          </div>
          <span className="text-[9px] font-mono text-[var(--theme-text-tertiary)] font-bold">Figma Draft</span>
        </div>

        <div className="flex-1 flex gap-3 pt-2 relative">
          {/* Wireframe Sidebar */}
          <div className="w-1/4 border border-[var(--theme-border-subtle)] rounded p-1 flex flex-col gap-1.5">
            <div className="h-1 bg-[var(--theme-border)] rounded w-full" />
            <div className="h-1 bg-[var(--theme-border)] rounded w-2/3" />
            <div className="h-1 bg-[var(--theme-border)] rounded w-1/2" />
          </div>

          {/* Wireframe main block */}
          <div className="flex-1 border border-[var(--theme-border-subtle)] rounded p-2 flex flex-col gap-2 relative">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/30 flex-shrink-0" />
              <div className="flex-1 flex flex-col gap-1">
                <div className="h-1.5 bg-[var(--theme-text-secondary)]/20 rounded w-full" />
                <div className="h-1 bg-[var(--theme-text-secondary)]/10 rounded w-2/3" />
              </div>
            </div>
            <div className="h-6 border border-dashed border-[var(--brand-primary)]/30 rounded flex items-center justify-center bg-[var(--brand-primary)]/[0.02]">
              <span className="text-[8px] font-mono text-[var(--brand-primary)] font-semibold">Drop Zone</span>
            </div>
          </div>

          {/* Figma cursor moving and dragging */}
          <motion.div
            className="absolute z-20 pointer-events-none"
            animate={{
              x: [180, 110, 110, 150, 180],
              y: [60, 20, 20, 45, 60],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Cursor SVG */}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0V11.5L3.5 8L6.5 11.5L8 10L5 6.5L9.5 6L0 0Z" fill="var(--brand-primary)" />
            </svg>
            <span className="text-[7px] bg-[var(--brand-primary)] text-black px-1 rounded font-bold ml-2">Designer</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function BuildVisual() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(p => (p >= 100 ? 0 : p + 5));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-[280px] h-28 border border-[var(--theme-border-subtle)] rounded-lg bg-black/90 p-3 font-mono text-[9px] text-[#D8FAD7] flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-white/50 text-[8px] flex-shrink-0">
          <span>Terminal Shell</span>
          <span className="animate-pulse">● running build</span>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-1">
          <div className="text-white/40">guest@velnix:~$ npm run compile</div>
          <div className="flex items-center gap-1.5 text-[var(--brand-primary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] animate-ping" />
            <span>packing assets: {percent}%</span>
          </div>
          <div className="text-white/20 truncate">▸ chunk-2a8f9.js resolved</div>
          <div className="text-white/20 truncate">▸ index.css processed</div>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/10 rounded overflow-hidden flex-shrink-0">
          <div
            className="h-full bg-[var(--brand-primary)] transition-all duration-150"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function ShipVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Pulsing server/radar lines */}
        {[1, 2, 3].map(i => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[var(--brand-primary)]/20"
            style={{
              width: "100%",
              height: "100%",
            }}
            animate={{
              scale: [0.3, 1.2],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: (i - 1) * 1,
            }}
          />
        ))}

        {/* Global center node */}
        <motion.div
          className="w-10 h-10 rounded-full bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)] flex items-center justify-center relative z-10"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[14px] font-bold">🚀</span>
        </motion.div>

        {/* Mini satellite edges */}
        {[
          { top: "10%", left: "10%", label: "SFO" },
          { top: "80%", left: "15%", label: "LHR" },
          { top: "40%", right: "5%", label: "HND" },
        ].map((node, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center z-15"
            style={{ top: node.top, left: node.left || "auto", right: node.right || "auto" }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--brand-primary)] shadow-[0_0_8px_var(--brand-primary)]" />
            <span className="text-[7px] font-mono text-[var(--theme-text-tertiary)] mt-0.5">{node.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ProcessVisual({ activeIndex }: { activeIndex: number }) {
  const { resolvedTheme } = useTheme();
  return (
    <div
      className="w-full h-44 mt-8 rounded-xl overflow-hidden border border-[var(--theme-border-subtle)] relative flex items-center justify-center"
      style={{
        background: resolvedTheme === "dark" ? "rgba(5, 34, 45, 0.2)" : "rgba(232, 241, 242, 0.4)",
      }}
    >
      <AnimatePresence mode="wait">
        {activeIndex === 0 && <UnderstandVisual key="understand" />}
        {activeIndex === 1 && <DesignVisual key="design" />}
        {activeIndex === 2 && <BuildVisual key="build" />}
        {activeIndex === 3 && <ShipVisual key="ship" />}
      </AnimatePresence>
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We dig into your problem, your users, and your constraints. No generic discovery workshops — just real conversations.",
    deliverables: ["Technical spec draft", "User persona maps", "Strategic backlog roadmap"],
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes, interactive prototypes, and layout flowcharts. We design collaboratively so there are no surprises when development starts.",
    deliverables: ["Figma prototypes", "Layout system design", "Interactive user flows"],
  },
  {
    number: "03",
    title: "Build",
    description:
      "Agile sprints with biweekly demos. You see working software early and often — not a big reveal after 4 months.",
    deliverables: ["Production-ready repository", "Bi-weekly sprint demos", "Continuous staging links"],
  },
  {
    number: "04",
    title: "Ship & Support",
    description:
      "We handle the launch, set up monitoring, and stick around for ongoing iteration. We don't ghost you after deploy.",
    deliverables: ["App store/cloud launch", "24/7 logging setups", "SLA maintenance plans"],
  },
];

interface StepCardProps {
  step: typeof steps[0];
  index: number;
  activeIndex: number;
  onInView: (index: number) => void;
}

function StepCard({ step, index, activeIndex, onInView }: StepCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger active state when card is inside the middle 50% of viewport
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, index, onInView]);

  const isActive = activeIndex === index;

  return (
    <div
      ref={ref}
      className="step-card min-h-[50vh] lg:min-h-[60vh] flex flex-col justify-center py-12 first:pt-0 last:pb-0 group animate-all duration-500"
      style={{
        opacity: isActive ? 1 : 0.2,
        filter: isActive ? "none" : "blur(0.5px)",
        transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <div
        className="relative overflow-hidden w-full pl-8"
        style={{
          borderLeft: isActive ? "2px solid var(--brand-primary)" : "2px solid var(--theme-border)",
          transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="flex items-center gap-4 mb-4">
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-500"
            style={{
              background: isActive ? "var(--brand-primary)" : "var(--feature-card-icon-bg)",
              color: isActive ? "black" : "var(--brand-primary)",
              fontFamily: "var(--font-mono)",
              border: isActive ? "1px solid var(--brand-primary)" : "1px solid var(--border-accent)",
              boxShadow: isActive ? "0 0 12px rgba(179,239,178,0.3)" : "none",
            }}
          >
            Step {step.number}
          </span>
        </div>

        <h3
          className="text-2xl font-bold mb-4 transition-colors duration-500"
          style={{ color: isActive ? "var(--theme-text-primary)" : "var(--theme-text-secondary)" }}
        >
          {step.title}
        </h3>

        <p
          className="text-base leading-relaxed mb-6 transition-colors duration-500"
          style={{ color: isActive ? "var(--theme-text-secondary)" : "var(--theme-text-tertiary)" }}
        >
          {step.description}
        </p>

        {/* Deliverables checklist */}
        <div
          className="border-t pt-5 transition-colors duration-500"
          style={{
            borderColor: isActive ? "var(--brand-primary)" : "var(--theme-border-subtle)",
            opacity: isActive ? 1 : 0.5,
          }}
        >
          <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 text-[var(--theme-text-tertiary)]">
            Key Deliverables
          </h4>
          <ul className="space-y-2">
            {step.deliverables.map((del, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-[var(--theme-text-secondary)]">
                <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${isActive ? "bg-[var(--brand-primary)]" : "bg-[var(--theme-border)]"}`} />
                {del}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface MobileStepItemProps {
  step: typeof steps[0];
  index: number;
  activeIndex: number;
  onInView: (index: number) => void;
}

function MobileStepItem({ step, index, activeIndex, onInView }: MobileStepItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-30% 0px -30% 0px",
  });

  useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, index, onInView]);

  const isActive = activeIndex === index;

  return (
    <div
      ref={ref}
      className="relative pl-8 transition-all duration-500"
      style={{
        opacity: isActive ? 1 : 0.25,
        filter: isActive ? "none" : "blur(0.4px)",
        transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Dot indicator on the left line */}
      <div
        className="absolute -left-[22px] top-1.5 w-2.5 h-2.5 rounded-full border transition-all duration-300"
        style={{
          backgroundColor: isActive ? "var(--brand-primary)" : "var(--theme-bg)",
          borderColor: isActive ? "var(--brand-primary)" : "var(--theme-border)",
          boxShadow: isActive ? "0 0 10px var(--brand-primary)" : "none",
          transform: isActive ? "scale(1.2)" : "scale(1)",
        }}
      />

      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full transition-colors duration-500"
          style={{
            background: isActive ? "var(--brand-primary)" : "var(--feature-card-icon-bg)",
            color: isActive ? "black" : "var(--brand-primary)",
          }}
        >
          {step.number}
        </span>
        <h3
          className="text-lg font-bold transition-colors duration-500"
          style={{ color: isActive ? "var(--theme-text-primary)" : "var(--theme-text-secondary)" }}
        >
          {step.title}
        </h3>
      </div>
      <p
        className="text-sm leading-relaxed mb-4 transition-colors duration-500"
        style={{ color: isActive ? "var(--theme-text-secondary)" : "var(--theme-text-tertiary)" }}
      >
        {step.description}
      </p>
      <div
        className="border-t border-[var(--theme-border-subtle)] pt-4 mt-2 transition-colors duration-500"
        style={{
          borderColor: isActive ? "var(--brand-primary)" : "var(--theme-border-subtle)",
          opacity: isActive ? 1 : 0.6,
        }}
      >
        <ul className="grid grid-cols-1 gap-1.5">
          {step.deliverables.map((del, k) => (
            <li key={k} className="flex items-center gap-2 text-xs text-[var(--theme-text-secondary)]">
              <span className={`w-1 h-1 rounded-full transition-colors duration-500 ${isActive ? "bg-[var(--brand-primary)]" : "bg-[var(--theme-border)]"}`} />
              {del}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start 65%", "end 65%"],
  });

  return (
    <SectionWrapper id="process" className="relative" overflowVisible>
      {/* Sticky Split Layout for Desktop */}
      <div className="hidden lg:flex gap-16 items-start relative w-full">
        {/* Left Column (Sticky Panel) */}
        <div className="w-5/12 sticky top-32">
          <div
            className="flex flex-col gap-6 p-6 md:p-8 rounded-2xl border border-[var(--theme-border-subtle)] bg-[var(--theme-bg-secondary)]/50 backdrop-blur-sm shadow-sm"
          >
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-widest block mb-3"
                style={{ color: "var(--brand-primary)", letterSpacing: "0.15em" }}
              >
                How we work
              </span>
              <h2
                className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
                style={{ color: "var(--theme-text-primary)", lineHeight: "1.15" }}
              >
                Our product <br />
                delivery cycle
              </h2>

              {/* Interactive Stage Visual Indicator */}
              <ProcessVisual activeIndex={activeIndex} />

              {/* Compact Horizontal Step Indicators */}
              <div className="flex justify-between items-center mt-6 px-1">
                {steps.map((step, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={step.title}
                      onClick={() => {
                        const cardElements = containerRef.current?.querySelectorAll(".step-card");
                        if (cardElements && cardElements[idx]) {
                          cardElements[idx].scrollIntoView({ behavior: "smooth", block: "center" });
                        }
                      }}
                      className="flex items-center gap-2.5 group cursor-pointer"
                    >
                      <div
                        className={cn(
                          "w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-mono font-bold border transition-all duration-300",
                          isActive
                            ? "bg-[var(--brand-primary)] border-[var(--brand-primary)] text-black shadow-[0_0_10px_var(--brand-primary)]"
                            : "border-[var(--theme-border)] text-[var(--theme-text-tertiary)] group-hover:border-[var(--brand-primary)] group-hover:text-[var(--theme-text-primary)]"
                        )}
                      >
                        {step.number}
                      </div>
                      <span
                        className={cn(
                          "text-xs font-bold transition-colors duration-300 hidden xl:inline",
                          isActive ? "text-[var(--theme-text-primary)]" : "text-[var(--theme-text-tertiary)] group-hover:text-[var(--theme-text-primary)]"
                        )}
                      >
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sticky footer text */}
            <div className="text-xs text-[var(--theme-text-tertiary)] max-w-xs font-medium border-t border-[var(--theme-border-subtle)] pt-4">
              * We design, build, and deploy with complete transparency. Follow along in real-time.
            </div>
          </div>
        </div>

        {/* Right Column (Scrolling Cards) */}
        <div ref={containerRef} className="w-7/12 flex flex-col">
          {steps.map((step, idx) => (
            <StepCard key={step.title} step={step} index={idx} activeIndex={activeIndex} onInView={setActiveIndex} />
          ))}
        </div>
      </div>

      {/* Stacked Layout for Mobile (lg and below) */}
      <div className="lg:hidden w-full">
        <div className="mb-12">
          <span
            className="text-xs font-semibold uppercase tracking-widest block mb-3"
            style={{ color: "var(--brand-primary)", letterSpacing: "0.12em" }}
          >
            How we work
          </span>
          <h2
            className="text-3xl font-extrabold tracking-tight mb-4"
            style={{ color: "var(--theme-text-primary)" }}
          >
            Our product delivery cycle
          </h2>
        </div>

        <div ref={mobileContainerRef} className="flex flex-col gap-10 pl-6 relative">
          {/* Inactive line track */}
          <div className="absolute left-[7px] top-1.5 bottom-1.5 w-[2px] bg-[var(--theme-border)] rounded-full" />
          {/* Active scroll progress track */}
          <motion.div
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            className="absolute left-[7px] top-1.5 bottom-1.5 w-[2px] bg-[var(--brand-primary)] rounded-full shadow-[0_0_8px_var(--brand-primary)]"
          />

          {steps.map((step, idx) => (
            <MobileStepItem
              key={step.title}
              step={step}
              index={idx}
              activeIndex={activeIndex}
              onInView={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
