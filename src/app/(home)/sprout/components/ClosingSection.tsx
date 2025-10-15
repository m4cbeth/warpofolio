import React from 'react';
import { Sprout } from 'lucide-react';

export default function ClosingSection() {
    return (
        <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-amber-50 dark:from-green-950 dark:to-amber-950">
            <div className="max-w-6xl mx-auto text-center">
                <div className="relative mb-6">
                    <Sprout className="w-24 h-24 text-green-600 dark:text-green-400 mx-auto" />
                    <div className="absolute -bottom-2 -right-2 text-3xl">🌱</div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                    {`Let's Grow Sprout Together`}
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                    {`Help millions plant their Seeds wisely and watch their lives flourish`}
                </p>
                <p className="text-lg md:text-xl text-amber-600 dark:text-amber-400 font-semibold mb-8">
                    {`I'd love to show you the live app and Sproutly in action.`}
                </p>
                <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200">
                    {`[Your Name] • [Your Email]`}
                </p>
            </div>
        </section>
    );
}
