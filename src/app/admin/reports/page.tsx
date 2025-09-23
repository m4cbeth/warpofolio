"use client";

import { useState } from 'react';

type Report = {
  month: string;
  mrr: number;
  arr: number;
  subscriptionCount: number;
  paymentCount: number;
  totalsByPrice: Record<string, number>;
  currencyByPrice: Record<string, string>;
};

export default function AdminReportsPage() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<Report | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/monthly-report', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to generate report');
      setReport(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to generate report');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Admin Reports</h1>
      <button
        disabled={loading}
        onClick={generate}
        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
      >
        {loading ? 'Generating…' : 'Generate Current Month Report'}
      </button>
      {error && <p className="text-red-600 mt-3">{error}</p>}
      {report && (
        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-medium">Report: {report.month}</h2>
          <p>MRR (cents): {report.mrr}</p>
          <p>ARR (cents): {report.arr}</p>
          <p>Subscriptions: {report.subscriptionCount}</p>
          <p>Payments: {report.paymentCount}</p>
          <div className="mt-4">
            <h3 className="font-medium">Totals by Price:</h3>
            <ul className="list-disc pl-6">
              {Object.entries(report.totalsByPrice).map(([price, amt]) => (
                <li key={price}>
                  {price}: {amt} {report.currencyByPrice[price] || ''}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}

