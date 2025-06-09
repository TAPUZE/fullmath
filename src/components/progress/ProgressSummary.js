import React from 'react';

/**
 * ProgressSummary - Reusable progress display component
 * Used across all questionnaire pages to show completion statistics
 */
const ProgressSummary = ({ 
  progressStats, 
  title = "סיכום התקדמות",
  questionnaireName = "",
  accentColor = "blue", // "blue", "green", "purple"
  className = ""
}) => {
  const completionPercentage = progressStats.total > 0 
    ? Math.round((progressStats.completed / progressStats.total) * 100) 
    : 0;

  const colorClasses = {
    blue: {
      total: 'text-blue-600',
      completed: 'text-green-600',
      started: 'text-yellow-600',
      notStarted: 'text-gray-600',
      progress: 'bg-blue-600'
    },
    green: {
      total: 'text-green-600',
      completed: 'text-green-600',
      started: 'text-yellow-600',
      notStarted: 'text-gray-600',
      progress: 'bg-green-600'
    },
    purple: {
      total: 'text-purple-600',
      completed: 'text-green-600',
      started: 'text-yellow-600',
      notStarted: 'text-gray-600',
      progress: 'bg-purple-600'
    }
  };

  const colors = colorClasses[accentColor] || colorClasses.blue;

  return (
    <div className={`progress-summary bg-white rounded-lg shadow-md p-6 mb-8 ${className}`}>
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        {title} {questionnaireName}
      </h2>
      
      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="text-center">
          <div className={`text-2xl font-bold ${colors.total}`}>
            {progressStats.total}
          </div>
          <div className="text-sm text-gray-600">סה״כ שיעורים</div>
        </div>
        
        <div className="text-center">
          <div className={`text-2xl font-bold ${colors.completed}`}>
            {progressStats.completed}
          </div>
          <div className="text-sm text-gray-600">הושלמו</div>
        </div>
        
        <div className="text-center">
          <div className={`text-2xl font-bold ${colors.started}`}>
            {progressStats.started}
          </div>
          <div className="text-sm text-gray-600">החלו</div>
        </div>
        
        <div className="text-center">
          <div className={`text-2xl font-bold ${colors.notStarted}`}>
            {progressStats.notStarted}
          </div>
          <div className="text-sm text-gray-600">לא החלו</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>התקדמות כללית</span>
          <span>{completionPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className={`${colors.progress} h-3 rounded-full transition-all duration-300`}
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSummary;
