import { ReactNode } from "react";

// --------------------------WHOAMI------------------------------------------
export type Whoami = {
  himynameis: string;
  other: string;
}
export const whoamiBlurb: Whoami = {
  himynameis: "My name is Jaren Whitehouse, former Investment Associate, and life long web developer",
  other: "As a formerly CIRO registered Investment Associate, I understand how challenging it is to get prospects to notice and engage with your business. I help investment advisors and portfolio managers modernize their online presence — from professional, interactive websites to content and ad strategies — so your practice becomes visible, approachable, and growing",
}

// --------------------------PROBLEMS------------------------------------------
export type ProblemPoint = {
  question: string;
  blurb: string;
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

// --------------------------SERVICES------------------------------------------
export type ServiceItem = {
  title: string;
  desc: string;
  icon: ReactNode;
  href: string;
};
export const services: ServiceItem[] = [
  {
    title: "Quick Win Website Fixes",
    desc: "Get a modern, fast, interactive, mobile-friendly site, with analytics, where everything works seamlessly.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    href: "/services",
  },
  {
    title: "SEO & Visibility",
    desc: "Optimize your site for search and AI, improve your visibility in Calgary, and get your content seen by the right clients.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
      </svg>
    ),
    href: "/services",
  },
  {
    title: "Conversion Copywriting",
    desc: "Turn your site from a static brochure into a client funnel. Headlines, CTAs, and page flow all built to book meetings.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 5h16M7 9h10M7 13h10M7 17h7" strokeLinecap="round" />
      </svg>
    ),
    href: "/services",
  },
  {
    title: "Content Strategy",
    desc: "Position yourself as the trusted voice in your field by building authority through insightful content that converts readers into clients.",
    
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16l-6 8v6l-4-2v-4L4 4z" />
      </svg>
    ),
    href: "/services",
},
];

// --------------------------REASONS------------------------------------------
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
export type Reasons = {
  title: string;
  result: string;
  explain: string;
  image: string;
  imgalt: string;
};
export const reasons: Reasons[] = [
  { 
    title: "⚡ Lighting Fast Sites", 
    result: "→ Stronger First Impressions", 
    explain: "Outdated platforms slow you down. Modern builds not only cut page weight but also give visitors (and Google) the instant experience they expect.",
    image: "/lightning.jpg",
    imgalt: "Lightning bolt representing fast-loading websites",
  },
  { 
    title: "🤖 SEO and AI Catering", 
    result: "→ Become the Professional AIs suggest", 
    explain: "As search shifts to AI, the voices that win are the ones with authority. Long-form, useful content establishes you as the expert algorithms recommend first." ,
    image: "/brain-digital.jpg",
    imgalt: "Digital brain symbolizing SEO and AI-driven content strategy",

  },
  { 
    title: "🌱 Evergreen Content Systems", 
    result: "→ A steady drip that converts", 
    explain: "Consistent publishing builds trust and momentum. With the right structure, one idea becomes a pipeline of consults, requests, and inbound leads." ,
    image: "/plant.jpg",
    imgalt: "Sprouting plant illustrating consistent, long-term content growth",

  },
];

// --------------------------TESTIMONIALS------------------------------------------
export type Testimonial = {
  quote: string[];
  name: string;
  role?: string;
};
export const testimonials: Testimonial[] = [
  {
    quote:
      [
        "Working with Jaren was seamless.", 
        "Our site looks modern and we’re seeing more booked calls already."
      ],
    name: "M.T.",
    role: "Owner, Calgary-based Retail Company",
  },
  {
    quote:
      [
        "He found quick wins we missed.", 
        "The booking form and copy changes made a clear difference."        
      ],
    name: "R.L.",
    role: "Calgary-based Portofolio Manager, Major Canadian Investment Firm",
  },
  {
    quote:
      [
        "Practical SEO, not fluff.", 
        "Local visibility improved within weeks — highly recommend."
      ],
    name: "B.P",
    role: "President, Boutique Calgary-based Finance Firm",
  },
];

// ---------services page--------------
export type ServicesPage = {
    heading: string;
    sections: ServiceSection[];
}
export type ServiceSection = {
    h1: string;
    h2: string;
    body: string;
    img: string;
}
export const servicespage = {
    heading: "Services",
    sections: [],
}
const quickWinSection: ServiceSection = {
    h1: "Fix Major Issues First",
    h2: "No strategy survives a broken foundation",
    body: "Before we talk about scaling your reach or building a long-term growth plan, we fix the obvious roadblocks. For advisors, that usually means websites that are slow, outdated, or confusing to navigate. Think broken links, clunky mobile layouts, or compliance disclaimers buried where no one can find them. These are simple fixes—but until they’re addressed, no amount of marketing will matter. Quick wins build trust, momentum, and a platform you can actually grow from.",
    img: "",
}

const seoSection: ServiceSection = {
    h1: "Holistic <em>Internet</em> Optimization",
    h2: "SEO has always been a buzzword",
    body: "Search optimization has never been about tricking algorithms—it’s about proving relevance. For advisors, that means publishing content investors actually search for, and making sure your site’s structure and metadata don’t get in the way. Do both, and you get more than rankings. You get discovery. You become the answer when clients are asking the hard questions.",
    img: "",
}


const copywritingSection: ServiceSection = {
    h1: "Convinced Yet?",
    h2: "The right words turn prospects into clients",
    body: "Advisors are in the trust business. Prospects don’t judge you by your portfolio—they judge you by how clearly you explain it. That’s copywriting. Most advisor websites read like compliance documents: safe, vague, and instantly forgettable. We flip that script. By pairing sharp, compliant messaging with design, your site becomes persuasive, not just pretty. It’s the difference between someone closing the tab and someone booking a call.",
    img: "",
}

const contentSection: ServiceSection = {
    h1: "Content Is Your Compounding Interest",
    h2: "The authority you build online compounds, just like capital",
    body: "When advisors consistently publish valuable insights, they stop chasing prospects and start attracting them. Every article, explainer, or market update builds authority. Over time, the search engines notice—and so do investors. The result is a self-reinforcing loop: your content ranks, your credibility grows, and new opportunities come to you. In the noise of financial advice online, content is how you rise above and stay there.",
    img: "",
}