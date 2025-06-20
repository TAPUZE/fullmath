import React from 'react';
import { Link } from 'react-router-dom';
import NavigationHeader from './NavigationHeader';

const HomePage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Notification Box */}
      <div id="notification-box" className="fixed top-5 right-5 text-white p-4 rounded-lg shadow-xl hidden z-50 max-w-sm text-right">
        הודעה תוצג כאן
      </div>

      {/* Navigation Header */}
      <NavigationHeader />

      {/* Hero Section */}
      <header className="hero-section text-white py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            פלטפורמת הלמידה המקיפה במתמטיקה
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            בחרו את המסלול המתאים לכם: הכנה לבגרות או מכינה טכנולוגית
          </p>
          <div className="text-lg font-semibold">
            👆 בחרו אחת מהאפשרויות למטה
          </div>
        </div>
      </header>

      {/* Main Content - Two Main Paths */}
      <main className="container mx-auto p-4 sm:p-6 md:p-8">
        
        {/* Main Path Selection */}
        <section className="py-8 sm:py-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
            בחרו את המסלול שלכם
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Bagrut Path */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-full inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-blue-700 mb-3">בגרות במתמטיקה</h3>
                  <p className="text-blue-600 font-medium mb-4">3 יחידות לימוד - תשפ"ה</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="bg-white bg-opacity-70 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">מה כלול?</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• שאלון 35182 (801) - 25% מהציון</li>
                      <li>• שאלון 35381 (802) - 35% מהציון</li>
                      <li>• שאלון 35382 (803) - 40% מהציון</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white bg-opacity-70 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">נושאים מרכזיים:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <span className="bg-blue-100 px-2 py-1 rounded">אלגברה</span>
                      <span className="bg-blue-100 px-2 py-1 rounded">גיאומטריה</span>
                      <span className="bg-blue-100 px-2 py-1 rounded">פונקציות</span>
                      <span className="bg-blue-100 px-2 py-1 rounded">חשבון דיפרנציאלי</span>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/bagrut-menu" 
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl text-center text-lg transition duration-200 shadow-lg hover:shadow-xl"
                >
                  כניסה למסלול בגרות 📚
                </Link>
              </div>
            </div>

            {/* MAHAT Path */}
            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl shadow-xl overflow-hidden border-2 border-orange-200 transform hover:scale-105 transition-all duration-300">
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-orange-100 text-orange-600 p-4 rounded-full inline-block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-orange-700 mb-3">מכינה טכנולוגית</h3>
                  <p className="text-orange-600 font-medium mb-4">MAHAT - הכנה מקיפה</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="bg-white bg-opacity-70 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">מה כלול?</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 30 שיעורים מובנים</li>
                      <li>• 10 פרקים מקיפים</li>
                      <li>• תרגילים ובחנים אינטראקטיביים</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white bg-opacity-70 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">נושאים מרכזיים:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <span className="bg-orange-100 px-2 py-1 rounded">טכניקה אלגברית</span>
                      <span className="bg-orange-100 px-2 py-1 rounded">הנדסה אנליטית</span>
                      <span className="bg-orange-100 px-2 py-1 rounded">פרבולות</span>
                      <span className="bg-orange-100 px-2 py-1 rounded">טריגונומטריה</span>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/mahat-menu" 
                  className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-xl text-center text-lg transition duration-200 shadow-lg hover:shadow-xl"
                >
                  כניסה למסלול מהט 🔧
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Tools Section */}
        <section className="py-12 bg-gray-50 rounded-2xl">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">כלים נוספים</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Progress Dashboard */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-teal-100 text-teal-600 p-3 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">דף ההתקדמות</h3>
              <p className="text-gray-600 mb-4">עקבו אחר ההתקדמות שלכם בלמידה</p>
              <Link 
                to="/progress" 
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-150"
              >
                צפייה בהתקדמות
              </Link>
            </div>

            {/* Teachers Portal */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">פורטל מורים</h3>
              <p className="text-gray-600 mb-4">ניהול כיתות ומעקב אחר תלמידים</p>
              <Link 
                to="/teachers" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-150"
              >
                כניסה לפורטל
              </Link>
            </div>
          </div>
        </section>      </main>    </div>
  );
};

export default HomePage;
