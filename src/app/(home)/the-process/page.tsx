'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { m } from 'framer-motion';
import { useState } from 'react';

type SliceData = {
  name: string;
  value: number;
  color: string;
};

type PieChartData = SliceData[];

const innerProcessData: PieChartData = [
  { name: 'Discuss', value: 25, color: '#3b82f6' },
  { name: 'Design', value: 25, color: '#8b5cf6' },
  { name: 'Deploy', value: 25, color: '#10b981' },
  { name: 'Discover', value: 25, color: '#f59e0b' },
];

const outerProcessData: PieChartData = [
  { name: 'Listen', value: 12.5, color: '#60a5fa' },
  { name: 'Explain', value: 12.5, color: '#818cf8' },
  { name: 'Generate', value: 12.5, color: '#a78bfa' },
  { name: 'Revise', value: 12.5, color: '#c084fc' },
  { name: 'Launch', value: 12.5, color: '#34d399' },
  { name: 'Monitor', value: 12.5, color: '#4ade80' },
  { name: 'Gather', value: 12.5, color: '#fbbf24' },
  { name: 'Analyze', value: 12.5, color: '#fcd34d' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3">
        <p className="font-semibold" style={{ color: payload[0].payload.color }}>
          {payload[0].name}
        </p>
      </div>
    );
  }
  return null;
};

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, payload }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      className="text-sm md:text-base font-bold pointer-events-none select-none"
    >
      {name}
    </text>
  );
};

export default function TheProcessPage() {

  const [currentAngle, setCurrentAngle] = useState(0);
  


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:ora-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => setCurrentAngle(currentAngle + 10)}>Hello</button>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The Process
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our proven methodology for delivering exceptional results
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
        > 
          <ResponsiveContainer width="100%" height={600}>
            <PieChart>
              <defs>
                {innerProcessData.map((entry, index) => (
                  <filter key={`inner-shadow-${index}`} id={`inner-shadow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3" />
                  </filter>
                ))}
                {outerProcessData.map((entry, index) => (
                  <filter key={`outer-shadow-${index}`} id={`outer-shadow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3" />
                  </filter>
                ))}
              </defs>
              {/* Outer donut chart - 8 segments, 60% to 80% */}
              <Pie
                data={outerProcessData}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                dataKey="value"
                label={CustomLabel}
                labelLine={false}
                startAngle={currentAngle}
                endAngle={currentAngle+360}
                >
                {outerProcessData.map((entry, index) => (
                  <Cell
                    key={`outer-cell-${index}`}
                    fill={entry.color}
                    filter={`url(#outer-shadow-${index})`}
                  />
                ))}
              </Pie>
              {/* Inner pie chart - 4 segments, 0% to 50% */}
              <Pie
                data={innerProcessData}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius="50%"
                dataKey="value"
                label={CustomLabel}
                labelLine={false}
                startAngle={currentAngle}
                endAngle={currentAngle+360}
                animationDuration={1000}
                isAnimationActive={true}
                animationEasing="ease-in-out"
              >
                {innerProcessData.map((entry, index) => (
                  <Cell
                    key={`inner-cell-${index}`}
                    fill={entry.color}
                    filter={`url(#inner-shadow-${index})`}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </m.div>

        {/* Description section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 md:p-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our process is a dynamic, iterative journey that balances strategic planning with agile execution.
              The inner core represents our four fundamental phases, while the outer ring encompasses the continuous
              activities that ensure quality and alignment throughout the project lifecycle.
            </p>
          </div>
        </m.div>
      </div>
    </div>
  );
}

