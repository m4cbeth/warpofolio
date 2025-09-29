"use client";

import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ReasonsSection } from "@/components/ReasonsSection";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { ContactSection } from "@/components/ContactSection";
import { WhoAMI } from "@/components/WhoAmI";
import {  services, reasons, testimonials, whoamiBlurb, universalProblemPoints } from "@/data/content-data";
import { motion } from 'framer-motion';


export default function Page() {
  return (    
    <motion.main>
      <Hero points={universalProblemPoints} />
      <WhoAMI whoamiBlurb={whoamiBlurb} />
      <ReasonsSection items={reasons} />
      <ServicesSection items={services} />
      <Testimonials items={testimonials} />
      <CtaBanner />
      <ContactSection />
    </motion.main>      
  );
}
