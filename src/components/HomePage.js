import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Notification Box */}
      <div id="notification-box" className="fixed top-5 right-5 text-white p-4 rounded-lg shadow-xl hidden z-50 max-w-sm text-right">
        הודעה תוצג כאן
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-blue-600">
            לומדים מתמטיקה לבגרות
          </Link>
          <div>
            <Link 
              to="/progress" 
              className="text-gray-700 hover:text-blue-600 px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
            >
              ההתקדמות שלי 📊
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section text-white py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ברוכים הבאים לפלטפורמת הלמידה!
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            הכנה מקיפה לבחינת הבגרות במתמטיקה 3 יחידות לימוד (תשפ"ה).
          </p>
          <Link 
            to="/questionnaire/35182" 
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg inline-block"
          >
            התחל ללמוד 👇
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main id="questionnaires" className="container mx-auto p-4 sm:p-6 md:p-8">
        <section aria-labelledby="questionnaires-heading" className="py-8 sm:py-12">
          <h2 id="questionnaires-heading" className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-10">
            בחרו שאלון להתחיל:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Questionnaire 35182 (801) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M12 10v-3m0 0h0M5.05 16.05L5 16.001M5 8h.01M19 8h.01M19 16.05l-.05.049M12 2a10 10 0 110 20 10 10 0 010-20z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-700">שאלון 35182 (801)</h3>
                </div>
                <p className="text-gray-600 mb-1">משקל: 25% מהציון הסופי.</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  יסודות באלגברה, גיאומטריה בסיסית, אנליטית ראשונית, סדרות חשבוניות, טריגונומטריה (משולש ישר זווית), סטטיסטיקה והסתברות.
                </p>
                <Link 
                  to="/questionnaire/35182" 
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-md transition duration-150 ease-in-out w-full text-center"
                >
                  מעבר לשאלון 35182
                </Link>
              </div>
            </div>

            {/* Questionnaire 35381 (802) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-green-700">שאלון 35381 (802)</h3>
                </div>
                <p className="text-gray-600 mb-1">משקל: 35% מהציון הסופי.</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  פונקציות (כולל פרבולה), סדרות חשבוניות (מורחב), גדילה ודעיכה, סטטיסטיקה (כולל סטיית תקן), הסתברות (דיאגרמת עץ), התפלגות נורמלית, טריגונומטריה במישור.
                </p>
                <Link 
                  to="/questionnaire/35381" 
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-md transition duration-150 ease-in-out w-full text-center"
                >
                  מעבר לשאלון 35381
                </Link>
              </div>
            </div>

            {/* Questionnaire 35382 (803) */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-full mr-4 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-purple-700">שאלון 35382 (803)</h3>
                </div>
                <p className="text-gray-600 mb-1">משקל: 40% מהציון הסופי.</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  בעיות מילוליות מורכבות, גיאומטריה אנליטית (כולל מעגל), חשבון דיפרנציאלי ואינטגרלי (פולינום, רציונלית, שורש).
                </p>
                <Link 
                  to="/questionnaire/35382" 
                  className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-5 rounded-md transition duration-150 ease-in-out w-full text-center"
                >
                  מעבר לשאלון 35382
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Dashboard Section */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">בדקו את ההתקדמות שלכם!</h2>
          <Link 
            to="/progress" 
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-150 ease-in-out shadow-md hover:shadow-lg"
          >
            לדף ההתקדמות שלי
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
