import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ProcessSection } from "@/components/sections/process";
import { TechStackSection } from "@/components/sections/tech-stack";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { BlogPreviewSection } from "@/components/sections/blog-preview";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <ProcessSection />
      <TechStackSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogPreviewSection />
      <ContactSection />
    </>
  );
}
