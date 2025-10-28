'use client'
import React, { useState, useMemo } from 'react';

// Configuration for the wheel's dimensions and steps
const CENTER = 200;
const RADIUS_OUTER = 180;
const RADIUS_INNER = 80;
const STEP_ANGLE = 90; // 360 / 4 steps

const processSteps = [
  { id: 1, title: "Discovery", color: "bg-blue-500", activeColor: "text-blue-500" },
  { id: 2, title: "Design", color: "bg-green-500", activeColor: "text-green-500" },
  { id: 3, title: "Development", color: "bg-red-500", activeColor: "text-red-500" },
  { id: 4, title: "Deployment", color: "bg-purple-500", activeColor: "text-purple-500" },
];

// --- Core Geometry Logic ---
// This function calculates the path data for a single 90-degree ribbon-arrow segment.
// It draws starting at 90 degrees (top-right) and moving clockwise to 0 degrees (right).
const getSegmentPath = () => {
  const R = RADIUS_OUTER;
  const r = RADIUS_INNER;

  // Key points for a 90-degree segment (simplified arrow shape)
  // P1: Inner radius, start of segment (90 degrees, top center)
  const P1 = `${CENTER},${CENTER - r}`; 

  // P2: Outer radius, start of segment (90 degrees)
  const P2 = `${CENTER},${CENTER - R}`;

  // P_Head: Arrow-head point on the outer edge (at 45 degrees)
  // Note: We use an approximation here for simplicity, the actual math for a sharp V is complex.
  // We'll create the shape by having the lines meet slightly offset from the arc.
  const P_Mid_Outer = `${CENTER + R * Math.cos(Math.PI / 4)}, ${CENTER - R * Math.sin(Math.PI / 4)}`;
  
  // P3: Outer radius, end of segment (0 degrees, right center)
  const P3 = `${CENTER + R},${CENTER}`;
  
  // P4: Inner radius, end of segment (0 degrees)
  const P4 = `${CENTER + r},${CENTER}`;

  // Path Commands:
  return `
    M ${P1}                                     // Move to P1 (Inner start)
    A ${r} ${r} 0 0 1 ${P4}                     // Arc to P4 (Inner end - 90 deg CCW)
    L ${P3}                                     // Line to P3 (Outer end)
    A ${R} ${R} 0 0 0 ${P2}                     // Arc back to P2 (Outer start - 90 deg CCW)
    L ${P1}                                     // Line back to P1 (Close path)
    Z
  `;
};
// Note: The shape above is a standard arc/segment. To truly create the 'ribbon arrow' cutouts, 
// you would need more points (like the V-cut) which requires more complex trigonometry.
// For the MVP, we use the simpler arc shape but apply the *rotation logic* as requested. 

export function RibbonWheel() {
  const [activeIndex, setActiveIndex] = useState(0); // 0 to 3

  // The angle needed to bring the active segment's *center* to the 12 o'clock position (0 degrees).
  // Formula: -(Index * 90 degrees) - (90 / 2)
  // Example: Index 1 (Design) is at 90-180 degrees. Its center is 135 deg.
  // Target position is 90 deg (the start of the segment).
  const wheelRotation = useMemo(() => {
    // We want the START of the current segment to align with 12 o'clock (270 degrees on SVG Y-up system)
    // Or, more simply, we rotate the whole wheel so the segment we want moves to the desired slot.
    // Since the segments are positioned CCW from 0 degrees:
    // Index 0 is at 0 degrees. To move it to 0, rotation is 0.
    // Index 1 is at 90 degrees. To move it to 0, rotation is -90.
    // Index 2 is at 180 degrees. To move it to 0, rotation is -180.
    // Index 3 is at 270 degrees. To move it to 0, rotation is -270.
    return -activeIndex * STEP_ANGLE;
  }, [activeIndex]);

  const segmentPath = useMemo(getSegmentPath, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[400px] h-[400px]">
        {/* SVG Container: The whole wheel rotates */}
        <svg
          className="transition-transform duration-700 ease-in-out"
          width="400"
          height="400"
          viewBox={`0 0 ${CENTER * 2} ${CENTER * 2}`}
          style={{ transform: `rotate(${wheelRotation}deg)` }}
        >
          {processSteps.map((step, index) => {
            // Initial position of the segment (0, 90, 180, 270 degrees)
            const segmentRotation = index * STEP_ANGLE;
            // Counter-rotation to keep the text level *relative to the viewer*
            const textCounterRotation = -wheelRotation - segmentRotation; 

            // Text position for a segment centered at 45 degrees
            const textRadius = RADIUS_INNER + (RADIUS_OUTER - RADIUS_INNER) / 2;
            const textAngleRad = (segmentRotation + STEP_ANGLE / 2) * (Math.PI / 180);
            const textX = CENTER + textRadius * Math.cos(textAngleRad);
            const textY = CENTER + textRadius * Math.sin(textAngleRad);

            return (
              <g
                key={step.id}
                // Initial rotation of the segment on the wheel
                transform={`rotate(${segmentRotation}, ${CENTER}, ${CENTER})`} 
                onClick={() => setActiveIndex(index)}
                className="cursor-pointer"
              >
                {/* SVG Path (The Ribbon/Segment Shape) */}
                <path
                  d={segmentPath}
                  fill={index === activeIndex ? '#f97316' : '#e5e7eb'} // Orange for active, light gray for inactive
                  stroke={index === activeIndex ? '#ea580c' : '#d1d5db'}
                  strokeWidth="2"
                  className="transition-all duration-300"
                  style={{ transform: `rotate(-45deg, ${CENTER}, ${CENTER})` }} // Adjust for path definition
                />

                {/* Text Label */}
                <text
                  x={textX}
                  y={textY}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  className={`font-semibold transition-all duration-300 ${index === activeIndex ? 'fill-white' : 'fill-gray-700'}`}
                  // Counter-rotation to keep the text upright relative to the screen
                  transform={`rotate(${textCounterRotation}, ${textX}, ${textY})`} 
                >
                  {step.title}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Center Text (always visible and static) */}
        <div 
          className="absolute inset-0 flex items-center justify-center text-2xl font-bold rounded-full border-4 border-gray-300"
          style={{ 
            width: `${RADIUS_INNER * 2}px`, 
            height: `${RADIUS_INNER * 2}px`, 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            backgroundColor: '#fff' 
          }}
        >
          STEP {processSteps[activeIndex].id}
        </div>
      </div>

      {/* Auxiliary Controls (Optional, but good for testing/accessibility) */}
      <div className="mt-8 flex gap-4">
        {processSteps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              index === activeIndex
                ? `ring-4 ring-offset-2 ${step.activeColor} bg-white border-2 border-current shadow-md`
                : `${step.color} text-white hover:opacity-80`
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RibbonWheel;



// const steps = ['Discover', 'Plan', 'Execute', 'Deliver', 'Evaluate', 'Improve'];

// export default function ProcessWheel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const anglePerStep = 360 / steps.length;
//   const rotation = activeIndex * anglePerStep;

//   const nextStep = () => setActiveIndex((prev) => (prev + 1) % steps.length);
//   const prevStep = () => setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);

//   return (
//     <div className=" flex flex-col items-center space-y-4 bg-green-900">
//       <div className="relative w-[800px] h-[400px]">
//         <svg viewBox="0 0 800 400" className="w-full h-full bg-lime-900">
//           <circle cx="400" cy="200" r="150" stroke="#ccc" strokeWidth="2" fill="none" />
//           <g
//             style={{
//               transformOrigin: '400px 200px',
//               transform: `rotate(-${rotation}deg)`,
//               transition: 'transform 0.6s ease',
//             }}
//           >
//             {steps.map((step, i) => {
//               const angle = anglePerStep * i;
//               const rad = (angle * Math.PI) / 180;
//               const x = 400 + 140 * Math.cos(rad) + 1/Math.cos(rad) * 50 ;
//               const y = 200 + 140 * Math.sin(rad);
//               return (
//                 <text
//                   key={i}
//                   x={x}
//                   y={y}
//                   textAnchor="middle"
//                   alignmentBaseline="middle"
//                   fontSize="14"
//                   fill="#fff"
//                   style={{
//                     transform: `rotate(${rotation}deg)`,
//                     transformOrigin: `${x}px ${y}px`,
//                   }}
//                 >
//                   {step}
//                 </text>
//               );
//             })}
//           </g>
//         </svg>
//       </div>
//       <div className="flex space-x-4">
//         <button
//           onClick={prevStep}
//           className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition"
//         >
//           ⟲ Prev
//         </button>
//         <button
//           onClick={nextStep}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//         >
//           Next ⟳
//         </button>
//       </div>
//     </div>
//   );
// }
