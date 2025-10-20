

"use client";

import { m } from "framer-motion";
import { fadeUp, sectionTransition } from "@/lib/animations";
import ContactModal from "@/components/ContactModal";

type PricingTier = {
    name: string;
    price: string;
    quarterlyPrice: string;
    description: string;
    features: string[];
    excludedFeatures: string[];
    websiteDescription: string;
    ctaText: string;
    isPopular?: boolean;
    isPopularText?: string;
};

const pricingTiers: PricingTier[] = [
    {
        name: "Foundational Presence",
        price: "$597",
        quarterlyPrice: "$480",
        description: "For newer advisors or those new to digital marketing",
        features: [
            "1 flagship LinkedIn article per month",
            "8-12 supporting social posts",
            "Basic content scheduling & publishing",
            "Monthly performance report",
            "All content compliant & on-brand",
            "SEO optimization for Calgary-focused terms",
        ],
        excludedFeatures: [
            "Advanced strategy calls",
            "Booking functionality",
            "Interactive client tools",
            "Email newsletter integration",
            "Monthly performance report",
            "All content compliant & on-brand",
            "SEO optimization for Calgary-focused terms",
        ],
        websiteDescription: "Basic modern site with contact forms (if migration desired)",
        ctaText: "Get Started",
        isPopular: true,
        isPopularText: "Start Slow"
    },
    {
        name: "Authority Builder",
        price: "$1,297",
        quarterlyPrice: "$1040",
        description: "For ambitious advisors wanting to become thought leaders",
        features: [
            "1 flagship article per month",
            "10-15 supporting social posts",
            "Monthly strategy call",
            "Enhanced content strategy & planning",
            "Enhanced reporting & insights",
            "Monthly performance report",
            "All content compliant & on-brand",
            "SEO optimization for Calgary-focused terms",
        ],
        excludedFeatures: [
            "Email newsletter campaigns",
            "Bi-weekly strategy sessions",
            "Interactive client tools",
            "Email newsletter campaigns",
            "Dedicated priority support",
        ],
        websiteDescription: "Enhanced site with chat, forms, booking functionality",
        ctaText: "Get Started",
        isPopular: true,
        isPopularText: "Most Popular"
    },
    {
        name: "Market Dominance",
        price: "$2,997",
        quarterlyPrice: "$2499",
        description: "For established teams wanting to dominate their market",
        features: [
            "$300 Google Ads credit per month",
            "2 flagship articles per month",
            "20-30 supporting social posts",
            "Quarterly email newsletter campaigns",
            "Bi-weekly strategic planning calls",
            "Interactive articles & magnets",
            "Monthly performance report",
            "All content compliant & on-brand",
            "SEO optimization for Calgary-focused terms",
            "Priority dedicated support",
        ],
        excludedFeatures: [],
        websiteDescription: "Full-featured site with interactive client tools",
        ctaText: "Contact Us",
        isPopular: true,
        isPopularText: "Scale Up"
    }
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Header */}
                <m.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, margin: "-80px" }}
                    transition={sectionTransition}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl mb-4">
                        Choose Your Plan
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Select the perfect plan for your advisory practice and start building your digital presence today
                    </p>
                </m.div>

                {/* Website Offering Clarification */}
                <m.div
                    variants={fadeUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, margin: "-80px" }}
                    transition={{ ...sectionTransition, delay: 0.1 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm text-blue-700 dark:text-blue-300">
                        <span className="font-medium">
                            {/* ✨ Every tier includes total website integration OR a complete website rebuild if you want to migrate to our platform */}
                            ✨ Every tier includes a custom-built website. No templates. No Wordpress. No Squarespace. Built from scratch, blazing fast, ultra-secure, and 100% yours.
                        </span>
                    </div>
                </m.div>

                {/* Pricing Cards */}
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
                    {pricingTiers.map((tier, index) => (
                        <m.div
                            key={tier.name}
                            variants={fadeUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: false, margin: "-80px" }}
                            transition={{ ...sectionTransition, delay: 0.1 * index }}
                        >
                            <PricingCard tier={tier} />
                        </m.div>
                    ))}
                </div>
            </div>
        </main>
    );
}

function PricingCard({ tier }: { tier: PricingTier }) {
    return (
        <div className={`relative rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:shadow-lg glow-card ${tier.isPopularText === "Most Popular"
            ? 'border-fuchsia-500 bg-white dark:border-fuchsia-300 dark:bg-slate-900 border-2' 
            : tier.isPopularText === "Start Slow" ? 'border-violet-500 bg-white dark:border-violet-300 dark:bg-slate-900 border-2' : 'border-blue-500 bg-white dark:bg-slate-900 ring-2 ring-blue-500/20'
            }`}>
            {/* Popular Badge */}
            {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`inline-flex items-center rounded-full ${tier.isPopularText === "Most Popular" ? 'bg-fuchsia-600' : tier.isPopularText === "Start Slow" ? 'bg-violet-600' : 'bg-blue-600'} px-4 py-1 text-sm font-medium text-white`}>
                        {tier.isPopularText}
                    </span>
                </div>
            )}

            {/* Header */}
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {tier.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    {tier.description}
                </p>

                {/* Pricing */}
                <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-slate-900 dark:text-white">
                            {tier.price}
                        </span>
                        <span className="text-lg text-slate-600 dark:text-slate-300 ml-1">
                            /month
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="text-sm bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">
                            or {tier.quarterlyPrice}/month (billed quarterly)
                        </span>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
                {/* Included Features */}
                {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                            {feature}
                        </p>
                    </div>
                ))}

                {/* Website Description */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Website Included:
                            </p>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                {tier.websiteDescription}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Excluded Features */}
                {tier.excludedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-slate-300 dark:text-slate-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="ml-3 text-sm text-slate-400 dark:text-slate-500">
                            {feature}
                        </p>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
                <ContactModal />
            </div>
        </div>
    );
}