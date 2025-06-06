import React from 'react';
import { Link } from 'react-router-dom';

const Questionnaire35381 = () => {
  const lessons = [
    {
      id: 'functions-parabola-investigation',
      title: 'חקירת פונקציות פרבולה',
      description: 'תכונות פרבולות, קודקוד, צירי סימטריה',
      path: '/lessons/functions-parabola-investigation'
    },
    {
      id: 'sequences-arithmetic-sum',
      title: 'סדרות חשבוניות - סכום',
      description: 'חישוב סכום של סדרות חשבוניות',
      path: '/lessons/sequences-arithmetic-sum'
    },
    {
      id: 'growth-decay',
      title: 'גדילה ודעיכה',
      description: 'מודלים מתמטיים לגדילה ודעיכה',
      path: '/lessons/growth-decay'
    },
    {
      id: 'statistics-dispersion',
      title: 'סטטיסטיקה - פיזור',
      description: 'סטיית תקן, שונות ומדדי פיזור',
      path: '/lessons/statistics-dispersion'
    },
    {
      id: 'probability-tree-conditional',
      title: 'הסתברות מותנית ודיאגרמת עץ',
      description: 'הסתברות מותנית וחישובים מורכבים',
      path: '/lessons/probability-tree-conditional'
    },
    {
      id: 'normal-distribution',
      title: 'התפלגות נורמלית',
      description: 'התפלגות נורמלית וחישובי הסתברות',
      path: '/lessons/normal-distribution'
    },
    {
      id: 'trigonometry-plane',
      title: 'טריגונומטריה במישור',
      description: 'טריגונומטריה מעבר למשולש ישר זווית',
      path: '/lessons/trigonometry-plane'
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-green-600">
            לומדים מתמטיקה לבגרות
          </Link>
          <div className="flex space-x-4">
            <Link 
              to="/progress" 
              className="text-gray-700 hover:text-green-600 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
            >
              ההתקדמות שלי 📊
            </Link>
            <Link 
              to="/" 
              className="text-gray-700 hover:text-green-600 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
            >
              חזרה לעמוד הראשי
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">שאלון 35381 (802)</h1>
          <p className="text-xl mb-2">משקל: 35% מהציון הסופי</p>
          <p className="text-lg opacity-90">
            פונקציות (כולל פרבולה), סדרות חשבוניות (מורחב), גדילה ודעיכה, סטטיסטיקה (כולל סטיית תקן), הסתברות (דיאגרמת עץ), התפלגות נורמלית, טריגונומטריה במישור
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
                  <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{lesson.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {lesson.description}
                </p>
                <Link 
                  to={lesson.path}
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out w-full text-center"
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

export default Questionnaire35381;
