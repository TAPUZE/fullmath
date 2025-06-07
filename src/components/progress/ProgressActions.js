import React from 'react';

const ProgressActions = ({ 
  isCompleted, 
  toggleCompletion,
  allTasksCompleted,
  autoCompleted,
  resetProgressData,
  menuUrl 
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center">
      {/* Single toggle completion button */}
      <button
        onClick={toggleCompletion}
        className={`w-full sm:w-auto font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-75 ${
          isCompleted 
            ? 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-400' 
            : 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-400'
        }`}
        title={isCompleted ? "לחץ כדי לסמן את השיעור כלא הושלם" : "לחץ כדי לסמן את השיעור כהושלם"}
      >
        {isCompleted 
          ? (autoCompleted ? '✓ הושלם אוטומטית - לחץ לביטול' : '✓ הושלם - לחץ לביטול')
          : 'סמן כהושלם'
        }
      </button>
      
      {/* Auto-completion indicator */}
      {allTasksCompleted && !isCompleted && (
        <div className="w-full sm:w-auto text-sm text-green-600 font-medium py-2 px-3 bg-green-50 rounded-md border border-green-200 animate-pulse">
          🎉 כל המשימות הושלמו! השיעור יסומן כהושלם אוטומטית.
        </div>
      )}
      
      {/* Progress indicator */}
      {!allTasksCompleted && (
        <div className="w-full sm:w-auto text-sm text-blue-600 font-medium py-2 px-3 bg-blue-50 rounded-md border border-blue-200">
          📚 השלם את כל התרגילים והבוחן לסיום השיעור
        </div>
      )}
      
      <button
        onClick={resetProgressData}
        className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        title="מחק את כל נתוני ההתקדמות של השיעור"
      >
        מחק נתוני התקדמות
      </button>
        
      <a
        href={menuUrl || '/'}
        className="w-full sm:w-auto text-center bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
      >
        &larr; חזרה לתפריט השיעורים
      </a>
    </div>
  );
};

export default ProgressActions;
