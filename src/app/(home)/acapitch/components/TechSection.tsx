import React from 'react';
import { Server, Bot, Shield, Zap, Database, Globe } from 'lucide-react';

export default function TechSection() {
    return (
        <section className="py-16 px-6 bg-white dark:bg-blue-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Technology Stack
                </h2>

                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-8 text-center">
                    From Manual Workflows to Automated Platform
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-blue-50 dark:bg-blue-900 p-8 rounded-2xl border border-blue-200 dark:border-blue-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                            Current Infrastructure
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">n8n Workflow Orchestration</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Chaining specialized AI models together with conditional logic and error handling
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Multiple LLMs</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Claude, GPT-4, and specialized models for different tasks (research, writing, compliance)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Compliance Knowledge Base</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Curated database of regulatory guidelines and common compliance pitfalls
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center flex-shrink-0">
                                    <Globe className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Social Media APIs</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        LinkedIn, X, Instagram integrations for content publishing and analytics
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900 p-8 rounded-2xl border border-green-200 dark:border-green-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <Database className="w-8 h-8 text-green-600 dark:text-green-400" />
                            Future Platform Architecture
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                                    <Globe className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">React/Next.js Web App</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Modern, responsive interface with real-time collaboration features
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">AI Agent Framework</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Autonomous agents for content creation, posting, and optimization
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Real-time Analytics</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Performance tracking, engagement metrics, and optimization suggestions
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Compliance Dashboard</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Real-time compliance monitoring and risk assessment tools
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        Technical Architecture Evolution
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-3">Phase 1: Manual Operation</h4>
                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <p>• n8n workflows triggered manually</p>
                                <p>• Human oversight for quality control</p>
                                <p>• Simple content delivery via email/Drive</p>
                                <p>• Limited scalability (10-20 clients)</p>
                            </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg border border-green-200 dark:border-green-700">
                            <h4 className="font-bold text-green-600 dark:text-green-400 mb-3">Phase 2: Self-Service Platform</h4>
                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <p>• Web-based advisor portal</p>
                                <p>• Automated workflow triggers</p>
                                <p>• Content approval workflows</p>
                                <p>• Analytics and performance tracking</p>
                            </div>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                            <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-3">Phase 3: Full Automation</h4>
                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <p>• AI agents for autonomous posting</p>
                                <p>• Predictive content suggestions</p>
                                <p>• Real-time optimization</p>
                                <p>• Enterprise-grade scalability</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl text-white max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        Development Roadmap
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold mb-3">Immediate Priorities (0-6 months)</h4>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Build React-based advisor portal</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Automate n8n workflow triggers</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Implement content approval system</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Add basic analytics dashboard</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold mb-3">Future Development (6-18 months)</h4>
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">AI agent framework for posting</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Advanced compliance monitoring</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">Performance optimization engine</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-blue-300 mt-1">→</span>
                                    <span className="text-blue-100">White-label solutions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-white dark:bg-blue-900 rounded-2xl border border-blue-200 dark:border-blue-700 max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                        Technical Advantages
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white">Scalability:</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Cloud-native architecture designed to handle thousands of concurrent users and content generation requests.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white">Reliability:</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Built-in redundancy, error handling, and monitoring to ensure 99.9% uptime for critical content workflows.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white">Security:</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Enterprise-grade security with encryption, access controls, and compliance monitoring for regulated industries.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white">Flexibility:</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Modular architecture allows for easy customization and integration with existing advisor tools and workflows.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
