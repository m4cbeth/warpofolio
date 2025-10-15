import React from 'react';

export default function MarketSection() {
    const segments = [
        {
            group: 'Primary: The Intentional Achiever',
            desc: 'Ages 25-45, feeling busy but not productive. Wants to learn guitar, build a side project, be more present with family. Seeks tools that work.',
            size: '50M+ in US alone'
        },
        {
            group: 'Secondary: Students & Lifelong Learners',
            desc: 'Juggling multiple pursuits, need to see their investment paying off to stay motivated.',
            size: '20M+ students in higher ed'
        },
        {
            group: 'Future: Corporate Wellness',
            desc: 'Companies desperate to reduce burnout and help employees find balance and meaningful productivity.',
            size: '$50B+ wellness market'
        }
    ];

    return (
        <section className="py-16 px-6 bg-white dark:bg-green-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {`The Market`}
                </h2>
                <p className="text-xl md:text-2xl text-green-600 dark:text-green-400 font-semibold mb-8 text-center">
                    {`The attention economy needs its Duolingo`}
                </p>

                <div className="space-y-6 mb-8 max-w-5xl mx-auto">
                    {segments.map((seg, i) => (
                        <div key={i} className="bg-green-50 dark:bg-green-800 p-6 rounded-lg border border-green-200 dark:border-green-700 shadow-sm">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                                    {`${seg.group}`}
                                </h3>
                                <span className="text-green-700 dark:text-green-400 font-bold">
                                    {seg.size}
                                </span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                {`${seg.desc}`}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-green-600 dark:bg-green-700 text-white p-6 rounded-lg max-w-4xl mx-auto">
                    <p className="text-xl font-bold text-center">
                        {`Sprout is the foundational habit for achieving any goal`}
                    </p>
                </div>
            </div>
        </section>
    );
}
