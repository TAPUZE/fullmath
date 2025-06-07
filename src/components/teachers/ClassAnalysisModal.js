import React from 'react';

const ClassAnalysisModal = ({ 
  classData, 
  isOpen, 
  onClose, 
  aiAnalysisResults, 
  aiAnalysisLoading, 
  onAnalyzeClass, 
  onGenerateReport 
}) => {
  if (!isOpen || !classData) return null;

  const classAnalysisKey = `class_${classData.id}`;
  const analysisResult = aiAnalysisResults[classAnalysisKey];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-4" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{classData.name}</h3>
            <p className="text-gray-600">{classData.students} תלמידים • ממוצע כיתה: {classData.averageScore}%</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Class Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{classData.students}</div>
            <div className="text-sm text-gray-600">סה״כ תלמידים</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{classData.activeStudents}</div>
            <div className="text-sm text-gray-600">פעילים</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{classData.averageProgress}%</div>
            <div className="text-sm text-gray-600">התקדמות ממוצעת</div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{classData.averageScore}%</div>
            <div className="text-sm text-gray-600">ציון ממוצע</div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="mb-6 space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">התקדמות ממוצעת</span>
              <span className="text-sm text-gray-500">{classData.averageProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-300" 
                style={{ width: `${classData.averageProgress}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">ציון ממוצע</span>
              <span className="text-sm text-gray-500">{classData.averageScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-green-600 h-3 rounded-full transition-all duration-300" 
                style={{ width: `${classData.averageScore}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* AI Analysis Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
            <span className="ml-2">🤖</span>
            ניתוח AI מתקדם - כיתה {classData.name}
          </h4>
          
          {!analysisResult ? (
            <div className="text-center">
              <p className="text-gray-600 mb-4">קבל ניתוח מפורט ומותאם אישית עבור הכיתה</p>
              <button 
                onClick={() => onAnalyzeClass(classData)}
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
                <p className="text-gray-700">{analysisResult.overview}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border">
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="ml-2">💪</span>
                    נקודות חוזק של הכיתה
                  </h5>
                  <ul className="space-y-1">
                    {analysisResult.strengths.map((strength, index) => (
                      <li key={index} className="text-green-700 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border">
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="ml-2">🎯</span>
                    המלצות AI
                  </h5>
                  <ul className="space-y-1">
                    {analysisResult.recommendations.map((rec, index) => (
                      <li key={index} className="text-blue-700 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full ml-2"></span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border">
                <h5 className="font-semibold text-gray-800 mb-2">תחזית התקדמות</h5>
                <p className="text-gray-700">{analysisResult.prediction}</p>
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
            onClick={() => onGenerateReport('classAnalysis', classData)}
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

export default ClassAnalysisModal;
