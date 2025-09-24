"use client";

import { StickyHeader } from "@/components/StickyHeader";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ReasonsSection } from "@/components/ProvenSection";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhoAMI } from "@/components/WhoAmI";
import { problemPoints, services, reasons, testimonials, whoamiBlurb } from "@/data/content-data";


export default function Page() {
  return (    
    <main>
      <Hero points={problemPoints} />
      <WhoAMI whoamiBlurb={whoamiBlurb} />
      <ReasonsSection items={reasons} />
      <ServicesSection items={services} />
      <Testimonials items={testimonials} />
      <CtaBanner />
      <ContactSection />
    </main>      
  );
}
