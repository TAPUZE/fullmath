import React from 'react';
import FormulaBox from '../math/FormulaBox';

/**
 * StepByStep - Reusable component for displaying step-by-step solutions
 * Provides consistent styling for mathematical problem solving steps
 */
const StepByStep = ({ 
  title = 'פתרון:',
  steps = [],
  variant = 'default',
  showStepNumbers = true,
  className = '',
  titleClassName = ''
}) => {
  // Variant configurations
  const variantConfigs = {
    default: {
      container: 'border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 my-6',
      titleColor: 'text-gray-800',
      stepColor: 'bg-blue-500 text-white'
    },
    highlighted: {
      container: 'border border-blue-200 rounded-lg p-6 bg-blue-50 space-y-4 my-6 shadow-sm',
      titleColor: 'text-blue-800',
      stepColor: 'bg-blue-600 text-white'
    },
    compact: {
      container: 'border border-gray-200 rounded-lg p-3 bg-gray-50 space-y-2 my-4',
      titleColor: 'text-gray-700',
      stepColor: 'bg-gray-500 text-white'
    },
    solution: {
      container: 'border border-green-200 rounded-lg p-4 bg-green-50 space-y-3 my-6',
      titleColor: 'text-green-800',
      stepColor: 'bg-green-600 text-white'
    },
    example: {
      container: 'border border-yellow-200 rounded-lg p-4 bg-yellow-50 space-y-3 my-6',
      titleColor: 'text-yellow-800',
      stepColor: 'bg-yellow-600 text-white'
    }
  };

  const config = variantConfigs[variant] || variantConfigs.default;

  return (
    <div className={`${config.container} ${className}`}>
      {title && (
        <p className={`font-medium ${config.titleColor} ${titleClassName}`}>
          <strong>{title}</strong>
        </p>
      )}
      
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="space-y-2">
            {step.title && (
              <div className="flex items-start">
                {showStepNumbers && (
                  <span className={`
                    inline-flex items-center justify-center w-6 h-6 
                    ${config.stepColor} text-sm font-bold rounded-full mr-3 mt-0.5
                  `}>
                    {index + 1}
                  </span>
                )}
                <p className="font-medium">
                  <strong>{step.title}</strong>
                </p>
              </div>
            )}
            
            {step.content && (
              <p className={showStepNumbers && step.title ? 'mr-9' : ''}>
                {step.content}
              </p>
            )}
            
            {step.formula && (
              <div className={showStepNumbers && step.title ? 'mr-9' : ''}>
                <FormulaBox inline>{step.formula}</FormulaBox>
              </div>
            )}
            
            {step.explanation && (
              <p className={`text-sm text-gray-600 ${showStepNumbers && step.title ? 'mr-9' : ''}`}>
                {step.explanation}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepByStep;
