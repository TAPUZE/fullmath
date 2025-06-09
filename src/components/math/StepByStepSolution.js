import React from 'react';
import FormulaBox from './FormulaBox';

const StepByStepSolution = ({ 
  title = "פתרון מלא:",
  steps = [],
  variant = "solution", // "solution", "example", "explanation"
  showNumbers = true
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'example':
        return 'bg-blue-50 border-blue-200';
      case 'explanation':
        return 'bg-green-50 border-green-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className={`border rounded-lg p-4 space-y-3 ${getVariantStyles()}`}>
      <p className="font-semibold text-gray-800">{title}</p>
      <div className="space-y-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-2">
            {showNumbers && (
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center mt-0.5">
                {index + 1}
              </span>
            )}
            <div className="flex-1">
              {typeof step === 'string' ? (
                <p>{step}</p>
              ) : step.formula ? (
                <div>
                  {step.step && <p className="mb-1">{step.step}</p>}
                  <FormulaBox>{step.formula}</FormulaBox>
                </div>
              ) : (
                <div>
                  {step.step && <p className="mb-1">{step.step}</p>}
                  {step.calculation && <p className="text-sm text-gray-600">{step.calculation}</p>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepByStepSolution;
