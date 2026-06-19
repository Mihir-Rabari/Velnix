"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScrollRevealText } from "./scroll-reveal-text";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "primary" | "secondary" | "tertiary" | "gradient-dark" | "gradient-light";
  padding?: "sm" | "md" | "lg" | "xl";
  containerWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  animate?: boolean;
  overflowVisible?: boolean;
}

const bgMap: Record<string, string> = {
  primary: "var(--theme-bg)",
  secondary: "var(--theme-bg-secondary)",
  tertiary: "var(--theme-bg-tertiary)",
  "gradient-dark": "var(--gradient-dark-section)",
  "gradient-light": "var(--gradient-light-section)",
};

const paddingMap: Record<string, string> = {
  sm: "var(--section-py-sm)",
  md: "var(--section-py-md)",
  lg: "var(--section-py-lg)",
  xl: "var(--section-py-xl)",
};

const containerMap: Record<string, string> = {
  sm: "var(--container-sm)",
  md: "var(--container-md)",
  lg: "var(--container-lg)",
  xl: "var(--container-xl)",
  "2xl": "var(--container-2xl)",
  full: "100%",
};

export function SectionWrapper({
  children,
  className,
  id,
  background = "primary",
  padding = "lg",
  containerWidth = "xl",
  animate = true,
  overflowVisible = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = (
    <div
      className="mx-auto w-full"
      style={{
        maxWidth: containerMap[containerWidth],
        paddingLeft: "var(--section-px)",
        paddingRight: "var(--section-px)",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {children}
    </div>
  );

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative",
        overflowVisible ? "overflow-visible" : "overflow-hidden",
        className
      )}
      style={{
        background: bgMap[background],
        paddingTop: paddingMap[padding],
        paddingBottom: paddingMap[padding],
      }}
    >
      {animate ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          {content}
        </motion.div>
      ) : (
        content
      )}
    </section>
  );
}

/* Section Header — now with variants to break the template pattern */
interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "default" | "editorial" | "minimal";
  titleClassName?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  variant = "default",
  titleClassName,
}: SectionHeaderProps) {
  // Editorial variant: left-aligned, larger, serif accent, no pill badge
  if (variant === "editorial") {
    return (
      <div
        className="mb-16 flex flex-col w-full"
        style={{ maxWidth: "var(--container-md)" }}
      >
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium tracking-wide uppercase mb-4"
            style={{
              color: "var(--brand-primary)",
              letterSpacing: "0.08em",
            }}
          >
            {label}
          </motion.p>
        )}
        <h2
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 w-full",
            titleClassName
          )}
          style={{
            color: "var(--theme-text-primary)",
            letterSpacing: "-0.025em",
            lineHeight: "1.15",
          }}
        >
          <ScrollRevealText text={title} />
        </h2>
        {description && (
          <p
            className="text-lg w-full"
            style={{
              color: "var(--theme-text-secondary)",
              lineHeight: "1.7",
              maxWidth: "560px",
            }}
          >
            {description}
          </p>
        )}
      </div>
    );
  }

  // Minimal variant: just title, no badge, no description
  if (variant === "minimal") {
    return (
      <div
        className="mb-12 flex flex-col mx-auto w-full"
        style={{
          maxWidth: align === "center" ? "var(--container-md)" : "none",
          alignItems: align === "center" ? "center" : "flex-start",
          textAlign: align === "center" ? "center" : "left",
        }}
      >
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold tracking-tight w-full",
            titleClassName
          )}
          style={{
            color: "var(--theme-text-primary)",
            letterSpacing: "-0.02em",
            lineHeight: "1.2",
            textAlign: align === "center" ? "center" : "left",
          }}
        >
          <ScrollRevealText text={title} />
        </h2>
      </div>
    );
  }

  // Default variant
  return (
    <div
      className="mb-16 flex flex-col mx-auto w-full"
      style={{
        maxWidth: align === "center" ? "var(--container-md)" : "none",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align === "center" ? "center" : "left",
      }}
    >
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-wide uppercase mb-4"
          style={{
            color: "var(--brand-primary)",
            letterSpacing: "0.08em",
          }}
        >
          {label}
        </motion.p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 w-full",
          titleClassName
        )}
        style={{
          color: "var(--theme-text-primary)",
          letterSpacing: "-0.025em",
          lineHeight: "1.2",
          textAlign: align === "center" ? "center" : "left",
        }}
      >
        <ScrollRevealText text={title} />
      </h2>
      {description && (
        <p
          className="text-lg max-w-2xl w-full"
          style={{
            color: "var(--theme-text-secondary)",
            lineHeight: "1.7",
            textAlign: align === "center" ? "center" : "left",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
