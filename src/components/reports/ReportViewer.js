import React, { useState, useEffect } from 'react';
import { getStoredReports, saveReport, deleteReport } from '../../utils/reportStorage';

const ReportViewer = ({ 
  isOpen, 
  onClose, 
  currentReport = null,
  reportType = null,
  reportData = null 
}) => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [activeTab, setActiveTab] = useState('current');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (isOpen) {
      loadReports();
      if (currentReport) {
        setSelectedReport(currentReport);
        setActiveTab('current');
      }
    }
  }, [isOpen, currentReport]);

  const loadReports = () => {
    const storedReports = getStoredReports();
    setReports(storedReports);
  };

  const handleSaveReport = () => {
    if (currentReport && reportType) {
      const savedReport = saveReport(currentReport, reportType, reportData);
      setReports(prev => [savedReport, ...prev]);
      alert('הדוח נשמר בהצלחה!');
    }
  };

  const handleDeleteReport = (reportId) => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק את הדוח?')) {
      deleteReport(reportId);
      setReports(prev => prev.filter(r => r.id !== reportId));
      if (selectedReport && selectedReport.id === reportId) {
        setSelectedReport(null);
      }
    }
  };

  const handleExportReport = (report) => {
    const element = document.createElement('a');
    const file = new Blob([report.content], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${report.title}_${report.date}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const filteredReports = reports.filter(report =>
    report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">מערכת דוחות מתקדמת 📊</h2>
              <p className="text-blue-100 mt-1">צפייה, ניהול ושמירה של דוחות AI</p>
            </div>
            <button
              onClick={onClose}
              className="bg-blue-700 hover:bg-blue-800 p-2 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 bg-gray-50">
          <div className="flex">
            <button
              onClick={() => setActiveTab('current')}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'current'
                  ? 'border-blue-500 text-blue-600 bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              דוח נוכחי
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'history'
                  ? 'border-blue-500 text-blue-600 bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              היסטוריית דוחות ({reports.length})
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex h-[calc(90vh-200px)]">
          {/* Left Sidebar - Report List (for history tab) */}
          {activeTab === 'history' && (
            <div className="w-1/3 border-r border-gray-200 overflow-y-auto">
              <div className="p-4">
                {/* Search */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="חיפוש דוחות..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Report List */}
                <div className="space-y-2">
                  {filteredReports.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <p>אין דוחות שמורים</p>
                    </div>
                  ) : (
                    filteredReports.map((report) => (
                      <div
                        key={report.id}
                        onClick={() => setSelectedReport(report)}
                        className={`p-3 rounded-lg cursor-pointer border transition-colors ${
                          selectedReport?.id === report.id
                            ? 'bg-blue-50 border-blue-200'
                            : 'bg-white border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-lg ml-2">{getReportTypeIcon(report.type)}</span>
                            <div>
                              <h4 className="font-medium text-sm">{getReportTypeTitle(report.type)}</h4>
                              <p className="text-xs text-gray-500">{report.date}</p>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteReport(report.id);
                            }}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Main Content - Report Display */}
          <div className={`${activeTab === 'history' ? 'w-2/3' : 'w-full'} overflow-y-auto`}>
            <div className="p-6">
              {/* Current Report Tab */}
              {activeTab === 'current' && currentReport && (
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {getReportTypeIcon(reportType)} {getReportTypeTitle(reportType)}
                      </h3>
                      <p className="text-gray-600">נוצר: {new Date().toLocaleString('he-IL')}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={handleSaveReport}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        שמור דוח
                      </button>
                      <button
                        onClick={() => handleExportReport({ 
                          content: currentReport, 
                          title: getReportTypeTitle(reportType), 
                          date: new Date().toLocaleDateString('he-IL') 
                        })}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        יצא קובץ
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="prose max-w-none" style={{ direction: 'rtl' }}>
                      <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                        {currentReport}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* History Tab */}
              {activeTab === 'history' && (
                <div>
                  {selectedReport ? (
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {getReportTypeIcon(selectedReport.type)} {selectedReport.title}
                          </h3>
                          <p className="text-gray-600">נוצר: {selectedReport.date}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleExportReport(selectedReport)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            יצא קובץ
                          </button>
                          <button
                            onClick={() => handleDeleteReport(selectedReport.id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            מחק
                          </button>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="prose max-w-none" style={{ direction: 'rtl' }}>
                          <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                            {selectedReport.content}
                          </pre>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p className="text-lg">בחר דוח מהרשימה לצפייה</p>
                    </div>
                  )}
                </div>
              )}

              {/* No Current Report */}
              {activeTab === 'current' && !currentReport && (
                <div className="text-center py-12 text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-lg">אין דוח נוכחי לצפייה</p>
                  <p className="text-sm mt-2">צור דוח חדש מתוך לוח הבקרה</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportViewer;
