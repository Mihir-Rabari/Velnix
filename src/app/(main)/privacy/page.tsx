"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <SectionWrapper background="primary" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-[var(--theme-text-tertiary)]"
          >
            Last updated: June 17, 2026
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Content */}
      <SectionWrapper background="secondary" padding="lg">
        <div className="max-w-3xl mx-auto">
          <Card>
            <div className="space-y-6 text-sm text-[var(--theme-text-secondary)] leading-relaxed">
              <h2 className="text-xl font-bold text-[var(--theme-text-primary)]">1. Introduction</h2>
              <p>
                At The Velnix, we prioritize the confidentiality of our visitors and customers. This Privacy Policy details how we collect, store, share, and protect your personal identification records when you browse our platform.
              </p>

              <h2 className="text-xl font-bold text-[var(--theme-text-primary)]">2. Information We Collect</h2>
              <p>
                We collect personal identifiers such as names, work emails, and company information when you fill out contact forms or project estimation requests. We also collect automated logging metrics such as IP addresses, browser agents, and duration tags.
              </p>

              <h2 className="text-xl font-bold text-[var(--theme-text-primary)]">3. How We Use Information</h2>
              <p>
                We use collected information to communicate scope designs, resolve platform errors, configure personalized metrics, and comply with security compliance standards.
              </p>

              <h2 className="text-xl font-bold text-[var(--theme-text-primary)]">4. Data Security</h2>
              <p>
                We deploy industry-standard TLS encryption, strict database access control scripts, and security scanning to guard against unauthorized access, leakage, or loss.
              </p>
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </div>
  );
}
