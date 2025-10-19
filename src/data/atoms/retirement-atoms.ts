import { atom } from 'jotai';

// String atoms for input handling (allow empty strings)
export const currentAgeAtom = atom<string>('30');
export const retirementAgeAtom = atom<string>('65');
export const currentSavingsAtom = atom<string>('25000');
export const monthlyContributionAtom = atom<string>('500');
export const annualReturnAtom = atom<string>('7');
export const inflationRateAtom = atom<string>('3');
export const retirementSpendingAtom = atom<string>('50000');

// Derived number atoms for calculations
export const currentAgeNumberAtom = atom((get) => {
  const value = get(currentAgeAtom);
  return value === '' ? 0 : Number(value) || 0;
});

export const retirementAgeNumberAtom = atom((get) => {
  const value = get(retirementAgeAtom);
  return value === '' ? 0 : Number(value) || 0;
});

export const currentSavingsNumberAtom = atom((get) => {
  const value = get(currentSavingsAtom);
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

export const inflationRateNumberAtom = atom((get) => {
  const value = get(inflationRateAtom);
  return value === '' ? 0 : Number(value) || 0;
});

export const retirementSpendingNumberAtom = atom((get) => {
  const value = get(retirementSpendingAtom);
  return value === '' ? 0 : Number(value) || 0;
});

export const retirementProjectionAtom = atom((get) => {
  const currentAge = get(currentAgeNumberAtom);
  const retirementAge = get(retirementAgeNumberAtom);
  const currentSavings = get(currentSavingsNumberAtom);
  const monthlyContribution = get(monthlyContributionNumberAtom);
  const annualReturn = get(annualReturnNumberAtom);
  const inflationRate = get(inflationRateNumberAtom);
  const retirementSpending = get(retirementSpendingNumberAtom);

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
    yearsSavingsLast += 1 / 12;
  }

  return {
    retirementSavings: Math.round(retirementSavings),
    futureSpending: Math.round(futureSpending),
    yearsSavingsLast: Math.round(yearsSavingsLast * 10) / 10,
    totalContributions: Math.round(currentSavings + (monthlyContribution * yearsToRetirement * 12)),
    totalGains: Math.round(retirementSavings - (currentSavings + (monthlyContribution * yearsToRetirement * 12)))
  };
});
