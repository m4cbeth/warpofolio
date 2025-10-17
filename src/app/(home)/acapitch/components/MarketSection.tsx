import React from 'react';
import { Users, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';

export default function MarketSection() {
    return (
        <section className="py-16 px-6 bg-white dark:bg-blue-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Market Opportunity
                </h2>

                <p className="text-2xl md:text-3xl text-red-600 dark:text-red-400 font-semibold mb-8 text-center">
                    The Advisor Content Crisis
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                        <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">100K+</h3>
                        <p className="text-gray-600 dark:text-gray-400">Financial advisors in North America</p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg border border-green-200 dark:border-green-700 text-center">
                        <DollarSign className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">$400/hr</h3>
                        <p className="text-gray-600 dark:text-gray-400">Average advisor billing rate</p>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg border border-orange-200 dark:border-orange-700 text-center">
                        <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">$8-12K</h3>
                        <p className="text-gray-600 dark:text-gray-400">Monthly opportunity cost of content creation</p>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg border border-red-200 dark:border-red-700 text-center">
                        <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto mb-3" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">$5-50K+</h3>
                        <p className="text-gray-600 dark:text-gray-400">Potential compliance violation fines</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-900">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            Total Addressable Market (TAM)
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Financial advisors:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">100,000+</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Average monthly spend:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">$500</span>
                            </div>
                            <div className="border-t border-blue-200 dark:border-blue-700 pt-3 flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">TAM:</span>
                                <span className="font-bold text-blue-600 dark:text-blue-400">$600M+ annually</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-2xl border border-green-200 dark:border-green-900">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                            Serviceable Addressable Market (SAM)
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Active on social media:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">60% (60K)</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Want better content:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">40% (24K)</span>
                            </div>
                            <div className="border-t border-green-200 dark:border-green-700 pt-3 flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">SAM:</span>
                                <span className="font-bold text-green-600 dark:text-green-400">$144M annually</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-900">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            Serviceable Obtainable Market (SOM)
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Target in 3 years:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">1,000 advisors</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Average revenue:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">$6K annually</span>
                            </div>
                            <div className="border-t border-purple-200 dark:border-purple-700 pt-3 flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">SOM:</span>
                                <span className="font-bold text-purple-600 dark:text-purple-400">$6M annually</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        The Content Creation Crisis by the Numbers
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Time Investment Reality:</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Blog post writing:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">2-3 hours</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Social media adaptation:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">1-2 hours</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Graphics creation:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">30 minutes</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Scheduling/posting:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">30 minutes</span>
                                </div>
                                <div className="border-t border-gray-300 dark:border-gray-600 pt-2 flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Total per topic:</span>
                                    <span className="font-bold text-red-600 dark:text-red-400">5-7 hours</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Opportunity Cost:</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Time spent monthly:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">20-30 hours</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Advisor hourly rate:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">$400</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Lost revenue opportunity:</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">$8,000-12,000</span>
                                </div>
                                <div className="border-t border-gray-300 dark:border-gray-600 pt-2 flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Annual cost:</span>
                                    <span className="font-bold text-red-600 dark:text-red-400">$96,000-144,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-blue-600 text-white rounded-2xl max-w-4xl mx-auto text-center">
                    <h3 className="text-xl font-bold mb-4">
                        The Market Reality
                    </h3>
                    <p className="text-lg">
                        Most advisors are paying $100,000+ annually in opportunity cost to create content themselves, when they could spend $6,000 annually and get better, more consistent results.
                    </p>
                </div>
            </div>
        </section>
    );
}
