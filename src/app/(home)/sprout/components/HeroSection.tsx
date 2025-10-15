import React from 'react';
import { Sprout } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-50 to-amber-50 dark:from-green-950 dark:to-amber-950 px-6 py-16">
      <div className="relative mb-8">
        <Sprout className="w-32 h-32 text-green-600 dark:text-green-400" />
        <div className="absolute -bottom-2 -right-2 text-4xl">🌱</div>
      </div>
      <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
        {`Sprout`}
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
        {`Grow the life you want, one seed at a time`}
      </p>
      <p className="text-lg md:text-xl text-amber-600 dark:text-amber-400 italic">
        {`Meet Sproutly, your time gardener`}
      </p>
    </section>
  );
}
