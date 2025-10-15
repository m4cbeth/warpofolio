import React from 'react';
import { Leaf } from 'lucide-react';

export default function SolutionSection() {
    return (
        <section className="py-16 px-6 bg-green-50 dark:bg-green-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {`The Solution`}
                </h2>
                <p className="text-2xl md:text-3xl text-green-600 dark:text-green-400 font-semibold mb-6 text-center">
                    {`A delightful companion who helps you grow`}
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 text-center max-w-4xl mx-auto">
                    {`Sprout transforms abstract time into visible growth. It's not just a tracker—it's a garden where your skills flourish.`}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    <div className="bg-white dark:bg-green-800 p-6 rounded-lg border border-green-200 dark:border-green-700 shadow-sm">
                        <Leaf className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {`Each 10 minutes = 1 Seed you can plant`}
                        </p>
                    </div>
                    <div className="bg-white dark:bg-green-800 p-6 rounded-lg border border-green-200 dark:border-green-700 shadow-sm">
                        <Leaf className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {`Create Plots for what matters (Guitar, Health, Learning)`}
                        </p>
                    </div>
                    <div className="bg-white dark:bg-green-800 p-6 rounded-lg border border-green-200 dark:border-green-700 shadow-sm">
                        <Leaf className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {`Watch your garden grow as you invest Seeds`}
                        </p>
                    </div>
                    <div className="bg-white dark:bg-green-800 p-6 rounded-lg border border-green-200 dark:border-green-700 shadow-sm">
                        <Leaf className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {`Meet Sproutly, your cheerful gardener who celebrates every win`}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
