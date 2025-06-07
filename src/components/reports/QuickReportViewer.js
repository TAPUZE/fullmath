import React from 'react';

const QuickReportViewer = ({ 
  isOpen, 
  onClose, 
  reportContent,
  reportType,
  onSave,
  onOpenFullViewer 
}) => {
  const getReportTypeIcon = (type) => {
    const icons = {
      weeklyReport: '📊',
      difficultTopics: '🎯',
      attendanceReport: '📈',
      performanceComparison: '⚖️',
      detailedActivity: '🔍',
      dataExport: '📋',
      studentAnalysis: '👤'
    };
    return icons[type] || '📄';
  };

  const getReportTypeTitle = (type) => {
    const titles = {
      weeklyReport: 'דוח התקדמות שבועי',
      difficultTopics: 'ניתוח נושאים קשים',
      attendanceReport: 'דוח נוכחות דיגיטלית',
      performanceComparison: 'השוואת ביצועים',
      detailedActivity: 'דוח פעילות מפורט',
      dataExport: 'ייצוא נתונים',
      studentAnalysis: 'ניתוח תלמיד'
    };
    return titles[type] || 'דוח';
  };

  if (!isOpen || !reportContent) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="text-2xl">{getReportTypeIcon(reportType)}</span>
                {getReportTypeTitle(reportType)}
              </h2>
              <p className="text-blue-100 mt-1">נוצר: {new Date().toLocaleString('he-IL')}</p>
            </div>
            <button
              onClick={onClose}
              className="bg-blue-700 hover:bg-blue-800 p-2 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-gray-50 border-b border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              תוכן הדוח נוצר על ידי AI ומוכן לצפייה
            </div>
            <div className="flex gap-2">
              <button
                onClick={onSave}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                שמור
              </button>
              <button
                onClick={onOpenFullViewer}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4a1 1 0 011-1h4M4 16v4a1 1 0 001 1h4m8-16h4a1 1 0 011 1v4m-4 12h4a1 1 0 001-1v-4" />
                </svg>
                צפייה מלאה
              </button>
            </div>
          </div>
        </div>

        {/* Report Content */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(80vh - 200px)' }}>
          <div className="bg-white rounded-lg">
            <div className="prose max-w-none" style={{ direction: 'rtl' }}>
              <div className="text-gray-800 leading-relaxed">
                {reportContent.split('\n').map((line, index) => {
                  // Enhanced formatting for better readability
                  if (line.trim().startsWith('##')) {
                    return (
                      <h3 key={index} className="text-lg font-bold text-blue-800 mt-4 mb-2 border-b border-blue-200 pb-1">
                        {line.replace('##', '').trim()}
                      </h3>
                    );
                  }
                  if (line.trim().startsWith('#')) {
                    return (
                      <h2 key={index} className="text-xl font-bold text-blue-900 mt-6 mb-3">
                        {line.replace('#', '').trim()}
                      </h2>
                    );
                  }
                  if (line.trim().startsWith('-') || line.trim().startsWith('•')) {
                    return (
                      <li key={index} className="mr-4 mb-1 text-gray-700">
                        {line.replace(/^[-•]\s*/, '').trim()}
                      </li>
                    );
                  }
                  if (line.trim().match(/^\d+\./)) {
                    return (
                      <div key={index} className="mb-2 text-gray-700 font-medium">
                        {line.trim()}
                      </div>
                    );
                  }
                  if (line.trim() === '') {
                    return <br key={index} />;
                  }
                  return (
                    <p key={index} className="mb-2 text-gray-700 leading-relaxed">
                      {line.trim()}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-200 p-4">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div>
              דוח נוצר על ידי מערכת AI מתקדמת
            </div>
            <div className="flex gap-4">
              <span>אורך: {reportContent.length} תווים</span>
              <span>שורות: {reportContent.split('\n').length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickReportViewer;
