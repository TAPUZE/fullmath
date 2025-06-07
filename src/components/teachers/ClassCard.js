import React from 'react';

const ClassCard = ({ classData, onAnalyzeClass, aiAnalysisLoading }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{classData.name}</h3>
        <div className="flex gap-2">
          <button className="text-blue-600 hover:text-blue-800 text-sm">ערוך</button>
          <button className="text-red-600 hover:text-red-800 text-sm">מחק</button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">{classData.students}</p>
          <p className="text-sm text-gray-600">תלמידים</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">{classData.activeStudents}</p>
          <p className="text-sm text-gray-600">פעילים</p>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-600">התקדמות ממוצעת</span>
            <span className="text-sm font-medium">{classData.averageProgress}%</span>
          </div>
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full" 
              style={{ width: `${classData.averageProgress}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-600">ציון ממוצע</span>
            <span className="text-sm font-medium">{classData.averageScore}</span>
          </div>
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full" 
              style={{ width: `${classData.averageScore}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex gap-2">
          <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200">
            צפה בפרטי הכיתה
          </button>
          <button 
            onClick={() => onAnalyzeClass(classData)}
            disabled={aiAnalysisLoading}
            className="flex-1 bg-blue-100 text-blue-700 py-2 rounded-lg hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {aiAnalysisLoading ? 'מנתח...' : '🤖 ניתוח AI'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
