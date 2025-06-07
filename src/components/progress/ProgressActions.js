import React from 'react';

const ProgressActions = ({ 
  isCompleted, 
  markAsCompleted, 
  markAsNotCompleted, 
  resetProgressData,
  nextLessonUrl, 
  menuUrl 
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center">
      <button
        onClick={markAsCompleted}
        className={`w-full sm:w-auto font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-75 ${
          isCompleted 
            ? 'bg-green-600 text-white focus:ring-green-400' 
            : 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-400'
        }`}
      >
        {isCompleted ? '✓ הושלם' : 'סמן כהושלם'}
      </button>
      
      <button
        onClick={markAsNotCompleted}
        className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
      >
        סמן כלא הושלם
      </button>
      
      <button
        onClick={resetProgressData}
        className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
      >
        מחק נתוני התקדמות
      </button>
      
      {nextLessonUrl && (
        <a
          href={nextLessonUrl}
          className="w-full sm:w-auto text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          השיעור הבא &rarr;
        </a>
      )}
      
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
