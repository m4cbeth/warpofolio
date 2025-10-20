import React from 'react';
import { Bot, Zap, Shield } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 px-6 py-16">
            <div className="relative mb-8">
                <div className="relative">
                    <Bot className="w-32 h-32 text-blue-600 dark:text-blue-400" />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                AdvisorContent AI
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
                Your Compliance-First Content Engine
            </p>

            <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 italic mb-8">
                Transform compliance burden into competitive advantage
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
                <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm">
                    <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3 mx-auto" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        15 Minutes Input
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Share your expertise in a quick conversation
                    </p>
                </div>

                <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm">
                    <Bot className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3 mx-auto" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        AI Content Generation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Multi-agent workflow creates compliant content
                    </p>
                </div>

                <div className="bg-white dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm">
                    <Shield className="w-8 h-8 text-green-600 dark:text-green-400 mb-3 mx-auto" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Compliance Pre-Screened
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Every piece vetted for regulatory pitfalls
                    </p>
                </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white max-w-2xl">
                <p className="text-lg font-semibold">
                    {`"You didn't become a portfolio manager to run a media empire. But that's what Google rewards."`}
                </p>
                <p className="text-blue-100 mt-2">
                    — The Content Engine Philosophy
                </p>
            </div>
        </section>
    );
}
