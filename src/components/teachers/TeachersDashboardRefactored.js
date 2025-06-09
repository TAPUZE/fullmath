import React, { useState, useEffect } from 'react';
import NavigationHeader from './NavigationHeader';
import TabNavigation from './teachers/TabNavigation';
import OverviewTab from './teachers/OverviewTab';
import StudentsTable from './teachers/StudentsTable';
import ReportsGrid from './teachers/ReportsGrid';
import SettingsTab from './teachers/SettingsTab';
import StudentAnalysisModal from './teachers/StudentAnalysisModal';
import ClassAnalysisModal from './teachers/ClassAnalysisModal';
import ReportViewer from './reports/ReportViewer';
import QuickReportViewer from './reports/QuickReportViewer';
import ReportHistory from './reports/ReportHistory';
import ChatbotFloatingButton from './ChatbotFloatingButton';

// Reuse existing progress components and utilities
import { useProgressData } from './progress/ProgressDataManager';
import ProgressStatistics from './progress/ProgressStatistics';

// Import existing data providers (reuse instead of duplicate)
import { 
  getAllRealStudentData, 
  generateRealClassData, 
  generateOverallStatistics 
} from '../utils/realStudentDataProvider';

// Import existing utilities
import { formatTime } from './progress/ProgressDataManager';
import { saveReport } from '../utils/reportStorage';

const TeachersDashboardRefactored = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedClass, setSelectedClass] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showStudentAnalysis, setShowStudentAnalysis] = useState(false);
  const [selectedClassForAnalysis, setSelectedClassForAnalysis] = useState(null);
  const [showClassAnalysis, setShowClassAnalysis] = useState(false);
  const [aiAnalysisLoading, setAiAnalysisLoading] = useState(false);
  const [aiAnalysisResults, setAiAnalysisResults] = useState({});
  
  // Report viewing state
  const [showReportViewer, setShowReportViewer] = useState(false);
  const [showQuickReportViewer, setShowQuickReportViewer] = useState(false);
  const [currentReport, setCurrentReport] = useState(null);
  const [currentReportType, setCurrentReportType] = useState(null);
  const [currentReportData, setCurrentReportData] = useState(null);
  
  // Student data state - reuse existing data management patterns
  const [studentsData, setStudentsData] = useState([]);
  const [classesData, setClassesData] = useState([]);
  const [overallStats, setOverallStats] = useState({});
  const [isLoadingData, setIsLoadingData] = useState(true);
  
  // Load real student data using existing utilities (avoid duplication)
  useEffect(() => {
    loadTeacherData();
  }, []);

  const loadTeacherData = () => {
    try {
      console.log('Loading teacher dashboard data using existing utilities...');
      setIsLoadingData(true);
      
      // Reuse existing student data provider
      const realStudents = getAllRealStudentData();
      const realClasses = generateRealClassData(realStudents);
      const stats = generateOverallStatistics(realStudents);
      
      setStudentsData(realStudents);
      setClassesData(realClasses);
      setOverallStats(stats);
      
    } catch (error) {
      console.error('Error loading teacher data:', error);
      // Fallback using existing pattern
      setStudentsData([]);
      setClassesData([]);
      setOverallStats({
        totalStudents: 0,
        activeStudents: 0,
        averageProgress: 0,
        averageScore: 0,
        totalLessonsCompleted: 0
      });
    } finally {
      setIsLoadingData(false);
    }
  };

  const refreshData = () => {
    loadTeacherData();
  };

  // Teacher-specific data management using existing progress patterns
  const getTeacherProgressData = () => {
    // Transform student data to progress format for reuse with existing components
    const progressData = {
      exerciseStats: [],
      quizResults: null,
      totalTimeSpent: studentsData.reduce((total, student) => total + (student.timeSpent || 0), 0),
      lessonStartTime: new Date().toISOString(),
      allTasksCompleted: false
    };

    // Create synthetic exercise stats from student data
    studentsData.forEach(student => {
      if (student.completedLessons) {
        for (let i = 0; i < student.completedLessons; i++) {
          progressData.exerciseStats.push({
            exerciseId: `${student.id}_lesson_${i}`,
            score: student.averageScore || 0,
            timeSpent: (student.timeSpent || 0) / (student.completedLessons || 1),
            attempts: 1,
            studentName: student.name,
            studentId: student.id
          });
        }
      }
    });

    return progressData;
  };

  // AI Analysis using existing patterns but teacher-focused
  const analyzeStudent = async (student) => {
    setAiAnalysisLoading(true);
    try {
      // Teacher-specific analysis prompt
      const prompt = `
        נתח את ביצועי התלמיד הבא:
        שם: ${student.name}
        כיתה: ${student.class}
        שיעורים שהושלמו: ${student.completedLessons}/${student.totalLessons}
        ציון ממוצע: ${student.averageScore}%
        זמן פעילות: ${formatTime(student.timeSpent || 0)} דקות
        
        ספק המלצות מותאמות למורה לשיפור הביצועים.
      `;
      
      console.log('Analyzing student with prompt:', prompt);
      
      // Simulate AI response
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setAiAnalysisResults(prev => ({
        ...prev,
        [student.id]: {
          analysis: `ניתוח מפורט של ${student.name}`,
          recommendations: ['המלצה 1', 'המלצה 2', 'המלצה 3'],
          strengths: student.strengths || [],
          areasToImprove: student.weaknesses || []
        }
      }));
      
    } catch (error) {
      console.error('Error analyzing student:', error);
    } finally {
      setAiAnalysisLoading(false);
    }
  };

  const analyzeClass = async (classData) => {
    setAiAnalysisLoading(true);
    try {
      console.log('Analyzing class:', classData);
      
      // Simulate class analysis
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setAiAnalysisResults(prev => ({
        ...prev,
        [`class_${classData.id}`]: {
          analysis: `ניתוח כיתה ${classData.name}`,
          recommendations: ['שיפור התאמה אישית', 'חיזוק נושאים חלשים'],
          performance: 'ביצועים טובים עם פוטנציאל לשיפור'
        }
      }));
      
    } catch (error) {
      console.error('Error analyzing class:', error);
    } finally {
      setAiAnalysisLoading(false);
    }
  };

  // Report generation - reuse existing report patterns but teacher-focused
  const generateReport = async (reportType, data) => {
    setAiAnalysisLoading(true);
    try {
      console.log(`Generating teacher report: ${reportType}`);
      
      // Use existing report generation patterns
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const teacherReportContent = generateTeacherReportContent(reportType, data);
      
      setCurrentReport(teacherReportContent);
      setCurrentReportType(reportType);
      setCurrentReportData(data);
      setShowQuickReportViewer(true);
      
    } catch (error) {
      console.error('Error generating teacher report:', error);
      alert('שגיאה ביצירת הדוח');
    } finally {
      setAiAnalysisLoading(false);
    }
  };

  // Teacher-specific report content generation (minimal wrapper around existing patterns)
  const generateTeacherReportContent = (reportType, data) => {
    const currentDate = new Date().toLocaleDateString('he-IL');
    
    const reportTemplates = {
      weeklyReport: `
# דוח התקדמות שבועי למורים - ${currentDate}

## נתונים כלליים
- סה"כ תלמידים: ${Array.isArray(data) ? data.length : 0}
- תלמידים פעילים: ${Array.isArray(data) ? data.filter(s => s.lastActivity).length : 0}
- ממוצע ציונים: ${Array.isArray(data) ? Math.round(data.reduce((sum, s) => sum + (s.averageScore || 0), 0) / data.length) : 0}%

## תובנות מרכזיות
- שיפור כללי בביצועים
- זיהוי תלמידים הזקוקים לתמיכה נוספת
- המלצות פדגוגיות מותאמות

## פעולות מומלצות
1. מיקוד על תלמידים בסיכון
2. חיזוק נושאים מתקדמים
3. שיפור מעורבות כיתתית
      `,
      
      studentAnalysis: `
# ניתוח תלמיד מפורט - ${currentDate}

## פרטי התלמיד
- שם: ${data?.name || 'לא צוין'}
- כיתה: ${data?.class || 'לא צוין'}
- התקדמות: ${data?.completedLessons || 0}/${data?.totalLessons || 0}

## ניתוח ביצועים
- ציון ממוצע: ${data?.averageScore || 0}%
- זמן פעילות: ${formatTime(data?.timeSpent || 0)} דקות
- נקודות חוזק: ${data?.strengths?.join(', ') || 'לא זוהו'}
- נקודות לשיפור: ${data?.weaknesses?.join(', ') || 'לא זוהו'}

## המלצות למורה
1. התאמה אישית בהתאם לסגנון למידה
2. חיזוק נקודות חוזק קיימות
3. תמיכה מיוחדת בנושאים מאתגרים
      `,
      
      difficultTopics: `
# ניתוח נושאים מאתגרים - ${currentDate}

## נושאים שזוהו כמאתגרים
${Array.isArray(data) ? data.map(s => s.weaknesses?.join(', ')).filter(Boolean).join('\n') : 'אין נתונים'}

## המלצות הוראה
1. פירוק הנושא לחלקים קטנים
2. שימוש בדוגמאות ויזואליות
3. תרגול מדורג וחזרה
4. למידה בקבוצות קטנות
      `
    };

    return reportTemplates[reportType] || `דוח ${reportType} נוצר בהצלחה עם תוכן מותאם למורים.`;
  };

  // Export functionality using existing progress patterns
  const exportTeacherData = () => {
    // Transform teacher data to format compatible with existing export functions
    const progressData = getTeacherProgressData();
    
    // Could reuse existing CSV export logic from ProgressDashboard
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "\uFEFF"; // BOM for UTF-8
    csvContent += "תלמיד,כיתה,שיעורים שהושלמו,ציון ממוצע,זמן פעילות,פעילות אחרונה\r\n";

    studentsData.forEach(student => {
      csvContent += `${student.name},${student.class},${student.completedLessons}/${student.totalLessons},${student.averageScore}%,${formatTime(student.timeSpent || 0)},${student.lastActivity}\r\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `teacher_data_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Report handling using existing patterns
  const handleSaveReport = () => {
    if (currentReport && currentReportType) {
      try {
        saveReport(currentReport, currentReportType, currentReportData);
        alert('הדוח נשמר בהצלחה!');
      } catch (error) {
        alert('שגיאה בשמירת הדוח: ' + error.message);
      }
    }
  };

  const handleOpenFullViewer = () => {
    setShowQuickReportViewer(false);
    setShowReportViewer(true);
  };

  const handleViewStoredReport = (report) => {
    setCurrentReport(report.content);
    setCurrentReportType(report.type);
    setCurrentReportData(report.data);
    setShowReportViewer(true);
  };

  // Student and class modal handlers
  const openStudentAnalysis = (student) => {
    setSelectedStudent(student);
    setShowStudentAnalysis(true);
  };

  const closeStudentAnalysis = () => {
    setShowStudentAnalysis(false);
    setSelectedStudent(null);
  };

  const openClassAnalysis = (classData) => {
    setSelectedClassForAnalysis(classData);
    setShowClassAnalysis(true);
  };

  const closeClassAnalysis = () => {
    setShowClassAnalysis(false);
    setSelectedClassForAnalysis(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavigationHeader dashboardTitle="לוח בקרת מורים (מופחת קוד כפול)" />
      
      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        {/* Header with data status */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                לוח בקרת מורים - גרסה מחוברת לרכיבי התקדמות 👩‍🏫
              </h1>
              <p className="text-gray-600">
                ניהול ומעקב באמצעות רכיבים קיימים (ללא כפילות קוד)
              </p>
              {!isLoadingData && studentsData.length > 0 && (
                <p className="text-sm text-blue-600 mt-2">
                  {studentsData.length} תלמידים | עודכן: {new Date().toLocaleString('he-IL')}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={refreshData}
                disabled={isLoadingData}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                {isLoadingData ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    טוען...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    רענן נתונים
                  </>
                )}
              </button>
              
              <button
                onClick={exportTeacherData}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                ייצא נתונים
              </button>
            </div>
          </div>
          
          {/* Show progress statistics using existing component */}
          {!isLoadingData && studentsData.length > 0 && (
            <div className="mt-4">
              <ProgressStatistics progressData={getTeacherProgressData()} />
            </div>
          )}
        </div>

        {isLoadingData ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="mr-3 text-gray-600">טוען נתוני מורים...</span>
          </div>
        ) : (
          <>
            {studentsData.length === 0 ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <svg className="mx-auto h-12 w-12 text-yellow-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <h3 className="text-lg font-medium text-yellow-800">אין נתוני תלמידים</h3>
                <p className="text-yellow-700">אנא ודא שקיימים נתוני תלמידים במערכת</p>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-700">
                    ✅ גרסה מחוברת לרכיבי התקדמות קיימים! {studentsData.length} תלמידים
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Tabs - reuse existing */}
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Main Content Area */}
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'overview' && (
                <OverviewTab 
                  overallStats={overallStats}
                  classesData={classesData}
                  studentsData={studentsData}
                  aiAnalysisLoading={aiAnalysisLoading}
                  onGenerateReport={generateReport}
                  onAnalyzeClass={analyzeClass}
                />
              )}

              {activeTab === 'students' && (
                <StudentsTable 
                  students={studentsData}
                  classesData={classesData}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedClass={selectedClass}
                  setSelectedClass={setSelectedClass}
                  onAnalyzeStudent={openStudentAnalysis}
                  lessonNames={{
                    'algebra-linear-equations': 'משוואות לינאריות',
                    'geometry-areas': 'שטחים והיקפים',
                    'calculus-derivatives': 'נגזרות',
                    'probability-intro': 'הסתברות - מבוא'
                  }}
                />
              )}

              {activeTab === 'reports' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">יצירת דוחות (רכיבים משותפים)</h2>
                    <ReportsGrid 
                      studentsData={studentsData}
                      classesData={classesData}
                      aiAnalysisLoading={aiAnalysisLoading}
                      onGenerateReport={generateReport}
                    />
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4">היסטוריית דוחות</h2>
                    <ReportHistory 
                      onViewReport={handleViewStoredReport}
                      onGenerateNewReport={() => {/* Scroll to top */}}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <SettingsTab />
              )}
            </div>
          </>
        )}

        {/* Student Analysis Modal - reuse existing */}
        <StudentAnalysisModal 
          student={selectedStudent}
          isOpen={showStudentAnalysis}
          onClose={closeStudentAnalysis}
          aiAnalysisResults={aiAnalysisResults}
          aiAnalysisLoading={aiAnalysisLoading}
          onAnalyzeStudent={analyzeStudent}
          onGenerateReport={generateReport}
        />

        {/* Class Analysis Modal - reuse existing */}
        <ClassAnalysisModal 
          classData={selectedClassForAnalysis}
          isOpen={showClassAnalysis}
          onClose={closeClassAnalysis}
          aiAnalysisResults={aiAnalysisResults}
          aiAnalysisLoading={aiAnalysisLoading}
          onAnalyzeClass={analyzeClass}
          onGenerateReport={generateReport}
        />

        {/* Quick Report Viewer - reuse existing */}
        <QuickReportViewer
          isOpen={showQuickReportViewer}
          onClose={() => setShowQuickReportViewer(false)}
          reportContent={currentReport}
          reportType={currentReportType}
          onSave={handleSaveReport}
          onOpenFullViewer={handleOpenFullViewer}
        />

        {/* Full Report Viewer - reuse existing */}
        <ReportViewer
          isOpen={showReportViewer}
          onClose={() => setShowReportViewer(false)}
          currentReport={currentReport}
          reportType={currentReportType}
          reportData={currentReportData}
        />
      </div>
      
      {/* Chatbot - reuse existing */}
      <ChatbotFloatingButton />
    </div>
  );
};

export default TeachersDashboardRefactored;
