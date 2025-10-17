import { BetaApplicationForm } from "@/components/BetaApplicationForm";

export default function AdvisorContentAIPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20"></div>
                <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-28">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-800 dark:text-blue-200 text-sm font-semibold mb-6">
                            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                            BETA PROGRAM • LIMITED TO 3 CALGARY ADVISORS
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl mb-6">
                            Never Struggle with{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Compliant Social Media Content
                            </span>{" "}
                            Again
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto">
                            You know you need to post on LinkedIn to attract clients, but between finding time, generating ideas, and worrying about compliance violations, it's easier to just not post.
                        </p>
                        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-8">
                            What if you could generate a month's worth of compliant content ideas in minutes?
                        </p>
                        <a
                            href="#beta-form"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Apply for Beta Access →
                        </a>
                    </div>
                </div>
            </section>

            {/* Built by Someone Who Understands */}
            <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">
                        Built by Someone Who Understands Your World
                    </h2>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-8 rounded-2xl border border-green-200 dark:border-green-900">
                        <div className="max-w-2xl mx-auto">
                            <p className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-4">
                                My name is <span className="text-blue-600 dark:text-blue-400">Jaren Whitehouse</span>. I'm a former Investment Associate who now builds tools for financial advisors. I've lived the compliance nightmare firsthand.
                            </p>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                Most AI content tools are generic and dangerous for regulated professionals. Ours is different.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
                <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6 text-center">
                        How It Works: Compliance-First Content Generation
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        {/* Step 1 */}
                        <div className="flex items-start gap-6 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                                <span className="text-xl font-bold text-white">1</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                                    Input Your Topic
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Give us a core concept like "fee vs commission" or "market volatility planning"
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-start gap-6 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                                <span className="text-xl font-bold text-white">2</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                                    AI Research & Ideation
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Our system generates 5-7 article angles around trending topics and client concerns
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex items-start gap-6 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center">
                                <span className="text-xl font-bold text-white">3</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                                    Compliance-Aware Drafting
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Every piece is pre-vetted for common regulatory pitfalls before you see it
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex items-start gap-6 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                                <span className="text-xl font-bold text-white">4</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                                    Multi-Platform Strategy
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Get a complete content calendar: long-form articles, social posts, and email snippets
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beta Program Details */}
            <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 text-amber-800 dark:text-amber-200 text-sm font-semibold mb-6">
                        <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
                        BETA PROGRAM: BE ONE OF OUR FIRST 3 CALGARY ADVISORS
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">
                        We're looking for 3 advisors to test this system for 60 days
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* What You Get */}
                    <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl border border-green-200 dark:border-green-900">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6 flex items-center gap-2">
                            <span className="text-green-600 dark:text-green-400">✓</span>
                            What You Get:
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                                <p className="text-gray-700 dark:text-gray-300"><strong>Monthly content pipeline</strong> (8-10 compliant posts)</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                                <p className="text-gray-700 dark:text-gray-300"><strong>Compliance pre-screening</strong> on every piece</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                                <p className="text-gray-700 dark:text-gray-300"><strong>Direct access</strong> for feedback and customization</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                                <p className="text-gray-700 dark:text-gray-300"><strong>All for $197/month</strong> (50% off future pricing)</p>
                            </div>
                        </div>
                    </div>

                    {/* What We Get */}
                    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl border border-blue-200 dark:border-blue-900">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6 flex items-center gap-2">
                            <span className="text-blue-600 dark:text-blue-400">📈</span>
                            What We Get:
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                <p className="text-gray-700 dark:text-gray-300">Your valuable feedback to improve the system</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                <p className="text-gray-700 dark:text-gray-300">Permission to use your results as case studies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beta Application Form */}
            <section id="beta-form" className="bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
                <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">
                            Ready to Never Face a Blank Content Calendar Again?
                        </h2>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900 dark:to-pink-900 text-red-800 dark:text-red-200 text-sm font-semibold mb-6">
                            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                            LIMITED TO 3 CALGARY ADVISORS
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Fill out the form below and I'll personally contact you within 24 hours to see if you're a good fit for our beta program.
                        </p>
                    </div>

                    <BetaApplicationForm />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-12 text-center">
                    FAQ
                </h2>

                <div className="space-y-8">
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3">
                            Q: Is this fully automated?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            A: Currently, it's a hands-on service. I run the AI systems personally and deliver the content to you. This ensures quality and allows for customization.
                        </p>
                    </div>

                    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3">
                            Q: How do you handle compliance?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            A: The AI is specifically trained to flag potential compliance issues, but final approval always remains with you and your compliance department. We provide notes on potential concerns.
                        </p>
                    </div>

                    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3">
                            Q: What if I need to customize the content?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            A: That's included! Part of the beta program is working directly with you to tailor the output to your voice and specialty.
                        </p>
                    </div>

                    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3">
                            Q: Why only 3 advisors?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            A: I want to provide exceptional service and gather detailed feedback. This limited rollout ensures I can focus on making the system perfect for you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gradient-to-br from-gray-900 to-blue-900 dark:from-black dark:to-gray-900 border-t border-gray-800">
                <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Be One of Our First 3 Calgary Advisors
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Don't let another month pass without consistent, compliant content that builds your authority and attracts ideal clients.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#beta-form"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-lg transition-colors shadow-lg"
                            >
                                Apply for Beta Access
                            </a>
                            <a
                                href="mailto:jaren@example.com"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors"
                            >
                                Email Questions
                            </a>
                        </div>
                        <p className="text-sm text-gray-400 mt-8">
                            Limited spots remaining. Application closes when we reach 3 advisors.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
