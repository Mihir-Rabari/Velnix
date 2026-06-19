"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  fullWidth?: boolean;
  loading?: boolean;
}

const sizeStyles: Record<string, { padding: string; fontSize: string; height: string }> = {
  sm: { padding: "var(--space-2) var(--space-4)", fontSize: "var(--text-sm)", height: "36px" },
  md: { padding: "var(--space-3) var(--space-6)", fontSize: "var(--primary-button-font-size)", height: "44px" },
  lg: { padding: "var(--space-4) var(--space-8)", fontSize: "var(--text-base)", height: "52px" },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      href,
      fullWidth = false,
      loading = false,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeStyle = sizeStyles[size];

    const getVariantStyles = (): React.CSSProperties => {
      switch (variant) {
        case "primary":
          return {
            background: "var(--gradient-brand)",
            color: "var(--primary-button-text)",
            boxShadow: "var(--primary-button-shadow)",
            fontWeight: Number("var(--primary-button-font-weight)") || 600,
            borderRadius: "var(--primary-button-radius)",
          };
        case "secondary":
          return {
            background: "var(--secondary-button-bg)",
            color: "var(--theme-text-primary)",
            border: `1.5px solid var(--theme-border)`,
            fontWeight: 600,
            borderRadius: "var(--secondary-button-radius)",
          };
        case "ghost":
          return {
            background: "var(--ghost-button-bg)",
            color: "var(--theme-text-secondary)",
            fontWeight: 500,
            borderRadius: "var(--ghost-button-radius)",
          };
        case "gradient":
          return {
            background: "var(--gradient-hero)",
            color: "#FFFFFF",
            fontWeight: 600,
            borderRadius: "var(--primary-button-radius)",
            boxShadow: "var(--shadow-glow-brand)",
          };
        default:
          return {};
      }
    };

    const buttonContent = (
      <>
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
      </>
    );

    const baseClassName = cn(
      "inline-flex items-center justify-center gap-2 font-medium transition-all cursor-pointer",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      fullWidth && "w-full",
      className
    );

    const style: React.CSSProperties = {
      ...getVariantStyles(),
      padding: sizeStyle.padding,
      fontSize: sizeStyle.fontSize,
      minHeight: sizeStyle.height,
      transition: "var(--primary-button-transition)",
    };

    if (href) {
      return (
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <Link href={href} className={baseClassName} style={style}>
            {buttonContent}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        whileHover={{ y: -2, boxShadow: variant === "primary" ? "var(--primary-button-hover-shadow)" : undefined }}
        whileTap={{ scale: 0.98 }}
        className={baseClassName}
        style={style}
        disabled={disabled || loading}
        {...props}
      >
        {buttonContent}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
