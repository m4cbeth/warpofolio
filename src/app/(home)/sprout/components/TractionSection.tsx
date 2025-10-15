import React from 'react';
import { Zap } from 'lucide-react';

export default function TractionSection() {
    const achievements = [
        'Fully functional React Native/Expo app with core tracking',
        'Seed currency system (10min = 1 Seed) implemented and tested',
        'Plot creation and growth mechanics working',
        'Foundation proven—ready to build Sproutly\'s personality and garden visualization'
    ];

    return (
        <section className="py-16 px-6 bg-green-50 dark:bg-green-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {`What We Have Today`}
                </h2>
                <p className="text-2xl md:text-3xl text-green-600 dark:text-green-400 font-semibold mb-8 text-center">
                    {`A working MVP, ready to flourish`}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
                    {achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white dark:bg-green-800 p-6 rounded-lg border border-green-200 dark:border-green-700 shadow-sm">
                            <Zap className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0" />
                            <p className="text-lg text-gray-800 dark:text-gray-200">
                                {`${achievement}`}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-green-200 dark:bg-green-800 border-l-4 border-green-600 p-6 rounded-lg max-w-4xl mx-auto">
                    <p className="text-xl md:text-2xl font-bold text-green-900 dark:text-green-300">
                        {`This is a de-risked opportunity. The hardest technical work is done. Now we need to make it delightful.`}
                    </p>
                </div>
            </div>
        </section>
    );
}
