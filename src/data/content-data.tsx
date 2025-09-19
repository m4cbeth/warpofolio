import { ReactNode } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
};

export type CaseStudy = {
  title: string;
  result: string;
};

export type ServiceItem = {
  title: string;
  desc: string;
  icon: ReactNode;
};

export const placeholderLogos: string[] = [
  "YYC Finance Network",
  "Prairie Portfolio",
  "Mountain Wealth",
  "Stampede Advisory",
];

export const services: ServiceItem[] = [
  {
    title: "Quick Win Website Fixes",
    desc: "Homepage refresh, booking form install, analytics setup.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "SEO & Visibility",
    desc: "Keyword optimization, Local SEO for Calgary, Google My Business tune-up.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Conversion Copywriting",
    desc: "Sharper headlines, CTA rewrites, email tripwires.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 5h16M7 9h10M7 13h10M7 17h7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Funnel Add-ons",
    desc: "Lead magnets, review widgets, waitlist builders.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16l-6 8v6l-4-2v-4L4 4z" />
      </svg>
    ),
  },
];

export const caseStudies: CaseStudy[] = [
  { title: "Dentist site refresh", result: "→ 40% more bookings" },
  { title: "Law firm SEO", result: "→ Top 3 for “Calgary Family Lawyer”" },
  { title: "Advisor funnel add-ons", result: "→ 2.1x consult requests" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with JW was seamless. Our site looks modern and we’re seeing more booked calls already.",
    name: "Alex P.",
    role: "Principal, Wealth Advisory",
  },
  {
    quote:
      "He found quick wins we missed. The booking form and copy changes made a clear difference.",
    name: "Sandra L.",
    role: "Operations, Investment Firm",
  },
  {
    quote:
      "Practical SEO, not fluff. Local visibility improved within weeks — highly recommend.",
    name: "Mohammed R.",
    role: "Founder, Boutique Finance",
  },
];
