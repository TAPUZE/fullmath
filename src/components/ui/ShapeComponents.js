import React, { useState } from 'react';

/**
 * Enhanced ShapeComponents - Comprehensive geometric shape visualization system
 * Replaces redundant shape components across geometry lessons
 */

// Base SVG properties for consistent styling
const baseSvgProps = {
  className: "w-24 h-24 stroke-blue-500 stroke-2 fill-none overflow-visible",
  viewBox: "0 0 100 100"
};

const baseTextStyle = {
  fontFamily: 'sans-serif',
  fontSize: '10px',
  fill: '#1F2937',
  stroke: 'none',
  textAnchor: 'middle'
};

const labelStyle = {
  ...baseTextStyle,
  fontStyle: 'italic',
  fontSize: '9px'
};

// Individual shape visualizations
export const ShapeVisual = ({ shape, size = "medium", showLabels = true, customProps = {} }) => {
  const sizeMap = {
    small: "w-16 h-16",
    medium: "w-24 h-24", 
    large: "w-32 h-32"
  };

  const svgProps = {
    ...baseSvgProps,
    className: `${sizeMap[size]} stroke-blue-500 stroke-2 fill-none overflow-visible`,
    ...customProps
  };

  const renderShape = () => {
    switch (shape) {
      case 'triangle':
        return (
          <svg {...svgProps}>
            <polygon points="50,10 10,90 90,90" />
            {showLabels && (
              <>
                <text x="50" y="8" style={baseTextStyle}>A</text>
                <text x="5" y="95" style={baseTextStyle}>B</text>
                <text x="95" y="95" style={baseTextStyle}>C</text>
                <text x="50" y="95" style={labelStyle}>a</text>
                <text x="73" y="55" style={labelStyle} transform="rotate(56 70 50)">b</text>
                <text x="27" y="55" style={labelStyle} transform="rotate(-56 30 50)">c</text>
                <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="3,3" stroke="#6B7280"/>
                <text x="55" y="50" style={{...baseTextStyle, fontSize: '8px'}}>h</text>
              </>
            )}
          </svg>
        );

      case 'rectangle':
        return (
          <svg {...svgProps}>
            <rect x="10" y="25" width="80" height="50" />
            {showLabels && (
              <>
                <text x="8" y="23" style={baseTextStyle}>A</text>
                <text x="92" y="23" style={baseTextStyle}>B</text>
                <text x="92" y="80" style={baseTextStyle}>C</text>
                <text x="8" y="80" style={baseTextStyle}>D</text>
                <text x="50" y="20" style={labelStyle}>a</text>
                <text x="95" y="50" style={labelStyle}>b</text>
              </>
            )}
          </svg>
        );

      case 'square':
        return (
          <svg {...svgProps}>
            <rect x="20" y="20" width="60" height="60" />
            {showLabels && (
              <>
                <text x="18" y="18" style={baseTextStyle}>A</text>
                <text x="82" y="18" style={baseTextStyle}>B</text>
                <text x="82" y="85" style={baseTextStyle}>C</text>
                <text x="18" y="85" style={baseTextStyle}>D</text>
                <text x="50" y="15" style={labelStyle}>a</text>
              </>
            )}
          </svg>
        );

      case 'circle':
        return (
          <svg {...svgProps}>
            <circle cx="50" cy="50" r="40"/>
            {showLabels && (
              <>
                <line x1="50" y1="50" x2="90" y2="50" strokeWidth="1.5" stroke="red"/>
                <text x="70" y="45" style={{...baseTextStyle, fontSize: '9px', fill: 'red'}}>R</text>
                <circle cx="50" cy="50" r="2" fill="black"/>
              </>
            )}
          </svg>
        );

      case 'parallelogram':
        return (
          <svg {...svgProps}>
            <polygon points="20,70 75,70 90,30 35,30" />
            {showLabels && (
              <>
                <text x="30" y="25" style={baseTextStyle}>A</text>
                <text x="95" y="25" style={baseTextStyle}>B</text>
                <text x="80" y="75" style={baseTextStyle}>C</text>
                <text x="15" y="75" style={baseTextStyle}>D</text>
              </>
            )}
          </svg>
        );

      case 'rhombus':
        return (
          <svg {...svgProps}>
            <polygon points="50,10 85,50 50,90 15,50" />
            {showLabels && (
              <>
                <text x="50" y="8" style={baseTextStyle}>A</text>
                <text x="90" y="52" style={baseTextStyle}>B</text>
                <text x="50" y="95" style={baseTextStyle}>C</text>
                <text x="10" y="52" style={baseTextStyle}>D</text>
              </>
            )}
          </svg>
        );

      default:
        return (
          <div className={`${sizeMap[size]} bg-gray-200 rounded flex items-center justify-center text-xs`}>
            צורה
          </div>
        );
    }
  };

  return renderShape();
};

// Shape card with formula display
export const ShapeCard = ({ title, formulas, children, className = "" }) => (
  <div className={`shape-card bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 flex flex-wrap items-start ${className}`}>
    <div className="flex-1 min-w-200">
      <h4 className="text-xl font-semibold text-blue-600 mb-3">{title}</h4>
      <ul className="space-y-2">
        {formulas.map((formula, index) => (
          <li key={index}>
            <strong>{formula.label}:</strong> {formula.description}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex justify-center items-center mr-6 mb-4 min-h-100 flex-shrink-0">
      {children}
    </div>
  </div>
);

// Interactive shape selector
export const ShapeSelector = ({ 
  selectedShape, 
  onShapeChange, 
  shapes = [
    { key: 'triangle', name: 'משולש' },
    { key: 'rectangle', name: 'מלבן' },
    { key: 'square', name: 'ריבוע' },
    { key: 'circle', name: 'מעגל' }
  ],
  title = "בחר/י צורה להצגה כעזר חזותי:",
  className = ""
}) => {
  return (
    <div className={`shape-selector mb-6 p-4 bg-gray-100 rounded-lg ${className}`}>
      <h5 className="text-lg font-semibold mb-3 text-gray-800">{title}</h5>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {shapes.map(shape => (
          <button
            key={shape.key}
            onClick={() => onShapeChange(shape.key)}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              selectedShape === shape.key
                ? 'bg-blue-500 text-white transform -translate-y-1 shadow-md'
                : 'bg-blue-100 text-blue-600 border border-blue-300 hover:bg-blue-500 hover:text-white hover:transform hover:-translate-y-1 hover:shadow-sm'
            }`}
          >
            {shape.name}
          </button>
        ))}
      </div>
      <div className="min-h-40 bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4 flex justify-center items-center">
        <ShapeVisual shape={selectedShape} size="large" />
      </div>
    </div>
  );
};

// Hook for shape selector state management
export const useShapeSelector = (initialShape = 'triangle') => {
  const [selectedShape, setSelectedShape] = useState(initialShape);
  
  return {
    selectedShape,
    setSelectedShape,
    ShapeSelectorComponent: (props) => (
      <ShapeSelector 
        selectedShape={selectedShape} 
        onShapeChange={setSelectedShape}
        {...props}
      />
    )
  };
};



export default { ShapeVisual, ShapeCard, ShapeSelector, useShapeSelector };
