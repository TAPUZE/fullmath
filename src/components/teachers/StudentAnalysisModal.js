import React from 'react';

const StudentAnalysisModal = ({ 
  student, 
  isOpen, 
  onClose, 
  aiAnalysisResults, 
  aiAnalysisLoading, 
  onAnalyzeStudent, 
  onGenerateReport 
}) => {
  if (!isOpen || !student) return null;

  const lessonNames = {
    'TrigonometryRightTriangleLesson': 'טריגונומטריה במשולש ישר זווית',
    'AlgebraQuadraticEquationsLesson': 'משוואות ריבועיות',
    'CalculusOptimizationLesson': 'אופטימיזציה בחשבון דיפרנציאלי',
    'GeometryCircleLesson': 'גיאומטריה - מעגל',
    'StatisticsProbabilityLesson': 'סטטיסטיקה והסתברות'
  };

  const progressPercentage = (student.completedLessons / student.totalLessons) * 100;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-4" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{student.name}</h3>
            <p className="text-gray-600">{student.email} • {student.class}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Student Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{student.completedLessons}</div>
            <div className="text-sm text-gray-600">שיעורים הושלמו</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{student.averageScore}%</div>
            <div className="text-sm text-gray-600">ציון ממוצע</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{student.timeSpent}</div>
            <div className="text-sm text-gray-600">דקות למידה</div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{Math.round(progressPercentage)}%</div>
            <div className="text-sm text-gray-600">התקדמות</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">התקדמות כללית</span>
            <span className="text-sm text-gray-500">{student.completedLessons}/{student.totalLessons}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-300" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Current Lesson */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
            <span className="ml-2">📚</span>
            שיעור נוכחי
          </h4>
          <p className="text-gray-700">{lessonNames[student.currentLesson] || student.currentLesson}</p>
          <p className="text-sm text-gray-500 mt-1">פעילות אחרונה: {student.lastActivity}</p>
        </div>

        {/* Strengths and Weaknesses */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
              <span className="ml-2">💪</span>
              נקודות חוזק
            </h4>
            <ul className="space-y-1">
              {student.strengths.map((strength, index) => (
                <li key={index} className="text-green-700 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-3 flex items-center">
              <span className="ml-2">🎯</span>
              תחומים לשיפור
            </h4>
            <ul className="space-y-1">
              {student.weaknesses.map((weakness, index) => (
                <li key={index} className="text-red-700 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full ml-2"></span>
                  {weakness}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AI Analysis Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
            <span className="ml-2">🤖</span>
            ניתוח AI מתקדם
          </h4>
          
          {!aiAnalysisResults[student.id] ? (
            <div className="text-center">
              <p className="text-gray-600 mb-4">קבל ניתוח מפורט ומותאם אישית עבור התלמיד</p>
              <button 
                onClick={() => onAnalyzeStudent(student)}
                disabled={aiAnalysisLoading}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto"
              >
                {aiAnalysisLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
                    AI מנתח...
                  </>
                ) : (
                  <>
                    <span className="ml-2">🔍</span>
                    הפעל ניתוח AI
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border">
                <h5 className="font-semibold text-gray-800 mb-2">סקירה כללית</h5>
                <p className="text-gray-700">{aiAnalysisResults[student.id].overview}</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border">
                <h5 className="font-semibold text-gray-800 mb-2">המלצות AI</h5>
                <ul className="space-y-1">
                  {aiAnalysisResults[student.id].recommendations.map((rec, index) => (
                    <li key={index} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4 border">
                <h5 className="font-semibold text-gray-800 mb-2">תחזית התקדמות</h5>
                <p className="text-gray-700">{aiAnalysisResults[student.id].prediction}</p>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            סגור
          </button>
          <button 
            onClick={() => onGenerateReport('studentAnalysis', student)}
            disabled={aiAnalysisLoading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            צור דוח מפורט
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentAnalysisModal;
