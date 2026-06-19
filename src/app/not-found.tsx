"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { NoiseOverlay } from "@/components/ui/animated-background";

export default function NotFound() {
  return (
    <ThemeProvider>
      <div
        className="min-screen flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden relative"
        style={{
          fontFamily: "var(--font-body)",
          background: "var(--theme-bg)",
          color: "var(--theme-text-primary)",
          minHeight: "100vh",
        }}
      >
        <NoiseOverlay />

        <div className="relative z-10 max-w-md">
          {/* Animated 404 text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-8xl font-black mb-4 tracking-tighter gradient-text"
          >
            404
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-2xl font-bold mb-3"
          >
            Page not found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm mb-8 leading-relaxed"
            style={{ color: "var(--theme-text-secondary)" }}
          >
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 font-semibold text-white transition-all hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
              style={{
                background: "var(--gradient-brand)",
                padding: "var(--space-3) var(--space-6)",
                borderRadius: "var(--radius-xl)",
                boxShadow: "var(--primary-button-shadow)",
                fontSize: "var(--primary-button-font-size)",
              }}
            >
              <Home size={16} /> Go to Homepage
            </Link>
          </motion.div>
        </div>
      </div>
    </ThemeProvider>
  );
}
