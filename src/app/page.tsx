"use client";

import { StickyHeader } from "@/components/StickyHeader";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { problemPoints, services, caseStudies, testimonials } from "@/data/content-data";

export default function Page() {
  return (
    <div className="min-h-dvh bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <StickyHeader />
      <main>
        <Hero points={problemPoints} />
        <ServicesSection items={services} />
        <CaseStudiesSection items={caseStudies} />
        <Testimonials items={testimonials} />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
