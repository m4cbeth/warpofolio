import React from 'react';
import { Users } from 'lucide-react';

export default function TeamSection() {
    const founderExpertise = [
        'Deep React Native/Expo expertise—full-stack developer',
        'Passionate about productivity psychology and habit formation',
        'Built and shipped the working MVP solo',
        'Vision for genuine products that reshape lives, not extract value'
    ];

    const seekingRoles = [
        'Product/Gamification Designer: To perfect Sproutly\'s personality and the garden visualization',
        'Growth Marketer: To craft messaging and acquire our first 10K users organically',
        'Strategic Advisor: To guide business model, fundraising, and scale strategy'
    ];

    return (
        <section className="py-16 px-6 bg-white dark:bg-green-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    {`The Team`}
                </h2>

                <div className="bg-green-50 dark:bg-green-800 p-8 rounded-lg mb-8 border border-green-200 dark:border-green-700 shadow-sm max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {`Technical Founder`}
                    </h3>
                    <div className="space-y-2">
                        {founderExpertise.map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                                <p className="text-gray-700 dark:text-gray-300">
                                    {`${item}`}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    {`Actively Seeking:`}
                </h3>
                <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
                    {seekingRoles.map((role, i) => (
                        <div key={i} className="bg-white dark:bg-green-800 p-6 rounded-lg border-2 border-green-200 dark:border-green-700 shadow-sm">
                            <p className="text-lg text-gray-800 dark:text-gray-200">
                                {`${role}`}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
