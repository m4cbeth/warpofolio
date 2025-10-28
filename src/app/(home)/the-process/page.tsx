'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { m } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';

type SliceData = {
  name: string;
  value: number;
  color: string;
};

type PieChartData = SliceData[];

const innerProcessData: PieChartData = [
  { name: 'Discuss', value: 25, color: '#3b82f6' },
  { name: 'Discover', value: 25, color: '#f59e0b' },
  { name: 'Deploy', value: 25, color: '#10b981' },
  { name: 'Design', value: 25, color: '#8b5cf6' },
];

const outerProcessData: PieChartData = [
  { name: 'Explain', value: 12.5, color: '#818cf8' },
  { name: 'Listen', value: 12.5, color: '#60a5fa' },
  { name: 'Analyze', value: 12.5, color: '#fcd34d' },
  { name: 'Gather', value: 12.5, color: '#fbbf24' },
  { name: 'Monitor', value: 12.5, color: '#4ade80' },
  { name: 'Launch', value: 12.5, color: '#34d399' },
  { name: 'Revise', value: 12.5, color: '#c084fc' },
  { name: 'Generate', value: 12.5, color: '#a78bfa' },
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

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name }: any) => {
  const RADIAN = Math.PI / 180;

  // Parse numeric values for cx and cy
  const parseValue = (val: number | string): number => {
    if (typeof val === 'number') return val;
    const parsed = parseFloat(val.toString().replace('%', ''));
    return isNaN(parsed) ? 0 : parsed;
  };

  const cxNum = parseValue(cx);
  const cyNum = parseValue(cy);

  // Parse radius values - handle both numbers and percentage strings
  const parseRadius = (r: number | string, maxRadius: number): number => {
    if (typeof r === 'number') return r;
    if (typeof r === 'string' && r.endsWith('%')) {
      const percent = parseFloat(r) / 100;
      return maxRadius * percent;
    }
    return 0;
  };

  // Calculate max radius from cx (assuming circle is centered)
  const maxRadius = cxNum * 0.8; // 80% of container

  const innerRad = parseRadius(innerRadius, maxRadius);
  const outerRad = parseRadius(outerRadius, maxRadius);
  const radius = innerRad + (outerRad - innerRad) * 0.5;

  const x = cxNum + radius * Math.cos(-midAngle * RADIAN);
  const y = cyNum + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cxNum ? 'start' : 'end'}
      dominantBaseline="central"
      className="text-sm md:text-base font-bold pointer-events-none select-none drop-shadow-lg"
      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
    >
      {name}
    </text>
  );
};

export default function TheProcessPage() {
  const [currentPosition, setCurrentPosition] = useState(0);

  const goToPosition = (newPosition: number) => {
    const wrappedPosition = ((newPosition % 8) + 8) % 8;
    setCurrentPosition(wrappedPosition);
  };

  const goNext = () => goToPosition(currentPosition + 1);
  const goPrevious = () => goToPosition(currentPosition - 1);

  // Calculate active segments based on current position
  // Each position highlights one outer segment (0-7) and corresponding inner segment
  const activeOuter = currentPosition;
  const activeInner = Math.floor(activeOuter / 2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The Process
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our proven methodology for delivering exceptional results
          </p>
        </m.div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 relative">
          {/* Top Position Marker */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="flex flex-col items-center">
              <ArrowUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 shadow-md mt-1">
                Focus
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={600}>
            <PieChart key={`chart-${activeOuter}`}>
              <defs>
                {/* Active highlights */}
                <filter id="active-highlight" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.4" />
                </filter>
                <filter id="active-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                  <feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" result="glow" />
                </filter>
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
              >
                {outerProcessData.map((entry, index) => {
                  const isActive = index === activeOuter;
                  return (
                    <Cell
                      key={`outer-cell-${index}-${entry.name}`}
                      fill={entry.color}
                      opacity={isActive ? 1 : 0.5}
                      filter={isActive ? 'url(#active-highlight)' : `url(#outer-shadow-${index})`}
                      style={{
                        transition: 'opacity 0.1s ease',
                      }}
                    />
                  );
                })}
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
              >
                {innerProcessData.map((entry, index) => {
                  const isActive = index === activeInner;
                  return (
                    <Cell
                      key={`inner-cell-${index}-${entry.name}`}
                      fill={entry.color}
                      opacity={isActive ? 1 : 0.6}
                      filter={isActive ? 'url(#active-highlight)' : `url(#inner-shadow-${index})`}
                      style={{
                        transition: 'opacity 0.1s ease',
                      }}
                    />
                  );
                })}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={goPrevious}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                Step {currentPosition + 1} of 8
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {outerProcessData[activeOuter]?.name || 'Loading...'}
              </div>
            </div>

            <button
              onClick={goNext}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Next step"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {outerProcessData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPosition(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeOuter
                  ? 'bg-blue-600 w-8 scale-110'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>

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

