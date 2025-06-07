import React from 'react';

const ReportsGrid = ({ onGenerateReport, aiAnalysisLoading, studentsData, classesData }) => {
  const reports = [
    {
      id: 'weeklyReport',
      title: '📊 דוח התקדמות שבועי',
      description: 'ניתוח AI של ההתקדמות בשבוע האחרון עם תובנות והמלצות',
      color: 'bg-blue-500 hover:bg-blue-600',
      data: studentsData
    },
    {
      id: 'difficultTopics',
      title: '🎯 ניתוח נושאים קשים',
      description: 'זיהוי אוטומטי של נושאים שמהווים אתגר עם המלצות הוראה',
      color: 'bg-green-500 hover:bg-green-600',
      data: studentsData
    },
    {
      id: 'attendanceReport',
      title: '📈 דוח נוכחות דיגיטלית',
      description: 'מעקב חכם אחר פעילות התלמידים עם דפוסי למידה',
      color: 'bg-purple-500 hover:bg-purple-600',
      data: studentsData
    },
    {
      id: 'performanceComparison',
      title: '⚖️ השוואת ביצועים',
      description: 'השוואה חכמה בין כיתות ותלמידים עם תובנות',
      color: 'bg-yellow-500 hover:bg-yellow-600',
      data: { students: studentsData, classes: classesData }
    },
    {
      id: 'detailedActivity',
      title: '🔍 דוח פעילות מפורט',
      description: 'ניתוח מעמיק של פעילויות עם המלצות פדגוגיות',
      color: 'bg-red-500 hover:bg-red-600',
      data: studentsData
    },
    {
      id: 'dataExport',
      title: '📋 ייצוא נתונים',
      description: 'ייצוא חכם של נתונים עם סיכומים אוטומטיים',
      color: 'bg-gray-500 hover:bg-gray-600',
      data: { students: studentsData, classes: classesData }
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">דוחות ואנליטיקה מבוססת AI</h2>
      <p className="text-gray-600 mb-6">כאן ניתן לצפות בדוחות מפורטים ואנליזות חכמות על ביצועי התלמידים והכיתות.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div key={report.id} className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{report.title}</h3>
            <p className="text-gray-600 mb-4">{report.description}</p>
            <button 
              onClick={() => onGenerateReport(report.id, report.data)}
              disabled={aiAnalysisLoading}
              className={`${report.color} text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed w-full`}
            >
              {aiAnalysisLoading ? 'מניח דוח...' : 'צור דוח AI'}
            </button>
          </div>
        ))}
      </div>

      {/* AI Analysis Status */}
      {aiAnalysisLoading && (
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 ml-3"></div>
            <p className="text-blue-800 font-medium">AI מנתח את הנתונים... אנא המתן</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsGrid;
