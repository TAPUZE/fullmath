import React, { useState, useEffect } from 'react';
import { getStoredReports, deleteReport, getReportStatistics } from '../../utils/reportStorage';

const ReportHistory = ({ onViewReport, onGenerateNewReport }) => {
  const [reports, setReports] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = () => {
    const storedReports = getStoredReports();
    const stats = getReportStatistics();
    setReports(storedReports);
    setStatistics(stats);
  };

  const handleDeleteReport = (reportId) => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק את הדוח?')) {
      deleteReport(reportId);
      loadReports();
    }
  };

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

  // Filter and sort reports
  const filteredReports = reports
    .filter(report => {
      const matchesSearch = 
        report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || report.type === filterType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.timestamp) - new Date(a.timestamp);
        case 'type':
          return a.type.localeCompare(b.type);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  const reportTypes = [
    { value: 'all', label: 'כל הסוגים' },
    { value: 'weeklyReport', label: 'דוחות שבועיים' },
    { value: 'studentAnalysis', label: 'ניתוחי תלמידים' },
    { value: 'difficultTopics', label: 'נושאים קשים' },
    { value: 'attendanceReport', label: 'דוחות נוכחות' },
    { value: 'performanceComparison', label: 'השוואות ביצועים' },
    { value: 'detailedActivity', label: 'פעילות מפורטת' },
    { value: 'dataExport', label: 'ייצוא נתונים' }
  ];

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 font-medium">סה״כ דוחות</p>
              <p className="text-2xl font-bold text-blue-800">{statistics.total || 0}</p>
            </div>
            <div className="text-blue-500 text-2xl">📊</div>
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 font-medium">השבוע</p>
              <p className="text-2xl font-bold text-green-800">{statistics.lastWeek || 0}</p>
            </div>
            <div className="text-green-500 text-2xl">📈</div>
          </div>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 font-medium">החודש</p>
              <p className="text-2xl font-bold text-purple-800">{statistics.lastMonth || 0}</p>
            </div>
            <div className="text-purple-500 text-2xl">📅</div>
          </div>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-600 font-medium">סוגי דוחות</p>
              <p className="text-2xl font-bold text-orange-800">
                {Object.keys(statistics.byType || {}).length}
              </p>
            </div>
            <div className="text-orange-500 text-2xl">🏷️</div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="חיפוש בדוחות..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="md:w-48">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {reportTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="md:w-40">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="date">תאריך</option>
              <option value="type">סוג</option>
              <option value="title">כותרת</option>
            </select>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => onGenerateNewReport && onGenerateNewReport()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            דוח חדש
          </button>
          <button
            onClick={loadReports}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            רענן
          </button>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            דוחות שמורים ({filteredReports.length})
          </h3>
        </div>

        {filteredReports.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            {reports.length === 0 ? (
              <>
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-lg font-medium mb-2">אין דוחות שמורים</p>
                <p className="text-sm">צור דוח חדש כדי להתחיל</p>
              </>
            ) : (
              <>
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="text-lg font-medium mb-2">לא נמצאו דוחות</p>
                <p className="text-sm">נסה לשנות את המסננים או מונחי החיפוש</p>
              </>
            )}
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredReports.map((report) => (
              <div key={report.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="text-2xl">
                      {getReportTypeIcon(report.type)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900 mb-1">
                        {report.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {report.summary}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 space-x-4 space-x-reverse">
                        <span>{report.date}</span>
                        <span>•</span>
                        <span>{getReportTypeTitle(report.type)}</span>
                        <span>•</span>
                        <span>{report.content.length} תווים</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <button
                      onClick={() => onViewReport(report)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      צפה
                    </button>
                    <button
                      onClick={() => handleDeleteReport(report.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      מחק
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportHistory;
