import React from 'react';

const CoordinateSystem = ({ 
  viewBox = "0 0 200 150",
  className = "w-64 h-48",
  gridId = "defaultGrid",
  showGrid = true,
  points = [],
  lines = [],
  title,
  axisLabels = { x: 'x', y: 'y' }
}) => {
  return (
    <div className="flex justify-center my-6">
      <svg viewBox={viewBox} className={`${className} border border-gray-300 rounded-lg bg-blue-50`}>
        {title && <title>{title}</title>}
        
        {/* Grid pattern */}
        {showGrid && (
          <defs>
            <pattern id={gridId} width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" className="stroke-gray-300 stroke-[0.5] opacity-50" strokeDasharray="2,2" />
            </pattern>
          </defs>
        )}
        
        {showGrid && <rect x="0" y="0" width="200" height="150" fill={`url(#${gridId})`} />}
        
        {/* Axes */}
        <line className="stroke-gray-800 stroke-[1.5]" x1="20" y1="130" x2="180" y2="130"/>
        <line className="stroke-gray-800 stroke-[1.5]" x1="20" y1="20" x2="20" y2="130"/>
        
        {/* Axis arrows */}
        <polygon points="180,130 175,125 175,135" fill="#1F2937"/>
        <polygon points="20,20 15,25 25,25" fill="#1F2937"/>
        
        {/* Axis labels */}
        <text className="text-[11px] fill-gray-800 font-semibold" x="185" y="135">{axisLabels.x}</text>
        <text className="text-[11px] fill-gray-800 font-semibold" x="25" y="15">{axisLabels.y}</text>

        {/* Points */}
        {points.map((point, index) => (
          <g key={index}>
            <circle 
              className={`fill-${point.color || 'blue'}-500 stroke-${point.color || 'blue'}-700`} 
              cx={point.x} 
              cy={point.y} 
              r={point.radius || 2.5} 
              strokeWidth="1"
            />
            {point.label && (
              <text 
                className={`text-[9px] fill-${point.color || 'blue'}-700 font-medium`} 
                x={point.x} 
                y={point.y} 
                dx={point.dx || 0} 
                dy={point.dy || -5}
              >
                {point.label}
              </text>
            )}
          </g>
        ))}

        {/* Lines */}
        {lines.map((line, index) => (
          <line 
            key={index}
            className={`stroke-${line.color || 'green'}-500 stroke-[${line.width || 1.8}]`} 
            x1={line.x1} 
            y1={line.y1} 
            x2={line.x2} 
            y2={line.y2}
          />
        ))}
      </svg>
    </div>
  );
};

export default CoordinateSystem;
