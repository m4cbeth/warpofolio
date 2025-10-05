"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const calculators = [
  { label: "Retirement Projection", href: "/demos/retirement-projection" },
  { label: "Investment Fee Analyzer", href: "/demos/fee-analyzer" },
  { label: "Asset Allocation", href: "/demos/asset-allocation" },
  { label: "Goal Planner", href: "/demos/goal-planner" },
];

export default function DemosNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4 justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold hover:underline">Home</Link>
          <span className="text-slate-400">/</span>
          <Link href="/demos" className="font-semibold hover:underline">Demos</Link>
        </div>

        {/* Show calculator links on larger screens */}
        <div className="hidden lg:flex items-center">
          {calculators.map((calc, idx) => {
            const isActive = pathname?.startsWith(calc.href);
            return (
              <div key={calc.label}>
                {idx > 0 && (
                  <span className="px-2 text-slate-400" aria-hidden>
                    |
                  </span>
                )}
                <Link
                  key={calc.href}
                  href={calc.href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "text-sm rounded px-2 py-1 bg-blue-600 text-white"
                      : "text-sm text-slate-700 dark:text-slate-300 hover:underline"
                  }
                >
                  {calc.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
