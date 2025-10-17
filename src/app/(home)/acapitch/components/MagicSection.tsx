import React from 'react';
import { Zap, Bot, Shield, Target, Search } from 'lucide-react';

export default function MagicSection() {
    return (
        <section className="py-16 px-6 bg-blue-50 dark:bg-blue-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    The Magic
                </h2>

                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-8 text-center">
                    Why It Works: The Content Engine Philosophy
                </p>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        {`Not Just "AI Writing" - It's a Systematic Process`}
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Generic AI */}
                        <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-2xl border border-red-200 dark:border-red-900">
                            <h4 className="text-xl font-bold text-red-900 dark:text-red-300 mb-4 flex items-center gap-2">
                                <Bot className="w-6 h-6" />
                                Most AI Content:
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <span className="text-red-600 dark:text-red-400 mt-1">→</span>
                                    <p className="text-gray-700 dark:text-gray-300">One prompt: "Write a blog post about RRSPs"</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-red-600 dark:text-red-400 mt-1">→</span>
                                    <p className="text-gray-700 dark:text-gray-300">Produces: The same recycled advice everyone else has</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-red-600 dark:text-red-400 mt-1">→</span>
                                    <p className="text-gray-700 dark:text-gray-300">Sounds like: A robot trying to sound human</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-red-600 dark:text-red-400 mt-1">→</span>
                                    <p className="text-gray-700 dark:text-gray-300">Compliance: Dangerous for regulated professionals</p>
                                </div>
                            </div>
                        </div>

                        {/* AdvisorContent AI */}
                        <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-900">
                            <h4 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4 flex items-center gap-2">
                                <Zap className="w-6 h-6" />
                                AdvisorContent AI:
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                                    <p className="text-gray-700 dark:text-gray-300">Starts with YOUR specific insight (not a generic prompt)</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                                    <p className="text-gray-700 dark:text-gray-300">Runs through multiple specialized models</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                                    <p className="text-gray-700 dark:text-gray-300">Includes your voice, your examples, your perspective</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                                    <p className="text-gray-700 dark:text-gray-300">Pre-screened for compliance issues</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        Multiple Specialized AI Models Working Together
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm text-center">
                            <Search className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research Brain</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Analyzes trending questions, finds content gaps, identifies SEO opportunities
                            </p>
                        </div>

                        <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm text-center">
                            <Bot className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Writer Brain</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Converts your insights into clear, engaging prose optimized for readability
                            </p>
                        </div>

                        <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm text-center">
                            <Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-3" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Copywriter Brain</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Crafts headlines, hooks, and platform-specific variations
                            </p>
                        </div>

                        <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm text-center">
                            <Shield className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Compliance Brain</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Flags potential regulatory issues and suggests safer alternatives
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl text-white max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4 text-center">
                        n8n Workflow Orchestration Ensures Quality at Scale
                    </h3>
                    <p className="text-lg mb-6 text-center">
                        {`Think of it like this: Anyone can use TurboTax. But a good accountant isn't just data entry—they know which questions to ask, what to look for, and how to optimize.`}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">The Process:</h4>
                            <p className="text-blue-100">
                                Each specialized AI model has specific instructions and context, working together like a team of experts
                            </p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">The Result:</h4>
                            <p className="text-blue-100">
                                Your expertise amplified across platforms—consistently, compliantly, and in your voice
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-white dark:bg-blue-900 rounded-2xl border border-blue-200 dark:border-blue-700 max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        Your Insights Amplified, Not Replaced
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-center">
                        {`The AdvisorContent AI isn't just "AI writing." It's a systematized process that takes YOUR expertise and amplifies it across platforms—the same way you systematize financial planning for your clients.`}
                    </p>
                </div>
            </div>
        </section>
    );
}
