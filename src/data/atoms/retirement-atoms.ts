import { atom } from 'jotai';

export const currentAgeAtom = atom<number>(30);
export const retirementAgeAtom = atom<number>(65);
export const currentSavingsAtom = atom<number>(25000);
export const monthlyContributionAtom = atom<number>(500);
export const annualReturnAtom = atom<number>(7);
export const inflationRateAtom = atom<number>(3);
export const retirementSpendingAtom = atom<number>(50000);

export const retirementProjectionAtom = atom((get) => {
  const currentAge = get(currentAgeAtom);
  const retirementAge = get(retirementAgeAtom);
  const currentSavings = get(currentSavingsAtom);
  const monthlyContribution = get(monthlyContributionAtom);
  const annualReturn = get(annualReturnAtom);
  const inflationRate = get(inflationRateAtom);
  const retirementSpending = get(retirementSpendingAtom);

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
});
