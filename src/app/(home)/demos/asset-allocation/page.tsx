"use client";

import { useAtom } from 'jotai';
import {
  selectedProfileAtom,
  allocationsAtom,
  updateAllocationAtom,
  selectProfileAtom,
  riskProfiles
} from '@/data/atoms/asset-allocation-atoms';

export default function AssetAllocationOptimizerPage() {
  const [selectedProfile] = useAtom(selectedProfileAtom);
  const [allocations] = useAtom(allocationsAtom);
  const [, updateAllocation] = useAtom(updateAllocationAtom);
  const [, selectProfile] = useAtom(selectProfileAtom);

  function handleProfileChange(e: React.ChangeEvent<HTMLSelectElement>) {
    selectProfile(e.target.value);
  }

  function handleAllocationChange(index: number, value: string) {
    updateAllocation({ index, percentage: value });
  }

  const total = allocations.reduce((sum, a) => {
    const percentage = a.percentage === '' ? 0 : Number(a.percentage) || 0;
    return sum + percentage;
  }, 0);

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Asset Allocation Optimizer</h1>
      <p className="mb-6 text-slate-600 dark:text-slate-300">
        Find an optimal asset allocation based on your risk tolerance and investment goals.
      </p>

      <div className="mb-6">
        <label className="block font-medium mb-2" htmlFor="risk-profile">
          Select your risk profile:
        </label>
        <select
          id="risk-profile"
          className="border rounded px-3 py-2 w-full dark:bg-slate-900 dark:border-slate-700"
          value={selectedProfile}
          onChange={handleProfileChange}
        >
          {riskProfiles.map((profile) => (
            <option key={profile.name} value={profile.name}>
              {profile.name} - {profile.description}
            </option>
          ))}
        </select>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {allocations.map((a, i) => (
          <div key={a.asset} className="flex items-center gap-4">
            <label className="w-24 font-medium">{a.asset}</label>
            <input
              type="number"
              min={0}
              max={100}
              value={a.percentage}
              onChange={(e) =>
                handleAllocationChange(i, e.target.value)
              }
              className="border rounded px-2 py-1 w-20 dark:bg-slate-900 dark:border-slate-700"
            />
            <span>%</span>
          </div>
        ))}
        <div className="mt-2 text-sm">
          <span
            className={
              total === 100
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }
          >
            Total: {total}% {total !== 100 && "(should total 100%)"}
          </span>
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Your Allocation</h2>
        <ul className="space-y-1">
          {allocations.map((a) => (
            <li key={a.asset} className="flex justify-between">
              <span>{a.asset}</span>
              <span>{a.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}