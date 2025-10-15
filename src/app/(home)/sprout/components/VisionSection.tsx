import React from 'react';

export default function VisionSection() {
    const roadmap = [
        {
            phase: 'Phase 1 (Next 6mo)',
            goals: [
                'Perfect the garden visualization—make Plots beautiful and satisfying to watch grow',
                'Build Sproutly\'s personality with Lottie animations',
                'Launch and acquire first 10K users through product-led growth'
            ]
        },
        {
            phase: 'Phase 2 (6-18mo)',
            goals: [
                'Community features: Share your garden, celebrate friends\' growth',
                'Smart insights: "Your most productive Seeds are planted in the morning"',
                'Scale to 100K users'
            ]
        },
        {
            phase: 'Phase 3 (18-36mo)',
            goals: [
                'B2B wellness platform for companies',
                'Educational partnerships (help students manage time)',
                'Become the consumer champion for the attention economy'
            ]
        }
    ];

    return (
        <section className="py-16 px-6 bg-white dark:bg-green-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {`The Vision`}
                </h2>
                <p className="text-xl md:text-2xl text-green-600 dark:text-green-400 font-semibold mb-8 text-center">
                    {`Become the OS for intentional living`}
                </p>

                <div className="space-y-8 max-w-5xl mx-auto">
                    {roadmap.map((phase, i) => (
                        <div key={i} className="relative pl-8 border-l-4 border-green-300 dark:border-green-700">
                            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-green-500" />
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                {`${phase.phase}`}
                            </h3>
                            <ul className="space-y-2">
                                {phase.goals.map((goal, j) => (
                                    <li key={j} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                                        <span className="text-green-500">→</span>
                                        {`${goal}`}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
