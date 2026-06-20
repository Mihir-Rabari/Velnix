"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";

const faqs = [
  {
    question: "How is The Velnix different from a typical software agency?",
    answer:
      "Traditional agencies rely on project managers, account executives, and slides. At The Velnix, you work directly with senior engineers and designers. We do not inflate scopes. We write code, push to GitHub, and deploy weekly.",
  },
  {
    question: "Who will build my product?",
    answer:
      "Your product will be built directly by our core team of specialists: Mihir Rabari (Systems & Infrastructure), Khushi Patel & Aangi Shah (UI/UX & Product Design), Karan Mistry (AI & RAG Systems), Jignesh Prajapati (Mobile Applications), and Khushi Trivedi (Operations & Growth).",
  },
  {
    question: "What is your development process like?",
    answer:
      "We work in agile, bi-weekly sprints. We provide you with access to our GitHub repository, Figma files, and a staging URL where you can test live changes. We communicate daily in a shared Slack channel.",
  },
  {
    question: "Do you help with database migration or scaling?",
    answer:
      "Yes. We design database schemas, configure multi-tenant isolation, optimize query performance, set up connection poolers, and build automated CI/CD pipelines to ensure seamless scaling.",
  },
];

function FAQItem({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={false}
      className="overflow-hidden"
      style={{
        borderBottom: "1px solid var(--theme-border)",
      }}
    >
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full text-left py-6 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span
          className="text-base font-semibold pr-4"
          style={{ color: "var(--theme-text-primary)" }}
        >
          {faq.question}
        </span>
        <div
          className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full transition-colors"
          style={{
            background: isOpen ? "var(--gradient-brand)" : "transparent",
            color: isOpen ? "white" : "var(--theme-text-tertiary)",
            border: isOpen ? "none" : "1px solid var(--theme-border)",
          }}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pb-6">
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--theme-text-secondary)", lineHeight: "1.7" }}
              >
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" background="secondary">
      <SectionHeader
        variant="default"
        title="Common questions"
        description="Can't find what you're looking for? Reach out — we're happy to chat."
      />

      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
          >
            <FAQItem
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
