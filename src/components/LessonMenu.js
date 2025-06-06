import React from 'react';
import { Link } from 'react-router-dom';

const LessonMenu = () => {
  const lessonSections = [
    {
      title: 'גיאומטריה',
      color: 'blue',
      lessons: [
        {
          id: 'geometry-shapes',
          title: 'תכונות גיאומטריות של משולשים ומרובעים',
          description: 'לימוד תכונות משולשים, מקבילית, מלבן, מעוין וטרפז',
          url: '/lesson/geometry-shapes'
        }
      ]
    },
    {
      title: 'גיאומטריה אנליטית',
      color: 'purple',
      lessons: [
        {
          id: 'analytic-geometry-circle',
          title: 'המעגל בגיאומטריה אנליטית',
          description: 'משוואות מעגל, מרכז ורדיוס',
          url: '/lesson/analytic-geometry-circle'
        },
        {
          id: 'analytic-geometry-circle-tangent',
          title: 'משיק למעגל',
          description: 'מציאת משוואת המשיק למעגל בנקודה נתונה',
          url: '/lesson/analytic-geometry-circle-tangent'
        },
        {
          id: 'analytic-geometry-circle-line-intersection',
          title: 'חיתוך של מעגל וישר',
          description: 'מציאת נקודות חיתוך בין מעגל לישר',
          url: '/lesson/analytic-geometry-circle-line-intersection'
        },
        {
          id: 'analytic-geometry-line-continued',
          title: 'הישר בגיאומטריה אנליטית - המשך',
          description: 'נושאים מתקדמים בלימוד הישר',
          url: '/lesson/analytic-geometry-line-continued'
        }
      ]
    },
    {
      title: 'בעיות מילוליות',
      color: 'green',
      lessons: [
        {
          id: 'problems-work-rate',
          title: 'בעיות הספק',
          description: 'פתרון בעיות עבודה והספק',
          url: '/lesson/problems-work-rate'
        },
        {
          id: 'problems-motion',
          title: 'בעיות תנועה',
          description: 'פתרון בעיות מהירות, זמן ומרחק',
          url: '/lesson/problems-motion'
        },
        {
          id: 'problems-geometric-algebraic',
          title: 'בעיות גיאומטריות-אלגבריות',
          description: 'פתרון בעיות משולבות גיאומטריה ואלגברה',
          url: '/lesson/problems-geometric-algebraic'
        },
        {
          id: 'problems-buy-sell',
          title: 'בעיות קנייה ומכירה',
          description: 'פתרון בעיות רווח והפסד במסחר',
          url: '/lesson/problems-buy-sell'
        }
      ]
    },
    {
      title: 'חשבון אינפיניטסימלי',
      color: 'red',
      lessons: [
        {
          id: 'calculus-square-root',
          title: 'נגזרות ופונקציות שורש',
          description: 'חשבון נגזרות של פונקציות שורש',
          url: '/lesson/calculus-square-root'
        },
        {
          id: 'calculus-optimization',
          title: 'בעיות אופטימיזציה',
          description: 'מציאת מקסימום ומינימום באמצעות נגזרות',
          url: '/lesson/calculus-optimization'
        },
        {
          id: 'calculus-rational',
          title: 'נגזרות של פונקציות רציונליות',
          description: 'חשבון נגזרות של פונקציות רציונליות',
          url: '/lesson/calculus-rational'
        },
        {
          id: 'calculus-polynomial',
          title: 'נגזרות של פולינומים',
          description: 'חשבון נגזרות של פונקציות פולינומיות',
          url: '/lesson/calculus-polynomial'
        },
        {
          id: 'calculus-integral-polynomial',
          title: 'אינטגרלים של פולינומים',
          description: 'חשבון אינטגרלים של פונקציות פולינומיות',
          url: '/lesson/calculus-integral-polynomial'
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 md:p-8">        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            פלטפורמת למידה במתמטיקה
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            שאלון 35382 - מתמטיקה ברמה גבוהה
          </p>
          <p className="text-md text-gray-500 mb-4">
            בחר שיעור ללימוד מהרשימה למטה
          </p>
          <div className="mb-4">
            <Link 
              to="/progress" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-150 ease-in-out inline-flex items-center"
            >
              <span className="mr-2">📊</span>
              לוח התקדמות אישי
            </Link>
          </div>
        </header>

        <main className="max-w-6xl mx-auto">
          {lessonSections.map((section) => (
            <div key={section.title} className="mb-10">
              <h2 className={`text-2xl font-bold mb-6 text-${section.color}-700 border-b-2 pb-2`}>
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={lesson.url}
                    className="block p-6 bg-white rounded-lg shadow-md border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-semibold mb-3">
                      {lesson.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {lesson.description}
                    </p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                      התחל ללמוד
                      <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </main>

        <footer className="text-center mt-12 py-8 text-gray-500">
          <p>© 2025 פלטפורמת למידה במתמטיקה. כל הזכויות שמורות.</p>
          <p className="mt-2 text-sm">
            {lessonSections.reduce((total, section) => total + section.lessons.length, 0)} שיעורים זמינים
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LessonMenu;
