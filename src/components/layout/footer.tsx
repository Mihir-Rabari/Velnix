"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

const footerLinks = {
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  services: {
    title: "Services",
    links: [
      { name: "Custom Software", href: "/services#custom-software" },
      { name: "Web Development", href: "/services#web-development" },
      { name: "Mobile Apps", href: "/services#mobile-development" },
      { name: "AI & ML", href: "/services#ai-ml" },
      { name: "Cloud Solutions", href: "/services#cloud" },
      { name: "UIUX Design", href: "/services#design" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { name: "Enterprise", href: "/solutions#enterprise" },
      { name: "Startups", href: "/solutions#startups" },
      { name: "SaaS", href: "/solutions#saas" },
      { name: "Healthcare", href: "/industries#healthcare" },
      { name: "Finance", href: "/industries#finance" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Case Studies", href: "/case-studies" },
      { name: "Technologies", href: "/technologies" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Get Quote", href: "/get-quote" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/thevelnix", icon: Globe },
  { name: "Twitter", href: "https://twitter.com/thevelnix", icon: MessageCircle },
  { name: "Website", href: "https://thevelnix.com", icon: ExternalLink },
  { name: "Email", href: "mailto:hello@thevelnix.com", icon: Mail },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Footer() {
  return (
    <footer
      className="relative"
      style={{
        borderTop: `1px solid var(--theme-border)`,
      }}
    >
      {/* CTA Band */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "var(--gradient-brand)",
          padding: "var(--section-py-md) var(--section-px)",
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />
        <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ letterSpacing: "-0.025em" }}>
              Have a project in mind?
            </h2>
            <p className="text-white/70 text-lg max-w-xl">
              Let&apos;s figure out the right approach together. No pressure, no jargon.
            </p>
          </div>
          <Link
            href="/get-quote"
            className="flex items-center gap-3 bg-white text-[var(--brand-primary)] font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-2xl whitespace-nowrap"
            style={{
              fontSize: "var(--primary-button-font-size)",
              borderRadius: "var(--radius-xl)",
            }}
          >
            Start a Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div
        style={{
          background: "var(--theme-bg)",
          padding: `var(--footer-padding-y) var(--footer-padding-x)`,
        }}
      >
        <motion.div
          className="container-custom"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="col-span-2 md:col-span-3 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "var(--gradient-brand)",
                  }}
                >
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span
                  className="font-bold"
                  style={{
                    fontSize: "1.125rem",
                    color: "var(--theme-text-primary)",
                  }}
                >
                  The Velnix
                </span>
              </Link>
              <p
                className="text-sm mb-6 max-w-xs"
                style={{ color: "var(--theme-text-tertiary)", lineHeight: "1.7" }}
              >
              Engineering software that works. We help teams
              build digital products they can be proud of.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-lg transition-all hover:-translate-y-0.5"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "var(--theme-surface-hover)",
                      color: "var(--theme-text-secondary)",
                      borderRadius: "var(--radius-md)",
                    }}
                    aria-label={`Visit us on ${social.name}`}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Link Columns */}
            {Object.values(footerLinks).map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h3
                  className="mb-4"
                  style={{
                    fontSize: "var(--footer-heading-font-size)",
                    fontWeight: "var(--footer-heading-font-weight)",
                    textTransform: "uppercase" as const,
                    letterSpacing: "var(--footer-heading-letter-spacing)",
                    color: "var(--theme-text-primary)",
                  }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors flex items-center gap-1 group"
                        style={{
                          color: "var(--theme-text-tertiary)",
                        }}
                      >
                        <span className="group-hover:text-[var(--brand-primary)] transition-colors">
                          {link.name}
                        </span>
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                          style={{ color: "var(--brand-primary)" }}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <div
            className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-12 pt-8"
            style={{ borderTop: `1px solid var(--theme-border-subtle)` }}
          >
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--theme-text-tertiary)" }}>
              <Mail size={16} style={{ color: "var(--brand-primary)" }} />
              <span>hello@thevelnix.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--theme-text-tertiary)" }}>
              <Phone size={16} style={{ color: "var(--brand-primary)" }} />
              <span>+1 (555) 000-0000</span>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--theme-text-tertiary)" }}>
              <MapPin size={16} style={{ color: "var(--brand-primary)" }} />
              <span>San Francisco, CA</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8"
            style={{
              borderTop: `1px solid var(--theme-border-subtle)`,
              paddingTop: "var(--footer-bottom-bar-padding)",
            }}
          >
            <p className="text-sm" style={{ color: "var(--theme-text-tertiary)" }}>
              © {new Date().getFullYear()} The Velnix. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm transition-colors hover:text-[var(--brand-primary)]"
                style={{ color: "var(--theme-text-tertiary)" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm transition-colors hover:text-[var(--brand-primary)]"
                style={{ color: "var(--theme-text-tertiary)" }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
