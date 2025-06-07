// Report Storage Utility for Teachers Dashboard
// Handles saving, loading, and managing AI-generated reports

const STORAGE_KEY = 'mathapp_teacher_reports';

/**
 * Get all stored reports from localStorage
 * @returns {Array} Array of stored reports
 */
export const getStoredReports = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading stored reports:', error);
    return [];
  }
};

/**
 * Save a new report to localStorage
 * @param {string} content - Report content
 * @param {string} type - Report type (weeklyReport, studentAnalysis, etc.)
 * @param {Object} data - Additional report data
 * @returns {Object} Saved report object
 */
export const saveReport = (content, type, data = {}) => {
  try {
    const reports = getStoredReports();
    
    const newReport = {
      id: generateReportId(),
      content,
      type,
      title: getReportTitle(type),
      date: new Date().toLocaleString('he-IL'),
      timestamp: Date.now(),
      data: data,
      summary: generateReportSummary(content)
    };

    const updatedReports = [newReport, ...reports];
    
    // Keep only the last 50 reports to prevent storage overflow
    const limitedReports = updatedReports.slice(0, 50);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedReports));
    
    return newReport;
  } catch (error) {
    console.error('Error saving report:', error);
    throw new Error('שגיאה בשמירת הדוח');
  }
};

/**
 * Delete a report by ID
 * @param {string} reportId - Report ID to delete
 * @returns {boolean} Success status
 */
export const deleteReport = (reportId) => {
  try {
    const reports = getStoredReports();
    const filteredReports = reports.filter(report => report.id !== reportId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredReports));
    return true;
  } catch (error) {
    console.error('Error deleting report:', error);
    return false;
  }
};

/**
 * Get a specific report by ID
 * @param {string} reportId - Report ID
 * @returns {Object|null} Report object or null if not found
 */
export const getReportById = (reportId) => {
  const reports = getStoredReports();
  return reports.find(report => report.id === reportId) || null;
};

/**
 * Get reports by type
 * @param {string} type - Report type
 * @returns {Array} Array of reports of the specified type
 */
export const getReportsByType = (type) => {
  const reports = getStoredReports();
  return reports.filter(report => report.type === type);
};

/**
 * Search reports by content or title
 * @param {string} searchTerm - Search term
 * @returns {Array} Array of matching reports
 */
export const searchReports = (searchTerm) => {
  if (!searchTerm) return getStoredReports();
  
  const reports = getStoredReports();
  const lowerSearchTerm = searchTerm.toLowerCase();
  
  return reports.filter(report =>
    report.title.toLowerCase().includes(lowerSearchTerm) ||
    report.content.toLowerCase().includes(lowerSearchTerm) ||
    report.summary.toLowerCase().includes(lowerSearchTerm)
  );
};

/**
 * Export all reports as JSON
 * @returns {string} JSON string of all reports
 */
export const exportAllReports = () => {
  const reports = getStoredReports();
  return JSON.stringify(reports, null, 2);
};

/**
 * Import reports from JSON
 * @param {string} jsonData - JSON string of reports
 * @returns {boolean} Success status
 */
export const importReports = (jsonData) => {
  try {
    const importedReports = JSON.parse(jsonData);
    if (!Array.isArray(importedReports)) {
      throw new Error('Invalid data format');
    }
    
    const existingReports = getStoredReports();
    const allReports = [...importedReports, ...existingReports];
    
    // Remove duplicates based on ID
    const uniqueReports = allReports.filter((report, index, self) =>
      index === self.findIndex(r => r.id === report.id)
    );
    
    // Keep only the last 50 reports
    const limitedReports = uniqueReports.slice(0, 50);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedReports));
    return true;
  } catch (error) {
    console.error('Error importing reports:', error);
    return false;
  }
};

/**
 * Clear all reports
 * @returns {boolean} Success status
 */
export const clearAllReports = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing reports:', error);
    return false;
  }
};

/**
 * Get report statistics
 * @returns {Object} Statistics object
 */
export const getReportStatistics = () => {
  const reports = getStoredReports();
  
  const stats = {
    total: reports.length,
    byType: {},
    lastWeek: 0,
    lastMonth: 0
  };
  
  const now = Date.now();
  const weekAgo = now - (7 * 24 * 60 * 60 * 1000);
  const monthAgo = now - (30 * 24 * 60 * 60 * 1000);
  
  reports.forEach(report => {
    // Count by type
    stats.byType[report.type] = (stats.byType[report.type] || 0) + 1;
    
    // Count by time
    if (report.timestamp > weekAgo) stats.lastWeek++;
    if (report.timestamp > monthAgo) stats.lastMonth++;
  });
  
  return stats;
};

// Helper Functions

/**
 * Generate a unique report ID
 * @returns {string} Unique ID
 */
const generateReportId = () => {
  return `report_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Get human-readable report title by type
 * @param {string} type - Report type
 * @returns {string} Human-readable title
 */
const getReportTitle = (type) => {
  const titles = {
    weeklyReport: 'דוח התקדמות שבועי',
    difficultTopics: 'ניתוח נושאים קשים',
    attendanceReport: 'דוח נוכחות דיגיטלית',
    performanceComparison: 'השוואת ביצועים',
    detailedActivity: 'דוח פעילות מפורט',
    dataExport: 'ייצוא נתונים',
    studentAnalysis: 'ניתוח תלמיד',
    classAnalysis: 'ניתוח כיתה'
  };
  return titles[type] || 'דוח';
};

/**
 * Generate a summary from report content
 * @param {string} content - Report content
 * @returns {string} Report summary
 */
const generateReportSummary = (content) => {
  if (!content || typeof content !== 'string') return '';
  
  // Take first 150 characters as summary
  const summary = content.substring(0, 150);
  return summary.length < content.length ? summary + '...' : summary;
};

/**
 * Validate report data
 * @param {Object} report - Report object to validate
 * @returns {boolean} Is valid
 */
export const validateReport = (report) => {
  return (
    report &&
    typeof report === 'object' &&
    report.id &&
    report.content &&
    report.type &&
    report.title &&
    report.date
  );
};

/**
 * Get default export format for a report
 * @param {Object} report - Report object
 * @returns {string} Formatted export content
 */
export const formatReportForExport = (report) => {
  return `
========================================
${report.title}
========================================

נוצר: ${report.date}
סוג: ${getReportTitle(report.type)}

תוכן הדוח:
----------------------------------------
${report.content}

----------------------------------------
נוצר על ידי: מערכת דוחות מתמטיקה AI
זמן יצירה: ${new Date(report.timestamp).toLocaleString('he-IL')}
  `.trim();
};
