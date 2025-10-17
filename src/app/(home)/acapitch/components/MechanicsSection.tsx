import React from 'react';
import { MessageSquare, Search, Bot, Shield, Calendar } from 'lucide-react';

export default function MechanicsSection() {
    const steps = [
        {
            icon: MessageSquare,
            title: 'Input',
            desc: '15-min conversation with advisor about a topic',
            detail: 'Share your insights the same way you\'d explain to a client. We capture your expertise and perspective.'
        },
        {
            icon: Search,
            title: 'Research',
            desc: 'AI analyzes trending questions, SEO opportunities',
            detail: 'Our system identifies what people are actually searching for and finds content gaps in your niche.'
        },
        {
            icon: Bot,
            title: 'Generate',
            desc: 'Multi-agent workflow creates content variations',
            detail: 'Specialized AI models (researcher, writer, copywriter) work together to create multiple content formats.'
        },
        {
            icon: Shield,
            title: 'Compliance Review',
            desc: 'AI + human pre-screening for regulatory flags',
            detail: 'Every piece is vetted for potential compliance issues before you see it. We flag concerns, not violations.'
        },
        {
            icon: Calendar,
            title: 'Deliver',
            desc: 'Complete content calendar delivered to advisor',
            detail: 'You get a month\'s worth of content across all platforms, ready to schedule or customize further.'
        }
    ];

    return (
        <section className="py-16 px-6 bg-white dark:bg-blue-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    How It Works
                </h2>

                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-8 text-center">
                    Current State: Manual Operation + AI Orchestration
                </p>

                <div className="space-y-8 max-w-5xl mx-auto">
                    {steps.map((step, i) => (
                        <div key={i} className="relative">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                                        {i + 1}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="bg-white dark:bg-blue-900 p-6 rounded-lg shadow-md border border-blue-200 dark:border-blue-700">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                                            {step.desc}
                                        </p>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            {step.detail}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {i < steps.length - 1 && (
                                <div className="absolute left-8 top-16 w-0.5 h-8 bg-blue-300 dark:bg-blue-700"></div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl border border-blue-200 dark:border-blue-900 max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        The n8n Workflow Orchestration
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
                        All of this happens automatically using workflow automation tools that chain specialized AI models together—each one trained for its specific role.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-blue-900 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research Brain</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Analyzes search trends, identifies content gaps, finds trending topics
                            </p>
                        </div>
                        <div className="bg-white dark:bg-blue-900 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Writer Brain</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Converts insights into clear, engaging prose optimized for readability
                            </p>
                        </div>
                        <div className="bg-white dark:bg-blue-900 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Copywriter Brain</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Crafts headlines, hooks, and multiple platform variations
                            </p>
                        </div>
                        <div className="bg-white dark:bg-blue-900 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Compliance Brain</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Flags potential regulatory issues and suggests safer alternatives
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-6 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-900 max-w-4xl mx-auto">
                    <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
                        {`<strong className="text-gray-900 dark:text-white">Could you do this yourself? Absolutely.</strong> Just like your clients could theoretically manage their own portfolios. But they don't. Because it's time-consuming, requires multiple areas of expertise, and one mistake can cost more than outsourcing it.`}
                    </p>
                </div>
            </div>
        </section>
    );
}
