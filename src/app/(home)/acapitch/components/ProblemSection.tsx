import React from 'react';
import { AlertTriangle, Clock, ShieldAlert, Users } from 'lucide-react';

export default function ProblemSection() {
    return (
        <section className="py-16 px-6 bg-white dark:bg-blue-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    The Problem
                </h2>

                <p className="text-2xl md:text-3xl text-red-600 dark:text-red-400 font-semibold mb-8 text-center">
                    Financial advisors face a content paralysis paradox
                </p>

                <div className="space-y-6 mb-8 max-w-4xl mx-auto">
                    <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-900">
                        <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Need consistent online presence to attract clients
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Prospects are searching for answers at 11pm. Your competitors who show up consistently get found.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-900">
                        <ShieldAlert className="w-6 h-6 text-orange-600 dark:text-orange-400 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Every post risks compliance violations
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Generic AI tools are dangerous for regulated professionals. One wrong claim could trigger a review.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-900">
                        <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Takes 5-7 hours per topic to DIY properly
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Writing blog posts, adapting for LinkedIn/X/Instagram, creating graphics, scheduling posts.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-6 rounded-lg max-w-4xl mx-auto">
                    <p className="text-xl md:text-2xl font-bold text-red-900 dark:text-red-300 text-center">
                        Advisors who post consistently get 3x more inbound leads, but 80% post less than once a month
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Users className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                            The Opportunity Cost
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Time spent on content:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">20-30 hrs/month</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Advisor billing rate:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">$400/hr</span>
                            </div>
                            <div className="border-t border-gray-300 dark:border-gray-700 pt-3 flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Monthly opportunity cost:</span>
                                <span className="font-bold text-red-600 dark:text-red-400">$8,000-12,000</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <ShieldAlert className="w-6 h-6 text-red-600 dark:text-red-400" />
                            Compliance Risk
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Compliance violations:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">$5K-50K+ fines</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Reputation damage:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">Immeasurable</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Review triggers:</span>
                                <span className="font-semibold text-gray-900 dark:text-white">Any claim</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
