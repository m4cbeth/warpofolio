import React from 'react';

export default function BusinessSection() {
    const principles = [
        'No predatory microtransactions. No pay-to-win. No dark patterns.',
        'Core tracking always free—we earn loyalty by providing genuine value',
        'Premium: Advanced insights, unlimited Plots, custom Sproutly personalities',
        'Long-term: Corporate wellness licensing ($50-100/employee/year)'
    ];

    return (
        <section className="py-16 px-6 bg-green-50 dark:bg-green-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {`Business Model`}
                </h2>
                <p className="text-xl md:text-2xl text-green-600 dark:text-green-400 font-semibold mb-6 text-center">
                    {`Genuine growth, not growth hacking`}
                </p>

                <div className="bg-white dark:bg-green-800 p-6 rounded-lg mb-8 border border-green-200 dark:border-green-700 shadow-sm max-w-4xl mx-auto">
                    <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center">
                        {`Subscription: $1-3/month for premium features`}
                    </p>
                </div>

                <div className="space-y-4 mb-8 max-w-4xl mx-auto">
                    {principles.map((principle, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 mt-3 flex-shrink-0" />
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                {`${principle}`}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-green-600 dark:bg-green-700 text-white p-6 rounded-lg max-w-4xl mx-auto">
                    <p className="text-xl font-bold text-center">
                        {`We succeed when users' lives genuinely improve. Integrity is our moat.`}
                    </p>
                </div>
            </div>
        </section>
    );
}
