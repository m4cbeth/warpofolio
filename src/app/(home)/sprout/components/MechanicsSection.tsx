import React from 'react';

export default function MechanicsSection() {
    const steps = [
        {
            title: 'Wake Up',
            desc: 'Set your wake/sleep schedule. Sproutly greets you: "Good morning! You have 96 Seeds today. What will you grow?"'
        },
        {
            title: 'Grow Your Plots',
            desc: 'Log activities. "I practiced guitar for 30 min" = 3 Seeds planted in your Guitar Plot'
        },
        {
            title: 'Watch It Flourish',
            desc: 'Your Plots level up and grow visually. Guitar Plot reaches Level 5—it becomes a small tree! 🌳'
        },
        {
            title: 'Celebrate Together',
            desc: 'Sproutly cheers your progress, gently nudges when you drift, and shows you your thriving garden'
        }
    ];

    return (
        <section className="py-16 px-6 bg-white dark:bg-green-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {`How It Works`}
                </h2>
                <p className="text-xl md:text-2xl text-green-600 dark:text-green-400 font-semibold mb-8 text-center">
                    {`From abstract time to visible growth`}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, i) => (
                        <div key={i} className="relative">
                            <div className="text-6xl font-bold text-green-100 dark:text-green-900 absolute -top-4 -left-2 z-0">
                                {i + 1}
                            </div>
                            <div className="relative bg-white dark:bg-green-800 p-6 rounded-lg shadow-md border-2 border-green-200 dark:border-green-700 z-10">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                    {`${step.title}`}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    {`${step.desc}`}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
