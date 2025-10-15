import React from 'react';
import { Heart } from 'lucide-react';
import Image from 'next/image';

export default function MagicSection() {
    const features = [
        'Morning greeting: "You have 12 Seeds left today—want to grow your Reading Plot?"',
        'Celebrates milestones: Animates and dances when your Health Plot levels up',
        'Gentle pattern recognition: "Your YouTube Plot is getting pretty big... everything okay?"',
        'Builds connection: Users return not because they have to, but because they want to see Sproutly'
    ];

    return (
        <section className="py-16 px-6 bg-gradient-to-br from-green-100 to-amber-100 dark:from-green-900 dark:to-amber-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {`The Secret Sauce`}
                </h2>
                <Image className='mx-auto' src="/sprout/Sproutly_mascot.png" alt="Sproutly" width={170} height={170} />
                <p className="text-2xl md:text-3xl text-green-600 dark:text-green-400 font-semibold mb-4 text-center">
                    {`Sproutly: Your Time Gardener`}
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 text-center max-w-4xl mx-auto italic">
                    {`Sproutly isn't a chatbot or notification system. It's a relationship.`}
                    <br />
                    {`A little sprout character who grows WITH you.`}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
                    {features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <Heart className="w-6 h-6 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-1" />
                            <p className="text-gray-800 dark:text-gray-200">
                                {`${feature}`}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-green-200 dark:bg-green-800 border-l-4 border-green-500 p-6 rounded-lg max-w-4xl mx-auto">
                    <p className="text-xl font-bold text-green-900 dark:text-green-300">
                        {`Sproutly transforms tracking from a chore into a friendship`}
                    </p>
                </div>
            </div>
        </section>
    );
}
