"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/* ========================================================
   Default Card
   ======================================================== */

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = true, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn("group relative overflow-hidden", className)}
      style={{
        background: "var(--theme-surface)",
        border: `1px solid var(--theme-border)`,
        borderRadius: "var(--default-card-radius)",
        padding: "var(--default-card-padding)",
        boxShadow: "var(--shadow-sm)",
        transition: "var(--default-card-transition)",
        cursor: onClick ? "pointer" : undefined,
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

/* ========================================================
   Glass Card
   ======================================================== */

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        backdropFilter: `blur(var(--glass-card-backdrop-blur)) saturate(var(--glass-card-backdrop-saturate))`,
        WebkitBackdropFilter: `blur(var(--glass-card-backdrop-blur)) saturate(var(--glass-card-backdrop-saturate))`,
        borderRadius: "var(--glass-card-radius)",
        padding: "var(--glass-card-padding)",
        transition: "var(--glass-card-transition)",
      }}
    >
      {children}
    </div>
  );
}

/* ========================================================
   Feature Card with Hover Glow
   ======================================================== */

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const background = useMotionTemplate`radial-gradient(350px circle at ${smoothX}px ${smoothY}px, var(--brand-primary-glow), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn("group relative overflow-hidden", className)}
      style={{
        background: "var(--theme-surface)",
        border: `1px solid var(--theme-border)`,
        borderRadius: "var(--feature-card-radius)",
        padding: "var(--feature-card-padding)",
        transition: "var(--feature-card-transition)",
      }}
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ background, borderRadius: "inherit" }}
      />

      {/* Hover border effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          borderRadius: "inherit",
          border: `1px solid var(--feature-card-hover-border-color)`,
        }}
      />

      <div className="relative z-10">
        <div
          className="flex items-center justify-center mb-5"
          style={{
            width: "var(--feature-card-icon-size)",
            height: "var(--feature-card-icon-size)",
            background: "var(--feature-card-icon-bg)",
            borderRadius: "var(--feature-card-icon-radius)",
            color: "var(--brand-primary)",
          }}
        >
          {icon}
        </div>
        <h3
          className="text-lg font-semibold mb-2"
          style={{
            color: "var(--theme-text-primary)",
            fontWeight: "var(--weight-semibold)",
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--theme-text-secondary)" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ========================================================
   Tilt Card (3D hover effect)
   ======================================================== */

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
}

export function TiltCard({ children, className, tiltAmount = 10 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);
    rotateX.set(-percentY * tiltAmount);
    rotateY.set(percentX * tiltAmount);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
}
