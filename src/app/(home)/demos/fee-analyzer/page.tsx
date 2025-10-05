"use client";

import { useState } from "react";

export default function InvestmentFeeAnalyzerPage() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [years, setYears] = useState(30);
  const [feePercentage, setFeePercentage] = useState(1);

  const calculateProjection = () => {
    const monthlyReturn = annualReturn / 100 / 12;
    const monthlyFee = feePercentage / 100 / 12;
    const netMonthlyReturn = monthlyReturn - monthlyFee;
    
    let balance = initialInvestment;
    let totalContributions = initialInvestment;
    
    for (let month = 0; month < years * 12; month++) {
      balance = balance * (1 + netMonthlyReturn) + monthlyContribution;
      totalContributions += monthlyContribution;
    }
    
    const totalFees = (balance * (feePercentage / 100)) * years;
    let balanceWithoutFees = initialInvestment;
    let contributionsWithoutFees = initialInvestment;
    
    for (let month = 0; month < years * 12; month++) {
      balanceWithoutFees = balanceWithoutFees * (1 + monthlyReturn) + monthlyContribution;
      contributionsWithoutFees += monthlyContribution;
    }
    
    return {
      finalBalance: Math.round(balance),
      totalContributions: Math.round(totalContributions),
      totalGains: Math.round(balance - totalContributions),
      totalFees: Math.round(totalFees),
      balanceWithoutFees: Math.round(balanceWithoutFees),
      feeImpact: Math.round(balanceWithoutFees - balance)
    };
  };

  const results = calculateProjection();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Investment Fee Analyzer</h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        Analyze the impact of investment fees on your portfolio growth over time.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Investment Parameters</h2>
          
          <div>
            <label className="block font-medium mb-2" htmlFor="initial-investment">
              Initial Investment ($)
            </label>
            <input
              id="initial-investment"
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              className="border rounded px-3 py-2 w-full dark:bg-slate-900 dark:border-slate-700"
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
              className="border rounded px-3 py-2 w-full dark:bg-slate-900 dark:border-slate-700"
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
              className="border rounded px-3 py-2 w-full dark:bg-slate-900 dark:border-slate-700"
            />
          </div>

          <div>
            <label className="block font-medium mb-2" htmlFor="years">
              Investment Period (years)
            </label>
            <input
              id="years"
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="border rounded px-3 py-2 w-full dark:bg-slate-900 dark:border-slate-700"
            />
          </div>

          <div>
            <label className="block font-medium mb-2" htmlFor="fee-percentage">
              Annual Fee Percentage (%)
            </label>
            <input
              id="fee-percentage"
              type="number"
              step="0.01"
              value={feePercentage}
              onChange={(e) => setFeePercentage(Number(e.target.value))}
              className="border rounded px-3 py-2 w-full dark:bg-slate-900 dark:border-slate-700"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Results</h2>
          
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Final Portfolio Value:</span>
              <span className="text-lg font-bold text-green-600 dark:text-green-400">
                ${results.finalBalance.toLocaleString()}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Contributions:</span>
              <span className="text-lg">${results.totalContributions.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Gains:</span>
              <span className="text-lg text-green-600 dark:text-green-400">
                ${results.totalGains.toLocaleString()}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Fees Paid:</span>
              <span className="text-lg text-red-600 dark:text-red-400">
                ${results.totalFees.toLocaleString()}
              </span>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Portfolio Without Fees:</span>
                <span className="text-lg font-bold">
                  ${results.balanceWithoutFees.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="font-medium text-red-600 dark:text-red-400">Fee Impact:</span>
                <span className="text-lg font-bold text-red-600 dark:text-red-400">
                  -${results.feeImpact.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Key Insights</h3>
            <ul className="text-sm space-y-1">
              <li>• Fees reduced your portfolio by ${results.feeImpact.toLocaleString()}</li>
              <li>• That’s {((results.feeImpact / results.balanceWithoutFees) * 100).toFixed(1)}% of your potential wealth</li>
              <li>• Consider low-cost index funds (0.1% or less)</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
