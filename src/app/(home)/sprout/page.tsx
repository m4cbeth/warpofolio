"use client";

import React from 'react';
import { Sprout } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import MechanicsSection from './components/MechanicsSection';
import DifferentiationSection from './components/DifferentiationSection';
import MagicSection from './components/MagicSection';
import MarketSection from './components/MarketSection';
import TractionSection from './components/TractionSection';
import VisionSection from './components/VisionSection';
import BusinessSection from './components/BusinessSection';
import TeamSection from './components/TeamSection';
import AskSection from './components/AskSection';
import ClosingSection from './components/ClosingSection';

export default function Page() {
  return (
    <main className="min-h-screen bg-green-50 dark:bg-green-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Sprout className="w-12 h-12" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Sprout</h1>
            <p className="text-green-100 text-sm md:text-base">Grow the life you want, one seed at a time</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-green-50 dark:bg-green-950">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <MechanicsSection />
        <DifferentiationSection />
        <MagicSection />
        <MarketSection />
        <TractionSection />
        <VisionSection />
        <BusinessSection />
        <TeamSection />
        <AskSection />
        <ClosingSection />
      </div>
    </main>
  );
}