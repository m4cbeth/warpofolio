"use client";

import { useState } from "react";

export default function RetirementProjectionCalculatorPage() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(25000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [inflationRate, setInflationRate] = useState(3);
  const [retirementSpending, setRetirementSpending] = useState(50000);

  const calculateProjection = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const monthlyReturn = annualReturn / 100 / 12;
    
    // Calculate retirement savings
    let retirementSavings = currentSavings;
    for (let month = 0; month < yearsToRetirement * 12; month++) {
      retirementSavings = retirementSavings * (1 + monthlyReturn) + monthlyContribution;
    }
    
    // Calculate future value of retirement spending (inflation-adjusted)
    const futureSpending = retirementSpending * Math.pow(1 + inflationRate / 100, yearsToRetirement);
    
    // Calculate how long savings will last
    const monthlySpending = futureSpending / 12;
    const monthlyReturnRetirement = annualReturn / 100 / 12;
    
    let yearsSavingsLast = 0;
    let remainingSavings = retirementSavings;
    
    while (remainingSavings > monthlySpending && yearsSavingsLast < 50) {
      remainingSavings = remainingSavings * (1 + monthlyReturnRetirement) - monthlySpending;
      yearsSavingsLast += 1/12;
    }
    
    return {
      retirementSavings: Math.round(retirementSavings),
      futureSpending: Math.round(futureSpending),
      yearsSavingsLast: Math.round(yearsSavingsLast * 10) / 10,
      totalContributions: Math.round(currentSavings + (monthlyContribution * yearsToRetirement * 12)),
      totalGains: Math.round(retirementSavings - (currentSavings + (monthlyContribution * yearsToRetirement * 12)))
    };
  };

  const results = calculateProjection();

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
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
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
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2" htmlFor="current-savings">
                Current Retirement Savings ($)
              </label>
              <input
                id="current-savings"
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block font-medium mb-2" htmlFor="monthly-contribution">
                Monthly Contribution ($)
              </label>
              <input
                id="monthly-contribution"
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
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
                onChange={(e) => setAnnualReturn(Number(e.target.value))}
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
                onChange={(e) => setInflationRate(Number(e.target.value))}
                className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block font-medium mb-2" htmlFor="retirement-spending">
                Annual Retirement Spending (Today’s $)
              </label>
              <input
                id="retirement-spending"
                type="number"
                value={retirementSpending}
                onChange={(e) => setRetirementSpending(Number(e.target.value))}
                className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Retirement Projection</h2>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 space-y-4">
            <div className="text-center">
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Retirement Savings at Age {retirementAge}</div>
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
                <li className="text-yellow-600 dark:text-yellow-400">• Your savings should last through retirement</li>
              )}
              {results.yearsSavingsLast >= 30 && (
                <li className="text-green-600 dark:text-green-400">• Excellent! You’re on track for a comfortable retirement</li>
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
