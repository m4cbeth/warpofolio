"use client";

import { useAtom } from 'jotai';
import {
  initialInvestmentAtom,
  monthlyContributionAtom,
  annualReturnAtom,
  yearsAtom,
  feePercentageAtom,
  riskToleranceAtom,
  advisorValueAnalysisAtom,
  riskToleranceOptions
} from '@/data/atoms/fee-analyzer-atoms';
import CurrencyInput from 'react-currency-input-field';

export default function FinancialAdvisorValueCalculatorPage() {
  const [initialInvestment, setInitialInvestment] = useAtom(initialInvestmentAtom);
  const [monthlyContribution, setMonthlyContribution] = useAtom(monthlyContributionAtom);
  const [annualReturn, setAnnualReturn] = useAtom(annualReturnAtom);
  const [years, setYears] = useAtom(yearsAtom);
  const [feePercentage, setFeePercentage] = useAtom(feePercentageAtom);
  const [riskTolerance, setRiskTolerance] = useAtom(riskToleranceAtom);
  const [results] = useAtom(advisorValueAnalysisAtom);

  const handleRiskToleranceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRisk = e.target.value;
    setRiskTolerance(selectedRisk);

    // Update annual return based on risk tolerance
    const selectedOption = riskToleranceOptions.find(option => option.value === selectedRisk);
    if (selectedOption) {
      setAnnualReturn(selectedOption.defaultReturn.toString());
    }
  };

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Financial Advisor Value Calculator</h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        Discover how professional financial advice creates value that exceeds the cost of advisor fees through behavior gap prevention, tax optimization, and holistic planning.
      </p>



      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Investment Parameters</h2>

          <div>
            <label className="block font-medium mb-2" htmlFor="risk-tolerance">
              Risk Tolerance
            </label>
            <select
              id="risk-tolerance"
              value={riskTolerance}
              onChange={handleRiskToleranceChange}
              className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
            >
              {riskToleranceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} ({option.defaultReturn}% expected return)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2" htmlFor="initial-investment">
              Current Portfolio Value ($)
            </label>
            <CurrencyInput
              id="initial-investment"
              name="initial-investment"
              prefix="$"
              value={initialInvestment}
              placeholder="Please enter your current portfolio value"
              allowDecimals={false}
              onValueChange={(value: string | undefined) => setInitialInvestment(value || '')}
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
            <label className="block font-medium mb-2" htmlFor="years">
              Investment Period (years)
            </label>
            <input
              id="years"
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
            />
          </div>

          <div>
            <label className="block font-medium mb-2" htmlFor="fee-percentage">
              Advisor Fee (%)
              <span className="text-sm text-slate-500 dark:text-slate-400 ml-1">
                (Typical fee-based advisor charges 1%)
              </span>
            </label>
            <input
              id="fee-percentage"
              type="number"
              step="0.01"
              value={feePercentage}
              onChange={(e) => setFeePercentage(e.target.value)}
              className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Advisor Value Analysis</h2>

          {/* Panel 1: Cost Analysis */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-lg">Portfolio with Professional Advisor</h3>
            <div className="flex justify-between items-center">
              <span className="font-medium">Final Portfolio Value:</span>
              <span className="text-lg font-bold text-green-600 dark:text-green-400">
                ${results.advisorBalance.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium">Total Contributions:</span>
              <span className="text-lg">${results.totalContributions.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium">Investment Gains:</span>
              <span className="text-lg text-green-600 dark:text-green-400">
                ${results.advisorGains.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium">Total Advisor Fees:</span>
              <span className="text-lg text-blue-600 dark:text-blue-400">
                ${results.totalFees.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Panel 2: Advisor Value-Adds */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-lg text-green-800 dark:text-green-200">Advisor Value-Adds</h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">Behavior Gap Prevention:</span>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Avoiding emotional mistakes (studies show DIY investors underperform by 2.25% annually)
                  </div>
                </div>
                <span className="text-lg font-bold text-green-600 dark:text-green-400">
                  +${results.behaviorGapValue.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">Tax Optimization:</span>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    TFSA/RRSP optimization, income splitting, tax-loss harvesting
                  </div>
                </div>
                <span className="text-lg font-bold text-green-600 dark:text-green-400">
                  +${results.taxOptimizationValue.toLocaleString()}
                </span>
              </div>

              <div className="pt-2 border-t border-green-200 dark:border-green-700">
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  <strong>Holistic Planning Benefits:</strong>
                </div>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• Estate planning coordination</li>
                  <li>• Insurance needs analysis</li>
                  <li>• CPP/OAS optimization</li>
                  <li>• Retirement income planning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Panel 3: Net Benefit Comparison */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-lg text-blue-800 dark:text-blue-200">Net Benefit Analysis</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg">
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">DIY Portfolio</div>
                <div className="text-lg font-bold text-slate-700 dark:text-slate-300">
                  ${results.diyBalance.toLocaleString()}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  No fees, but suffers from behavior gap
                </div>
              </div>

              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg">
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Advisor Portfolio</div>
                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                  ${results.advisorBalance.toLocaleString()}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  With fees and value-adds
                </div>
              </div>
            </div>

            <div className="text-center pt-4 border-t border-blue-200 dark:border-blue-700">
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Net Benefit</div>
              <div className={`text-2xl font-bold ${results.netBenefit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {results.netBenefit >= 0 ? '+' : ''}${results.netBenefit.toLocaleString()}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                ROI: Every $1 paid in fees returns ${results.roi.toFixed(2)} in value
              </div>
            </div>
          </div>

          {/* Panel 4: Key Insights */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Key Insights</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                <span>A single avoided panic-sell can pay for years of advisor fees</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                <span>Tax optimization alone often covers 75% of advisor costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                <span>Professional guidance provides peace of mind and disciplined strategy</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                <span>Canadian-specific strategies: TFSA/RRSP optimization, OAS clawback avoidance, dividend tax credits</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}