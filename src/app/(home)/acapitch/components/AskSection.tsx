import React from 'react';
import { Target, DollarSign, Users, TrendingUp } from 'lucide-react';

export default function AskSection() {
    return (
        <section className="py-16 px-6 bg-white dark:bg-blue-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    The Ask
                </h2>

                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-8 text-center">
                    Two Paths Forward: Bootstrapped Growth or Strategic Investment
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-green-50 dark:bg-green-900 p-8 rounded-2xl border border-green-200 dark:border-green-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
                            Bootstrapped Path
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Current Status:</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600 dark:text-green-400">✓</span>
                                        <span className="text-gray-600 dark:text-gray-400">3 beta clients at $197/month</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600 dark:text-green-400">✓</span>
                                        <span className="text-gray-600 dark:text-gray-400">Proven concept and demand</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600 dark:text-green-400">✓</span>
                                        <span className="text-gray-600 dark:text-gray-400">Manual operation working</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Next 6 Months:</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-600 dark:text-green-400 mt-1">→</span>
                                        <span className="text-gray-600 dark:text-gray-400">Scale to 10-20 advisor clients</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-600 dark:text-green-400 mt-1">→</span>
                                        <span className="text-gray-600 dark:text-gray-400">Increase pricing to $397/month</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-600 dark:text-green-400 mt-1">→</span>
                                        <span className="text-gray-600 dark:text-gray-400">Gather testimonials and case studies</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-600 dark:text-green-400 mt-1">→</span>
                                        <span className="text-gray-600 dark:text-gray-400">Build advisor referral network</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-green-800 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Revenue Target:</h4>
                                <div className="text-2xl font-bold text-green-600 dark:text-green-400">$4K-8K MRR</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">$48K-96K annually</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900 p-8 rounded-2xl border border-blue-200 dark:border-blue-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <DollarSign className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            Strategic Investment Path
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Seed Round:</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="text-blue-600 dark:text-blue-400">→</span>
                                        <span className="text-gray-600 dark:text-gray-400">$500K-1M seed funding</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-blue-600 dark:text-blue-400">→</span>
                                        <span className="text-gray-600 dark:text-gray-400">Platform development acceleration</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-blue-600 dark:text-blue-400">→</span>
                                        <span className="text-gray-600 dark:text-gray-400">First engineering hire</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Use of Funds:</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-start gap-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                                        <span className="text-gray-600 dark:text-gray-400">Platform development (60%)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                                        <span className="text-gray-600 dark:text-gray-400">Team expansion (30%)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                                        <span className="text-gray-600 dark:text-gray-400">Marketing & customer acquisition (10%)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-blue-800 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">18-Month Target:</h4>
                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100+ advisors</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">$50K+ MRR</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        Milestones to Hit (Either Path)
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                            <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">100 Advisors</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Prove product-market fit</p>
                        </div>

                        <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                            <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">$50K MRR</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Sustainable revenue base</p>
                        </div>

                        <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                            <Target className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Platform Launch</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Self-service capability</p>
                        </div>

                        <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                            <DollarSign className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Break-even</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Unit economics positive</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl text-white max-w-4xl mx-auto mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        {`What We're Looking For`}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold mb-3">If Seeking Investment:</h4>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Investors with fintech or B2B SaaS experience</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Understanding of regulatory compliance challenges</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Network connections in financial services</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Long-term vision alignment</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold mb-3">If Bootstrapping:</h4>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Advisor referrals and testimonials</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Feedback for platform development</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Case studies and success stories</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Partnership opportunities with RIAs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-white dark:bg-blue-900 rounded-2xl border border-blue-200 dark:border-blue-700 max-w-4xl mx-auto text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        The Bottom Line
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Whether we bootstrap to profitability or raise capital to accelerate growth, the goal is the same: build the platform that every financial advisor needs to compete in the digital age. The market is there, the problem is real, and the solution is working.
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">
                        <Target className="w-5 h-5" />
                        Ready to build the future of advisor content
                    </div>
                </div>
            </div>
        </section>
    );
}
