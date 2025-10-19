import { atom } from 'jotai';

// String atoms for input handling (allow empty strings)
export const initialInvestmentAtom = atom<string>('500000');
export const monthlyContributionAtom = atom<string>('2000');
export const annualReturnAtom = atom<string>('7');
export const yearsAtom = atom<string>('20');
export const feePercentageAtom = atom<string>('1');
export const riskToleranceAtom = atom<string>('Balanced');

// Risk tolerance options with default returns
export const riskToleranceOptions = [
  { value: 'Conservative', label: 'Conservative', defaultReturn: 5 },
  { value: 'Balanced', label: 'Balanced', defaultReturn: 7 },
  { value: 'Aggressive', label: 'Aggressive', defaultReturn: 9 }
];

// Derived number atoms for calculations
export const initialInvestmentNumberAtom = atom((get) => {
  const value = get(initialInvestmentAtom);
  return value === '' ? 0 : Number(value) || 0;
});

export const monthlyContributionNumberAtom = atom((get) => {
  const value = get(monthlyContributionAtom);
  return value === '' ? 0 : Number(value) || 0;
});

export const annualReturnNumberAtom = atom((get) => {
  const value = get(annualReturnAtom);
  return value === '' ? 0 : Number(value) || 0;
});

export const yearsNumberAtom = atom((get) => {
  const value = get(yearsAtom);
  return value === '' ? 0 : Number(value) || 0;
});

export const feePercentageNumberAtom = atom((get) => {
  const value = get(feePercentageAtom);
  return value === '' ? 0 : Number(value) || 0;
});

export const advisorValueAnalysisAtom = atom((get) => {
  const initialInvestment = get(initialInvestmentNumberAtom);
  const monthlyContribution = get(monthlyContributionNumberAtom);
  const annualReturn = get(annualReturnNumberAtom);
  const years = get(yearsNumberAtom);
  const feePercentage = get(feePercentageNumberAtom);

  // Constants for advisor value-adds
  const BEHAVIOR_GAP_COST = 2.25; // Annual percentage lost due to emotional mistakes
  const TAX_OPTIMIZATION_VALUE = 0.75; // Annual percentage gained from tax strategies

  // Calculate advisor portfolio (with fees but optimized)
  const monthlyReturn = annualReturn / 100 / 12;
  const monthlyFee = feePercentage / 100 / 12;
  const advisorMonthlyReturn = monthlyReturn - monthlyFee + (TAX_OPTIMIZATION_VALUE / 100 / 12);

  let advisorBalance = initialInvestment;
  let totalContributions = initialInvestment;

  for (let month = 0; month < years * 12; month++) {
    advisorBalance = advisorBalance * (1 + advisorMonthlyReturn) + monthlyContribution;
    totalContributions += monthlyContribution;
  }

  // Calculate DIY portfolio (no fees but suffers from behavior gap)
  const diyMonthlyReturn = monthlyReturn - (BEHAVIOR_GAP_COST / 100 / 12);

  let diyBalance = initialInvestment;

  for (let month = 0; month < years * 12; month++) {
    diyBalance = diyBalance * (1 + diyMonthlyReturn) + monthlyContribution;
  }

  // Calculate fees paid
  const totalFees = (advisorBalance * (feePercentage / 100)) * years;

  // Calculate individual value-adds
  const behaviorGapValue = advisorBalance - diyBalance;
  const taxOptimizationValue = advisorBalance * (TAX_OPTIMIZATION_VALUE / 100) * years;

  // Net benefit calculation
  const netBenefit = advisorBalance - diyBalance;
  const roi = totalFees > 0 ? netBenefit / totalFees : 0;

  return {
    // Portfolio values
    advisorBalance: Math.round(advisorBalance),
    diyBalance: Math.round(diyBalance),
    totalContributions: Math.round(totalContributions),

    // Costs
    totalFees: Math.round(totalFees),

    // Value-adds
    behaviorGapValue: Math.round(behaviorGapValue),
    taxOptimizationValue: Math.round(taxOptimizationValue),

    // Net analysis
    netBenefit: Math.round(netBenefit),
    roi: Math.round(roi * 100) / 100,

    // Additional metrics
    advisorGains: Math.round(advisorBalance - totalContributions),
    diyGains: Math.round(diyBalance - totalContributions)
  };
});
