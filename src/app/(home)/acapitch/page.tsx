"use client";

import React from 'react';
import { Bot } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import MechanicsSection from './components/MechanicsSection';
import MagicSection from './components/MagicSection';
import MarketSection from './components/MarketSection';
import TractionSection from './components/TractionSection';
import VisionSection from './components/VisionSection';
import BusinessSection from './components/BusinessSection';
import TechSection from './components/TechSection';
import TeamSection from './components/TeamSection';
import AskSection from './components/AskSection';
import ClosingSection from './components/ClosingSection';

export default function Page() {
    return (
        <main className="min-h-screen bg-blue-50 dark:bg-blue-950">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8 px-6">
                <div className="max-w-6xl mx-auto flex items-center gap-4">
                    <Bot className="w-12 h-12" />
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold">AdvisorContent AI</h1>
                        <p className="text-blue-100 text-sm md:text-base">Your Compliance-First Content Engine</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-blue-50 dark:bg-blue-950">
                <HeroSection />
                <ProblemSection />
                <SolutionSection />
                <MechanicsSection />
                <MagicSection />
                <MarketSection />
                <TractionSection />
                <VisionSection />
                <BusinessSection />
                <TechSection />
                <TeamSection />
                <AskSection />
                <ClosingSection />
            </div>
        </main>
    );
}
