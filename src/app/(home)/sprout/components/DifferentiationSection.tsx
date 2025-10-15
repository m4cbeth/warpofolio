import React from 'react';

export default function DifferentiationSection() {
    const comparisons = [
        {
            category: 'Traditional Time Trackers',
            problem: 'Sterile charts that make you feel bad about "wasted time"',
            solution: 'Sprout shows a beautiful garden that celebrates what you GREW'
        },
        {
            category: 'Habit Apps',
            problem: 'Binary checkboxes that don\'t show depth of investment',
            solution: 'Sprout quantifies how much you invested—watch your Guitar Plot grow from seedling to tree'
        },
        {
            category: 'Productivity Apps',
            problem: 'Endless task lists that overwhelm and stress you out',
            solution: 'Sprout creates peace—you have Seeds to plant thoughtfully, not tasks to frantically complete'
        }
    ];

    return (
        <section className="py-16 px-6 bg-green-50 dark:bg-green-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {`Why Sprout Wins`}
                </h2>
                <p className="text-xl md:text-2xl text-green-600 dark:text-green-400 font-semibold mb-8 text-center">
                    {`Growth, not guilt. Gardens, not graphs.`}
                </p>

                <div className="space-y-6 max-w-5xl mx-auto">
                    {comparisons.map((comp, i) => (
                        <div key={i} className="bg-white dark:bg-green-800 p-6 rounded-lg border border-green-200 dark:border-green-700 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                {`${comp.category}`}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">
                                        Their Problem:
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        {`${comp.problem}`}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">
                                        Sprout Solution:
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        {`${comp.solution}`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
