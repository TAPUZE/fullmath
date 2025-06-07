import React from 'react';
import { formatTime } from './ProgressDataManager';

const ProgressStatistics = ({ progressData }) => {
  if (!progressData.exerciseStats.length && !progressData.quizResults) {
    return null;
  }

  return (
    <div className="mb-6 p-4 bg-white rounded-lg border">
      <h4 className="text-lg font-medium mb-3 text-gray-600">סטטיסטיקות לימוד</h4>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        <div className="text-center p-2 bg-blue-50 rounded">
          <div className="font-semibold text-blue-600">זמן כולל</div>
          <div>{formatTime(progressData.totalTimeSpent)} דקות</div>
        </div>
        
        {progressData.exerciseStats.length > 0 && (
          <>
            <div className="text-center p-2 bg-green-50 rounded">
              <div className="font-semibold text-green-600">תרגילים</div>
              <div>{progressData.exerciseStats.length} תרגילים</div>
            </div>
            
            <div className="text-center p-2 bg-yellow-50 rounded">
              <div className="font-semibold text-yellow-600">ניסיונות</div>
              <div>{progressData.exerciseStats.reduce((sum, stat) => sum + (stat.attempts || 0), 0)} ניסיונות</div>
            </div>
            
            <div className="text-center p-2 bg-red-50 rounded">
              <div className="font-semibold text-red-600">שגיאות</div>
              <div>{progressData.exerciseStats.reduce((sum, stat) => sum + (stat.wrongAnswers?.length || 0), 0)} שגיאות</div>
            </div>
          </>
        )}
        
        {progressData.quizResults && (
          <div className="text-center p-2 bg-purple-50 rounded">
            <div className="font-semibold text-purple-600">ציון בוחן</div>
            <div>{progressData.quizResults.score}/{progressData.quizResults.total}</div>
          </div>
        )}
      </div>
      
      {/* Detailed Exercise Stats */}
      {progressData.exerciseStats.length > 0 && (
        <div className="mt-4">
          <h5 className="font-medium mb-2 text-gray-600">פירוט תרגילים:</h5>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {progressData.exerciseStats.map((stat, index) => (
              <div key={index} className="text-xs p-2 bg-gray-50 rounded flex justify-between">
                <span>תרגיל {stat.exerciseId}</span>
                <span>
                  {stat.attempts} ניסיונות, {stat.wrongAnswers?.length || 0} שגיאות, {formatTime(stat.timeSpent || 0)} דקות
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressStatistics;
