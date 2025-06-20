import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLessonStatus, getProgressStats } from '../utils/progressUtils';

// MAHAT lesson sections organized by chapters
const mahatChapters = [
  {
    id: 'chapter-1',
    title: 'פרק 1: טכניקה אלגברית',
    description: '30 שעות לימוד',
    color: 'blue',
    icon: '🧮',
    lessons: [
      {
        id: 'mahat-1-1-basics',
        title: '1.1 יסודות החשבון',
        description: 'פעולות חשבון במספרים שלמים, שברים ועשרוניים. סדר פעולות ומספרים שליליים',
        url: '/lessons/mahat-1-1-basics'
      },
      {
        id: 'mahat-1-2-fractions',
        title: '1.2 שברים ושימוש במחשבון',
        description: 'צמצום והרחבת שברים, פעולות בשברים, שימוש במחשבון ועיגול',
        url: '/lessons/mahat-1-2-fractions'
      },
      {
        id: 'mahat-1-3-powers-basic',
        title: '1.3 חוקי חזקות ושורשים (בסיסי)',
        description: 'מבוא לחוקי חזקות ושורשים בסיסיים',
        url: '/lessons/mahat-1-3-powers-basic'
      },
      {
        id: 'mahat-1-4-algebraic-expressions',
        title: '1.4 ביטויים אלגבריים וכינוס איברים',
        description: 'מושג המשתנה, ביטוי אלגברי, פעולות בחד-איבר ורב-איבר',
        url: '/lessons/mahat-1-4-algebraic-expressions'
      },
      {
        id: 'mahat-1-5-multiplication-formulas',
        title: '1.5 נוסחאות הכפל המקוצר ופירוק לגורמים',
        description: 'נוסחאות הכפל המקוצר ופירוק לגורמים בשיטות שונות',
        url: '/lessons/mahat-1-5-multiplication-formulas'
      },
      {
        id: 'mahat-1-6-algebraic-fractions',
        title: '1.6 שברים אלגבריים',
        description: 'צמצום, הרחבה ופעולות בשברים אלגבריים',
        url: '/lessons/mahat-1-6-algebraic-fractions'
      }
    ]
  },
  {
    id: 'chapter-2',
    title: 'פרק 2: חזקות ושורשים',
    description: '25 שעות לימוד',
    color: 'green',
    icon: '√',
    lessons: [
      {
        id: 'mahat-2-1-advanced-powers',
        title: '2.1 חוקי חזקות מתקדמים',
        description: 'חזרה והרחבה על חוקי חזקות, שילוב אותיות ומספרים',
        url: '/lessons/mahat-2-1-advanced-powers'
      },
      {
        id: 'mahat-2-2-roots-rational',
        title: '2.2 שורשים וחזקות עם מעריך רציונלי',
        description: 'המעבר בין חזקה לשורש, פירוק שורשים ופעולות',
        url: '/lessons/mahat-2-2-roots-rational'
      },
      {
        id: 'mahat-2-3-scientific-notation',
        title: '2.3 כתיבה מדעית והמרת מידות',
        description: 'הצגה מדעית של מספרים, פעולות חשבון והמרת מידות',
        url: '/lessons/mahat-2-3-scientific-notation'
      }
    ]
  },
  {
    id: 'chapter-3',
    title: 'פרק 3: קריאת גרפים',
    description: '20 שעות לימוד',
    color: 'yellow',
    icon: '📊',
    lessons: [
      {
        id: 'mahat-3-1-graph-reading',
        title: '3.1 הבנת מידע מגרפים',
        description: 'קריאה וניתוח גרפים, זיהוי מגמות וערכי קיצון',
        url: '/lessons/mahat-3-1-graph-reading'
      }
    ]
  },
  {
    id: 'chapter-4',
    title: 'פרק 4: משוואות ומערכות משוואות',
    description: '25 שעות לימוד',
    color: 'purple',
    icon: '⚖️',
    lessons: [
      {
        id: 'mahat-4-1-linear-equations',
        title: '4.1 משוואות ממעלה ראשונה',
        description: 'פתרון משוואות עם נעלם אחד, סוגריים ושברים',
        url: '/lessons/mahat-4-1-linear-equations'
      },
      {
        id: 'mahat-4-2-linear-systems',
        title: '4.2 מערכת משוואות לינאריות',
        description: 'פתרון מערכת של שתי משוואות בשני נעלמים',
        url: '/lessons/mahat-4-2-linear-systems'
      },
      {
        id: 'mahat-4-3-quadratic-equations',
        title: '4.3 משוואות ריבועיות',
        description: 'פתרון משוואות ריבועיות באמצעות נוסחת השורשים',
        url: '/lessons/mahat-4-3-quadratic-equations'
      },
      {
        id: 'mahat-4-4-mixed-systems',
        title: '4.4 מערכת משוואות ריבועית ולינארית',
        description: 'פתרון מערכת של משוואה ריבועית ולינארית',
        url: '/lessons/mahat-4-4-mixed-systems'
      }
    ]
  },
  {
    id: 'chapter-5',
    title: 'פרק 5: שינוי נושא הנוסחה',
    description: '20 שעות לימוד',
    color: 'red',
    icon: '🔄',
    lessons: [
      {
        id: 'mahat-5-1-formula-subject',
        title: '5.1 בידוד משתנים',
        description: 'בידוד משתנה בנוסחאות מתחומים שונים והצבת ערכים',
        url: '/lessons/mahat-5-1-formula-subject'
      }
    ]
  },
  {
    id: 'chapter-6',
    title: 'פרק 6: מבוא להנדסה',
    description: '20 שעות לימוד',
    color: 'indigo',
    icon: '📐',
    lessons: [
      {
        id: 'mahat-6-1-plane-shapes',
        title: '6.1 צורות הנדסיות במישור',
        description: 'תכונות, היקפים ושטחים של צורות גיאומטריות שונות',
        url: '/lessons/mahat-6-1-plane-shapes'
      },
      {
        id: 'mahat-6-2-coordinate-geometry',
        title: '6.2 הנדסה במערכת צירים',
        description: 'סימון נקודות, חישוב אורכים ושטחים במערכת צירים',
        url: '/lessons/mahat-6-2-coordinate-geometry'
      }
    ]
  },
  {
    id: 'chapter-7',
    title: 'פרק 7: הנדסה אנליטית',
    description: '40 שעות לימוד',
    color: 'teal',
    icon: '📏',
    lessons: [
      {
        id: 'mahat-7-1-function-line',
        title: '7.1 מושג הפונקציה והקו הישר',
        description: 'הגדרת פונקציה, תיאור גרפי ואלגברי של קו ישר',
        url: '/lessons/mahat-7-1-function-line'
      },
      {
        id: 'mahat-7-2-slope-parallel',
        title: '7.2 שיפוע וישרים מקבילים/ניצבים',
        description: 'תכונות השיפוע, מציאת משוואת ישר, ישרים מקבילים וניצבים',
        url: '/lessons/mahat-7-2-slope-parallel'
      },
      {
        id: 'mahat-7-3-midpoint-distance',
        title: '7.3 אמצע קטע ומרחק בין נקודות',
        description: 'נוסחת אמצע קטע ונוסחת מרחק בין נקודות',
        url: '/lessons/mahat-7-3-midpoint-distance'
      },
      {
        id: 'mahat-7-4-implicit-function',
        title: '7.4 פונקציה סתומה ופתרון גרפי',
        description: 'מעבר מצורה סתומה למפורשת ופתרון גרפי',
        url: '/lessons/mahat-7-4-implicit-function'
      },
      {
        id: 'mahat-7-5-complex-geometry',
        title: '7.5 הנדסה אנליטית בצורות מורכבות',
        description: 'הוכחת תכונות של מרובעים ומשולשים במערכת צירים',
        url: '/lessons/mahat-7-5-complex-geometry'
      }
    ]
  },
  {
    id: 'chapter-8',
    title: 'פרק 8: פרבולות',
    description: '30 שעות לימוד',
    color: 'pink',
    icon: '📈',
    lessons: [
      {
        id: 'mahat-8-1-quadratic-intro',
        title: '8.1 מבוא לפונקציה הריבועית',
        description: 'גרף הפרבולה, הצגה סטנדרטית, קודקוד ונקודות חיתוך',
        url: '/lessons/mahat-8-1-quadratic-intro'
      },
      {
        id: 'mahat-8-2-parabola-analysis',
        title: '8.2 חקירת פרבולה',
        description: 'תחומי עלייה/ירידה, חיוביות/שליליות וערכי קיצון',
        url: '/lessons/mahat-8-2-parabola-analysis'
      },
      {
        id: 'mahat-8-3-line-parabola',
        title: '8.3 חיתוך בין ישר לפרבולה',
        description: 'פתרון אלגברי וגרפי של מערכת ישר ופרבולה',
        url: '/lessons/mahat-8-3-line-parabola'
      }
    ]
  },
  {
    id: 'chapter-9',
    title: 'פרק 9: שאלות מילוליות',
    description: '30 שעות לימוד',
    color: 'orange',
    icon: '📝',
    lessons: [
      {
        id: 'mahat-9-1-purchase-problems',
        title: '9.1 בעיות קנייה ומכירה',
        description: 'בניית משוואות לבעיות קנייה ומכירה, כולל אחוזים',
        url: '/lessons/mahat-9-1-purchase-problems'
      },
      {
        id: 'mahat-9-2-geometry-problems',
        title: '9.2 בעיות גיאומטריות',
        description: 'בניית משוואות מתוך נתונים על צורות הנדסיות',
        url: '/lessons/mahat-9-2-geometry-problems'
      }
    ]
  },
  {
    id: 'chapter-10',
    title: 'פרק 10: טריגונומטריה',
    description: '30 שעות לימוד',
    color: 'cyan',
    icon: '📐',
    lessons: [
      {
        id: 'mahat-10-1-trig-basics',
        title: '10.1 יסודות הטריגונומטריה',
        description: 'הכרת משולש ישר זווית והגדרת הפונקציות sin, cos, tan',
        url: '/lessons/mahat-10-1-trig-basics'
      },
      {
        id: 'mahat-10-2-trig-functions',
        title: '10.2 שימוש בפונקציות הטריגונומטריות',
        description: 'מציאת צלע או זווית חסרה במשולש ישר זווית',
        url: '/lessons/mahat-10-2-trig-functions'
      },
      {
        id: 'mahat-10-3-complex-shapes',
        title: '10.3 פתרון צורות מורכבות',
        description: 'שימוש בטריגונומטריה לפתרון צורות מורכבות',
        url: '/lessons/mahat-10-3-complex-shapes'
      }
    ]
  }
];

const MahatLessonMenu = () => {
  const [lessonStatuses, setLessonStatuses] = useState({});
  const [progressStats, setProgressStats] = useState({ total: 0, completed: 0, started: 0, notStarted: 0 });
  const [expandedChapters, setExpandedChapters] = useState({});

  // Update lesson statuses when component mounts
  useEffect(() => {
    const updateStatuses = () => {
      const statuses = {};
      const allLessonIds = [];
      
      mahatChapters.forEach(chapter => {
        chapter.lessons.forEach(lesson => {
          statuses[lesson.id] = getLessonStatus(lesson.id);
          allLessonIds.push(lesson.id);
        });
      });
      
      setLessonStatuses(statuses);
      setProgressStats(getProgressStats(allLessonIds));
    };

    updateStatuses();

    // Listen for storage changes
    const handleStorageChange = () => {
      updateStatuses();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('focus', updateStatuses);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', updateStatuses);
    };
  }, []);

  const toggleChapter = (chapterId) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  // Progress summary component
  const ProgressSummary = () => {
    const completionPercentage = progressStats.total > 0 ? Math.round((progressStats.completed / progressStats.total) * 100) : 0;
    
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">סיכום התקדמות - MAHAT</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{progressStats.total}</div>
            <div className="text-sm text-gray-600">סה״כ שיעורי MAHAT</div>
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
            <span>התקדמות MAHAT</span>
            <span>{completionPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  // Status indicator component
  const StatusIndicator = ({ status }) => {
    switch (status) {
      case 'completed':
        return (
          <div className="flex items-center text-green-600 font-semibold text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            הושלם
          </div>
        );
      case 'started':
        return (
          <div className="flex items-center text-yellow-600 font-semibold text-sm">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            החל
          </div>
        );
      default:
        return (
          <div className="flex items-center text-gray-500 text-sm">
            <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
            לא החל
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mb-4">
            MAHAT - מכינה טכנולוגית
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            קורס מקיף להכנה טכנולוגית במתמטיקה
          </p>
          <p className="text-md text-gray-500 mb-4">
            10 פרקים מובנים המכסים את כל הנושאים הנדרשים במכינה טכנולוגית
          </p>
          <div className="mb-4 flex gap-4 justify-center">
            <Link 
              to="/progress" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-150 ease-in-out inline-flex items-center"
            >
              <span className="mr-2">📊</span>
              לוח התקדמות MAHAT
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

        {/* Progress Summary */}
        <ProgressSummary />

        <main className="max-w-6xl mx-auto">
          {mahatChapters.map((chapter) => {
            const isExpanded = expandedChapters[chapter.id];
            const chapterLessons = chapter.lessons || [];
            const completedInChapter = chapterLessons.filter(lesson => lessonStatuses[lesson.id] === 'completed').length;
            const totalInChapter = chapterLessons.length;
            
            return (
              <div key={chapter.id} className="mb-8">
                {/* Chapter Header */}
                <div 
                  className={`bg-white rounded-lg shadow-md p-6 cursor-pointer border-l-4 border-${chapter.color}-500 hover:shadow-lg transition-all duration-200`}
                  onClick={() => toggleChapter(chapter.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">{chapter.icon}</div>
                      <div>
                        <h2 className={`text-xl font-bold text-${chapter.color}-700 mb-1`}>
                          {chapter.title}
                        </h2>
                        <p className="text-gray-600 text-sm">{chapter.description}</p>
                        <div className="flex items-center mt-2">
                          <div className="text-sm text-gray-500">
                            {completedInChapter}/{totalInChapter} שיעורים הושלמו
                          </div>
                          <div className="w-16 h-2 bg-gray-200 rounded-full mr-3">
                            <div 
                              className={`h-2 bg-${chapter.color}-500 rounded-full transition-all duration-300`}
                              style={{ width: `${totalInChapter > 0 ? (completedInChapter / totalInChapter) * 100 : 0}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-500">
                      {isExpanded ? '▼' : '▶'}
                    </div>
                  </div>
                </div>

                {/* Chapter Lessons */}
                {isExpanded && (
                  <div className="mt-4 mr-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {chapterLessons.map((lesson) => {
                        const status = lessonStatuses[lesson.id] || 'not-started';
                        const borderColor = status === 'completed' ? `border-${chapter.color}-300` : 
                                          status === 'started' ? 'border-yellow-300' : 'border-gray-200';
                        const hoverBorderColor = status === 'completed' ? `hover:border-${chapter.color}-400` : 
                                               status === 'started' ? 'hover:border-yellow-400' : `hover:border-${chapter.color}-300`;
                        
                        return (
                          <Link
                            key={lesson.id}
                            to={lesson.url}
                            className={`block p-4 bg-white rounded-lg shadow-sm border-2 ${borderColor} ${hoverBorderColor} transition-all duration-200 hover:shadow-md`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-md font-semibold flex-1 leading-tight">
                                {lesson.title}
                              </h3>
                              <StatusIndicator status={status} />
                            </div>
                            <p className="text-gray-600 text-xs leading-relaxed mb-3">
                              {lesson.description}
                            </p>
                            <div className="flex justify-between items-center">
                              <div className={`inline-flex items-center text-xs font-medium text-${chapter.color}-600`}>
                                {status === 'completed' ? 'צפה שוב' : status === 'started' ? 'המשך ללמוד' : 'התחל ללמוד'}
                                <svg className="mr-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                              {status === 'completed' && (
                                <div className="text-green-600">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </main>

        <footer className="text-center mt-12 py-8 text-gray-500">
          <p>© 2025 פלטפורמת למידה במתמטיקה - MAHAT. כל הזכויות שמורות.</p>
          <p className="mt-2 text-sm">
            {mahatChapters.reduce((total, chapter) => total + chapter.lessons.length, 0)} שיעורי MAHAT זמינים ב-10 פרקים
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MahatLessonMenu;
