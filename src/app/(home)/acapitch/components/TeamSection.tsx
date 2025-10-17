import React from 'react';
import { User, Briefcase, Code, Shield } from 'lucide-react';

export default function TeamSection() {
    return (
        <section className="py-16 px-6 bg-blue-50 dark:bg-blue-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Team
                </h2>

                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-12 text-center">
                    Built by Someone Who Lived the Problem
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div className="bg-white dark:bg-blue-900 p-8 rounded-2xl border border-blue-200 dark:border-blue-700 shadow-sm">
                        <div className="flex items-start gap-6">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                                <User className="w-12 h-12 text-white" />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Jaren Whitehouse
                                </h3>
                                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                                    Founder & CEO
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Briefcase className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white">Former Investment Associate</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Lived the compliance nightmare firsthand. Saw how great advisors struggled with content creation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Code className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white">Technical Builder</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Built web solutions for financial advisors. Deep understanding of both technical and regulatory sides.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white">Compliance Advocate</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Understands that compliance isn't just a checkbox—it's about protecting advisors' livelihoods.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-blue-900 p-8 rounded-2xl border border-blue-200 dark:border-blue-700 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Why This Matters
                        </h3>

                        <div className="space-y-4">
                            <div className="p-4 bg-blue-50 dark:bg-blue-800 rounded-lg">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Industry Experience</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Having worked as an Investment Associate, I understand the regulatory pressures, client expectations, and business challenges advisors face daily.
                                </p>
                            </div>

                            <div className="p-4 bg-green-50 dark:bg-green-800 rounded-lg">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Expertise</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Built and scaled web solutions for financial advisors. Know how to create tools that actually work in the real world, not just in demos.
                                </p>
                            </div>

                            <div className="p-4 bg-purple-50 dark:bg-purple-800 rounded-lg">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Compliance Focus</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Most AI tools are dangerous for regulated professionals. I built this specifically to be compliance-first, not compliance-afterthought.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl text-white max-w-4xl mx-auto mb-12">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        Future Team Expansion
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold mb-3">Immediate Hires (6-12 months)</h4>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Senior Full-Stack Developer</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">AI/ML Engineer</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Customer Success Manager</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold mb-3">Growth Phase (12-24 months)</h4>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Head of Engineering</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">VP of Sales & Marketing</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Compliance Advisor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-blue-900 p-6 rounded-2xl border border-blue-200 dark:border-blue-700">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            The Solo Founder Advantage
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-2">
                                <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                                <span className="text-gray-700 dark:text-gray-300">Deep industry knowledge and connections</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                                <span className="text-gray-700 dark:text-gray-300">Fast decision making and iteration</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                                <span className="text-gray-700 dark:text-gray-300">Bootstrapped approach ensures sustainability</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                                <span className="text-gray-700 dark:text-gray-300">Personal relationship with every beta client</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-blue-900 p-6 rounded-2xl border border-blue-200 dark:border-blue-700">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            Building the Right Team
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                                <span className="text-gray-700 dark:text-gray-300">Hire for cultural fit and domain expertise</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                                <span className="text-gray-700 dark:text-gray-300">Prioritize advisors and compliance experience</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                                <span className="text-gray-700 dark:text-gray-300">Remote-first culture for top talent</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                                <span className="text-gray-700 dark:text-gray-300">Equity participation for key hires</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl border border-green-200 dark:border-green-900 max-w-4xl mx-auto text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        The Vision for the Team
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        We're not building just another SaaS company. We're creating a platform that empowers financial advisors to build authority and attract clients through consistent, valuable content. Every team member will share this mission and understand the unique challenges of our industry.
                    </p>
                </div>
            </div>
        </section>
    );
}
