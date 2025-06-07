import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationHeader = ({ lessonTitle }) => {  const location = useLocation();
  
  // Determine current context based on URL
  const isHomePage = location.pathname === '/';
  const isProgressPage = location.pathname === '/progress';
  const isTeachersPage = location.pathname === '/teachers';
  const isQuestionnairePage = location.pathname.includes('/questionnaire/');
  const isLessonPage = location.pathname.includes('/lessons/');

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-blue-100">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            {/* HLC Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                <div className="text-center leading-tight">
                  <div className="text-xs">HLC</div>
                  <div className="text-[8px] opacity-80">מכון</div>
                </div>
              </div>
              <div className="mr-3 text-right">
                <div className="text-sm font-bold text-gray-800">Holy Land Connect</div>
                <div className="text-xs text-gray-600 font-medium">Holy Land Connect</div>
                <div className="text-[10px] text-blue-600">מתמטיקה לבגרות</div>
              </div>
            </div>
          </div>

          {/* Center - Current Location */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="text-center">
              {lessonTitle && (
                <h1 className="text-lg font-semibold text-gray-800 truncate max-w-md">
                  {lessonTitle}
                </h1>              )}
              <div className="text-xs text-gray-500">
                {isHomePage && "דף הבית"}
                {isProgressPage && "דוח התקדמות"}
                {isTeachersPage && "פורטל מורים"}
                {isQuestionnairePage && "בחירת שאלון"}
                {isLessonPage && "שיעור"}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            {/* Home Button */}
            {!isHomePage && (
              <Link 
                to="/" 
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
                title="חזור לדף הבית"
              >
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="hidden sm:inline">בית</span>
              </Link>
            )}

            {/* Lessons Menu Button */}
            {isLessonPage && (
              <Link 
                to="/" 
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
                title="חזור לבחירת שיעורים"
              >
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="hidden sm:inline">שיעורים</span>
              </Link>
            )}            {/* Progress Button */}
            {!isProgressPage && (
              <Link 
                to="/progress" 
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
                title="צפה בהתקדמות"
              >
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="hidden sm:inline">דוח</span>
              </Link>
            )}

            {/* Teachers Button */}
            {!isTeachersPage && (
              <Link 
                to="/teachers" 
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-150"
                title="פורטל מורים"
              >
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="hidden sm:inline">מורים</span>
              </Link>
            )}

            {/* Report Button */}
            <button 
              onClick={() => {
                const report = `דוח שימוש - ${new Date().toLocaleDateString('he-IL')}
                
נתוני שימוש:
- זמן הגישה: ${new Date().toLocaleString('he-IL')}
- דף נוכחי: ${location.pathname}
- מכשיר: ${navigator.userAgent.includes('Mobile') ? 'נייד' : 'שולחני'}
- דפדפן: ${navigator.userAgent.split(' ').pop()}

דוח זה נוצר אוטומטית על ידי מערכת הלמידה של מכון הלן קלר.`;
                
                const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `HLC_Report_${new Date().toISOString().split('T')[0]}.txt`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-150"
              title="הורד דוח שימוש"
            >
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="hidden sm:inline">דוח</span>
            </button>

            {/* Back Button (contextual) */}
            {(isLessonPage || isQuestionnairePage) && (
              <button 
                onClick={() => window.history.back()}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
                title="חזור אחורה"
              >
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="hidden sm:inline">חזור</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu for Small Screens */}
        <div className="md:hidden mt-2">
          {lessonTitle && (
            <div className="text-center py-2">
              <h1 className="text-base font-semibold text-gray-800 truncate">
                {lessonTitle}
              </h1>              <div className="text-xs text-gray-500">
                {isHomePage && "דף הבית"}
                {isProgressPage && "דוח התקדמות"}
                {isTeachersPage && "פורטל מורים"}
                {isQuestionnairePage && "בחירת שאלון"}
                {isLessonPage && "שיעור"}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationHeader;
