import Link from "next/link";




// Myth card data
const mythCards = [
    {
        title: "Use the right keywords",
        description: "Sprinkle magic words and watch the traffic roll in"
    },
    {
        title: "Optimize your meta tags",
        description: "Perfect descriptions will unlock Google's algorithm"
    },
    {
        title: "Submit to directories",
        description: "List yourself everywhere and wait for the backlinks"
    },
    {
        title: "Wait 6 months for it to \"take effect\"",
        description: "Like planting seeds, just be patient and Google will notice"
    }
];

// What Actually Works data
const actuallyWorksPoints = [
    {
        number: 1,
        title: "Publish Consistently",
        paragraphs: [
            "Google rewards sites that regularly add valuable content. One blog post in 2023 isn't a content strategy. Your site needs to signal that you're active, current, and engaged with your field.",
            "<strong>The reality:</strong> Most advisors post once, maybe twice, then forget about it. That's why they don't rank."
        ]
    },
    {
        number: 2,
        title: "Answer Real Questions",
        paragraphs: [
            "Your prospects are Googling specific questions at 11pm when they can't sleep. Be the answer they find."
        ],
        questions: [
            "\"Should I incorporate my business in Alberta?\"",
            "\"RRSP vs TFSA for high income earners\"",
            "\"How to minimize taxes on RRSP withdrawals\"",
            "\"Is a flat-fee advisor worth it?\""
        ],
        footer: "<strong>Not:</strong> \"Q3 2024 Market Update\" or \"Comprehensive Financial Planning\" — those aren't questions anyone asks."
    },
    {
        number: 3,
        title: "Build Genuine Authority",
        paragraphs: [
            "Backlinks from the Calgary Chamber of Commerce, local business profiles, guest posts on community sites. Not spammy directory submissions that Google ignores.",
            "Authority comes from being cited by real organizations, appearing on local business sites, and being mentioned in legitimate publications. It takes time and relationships—not money paid to link farms."
        ]
    },
    {
        number: 4,
        title: "Make It Fast and Mobile-Friendly",
        paragraphs: [
            "If your site takes 8 seconds to load on mobile, Google doesn't care how \"optimized\" your keywords are. You're invisible.",
            "Your prospects are Googling you at 10pm on their couch, not at a desktop at noon. If your site doesn't work on their phone, they're clicking back and finding someone else."
        ]
    },
    {
        number: 5,
        title: "Do It Across Platforms",
        paragraphs: [
            "Google sees your LinkedIn presence, your Google Business Profile, your mentions on other sites. It's not just your website.",
            "The advisors who rank aren't just optimizing their site. They're publishing on LinkedIn, maintaining an active Google Business Profile, getting cited in local media, and building visibility everywhere their prospects look."
        ]
    }
];

// Content Engine Features data
const contentEngineFeatures = [
    "A modern, fast website that works perfectly on mobile",
    "Copy that positions you clearly—not generic platitudes",
    "Consistent content creation that answers real questions",
    "Distribution across LinkedIn and other platforms",
    "Backlink building with legitimate local sources"
];

// Myth Card Component
function MythCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="flex items-start gap-4 p-6 rounded-xl bg-red-800 border-2 border-red-400 shadow-sm">
            <span className="text-2xl flex-shrink-0">❌</span>
            <div>
                <p className="font-semibold text-gray-900 dark:text-white text-lg">{title}</p>
                <p className="text-gray-600 dark:text-gray-100 mt-1">{description}</p>
            </div>
        </div>
    );
}

// What Actually Works Card Component
function ActuallyWorksCard({
    number,
    title,
    paragraphs,
    questions,
    footer
}: {
    number: number;
    title: string;
    paragraphs: string[];
    questions?: string[];
    footer?: string;
}) {
    return (
        <div className="flex items-start gap-6 bg-white  dark:bg-slate-300 p-6 rounded-xl border border-blue-200 dark:border-blue-900/50 shadow-sm">
            <div className="bg-indigo-700 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl font-bold text-white">{number}</span>
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-blue-800 mb-3">
                    {title}
                </h3>
                {paragraphs.map((paragraph, index) => (
                    <p
                        key={index}
                        className="text-gray-700 dark:text-gray-700 leading-relaxed mt-3 first:mt-0"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                ))}
                {questions && (
                    <div className="mt-4 space-y-2 pl-4 border-l-2 border-blue-300 dark:border-blue-700">
                        {questions.map((question, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                                <p className="text-gray-700 dark:text-gray-700">{question}</p>
                            </div>
                        ))}
                    </div>
                )}
                {footer && (
                    <p
                        className="text-gray-700 dark:text-gray-700 leading-relaxed mt-4"
                        dangerouslySetInnerHTML={{ __html: footer }}
                    />
                )}
            </div>
        </div>
    );
}

// Feature Card Component
function FeatureCard({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-4 bg-green-300/50 dark:bg-green-900/50 p-4 rounded-lg border-2 border-green-500">
            <span className="text-2xl text-green-400 flex-shrink-0">✓</span>
            <p className="text-gray-900 dark:text-gray-200 text-lg">{text}</p>
        </div>
    );
}

export default function SEOPage() {
    return (
        <div className="min-h-screen max-w-3xl mx-auto bg-white dark:bg-slate-950">
            {/* Hero Section */}
            <section className=" relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
                <div className="mx-auto max-w-4xl px-6 py-20 lg:py-28">
                    <h1 className="text-4xl text-center mt-10 font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                        Why Most Advisor Websites <br /> {`Don't Get Leads`}
                    </h1>
                    <p className="mt-6 text-center text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
                        {`You've been sold a myth about SEO.`} <br /> The truth is simpler—and harder—than you think.
                    </p>
                </div>
            </section>

            {/* The Myth Section */}
            <section className="mx-auto max-w-4xl px-6 ">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 mt-10">
                    {`What You've Been Told`}
                </h2>

                <div className="space-y-3 mb-16">
                    {mythCards.map((myth, index) => (
                        <MythCard key={index} title={myth.title} description={myth.description} />
                    ))}
                </div>

                <div className="mt-10  p-8 rounded-xl bg-gradient-to-br from-slate-400 to-gray-100 dark:from-slate-800 dark:to-slate-900 border-2 border-gray-200 dark:border-slate-700 shadow-md">
                    <p className="text-lg text-gray-700 dark:text-gray-100 italic leading-relaxed">
                        This is what most "SEO experts" will sell you. One-time optimization. Technical tweaks. And vague promises about "algorithmic ranking factors."
                    </p>
                    <p className="text-lg text-gray-900 dark:text-white mt-4 font-semibold">
                        {`It's about 5% of what actually works.`}
                    </p>
                </div>
            </section>

            {/* What Actually Works */}
            <section className=" border-y border-blue-200 dark:border-blue-900/30">
                <div className="mx-auto max-w-4xl px-6 py-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        What Actually Works
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-200 mb-12 leading-relaxed">
                        {`Modern SEO isn't about tricks. It's about being genuinely helpful at scale.`}
                    </p>

                    <div className="space-y-6">
                        {actuallyWorksPoints.map((point) => (
                            <ActuallyWorksCard
                                key={point.number}
                                number={point.number}
                                title={point.title}
                                paragraphs={point.paragraphs}
                                questions={point.questions}
                                footer={point.footer}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* The Truth Section */}
            <section className="mx-auto max-w-4xl px-6 py-16">
                <div className="p-8 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-200 dark:border-amber-800/50 shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {`Here's the Truth`}
                    </h2>
                    <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed mb-4">
                        {`SEO isn't complicated. It's just hard work.`}
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed">
                        {`Most advisors would rather pay someone to "optimize" their site once than commit to writing every week. That's why most advisors don't rank.`}
                    </p>
                </div>

                <div className="mt-12 space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        The Problem with One-Time SEO
                    </h3>

                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg">
                        {`Traditional web designers and SEO consultants will rebuild your site, sprinkle in some keywords, and call it done. You'll see a small bump in traffic, then nothing.`}
                    </p>

                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg">
                        {`Because Google doesn't reward static sites. It rewards sites that consistently publish valuable, relevant content. Sites that demonstrate expertise. Sites that keep showing up.`}
                    </p>

                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg font-semibold">
                        {`That's not a project. That's a system.`}
                    </p>
                </div>
            </section>

            {/* The Content Engine CTA */}
            <section className="bg-white dark:bg-black border-y border-slate-700 dark:border-slate-800">
                <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        You Need a Content Engine
                    </h2>

                    <p className="text-xl text-gray-800 dark:text-gray-300 leading-relaxed mb-10">
                        Not a one-time optimization. Not a checklist. A systematic approach to building authority online—the same way you built authority as an advisor.
                    </p>

                    <div className="space-y-4 mb-12">
                        {contentEngineFeatures.map((feature, index) => (
                            <FeatureCard key={index} text={feature} />
                        ))}
                    </div>

                    <div className="flex justify-center flex-col sm:flex-row gap-4">
                        <a
                            href="/content-engine"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-lg transition-all shadow-lg hover:shadow-xl"
                        >
                            Learn About the Content Engine
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg hover:shadow-xl"
                        >
                            Book a Call
                        </a>
                    </div>

                    <p className="text-lg text-center mt-20 text-gray-300 dark:text-gray-400">
                        We handle the work. You stay the financial advisor.
                    </p>
                </div>
            </section>

            {/* Final Why Section */}
            <section className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Why This Approach Works
                </h2>

                <div className="space-y-6 text-lg">
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                        {`I worked as an investment advisor. I saw how great advisors struggled to communicate their value online. I saw sites that said nothing, content that never got published, and marketing that felt sleazy.`}
                    </p>

                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                        {`The advisors who succeeded weren't the ones with the fanciest websites. They were the ones who consistently showed up, published valuable insights, and built trust over time.`}
                    </p>

                    <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-300 dark:border-green-700 shadow-md">
                        <span className="text-3xl flex-shrink-0">💡</span>
                        <p className="italic text-xl font-semibold text-gray-900 dark:text-green-100 leading-relaxed">
                            {`That's what SEO actually is: showing up consistently with valuable information until you become the obvious choice.`}
                        </p>
                    </div>

                    <p className="text-gray-900 dark:text-white leading-relaxed">
                        {`The difference is, you don't have to do it yourself. That's what we're here for.`}
                    </p>
                    <Link href="/content-engine" className="text-blue-600 hover:text-blue-700">
                        Learn More About the Content Engine
                    </Link>
                </div>
            </section>
        </div>
    );
}