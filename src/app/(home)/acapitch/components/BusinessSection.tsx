import React from 'react';
import { DollarSign, TrendingUp, Users, Target } from 'lucide-react';

export default function BusinessSection() {
    return (
        <section className="py-16 px-6 bg-blue-50 dark:bg-blue-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Business Model
                </h2>

                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-8 text-center">
                    From Service to SaaS: Scalable Revenue Streams
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white dark:bg-blue-900 p-8 rounded-2xl border border-blue-200 dark:border-blue-700 shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <DollarSign className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            Current Service Model
                        </h3>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-800 rounded-lg">
                                <span className="text-gray-700 dark:text-gray-300">Beta Program:</span>
                                <span className="font-bold text-blue-600 dark:text-blue-400">$197/month</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-800 rounded-lg">
                                <span className="text-gray-700 dark:text-gray-300">Early Adopter:</span>
                                <span className="font-bold text-blue-600 dark:text-blue-400">$397/month</span>
                            </div>
                        </div>

                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            <p className="mb-2"><strong>Current State:</strong> Manual operation via n8n workflows</p>
                            <p><strong>Target:</strong> 10-20 advisor clients</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-blue-900 p-8 rounded-2xl border border-blue-200 dark:border-blue-700 shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
                            Future SaaS Model
                        </h3>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-800 rounded-lg">
                                <span className="text-gray-700 dark:text-gray-300">Solo Advisor:</span>
                                <span className="font-bold text-green-600 dark:text-green-400">$497/month</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-800 rounded-lg">
                                <span className="text-gray-700 dark:text-gray-300">Team (3-5):</span>
                                <span className="font-bold text-green-600 dark:text-green-400">$997/month</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-800 rounded-lg">
                                <span className="text-gray-700 dark:text-gray-300">Enterprise RIA:</span>
                                <span className="font-bold text-green-600 dark:text-green-400">Custom pricing</span>
                            </div>
                        </div>

                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            <p className="mb-2"><strong>Platform State:</strong> Self-service with AI orchestration</p>
                            <p><strong>Target:</strong> 1,000+ advisor clients</p>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        Unit Economics & Path to Profitability
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                Customer Acquisition
                            </h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">CAC (target):</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">$500</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Channels:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">Referral, SEO</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Sales cycle:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">2-4 weeks</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                                Revenue Metrics
                            </h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">ARPU:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">$497/month</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">LTV:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">$29,820</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">LTV:CAC:</span>
                                    <span className="font-semibold text-green-600 dark:text-green-400">60:1</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                Growth Targets
                            </h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Year 1:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">100 advisors</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Year 2:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">500 advisors</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Year 3:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">1,000+ advisors</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl text-white max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        Revenue Projections
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/10 p-6 rounded-lg text-center">
                            <h4 className="text-lg font-semibold mb-2">Year 1</h4>
                            <div className="text-3xl font-bold mb-2">$596K</div>
                            <div className="text-blue-100 text-sm">100 advisors × $497/mo</div>
                        </div>

                        <div className="bg-white/10 p-6 rounded-lg text-center">
                            <h4 className="text-lg font-semibold mb-2">Year 2</h4>
                            <div className="text-3xl font-bold mb-2">$2.98M</div>
                            <div className="text-blue-100 text-sm">500 advisors × $497/mo</div>
                        </div>

                        <div className="bg-white/10 p-6 rounded-lg text-center">
                            <h4 className="text-lg font-semibold mb-2">Year 3</h4>
                            <div className="text-3xl font-bold mb-2">$5.96M+</div>
                            <div className="text-blue-100 text-sm">1,000+ advisors, tiered pricing</div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-white dark:bg-blue-900 rounded-2xl border border-blue-200 dark:border-blue-700 max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        Key Success Metrics
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white">Financial Metrics:</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Monthly Recurring Revenue (MRR):</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">$497K (Year 1)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Annual Recurring Revenue (ARR):</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">$5.96M (Year 1)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Gross Margin:</span>
                                    <span className="font-semibold text-green-600 dark:text-green-400">85%+</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white">Growth Metrics:</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Customer Churn Rate:</span>
                                    <span className="font-semibold text-green-600 dark:text-green-400">{`< 5% monthly`}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Net Revenue Retention:</span>
                                    <span className="font-semibold text-green-600 dark:text-green-400">110%+</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Payback Period:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">1 month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
