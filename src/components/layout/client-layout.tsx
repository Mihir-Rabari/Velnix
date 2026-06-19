"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { NoiseOverlay } from "@/components/ui/animated-background";
import { ScrollProgressBar } from "@/components/ui/scroll-progress-bar";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <ScrollProgressBar />
        <NoiseOverlay />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
