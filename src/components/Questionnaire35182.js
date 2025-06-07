import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLessonStatus, getProgressStats } from '../utils/progressUtils';

const Questionnaire35182 = () => {
  const [lessonStatuses, setLessonStatuses] = useState({});
  const [progressStats, setProgressStats] = useState({ total: 0, completed: 0, started: 0, notStarted: 0 });

  const lessons = [
    {
      id: 'algebra-linear-equation-one-variable',
      title: 'משוואות ליניאריות במשתנה אחד',
      description: 'פתרון משוואות ליניאריות פשוטות ומורכבות',
      path: '/lessons/algebra-linear-equation-one-variable'
    },
    {
      id: 'algebra-percentages',
      title: 'אחוזים ושינויים',
      description: 'חישובי אחוזים, הנחות והעלאות',
      path: '/lessons/algebra-percentages'
    },
    {
      id: 'algebra-inequalities',
      title: 'אי-שוויונות',
      description: 'פתרון אי-שוויונות ליניאריים',
      path: '/lessons/algebra-inequalities'
    },
    {
      id: 'algebra-quadratic-equations',
      title: 'משוואות ריבועיות',
      description: 'פתרון משוואות ריבועיות בשיטות שונות',
      path: '/lessons/algebra-quadratic-equations'
    },
    {
      id: 'algebra-word-problems',
      title: 'בעיות מילוליות באלגברה',
      description: 'תרגום בעיות מילוליות למשוואות',
      path: '/lessons/algebra-word-problems'
    },
    {
      id: 'algebra-linear-equations-two-variables',
      title: 'משוואות ליניאריות בשני משתנים',
      description: 'מערכות משוואות ליניאריות',
      path: '/lessons/algebra-linear-equations-two-variables'
    },
    {
      id: 'analytic-geometry-distance',
      title: 'מרחק בין נקודות',
      description: 'חישוב מרחק בין נקודות במישור',
      path: '/lessons/analytic-geometry-distance'
    },
    {
      id: 'analytic-geometry-midpoint',
      title: 'נקודת אמצע',
      description: 'מציאת נקודת אמצע בין שתי נקודות',
      path: '/lessons/analytic-geometry-midpoint'
    },
    {
      id: 'analytic-geometry-points',
      title: 'נקודות במישור הקרטזי',
      description: 'מיקום וזיהוי נקודות במישור',
      path: '/lessons/analytic-geometry-points'
    },
    {
      id: 'analytic-geometry-slope',
      title: 'שיפוע ומשוואת ישר',
      description: 'חישוב שיפוע וכתיבת משוואת ישר',
      path: '/lessons/analytic-geometry-slope'
    },    {
      id: 'geometry-area-perimeter',
      title: 'שטח והיקף',
      description: 'חישוב שטח והיקף של צורות גיאומטריות',
      path: '/lessons/geometry-area-perimeter'
    },
    {
      id: 'geometry-shapes-properties',
      title: 'תכונות צורות גיאומטריות',
      description: 'תכונות מרובעים, משולשים ומעגלים',
      path: '/lessons/geometry-shapes-properties'
    },
    {
      id: 'statistics-intro',
      title: 'יסודות הסטטיסטיקה',
      description: 'ממוצע, חציון, שכיח ותפוצה',
      path: '/lessons/statistics-intro'
    },
    {
      id: 'probability-intro',
      title: 'יסודות ההסתברות',
      description: 'הסתברות פשוטה ומעשית',
      path: '/lessons/probability-intro'
    },
    {
      id: 'sequences-arithmetic-intro',
      title: 'סדרות חשבוניות - יסודות',
      description: 'הגדרה ותכונות של סדרות חשבוניות',
      path: '/lessons/sequences-arithmetic-intro'
    },
    {
      id: 'trigonometry-right-triangle',
      title: 'טריגונומטריה במשולש ישר זווית',
      description: 'פונקציות טריגונומטריות בסיסיות',
      path: '/lessons/trigonometry-right-triangle'    }
  ];

  // Update lesson statuses when component mounts and when localStorage changes
  useEffect(() => {
    const updateStatuses = () => {
      const statuses = {};
      const allLessonIds = lessons.map(lesson => lesson.id);
      
      lessons.forEach(lesson => {
        statuses[lesson.id] = getLessonStatus(lesson.id);
      });
      
      setLessonStatuses(statuses);
      setProgressStats(getProgressStats(allLessonIds));
    };

    updateStatuses();

    // Listen for storage changes (when user completes lessons in other tabs)
    const handleStorageChange = () => {
      updateStatuses();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for focus events to update when returning to this tab
    window.addEventListener('focus', updateStatuses);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', updateStatuses);
    };
  }, []);

  // Status indicator component
  const StatusIndicator = ({ status }) => {
    switch (status) {
      case 'completed':
        return (
          <div className="flex items-center text-green-600 font-semibold text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
            הושלם
          </div>
        );
      case 'started':
        return (
          <div className="flex items-center text-yellow-600 font-semibold text-sm">
            <span className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></span>
            החל
          </div>
        );
      default:
        return (
          <div className="flex items-center text-gray-500 text-sm">
            <span className="w-2 h-2 bg-gray-300 rounded-full ml-2"></span>
            לא החל
          </div>
        );
    }
  };

  // Progress summary component
  const ProgressSummary = () => {
    const completionPercentage = progressStats.total > 0 ? Math.round((progressStats.completed / progressStats.total) * 100) : 0;
    
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">סיכום התקדמות שאלון 35182</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{progressStats.total}</div>
            <div className="text-sm text-gray-600">סה״כ שיעורים</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{progressStats.completed}</div>
            <div className="text-sm text-gray-600">הושלמו</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">{progressStats.started}</div>
            <div className="text-sm text-gray-600">החלו</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-600">{progressStats.notStarted}</div>
            <div className="text-sm text-gray-600">לא החלו</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>התקדמות כללית</span>
            <span>{completionPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-blue-600">
            לומדים מתמטיקה לבגרות
          </Link>
          <div className="flex space-x-4">
            <Link 
              to="/progress" 
              className="text-gray-700 hover:text-blue-600 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
            >
              ההתקדמות שלי 📊
            </Link>
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
            >
              חזרה לעמוד הראשי
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">שאלון 35182 (801)</h1>
          <p className="text-xl mb-2">משקל: 25% מהציון הסופי</p>
          <p className="text-lg opacity-90">
            יסודות באלגברה, גיאומטריה בסיסית, אנליטית ראשונית, סדרות חשבוניות, טריגונומטריה (משולש ישר זווית), סטטיסטיקה והסתברות
          </p>
        </div>
      </header>      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Progress Summary */}
        <ProgressSummary />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => {
            const status = lessonStatuses[lesson.id] || 'not-started';
            const borderColor = status === 'completed' ? 'border-green-300' : 
                              status === 'started' ? 'border-yellow-300' : 'border-gray-200';
            const hoverBorderColor = status === 'completed' ? 'hover:border-green-400' : 
                                   status === 'started' ? 'hover:border-yellow-400' : 'hover:border-blue-300';
            
            return (
              <div key={lesson.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${borderColor} ${hoverBorderColor}`}>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-full ml-4">
                        <span className="text-lg font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{lesson.title}</h3>
                    </div>
                    <StatusIndicator status={status} />
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {lesson.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link 
                      to={lesson.path}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out"
                    >
                      {status === 'completed' ? 'צפה שוב' : status === 'started' ? 'המשך ללמוד' : 'התחל שיעור'}
                    </Link>
                    {status === 'completed' && (
                      <div className="text-green-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg"
          >
            חזרה לעמוד הראשי
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Questionnaire35182;
