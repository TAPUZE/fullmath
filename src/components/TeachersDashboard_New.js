// filepath: c:\Users\User\Desktop\math\math3\react trans\src\components\TeachersDashboard.js
import React, { useState, useEffect } from 'react';
import NavigationHeader from './NavigationHeader';
import TabNavigation from './teachers/TabNavigation';
import OverviewTab from './teachers/OverviewTab';
import StudentsTable from './teachers/StudentsTable';
import ReportsGrid from './teachers/ReportsGrid';
import SettingsTab from './teachers/SettingsTab';
import StudentAnalysisModal from './teachers/StudentAnalysisModal';

// Mock data - in a real application, this would come from an API
const mockStudentsData = [
  {
    id: 1,
    name: 'שרה כהן',
    email: 'sarah.cohen@student.school.il',
    class: 'י"א 1',
    completedLessons: 15,
    totalLessons: 25,
    averageScore: 87,
    lastActivity: '2024-01-15',
    currentLesson: 'TrigonometryRightTriangleLesson',
    timeSpent: 145, // minutes
    strengths: ['גיאומטריה', 'אלגברה'],
    weaknesses: ['סטטיסטיקה']
  },
  {
    id: 2,
    name: 'דוד לוי',
    email: 'david.levy@student.school.il',
    class: 'י"א 1',
    completedLessons: 12,
    totalLessons: 25,
    averageScore: 75,
    lastActivity: '2024-01-14',
    currentLesson: 'AlgebraQuadraticEquationsLesson',
    timeSpent: 98,
    strengths: ['אלגברה'],
    weaknesses: ['גיאומטריה', 'הסתברות']
  },
  {
    id: 3,
    name: 'רותם אבני',
    email: 'rotem.avni@student.school.il',
    class: 'י"א 2',
    completedLessons: 20,
    totalLessons: 25,
    averageScore: 92,
    lastActivity: '2024-01-15',
    currentLesson: 'CalculusOptimizationLesson',
    timeSpent: 187,
    strengths: ['חשבון דיפרנציאלי', 'גיאומטריה', 'אלגברה'],
    weaknesses: []
  },
  {
    id: 4,
    name: 'יוסף מזרחי',
    email: 'yosef.mizrahi@student.school.il',
    class: 'י"א 2',
    completedLessons: 8,
    totalLessons: 25,
    averageScore: 68,
    lastActivity: '2024-01-13',
    currentLesson: 'AlgebraLinearEquationOneVariableLesson',
    timeSpent: 76,
    strengths: ['חשבון בסיסי'],
    weaknesses: ['משוואות מורכבות', 'בעיות מילוליות']
  }
];

const mockClassesData = [
  {
    id: 1,
    name: 'י"א 1',
    students: 28,
    averageProgress: 65,
    averageScore: 78,
    activeStudents: 24,
    subject: 'math'
  },
  {
    id: 2,
    name: 'י"א 2',
    students: 32,
    averageProgress: 72,
    averageScore: 82,
    activeStudents: 29,
    subject: 'math'
  },
  {
    id: 3,
    name: 'י"ב 1',
    students: 25,
    averageProgress: 58,
    averageScore: 75,
    activeStudents: 21,
    subject: 'math'
  }
];

const TeachersDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedClass, setSelectedClass] = useState('all');
  const [studentsData, setStudentsData] = useState(mockStudentsData);
  const [classesData, setClassesData] = useState(mockClassesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showStudentAnalysis, setShowStudentAnalysis] = useState(false);
  const [aiAnalysisLoading, setAiAnalysisLoading] = useState(false);
  const [aiAnalysisResults, setAiAnalysisResults] = useState({});

  // Calculate overall statistics
  const overallStats = {
    totalStudents: studentsData.length,
    totalClasses: classesData.length,
    averageCompletion: Math.round(studentsData.reduce((sum, student) => 
      sum + (student.completedLessons / student.totalLessons * 100), 0) / studentsData.length),
    averageScore: Math.round(studentsData.reduce((sum, student) => 
      sum + student.averageScore, 0) / studentsData.length),
    activeToday: studentsData.filter(student => 
      student.lastActivity === '2024-01-15').length
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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">לוח בקרת מורים 👩‍🏫</h1>
          <p className="text-gray-600">ניהול ומעקב אחר התקדמות התלמידים במתמטיקה</p>
        </div>

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
          )}

          {activeTab === 'students' && (
            <StudentsTable 
              studentsData={studentsData}
              classesData={classesData}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedClass={selectedClass}
              setSelectedClass={setSelectedClass}
              onOpenStudentAnalysis={openStudentAnalysis}
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
