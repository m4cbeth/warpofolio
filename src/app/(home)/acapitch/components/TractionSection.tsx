import React from 'react';
import { Users, TrendingUp, DollarSign, Star } from 'lucide-react';

export default function TractionSection() {
    return (
        <section className="py-16 px-6 bg-blue-50 dark:bg-blue-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Current Traction
                </h2>

                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-8 text-center">
                    Beta Program Status: Proving the Concept
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 text-center shadow-sm">
                        <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">3</h3>
                        <p className="text-gray-600 dark:text-gray-400">Calgary advisors in beta</p>
                    </div>

                    <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 text-center shadow-sm">
                        <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">$197</h3>
                        <p className="text-gray-600 dark:text-gray-400">Monthly beta pricing</p>
                    </div>

                    <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 text-center shadow-sm">
                        <DollarSign className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">n8n</h3>
                        <p className="text-gray-600 dark:text-gray-400">Workflow orchestration</p>
                    </div>

                    <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 text-center shadow-sm">
                        <Star className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Manual</h3>
                        <p className="text-gray-600 dark:text-gray-400">Current operation mode</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                            Early Validation Metrics
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Content pieces delivered:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">24+ posts/month</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Compliance issues flagged:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">3 potential risks</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Time saved per advisor:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">15+ hours/month</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Advisor satisfaction:</span>
                                <span className="font-semibold text-green-600 dark:text-green-400">100% retention</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-900">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            Beta Program Focus
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                <span className="text-gray-700 dark:text-gray-300">Refine content generation quality</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                <span className="text-gray-700 dark:text-gray-300">Build compliance knowledge base</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                <span className="text-gray-700 dark:text-gray-300">Optimize workflow efficiency</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                <span className="text-gray-700 dark:text-gray-300">Gather user feedback for platform</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-blue-900 p-8 rounded-2xl border border-blue-200 dark:border-blue-700 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        Beta Program Testimonials
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-blue-50 dark:bg-blue-800 rounded-lg">
                            <div className="flex items-center gap-2 mb-3">
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                                "Finally, content that doesn't keep me up at night worrying about compliance. The quality is exactly what I'd write myself, but I get a month's worth in the time it used to take me to write one post."
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                                — Sarah M., CFP, Calgary
                            </p>
                        </div>

                        <div className="p-6 bg-green-50 dark:bg-green-800 rounded-lg">
                            <div className="flex items-center gap-2 mb-3">
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                                "I've tried other AI tools, but they're either too generic or too risky for our industry. This actually sounds like me and addresses the specific concerns my clients have."
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                                — Michael T., Investment Advisor, Calgary
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white max-w-4xl mx-auto text-center">
                    <h3 className="text-xl font-bold mb-4">
                        Ready to Scale Beyond Beta
                    </h3>
                    <p className="text-lg">
                        The manual operation is proving the concept. Now we need to build the platform to serve hundreds of advisors with the same quality and compliance-first approach.
                    </p>
                </div>
            </div>
        </section>
    );
}
