import React from 'react';

/**
 * StandardButtons - Reusable button group for exercises and interactive content
 * Provides consistent styling and behavior for check/solution buttons
 */
const StandardButtons = ({ 
  onCheck, 
  onShowSolution, 
  checkText = "בדוק תשובה", 
  solutionText = "הצג פתרון",
  checkDisabled = false,
  solutionDisabled = false,
  layout = "horizontal", // "horizontal" or "vertical"
  className = ""
}) => {
  const layoutClass = layout === "vertical" ? "flex-col space-y-2" : "flex-row space-x-2";
  
  return (
    <div className={`standard-buttons flex ${layoutClass} ${className}`}>
      {onCheck && (
        <button
          onClick={onCheck}
          disabled={checkDisabled}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out"
        >
          {checkText}
        </button>
      )}
      
      {onShowSolution && (
        <button
          onClick={onShowSolution}
          disabled={solutionDisabled}
          className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out"
        >
          {solutionText}
        </button>
      )}
    </div>
  );
};

export default StandardButtons;
