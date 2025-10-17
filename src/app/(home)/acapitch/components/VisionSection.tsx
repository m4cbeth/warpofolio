import React from 'react';
import { Clock, Users, Zap, Globe } from 'lucide-react';

export default function VisionSection() {
    const roadmap = [
        {
            phase: 'Phase 1 (Current - Next 6mo)',
            icon: Clock,
            color: 'blue',
            goals: [
                'Operate n8n workflows manually for clients',
                'Refine content generation process and quality',
                'Build comprehensive compliance knowledge base',
                'Develop advisor feedback loops and iteration',
                'Target: 10-20 advisor clients at $397/mo'
            ]
        },
        {
            phase: 'Phase 2 (6-18mo)',
            icon: Users,
            color: 'green',
            goals: [
                'Build self-service advisor portal for topic input',
                'Create automated content calendar interface',
                'Implement content approval workflow system',
                'Develop AI agent orchestration for posting',
                'Build compliance dashboard and monitoring',
                'Target: 100-200 advisors at $497/mo'
            ]
        },
        {
            phase: 'Phase 3 (18-36mo)',
            icon: Globe,
            color: 'purple',
            goals: [
                'AI-powered topic suggestions based on client conversations',
                'Automatic posting via social media agents',
                'Performance analytics and optimization engine',
                'White-label options for RIAs and advisor networks',
                'Enterprise tier for large advisory firms',
                'Target: 1,000+ advisors, tiered pricing model'
            ]
        }
    ];

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'blue':
                return {
                    bg: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20',
                    border: 'border-blue-200 dark:border-blue-900',
                    icon: 'text-blue-600 dark:text-blue-400',
                    dot: 'bg-blue-500'
                };
            case 'green':
                return {
                    bg: 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20',
                    border: 'border-green-200 dark:border-green-900',
                    icon: 'text-green-600 dark:text-green-400',
                    dot: 'bg-green-500'
                };
            case 'purple':
                return {
                    bg: 'from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20',
                    border: 'border-purple-200 dark:border-purple-900',
                    icon: 'text-purple-600 dark:text-purple-400',
                    dot: 'bg-purple-500'
                };
            default:
                return {
                    bg: 'from-gray-50 to-gray-50 dark:from-gray-950/20 dark:to-gray-950/20',
                    border: 'border-gray-200 dark:border-gray-900',
                    icon: 'text-gray-600 dark:text-gray-400',
                    dot: 'bg-gray-500'
                };
        }
    };

    return (
        <section className="py-16 px-6 bg-white dark:bg-blue-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    The Vision
                </h2>

                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-8 text-center">
                    From Manual Operation to AI-Powered Platform
                </p>

                <div className="space-y-12 max-w-5xl mx-auto">
                    {roadmap.map((phase, i) => {
                        const colors = getColorClasses(phase.color);
                        return (
                            <div key={i} className="relative">
                                <div className={`bg-gradient-to-br ${colors.bg} p-8 rounded-2xl border ${colors.border}`}>
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${phase.color === 'blue' ? 'from-blue-600 to-indigo-600' : phase.color === 'green' ? 'from-green-600 to-emerald-600' : 'from-purple-600 to-indigo-600'} flex items-center justify-center`}>
                                                <phase.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${colors.dot} text-white flex items-center justify-center text-sm font-bold`}>
                                                {i + 1}
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                                {phase.phase}
                                            </h3>
                                            <ul className="space-y-3">
                                                {phase.goals.map((goal, j) => (
                                                    <li key={j} className="flex items-start gap-3">
                                                        <span className={`text-lg ${colors.icon} mt-1 flex-shrink-0`}>→</span>
                                                        <span className="text-gray-700 dark:text-gray-300">{goal}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {i < roadmap.length - 1 && (
                                    <div className="absolute left-8 top-full w-0.5 h-12 bg-gradient-to-b from-blue-300 to-green-300 dark:from-blue-700 dark:to-green-700"></div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 p-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl text-white max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        The End Goal: Every Advisor Has Their Own Content Engine
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/10 p-6 rounded-lg">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                The Vision
                            </h4>
                            <p className="text-blue-100">
                                Transform content creation from a burden into a competitive advantage. Every advisor should have access to the same systematic approach that top performers use.
                            </p>
                        </div>

                        <div className="bg-white/10 p-6 rounded-lg">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Globe className="w-5 h-5" />
                                The Impact
                            </h4>
                            <p className="text-blue-100">
                                When every advisor can publish consistently and compliantly, the entire industry becomes more transparent, educational, and trusted by the public.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-white dark:bg-blue-900 rounded-2xl border border-blue-200 dark:border-blue-700 max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        The Platform Evolution Timeline
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="p-4 bg-blue-50 dark:bg-blue-800 rounded-lg">
                            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Current State</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Manual n8n workflows, 3 beta clients</p>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-800 rounded-lg">
                            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Platform Launch</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Self-service portal, 100+ advisors</p>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-800 rounded-lg">
                            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Full Automation</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">AI agents, 1,000+ advisors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
