"use client";

import { useAtom } from 'jotai';
import {
  currentAgeAtom,
  retirementAgeAtom,
  currentSavingsAtom,
  monthlyContributionAtom,
  annualReturnAtom,
  inflationRateAtom,
  retirementSpendingAtom,
  retirementProjectionAtom,
  retirementAgeNumberAtom
} from '@/data/atoms/retirement-atoms';
import CurrencyInput from 'react-currency-input-field';

export default function RetirementProjectionCalculatorPage() {
  const [currentAge, setCurrentAge] = useAtom(currentAgeAtom);
  const [retirementAge, setRetirementAge] = useAtom(retirementAgeAtom);
  const [currentSavings, setCurrentSavings] = useAtom(currentSavingsAtom);
  const [monthlyContribution, setMonthlyContribution] = useAtom(monthlyContributionAtom);
  const [annualReturn, setAnnualReturn] = useAtom(annualReturnAtom);
  const [inflationRate, setInflationRate] = useAtom(inflationRateAtom);
  const [retirementSpending, setRetirementSpending] = useAtom(retirementSpendingAtom);
  const [results] = useAtom(retirementProjectionAtom);
  const [retirementAgeNumber] = useAtom(retirementAgeNumberAtom);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Retirement Projection Calculator</h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        A calculator that projects your retirement income based on your current savings and investment returns.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Your Information</h2>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-2" htmlFor="current-age">
                  Current Age
                </label>
                <input
                  id="current-age"
                  type="number"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(e.target.value)}
                  className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="block font-medium mb-2" htmlFor="retirement-age">
                  Retirement Age
                </label>
                <input
                  id="retirement-age"
                  type="number"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(e.target.value)}
                  className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2" htmlFor="current-savings">
                Current Retirement Savings ($)
              </label>
              <CurrencyInput
                id="current-savings"
                name="current-savings"
                prefix="$"
                value={currentSavings}
                placeholder="Please enter your current retirement savings"
                allowDecimals={false}
                onValueChange={(value: string | undefined) => setCurrentSavings(value || '')}
                className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block font-medium mb-2" htmlFor="monthly-contribution">
                Monthly Contribution ($)
              </label>
              <CurrencyInput
                id="monthly-contribution"
                name="monthly-contribution"
                prefix="$"
                value={monthlyContribution}
                placeholder="Please enter your monthly contribution"
                allowDecimals={false}
                onValueChange={(value: string | undefined) => setMonthlyContribution(value || '')}
                className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block font-medium mb-2" htmlFor="annual-return">
                Expected Annual Return (%)
              </label>
              <input
                id="annual-return"
                type="number"
                step="0.1"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(e.target.value)}
                className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block font-medium mb-2" htmlFor="inflation-rate">
                Expected Inflation Rate (%)
              </label>
              <input
                id="inflation-rate"
                type="number"
                step="0.1"
                value={inflationRate}
                onChange={(e) => setInflationRate(e.target.value)}
                className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block font-medium mb-2" htmlFor="retirement-spending">
                {`Annual Retirement Spending (Today's $)`}
              </label>
              <CurrencyInput
                id="retirement-spending"
                name="retirement-spending"
                prefix="$"
                value={retirementSpending}
                placeholder="Please enter your annual retirement spending"
                allowDecimals={false}
                onValueChange={(value: string | undefined) => setRetirementSpending(value || '')}
                className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Retirement Projection</h2>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 space-y-4">
            <div className="text-center">
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Retirement Savings at Age {retirementAgeNumber}</div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                ${results.retirementSavings.toLocaleString()}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-600 dark:text-slate-400">Total Contributions:</span>
                <div className="font-medium">${results.totalContributions.toLocaleString()}</div>
              </div>

              <div>
                <span className="text-slate-600 dark:text-slate-400">Total Investment Gains:</span>
                <div className="font-medium text-green-600 dark:text-green-400">
                  ${results.totalGains.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Retirement Sustainability</h3>

            <div className="text-center">
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Annual Spending (Inflation-Adjusted)</div>
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                ${results.futureSpending.toLocaleString()}
              </div>
            </div>

            <div className="text-center">
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Years Savings Will Last</div>
              <div className={`text-xl font-bold ${results.yearsSavingsLast >= 30 ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                {results.yearsSavingsLast} years
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Recommendations</h3>
            <ul className="text-sm space-y-1">
              {results.yearsSavingsLast < 20 && (
                <li className="text-red-600 dark:text-red-400">• Consider increasing monthly contributions</li>
              )}
              {results.yearsSavingsLast >= 20 && results.yearsSavingsLast < 30 && (
                <li className="text-yellow-600 dark:text-yellow-400">
                  {`• Your savings should last through retirement`}
                </li>
              )}
              {results.yearsSavingsLast >= 30 && (
                <li className="text-green-600 dark:text-green-400">
                  {`• Excellent! You're on track for a comfortable retirement`}
                </li>
              )}
              <li>• Consider maximizing employer RRSP matching</li>
              <li>• Review and adjust your asset allocation as you age</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}