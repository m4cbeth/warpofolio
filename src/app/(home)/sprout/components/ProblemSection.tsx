import React from 'react';

export default function ProblemSection() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-green-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          {`The Problem`}
        </h2>
        <p className="text-2xl md:text-3xl text-green-600 dark:text-green-400 font-semibold mb-8 text-center">
          {`We track every dollar, but waste our hours`}
        </p>

        <div className="space-y-6 mb-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-3 flex-shrink-0" />
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              {`People use sophisticated tools for finances (Mint, YNAB) and fitness (Strava, MyFitnessPal)`}
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-3 flex-shrink-0" />
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              {`But for our most finite resource—time and attention—we rely on memory and guilt`}
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-3 flex-shrink-0" />
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              {`The result? Days, weeks, and years slip away on autopilot, away from our true goals`}
            </p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-6 rounded-lg max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-red-900 dark:text-red-300">
            {`96 Seeds per day (16 waking hours) = our most valuable, untracked asset`}
          </p>
        </div>
      </div>
    </section>
  );
}
