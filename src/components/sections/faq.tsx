"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A marketing site might take 4-6 weeks. A full SaaS product is usually 3-6 months. We'll give you a realistic timeline after our first conversation — no guessing.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "We offer fixed-price and time-and-materials engagements. Most projects fall between $25K–$250K depending on complexity. We're upfront about costs — you'll get a detailed estimate before we start.",
  },
  {
    question: "Do you handle maintenance after launch?",
    answer:
      "Yes. We offer ongoing support plans that include monitoring, bug fixes, performance tuning, and feature work. Most clients stay with us long after launch.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. We frequently embed engineers with existing teams. We adapt to your tools, your workflows, and your cadence — Scrum, Kanban, whatever works.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out through our contact form or email us directly. We'll set up a 30-minute call to understand your needs, then follow up with a proposal within a week. No commitment, no pressure.",
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
