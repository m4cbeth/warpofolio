import React from 'react';
import { Target } from 'lucide-react';

export default function AskSection() {
    const needs = [
        'Advisors or co-founders excited about consumer habit-forming apps',
        'Connections to folks from Duolingo, Headspace, Calm, or similar success stories',
        'Product designers with Lottie/animation expertise who can bring Sproutly to life',
        'Growth marketers who understand lifestyle app acquisition and retention'
    ];

    return (
        <section className="py-16 px-6 bg-green-50 dark:bg-green-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {`What We're Looking For`}
                </h2>
                <p className="text-2xl md:text-3xl text-green-600 dark:text-green-400 font-semibold mb-8 text-center">
                    {`Connections to make Sprout essential`}
                </p>

                <div className="space-y-4 mb-8 max-w-4xl mx-auto">
                    {needs.map((need, i) => (
                        <div key={i} className="flex items-start gap-4 bg-white dark:bg-green-800 p-6 rounded-lg border border-green-200 dark:border-green-700 shadow-sm">
                            <Target className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                            <p className="text-lg text-gray-800 dark:text-gray-200">
                                {`${need}`}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-green-600 dark:bg-green-700 text-white p-6 rounded-lg max-w-4xl mx-auto">
                    <p className="text-xl font-bold text-center">
                        {`We have the working product. We need the team to help millions grow better lives.`}
                    </p>
                </div>
            </div>
        </section>
    );
}
