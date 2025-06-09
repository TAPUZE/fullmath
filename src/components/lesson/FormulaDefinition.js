import React from 'react';
import FormulaBox from '../math/FormulaBox';

/**
 * FormulaDefinition - Reusable component for displaying mathematical formulas with consistent styling
 * Wraps the existing FormulaBox component with additional structure and styling options
 */
const FormulaDefinition = ({ 
  title = 'נוסחה:',
  formula,
  description,
  centered = true,
  highlighted = false,
  showTitle = true,
  variant = 'default',
  className = '',
  formulaClassName = '',
  containerClassName = ''
}) => {
  // Variant configurations
  const variantConfigs = {
    default: {
      container: 'my-4',
      titleColor: 'text-indigo-700',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    highlighted: {
      container: 'my-6 p-4 bg-blue-50 border border-blue-200 rounded-lg',
      titleColor: 'text-blue-700',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300'
    },
    compact: {
      container: 'my-2',
      titleColor: 'text-gray-700',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    },
    emphasized: {
      container: 'my-6 p-6 bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl shadow-sm',
      titleColor: 'text-purple-700',
      bgColor: 'bg-white',
      borderColor: 'border-purple-300'
    }
  };

  const config = variantConfigs[variant] || variantConfigs.default;
  const alignmentClass = centered ? 'text-center' : '';

  return (
    <div className={`${config.container} ${alignmentClass} ${containerClassName}`}>
      {showTitle && title && (
        <h4 className={`text-lg font-semibold mb-3 ${config.titleColor}`}>
          {title}
        </h4>
      )}
      
      <div className={`
        ${highlighted ? `p-4 rounded-lg ${config.bgColor} border ${config.borderColor}` : ''}
        ${className}
      `}>
        <FormulaBox className={formulaClassName}>
          {formula}
        </FormulaBox>
      </div>
      
      {description && (
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default FormulaDefinition;
