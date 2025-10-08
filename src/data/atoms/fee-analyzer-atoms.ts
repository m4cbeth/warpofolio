import { atom } from 'jotai';

export const initialInvestmentAtom = atom<number>(10000);
export const monthlyContributionAtom = atom<number>(500);
export const annualReturnAtom = atom<number>(7);
export const yearsAtom = atom<number>(30);
export const feePercentageAtom = atom<number>(1);

export const feeAnalysisResultsAtom = atom((get) => {
  const initialInvestment = get(initialInvestmentAtom);
  const monthlyContribution = get(monthlyContributionAtom);
  const annualReturn = get(annualReturnAtom);
  const years = get(yearsAtom);
  const feePercentage = get(feePercentageAtom);

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
  
  for (let month = 0; month < years * 12; month++) {
    balanceWithoutFees = balanceWithoutFees * (1 + monthlyReturn) + monthlyContribution;
  }
  
  return {
    finalBalance: Math.round(balance),
    totalContributions: Math.round(totalContributions),
    totalGains: Math.round(balance - totalContributions),
    totalFees: Math.round(totalFees),
    balanceWithoutFees: Math.round(balanceWithoutFees),
    feeImpact: Math.round(balanceWithoutFees - balance)
  };
});
