"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, ChevronDown, ArrowRight } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Custom Software Development", href: "/services#custom-software", description: "Tailored solutions for your business" },
      { name: "Web Development", href: "/services#web-development", description: "Modern, fast, responsive websites" },
      { name: "Mobile App Development", href: "/services#mobile-development", description: "iOS & Android applications" },
      { name: "AI & Machine Learning", href: "/services#ai-ml", description: "Intelligent automation solutions" },
      { name: "Cloud Solutions", href: "/services#cloud", description: "Scalable cloud infrastructure" },
      { name: "UIUX Design", href: "/services#design", description: "Beautiful, intuitive interfaces" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { resolvedTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[var(--navbar-z-index)] transition-all",
          isScrolled
            ? "border-b shadow-sm"
            : "border-b border-transparent"
        )}
        style={{
          height: "var(--navbar-height)",
          backdropFilter: isScrolled ? `blur(var(--navbar-backdrop-blur)) saturate(var(--navbar-backdrop-saturate))` : "none",
          WebkitBackdropFilter: isScrolled ? `blur(var(--navbar-backdrop-blur)) saturate(var(--navbar-backdrop-saturate))` : "none",
          backgroundColor: isScrolled
            ? resolvedTheme === "dark"
              ? "var(--navbar-bg-dark)"
              : "var(--navbar-bg-light)"
            : "transparent",
          borderColor: isScrolled
            ? resolvedTheme === "dark"
              ? "rgba(39, 39, 42, 0.5)"
              : "rgba(228, 228, 231, 0.5)"
            : "transparent",
          transition: "var(--navbar-transition)",
        }}
      >
        <nav
          className="mx-auto flex items-center justify-between h-full"
          style={{
            maxWidth: "var(--container-xl)",
            paddingLeft: "var(--navbar-padding-x)",
            paddingRight: "var(--navbar-padding-x)",
          }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 relative z-10" aria-label="The Velnix Home">
            <img
              src={resolvedTheme === "dark" ? "/logo-dark-theme.png" : "/logo-light-theme.png"}
              alt=""
              className="w-8 h-8 object-contain transition-all duration-300"
              style={{
                filter: resolvedTheme === "dark" 
                  ? "drop-shadow(0 0 8px rgba(179,239,178,0.2))" 
                  : "none"
              }}
            />
            <span
              className="font-bold tracking-tight"
              style={{
                fontSize: "var(--navbar-logo-font-size)",
                fontWeight: "var(--navbar-logo-font-weight)",
                color: "var(--theme-text-primary)",
              }}
            >
              The Velnix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center" style={{ gap: "var(--space-1)" }}>
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg transition-colors relative",
                      isActive
                        ? "text-[var(--brand-primary)]"
                        : "text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)]"
                    )}
                    style={{
                      fontSize: "var(--navbar-link-font-size)",
                      fontWeight: "var(--navbar-link-font-weight)",
                      transition: "var(--navbar-transition)",
                    }}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === item.name && "rotate-180"
                        )}
                      />
                    )}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                        style={{ background: "var(--gradient-brand)" }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-0 pt-2"
                        style={{ minWidth: "320px" }}
                      >
                        <div
                          className="rounded-xl overflow-hidden shadow-xl"
                          style={{
                            background: resolvedTheme === "dark" ? "var(--surface-dark)" : "var(--surface-light)",
                            border: resolvedTheme === "dark" ? "var(--default-card-border-dark)" : "var(--default-card-border-light)",
                            padding: "var(--space-2)",
                          }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex flex-col gap-0.5 px-4 py-3 rounded-lg transition-colors hover:bg-[var(--theme-surface-hover)]"
                            >
                              <span
                                className="text-sm font-medium"
                                style={{ color: "var(--theme-text-primary)" }}
                              >
                                {child.name}
                              </span>
                              <span
                                className="text-xs"
                                style={{ color: "var(--theme-text-tertiary)" }}
                              >
                                {child.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center" style={{ gap: "var(--space-3)" }}>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center rounded-lg transition-colors hover:bg-[var(--theme-surface-hover)]"
              style={{
                width: "40px",
                height: "40px",
                color: "var(--theme-text-secondary)",
              }}
              aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={resolvedTheme}
                  initial={{ y: -10, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* CTA Button */}
            <Link
              href="/get-quote"
              className="hidden md:flex items-center gap-2 text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--gradient-brand)",
                padding: "var(--space-2) var(--space-5)",
                borderRadius: "var(--primary-button-radius)",
                boxShadow: "var(--primary-button-shadow)",
                fontSize: "var(--primary-button-font-size)",
                fontWeight: "var(--primary-button-font-weight)",
              }}
            >
              Get Quote
              <ArrowRight size={16} />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex lg:hidden items-center justify-center rounded-lg transition-colors hover:bg-[var(--theme-surface-hover)]"
              style={{
                width: "40px",
                height: "40px",
                color: "var(--theme-text-primary)",
              }}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMobileOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[999] w-full max-w-sm lg:hidden overflow-y-auto"
              style={{
                background: "var(--theme-bg)",
                borderLeft: `1px solid var(--theme-border)`,
              }}
            >
              <div className="flex items-center justify-between" style={{ padding: "var(--space-5)", height: "var(--navbar-height)" }}>
                <div className="flex items-center gap-2.5">
                  <img
                    src={resolvedTheme === "dark" ? "/logo-dark-theme.png" : "/logo-light-theme.png"}
                    alt=""
                    className="w-7 h-7 object-contain"
                  />
                  <span
                    className="font-bold"
                    style={{
                      fontSize: "var(--navbar-logo-font-size)",
                      color: "var(--theme-text-primary)",
                    }}
                  >
                    The Velnix
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "var(--theme-text-primary)",
                  }}
                  aria-label="Close navigation menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div style={{ padding: "var(--space-3) var(--space-5)" }}>
                {navigation.map((item, i) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between py-3 px-3 rounded-lg text-lg font-medium transition-colors",
                          isActive
                            ? "text-[var(--brand-primary)] bg-[var(--brand-primary)]/5"
                            : "text-[var(--theme-text-primary)] hover:bg-[var(--theme-surface-hover)]"
                        )}
                      >
                        {item.name}
                        {isActive && (
                          <div className="w-2 h-2 rounded-full" style={{ background: "var(--brand-primary)" }} />
                        )}
                      </Link>
                      {item.children && (
                        <div className="pl-4 pb-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block py-2 px-3 text-sm rounded-lg transition-colors text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] hover:bg-[var(--theme-surface-hover)]"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}

                <div className="mt-6 pt-6" style={{ borderTop: `1px solid var(--theme-border)` }}>
                  <Link
                    href="/get-quote"
                    className="flex items-center justify-center gap-2 text-white font-semibold w-full py-3 rounded-xl"
                    style={{
                      background: "var(--gradient-brand)",
                      fontSize: "var(--primary-button-font-size)",
                    }}
                  >
                    Get a Quote
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
