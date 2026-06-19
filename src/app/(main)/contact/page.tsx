"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="pt-24">
      {/* Intro */}
      <SectionWrapper background="primary" padding="xl">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "var(--feature-card-icon-bg)",
              border: "1px solid var(--border-accent)",
              borderRadius: "var(--radius-full)",
            }}
          >
            <span className="text-sm font-semibold" style={{ color: "var(--brand-primary)" }}>
              Contact Us
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            Let&apos;s build <span className="gradient-text">together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--theme-text-secondary)]"
          >
            Get in touch with our engineering leads today. Fill out our form or email us directly.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* Grid */}
      <SectionWrapper background="secondary" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" style={{ gap: "var(--grid-gap)" }}>
          {/* Info Details */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-bold mb-6 text-[var(--theme-text-primary)]">Contact Info</h2>
            <div className="space-y-4">
              <a
                href="mailto:hello@thevelnix.com"
                className="flex items-center gap-4 group py-4 border-b border-[var(--theme-border)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/15 flex items-center justify-center text-[var(--brand-primary)] transition-transform duration-300 group-hover:scale-110">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-[var(--theme-text-tertiary)]">Email Us</div>
                  <div className="text-sm font-semibold group-hover:text-[var(--brand-primary)] transition-colors">hello@thevelnix.com</div>
                </div>
              </a>

              <a
                href="tel:+15550000000"
                className="flex items-center gap-4 group py-4 border-b border-[var(--theme-border)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/15 flex items-center justify-center text-[var(--brand-primary)] transition-transform duration-300 group-hover:scale-110">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-[var(--theme-text-tertiary)]">Call Us</div>
                  <div className="text-sm font-semibold group-hover:text-[var(--brand-primary)] transition-colors">+1 (555) 000-0000</div>
                </div>
              </a>

              <div className="flex items-center gap-4 py-4 border-b border-[var(--theme-border)]">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-primary)]/10 border border-[var(--brand-primary)]/15 flex items-center justify-center text-[var(--brand-primary)]">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-[var(--theme-text-tertiary)]">Headquarters</div>
                  <div className="text-sm font-semibold">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="text-center py-12 border border-[var(--theme-border)] rounded-2xl bg-[var(--theme-surface)] p-8">
                <div className="w-16 h-16 bg-[var(--accent-emerald)]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--accent-emerald)]">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-[var(--theme-text-secondary)] mb-6 max-w-sm mx-auto">
                  Thank you for contacting us. One of our engineering leads will reach out to you within 24 hours.
                </p>
                <Button variant="secondary" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[var(--theme-text-secondary)]" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text-primary)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-[var(--theme-text-secondary)]" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text-primary)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-[var(--theme-text-secondary)]" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text-primary)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors resize-none"
                  />
                </div>

                <Button variant="primary" fullWidth type="submit">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
