"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export default function TermsPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <SectionWrapper background="primary" padding="sm">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3"
          >
            Terms of Service
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
          <div className="space-y-6 text-sm text-[var(--theme-text-secondary)] leading-relaxed">
            <h2 className="text-xl font-bold text-[var(--theme-text-primary)]">1. Acceptance of Terms</h2>
            <p>
              By visiting, registering, or requesting project estimations on The Velnix platform, you represent that you accept and will follow these terms. If you do not accept these terms, you must discontinue using our services.
            </p>

            <h2 className="text-xl font-bold text-[var(--theme-text-primary)]">2. Scope of Service</h2>
            <p>
              The Velnix provides consulting, digital prototyping, custom engineering, and system design services. All deliverables are subject to individual written Master Service Agreements (MSA) and Statement of Work (SOW) documents.
            </p>

            <h2 className="text-xl font-bold text-[var(--theme-text-primary)]">3. IP Ownership</h2>
            <p>
              Unless explicitly detailed in a signed SOW, all pre-existing design components, development scripts, and custom libraries remain the intellectual property of The Velnix. Deliverable source codes transfer ownership upon final project milestone payment confirmation.
            </p>

            <h2 className="text-xl font-bold text-[var(--theme-text-primary)]">4. Liability Limits</h2>
            <p>
              In no case shall The Velnix be liable for any system downtime, business losses, or indirect, punitive, or consequential damages resulting from platform integration tasks or operational deployments.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
