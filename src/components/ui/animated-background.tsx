"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Subtle dot grid — much lighter than line grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(var(--theme-text-primary) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Single warm brand glow — top right */}
      <motion.div
        className="absolute"
        style={{
          width: "800px",
          height: "800px",
          top: "-300px",
          right: "-200px",
          background: "radial-gradient(circle, rgba(179, 239, 178, 0.07) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary subtle glow — bottom left */}
      <motion.div
        className="absolute"
        style={{
          width: "600px",
          height: "600px",
          bottom: "-200px",
          left: "-150px",
          background: "radial-gradient(circle, rgba(49, 73, 60, 0.06) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -15, 10, 0],
          y: [0, 10, -15, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

/* ========================================================
   Noise Texture Overlay
   ======================================================== */
export function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.012]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
      aria-hidden="true"
    />
  );
}
