"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const budgets = ["Under $20k", "$20k - $50k", "$50k - $100k", "$100k+"];
const timelines = ["Under 1 month", "1-3 months", "3-6 months", "6+ months"];
const services = ["Web Development", "Mobile Apps", "AI & ML Integration", "Custom Software", "Cloud Solutions", "UIUX Design"];

export default function GetQuotePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
    budget: "$20k - $50k",
    timeline: "1-3 months",
    selectedServices: [] as string[],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    setForm((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(srv)
        ? prev.selectedServices.filter((s) => s !== srv)
        : [...prev.selectedServices, srv],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.description) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <SectionWrapper background="primary" padding="sm">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "var(--feature-card-icon-bg)",
              border: "1px solid var(--border-accent)",
              borderRadius: "var(--radius-full)",
            }}
          >
            <Sparkles size={16} className="text-[var(--brand-primary)]" />
            <span className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>
              Get a Quote
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
          >
            Let&apos;s scope your <span className="gradient-text">project</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--theme-text-secondary)]"
          >
            Provide your details below to receive a comprehensive proposal and resource estimation within 3 business days.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Quote Form Wrapper */}
      <SectionWrapper background="secondary" padding="lg">
        <div className="max-w-4xl mx-auto">
          {isSubmitted ? (
            <div className="text-center py-16 border border-[var(--theme-border)] rounded-2xl bg-[var(--theme-surface)] p-8">
              <div className="w-16 h-16 bg-[var(--accent-emerald)]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--accent-emerald)]">
                <CheckCircle size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-3">Quote Request Received!</h3>
              <p className="text-[var(--theme-text-secondary)] mb-8 max-w-md mx-auto leading-relaxed">
                Thank you for submitting your project specs. Our product architects are already reviewing your details. We will email you with a scope draft shortly.
              </p>
              <Button variant="secondary" onClick={() => setIsSubmitted(false)}>
                Submit Another Scope
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text-primary)] focus:outline-none focus:border-[var(--brand-primary)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="email">
                    Work Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text-primary)] focus:outline-none focus:border-[var(--brand-primary)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text-primary)] focus:outline-none focus:border-[var(--brand-primary)]"
                  />
                </div>
              </div>

              {/* Services needed */}
              <div>
                <label className="block text-sm font-semibold mb-3">Project Categories Needed</label>
                <div className="flex flex-wrap gap-3">
                  {services.map((srv) => {
                    const isSelected = form.selectedServices.includes(srv);
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => toggleService(srv)}
                        className="px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer"
                        style={{
                          background: isSelected ? "var(--gradient-brand)" : "var(--theme-bg-secondary)",
                          borderColor: isSelected ? "transparent" : "var(--theme-border)",
                          color: isSelected ? "white" : "var(--theme-text-secondary)",
                        }}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget selection */}
              <div>
                <label className="block text-sm font-semibold mb-3">Estimated Project Budget</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setForm({ ...form, budget: b })}
                      className="px-4 py-3 text-xs font-semibold rounded-xl border transition-all cursor-pointer"
                      style={{
                        background: form.budget === b ? "var(--gradient-brand)" : "var(--theme-bg-secondary)",
                        borderColor: form.budget === b ? "transparent" : "var(--theme-border)",
                        color: form.budget === b ? "white" : "var(--theme-text-secondary)",
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline selection */}
              <div>
                <label className="block text-sm font-semibold mb-3">Expected Delivery Timeline</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {timelines.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm({ ...form, timeline: t })}
                      className="px-4 py-3 text-xs font-semibold rounded-xl border transition-all cursor-pointer"
                      style={{
                        background: form.timeline === t ? "var(--gradient-brand)" : "var(--theme-bg-secondary)",
                        borderColor: form.timeline === t ? "transparent" : "var(--theme-border)",
                        color: form.timeline === t ? "white" : "var(--theme-text-secondary)",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="description">
                  Tell us about the project requirements
                </label>
                <textarea
                  id="description"
                  rows={5}
                  required
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="We need to build a new telemetry dashboard with real-time analytics graphs..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text-primary)] focus:outline-none focus:border-[var(--brand-primary)] resize-none"
                />
              </div>

              <Button variant="primary" fullWidth type="submit">
                Request Scope Proposal <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
