import React from 'react';
import { Bot, Shield, Zap, Target } from 'lucide-react';

export default function SolutionSection() {
    return (
        <section className="py-16 px-6 bg-blue-50 dark:bg-blue-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    The Solution
                </h2>

                <p className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6 text-center">
                    AdvisorContent AI: Compliance-aware content generation system
                </p>

                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 text-center max-w-4xl mx-auto">
                    Transform one conversation into a month of compliant, multi-platform content. Your expertise amplified, not replaced.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
                    <div className="bg-white dark:bg-blue-800 p-6 rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm">
                        <Bot className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Input Your Expertise
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            15-minute conversation → Get month of compliant content
                        </p>
                    </div>

                    <div className="bg-white dark:bg-blue-800 p-6 rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm">
                        <Shield className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Pre-Screened for Compliance
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Every piece vetted for regulatory pitfalls before delivery
                        </p>
                    </div>

                    <div className="bg-white dark:bg-blue-800 p-6 rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm">
                        <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Multi-Platform Ready
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            LinkedIn, blog, email, social - all formats optimized
                        </p>
                    </div>

                    <div className="bg-white dark:bg-blue-800 p-6 rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm">
                        <Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-3" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Maintains Your Voice
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Your perspective and expertise, not generic AI slop
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl text-white max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4 text-center">
                        The Content Engine Philosophy
                    </h3>
                    <p className="text-lg mb-6 text-center">
                        "SEO isn't complicated. It's just hard work. Most advisors would rather pay someone to 'optimize' their site once than commit to writing every week. That's why most advisors don't rank."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">The Reality:</h4>
                            <p className="text-blue-100">
                                SEO = showing up consistently with valuable information until you become the obvious choice
                            </p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">The Solution:</h4>
                            <p className="text-blue-100">
                                A systematic process that makes consistent publishing effortless and compliant
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-white dark:bg-blue-900 rounded-2xl border border-blue-200 dark:border-blue-700 max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        What You Get From One 15-Minute Conversation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">✓</span>
                                <span className="text-gray-700 dark:text-gray-300">2-3 long-form blog posts (SEO-optimized)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">✓</span>
                                <span className="text-gray-700 dark:text-gray-300">8-12 LinkedIn posts (multiple angles)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">✓</span>
                                <span className="text-gray-700 dark:text-gray-300">6-10 posts for X (Twitter)</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">✓</span>
                                <span className="text-gray-700 dark:text-gray-300">4-6 Instagram posts with graphics</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">✓</span>
                                <span className="text-gray-700 dark:text-gray-300">2-3 YouTube video scripts</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-600 dark:text-green-400">✓</span>
                                <span className="text-gray-700 dark:text-gray-300">4-6 newsletter segments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
