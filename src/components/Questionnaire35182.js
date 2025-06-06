import React from 'react';
import { Link } from 'react-router-dom';

const Questionnaire35182 = () => {
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
    },
    {
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
      path: '/lessons/trigonometry-right-triangle'
    }
  ];

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
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <div key={lesson.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{lesson.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {lesson.description}
                </p>
                <Link 
                  to={lesson.path}
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out w-full text-center"
                >
                  התחל שיעור
                </Link>
              </div>
            </div>
          ))}
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
