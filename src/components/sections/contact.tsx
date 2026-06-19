"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function ContactSection() {
  return (
    <SectionWrapper id="contact" background="secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-sm font-medium tracking-wide uppercase mb-5"
            style={{
              color: "var(--brand-primary)",
              letterSpacing: "0.08em",
            }}
          >
            Get in touch
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              color: "var(--theme-text-primary)",
              letterSpacing: "-0.025em",
              lineHeight: "1.1",
            }}
          >
            Got a project?{" "}
            <span className="font-display" style={{ fontWeight: 400 }}>
              Let&apos;s talk.
            </span>
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "var(--theme-text-secondary)", lineHeight: "1.7" }}
          >
            Whether you have a detailed brief or just the spark of an idea,
            we&apos;re happy to chat. No pitch decks required.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: <Mail size={18} />, text: "hello@thevelnix.com", href: "mailto:hello@thevelnix.com" },
              { icon: <Phone size={18} />, text: "+1 (555) 000-0000", href: "tel:+15550000000" },
              { icon: <MapPin size={18} />, text: "San Francisco, CA", href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-3 group"
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{
                    background: "var(--feature-card-icon-bg)",
                    color: "var(--brand-primary)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-base group-hover:text-[var(--brand-primary)] transition-colors"
                  style={{ color: "var(--theme-text-secondary)" }}
                >
                  {item.text}
                </span>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--gradient-brand)",
                padding: "var(--space-3) var(--space-6)",
                borderRadius: "var(--primary-button-radius)",
                boxShadow: "var(--primary-button-shadow)",
                fontSize: "var(--primary-button-font-size)",
              }}
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 font-semibold transition-all hover:-translate-y-0.5"
              style={{
                background: "transparent",
                color: "var(--theme-text-primary)",
                border: "1.5px solid var(--theme-border)",
                padding: "var(--space-3) var(--space-6)",
                borderRadius: "var(--secondary-button-radius)",
                fontSize: "var(--primary-button-font-size)",
              }}
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>

        {/* Right: Visual Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <div
            className="relative overflow-hidden"
            style={{
              background: "var(--gradient-brand)",
              borderRadius: "var(--radius-2xl)",
              padding: "var(--space-10)",
              minHeight: "400px",
            }}
          >
            {/* Decorative elements */}
            <div
              className="absolute top-0 right-0 w-64 h-64 opacity-20"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Free 30-minute call
              </h3>
              <p className="text-white/70 text-lg mb-8 max-w-md">
                We&apos;ll discuss your needs, suggest approaches, and give you an honest estimate. Zero commitment.
              </p>

              <div className="space-y-3.5">
                {[
                  "Understand your requirements",
                  "Get technical recommendations",
                  "Receive a ballpark estimate",
                  "Meet your potential lead engineer",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                      ✓
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/get-quote"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-white font-bold rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{
                  color: "var(--brand-secondary-dark)",
                  borderRadius: "var(--radius-xl)",
                }}
              >
                Book a Call <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
