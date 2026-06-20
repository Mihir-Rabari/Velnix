"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Code2, Layers3, ShieldCheck } from "lucide-react";

const capabilities = ["SaaS development", "AI agents & RAG systems", "Mobile applications", "DevOps & cloud infrastructure"];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--theme-bg)] pt-[var(--navbar-height)]">
      <div className="absolute inset-0 hero-grid opacity-50" aria-hidden="true" />
      <div className="absolute -right-40 top-12 h-[520px] w-[520px] rounded-full bg-[var(--brand-primary)]/10 blur-[120px]" aria-hidden="true" />

      <div className="container-custom relative z-10 grid min-h-[calc(100vh-var(--navbar-height))] grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-primary)]">
            <span className="h-px w-8 bg-current" />
            The Velnix Studio
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--theme-text-primary)] sm:text-6xl lg:text-[5.25rem]">
            We build software products <br />
            from idea to <span className="font-display font-normal text-[var(--brand-primary)]">production.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--theme-text-secondary)] md:text-xl">
            An AI-Native Product & Engineering Studio. We design, code, and deploy SaaS platforms, custom AI systems, and mobile applications with an obsession for speed, design precision, and clean code.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[var(--brand-primary)] px-6 py-3.5 text-sm font-semibold text-[#001A23] transition-transform hover:-translate-y-0.5">
              Get in touch
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center rounded-lg border border-[var(--theme-border)] px-6 py-3.5 text-sm font-semibold text-[var(--theme-text-primary)] transition-colors hover:bg-[var(--theme-surface-hover)]">
              View our work
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--theme-border)] pt-6">
            {capabilities.map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-[var(--theme-text-secondary)]">
                <Check size={15} className="text-[var(--brand-primary)]" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-3 shadow-2xl shadow-black/10">
            <div className="flex items-center gap-2 border-b border-[var(--theme-border)] px-3 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-primary)]" />
              <span className="ml-3 font-mono text-[11px] text-[var(--theme-text-tertiary)]">velnix / product-launch</span>
            </div>

            <div className="space-y-3 p-3 sm:p-5">
              <div className="rounded-xl bg-[#001A23] p-5 text-[#E8F1F2]">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium"><Code2 size={16} className="text-[#B3EFB2]" /> Production</div>
                  <span className="rounded-full bg-[#B3EFB2]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#B3EFB2]">Live</span>
                </div>
                <p className="text-xs text-[#7A9E7E]">Release velocity</p>
                <div className="mt-2 flex items-end justify-between">
                  <p className="text-4xl font-semibold tracking-tight text-white">2.4x</p>
                  <div className="flex h-14 items-end gap-1.5">
                    {[28, 38, 32, 50, 44, 62, 72].map((height, index) => (
                      <span key={index} className="w-3 rounded-sm bg-[#B3EFB2]" style={{ height, opacity: 0.35 + index * 0.09 }} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[var(--theme-border)] p-4">
                  <Layers3 size={18} className="mb-5 text-[var(--brand-primary)]" />
                  <p className="text-2xl font-semibold text-[var(--theme-text-primary)]">99.9%</p>
                  <p className="mt-1 text-xs text-[var(--theme-text-tertiary)]">Platform uptime</p>
                </div>
                <div className="rounded-xl border border-[var(--theme-border)] p-4">
                  <ShieldCheck size={18} className="mb-5 text-[var(--brand-primary)]" />
                  <p className="text-2xl font-semibold text-[var(--theme-text-primary)]">A+</p>
                  <p className="mt-1 text-xs text-[var(--theme-text-tertiary)]">Security rating</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 -z-10 h-full w-full rounded-2xl border border-[var(--brand-primary)]/20" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
