import { atom } from 'jotai';

export type AssetAllocation = {
  asset: string;
  percentage: number;
};

export type RiskProfile = {
  name: string;
  allocations: AssetAllocation[];
  description: string;
};

export const riskProfiles: RiskProfile[] = [
  {
    name: "Conservative",
    allocations: [
      { asset: "Stocks", percentage: 30 },
      { asset: "Bonds", percentage: 60 },
      { asset: "Cash", percentage: 10 },
    ],
    description: "Lower risk, more bonds and cash.",
  },
  {
    name: "Balanced",
    allocations: [
      { asset: "Stocks", percentage: 60 },
      { asset: "Bonds", percentage: 30 },
      { asset: "Cash", percentage: 10 },
    ],
    description: "Moderate risk, balanced between stocks and bonds.",
  },
  {
    name: "Aggressive",
    allocations: [
      { asset: "Stocks", percentage: 85 },
      { asset: "Bonds", percentage: 10 },
      { asset: "Cash", percentage: 5 },
    ],
    description: "Higher risk, mostly stocks.",
  },
];

export const defaultAllocations: AssetAllocation[] = [
  { asset: "Stocks", percentage: 60 },
  { asset: "Bonds", percentage: 30 },
  { asset: "Cash", percentage: 10 },
];

export const selectedProfileAtom = atom<string>("Balanced");

export const allocationsAtom = atom<AssetAllocation[]>(
  riskProfiles.find((p) => p.name === "Balanced")?.allocations || defaultAllocations
);

export const updateAllocationAtom = atom(
  null,
  (get, set, { index, percentage }: { index: number; percentage: number }) => {
    const currentAllocations = get(allocationsAtom);
    const newAllocations = currentAllocations.map((a, i) =>
      i === index ? { ...a, percentage } : a
    );
    set(allocationsAtom, newAllocations);
  }
);

export const selectProfileAtom = atom(
  null,
  (get, set, profileName: string) => {
    const profile = riskProfiles.find((p) => p.name === profileName);
    if (profile) {
      set(selectedProfileAtom, profileName);
      set(allocationsAtom, profile.allocations);
    }
  }
);
