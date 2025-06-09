import React from 'react';

/**
 * GraphComponents - Coordinate system and graph visualization components
 * For analytic geometry lessons and mathematical function displays
 */

// Coordinate System Component
export const CoordinateSystem = ({ 
  width = 360, 
  height = 220, 
  viewBox = "-30 -85 170 110",
  showGrid = true,
  gridPattern = "dots", // "dots", "lines", "squares"
  axisColor = "#1F2937",
  gridColor = "#E0E0E0",
  className = "stroke-gray-700",
  children 
}) => {
  const gridId = `grid-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="flex justify-center items-center my-6 p-4 border border-gray-300 rounded-lg bg-white">
      <svg width={width} height={height} viewBox={viewBox} className={className}>
        <title>מערכת צירים</title>
        
        {showGrid && (
          <>
            <defs>
              <pattern id={gridId} width="10" height="10" patternUnits="userSpaceOnUse">
                {gridPattern === "lines" && (
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke={gridColor} strokeWidth="0.5" strokeDasharray="2,2" />
                )}
                {gridPattern === "dots" && (
                  <circle cx="5" cy="5" r="0.5" fill={gridColor} />
                )}
                {gridPattern === "squares" && (
                  <rect width="10" height="10" fill="none" stroke={gridColor} strokeWidth="0.3" />
                )}
              </pattern>
            </defs>
            <rect x="-25" y="-80" width="160" height="100" fill={`url(#${gridId})`} />
          </>
        )}
        
        {/* X-axis */}
        <line stroke={axisColor} strokeWidth="1.5" x1="-20" y1="0" x2="120" y2="0" />
        {/* Y-axis */}
        <line stroke={axisColor} strokeWidth="1.5" x1="0" y1="-75" x2="0" y2="15" />
        
        {/* Arrows */}
        <polygon points="120,0 115,-4 115,4" fill={axisColor} />
        <polygon points="0,-75 -4,-70 4,-70" fill={axisColor} />
        
        {/* Axis labels */}
        <text x="125" y="3" className="text-xs font-semibold fill-gray-800">x</text>
        <text x="5" y="-77" className="text-xs font-semibold fill-gray-800">y</text>
        
        {children}
      </svg>
    </div>
  );
};

// Point Component
export const Point = ({ 
  x, 
  y, 
  label, 
  color = "#3B82F6", 
  strokeColor, 
  radius = 2.5,
  labelOffset = { dx: -14, dy: -4 },
  labelColor = "blue-700"
}) => (
  <>
    <circle 
      cx={x} 
      cy={y} 
      r={radius} 
      fill={color} 
      stroke={strokeColor || color} 
    />
    {label && (
      <text 
        x={x} 
        y={y} 
        dx={labelOffset.dx} 
        dy={labelOffset.dy} 
        className={`text-xs font-medium fill-${labelColor}`}
      >
        {label}
      </text>
    )}
  </>
);

// Line Component
export const Line = ({ 
  x1, 
  y1, 
  x2, 
  y2, 
  color = "#D946EF", 
  strokeWidth = 2,
  strokeDasharray
}) => (
  <line 
    x1={x1} 
    y1={y1} 
    x2={x2} 
    y2={y2} 
    stroke={color} 
    strokeWidth={strokeWidth}
    strokeDasharray={strokeDasharray}
  />
);

// Slope Triangle Component
export const SlopeTriangle = ({ 
  point1, 
  point2, 
  color = "#2563EB",
  showLabels = true 
}) => (
  <>
    {/* Horizontal line */}
    <Line 
      x1={point1.x} 
      y1={point1.y} 
      x2={point2.x} 
      y2={point1.y} 
      color={color}
      strokeWidth={1.2}
      strokeDasharray="3,2"
    />
    {/* Vertical line */}
    <Line 
      x1={point2.x} 
      y1={point1.y} 
      x2={point2.x} 
      y2={point2.y} 
      color={color}
      strokeWidth={1.2}
      strokeDasharray="3,2"
    />
    {showLabels && (
      <>
        <text 
          x={(point1.x + point2.x) / 2} 
          y={point1.y + 12} 
          className="text-xs fill-blue-600 italic"
          textAnchor="middle"
        >
          x₂ - x₁
        </text>
        <text 
          x={point2.x + 18} 
          y={(point1.y + point2.y) / 2} 
          className="text-xs fill-blue-600 italic"
          textAnchor="middle"
        >
          y₂ - y₁
        </text>
      </>
    )}
  </>
);

// Slope Visualization Component
export const SlopeVisualization = ({ 
  points, 
  showSlopeTriangle = true, 
  lineColor = '#D946EF',
  width = 360,
  height = 220 
}) => {
  const [point1, point2] = points;
  
  return (
    <CoordinateSystem width={width} height={height}>
      {/* Points */}
      <Point 
        x={point1.x} 
        y={point1.y} 
        label="A(x₁,y₁)" 
        color="#3B82F6"
        labelColor="blue-700"
      />
      <Point 
        x={point2.x} 
        y={point2.y} 
        label="B(x₂,y₂)" 
        color="#EF4444"
        labelOffset={{ dx: 17, dy: -4 }}
        labelColor="red-700"
      />
      
      {/* Line connecting points */}
      <Line 
        x1={point1.x} 
        y1={point1.y} 
        x2={point2.x} 
        y2={point2.y} 
        color={lineColor}
      />
      
      {/* Slope triangle */}
      {showSlopeTriangle && (
        <SlopeTriangle point1={point1} point2={point2} />
      )}
    </CoordinateSystem>
  );
};

// Line Graph Component
export const LineGraph = ({ 
  slope, 
  yIntercept, 
  point, 
  title = "גרף פונקציה ליניארית",
  width = 300, 
  height = 200,
  lineColor = "#D946EF"
}) => {
  const viewBox = `0 -5 120 110`;
  
  return (
    <div className="flex flex-col items-center my-4 p-2 border border-gray-300 rounded-lg bg-white">
      <svg width={width} height={height} viewBox={viewBox} className="stroke-gray-600">
        <title>{title}</title>
        
        {/* Grid */}
        <defs>
          <pattern id={`grid-${slope}-${yIntercept}`} width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#E0E0E0" strokeWidth="0.5" strokeDasharray="2,2" />
          </pattern>
        </defs>
        <rect x="-15" y="-5" width="110" height="100" fill={`url(#grid-${slope}-${yIntercept})`} />
        
        {/* Axes */}
        <line stroke="#1F2937" strokeWidth="1.5" x1="0" y1="85" x2="100" y2="85" />
        <line stroke="#1F2937" strokeWidth="1.5" x1="15" y1="0" x2="15" y2="95" />
        
        {/* Axis labels */}
        <text x="103" y="85" dy="3" className="text-xs font-semibold fill-gray-800">x</text>
        <text x="15" y="-3" className="text-xs font-semibold fill-gray-800">y</text>
        
        {/* Line */}
        <line 
          x1="5" 
          y1={85 - (slope * (-1) + yIntercept) * 10} 
          x2="95" 
          y2={85 - (slope * 8 + yIntercept) * 10} 
          stroke={lineColor} 
          strokeWidth="2" 
        />
        
        {/* Point */}
        {point && (
          <Point 
            x={15 + point.x * 10} 
            y={85 - point.y * 10} 
            label={`(${point.x},${point.y})`}
            color="#10B981"
            labelOffset={{ dx: 10, dy: -3 }}
            labelColor="green-700"
          />
        )}
        
        {/* Y-intercept */}
        <Point 
          x={15} 
          y={85 - yIntercept * 10} 
          label={`(0,${yIntercept})`}
          color="#4B5563"
          labelOffset={{ dx: -10, dy: -2 }}
          labelColor="gray-600"
          radius={2}
        />
        
        {/* Grid labels */}
        <text x="25" y="85" dy="8" className="text-xs fill-gray-600">1</text>
        {point && (
          <text x="15" y={85 - point.y * 10} dy="3" dx="-6" className="text-xs fill-gray-600">
            {point.y}
          </text>
        )}
      </svg>
    </div>
  );
};

// Distance Visualization Component
export const DistanceVisualization = ({ 
  point1, 
  point2, 
  showDistanceTriangle = true,
  width = 360,
  height = 220 
}) => {
  return (
    <CoordinateSystem width={width} height={height}>
      {/* Points */}
      <Point 
        x={point1.x} 
        y={point1.y} 
        label={`A(${point1.x},${point1.y})`} 
        color="#3B82F6"
        labelColor="blue-700"
      />
      <Point 
        x={point2.x} 
        y={point2.y} 
        label={`B(${point2.x},${point2.y})`} 
        color="#EF4444"
        labelOffset={{ dx: 17, dy: -4 }}
        labelColor="red-700"
      />
      
      {/* Distance line */}
      <Line 
        x1={point1.x} 
        y1={point1.y} 
        x2={point2.x} 
        y2={point2.y} 
        color="#9333EA"
        strokeWidth={2}
      />
      
      {/* Right triangle for distance calculation */}
      {showDistanceTriangle && (
        <>
          <Line 
            x1={point1.x} 
            y1={point1.y} 
            x2={point2.x} 
            y2={point1.y} 
            color="#2563EB"
            strokeWidth={1.2}
            strokeDasharray="3,2"
          />
          <Line 
            x1={point2.x} 
            y1={point1.y} 
            x2={point2.x} 
            y2={point2.y} 
            color="#2563EB"
            strokeWidth={1.2}
            strokeDasharray="3,2"
          />
          
          {/* Right angle indicator */}
          <rect 
            x={point2.x - 5} 
            y={Math.min(point1.y, point2.y) - 5} 
            width="5" 
            height="5" 
            fill="none" 
            stroke="#2563EB" 
            strokeWidth="1"
          />
        </>
      )}
    </CoordinateSystem>
  );
};

// Midpoint Visualization Component
export const MidpointVisualization = ({ 
  point1, 
  point2, 
  showMidpoint = true,
  width = 360,
  height = 220 
}) => {
  const midpoint = {
    x: (point1.x + point2.x) / 2,
    y: (point1.y + point2.y) / 2
  };
  
  return (
    <CoordinateSystem width={width} height={height}>
      {/* Points */}
      <Point 
        x={point1.x} 
        y={point1.y} 
        label={`A(${point1.x},${point1.y})`} 
        color="#3B82F6"
        labelColor="blue-700"
      />
      <Point 
        x={point2.x} 
        y={point2.y} 
        label={`B(${point2.x},${point2.y})`} 
        color="#EF4444"
        labelOffset={{ dx: 17, dy: -4 }}
        labelColor="red-700"
      />
      
      {/* Line segment */}
      <Line 
        x1={point1.x} 
        y1={point1.y} 
        x2={point2.x} 
        y2={point2.y} 
        color="#10B981"
        strokeWidth={2}
      />
      
      {/* Midpoint */}
      {showMidpoint && (
        <Point 
          x={midpoint.x} 
          y={midpoint.y} 
          label={`M(${midpoint.x},${midpoint.y})`} 
          color="#F59E0B"
          labelOffset={{ dx: -14, dy: -8 }}
          labelColor="amber-700"
          radius={3}
        />
      )}
    </CoordinateSystem>
  );
};

export default {
  CoordinateSystem,
  Point,
  Line,
  SlopeTriangle,
  SlopeVisualization,
  LineGraph,
  DistanceVisualization,
  MidpointVisualization
};
