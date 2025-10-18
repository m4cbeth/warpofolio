import React from 'react';
import { Globe, Users, TrendingUp, Shield } from 'lucide-react';

export default function ClosingSection() {
    return (
        <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    The Bigger Picture
                </h2>

                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-12 text-center">
                    Every advisor deserves their own content engine
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-blue-900 p-6 rounded-2xl border border-blue-200 dark:border-blue-700 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                The Content Reality
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {`SEO and content success = consistent, valuable publishing. Most advisors fail because it's too hard and risky to do consistently.`}
                            </p>
                            <div className="bg-blue-50 dark:bg-blue-800 p-4 rounded-lg">
                                <p className="text-sm text-blue-900 dark:text-blue-100 italic">
                                    {`"The advisors who succeeded weren't the ones with the fanciest websites. They were the ones who consistently showed up, published valuable insights, and built trust over time."`}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-blue-900 p-6 rounded-2xl border border-blue-200 dark:border-blue-700 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                                The Compliance Challenge
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Generic AI tools are dangerous for regulated professionals. One wrong claim could trigger a compliance review or worse.
                            </p>
                            <div className="bg-green-50 dark:bg-green-800 p-4 rounded-lg">
                                <p className="text-sm text-green-900 dark:text-green-100 italic">
                                    {`"Most AI content tools are generic and dangerous for regulated professionals. Ours is different—compliance-first from day one."`}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white dark:bg-blue-900 p-6 rounded-2xl border border-blue-200 dark:border-blue-700 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                The Market Opportunity
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                100,000+ financial advisors in North America, each paying $100,000+ annually in opportunity cost to create content themselves.
                            </p>
                            <div className="bg-purple-50 dark:bg-purple-800 p-4 rounded-lg">
                                <p className="text-sm text-purple-900 dark:text-purple-100 italic">
                                    {`"Most advisors are paying $100,000+ annually in opportunity cost when they could spend $6,000 and get better results."`}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-blue-900 p-6 rounded-2xl border border-blue-200 dark:border-blue-700 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                The Vision Impact
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                When every advisor can publish consistently and compliantly, the entire industry becomes more transparent and trusted.
                            </p>
                            <div className="bg-orange-50 dark:bg-orange-800 p-4 rounded-lg">
                                <p className="text-sm text-orange-900 dark:text-orange-100 italic">
                                    {`"Transform content creation from a burden into a competitive advantage for every advisor."`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl text-white max-w-4xl mx-auto mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        The Content Engine Philosophy
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/10 p-6 rounded-lg">
                            <h4 className="font-semibold mb-3 text-lg">Not Just AI Writing</h4>
                            <p className="text-blue-100">
                                {`It's a systematized process that takes YOUR expertise and amplifies it across platforms—consistently, compliantly, and in your voice.`}
                            </p>
                        </div>

                        <div className="bg-white/10 p-6 rounded-lg">
                            <h4 className="font-semibold mb-3 text-lg">Like Financial Planning</h4>
                            <p className="text-blue-100">
                                Just like you systematize financial planning for clients, we systematize content creation for advisors. The same approach, different domain.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100K+</div>
                        <p className="text-gray-600 dark:text-gray-400">Financial advisors who need this</p>
                    </div>

                    <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">$600M+</div>
                        <p className="text-gray-600 dark:text-gray-400">Total addressable market</p>
                    </div>

                    <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3</div>
                        <p className="text-gray-600 dark:text-gray-400">Beta clients proving it works</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-blue-900 p-8 rounded-2xl border border-blue-200 dark:border-blue-700 max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Ready to Build the Future?
                    </h3>

                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                        The problem is real. The solution is working. The market is massive. The time is now.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-blue-50 dark:bg-blue-800 rounded-lg">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">For Advisors</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Join the beta program and never face a blank content calendar again.
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold">
                                Apply for Beta Access
                            </div>
                        </div>

                        <div className="p-6 bg-green-50 dark:bg-green-800 rounded-lg">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">For Investors</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Partner with us to build the platform that transforms an entire industry.
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold">
                                Discuss Investment
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white text-center">
                    <h3 className="text-xl font-bold mb-4">
                        AdvisorContent AI
                    </h3>
                    <p className="text-blue-100">
                        Your Compliance-First Content Engine. Built by someone who understands your world.
                    </p>
                </div>
            </div>
        </section>
    );
}
