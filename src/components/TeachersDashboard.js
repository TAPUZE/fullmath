import React, { useState, useEffect } from 'react';
import NavigationHeader from './NavigationHeader';
import TabNavigation from './teachers/TabNavigation';
import OverviewTab from './teachers/OverviewTab';
import StudentsTable from './teachers/StudentsTable';
import ReportsGrid from './teachers/ReportsGrid';
import SettingsTab from './teachers/SettingsTab';
import StudentAnalysisModal from './teachers/StudentAnalysisModal';

// Import real student data provider
import { 
  getAllRealStudentData, 
  generateRealClassData, 
  generateOverallStatistics 
} from '../utils/realStudentDataProvider';

const TeachersDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedClass, setSelectedClass] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showStudentAnalysis, setShowStudentAnalysis] = useState(false);
  const [aiAnalysisLoading, setAiAnalysisLoading] = useState(false);
  const [aiAnalysisResults, setAiAnalysisResults] = useState({});
  
  // Real student data state (replacing mock data)
  const [studentsData, setStudentsData] = useState([]);
  const [classesData, setClassesData] = useState([]);
  const [overallStats, setOverallStats] = useState({});
  const [isLoadingData, setIsLoadingData] = useState(true);
  
  // Load real student data on component mount
  useEffect(() => {
    loadRealStudentData();
  }, []);
  
  const loadRealStudentData = () => {
    try {
      console.log('Loading real student data for teachers dashboard...');
      setIsLoadingData(true);
      
      // Get all real student data from localStorage
      const realStudents = getAllRealStudentData();
      console.log('Loaded students for dashboard:', realStudents);
      
      // Generate class statistics
      const realClasses = generateRealClassData(realStudents);
      console.log('Generated class data:', realClasses);
      
      // Generate overall statistics
      const stats = generateOverallStatistics(realStudents);
      console.log('Generated overall stats:', stats);
      
      // Update state
      setStudentsData(realStudents);
      setClassesData(realClasses);
      setOverallStats(stats);
      
    } catch (error) {
      console.error('Error loading real student data:', error);
      // Fallback to empty data if loading fails
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
  
  // Refresh data function
  const refreshData = () => {
    loadRealStudentData();
  };
  // AI Analysis Prompts for Gemini API integration
  const aiPrompts = {
    studentAnalysis: (student) => `
      נתח את הביצועים של התלמיד הבא במתמטיקה:
      שם: ${student.name}
      כיתה: ${student.class}
      שיעורים שהושלמו: ${student.completedLessons}/${student.totalLessons}
      ציון ממוצע: ${student.averageScore}
      זמן שהקדיש: ${student.timeSpent} דקות
      נקודות חוזק: ${student.strengths.join(', ')}
      נקודות לשיפור: ${student.weaknesses.join(', ')}
      
      אנא ספק:
      1. הערכה כללית של ביצועי התלמיד
      2. זיהוי דפוסי למידה
      3. המלצות ספציפיות לשיפור
      4. אסטרטגיות הוראה מותאמות אישית
      5. תחזית להתקדמות עתידית
      
      תשובה בעברית במבנה ברור וממוקד.
    `,
    classAnalysis: (classData) => `
      נתח את ביצועי הכיתה הבאה:
      שם הכיתה: ${classData.name}
      מספר תלמידים: ${classData.students}
      תלמידים פעילים: ${classData.activeStudents}
      ממוצע התקדמות: ${classData.averageProgress}%
      ממוצע ציונים: ${classData.averageScore}
      
      אנא ספק:
      1. הערכה כללית של ביצועי הכיתה
      2. זיהוי תלמידים הזקוקים לתמיכה נוספת
      3. המלצות לשיפור ביצועי הכיתה
      4. אסטרטגיות הוראה מותאמות לכיתה
      5. תחזית להתקדמות עתידית
      
      תשובה בעברית במבנה ברור וממוקד.
    `,
    weeklyReport: (studentsData) => `
      צור דוח התקדמות שבועי על בסיס הנתונים הבאים:
      סה"כ תלמידים: ${studentsData.length}
      תלמידים פעילים השבוע: ${studentsData.filter(s => s.lastActivity === '2024-01-15').length}
      ממוצע ציונים כללי: ${Math.round(studentsData.reduce((sum, s) => sum + s.averageScore, 0) / studentsData.length)}
      
      אנא ספק:
      1. סיכום פעילות השבוע
      2. הישגים בולטים
      3. אתגרים שזוהו
      4. המלצות לשבוע הבא
      5. מגמות חשובות
      
      תשובה בעברית במבנה דוח מקצועי.
    `,
    difficultTopics: (studentsData) => `
      נתח את הנושאים הקשים בהתבסס על נתוני התלמידים:
      ${studentsData.map(s => `תלמיד: ${s.name}, נקודות חולשה: ${s.weaknesses.join(', ')}`).join('\n')}
      
      אנא ספק:
      1. זיהוי הנושאים הקשים ביותר
      2. ניתוח סיבות לקושי
      3. המלצות לשיפור הוראת הנושאים
      4. פעילויות ותרגילים מותאמים
      5. אסטרטגיות הערכה חלופיות
      
      תשובה בעברית במבנה ברור וממוקד.
    `,
    attendanceReport: (studentsData) => `
      נתח את דפוסי הנוכחות והפעילות הדיגיטלית:
      ${studentsData.map(s => `${s.name}: זמן פעילות ${s.timeSpent} דקות, פעילות אחרונה ${s.lastActivity}`).join('\n')}
      
      אנא ספק:
      1. ניתוח דפוסי נוכחות ופעילות
      2. זיהוי תלמידים בסיכון
      3. המלצות לעידוד מעורבות
      4. אסטרטגיות שיפור נוכחות
      5. תובנות על זמני למידה אופטימליים
    `,
    performanceComparison: (data) => `
      השווה ביצועים בין כיתות ותלמידים:
      נתוני כיתות: ${data.classes.map(c => `${c.name}: ${c.averageScore} ממוצע, ${c.averageProgress}% התקדמות`).join('\n')}
      
      אנא ספק:
      1. השוואה בין ביצועי הכיתות
      2. זיהוי הבדלים משמעותיים
      3. ניתוח גורמי הצלחה
      4. המלצות ליישום best practices
      5. אסטרטגיות צמצום פערים
    `,
    detailedActivity: (studentsData) => `
      צור ניתוח מפורט של פעילות התלמידים:
      ${studentsData.map(s => `${s.name}: ${s.completedLessons}/${s.totalLessons} שיעורים, ציון ${s.averageScore}`).join('\n')}
      
      אנא ספק:
      1. ניתוח עומק למידה
      2. זיהוי דפוסי התקדמות
      3. המלצות לשיפור מעורבות
      4. תובנות פדגוגיות
      5. אסטרטגיות התאמה אישית
    `,
    dataExport: (data) => `
      הכן סיכום מקיף לייצוא נתונים:
      ${data.students.length} תלמידים ב-${data.classes.length} כיתות
      
      אנא ספק:
      1. סיכום ביצועים כללי
      2. נקודות מפתח לתשומת לב
      3. המלצות להנהלה
      4. מגמות עיקריות
      5. תחזיות לטווח הקרוב
    `
  };

  // AI Analysis Functions (to be connected to Gemini API)
  const analyzeStudent = async (student) => {
    setAiAnalysisLoading(true);
    try {
      // TODO: Replace with actual Gemini API call
      const mockAnalysis = {
        overview: "התלמיד מציג ביצועים טובים בכלל עם נטייה לקושי בסטטיסטיקה",
        strengths: ["יכולת חישובית גבוהה", "הבנה טובה של אלגברה", "עמידה ביעדים"],
        recommendations: ["חיזוק בסטטיסטיקה", "תרגול נוסף בהסתברות", "עבודה קבוצתית"],
        prediction: "צפוי להשיג ציון של 85-90 בבגרות עם השקעה נוספת בנושאים החלשים"
      };
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setAiAnalysisResults(prev => ({
        ...prev,
        [student.id]: mockAnalysis
      }));
    } catch (error) {
      console.error('Error analyzing student:', error);
    } finally {
      setAiAnalysisLoading(false);
    }
  };

  const generateReport = async (reportType, data) => {
    setAiAnalysisLoading(true);
    try {
      // TODO: Replace with actual Gemini API call
      console.log(`Generating ${reportType} report with prompt:`, aiPrompts[reportType](data));
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock response - replace with actual API integration
      const mockReport = `דוח ${reportType} נוצר בהצלחה עם המלצות מותאמות אישית`;
      alert(mockReport);
    } catch (error) {
      console.error('Error generating report:', error);
      alert('שגיאה ביצירת הדוח');
    } finally {
      setAiAnalysisLoading(false);
    }
  };

  const openStudentAnalysis = (student) => {
    setSelectedStudent(student);
    setShowStudentAnalysis(true);
  };

  const closeStudentAnalysis = () => {
    setShowStudentAnalysis(false);
    setSelectedStudent(null);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavigationHeader dashboardTitle="לוח בקרת מורים" />
      
      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">לוח בקרת מורים 👩‍🏫</h1>
              <p className="text-gray-600">ניהול ומעקב אחר התקדמות התלמידים במתמטיקה</p>
              {!isLoadingData && (
                <p className="text-sm text-blue-600 mt-2">
                  {studentsData.length} תלמידים רשומים במערכת | עודכן: {new Date().toLocaleString('he-IL')}
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
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoadingData ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">טוען נתוני תלמידים...</h3>
            <p className="text-gray-500">מעבד מידע מהמערכת המקומית</p>
          </div>
        ) : (
          <>
            {/* Data Status Alert */}
            {studentsData.length === 0 ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-800">אין נתוני תלמידים</h3>
                    <p className="text-yellow-700">
                      לא נמצאו נתוני תלמידים במערכת. תלמידים צריכים להתחבר למערכת כדי שנתונים יופיעו כאן.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-green-700">
                    נתונים נטענו בהצלחה! מציג מידע עדכני של {studentsData.length} תלמידים
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Tabs */}
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
                />
              )}              {activeTab === 'students' && (
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
                <ReportsGrid 
                  studentsData={studentsData}
                  classesData={classesData}
                  aiAnalysisLoading={aiAnalysisLoading}
                  onGenerateReport={generateReport}
                />
              )}

              {activeTab === 'settings' && (
                <SettingsTab />
              )}
            </div>
          </>
        )}

        {/* Student Analysis Modal */}
        <StudentAnalysisModal 
          student={selectedStudent}
          isOpen={showStudentAnalysis}
          onClose={closeStudentAnalysis}
          aiAnalysisResults={aiAnalysisResults}
          aiAnalysisLoading={aiAnalysisLoading}
          onAnalyzeStudent={analyzeStudent}
          onGenerateReport={generateReport}
        />
      </div>
    </div>
  );
};

export default TeachersDashboard;
