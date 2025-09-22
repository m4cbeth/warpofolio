import { ReactNode } from "react";

export type Testimonial = {
  quote: string[];
  name: string;
  role?: string;
};

export type Reasons = {
  title: string;
  result: string;
  explain: string;
};

export type ServiceItem = {
  title: string;
  desc: string;
  icon: ReactNode;
};

export type ProblemPoint = {
  question: string;
  blurb: string;
}

export type Whoami = {
  himynameis: string;
  other: string;
}

export const whoamiBlurb: Whoami = {
  himynameis: "My name is Jaren Whitehouse, former Investment Associate, and life long web developer",
  other: "Formerly registered with IIROC, I understand how challenging it is to get prospects to notice and engage with your business. I help investment advisors and portfolio managers modernize their online presence — from professional, interactive websites to content and ad strategies — so your practice becomes visible, approachable, and growing",
}

export const problemPoints: ProblemPoint[] = [
  { 
    question: "Load instantly, from any device?",
    blurb: "example",
  },
  { 
    question: "Have a low bounce rate?",
    blurb: "example",
  },
  { 
    question: "Get consistent traffic?",
    blurb: "example",
  },
  { 
    question: "Connect you with new prospects?",
    blurb: "example",
  },
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

export const reasonsNames = [
  "Opportunities",
  "Growth Paths",
  "Strategies in Action",
  "Potential Wins",
  "Sample Playbooks",
  "What’s Possible",
  "Quick Wins",
  "Vision in Practice",
  "Idea Sparks",
  "Future Scenarios",
  "Proven Approaches",
  "Strategic Angles",
  "Blueprints",
  "Pathways to Growth"
]

const extra = [
  "Faster Sites, Stronger Impressions",
]

export const reasons: Reasons[] = [
  { 
    title: "Lighting Fast Sites, Stronger Impressions", 
    result: "→ visitors stick, bounce drops", 
    explain: "Outdated platforms slow you down. Modern builds not only cut page weight but also give visitors (and Google) the instant experience they expect" 
  },
  { 
    title: "SEO and AI Catering", 
    result: "→ Become the Professional AIs suggest to prospects", 
    explain: "As search shifts to AI, the voices that win are the ones with authority. Long-form, useful content establishes you as the expert algorithms recommend first." 

  },
  { 
    title: "Evergreen Content Systems", 
    result: "→ A steady drip that converts", 
    explain: "Consistent publishing builds trust and momentum. With the right structure, one idea becomes a pipeline of consults, requests, and inbound leads" 

  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      ["Working with JW was seamless.", "Our site looks modern and we’re seeing more booked calls already."],
    name: "Alex P.",
    role: "Principal, Wealth Advisory",
  },
  {
    quote:
      ["He found quick wins we missed.", "The booking form and copy changes made a clear difference."],
    name: "Sandra L.",
    role: "Operations, Investment Firm",
  },
  {
    quote:
      ["Practical SEO, not fluff.", "Local visibility improved within weeks — highly recommend."],
    name: "Mohammed R.",
    role: "Founder, Boutique Finance",
  },
];
