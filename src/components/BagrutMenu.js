import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLessonStatus, getProgressStats } from '../utils/progressUtils';

const BagrutMenu = () => {
  const [progressStats, setProgressStats] = useState({ total: 0, completed: 0, started: 0, notStarted: 0 });

  // Update progress stats when component mounts
  useEffect(() => {
    const updateStats = () => {
      // For now, we'll use placeholder data since bagrut lessons use questionnaires
      setProgressStats({ total: 3, completed: 0, started: 0, notStarted: 3 });
    };

    updateStats();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            בגרות במתמטיקה
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            3 יחידות לימוד - תשפ"ה
          </p>
          <p className="text-md text-gray-500 mb-4">
            שלושה שאלונים המהווים את בחינת הבגרות המלאה
          </p>
          <div className="mb-4 flex gap-4 justify-center">
            <Link 
              to="/progress" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-150 ease-in-out inline-flex items-center"
            >
              <span className="mr-2">📊</span>
              לוח התקדמות
            </Link>
            <Link 
              to="/" 
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-150 ease-in-out inline-flex items-center"
            >
              <span className="mr-2">🏠</span>
              חזרה לעמוד הבית
            </Link>
          </div>
        </header>

        {/* Progress Summary for Bagrut */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">סיכום בחינת הבגרות</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">25%</div>
              <div className="text-sm text-gray-600">שאלון 35182 (801)</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">35%</div>
              <div className="text-sm text-gray-600">שאלון 35381 (802)</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">40%</div>
              <div className="text-sm text-gray-600">שאלון 35382 (803)</div>
            </div>
          </div>
        </div>

        <main className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b-2 pb-2">
              שאלוני הבגרות
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Questionnaire 35182 (801) */}
              <div className="block p-6 bg-white rounded-lg shadow-md border-2 border-blue-200 hover:border-blue-400 transition-all duration-200 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M12 10v-3m0 0h0M5.05 16.05L5 16.001M5 8h.01M19 8h.01M19 16.05l-.05.049M12 2a10 10 0 110 20 10 10 0 010-20z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">שאלון 35182</h3>
                    <p className="text-sm text-blue-600">(801) - 25% מהציון</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  יסודות באלגברה, גיאומטריה בסיסית, אנליטית ראשונית, סדרות חשבוניות, 
                  טריגונומטריה (משולש ישר זווית), סטטיסטיקה והסתברות.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-500">נושאים עיקריים:</div>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">אלגברה</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">גיאומטריה</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">סדרות</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">טריגונומטריה</span>
                  </div>
                </div>
                <Link 
                  to="/questionnaire/35182"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out text-center"
                >
                  התחל שאלון 35182
                </Link>
              </div>

              {/* Questionnaire 35381 (802) */}
              <div className="block p-6 bg-white rounded-lg shadow-md border-2 border-green-200 hover:border-green-400 transition-all duration-200 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-700">שאלון 35381</h3>
                    <p className="text-sm text-green-600">(802) - 35% מהציון</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  פונקציות (כולל פרבולה), סדרות חשבוניות (מורחב), גדילה ודעיכה, 
                  סטטיסטיקה (כולל סטיית תקן), הסתברות (דיאגרמת עץ), התפלגות נורמלית, טריגונומטריה במישור.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-500">נושאים עיקריים:</div>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">פונקציות</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">פרבולה</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">סטטיסטיקה</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">הסתברות</span>
                  </div>
                </div>
                <Link 
                  to="/questionnaire/35381"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out text-center"
                >
                  התחל שאלון 35381
                </Link>
              </div>

              {/* Questionnaire 35382 (803) */}
              <div className="block p-6 bg-white rounded-lg shadow-md border-2 border-purple-200 hover:border-purple-400 transition-all duration-200 hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-700">שאלון 35382</h3>
                    <p className="text-sm text-purple-600">(803) - 40% מהציון</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  בעיות מילוליות מורכבות, גיאומטריה אנליטית (כולל מעגל), 
                  חשבון דיפרנציאלי ואינטגרלי (פולינום, רציונלית, שורש).
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-500">נושאים עיקריים:</div>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">בעיות מילוליות</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">גיאומטריה אנליטית</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">חשבון דיפרנציאלי</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">אינטגרלי</span>
                  </div>
                </div>
                <Link 
                  to="/questionnaire/35382"
                  className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out text-center"
                >
                  התחל שאלון 35382
                </Link>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-center mt-12 py-8 text-gray-500">
          <p>© 2025 פלטפורמת למידה במתמטיקה - בגרות. כל הזכויות שמורות.</p>
          <p className="mt-2 text-sm">
            3 שאלוני בגרות זמינים - 3 יחידות לימוד
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BagrutMenu;
